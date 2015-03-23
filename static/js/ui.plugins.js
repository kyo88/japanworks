/*! jQuery UI - v1.10.4 - 2014-03-13
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.autocomplete.js, jquery.ui.datepicker.js, jquery.ui.menu.js, jquery.ui.slider.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function (e, t) {
    function i(t, i) {
        var s, a, o, r = t.nodeName.toLowerCase();
        return"area" === r ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
    }

    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
            return"hidden" === e.css(this, "visibility")
        }).length
    }

    var s = 0, a = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {version: "1.10.4", keyCode: {BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38}}), e.fn.extend({focus: function (t) {
        return function (i, n) {
            return"number" == typeof i ? this.each(function () {
                var t = this;
                setTimeout(function () {
                    e(t).focus(), n && n.call(t)
                }, i)
            }) : t.apply(this, arguments)
        }
    }(e.fn.focus), scrollParent: function () {
        var t;
        return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
            return/(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
        }).eq(0) : this.parents().filter(function () {
            return/(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
        }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
    }, zIndex: function (i) {
        if (i !== t)return this.css("zIndex", i);
        if (this.length)for (var n, s, a = e(this[0]); a.length && a[0] !== document;) {
            if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s))return s;
            a = a.parent()
        }
        return 0
    }, uniqueId: function () {
        return this.each(function () {
            this.id || (this.id = "ui-id-" + ++s)
        })
    }, removeUniqueId: function () {
        return this.each(function () {
            a.test(this.id) && e(this).removeAttr("id")
        })
    }}), e.extend(e.expr[":"], {data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
        return function (i) {
            return!!e.data(i, t)
        }
    }) : function (t, i, n) {
        return!!e.data(t, n[3])
    }, focusable: function (t) {
        return i(t, !isNaN(e.attr(t, "tabindex")))
    }, tabbable: function (t) {
        var n = e.attr(t, "tabindex"), s = isNaN(n);
        return(s || n >= 0) && i(t, !s)
    }}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, n) {
        function s(t, i, n, s) {
            return e.each(a, function () {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }

        var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"], o = n.toLowerCase(), r = {innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight};
        e.fn["inner" + n] = function (i) {
            return i === t ? r["inner" + n].call(this) : this.each(function () {
                e(this).css(o, s(this, i) + "px")
            })
        }, e.fn["outer" + n] = function (t, i) {
            return"number" != typeof t ? r["outer" + n].call(this, t) : this.each(function () {
                e(this).css(o, s(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart"in document.createElement("div"), e.fn.extend({disableSelection: function () {
        return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
            e.preventDefault()
        })
    }, enableSelection: function () {
        return this.unbind(".ui-disableSelection")
    }}), e.extend(e.ui, {plugin: {add: function (t, i, n) {
        var s, a = e.ui[t].prototype;
        for (s in n)a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
    }, call: function (e, t, i) {
        var n, s = e.plugins[t];
        if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)for (n = 0; s.length > n; n++)e.options[s[n][0]] && s[n][1].apply(e.element, i)
    }}, hasScroll: function (t, i) {
        if ("hidden" === e(t).css("overflow"))return!1;
        var n = i && "left" === i ? "scrollLeft" : "scrollTop", s = !1;
        return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
    }})
})(jQuery);
(function (t, e) {
    var i = 0, s = Array.prototype.slice, n = t.cleanData;
    t.cleanData = function (e) {
        for (var i, s = 0; null != (i = e[s]); s++)try {
            t(i).triggerHandler("remove")
        } catch (o) {
        }
        n(e)
    }, t.widget = function (i, s, n) {
        var o, a, r, h, l = {}, c = i.split(".")[0];
        i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function (e) {
            return!!t.data(e, o)
        }, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function (t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
        }, t.extend(r, a, {version: n.version, _proto: t.extend({}, n), _childConstructors: []}), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function (i, n) {
            return t.isFunction(n) ? (l[i] = function () {
                var t = function () {
                    return s.prototype[i].apply(this, arguments)
                }, e = function (t) {
                    return s.prototype[i].apply(this, t)
                };
                return function () {
                    var i, s = this._super, o = this._superApply;
                    return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i
                }
            }(), e) : (l[i] = n, e)
        }), r.prototype = t.widget.extend(h, {widgetEventPrefix: a ? h.widgetEventPrefix || i : i}, l, {constructor: r, namespace: c, widgetName: i, widgetFullName: o}), a ? (t.each(a._childConstructors, function (e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r)
    }, t.widget.extend = function (i) {
        for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)for (n in a[r])o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
        return i
    }, t.widget.bridge = function (i, n) {
        var o = n.prototype.widgetFullName || i;
        t.fn[i] = function (a) {
            var r = "string" == typeof a, h = s.call(arguments, 1), l = this;
            return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function () {
                var s, n = t.data(this, o);
                return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : this.each(function () {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
            }), l
        }
    }, t.Widget = function () {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: !1, create: null}, _createWidget: function (e, s) {
        s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {remove: function (t) {
            t.target === s && this.destroy()
        }}), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    }, _getCreateOptions: t.noop, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function () {
        this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    }, _destroy: t.noop, widget: function () {
        return this.element
    }, option: function (i, s) {
        var n, o, a, r = i;
        if (0 === arguments.length)return t.widget.extend({}, this.options);
        if ("string" == typeof i)if (r = {}, n = i.split("."), i = n.shift(), n.length) {
            for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++)o[n[a]] = o[n[a]] || {}, o = o[n[a]];
            if (i = n.pop(), 1 === arguments.length)return o[i] === e ? null : o[i];
            o[i] = s
        } else {
            if (1 === arguments.length)return this.options[i] === e ? null : this.options[i];
            r[i] = s
        }
        return this._setOptions(r), this
    }, _setOptions: function (t) {
        var e;
        for (e in t)this._setOption(e, t[e]);
        return this
    }, _setOption: function (t, e) {
        return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
    }, enable: function () {
        return this._setOption("disabled", !1)
    }, disable: function () {
        return this._setOption("disabled", !0)
    }, _on: function (i, s, n) {
        var o, a = this;
        "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function (n, r) {
            function h() {
                return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
            }

            "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
            var l = n.match(/^(\w+)\s*(.*)$/), c = l[1] + a.eventNamespace, u = l[2];
            u ? o.delegate(u, c, h) : s.bind(c, h)
        })
    }, _off: function (t, e) {
        e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
    }, _delay: function (t, e) {
        function i() {
            return("string" == typeof t ? s[t] : t).apply(s, arguments)
        }

        var s = this;
        return setTimeout(i, e || 0)
    }, _hoverable: function (e) {
        this.hoverable = this.hoverable.add(e), this._on(e, {mouseenter: function (e) {
            t(e.currentTarget).addClass("ui-state-hover")
        }, mouseleave: function (e) {
            t(e.currentTarget).removeClass("ui-state-hover")
        }})
    }, _focusable: function (e) {
        this.focusable = this.focusable.add(e), this._on(e, {focusin: function (e) {
            t(e.currentTarget).addClass("ui-state-focus")
        }, focusout: function (e) {
            t(e.currentTarget).removeClass("ui-state-focus")
        }})
    }, _trigger: function (e, i, s) {
        var n, o, a = this.options[e];
        if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)for (n in o)n in i || (i[n] = o[n]);
        return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
    }}, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, i) {
        t.Widget.prototype["_" + e] = function (s, n, o) {
            "string" == typeof n && (n = {effect: n});
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {duration: n}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i()
            })
        }
    })
})(jQuery);
(function (t) {
    var e = !1;
    t(document).mouseup(function () {
        e = !1
    }), t.widget("ui.mouse", {version: "1.10.4", options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0}, _mouseInit: function () {
        var e = this;
        this.element.bind("mousedown." + this.widgetName,function (t) {
            return e._mouseDown(t)
        }).bind("click." + this.widgetName, function (i) {
            return!0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
        }), this.started = !1
    }, _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    }, _mouseDown: function (i) {
        if (!e) {
            this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
            var s = this, n = 1 === i.which, a = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
            return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                s.mouseDelayMet = !0
            }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                return s._mouseMove(t)
            }, this._mouseUpDelegate = function (t) {
                return s._mouseUp(t)
            }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
        }
    }, _mouseMove: function (e) {
        return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
    }, _mouseUp: function (e) {
        return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
    }, _mouseDistanceMet: function (t) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
    }, _mouseDelayMet: function () {
        return this.mouseDelayMet
    }, _mouseStart: function () {
    }, _mouseDrag: function () {
    }, _mouseStop: function () {
    }, _mouseCapture: function () {
        return!0
    }})
})(jQuery);
(function (t, e) {
    function i(t, e, i) {
        return[parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }

    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {width: e.width(), height: e.height(), offset: {top: 0, left: 0}} : t.isWindow(i) ? {width: e.width(), height: e.height(), offset: {top: e.scrollTop(), left: e.scrollLeft()}} : i.preventDefault ? {width: 0, height: 0, offset: {top: i.pageY, left: i.pageX}} : {width: e.outerWidth(), height: e.outerHeight(), offset: e.offset()}
    }

    t.ui = t.ui || {};
    var a, o = Math.max, r = Math.abs, l = Math.round, h = /left|center|right/, c = /top|center|bottom/, u = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, p = /%$/, f = t.fn.position;
    t.position = {scrollbarWidth: function () {
        if (a !== e)return a;
        var i, s, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = n.children()[0];
        return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
    }, getScrollInfo: function (e) {
        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
        return{width: a ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0}
    }, getWithinInfo: function (e) {
        var i = t(e || window), s = t.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType;
        return{element: i, isWindow: s, isDocument: n, offset: i.offset() || {left: 0, top: 0}, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: s ? i.width() : i.outerWidth(), height: s ? i.height() : i.outerHeight()}
    }}, t.fn.position = function (e) {
        if (!e || !e.of)return f.apply(this, arguments);
        e = t.extend({}, e);
        var a, p, g, m, v, _, b = t(e.of), y = t.position.getWithinInfo(e.within), k = t.position.getScrollInfo(y), w = (e.collision || "flip").split(" "), D = {};
        return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function () {
            var t, i, s = (e[this] || "").split(" ");
            1 === s.length && (s = h.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = h.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), D[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
        }), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), a = i(D.at, p, g), v.left += a[0], v.top += a[1], this.each(function () {
            var n, h, c = t(this), u = c.outerWidth(), d = c.outerHeight(), f = s(this, "marginLeft"), _ = s(this, "marginTop"), x = u + f + s(this, "marginRight") + k.width, C = d + _ + s(this, "marginBottom") + k.height, M = t.extend({}, v), T = i(D.my, c.outerWidth(), c.outerHeight());
            "right" === e.my[0] ? M.left -= u : "center" === e.my[0] && (M.left -= u / 2), "bottom" === e.my[1] ? M.top -= d : "center" === e.my[1] && (M.top -= d / 2), M.left += T[0], M.top += T[1], t.support.offsetFractions || (M.left = l(M.left), M.top = l(M.top)), n = {marginLeft: f, marginTop: _}, t.each(["left", "top"], function (i, s) {
                t.ui.position[w[i]] && t.ui.position[w[i]][s](M, {targetWidth: p, targetHeight: g, elemWidth: u, elemHeight: d, collisionPosition: n, collisionWidth: x, collisionHeight: C, offset: [a[0] + T[0], a[1] + T[1]], my: e.my, at: e.at, within: y, elem: c})
            }), e.using && (h = function (t) {
                var i = m.left - M.left, s = i + p - u, n = m.top - M.top, a = n + g - d, l = {target: {element: b, left: m.left, top: m.top, width: p, height: g}, element: {element: c, left: M.left, top: M.top, width: u, height: d}, horizontal: 0 > s ? "left" : i > 0 ? "right" : "center", vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"};
                u > p && p > r(i + s) && (l.horizontal = "center"), d > g && g > r(n + a) && (l.vertical = "middle"), l.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, l)
            }), c.offset(t.extend(M, {using: h}))
        })
    }, t.ui.position = {fit: {left: function (t, e) {
        var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, l = n - r, h = r + e.collisionWidth - a - n;
        e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
    }, top: function (t, e) {
        var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, l = n - r, h = r + e.collisionHeight - a - n;
        e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
    }}, flip: {left: function (t, e) {
        var i, s, n = e.within, a = n.offset.left + n.scrollLeft, o = n.width, l = n.isWindow ? n.scrollLeft : n.offset.left, h = t.left - e.collisionPosition.marginLeft, c = h - l, u = h + e.collisionWidth - o - l, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
        0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > r(s)) && (t.left += d + p + f))
    }, top: function (t, e) {
        var i, s, n = e.within, a = n.offset.top + n.scrollTop, o = n.height, l = n.isWindow ? n.scrollTop : n.offset.top, h = t.top - e.collisionPosition.marginTop, c = h - l, u = h + e.collisionHeight - o - l, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1];
        0 > c ? (s = t.top + p + f + g + e.collisionHeight - o - a, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g))
    }}, flipfit: {left: function () {
        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
    }, top: function () {
        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
    }}}, function () {
        var e, i, s, n, a, o = document.getElementsByTagName("body")[0], r = document.createElement("div");
        e = document.createElement(o ? "div" : "body"), s = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"}, o && t.extend(s, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (a in s)e.style[a] = s[a];
        e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
    }()
})(jQuery);
(function (t) {
    t.widget("ui.draggable", t.ui.mouse, {version: "1.10.4", widgetEventPrefix: "drag", options: {addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null}, _create: function () {
        "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
    }, _destroy: function () {
        this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
    }, _mouseCapture: function (e) {
        var i = this.options;
        return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
            t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1e3}).css(t(this).offset()).appendTo("body")
        }), !0) : !1)
    }, _mouseStart: function (e) {
        var i = this.options;
        return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left}, this.offset.scroll = !1, t.extend(this.offset, {click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()}), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
    }, _mouseDrag: function (e, i) {
        if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
            var s = this._uiHash();
            if (this._trigger("drag", e, s) === !1)return this._mouseUp({}), !1;
            this.position = s.position
        }
        return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
    }, _mouseStop: function (e) {
        var i = this, s = !1;
        return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
            i._trigger("stop", e) !== !1 && i._clear()
        }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
    }, _mouseUp: function (e) {
        return t("div.ui-draggable-iframeFix").each(function () {
            this.parentNode.removeChild(this)
        }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
    }, cancel: function () {
        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
    }, _getHandle: function (e) {
        return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
    }, _createHelper: function (e) {
        var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
        return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
    }, _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {left: +e[0], top: +e[1] || 0}), "left"in e && (this.offset.click.left = e.left + this.margins.left), "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top"in e && (this.offset.click.top = e.top + this.margins.top), "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
    }, _getParentOffset: function () {
        var e = this.offsetParent.offset();
        return"absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {top: 0, left: 0}), {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if ("relative" === this.cssPosition) {
            var t = this.element.position();
            return{top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return{top: 0, left: 0}
    }, _cacheMargins: function () {
        this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var e, i, s, n = this.options;
        return n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === n.containment ? (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined)
    }, _convertPositionTo: function (e, i) {
        i || (i = this.position);
        var s = "absolute" === e ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
        return this.offset.scroll || (this.offset.scroll = {top: n.scrollTop(), left: n.scrollLeft()}), {top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s}
    }, _generatePosition: function (e) {
        var i, s, n, a, o = this.options, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = e.pageX, h = e.pageY;
        return this.offset.scroll || (this.offset.scroll = {top: r.scrollTop(), left: r.scrollLeft()}), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top), left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)}
    }, _clear: function () {
        this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
    }, _trigger: function (e, i, s) {
        return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
    }, plugins: {}, _uiHash: function () {
        return{helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs}
    }}), t.ui.plugin.add("draggable", "connectToSortable", {start: function (e, i) {
        var s = t(this).data("ui-draggable"), n = s.options, a = t.extend({}, i, {item: s.element});
        s.sortables = [], t(n.connectToSortable).each(function () {
            var i = t.data(this, "ui-sortable");
            i && !i.options.disabled && (s.sortables.push({instance: i, shouldRevert: i.options.revert}), i.refreshPositions(), i._trigger("activate", e, a))
        })
    }, stop: function (e, i) {
        var s = t(this).data("ui-draggable"), n = t.extend({}, i, {item: s.element});
        t.each(s.sortables, function () {
            this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({top: "auto", left: "auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
        })
    }, drag: function (e, i) {
        var s = t(this).data("ui-draggable"), n = this;
        t.each(s.sortables, function () {
            var a = !1, o = this;
            this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, t.each(s.sortables, function () {
                return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && t.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
            })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                return i.helper[0]
            }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
        })
    }}), t.ui.plugin.add("draggable", "cursor", {start: function () {
        var e = t("body"), i = t(this).data("ui-draggable").options;
        e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
    }, stop: function () {
        var e = t(this).data("ui-draggable").options;
        e._cursor && t("body").css("cursor", e._cursor)
    }}), t.ui.plugin.add("draggable", "opacity", {start: function (e, i) {
        var s = t(i.helper), n = t(this).data("ui-draggable").options;
        s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
    }, stop: function (e, i) {
        var s = t(this).data("ui-draggable").options;
        s._opacity && t(i.helper).css("opacity", s._opacity)
    }}), t.ui.plugin.add("draggable", "scroll", {start: function () {
        var e = t(this).data("ui-draggable");
        e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
    }, drag: function (e) {
        var i = t(this).data("ui-draggable"), s = i.options, n = !1;
        i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
    }}), t.ui.plugin.add("draggable", "snap", {start: function () {
        var e = t(this).data("ui-draggable"), i = e.options;
        e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function () {
            var i = t(this), s = i.offset();
            this !== e.element[0] && e.snapElements.push({item: this, width: i.outerWidth(), height: i.outerHeight(), top: s.top, left: s.left})
        })
    }, drag: function (e, i) {
        var s, n, a, o, r, l, h, c, u, d, p = t(this).data("ui-draggable"), g = p.options, f = g.snapTolerance, m = i.offset.left, _ = m + p.helperProportions.width, v = i.offset.top, b = v + p.helperProportions.height;
        for (u = p.snapElements.length - 1; u >= 0; u--)r = p.snapElements[u].left, l = r + p.snapElements[u].width, h = p.snapElements[u].top, c = h + p.snapElements[u].height, r - f > _ || m > l + f || h - f > b || v > c + f || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {snapItem: p.snapElements[u].item})), p.snapElements[u].snapping = !1) : ("inner" !== g.snapMode && (s = f >= Math.abs(h - b), n = f >= Math.abs(c - v), a = f >= Math.abs(r - _), o = f >= Math.abs(l - m), s && (i.position.top = p._convertPositionTo("relative", {top: h - p.helperProportions.height, left: 0}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {top: c, left: 0}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {top: 0, left: r - p.helperProportions.width}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {top: 0, left: l}).left - p.margins.left)), d = s || n || a || o, "outer" !== g.snapMode && (s = f >= Math.abs(h - v), n = f >= Math.abs(c - b), a = f >= Math.abs(r - m), o = f >= Math.abs(l - _), s && (i.position.top = p._convertPositionTo("relative", {top: h, left: 0}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {top: c - p.helperProportions.height, left: 0}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {top: 0, left: r}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {top: 0, left: l - p.helperProportions.width}).left - p.margins.left)), !p.snapElements[u].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {snapItem: p.snapElements[u].item})), p.snapElements[u].snapping = s || n || a || o || d)
    }}), t.ui.plugin.add("draggable", "stack", {start: function () {
        var e, i = this.data("ui-draggable").options, s = t.makeArray(t(i.stack)).sort(function (e, i) {
            return(parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
        });
        s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function (i) {
            t(this).css("zIndex", e + i)
        }), this.css("zIndex", e + s.length))
    }}), t.ui.plugin.add("draggable", "zIndex", {start: function (e, i) {
        var s = t(i.helper), n = t(this).data("ui-draggable").options;
        s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
    }, stop: function (e, i) {
        var s = t(this).data("ui-draggable").options;
        s._zIndex && t(i.helper).css("zIndex", s._zIndex)
    }})
})(jQuery);
(function (t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }

    t.widget("ui.droppable", {version: "1.10.4", widgetEventPrefix: "drop", options: {accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null}, _create: function () {
        var e, i = this.options, s = i.accept;
        this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) {
            return t.is(s)
        }, this.proportions = function () {
            return arguments.length ? (e = arguments[0], undefined) : e ? e : e = {width: this.element[0].offsetWidth, height: this.element[0].offsetHeight}
        }, t.ui.ddmanager.droppables[i.scope] = t.ui.ddmanager.droppables[i.scope] || [], t.ui.ddmanager.droppables[i.scope].push(this), i.addClasses && this.element.addClass("ui-droppable")
    }, _destroy: function () {
        for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; i.length > e; e++)i[e] === this && i.splice(e, 1);
        this.element.removeClass("ui-droppable ui-droppable-disabled")
    }, _setOption: function (e, i) {
        "accept" === e && (this.accept = t.isFunction(i) ? i : function (t) {
            return t.is(i)
        }), t.Widget.prototype._setOption.apply(this, arguments)
    }, _activate: function (e) {
        var i = t.ui.ddmanager.current;
        this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
    }, _deactivate: function (e) {
        var i = t.ui.ddmanager.current;
        this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
    }, _over: function (e) {
        var i = t.ui.ddmanager.current;
        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
    }, _out: function (e) {
        var i = t.ui.ddmanager.current;
        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
    }, _drop: function (e, i) {
        var s = i || t.ui.ddmanager.current, n = !1;
        return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
            var e = t.data(this, "ui-droppable");
            return e.options.greedy && !e.options.disabled && e.options.scope === s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {offset: e.element.offset()}), e.options.tolerance) ? (n = !0, !1) : undefined
        }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
    }, ui: function (t) {
        return{draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs}
    }}), t.ui.intersect = function (t, i, s) {
        if (!i.offset)return!1;
        var n, a, o = (t.positionAbs || t.position.absolute).left, r = (t.positionAbs || t.position.absolute).top, l = o + t.helperProportions.width, h = r + t.helperProportions.height, c = i.offset.left, u = i.offset.top, d = c + i.proportions().width, p = u + i.proportions().height;
        switch (s) {
            case"fit":
                return o >= c && d >= l && r >= u && p >= h;
            case"intersect":
                return o + t.helperProportions.width / 2 > c && d > l - t.helperProportions.width / 2 && r + t.helperProportions.height / 2 > u && p > h - t.helperProportions.height / 2;
            case"pointer":
                return n = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, a = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, e(a, u, i.proportions().height) && e(n, c, i.proportions().width);
            case"touch":
                return(r >= u && p >= r || h >= u && p >= h || u > r && h > p) && (o >= c && d >= o || l >= c && d >= l || c > o && l > d);
            default:
                return!1
        }
    }, t.ui.ddmanager = {current: null, droppables: {"default": []}, prepareOffsets: function (e, i) {
        var s, n, a = t.ui.ddmanager.droppables[e.options.scope] || [], o = i ? i.type : null, r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
        t:for (s = 0; a.length > s; s++)if (!(a[s].options.disabled || e && !a[s].accept.call(a[s].element[0], e.currentItem || e.element))) {
            for (n = 0; r.length > n; n++)if (r[n] === a[s].element[0]) {
                a[s].proportions().height = 0;
                continue t
            }
            a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({width: a[s].element[0].offsetWidth, height: a[s].element[0].offsetHeight}))
        }
    }, drop: function (e, i) {
        var s = !1;
        return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
            this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
        }), s
    }, dragStart: function (e, i) {
        e.element.parentsUntil("body").bind("scroll.droppable", function () {
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        })
    }, drag: function (e, i) {
        e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
            if (!this.options.disabled && !this.greedyChild && this.visible) {
                var s, n, a, o = t.ui.intersect(e, this, this.options.tolerance), r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () {
                    return t.data(this, "ui-droppable").options.scope === n
                }), a.length && (s = t.data(a[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
            }
        })
    }, dragStop: function (e, i) {
        e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
    }}
})(jQuery);
(function (t) {
    function e(t) {
        return parseInt(t, 10) || 0
    }

    function i(t) {
        return!isNaN(parseInt(t, 10))
    }

    t.widget("ui.resizable", t.ui.mouse, {version: "1.10.4", widgetEventPrefix: "resize", options: {alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null}, _create: function () {
        var e, i, s, n, a, o = this, r = this.options;
        if (this.element.addClass("ui-resizable"), t.extend(this, {_aspectRatio: !!r.aspectRatio, aspectRatio: r.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left")})), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom")}), this.originalElement.css({marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({position: "static", zoom: 1, display: "block"})), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw"} : "e,s,se"), this.handles.constructor === String)for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++)s = t.trim(e[i]), a = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + a + "'></div>"), n.css({zIndex: r.zIndex}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
        this._renderAxis = function (e) {
            var i, s, n, a;
            e = e || this.element;
            for (i in this.handles)this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, a), this._proportionallyResize()), t(this.handles[i]).length
        }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
            o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
        }), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
            r.disabled || (t(this).removeClass("ui-resizable-autohide"), o._handles.show())
        }).mouseleave(function () {
            r.disabled || o.resizing || (t(this).addClass("ui-resizable-autohide"), o._handles.hide())
        })), this._mouseInit()
    }, _destroy: function () {
        this._mouseDestroy();
        var e, i = function (e) {
            t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
        };
        return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left")}).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
    }, _mouseCapture: function (e) {
        var i, s, n = !1;
        for (i in this.handles)s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
        return!this.options.disabled && n
    }, _mouseStart: function (i) {
        var s, n, a, o = this.options, r = this.element.position(), h = this.element;
        return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({position: "absolute", top: h.css("top"), left: h.css("left")}) : h.is(".ui-draggable") && h.css({position: "absolute", top: r.top, left: r.left}), this._renderProxy(), s = e(this.helper.css("left")), n = e(this.helper.css("top")), o.containment && (s += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {left: s, top: n}, this.size = this._helper ? {width: this.helper.width(), height: this.helper.height()} : {width: h.width(), height: h.height()}, this.originalSize = this._helper ? {width: h.outerWidth(), height: h.outerHeight()} : {width: h.width(), height: h.height()}, this.originalPosition = {left: s, top: n}, this.sizeDiff = {width: h.outerWidth() - h.width(), height: h.outerHeight() - h.height()}, this.originalMousePosition = {left: i.pageX, top: i.pageY}, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
    }, _mouseDrag: function (e) {
        var i, s = this.helper, n = {}, a = this.originalMousePosition, o = this.axis, r = this.position.top, h = this.position.left, l = this.size.width, c = this.size.height, u = e.pageX - a.left || 0, d = e.pageY - a.top || 0, p = this._change[o];
        return p ? (i = p.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== c && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || this._trigger("resize", e, this.ui()), !1) : !1
    }, _mouseStop: function (e) {
        this.resizing = !1;
        var i, s, n, a, o, r, h, l = this.options, c = this;
        return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, a = s ? 0 : c.sizeDiff.width, o = {width: c.helper.width() - a, height: c.helper.height() - n}, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(o, {top: h, left: r})), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
    }, _updateVirtualBoundaries: function (t) {
        var e, s, n, a, o, r = this.options;
        o = {minWidth: i(r.minWidth) ? r.minWidth : 0, maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0, minHeight: i(r.minHeight) ? r.minHeight : 0, maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0}, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
    }, _updateCache: function (t) {
        this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
    }, _updateRatio: function (t) {
        var e = this.position, s = this.size, n = this.axis;
        return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (s.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)), t
    }, _respectSize: function (t) {
        var e = this._vBoundaries, s = this.axis, n = i(t.width) && e.maxWidth && e.maxWidth < t.width, a = i(t.height) && e.maxHeight && e.maxHeight < t.height, o = i(t.width) && e.minWidth && e.minWidth > t.width, r = i(t.height) && e.minHeight && e.minHeight > t.height, h = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, c = /sw|nw|w/.test(s), u = /nw|ne|n/.test(s);
        return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), a && (t.height = e.maxHeight), o && c && (t.left = h - e.minWidth), n && c && (t.left = h - e.maxWidth), r && u && (t.top = l - e.minHeight), a && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
    }, _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length) {
            var t, e, i, s, n, a = this.helper || this.element;
            for (t = 0; this._proportionallyResizeElements.length > t; t++) {
                if (n = this._proportionallyResizeElements[t], !this.borderDif)for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], e = 0; i.length > e; e++)this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
                n.css({height: a.height() - this.borderDif[0] - this.borderDif[2] || 0, width: a.width() - this.borderDif[1] - this.borderDif[3] || 0})
            }
        }
    }, _renderProxy: function () {
        var e = this.element, i = this.options;
        this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
    }, _change: {e: function (t, e) {
        return{width: this.originalSize.width + e}
    }, w: function (t, e) {
        var i = this.originalSize, s = this.originalPosition;
        return{left: s.left + e, width: i.width - e}
    }, n: function (t, e, i) {
        var s = this.originalSize, n = this.originalPosition;
        return{top: n.top + i, height: s.height - i}
    }, s: function (t, e, i) {
        return{height: this.originalSize.height + i}
    }, se: function (e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
    }, sw: function (e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
    }, ne: function (e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
    }, nw: function (e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
    }}, _propagate: function (e, i) {
        t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
    }, plugins: {}, ui: function () {
        return{originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition}
    }}), t.ui.plugin.add("resizable", "animate", {stop: function (e) {
        var i = t(this).data("ui-resizable"), s = i.options, n = i._proportionallyResizeElements, a = n.length && /textarea/i.test(n[0].nodeName), o = a && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = a ? 0 : i.sizeDiff.width, h = {width: i.size.width - r, height: i.size.height - o}, l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
        i.element.animate(t.extend(h, c && l ? {top: c, left: l} : {}), {duration: s.animateDuration, easing: s.animateEasing, step: function () {
            var s = {width: parseInt(i.element.css("width"), 10), height: parseInt(i.element.css("height"), 10), top: parseInt(i.element.css("top"), 10), left: parseInt(i.element.css("left"), 10)};
            n && n.length && t(n[0]).css({width: s.width, height: s.height}), i._updateCache(s), i._propagate("resize", e)
        }})
    }}), t.ui.plugin.add("resizable", "containment", {start: function () {
        var i, s, n, a, o, r, h, l = t(this).data("ui-resizable"), c = l.options, u = l.element, d = c.containment, p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
        p && (l.containerElement = t(p), /document/.test(d) || d === document ? (l.containerOffset = {left: 0, top: 0}, l.containerPosition = {left: 0, top: 0}, l.parentData = {element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight}) : (i = t(p), s = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
            s[t] = e(i.css("padding" + n))
        }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {height: i.innerHeight() - s[3], width: i.innerWidth() - s[1]}, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = t.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = t.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {element: p, left: n.left, top: n.top, width: r, height: h}))
    }, resize: function (e) {
        var i, s, n, a, o = t(this).data("ui-resizable"), r = o.options, h = o.containerOffset, l = o.position, c = o._aspectRatio || e.shiftKey, u = {top: 0, left: 0}, d = o.containerElement;
        d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - u.left), c && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), c && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - u.left : o.offset.left - u.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - u.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= Math.abs(o.parentData.left)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, c && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, c && (o.size.width = o.size.height * o.aspectRatio))
    }, stop: function () {
        var e = t(this).data("ui-resizable"), i = e.options, s = e.containerOffset, n = e.containerPosition, a = e.containerElement, o = t(e.helper), r = o.offset(), h = o.outerWidth() - e.sizeDiff.width, l = o.outerHeight() - e.sizeDiff.height;
        e._helper && !i.animate && /relative/.test(a.css("position")) && t(this).css({left: r.left - n.left - s.left, width: h, height: l}), e._helper && !i.animate && /static/.test(a.css("position")) && t(this).css({left: r.left - n.left - s.left, width: h, height: l})
    }}), t.ui.plugin.add("resizable", "alsoResize", {start: function () {
        var e = t(this).data("ui-resizable"), i = e.options, s = function (e) {
            t(e).each(function () {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {width: parseInt(e.width(), 10), height: parseInt(e.height(), 10), left: parseInt(e.css("left"), 10), top: parseInt(e.css("top"), 10)})
            })
        };
        "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function (t) {
            s(t)
        })
    }, resize: function (e, i) {
        var s = t(this).data("ui-resizable"), n = s.options, a = s.originalSize, o = s.originalPosition, r = {height: s.size.height - a.height || 0, width: s.size.width - a.width || 0, top: s.position.top - o.top || 0, left: s.position.left - o.left || 0}, h = function (e, s) {
            t(e).each(function () {
                var e = t(this), n = t(this).data("ui-resizable-alsoresize"), a = {}, o = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, function (t, e) {
                    var i = (n[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (a[e] = i || null)
                }), e.css(a)
            })
        };
        "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function (t, e) {
            h(t, e)
        })
    }, stop: function () {
        t(this).removeData("resizable-alsoresize")
    }}), t.ui.plugin.add("resizable", "ghost", {start: function () {
        var e = t(this).data("ui-resizable"), i = e.options, s = e.size;
        e.ghost = e.originalElement.clone(), e.ghost.css({opacity: .25, display: "block", position: "relative", height: s.height, width: s.width, margin: 0, left: 0, top: 0}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
    }, resize: function () {
        var e = t(this).data("ui-resizable");
        e.ghost && e.ghost.css({position: "relative", height: e.size.height, width: e.size.width})
    }, stop: function () {
        var e = t(this).data("ui-resizable");
        e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
    }}), t.ui.plugin.add("resizable", "grid", {resize: function () {
        var e = t(this).data("ui-resizable"), i = e.options, s = e.size, n = e.originalSize, a = e.originalPosition, o = e.axis, r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, h = r[0] || 1, l = r[1] || 1, c = Math.round((s.width - n.width) / h) * h, u = Math.round((s.height - n.height) / l) * l, d = n.width + c, p = n.height + u, f = i.maxWidth && d > i.maxWidth, g = i.maxHeight && p > i.maxHeight, m = i.minWidth && i.minWidth > d, v = i.minHeight && i.minHeight > p;
        i.grid = r, m && (d += h), v && (p += l), f && (d -= h), g && (p -= l), /^(se|s|e)$/.test(o) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.top = a.top - u) : /^(sw)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.left = a.left - c) : (p - l > 0 ? (e.size.height = p, e.position.top = a.top - u) : (e.size.height = l, e.position.top = a.top + n.height - l), d - h > 0 ? (e.size.width = d, e.position.left = a.left - c) : (e.size.width = h, e.position.left = a.left + n.width - h))
    }})
})(jQuery);
(function (t) {
    t.widget("ui.selectable", t.ui.mouse, {version: "1.10.4", options: {appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null}, _create: function () {
        var e, i = this;
        this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
            e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function () {
                var e = t(this), i = e.offset();
                t.data(this, "selectable-item", {element: this, $element: e, left: i.left, top: i.top, right: i.left + e.outerWidth(), bottom: i.top + e.outerHeight(), startselected: !1, selected: e.hasClass("ui-selected"), selecting: e.hasClass("ui-selecting"), unselecting: e.hasClass("ui-unselecting")})
            })
        }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
    }, _destroy: function () {
        this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
    }, _mouseStart: function (e) {
        var i = this, s = this.options;
        this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({left: e.pageX, top: e.pageY, width: 0, height: 0}), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
            var s = t.data(this, "selectable-item");
            s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {unselecting: s.element}))
        }), t(e.target).parents().addBack().each(function () {
            var s, n = t.data(this, "selectable-item");
            return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {selecting: n.element}) : i._trigger("unselecting", e, {unselecting: n.element}), !1) : undefined
        }))
    }, _mouseDrag: function (e) {
        if (this.dragged = !0, !this.options.disabled) {
            var i, s = this, n = this.options, a = this.opos[0], o = this.opos[1], r = e.pageX, l = e.pageY;
            return a > r && (i = r, r = a, a = i), o > l && (i = l, l = o, o = i), this.helper.css({left: a, top: o, width: r - a, height: l - o}), this.selectees.each(function () {
                var i = t.data(this, "selectable-item"), h = !1;
                i && i.element !== s.element[0] && ("touch" === n.tolerance ? h = !(i.left > r || a > i.right || i.top > l || o > i.bottom) : "fit" === n.tolerance && (h = i.left > a && r > i.right && i.top > o && l > i.bottom), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {selecting: i.element}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {unselecting: i.element}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {unselecting: i.element})))))
            }), !1
        }
    }, _mouseStop: function (e) {
        var i = this;
        return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
            var s = t.data(this, "selectable-item");
            s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {unselected: s.element})
        }), t(".ui-selecting", this.element[0]).each(function () {
            var s = t.data(this, "selectable-item");
            s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {selected: s.element})
        }), this._trigger("stop", e), this.helper.remove(), !1
    }})
})(jQuery);
(function (t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }

    function i(t) {
        return/left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }

    t.widget("ui.sortable", t.ui.mouse, {version: "1.10.4", widgetEventPrefix: "sort", ready: !1, options: {appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null}, _create: function () {
        var t = this.options;
        this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
    }, _destroy: function () {
        this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
        for (var t = this.items.length - 1; t >= 0; t--)this.items[t].item.removeData(this.widgetName + "-item");
        return this
    }, _setOption: function (e, i) {
        "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
    }, _mouseCapture: function (e, i) {
        var s = null, n = !1, o = this;
        return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
            return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : undefined
        }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
            this === e.target && (n = !0)
        }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
    }, _mouseStart: function (e, i, s) {
        var n, o, a = this.options;
        if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left}, t.extend(this.offset, {click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0]}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)for (n = this.containers.length - 1; n >= 0; n--)this.containers[n]._trigger("activate", e, this._uiHash(this));
        return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
    }, _mouseDrag: function (e) {
        var i, s, n, o, a = this.options, r = !1;
        for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
            if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))break;
            this._rearrange(e, s), this._trigger("change", e, this._uiHash());
            break
        }
        return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
    }, _mouseStop: function (e, i) {
        if (e) {
            if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                var s = this, n = this.placeholder.offset(), o = this.options.axis, a = {};
                o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
                    s._clear(e)
                })
            } else this._clear(e, i);
            return!1
        }
    }, cancel: function () {
        if (this.dragging) {
            this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
            for (var e = this.containers.length - 1; e >= 0; e--)this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
        }
        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {helper: null, dragging: !1, reverting: !1, _noFinalSort: null}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
    }, serialize: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected), s = [];
        return e = e || {}, t(i).each(function () {
            var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
            i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
        }), !s.length && e.key && s.push(e.key + "="), s.join("&")
    }, toArray: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected), s = [];
        return e = e || {}, i.each(function () {
            s.push(t(e.item || this).attr(e.attribute || "id") || "")
        }), s
    }, _intersectsWith: function (t) {
        var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, o = t.left, a = o + t.width, r = t.top, h = r + t.height, l = this.offset.click.top, c = this.offset.click.left, u = "x" === this.options.axis || s + l > r && h > s + l, d = "y" === this.options.axis || e + c > o && a > e + c, p = u && d;
        return"pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
    }, _intersectsWithPointer: function (t) {
        var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height), s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width), n = i && s, o = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection();
        return n ? this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
    }, _intersectsWithSides: function (t) {
        var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), n = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
        return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && i || "up" === n && !i)
    }, _getDragVerticalDirection: function () {
        var t = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 !== t && (t > 0 ? "down" : "up")
    }, _getDragHorizontalDirection: function () {
        var t = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 !== t && (t > 0 ? "right" : "left")
    }, refresh: function (t) {
        return this._refreshItems(t), this.refreshPositions(), this
    }, _connectWith: function () {
        var t = this.options;
        return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
    }, _getItemsAsjQuery: function (e) {
        function i() {
            r.push(this)
        }

        var s, n, o, a, r = [], h = [], l = this._connectWith();
        if (l && e)for (s = l.length - 1; s >= 0; s--)for (o = t(l[s]), n = o.length - 1; n >= 0; n--)a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
        for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options, item: this.currentItem}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--)h[s][0].each(i);
        return t(r)
    }, _removeCurrentsFromItems: function () {
        var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = t.grep(this.items, function (t) {
            for (var i = 0; e.length > i; i++)if (e[i] === t.item[0])return!1;
            return!0
        })
    }, _refreshItems: function (e) {
        this.items = [], this.containers = [this];
        var i, s, n, o, a, r, h, l, c = this.items, u = [
            [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]
        ], d = this._connectWith();
        if (d && this.ready)for (i = d.length - 1; i >= 0; i--)for (n = t(d[i]), s = n.length - 1; s >= 0; s--)o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {item: this.currentItem}) : t(o.options.items, o.element), o]), this.containers.push(o));
        for (i = u.length - 1; i >= 0; i--)for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++)h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({item: h, instance: a, width: 0, height: 0, left: 0, top: 0})
    }, refreshPositions: function (e) {
        this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
        var i, s, n, o;
        for (i = this.items.length - 1; i >= 0; i--)s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
        if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--)o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
        return this
    }, _createPlaceholder: function (e) {
        e = e || this;
        var i, s = e.options;
        s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {element: function () {
            var s = e.currentItem[0].nodeName.toLowerCase(), n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
            return"tr" === s ? e.currentItem.children().each(function () {
                t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
            }) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
        }, update: function (t, n) {
            (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
        }}), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
    }, _contactContainers: function (s) {
        var n, o, a, r, h, l, c, u, d, p, f = null, g = null;
        for (n = this.containers.length - 1; n >= 0; n--)if (!t.contains(this.currentItem[0], this.containers[n].element[0]))if (this._intersectsWith(this.containers[n].containerCache)) {
            if (f && t.contains(this.containers[n].element[0], f.element[0]))continue;
            f = this.containers[n], g = n
        } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
        if (f)if (1 === this.containers.length)this.containers[g].containerCache.over || (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1); else {
            for (a = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], o = this.items.length - 1; o >= 0; o--)t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (d = !0, u += this.items[o][l]), a > Math.abs(u - c) && (a = Math.abs(u - c), r = this.items[o], this.direction = d ? "up" : "down"));
            if (!r && !this.options.dropOnEmpty)return;
            if (this.currentContainer === this.containers[g])return;
            r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0), this._trigger("change", s, this._uiHash()), this.containers[g]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1
        }
    }, _createHelper: function (e) {
        var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
        return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left")}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
    }, _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {left: +e[0], top: +e[1] || 0}), "left"in e && (this.offset.click.left = e.left + this.margins.left), "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top"in e && (this.offset.click.top = e.top + this.margins.top), "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
    }, _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var e = this.offsetParent.offset();
        return"absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {top: 0, left: 0}), {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if ("relative" === this.cssPosition) {
            var t = this.currentItem.position();
            return{top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return{top: 0, left: 0}
    }, _cacheMargins: function () {
        this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var e, i, s, n = this.options;
        "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
    }, _convertPositionTo: function (e, i) {
        i || (i = this.position);
        var s = "absolute" === e ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(n[0].tagName);
        return{top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s}
    }, _generatePosition: function (e) {
        var i, s, n = this.options, o = e.pageX, a = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName);
        return"relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())}
    }, _rearrange: function (t, e, i, s) {
        i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
        var n = this.counter;
        this._delay(function () {
            n === this.counter && this.refreshPositions(!s)
        })
    }, _clear: function (t, e) {
        function i(t, e, i) {
            return function (s) {
                i._trigger(t, s, e._uiHash(e))
            }
        }

        this.reverting = !1;
        var s, n = [];
        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
            for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
            this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
        } else this.currentItem.show();
        for (this.fromOutside && !e && n.push(function (t) {
            this._trigger("receive", t, this._uiHash(this.fromOutside))
        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
            this._trigger("update", t, this._uiHash())
        }), this !== this.currentContainer && (e || (n.push(function (t) {
            this._trigger("remove", t, this._uiHash())
        }), n.push(function (t) {
            return function (e) {
                t._trigger("receive", e, this._uiHash(this))
            }
        }.call(this, this.currentContainer)), n.push(function (t) {
            return function (e) {
                t._trigger("update", e, this._uiHash(this))
            }
        }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--)e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
        if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
            if (!e) {
                for (this._trigger("beforeStop", t, this._uiHash()), s = 0; n.length > s; s++)n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !1
        }
        if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
            for (s = 0; n.length > s; s++)n[s].call(this, t);
            this._trigger("stop", t, this._uiHash())
        }
        return this.fromOutside = !1, !0
    }, _trigger: function () {
        t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    }, _uiHash: function (e) {
        var i = e || this;
        return{helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null}
    }})
})(jQuery);
(function (e) {
    e.widget("ui.autocomplete", {version: "1.10.4", defaultElement: "<input>", options: {appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: {my: "left top", at: "left bottom", collision: "none"}, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null}, requestIndex: 0, pending: 0, _create: function () {
        var t, i, s, n = this.element[0].nodeName.toLowerCase(), a = "textarea" === n, o = "input" === n;
        this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {keydown: function (n) {
            if (this.element.prop("readOnly"))return t = !0, s = !0, i = !0, undefined;
            t = !1, s = !1, i = !1;
            var a = e.ui.keyCode;
            switch (n.keyCode) {
                case a.PAGE_UP:
                    t = !0, this._move("previousPage", n);
                    break;
                case a.PAGE_DOWN:
                    t = !0, this._move("nextPage", n);
                    break;
                case a.UP:
                    t = !0, this._keyEvent("previous", n);
                    break;
                case a.DOWN:
                    t = !0, this._keyEvent("next", n);
                    break;
                case a.ENTER:
                case a.NUMPAD_ENTER:
                    this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                    break;
                case a.TAB:
                    this.menu.active && this.menu.select(n);
                    break;
                case a.ESCAPE:
                    this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                    break;
                default:
                    i = !0, this._searchTimeout(n)
            }
        }, keypress: function (s) {
            if (t)return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), undefined;
            if (!i) {
                var n = e.ui.keyCode;
                switch (s.keyCode) {
                    case n.PAGE_UP:
                        this._move("previousPage", s);
                        break;
                    case n.PAGE_DOWN:
                        this._move("nextPage", s);
                        break;
                    case n.UP:
                        this._keyEvent("previous", s);
                        break;
                    case n.DOWN:
                        this._keyEvent("next", s)
                }
            }
        }, input: function (e) {
            return s ? (s = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined)
        }, focus: function () {
            this.selectedItem = null, this.previous = this._value()
        }, blur: function (e) {
            return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined)
        }}), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().data("ui-menu"), this._on(this.menu.element, {mousedown: function (t) {
            t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                delete this.cancelBlur
            });
            var i = this.menu.element[0];
            e(t.target).closest(".ui-menu-item").length || this._delay(function () {
                var t = this;
                this.document.one("mousedown", function (s) {
                    s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                })
            })
        }, menufocus: function (t, i) {
            if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)))return this.menu.blur(), this.document.one("mousemove", function () {
                e(t.target).trigger(t.originalEvent)
            }), undefined;
            var s = i.item.data("ui-autocomplete-item");
            !1 !== this._trigger("focus", t, {item: s}) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
        }, menuselect: function (e, t) {
            var i = t.item.data("ui-autocomplete-item"), s = this.previous;
            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
                this.previous = s, this.selectedItem = i
            })), !1 !== this._trigger("select", e, {item: i}) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
        }}), this.liveRegion = e("<span>", {role: "status", "aria-live": "polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {beforeunload: function () {
            this.element.removeAttr("autocomplete")
        }})
    }, _destroy: function () {
        clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
    }, _setOption: function (e, t) {
        this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
    }, _appendTo: function () {
        var t = this.options.appendTo;
        return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
    }, _initSource: function () {
        var t, i, s = this;
        e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
            s(e.ui.autocomplete.filter(t, i.term))
        }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) {
            s.xhr && s.xhr.abort(), s.xhr = e.ajax({url: i, data: t, dataType: "json", success: function (e) {
                n(e)
            }, error: function () {
                n([])
            }})
        }) : this.source = this.options.source
    }, _searchTimeout: function (e) {
        clearTimeout(this.searching), this.searching = this._delay(function () {
            this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
        }, this.options.delay)
    }, search: function (e, t) {
        return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : undefined
    }, _search: function (e) {
        this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: e}, this._response())
    }, _response: function () {
        var t = ++this.requestIndex;
        return e.proxy(function (e) {
            t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
        }, this)
    }, __response: function (e) {
        e && (e = this._normalize(e)), this._trigger("response", null, {content: e}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
    }, close: function (e) {
        this.cancelSearch = !0, this._close(e)
    }, _close: function (e) {
        this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
    }, _change: function (e) {
        this.previous !== this._value() && this._trigger("change", e, {item: this.selectedItem})
    }, _normalize: function (t) {
        return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
            return"string" == typeof t ? {label: t, value: t} : e.extend({label: t.label || t.value, value: t.value || t.label}, t)
        })
    }, _suggest: function (t) {
        var i = this.menu.element.empty();
        this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
    }, _resizeMenu: function () {
        var e = this.menu.element;
        e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
    }, _renderMenu: function (t, i) {
        var s = this;
        e.each(i, function (e, i) {
            s._renderItemData(t, i)
        })
    }, _renderItemData: function (e, t) {
        return this._renderItem(e, t).data("ui-autocomplete-item", t)
    }, _renderItem: function (t, i) {
        return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
    }, _move: function (e, t) {
        return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[e](t), undefined) : (this.search(null, t), undefined)
    }, widget: function () {
        return this.menu.element
    }, _value: function () {
        return this.valueMethod.apply(this.element, arguments)
    }, _keyEvent: function (e, t) {
        (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
    }}), e.extend(e.ui.autocomplete, {escapeRegex: function (e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }, filter: function (t, i) {
        var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
        return e.grep(t, function (e) {
            return s.test(e.label || e.value || e)
        })
    }}), e.widget("ui.autocomplete", e.ui.autocomplete, {options: {messages: {noResults: "No search results.", results: function (e) {
        return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
    }}}, __response: function (e) {
        var t;
        this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
    }})
})(jQuery);
(function (e, t) {
    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}, this._defaults = {showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1}, e.extend(this._defaults, this.regional[""]), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function a(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout",function () {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function () {
            e.datepicker._isDisabledDatepicker(n.inline ? t.parent()[0] : n.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function s(t, i) {
        e.extend(t, i);
        for (var a in i)null == i[a] && (t[a] = i[a]);
        return t
    }

    e.extend(e.ui, {datepicker: {version: "1.10.4"}});
    var n, r = "datepicker";
    e.extend(i.prototype, {markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () {
        return this.dpDiv
    }, setDefaults: function (e) {
        return s(this._defaults, e || {}), this
    }, _attachDatepicker: function (t, i) {
        var a, s, n;
        a = t.nodeName.toLowerCase(), s = "div" === a || "span" === a, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst(e(t), s), n.settings = e.extend({}, i || {}), "input" === a ? this._connectDatepicker(t, n) : s && this._inlineDatepicker(t, n)
    }, _newInst: function (t, i) {
        var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
        return{id: s, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv}
    }, _connectDatepicker: function (t, i) {
        var a = e(t);
        i.append = e([]), i.trigger = e([]), a.hasClass(this.markerClassName) || (this._attachments(a, i), a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, r, i), i.settings.disabled && this._disableDatepicker(t))
    }, _attachments: function (t, i) {
        var a, s, n, r = this._get(i, "appendText"), o = this._get(i, "isRTL");
        i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), a = this._get(i, "showOn"), ("focus" === a || "both" === a) && t.focus(this._showDatepicker), ("button" === a || "both" === a) && (s = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({src: n, alt: s, title: s}) : e("<button type='button'></button>").addClass(this._triggerClass).html(n ? e("<img/>").attr({src: n, alt: s, title: s}) : s)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function () {
            return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
        }))
    }, _autoSize: function (e) {
        if (this._get(e, "autoSize") && !e.inline) {
            var t, i, a, s, n = new Date(2009, 11, 20), r = this._get(e, "dateFormat");
            r.match(/[DM]/) && (t = function (e) {
                for (i = 0, a = 0, s = 0; e.length > s; s++)e[s].length > i && (i = e[s].length, a = s);
                return a
            }, n.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), e.input.attr("size", this._formatDate(e, n).length)
        }
    }, _inlineDatepicker: function (t, i) {
        var a = e(t);
        a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(i.dpDiv), e.data(t, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
    }, _dialogDatepicker: function (t, i, a, n, o) {
        var u, c, h, l, d, p = this._dialogInst;
        return p || (this.uuid += 1, u = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + u + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], r, p)), s(p.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, h = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + l, h / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = a, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], r, p), this
    }, _destroyDatepicker: function (t) {
        var i, a = e(t), s = e.data(t, r);
        a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, r), "input" === i ? (s.append.remove(), s.trigger.remove(), a.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && a.removeClass(this.markerClassName).empty())
    }, _enableDatepicker: function (t) {
        var i, a, s = e(t), n = e.data(t, r);
        s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, n.trigger.filter("button").each(function () {
            this.disabled = !1
        }).end().filter("img").css({opacity: "1.0", cursor: ""})) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().removeClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
            return e === t ? null : e
        }))
    }, _disableDatepicker: function (t) {
        var i, a, s = e(t), n = e.data(t, r);
        s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, n.trigger.filter("button").each(function () {
            this.disabled = !0
        }).end().filter("img").css({opacity: "0.5", cursor: "default"})) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().addClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
            return e === t ? null : e
        }), this._disabledInputs[this._disabledInputs.length] = t)
    }, _isDisabledDatepicker: function (e) {
        if (!e)return!1;
        for (var t = 0; this._disabledInputs.length > t; t++)if (this._disabledInputs[t] === e)return!0;
        return!1
    }, _getInst: function (t) {
        try {
            return e.data(t, r)
        } catch (i) {
            throw"Missing instance data for this datepicker"
        }
    }, _optionDatepicker: function (i, a, n) {
        var r, o, u, c, h = this._getInst(i);
        return 2 === arguments.length && "string" == typeof a ? "defaults" === a ? e.extend({}, e.datepicker._defaults) : h ? "all" === a ? e.extend({}, h.settings) : this._get(h, a) : null : (r = a || {}, "string" == typeof a && (r = {}, r[a] = n), h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), u = this._getMinMaxDate(h, "min"), c = this._getMinMaxDate(h, "max"), s(h.settings, r), null !== u && r.dateFormat !== t && r.minDate === t && (h.settings.minDate = this._formatDate(h, u)), null !== c && r.dateFormat !== t && r.maxDate === t && (h.settings.maxDate = this._formatDate(h, c)), "disabled"in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(e(i), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h)), t)
    }, _changeDatepicker: function (e, t, i) {
        this._optionDatepicker(e, t, i)
    }, _refreshDatepicker: function (e) {
        var t = this._getInst(e);
        t && this._updateDatepicker(t)
    }, _setDateDatepicker: function (e, t) {
        var i = this._getInst(e);
        i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
    }, _getDateDatepicker: function (e, t) {
        var i = this._getInst(e);
        return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
    }, _doKeyDown: function (t) {
        var i, a, s, n = e.datepicker._getInst(t.target), r = !0, o = n.dpDiv.is(".ui-datepicker-rtl");
        if (n._keyEvent = !0, e.datepicker._datepickerShowing)switch (t.keyCode) {
            case 9:
                e.datepicker._hideDatepicker(), r = !1;
                break;
            case 13:
                return s = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv), s[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]), i = e.datepicker._get(n, "onSelect"), i ? (a = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [a, n])) : e.datepicker._hideDatepicker(), !1;
            case 27:
                e.datepicker._hideDatepicker();
                break;
            case 33:
                e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                break;
            case 34:
                e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                break;
            case 35:
                (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                break;
            case 36:
                (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                break;
            case 37:
                (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                break;
            case 38:
                (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                break;
            case 39:
                (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                break;
            case 40:
                (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                break;
            default:
                r = !1
        } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
        r && (t.preventDefault(), t.stopPropagation())
    }, _doKeyPress: function (i) {
        var a, s, n = e.datepicker._getInst(i.target);
        return e.datepicker._get(n, "constrainInput") ? (a = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > s || !a || a.indexOf(s) > -1) : t
    }, _doKeyUp: function (t) {
        var i, a = e.datepicker._getInst(t.target);
        if (a.input.val() !== a.lastVal)try {
            i = e.datepicker.parseDate(e.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, e.datepicker._getFormatConfig(a)), i && (e.datepicker._setDateFromField(a), e.datepicker._updateAlternate(a), e.datepicker._updateDatepicker(a))
        } catch (s) {
        }
        return!0
    }, _showDatepicker: function (t) {
        if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
            var i, a, n, r, o, u, c;
            i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, "beforeShow"), n = a ? a.apply(t, [t, i]) : {}, n !== !1 && (s(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function () {
                return r |= "fixed" === e(this).css("position"), !r
            }), o = {left: e.datepicker._pos[0], top: e.datepicker._pos[1]}, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({position: "absolute", display: "block", top: "-1000px"}), e.datepicker._updateDatepicker(i), o = e.datepicker._checkOffset(i, o, r), i.dpDiv.css({position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: o.left + "px", top: o.top + "px"}), i.inline || (u = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? i.dpDiv.show(u, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[u || "show"](u ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
        }
    }, _updateDatepicker: function (t) {
        this.maxRows = 4, n = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
        var i, a = this._getNumberOfMonths(t), s = a[1], r = 17;
        t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), t.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
            i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
        }, 0))
    }, _shouldFocusInput: function (e) {
        return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
    }, _checkOffset: function (t, i, a) {
        var s = t.dpDiv.outerWidth(), n = t.dpDiv.outerHeight(), r = t.input ? t.input.outerWidth() : 0, o = t.input ? t.input.outerHeight() : 0, u = document.documentElement.clientWidth + (a ? 0 : e(document).scrollLeft()), c = document.documentElement.clientHeight + (a ? 0 : e(document).scrollTop());
        return i.left -= this._get(t, "isRTL") ? s - r : 0, i.left -= a && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= a && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > u && u > s ? Math.abs(i.left + s - u) : 0), i.top -= Math.min(i.top, i.top + n > c && c > n ? Math.abs(n + o) : 0), i
    }, _findPos: function (t) {
        for (var i, a = this._getInst(t), s = this._get(a, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));)t = t[s ? "previousSibling" : "nextSibling"];
        return i = e(t).offset(), [i.left, i.top]
    }, _hideDatepicker: function (t) {
        var i, a, s, n, o = this._curInst;
        !o || t && o !== e.data(t, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), a = this._get(o, "duration"), s = function () {
            e.datepicker._tidyDialog(o)
        }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), a, s) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? a : null, s), i || s(), this._datepickerShowing = !1, n = this._get(o, "onClose"), n && n.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({position: "absolute", left: "0", top: "-100px"}), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
    }, _tidyDialog: function (e) {
        e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    }, _checkExternalClick: function (t) {
        if (e.datepicker._curInst) {
            var i = e(t.target), a = e.datepicker._getInst(i[0]);
            (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== a) && e.datepicker._hideDatepicker()
        }
    }, _adjustDate: function (t, i, a) {
        var s = e(t), n = this._getInst(s[0]);
        this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, i + ("M" === a ? this._get(n, "showCurrentAtPos") : 0), a), this._updateDatepicker(n))
    }, _gotoToday: function (t) {
        var i, a = e(t), s = this._getInst(a[0]);
        this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(a)
    }, _selectMonthYear: function (t, i, a) {
        var s = e(t), n = this._getInst(s[0]);
        n["selected" + ("M" === a ? "Month" : "Year")] = n["draw" + ("M" === a ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s)
    }, _selectDay: function (t, i, a, s) {
        var n, r = e(t);
        e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e("a", s).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = a, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
    }, _clearDate: function (t) {
        var i = e(t);
        this._selectDate(i, "")
    }, _selectDate: function (t, i) {
        var a, s = e(t), n = this._getInst(s[0]);
        i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), a = this._get(n, "onSelect"), a ? a.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
    }, _updateAlternate: function (t) {
        var i, a, s, n = this._get(t, "altField");
        n && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), a = this._getDate(t), s = this.formatDate(i, a, this._getFormatConfig(t)), e(n).each(function () {
            e(this).val(s)
        }))
    }, noWeekends: function (e) {
        var t = e.getDay();
        return[t > 0 && 6 > t, ""]
    }, iso8601Week: function (e) {
        var t, i = new Date(e.getTime());
        return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
    }, parseDate: function (i, a, s) {
        if (null == i || null == a)throw"Invalid arguments";
        if (a = "object" == typeof a ? "" + a : a + "", "" === a)return null;
        var n, r, o, u, c = 0, h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, l = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10), d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, p = (s ? s.dayNames : null) || this._defaults.dayNames, g = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, m = (s ? s.monthNames : null) || this._defaults.monthNames, f = -1, _ = -1, v = -1, k = -1, y = !1, b = function (e) {
            var t = i.length > n + 1 && i.charAt(n + 1) === e;
            return t && n++, t
        }, D = function (e) {
            var t = b(e), i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2, s = RegExp("^\\d{1," + i + "}"), n = a.substring(c).match(s);
            if (!n)throw"Missing number at position " + c;
            return c += n[0].length, parseInt(n[0], 10)
        }, w = function (i, s, n) {
            var r = -1, o = e.map(b(i) ? n : s,function (e, t) {
                return[
                    [t, e]
                ]
            }).sort(function (e, t) {
                return-(e[1].length - t[1].length)
            });
            if (e.each(o, function (e, i) {
                var s = i[1];
                return a.substr(c, s.length).toLowerCase() === s.toLowerCase() ? (r = i[0], c += s.length, !1) : t
            }), -1 !== r)return r + 1;
            throw"Unknown name at position " + c
        }, M = function () {
            if (a.charAt(c) !== i.charAt(n))throw"Unexpected literal at position " + c;
            c++
        };
        for (n = 0; i.length > n; n++)if (y)"'" !== i.charAt(n) || b("'") ? M() : y = !1; else switch (i.charAt(n)) {
            case"d":
                v = D("d");
                break;
            case"D":
                w("D", d, p);
                break;
            case"o":
                k = D("o");
                break;
            case"m":
                _ = D("m");
                break;
            case"M":
                _ = w("M", g, m);
                break;
            case"y":
                f = D("y");
                break;
            case"@":
                u = new Date(D("@")), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();
                break;
            case"!":
                u = new Date((D("!") - this._ticksTo1970) / 1e4), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();
                break;
            case"'":
                b("'") ? M() : y = !0;
                break;
            default:
                M()
        }
        if (a.length > c && (o = a.substr(c), !/^\s+/.test(o)))throw"Extra/unparsed characters found in date: " + o;
        if (-1 === f ? f = (new Date).getFullYear() : 100 > f && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= f ? 0 : -100)), k > -1)for (_ = 1, v = k; ;) {
            if (r = this._getDaysInMonth(f, _ - 1), r >= v)break;
            _++, v -= r
        }
        if (u = this._daylightSavingAdjust(new Date(f, _ - 1, v)), u.getFullYear() !== f || u.getMonth() + 1 !== _ || u.getDate() !== v)throw"Invalid date";
        return u
    }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (e, t, i) {
        if (!t)return"";
        var a, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, n = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, o = (i ? i.monthNames : null) || this._defaults.monthNames, u = function (t) {
            var i = e.length > a + 1 && e.charAt(a + 1) === t;
            return i && a++, i
        }, c = function (e, t, i) {
            var a = "" + t;
            if (u(e))for (; i > a.length;)a = "0" + a;
            return a
        }, h = function (e, t, i, a) {
            return u(e) ? a[t] : i[t]
        }, l = "", d = !1;
        if (t)for (a = 0; e.length > a; a++)if (d)"'" !== e.charAt(a) || u("'") ? l += e.charAt(a) : d = !1; else switch (e.charAt(a)) {
            case"d":
                l += c("d", t.getDate(), 2);
                break;
            case"D":
                l += h("D", t.getDay(), s, n);
                break;
            case"o":
                l += c("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;
            case"m":
                l += c("m", t.getMonth() + 1, 2);
                break;
            case"M":
                l += h("M", t.getMonth(), r, o);
                break;
            case"y":
                l += u("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                break;
            case"@":
                l += t.getTime();
                break;
            case"!":
                l += 1e4 * t.getTime() + this._ticksTo1970;
                break;
            case"'":
                u("'") ? l += "'" : d = !0;
                break;
            default:
                l += e.charAt(a)
        }
        return l
    }, _possibleChars: function (e) {
        var t, i = "", a = !1, s = function (i) {
            var a = e.length > t + 1 && e.charAt(t + 1) === i;
            return a && t++, a
        };
        for (t = 0; e.length > t; t++)if (a)"'" !== e.charAt(t) || s("'") ? i += e.charAt(t) : a = !1; else switch (e.charAt(t)) {
            case"d":
            case"m":
            case"y":
            case"@":
                i += "0123456789";
                break;
            case"D":
            case"M":
                return null;
            case"'":
                s("'") ? i += "'" : a = !0;
                break;
            default:
                i += e.charAt(t)
        }
        return i
    }, _get: function (e, i) {
        return e.settings[i] !== t ? e.settings[i] : this._defaults[i]
    }, _setDateFromField: function (e, t) {
        if (e.input.val() !== e.lastVal) {
            var i = this._get(e, "dateFormat"), a = e.lastVal = e.input ? e.input.val() : null, s = this._getDefaultDate(e), n = s, r = this._getFormatConfig(e);
            try {
                n = this.parseDate(i, a, r) || s
            } catch (o) {
                a = t ? "" : a
            }
            e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = a ? n.getDate() : 0, e.currentMonth = a ? n.getMonth() : 0, e.currentYear = a ? n.getFullYear() : 0, this._adjustInstDate(e)
        }
    }, _getDefaultDate: function (e) {
        return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
    }, _determineDate: function (t, i, a) {
        var s = function (e) {
            var t = new Date;
            return t.setDate(t.getDate() + e), t
        }, n = function (i) {
            try {
                return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
            } catch (a) {
            }
            for (var s = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, n = s.getFullYear(), r = s.getMonth(), o = s.getDate(), u = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = u.exec(i); c;) {
                switch (c[2] || "d") {
                    case"d":
                    case"D":
                        o += parseInt(c[1], 10);
                        break;
                    case"w":
                    case"W":
                        o += 7 * parseInt(c[1], 10);
                        break;
                    case"m":
                    case"M":
                        r += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
                        break;
                    case"y":
                    case"Y":
                        n += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r))
                }
                c = u.exec(i)
            }
            return new Date(n, r, o)
        }, r = null == i || "" === i ? a : "string" == typeof i ? n(i) : "number" == typeof i ? isNaN(i) ? a : s(i) : new Date(i.getTime());
        return r = r && "Invalid Date" == "" + r ? a : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
    }, _daylightSavingAdjust: function (e) {
        return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
    }, _setDate: function (e, t, i) {
        var a = !t, s = e.selectedMonth, n = e.selectedYear, r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
        e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), s === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(a ? "" : this._formatDate(e))
    }, _getDate: function (e) {
        var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return t
    }, _attachHandlers: function (t) {
        var i = this._get(t, "stepMonths"), a = "#" + t.id.replace(/\\\\/g, "\\");
        t.dpDiv.find("[data-handler]").map(function () {
            var t = {prev: function () {
                e.datepicker._adjustDate(a, -i, "M")
            }, next: function () {
                e.datepicker._adjustDate(a, +i, "M")
            }, hide: function () {
                e.datepicker._hideDatepicker()
            }, today: function () {
                e.datepicker._gotoToday(a)
            }, selectDay: function () {
                return e.datepicker._selectDay(a, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
            }, selectMonth: function () {
                return e.datepicker._selectMonthYear(a, this, "M"), !1
            }, selectYear: function () {
                return e.datepicker._selectMonthYear(a, this, "Y"), !1
            }};
            e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
        })
    }, _generateHTML: function (e) {
        var t, i, a, s, n, r, o, u, c, h, l, d, p, g, m, f, _, v, k, y, b, D, w, M, C, x, I, N, T, A, E, S, Y, F, P, O, j, K, R, H = new Date, W = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())), L = this._get(e, "isRTL"), U = this._get(e, "showButtonPanel"), B = this._get(e, "hideIfNoPrevNext"), z = this._get(e, "navigationAsDateFormat"), q = this._getNumberOfMonths(e), G = this._get(e, "showCurrentAtPos"), J = this._get(e, "stepMonths"), Q = 1 !== q[0] || 1 !== q[1], V = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), $ = this._getMinMaxDate(e, "min"), X = this._getMinMaxDate(e, "max"), Z = e.drawMonth - G, et = e.drawYear;
        if (0 > Z && (Z += 12, et--), X)for (t = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - q[0] * q[1] + 1, X.getDate())), t = $ && $ > t ? $ : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;)Z--, 0 > Z && (Z = 11, et--);
        for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = z ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : i, a = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(e, "nextText"), s = z ? this.formatDate(s, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : s, n = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + s + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? V : W, r = z ? this.formatDate(r, o, this._getFormatConfig(e)) : r, u = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", c = U ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (L ? u : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (L ? "" : u) + "</div>" : "", h = parseInt(this._get(e, "firstDay"), 10), h = isNaN(h) ? 0 : h, l = this._get(e, "showWeek"), d = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), g = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), f = this._get(e, "beforeShowDay"), _ = this._get(e, "showOtherMonths"), v = this._get(e, "selectOtherMonths"), k = this._getDefaultDate(e), y = "", D = 0; q[0] > D; D++) {
            for (w = "", this.maxRows = 4, M = 0; q[1] > M; M++) {
                if (C = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), x = " ui-corner-all", I = "", Q) {
                    if (I += "<div class='ui-datepicker-group", q[1] > 1)switch (M) {
                        case 0:
                            I += " ui-datepicker-group-first", x = " ui-corner-" + (L ? "right" : "left");
                            break;
                        case q[1] - 1:
                            I += " ui-datepicker-group-last", x = " ui-corner-" + (L ? "left" : "right");
                            break;
                        default:
                            I += " ui-datepicker-group-middle", x = ""
                    }
                    I += "'>"
                }
                for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + x + "'>" + (/all|left/.test(x) && 0 === D ? L ? n : a : "") + (/all|right/.test(x) && 0 === D ? L ? a : n : "") + this._generateMonthYearHeader(e, Z, et, $, X, D > 0 || M > 0, g, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", N = l ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", b = 0; 7 > b; b++)T = (b + h) % 7, N += "<th" + ((b + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[T] + "'>" + p[T] + "</span></th>";
                for (I += N + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), E = (this._getFirstDayOfMonth(et, Z) - h + 7) % 7, S = Math.ceil((E + A) / 7), Y = Q ? this.maxRows > S ? this.maxRows : S : S, this.maxRows = Y, F = this._daylightSavingAdjust(new Date(et, Z, 1 - E)), P = 0; Y > P; P++) {
                    for (I += "<tr>", O = l ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(F) + "</td>" : "", b = 0; 7 > b; b++)j = f ? f.apply(e.input ? e.input[0] : null, [F]) : [!0, ""], K = F.getMonth() !== Z, R = K && !v || !j[0] || $ && $ > F || X && F > X, O += "<td class='" + ((b + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (K ? " ui-datepicker-other-month" : "") + (F.getTime() === C.getTime() && Z === e.selectedMonth && e._keyEvent || k.getTime() === F.getTime() && k.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (K && !_ ? "" : " " + j[1] + (F.getTime() === V.getTime() ? " " + this._currentClass : "") + (F.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (K && !_ || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + F.getMonth() + "' data-year='" + F.getFullYear() + "'") + ">" + (K && !_ ? "&#xa0;" : R ? "<span class='ui-state-default'>" + F.getDate() + "</span>" : "<a class='ui-state-default" + (F.getTime() === W.getTime() ? " ui-state-highlight" : "") + (F.getTime() === V.getTime() ? " ui-state-active" : "") + (K ? " ui-priority-secondary" : "") + "' href='#'>" + F.getDate() + "</a>") + "</td>", F.setDate(F.getDate() + 1), F = this._daylightSavingAdjust(F);
                    I += O + "</tr>"
                }
                Z++, Z > 11 && (Z = 0, et++), I += "</tbody></table>" + (Q ? "</div>" + (q[0] > 0 && M === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += I
            }
            y += w
        }
        return y += c, e._keyEvent = !1, y
    }, _generateMonthYearHeader: function (e, t, i, a, s, n, r, o) {
        var u, c, h, l, d, p, g, m, f = this._get(e, "changeMonth"), _ = this._get(e, "changeYear"), v = this._get(e, "showMonthAfterYear"), k = "<div class='ui-datepicker-title'>", y = "";
        if (n || !f)y += "<span class='ui-datepicker-month'>" + r[t] + "</span>"; else {
            for (u = a && a.getFullYear() === i, c = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)(!u || h >= a.getMonth()) && (!c || s.getMonth() >= h) && (y += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "</option>");
            y += "</select>"
        }
        if (v || (k += y + (!n && f && _ ? "" : "&#xa0;")), !e.yearshtml)if (e.yearshtml = "", n || !_)k += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
            for (l = this._get(e, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (e) {
                var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10);
                return isNaN(t) ? d : t
            }, g = p(l[0]), m = Math.max(g, p(l[1] || "")), g = a ? Math.max(g, a.getFullYear()) : g, m = s ? Math.min(m, s.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= g; g++)e.yearshtml += "<option value='" + g + "'" + (g === i ? " selected='selected'" : "") + ">" + g + "</option>";
            e.yearshtml += "</select>", k += e.yearshtml, e.yearshtml = null
        }
        return k += this._get(e, "yearSuffix"), v && (k += (!n && f && _ ? "" : "&#xa0;") + y), k += "</div>"
    }, _adjustInstDate: function (e, t, i) {
        var a = e.drawYear + ("Y" === i ? t : 0), s = e.drawMonth + ("M" === i ? t : 0), n = Math.min(e.selectedDay, this._getDaysInMonth(a, s)) + ("D" === i ? t : 0), r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(a, s, n)));
        e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
    }, _restrictMinMax: function (e, t) {
        var i = this._getMinMaxDate(e, "min"), a = this._getMinMaxDate(e, "max"), s = i && i > t ? i : t;
        return a && s > a ? a : s
    }, _notifyChange: function (e) {
        var t = this._get(e, "onChangeMonthYear");
        t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
    }, _getNumberOfMonths: function (e) {
        var t = this._get(e, "numberOfMonths");
        return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
    }, _getMinMaxDate: function (e, t) {
        return this._determineDate(e, this._get(e, t + "Date"), null)
    }, _getDaysInMonth: function (e, t) {
        return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
    }, _getFirstDayOfMonth: function (e, t) {
        return new Date(e, t, 1).getDay()
    }, _canAdjustMonth: function (e, t, i, a) {
        var s = this._getNumberOfMonths(e), n = this._daylightSavingAdjust(new Date(i, a + (0 > t ? t : s[0] * s[1]), 1));
        return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n)
    }, _isInRange: function (e, t) {
        var i, a, s = this._getMinMaxDate(e, "min"), n = this._getMinMaxDate(e, "max"), r = null, o = null, u = this._get(e, "yearRange");
        return u && (i = u.split(":"), a = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += a), i[1].match(/[+\-].*/) && (o += a)), (!s || t.getTime() >= s.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear())
    }, _getFormatConfig: function (e) {
        var t = this._get(e, "shortYearCutoff");
        return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames")}
    }, _formatDate: function (e, t, i, a) {
        t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
        var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(a, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
    }}), e.fn.datepicker = function (t) {
        if (!this.length)return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return"string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.4"
})(jQuery);
(function (t) {
    t.widget("ui.menu", {version: "1.10.4", defaultElement: "<ul>", delay: 300, options: {icons: {submenu: "ui-icon-carat-1-e"}, menus: "ul", position: {my: "left top", at: "right top"}, role: "menu", blur: null, focus: null, select: null}, _create: function () {
        this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({role: this.options.role, tabIndex: 0}).bind("click" + this.eventNamespace, t.proxy(function (t) {
            this.options.disabled && t.preventDefault()
        }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({"mousedown .ui-menu-item > a": function (t) {
            t.preventDefault()
        }, "click .ui-state-disabled > a": function (t) {
            t.preventDefault()
        }, "click .ui-menu-item:has(a)": function (e) {
            var i = t(e.target).closest(".ui-menu-item");
            !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
        }, "mouseenter .ui-menu-item": function (e) {
            var i = t(e.currentTarget);
            i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
        }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
            var i = this.active || this.element.children(".ui-menu-item").eq(0);
            e || this.focus(t, i)
        }, blur: function (e) {
            this._delay(function () {
                t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
            })
        }, keydown: "_keydown"}), this.refresh(), this._on(this.document, {click: function (e) {
            t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
        }})
    }, _destroy: function () {
        this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
            var e = t(this);
            e.data("ui-menu-submenu-carat") && e.remove()
        }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
    }, _keydown: function (e) {
        function i(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        var s, n, a, o, r, l = !0;
        switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case t.ui.keyCode.UP:
                this.previous(e);
                break;
            case t.ui.keyCode.DOWN:
                this.next(e);
                break;
            case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                l = !1, n = this.previousFilter || "", a = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return r.test(t(this).children("a").text())
                }), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(e.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return r.test(t(this).children("a").text())
                })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function () {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
        }
        l && e.preventDefault()
    }, _activate: function (t) {
        this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
    }, refresh: function () {
        var e, i = this.options.icons.submenu, s = this.element.find(this.options.menus);
        this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role: this.options.role, "aria-hidden": "true", "aria-expanded": "false"}).each(function () {
            var e = t(this), s = e.prev("a"), n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
            s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
        }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex: -1, role: this._itemRole()}), e.children(":not(.ui-menu-item)").each(function () {
            var e = t(this);
            /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
        }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
    }, _itemRole: function () {
        return{menu: "menuitem", listbox: "option"}[this.options.role]
    }, _setOption: function (t, e) {
        "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
    }, focus: function (t, e) {
        var i, s;
        this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
            this._close()
        }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
    }, _scrollIntoView: function (e) {
        var i, s, n, a, o, r;
        this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
    }, blur: function (t, e) {
        e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {item: this.active}))
    }, _startOpening: function (t) {
        clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
            this._close(), this._open(t)
        }, this.delay))
    }, _open: function (e) {
        var i = t.extend({of: this.active}, this.options.position);
        clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
    }, collapseAll: function (e, i) {
        clearTimeout(this.timer), this.timer = this._delay(function () {
            var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
            s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
        }, this.delay)
    }, _close: function (t) {
        t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
    }, collapse: function (t) {
        var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
        e && e.length && (this._close(), this.focus(t, e))
    }, expand: function (t) {
        var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
        e && e.length && (this._open(e.parent()), this._delay(function () {
            this.focus(t, e)
        }))
    }, next: function (t) {
        this._move("next", "first", t)
    }, previous: function (t) {
        this._move("prev", "last", t)
    }, isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length
    }, isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length
    }, _move: function (t, e, i) {
        var s;
        this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
    }, nextPage: function (e) {
        var i, s, n;
        return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
            return i = t(this), 0 > i.offset().top - s - n
        }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined)
    }, previousPage: function (e) {
        var i, s, n;
        return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
            return i = t(this), i.offset().top - s + n > 0
        }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined)
    }, _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight")
    }, select: function (e) {
        this.active = this.active || t(e.target).closest(".ui-menu-item");
        var i = {item: this.active};
        this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
    }})
})(jQuery);
(function (t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {version: "1.10.4", widgetEventPrefix: "slide", options: {animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null}, _create: function () {
        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
    }, _refresh: function () {
        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
    }, _createHandles: function () {
        var e, i, s = this.options, n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", o = [];
        for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++)o.push(a);
        this.handles = n.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e) {
            t(this).data("ui-slider-handle-index", e)
        })
    }, _createRange: function () {
        var e = this.options, i = "";
        e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left: "", bottom: ""}) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
    }, _setupEvents: function () {
        var t = this.handles.add(this.range).filter("a");
        this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
    }, _destroy: function () {
        this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
    }, _mouseCapture: function (e) {
        var i, s, n, a, o, r, l, h, u = this, c = this.options;
        return c.disabled ? !1 : (this.elementSize = {width: this.element.outerWidth(), height: this.element.outerHeight()}, this.elementOffset = this.element.offset(), i = {x: e.pageX, y: e.pageY}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
            var i = Math.abs(s - u.values(e));
            (n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, a = t(this), o = e)
        }), r = this._start(e, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), l = a.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {left: 0, top: 0} : {left: e.pageX - l.left - a.width() / 2, top: e.pageY - l.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)}, this.handles.hasClass("ui-state-hover") || this._slide(e, o, s), this._animateOff = !0, !0))
    }, _mouseStart: function () {
        return!0
    }, _mouseDrag: function (t) {
        var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, i), !1
    }, _mouseStop: function (t) {
        return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
    }, _detectOrientation: function () {
        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
    }, _normValueFromMouse: function (t) {
        var e, i, s, n, a;
        return"horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
    }, _start: function (t, e) {
        var i = {handle: this.handles[e], value: this.value()};
        return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
    }, _slide: function (t, e, i) {
        var s, n, a;
        this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, a = this._trigger("slide", t, {handle: this.handles[e], value: i, values: n}), s = this.values(e ? 0 : 1), a !== !1 && this.values(e, i))) : i !== this.value() && (a = this._trigger("slide", t, {handle: this.handles[e], value: i}), a !== !1 && this.value(i))
    }, _stop: function (t, e) {
        var i = {handle: this.handles[e], value: this.value()};
        this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
    }, _change: function (t, e) {
        if (!this._keySliding && !this._mouseSliding) {
            var i = {handle: this.handles[e], value: this.value()};
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
        }
    }, value: function (t) {
        return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value()
    }, values: function (e, i) {
        var s, n, a;
        if (arguments.length > 1)return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined;
        if (!arguments.length)return this._values();
        if (!t.isArray(arguments[0]))return this.options.values && this.options.values.length ? this._values(e) : this.value();
        for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1)s[a] = this._trimAlignValue(n[a]), this._change(null, a);
        this._refreshValue()
    }, _setOption: function (e, i) {
        var s, n = 0;
        switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
            case"orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case"value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case"values":
                for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1)this._change(null, s);
                this._animateOff = !1;
                break;
            case"min":
            case"max":
                this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                break;
            case"range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1
        }
    }, _value: function () {
        var t = this.options.value;
        return t = this._trimAlignValue(t)
    }, _values: function (t) {
        var e, i, s;
        if (arguments.length)return e = this.options.values[t], e = this._trimAlignValue(e);
        if (this.options.values && this.options.values.length) {
            for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)i[s] = this._trimAlignValue(i[s]);
            return i
        }
        return[]
    }, _trimAlignValue: function (t) {
        if (this._valueMin() >= t)return this._valueMin();
        if (t >= this._valueMax())return this._valueMax();
        var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
        return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
    }, _valueMin: function () {
        return this.options.min
    }, _valueMax: function () {
        return this.options.max
    }, _refreshValue: function () {
        var e, i, s, n, a, o = this.options.range, r = this.options, l = this, h = this._animateOff ? !1 : r.animate, u = {};
        this.options.values && this.options.values.length ? this.handles.each(function (s) {
            i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](u, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({left: i + "%"}, r.animate), 1 === s && l.range[h ? "animate" : "css"]({width: i - e + "%"}, {queue: !1, duration: r.animate})) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({bottom: i + "%"}, r.animate), 1 === s && l.range[h ? "animate" : "css"]({height: i - e + "%"}, {queue: !1, duration: r.animate}))), e = i
        }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: i + "%"}, r.animate), "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({width: 100 - i + "%"}, {queue: !1, duration: r.animate}), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: i + "%"}, r.animate), "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({height: 100 - i + "%"}, {queue: !1, duration: r.animate}))
    }, _handleEvents: {keydown: function (i) {
        var s, n, a, o, r = t(i.target).data("ui-slider-handle-index");
        switch (i.keyCode) {
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_UP:
            case t.ui.keyCode.PAGE_DOWN:
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
                if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1))return
        }
        switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
            case t.ui.keyCode.HOME:
                a = this._valueMin();
                break;
            case t.ui.keyCode.END:
                a = this._valueMax();
                break;
            case t.ui.keyCode.PAGE_UP:
                a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
                break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
                if (n === this._valueMax())return;
                a = this._trimAlignValue(n + o);
                break;
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
                if (n === this._valueMin())return;
                a = this._trimAlignValue(n - o)
        }
        this._slide(i, r, a)
    }, click: function (t) {
        t.preventDefault()
    }, keyup: function (e) {
        var i = t(e.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
    }}})
})(jQuery);
(function (t, e) {
    var i = "ui-effects-";
    t.effects = {effect: {}}, function (t, e) {
        function i(t, e, i) {
            var s = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }

        function s(i) {
            var s = h(), n = s._rgba = [];
            return i = i.toLowerCase(), f(l, function (t, a) {
                var o, r = a.re.exec(i), l = r && a.parse(r), h = a.space || "rgba";
                return l ? (o = s[h](l), s[c[h].cache] = o[c[h].cache], n = s._rgba = o._rgba, !1) : e
            }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i]
        }

        function n(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }

        var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, l = [
            {re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) {
                return[t[1], t[2], t[3], t[4]]
            }},
            {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) {
                return[2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }},
            {re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                return[parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }},
            {re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                return[parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }},
            {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (t) {
                return[t[1], t[2] / 100, t[3] / 100, t[4]]
            }}
        ], h = t.Color = function (e, i, s, n) {
            return new t.Color.fn.parse(e, i, s, n)
        }, c = {rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}}, hsla: {props: {hue: {idx: 0, type: "degrees"}, saturation: {idx: 1, type: "percent"}, lightness: {idx: 2, type: "percent"}}}}, u = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, d = h.support = {}, p = t("<p>")[0], f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
            e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
        }), h.fn = t.extend(h.prototype, {parse: function (n, o, r, l) {
            if (n === e)return this._rgba = [null, null, null, null], this;
            (n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
            var u = this, d = t.type(n), p = this._rgba = [];
            return o !== e && (n = [n, o, r, l], d = "array"), "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
                p[e.idx] = i(n[e.idx], e)
            }), this) : "object" === d ? (n instanceof h ? f(c, function (t, e) {
                n[e.cache] && (u[e.cache] = n[e.cache].slice())
            }) : f(c, function (e, s) {
                var a = s.cache;
                f(s.props, function (t, e) {
                    if (!u[a] && s.to) {
                        if ("alpha" === t || null == n[t])return;
                        u[a] = s.to(u._rgba)
                    }
                    u[a][e.idx] = i(n[t], e, !0)
                }), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
            }), this) : e
        }, is: function (t) {
            var i = h(t), s = !0, n = this;
            return f(c, function (t, a) {
                var o, r = i[a.cache];
                return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (t, i) {
                    return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
                })), s
            }), s
        }, _space: function () {
            var t = [], e = this;
            return f(c, function (i, s) {
                e[s.cache] && t.push(i)
            }), t.pop()
        }, transition: function (t, e) {
            var s = h(t), n = s._space(), a = c[n], o = 0 === this.alpha() ? h("transparent") : this, r = o[a.cache] || a.to(o._rgba), l = r.slice();
            return s = s[a.cache], f(a.props, function (t, n) {
                var a = n.idx, o = r[a], h = s[a], c = u[n.type] || {};
                null !== h && (null === o ? l[a] = h : (c.mod && (h - o > c.mod / 2 ? o += c.mod : o - h > c.mod / 2 && (o -= c.mod)), l[a] = i((h - o) * e + o, n)))
            }), this[n](l)
        }, blend: function (e) {
            if (1 === this._rgba[3])return this;
            var i = this._rgba.slice(), s = i.pop(), n = h(e)._rgba;
            return h(t.map(i, function (t, e) {
                return(1 - s) * n[e] + s * t
            }))
        }, toRgbaString: function () {
            var e = "rgba(", i = t.map(this._rgba, function (t, e) {
                return null == t ? e > 2 ? 1 : 0 : t
            });
            return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
        }, toHslaString: function () {
            var e = "hsla(", i = t.map(this.hsla(), function (t, e) {
                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
            });
            return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
        }, toHexString: function (e) {
            var i = this._rgba.slice(), s = i.pop();
            return e && i.push(~~(255 * s)), "#" + t.map(i,function (t) {
                return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
            }).join("")
        }, toString: function () {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }}), h.fn.parse.prototype = h.fn, c.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])return[null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, a = t[2] / 255, o = t[3], r = Math.max(s, n, a), l = Math.min(s, n, a), h = r - l, c = r + l, u = .5 * c;
            return e = l === r ? 0 : s === r ? 60 * (n - a) / h + 360 : n === r ? 60 * (a - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o]
        }, c.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])return[null, null, null, t[3]];
            var e = t[0] / 360, i = t[1], s = t[2], a = t[3], o = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - o;
            return[Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
        }, f(c, function (s, n) {
            var a = n.props, o = n.cache, l = n.to, c = n.from;
            h.fn[s] = function (s) {
                if (l && !this[o] && (this[o] = l(this._rgba)), s === e)return this[o].slice();
                var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[o].slice();
                return f(a, function (t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                }), c ? (n = h(c(d)), n[o] = d, n) : h(d)
            }, f(a, function (e, i) {
                h.fn[e] || (h.fn[e] = function (n) {
                    var a, o = t.type(n), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, h = this[l](), c = h[i.idx];
                    return"undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), h[i.idx] = n, this[l](h)))
                })
            })
        }), h.hook = function (e) {
            var i = e.split(" ");
            f(i, function (e, i) {
                t.cssHooks[i] = {set: function (e, n) {
                    var a, o, r = "";
                    if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
                        if (n = h(a || n), !d.rgba && 1 !== n._rgba[3]) {
                            for (o = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && o && o.style;)try {
                                r = t.css(o, "backgroundColor"), o = o.parentNode
                            } catch (l) {
                            }
                            n = n.blend(r && "transparent" !== r ? r : "_default")
                        }
                        n = n.toRgbaString()
                    }
                    try {
                        e.style[i] = n
                    } catch (l) {
                    }
                }}, t.fx.step[i] = function (e) {
                    e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }, h.hook(o), t.cssHooks.borderColor = {expand: function (t) {
            var e = {};
            return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
                e["border" + s + "Color"] = t
            }), e
        }}, a = t.Color.names = {aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff"}
    }(jQuery), function () {
        function i(e) {
            var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, a = {};
            if (n && n.length && n[0] && n[n[0]])for (s = n.length; s--;)i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]); else for (i in n)"string" == typeof n[i] && (a[i] = n[i]);
            return a
        }

        function s(e, i) {
            var s, n, o = {};
            for (s in i)n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
            return o
        }

        var n = ["add", "remove", "toggle"], a = {border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1};
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
            t.fx.step[i] = function (t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
            }
        }), t.fn.addBack || (t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.effects.animateClass = function (e, a, o, r) {
            var l = t.speed(a, o, r);
            return this.queue(function () {
                var a, o = t(this), r = o.attr("class") || "", h = l.children ? o.find("*").addBack() : o;
                h = h.map(function () {
                    var e = t(this);
                    return{el: e, start: i(this)}
                }), a = function () {
                    t.each(n, function (t, i) {
                        e[i] && o[i + "Class"](e[i])
                    })
                }, a(), h = h.map(function () {
                    return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                }), o.attr("class", r), h = h.map(function () {
                    var e = this, i = t.Deferred(), s = t.extend({}, l, {queue: !1, complete: function () {
                        i.resolve(e)
                    }});
                    return this.el.animate(this.diff, s), i.promise()
                }), t.when.apply(t, h.get()).done(function () {
                    a(), t.each(arguments, function () {
                        var e = this.el;
                        t.each(this.diff, function (t) {
                            e.css(t, "")
                        })
                    }), l.complete.call(o[0])
                })
            })
        }, t.fn.extend({addClass: function (e) {
            return function (i, s, n, a) {
                return s ? t.effects.animateClass.call(this, {add: i}, s, n, a) : e.apply(this, arguments)
            }
        }(t.fn.addClass), removeClass: function (e) {
            return function (i, s, n, a) {
                return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, s, n, a) : e.apply(this, arguments)
            }
        }(t.fn.removeClass), toggleClass: function (i) {
            return function (s, n, a, o, r) {
                return"boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {add: s} : {remove: s}, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: s}, n, a, o)
            }
        }(t.fn.toggleClass), switchClass: function (e, i, s, n, a) {
            return t.effects.animateClass.call(this, {add: i, remove: e}, s, n, a)
        }})
    }(), function () {
        function s(e, i, s, n) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
        }

        function n(e) {
            return!e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
        }

        t.extend(t.effects, {version: "1.10.4", save: function (t, e) {
            for (var s = 0; e.length > s; s++)null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
        }, restore: function (t, s) {
            var n, a;
            for (a = 0; s.length > a; a++)null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n))
        }, setMode: function (t, e) {
            return"toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
        }, getBaseline: function (t, e) {
            var i, s;
            switch (t[0]) {
                case"top":
                    i = 0;
                    break;
                case"middle":
                    i = .5;
                    break;
                case"bottom":
                    i = 1;
                    break;
                default:
                    i = t[0] / e.height
            }
            switch (t[1]) {
                case"left":
                    s = 0;
                    break;
                case"center":
                    s = .5;
                    break;
                case"right":
                    s = 1;
                    break;
                default:
                    s = t[1] / e.width
            }
            return{x: s, y: i}
        }, createWrapper: function (e) {
            if (e.parent().is(".ui-effects-wrapper"))return e.parent();
            var i = {width: e.outerWidth(!0), height: e.outerHeight(!0), "float": e.css("float")}, s = t("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0}), n = {width: e.width(), height: e.height()}, a = document.activeElement;
            try {
                a.id
            } catch (o) {
                a = document.body
            }
            return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {position: e.css("position"), zIndex: e.css("z-index")}), t.each(["top", "left", "bottom", "right"], function (t, s) {
                i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
            }), e.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"})), e.css(n), s.css(i).show()
        }, removeWrapper: function (e) {
            var i = document.activeElement;
            return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
        }, setTransition: function (e, i, s, n) {
            return n = n || {}, t.each(i, function (t, i) {
                var a = e.cssUnit(i);
                a[0] > 0 && (n[i] = a[0] * s + a[1])
            }), n
        }}), t.fn.extend({effect: function () {
            function e(e) {
                function s() {
                    t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
                }

                var n = t(this), a = i.complete, r = i.mode;
                (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
            }

            var i = s.apply(this, arguments), n = i.mode, a = i.queue, o = t.effects.effect[i.effect];
            return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function () {
                i.complete && i.complete.call(this)
            }) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
        }, show: function (t) {
            return function (e) {
                if (n(e))return t.apply(this, arguments);
                var i = s.apply(this, arguments);
                return i.mode = "show", this.effect.call(this, i)
            }
        }(t.fn.show), hide: function (t) {
            return function (e) {
                if (n(e))return t.apply(this, arguments);
                var i = s.apply(this, arguments);
                return i.mode = "hide", this.effect.call(this, i)
            }
        }(t.fn.hide), toggle: function (t) {
            return function (e) {
                if (n(e) || "boolean" == typeof e)return t.apply(this, arguments);
                var i = s.apply(this, arguments);
                return i.mode = "toggle", this.effect.call(this, i)
            }
        }(t.fn.toggle), cssUnit: function (e) {
            var i = this.css(e), s = [];
            return t.each(["em", "px", "%", "pt"], function (t, e) {
                i.indexOf(e) > 0 && (s = [parseFloat(i), e])
            }), s
        }})
    }(), function () {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
            e[i] = function (e) {
                return Math.pow(e, t + 2)
            }
        }), t.extend(e, {Sine: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, Circ: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        }, Elastic: function (t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
        }, Back: function (t) {
            return t * t * (3 * t - 2)
        }, Bounce: function (t) {
            for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;);
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }}), t.each(e, function (e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                return 1 - i(1 - t)
            }, t.easing["easeInOut" + e] = function (t) {
                return.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        })
    }()
})(jQuery);
(function (t) {
    var e = /up|down|vertical/, i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function (s, n) {
        var a, o, r, l = t(this), h = ["position", "top", "bottom", "left", "right", "height", "width"], c = t.effects.setMode(l, s.mode || "hide"), u = s.direction || "up", d = e.test(u), p = d ? "height" : "width", f = d ? "top" : "left", g = i.test(u), m = {}, v = "show" === c;
        l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h), l.show(), a = t.effects.createWrapper(l).css({overflow: "hidden"}), o = a[p](), r = parseFloat(a.css(f)) || 0, m[p] = v ? o : 0, g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({position: "absolute"}), m[f] = v ? r : o + r), v && (a.css(p, 0), g || a.css(f, r + o)), a.animate(m, {duration: s.duration, easing: s.easing, queue: !1, complete: function () {
            "hide" === c && l.hide(), t.effects.restore(l, h), t.effects.removeWrapper(l), n()
        }})
    }
})(jQuery);
(function (t) {
    t.effects.effect.bounce = function (e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], l = t.effects.setMode(o, e.mode || "effect"), h = "hide" === l, c = "show" === l, u = e.direction || "up", d = e.distance, p = e.times || 5, f = 2 * p + (c || h ? 1 : 0), g = e.duration / f, m = e.easing, v = "up" === u || "down" === u ? "top" : "left", _ = "up" === u || "left" === u, b = o.queue(), y = b.length;
        for ((c || h) && r.push("opacity"), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (a = {opacity: 1}, a[v] = 0, o.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(a, g, m)), h && (d /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++)n = {}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, g, m).animate(a, g, m), d = h ? 2 * d : d / 2;
        h && (n = {opacity: 0}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, g, m)), o.queue(function () {
            h && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
        }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), o.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.clip = function (e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], l = t.effects.setMode(o, e.mode || "hide"), h = "show" === l, c = e.direction || "vertical", u = "vertical" === c, d = u ? "height" : "width", p = u ? "top" : "left", f = {};
        t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({overflow: "hidden"}), n = "IMG" === o[0].tagName ? s : o, a = n[d](), h && (n.css(d, 0), n.css(p, a / 2)), f[d] = h ? a : 0, f[p] = h ? 0 : a / 2, n.animate(f, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
            h || o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
        }})
    }
})(jQuery);
(function (t) {
    t.effects.effect.drop = function (e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], o = t.effects.setMode(n, e.mode || "hide"), r = "show" === o, l = e.direction || "left", h = "up" === l || "down" === l ? "top" : "left", c = "up" === l || "left" === l ? "pos" : "neg", u = {opacity: r ? 1 : 0};
        t.effects.save(n, a), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(h, "pos" === c ? -s : s), u[h] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
            "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
        }})
    }
})(jQuery);
(function (t) {
    t.effects.effect.explode = function (e, i) {
        function s() {
            b.push(this), b.length === u * d && n()
        }

        function n() {
            p.css({visibility: "visible"}), t(b).remove(), g || p.hide(), i()
        }

        var a, o, r, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = u, p = t(this), f = t.effects.setMode(p, e.mode || "hide"), g = "show" === f, m = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / d), _ = Math.ceil(p.outerHeight() / u), b = [];
        for (a = 0; u > a; a++)for (l = m.top + a * _, c = a - (u - 1) / 2, o = 0; d > o; o++)r = m.left + o * v, h = o - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({position: "absolute", visibility: "visible", left: -o * v, top: -a * _}).parent().addClass("ui-effects-explode").css({position: "absolute", overflow: "hidden", width: v, height: _, left: r + (g ? h * v : 0), top: l + (g ? c * _ : 0), opacity: g ? 0 : 1}).animate({left: r + (g ? 0 : h * v), top: l + (g ? 0 : c * _), opacity: g ? 1 : 0}, e.duration || 500, e.easing, s)
    }
})(jQuery);
(function (t) {
    t.effects.effect.fade = function (e, i) {
        var s = t(this), n = t.effects.setMode(s, e.mode || "toggle");
        s.animate({opacity: n}, {queue: !1, duration: e.duration, easing: e.easing, complete: i})
    }
})(jQuery);
(function (t) {
    t.effects.effect.fold = function (e, i) {
        var s, n, a = t(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], r = t.effects.setMode(a, e.mode || "hide"), l = "show" === r, h = "hide" === r, c = e.size || 15, u = /([0-9]+)%/.exec(c), d = !!e.horizFirst, p = l !== d, f = p ? ["width", "height"] : ["height", "width"], g = e.duration / 2, m = {}, v = {};
        t.effects.save(a, o), a.show(), s = t.effects.createWrapper(a).css({overflow: "hidden"}), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[h ? 0 : 1]), l && s.css(d ? {height: 0, width: c} : {height: c, width: 0}), m[f[0]] = l ? n[0] : c, v[f[1]] = l ? n[1] : 0, s.animate(m, g, e.easing).animate(v, g, e.easing, function () {
            h && a.hide(), t.effects.restore(a, o), t.effects.removeWrapper(a), i()
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.highlight = function (e, i) {
        var s = t(this), n = ["backgroundImage", "backgroundColor", "opacity"], a = t.effects.setMode(s, e.mode || "show"), o = {backgroundColor: s.css("backgroundColor")};
        "hide" === a && (o.opacity = 0), t.effects.save(s, n), s.show().css({backgroundImage: "none", backgroundColor: e.color || "#ffff99"}).animate(o, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
            "hide" === a && s.hide(), t.effects.restore(s, n), i()
        }})
    }
})(jQuery);
(function (t) {
    t.effects.effect.pulsate = function (e, i) {
        var s, n = t(this), a = t.effects.setMode(n, e.mode || "show"), o = "show" === a, r = "hide" === a, l = o || "hide" === a, h = 2 * (e.times || 5) + (l ? 1 : 0), c = e.duration / h, u = 0, d = n.queue(), p = d.length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; h > s; s++)n.animate({opacity: u}, c, e.easing), u = 1 - u;
        n.animate({opacity: u}, c, e.easing), n.queue(function () {
            r && n.hide(), i()
        }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))), n.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.puff = function (e, i) {
        var s = t(this), n = t.effects.setMode(s, e.mode || "hide"), a = "hide" === n, o = parseInt(e.percent, 10) || 150, r = o / 100, l = {height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth()};
        t.extend(e, {effect: "scale", queue: !1, fade: !0, mode: n, complete: i, percent: a ? o : 100, from: a ? l : {height: l.height * r, width: l.width * r, outerHeight: l.outerHeight * r, outerWidth: l.outerWidth * r}}), s.effect(e)
    }, t.effects.effect.scale = function (e, i) {
        var s = t(this), n = t.extend(!0, {}, e), a = t.effects.setMode(s, e.mode || "effect"), o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100), r = e.direction || "both", l = e.origin, h = {height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth()}, c = {y: "horizontal" !== r ? o / 100 : 1, x: "vertical" !== r ? o / 100 : 1};
        n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = l || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === a ? {height: 0, width: 0, outerHeight: 0, outerWidth: 0} : h), n.to = {height: h.height * c.y, width: h.width * c.x, outerHeight: h.outerHeight * c.y, outerWidth: h.outerWidth * c.x}, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
    }, t.effects.effect.size = function (e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], h = ["width", "height", "overflow"], c = ["fontSize"], u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = t.effects.setMode(o, e.mode || "effect"), f = e.restore || "effect" !== p, g = e.scale || "both", m = e.origin || ["middle", "center"], v = o.css("position"), _ = f ? r : l, b = {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
        "show" === p && o.show(), s = {height: o.height(), width: o.width(), outerHeight: o.outerHeight(), outerWidth: o.outerWidth()}, "toggle" === e.mode && "show" === p ? (o.from = e.to || b, o.to = e.from || s) : (o.from = e.from || ("show" === p ? b : s), o.to = e.to || ("hide" === p ? b : s)), a = {from: {y: o.from.height / s.height, x: o.from.width / s.width}, to: {y: o.to.height / s.height, x: o.to.width / s.width}}, ("box" === g || "both" === g) && (a.from.y !== a.to.y && (_ = _.concat(u), o.from = t.effects.setTransition(o, u, a.from.y, o.from), o.to = t.effects.setTransition(o, u, a.to.y, o.to)), a.from.x !== a.to.x && (_ = _.concat(d), o.from = t.effects.setTransition(o, d, a.from.x, o.from), o.to = t.effects.setTransition(o, d, a.to.x, o.to))), ("content" === g || "both" === g) && a.from.y !== a.to.y && (_ = _.concat(c).concat(h), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)), t.effects.save(o, _), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (n = t.effects.getBaseline(m, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), h = r.concat(u).concat(d), o.find("*[width]").each(function () {
            var i = t(this), s = {height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth()};
            f && t.effects.save(i, h), i.from = {height: s.height * a.from.y, width: s.width * a.from.x, outerHeight: s.outerHeight * a.from.y, outerWidth: s.outerWidth * a.from.x}, i.to = {height: s.height * a.to.y, width: s.width * a.to.x, outerHeight: s.height * a.to.y, outerWidth: s.width * a.to.x}, a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, u, a.from.y, i.from), i.to = t.effects.setTransition(i, u, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from), i.to = t.effects.setTransition(i, d, a.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function () {
                f && t.effects.restore(i, h)
            })
        })), o.animate(o.to, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
            0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), t.effects.restore(o, _), f || ("static" === v ? o.css({position: "relative", top: o.to.top, left: o.to.left}) : t.each(["top", "left"], function (t, e) {
                o.css(e, function (e, i) {
                    var s = parseInt(i, 10), n = t ? o.to.left : o.to.top;
                    return"auto" === i ? n + "px" : s + n + "px"
                })
            })), t.effects.removeWrapper(o), i()
        }})
    }
})(jQuery);
(function (t) {
    t.effects.effect.shake = function (e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], o = t.effects.setMode(n, e.mode || "effect"), r = e.direction || "left", l = e.distance || 20, h = e.times || 3, c = 2 * h + 1, u = Math.round(e.duration / c), d = "up" === r || "down" === r ? "top" : "left", p = "up" === r || "left" === r, f = {}, g = {}, m = {}, v = n.queue(), _ = v.length;
        for (t.effects.save(n, a), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + l, g[d] = (p ? "+=" : "-=") + 2 * l, m[d] = (p ? "-=" : "+=") + 2 * l, n.animate(f, u, e.easing), s = 1; h > s; s++)n.animate(g, u, e.easing).animate(m, u, e.easing);
        n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function () {
            "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
        }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.slide = function (e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "width", "height"], o = t.effects.setMode(n, e.mode || "show"), r = "show" === o, l = e.direction || "left", h = "up" === l || "down" === l ? "top" : "left", c = "up" === l || "left" === l, u = {};
        t.effects.save(n, a), n.show(), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({overflow: "hidden"}), r && n.css(h, c ? isNaN(s) ? "-" + s : -s : s), u[h] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
            "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
        }})
    }
})(jQuery);
(function (t) {
    t.effects.effect.transfer = function (e, i) {
        var s = t(this), n = t(e.to), a = "fixed" === n.css("position"), o = t("body"), r = a ? o.scrollTop() : 0, l = a ? o.scrollLeft() : 0, h = n.offset(), c = {top: h.top - r, left: h.left - l, height: n.innerHeight(), width: n.innerWidth()}, u = s.offset(), d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top: u.top - r, left: u.left - l, height: s.innerHeight(), width: s.innerWidth(), position: a ? "fixed" : "absolute"}).animate(c, e.duration, e.easing, function () {
            d.remove(), i()
        })
    }
})(jQuery);
/* Chosen v1.1.0 | (c) 2011-2013 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
(function () {
    var $, AbstractChosen, Chosen, SelectParser, _ref,
        __hasProp = {}.hasOwnProperty,
        __extends = function (child, parent) {
            for (var key in parent) {
                if (__hasProp.call(parent, key)) child[key] = parent[key];
            }
            function ctor() {
                this.constructor = child;
            }

            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
            child.__super__ = parent.prototype;
            return child;
        };

    SelectParser = (function () {
        function SelectParser() {
            this.options_index = 0;
            this.parsed = [];
        }

        SelectParser.prototype.add_node = function (child) {
            if (child.nodeName.toUpperCase() === "OPTGROUP") {
                return this.add_group(child);
            } else {
                return this.add_option(child);
            }
        };

        SelectParser.prototype.add_group = function (group) {
            var group_position, option, _i, _len, _ref, _results;

            group_position = this.parsed.length;
            this.parsed.push({
                array_index: group_position,
                group: true,
                label: this.escapeExpression(group.label),
                children: 0,
                disabled: group.disabled
            });
            _ref = group.childNodes;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                _results.push(this.add_option(option, group_position, group.disabled));
            }
            return _results;
        };

        SelectParser.prototype.add_option = function (option, group_position, group_disabled) {
            if (option.nodeName.toUpperCase() === "OPTION") {
                if (option.text !== "") {
                    if (group_position != null) {
                        this.parsed[group_position].children += 1;
                    }
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        value: option.value,
                        text: option.text,
                        html: option.innerHTML,
                        selected: option.selected,
                        disabled: group_disabled === true ? group_disabled : option.disabled,
                        group_array_index: group_position,
                        classes: option.className,
                        style: option.style.cssText
                    });
                } else {
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        empty: true
                    });
                }
                return this.options_index += 1;
            }
        };

        SelectParser.prototype.escapeExpression = function (text) {
            var map, unsafe_chars;

            if ((text == null) || text === false) {
                return "";
            }
            if (!/[\&\<\>\"\'\`]/.test(text)) {
                return text;
            }
            map = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            };
            unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
            return text.replace(unsafe_chars, function (chr) {
                return map[chr] || "&amp;";
            });
        };

        return SelectParser;

    })();

    SelectParser.select_to_array = function (select) {
        var child, parser, _i, _len, _ref;

        parser = new SelectParser();
        _ref = select.childNodes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            child = _ref[_i];
            parser.add_node(child);
        }
        return parser.parsed;
    };

    AbstractChosen = (function () {
        function AbstractChosen(form_field, options) {
            this.form_field = form_field;
            this.options = options != null ? options : {};
            if (!AbstractChosen.browser_is_supported()) {
                return;
            }
            this.is_multiple = this.form_field.multiple;
            this.set_default_text();
            this.set_default_values();
            this.setup();
            this.set_up_html();
            this.register_observers();
        }

        AbstractChosen.prototype.set_default_values = function () {
            var _this = this;

            this.click_test_action = function (evt) {
                return _this.test_active_click(evt);
            };
            this.activate_action = function (evt) {
                return _this.activate_field(evt);
            };
            this.active_field = false;
            this.mouse_on_container = false;
            this.results_showing = false;
            this.result_highlighted = null;
            this.result_single_selected = null;
            this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
            this.disable_search_threshold = this.options.disable_search_threshold || 0;
            this.disable_search = this.options.disable_search || false;
            this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
            this.group_search = this.options.group_search != null ? this.options.group_search : true;
            this.search_contains = this.options.search_contains || false;
            this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
            this.max_selected_options = this.options.max_selected_options || Infinity;
            this.inherit_select_classes = this.options.inherit_select_classes || false;
            this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
            return this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
        };

        AbstractChosen.prototype.set_default_text = function () {
            if (this.form_field.getAttribute("data-placeholder")) {
                this.default_text = this.form_field.getAttribute("data-placeholder");
            } else if (this.is_multiple) {
                this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
            } else {
                this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
            }
            return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
        };

        AbstractChosen.prototype.mouse_enter = function () {
            return this.mouse_on_container = true;
        };

        AbstractChosen.prototype.mouse_leave = function () {
            return this.mouse_on_container = false;
        };

        AbstractChosen.prototype.input_focus = function (evt) {
            var _this = this;

            if (this.is_multiple) {
                if (!this.active_field) {
                    return setTimeout((function () {
                        return _this.container_mousedown();
                    }), 50);
                }
            } else {
                if (!this.active_field) {
                    return this.activate_field();
                }
            }
        };

        AbstractChosen.prototype.input_blur = function (evt) {
            var _this = this;

            if (!this.mouse_on_container) {
                this.active_field = false;
                return setTimeout((function () {
                    return _this.blur_test();
                }), 100);
            }
        };

        AbstractChosen.prototype.results_option_build = function (options) {
            var content, data, _i, _len, _ref;

            content = '';
            _ref = this.results_data;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                data = _ref[_i];
                if (data.group) {
                    content += this.result_add_group(data);
                } else {
                    content += this.result_add_option(data);
                }
                if (options != null ? options.first : void 0) {
                    if (data.selected && this.is_multiple) {
                        this.choice_build(data);
                    } else if (data.selected && !this.is_multiple) {
                        this.single_set_selected_text(data.text);
                    }
                }
            }
            return content;
        };

        AbstractChosen.prototype.result_add_option = function (option) {
            var classes, style;

            if (!option.search_match) {
                return '';
            }
            if (!this.include_option_in_results(option)) {
                return '';
            }
            classes = [];
            if (!option.disabled && !(option.selected && this.is_multiple)) {
                classes.push("active-result");
            }
            if (option.disabled && !(option.selected && this.is_multiple)) {
                classes.push("disabled-result");
            }
            if (option.selected) {
                classes.push("result-selected");
            }
            if (option.group_array_index != null) {
                classes.push("group-option");
            }
            if (option.classes !== "") {
                classes.push(option.classes);
            }
            style = option.style.cssText !== "" ? " style=\"" + option.style + "\"" : "";
            return "<li class=\"" + (classes.join(' ')) + "\"" + style + " data-option-array-index=\"" + option.array_index + "\">" + option.search_text + "</li>";
        };

        AbstractChosen.prototype.result_add_group = function (group) {
            if (!(group.search_match || group.group_match)) {
                return '';
            }
            if (!(group.active_options > 0)) {
                return '';
            }
            return "<li class=\"group-result\">" + group.search_text + "</li>";
        };

        AbstractChosen.prototype.results_update_field = function () {
            this.set_default_text();
            if (!this.is_multiple) {
                this.results_reset_cleanup();
            }
            this.result_clear_highlight();
            this.result_single_selected = null;
            this.results_build();
            if (this.results_showing) {
                return this.winnow_results();
            }
        };

        AbstractChosen.prototype.results_toggle = function () {
            if (this.results_showing) {
                return this.results_hide();
            } else {
                return this.results_show();
            }
        };

        AbstractChosen.prototype.results_search = function (evt) {
            if (this.results_showing) {
                return this.winnow_results();
            } else {
                return this.results_show();
            }
        };

        AbstractChosen.prototype.winnow_results = function () {
            var escapedSearchText, option, regex, regexAnchor, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;

            this.no_results_clear();
            results = 0;
            searchText = this.get_search_text();
            escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            regexAnchor = this.search_contains ? "" : "^";
            regex = new RegExp(regexAnchor + escapedSearchText, 'i');
            zregex = new RegExp(escapedSearchText, 'i');
            _ref = this.results_data;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                option.search_match = false;
                results_group = null;
                if (this.include_option_in_results(option)) {
                    if (option.group) {
                        option.group_match = false;
                        option.active_options = 0;
                    }
                    if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
                        results_group = this.results_data[option.group_array_index];
                        if (results_group.active_options === 0 && results_group.search_match) {
                            results += 1;
                        }
                        results_group.active_options += 1;
                    }
                    if (!(option.group && !this.group_search)) {
                        option.search_text = option.group ? option.label : option.html;
                        option.search_match = this.search_string_match(option.search_text, regex);
                        if (option.search_match && !option.group) {
                            results += 1;
                        }
                        if (option.search_match) {
                            if (searchText.length) {
                                startpos = option.search_text.search(zregex);
                                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
                            }
                            if (results_group != null) {
                                results_group.group_match = true;
                            }
                        } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
                            option.search_match = true;
                        }
                    }
                }
            }
            this.result_clear_highlight();
            if (results < 1 && searchText.length) {
                this.update_results_content("");
                return this.no_results(searchText);
            } else {
                this.update_results_content(this.results_option_build());
                return this.winnow_results_set_highlight();
            }
        };

        AbstractChosen.prototype.search_string_match = function (search_string, regex) {
            var part, parts, _i, _len;

            if (regex.test(search_string)) {
                return true;
            } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
                parts = search_string.replace(/\[|\]/g, "").split(" ");
                if (parts.length) {
                    for (_i = 0, _len = parts.length; _i < _len; _i++) {
                        part = parts[_i];
                        if (regex.test(part)) {
                            return true;
                        }
                    }
                }
            }
        };

        AbstractChosen.prototype.choices_count = function () {
            var option, _i, _len, _ref;

            if (this.selected_option_count != null) {
                return this.selected_option_count;
            }
            this.selected_option_count = 0;
            _ref = this.form_field.options;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                if (option.selected) {
                    this.selected_option_count += 1;
                }
            }
            return this.selected_option_count;
        };

        AbstractChosen.prototype.choices_click = function (evt) {
            evt.preventDefault();
            if (!(this.results_showing || this.is_disabled)) {
                return this.results_show();
            }
        };

        AbstractChosen.prototype.keyup_checker = function (evt) {
            var stroke, _ref;

            stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
            this.search_field_scale();
            switch (stroke) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
                        return this.keydown_backstroke();
                    } else if (!this.pending_backstroke) {
                        this.result_clear_highlight();
                        return this.results_search();
                    }
                    break;
                case 13:
                    evt.preventDefault();
                    if (this.results_showing) {
                        return this.result_select(evt);
                    }
                    break;
                case 27:
                    if (this.results_showing) {
                        this.results_hide();
                    }
                    return true;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search();
            }
        };

        AbstractChosen.prototype.container_width = function () {
            if (this.options.width != null) {

                return this.options.width;
            } else {
                return "" + this.form_field.offsetWidth + "px";
            }
        };

        AbstractChosen.prototype.include_option_in_results = function (option) {
            if (this.is_multiple && (!this.display_selected_options && option.selected)) {
                return false;
            }
            if (!this.display_disabled_options && option.disabled) {
                return false;
            }
            if (option.empty) {
                return false;
            }
            return true;
        };

        AbstractChosen.browser_is_supported = function () {
            if (window.navigator.appName === "Microsoft Internet Explorer") {
                return document.documentMode >= 6;
            }
            if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
                return false;
            }
            if (/Android/i.test(window.navigator.userAgent)) {
                if (/Mobile/i.test(window.navigator.userAgent)) {
                    return false;
                }
            }
            return true;
        };

        AbstractChosen.default_multiple_text = "Select Some Options";

        AbstractChosen.default_single_text = "Select an Option";

        AbstractChosen.default_no_result_text = "No results match";

        return AbstractChosen;

    })();

    $ = jQuery;

    $.fn.extend({
        chosen: function (options) {
            if (!AbstractChosen.browser_is_supported()) {
                return this;
            }
            return this.each(function (input_field) {
                var $this, chosen;

                $this = $(this);
                chosen = $this.data('chosen');
                if (options === 'destroy' && chosen) {
                    chosen.destroy();
                } else if (!chosen) {
                    $this.data('chosen', new Chosen(this, options));
                }
            });
        }
    });

    Chosen = (function (_super) {
        __extends(Chosen, _super);

        function Chosen() {
            _ref = Chosen.__super__.constructor.apply(this, arguments);
            return _ref;
        }

        Chosen.prototype.setup = function () {
            this.form_field_jq = $(this.form_field);
            this.current_selectedIndex = this.form_field.selectedIndex;
            return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
        };

        Chosen.prototype.set_up_html = function () {
            var container_classes, container_props;

            container_classes = ["chosen-container"];
            container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
            if (this.inherit_select_classes && this.form_field.className) {
                container_classes.push(this.form_field.className);
            }
            if (this.is_rtl) {
                container_classes.push("chosen-rtl");
            }
            container_props = {
                'class': container_classes.join(' '),
                'style': "width: " + (this.container_width()) + ";",
                'title': this.form_field.title
            };
            if (this.form_field.id.length) {
                container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
            }
            this.container = $("<div />", container_props);
            if (this.is_multiple) {
                this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
            } else {
                this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
            }
            this.form_field_jq.hide().after(this.container);
            this.dropdown = this.container.find('div.chosen-drop').first();
            this.search_field = this.container.find('input').first();
            this.search_results = this.container.find('ul.chosen-results').first();
            this.search_field_scale();
            this.search_no_results = this.container.find('li.no-results').first();
            if (this.is_multiple) {
                this.search_choices = this.container.find('ul.chosen-choices').first();
                this.search_container = this.container.find('li.search-field').first();
            } else {
                this.search_container = this.container.find('div.chosen-search').first();
                this.selected_item = this.container.find('.chosen-single').first();
            }
            this.results_build();
            this.set_tab_index();
            this.set_label_behavior();
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            });
        };

        Chosen.prototype.register_observers = function () {
            var _this = this;

            this.container.bind('mousedown.chosen', function (evt) {
                _this.container_mousedown(evt);
            });
            this.container.bind('mouseup.chosen', function (evt) {
                _this.container_mouseup(evt);
            });
            this.container.bind('mouseenter.chosen', function (evt) {
                _this.mouse_enter(evt);
            });
            this.container.bind('mouseleave.chosen', function (evt) {
                _this.mouse_leave(evt);
            });
            this.search_results.bind('mouseup.chosen', function (evt) {
                _this.search_results_mouseup(evt);
            });
            this.search_results.bind('mouseover.chosen', function (evt) {
                _this.search_results_mouseover(evt);
            });
            this.search_results.bind('mouseout.chosen', function (evt) {
                _this.search_results_mouseout(evt);
            });
            this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function (evt) {
                _this.search_results_mousewheel(evt);
            });
            this.form_field_jq.bind("chosen:updated.chosen", function (evt) {
                _this.results_update_field(evt);
            });
            this.form_field_jq.bind("chosen:activate.chosen", function (evt) {
                _this.activate_field(evt);
            });
            this.form_field_jq.bind("chosen:open.chosen", function (evt) {
                _this.container_mousedown(evt);
            });
            this.search_field.bind('blur.chosen', function (evt) {
                _this.input_blur(evt);
            });
            this.search_field.bind('keyup.chosen', function (evt) {
                _this.keyup_checker(evt);
            });
            this.search_field.bind('keydown.chosen', function (evt) {
                _this.keydown_checker(evt);
            });
            this.search_field.bind('focus.chosen', function (evt) {
                _this.input_focus(evt);
            });
            if (this.is_multiple) {
                return this.search_choices.bind('click.chosen', function (evt) {
                    _this.choices_click(evt);
                });
            } else {
                return this.container.bind('click.chosen', function (evt) {
                    evt.preventDefault();
                });
            }
        };

        Chosen.prototype.destroy = function () {
            $(document).unbind("click.chosen", this.click_test_action);
            if (this.search_field[0].tabIndex) {
                this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
            }
            this.container.remove();
            this.form_field_jq.removeData('chosen');
            return this.form_field_jq.show();
        };

        Chosen.prototype.search_field_disabled = function () {
            this.is_disabled = this.form_field_jq[0].disabled;
            if (this.is_disabled) {
                this.container.addClass('chosen-disabled');
                this.search_field[0].disabled = true;
                if (!this.is_multiple) {
                    this.selected_item.unbind("focus.chosen", this.activate_action);
                }
                return this.close_field();
            } else {
                this.container.removeClass('chosen-disabled');
                this.search_field[0].disabled = false;
                if (!this.is_multiple) {
                    return this.selected_item.bind("focus.chosen", this.activate_action);
                }
            }
        };

        Chosen.prototype.container_mousedown = function (evt) {
            if (!this.is_disabled) {
                if (evt && evt.type === "mousedown" && !this.results_showing) {
                    evt.preventDefault();
                }
                if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
                    if (!this.active_field) {
                        if (this.is_multiple) {
                            this.search_field.val("");
                        }
                        $(document).bind('click.chosen', this.click_test_action);
                        this.results_show();
                    } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
                        evt.preventDefault();
                        this.results_toggle();
                    }
                    return this.activate_field();
                }
            }
        };

        Chosen.prototype.container_mouseup = function (evt) {
            if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
                return this.results_reset(evt);
            }
        };

        Chosen.prototype.search_results_mousewheel = function (evt) {
            var delta, _ref1, _ref2;

            delta = -((_ref1 = evt.originalEvent) != null ? _ref1.wheelDelta : void 0) || ((_ref2 = evt.originialEvent) != null ? _ref2.detail : void 0);
            if (delta != null) {
                evt.preventDefault();
                if (evt.type === 'DOMMouseScroll') {
                    delta = delta * 40;
                }
                return this.search_results.scrollTop(delta + this.search_results.scrollTop());
            }
        };

        Chosen.prototype.blur_test = function (evt) {
            if (!this.active_field && this.container.hasClass("chosen-container-active")) {
                return this.close_field();
            }
        };

        Chosen.prototype.close_field = function () {
            $(document).unbind("click.chosen", this.click_test_action);
            this.active_field = false;
            this.results_hide();
            this.container.removeClass("chosen-container-active");
            this.clear_backstroke();
            this.show_search_field_default();
            return this.search_field_scale();
        };

        Chosen.prototype.activate_field = function () {
            this.container.addClass("chosen-container-active");
            this.active_field = true;
            this.search_field.val(this.search_field.val());
            return this.search_field.focus();
        };

        Chosen.prototype.test_active_click = function (evt) {
            if (this.container.is($(evt.target).closest('.chosen-container'))) {
                return this.active_field = true;
            } else {
                return this.close_field();
            }
        };

        Chosen.prototype.results_build = function () {
            this.parsing = true;
            this.selected_option_count = null;
            this.results_data = SelectParser.select_to_array(this.form_field);
            if (this.is_multiple) {
                this.search_choices.find("li.search-choice").remove();
            } else if (!this.is_multiple) {
                this.single_set_selected_text();
                if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
                    this.search_field[0].readOnly = true;
                    this.container.addClass("chosen-container-single-nosearch");
                } else {
                    this.search_field[0].readOnly = false;
                    this.container.removeClass("chosen-container-single-nosearch");
                }
            }
            this.update_results_content(this.results_option_build({
                first: true
            }));
            this.search_field_disabled();
            this.show_search_field_default();
            this.search_field_scale();
            return this.parsing = false;
        };

        Chosen.prototype.result_do_highlight = function (el) {
            var high_bottom, high_top, maxHeight, visible_bottom, visible_top;

            if (el.length) {
                this.result_clear_highlight();
                this.result_highlight = el;
                this.result_highlight.addClass("highlighted");
                maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
                visible_top = this.search_results.scrollTop();
                visible_bottom = maxHeight + visible_top;
                high_top = this.result_highlight.position().top + this.search_results.scrollTop();
                high_bottom = high_top + this.result_highlight.outerHeight();
                if (high_bottom >= visible_bottom) {
                    return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
                } else if (high_top < visible_top) {
                    return this.search_results.scrollTop(high_top);
                }
            }
        };

        Chosen.prototype.result_clear_highlight = function () {
            if (this.result_highlight) {
                this.result_highlight.removeClass("highlighted");
            }
            return this.result_highlight = null;
        };

        Chosen.prototype.results_show = function () {
            if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                });
                return false;
            }
            this.container.addClass("chosen-with-drop");
            this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            });
            this.results_showing = true;
            this.search_field.focus();
            this.search_field.val(this.search_field.val());
            return this.winnow_results();
        };

        Chosen.prototype.update_results_content = function (content) {
            return this.search_results.html(content);
        };

        Chosen.prototype.results_hide = function () {
            if (this.results_showing) {
                this.result_clear_highlight();
                this.container.removeClass("chosen-with-drop");
                this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                });
            }
            return this.results_showing = false;
        };

        Chosen.prototype.set_tab_index = function (el) {
            var ti;

            if (this.form_field.tabIndex) {
                ti = this.form_field.tabIndex;
                this.form_field.tabIndex = -1;
                return this.search_field[0].tabIndex = ti;
            }
        };

        Chosen.prototype.set_label_behavior = function () {
            var _this = this;

            this.form_field_label = this.form_field_jq.parents("label");
            if (!this.form_field_label.length && this.form_field.id.length) {
                this.form_field_label = $("label[for='" + this.form_field.id + "']");
            }
            if (this.form_field_label.length > 0) {
                return this.form_field_label.bind('click.chosen', function (evt) {
                    if (_this.is_multiple) {
                        return _this.container_mousedown(evt);
                    } else {
                        return _this.activate_field();
                    }
                });
            }
        };

        Chosen.prototype.show_search_field_default = function () {
            if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
                this.search_field.val(this.default_text);
                return this.search_field.addClass("default");
            } else {
                this.search_field.val("");
                return this.search_field.removeClass("default");
            }
        };

        Chosen.prototype.search_results_mouseup = function (evt) {
            var target;

            target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
            if (target.length) {
                this.result_highlight = target;
                this.result_select(evt);
                return this.search_field.focus();
            }
        };

        Chosen.prototype.search_results_mouseover = function (evt) {
            var target;

            target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
            if (target) {
                return this.result_do_highlight(target);
            }
        };

        Chosen.prototype.search_results_mouseout = function (evt) {
            if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
                return this.result_clear_highlight();
            }
        };

        Chosen.prototype.choice_build = function (item) {
            var choice, close_link,
                _this = this;

            choice = $('<li />', {
                "class": "search-choice"
            }).html("<span>" + item.html + "</span>");
            if (item.disabled) {
                choice.addClass('search-choice-disabled');
            } else {
                close_link = $('<a />', {
                    "class": 'search-choice-close',
                    'data-option-array-index': item.array_index
                });
                close_link.bind('click.chosen', function (evt) {
                    return _this.choice_destroy_link_click(evt);
                });
                choice.append(close_link);
            }
            return this.search_container.before(choice);
        };

        Chosen.prototype.choice_destroy_link_click = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if (!this.is_disabled) {
                return this.choice_destroy($(evt.target));
            }
        };

        Chosen.prototype.choice_destroy = function (link) {
            if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
                this.show_search_field_default();
                if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
                    this.results_hide();
                }
                link.parents('li').first().remove();
                return this.search_field_scale();
            }
        };

        Chosen.prototype.results_reset = function () {
            this.form_field.options[0].selected = true;
            this.selected_option_count = null;
            this.single_set_selected_text();
            this.show_search_field_default();
            this.results_reset_cleanup();
            this.form_field_jq.trigger("change");
            if (this.active_field) {
                return this.results_hide();
            }
        };

        Chosen.prototype.results_reset_cleanup = function () {
            this.current_selectedIndex = this.form_field.selectedIndex;
            return this.selected_item.find("abbr").remove();
        };

        Chosen.prototype.result_select = function (evt) {
            var high, item, selected_index;

            if (this.result_highlight) {
                high = this.result_highlight;
                this.result_clear_highlight();
                if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                    this.form_field_jq.trigger("chosen:maxselected", {
                        chosen: this
                    });
                    return false;
                }
                if (this.is_multiple) {
                    high.removeClass("active-result");
                } else {
                    if (this.result_single_selected) {
                        this.result_single_selected.removeClass("result-selected");
                        selected_index = this.result_single_selected[0].getAttribute('data-option-array-index');
                        this.results_data[selected_index].selected = false;
                    }
                    this.result_single_selected = high;
                }
                high.addClass("result-selected");
                item = this.results_data[high[0].getAttribute("data-option-array-index")];
                item.selected = true;
                this.form_field.options[item.options_index].selected = true;
                this.selected_option_count = null;
                if (this.is_multiple) {
                    this.choice_build(item);
                } else {
                    this.single_set_selected_text(item.text);
                }
                if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
                    this.results_hide();
                }
                this.search_field.val("");
                if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
                    this.form_field_jq.trigger("change", {
                        'selected': this.form_field.options[item.options_index].value
                    });
                }
                this.current_selectedIndex = this.form_field.selectedIndex;
                return this.search_field_scale();
            }
        };

        Chosen.prototype.single_set_selected_text = function (text) {
            if (text == null) {
                text = this.default_text;
            }
            if (text === this.default_text) {
                this.selected_item.addClass("chosen-default");
            } else {
                this.single_deselect_control_build();
                this.selected_item.removeClass("chosen-default");
            }
            return this.selected_item.find("span").text(text);
        };

        Chosen.prototype.result_deselect = function (pos) {
            var result_data;

            result_data = this.results_data[pos];
            if (!this.form_field.options[result_data.options_index].disabled) {
                result_data.selected = false;
                this.form_field.options[result_data.options_index].selected = false;
                this.selected_option_count = null;
                this.result_clear_highlight();
                if (this.results_showing) {
                    this.winnow_results();
                }
                this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[result_data.options_index].value
                });
                this.search_field_scale();
                return true;
            } else {
                return false;
            }
        };

        Chosen.prototype.single_deselect_control_build = function () {
            if (!this.allow_single_deselect) {
                return;
            }
            if (!this.selected_item.find("abbr").length) {
                this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
            }
            return this.selected_item.addClass("chosen-single-with-deselect");
        };

        Chosen.prototype.get_search_text = function () {
            if (this.search_field.val() === this.default_text) {
                return "";
            } else {
                return $('<div/>').text($.trim(this.search_field.val())).html();
            }
        };

        Chosen.prototype.winnow_results_set_highlight = function () {
            var do_high, selected_results;

            selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
            do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
            if (do_high != null) {
                return this.result_do_highlight(do_high);
            }
        };

        Chosen.prototype.no_results = function (terms) {
            var no_results_html;

            no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
            no_results_html.find("span").first().html(terms);
            return this.search_results.append(no_results_html);
        };

        Chosen.prototype.no_results_clear = function () {
            return this.search_results.find(".no-results").remove();
        };

        Chosen.prototype.keydown_arrow = function () {
            var next_sib;

            if (this.results_showing && this.result_highlight) {
                next_sib = this.result_highlight.nextAll("li.active-result").first();
                if (next_sib) {
                    return this.result_do_highlight(next_sib);
                }
            } else {
                return this.results_show();
            }
        };

        Chosen.prototype.keyup_arrow = function () {
            var prev_sibs;

            if (!this.results_showing && !this.is_multiple) {
                return this.results_show();
            } else if (this.result_highlight) {
                prev_sibs = this.result_highlight.prevAll("li.active-result");
                if (prev_sibs.length) {
                    return this.result_do_highlight(prev_sibs.first());
                } else {
                    if (this.choices_count() > 0) {
                        this.results_hide();
                    }
                    return this.result_clear_highlight();
                }
            }
        };

        Chosen.prototype.keydown_backstroke = function () {
            var next_available_destroy;

            if (this.pending_backstroke) {
                this.choice_destroy(this.pending_backstroke.find("a").first());
                return this.clear_backstroke();
            } else {
                next_available_destroy = this.search_container.siblings("li.search-choice").last();
                if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
                    this.pending_backstroke = next_available_destroy;
                    if (this.single_backstroke_delete) {
                        return this.keydown_backstroke();
                    } else {
                        return this.pending_backstroke.addClass("search-choice-focus");
                    }
                }
            }
        };

        Chosen.prototype.clear_backstroke = function () {
            if (this.pending_backstroke) {
                this.pending_backstroke.removeClass("search-choice-focus");
            }
            return this.pending_backstroke = null;
        };

        Chosen.prototype.keydown_checker = function (evt) {
            var stroke, _ref1;

            stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
            this.search_field_scale();
            if (stroke !== 8 && this.pending_backstroke) {
                this.clear_backstroke();
            }
            switch (stroke) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    if (this.results_showing && !this.is_multiple) {
                        this.result_select(evt);
                    }
                    this.mouse_on_container = false;
                    break;
                case 13:
                    evt.preventDefault();
                    break;
                case 38:
                    evt.preventDefault();
                    this.keyup_arrow();
                    break;
                case 40:
                    evt.preventDefault();
                    this.keydown_arrow();
                    break;
            }
        };

        Chosen.prototype.search_field_scale = function () {
            var div, f_width, h, style, style_block, styles, w, _i, _len;

            if (this.is_multiple) {
                h = 0;
                w = 0;
                style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
                styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
                for (_i = 0, _len = styles.length; _i < _len; _i++) {
                    style = styles[_i];
                    style_block += style + ":" + this.search_field.css(style) + ";";
                }
                div = $('<div />', {
                    'style': style_block
                });
                div.text(this.search_field.val());
                $('body').append(div);
                w = div.width() + 25;
                div.remove();
                f_width = this.container.outerWidth();
                if (w > f_width - 10) {
                    w = f_width - 10;
                }
                return this.search_field.css({
                    'width': w + 'px'
                });
            }
        };

        return Chosen;

    })(AbstractChosen);

}).call(this);

/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
    "use strict";

    var H = $("html"),
        W = $(window),
        D = $(document),
        F = $.fancybox = function () {
            F.open.apply(this, arguments);
        },
        IE = navigator.userAgent.match(/msie/i),
        didUpdate = null,
        isTouch = document.createTouch !== undefined,

        isQuery = function (obj) {
            return obj && obj.hasOwnProperty && obj instanceof $;
        },
        isString = function (str) {
            return str && $.type(str) === "string";
        },
        isPercentage = function (str) {
            return isString(str) && str.indexOf('%') > 0;
        },
        isScrollable = function (el) {
            return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
        },
        getScalar = function (orig, dim) {
            var value = parseInt(orig, 10) || 0;

            if (dim && isPercentage(orig)) {
                value = F.getViewport()[ dim ] / 100 * value;
            }

            return Math.ceil(value);
        },
        getValue = function (value, dim) {
            return getScalar(value, dim) + 'px';
        };

    $.extend(F, {
        // The current version of fancyBox
        version: '2.1.5',

        defaults: {
            padding: 15,
            margin: 70,

            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1, // Set to 2 for retina display support

            autoSize: true,
            autoHeight: false,
            autoWidth: false,

            autoResize: true,
            autoCenter: !isTouch,
            fitToView: true,
            aspectRatio: false,
            topRatio: 0.5,
            leftRatio: 0.5,

            scrolling: 'auto', // 'auto', 'yes' or 'no'
            wrapCSS: '',

            arrows: true,
            closeBtn: true,
            closeClick: false,
            nextClick: false,
            mouseWheel: true,
            autoPlay: false,
            playSpeed: 3000,
            preload: 3,
            modal: false,
            loop: true,

            ajax: {
                dataType: 'html',
                headers: { 'X-fancyBox': true }
            },
            iframe: {
                scrolling: 'auto',
                preload: true
            },
            swf: {
                wmode: 'transparent',
                allowfullscreen: 'true',
                allowscriptaccess: 'always'
            },

            keys: {
                next: {
                    13: 'left', // enter
                    34: 'up',   // page down
                    39: 'left', // right arrow
                    40: 'up'    // down arrow
                },
                prev: {
                    8: 'right',  // backspace
                    33: 'down',   // page up
                    37: 'right',  // left arrow
                    38: 'down'    // up arrow
                },
                close: [27], // escape key
                play: [32], // space - start/stop slideshow
                toggle: [70]  // letter "f" - toggle fullscreen
            },

            direction: {
                next: 'left',
                prev: 'right'
            },

            scrollOutside: true,

            // Override some properties
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,

            // HTML templates
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },

            // Properties for each animation type
            // Opening fancyBox
            openEffect: 'fade', // 'elastic', 'fade' or 'none'
            openSpeed: 250,
            openEasing: 'swing',
            openOpacity: true,
            openMethod: 'zoomIn',

            // Closing fancyBox
            closeEffect: 'fade', // 'elastic', 'fade' or 'none'
            closeSpeed: 250,
            closeEasing: 'swing',
            closeOpacity: true,
            closeMethod: 'zoomOut',

            // Changing next gallery item
            nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
            nextSpeed: 250,
            nextEasing: 'swing',
            nextMethod: 'changeIn',

            // Changing previous gallery item
            prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
            prevSpeed: 250,
            prevEasing: 'swing',
            prevMethod: 'changeOut',

            // Enable default helpers
            helpers: {
                overlay: true,
                title: true
            },

            // Callbacks
            onCancel: $.noop, // If canceling
            beforeLoad: $.noop, // Before loading
            afterLoad: $.noop, // After loading
            beforeShow: $.noop, // Before changing in current item
            afterShow: $.noop, // After opening
            beforeChange: $.noop, // Before changing gallery item
            beforeClose: $.noop, // Before closing
            afterClose: $.noop  // After closing
        },

        //Current state
        group: {}, // Selected group
        opts: {}, // Group options
        previous: null,  // Previous element
        coming: null,  // Element being loaded
        current: null,  // Currently loaded element
        isActive: false, // Is activated
        isOpen: false, // Is currently open
        isOpened: false, // Have been fully opened at least once

        wrap: null,
        skin: null,
        outer: null,
        inner: null,

        player: {
            timer: null,
            isActive: false
        },

        // Loaders
        ajaxLoad: null,
        imgPreload: null,

        // Some collections
        transitions: {},
        helpers: {},

        /*
         *	Static methods
         */

        open: function (group, opts) {
            if (!group) {
                return;
            }

            if (!$.isPlainObject(opts)) {
                opts = {};
            }

            // Close if already active
            if (false === F.close(true)) {
                return;
            }

            // Normalize group
            if (!$.isArray(group)) {
                group = isQuery(group) ? $(group).get() : [group];
            }

            // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
            $.each(group, function (i, element) {
                var obj = {},
                    href,
                    title,
                    content,
                    type,
                    rez,
                    hrefParts,
                    selector;

                if ($.type(element) === "object") {
                    // Check if is DOM element
                    if (element.nodeType) {
                        element = $(element);
                    }

                    if (isQuery(element)) {
                        obj = {
                            href: element.data('fancybox-href') || element.attr('href'),
                            title: element.data('fancybox-title') || element.attr('title'),
                            isDom: true,
                            element: element
                        };

                        if ($.metadata) {
                            $.extend(true, obj, element.metadata());
                        }

                    } else {
                        obj = element;
                    }
                }

                href = opts.href || obj.href || (isString(element) ? element : null);
                title = opts.title !== undefined ? opts.title : obj.title || '';

                content = opts.content || obj.content;
                type = content ? 'html' : (opts.type || obj.type);

                if (!type && obj.isDom) {
                    type = element.data('fancybox-type');

                    if (!type) {
                        rez = element.prop('class').match(/fancybox\.(\w+)/);
                        type = rez ? rez[1] : null;
                    }
                }

                if (isString(href)) {
                    // Try to guess the content type
                    if (!type) {
                        if (F.isImage(href)) {
                            type = 'image';

                        } else if (F.isSWF(href)) {
                            type = 'swf';

                        } else if (href.charAt(0) === '#') {
                            type = 'inline';

                        } else if (isString(element)) {
                            type = 'html';
                            content = element;
                        }
                    }

                    // Split url into two pieces with source url and content selector, e.g,
                    // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
                    if (type === 'ajax') {
                        hrefParts = href.split(/\s+/, 2);
                        href = hrefParts.shift();
                        selector = hrefParts.shift();
                    }
                }

                if (!content) {
                    if (type === 'inline') {
                        if (href) {
                            content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href); //strip for ie7

                        } else if (obj.isDom) {
                            content = element;
                        }

                    } else if (type === 'html') {
                        content = href;

                    } else if (!type && !href && obj.isDom) {
                        type = 'inline';
                        content = element;
                    }
                }

                $.extend(obj, {
                    href: href,
                    type: type,
                    content: content,
                    title: title,
                    selector: selector
                });

                group[ i ] = obj;
            });

            // Extend the defaults
            F.opts = $.extend(true, {}, F.defaults, opts);

            // All options are merged recursive except keys
            if (opts.keys !== undefined) {
                F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
            }

            F.group = group;

            return F._start(F.opts.index);
        },

        // Cancel image loading or abort ajax request
        cancel: function () {
            var coming = F.coming;

            if (!coming || false === F.trigger('onCancel')) {
                return;
            }

            F.hideLoading();

            if (F.ajaxLoad) {
                F.ajaxLoad.abort();
            }

            F.ajaxLoad = null;

            if (F.imgPreload) {
                F.imgPreload.onload = F.imgPreload.onerror = null;
            }

            if (coming.wrap) {
                coming.wrap.stop(true, true).trigger('onReset').remove();
            }

            F.coming = null;

            // If the first item has been canceled, then clear everything
            if (!F.current) {
                F._afterZoomOut(coming);
            }
        },

        // Start closing animation if is open; remove immediately if opening/closing
        close: function (event) {
            F.cancel();

            if (false === F.trigger('beforeClose')) {
                return;
            }

            F.unbindEvents();

            if (!F.isActive) {
                return;
            }

            if (!F.isOpen || event === true) {
                $('.fancybox-wrap').stop(true).trigger('onReset').remove();

                F._afterZoomOut();

            } else {
                F.isOpen = F.isOpened = false;
                F.isClosing = true;

                $('.fancybox-item, .fancybox-nav').remove();

                F.wrap.stop(true, true).removeClass('fancybox-opened');

                F.transitions[ F.current.closeMethod ]();
            }
        },

        // Manage slideshow:
        //   $.fancybox.play(); - toggle slideshow
        //   $.fancybox.play( true ); - start
        //   $.fancybox.play( false ); - stop
        play: function (action) {
            var clear = function () {
                    clearTimeout(F.player.timer);
                },
                set = function () {
                    clear();

                    if (F.current && F.player.isActive) {
                        F.player.timer = setTimeout(F.next, F.current.playSpeed);
                    }
                },
                stop = function () {
                    clear();

                    D.unbind('.player');

                    F.player.isActive = false;

                    F.trigger('onPlayEnd');
                },
                start = function () {
                    if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                        F.player.isActive = true;

                        D.bind({
                            'onCancel.player beforeClose.player': stop,
                            'onUpdate.player': set,
                            'beforeLoad.player': clear
                        });

                        set();

                        F.trigger('onPlayStart');
                    }
                };

            if (action === true || (!F.player.isActive && action !== false)) {
                start();
            } else {
                stop();
            }
        },

        // Navigate to next gallery item
        next: function (direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.next;
                }

                F.jumpto(current.index + 1, direction, 'next');
            }
        },

        // Navigate to previous gallery item
        prev: function (direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.prev;
                }

                F.jumpto(current.index - 1, direction, 'prev');
            }
        },

        // Navigate to gallery item by index
        jumpto: function (index, direction, router) {
            var current = F.current;

            if (!current) {
                return;
            }

            index = getScalar(index);

            F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
            F.router = router || 'jumpto';

            if (current.loop) {
                if (index < 0) {
                    index = current.group.length + (index % current.group.length);
                }

                index = index % current.group.length;
            }

            if (current.group[ index ] !== undefined) {
                F.cancel();

                F._start(index);
            }
        },

        // Center inside viewport and toggle position type to fixed or absolute if needed
        reposition: function (e, onlyAbsolute) {
            var current = F.current,
                wrap = current ? current.wrap : null,
                pos;

            if (wrap) {
                pos = F._getPosition(onlyAbsolute);

                if (e && e.type === 'scroll') {
                    delete pos.position;

                    wrap.stop(true, true).animate(pos, 200);

                } else {
                    wrap.css(pos);

                    current.pos = $.extend({}, current.dim, pos);
                }
            }
        },

        update: function (e) {
            var type = (e && e.type),
                anyway = !type || type === 'orientationchange';

            if (anyway) {
                clearTimeout(didUpdate);

                didUpdate = null;
            }

            if (!F.isOpen || didUpdate) {
                return;
            }

            didUpdate = setTimeout(function () {
                var current = F.current;

                if (!current || F.isClosing) {
                    return;
                }

                F.wrap.removeClass('fancybox-tmp');

                if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                    F._setDimension();
                }

                if (!(type === 'scroll' && current.canShrink)) {
                    F.reposition(e);
                }

                F.trigger('onUpdate');

                didUpdate = null;

            }, (anyway && !isTouch ? 0 : 300));
        },

        // Shrink content to fit inside viewport or restore if resized
        toggle: function (action) {
            if (F.isOpen) {
                F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

                // Help browser to restore document dimensions
                if (isTouch) {
                    F.wrap.removeAttr('style').addClass('fancybox-tmp');

                    F.trigger('onUpdate');
                }

                F.update();
            }
        },

        hideLoading: function () {
            D.unbind('.loading');

            $('#fancybox-loading').remove();
        },

        showLoading: function () {
            var el, viewport;

            F.hideLoading();

            el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

            // If user will press the escape-button, the request will be canceled
            D.bind('keydown.loading', function (e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();

                    F.cancel();
                }
            });

            if (!F.defaults.fixed) {
                viewport = F.getViewport();

                el.css({
                    position: 'absolute',
                    top: (viewport.h * 0.5) + viewport.y,
                    left: (viewport.w * 0.5) + viewport.x
                });
            }
        },

        getViewport: function () {
            var locked = (F.current && F.current.locked) || false,
                rez = {
                    x: W.scrollLeft(),
                    y: W.scrollTop()
                };

            if (locked) {
                rez.w = locked[0].clientWidth;
                rez.h = locked[0].clientHeight;

            } else {
                // See http://bugs.jquery.com/ticket/6724
                rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
                rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
            }

            return rez;
        },

        // Unbind the keyboard / clicking actions
        unbindEvents: function () {
            if (F.wrap && isQuery(F.wrap)) {
                F.wrap.unbind('.fb');
            }

            D.unbind('.fb');
            W.unbind('.fb');
        },

        bindEvents: function () {
            var current = F.current,
                keys;

            if (!current) {
                return;
            }

            // Changing document height on iOS devices triggers a 'resize' event,
            // that can change document height... repeating infinitely
            W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

            keys = current.keys;

            if (keys) {
                D.bind('keydown.fb', function (e) {
                    var code = e.which || e.keyCode,
                        target = e.target || e.srcElement;

                    // Skip esc key if loading, because showLoading will cancel preloading
                    if (code === 27 && F.coming) {
                        return false;
                    }

                    // Ignore key combinations and key events within form elements
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
                        $.each(keys, function (i, val) {
                            if (current.group.length > 1 && val[ code ] !== undefined) {
                                F[ i ](val[ code ]);

                                e.preventDefault();
                                return false;
                            }

                            if ($.inArray(code, val) > -1) {
                                F[ i ]();

                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                });
            }

            if ($.fn.mousewheel && current.mouseWheel) {
                F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
                    var target = e.target || null,
                        parent = $(target),
                        canScroll = false;

                    while (parent.length) {
                        if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                            break;
                        }

                        canScroll = isScrollable(parent[0]);
                        parent = $(parent).parent();
                    }

                    if (delta !== 0 && !canScroll) {
                        if (F.group.length > 1 && !current.canShrink) {
                            if (deltaY > 0 || deltaX > 0) {
                                F.prev(deltaY > 0 ? 'down' : 'left');

                            } else if (deltaY < 0 || deltaX < 0) {
                                F.next(deltaY < 0 ? 'up' : 'right');
                            }

                            e.preventDefault();
                        }
                    }
                });
            }
        },

        trigger: function (event, o) {
            var ret, obj = o || F.coming || F.current;

            if (!obj) {
                return;
            }

            if ($.isFunction(obj[event])) {
                ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
            }

            if (ret === false) {
                return false;
            }

            if (obj.helpers) {
                $.each(obj.helpers, function (helper, opts) {
                    if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                        F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                    }
                });
            }

            D.trigger(event);
        },

        isImage: function (str) {
            return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },

        isSWF: function (str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
        },

        _start: function (index) {
            var coming = {},
                obj,
                href,
                type,
                margin,
                padding;

            index = getScalar(index);
            obj = F.group[ index ] || null;

            if (!obj) {
                return false;
            }

            coming = $.extend(true, {}, F.opts, obj);

            // Convert margin and padding properties to array - top, right, bottom, left
            margin = coming.margin;
            padding = coming.padding;

            if ($.type(margin) === 'number') {
                coming.margin = [margin, margin, margin, margin];
            }

            if ($.type(padding) === 'number') {
                coming.padding = [padding, padding, padding, padding];
            }

            // 'modal' propery is just a shortcut
            if (coming.modal) {
                $.extend(true, coming, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                });
            }

            // 'autoSize' property is a shortcut, too
            if (coming.autoSize) {
                coming.autoWidth = coming.autoHeight = true;
            }

            if (coming.width === 'auto') {
                coming.autoWidth = true;
            }

            if (coming.height === 'auto') {
                coming.autoHeight = true;
            }

            /*
             * Add reference to the group, so it`s possible to access from callbacks, example:
             * afterLoad : function() {
             *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
             * }
             */

            coming.group = F.group;
            coming.index = index;

            // Give a chance for callback or helpers to update coming item (type, title, etc)
            F.coming = coming;

            if (false === F.trigger('beforeLoad')) {
                F.coming = null;

                return;
            }

            type = coming.type;
            href = coming.href;

            if (!type) {
                F.coming = null;

                //If we can not determine content type then drop silently or display next/prev item if looping through gallery
                if (F.current && F.router && F.router !== 'jumpto') {
                    F.current.index = index;

                    return F[ F.router ](F.direction);
                }

                return false;
            }

            F.isActive = true;

            if (type === 'image' || type === 'swf') {
                coming.autoHeight = coming.autoWidth = false;
                coming.scrolling = 'visible';
            }

            if (type === 'image') {
                coming.aspectRatio = true;
            }

            if (type === 'iframe' && isTouch) {
                coming.scrolling = 'scroll';
            }

            // Build the neccessary markup
            coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');

            $.extend(coming, {
                skin: $('.fancybox-skin', coming.wrap),
                outer: $('.fancybox-outer', coming.wrap),
                inner: $('.fancybox-inner', coming.wrap)
            });

            $.each(["Top", "Right", "Bottom", "Left"], function (i, v) {
                coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
            });

            F.trigger('onReady');

            // Check before try to load; 'inline' and 'html' types need content, others - href
            if (type === 'inline' || type === 'html') {
                if (!coming.content || !coming.content.length) {
                    return F._error('content');
                }

            } else if (!href) {
                return F._error('href');
            }

            if (type === 'image') {
                F._loadImage();

            } else if (type === 'ajax') {
                F._loadAjax();

            } else if (type === 'iframe') {
                F._loadIframe();

            } else {
                F._afterLoad();
            }
        },

        _error: function (type) {
            $.extend(F.coming, {
                type: 'html',
                autoWidth: true,
                autoHeight: true,
                minWidth: 0,
                minHeight: 0,
                scrolling: 'no',
                hasError: type,
                content: F.coming.tpl.error
            });

            F._afterLoad();
        },

        _loadImage: function () {
            // Reset preload image so it is later possible to check "complete" property
            var img = F.imgPreload = new Image();

            img.onload = function () {
                this.onload = this.onerror = null;

                F.coming.width = this.width / F.opts.pixelRatio;
                F.coming.height = this.height / F.opts.pixelRatio;

                F._afterLoad();
            };

            img.onerror = function () {
                this.onload = this.onerror = null;

                F._error('image');
            };

            img.src = F.coming.href;

            if (img.complete !== true) {
                F.showLoading();
            }
        },

        _loadAjax: function () {
            var coming = F.coming;

            F.showLoading();

            F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                url: coming.href,
                error: function (jqXHR, textStatus) {
                    if (F.coming && textStatus !== 'abort') {
                        F._error('ajax', jqXHR);

                    } else {
                        F.hideLoading();
                    }
                },
                success: function (data, textStatus) {
                    if (textStatus === 'success') {
                        coming.content = data;

                        F._afterLoad();
                    }
                }
            }));
        },

        _loadIframe: function () {
            var coming = F.coming,
                iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                    .attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
                    .attr('src', coming.href);

            // This helps IE
            $(coming.wrap).bind('onReset', function () {
                try {
                    $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                } catch (e) {
                }
            });

            if (coming.iframe.preload) {
                F.showLoading();

                iframe.one('load', function () {
                    $(this).data('ready', 1);

                    // iOS will lose scrolling if we resize
                    if (!isTouch) {
                        $(this).bind('load.fb', F.update);
                    }

                    // Without this trick:
                    //   - iframe won't scroll on iOS devices
                    //   - IE7 sometimes displays empty iframe
                    $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

                    F._afterLoad();
                });
            }

            coming.content = iframe.appendTo(coming.inner);

            if (!coming.iframe.preload) {
                F._afterLoad();
            }
        },

        _preloadImages: function () {
            var group = F.group,
                current = F.current,
                len = group.length,
                cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
                item,
                i;

            for (i = 1; i <= cnt; i += 1) {
                item = group[ (current.index + i ) % len ];

                if (item.type === 'image' && item.href) {
                    new Image().src = item.href;
                }
            }
        },

        _afterLoad: function () {
            var coming = F.coming,
                previous = F.current,
                placeholder = 'fancybox-placeholder',
                current,
                content,
                type,
                scrolling,
                href,
                embed;

            F.hideLoading();

            if (!coming || F.isActive === false) {
                return;
            }

            if (false === F.trigger('afterLoad', coming, previous)) {
                coming.wrap.stop(true).trigger('onReset').remove();

                F.coming = null;

                return;
            }

            if (previous) {
                F.trigger('beforeChange', previous);

                previous.wrap.stop(true).removeClass('fancybox-opened')
                    .find('.fancybox-item, .fancybox-nav')
                    .remove();
            }

            F.unbindEvents();

            current = coming;
            content = coming.content;
            type = coming.type;
            scrolling = coming.scrolling;

            $.extend(F, {
                wrap: current.wrap,
                skin: current.skin,
                outer: current.outer,
                inner: current.inner,
                current: current,
                previous: previous
            });

            href = current.href;

            switch (type) {
                case 'inline':
                case 'ajax':
                case 'html':
                    if (current.selector) {
                        content = $('<div>').html(content).find(current.selector);

                    } else if (isQuery(content)) {
                        if (!content.data(placeholder)) {
                            content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
                        }

                        content = content.show().detach();

                        current.wrap.bind('onReset', function () {
                            if ($(this).find(content).length) {
                                content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
                            }
                        });
                    }
                    break;

                case 'image':
                    content = current.tpl.image.replace('{href}', href);
                    break;

                case 'swf':
                    content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                    embed = '';

                    $.each(current.swf, function (name, val) {
                        content += '<param name="' + name + '" value="' + val + '"></param>';
                        embed += ' ' + name + '="' + val + '"';
                    });

                    content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                    break;
            }

            if (!(isQuery(content) && content.parent().is(current.inner))) {
                current.inner.append(content);
            }

            // Give a chance for helpers or callbacks to update elements
            F.trigger('beforeShow');

            // Set scrolling before calculating dimensions
            current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

            // Set initial dimensions and start position
            F._setDimension();

            F.reposition();

            F.isOpen = false;
            F.coming = null;

            F.bindEvents();

            if (!F.isOpened) {
                $('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();

            } else if (previous.prevMethod) {
                F.transitions[ previous.prevMethod ]();
            }

            F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

            F._preloadImages();
        },

        _setDimension: function () {
            var viewport = F.getViewport(),
                steps = 0,
                canShrink = false,
                canExpand = false,
                wrap = F.wrap,
                skin = F.skin,
                inner = F.inner,
                current = F.current,
                width = current.width,
                height = current.height,
                minWidth = current.minWidth,
                minHeight = current.minHeight,
                maxWidth = current.maxWidth,
                maxHeight = current.maxHeight,
                scrolling = current.scrolling,
                scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
                margin = current.margin,
                wMargin = getScalar(margin[1] + margin[3]),
                hMargin = getScalar(margin[0] + margin[2]),
                wPadding,
                hPadding,
                wSpace,
                hSpace,
                origWidth,
                origHeight,
                origMaxWidth,
                origMaxHeight,
                ratio,
                width_,
                height_,
                maxWidth_,
                maxHeight_,
                iframe,
                body;

            // Reset dimensions so we could re-check actual size
            wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

            wPadding = getScalar(skin.outerWidth(true) - skin.width());
            hPadding = getScalar(skin.outerHeight(true) - skin.height());

            // Any space between content and viewport (margin, padding, border, title)
            wSpace = wMargin + wPadding;
            hSpace = hMargin + hPadding;

            origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
            origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

            if (current.type === 'iframe') {
                iframe = current.content;

                if (current.autoHeight && iframe.data('ready') === 1) {
                    try {
                        if (iframe[0].contentWindow.document.location) {
                            inner.width(origWidth).height(9999);

                            body = iframe.contents().find('body');

                            if (scrollOut) {
                                body.css('overflow-x', 'hidden');
                            }

                            origHeight = body.outerHeight(true);
                        }

                    } catch (e) {
                    }
                }

            } else if (current.autoWidth || current.autoHeight) {
                inner.addClass('fancybox-tmp');

                // Set width or height in case we need to calculate only one dimension
                if (!current.autoWidth) {
                    inner.width(origWidth);
                }

                if (!current.autoHeight) {
                    inner.height(origHeight);
                }

                if (current.autoWidth) {
                    origWidth = inner.width();
                }

                if (current.autoHeight) {
                    origHeight = inner.height();
                }

                inner.removeClass('fancybox-tmp');
            }

            width = getScalar(origWidth);
            height = getScalar(origHeight);

            ratio = origWidth / origHeight;

            // Calculations for the content
            minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
            maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

            minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
            maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

            // These will be used to determine if wrap can fit in the viewport
            origMaxWidth = maxWidth;
            origMaxHeight = maxHeight;

            if (current.fitToView) {
                maxWidth = Math.min(viewport.w - wSpace, maxWidth);
                maxHeight = Math.min(viewport.h - hSpace, maxHeight);
            }

            maxWidth_ = viewport.w - wMargin;
            maxHeight_ = viewport.h - hMargin;

            if (current.aspectRatio) {
                if (width > maxWidth) {
                    width = maxWidth;
                    height = getScalar(width / ratio);
                }

                if (height > maxHeight) {
                    height = maxHeight;
                    width = getScalar(height * ratio);
                }

                if (width < minWidth) {
                    width = minWidth;
                    height = getScalar(width / ratio);
                }

                if (height < minHeight) {
                    height = minHeight;
                    width = getScalar(height * ratio);
                }

            } else {
                width = Math.max(minWidth, Math.min(width, maxWidth));

                if (current.autoHeight && current.type !== 'iframe') {
                    inner.width(width);

                    height = inner.height();
                }

                height = Math.max(minHeight, Math.min(height, maxHeight));
            }

            // Try to fit inside viewport (including the title)
            if (current.fitToView) {
                inner.width(width).height(height);

                wrap.width(width + wPadding);

                // Real wrap dimensions
                width_ = wrap.width();
                height_ = wrap.height();

                if (current.aspectRatio) {
                    while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                        if (steps++ > 19) {
                            break;
                        }

                        height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                        width = getScalar(height * ratio);

                        if (width < minWidth) {
                            width = minWidth;
                            height = getScalar(width / ratio);
                        }

                        if (width > maxWidth) {
                            width = maxWidth;
                            height = getScalar(width / ratio);
                        }

                        inner.width(width).height(height);

                        wrap.width(width + wPadding);

                        width_ = wrap.width();
                        height_ = wrap.height();
                    }

                } else {
                    width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
                    height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                }
            }

            if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
                width += scrollOut;
            }

            inner.width(width).height(height);

            wrap.width(width + wPadding);

            width_ = wrap.width();
            height_ = wrap.height();

            canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
            canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

            $.extend(current, {
                dim: {
                    width: getValue(width_),
                    height: getValue(height_)
                },
                origWidth: origWidth,
                origHeight: origHeight,
                canShrink: canShrink,
                canExpand: canExpand,
                wPadding: wPadding,
                hPadding: hPadding,
                wrapSpace: height_ - skin.outerHeight(true),
                skinSpace: skin.height() - height
            });

            if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                inner.height('auto');
            }
        },

        _getPosition: function (onlyAbsolute) {
            var current = F.current,
                viewport = F.getViewport(),
                margin = current.margin,
                width = F.wrap.width() + margin[1] + margin[3],
                height = F.wrap.height() + margin[0] + margin[2],
                rez = {
                    position: 'absolute',
                    top: margin[0],
                    left: margin[3]
                };

            if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                rez.position = 'fixed';

            } else if (!current.locked) {
                rez.top += viewport.y;
                rez.left += viewport.x;
            }

            rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
            rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * current.leftRatio)));

            return rez;
        },

        _afterZoomIn: function () {
            var current = F.current;

            if (!current) {
                return;
            }

            F.isOpen = F.isOpened = true;

            F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

            F.update();

            // Assign a click event
            if (current.closeClick || (current.nextClick && F.group.length > 1)) {
                F.inner.css('cursor', 'pointer').bind('click.fb', function (e) {
                    if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
                        e.preventDefault();

                        F[ current.closeClick ? 'close' : 'next' ]();
                    }
                });
            }

            // Create a close button
            if (current.closeBtn) {
                $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function (e) {
                    e.preventDefault();

                    F.close();
                });
            }

            // Create navigation arrows
            if (current.arrows && F.group.length > 1) {
                if (current.loop || current.index > 0) {
                    $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                }

                if (current.loop || current.index < F.group.length - 1) {
                    $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                }
            }

            F.trigger('afterShow');

            // Stop the slideshow if this is the last item
            if (!current.loop && current.index === current.group.length - 1) {
                F.play(false);

            } else if (F.opts.autoPlay && !F.player.isActive) {
                F.opts.autoPlay = false;

                F.play();
            }
        },

        _afterZoomOut: function (obj) {
            obj = obj || F.current;

            $('.fancybox-wrap').trigger('onReset').remove();

            $.extend(F, {
                group: {},
                opts: {},
                router: false,
                current: null,
                isActive: false,
                isOpened: false,
                isOpen: false,
                isClosing: false,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });

            F.trigger('afterClose', obj);
        }
    });

    /*
     *	Default transitions
     */

    F.transitions = {
        getOrigPosition: function () {
            var current = F.current,
                element = current.element,
                orig = current.orig,
                pos = {},
                width = 50,
                height = 50,
                hPadding = current.hPadding,
                wPadding = current.wPadding,
                viewport = F.getViewport();

            if (!orig && current.isDom && element.is(':visible')) {
                orig = element.find('img:first');

                if (!orig.length) {
                    orig = element;
                }
            }

            if (isQuery(orig)) {
                pos = orig.offset();

                if (orig.is('img')) {
                    width = orig.outerWidth();
                    height = orig.outerHeight();
                }

            } else {
                pos.top = viewport.y + (viewport.h - height) * current.topRatio;
                pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
            }

            if (F.wrap.css('position') === 'fixed' || current.locked) {
                pos.top -= viewport.y;
                pos.left -= viewport.x;
            }

            pos = {
                top: getValue(pos.top - hPadding * current.topRatio),
                left: getValue(pos.left - wPadding * current.leftRatio),
                width: getValue(width + wPadding),
                height: getValue(height + hPadding)
            };

            return pos;
        },

        step: function (now, fx) {
            var ratio,
                padding,
                value,
                prop = fx.prop,
                current = F.current,
                wrapSpace = current.wrapSpace,
                skinSpace = current.skinSpace;

            if (prop === 'width' || prop === 'height') {
                ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

                if (F.isClosing) {
                    ratio = 1 - ratio;
                }

                padding = prop === 'width' ? current.wPadding : current.hPadding;
                value = now - padding;

                F.skin[ prop ](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio)));
                F.inner[ prop ](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio) - (skinSpace * ratio)));
            }
        },

        zoomIn: function () {
            var current = F.current,
                startPos = current.pos,
                effect = current.openEffect,
                elastic = effect === 'elastic',
                endPos = $.extend({opacity: 1}, startPos);

            // Remove "position" property that breaks older IE
            delete endPos.position;

            if (elastic) {
                startPos = this.getOrigPosition();

                if (current.openOpacity) {
                    startPos.opacity = 0.1;
                }

            } else if (effect === 'fade') {
                startPos.opacity = 0.1;
            }

            F.wrap.css(startPos).animate(endPos, {
                duration: effect === 'none' ? 0 : current.openSpeed,
                easing: current.openEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomIn
            });
        },

        zoomOut: function () {
            var current = F.current,
                effect = current.closeEffect,
                elastic = effect === 'elastic',
                endPos = {opacity: 0.1};

            if (elastic) {
                endPos = this.getOrigPosition();

                if (current.closeOpacity) {
                    endPos.opacity = 0.1;
                }
            }

            F.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : current.closeSpeed,
                easing: current.closeEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomOut
            });
        },

        changeIn: function () {
            var current = F.current,
                effect = current.nextEffect,
                startPos = current.pos,
                endPos = { opacity: 1 },
                direction = F.direction,
                distance = 200,
                field;

            startPos.opacity = 0.1;

            if (effect === 'elastic') {
                field = direction === 'down' || direction === 'up' ? 'top' : 'left';

                if (direction === 'down' || direction === 'right') {
                    startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
                    endPos[ field ] = '+=' + distance + 'px';

                } else {
                    startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
                    endPos[ field ] = '-=' + distance + 'px';
                }
            }

            // Workaround for http://bugs.jquery.com/ticket/12273
            if (effect === 'none') {
                F._afterZoomIn();

            } else {
                F.wrap.css(startPos).animate(endPos, {
                    duration: current.nextSpeed,
                    easing: current.nextEasing,
                    complete: F._afterZoomIn
                });
            }
        },

        changeOut: function () {
            var previous = F.previous,
                effect = previous.prevEffect,
                endPos = { opacity: 0.1 },
                direction = F.direction,
                distance = 200;

            if (effect === 'elastic') {
                endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
            }

            previous.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : previous.prevSpeed,
                easing: previous.prevEasing,
                complete: function () {
                    $(this).trigger('onReset').remove();
                }
            });
        }
    };

    /*
     *	Overlay helper
     */

    F.helpers.overlay = {
        defaults: {
            closeClick: true,      // if true, fancyBox will be closed when user clicks on the overlay
            speedOut: 200,       // duration of fadeOut animation
            showEarly: true,      // indicates if should be opened immediately or wait until the content is ready
            css: {},        // custom CSS properties
            locked: !isTouch,  // if true, the content will be locked into overlay
            fixed: true       // if false, the overlay CSS position property will not be set to "fixed"
        },

        overlay: null,      // current handle
        fixed: false,     // indicates if the overlay has position "fixed"
        el: $('html'), // element that contains "the lock"

        // Public methods
        create: function (opts) {
            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.close();
            }

            this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(F.coming ? F.coming.parent : opts.parent);
            this.fixed = false;

            if (opts.fixed && F.defaults.fixed) {
                this.overlay.addClass('fancybox-overlay-fixed');

                this.fixed = true;
            }
        },

        open: function (opts) {
            var that = this;

            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.overlay.unbind('.overlay').width('auto').height('auto');

            } else {
                this.create(opts);
            }

            if (!this.fixed) {
                W.bind('resize.overlay', $.proxy(this.update, this));

                this.update();
            }

            if (opts.closeClick) {
                this.overlay.bind('click.overlay', function (e) {
                    if ($(e.target).hasClass('fancybox-overlay')) {
                        if (F.isActive) {
                            F.close();
                        } else {
                            that.close();
                        }

                        return false;
                    }
                });
            }

            this.overlay.css(opts.css).show();
        },

        close: function () {
            var scrollV, scrollH;

            W.unbind('resize.overlay');

            if (this.el.hasClass('fancybox-lock')) {
                $('.fancybox-margin').removeClass('fancybox-margin');

                scrollV = W.scrollTop();
                scrollH = W.scrollLeft();

                this.el.removeClass('fancybox-lock');

                W.scrollTop(scrollV).scrollLeft(scrollH);
            }

            $('.fancybox-overlay').remove().hide();

            $.extend(this, {
                overlay: null,
                fixed: false
            });
        },

        // Private, callbacks

        update: function () {
            var width = '100%', offsetWidth;

            // Reset width/height so it will not mess
            this.overlay.width(width).height('100%');

            // jQuery does not return reliable result for IE
            if (IE) {
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

                if (D.width() > offsetWidth) {
                    width = D.width();
                }

            } else if (D.width() > W.width()) {
                width = D.width();
            }

            this.overlay.width(width).height(D.height());
        },

        // This is where we can manipulate DOM, because later it would cause iframes to reload
        onReady: function (opts, obj) {
            var overlay = this.overlay;

            $('.fancybox-overlay').stop(true, true);

            if (!overlay) {
                this.create(opts);
            }

            if (opts.locked && this.fixed && obj.fixed) {
                if (!overlay) {
                    this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
                }

                obj.locked = this.overlay.append(obj.wrap);
                obj.fixed = false;
            }

            if (opts.showEarly === true) {
                this.beforeShow.apply(this, arguments);
            }
        },

        beforeShow: function (opts, obj) {
            var scrollV, scrollH;

            if (obj.locked) {
                if (this.margin !== false) {
                    $('*').filter(function () {
                        return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
                    }).addClass('fancybox-margin');

                    this.el.addClass('fancybox-margin');
                }

                scrollV = W.scrollTop();
                scrollH = W.scrollLeft();

                this.el.addClass('fancybox-lock');

                W.scrollTop(scrollV).scrollLeft(scrollH);
            }

            this.open(opts);
        },

        onUpdate: function () {
            if (!this.fixed) {
                this.update();
            }
        },

        afterClose: function (opts) {
            // Remove overlay if exists and fancyBox is not opening
            // (e.g., it is not being open using afterClose callback)
            //if (this.overlay && !F.isActive) {
            if (this.overlay && !F.coming) {
                this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
            }
        }
    };

    /*
     *	Title helper
     */

    F.helpers.title = {
        defaults: {
            type: 'float', // 'float', 'inside', 'outside' or 'over',
            position: 'bottom' // 'top' or 'bottom'
        },

        beforeShow: function (opts) {
            var current = F.current,
                text = current.title,
                type = opts.type,
                title,
                target;

            if ($.isFunction(text)) {
                text = text.call(current.element, current);
            }

            if (!isString(text) || $.trim(text) === '') {
                return;
            }

            title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

            switch (type) {
                case 'inside':
                    target = F.skin;
                    break;

                case 'outside':
                    target = F.wrap;
                    break;

                case 'over':
                    target = F.inner;
                    break;

                default: // 'float'
                    target = F.skin;

                    title.appendTo('body');

                    if (IE) {
                        title.width(title.width());
                    }

                    title.wrapInner('<span class="child"></span>');

                    //Increase bottom margin so this title will also fit into viewport
                    F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
                    break;
            }

            title[ (opts.position === 'top' ? 'prependTo' : 'appendTo') ](target);
        }
    };

    // jQuery plugin initialization
    $.fn.fancybox = function (options) {
        var index,
            that = $(this),
            selector = this.selector || '',
            run = function (e) {
                var what = $(this).blur(), idx = index, relType, relVal;

                if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
                    relType = options.groupAttr || 'data-fancybox-group';
                    relVal = what.attr(relType);

                    if (!relVal) {
                        relType = 'rel';
                        relVal = what.get(0)[ relType ];
                    }

                    if (relVal && relVal !== '' && relVal !== 'nofollow') {
                        what = selector.length ? $(selector) : that;
                        what = what.filter('[' + relType + '="' + relVal + '"]');
                        idx = what.index(this);
                    }

                    options.index = idx;

                    // Stop an event from bubbling if everything is fine
                    if (F.open(what, options) !== false) {
                        e.preventDefault();
                    }
                }
            };

        options = options || {};
        index = options.index || 0;

        if (!selector || options.live === false) {
            that.unbind('click.fb-start').bind('click.fb-start', run);

        } else {
            D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
        }

        this.filter('[data-fancybox-start=1]').trigger('click');

        return this;
    };

    // Tests that need a body at doc ready
    D.ready(function () {
        var w1, w2;

        if ($.scrollbarWidth === undefined) {
            // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
            $.scrollbarWidth = function () {
                var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
                    child = parent.children(),
                    width = child.innerWidth() - child.height(99).innerWidth();

                parent.remove();

                return width;
            };
        }

        if ($.support.fixedPosition === undefined) {
            $.support.fixedPosition = (function () {
                var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
                    fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

                elem.remove();

                return fixed;
            }());
        }

        $.extend(F.defaults, {
            scrollbarWidth: $.scrollbarWidth(),
            fixed: $.support.fixedPosition,
            parent: $('body')
        });

        //Get real width of page scroll-bar
        w1 = $(window).width();

        H.addClass('fancybox-lock-test');

        w2 = $(window).width();

        H.removeClass('fancybox-lock-test');

        $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
    });

}(window, document, jQuery));

/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */

(function ($) {
    "use strict";

    //Shortcut for fancyBox object
    var F = $.fancybox,
        format = function (url, rez, params) {
            params = params || '';

            if ($.type(params) === "object") {
                params = $.param(params, true);
            }

            $.each(rez, function (key, value) {
                url = url.replace('$' + key, value || '');
            });

            if (params.length) {
                url += ( url.indexOf('?') > 0 ? '&' : '?' ) + params;
            }

            return url;
        };

    //Add helper object
    F.helpers.media = {
        defaults: {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: 'opaque',
                    enablejsapi: 1
                },
                type: 'iframe',
                url: '//www.youtube.com/embed/$3'
            },
            vimeo: {
                matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                type: 'iframe',
                url: '//player.vimeo.com/video/$1'
            },
            metacafe: {
                matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                params: {
                    autoPlay: 'yes'
                },
                type: 'swf',
                url: function (rez, params, obj) {
                    obj.swf.flashVars = 'playerVars=' + $.param(params, true);

                    return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
                }
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: 'swf',
                url: '//www.dailymotion.com/swf/video/$1'
            },
            twitvid: {
                matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                params: {
                    autoplay: 0
                },
                type: 'iframe',
                url: '//www.twitvid.com/embed.php?guid=$1'
            },
            twitpic: {
                matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                type: 'image',
                url: '//twitpic.com/show/full/$1/'
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: 'image',
                url: '//$1/p/$2/media/?size=l'
            },
            google_maps: {
                matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                type: 'iframe',
                url: function (rez) {
                    return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
                }
            }
        },

        beforeLoad: function (opts, obj) {
            var url = obj.href || '',
                type = false,
                what,
                item,
                rez,
                params;

            for (what in opts) {
                if (opts.hasOwnProperty(what)) {
                    item = opts[ what ];
                    rez = url.match(item.matcher);

                    if (rez) {
                        type = item.type;
                        params = $.extend(true, {}, item.params, obj[ what ] || ($.isPlainObject(opts[ what ]) ? opts[ what ].params : null));

                        url = $.type(item.url) === "function" ? item.url.call(this, rez, params, obj) : format(item.url, rez, params);

                        break;
                    }
                }
            }

            if (type) {
                obj.href = url;
                obj.type = type;

                obj.autoHeight = false;
            }
        }
    };

}(jQuery));

/*! jCarousel - v0.3.0 - 2013-11-22
 * http://sorgalla.com/jcarousel
 * Copyright (c) 2013 Jan Sorgalla; Licensed MIT */

(function (t) {
    "use strict";
    var i = t.jCarousel = {};
    i.version = "0.3.0";
    var s = /^([+\-]=)?(.+)$/;
    i.parseTarget = function (t) {
        var i = !1, e = "object" != typeof t ? s.exec(t) : null;
        return e ? (t = parseInt(e[2], 10) || 0, e[1] && (i = !0, "-=" === e[1] && (t *= -1))) : "object" != typeof t && (t = parseInt(t, 10) || 0), {target: t, relative: i}
    }, i.detectCarousel = function (t) {
        for (var i; t.length > 0;) {
            if (i = t.filter("[data-jcarousel]"), i.length > 0)return i;
            if (i = t.find("[data-jcarousel]"), i.length > 0)return i;
            t = t.parent()
        }
        return null
    }, i.base = function (s) {
        return{version: i.version, _options: {}, _element: null, _carousel: null, _init: t.noop, _create: t.noop, _destroy: t.noop, _reload: t.noop, create: function () {
            return this._element.attr("data-" + s.toLowerCase(), !0).data(s, this), !1 === this._trigger("create") ? this : (this._create(), this._trigger("createend"), this)
        }, destroy: function () {
            return!1 === this._trigger("destroy") ? this : (this._destroy(), this._trigger("destroyend"), this._element.removeData(s).removeAttr("data-" + s.toLowerCase()), this)
        }, reload: function (t) {
            return!1 === this._trigger("reload") ? this : (t && this.options(t), this._reload(), this._trigger("reloadend"), this)
        }, element: function () {
            return this._element
        }, options: function (i, s) {
            if (0 === arguments.length)return t.extend({}, this._options);
            if ("string" == typeof i) {
                if (s === void 0)return this._options[i] === void 0 ? null : this._options[i];
                this._options[i] = s
            } else this._options = t.extend({}, this._options, i);
            return this
        }, carousel: function () {
            return this._carousel || (this._carousel = i.detectCarousel(this.options("carousel") || this._element), this._carousel || t.error('Could not detect carousel for plugin "' + s + '"')), this._carousel
        }, _trigger: function (i, e, r) {
            var n, o = !1;
            return r = [this].concat(r || []), (e || this._element).each(function () {
                n = t.Event((s + ":" + i).toLowerCase()), t(this).trigger(n, r), n.isDefaultPrevented() && (o = !0)
            }), !o
        }}
    }, i.plugin = function (s, e) {
        var r = t[s] = function (i, s) {
            this._element = t(i), this.options(s), this._init(), this.create()
        };
        return r.fn = r.prototype = t.extend({}, i.base(s), e), t.fn[s] = function (i) {
            var e = Array.prototype.slice.call(arguments, 1), n = this;
            return"string" == typeof i ? this.each(function () {
                var r = t(this).data(s);
                if (!r)return t.error("Cannot call methods on " + s + " prior to initialization; " + 'attempted to call method "' + i + '"');
                if (!t.isFunction(r[i]) || "_" === i.charAt(0))return t.error('No such method "' + i + '" for ' + s + " instance");
                var o = r[i].apply(r, e);
                return o !== r && o !== void 0 ? (n = o, !1) : void 0
            }) : this.each(function () {
                var e = t(this).data(s);
                e instanceof r ? e.reload(i) : new r(this, i)
            }), n
        }, r
    }
})(jQuery), function (t, i) {
    "use strict";
    var s = function (t) {
        return parseFloat(t) || 0
    };
    t.jCarousel.plugin("jcarousel", {animating: !1, tail: 0, inTail: !1, resizeTimer: null, lt: null, vertical: !1, rtl: !1, circular: !1, underflow: !1, relative: !1, _options: {list: function () {
        return this.element().children().eq(0)
    }, items: function () {
        return this.list().children()
    }, animation: 400, transitions: !1, wrap: null, vertical: null, rtl: null, center: !1}, _list: null, _items: null, _target: null, _first: null, _last: null, _visible: null, _fullyvisible: null, _init: function () {
        var t = this;
        return this.onWindowResize = function () {
            t.resizeTimer && clearTimeout(t.resizeTimer), t.resizeTimer = setTimeout(function () {
                t.reload()
            }, 100)
        }, this
    }, _create: function () {
        this._reload(), t(i).on("resize.jcarousel", this.onWindowResize)
    }, _destroy: function () {
        t(i).off("resize.jcarousel", this.onWindowResize)
    }, _reload: function () {
        this.vertical = this.options("vertical"), null == this.vertical && (this.vertical = this.list().height() > this.list().width()), this.rtl = this.options("rtl"), null == this.rtl && (this.rtl = function (i) {
            if ("rtl" === ("" + i.attr("dir")).toLowerCase())return!0;
            var s = !1;
            return i.parents("[dir]").each(function () {
                return/rtl/i.test(t(this).attr("dir")) ? (s = !0, !1) : void 0
            }), s
        }(this._element)), this.lt = this.vertical ? "top" : "left", this.relative = "relative" === this.list().css("position"), this._list = null, this._items = null;
        var i = this._target && this.index(this._target) >= 0 ? this._target : this.closest();
        this.circular = "circular" === this.options("wrap"), this.underflow = !1;
        var s = {left: 0, top: 0};
        return i.length > 0 && (this._prepare(i), this.list().find("[data-jcarousel-clone]").remove(), this._items = null, this.underflow = this._fullyvisible.length >= this.items().length, this.circular = this.circular && !this.underflow, s[this.lt] = this._position(i) + "px"), this.move(s), this
    }, list: function () {
        if (null === this._list) {
            var i = this.options("list");
            this._list = t.isFunction(i) ? i.call(this) : this._element.find(i)
        }
        return this._list
    }, items: function () {
        if (null === this._items) {
            var i = this.options("items");
            this._items = (t.isFunction(i) ? i.call(this) : this.list().find(i)).not("[data-jcarousel-clone]")
        }
        return this._items
    }, index: function (t) {
        return this.items().index(t)
    }, closest: function () {
        var i, e = this, r = this.list().position()[this.lt], n = t(), o = !1, l = this.vertical ? "bottom" : this.rtl && !this.relative ? "left" : "right";
        return this.rtl && this.relative && !this.vertical && (r += this.list().width() - this.clipping()), this.items().each(function () {
            if (n = t(this), o)return!1;
            var a = e.dimension(n);
            if (r += a, r >= 0) {
                if (i = a - s(n.css("margin-" + l)), !(0 >= Math.abs(r) - a + i / 2))return!1;
                o = !0
            }
        }), n
    }, target: function () {
        return this._target
    }, first: function () {
        return this._first
    }, last: function () {
        return this._last
    }, visible: function () {
        return this._visible
    }, fullyvisible: function () {
        return this._fullyvisible
    }, hasNext: function () {
        if (!1 === this._trigger("hasnext"))return!0;
        var t = this.options("wrap"), i = this.items().length - 1;
        return i >= 0 && (t && "first" !== t || i > this.index(this._last) || this.tail && !this.inTail) ? !0 : !1
    }, hasPrev: function () {
        if (!1 === this._trigger("hasprev"))return!0;
        var t = this.options("wrap");
        return this.items().length > 0 && (t && "last" !== t || this.index(this._first) > 0 || this.tail && this.inTail) ? !0 : !1
    }, clipping: function () {
        return this._element["inner" + (this.vertical ? "Height" : "Width")]()
    }, dimension: function (t) {
        return t["outer" + (this.vertical ? "Height" : "Width")](!0)
    }, scroll: function (i, s, e) {
        if (this.animating)return this;
        if (!1 === this._trigger("scroll", null, [i, s]))return this;
        t.isFunction(s) && (e = s, s = !0);
        var r = t.jCarousel.parseTarget(i);
        if (r.relative) {
            var n, o, l, a, h, u, c, f, d = this.items().length - 1, _ = Math.abs(r.target), p = this.options("wrap");
            if (r.target > 0) {
                var v = this.index(this._last);
                if (v >= d && this.tail)this.inTail ? "both" === p || "last" === p ? this._scroll(0, s, e) : t.isFunction(e) && e.call(this, !1) : this._scrollTail(s, e); else if (n = this.index(this._target), this.underflow && n === d && ("circular" === p || "both" === p || "last" === p) || !this.underflow && v === d && ("both" === p || "last" === p))this._scroll(0, s, e); else if (l = n + _, this.circular && l > d) {
                    for (f = d, h = this.items().get(-1); l > f++;)h = this.items().eq(0), u = this._visible.index(h) >= 0, u && h.after(h.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(h), u || (c = {}, c[this.lt] = this.dimension(h), this.moveBy(c)), this._items = null;
                    this._scroll(h, s, e)
                } else this._scroll(Math.min(l, d), s, e)
            } else if (this.inTail)this._scroll(Math.max(this.index(this._first) - _ + 1, 0), s, e); else if (o = this.index(this._first), n = this.index(this._target), a = this.underflow ? n : o, l = a - _, 0 >= a && (this.underflow && "circular" === p || "both" === p || "first" === p))this._scroll(d, s, e); else if (this.circular && 0 > l) {
                for (f = l, h = this.items().get(0); 0 > f++;) {
                    h = this.items().eq(-1), u = this._visible.index(h) >= 0, u && h.after(h.clone(!0).attr("data-jcarousel-clone", !0)), this.list().prepend(h), this._items = null;
                    var g = this.dimension(h);
                    c = {}, c[this.lt] = -g, this.moveBy(c)
                }
                this._scroll(h, s, e)
            } else this._scroll(Math.max(l, 0), s, e)
        } else this._scroll(r.target, s, e);
        return this._trigger("scrollend"), this
    }, moveBy: function (t, i) {
        var e = this.list().position(), r = 1, n = 0;
        return this.rtl && !this.vertical && (r = -1, this.relative && (n = this.list().width() - this.clipping())), t.left && (t.left = e.left + n + s(t.left) * r + "px"), t.top && (t.top = e.top + n + s(t.top) * r + "px"), this.move(t, i)
    }, move: function (i, s) {
        s = s || {};
        var e = this.options("transitions"), r = !!e, n = !!e.transforms, o = !!e.transforms3d, l = s.duration || 0, a = this.list();
        if (!r && l > 0)return a.animate(i, s), void 0;
        var h = s.complete || t.noop, u = {};
        if (r) {
            var c = a.css(["transitionDuration", "transitionTimingFunction", "transitionProperty"]), f = h;
            h = function () {
                t(this).css(c), f.call(this)
            }, u = {transitionDuration: (l > 0 ? l / 1e3 : 0) + "s", transitionTimingFunction: e.easing || s.easing, transitionProperty: l > 0 ? function () {
                return n || o ? "all" : i.left ? "left" : "top"
            }() : "none", transform: "none"}
        }
        o ? u.transform = "translate3d(" + (i.left || 0) + "," + (i.top || 0) + ",0)" : n ? u.transform = "translate(" + (i.left || 0) + "," + (i.top || 0) + ")" : t.extend(u, i), r && l > 0 && a.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", h), a.css(u), 0 >= l && a.each(function () {
            h.call(this)
        })
    }, _scroll: function (i, s, e) {
        if (this.animating)return t.isFunction(e) && e.call(this, !1), this;
        if ("object" != typeof i ? i = this.items().eq(i) : i.jquery === void 0 && (i = t(i)), 0 === i.length)return t.isFunction(e) && e.call(this, !1), this;
        this.inTail = !1, this._prepare(i);
        var r = this._position(i), n = this.list().position()[this.lt];
        if (r === n)return t.isFunction(e) && e.call(this, !1), this;
        var o = {};
        return o[this.lt] = r + "px", this._animate(o, s, e), this
    }, _scrollTail: function (i, s) {
        if (this.animating || !this.tail)return t.isFunction(s) && s.call(this, !1), this;
        var e = this.list().position()[this.lt];
        this.rtl && this.relative && !this.vertical && (e += this.list().width() - this.clipping()), this.rtl && !this.vertical ? e += this.tail : e -= this.tail, this.inTail = !0;
        var r = {};
        return r[this.lt] = e + "px", this._update({target: this._target.next(), fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())}), this._animate(r, i, s), this
    }, _animate: function (i, s, e) {
        if (e = e || t.noop, !1 === this._trigger("animate"))return e.call(this, !1), this;
        this.animating = !0;
        var r = this.options("animation"), n = t.proxy(function () {
            this.animating = !1;
            var t = this.list().find("[data-jcarousel-clone]");
            t.length > 0 && (t.remove(), this._reload()), this._trigger("animateend"), e.call(this, !0)
        }, this), o = "object" == typeof r ? t.extend({}, r) : {duration: r}, l = o.complete || t.noop;
        return s === !1 ? o.duration = 0 : t.fx.speeds[o.duration] !== void 0 && (o.duration = t.fx.speeds[o.duration]), o.complete = function () {
            n(), l.call(this)
        }, this.move(i, o), this
    }, _prepare: function (i) {
        var e, r, n, o, l = this.index(i), a = l, h = this.dimension(i), u = this.clipping(), c = this.vertical ? "bottom" : this.rtl ? "left" : "right", f = this.options("center"), d = {target: i, first: i, last: i, visible: i, fullyvisible: u >= h ? i : t()};
        if (f && (h /= 2, u /= 2), u > h)for (; ;) {
            if (e = this.items().eq(++a), 0 === e.length) {
                if (!this.circular)break;
                if (e = this.items().eq(0), i.get(0) === e.get(0))break;
                if (r = this._visible.index(e) >= 0, r && e.after(e.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(e), !r) {
                    var _ = {};
                    _[this.lt] = this.dimension(e), this.moveBy(_)
                }
                this._items = null
            }
            if (o = this.dimension(e), 0 === o)break;
            if (h += o, d.last = e, d.visible = d.visible.add(e), n = s(e.css("margin-" + c)), u >= h - n && (d.fullyvisible = d.fullyvisible.add(e)), h >= u)break
        }
        if (!this.circular && !f && u > h)for (a = l; ;) {
            if (0 > --a)break;
            if (e = this.items().eq(a), 0 === e.length)break;
            if (o = this.dimension(e), 0 === o)break;
            if (h += o, d.first = e, d.visible = d.visible.add(e), n = s(e.css("margin-" + c)), u >= h - n && (d.fullyvisible = d.fullyvisible.add(e)), h >= u)break
        }
        return this._update(d), this.tail = 0, f || "circular" === this.options("wrap") || "custom" === this.options("wrap") || this.index(d.last) !== this.items().length - 1 || (h -= s(d.last.css("margin-" + c)), h > u && (this.tail = h - u)), this
    }, _position: function (t) {
        var i = this._first, s = i.position()[this.lt], e = this.options("center"), r = e ? this.clipping() / 2 - this.dimension(i) / 2 : 0;
        return this.rtl && !this.vertical ? (s -= this.relative ? this.list().width() - this.dimension(i) : this.clipping() - this.dimension(i), s += r) : s -= r, !e && (this.index(t) > this.index(i) || this.inTail) && this.tail ? (s = this.rtl && !this.vertical ? s - this.tail : s + this.tail, this.inTail = !0) : this.inTail = !1, -s
    }, _update: function (i) {
        var s, e = this, r = {target: this._target || t(), first: this._first || t(), last: this._last || t(), visible: this._visible || t(), fullyvisible: this._fullyvisible || t()}, n = this.index(i.first || r.first) < this.index(r.first), o = function (s) {
            var o = [], l = [];
            i[s].each(function () {
                0 > r[s].index(this) && o.push(this)
            }), r[s].each(function () {
                0 > i[s].index(this) && l.push(this)
            }), n ? o = o.reverse() : l = l.reverse(), e._trigger(s + "in", t(o)), e._trigger(s + "out", t(l)), e["_" + s] = i[s]
        };
        for (s in i)o(s);
        return this
    }})
}(jQuery, window), function (t) {
    "use strict";
    t.jcarousel.fn.scrollIntoView = function (i, s, e) {
        var r, n = t.jCarousel.parseTarget(i), o = this.index(this._fullyvisible.first()), l = this.index(this._fullyvisible.last());
        if (r = n.relative ? 0 > n.target ? Math.max(0, o + n.target) : l + n.target : "object" != typeof n.target ? n.target : this.index(n.target), o > r)return this.scroll(r, s, e);
        if (r >= o && l >= r)return t.isFunction(e) && e.call(this, !1), this;
        for (var a, h = this.items(), u = this.clipping(), c = this.vertical ? "bottom" : this.rtl ? "left" : "right", f = 0; ;) {
            if (a = h.eq(r), 0 === a.length)break;
            if (f += this.dimension(a), f >= u) {
                var d = parseFloat(a.css("margin-" + c)) || 0;
                f - d !== u && r++;
                break
            }
            if (0 >= r)break;
            r--
        }
        return this.scroll(r, s, e)
    }
}(jQuery), function (t) {
    "use strict";
    t.jCarousel.plugin("jcarouselControl", {_options: {target: "+=1", event: "click", method: "scroll"}, _active: null, _init: function () {
        this.onDestroy = t.proxy(function () {
            this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this))
        }, this), this.onReload = t.proxy(this._reload, this), this.onEvent = t.proxy(function (i) {
            i.preventDefault();
            var s = this.options("method");
            t.isFunction(s) ? s.call(this) : this.carousel().jcarousel(this.options("method"), this.options("target"))
        }, this)
    }, _create: function () {
        this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend", this.onReload), this._element.on(this.options("event") + ".jcarouselcontrol", this.onEvent), this._reload()
    }, _destroy: function () {
        this._element.off(".jcarouselcontrol", this.onEvent), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend", this.onReload)
    }, _reload: function () {
        var i, s = t.jCarousel.parseTarget(this.options("target")), e = this.carousel();
        if (s.relative)i = e.jcarousel(s.target > 0 ? "hasNext" : "hasPrev"); else {
            var r = "object" != typeof s.target ? e.jcarousel("items").eq(s.target) : s.target;
            i = e.jcarousel("target").index(r) >= 0
        }
        return this._active !== i && (this._trigger(i ? "active" : "inactive"), this._active = i), this
    }})
}(jQuery), function (t) {
    "use strict";
    t.jCarousel.plugin("jcarouselPagination", {_options: {perPage: null, item: function (t) {
        return'<a href="#' + t + '">' + t + "</a>"
    }, event: "click", method: "scroll"}, _pages: {}, _items: {}, _currentPage: null, _init: function () {
        this.onDestroy = t.proxy(function () {
            this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this))
        }, this), this.onReload = t.proxy(this._reload, this), this.onScroll = t.proxy(this._update, this)
    }, _create: function () {
        this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend", this.onReload).on("jcarousel:scrollend", this.onScroll), this._reload()
    }, _destroy: function () {
        this._clear(), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend", this.onReload).off("jcarousel:scrollend", this.onScroll)
    }, _reload: function () {
        var i = this.options("perPage");
        if (this._pages = {}, this._items = {}, t.isFunction(i) && (i = i.call(this)), null == i)this._pages = this._calculatePages(); else for (var s, e = parseInt(i, 10) || 0, r = this.carousel().jcarousel("items"), n = 1, o = 0; ;) {
            if (s = r.eq(o++), 0 === s.length)break;
            this._pages[n] = this._pages[n] ? this._pages[n].add(s) : s, 0 === o % e && n++
        }
        this._clear();
        var l = this, a = this.carousel().data("jcarousel"), h = this._element, u = this.options("item");
        t.each(this._pages, function (i, s) {
            var e = l._items[i] = t(u.call(l, i, s));
            e.on(l.options("event") + ".jcarouselpagination", t.proxy(function () {
                var t = s.eq(0);
                if (a.circular) {
                    var e = a.index(a.target()), r = a.index(t);
                    parseFloat(i) > parseFloat(l._currentPage) ? e > r && (t = "+=" + (a.items().length - e + r)) : r > e && (t = "-=" + (e + (a.items().length - r)))
                }
                a[this.options("method")](t)
            }, l)), h.append(e)
        }), this._update()
    }, _update: function () {
        var i, s = this.carousel().jcarousel("target");
        t.each(this._pages, function (t, e) {
            return e.each(function () {
                return s.is(this) ? (i = t, !1) : void 0
            }), i ? !1 : void 0
        }), this._currentPage !== i && (this._trigger("inactive", this._items[this._currentPage]), this._trigger("active", this._items[i])), this._currentPage = i
    }, items: function () {
        return this._items
    }, _clear: function () {
        this._element.empty(), this._currentPage = null
    }, _calculatePages: function () {
        for (var t, i = this.carousel().data("jcarousel"), s = i.items(), e = i.clipping(), r = 0, n = 0, o = 1, l = {}; ;) {
            if (t = s.eq(n++), 0 === t.length)break;
            l[o] = l[o] ? l[o].add(t) : t, r += i.dimension(t), r >= e && (o++, r = 0)
        }
        return l
    }})
}(jQuery), function (t) {
    "use strict";
    t.jCarousel.plugin("jcarouselAutoscroll", {_options: {target: "+=1", interval: 3e3, autostart: !0}, _timer: null, _init: function () {
        this.onDestroy = t.proxy(function () {
            this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this))
        }, this), this.onAnimateEnd = t.proxy(this.start, this)
    }, _create: function () {
        this.carousel().one("jcarousel:destroy", this.onDestroy), this.options("autostart") && this.start()
    }, _destroy: function () {
        this.stop(), this.carousel().off("jcarousel:destroy", this.onDestroy)
    }, start: function () {
        return this.stop(), this.carousel().one("jcarousel:animateend", this.onAnimateEnd), this._timer = setTimeout(t.proxy(function () {
            this.carousel().jcarousel("scroll", this.options("target"))
        }, this), this.options("interval")), this
    }, stop: function () {
        return this._timer && (this._timer = clearTimeout(this._timer)), this.carousel().off("jcarousel:animateend", this.onAnimateEnd), this
    }})
}(jQuery);

/*
 == malihu jquery custom scrollbars plugin ==
 version: 2.8.3
 author: malihu (http://manos.malihu.gr)
 plugin home: http://manos.malihu.gr/jquery-custom-content-scroller
 */

/*
 Copyright 2010-2013 Manos Malihutsakis

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with this program.  If not, see http://www.gnu.org/licenses/lgpl.html.
 */
(function ($) {
    /*plugin script*/
    var methods = {
            init: function (options) {
                var defaults = {
                        set_width: false, /*optional element width: boolean, pixels, percentage*/
                        set_height: false, /*optional element height: boolean, pixels, percentage*/
                        horizontalScroll: false, /*scroll horizontally: boolean*/
                        scrollInertia: 950, /*scrolling inertia: integer (milliseconds)*/
                        mouseWheel: true, /*mousewheel support: boolean*/
                        mouseWheelPixels: "auto", /*mousewheel pixels amount: integer, "auto"*/
                        autoDraggerLength: true, /*auto-adjust scrollbar dragger length: boolean*/
                        autoHideScrollbar: false, /*auto-hide scrollbar when idle*/
                        alwaysShowScrollbar: false, /*always show scrollbar even when there's nothing to scroll (disables autoHideScrollbar): boolean*/
                        snapAmount: null, /* optional element always snaps to a multiple of this number in pixels */
                        snapOffset: 0, /* when snapping, snap with this number in pixels as an offset */
                        scrollButtons: { /*scroll buttons*/
                            enable: false, /*scroll buttons support: boolean*/
                            scrollType: "continuous", /*scroll buttons scrolling type: "continuous", "pixels"*/
                            scrollSpeed: "auto", /*scroll buttons continuous scrolling speed: integer, "auto"*/
                            scrollAmount: 40 /*scroll buttons pixels scroll amount: integer (pixels)*/
                        },
                        advanced: {
                            updateOnBrowserResize: true, /*update scrollbars on browser resize (for layouts based on percentages): boolean*/
                            updateOnContentResize: false, /*auto-update scrollbars on content resize (for dynamic content): boolean*/
                            autoExpandHorizontalScroll: false, /*auto-expand width for horizontal scrolling: boolean*/
                            autoScrollOnFocus: true, /*auto-scroll on focused elements: boolean*/
                            normalizeMouseWheelDelta: false /*normalize mouse-wheel delta (-1/1)*/
                        },
                        contentTouchScroll: true, /*scrolling by touch-swipe content: boolean*/
                        callbacks: {
                            onScrollStart: function () {
                            }, /*user custom callback function on scroll start event*/
                            onScroll: function () {
                            }, /*user custom callback function on scroll event*/
                            onTotalScroll: function () {
                            }, /*user custom callback function on scroll end reached event*/
                            onTotalScrollBack: function () {
                            }, /*user custom callback function on scroll begin reached event*/
                            onTotalScrollOffset: 0, /*scroll end reached offset: integer (pixels)*/
                            onTotalScrollBackOffset: 0, /*scroll begin reached offset: integer (pixels)*/
                            whileScrolling: function () {
                            } /*user custom callback function on scrolling event*/
                        },
                        theme: "light" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
                    },
                    options = $.extend(true, defaults, options);
                return this.each(function () {
                    var $this = $(this);
                    /*set element width/height, create markup for custom scrollbars, add classes*/
                    if (options.set_width) {
                        $this.css("width", options.set_width);
                    }
                    if (options.set_height) {
                        $this.css("height", options.set_height);
                    }
                    if (!$(document).data("mCustomScrollbar-index")) {
                        $(document).data("mCustomScrollbar-index", "1");
                    } else {
                        var mCustomScrollbarIndex = parseInt($(document).data("mCustomScrollbar-index"));
                        $(document).data("mCustomScrollbar-index", mCustomScrollbarIndex + 1);
                    }
                    $this.wrapInner("<div class='mCustomScrollBox" + " mCS-" + options.theme + "' id='mCSB_" + $(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + $(document).data("mCustomScrollbar-index"));
                    var mCustomScrollBox = $this.children(".mCustomScrollBox");
                    if (options.horizontalScroll) {
                        mCustomScrollBox.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
                        var mCSB_h_wrapper = mCustomScrollBox.children(".mCSB_h_wrapper");
                        mCSB_h_wrapper.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({"width": mCSB_h_wrapper.children().outerWidth(), "position": "relative"}).unwrap();
                    } else {
                        mCustomScrollBox.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />");
                    }
                    var mCSB_container = mCustomScrollBox.children(".mCSB_container");
                    if ($.support.touch) {
                        mCSB_container.addClass("mCS_touch");
                    }
                    mCSB_container.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
                    var mCSB_scrollTools = mCustomScrollBox.children(".mCSB_scrollTools"),
                        mCSB_draggerContainer = mCSB_scrollTools.children(".mCSB_draggerContainer"),
                        mCSB_dragger = mCSB_draggerContainer.children(".mCSB_dragger");
                    if (options.horizontalScroll) {
                        mCSB_dragger.data("minDraggerWidth", mCSB_dragger.width());
                    } else {
                        mCSB_dragger.data("minDraggerHeight", mCSB_dragger.height());
                    }
                    if (options.scrollButtons.enable) {
                        if (options.horizontalScroll) {
                            mCSB_scrollTools.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>");
                        } else {
                            mCSB_scrollTools.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>");
                        }
                    }
                    /*mCustomScrollBox scrollTop and scrollLeft is always 0 to prevent browser focus scrolling*/
                    mCustomScrollBox.bind("scroll", function () {
                        if (!$this.is(".mCS_disabled")) { /*native focus scrolling for disabled scrollbars*/
                            mCustomScrollBox.scrollTop(0).scrollLeft(0);
                        }
                    });
                    /*store options, global vars/states, intervals*/
                    $this.data({
                        /*init state*/
                        "mCS_Init": true,
                        /*instance index*/
                        "mCustomScrollbarIndex": $(document).data("mCustomScrollbar-index"),
                        /*option parameters*/
                        "horizontalScroll": options.horizontalScroll,
                        "scrollInertia": options.scrollInertia,
                        "scrollEasing": "mcsEaseOut",
                        "mouseWheel": options.mouseWheel,
                        "mouseWheelPixels": options.mouseWheelPixels,
                        "autoDraggerLength": options.autoDraggerLength,
                        "autoHideScrollbar": options.autoHideScrollbar,
                        "alwaysShowScrollbar": options.alwaysShowScrollbar,
                        "snapAmount": options.snapAmount,
                        "snapOffset": options.snapOffset,
                        "scrollButtons_enable": options.scrollButtons.enable,
                        "scrollButtons_scrollType": options.scrollButtons.scrollType,
                        "scrollButtons_scrollSpeed": options.scrollButtons.scrollSpeed,
                        "scrollButtons_scrollAmount": options.scrollButtons.scrollAmount,
                        "autoExpandHorizontalScroll": options.advanced.autoExpandHorizontalScroll,
                        "autoScrollOnFocus": options.advanced.autoScrollOnFocus,
                        "normalizeMouseWheelDelta": options.advanced.normalizeMouseWheelDelta,
                        "contentTouchScroll": options.contentTouchScroll,
                        "onScrollStart_Callback": options.callbacks.onScrollStart,
                        "onScroll_Callback": options.callbacks.onScroll,
                        "onTotalScroll_Callback": options.callbacks.onTotalScroll,
                        "onTotalScrollBack_Callback": options.callbacks.onTotalScrollBack,
                        "onTotalScroll_Offset": options.callbacks.onTotalScrollOffset,
                        "onTotalScrollBack_Offset": options.callbacks.onTotalScrollBackOffset,
                        "whileScrolling_Callback": options.callbacks.whileScrolling,
                        /*events binding state*/
                        "bindEvent_scrollbar_drag": false,
                        "bindEvent_content_touch": false,
                        "bindEvent_scrollbar_click": false,
                        "bindEvent_mousewheel": false,
                        "bindEvent_buttonsContinuous_y": false,
                        "bindEvent_buttonsContinuous_x": false,
                        "bindEvent_buttonsPixels_y": false,
                        "bindEvent_buttonsPixels_x": false,
                        "bindEvent_focusin": false,
                        "bindEvent_autoHideScrollbar": false,
                        /*buttons intervals*/
                        "mCSB_buttonScrollRight": false,
                        "mCSB_buttonScrollLeft": false,
                        "mCSB_buttonScrollDown": false,
                        "mCSB_buttonScrollUp": false
                    });
                    /*max-width/max-height*/
                    if (options.horizontalScroll) {
                        if ($this.css("max-width") !== "none") {
                            if (!options.advanced.updateOnContentResize) { /*needs updateOnContentResize*/
                                options.advanced.updateOnContentResize = true;
                            }
                        }
                    } else {
                        if ($this.css("max-height") !== "none") {
                            var percentage = false, maxHeight = parseInt($this.css("max-height"));
                            if ($this.css("max-height").indexOf("%") >= 0) {
                                percentage = maxHeight,
                                    maxHeight = $this.parent().height() * percentage / 100;
                            }
                            $this.css("overflow", "hidden");
                            mCustomScrollBox.css("max-height", maxHeight);
                        }
                    }
                    $this.mCustomScrollbar("update");
                    /*window resize fn (for layouts based on percentages)*/
                    if (options.advanced.updateOnBrowserResize) {
                        var mCSB_resizeTimeout, currWinWidth = $(window).width(), currWinHeight = $(window).height();
                        $(window).bind("resize." + $this.data("mCustomScrollbarIndex"), function () {
                            if (mCSB_resizeTimeout) {
                                clearTimeout(mCSB_resizeTimeout);
                            }
                            mCSB_resizeTimeout = setTimeout(function () {
                                if (!$this.is(".mCS_disabled") && !$this.is(".mCS_destroyed")) {
                                    var winWidth = $(window).width(), winHeight = $(window).height();
                                    if (currWinWidth !== winWidth || currWinHeight !== winHeight) { /*ie8 fix*/
                                        if ($this.css("max-height") !== "none" && percentage) {
                                            mCustomScrollBox.css("max-height", $this.parent().height() * percentage / 100);
                                        }
                                        $this.mCustomScrollbar("update");
                                        currWinWidth = winWidth;
                                        currWinHeight = winHeight;
                                    }
                                }
                            }, 150);
                        });
                    }
                    /*content resize fn (for dynamically generated content)*/
                    if (options.advanced.updateOnContentResize) {
                        var mCSB_onContentResize;
                        if (options.horizontalScroll) {
                            var mCSB_containerOldSize = mCSB_container.outerWidth();
                        } else {
                            var mCSB_containerOldSize = mCSB_container.outerHeight();
                        }
                        mCSB_onContentResize = setInterval(function () {
                            if (options.horizontalScroll) {
                                if (options.advanced.autoExpandHorizontalScroll) {
                                    mCSB_container.css({"position": "absolute", "width": "auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({"width": mCSB_container.outerWidth(), "position": "relative"}).unwrap();
                                }
                                var mCSB_containerNewSize = mCSB_container.outerWidth();
                            } else {
                                var mCSB_containerNewSize = mCSB_container.outerHeight();
                            }
                            if (mCSB_containerNewSize != mCSB_containerOldSize) {
                                $this.mCustomScrollbar("update");
                                mCSB_containerOldSize = mCSB_containerNewSize;
                            }
                        }, 300);
                    }
                });
            },
            update: function () {
                var $this = $(this),
                    mCustomScrollBox = $this.children(".mCustomScrollBox"),
                    mCSB_container = mCustomScrollBox.children(".mCSB_container");
                mCSB_container.removeClass("mCS_no_scrollbar");
                $this.removeClass("mCS_disabled mCS_destroyed");
                mCustomScrollBox.scrollTop(0).scrollLeft(0);
                /*reset scrollTop/scrollLeft to prevent browser focus scrolling*/
                var mCSB_scrollTools = mCustomScrollBox.children(".mCSB_scrollTools"),
                    mCSB_draggerContainer = mCSB_scrollTools.children(".mCSB_draggerContainer"),
                    mCSB_dragger = mCSB_draggerContainer.children(".mCSB_dragger");
                if ($this.data("horizontalScroll")) {
                    var mCSB_buttonLeft = mCSB_scrollTools.children(".mCSB_buttonLeft"),
                        mCSB_buttonRight = mCSB_scrollTools.children(".mCSB_buttonRight"),
                        mCustomScrollBoxW = mCustomScrollBox.width();
                    if ($this.data("autoExpandHorizontalScroll")) {
                        mCSB_container.css({"position": "absolute", "width": "auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({"width": mCSB_container.outerWidth(), "position": "relative"}).unwrap();
                    }
                    var mCSB_containerW = mCSB_container.outerWidth();
                } else {
                    var mCSB_buttonUp = mCSB_scrollTools.children(".mCSB_buttonUp"),
                        mCSB_buttonDown = mCSB_scrollTools.children(".mCSB_buttonDown"),
                        mCustomScrollBoxH = mCustomScrollBox.height(),
                        mCSB_containerH = mCSB_container.outerHeight();
                }
                if (mCSB_containerH > mCustomScrollBoxH && !$this.data("horizontalScroll")) { /*content needs vertical scrolling*/
                    mCSB_scrollTools.css("display", "block");
                    var mCSB_draggerContainerH = mCSB_draggerContainer.height();
                    /*auto adjust scrollbar dragger length analogous to content*/
                    if ($this.data("autoDraggerLength")) {
                        var draggerH = Math.round(mCustomScrollBoxH / mCSB_containerH * mCSB_draggerContainerH),
                            minDraggerH = mCSB_dragger.data("minDraggerHeight");
                        if (draggerH <= minDraggerH) { /*min dragger height*/
                            mCSB_dragger.css({"height": minDraggerH});
                        } else if (draggerH >= mCSB_draggerContainerH - 10) { /*max dragger height*/
                            var mCSB_draggerContainerMaxH = mCSB_draggerContainerH - 10;
                            mCSB_dragger.css({"height": mCSB_draggerContainerMaxH});
                        } else {
                            mCSB_dragger.css({"height": draggerH});
                        }
                        mCSB_dragger.children(".mCSB_dragger_bar").css({"line-height": mCSB_dragger.height() + "px"});
                    }
                    var mCSB_draggerH = mCSB_dragger.height(),
                    /*calculate and store scroll amount, add scrolling*/
                        scrollAmount = (mCSB_containerH - mCustomScrollBoxH) / (mCSB_draggerContainerH - mCSB_draggerH);
                    $this.data("scrollAmount", scrollAmount).mCustomScrollbar("scrolling", mCustomScrollBox, mCSB_container, mCSB_draggerContainer, mCSB_dragger, mCSB_buttonUp, mCSB_buttonDown, mCSB_buttonLeft, mCSB_buttonRight);
                    /*scroll*/
                    var mCSB_containerP = Math.abs(mCSB_container.position().top);
                    $this.mCustomScrollbar("scrollTo", mCSB_containerP, {scrollInertia: 0, trigger: "internal"});
                } else if (mCSB_containerW > mCustomScrollBoxW && $this.data("horizontalScroll")) { /*content needs horizontal scrolling*/
                    mCSB_scrollTools.css("display", "block");
                    var mCSB_draggerContainerW = mCSB_draggerContainer.width();
                    /*auto adjust scrollbar dragger length analogous to content*/
                    if ($this.data("autoDraggerLength")) {
                        var draggerW = Math.round(mCustomScrollBoxW / mCSB_containerW * mCSB_draggerContainerW),
                            minDraggerW = mCSB_dragger.data("minDraggerWidth");
                        if (draggerW <= minDraggerW) { /*min dragger height*/
                            mCSB_dragger.css({"width": minDraggerW});
                        } else if (draggerW >= mCSB_draggerContainerW - 10) { /*max dragger height*/
                            var mCSB_draggerContainerMaxW = mCSB_draggerContainerW - 10;
                            mCSB_dragger.css({"width": mCSB_draggerContainerMaxW});
                        } else {
                            mCSB_dragger.css({"width": draggerW});
                        }
                    }
                    var mCSB_draggerW = mCSB_dragger.width(),
                    /*calculate and store scroll amount, add scrolling*/
                        scrollAmount = (mCSB_containerW - mCustomScrollBoxW) / (mCSB_draggerContainerW - mCSB_draggerW);
                    $this.data("scrollAmount", scrollAmount).mCustomScrollbar("scrolling", mCustomScrollBox, mCSB_container, mCSB_draggerContainer, mCSB_dragger, mCSB_buttonUp, mCSB_buttonDown, mCSB_buttonLeft, mCSB_buttonRight);
                    /*scroll*/
                    var mCSB_containerP = Math.abs(mCSB_container.position().left);
                    $this.mCustomScrollbar("scrollTo", mCSB_containerP, {scrollInertia: 0, trigger: "internal"});
                } else { /*content does not need scrolling*/
                    /*unbind events, reset content position, hide scrollbars, remove classes*/
                    mCustomScrollBox.unbind("mousewheel focusin");
                    if ($this.data("horizontalScroll")) {
                        mCSB_dragger.add(mCSB_container).css("left", 0);
                    } else {
                        mCSB_dragger.add(mCSB_container).css("top", 0);
                    }
                    if ($this.data("alwaysShowScrollbar")) {
                        if (!$this.data("horizontalScroll")) { /*vertical scrolling*/
                            mCSB_dragger.css({"height": mCSB_draggerContainer.height()});
                        } else if ($this.data("horizontalScroll")) { /*horizontal scrolling*/
                            mCSB_dragger.css({"width": mCSB_draggerContainer.width()});
                        }
                    } else {
                        mCSB_scrollTools.css("display", "none");
                        mCSB_container.addClass("mCS_no_scrollbar");
                    }
                    $this.data({"bindEvent_mousewheel": false, "bindEvent_focusin": false});
                }
            },
            scrolling: function (mCustomScrollBox, mCSB_container, mCSB_draggerContainer, mCSB_dragger, mCSB_buttonUp, mCSB_buttonDown, mCSB_buttonLeft, mCSB_buttonRight) {
                var $this = $(this);
                /*scrollbar drag scrolling*/
                if (!$this.data("bindEvent_scrollbar_drag")) {
                    var mCSB_draggerDragY, mCSB_draggerDragX,
                        mCSB_dragger_downEvent, mCSB_dragger_moveEvent, mCSB_dragger_upEvent;
                    if ($.support.pointer) { /*pointer*/
                        mCSB_dragger_downEvent = "pointerdown";
                        mCSB_dragger_moveEvent = "pointermove";
                        mCSB_dragger_upEvent = "pointerup";
                    } else if ($.support.msPointer) { /*MSPointer*/
                        mCSB_dragger_downEvent = "MSPointerDown";
                        mCSB_dragger_moveEvent = "MSPointerMove";
                        mCSB_dragger_upEvent = "MSPointerUp";
                    }
                    if ($.support.pointer || $.support.msPointer) { /*pointer, MSPointer*/
                        mCSB_dragger.bind(mCSB_dragger_downEvent, function (e) {
                            e.preventDefault();
                            $this.data({"on_drag": true});
                            mCSB_dragger.addClass("mCSB_dragger_onDrag");
                            var elem = $(this),
                                elemOffset = elem.offset(),
                                x = e.originalEvent.pageX - elemOffset.left,
                                y = e.originalEvent.pageY - elemOffset.top;
                            if (x < elem.width() && x > 0 && y < elem.height() && y > 0) {
                                mCSB_draggerDragY = y;
                                mCSB_draggerDragX = x;
                            }
                        });
                        $(document).bind(mCSB_dragger_moveEvent + "." + $this.data("mCustomScrollbarIndex"),function (e) {
                            e.preventDefault();
                            if ($this.data("on_drag")) {
                                var elem = mCSB_dragger,
                                    elemOffset = elem.offset(),
                                    x = e.originalEvent.pageX - elemOffset.left,
                                    y = e.originalEvent.pageY - elemOffset.top;
                                scrollbarDrag(mCSB_draggerDragY, mCSB_draggerDragX, y, x);
                            }
                        }).bind(mCSB_dragger_upEvent + "." + $this.data("mCustomScrollbarIndex"), function (e) {
                            $this.data({"on_drag": false});
                            mCSB_dragger.removeClass("mCSB_dragger_onDrag");
                        });
                    } else { /*mouse/touch*/
                        mCSB_dragger.bind("mousedown touchstart",function (e) {
                            e.preventDefault();
                            e.stopImmediatePropagation();
                            var elem = $(this), elemOffset = elem.offset(), x, y;
                            if (e.type === "touchstart") {
                                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                                x = touch.pageX - elemOffset.left;
                                y = touch.pageY - elemOffset.top;
                            } else {
                                $this.data({"on_drag": true});
                                mCSB_dragger.addClass("mCSB_dragger_onDrag");
                                x = e.pageX - elemOffset.left;
                                y = e.pageY - elemOffset.top;
                            }
                            if (x < elem.width() && x > 0 && y < elem.height() && y > 0) {
                                mCSB_draggerDragY = y;
                                mCSB_draggerDragX = x;
                            }
                        }).bind("touchmove", function (e) {
                            e.preventDefault();
                            e.stopImmediatePropagation();
                            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                                elem = $(this),
                                elemOffset = elem.offset(),
                                x = touch.pageX - elemOffset.left,
                                y = touch.pageY - elemOffset.top;
                            scrollbarDrag(mCSB_draggerDragY, mCSB_draggerDragX, y, x);
                        });
                        $(document).bind("mousemove." + $this.data("mCustomScrollbarIndex"),function (e) {
                            if ($this.data("on_drag")) {
                                var elem = mCSB_dragger,
                                    elemOffset = elem.offset(),
                                    x = e.pageX - elemOffset.left,
                                    y = e.pageY - elemOffset.top;
                                scrollbarDrag(mCSB_draggerDragY, mCSB_draggerDragX, y, x);
                            }
                        }).bind("mouseup." + $this.data("mCustomScrollbarIndex"), function (e) {
                            $this.data({"on_drag": false});
                            mCSB_dragger.removeClass("mCSB_dragger_onDrag");
                        });
                    }
                    $this.data({"bindEvent_scrollbar_drag": true});
                }
                function scrollbarDrag(mCSB_draggerDragY, mCSB_draggerDragX, y, x) {
                    if ($this.data("horizontalScroll")) {
                        $this.mCustomScrollbar("scrollTo", (mCSB_dragger.position().left - (mCSB_draggerDragX)) + x, {moveDragger: true, trigger: "internal"});
                    } else {
                        $this.mCustomScrollbar("scrollTo", (mCSB_dragger.position().top - (mCSB_draggerDragY)) + y, {moveDragger: true, trigger: "internal"});
                    }
                }

                /*content touch-drag*/
                if ($.support.touch && $this.data("contentTouchScroll")) {
                    if (!$this.data("bindEvent_content_touch")) {
                        var touch,
                            elem, elemOffset, y, x, mCSB_containerTouchY, mCSB_containerTouchX;
                        mCSB_container.bind("touchstart", function (e) {
                            e.stopImmediatePropagation();
                            touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                            elem = $(this);
                            elemOffset = elem.offset();
                            x = touch.pageX - elemOffset.left;
                            y = touch.pageY - elemOffset.top;
                            mCSB_containerTouchY = y;
                            mCSB_containerTouchX = x;
                        });
                        mCSB_container.bind("touchmove", function (e) {
                            e.preventDefault();
                            e.stopImmediatePropagation();
                            touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                            elem = $(this).parent();
                            elemOffset = elem.offset();
                            x = touch.pageX - elemOffset.left;
                            y = touch.pageY - elemOffset.top;
                            if ($this.data("horizontalScroll")) {
                                $this.mCustomScrollbar("scrollTo", mCSB_containerTouchX - x, {trigger: "internal"});
                            } else {
                                $this.mCustomScrollbar("scrollTo", mCSB_containerTouchY - y, {trigger: "internal"});
                            }
                        });
                    }
                }
                /*dragger rail click scrolling*/
                if (!$this.data("bindEvent_scrollbar_click")) {
                    mCSB_draggerContainer.bind("click", function (e) {
                        var scrollToPos = (e.pageY - mCSB_draggerContainer.offset().top) * $this.data("scrollAmount"), target = $(e.target);
                        if ($this.data("horizontalScroll")) {
                            scrollToPos = (e.pageX - mCSB_draggerContainer.offset().left) * $this.data("scrollAmount");
                        }
                        if (target.hasClass("mCSB_draggerContainer") || target.hasClass("mCSB_draggerRail")) {
                            $this.mCustomScrollbar("scrollTo", scrollToPos, {trigger: "internal", scrollEasing: "draggerRailEase"});
                        }
                    });
                    $this.data({"bindEvent_scrollbar_click": true});
                }
                /*mousewheel scrolling*/
                if ($this.data("mouseWheel")) {
                    if (!$this.data("bindEvent_mousewheel")) {
                        mCustomScrollBox.bind("mousewheel", function (e, delta) {
                            var scrollTo, mouseWheelPixels = $this.data("mouseWheelPixels"), absPos = Math.abs(mCSB_container.position().top),
                                draggerPos = mCSB_dragger.position().top, limit = mCSB_draggerContainer.height() - mCSB_dragger.height();
                            if ($this.data("normalizeMouseWheelDelta")) {
                                if (delta < 0) {
                                    delta = -1;
                                } else {
                                    delta = 1;
                                }
                            }
                            if (mouseWheelPixels === "auto") {
                                mouseWheelPixels = 100 + Math.round($this.data("scrollAmount") / 2);
                            }
                            if ($this.data("horizontalScroll")) {
                                draggerPos = mCSB_dragger.position().left;
                                limit = mCSB_draggerContainer.width() - mCSB_dragger.width();
                                absPos = Math.abs(mCSB_container.position().left);
                            }
                            if ((delta > 0 && draggerPos !== 0) || (delta < 0 && draggerPos !== limit)) {
                                e.preventDefault();
                                e.stopImmediatePropagation();
                            }
                            scrollTo = absPos - (delta * mouseWheelPixels);
                            $this.mCustomScrollbar("scrollTo", scrollTo, {trigger: "internal"});
                        });
                        $this.data({"bindEvent_mousewheel": true});
                    }
                }
                /*buttons scrolling*/
                if ($this.data("scrollButtons_enable")) {
                    if ($this.data("scrollButtons_scrollType") === "pixels") { /*scroll by pixels*/
                        if ($this.data("horizontalScroll")) {
                            mCSB_buttonRight.add(mCSB_buttonLeft).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", mCSB_buttonRight_stop, mCSB_buttonLeft_stop);
                            $this.data({"bindEvent_buttonsContinuous_x": false});
                            if (!$this.data("bindEvent_buttonsPixels_x")) {
                                /*scroll right*/
                                mCSB_buttonRight.bind("click", function (e) {
                                    e.preventDefault();
                                    PixelsScrollTo(Math.abs(mCSB_container.position().left) + $this.data("scrollButtons_scrollAmount"));
                                });
                                /*scroll left*/
                                mCSB_buttonLeft.bind("click", function (e) {
                                    e.preventDefault();
                                    PixelsScrollTo(Math.abs(mCSB_container.position().left) - $this.data("scrollButtons_scrollAmount"));
                                });
                                $this.data({"bindEvent_buttonsPixels_x": true});
                            }
                        } else {
                            mCSB_buttonDown.add(mCSB_buttonUp).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", mCSB_buttonRight_stop, mCSB_buttonLeft_stop);
                            $this.data({"bindEvent_buttonsContinuous_y": false});
                            if (!$this.data("bindEvent_buttonsPixels_y")) {
                                /*scroll down*/
                                mCSB_buttonDown.bind("click", function (e) {
                                    e.preventDefault();
                                    PixelsScrollTo(Math.abs(mCSB_container.position().top) + $this.data("scrollButtons_scrollAmount"));
                                });
                                /*scroll up*/
                                mCSB_buttonUp.bind("click", function (e) {
                                    e.preventDefault();
                                    PixelsScrollTo(Math.abs(mCSB_container.position().top) - $this.data("scrollButtons_scrollAmount"));
                                });
                                $this.data({"bindEvent_buttonsPixels_y": true});
                            }
                        }
                        function PixelsScrollTo(to) {
                            if (!mCSB_dragger.data("preventAction")) {
                                mCSB_dragger.data("preventAction", true);
                                $this.mCustomScrollbar("scrollTo", to, {trigger: "internal"});
                            }
                        }
                    } else { /*continuous scrolling*/
                        if ($this.data("horizontalScroll")) {
                            mCSB_buttonRight.add(mCSB_buttonLeft).unbind("click");
                            $this.data({"bindEvent_buttonsPixels_x": false});
                            if (!$this.data("bindEvent_buttonsContinuous_x")) {
                                /*scroll right*/
                                mCSB_buttonRight.bind("mousedown touchstart MSPointerDown pointerdown", function (e) {
                                    e.preventDefault();
                                    var scrollButtonsSpeed = ScrollButtonsSpeed();
                                    $this.data({"mCSB_buttonScrollRight": setInterval(function () {
                                        $this.mCustomScrollbar("scrollTo", Math.abs(mCSB_container.position().left) + scrollButtonsSpeed, {trigger: "internal", scrollEasing: "easeOutCirc"});
                                    }, 17)});
                                });
                                var mCSB_buttonRight_stop = function (e) {
                                    e.preventDefault();
                                    clearInterval($this.data("mCSB_buttonScrollRight"));
                                }
                                mCSB_buttonRight.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", mCSB_buttonRight_stop);
                                /*scroll left*/
                                mCSB_buttonLeft.bind("mousedown touchstart MSPointerDown pointerdown", function (e) {
                                    e.preventDefault();
                                    var scrollButtonsSpeed = ScrollButtonsSpeed();
                                    $this.data({"mCSB_buttonScrollLeft": setInterval(function () {
                                        $this.mCustomScrollbar("scrollTo", Math.abs(mCSB_container.position().left) - scrollButtonsSpeed, {trigger: "internal", scrollEasing: "easeOutCirc"});
                                    }, 17)});
                                });
                                var mCSB_buttonLeft_stop = function (e) {
                                    e.preventDefault();
                                    clearInterval($this.data("mCSB_buttonScrollLeft"));
                                }
                                mCSB_buttonLeft.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", mCSB_buttonLeft_stop);
                                $this.data({"bindEvent_buttonsContinuous_x": true});
                            }
                        } else {
                            mCSB_buttonDown.add(mCSB_buttonUp).unbind("click");
                            $this.data({"bindEvent_buttonsPixels_y": false});
                            if (!$this.data("bindEvent_buttonsContinuous_y")) {
                                /*scroll down*/
                                mCSB_buttonDown.bind("mousedown touchstart MSPointerDown pointerdown", function (e) {
                                    e.preventDefault();
                                    var scrollButtonsSpeed = ScrollButtonsSpeed();
                                    $this.data({"mCSB_buttonScrollDown": setInterval(function () {
                                        $this.mCustomScrollbar("scrollTo", Math.abs(mCSB_container.position().top) + scrollButtonsSpeed, {trigger: "internal", scrollEasing: "easeOutCirc"});
                                    }, 17)});
                                });
                                var mCSB_buttonDown_stop = function (e) {
                                    e.preventDefault();
                                    clearInterval($this.data("mCSB_buttonScrollDown"));
                                }
                                mCSB_buttonDown.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", mCSB_buttonDown_stop);
                                /*scroll up*/
                                mCSB_buttonUp.bind("mousedown touchstart MSPointerDown pointerdown", function (e) {
                                    e.preventDefault();
                                    var scrollButtonsSpeed = ScrollButtonsSpeed();
                                    $this.data({"mCSB_buttonScrollUp": setInterval(function () {
                                        $this.mCustomScrollbar("scrollTo", Math.abs(mCSB_container.position().top) - scrollButtonsSpeed, {trigger: "internal", scrollEasing: "easeOutCirc"});
                                    }, 17)});
                                });
                                var mCSB_buttonUp_stop = function (e) {
                                    e.preventDefault();
                                    clearInterval($this.data("mCSB_buttonScrollUp"));
                                }
                                mCSB_buttonUp.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", mCSB_buttonUp_stop);
                                $this.data({"bindEvent_buttonsContinuous_y": true});
                            }
                        }
                        function ScrollButtonsSpeed() {
                            var speed = $this.data("scrollButtons_scrollSpeed");
                            if ($this.data("scrollButtons_scrollSpeed") === "auto") {
                                speed = Math.round(($this.data("scrollInertia") + 100) / 40);
                            }
                            return speed;
                        }
                    }
                }
                /*scrolling on element focus (e.g. via TAB key)*/
                if ($this.data("autoScrollOnFocus")) {
                    if (!$this.data("bindEvent_focusin")) {
                        mCustomScrollBox.bind("focusin", function () {
                            mCustomScrollBox.scrollTop(0).scrollLeft(0);
                            var focusedElem = $(document.activeElement);
                            if (focusedElem.is("input,textarea,select,button,a[tabindex],area,object")) {
                                var mCSB_containerPos = mCSB_container.position().top,
                                    focusedElemPos = focusedElem.position().top,
                                    visibleLimit = mCustomScrollBox.height() - focusedElem.outerHeight();
                                if ($this.data("horizontalScroll")) {
                                    mCSB_containerPos = mCSB_container.position().left;
                                    focusedElemPos = focusedElem.position().left;
                                    visibleLimit = mCustomScrollBox.width() - focusedElem.outerWidth();
                                }
                                if (mCSB_containerPos + focusedElemPos < 0 || mCSB_containerPos + focusedElemPos > visibleLimit) {
                                    $this.mCustomScrollbar("scrollTo", focusedElemPos, {trigger: "internal"});
                                }
                            }
                        });
                        $this.data({"bindEvent_focusin": true});
                    }
                }
                /*auto-hide scrollbar*/
                if ($this.data("autoHideScrollbar") && !$this.data("alwaysShowScrollbar")) {
                    if (!$this.data("bindEvent_autoHideScrollbar")) {
                        mCustomScrollBox.bind("mouseenter",function (e) {
                            mCustomScrollBox.addClass("mCS-mouse-over");
                            functions.showScrollbar.call(mCustomScrollBox.children(".mCSB_scrollTools"));
                        }).bind("mouseleave touchend", function (e) {
                            mCustomScrollBox.removeClass("mCS-mouse-over");
                            if (e.type === "mouseleave") {
                                functions.hideScrollbar.call(mCustomScrollBox.children(".mCSB_scrollTools"));
                            }
                        });
                        $this.data({"bindEvent_autoHideScrollbar": true});
                    }
                }
            },
            scrollTo: function (scrollTo, options) {
                var $this = $(this),
                    defaults = {
                        moveDragger: false,
                        trigger: "external",
                        callbacks: true,
                        scrollInertia: $this.data("scrollInertia"),
                        scrollEasing: $this.data("scrollEasing")
                    },
                    options = $.extend(defaults, options),
                    draggerScrollTo,
                    mCustomScrollBox = $this.children(".mCustomScrollBox"),
                    mCSB_container = mCustomScrollBox.children(".mCSB_container"),
                    mCSB_scrollTools = mCustomScrollBox.children(".mCSB_scrollTools"),
                    mCSB_draggerContainer = mCSB_scrollTools.children(".mCSB_draggerContainer"),
                    mCSB_dragger = mCSB_draggerContainer.children(".mCSB_dragger"),
                    contentSpeed = draggerSpeed = options.scrollInertia,
                    scrollBeginning, scrollBeginningOffset, totalScroll, totalScrollOffset;
                if (!mCSB_container.hasClass("mCS_no_scrollbar")) {
                    $this.data({"mCS_trigger": options.trigger});
                    if ($this.data("mCS_Init")) {
                        options.callbacks = false;
                    }
                    if (scrollTo || scrollTo === 0) {
                        if (typeof(scrollTo) === "number") { /*if integer, scroll by number of pixels*/
                            if (options.moveDragger) { /*scroll dragger*/
                                draggerScrollTo = scrollTo;
                                if ($this.data("horizontalScroll")) {
                                    scrollTo = mCSB_dragger.position().left * $this.data("scrollAmount");
                                } else {
                                    scrollTo = mCSB_dragger.position().top * $this.data("scrollAmount");
                                }
                                draggerSpeed = 0;
                            } else { /*scroll content by default*/
                                draggerScrollTo = scrollTo / $this.data("scrollAmount");
                            }
                        } else if (typeof(scrollTo) === "string") { /*if string, scroll by element position*/
                            var target;
                            if (scrollTo === "top") { /*scroll to top*/
                                target = 0;
                            } else if (scrollTo === "bottom" && !$this.data("horizontalScroll")) { /*scroll to bottom*/
                                target = mCSB_container.outerHeight() - mCustomScrollBox.height();
                            } else if (scrollTo === "left") { /*scroll to left*/
                                target = 0;
                            } else if (scrollTo === "right" && $this.data("horizontalScroll")) { /*scroll to right*/
                                target = mCSB_container.outerWidth() - mCustomScrollBox.width();
                            } else if (scrollTo === "first") { /*scroll to first element position*/
                                target = $this.find(".mCSB_container").find(":first");
                            } else if (scrollTo === "last") { /*scroll to last element position*/
                                target = $this.find(".mCSB_container").find(":last");
                            } else { /*scroll to element position*/
                                target = $this.find(scrollTo);
                            }
                            if (target.length === 1) { /*if such unique element exists, scroll to it*/
                                if ($this.data("horizontalScroll")) {
                                    scrollTo = target.position().left;
                                } else {
                                    scrollTo = target.position().top;
                                }
                                draggerScrollTo = scrollTo / $this.data("scrollAmount");
                            } else {
                                draggerScrollTo = scrollTo = target;
                            }
                        }
                        /*scroll to*/
                        if ($this.data("horizontalScroll")) {
                            if ($this.data("onTotalScrollBack_Offset")) { /*scroll beginning offset*/
                                scrollBeginningOffset = -$this.data("onTotalScrollBack_Offset");
                            }
                            if ($this.data("onTotalScroll_Offset")) { /*total scroll offset*/
                                totalScrollOffset = mCustomScrollBox.width() - mCSB_container.outerWidth() + $this.data("onTotalScroll_Offset");
                            }
                            if (draggerScrollTo < 0) { /*scroll start position*/
                                draggerScrollTo = scrollTo = 0;
                                clearInterval($this.data("mCSB_buttonScrollLeft"));
                                if (!scrollBeginningOffset) {
                                    scrollBeginning = true;
                                }
                            } else if (draggerScrollTo >= mCSB_draggerContainer.width() - mCSB_dragger.width()) { /*scroll end position*/
                                draggerScrollTo = mCSB_draggerContainer.width() - mCSB_dragger.width();
                                scrollTo = mCustomScrollBox.width() - mCSB_container.outerWidth();
                                clearInterval($this.data("mCSB_buttonScrollRight"));
                                if (!totalScrollOffset) {
                                    totalScroll = true;
                                }
                            } else {
                                scrollTo = -scrollTo;
                            }
                            var snapAmount = $this.data("snapAmount");
                            if (snapAmount) {
                                scrollTo = Math.round(scrollTo / snapAmount) * snapAmount - $this.data("snapOffset");
                            }
                            /*scrolling animation*/
                            functions.mTweenAxis.call(this, mCSB_dragger[0], "left", Math.round(draggerScrollTo), draggerSpeed, options.scrollEasing);
                            functions.mTweenAxis.call(this, mCSB_container[0], "left", Math.round(scrollTo), contentSpeed, options.scrollEasing, {
                                onStart: function () {
                                    if (options.callbacks && !$this.data("mCS_tweenRunning")) {
                                        callbacks("onScrollStart");
                                    }
                                    if ($this.data("autoHideScrollbar") && !$this.data("alwaysShowScrollbar")) {
                                        functions.showScrollbar.call(mCSB_scrollTools);
                                    }
                                },
                                onUpdate: function () {
                                    if (options.callbacks) {
                                        callbacks("whileScrolling");
                                    }
                                },
                                onComplete: function () {
                                    if (options.callbacks) {
                                        callbacks("onScroll");
                                        if (scrollBeginning || (scrollBeginningOffset && mCSB_container.position().left >= scrollBeginningOffset)) {
                                            callbacks("onTotalScrollBack");
                                        }
                                        if (totalScroll || (totalScrollOffset && mCSB_container.position().left <= totalScrollOffset)) {
                                            callbacks("onTotalScroll");
                                        }
                                    }
                                    mCSB_dragger.data("preventAction", false);
                                    $this.data("mCS_tweenRunning", false);
                                    if ($this.data("autoHideScrollbar") && !$this.data("alwaysShowScrollbar")) {
                                        if (!mCustomScrollBox.hasClass("mCS-mouse-over")) {
                                            functions.hideScrollbar.call(mCSB_scrollTools);
                                        }
                                    }
                                }
                            });
                        } else {
                            if ($this.data("onTotalScrollBack_Offset")) { /*scroll beginning offset*/
                                scrollBeginningOffset = -$this.data("onTotalScrollBack_Offset");
                            }
                            if ($this.data("onTotalScroll_Offset")) { /*total scroll offset*/
                                totalScrollOffset = mCustomScrollBox.height() - mCSB_container.outerHeight() + $this.data("onTotalScroll_Offset");
                            }
                            if (draggerScrollTo < 0) { /*scroll start position*/
                                draggerScrollTo = scrollTo = 0;
                                clearInterval($this.data("mCSB_buttonScrollUp"));
                                if (!scrollBeginningOffset) {
                                    scrollBeginning = true;
                                }
                            } else if (draggerScrollTo >= mCSB_draggerContainer.height() - mCSB_dragger.height()) { /*scroll end position*/
                                draggerScrollTo = mCSB_draggerContainer.height() - mCSB_dragger.height();
                                scrollTo = mCustomScrollBox.height() - mCSB_container.outerHeight();
                                clearInterval($this.data("mCSB_buttonScrollDown"));
                                if (!totalScrollOffset) {
                                    totalScroll = true;
                                }
                            } else {
                                scrollTo = -scrollTo;
                            }
                            var snapAmount = $this.data("snapAmount");
                            if (snapAmount) {
                                scrollTo = Math.round(scrollTo / snapAmount) * snapAmount - $this.data("snapOffset");
                            }
                            /*scrolling animation*/
                            functions.mTweenAxis.call(this, mCSB_dragger[0], "top", Math.round(draggerScrollTo), draggerSpeed, options.scrollEasing);
                            functions.mTweenAxis.call(this, mCSB_container[0], "top", Math.round(scrollTo), contentSpeed, options.scrollEasing, {
                                onStart: function () {
                                    if (options.callbacks && !$this.data("mCS_tweenRunning")) {
                                        callbacks("onScrollStart");
                                    }
                                    if ($this.data("autoHideScrollbar") && !$this.data("alwaysShowScrollbar")) {
                                        functions.showScrollbar.call(mCSB_scrollTools);
                                    }
                                },
                                onUpdate: function () {
                                    if (options.callbacks) {
                                        callbacks("whileScrolling");
                                    }
                                },
                                onComplete: function () {
                                    if (options.callbacks) {
                                        callbacks("onScroll");
                                        if (scrollBeginning || (scrollBeginningOffset && mCSB_container.position().top >= scrollBeginningOffset)) {
                                            callbacks("onTotalScrollBack");
                                        }
                                        if (totalScroll || (totalScrollOffset && mCSB_container.position().top <= totalScrollOffset)) {
                                            callbacks("onTotalScroll");
                                        }
                                    }
                                    mCSB_dragger.data("preventAction", false);
                                    $this.data("mCS_tweenRunning", false);
                                    if ($this.data("autoHideScrollbar") && !$this.data("alwaysShowScrollbar")) {
                                        if (!mCustomScrollBox.hasClass("mCS-mouse-over")) {
                                            functions.hideScrollbar.call(mCSB_scrollTools);
                                        }
                                    }
                                }
                            });
                        }
                        if ($this.data("mCS_Init")) {
                            $this.data({"mCS_Init": false});
                        }
                    }
                }
                /*callbacks*/
                function callbacks(cb) {
                    if ($this.data("mCustomScrollbarIndex")) {
                        this.mcs = {
                            top: mCSB_container.position().top, left: mCSB_container.position().left,
                            draggerTop: mCSB_dragger.position().top, draggerLeft: mCSB_dragger.position().left,
                            topPct: Math.round((100 * Math.abs(mCSB_container.position().top)) / Math.abs(mCSB_container.outerHeight() - mCustomScrollBox.height())),
                            leftPct: Math.round((100 * Math.abs(mCSB_container.position().left)) / Math.abs(mCSB_container.outerWidth() - mCustomScrollBox.width()))
                        };
                        switch (cb) {
                            /*start scrolling callback*/
                            case "onScrollStart":
                                $this.data("mCS_tweenRunning", true).data("onScrollStart_Callback").call($this, this.mcs);
                                break;
                            case "whileScrolling":
                                $this.data("whileScrolling_Callback").call($this, this.mcs);
                                break;
                            case "onScroll":
                                $this.data("onScroll_Callback").call($this, this.mcs);
                                break;
                            case "onTotalScrollBack":
                                $this.data("onTotalScrollBack_Callback").call($this, this.mcs);
                                break;
                            case "onTotalScroll":
                                $this.data("onTotalScroll_Callback").call($this, this.mcs);
                                break;
                        }
                    }
                }
            },
            stop: function () {
                var $this = $(this),
                    mCSB_container = $this.children().children(".mCSB_container"),
                    mCSB_dragger = $this.children().children().children().children(".mCSB_dragger");
                functions.mTweenAxisStop.call(this, mCSB_container[0]);
                functions.mTweenAxisStop.call(this, mCSB_dragger[0]);
            },
            disable: function (resetScroll) {
                var $this = $(this),
                    mCustomScrollBox = $this.children(".mCustomScrollBox"),
                    mCSB_container = mCustomScrollBox.children(".mCSB_container"),
                    mCSB_scrollTools = mCustomScrollBox.children(".mCSB_scrollTools"),
                    mCSB_dragger = mCSB_scrollTools.children().children(".mCSB_dragger");
                mCustomScrollBox.unbind("mousewheel focusin mouseenter mouseleave touchend");
                mCSB_container.unbind("touchstart touchmove")
                if (resetScroll) {
                    if ($this.data("horizontalScroll")) {
                        mCSB_dragger.add(mCSB_container).css("left", 0);
                    } else {
                        mCSB_dragger.add(mCSB_container).css("top", 0);
                    }
                }
                mCSB_scrollTools.css("display", "none");
                mCSB_container.addClass("mCS_no_scrollbar");
                $this.data({"bindEvent_mousewheel": false, "bindEvent_focusin": false, "bindEvent_content_touch": false, "bindEvent_autoHideScrollbar": false}).addClass("mCS_disabled");
            },
            destroy: function () {
                var $this = $(this);
                $this.removeClass("mCustomScrollbar _mCS_" + $this.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();
                $(document).unbind("mousemove." + $this.data("mCustomScrollbarIndex") + " mouseup." + $this.data("mCustomScrollbarIndex") + " MSPointerMove." + $this.data("mCustomScrollbarIndex") + " MSPointerUp." + $this.data("mCustomScrollbarIndex"));
                $(window).unbind("resize." + $this.data("mCustomScrollbarIndex"));
            }
        },
        functions = {
            /*hide/show scrollbar*/
            showScrollbar: function () {
                this.stop().animate({opacity: 1}, "fast");
            },
            hideScrollbar: function () {
                this.stop().animate({opacity: 0}, "fast");
            },
            /*js animation tween*/
            mTweenAxis: function (el, prop, to, duration, easing, callbacks) {
                var callbacks = callbacks || {},
                    onStart = callbacks.onStart || function () {
                    }, onUpdate = callbacks.onUpdate || function () {
                    }, onComplete = callbacks.onComplete || function () {
                    };
                var startTime = _getTime(), _delay, progress = 0, from = el.offsetTop, elStyle = el.style;
                if (prop === "left") {
                    from = el.offsetLeft;
                }
                var diff = to - from;
                _cancelTween();
                _startTween();
                function _getTime() {
                    if (window.performance && window.performance.now) {
                        return window.performance.now();
                    } else {
                        if (window.performance && window.performance.webkitNow) {
                            return window.performance.webkitNow();
                        } else {
                            if (Date.now) {
                                return Date.now();
                            } else {
                                return new Date().getTime();
                            }
                        }
                    }
                }

                function _step() {
                    if (!progress) {
                        onStart.call();
                    }
                    progress = _getTime() - startTime;
                    _tween();
                    if (progress >= el._time) {
                        el._time = (progress > el._time) ? progress + _delay - (progress - el._time) : progress + _delay - 1;
                        if (el._time < progress + 1) {
                            el._time = progress + 1;
                        }
                    }
                    if (el._time < duration) {
                        el._id = _request(_step);
                    } else {
                        onComplete.call();
                    }
                }

                function _tween() {
                    if (duration > 0) {
                        el.currVal = _ease(el._time, from, diff, duration, easing);
                        elStyle[prop] = Math.round(el.currVal) + "px";
                    } else {
                        elStyle[prop] = to + "px";
                    }
                    onUpdate.call();
                }

                function _startTween() {
                    _delay = 1000 / 60;
                    el._time = progress + _delay;
                    _request = (!window.requestAnimationFrame) ? function (f) {
                        _tween();
                        return setTimeout(f, 0.01);
                    } : window.requestAnimationFrame;
                    el._id = _request(_step);
                }

                function _cancelTween() {
                    if (el._id == null) {
                        return;
                    }
                    if (!window.requestAnimationFrame) {
                        clearTimeout(el._id);
                    } else {
                        window.cancelAnimationFrame(el._id);
                    }
                    el._id = null;
                }

                function _ease(t, b, c, d, type) {
                    switch (type) {
                        case "linear":
                            return c * t / d + b;
                            break;
                        case "easeOutQuad":
                            t /= d;
                            return -c * t * (t - 2) + b;
                            break;
                        case "easeInOutQuad":
                            t /= d / 2;
                            if (t < 1) return c / 2 * t * t + b;
                            t--;
                            return -c / 2 * (t * (t - 2) - 1) + b;
                            break;
                        case "easeOutCubic":
                            t /= d;
                            t--;
                            return c * (t * t * t + 1) + b;
                            break;
                        case "easeOutQuart":
                            t /= d;
                            t--;
                            return -c * (t * t * t * t - 1) + b;
                            break;
                        case "easeOutQuint":
                            t /= d;
                            t--;
                            return c * (t * t * t * t * t + 1) + b;
                            break;
                        case "easeOutCirc":
                            t /= d;
                            t--;
                            return c * Math.sqrt(1 - t * t) + b;
                            break;
                        case "easeOutSine":
                            return c * Math.sin(t / d * (Math.PI / 2)) + b;
                            break;
                        case "easeOutExpo":
                            return c * ( -Math.pow(2, -10 * t / d) + 1 ) + b;
                            break;
                        case "mcsEaseOut":
                            var ts = (t /= d) * t, tc = ts * t;
                            return b + c * (0.499999999999997 * tc * ts + -2.5 * ts * ts + 5.5 * tc + -6.5 * ts + 4 * t);
                            break;
                        case "draggerRailEase":
                            t /= d / 2;
                            if (t < 1) return c / 2 * t * t * t + b;
                            t -= 2;
                            return c / 2 * (t * t * t + 2) + b;
                            break;
                    }
                }
            },
            /*stop js animation tweens*/
            mTweenAxisStop: function (el) {
                if (el._id == null) {
                    return;
                }
                if (!window.requestAnimationFrame) {
                    clearTimeout(el._id);
                } else {
                    window.cancelAnimationFrame(el._id);
                }
                el._id = null;
            },
            /*detect requestAnimationFrame and polyfill*/
            rafPolyfill: function () {
                var pfx = ["ms", "moz", "webkit", "o"], i = pfx.length;
                while (--i > -1 && !window.requestAnimationFrame) {
                    window.requestAnimationFrame = window[pfx[i] + "RequestAnimationFrame"];
                    window.cancelAnimationFrame = window[pfx[i] + "CancelAnimationFrame"] || window[pfx[i] + "CancelRequestAnimationFrame"];
                }
            }
        }
    /*detect features*/
    functions.rafPolyfill.call();
    /*requestAnimationFrame*/
    $.support.touch = !!('ontouchstart' in window);
    /*touch*/
    $.support.pointer = window.navigator.pointerEnabled;
    /*pointer support*/
    $.support.msPointer = window.navigator.msPointerEnabled;
    /*MSPointer support*/
    /*plugin dependencies*/
    var _dlp = ("https:" == document.location.protocol) ? "https:" : "http:";
    $.event.special.mousewheel || document.write('<script src="' + _dlp + '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');
    /*plugin fn*/
    $.fn.mCustomScrollbar = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist");
        }
    };
})(jQuery);

/* Placeholders.js v2.1.0 */
!function (a) {
    "use strict";
    function b(a, b, c) {
        return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : void 0
    }

    function c(a, b) {
        var c, d;
        for (c = 0, d = a.length; d > c; c++)if (a[c] === b)return!0;
        return!1
    }

    function d(a, b) {
        var c;
        a.createTextRange ? (c = a.createTextRange(), c.move("character", b), c.select()) : a.selectionStart && (a.focus(), a.setSelectionRange(b, b))
    }

    function e(a, b) {
        try {
            return a.type = b, !0
        } catch (c) {
            return!1
        }
    }

    a.Placeholders = {Utils: {addEventListener: b, inArray: c, moveCaret: d, changeType: e}}
}(this), function (a) {
    "use strict";
    function b() {
    }

    function c(a) {
        var b;
        return a.value === a.getAttribute(G) && "true" === a.getAttribute(H) ? (a.setAttribute(H, "false"), a.value = "", a.className = a.className.replace(F, ""), b = a.getAttribute(I), b && (a.type = b), !0) : !1
    }

    function d(a) {
        var b, c = a.getAttribute(G);
        return"" === a.value && c ? (a.setAttribute(H, "true"), a.value = c, a.className += " " + E, b = a.getAttribute(I), b ? a.type = "text" : "password" === a.type && R.changeType(a, "text") && a.setAttribute(I, "password"), !0) : !1
    }

    function e(a, b) {
        var c, d, e, f, g;
        if (a && a.getAttribute(G))b(a); else for (c = a ? a.getElementsByTagName("input") : o, d = a ? a.getElementsByTagName("textarea") : p, g = 0, f = c.length + d.length; f > g; g++)e = g < c.length ? c[g] : d[g - c.length], b(e)
    }

    function f(a) {
        e(a, c)
    }

    function g(a) {
        e(a, d)
    }

    function h(a) {
        return function () {
            q && a.value === a.getAttribute(G) && "true" === a.getAttribute(H) ? R.moveCaret(a, 0) : c(a)
        }
    }

    function i(a) {
        return function () {
            d(a)
        }
    }

    function j(a) {
        return function (b) {
            return s = a.value, "true" === a.getAttribute(H) && s === a.getAttribute(G) && R.inArray(C, b.keyCode) ? (b.preventDefault && b.preventDefault(), !1) : void 0
        }
    }

    function k(a) {
        return function () {
            var b;
            "true" === a.getAttribute(H) && a.value !== s && (a.className = a.className.replace(F, ""), a.value = a.value.replace(a.getAttribute(G), ""), a.setAttribute(H, !1), b = a.getAttribute(I), b && (a.type = b)), "" === a.value && (a.blur(), R.moveCaret(a, 0))
        }
    }

    function l(a) {
        return function () {
            a === document.activeElement && a.value === a.getAttribute(G) && "true" === a.getAttribute(H) && R.moveCaret(a, 0)
        }
    }

    function m(a) {
        return function () {
            f(a)
        }
    }

    function n(a) {
        a.form && (x = a.form, x.getAttribute(J) || (R.addEventListener(x, "submit", m(x)), x.setAttribute(J, "true"))), R.addEventListener(a, "focus", h(a)), R.addEventListener(a, "blur", i(a)), q && (R.addEventListener(a, "keydown", j(a)), R.addEventListener(a, "keyup", k(a)), R.addEventListener(a, "click", l(a))), a.setAttribute(K, "true"), a.setAttribute(G, v), d(a)
    }

    var o, p, q, r, s, t, u, v, w, x, y, z, A, B = ["text", "search", "url", "tel", "email", "password", "number", "textarea"], C = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46], D = "#ccc", E = "placeholdersjs", F = new RegExp("(?:^|\\s)" + E + "(?!\\S)"), G = "data-placeholder-value", H = "data-placeholder-active", I = "data-placeholder-type", J = "data-placeholder-submit", K = "data-placeholder-bound", L = "data-placeholder-focus", M = "data-placeholder-live", N = document.createElement("input"), O = document.getElementsByTagName("head")[0], P = document.documentElement, Q = a.Placeholders, R = Q.Utils;
    if (Q.nativeSupport = void 0 !== N.placeholder, !Q.nativeSupport) {
        for (o = document.getElementsByTagName("input"), p = document.getElementsByTagName("textarea"), q = "false" === P.getAttribute(L), r = "false" !== P.getAttribute(M), t = document.createElement("style"), t.type = "text/css", u = document.createTextNode("." + E + " { color:" + D + "; }"), t.styleSheet ? t.styleSheet.cssText = u.nodeValue : t.appendChild(u), O.insertBefore(t, O.firstChild), A = 0, z = o.length + p.length; z > A; A++)y = A < o.length ? o[A] : p[A - o.length], v = y.attributes.placeholder, v && (v = v.nodeValue, v && R.inArray(B, y.type) && n(y));
        w = setInterval(function () {
            for (A = 0, z = o.length + p.length; z > A; A++)y = A < o.length ? o[A] : p[A - o.length], v = y.attributes.placeholder, v && (v = v.nodeValue, v && R.inArray(B, y.type) && (y.getAttribute(K) || n(y), (v !== y.getAttribute(G) || "password" === y.type && !y.getAttribute(I)) && ("password" === y.type && !y.getAttribute(I) && R.changeType(y, "text") && y.setAttribute(I, "password"), y.value === y.getAttribute(G) && (y.value = v), y.setAttribute(G, v))));
            r || clearInterval(w)
        }, 100)
    }
    Q.disable = Q.nativeSupport ? b : f, Q.enable = Q.nativeSupport ? b : g
}(this);

//----------------------------------------------
//Master Layout
//----------------------------------------------

// Open Dropdown when viewport is small
$('.navbar-toggle').click(function () {
    setTimeout(function () {
        $('.dropdown').addClass('open');
    }, 1)
});

//Animate search widget
var easing_method = 'easeInOutBack';
var animation_duration = "slow";
var animating = false;
var isSupportLocalStorage = Modernizr.localstorage;
function changeSearchBoxToggle() {
    if (isSupportLocalStorage) {
        // Using storage
        if (localStorage.searchBoxToggle == 'maximize')
            localStorage.searchBoxToggle = 'minimize';
        else
            localStorage.searchBoxToggle = 'maximize';
    } else {
        // Using cookie
        var searchBoxToggle = getCookie('searchBoxToggle');
        if (searchBoxToggle == 'maximize')
            setCookie('searchBoxToggle', 'minimize', 30);
        else
            setCookie('searchBoxToggle', 'maximize', 30);
    }
    return 0;
}
function changeShowTooltipStatus() {
    if (isSupportLocalStorage) {
        // Using storage
        localStorage.showTooltipGuide = 'true';
    } else {
        // Using cookie
        setCookie('showTooltipGuide', 'true', 30);
    }
    return 0;
}
function changeShowTooltipSearchStatus() {
    if (isSupportLocalStorage) {
        // Using storage
        localStorage.showTooltipSearchBox = 'true';
    } else {
        // Using cookie
        setCookie('showTooltipSearchBox', 'true', 30);
    }
    return 0;
}
$('.search-toggle, .sm-search-toggle').click(function () {
    var search_wid_height = $('#search-widget').innerHeight();
    $('.search-toggle').popover('destroy');
    changeSearchBoxToggle();
    if (!$('#search-widget').hasClass('in') && animating == false) {
        // If this is collapsed
        animating = true;
        $('.search-toggle').addClass('active');
        $('#search-widget-wrapper').animate({
            'height': search_wid_height
        }, {'easing': easing_method,
            'duration': animation_duration})
            .promise().done(function () {
                $('#search-widget').toggle({
                    'effect': "drop",
                    'easing': easing_method,
                    'direction': 'up',
                    'duration': animation_duration
                });

            }).promise().done(function () {
                $('#search-widget-wrapper').removeAttr('style');
                $('#search-widget').addClass('in');
                setTimeout(function () {
                    animating = false;
                }, animation_duration + 300)
            });
    } else if ($('#search-widget').hasClass('in') && animating == false) {
        //If this is expanded
        animating = true;
        $('#search-widget-wrapper').css({'height': search_wid_height});
        $('.search-toggle').removeClass('active');
        $('#search-widget').toggle({
            'effect': "drop",
            'direction': "up",
            'easing': easing_method,
            'duration': animation_duration
        });
        $('#search-widget-wrapper').animate({
            'height': 0
        }, {'easing': easing_method,
            'duration': animation_duration}).promise().done(function () {
            $('#search-widget').removeClass('in');
            setTimeout(function () {
                animating = false;
            }, animation_duration + 300)
        })
    }

});

// Click on close circle
$('.close-square').click(function () {
    $('.search-toggle').trigger('click');
});

/* Chosen Multiple choices */
function applyChosen2(chosenObj, message) {
    $(chosenObj).chosen({width: "100%", no_results_text: message, max_selected_options: 4})
        .change(function (evt, params) {
            var count, /* count total selected items */
                labelObj = $(chosenObj).parent();
            if (params.selected == "-1")
                count = 1;
            else if ($(chosenObj).val() != null)
                count = $(chosenObj).val().length;
            else
                count = 0;

            if (count > 0 && params.selected != "-1") {
                $(chosenObj).find('option[value="-1"]').removeAttr('selected', 'selected');
                $(chosenObj).find('option[value="-1"]').attr('disabled', 'disabled');
            } else { /* select all */
                $(chosenObj).find('option').removeAttr('selected');
                $(chosenObj).find('option[value="-1"]').attr('selected', 'selected');
            }

            if (count == 3) {
                $(labelObj).find('.search-field').hide();
                $(chosenObj).find('option').each(function () {
                    if (!$(this).is(':selected'))
                        $(this).attr('disabled', 'disabled');
                });

                $(chosenObj).find('option[value="-1"]').removeAttr('disabled');
            }
            else {
                $(labelObj).find('.search-field').show();
                $(chosenObj).find('option').removeAttr('disabled');
            }

            if (params.selected == "-1" || count == 0)
                $(chosenObj).find('option[value="-1"]').attr('disabled', 'disabled');
            $(chosenObj).trigger('chosen:updated');
            if (count > 0 && params.selected != "-1") {
                selectedItems($(labelObj).find('ul.chosen-choices li.search-choice'), 250);
            }
        });

    if ($(chosenObj).val() == null) {
        $(chosenObj).find('option[value="-1"]').attr('selected', 'selected');
        $(chosenObj).find('option[value="-1"]').attr('disabled', 'disabled');
        $(chosenObj).trigger('chosen:updated');
    } else {
        var count = $(chosenObj).val().length,
            labelObj = $(chosenObj).parent();

        if (count > 0 && $(chosenObj).val() != "-1") {
            $(chosenObj).find('option[value="-1"]').removeAttr('selected', 'selected');
            $(chosenObj).find('option[value="-1"]').attr('disabled', 'disabled');
        } else { /* select all */
            $(chosenObj).find('option').removeAttr('selected');
            $(chosenObj).find('option[value="-1"]').attr('selected', 'selected');
        }

        if (count == 3) {
            $(labelObj).find('.search-field').hide();
            $(chosenObj).find('option').each(function () {
                if (!$(this).is(':selected'))
                    $(this).attr('disabled', 'disabled');
            });

            $(chosenObj).find('option[value="-1"]').removeAttr('disabled');
        } else {
            $(labelObj).find('.search-field').show();
            $(chosenObj).find('option').removeAttr('disabled');
        }
        $(chosenObj).trigger('chosen:updated');
        setTimeout(function(){
            selectedItems($(labelObj).find('ul.chosen-choices li.search-choice'), 250);
        },400);
    }
}
function selectedItems(elementId, maxWidth) {
    var numberOfItems = $(elementId).length;
    var widthTotal = 0;
    $(elementId).each(function () {
        widthTotal += $(this).width();
    });
    $(elementId).each(function () {
        $(this).removeClass().addClass("search-choice");
        if ((numberOfItems == 2 && widthTotal < maxWidth)) {
            $(this).removeClass().addClass("search-choice");
            $(this).addClass('multi-1');
        } else {
            $(this).addClass('multi-' + numberOfItems);
        }
    });

}
applyChosen2($('#cateListMainSearch'), 'no result');
applyChosen2($('#locationMainSearch'), 'no result');
applyChosen2($('#jobLevelMainSearch'), 'no result');
$(document).ready(function(){
    if($('#cateListMainSearch_chosen').length ==0){
        $('.bg-blue').addClass('mobile');
        $('#cateListMainSearch').chosen('destroy');
        $('#locationMainSearch').chosen('destroy');
        $('#cateListMainSearch option[value="-1"]' ).removeAttr('disabled');
        $('#locationMainSearch option[value="-1"]' ).removeAttr('disabled');
    }
});

//Scroll Top
$("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});