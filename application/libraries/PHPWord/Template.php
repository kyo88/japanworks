<?php

/**
 * PHPWord
 *
 * Copyright (c) 2011 PHPWord
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * @category   PHPWord
 * @package    PHPWord
 * @copyright  Copyright (c) 010 PHPWord
 * @license    http://www.gnu.org/licenses/old-licenses/lgpl-2.1.txt    LGPL
 * @version    Beta 0.6.3, 08.07.2011
 */

/**
 * PHPWord_DocumentProperties
 *
 * @category   PHPWord
 * @package    PHPWord
 * @copyright  Copyright (c) 2009 - 2011 PHPWord (http://www.codeplex.com/PHPWord)
 */
class PHPWord_Template {

    /**
     * ZipArchive
     *
     * @var ZipArchive
     */
    private $_objZip;

    /**
     * Temporary Filename
     *
     * @var string
     */
    private $_tempFileName;

    /**
     * Document XML
     *
     * @var string
     */
    private $_documentXML;

    /**
     * Create a new Template Object
     *
     * @param string $strFilename
     */
    public function __construct($strFilename) {
        $path = dirname($strFilename);

        $this->_tempFileName = $path . DIRECTORY_SEPARATOR . time() . '.docx';

        copy($strFilename, $this->_tempFileName); // Copy the source File to the temp File

        $this->_objZip = new ZipArchive();
        $this->_objZip->open($this->_tempFileName);

        $this->_documentXML = $this->_objZip->getFromName('word/document.xml');
    }

    public function addTextBreak($count = 1) {
        for ($i = 1; $i <= $count; $i++) {
            $this->_elementCollection[] = new PHPWord_Section_TextBreak();
        }
    }

    /**
     * Set a Template value
     *
     * @param mixed $search
     * @param mixed $replace
     */
    public function setValue($search, $replace) {

        // $replace = str_replace("\n", "<w:br/>", $replace);
        $pattern = '|\{([^\}]+)\}|U'; //if you need the $, use: '|\$\{([^\}]+)\}|U''
        preg_match_all($pattern, $this->_documentXML, $matches);
        $openedTagPattern = '/<[^>]+>/';
        $closedTagPattern = '/<\/[^>]+>/';
        foreach ($matches[0] as $value) {
            $modificado = preg_replace($openedTagPattern, '', $value);
            $modificado = preg_replace($closedTagPattern, '', $modificado);
            $this->_documentXML = str_replace($value, $modificado, $this->_documentXML);
        }

        if (substr($search, 0, 1) !== '{' && substr($search, -1) !== '}') { //change to: substr($search, 0, 2) !== '${' if you need the $ character
            $search = '{' . $search . '}'; //change to '${'.$search.'}' if $ needed
        }

        if (!is_array($replace)) {
            $replace = utf8_encode($replace);
        }

        $this->_documentXML = str_replace($search, $replace, $this->_documentXML);
    }

    public function save_image($id, $filepath, &$document = null) {
        if (file_exists($filepath)) {

            //  echo $filepath;
            // var_dump($this->_objZip);
            $this->_objZip->deleteName('word/media/' . $id);

            //   var_dump($this->_objZip);
            $this->_objZip->addFile($filepath, 'word/media/' . $id);

            //$document->setValue($id.'::width', "300px");
            //$document->setValue($id.'::height', "300px");
        }
    }

    /**
     * Save Template
     *
     * @param string $strFilename
     */
    public function save($strFilename) {



        if (file_exists($strFilename)) {
            chmod($strFilename, 0777);
            unlink($strFilename);
        }
        $this->_objZip->addFromString('word/document.xml', $this->_documentXML);

        // Close zip file
        if ($this->_objZip->close() === false) {
            throw new Exception('Could not close zip file.');
        }

        rename($this->_tempFileName, $strFilename);
    }

    /**
     * Clone a table row
     *
     * @param mixed $search
     * @param mixed $numberOfClones
     */
    public function cloneRow($search, $numberOfClones) {
        if (substr($search, 0, 2) !== '${' && substr($search, -1) !== '}') {
            $search = '${' . $search . '}';
        }

        $tagPos = strpos($this->_documentXML, $search);
        $rowStartPos = strrpos($this->_documentXML, "<w:tr ", ((strlen($this->_documentXML) - $tagPos) * -1));
        $rowEndPos = strpos($this->_documentXML, "</w:tr>", $tagPos) + 7;

        $result = substr($this->_documentXML, 0, $rowStartPos);
        $xmlRow = substr($this->_documentXML, $rowStartPos, ($rowEndPos - $rowStartPos));
        for ($i = 1; $i <= $numberOfClones; $i++) {
            $result .= preg_replace('/\$\{(.*?)\}/', '\${\\1#' . $i . '}', $xmlRow);
        }
        $result .= substr($this->_documentXML, $rowEndPos);

        $this->_documentXML = $result;
    }

    public function cloneRows($search, $numberOfClones) {
        if (substr($search, 0, 2) !== '${' && substr($search, -1) !== '}') {
            $search = '${' . $search . '}';
        }

        $tagPos = strpos($this->temporaryDocumentMainPart, $search);
        if (!$tagPos) {
            throw new Exception("Can not clone row, template variable not found or variable contains markup.");
        }

        $rowStart = $this->findRowStart($tagPos);
        $rowEnd = $this->findRowEnd($tagPos);
        $xmlRow = $this->getSlice($rowStart, $rowEnd);

        // Check if there's a cell spanning multiple rows.
        if (preg_match('#<w:vMerge w:val="restart"/>#', $xmlRow)) {
            // $extraRowStart = $rowEnd;
            $extraRowEnd = $rowEnd;
            while (true) {
                $extraRowStart = $this->findRowStart($extraRowEnd + 1);
                $extraRowEnd = $this->findRowEnd($extraRowEnd + 1);

                // If extraRowEnd is lower then 7, there was no next row found.
                if ($extraRowEnd < 7) {
                    break;
                }

                // If tmpXmlRow doesn't contain continue, this row is no longer part of the spanned row.
                $tmpXmlRow = $this->getSlice($extraRowStart, $extraRowEnd);
                if (!preg_match('#<w:vMerge/>#', $tmpXmlRow) &&
                        !preg_match('#<w:vMerge w:val="continue" />#', $tmpXmlRow)) {
                    break;
                }
                // This row was a spanned row, update $rowEnd and search for the next row.
                $rowEnd = $extraRowEnd;
            }
            $xmlRow = $this->getSlice($rowStart, $rowEnd);
        }

        $result = $this->getSlice(0, $rowStart);
        for ($i = 1; $i <= $numberOfClones; $i++) {
            $result .= preg_replace('/\$\{(.*?)\}/', '\${\\1#' . $i . '}', $xmlRow);
        }
        $result .= $this->getSlice($rowEnd);

        $this->temporaryDocumentMainPart = $result;
    }

}

?>