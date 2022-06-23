/*!
 * ApexCharts v3.23.1
 * (c) 2018-2020 Juned Chhipa
 * Released under the MIT License.
 */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).ApexCharts = e() }(this, (function () {
	"use strict"; function t(e) { return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(e) } function e(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } function i(t, e) { for (var i = 0; i < e.length; i++) { var a = e[i]; a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a) } } function a(t, e, a) { return e && i(t.prototype, e), a && i(t, a), t } function s(t, e, i) { return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t } function r(t, e) { var i = Object.keys(t); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(t); e && (a = a.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), i.push.apply(i, a) } return i } function n(t) { for (var e = 1; e < arguments.length; e++) { var i = null != arguments[e] ? arguments[e] : {}; e % 2 ? r(Object(i), !0).forEach((function (e) { s(t, e, i[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e)) })) } return t } function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && h(t, e) } function l(t) { return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function h(t, e) { return (h = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } function c(t, e) { return !e || "object" != typeof e && "function" != typeof e ? function (t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e } function d(t) { var e = function () { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0 } catch (t) { return !1 } }(); return function () { var i, a = l(t); if (e) { var s = l(this).constructor; i = Reflect.construct(a, arguments, s) } else i = a.apply(this, arguments); return c(this, i) } } function g(t) { return function (t) { if (Array.isArray(t)) return u(t) }(t) || function (t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function (t, e) { if (!t) return; if ("string" == typeof t) return u(t, e); var i = Object.prototype.toString.call(t).slice(8, -1); "Object" === i && t.constructor && (i = t.constructor.name); if ("Map" === i || "Set" === i) return Array.from(t); if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return u(t, e) }(t) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() } function u(t, e) { (null == e || e > t.length) && (e = t.length); for (var i = 0, a = new Array(e); i < e; i++)a[i] = t[i]; return a } var f = function () { function i() { e(this, i) } return a(i, [{ key: "shadeRGBColor", value: function (t, e) { var i = e.split(","), a = t < 0 ? 0 : 255, s = t < 0 ? -1 * t : t, r = parseInt(i[0].slice(4), 10), n = parseInt(i[1], 10), o = parseInt(i[2], 10); return "rgb(" + (Math.round((a - r) * s) + r) + "," + (Math.round((a - n) * s) + n) + "," + (Math.round((a - o) * s) + o) + ")" } }, { key: "shadeHexColor", value: function (t, e) { var i = parseInt(e.slice(1), 16), a = t < 0 ? 0 : 255, s = t < 0 ? -1 * t : t, r = i >> 16, n = i >> 8 & 255, o = 255 & i; return "#" + (16777216 + 65536 * (Math.round((a - r) * s) + r) + 256 * (Math.round((a - n) * s) + n) + (Math.round((a - o) * s) + o)).toString(16).slice(1) } }, { key: "shadeColor", value: function (t, e) { return i.isColorHex(e) ? this.shadeHexColor(t, e) : this.shadeRGBColor(t, e) } }], [{ key: "bind", value: function (t, e) { return function () { return t.apply(e, arguments) } } }, { key: "isObject", value: function (e) { return e && "object" === t(e) && !Array.isArray(e) && null != e } }, { key: "listToArray", value: function (t) { var e, i = []; for (e = 0; e < t.length; e++)i[e] = t[e]; return i } }, { key: "extend", value: function (t, e) { var i = this; "function" != typeof Object.assign && (Object.assign = function (t) { if (null == t) throw new TypeError("Cannot convert undefined or null to object"); for (var e = Object(t), i = 1; i < arguments.length; i++) { var a = arguments[i]; if (null != a) for (var s in a) a.hasOwnProperty(s) && (e[s] = a[s]) } return e }); var a = Object.assign({}, t); return this.isObject(t) && this.isObject(e) && Object.keys(e).forEach((function (r) { i.isObject(e[r]) && r in t ? a[r] = i.extend(t[r], e[r]) : Object.assign(a, s({}, r, e[r])) })), a } }, { key: "extendArray", value: function (t, e) { var a = []; return t.map((function (t) { a.push(i.extend(e, t)) })), t = a } }, { key: "monthMod", value: function (t) { return t % 12 } }, { key: "clone", value: function (e) { if ("[object Array]" === Object.prototype.toString.call(e)) { for (var i = [], a = 0; a < e.length; a++)i[a] = this.clone(e[a]); return i } if ("[object Null]" === Object.prototype.toString.call(e)) return null; if ("[object Date]" === Object.prototype.toString.call(e)) return e; if ("object" === t(e)) { var s = {}; for (var r in e) e.hasOwnProperty(r) && (s[r] = this.clone(e[r])); return s } return e } }, { key: "log10", value: function (t) { return Math.log(t) / Math.LN10 } }, { key: "roundToBase10", value: function (t) { return Math.pow(10, Math.floor(Math.log10(t))) } }, { key: "roundToBase", value: function (t, e) { return Math.pow(e, Math.floor(Math.log(t) / Math.log(e))) } }, { key: "parseNumber", value: function (t) { return null === t ? t : parseFloat(t) } }, { key: "randomId", value: function () { return (Math.random() + 1).toString(36).substring(4) } }, { key: "noExponents", value: function (t) { var e = String(t).split(/[eE]/); if (1 === e.length) return e[0]; var i = "", a = t < 0 ? "-" : "", s = e[0].replace(".", ""), r = Number(e[1]) + 1; if (r < 0) { for (i = a + "0."; r++;)i += "0"; return i + s.replace(/^-/, "") } for (r -= s.length; r--;)i += "0"; return s + i } }, { key: "getDimensions", value: function (t) { var e = getComputedStyle(t, null), i = t.clientHeight, a = t.clientWidth; return i -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), [a -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), i] } }, { key: "getBoundingClientRect", value: function (t) { var e = t.getBoundingClientRect(); return { top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: t.clientWidth, height: t.clientHeight, x: e.left, y: e.top } } }, { key: "getLargestStringFromArr", value: function (t) { return t.reduce((function (t, e) { return Array.isArray(e) && (e = e.reduce((function (t, e) { return t.length > e.length ? t : e }))), t.length > e.length ? t : e }), 0) } }, { key: "hexToRgba", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#999999", e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .6; "#" !== t.substring(0, 1) && (t = "#999999"); var i = t.replace("#", ""); i = i.match(new RegExp("(.{" + i.length / 3 + "})", "g")); for (var a = 0; a < i.length; a++)i[a] = parseInt(1 === i[a].length ? i[a] + i[a] : i[a], 16); return void 0 !== e && i.push(e), "rgba(" + i.join(",") + ")" } }, { key: "getOpacityFromRGBA", value: function (t) { return parseFloat(t.replace(/^.*,(.+)\)/, "$1")) } }, { key: "rgb2hex", value: function (t) { return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : "" } }, { key: "isColorHex", value: function (t) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t) } }, { key: "polarToCartesian", value: function (t, e, i, a) { var s = (a - 90) * Math.PI / 180; return { x: t + i * Math.cos(s), y: e + i * Math.sin(s) } } }, { key: "escapeString", value: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x", i = t.toString().slice(); return i = i.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, e) } }, { key: "negToZero", value: function (t) { return t < 0 ? 0 : t } }, { key: "moveIndexInArray", value: function (t, e, i) { if (i >= t.length) for (var a = i - t.length + 1; a--;)t.push(void 0); return t.splice(i, 0, t.splice(e, 1)[0]), t } }, { key: "extractNumber", value: function (t) { return parseFloat(t.replace(/[^\d.]*/g, "")) } }, { key: "findAncestor", value: function (t, e) { for (; (t = t.parentElement) && !t.classList.contains(e);); return t } }, { key: "setELstyles", value: function (t, e) { for (var i in e) e.hasOwnProperty(i) && (t.style.key = e[i]) } }, { key: "isNumber", value: function (t) { return !isNaN(t) && parseFloat(Number(t)) === t && !isNaN(parseInt(t, 10)) } }, { key: "isFloat", value: function (t) { return Number(t) === t && t % 1 != 0 } }, { key: "isSafari", value: function () { return /^((?!chrome|android).)*safari/i.test(navigator.userAgent) } }, { key: "isFirefox", value: function () { return navigator.userAgent.toLowerCase().indexOf("firefox") > -1 } }, { key: "isIE11", value: function () { if (-1 !== window.navigator.userAgent.indexOf("MSIE") || window.navigator.appVersion.indexOf("Trident/") > -1) return !0 } }, { key: "isIE", value: function () { var t = window.navigator.userAgent, e = t.indexOf("MSIE "); if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10); if (t.indexOf("Trident/") > 0) { var i = t.indexOf("rv:"); return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10) } var a = t.indexOf("Edge/"); return a > 0 && parseInt(t.substring(a + 5, t.indexOf(".", a)), 10) } }]), i }(), p = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "getDefaultFilter", value: function (t, e) { var i = this.w; t.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), "none" !== i.config.states.normal.filter ? this.applyFilter(t, e, i.config.states.normal.filter.type, i.config.states.normal.filter.value) : i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e) } }, { key: "addNormalFilter", value: function (t, e) { var i = this.w; i.config.chart.dropShadow.enabled && !t.node.classList.contains("apexcharts-marker") && this.dropShadow(t, i.config.chart.dropShadow, e) } }, { key: "addLightenFilter", value: function (t, e, i) { var a = this, s = this.w, r = i.intensity; t.unfilter(!0); new window.SVG.Filter; t.filter((function (t) { var i = s.config.chart.dropShadow; (i.enabled ? a.addShadow(t, e, i) : t).componentTransfer({ rgb: { type: "linear", slope: 1.5, intercept: r } }) })), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node) } }, { key: "addDarkenFilter", value: function (t, e, i) { var a = this, s = this.w, r = i.intensity; t.unfilter(!0); new window.SVG.Filter; t.filter((function (t) { var i = s.config.chart.dropShadow; (i.enabled ? a.addShadow(t, e, i) : t).componentTransfer({ rgb: { type: "linear", slope: r } }) })), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node) } }, { key: "applyFilter", value: function (t, e, i) { var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5; switch (i) { case "none": this.addNormalFilter(t, e); break; case "lighten": this.addLightenFilter(t, e, { intensity: a }); break; case "darken": this.addDarkenFilter(t, e, { intensity: a }) } } }, { key: "addShadow", value: function (t, e, i) { var a = i.blur, s = i.top, r = i.left, n = i.color, o = i.opacity, l = t.flood(Array.isArray(n) ? n[e] : n, o).composite(t.sourceAlpha, "in").offset(r, s).gaussianBlur(a).merge(t.source); return t.blend(t.source, l) } }, { key: "dropShadow", value: function (t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = e.top, s = e.left, r = e.blur, n = e.color, o = e.opacity, l = e.noUserSpaceOnUse, h = this.w; return t.unfilter(!0), f.isIE() && "radialBar" === h.config.chart.type || (n = Array.isArray(n) ? n[i] : n, t.filter((function (t) { var e = null; e = f.isSafari() || f.isFirefox() || f.isIE() ? t.flood(n, o).composite(t.sourceAlpha, "in").offset(s, a).gaussianBlur(r) : t.flood(n, o).composite(t.sourceAlpha, "in").offset(s, a).gaussianBlur(r).merge(t.source), t.blend(t.source, e) })), l || t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)), t } }, { key: "setSelectionFilter", value: function (t, e, i) { var a = this.w; if (void 0 !== a.globals.selectedDataPoints[e] && a.globals.selectedDataPoints[e].indexOf(i) > -1) { t.node.setAttribute("selected", !0); var s = a.config.states.active.filter; "none" !== s && this.applyFilter(t, e, s.type, s.value) } } }, { key: "_scaleFilterSize", value: function (t) { !function (e) { for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i]) }({ width: "200%", height: "200%", x: "-50%", y: "-50%" }) } }]), t }(), x = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w, this.setEasingFunctions() } return a(t, [{ key: "setEasingFunctions", value: function () { var t; if (!this.w.globals.easing) { switch (this.w.config.chart.animations.easing) { case "linear": t = "-"; break; case "easein": t = "<"; break; case "easeout": t = ">"; break; case "easeinout": t = "<>"; break; case "swing": t = function (t) { var e = 1.70158; return (t -= 1) * t * ((e + 1) * t + e) + 1 }; break; case "bounce": t = function (t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }; break; case "elastic": t = function (t) { return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1 }; break; default: t = "<>" }this.w.globals.easing = t } } }, { key: "animateLine", value: function (t, e, i, a) { t.attr(e).animate(a).attr(i) } }, { key: "animateCircleRadius", value: function (t, e, i, a, s, r) { e || (e = 0), t.attr({ r: e }).animate(a, s).attr({ r: i }).afterAll((function () { r() })) } }, { key: "animateCircle", value: function (t, e, i, a, s) { t.attr({ r: e.r, cx: e.cx, cy: e.cy }).animate(a, s).attr({ r: i.r, cx: i.cx, cy: i.cy }) } }, { key: "animateRect", value: function (t, e, i, a, s) { t.attr(e).animate(a).attr(i).afterAll((function () { return s() })) } }, { key: "animatePathsGradually", value: function (t) { var e = t.el, i = t.realIndex, a = t.j, s = t.fill, r = t.pathFrom, n = t.pathTo, o = t.speed, l = t.delay, h = this.w, c = 0; h.config.chart.animations.animateGradually.enabled && (c = h.config.chart.animations.animateGradually.delay), h.config.chart.animations.dynamicAnimation.enabled && h.globals.dataChanged && "bar" !== h.config.chart.type && (c = 0), this.morphSVG(e, i, a, "line" !== h.config.chart.type || h.globals.comboCharts ? s : "stroke", r, n, o, l * c) } }, { key: "showDelayedElements", value: function () { this.w.globals.delayedElements.forEach((function (t) { t.el.classList.remove("apexcharts-element-hidden") })) } }, { key: "animationCompleted", value: function (t) { var e = this.w; e.globals.animationEnded || (e.globals.animationEnded = !0, this.showDelayedElements(), "function" == typeof e.config.chart.events.animationEnd && e.config.chart.events.animationEnd(this.ctx, { el: t, w: e })) } }, { key: "morphSVG", value: function (t, e, i, a, s, r, n, o) { var l = this, h = this.w; s || (s = t.attr("pathFrom")), r || (r = t.attr("pathTo")); var c = function (t) { return "radar" === h.config.chart.type && (n = 1), "M 0 ".concat(h.globals.gridHeight) }; (!s || s.indexOf("undefined") > -1 || s.indexOf("NaN") > -1) && (s = c()), (!r || r.indexOf("undefined") > -1 || r.indexOf("NaN") > -1) && (r = c()), h.globals.shouldAnimate || (n = 1), t.plot(s).animate(1, h.globals.easing, o).plot(s).animate(n, h.globals.easing, o).plot(r).afterAll((function () { f.isNumber(i) ? i === h.globals.series[h.globals.maxValsInArrayIndex].length - 2 && h.globals.shouldAnimate && l.animationCompleted(t) : "none" !== a && h.globals.shouldAnimate && (!h.globals.comboCharts && e === h.globals.series.length - 1 || h.globals.comboCharts) && l.animationCompleted(t), l.showDelayedElements() })) } }]), t }(), b = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "drawLine", value: function (t, e, i, a) { var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8", r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, n = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, o = this.w, l = o.globals.dom.Paper.line().attr({ x1: t, y1: e, x2: i, y2: a, stroke: s, "stroke-dasharray": r, "stroke-width": n }); return l } }, { key: "drawRect", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "#fefefe", n = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1, o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null, h = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0, c = this.w, d = c.globals.dom.Paper.rect(); return d.attr({ x: t, y: e, width: i > 0 ? i : 0, height: a > 0 ? a : 0, rx: s, ry: s, opacity: n, "stroke-width": null !== o ? o : 0, stroke: null !== l ? l : "none", "stroke-dasharray": h }), d.node.setAttribute("fill", r), d } }, { key: "drawPolygon", value: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#e1e1e1", i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none", s = this.w, r = s.globals.dom.Paper.polygon(t).attr({ fill: a, stroke: e, "stroke-width": i }); return r } }, { key: "drawCircle", value: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = this.w, a = i.globals.dom.Paper.circle(2 * t); return null !== e && a.attr(e), a } }, { key: "drawPath", value: function (t) { var e = t.d, i = void 0 === e ? "" : e, a = t.stroke, s = void 0 === a ? "#a8a8a8" : a, r = t.strokeWidth, n = void 0 === r ? 1 : r, o = t.fill, l = t.fillOpacity, h = void 0 === l ? 1 : l, c = t.strokeOpacity, d = void 0 === c ? 1 : c, g = t.classes, u = t.strokeLinecap, f = void 0 === u ? null : u, p = t.strokeDashArray, x = void 0 === p ? 0 : p, b = this.w; return null === f && (f = b.config.stroke.lineCap), (i.indexOf("undefined") > -1 || i.indexOf("NaN") > -1) && (i = "M 0 ".concat(b.globals.gridHeight)), b.globals.dom.Paper.path(i).attr({ fill: o, "fill-opacity": h, stroke: s, "stroke-opacity": d, "stroke-linecap": f, "stroke-width": n, "stroke-dasharray": x, class: g }) } }, { key: "group", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = this.w, i = e.globals.dom.Paper.group(); return null !== t && i.attr(t), i } }, { key: "move", value: function (t, e) { var i = ["M", t, e].join(" "); return i } }, { key: "line", value: function (t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a = null; return null === i ? a = ["L", t, e].join(" ") : "H" === i ? a = ["H", t].join(" ") : "V" === i && (a = ["V", e].join(" ")), a } }, { key: "curve", value: function (t, e, i, a, s, r) { var n = ["C", t, e, i, a, s, r].join(" "); return n } }, { key: "quadraticCurve", value: function (t, e, i, a) { return ["Q", t, e, i, a].join(" ") } }, { key: "arc", value: function (t, e, i, a, s, r, n) { var o = arguments.length > 7 && void 0 !== arguments[7] && arguments[7], l = "A"; o && (l = "a"); var h = [l, t, e, i, a, s, r, n].join(" "); return h } }, { key: "renderPaths", value: function (t) { var e, i = t.j, a = t.realIndex, s = t.pathFrom, r = t.pathTo, o = t.stroke, l = t.strokeWidth, h = t.strokeLinecap, c = t.fill, d = t.animationDelay, g = t.initialSpeed, u = t.dataChangeSpeed, f = t.className, b = t.shouldClipToGrid, m = void 0 === b || b, v = t.bindEventsOnPaths, y = void 0 === v || v, w = t.drawShadow, k = void 0 === w || w, A = this.w, S = new p(this.ctx), C = new x(this.ctx), L = this.w.config.chart.animations.enabled, P = L && this.w.config.chart.animations.dynamicAnimation.enabled, T = !!(L && !A.globals.resized || P && A.globals.dataChanged && A.globals.shouldAnimate); T ? e = s : (e = r, A.globals.animationEnded = !0); var z = A.config.stroke.dashArray, I = 0; I = Array.isArray(z) ? z[a] : A.config.stroke.dashArray; var M = this.drawPath({ d: e, stroke: o, strokeWidth: l, fill: c, fillOpacity: 1, classes: f, strokeLinecap: h, strokeDashArray: I }); if (M.attr("index", a), m && M.attr({ "clip-path": "url(#gridRectMask".concat(A.globals.cuid, ")") }), "none" !== A.config.states.normal.filter.type) S.getDefaultFilter(M, a); else if (A.config.chart.dropShadow.enabled && k && (!A.config.chart.dropShadow.enabledOnSeries || A.config.chart.dropShadow.enabledOnSeries && -1 !== A.config.chart.dropShadow.enabledOnSeries.indexOf(a))) { var E = A.config.chart.dropShadow; S.dropShadow(M, E, a) } y && (M.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, M)), M.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, M)), M.node.addEventListener("mousedown", this.pathMouseDown.bind(this, M))), M.attr({ pathTo: r, pathFrom: s }); var X = { el: M, j: i, realIndex: a, pathFrom: s, pathTo: r, fill: c, strokeWidth: l, delay: d }; return !L || A.globals.resized || A.globals.dataChanged ? !A.globals.resized && A.globals.dataChanged || C.showDelayedElements() : C.animatePathsGradually(n(n({}, X), {}, { speed: g })), A.globals.dataChanged && P && T && C.animatePathsGradually(n(n({}, X), {}, { speed: u })), M } }, { key: "drawPattern", value: function (t, e, i) { var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8", s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, r = this.w, n = r.globals.dom.Paper.pattern(e, i, (function (r) { "horizontalLines" === t ? r.line(0, 0, i, 0).stroke({ color: a, width: s + 1 }) : "verticalLines" === t ? r.line(0, 0, 0, e).stroke({ color: a, width: s + 1 }) : "slantedLines" === t ? r.line(0, 0, e, i).stroke({ color: a, width: s }) : "squares" === t ? r.rect(e, i).fill("none").stroke({ color: a, width: s }) : "circles" === t && r.circle(e).fill("none").stroke({ color: a, width: s }) })); return n } }, { key: "drawGradient", value: function (t, e, i, a, s) { var r, n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, c = this.w; e.length < 9 && 0 === e.indexOf("#") && (e = f.hexToRgba(e, a)), i.length < 9 && 0 === i.indexOf("#") && (i = f.hexToRgba(i, s)); var d = 0, g = 1, u = 1, p = null; null !== o && (d = void 0 !== o[0] ? o[0] / 100 : 0, g = void 0 !== o[1] ? o[1] / 100 : 1, u = void 0 !== o[2] ? o[2] / 100 : 1, p = void 0 !== o[3] ? o[3] / 100 : null); var x = !("donut" !== c.config.chart.type && "pie" !== c.config.chart.type && "polarArea" !== c.config.chart.type && "bubble" !== c.config.chart.type); if (r = null === l || 0 === l.length ? c.globals.dom.Paper.gradient(x ? "radial" : "linear", (function (t) { t.at(d, e, a), t.at(g, i, s), t.at(u, i, s), null !== p && t.at(p, e, a) })) : c.globals.dom.Paper.gradient(x ? "radial" : "linear", (function (t) { (Array.isArray(l[h]) ? l[h] : l).forEach((function (e) { t.at(e.offset / 100, e.color, e.opacity) })) })), x) { var b = c.globals.gridWidth / 2, m = c.globals.gridHeight / 2; "bubble" !== c.config.chart.type ? r.attr({ gradientUnits: "userSpaceOnUse", cx: b, cy: m, r: n }) : r.attr({ cx: .5, cy: .5, r: .8, fx: .2, fy: .2 }) } else "vertical" === t ? r.from(0, 0).to(0, 1) : "diagonal" === t ? r.from(0, 0).to(1, 1) : "horizontal" === t ? r.from(0, 1).to(1, 1) : "diagonal2" === t && r.from(1, 0).to(0, 1); return r } }, { key: "drawText", value: function (t) { var e, i = t.x, a = t.y, s = t.text, r = t.textAnchor, n = t.fontSize, o = t.fontFamily, l = t.fontWeight, h = t.foreColor, c = t.opacity, d = t.cssClass, g = void 0 === d ? "" : d, u = t.isPlainText, f = void 0 === u || u, p = this.w; return void 0 === s && (s = ""), r || (r = "start"), h && h.length || (h = p.config.chart.foreColor), o = o || p.config.chart.fontFamily, l = l || "regular", (e = Array.isArray(s) ? p.globals.dom.Paper.text((function (t) { for (var e = 0; e < s.length; e++)0 === e ? t.tspan(s[e]) : t.tspan(s[e]).newLine() })) : f ? p.globals.dom.Paper.plain(s) : p.globals.dom.Paper.text((function (t) { return t.tspan(s) }))).attr({ x: i, y: a, "text-anchor": r, "dominant-baseline": "auto", "font-size": n, "font-family": o, "font-weight": l, fill: h, class: "apexcharts-text " + g }), e.node.style.fontFamily = o, e.node.style.opacity = c, e } }, { key: "drawMarker", value: function (t, e, i) { t = t || 0; var a = i.pSize || 0, s = null; if ("square" === i.shape) { var r = void 0 === i.pRadius ? a / 2 : i.pRadius; null !== e && a || (a = 0, r = 0); var n = 1.2 * a + r, o = this.drawRect(n, n, n, n, r); o.attr({ x: t - n / 2, y: e - n / 2, cx: t, cy: e, class: i.class ? i.class : "", fill: i.pointFillColor, "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1, stroke: i.pointStrokeColor, "stroke-width": i.pWidth ? i.pWidth : 0, "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1 }), s = o } else "circle" !== i.shape && i.shape || (f.isNumber(e) || (a = 0, e = 0), s = this.drawCircle(a, { cx: t, cy: e, class: i.class ? i.class : "", stroke: i.pointStrokeColor, fill: i.pointFillColor, "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1, "stroke-width": i.pWidth ? i.pWidth : 0, "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1 })); return s } }, { key: "pathMouseEnter", value: function (t, e) { var i = this.w, a = new p(this.ctx), s = parseInt(t.node.getAttribute("index"), 10), r = parseInt(t.node.getAttribute("j"), 10); if ("function" == typeof i.config.chart.events.dataPointMouseEnter && i.config.chart.events.dataPointMouseEnter(e, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }), this.ctx.events.fireEvent("dataPointMouseEnter", [e, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }]), ("none" === i.config.states.active.filter.type || "true" !== t.node.getAttribute("selected")) && "none" !== i.config.states.hover.filter.type && "none" !== i.config.states.active.filter.type && !i.globals.isTouchDevice) { var n = i.config.states.hover.filter; a.applyFilter(t, s, n.type, n.value) } } }, { key: "pathMouseLeave", value: function (t, e) { var i = this.w, a = new p(this.ctx), s = parseInt(t.node.getAttribute("index"), 10), r = parseInt(t.node.getAttribute("j"), 10); "function" == typeof i.config.chart.events.dataPointMouseLeave && i.config.chart.events.dataPointMouseLeave(e, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }), this.ctx.events.fireEvent("dataPointMouseLeave", [e, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }]), "none" !== i.config.states.active.filter.type && "true" === t.node.getAttribute("selected") || "none" !== i.config.states.hover.filter.type && a.getDefaultFilter(t, s) } }, { key: "pathMouseDown", value: function (t, e) { var i = this.w, a = new p(this.ctx), s = parseInt(t.node.getAttribute("index"), 10), r = parseInt(t.node.getAttribute("j"), 10), n = "false"; if ("true" === t.node.getAttribute("selected")) { if (t.node.setAttribute("selected", "false"), i.globals.selectedDataPoints[s].indexOf(r) > -1) { var o = i.globals.selectedDataPoints[s].indexOf(r); i.globals.selectedDataPoints[s].splice(o, 1) } } else { if (!i.config.states.active.allowMultipleDataPointsSelection && i.globals.selectedDataPoints.length > 0) { i.globals.selectedDataPoints = []; var l = i.globals.dom.Paper.select(".apexcharts-series path").members, h = i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members, c = function (t) { Array.prototype.forEach.call(t, (function (t) { t.node.setAttribute("selected", "false"), a.getDefaultFilter(t, s) })) }; c(l), c(h) } t.node.setAttribute("selected", "true"), n = "true", void 0 === i.globals.selectedDataPoints[s] && (i.globals.selectedDataPoints[s] = []), i.globals.selectedDataPoints[s].push(r) } if ("true" === n) { var d = i.config.states.active.filter; "none" !== d && a.applyFilter(t, s, d.type, d.value) } else "none" !== i.config.states.active.filter.type && a.getDefaultFilter(t, s); "function" == typeof i.config.chart.events.dataPointSelection && i.config.chart.events.dataPointSelection(e, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: s, dataPointIndex: r, w: i }), e && this.ctx.events.fireEvent("dataPointSelection", [e, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: s, dataPointIndex: r, w: i }]) } }, { key: "rotateAroundCenter", value: function (t) { var e = t.getBBox(); return { x: e.x + e.width / 2, y: e.y + e.height / 2 } } }, { key: "getTextRects", value: function (t, e, i, a) { var s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], r = this.w, n = this.drawText({ x: -200, y: -200, text: t, textAnchor: "start", fontSize: e, fontFamily: i, foreColor: "#fff", opacity: 0 }); a && n.attr("transform", a), r.globals.dom.Paper.add(n); var o = n.bbox(); return s || (o = n.node.getBoundingClientRect()), n.remove(), { width: o.width, height: o.height } } }, { key: "placeTextWithEllipsis", value: function (t, e, i) { if ("function" == typeof t.getComputedTextLength && (t.textContent = e, e.length > 0 && t.getComputedTextLength() >= i / .8)) { for (var a = e.length - 3; a > 0; a -= 3)if (t.getSubStringLength(0, a) <= i / .8) return void (t.textContent = e.substring(0, a) + "..."); t.textContent = "." } } }], [{ key: "setAttrs", value: function (t, e) { for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i]) } }]), t }(), m = function () { function t(i) { e(this, t), this.w = i.w, this.annoCtx = i } return a(t, [{ key: "setOrientations", value: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = this.w; if ("vertical" === t.label.orientation) { var a = null !== e ? e : 0, s = i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a, "']")); if (null !== s) { var r = s.getBoundingClientRect(); s.setAttribute("x", parseFloat(s.getAttribute("x")) - r.height + 4), "top" === t.label.position ? s.setAttribute("y", parseFloat(s.getAttribute("y")) + r.width) : s.setAttribute("y", parseFloat(s.getAttribute("y")) - r.width); var n = this.annoCtx.graphics.rotateAroundCenter(s), o = n.x, l = n.y; s.setAttribute("transform", "rotate(-90 ".concat(o, " ").concat(l, ")")) } } } }, { key: "addBackgroundToAnno", value: function (t, e) { var i = this.w; if (!t || !e.label.text || e.label.text && !e.label.text.trim()) return null; var a = i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), s = t.getBoundingClientRect(), r = e.label.style.padding.left, n = e.label.style.padding.right, o = e.label.style.padding.top, l = e.label.style.padding.bottom; "vertical" === e.label.orientation && (o = e.label.style.padding.left, l = e.label.style.padding.right, r = e.label.style.padding.top, n = e.label.style.padding.bottom); var h = s.left - a.left - r, c = s.top - a.top - o, d = this.annoCtx.graphics.drawRect(h - i.globals.barPadForNumericAxis, c, s.width + r + n, s.height + o + l, e.label.borderRadius, e.label.style.background, 1, e.label.borderWidth, e.label.borderColor, 0); return e.id && d.node.classList.add(e.id), d } }, { key: "annotationsBackground", value: function () { var t = this, e = this.w, i = function (i, a, s) { var r = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations .apexcharts-").concat(s, "-annotation-label[rel='").concat(a, "']")); if (r) { var n = r.parentNode, o = t.addBackgroundToAnno(r, i); o && n.insertBefore(o.node, r) } }; e.config.annotations.xaxis.map((function (t, e) { i(t, e, "xaxis") })), e.config.annotations.yaxis.map((function (t, e) { i(t, e, "yaxis") })), e.config.annotations.points.map((function (t, e) { i(t, e, "point") })) } }, { key: "getStringX", value: function (t) { var e = this.w, i = t; e.config.xaxis.convertedCatToNumeric && e.globals.categoryLabels.length && (t = e.globals.categoryLabels.indexOf(t) + 1); var a = e.globals.labels.indexOf(t), s = e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (a + 1) + ")"); return s && (i = parseFloat(s.getAttribute("x"))), i } }]), t }(), v = function () { function t(i) { e(this, t), this.w = i.w, this.annoCtx = i, this.invertAxis = this.annoCtx.invertAxis } return a(t, [{ key: "addXaxisAnnotation", value: function (t, e, i) { var a = this.w, s = this.invertAxis ? a.globals.minY : a.globals.minX, r = this.invertAxis ? a.globals.maxY : a.globals.maxX, n = this.invertAxis ? a.globals.yRange[0] : a.globals.xRange, o = (t.x - s) / (n / a.globals.gridWidth); this.annoCtx.inversedReversedAxis && (o = (r - t.x) / (n / a.globals.gridWidth)); var l = t.label.text; "category" !== a.config.xaxis.type && !a.config.xaxis.convertedCatToNumeric || this.invertAxis || a.globals.dataFormatXNumeric || (o = this.annoCtx.helpers.getStringX(t.x)); var h = t.strokeDashArray; if (f.isNumber(o)) { if (null === t.x2 || void 0 === t.x2) { var c = this.annoCtx.graphics.drawLine(o + t.offsetX, 0 + t.offsetY, o + t.offsetX, a.globals.gridHeight + t.offsetY, t.borderColor, h, t.borderWidth); e.appendChild(c.node), t.id && c.node.classList.add(t.id) } else { var d = (t.x2 - s) / (n / a.globals.gridWidth); if (this.annoCtx.inversedReversedAxis && (d = (r - t.x2) / (n / a.globals.gridWidth)), "category" !== a.config.xaxis.type && !a.config.xaxis.convertedCatToNumeric || this.invertAxis || a.globals.dataFormatXNumeric || (d = this.annoCtx.helpers.getStringX(t.x2)), d < o) { var g = o; o = d, d = g } var u = this.annoCtx.graphics.drawRect(o + t.offsetX, 0 + t.offsetY, d - o, a.globals.gridHeight + t.offsetY, 0, t.fillColor, t.opacity, 1, t.borderColor, h); u.node.classList.add("apexcharts-annotation-rect"), u.attr("clip-path", "url(#gridRectMask".concat(a.globals.cuid, ")")), e.appendChild(u.node), t.id && u.node.classList.add(t.id) } var p = "top" === t.label.position ? 4 : a.globals.gridHeight, x = this.annoCtx.graphics.getTextRects(l, parseFloat(t.label.style.fontSize)), b = this.annoCtx.graphics.drawText({ x: o + t.label.offsetX, y: p + t.label.offsetY - ("vertical" === t.label.orientation ? "top" === t.label.position ? x.width / 2 - 12 : -x.width / 2 : 0), text: l, textAnchor: t.label.textAnchor, fontSize: t.label.style.fontSize, fontFamily: t.label.style.fontFamily, fontWeight: t.label.style.fontWeight, foreColor: t.label.style.color, cssClass: "apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "") }); b.attr({ rel: i }), e.appendChild(b.node), this.annoCtx.helpers.setOrientations(t, i) } } }, { key: "drawXAxisAnnotations", value: function () { var t = this, e = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" }); return e.config.annotations.xaxis.map((function (e, a) { t.addXaxisAnnotation(e, i.node, a) })), i } }]), t }(), y = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "getStackedSeriesTotals", value: function () { var t = this.w, e = []; if (0 === t.globals.series.length) return e; for (var i = 0; i < t.globals.series[t.globals.maxValsInArrayIndex].length; i++) { for (var a = 0, s = 0; s < t.globals.series.length; s++)void 0 !== t.globals.series[s][i] && (a += t.globals.series[s][i]); e.push(a) } return t.globals.stackedSeriesTotals = e, e } }, { key: "getSeriesTotalByIndex", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; return null === t ? this.w.config.series.reduce((function (t, e) { return t + e }), 0) : this.w.globals.series[t].reduce((function (t, e) { return t + e }), 0) } }, { key: "isSeriesNull", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; return 0 === (null === t ? this.w.config.series.filter((function (t) { return null !== t })) : this.w.config.series[t].data.filter((function (t) { return null !== t }))).length } }, { key: "seriesHaveSameValues", value: function (t) { return this.w.globals.series[t].every((function (t, e, i) { return t === i[0] })) } }, { key: "getCategoryLabels", value: function (t) { var e = this.w, i = t.slice(); return e.config.xaxis.convertedCatToNumeric && (i = t.map((function (t, i) { return e.config.xaxis.labels.formatter(t - e.globals.minX + 1) }))), i } }, { key: "getLargestSeries", value: function () { var t = this.w; t.globals.maxValsInArrayIndex = t.globals.series.map((function (t) { return t.length })).indexOf(Math.max.apply(Math, t.globals.series.map((function (t) { return t.length })))) } }, { key: "getLargestMarkerSize", value: function () { var t = this.w, e = 0; return t.globals.markers.size.forEach((function (t) { e = Math.max(e, t) })), t.globals.markers.largestSize = e, e } }, { key: "getSeriesTotals", value: function () { var t = this.w; t.globals.seriesTotals = t.globals.series.map((function (t, e) { var i = 0; if (Array.isArray(t)) for (var a = 0; a < t.length; a++)i += t[a]; else i += t; return i })) } }, { key: "getSeriesTotalsXRange", value: function (t, e) { var i = this.w; return i.globals.series.map((function (a, s) { for (var r = 0, n = 0; n < a.length; n++)i.globals.seriesX[s][n] > t && i.globals.seriesX[s][n] < e && (r += a[n]); return r })) } }, { key: "getPercentSeries", value: function () { var t = this.w; t.globals.seriesPercent = t.globals.series.map((function (e, i) { var a = []; if (Array.isArray(e)) for (var s = 0; s < e.length; s++) { var r = t.globals.stackedSeriesTotals[s], n = 0; r && (n = 100 * e[s] / r), a.push(n) } else { var o = 100 * e / t.globals.seriesTotals.reduce((function (t, e) { return t + e }), 0); a.push(o) } return a })) } }, { key: "getCalculatedRatios", value: function () { var t, e, i, a, s = this.w.globals, r = [], n = 0, o = [], l = .1, h = 0; if (s.yRange = [], s.isMultipleYAxis) for (var c = 0; c < s.minYArr.length; c++)s.yRange.push(Math.abs(s.minYArr[c] - s.maxYArr[c])), o.push(0); else s.yRange.push(Math.abs(s.minY - s.maxY)); s.xRange = Math.abs(s.maxX - s.minX), s.zRange = Math.abs(s.maxZ - s.minZ); for (var d = 0; d < s.yRange.length; d++)r.push(s.yRange[d] / s.gridHeight); if (e = s.xRange / s.gridWidth, i = Math.abs(s.initialMaxX - s.initialMinX) / s.gridWidth, t = s.yRange / s.gridWidth, a = s.xRange / s.gridHeight, (n = s.zRange / s.gridHeight * 16) || (n = 1), s.minY !== Number.MIN_VALUE && 0 !== Math.abs(s.minY) && (s.hasNegs = !0), s.isMultipleYAxis) { o = []; for (var g = 0; g < r.length; g++)o.push(-s.minYArr[g] / r[g]) } else o.push(-s.minY / r[0]), s.minY !== Number.MIN_VALUE && 0 !== Math.abs(s.minY) && (l = -s.minY / t, h = s.minX / e); return { yRatio: r, invertedYRatio: t, zRatio: n, xRatio: e, initialXRatio: i, invertedXRatio: a, baseLineInvertedY: l, baseLineY: o, baseLineX: h } } }, { key: "getLogSeries", value: function (t) { var e = this, i = this.w; return i.globals.seriesLog = t.map((function (t, a) { return i.config.yaxis[a] && i.config.yaxis[a].logarithmic ? t.map((function (t) { return null === t ? null : e.getLogVal(t, a) })) : t })), i.globals.invalidLogScale ? t : i.globals.seriesLog } }, { key: "getLogVal", value: function (t, e) { var i = this.w; return (Math.log(t) - Math.log(i.globals.minYArr[e])) / (Math.log(i.globals.maxYArr[e]) - Math.log(i.globals.minYArr[e])) } }, { key: "getLogYRatios", value: function (t) { var e = this, i = this.w, a = this.w.globals; return a.yLogRatio = t.slice(), a.logYRange = a.yRange.map((function (t, s) { if (i.config.yaxis[s] && e.w.config.yaxis[s].logarithmic) { var r, n = -Number.MAX_VALUE, o = Number.MIN_VALUE; return a.seriesLog.forEach((function (t, e) { t.forEach((function (t) { i.config.yaxis[e] && i.config.yaxis[e].logarithmic && (n = Math.max(t, n), o = Math.min(t, o)) })) })), r = Math.pow(a.yRange[s], Math.abs(o - n) / a.yRange[s]), a.yLogRatio[s] = r / a.gridHeight, r } })), a.invalidLogScale ? t.slice() : a.yLogRatio } }], [{ key: "checkComboSeries", value: function (t) { var e = !1, i = 0; return t.length && void 0 !== t[0].type && (e = !0, t.forEach((function (t) { "bar" !== t.type && "column" !== t.type && "candlestick" !== t.type || i++ }))), { comboBarCount: i, comboCharts: e } } }, { key: "extendArrayProps", value: function (t, e, i) { return e.yaxis && (e = t.extendYAxis(e, i)), e.annotations && (e.annotations.yaxis && (e = t.extendYAxisAnnotations(e)), e.annotations.xaxis && (e = t.extendXAxisAnnotations(e)), e.annotations.points && (e = t.extendPointAnnotations(e))), e } }]), t }(), w = function () { function t(i) { e(this, t), this.w = i.w, this.annoCtx = i } return a(t, [{ key: "addYaxisAnnotation", value: function (t, e, i) { var a, s = this.w, r = t.strokeDashArray, n = this._getY1Y2("y1", t), o = t.label.text; if (null === t.y2 || void 0 === t.y2) { var l = this.annoCtx.graphics.drawLine(0 + t.offsetX, n + t.offsetY, this._getYAxisAnnotationWidth(t), n + t.offsetY, t.borderColor, r, t.borderWidth); e.appendChild(l.node), t.id && l.node.classList.add(t.id) } else { if ((a = this._getY1Y2("y2", t)) > n) { var h = n; n = a, a = h } var c = this.annoCtx.graphics.drawRect(0 + t.offsetX, a + t.offsetY, this._getYAxisAnnotationWidth(t), n - a, 0, t.fillColor, t.opacity, 1, t.borderColor, r); c.node.classList.add("apexcharts-annotation-rect"), c.attr("clip-path", "url(#gridRectMask".concat(s.globals.cuid, ")")), e.appendChild(c.node), t.id && c.node.classList.add(t.id) } var d = "right" === t.label.position ? s.globals.gridWidth : 0, g = this.annoCtx.graphics.drawText({ x: d + t.label.offsetX, y: (a || n) + t.label.offsetY - 3, text: o, textAnchor: t.label.textAnchor, fontSize: t.label.style.fontSize, fontFamily: t.label.style.fontFamily, fontWeight: t.label.style.fontWeight, foreColor: t.label.style.color, cssClass: "apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "") }); g.attr({ rel: i }), e.appendChild(g.node) } }, { key: "_getY1Y2", value: function (t, e) { var i, a = "y1" === t ? e.y : e.y2, s = this.w; if (this.annoCtx.invertAxis) { var r = s.globals.labels.indexOf(a); s.config.xaxis.convertedCatToNumeric && (r = s.globals.categoryLabels.indexOf(a)); var n = s.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (r + 1) + ")"); n && (i = parseFloat(n.getAttribute("y"))) } else { var o; if (s.config.yaxis[e.yAxisIndex].logarithmic) o = (a = new y(this.annoCtx.ctx).getLogVal(a, e.yAxisIndex)) / s.globals.yLogRatio[e.yAxisIndex]; else o = (a - s.globals.minYArr[e.yAxisIndex]) / (s.globals.yRange[e.yAxisIndex] / s.globals.gridHeight); i = s.globals.gridHeight - o, s.config.yaxis[e.yAxisIndex] && s.config.yaxis[e.yAxisIndex].reversed && (i = o) } return i } }, { key: "_getYAxisAnnotationWidth", value: function (t) { var e = this.w; e.globals.gridWidth; return (t.width.indexOf("%") > -1 ? e.globals.gridWidth * parseInt(t.width, 10) / 100 : parseInt(t.width, 10)) + t.offsetX } }, { key: "drawYAxisAnnotations", value: function () { var t = this, e = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" }); return e.config.annotations.yaxis.map((function (e, a) { t.addYaxisAnnotation(e, i.node, a) })), i } }]), t }(), k = function () { function t(i) { e(this, t), this.w = i.w, this.annoCtx = i } return a(t, [{ key: "addPointAnnotation", value: function (t, e, i) { var a = this.w, s = 0, r = 0, n = 0; this.annoCtx.invertAxis && console.warn("Point annotation is not supported in horizontal bar charts."); var o, l = parseFloat(t.y); if ("string" == typeof t.x) { var h = a.globals.labels.indexOf(t.x); a.config.xaxis.convertedCatToNumeric && (h = a.globals.categoryLabels.indexOf(t.x)), s = this.annoCtx.helpers.getStringX(t.x), null === t.y && (l = a.globals.series[t.seriesIndex][h]) } else s = (t.x - a.globals.minX) / (a.globals.xRange / a.globals.gridWidth); a.config.yaxis[t.yAxisIndex].logarithmic ? o = (l = new y(this.annoCtx.ctx).getLogVal(l, t.yAxisIndex)) / a.globals.yLogRatio[t.yAxisIndex] : o = (l - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight); if (r = a.globals.gridHeight - o - parseFloat(t.label.style.fontSize) - t.marker.size, n = a.globals.gridHeight - o, a.config.yaxis[t.yAxisIndex] && a.config.yaxis[t.yAxisIndex].reversed && (r = o + parseFloat(t.label.style.fontSize) + t.marker.size, n = o), f.isNumber(s)) { var c = { pSize: t.marker.size, pWidth: t.marker.strokeWidth, pointFillColor: t.marker.fillColor, pointStrokeColor: t.marker.strokeColor, shape: t.marker.shape, pRadius: t.marker.radius, class: "apexcharts-point-annotation-marker ".concat(t.marker.cssClass, " ").concat(t.id ? t.id : "") }, d = this.annoCtx.graphics.drawMarker(s + t.marker.offsetX, n + t.marker.offsetY, c); e.appendChild(d.node); var g = t.label.text ? t.label.text : "", u = this.annoCtx.graphics.drawText({ x: s + t.label.offsetX, y: r + t.label.offsetY, text: g, textAnchor: t.label.textAnchor, fontSize: t.label.style.fontSize, fontFamily: t.label.style.fontFamily, fontWeight: t.label.style.fontWeight, foreColor: t.label.style.color, cssClass: "apexcharts-point-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "") }); if (u.attr({ rel: i }), e.appendChild(u.node), t.customSVG.SVG) { var p = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + t.customSVG.cssClass }); p.attr({ transform: "translate(".concat(s + t.customSVG.offsetX, ", ").concat(r + t.customSVG.offsetY, ")") }), p.node.innerHTML = t.customSVG.SVG, e.appendChild(p.node) } if (t.image.path) { var x = t.image.width ? t.image.width : 20, b = t.image.height ? t.image.height : 20; this.annoCtx.addImage({ x: s + t.image.offsetX - x / 2, y: r + t.image.offsetY - b / 2, width: x, height: b, path: t.image.path, appendTo: ".apexcharts-point-annotations" }) } } } }, { key: "drawPointAnnotations", value: function () { var t = this, e = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" }); return e.config.annotations.points.map((function (e, a) { t.addPointAnnotation(e, i.node, a) })), i } }]), t }(); var A = { name: "en", options: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", exportToCSV: "Download CSV", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" } } }, S = function () { function t() { e(this, t), this.yAxis = { show: !0, showAlways: !1, showForNullSeries: !0, seriesName: void 0, opposite: !1, reversed: !1, logarithmic: !1, tickAmount: void 0, forceNiceScale: !1, max: void 0, min: void 0, floating: !1, decimalsInFloat: void 0, labels: { show: !0, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, formatter: void 0 }, axisBorder: { show: !1, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !1, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0 }, title: { text: void 0, rotate: -90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, tooltip: { enabled: !1, offsetX: 0 }, crosshairs: { show: !0, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } } }, this.pointAnnotation = { x: 0, y: null, yAxisIndex: 0, seriesIndex: 0, marker: { size: 4, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, radius: 2, cssClass: "" }, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", offsetX: 0, offsetY: 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } }, customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 }, image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 } }, this.yAxisAnnotation = { y: 0, y2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: .3, offsetX: 0, offsetY: 0, width: "100%", yAxisIndex: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "end", position: "right", offsetX: 0, offsetY: -3, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.xAxisAnnotation = { x: 0, x2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: .3, offsetX: 0, offsetY: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", orientation: "vertical", position: "top", offsetX: 0, offsetY: 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.text = { x: 0, y: 0, text: "", textAnchor: "start", foreColor: void 0, fontSize: "13px", fontFamily: void 0, fontWeight: 400, appendTo: ".apexcharts-annotations", backgroundColor: "transparent", borderColor: "#c2c2c2", borderRadius: 0, borderWidth: 0, paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2 } } return a(t, [{ key: "init", value: function () { return { annotations: { position: "front", yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation], texts: [], images: [], shapes: [] }, chart: { animations: { enabled: !0, easing: "easeinout", speed: 800, animateGradually: { delay: 150, enabled: !0 }, dynamicAnimation: { enabled: !0, speed: 350 } }, background: "transparent", locales: [A], defaultLocale: "en", dropShadow: { enabled: !1, enabledOnSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: .35 }, events: { animationEnd: void 0, beforeMount: void 0, mounted: void 0, updated: void 0, click: void 0, mouseMove: void 0, legendClick: void 0, markerClick: void 0, selection: void 0, dataPointSelection: void 0, dataPointMouseEnter: void 0, dataPointMouseLeave: void 0, beforeZoom: void 0, beforeResetZoom: void 0, zoomed: void 0, scrolled: void 0, brushScrolled: void 0 }, foreColor: "#373d3f", fontFamily: "Helvetica, Arial, sans-serif", height: "auto", parentHeightOffset: 15, redrawOnParentResize: !0, redrawOnWindowResize: !0, id: void 0, group: void 0, offsetX: 0, offsetY: 0, selection: { enabled: !1, type: "x", fill: { color: "#24292e", opacity: .1 }, stroke: { width: 1, color: "#24292e", opacity: .4, dashArray: 3 }, xaxis: { min: void 0, max: void 0 }, yaxis: { min: void 0, max: void 0 } }, sparkline: { enabled: !1 }, brush: { enabled: !1, autoScaleYaxis: !0, target: void 0 }, stacked: !1, stackType: "normal", toolbar: { show: !0, offsetX: 0, offsetY: 0, tools: { download: !0, selection: !0, zoom: !0, zoomin: !0, zoomout: !0, pan: !0, reset: !0, customIcons: [] }, export: { csv: { filename: void 0, columnDelimiter: ",", headerCategory: "category", headerValue: "value", dateFormatter: function (t) { return new Date(t).toDateString() } }, png: { filename: void 0 }, svg: { filename: void 0 } }, autoSelected: "zoom" }, type: "line", width: "100%", zoom: { enabled: !0, type: "x", autoScaleYaxis: !1, zoomedArea: { fill: { color: "#90CAF9", opacity: .4 }, stroke: { color: "#0D47A1", opacity: .4, width: 1 } } } }, plotOptions: { area: { fillTo: "origin" }, bar: { horizontal: !1, columnWidth: "70%", barHeight: "70%", distributed: !1, startingShape: "flat", endingShape: "flat", rangeBarOverlap: !0, rangeBarGroupRows: !1, colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1, backgroundBarRadius: 0 }, dataLabels: { position: "top", maxItems: 100, hideOverflowingLabels: !0, orientation: "horizontal" } }, bubble: { minBubbleRadius: void 0, maxBubbleRadius: void 0 }, candlestick: { colors: { upward: "#00B746", downward: "#EF403C" }, wick: { useFillColor: !0 } }, heatmap: { radius: 2, enableShades: !0, shadeIntensity: .5, reverseNegativeShade: !1, distributed: !1, useFillColorAsStroke: !1, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } }, treemap: { enableShades: !0, shadeIntensity: .5, distributed: !1, reverseNegativeShade: !1, useFillColorAsStroke: !1, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } }, radialBar: { inverseOrder: !1, startAngle: 0, endAngle: 360, offsetX: 0, offsetY: 0, hollow: { margin: 5, size: "50%", background: "transparent", image: void 0, imageWidth: 150, imageHeight: 150, imageOffsetX: 0, imageOffsetY: 0, imageClipped: !0, position: "front", dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: .5 } }, track: { show: !0, startAngle: void 0, endAngle: void 0, background: "#f2f2f2", strokeWidth: "97%", opacity: 1, margin: 5, dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: .5 } }, dataLabels: { show: !0, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: 0, formatter: function (t) { return t } }, value: { show: !0, fontSize: "14px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 16, formatter: function (t) { return t + "%" } }, total: { show: !1, label: "Total", fontSize: "16px", fontWeight: 600, fontFamily: void 0, color: void 0, formatter: function (t) { return t.globals.seriesTotals.reduce((function (t, e) { return t + e }), 0) / t.globals.series.length + "%" } } } }, pie: { customScale: 1, offsetX: 0, offsetY: 0, startAngle: 0, endAngle: 360, expandOnClick: !0, dataLabels: { offset: 0, minAngleToShowLabel: 10 }, donut: { size: "65%", background: "transparent", labels: { show: !1, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: -10, formatter: function (t) { return t } }, value: { show: !0, fontSize: "20px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 10, formatter: function (t) { return t } }, total: { show: !1, showAlways: !1, label: "Total", fontSize: "16px", fontWeight: 400, fontFamily: void 0, color: void 0, formatter: function (t) { return t.globals.seriesTotals.reduce((function (t, e) { return t + e }), 0) } } } } }, polarArea: { rings: { strokeWidth: 1, strokeColor: "#e8e8e8" } }, radar: { size: void 0, offsetX: 0, offsetY: 0, polygons: { strokeWidth: 1, strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: { colors: void 0 } } } }, colors: void 0, dataLabels: { enabled: !0, enabledOnSeries: void 0, formatter: function (t) { return null !== t ? t : "" }, textAnchor: "middle", distributed: !1, offsetX: 0, offsetY: 0, style: { fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0 }, background: { enabled: !0, foreColor: "#fff", borderRadius: 2, padding: 4, opacity: .9, borderWidth: 1, borderColor: "#fff", dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: .45 } }, dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: .45 } }, fill: { type: "solid", colors: void 0, opacity: .85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: .5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] }, image: { src: [], width: void 0, height: void 0 }, pattern: { style: "squares", width: 6, height: 6, strokeWidth: 2 } }, grid: { show: !0, borderColor: "#e0e0e0", strokeDashArray: 0, position: "back", xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !0 } }, row: { colors: void 0, opacity: .5 }, column: { colors: void 0, opacity: .5 }, padding: { top: 0, right: 10, bottom: 0, left: 12 } }, labels: [], legend: { show: !0, showForSingleSeries: !1, showForNullSeries: !0, showForZeroSeries: !0, floating: !1, position: "bottom", horizontalAlign: "center", inverseOrder: !1, fontSize: "12px", fontFamily: void 0, fontWeight: 400, width: void 0, height: void 0, formatter: void 0, tooltipHoverFormatter: void 0, offsetX: -20, offsetY: 4, labels: { colors: void 0, useSeriesColors: !1 }, markers: { width: 12, height: 12, strokeWidth: 0, fillColors: void 0, strokeColor: "#fff", radius: 12, customHTML: void 0, offsetX: 0, offsetY: 0, onClick: void 0 }, itemMargin: { horizontal: 5, vertical: 2 }, onItemClick: { toggleDataSeries: !0 }, onItemHover: { highlightDataSeries: !0 } }, markers: { discrete: [], size: 0, colors: void 0, strokeColors: "#fff", strokeWidth: 2, strokeOpacity: .9, strokeDashArray: 0, fillOpacity: 1, shape: "circle", radius: 2, offsetX: 0, offsetY: 0, onClick: void 0, onDblClick: void 0, showNullDataPoints: !0, hover: { size: void 0, sizeOffset: 3 } }, noData: { text: void 0, align: "center", verticalAlign: "middle", offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "14px", fontFamily: void 0 } }, responsive: [], series: void 0, states: { normal: { filter: { type: "none", value: 0 } }, hover: { filter: { type: "lighten", value: .1 } }, active: { allowMultipleDataPointsSelection: !1, filter: { type: "darken", value: .5 } } }, title: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 0, floating: !1, style: { fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0 } }, subtitle: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 30, floating: !1, style: { fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0 }, tooltip: { enabled: !0, enabledOnSeries: void 0, shared: !0, followCursor: !1, intersect: !1, inverseOrder: !1, custom: void 0, fillSeriesColor: !1, theme: "light", style: { fontSize: "12px", fontFamily: void 0 }, onDatasetHover: { highlightDataSeries: !1 }, x: { show: !0, format: "dd MMM", formatter: void 0 }, y: { formatter: void 0, title: { formatter: function (t) { return t ? t + ": " : "" } } }, z: { formatter: void 0, title: "Size: " }, marker: { show: !0, fillColors: void 0 }, items: { display: "flex" }, fixed: { enabled: !1, position: "topRight", offsetX: 0, offsetY: 0 } }, xaxis: { type: "category", categories: [], convertedCatToNumeric: !1, sorted: !1, offsetX: 0, offsetY: 0, labels: { show: !0, rotate: -45, rotateAlways: !1, hideOverlappingLabels: !0, trim: !1, minHeight: void 0, maxHeight: 120, showDuplicates: !0, style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, offsetX: 0, offsetY: 0, format: void 0, formatter: void 0, datetimeUTC: !0, datetimeFormatter: { year: "yyyy", month: "MMM 'yy", day: "dd MMM", hour: "HH:mm", minute: "HH:mm:ss" } }, axisBorder: { show: !0, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !0, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0 }, tickAmount: void 0, tickPlacement: "on", min: void 0, max: void 0, range: void 0, floating: !1, position: "bottom", title: { text: void 0, offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "12px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, crosshairs: { show: !0, width: 1, position: "back", opacity: .9, stroke: { color: "#b6b6b6", width: 1, dashArray: 3 }, fill: { type: "solid", color: "#B1B9C4", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: .4, opacityTo: .5 } }, dropShadow: { enabled: !1, left: 0, top: 0, blur: 1, opacity: .4 } }, tooltip: { enabled: !0, offsetY: 0, formatter: void 0, style: { fontSize: "12px", fontFamily: void 0 } } }, yaxis: this.yAxis, theme: { mode: "light", palette: "palette1", monochrome: { enabled: !1, color: "#008FFB", shadeTo: "light", shadeIntensity: .65 } } } } }]), t }(), C = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w, this.graphics = new b(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new m(this), this.xAxisAnnotations = new v(this), this.yAxisAnnotations = new w(this), this.pointsAnnotations = new k(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints } return a(t, [{ key: "drawAxesAnnotations", value: function () { var t = this.w; if (t.globals.axisCharts) { for (var e = this.yAxisAnnotations.drawYAxisAnnotations(), i = this.xAxisAnnotations.drawXAxisAnnotations(), a = this.pointsAnnotations.drawPointAnnotations(), s = t.config.chart.animations.enabled, r = [e, i, a], n = [i.node, e.node, a.node], o = 0; o < 3; o++)t.globals.dom.elGraphical.add(r[o]), !s || t.globals.resized || t.globals.dataChanged || "scatter" !== t.config.chart.type && "bubble" !== t.config.chart.type && t.globals.dataPoints > 1 && n[o].classList.add("apexcharts-element-hidden"), t.globals.delayedElements.push({ el: n[o], index: 0 }); this.helpers.annotationsBackground() } } }, { key: "drawImageAnnos", value: function () { var t = this; this.w.config.annotations.images.map((function (e, i) { t.addImage(e, i) })) } }, { key: "drawTextAnnos", value: function () { var t = this; this.w.config.annotations.texts.map((function (e, i) { t.addText(e, i) })) } }, { key: "addXaxisAnnotation", value: function (t, e, i) { this.xAxisAnnotations.addXaxisAnnotation(t, e, i) } }, { key: "addYaxisAnnotation", value: function (t, e, i) { this.yAxisAnnotations.addYaxisAnnotation(t, e, i) } }, { key: "addPointAnnotation", value: function (t, e, i) { this.pointsAnnotations.addPointAnnotation(t, e, i) } }, { key: "addText", value: function (t, e) { var i = t.x, a = t.y, s = t.text, r = t.textAnchor, n = t.foreColor, o = t.fontSize, l = t.fontFamily, h = t.fontWeight, c = t.cssClass, d = t.backgroundColor, g = t.borderWidth, u = t.strokeDashArray, f = t.borderRadius, p = t.borderColor, x = t.appendTo, b = void 0 === x ? ".apexcharts-annotations" : x, m = t.paddingLeft, v = void 0 === m ? 4 : m, y = t.paddingRight, w = void 0 === y ? 4 : y, k = t.paddingBottom, A = void 0 === k ? 2 : k, S = t.paddingTop, C = void 0 === S ? 2 : S, L = this.w, P = this.graphics.drawText({ x: i, y: a, text: s, textAnchor: r || "start", fontSize: o || "12px", fontWeight: h || "regular", fontFamily: l || L.config.chart.fontFamily, foreColor: n || L.config.chart.foreColor, cssClass: c }), T = L.globals.dom.baseEl.querySelector(b); T && T.appendChild(P.node); var z = P.bbox(); if (s) { var I = this.graphics.drawRect(z.x - v, z.y - C, z.width + v + w, z.height + A + C, f, d || "transparent", 1, g, p, u); T.insertBefore(I.node, P.node) } } }, { key: "addImage", value: function (t, e) { var i = this.w, a = t.path, s = t.x, r = void 0 === s ? 0 : s, n = t.y, o = void 0 === n ? 0 : n, l = t.width, h = void 0 === l ? 20 : l, c = t.height, d = void 0 === c ? 20 : c, g = t.appendTo, u = void 0 === g ? ".apexcharts-annotations" : g, f = i.globals.dom.Paper.image(a); f.size(h, d).move(r, o); var p = i.globals.dom.baseEl.querySelector(u); p && p.appendChild(f.node) } }, { key: "addXaxisAnnotationExternal", value: function (t, e, i) { return this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "xaxis", contextMethod: i.addXaxisAnnotation }), i } }, { key: "addYaxisAnnotationExternal", value: function (t, e, i) { return this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "yaxis", contextMethod: i.addYaxisAnnotation }), i } }, { key: "addPointAnnotationExternal", value: function (t, e, i) { return void 0 === this.invertAxis && (this.invertAxis = i.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "point", contextMethod: i.addPointAnnotation }), i } }, { key: "addAnnotationExternal", value: function (t) { var e = t.params, i = t.pushToMemory, a = t.context, s = t.type, r = t.contextMethod, n = a, o = n.w, l = o.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations")), h = l.childNodes.length + 1, c = new S, d = Object.assign({}, "xaxis" === s ? c.xAxisAnnotation : "yaxis" === s ? c.yAxisAnnotation : c.pointAnnotation), g = f.extend(d, e); switch (s) { case "xaxis": this.addXaxisAnnotation(g, l, h); break; case "yaxis": this.addYaxisAnnotation(g, l, h); break; case "point": this.addPointAnnotation(g, l, h) }var u = o.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations .apexcharts-").concat(s, "-annotation-label[rel='").concat(h, "']")), p = this.helpers.addBackgroundToAnno(u, g); return p && l.insertBefore(p.node, u), i && o.globals.memory.methodsToExec.push({ context: n, id: g.id ? g.id : f.randomId(), method: r, label: "addAnnotation", params: e }), a } }, { key: "clearAnnotations", value: function (t) { var e = t.w, i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations"); e.globals.memory.methodsToExec.map((function (t, i) { "addText" !== t.label && "addAnnotation" !== t.label || e.globals.memory.methodsToExec.splice(i, 1) })), i = f.listToArray(i), Array.prototype.forEach.call(i, (function (t) { for (; t.firstChild;)t.removeChild(t.firstChild) })) } }, { key: "removeAnnotation", value: function (t, e) { var i = t.w, a = i.globals.dom.baseEl.querySelectorAll(".".concat(e)); a && (i.globals.memory.methodsToExec.map((function (t, a) { t.id === e && i.globals.memory.methodsToExec.splice(a, 1) })), Array.prototype.forEach.call(a, (function (t) { t.parentElement.removeChild(t) }))) } }]), t }(), L = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w, this.opts = null, this.seriesIndex = 0 } return a(t, [{ key: "clippedImgArea", value: function (t) { var e = this.w, i = e.config, a = parseInt(e.globals.gridWidth, 10), s = parseInt(e.globals.gridHeight, 10), r = a > s ? a : s, n = t.image, o = 0, l = 0; void 0 === t.width && void 0 === t.height ? void 0 !== i.fill.image.width && void 0 !== i.fill.image.height ? (o = i.fill.image.width + 1, l = i.fill.image.height) : (o = r + 1, l = r) : (o = t.width, l = t.height); var h = document.createElementNS(e.globals.SVGNS, "pattern"); b.setAttrs(h, { id: t.patternID, patternUnits: t.patternUnits ? t.patternUnits : "userSpaceOnUse", width: o + "px", height: l + "px" }); var c = document.createElementNS(e.globals.SVGNS, "image"); h.appendChild(c), c.setAttributeNS(window.SVG.xlink, "href", n), b.setAttrs(c, { x: 0, y: 0, preserveAspectRatio: "none", width: o + "px", height: l + "px" }), c.style.opacity = t.opacity, e.globals.dom.elDefs.node.appendChild(h) } }, { key: "getSeriesIndex", value: function (t) { var e = this.w; return ("bar" === e.config.chart.type || "rangeBar" === e.config.chart.type) && e.config.plotOptions.bar.distributed || "heatmap" === e.config.chart.type || "treemap" === e.config.chart.type ? this.seriesIndex = t.seriesNumber : this.seriesIndex = t.seriesNumber % e.globals.series.length, this.seriesIndex } }, { key: "fillPath", value: function (t) { var e = this.w; this.opts = t; var i, a, s, r = this.w.config; this.seriesIndex = this.getSeriesIndex(t); var n = this.getFillColors()[this.seriesIndex]; void 0 !== e.globals.seriesColors[this.seriesIndex] && (n = e.globals.seriesColors[this.seriesIndex]), "function" == typeof n && (n = n({ seriesIndex: this.seriesIndex, dataPointIndex: t.dataPointIndex, value: t.value, w: e })); var o = this.getFillType(this.seriesIndex), l = Array.isArray(r.fill.opacity) ? r.fill.opacity[this.seriesIndex] : r.fill.opacity; t.color && (n = t.color); var h = n; if (-1 === n.indexOf("rgb") ? n.length < 9 && (h = f.hexToRgba(n, l)) : n.indexOf("rgba") > -1 && (l = f.getOpacityFromRGBA(n)), t.opacity && (l = t.opacity), "pattern" === o && (a = this.handlePatternFill(a, n, l, h)), "gradient" === o && (s = this.handleGradientFill(n, l, this.seriesIndex)), "image" === o) { var c = r.fill.image.src, d = t.patternID ? t.patternID : ""; this.clippedImgArea({ opacity: l, image: Array.isArray(c) ? t.seriesNumber < c.length ? c[t.seriesNumber] : c[0] : c, width: t.width ? t.width : void 0, height: t.height ? t.height : void 0, patternUnits: t.patternUnits, patternID: "pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(d) }), i = "url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(d, ")") } else i = "gradient" === o ? s : "pattern" === o ? a : h; return t.solid && (i = h), i } }, { key: "getFillType", value: function (t) { var e = this.w; return Array.isArray(e.config.fill.type) ? e.config.fill.type[t] : e.config.fill.type } }, { key: "getFillColors", value: function () { var t = this.w, e = t.config, i = this.opts, a = []; return t.globals.comboCharts ? "line" === t.config.series[this.seriesIndex].type ? Array.isArray(t.globals.stroke.colors) ? a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? a = t.globals.fill.colors : a.push(t.globals.fill.colors) : "line" === e.chart.type ? Array.isArray(t.globals.stroke.colors) ? a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? a = t.globals.fill.colors : a.push(t.globals.fill.colors), void 0 !== i.fillColors && (a = [], Array.isArray(i.fillColors) ? a = i.fillColors.slice() : a.push(i.fillColors)), a } }, { key: "handlePatternFill", value: function (t, e, i, a) { var s = this.w.config, r = this.opts, n = new b(this.ctx), o = void 0 === s.fill.pattern.strokeWidth ? Array.isArray(s.stroke.width) ? s.stroke.width[this.seriesIndex] : s.stroke.width : Array.isArray(s.fill.pattern.strokeWidth) ? s.fill.pattern.strokeWidth[this.seriesIndex] : s.fill.pattern.strokeWidth, l = e; Array.isArray(s.fill.pattern.style) ? t = void 0 !== s.fill.pattern.style[r.seriesNumber] ? n.drawPattern(s.fill.pattern.style[r.seriesNumber], s.fill.pattern.width, s.fill.pattern.height, l, o, i) : a : t = n.drawPattern(s.fill.pattern.style, s.fill.pattern.width, s.fill.pattern.height, l, o, i); return t } }, { key: "handleGradientFill", value: function (t, e, i) { var a, s = this.w.config, r = this.opts, n = new b(this.ctx), o = new f, l = s.fill.gradient.type, h = t, c = void 0 === s.fill.gradient.opacityFrom ? e : Array.isArray(s.fill.gradient.opacityFrom) ? s.fill.gradient.opacityFrom[i] : s.fill.gradient.opacityFrom; h.indexOf("rgba") > -1 && (c = f.getOpacityFromRGBA(h)); var d = void 0 === s.fill.gradient.opacityTo ? e : Array.isArray(s.fill.gradient.opacityTo) ? s.fill.gradient.opacityTo[i] : s.fill.gradient.opacityTo; if (void 0 === s.fill.gradient.gradientToColors || 0 === s.fill.gradient.gradientToColors.length) a = "dark" === s.fill.gradient.shade ? o.shadeColor(-1 * parseFloat(s.fill.gradient.shadeIntensity), t.indexOf("rgb") > -1 ? f.rgb2hex(t) : t) : o.shadeColor(parseFloat(s.fill.gradient.shadeIntensity), t.indexOf("rgb") > -1 ? f.rgb2hex(t) : t); else if (s.fill.gradient.gradientToColors[r.seriesNumber]) { var g = s.fill.gradient.gradientToColors[r.seriesNumber]; a = g, g.indexOf("rgba") > -1 && (d = f.getOpacityFromRGBA(g)) } else a = t; if (s.fill.gradient.inverseColors) { var u = h; h = a, a = u } return h.indexOf("rgb") > -1 && (h = f.rgb2hex(h)), a.indexOf("rgb") > -1 && (a = f.rgb2hex(a)), n.drawGradient(l, h, a, c, d, r.size, s.fill.gradient.stops, s.fill.gradient.colorStops, i) } }]), t }(), P = function () { function t(i, a) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "setGlobalMarkerSize", value: function () { var t = this.w; if (t.globals.markers.size = Array.isArray(t.config.markers.size) ? t.config.markers.size : [t.config.markers.size], t.globals.markers.size.length > 0) { if (t.globals.markers.size.length < t.globals.series.length + 1) for (var e = 0; e <= t.globals.series.length; e++)void 0 === t.globals.markers.size[e] && t.globals.markers.size.push(t.globals.markers.size[0]) } else t.globals.markers.size = t.config.series.map((function (e) { return t.config.markers.size })) } }, { key: "plotChartMarkers", value: function (t, e, i, a) { var s, r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], n = this.w, o = e, l = t, h = null, c = new b(this.ctx); if ((n.globals.markers.size[e] > 0 || r) && (h = c.group({ class: r ? "" : "apexcharts-series-markers" })).attr("clip-path", "url(#gridRectMarkerMask".concat(n.globals.cuid, ")")), Array.isArray(l.x)) for (var d = 0; d < l.x.length; d++) { var g = i; 1 === i && 0 === d && (g = 0), 1 === i && 1 === d && (g = 1); var u = "apexcharts-marker"; "line" !== n.config.chart.type && "area" !== n.config.chart.type || n.globals.comboCharts || n.config.tooltip.intersect || (u += " no-pointer-events"); var x = Array.isArray(n.config.markers.size) ? n.globals.markers.size[e] > 0 : n.config.markers.size > 0; if (x || r) { f.isNumber(l.y[d]) ? u += " w".concat(f.randomId()) : u = "apexcharts-nullpoint"; var m = this.getMarkerConfig(u, e, g); n.config.series[o].data[g] && (n.config.series[o].data[g].fillColor && (m.pointFillColor = n.config.series[o].data[g].fillColor), n.config.series[o].data[g].strokeColor && (m.pointStrokeColor = n.config.series[o].data[g].strokeColor)), a && (m.pSize = a), (s = c.drawMarker(l.x[d], l.y[d], m)).attr("rel", g), s.attr("j", g), s.attr("index", e), s.node.setAttribute("default-marker-size", m.pSize); var v = new p(this.ctx); v.setSelectionFilter(s, e, g), this.addEvents(s), h && h.add(s) } else void 0 === n.globals.pointsArray[e] && (n.globals.pointsArray[e] = []), n.globals.pointsArray[e].push([l.x[d], l.y[d]]) } return h } }, { key: "getMarkerConfig", value: function (t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a = this.w, s = this.getMarkerStyle(e), r = a.globals.markers.size[e], n = a.config.markers; return null !== i && n.discrete.length && n.discrete.map((function (t) { t.seriesIndex === e && t.dataPointIndex === i && (s.pointStrokeColor = t.strokeColor, s.pointFillColor = t.fillColor, r = t.size) })), { pSize: r, pRadius: n.radius, pWidth: Array.isArray(n.strokeWidth) ? n.strokeWidth[e] : n.strokeWidth, pointStrokeColor: s.pointStrokeColor, pointFillColor: s.pointFillColor, shape: Array.isArray(n.shape) ? n.shape[e] : n.shape, class: t, pointStrokeOpacity: Array.isArray(n.strokeOpacity) ? n.strokeOpacity[e] : n.strokeOpacity, pointStrokeDashArray: Array.isArray(n.strokeDashArray) ? n.strokeDashArray[e] : n.strokeDashArray, pointFillOpacity: Array.isArray(n.fillOpacity) ? n.fillOpacity[e] : n.fillOpacity, seriesIndex: e } } }, { key: "addEvents", value: function (t) { var e = this.w, i = new b(this.ctx); t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this.ctx, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this.ctx, t)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this.ctx, t)), t.node.addEventListener("click", e.config.markers.onClick), t.node.addEventListener("dblclick", e.config.markers.onDblClick), t.node.addEventListener("touchstart", i.pathMouseDown.bind(this.ctx, t), { passive: !0 }) } }, { key: "getMarkerStyle", value: function (t) { var e = this.w, i = e.globals.markers.colors, a = e.config.markers.strokeColor || e.config.markers.strokeColors; return { pointStrokeColor: Array.isArray(a) ? a[t] : a, pointFillColor: Array.isArray(i) ? i[t] : i } } }]), t }(), T = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled } return a(t, [{ key: "draw", value: function (t, e, i) { var a = this.w, s = new b(this.ctx), r = i.realIndex, n = i.pointsPos, o = i.zRatio, l = i.elParent, h = s.group({ class: "apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type) }); if (h.attr("clip-path", "url(#gridRectMarkerMask".concat(a.globals.cuid, ")")), Array.isArray(n.x)) for (var c = 0; c < n.x.length; c++) { var d = e + 1, g = !0; 0 === e && 0 === c && (d = 0), 0 === e && 1 === c && (d = 1); var u = 0, f = a.globals.markers.size[r]; if (o !== 1 / 0) { f = a.globals.seriesZ[r][d] / o; var p = a.config.plotOptions.bubble; p.minBubbleRadius && f < p.minBubbleRadius && (f = p.minBubbleRadius), p.maxBubbleRadius && f > p.maxBubbleRadius && (f = p.maxBubbleRadius) } a.config.chart.animations.enabled || (u = f); var x = n.x[c], m = n.y[c]; if (u = u || 0, null !== m && void 0 !== a.globals.series[r][d] || (g = !1), g) { var v = this.drawPoint(x, m, u, f, r, d, e); h.add(v) } l.add(h) } } }, { key: "drawPoint", value: function (t, e, i, a, s, r, n) { var o = this.w, l = s, h = new x(this.ctx), c = new p(this.ctx), d = new L(this.ctx), g = new P(this.ctx), u = new b(this.ctx), f = g.getMarkerConfig("apexcharts-marker", l), m = d.fillPath({ seriesNumber: s, dataPointIndex: r, patternUnits: "objectBoundingBox", value: o.globals.series[s][n] }), v = u.drawCircle(i); if (o.config.series[l].data[r] && o.config.series[l].data[r].fillColor && (m = o.config.series[l].data[r].fillColor), v.attr({ cx: t, cy: e, fill: m, stroke: f.pointStrokeColor, r: a, "stroke-width": f.pWidth, "stroke-dasharray": f.pointStrokeDashArray, "stroke-opacity": f.pointStrokeOpacity }), o.config.chart.dropShadow.enabled) { var y = o.config.chart.dropShadow; c.dropShadow(v, y, s) } if (this.initialAnim && !o.globals.dataChanged && !o.globals.resized) { var w = o.config.chart.animations.speed; h.animateCircleRadius(v, 0, a, w, o.globals.easing, (function () { window.setTimeout((function () { h.animationCompleted(v) }), 100) })) } if (o.globals.dataChanged) if (this.dynamicAnim) { var k, A, S, C, T = o.config.chart.animations.dynamicAnimation.speed; null != (C = o.globals.previousPaths[s] && o.globals.previousPaths[s][n]) && (k = C.x, A = C.y, S = void 0 !== C.r ? C.r : a); for (var z = 0; z < o.globals.collapsedSeries.length; z++)o.globals.collapsedSeries[z].index === s && (T = 1, a = 0); 0 === t && 0 === e && (a = 0), h.animateCircle(v, { cx: k, cy: A, r: S }, { cx: t, cy: e, r: a }, T, o.globals.easing) } else v.attr({ r: a }); return v.attr({ rel: r, j: r, index: s, "default-marker-size": a }), c.setSelectionFilter(v, s, r), g.addEvents(v), v.node.classList.add("apexcharts-marker"), v } }, { key: "centerTextInBubble", value: function (t) { var e = this.w; return { y: t += parseInt(e.config.dataLabels.style.fontSize, 10) / 4 } } }]), t }(), z = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "dataLabelsCorrection", value: function (t, e, i, a, s, r, n) { var o = this.w, l = !1, h = new b(this.ctx).getTextRects(i, n), c = h.width, d = h.height; void 0 === o.globals.dataLabelsRects[a] && (o.globals.dataLabelsRects[a] = []), o.globals.dataLabelsRects[a].push({ x: t, y: e, width: c, height: d }); var g = o.globals.dataLabelsRects[a].length - 2, u = void 0 !== o.globals.lastDrawnDataLabelsIndexes[a] ? o.globals.lastDrawnDataLabelsIndexes[a][o.globals.lastDrawnDataLabelsIndexes[a].length - 1] : 0; if (void 0 !== o.globals.dataLabelsRects[a][g]) { var f = o.globals.dataLabelsRects[a][u]; (t > f.x + f.width + 2 || e > f.y + f.height + 2 || t + c < f.x) && (l = !0) } return (0 === s || r) && (l = !0), { x: t, y: e, textRects: h, drawnextLabel: l } } }, { key: "drawDataLabel", value: function (t, e, i) { var a = this, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2, r = this.w, n = new b(this.ctx), o = r.config.dataLabels, l = 0, h = 0, c = i, d = null; if (!o.enabled || !Array.isArray(t.x)) return d; d = n.group({ class: "apexcharts-data-labels" }); for (var g = 0; g < t.x.length; g++)if (l = t.x[g] + o.offsetX, h = t.y[g] + o.offsetY + s, !isNaN(l)) { 1 === i && 0 === g && (c = 0), 1 === i && 1 === g && (c = 1); var u = r.globals.series[e][c], f = "", p = function (t) { return r.config.dataLabels.formatter(t, { ctx: a.ctx, seriesIndex: e, dataPointIndex: c, w: r }) }; if ("bubble" === r.config.chart.type) { f = p(u = r.globals.seriesZ[e][c]), h = t.y[g]; var x = new T(this.ctx), m = x.centerTextInBubble(h, e, c); h = m.y } else void 0 !== u && (f = p(u)); this.plotDataLabelsText({ x: l, y: h, text: f, i: e, j: c, parent: d, offsetCorrection: !0, dataLabelsConfig: r.config.dataLabels }) } return d } }, { key: "plotDataLabelsText", value: function (t) { var e = this.w, i = new b(this.ctx), a = t.x, s = t.y, r = t.i, n = t.j, o = t.text, l = t.textAnchor, h = t.fontSize, c = t.parent, d = t.dataLabelsConfig, g = t.color, u = t.alwaysDrawDataLabel, f = t.offsetCorrection; if (!(Array.isArray(e.config.dataLabels.enabledOnSeries) && e.config.dataLabels.enabledOnSeries.indexOf(r) < 0)) { var x = { x: a, y: s, drawnextLabel: !0 }; f && (x = this.dataLabelsCorrection(a, s, o, r, n, u, parseInt(d.style.fontSize, 10))), e.globals.zoomed || (a = x.x, s = x.y), x.textRects; var m = e.globals.dataLabels.style.colors[r]; (("bar" === e.config.chart.type || "rangeBar" === e.config.chart.type) && e.config.plotOptions.bar.distributed || e.config.dataLabels.distributed) && (m = e.globals.dataLabels.style.colors[n]), g && (m = g); var v = d.offsetX, y = d.offsetY; if ("bar" !== e.config.chart.type && "rangeBar" !== e.config.chart.type || (v = 0, y = 0), x.drawnextLabel) { var w = i.drawText({ width: 100, height: parseInt(d.style.fontSize, 10), x: a + v, y: s + y, foreColor: m, textAnchor: l || d.textAnchor, text: o, fontSize: h || d.style.fontSize, fontFamily: d.style.fontFamily, fontWeight: d.style.fontWeight || "normal" }); if (w.attr({ class: "apexcharts-datalabel", cx: a, cy: s }), d.dropShadow.enabled) { var k = d.dropShadow; new p(this.ctx).dropShadow(w, k) } c.add(w), void 0 === e.globals.lastDrawnDataLabelsIndexes[r] && (e.globals.lastDrawnDataLabelsIndexes[r] = []), e.globals.lastDrawnDataLabelsIndexes[r].push(n) } } } }, { key: "addBackgroundToDataLabel", value: function (t, e) { var i = this.w, a = i.config.dataLabels.background, s = a.padding, r = a.padding / 2, n = e.width, o = e.height, l = new b(this.ctx).drawRect(e.x - s, e.y - r / 2, n + 2 * s, o + r, a.borderRadius, "transparent" === i.config.chart.background ? "#fff" : i.config.chart.background, a.opacity, a.borderWidth, a.borderColor); a.dropShadow.enabled && new p(this.ctx).dropShadow(l, a.dropShadow); return l } }, { key: "dataLabelsBackground", value: function () { var t = this.w; if ("bubble" !== t.config.chart.type) for (var e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i = 0; i < e.length; i++) { var a = e[i], s = a.getBBox(), r = null; if (s.width && s.height && (r = this.addBackgroundToDataLabel(a, s)), r) { a.parentNode.insertBefore(r.node, a); var n = a.getAttribute("fill"); t.config.chart.animations.enabled && !t.globals.resized && !t.globals.dataChanged ? r.animate().attr({ fill: n }) : r.attr({ fill: n }), a.setAttribute("fill", t.config.dataLabels.background.foreColor) } } } }, { key: "bringForward", value: function () { for (var t = this.w, e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i = t.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), a = 0; a < e.length; a++)i && i.insertBefore(e[a], i.nextSibling) } }]), t }(), I = function () { function t(i) { e(this, t), this.w = i.w, this.barCtx = i } return a(t, [{ key: "handleBarDataLabels", value: function (t) { var e = t.x, i = t.y, a = t.y1, s = t.y2, r = t.i, n = t.j, o = t.realIndex, l = t.series, h = t.barHeight, c = t.barWidth, d = t.barYPosition, g = t.visibleSeries, u = t.renderedPath, f = this.w, p = new b(this.barCtx.ctx), x = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[o] : this.barCtx.strokeWidth, m = e + parseFloat(c * g), v = i + parseFloat(h * g); f.globals.isXNumeric && !f.globals.isBarHorizontal && (m = e + parseFloat(c * (g + 1)), v = i + parseFloat(h * (g + 1)) - x); var y = e, w = i, k = {}, A = f.config.dataLabels, S = this.barCtx.barOptions.dataLabels; void 0 !== d && this.barCtx.isTimelineBar && (v = d, w = d); var C = A.offsetX, L = A.offsetY, P = { width: 0, height: 0 }; if (f.config.dataLabels.enabled) { var T = this.barCtx.series[r][n]; P = p.getTextRects(f.globals.yLabelFormatters[0](T), parseFloat(A.style.fontSize)) } var z = { x: e, y: i, i: r, j: n, renderedPath: u, bcx: m, bcy: v, barHeight: h, barWidth: c, textRects: P, strokeWidth: x, dataLabelsX: y, dataLabelsY: w, barDataLabelsConfig: S, offX: C, offY: L }; return k = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(z) : this.calculateColumnsDataLabelsPosition(z), u.attr({ cy: k.bcy, cx: k.bcx, j: n, val: l[r][n], barHeight: h, barWidth: c }), this.drawCalculatedDataLabels({ x: k.dataLabelsX, y: k.dataLabelsY, val: this.barCtx.isTimelineBar ? [a, s] : l[r][n], i: o, j: n, barWidth: c, barHeight: h, textRects: P, dataLabelsConfig: A }) } }, { key: "calculateColumnsDataLabelsPosition", value: function (t) { var e, i = this.w, a = t.i, s = t.j, r = t.y, n = t.bcx, o = t.barWidth, l = t.barHeight, h = t.textRects, c = t.dataLabelsY, d = t.barDataLabelsConfig, g = t.strokeWidth, u = t.offX, f = t.offY; l = Math.abs(l); var p = "vertical" === i.config.plotOptions.bar.dataLabels.orientation; n -= g / 2; var x = i.globals.gridWidth / i.globals.dataPoints; if (e = i.globals.isXNumeric ? n - o / 2 + u : n - x + o / 2 + u, p) { e = e + h.height / 2 - g / 2 - 2 } var b = this.barCtx.series[a][s] < 0, m = r; switch (this.barCtx.isReversed && (m = r - l + (b ? 2 * l : 0), r -= l), d.position) { case "center": c = p ? b ? m + l / 2 + f : m + l / 2 - f : b ? m - l / 2 + h.height / 2 + f : m + l / 2 + h.height / 2 - f; break; case "bottom": c = p ? b ? m + l + f : m + l - f : b ? m - l + h.height + g + f : m + l - h.height / 2 + g - f; break; case "top": c = p ? b ? m + f : m - f : b ? m - h.height / 2 - f : m + h.height + f }return i.config.chart.stacked || (c < 0 ? c = 0 + g : c + h.height / 3 > i.globals.gridHeight && (c = i.globals.gridHeight - g)), { bcx: n, bcy: r, dataLabelsX: e, dataLabelsY: c } } }, { key: "calculateBarsDataLabelsPosition", value: function (t) { var e = this.w, i = t.x, a = t.i, s = t.j, r = t.bcy, n = t.barHeight, o = t.barWidth, l = t.textRects, h = t.dataLabelsX, c = t.strokeWidth, d = t.barDataLabelsConfig, g = t.offX, u = t.offY, f = e.globals.gridHeight / e.globals.dataPoints; o = Math.abs(o); var p = r - (this.barCtx.isTimelineBar ? 0 : f) + n / 2 + l.height / 2 + u - 3, x = this.barCtx.series[a][s] < 0, b = i; switch (this.barCtx.isReversed && (b = i + o - (x ? 2 * o : 0), i = e.globals.gridWidth - o), d.position) { case "center": h = x ? b + o / 2 - g : Math.max(l.width / 2, b - o / 2) + g; break; case "bottom": h = x ? b + o - c - Math.round(l.width / 2) - g : b - o + c + Math.round(l.width / 2) + g; break; case "top": h = x ? b - c + Math.round(l.width / 2) - g : b - c - Math.round(l.width / 2) + g }return e.config.chart.stacked || (h < 0 ? h = h + l.width + c : h + l.width / 2 > e.globals.gridWidth && (h = e.globals.gridWidth - l.width - c)), { bcx: i, bcy: r, dataLabelsX: h, dataLabelsY: p } } }, { key: "drawCalculatedDataLabels", value: function (t) { var e = t.x, i = t.y, a = t.val, s = t.i, r = t.j, o = t.textRects, l = t.barHeight, h = t.barWidth, c = t.dataLabelsConfig, d = this.w, g = "rotate(0)"; "vertical" === d.config.plotOptions.bar.dataLabels.orientation && (g = "rotate(-90, ".concat(e, ", ").concat(i, ")")); var u = new z(this.barCtx.ctx), f = new b(this.barCtx.ctx), p = c.formatter, x = null, m = d.globals.collapsedSeriesIndices.indexOf(s) > -1; if (c.enabled && !m) { x = f.group({ class: "apexcharts-data-labels", transform: g }); var v = ""; void 0 !== a && (v = p(a, { seriesIndex: s, dataPointIndex: r, w: d })), 0 === a && d.config.chart.stacked && (v = ""); var y = d.globals.series[s][r] <= 0, w = d.config.plotOptions.bar.dataLabels.position; if ("vertical" === d.config.plotOptions.bar.dataLabels.orientation && ("top" === w && (c.textAnchor = y ? "end" : "start"), "center" === w && (c.textAnchor = "middle"), "bottom" === w && (c.textAnchor = y ? "end" : "start")), this.barCtx.isTimelineBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels) h < f.getTextRects(v, parseFloat(c.style.fontSize)).width && (v = ""); d.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? (h > 0 && o.width / 1.6 > h || h < 0 && o.width / 1.6 < h) && (v = "") : o.height / 1.6 > l && (v = "")); var k = n({}, c); this.barCtx.isHorizontal && a < 0 && ("start" === c.textAnchor ? k.textAnchor = "end" : "end" === c.textAnchor && (k.textAnchor = "start")), u.plotDataLabelsText({ x: e, y: i, text: v, i: s, j: r, parent: x, dataLabelsConfig: k, alwaysDrawDataLabel: !0, offsetCorrection: !0 }) } return x } }]), t }(), M = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w, this.legendInactiveClass = "legend-mouseover-inactive" } return a(t, [{ key: "getAllSeriesEls", value: function () { return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series") } }, { key: "getSeriesByName", value: function (t) { return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(f.escapeString(t), "']")) } }, { key: "isSeriesHidden", value: function (t) { var e = this.getSeriesByName(t), i = parseInt(e.getAttribute("data:realIndex"), 10); return { isHidden: e.classList.contains("apexcharts-series-collapsed"), realIndex: i } } }, { key: "addCollapsedClassToSeries", value: function (t, e) { var i = this.w; function a(i) { for (var a = 0; a < i.length; a++)i[a].index === e && t.node.classList.add("apexcharts-series-collapsed") } a(i.globals.collapsedSeries), a(i.globals.ancillaryCollapsedSeries) } }, { key: "toggleSeries", value: function (t) { var e = this.isSeriesHidden(t); return this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, e.isHidden), e.isHidden } }, { key: "showSeries", value: function (t) { var e = this.isSeriesHidden(t); e.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, !0) } }, { key: "hideSeries", value: function (t) { var e = this.isSeriesHidden(t); e.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, !1) } }, { key: "resetSeries", value: function () { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a = this.w, s = f.clone(a.globals.initialSeries); a.globals.previousPaths = [], i ? (a.globals.collapsedSeries = [], a.globals.ancillaryCollapsedSeries = [], a.globals.collapsedSeriesIndices = [], a.globals.ancillaryCollapsedSeriesIndices = []) : s = this.emptyCollapsedSeries(s), a.config.series = s, t && (e && (a.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled)) } }, { key: "emptyCollapsedSeries", value: function (t) { for (var e = this.w, i = 0; i < t.length; i++)e.globals.collapsedSeriesIndices.indexOf(i) > -1 && (t[i].data = []); return t } }, { key: "toggleSeriesOnHover", value: function (t, e) { var i = this.w, a = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels"); if ("mousemove" === t.type) { var s = parseInt(e.getAttribute("rel"), 10) - 1, r = null, n = null; i.globals.axisCharts || "radialBar" === i.config.chart.type ? i.globals.axisCharts ? (r = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(s, "']")), n = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(s, "']"))) : r = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s + 1, "']")) : r = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s + 1, "'] path")); for (var o = 0; o < a.length; o++)a[o].classList.add(this.legendInactiveClass); null !== r && (i.globals.axisCharts || r.parentNode.classList.remove(this.legendInactiveClass), r.classList.remove(this.legendInactiveClass), null !== n && n.classList.remove(this.legendInactiveClass)) } else if ("mouseout" === t.type) for (var l = 0; l < a.length; l++)a[l].classList.remove(this.legendInactiveClass) } }, { key: "highlightRangeInSeries", value: function (t, e) { var i = this, a = this.w, s = a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), r = function (t) { for (var e = 0; e < s.length; e++)s[e].classList[t](i.legendInactiveClass) }; if ("mousemove" === t.type) { var n = parseInt(e.getAttribute("rel"), 10) - 1; r("add"), function (t) { for (var e = 0; e < s.length; e++) { var a = parseInt(s[e].getAttribute("val"), 10); a >= t.from && a <= t.to && s[e].classList.remove(i.legendInactiveClass) } }(a.config.plotOptions.heatmap.colorScale.ranges[n]) } else "mouseout" === t.type && r("remove") } }, { key: "getActiveConfigSeriesIndex", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = this.w, i = 0; if (e.config.series.length > 1) for (var a = e.config.series.map((function (i, a) { var s = !1; return t && (s = "bar" === e.config.series[a].type || "column" === e.config.series[a].type), i.data && i.data.length > 0 && !s ? a : -1 })), s = 0; s < a.length; s++)if (-1 !== a[s]) { i = a[s]; break } return i } }, { key: "getPreviousPaths", value: function () { var t = this.w; function e(e, i, a) { for (var s = e[i].childNodes, r = { type: a, paths: [], realIndex: e[i].getAttribute("data:realIndex") }, n = 0; n < s.length; n++)if (s[n].hasAttribute("pathTo")) { var o = s[n].getAttribute("pathTo"); r.paths.push({ d: o }) } t.globals.previousPaths.push(r) } t.globals.previousPaths = [];["line", "area", "bar", "rangebar", "candlestick", "radar"].forEach((function (i) { for (var a, s = (a = i, t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a, "-series .apexcharts-series"))), r = 0; r < s.length; r++)e(s, r, i) })), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter"); var i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type, " .apexcharts-series")); if (i.length > 0) for (var a = function (e) { for (var i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(e, "'] rect")), a = [], s = function (t) { var e = function (e) { return i[t].getAttribute(e) }, s = { x: parseFloat(e("x")), y: parseFloat(e("y")), width: parseFloat(e("width")), height: parseFloat(e("height")) }; a.push({ rect: s, color: i[t].getAttribute("color") }) }, r = 0; r < i.length; r++)s(r); t.globals.previousPaths.push(a) }, s = 0; s < i.length; s++)a(s); t.globals.axisCharts || (t.globals.previousPaths = t.globals.series) } }, { key: "handlePrevBubbleScatterPaths", value: function (t) { var e = this.w, i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series")); if (i.length > 0) for (var a = 0; a < i.length; a++) { for (var s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series[data\\:realIndex='").concat(a, "'] circle")), r = [], n = 0; n < s.length; n++)r.push({ x: s[n].getAttribute("cx"), y: s[n].getAttribute("cy"), r: s[n].getAttribute("r") }); e.globals.previousPaths.push(r) } } }, { key: "clearPreviousPaths", value: function () { var t = this.w; t.globals.previousPaths = [], t.globals.allSeriesCollapsed = !1 } }, { key: "handleNoData", value: function () { var t = this.w, e = t.config.noData, i = new b(this.ctx), a = t.globals.svgWidth / 2, s = t.globals.svgHeight / 2, r = "middle"; if (t.globals.noData = !0, t.globals.animationEnded = !0, "left" === e.align ? (a = 10, r = "start") : "right" === e.align && (a = t.globals.svgWidth - 10, r = "end"), "top" === e.verticalAlign ? s = 50 : "bottom" === e.verticalAlign && (s = t.globals.svgHeight - 50), a += e.offsetX, s = s + parseInt(e.style.fontSize, 10) + 2 + e.offsetY, void 0 !== e.text && "" !== e.text) { var n = i.drawText({ x: a, y: s, text: e.text, textAnchor: r, fontSize: e.style.fontSize, fontFamily: e.style.fontFamily, foreColor: e.style.color, opacity: 1, class: "apexcharts-text-nodata" }); t.globals.dom.Paper.add(n) } } }, { key: "setNullSeriesToZeroValues", value: function (t) { for (var e = this.w, i = 0; i < t.length; i++)if (0 === t[i].length) for (var a = 0; a < t[e.globals.maxValsInArrayIndex].length; a++)t[i].push(0); return t } }, { key: "hasAllSeriesEqualX", value: function () { for (var t = !0, e = this.w, i = this.filteredSeriesX(), a = 0; a < i.length - 1; a++)if (i[a][0] !== i[a + 1][0]) { t = !1; break } return e.globals.allSeriesHasEqualX = t, t } }, { key: "filteredSeriesX", value: function () { var t = this.w.globals.seriesX.map((function (t) { return t.length > 0 ? t : [] })); return t } }]), t }(), E = function () { function t(i) { e(this, t), this.w = i.w, this.barCtx = i } return a(t, [{ key: "initVariables", value: function (t) { var e = this.w; this.barCtx.series = t, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1; for (var i = 0; i < t.length; i++)if (t[i].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t[i].length), e.globals.isXNumeric) for (var a = 0; a < t[i].length; a++)e.globals.seriesX[i][a] > e.globals.minX && e.globals.seriesX[i][a] < e.globals.maxX && this.barCtx.visibleItems++; else this.barCtx.visibleItems = e.globals.dataPoints; 0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1) } }, { key: "initialPositions", value: function () { var t, e, i, a, s, r, n, o, l = this.w, h = l.globals.dataPoints; this.barCtx.isTimelineBar && (h = l.globals.labels.length); var c = this.barCtx.seriesLen; if (l.config.plotOptions.bar.rangeBarGroupRows && (c = 1), this.barCtx.isHorizontal) s = (i = l.globals.gridHeight / h) / c, l.globals.isXNumeric && (s = (i = l.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), s = s * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, o = this.barCtx.baseLineInvertedY + l.globals.padHorizontal + (this.barCtx.isReversed ? l.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), e = (i - s * this.barCtx.seriesLen) / 2; else { if (a = l.globals.gridWidth / this.barCtx.visibleItems, l.config.xaxis.convertedCatToNumeric && (a = l.globals.gridWidth / l.globals.dataPoints), r = a / this.barCtx.seriesLen * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, l.globals.isXNumeric) { var d = this.barCtx.xRatio; l.config.xaxis.convertedCatToNumeric && (d = this.barCtx.initialXRatio), l.globals.minXDiff && .5 !== l.globals.minXDiff && l.globals.minXDiff / d > 0 && (a = l.globals.minXDiff / d), (r = a / this.barCtx.seriesLen * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (r = 1) } n = l.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.yaxisIndex] - (this.barCtx.isReversed ? l.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.yaxisIndex] : 0), t = l.globals.padHorizontal + (a - r * this.barCtx.seriesLen) / 2 } return { x: t, y: e, yDivision: i, xDivision: a, barHeight: s, barWidth: r, zeroH: n, zeroW: o } } }, { key: "getPathFillColor", value: function (t, e, i, a) { var s = this.w, r = new L(this.barCtx.ctx), n = null, o = this.barCtx.barOptions.distributed ? i : e; this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map((function (a) { t[e][i] >= a.from && t[e][i] <= a.to && (n = a.color) })); return s.config.series[e].data[i] && s.config.series[e].data[i].fillColor && (n = s.config.series[e].data[i].fillColor), r.fillPath({ seriesNumber: this.barCtx.barOptions.distributed ? o : a, dataPointIndex: i, color: n, value: t[e][i] }) } }, { key: "getStrokeWidth", value: function (t, e, i) { var a = 0, s = this.w; return void 0 === this.barCtx.series[t][e] || null === this.barCtx.series[t][e] ? this.barCtx.isNullValue = !0 : this.barCtx.isNullValue = !1, s.config.stroke.show && (this.barCtx.isNullValue || (a = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i] : this.barCtx.strokeWidth)), a } }, { key: "barBackground", value: function (t) { var e = t.j, i = t.i, a = t.x1, s = t.x2, r = t.y1, n = t.y2, o = t.elSeries, l = this.w, h = new b(this.barCtx.ctx), c = new M(this.barCtx.ctx).getActiveConfigSeriesIndex(); if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && c === i) { e >= this.barCtx.barOptions.colors.backgroundBarColors.length && (e -= this.barCtx.barOptions.colors.backgroundBarColors.length); var d = this.barCtx.barOptions.colors.backgroundBarColors[e], g = h.drawRect(void 0 !== a ? a : 0, void 0 !== r ? r : 0, void 0 !== s ? s : l.globals.gridWidth, void 0 !== n ? n : l.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, d, this.barCtx.barOptions.colors.backgroundBarOpacity); o.add(g), g.node.classList.add("apexcharts-backgroundBar") } } }, { key: "getColumnPaths", value: function (t) { var e = t.barWidth, i = t.barXPosition, a = t.yRatio, s = t.y1, r = t.y2, n = t.strokeWidth, o = t.series, l = t.realIndex, h = t.i, c = t.j, d = t.w, g = new b(this.barCtx.ctx); (n = Array.isArray(n) ? n[l] : n) || (n = 0); var u = { barWidth: e, strokeWidth: n, yRatio: a, barXPosition: i, y1: s, y2: r }, f = this.getRoundedBars(d, u, o, h, c), p = i, x = i + e, m = g.move(p, f.y1), v = g.move(p, f.y1); return d.globals.previousPaths.length > 0 && (v = this.barCtx.getPreviousPath(l, c, !1)), { pathTo: m = m + g.line(p, f.y2) + f.endingPath + g.line(x - n, f.y2) + g.line(x - n, f.y1) + f.startingPath + "z", pathFrom: v = v + g.line(p, s) + g.line(x - n, s) + g.line(x - n, s) + g.line(x - n, s) + g.line(p, s) } } }, { key: "getBarpaths", value: function (t) { var e = t.barYPosition, i = t.barHeight, a = t.x1, s = t.x2, r = t.strokeWidth, n = t.series, o = t.realIndex, l = t.i, h = t.j, c = t.w, d = new b(this.barCtx.ctx); (r = Array.isArray(r) ? r[o] : r) || (r = 0); var g = { barHeight: i, strokeWidth: r, barYPosition: e, x2: s, x1: a }, u = this.getRoundedBars(c, g, n, l, h), f = d.move(u.x1, e), p = d.move(u.x1, e); c.globals.previousPaths.length > 0 && (p = this.barCtx.getPreviousPath(o, h, !1)); var x = e, m = e + i; return { pathTo: f = f + d.line(u.x2, x) + u.endingPath + d.line(u.x2, m - r) + d.line(u.x1, m - r) + u.startingPath + "z", pathFrom: p = p + d.line(a, x) + d.line(a, m - r) + d.line(a, m - r) + d.line(a, m - r) + d.line(a, x) } } }, { key: "getRoundedBars", value: function (t, e, i, a, s) { var r = new b(this.barCtx.ctx), n = Array.isArray(e.strokeWidth) ? e.strokeWidth[a] : e.strokeWidth; if (n || (n = 0), this.barCtx.isHorizontal) { var o = null, l = "", h = e.x2, c = e.x1; if (void 0 !== i[a][s] || null !== i[a][s]) { var d = i[a][s] < 0, g = e.barHeight / 2 - n; switch (d && (g = -e.barHeight / 2 - n), g > Math.abs(h - c) && (g = Math.abs(h - c)), "rounded" === this.barCtx.barOptions.endingShape && (h = e.x2 - g / 2), "rounded" === this.barCtx.barOptions.startingShape && (c = e.x1 + g / 2), this.barCtx.barOptions.endingShape) { case "flat": o = r.line(h, e.barYPosition + e.barHeight - n); break; case "rounded": o = r.quadraticCurve(h + g, e.barYPosition + (e.barHeight - n) / 2, h, e.barYPosition + e.barHeight - n) }switch (this.barCtx.barOptions.startingShape) { case "flat": l = r.line(c, e.barYPosition + e.barHeight - n); break; case "rounded": l = r.quadraticCurve(c - g, e.barYPosition + e.barHeight / 2, c, e.barYPosition) } } return { endingPath: o, startingPath: l, x2: h, x1: c } } var u = null, f = "", p = e.y2, x = e.y1; if (void 0 !== i[a][s] || null !== i[a][s]) { var m = i[a][s] < 0, v = e.barWidth / 2 - n; switch (m && (v = -e.barWidth / 2 - n), v > Math.abs(p - x) && (v = Math.abs(p - x)), "rounded" === this.barCtx.barOptions.endingShape && (p += v / 2), "rounded" === this.barCtx.barOptions.startingShape && (x -= v / 2), this.barCtx.barOptions.endingShape) { case "flat": u = r.line(e.barXPosition + e.barWidth - n, p); break; case "rounded": u = r.quadraticCurve(e.barXPosition + (e.barWidth - n) / 2, p - v, e.barXPosition + e.barWidth - n, p) }switch (this.barCtx.barOptions.startingShape) { case "flat": f = r.line(e.barXPosition + e.barWidth - n, x); break; case "rounded": f = r.quadraticCurve(e.barXPosition + (e.barWidth - n) / 2, x + v, e.barXPosition, x) } } return { endingPath: u, startingPath: f, y2: p, y1: x } } }]), t }(), X = function () { function t(i, a) { e(this, t), this.ctx = i, this.w = i.w; var s = this.w; this.barOptions = s.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = s.config.stroke.width, this.isNullValue = !1, this.isTimelineBar = "datetime" === s.config.xaxis.type && s.globals.seriesRangeBarTimeline.length, this.xyRatios = a, null !== this.xyRatios && (this.xRatio = a.xRatio, this.initialXRatio = a.initialXRatio, this.yRatio = a.yRatio, this.invertedXRatio = a.invertedXRatio, this.invertedYRatio = a.invertedYRatio, this.baseLineY = a.baseLineY, this.baseLineInvertedY = a.baseLineInvertedY), this.yaxisIndex = 0, this.seriesLen = 0, this.barHelpers = new E(this) } return a(t, [{ key: "draw", value: function (t, e) { var i = this.w, a = new b(this.ctx), s = new y(this.ctx, i); t = s.getLogSeries(t), this.series = t, this.yRatio = s.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t); var r = a.group({ class: "apexcharts-bar-series apexcharts-plot-series" }); i.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering."); for (var o = 0, l = 0; o < t.length; o++, l++) { var h, c, d, g, u = void 0, p = void 0, x = [], m = [], v = i.globals.comboCharts ? e[o] : o, w = a.group({ class: "apexcharts-series", rel: o + 1, seriesName: f.escapeString(i.globals.seriesNames[v]), "data:realIndex": v }); this.ctx.series.addCollapsedClassToSeries(w, v), t[o].length > 0 && (this.visibleI = this.visibleI + 1); var k = 0, A = 0; this.yRatio.length > 1 && (this.yaxisIndex = v), this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed; var S = this.barHelpers.initialPositions(); p = S.y, k = S.barHeight, c = S.yDivision, g = S.zeroW, u = S.x, A = S.barWidth, h = S.xDivision, d = S.zeroH, this.horizontal || m.push(u + A / 2); for (var C = a.group({ class: "apexcharts-datalabels", "data:realIndex": v }), L = 0; L < i.globals.dataPoints; L++) { var P = this.barHelpers.getStrokeWidth(o, L, v), T = null, z = { indexes: { i: o, j: L, realIndex: v, bc: l }, x: u, y: p, strokeWidth: P, elSeries: w }; this.isHorizontal ? (T = this.drawBarPaths(n(n({}, z), {}, { barHeight: k, zeroW: g, yDivision: c })), A = this.series[o][L] / this.invertedYRatio) : (T = this.drawColumnPaths(n(n({}, z), {}, { xDivision: h, barWidth: A, zeroH: d })), k = this.series[o][L] / this.yRatio[this.yaxisIndex]), p = T.y, u = T.x, L > 0 && m.push(u + A / 2), x.push(p); var I = this.barHelpers.getPathFillColor(t, o, L, v); this.renderSeries({ realIndex: v, pathFill: I, j: L, i: o, pathFrom: T.pathFrom, pathTo: T.pathTo, strokeWidth: P, elSeries: w, x: u, y: p, series: t, barHeight: k, barWidth: A, elDataLabelsWrap: C, visibleSeries: this.visibleI, type: "bar" }) } i.globals.seriesXvalues[v] = m, i.globals.seriesYvalues[v] = x, r.add(w) } return r } }, { key: "renderSeries", value: function (t) { var e = t.realIndex, i = t.pathFill, a = t.lineFill, s = t.j, r = t.i, n = t.pathFrom, o = t.pathTo, l = t.strokeWidth, h = t.elSeries, c = t.x, d = t.y, g = t.y1, u = t.y2, f = t.series, x = t.barHeight, m = t.barWidth, v = t.barYPosition, y = t.elDataLabelsWrap, w = t.visibleSeries, k = t.type, A = this.w, S = new b(this.ctx); a || (a = this.barOptions.distributed ? A.globals.stroke.colors[s] : A.globals.stroke.colors[e]), A.config.series[r].data[s] && A.config.series[r].data[s].strokeColor && (a = A.config.series[r].data[s].strokeColor), this.isNullValue && (i = "none"); var C = s / A.config.chart.animations.animateGradually.delay * (A.config.chart.animations.speed / A.globals.dataPoints) / 2.4, L = S.renderPaths({ i: r, j: s, realIndex: e, pathFrom: n, pathTo: o, stroke: a, strokeWidth: l, strokeLineCap: A.config.stroke.lineCap, fill: i, animationDelay: C, initialSpeed: A.config.chart.animations.speed, dataChangeSpeed: A.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(k, "-area") }); L.attr("clip-path", "url(#gridRectMask".concat(A.globals.cuid, ")")), void 0 !== g && void 0 !== u && (L.attr("data-range-y1", g), L.attr("data-range-y2", u)), new p(this.ctx).setSelectionFilter(L, e, s), h.add(L); var P = new I(this).handleBarDataLabels({ x: c, y: d, y1: g, y2: u, i: r, j: s, series: f, realIndex: e, barHeight: x, barWidth: m, barYPosition: v, renderedPath: L, visibleSeries: w }); return null !== P && y.add(P), h.add(y), h } }, { key: "drawBarPaths", value: function (t) { var e = t.indexes, i = t.barHeight, a = t.strokeWidth, s = t.zeroW, r = t.x, n = t.y, o = t.yDivision, l = t.elSeries, h = this.w, c = e.i, d = e.j; h.globals.isXNumeric && (n = (h.globals.seriesX[c][d] - h.globals.minX) / this.invertedXRatio - i); var g = n + i * this.visibleI; r = void 0 === this.series[c][d] || null === this.series[c][d] ? s : s + this.series[c][d] / this.invertedYRatio - 2 * (this.isReversed ? this.series[c][d] / this.invertedYRatio : 0); var u = this.barHelpers.getBarpaths({ barYPosition: g, barHeight: i, x1: s, x2: r, strokeWidth: a, series: this.series, realIndex: e.realIndex, i: c, j: d, w: h }); return h.globals.isXNumeric || (n += o), this.barHelpers.barBackground({ j: d, i: c, y1: g - i * this.visibleI, y2: i * this.seriesLen, elSeries: l }), { pathTo: u.pathTo, pathFrom: u.pathFrom, x: r, y: n, barYPosition: g } } }, { key: "drawColumnPaths", value: function (t) { var e = t.indexes, i = t.x, a = t.y, s = t.xDivision, r = t.barWidth, n = t.zeroH, o = t.strokeWidth, l = t.elSeries, h = this.w, c = e.realIndex, d = e.i, g = e.j, u = e.bc; if (h.globals.isXNumeric) { var f = c; h.globals.seriesX[c].length || (f = h.globals.maxValsInArrayIndex), i = (h.globals.seriesX[f][g] - h.globals.minX) / this.xRatio - r * this.seriesLen / 2 } var p = i + r * this.visibleI; a = void 0 === this.series[d][g] || null === this.series[d][g] ? n : n - this.series[d][g] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[d][g] / this.yRatio[this.yaxisIndex] : 0); var x = this.barHelpers.getColumnPaths({ barXPosition: p, barWidth: r, y1: n, y2: a, strokeWidth: o, series: this.series, realIndex: e.realIndex, i: d, j: g, w: h }); return h.globals.isXNumeric || (i += s), this.barHelpers.barBackground({ bc: u, j: g, i: d, x1: p - o / 2 - r * this.visibleI, x2: r * this.seriesLen + o / 2, elSeries: l }), { pathTo: x.pathTo, pathFrom: x.pathFrom, x: i, y: a, barXPosition: p } } }, { key: "getPreviousPath", value: function (t, e) { for (var i, a = this.w, s = 0; s < a.globals.previousPaths.length; s++) { var r = a.globals.previousPaths[s]; r.paths && r.paths.length > 0 && parseInt(r.realIndex, 10) === parseInt(t, 10) && void 0 !== a.globals.previousPaths[s].paths[e] && (i = a.globals.previousPaths[s].paths[e].d) } return i } }]), t }(), Y = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334] } return a(t, [{ key: "isValidDate", value: function (t) { return !isNaN(this.parseDate(t)) } }, { key: "getTimeStamp", value: function (t) { return Date.parse(t) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t).toISOString().substr(0, 25)).getTime() : new Date(t).getTime() : t } }, { key: "getDate", value: function (t) { return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t).toUTCString()) : new Date(t) } }, { key: "parseDate", value: function (t) { var e = Date.parse(t); if (!isNaN(e)) return this.getTimeStamp(t); var i = Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " ")); return i = this.getTimeStamp(i) } }, { key: "parseDateWithTimezone", value: function (t) { return Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " ")) } }, { key: "formatDate", value: function (t, e) { var i = this.w.globals.locale, a = this.w.config.xaxis.labels.datetimeUTC, s = ["\0"].concat(g(i.months)), r = ["\x01"].concat(g(i.shortMonths)), n = ["\x02"].concat(g(i.days)), o = ["\x03"].concat(g(i.shortDays)); function l(t, e) { var i = t + ""; for (e = e || 2; i.length < e;)i = "0" + i; return i } var h = a ? t.getUTCFullYear() : t.getFullYear(); e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, "$1" + h)).replace(/(^|[^\\])yy/g, "$1" + h.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + h); var c = (a ? t.getUTCMonth() : t.getMonth()) + 1; e = (e = (e = (e = e.replace(/(^|[^\\])MMMM+/g, "$1" + s[0])).replace(/(^|[^\\])MMM/g, "$1" + r[0])).replace(/(^|[^\\])MM/g, "$1" + l(c))).replace(/(^|[^\\])M/g, "$1" + c); var d = a ? t.getUTCDate() : t.getDate(); e = (e = (e = (e = e.replace(/(^|[^\\])dddd+/g, "$1" + n[0])).replace(/(^|[^\\])ddd/g, "$1" + o[0])).replace(/(^|[^\\])dd/g, "$1" + l(d))).replace(/(^|[^\\])d/g, "$1" + d); var u = a ? t.getUTCHours() : t.getHours(), f = u > 12 ? u - 12 : 0 === u ? 12 : u; e = (e = (e = (e = e.replace(/(^|[^\\])HH+/g, "$1" + l(u))).replace(/(^|[^\\])H/g, "$1" + u)).replace(/(^|[^\\])hh+/g, "$1" + l(f))).replace(/(^|[^\\])h/g, "$1" + f); var p = a ? t.getUTCMinutes() : t.getMinutes(); e = (e = e.replace(/(^|[^\\])mm+/g, "$1" + l(p))).replace(/(^|[^\\])m/g, "$1" + p); var x = a ? t.getUTCSeconds() : t.getSeconds(); e = (e = e.replace(/(^|[^\\])ss+/g, "$1" + l(x))).replace(/(^|[^\\])s/g, "$1" + x); var b = a ? t.getUTCMilliseconds() : t.getMilliseconds(); e = e.replace(/(^|[^\\])fff+/g, "$1" + l(b, 3)), b = Math.round(b / 10), e = e.replace(/(^|[^\\])ff/g, "$1" + l(b)), b = Math.round(b / 10); var m = u < 12 ? "AM" : "PM"; e = (e = (e = e.replace(/(^|[^\\])f/g, "$1" + b)).replace(/(^|[^\\])TT+/g, "$1" + m)).replace(/(^|[^\\])T/g, "$1" + m.charAt(0)); var v = m.toLowerCase(); e = (e = e.replace(/(^|[^\\])tt+/g, "$1" + v)).replace(/(^|[^\\])t/g, "$1" + v.charAt(0)); var y = -t.getTimezoneOffset(), w = a || !y ? "Z" : y > 0 ? "+" : "-"; if (!a) { var k = (y = Math.abs(y)) % 60; w += l(Math.floor(y / 60)) + ":" + l(k) } e = e.replace(/(^|[^\\])K/g, "$1" + w); var A = (a ? t.getUTCDay() : t.getDay()) + 1; return e = (e = (e = (e = (e = e.replace(new RegExp(n[0], "g"), n[A])).replace(new RegExp(o[0], "g"), o[A])).replace(new RegExp(s[0], "g"), s[c])).replace(new RegExp(r[0], "g"), r[c])).replace(/\\(.)/g, "$1") } }, { key: "getTimeUnitsfromTimestamp", value: function (t, e, i) { var a = this.w; void 0 !== a.config.xaxis.min && (t = a.config.xaxis.min), void 0 !== a.config.xaxis.max && (e = a.config.xaxis.max); var s = this.getDate(t), r = this.getDate(e), n = this.formatDate(s, "yyyy MM dd HH mm ss").split(" "), o = this.formatDate(r, "yyyy MM dd HH mm ss").split(" "); return { minSecond: parseInt(n[5], 10), maxSecond: parseInt(o[5], 10), minMinute: parseInt(n[4], 10), maxMinute: parseInt(o[4], 10), minHour: parseInt(n[3], 10), maxHour: parseInt(o[3], 10), minDate: parseInt(n[2], 10), maxDate: parseInt(o[2], 10), minMonth: parseInt(n[1], 10) - 1, maxMonth: parseInt(o[1], 10) - 1, minYear: parseInt(n[0], 10), maxYear: parseInt(o[0], 10) } } }, { key: "isLeapYear", value: function (t) { return t % 4 == 0 && t % 100 != 0 || t % 400 == 0 } }, { key: "calculcateLastDaysOfMonth", value: function (t, e, i) { return this.determineDaysOfMonths(t, e) - i } }, { key: "determineDaysOfYear", value: function (t) { var e = 365; return this.isLeapYear(t) && (e = 366), e } }, { key: "determineRemainingDaysOfYear", value: function (t, e, i) { var a = this.daysCntOfYear[e] + i; return e > 1 && this.isLeapYear() && a++, a } }, { key: "determineDaysOfMonths", value: function (t, e) { var i = 30; switch (t = f.monthMod(t), !0) { case this.months30.indexOf(t) > -1: 2 === t && (i = this.isLeapYear(e) ? 29 : 28); break; case this.months31.indexOf(t) > -1: default: i = 31 }return i } }]), t }(), F = function (t) { o(s, t); var i = d(s); function s() { return e(this, s), i.apply(this, arguments) } return a(s, [{ key: "draw", value: function (t, e) { var i = this.w, a = new b(this.ctx); this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t, this.seriesRangeStart = i.globals.seriesRangeStart, this.seriesRangeEnd = i.globals.seriesRangeEnd, this.barHelpers.initVariables(t); for (var s = a.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" }), r = 0; r < t.length; r++) { var o, l, h, c = void 0, d = void 0, g = void 0, u = i.globals.comboCharts ? e[r] : r, p = a.group({ class: "apexcharts-series", seriesName: f.escapeString(i.globals.seriesNames[u]), rel: r + 1, "data:realIndex": u }); t[r].length > 0 && (this.visibleI = this.visibleI + 1); var x = 0, m = 0; this.yRatio.length > 1 && (this.yaxisIndex = u); var v = this.barHelpers.initialPositions(); d = v.y, h = v.zeroW, c = v.x, m = v.barWidth, o = v.xDivision, l = v.zeroH; for (var y = a.group({ class: "apexcharts-datalabels", "data:realIndex": u }), w = 0; w < i.globals.dataPoints; w++) { var k = this.barHelpers.getStrokeWidth(r, w, u), A = this.seriesRangeStart[r][w], S = this.seriesRangeEnd[r][w], C = null, L = null, P = { x: c, y: d, strokeWidth: k, elSeries: p }; if (g = v.yDivision, x = v.barHeight, this.isHorizontal) { L = d + x * this.visibleI; var T = this.seriesLen; i.config.plotOptions.bar.rangeBarGroupRows && (T = 1); var z = (g - x * T) / 2; if (void 0 === i.config.series[r].data[w]) break; if (this.isTimelineBar && i.config.series[r].data[w].x) { var I = this.detectOverlappingBars({ i: r, j: w, barYPosition: L, srty: z, barHeight: x, yDivision: g, initPositions: v }); x = I.barHeight, L = I.barYPosition } m = (C = this.drawRangeBarPaths(n({ indexes: { i: r, j: w, realIndex: u }, barHeight: x, barYPosition: L, zeroW: h, yDivision: g, y1: A, y2: S }, P))).barWidth } else x = (C = this.drawRangeColumnPaths(n({ indexes: { i: r, j: w, realIndex: u }, zeroH: l, barWidth: m, xDivision: o }, P))).barHeight; d = C.y, c = C.x; var M = this.barHelpers.getPathFillColor(t, r, w, u), E = i.globals.stroke.colors[u]; this.renderSeries({ realIndex: u, pathFill: M, lineFill: E, j: w, i: r, x: c, y: d, y1: A, y2: S, pathFrom: C.pathFrom, pathTo: C.pathTo, strokeWidth: k, elSeries: p, series: t, barHeight: x, barYPosition: L, barWidth: m, elDataLabelsWrap: y, visibleSeries: this.visibleI, type: "rangebar" }) } s.add(p) } return s } }, { key: "detectOverlappingBars", value: function (t) { var e = t.i, i = t.j, a = t.barYPosition, s = t.srty, r = t.barHeight, n = t.yDivision, o = t.initPositions, l = this.w, h = [], c = l.config.series[e].data[i].rangeName, d = l.config.series[e].data[i].x, g = l.globals.labels.indexOf(d), u = l.globals.seriesRangeBarTimeline[e].findIndex((function (t) { return t.x === d && t.overlaps.length > 0 })); return a = l.config.plotOptions.bar.rangeBarGroupRows ? s + n * g : s + r * this.visibleI + n * g, u > -1 && !l.config.plotOptions.bar.rangeBarOverlap && (h = l.globals.seriesRangeBarTimeline[e][u].overlaps).indexOf(c) > -1 && (a = (r = o.barHeight / h.length) * this.visibleI + n * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + r * (this.visibleI + h.indexOf(c)) + n * g), { barYPosition: a, barHeight: r } } }, { key: "drawRangeColumnPaths", value: function (t) { var e = t.indexes, i = t.x, a = (t.strokeWidth, t.xDivision), s = t.barWidth, r = t.zeroH, n = this.w, o = e.i, l = e.j, h = this.yRatio[this.yaxisIndex], c = e.realIndex, d = this.getRangeValue(c, l), g = Math.min(d.start, d.end), u = Math.max(d.start, d.end); n.globals.isXNumeric && (i = (n.globals.seriesX[o][l] - n.globals.minX) / this.xRatio - s / 2); var f = i + s * this.visibleI; void 0 === this.series[o][l] || null === this.series[o][l] ? g = r : (g = r - g / h, u = r - u / h); var p = Math.abs(u - g), x = this.barHelpers.getColumnPaths({ barXPosition: f, barWidth: s, y1: g, y2: u, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, realIndex: e.realIndex, i: c, j: l, w: n }); return n.globals.isXNumeric || (i += a), { pathTo: x.pathTo, pathFrom: x.pathFrom, barHeight: p, x: i, y: u, barXPosition: f } } }, { key: "drawRangeBarPaths", value: function (t) { var e = t.indexes, i = t.y, a = t.y1, s = t.y2, r = t.yDivision, n = t.barHeight, o = t.barYPosition, l = t.zeroW, h = this.w, c = l + a / this.invertedYRatio, d = l + s / this.invertedYRatio, g = Math.abs(d - c), u = this.barHelpers.getBarpaths({ barYPosition: o, barHeight: n, x1: c, x2: d, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, i: e.realIndex, realIndex: e.realIndex, j: e.j, w: h }); return h.globals.isXNumeric || (i += r), { pathTo: u.pathTo, pathFrom: u.pathFrom, barWidth: g, x: d, y: i } } }, { key: "getRangeValue", value: function (t, e) { var i = this.w; return { start: i.globals.seriesRangeStart[t][e], end: i.globals.seriesRangeEnd[t][e] } } }, { key: "getTooltipValues", value: function (t) { var e = t.ctx, i = t.seriesIndex, a = t.dataPointIndex, s = t.y1, r = t.y2, n = t.w, o = n.globals.seriesRangeStart[i][a], l = n.globals.seriesRangeEnd[i][a], h = n.globals.labels[a], c = n.config.series[i].name ? n.config.series[i].name : "", d = n.config.tooltip.y.formatter, g = n.config.tooltip.y.title.formatter, u = { w: n, seriesIndex: i, dataPointIndex: a }; "function" == typeof g && (c = g(c, u)), s && r && (o = s, l = r, n.config.series[i].data[a].x && (h = n.config.series[i].data[a].x + ":"), "function" == typeof d && (h = d(h, u))); var f = "", p = "", x = n.globals.colors[i]; if (void 0 === n.config.tooltip.x.formatter) if ("datetime" === n.config.xaxis.type) { var b = new Y(e); f = b.formatDate(b.getDate(o), n.config.tooltip.x.format), p = b.formatDate(b.getDate(l), n.config.tooltip.x.format) } else f = o, p = l; else f = n.config.tooltip.x.formatter(o), p = n.config.tooltip.x.formatter(l); return { start: o, end: l, startVal: f, endVal: p, ylabel: h, color: x, seriesName: c } } }, { key: "buildCustomTooltipHTML", value: function (t) { var e = t.color, i = t.seriesName; return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e + '">' + (i || "") + '</span></div><div> <span class="category">' + t.ylabel + ' </span> <span class="value start-value">' + t.start + '</span> <span class="separator">-</span> <span class="value end-value">' + t.end + "</span></div></div>" } }]), s }(X), R = function () { function t(i) { e(this, t), this.opts = i } return a(t, [{ key: "line", value: function () { return { chart: { animations: { easing: "swing" } }, dataLabels: { enabled: !1 }, stroke: { width: 5, curve: "straight" }, markers: { size: 0, hover: { sizeOffset: 6 } }, xaxis: { crosshairs: { width: 1 } } } } }, { key: "sparkline", value: function (t) { this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0; return f.extend(t, { grid: { show: !1, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, legend: { show: !1 }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } }, chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 } }) } }, { key: "bar", value: function () { return { chart: { stacked: !1, animations: { easing: "swing" } }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { style: { colors: ["#fff"] }, background: { enabled: !1 } }, stroke: { width: 0, lineCap: "square" }, fill: { opacity: .85 }, legend: { markers: { shape: "square", radius: 2, size: 8 } }, tooltip: { shared: !1 }, xaxis: { tooltip: { enabled: !1 }, tickPlacement: "between", crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: !1 }, stroke: { width: 0 } } } } } }, { key: "candlestick", value: function () { return { stroke: { width: 1, colors: ["#333"] }, fill: { opacity: 1 }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function (t) { var e = t.seriesIndex, i = t.dataPointIndex, a = t.w; return '<div class="apexcharts-tooltip-candlestick"><div>Open: <span class="value">' + a.globals.seriesCandleO[e][i] + '</span></div><div>High: <span class="value">' + a.globals.seriesCandleH[e][i] + '</span></div><div>Low: <span class="value">' + a.globals.seriesCandleL[e][i] + '</span></div><div>Close: <span class="value">' + a.globals.seriesCandleC[e][i] + "</span></div></div>" } }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } } } }, { key: "rangeBar", value: function () { return { stroke: { width: 0, lineCap: "square" }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { enabled: !1, formatter: function (t, e) { e.ctx; var i = e.seriesIndex, a = e.dataPointIndex, s = e.w, r = s.globals.seriesRangeStart[i][a]; return s.globals.seriesRangeEnd[i][a] - r }, background: { enabled: !1 }, style: { colors: ["#fff"] } }, tooltip: { shared: !1, followCursor: !0, custom: function (t) { return t.w.config.plotOptions && t.w.config.plotOptions.bar && t.w.config.plotOptions.bar.horizontal ? function (t) { var e = new F(t.ctx, null), i = e.getTooltipValues(t), a = i.color, s = i.seriesName, r = i.ylabel, n = i.startVal, o = i.endVal; return e.buildCustomTooltipHTML({ color: a, seriesName: s, ylabel: r, start: n, end: o }) }(t) : function (t) { var e = new F(t.ctx, null), i = e.getTooltipValues(t), a = i.color, s = i.seriesName, r = i.ylabel, n = i.start, o = i.end; return e.buildCustomTooltipHTML({ color: a, seriesName: s, ylabel: r, start: n, end: o }) }(t) } }, xaxis: { tickPlacement: "between", tooltip: { enabled: !1 }, crosshairs: { stroke: { width: 0 } } } } } }, { key: "area", value: function () { return { stroke: { width: 4 }, fill: { type: "gradient", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: .65, opacityTo: .5, stops: [0, 100, 100] } }, markers: { size: 0, hover: { sizeOffset: 6 } }, tooltip: { followCursor: !1 } } } }, { key: "brush", value: function (t) { return f.extend(t, { chart: { toolbar: { autoSelected: "selection", show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 }, stroke: { width: 1 }, tooltip: { enabled: !1 }, xaxis: { tooltip: { enabled: !1 } } }) } }, { key: "stacked100", value: function (t) { t.dataLabels = t.dataLabels || {}, t.dataLabels.formatter = t.dataLabels.formatter || void 0; var e = t.dataLabels.formatter; return t.yaxis.forEach((function (e, i) { t.yaxis[i].min = 0, t.yaxis[i].max = 100 })), "bar" === t.chart.type && (t.dataLabels.formatter = e || function (t) { return "number" == typeof t && t ? t.toFixed(0) + "%" : t }), t } }, { key: "convertCatToNumeric", value: function (t) { return t.xaxis.convertedCatToNumeric = !0, t } }, { key: "convertCatToNumericXaxis", value: function (t, e, i) { t.xaxis.type = "numeric", t.xaxis.labels = t.xaxis.labels || {}, t.xaxis.labels.formatter = t.xaxis.labels.formatter || function (t) { return f.isNumber(t) ? Math.floor(t) : t }; var a = t.xaxis.labels.formatter, s = t.xaxis.categories && t.xaxis.categories.length ? t.xaxis.categories : t.labels; return i && i.length && (s = i.map((function (t) { return Array.isArray(t) ? t : String(t) }))), s && s.length && (t.xaxis.labels.formatter = function (t) { return f.isNumber(t) ? a(s[Math.floor(t) - 1]) : a(t) }), t.xaxis.categories = [], t.labels = [], t.xaxis.tickAmount = t.xaxis.tickAmount || "dataPoints", t } }, { key: "bubble", value: function () { return { dataLabels: { style: { colors: ["#fff"] } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { crosshairs: { width: 0 } }, fill: { type: "solid", gradient: { shade: "light", inverse: !0, shadeIntensity: .55, opacityFrom: .4, opacityTo: .8 } } } } }, { key: "scatter", value: function () { return { dataLabels: { enabled: !1 }, tooltip: { shared: !1, intersect: !0 }, markers: { size: 6, strokeWidth: 1, hover: { sizeOffset: 2 } } } } }, { key: "heatmap", value: function () { return { chart: { stacked: !1 }, fill: { opacity: 1 }, dataLabels: { style: { colors: ["#fff"] } }, stroke: { colors: ["#fff"] }, tooltip: { followCursor: !0, marker: { show: !1 }, x: { show: !1 } }, legend: { position: "top", markers: { shape: "square", size: 10, offsetY: 2 } }, grid: { padding: { right: 20 } } } } }, { key: "treemap", value: function () { return { chart: { zoom: { enabled: !1 } }, dataLabels: { style: { fontSize: 14, fontWeight: 600, colors: ["#fff"] } }, stroke: { show: !0, width: 2, colors: ["#fff"] }, legend: { show: !1 }, fill: { gradient: { stops: [0, 100] } }, tooltip: { followCursor: !0, x: { show: !1 } }, grid: { padding: { left: 0, right: 0 } }, xaxis: { crosshairs: { show: !1 }, tooltip: { enabled: !1 } } } } }, { key: "pie", value: function () { return { chart: { toolbar: { show: !1 } }, plotOptions: { pie: { donut: { labels: { show: !1 } } } }, dataLabels: { formatter: function (t) { return t.toFixed(1) + "%" }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", stops: [0, 100] } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } } } }, { key: "donut", value: function () { return { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function (t) { return t.toFixed(1) + "%" }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", shadeIntensity: .35, stops: [80, 100], opacityFrom: 1, opacityTo: 1 } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } } } }, { key: "polarArea", value: function () { return this.opts.yaxis[0].tickAmount = this.opts.yaxis[0].tickAmount ? this.opts.yaxis[0].tickAmount : 6, { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function (t) { return t.toFixed(1) + "%" }, enabled: !1 }, stroke: { show: !0, width: 2 }, fill: { opacity: .7 }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } } } }, { key: "radar", value: function () { return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, { dataLabels: { enabled: !1, style: { fontSize: "11px" } }, stroke: { width: 2 }, markers: { size: 3, strokeWidth: 1, strokeOpacity: 1 }, fill: { opacity: .2 }, tooltip: { shared: !1, intersect: !0, followCursor: !0 }, grid: { show: !1 }, xaxis: { labels: { formatter: function (t) { return t }, style: { colors: ["#a8a8a8"], fontSize: "11px" } }, tooltip: { enabled: !1 }, crosshairs: { show: !1 } } } } }, { key: "radialBar", value: function () { return { chart: { animations: { dynamicAnimation: { enabled: !0, speed: 800 } }, toolbar: { show: !1 } }, fill: { gradient: { shade: "dark", shadeIntensity: .4, inverseColors: !1, type: "diagonal2", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } }, legend: { show: !1, position: "right" }, tooltip: { enabled: !1, fillSeriesColor: !0 } } } }]), t }(), D = function () { function i(t) { e(this, i), this.opts = t } return a(i, [{ key: "init", value: function (e) { var i = e.responsiveOverride, a = this.opts, s = new S, r = new R(a); this.chartType = a.chart.type, "histogram" === this.chartType && (a.chart.type = "bar", a = f.extend({ plotOptions: { bar: { columnWidth: "99.99%" } } }, a)), a = this.extendYAxis(a), a = this.extendAnnotations(a); var n = s.init(), o = {}; if (a && "object" === t(a)) { var l = {}; l = -1 !== ["line", "area", "bar", "candlestick", "rangeBar", "histogram", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(a.chart.type) ? r[a.chart.type]() : r.line(), a.chart.brush && a.chart.brush.enabled && (l = r.brush(l)), a.chart.stacked && "100%" === a.chart.stackType && (a = r.stacked100(a)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(a), a.xaxis = a.xaxis || window.Apex.xaxis || {}, i || (a.xaxis.convertedCatToNumeric = !1), ((a = this.checkForCatToNumericXAxis(this.chartType, l, a)).chart.sparkline && a.chart.sparkline.enabled || window.Apex.chart && window.Apex.chart.sparkline && window.Apex.chart.sparkline.enabled) && (l = r.sparkline(l)), o = f.extend(n, l) } var h = f.extend(o, window.Apex); return n = f.extend(h, a), n = this.handleUserInputErrors(n) } }, { key: "checkForCatToNumericXAxis", value: function (t, e, i) { var a = new R(i), s = "bar" === t && i.plotOptions && i.plotOptions.bar && i.plotOptions.bar.horizontal, r = "pie" === t || "polarArea" === t || "donut" === t || "radar" === t || "radialBar" === t || "heatmap" === t, n = "datetime" !== i.xaxis.type && "numeric" !== i.xaxis.type, o = i.xaxis.tickPlacement ? i.xaxis.tickPlacement : e.xaxis && e.xaxis.tickPlacement; return s || r || !n || "between" === o || (i = a.convertCatToNumeric(i)), i } }, { key: "extendYAxis", value: function (t, e) { var i = new S; (void 0 === t.yaxis || !t.yaxis || Array.isArray(t.yaxis) && 0 === t.yaxis.length) && (t.yaxis = {}), t.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t.yaxis = f.extend(t.yaxis, window.Apex.yaxis)), t.yaxis.constructor !== Array ? t.yaxis = [f.extend(i.yAxis, t.yaxis)] : t.yaxis = f.extendArray(t.yaxis, i.yAxis); var a = !1; t.yaxis.forEach((function (t) { t.logarithmic && (a = !0) })); var s = t.series; return e && !s && (s = e.config.series), a && s.length !== t.yaxis.length && s.length && (t.yaxis = s.map((function (e, a) { if (e.name || (s[a].name = "series-".concat(a + 1)), t.yaxis[a]) return t.yaxis[a].seriesName = s[a].name, t.yaxis[a]; var r = f.extend(i.yAxis, t.yaxis[0]); return r.show = !1, r }))), a && s.length > 1 && s.length !== t.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both."), t } }, { key: "extendAnnotations", value: function (t) { return void 0 === t.annotations && (t.annotations = {}, t.annotations.yaxis = [], t.annotations.xaxis = [], t.annotations.points = []), t = this.extendYAxisAnnotations(t), t = this.extendXAxisAnnotations(t), t = this.extendPointAnnotations(t) } }, { key: "extendYAxisAnnotations", value: function (t) { var e = new S; return t.annotations.yaxis = f.extendArray(void 0 !== t.annotations.yaxis ? t.annotations.yaxis : [], e.yAxisAnnotation), t } }, { key: "extendXAxisAnnotations", value: function (t) { var e = new S; return t.annotations.xaxis = f.extendArray(void 0 !== t.annotations.xaxis ? t.annotations.xaxis : [], e.xAxisAnnotation), t } }, { key: "extendPointAnnotations", value: function (t) { var e = new S; return t.annotations.points = f.extendArray(void 0 !== t.annotations.points ? t.annotations.points : [], e.pointAnnotation), t } }, { key: "checkForDarkTheme", value: function (t) { t.theme && "dark" === t.theme.mode && (t.tooltip || (t.tooltip = {}), "light" !== t.tooltip.theme && (t.tooltip.theme = "dark"), t.chart.foreColor || (t.chart.foreColor = "#f6f7f8"), t.chart.background || (t.chart.background = "#424242"), t.theme.palette || (t.theme.palette = "palette4")) } }, { key: "handleUserInputErrors", value: function (t) { var e = t; if (e.tooltip.shared && e.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false."); if ("bar" === e.chart.type && e.plotOptions.bar.horizontal) { if (e.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false"); e.yaxis[0].reversed && (e.yaxis[0].opposite = !0), e.xaxis.tooltip.enabled = !1, e.yaxis[0].tooltip.enabled = !1, e.chart.zoom.enabled = !1 } return "bar" !== e.chart.type && "rangeBar" !== e.chart.type || e.tooltip.shared && ("barWidth" === e.xaxis.crosshairs.width && e.series.length > 1 && (console.warn('crosshairs.width = "barWidth" is only supported in single series, not in a multi-series barChart.'), e.xaxis.crosshairs.width = "tickWidth"), e.plotOptions.bar.horizontal && (e.states.hover.type = "none", e.tooltip.shared = !1), e.tooltip.followCursor || (console.warn("followCursor option in shared columns cannot be turned off. Please set %ctooltip.followCursor: true", "color: blue;"), e.tooltip.followCursor = !0)), "candlestick" === e.chart.type && e.yaxis[0].reversed && (console.warn("Reversed y-axis in candlestick chart is not supported."), e.yaxis[0].reversed = !1), e.chart.group && 0 === e.yaxis[0].labels.minWidth && console.warn("It looks like you have multiple charts in synchronization. You must provide yaxis.labels.minWidth which must be EQUAL for all grouped charts to prevent incorrect behaviour."), Array.isArray(e.stroke.width) && "line" !== e.chart.type && "area" !== e.chart.type && (console.warn("stroke.width option accepts array only for line and area charts. Reverted back to Number"), e.stroke.width = e.stroke.width[0]), e } }]), i }(), H = function () { function t() { e(this, t) } return a(t, [{ key: "initGlobalVars", value: function (t) { t.series = [], t.seriesCandleO = [], t.seriesCandleH = [], t.seriesCandleL = [], t.seriesCandleC = [], t.seriesRangeStart = [], t.seriesRangeEnd = [], t.seriesRangeBarTimeline = [], t.seriesPercent = [], t.seriesX = [], t.seriesZ = [], t.seriesNames = [], t.seriesTotals = [], t.seriesLog = [], t.seriesColors = [], t.stackedSeriesTotals = [], t.seriesXvalues = [], t.seriesYvalues = [], t.labels = [], t.categoryLabels = [], t.timescaleLabels = [], t.noLabelsProvided = !1, t.resizeTimer = null, t.selectionResizeTimer = null, t.delayedElements = [], t.pointsArray = [], t.dataLabelsRects = [], t.isXNumeric = !1, t.xaxisLabelsCount = 0, t.skipLastTimelinelabel = !1, t.skipFirstTimelinelabel = !1, t.isDataXYZ = !1, t.isMultiLineX = !1, t.isMultipleYAxis = !1, t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE, t.minYArr = [], t.maxYArr = [], t.maxX = -Number.MAX_VALUE, t.minX = Number.MAX_VALUE, t.initialMaxX = -Number.MAX_VALUE, t.initialMinX = Number.MAX_VALUE, t.maxDate = 0, t.minDate = Number.MAX_VALUE, t.minZ = Number.MAX_VALUE, t.maxZ = -Number.MAX_VALUE, t.minXDiff = Number.MAX_VALUE, t.yAxisScale = [], t.xAxisScale = null, t.xAxisTicksPositions = [], t.yLabelsCoords = [], t.yTitleCoords = [], t.barPadForNumericAxis = 0, t.padHorizontal = 0, t.xRange = 0, t.yRange = [], t.zRange = 0, t.dataPoints = 0, t.xTickAmount = 0 } }, { key: "globalVars", value: function (t) { return { chartID: null, cuid: null, events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] }, colors: [], clientX: null, clientY: null, fill: { colors: [] }, stroke: { colors: [] }, dataLabels: { style: { colors: [] } }, radarPolygons: { fill: { colors: [] } }, markers: { colors: [], size: t.markers.size, largestSize: 0 }, animationEnded: !1, isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints, isDirty: !1, isExecCalled: !1, initialConfig: null, initialSeries: [], lastXAxis: [], lastYAxis: [], columnSeries: null, labels: [], timescaleLabels: [], noLabelsProvided: !1, allSeriesCollapsed: !1, collapsedSeries: [], collapsedSeriesIndices: [], ancillaryCollapsedSeries: [], ancillaryCollapsedSeriesIndices: [], risingSeries: [], dataFormatXNumeric: !1, capturedSeriesIndex: -1, capturedDataPointIndex: -1, selectedDataPoints: [], goldenPadding: 35, invalidLogScale: !1, ignoreYAxisIndexes: [], yAxisSameScaleIndices: [], maxValsInArrayIndex: 0, radialSize: 0, selection: void 0, zoomEnabled: "zoom" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.zoom && t.chart.zoom.enabled, panEnabled: "pan" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.pan, selectionEnabled: "selection" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.selection, yaxis: null, mousedown: !1, lastClientPosition: {}, visibleXRange: void 0, yValueDecimal: 0, total: 0, SVGNS: "http://www.w3.org/2000/svg", svgWidth: 0, svgHeight: 0, noData: !1, locale: {}, dom: {}, memory: { methodsToExec: [] }, shouldAnimate: !0, skipLastTimelinelabel: !1, skipFirstTimelinelabel: !1, delayedElements: [], axisCharts: !0, isDataXYZ: !1, resized: !1, resizeTimer: null, comboCharts: !1, dataChanged: !1, previousPaths: [], allSeriesHasEqualX: !0, pointsArray: [], dataLabelsRects: [], lastDrawnDataLabelsIndexes: [], hasNullValues: !1, easing: null, zoomed: !1, gridWidth: 0, gridHeight: 0, rotateXLabels: !1, defaultLabels: !1, xLabelFormatter: void 0, yLabelFormatters: [], xaxisTooltipFormatter: void 0, ttKeyFormatter: void 0, ttVal: void 0, ttZFormatter: void 0, LINE_HEIGHT_RATIO: 1.618, xAxisLabelsHeight: 0, xAxisLabelsWidth: 0, yAxisLabelsWidth: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, translateYAxisX: [], yAxisWidths: [], translateXAxisY: 0, translateXAxisX: 0, tooltip: null } } }, { key: "init", value: function (t) { var e = this.globalVars(t); return this.initGlobalVars(e), e.initialConfig = f.extend({}, t), e.initialSeries = f.clone(t.series), e.lastXAxis = f.clone(e.initialConfig.xaxis), e.lastYAxis = f.clone(e.initialConfig.yaxis), e } }]), t }(), N = function () { function t(i) { e(this, t), this.opts = i } return a(t, [{ key: "init", value: function () { var t = new D(this.opts).init({ responsiveOverride: !1 }); return { config: t, globals: (new H).init(t) } } }]), t }(), O = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.coreUtils = new y(this.ctx) } return a(t, [{ key: "isMultiFormat", value: function () { return this.isFormatXY() || this.isFormat2DArray() } }, { key: "isFormatXY", value: function () { var t = this.w.config.series.slice(), e = new M(this.ctx); if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && t[this.activeSeriesIndex].data.length > 0 && null !== t[this.activeSeriesIndex].data[0] && void 0 !== t[this.activeSeriesIndex].data[0].x && null !== t[this.activeSeriesIndex].data[0]) return !0 } }, { key: "isFormat2DArray", value: function () { var t = this.w.config.series.slice(), e = new M(this.ctx); if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && t[this.activeSeriesIndex].data.length > 0 && void 0 !== t[this.activeSeriesIndex].data[0] && null !== t[this.activeSeriesIndex].data[0] && t[this.activeSeriesIndex].data[0].constructor === Array) return !0 } }, { key: "handleFormat2DArray", value: function (t, e) { var i = this.w.config, a = this.w.globals; i.xaxis.sorted && ("datetime" === i.xaxis.type ? t[e].data.sort((function (t, e) { return new Date(t[0]).getTime() - new Date(e[0]).getTime() })) : "numeric" === i.xaxis.type && t[e].data.sort((function (t, e) { return t[0] - e[0] }))); for (var s = 0; s < t[e].data.length; s++)if (void 0 !== t[e].data[s][1] && (Array.isArray(t[e].data[s][1]) && 4 === t[e].data[s][1].length ? this.twoDSeries.push(f.parseNumber(t[e].data[s][1][3])) : 5 === t[e].data[s].length ? this.twoDSeries.push(f.parseNumber(t[e].data[s][4])) : this.twoDSeries.push(f.parseNumber(t[e].data[s][1])), a.dataFormatXNumeric = !0), "datetime" === i.xaxis.type) { var r = new Date(t[e].data[s][0]); r = new Date(r).getTime(), this.twoDSeriesX.push(r) } else this.twoDSeriesX.push(t[e].data[s][0]); for (var n = 0; n < t[e].data.length; n++)void 0 !== t[e].data[n][2] && (this.threeDSeries.push(t[e].data[n][2]), a.isDataXYZ = !0) } }, { key: "handleFormatXY", value: function (t, e) { var i = this.w.config, a = this.w.globals, s = new Y(this.ctx), r = e; a.collapsedSeriesIndices.indexOf(e) > -1 && (r = this.activeSeriesIndex), i.xaxis.sorted && ("datetime" === i.xaxis.type ? t[e].data.sort((function (t, e) { return new Date(t.x).getTime() - new Date(e.x).getTime() })) : "numeric" === i.xaxis.type && t[e].data.sort((function (t, e) { return t.x - e.x }))); for (var n = 0; n < t[e].data.length; n++)void 0 !== t[e].data[n].y && (Array.isArray(t[e].data[n].y) ? this.twoDSeries.push(f.parseNumber(t[e].data[n].y[t[e].data[n].y.length - 1])) : this.twoDSeries.push(f.parseNumber(t[e].data[n].y))); for (var o = 0; o < t[r].data.length; o++) { var l = "string" == typeof t[r].data[o].x, h = Array.isArray(t[r].data[o].x), c = !h && !!s.isValidDate(t[r].data[o].x.toString()); if (l || c) if (l || i.xaxis.convertedCatToNumeric) { var d = a.isBarHorizontal && a.isRangeData; "datetime" !== i.xaxis.type || d ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[r].data[o].x)) : this.twoDSeriesX.push(s.parseDate(t[r].data[o].x)) } else "datetime" === i.xaxis.type ? this.twoDSeriesX.push(s.parseDate(t[r].data[o].x.toString())) : (a.dataFormatXNumeric = !0, a.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(t[r].data[o].x))); else h ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[r].data[o].x)) : (a.isXNumeric = !0, a.dataFormatXNumeric = !0, this.twoDSeriesX.push(t[r].data[o].x)) } if (t[e].data[0] && void 0 !== t[e].data[0].z) { for (var g = 0; g < t[e].data.length; g++)this.threeDSeries.push(t[e].data[g].z); a.isDataXYZ = !0 } } }, { key: "handleRangeData", value: function (t, e) { var i = this.w.config, a = this.w.globals, s = {}; return this.isFormat2DArray() ? s = this.handleRangeDataFormat("array", t, e) : this.isFormatXY() && (s = this.handleRangeDataFormat("xy", t, e)), a.seriesRangeStart.push(s.start), a.seriesRangeEnd.push(s.end), "datetime" === i.xaxis.type && a.seriesRangeBarTimeline.push(s.rangeUniques), a.seriesRangeBarTimeline.forEach((function (t, e) { t && t.forEach((function (t, e) { t.y.forEach((function (e, i) { for (var a = 0; a < t.y.length; a++)if (i !== a) { var s = e.y1, r = e.y2, n = t.y[a].y1; s <= t.y[a].y2 && n <= r && (t.overlaps.indexOf(e.rangeName) < 0 && t.overlaps.push(e.rangeName), t.overlaps.indexOf(t.y[a].rangeName) < 0 && t.overlaps.push(t.y[a].rangeName)) } })) })) })), s } }, { key: "handleCandleStickData", value: function (t, e) { var i = this.w.globals, a = {}; return this.isFormat2DArray() ? a = this.handleCandleStickDataFormat("array", t, e) : this.isFormatXY() && (a = this.handleCandleStickDataFormat("xy", t, e)), i.seriesCandleO[e] = a.o, i.seriesCandleH[e] = a.h, i.seriesCandleL[e] = a.l, i.seriesCandleC[e] = a.c, a } }, { key: "handleRangeDataFormat", value: function (t, e, i) { var a = [], s = [], r = e[i].data.filter((function (t, e, i) { return e === i.findIndex((function (e) { return e.x === t.x })) })).map((function (t, e) { return { x: t.x, overlaps: [], y: [] } })), n = "Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts", o = new M(this.ctx).getActiveConfigSeriesIndex(); if ("array" === t) { if (2 !== e[o].data[0][1].length) throw new Error(n); for (var l = 0; l < e[i].data.length; l++)a.push(e[i].data[l][1][0]), s.push(e[i].data[l][1][1]) } else if ("xy" === t) { if (2 !== e[o].data[0].y.length) throw new Error(n); for (var h = function (t) { var n = f.randomId(), o = e[i].data[t].x, l = { y1: e[i].data[t].y[0], y2: e[i].data[t].y[1], rangeName: n }; e[i].data[t].rangeName = n; var h = r.findIndex((function (t) { return t.x === o })); r[h].y.push(l), a.push(l.y1), s.push(l.y2) }, c = 0; c < e[i].data.length; c++)h(c) } return { start: a, end: s, rangeUniques: r } } }, { key: "handleCandleStickDataFormat", value: function (t, e, i) { var a = this.w, s = [], r = [], n = [], o = [], l = "Please provide [Open, High, Low and Close] values in valid format. Read more https://apexcharts.com/docs/series/#candlestick"; if ("array" === t) { if (!Array.isArray(e[i].data[0][1]) && 5 !== e[i].data[0].length || Array.isArray(e[i].data[0][1]) && 4 !== e[i].data[0][1].length) throw new Error(l); if (5 === e[i].data[0].length) for (var h = 0; h < e[i].data.length; h++)s.push(e[i].data[h][1]), r.push(e[i].data[h][2]), n.push(e[i].data[h][3]), o.push(e[i].data[h][4]); else for (var c = 0; c < e[i].data.length; c++)s.push(e[i].data[c][1][0]), r.push(e[i].data[c][1][1]), n.push(e[i].data[c][1][2]), o.push(e[i].data[c][1][3]) } else if ("xy" === t) { if (!a.globals.comboCharts && 4 !== e[i].data[0].y.length || a.globals.comboCharts && "candlestick" === e[i].type && e[i].data.length && 4 !== e[i].data[0].y.length) throw new Error(l); for (var d = 0; d < e[i].data.length; d++)s.push(e[i].data[d].y[0]), r.push(e[i].data[d].y[1]), n.push(e[i].data[d].y[2]), o.push(e[i].data[d].y[3]) } return { o: s, h: r, l: n, c: o } } }, { key: "parseDataAxisCharts", value: function (t) { var e = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ctx, a = this.w.config, s = this.w.globals, r = new Y(i), n = a.labels.length > 0 ? a.labels.slice() : a.xaxis.categories.slice(); s.isTimelineBar = "rangeBar" === a.chart.type && "datetime" === a.xaxis.type; for (var o = function () { for (var t = 0; t < n.length; t++)if ("string" == typeof n[t]) { if (!r.isValidDate(n[t])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date"); e.twoDSeriesX.push(r.parseDate(n[t])) } else e.twoDSeriesX.push(n[t]) }, l = 0; l < t.length; l++) { if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t[l].data) return void console.error("It is a possibility that you may have not included 'data' property in series."); if ("rangeBar" !== a.chart.type && "rangeArea" !== a.chart.type && "rangeBar" !== t[l].type && "rangeArea" !== t[l].type || (s.isRangeData = !0, this.handleRangeData(t, l)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t, l) : this.isFormatXY() && this.handleFormatXY(t, l), "candlestick" !== a.chart.type && "candlestick" !== t[l].type || this.handleCandleStickData(t, l), s.series.push(this.twoDSeries), s.labels.push(this.twoDSeriesX), s.seriesX.push(this.twoDSeriesX), l !== this.activeSeriesIndex || this.fallbackToCategory || (s.isXNumeric = !0); else { "datetime" === a.xaxis.type ? (s.isXNumeric = !0, o(), s.seriesX.push(this.twoDSeriesX)) : "numeric" === a.xaxis.type && (s.isXNumeric = !0, n.length > 0 && (this.twoDSeriesX = n, s.seriesX.push(this.twoDSeriesX))), s.labels.push(this.twoDSeriesX); var h = t[l].data.map((function (t) { return f.parseNumber(t) })); s.series.push(h) } s.seriesZ.push(this.threeDSeries), void 0 !== t[l].name ? s.seriesNames.push(t[l].name) : s.seriesNames.push("series-" + parseInt(l + 1, 10)), void 0 !== t[l].color ? s.seriesColors.push(t[l].color) : s.seriesColors.push(void 0) } return this.w } }, { key: "parseDataNonAxisCharts", value: function (t) { var e = this.w.globals, i = this.w.config; e.series = t.slice(), e.seriesNames = i.labels.slice(); for (var a = 0; a < e.series.length; a++)void 0 === e.seriesNames[a] && e.seriesNames.push("series-" + (a + 1)); return this.w } }, { key: "handleExternalLabelsData", value: function (t) { var e = this.w.config, i = this.w.globals; if (e.xaxis.categories.length > 0) i.labels = e.xaxis.categories; else if (e.labels.length > 0) i.labels = e.labels.slice(); else if (this.fallbackToCategory) { if (i.labels = i.labels[0], i.seriesRangeBarTimeline.length && (i.seriesRangeBarTimeline.map((function (t) { t.forEach((function (t) { i.labels.indexOf(t.x) < 0 && t.x && i.labels.push(t.x) })) })), i.labels = i.labels.filter((function (t, e, i) { return i.indexOf(t) === e }))), e.xaxis.convertedCatToNumeric) new R(e).convertCatToNumericXaxis(e, this.ctx, i.seriesX[0]), this._generateExternalLabels(t) } else this._generateExternalLabels(t) } }, { key: "_generateExternalLabels", value: function (t) { var e = this.w.globals, i = this.w.config, a = []; if (e.axisCharts) { if (e.series.length > 0) for (var s = 0; s < e.series[e.maxValsInArrayIndex].length; s++)a.push(s + 1); e.seriesX = []; for (var r = 0; r < t.length; r++)e.seriesX.push(a); e.isXNumeric = !0 } if (0 === a.length) { a = e.axisCharts ? [] : e.series.map((function (t, e) { return e + 1 })); for (var n = 0; n < t.length; n++)e.seriesX.push(a) } e.labels = a, i.xaxis.convertedCatToNumeric && (e.categoryLabels = a.map((function (t) { return i.xaxis.labels.formatter(t) }))), e.noLabelsProvided = !0 } }, { key: "parseData", value: function (t) { var e = this.w, i = e.config, a = e.globals; if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a.axisCharts ? this.parseDataAxisCharts(t) : this.parseDataNonAxisCharts(t), this.coreUtils.getLargestSeries(), "bar" === i.chart.type && i.chart.stacked) { var s = new M(this.ctx); a.series = s.setNullSeriesToZeroValues(a.series) } this.coreUtils.getSeriesTotals(), a.axisCharts && this.coreUtils.getStackedSeriesTotals(), this.coreUtils.getPercentSeries(), a.dataFormatXNumeric || a.isXNumeric && ("numeric" !== i.xaxis.type || 0 !== i.labels.length || 0 !== i.xaxis.categories.length) || this.handleExternalLabelsData(t); for (var r = this.coreUtils.getCategoryLabels(a.labels), n = 0; n < r.length; n++)if (Array.isArray(r[n])) { a.isMultiLineX = !0; break } } }, { key: "excludeCollapsedSeriesInYAxis", value: function () { var t = this, e = this.w; e.globals.ignoreYAxisIndexes = e.globals.collapsedSeries.map((function (i, a) { if (t.w.globals.isMultipleYAxis && !e.config.chart.stacked) return i.index })) } }]), t }(), W = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w, this.tooltipKeyFormat = "dd MMM" } return a(t, [{ key: "xLabelFormat", value: function (t, e, i, a) { var s = this.w; if ("datetime" === s.config.xaxis.type && void 0 === s.config.xaxis.labels.formatter && void 0 === s.config.tooltip.x.formatter) { var r = new Y(this.ctx); return r.formatDate(r.getDate(e), s.config.tooltip.x.format) } return t(e, i, a) } }, { key: "defaultGeneralFormatter", value: function (t) { return Array.isArray(t) ? t.map((function (t) { return t })) : t } }, { key: "defaultYFormatter", value: function (t, e, i) { var a = this.w; return f.isNumber(t) && (t = 0 !== a.globals.yValueDecimal ? t.toFixed(void 0 !== e.decimalsInFloat ? e.decimalsInFloat : a.globals.yValueDecimal) : a.globals.maxYArr[i] - a.globals.minYArr[i] < 5 ? t.toFixed(1) : t.toFixed(0)), t } }, { key: "setLabelFormatters", value: function () { var t = this, e = this.w; return e.globals.xLabelFormatter = function (e) { return t.defaultGeneralFormatter(e) }, e.globals.xaxisTooltipFormatter = function (e) { return t.defaultGeneralFormatter(e) }, e.globals.ttKeyFormatter = function (e) { return t.defaultGeneralFormatter(e) }, e.globals.ttZFormatter = function (t) { return t }, e.globals.legendFormatter = function (e) { return t.defaultGeneralFormatter(e) }, void 0 !== e.config.xaxis.labels.formatter ? e.globals.xLabelFormatter = e.config.xaxis.labels.formatter : e.globals.xLabelFormatter = function (t) { if (f.isNumber(t)) { if (!e.config.xaxis.convertedCatToNumeric && "numeric" === e.config.xaxis.type && e.globals.dataPoints < 50) return t.toFixed(1); if (e.globals.isBarHorizontal) if (e.globals.maxY - e.globals.minYArr < 4) return t.toFixed(1); return t.toFixed(0) } return t }, "function" == typeof e.config.tooltip.x.formatter ? e.globals.ttKeyFormatter = e.config.tooltip.x.formatter : e.globals.ttKeyFormatter = e.globals.xLabelFormatter, "function" == typeof e.config.xaxis.tooltip.formatter && (e.globals.xaxisTooltipFormatter = e.config.xaxis.tooltip.formatter), (Array.isArray(e.config.tooltip.y) || void 0 !== e.config.tooltip.y.formatter) && (e.globals.ttVal = e.config.tooltip.y), void 0 !== e.config.tooltip.z.formatter && (e.globals.ttZFormatter = e.config.tooltip.z.formatter), void 0 !== e.config.legend.formatter && (e.globals.legendFormatter = e.config.legend.formatter), e.config.yaxis.forEach((function (i, a) { void 0 !== i.labels.formatter ? e.globals.yLabelFormatters[a] = i.labels.formatter : e.globals.yLabelFormatters[a] = function (s) { return e.globals.xyCharts ? Array.isArray(s) ? s.map((function (e) { return t.defaultYFormatter(e, i, a) })) : t.defaultYFormatter(s, i, a) : s } })), e.globals } }, { key: "heatmapLabelFormatters", value: function () { var t = this.w; if ("heatmap" === t.config.chart.type) { t.globals.yAxisScale[0].result = t.globals.seriesNames.slice(); var e = t.globals.seriesNames.reduce((function (t, e) { return t.length > e.length ? t : e }), 0); t.globals.yAxisScale[0].niceMax = e, t.globals.yAxisScale[0].niceMin = e } } }]), t }(), B = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "getLabel", value: function (t, e, i, a) { var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [], r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "12px", n = this.w, o = void 0 === t[a] ? "" : t[a], l = o, h = n.globals.xLabelFormatter, c = n.config.xaxis.labels.formatter, d = !1, g = new W(this.ctx), u = o; l = g.xLabelFormat(h, o, u, { i: a, dateFormatter: new Y(this.ctx).formatDate, w: n }), void 0 !== c && (l = c(o, t[a], { i: a, dateFormatter: new Y(this.ctx).formatDate, w: n })); var f = function (t) { var i = null; return e.forEach((function (t) { "month" === t.unit ? i = "year" : "day" === t.unit ? i = "month" : "hour" === t.unit ? i = "day" : "minute" === t.unit && (i = "hour") })), i === t }; e.length > 0 ? (d = f(e[a].unit), i = e[a].position, l = e[a].value) : "datetime" === n.config.xaxis.type && void 0 === c && (l = ""), void 0 === l && (l = ""), l = Array.isArray(l) ? l : l.toString(); var p = new b(this.ctx), x = {}; x = n.globals.rotateXLabels ? p.getTextRects(l, parseInt(r, 10), null, "rotate(".concat(n.config.xaxis.labels.rotate, " 0 0)"), !1) : p.getTextRects(l, parseInt(r, 10)); var m = !n.config.xaxis.labels.showDuplicates && this.ctx.timeScale; return !Array.isArray(l) && (0 === l.indexOf("NaN") || 0 === l.toLowerCase().indexOf("invalid") || l.toLowerCase().indexOf("infinity") >= 0 || s.indexOf(l) >= 0 && m) && (l = ""), { x: i, text: l, textRect: x, isBold: d } } }, { key: "checkLabelBasedOnTickamount", value: function (t, e, i) { var a = this.w, s = a.config.xaxis.tickAmount; return "dataPoints" === s && (s = Math.round(a.globals.gridWidth / 120)), s > i || t % Math.round(i / (s + 1)) == 0 || (e.text = ""), e } }, { key: "checkForOverflowingLabels", value: function (t, e, i, a, s) { var r = this.w; if (0 === t && r.globals.skipFirstTimelinelabel && (e.text = ""), t === i - 1 && r.globals.skipLastTimelinelabel && (e.text = ""), r.config.xaxis.labels.hideOverlappingLabels && a.length > 0) { var n = s[s.length - 1]; e.x < n.textRect.width / (r.globals.rotateXLabels ? Math.abs(r.config.xaxis.labels.rotate) / 12 : 1.01) + n.x && (e.text = "") } return e } }, { key: "checkForReversedLabels", value: function (t, e) { var i = this.w; return i.config.yaxis[t] && i.config.yaxis[t].reversed && e.reverse(), e } }, { key: "isYAxisHidden", value: function (t) { var e = this.w, i = new y(this.ctx); return !e.config.yaxis[t].show || !e.config.yaxis[t].showForNullSeries && i.isSeriesNull(t) && -1 === e.globals.collapsedSeriesIndices.indexOf(t) } }, { key: "getYAxisForeColor", value: function (t, e) { var i = this.w; return Array.isArray(t) && i.globals.yAxisScale[e] && this.ctx.theme.pushExtraColors(t, i.globals.yAxisScale[e].result.length, !1), t } }, { key: "drawYAxisTicks", value: function (t, e, i, a, s, r, n) { var o = this.w, l = new b(this.ctx), h = o.globals.translateY; if (a.show && e > 0) { !0 === o.config.yaxis[s].opposite && (t += a.width); for (var c = e; c >= 0; c--) { var d = h + e / 10 + o.config.yaxis[s].labels.offsetY - 1; o.globals.isBarHorizontal && (d = r * c), "heatmap" === o.config.chart.type && (d += r / 2); var g = l.drawLine(t + i.offsetX - a.width + a.offsetX, d + a.offsetY, t + i.offsetX + a.offsetX, d + a.offsetY, a.color); n.add(g), h += r } } } }]), t }(), V = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "fixSvgStringForIe11", value: function (t) { if (!f.isIE11()) return t; var e = 0, i = t.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g, (function (t) { return 2 === ++e ? 'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"' : t })); return i = (i = i.replace(/xmlns:NS\d+=""/g, "")).replace(/NS\d+:(\w+:\w+=")/g, "$1") } }, { key: "getSvgString", value: function () { var t = this.w.globals.dom.Paper.svg(); return this.fixSvgStringForIe11(t) } }, { key: "cleanup", value: function () { var t = this.w, e = t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"), i = t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"), a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect"); Array.prototype.forEach.call(a, (function (t) { t.setAttribute("width", 0) })), e && e[0] && (e[0].setAttribute("x", -500), e[0].setAttribute("x1", -500), e[0].setAttribute("x2", -500)), i && i[0] && (i[0].setAttribute("y", -100), i[0].setAttribute("y1", -100), i[0].setAttribute("y2", -100)) } }, { key: "svgUrl", value: function () { this.cleanup(); var t = this.getSvgString(), e = new Blob([t], { type: "image/svg+xml;charset=utf-8" }); return URL.createObjectURL(e) } }, { key: "dataURI", value: function () { var t = this; return new Promise((function (e) { var i = t.w; t.cleanup(); var a = document.createElement("canvas"); a.width = i.globals.svgWidth, a.height = parseInt(i.globals.dom.elWrap.style.height, 10); var s = "transparent" === i.config.chart.background ? "#fff" : i.config.chart.background, r = a.getContext("2d"); r.fillStyle = s, r.fillRect(0, 0, a.width, a.height); var n = t.getSvgString(); if (window.canvg && f.isIE11()) { var o = window.canvg.Canvg.fromString(r, n, { ignoreClear: !0, ignoreDimensions: !0 }); o.start(); var l = a.msToBlob(); o.stop(), e({ blob: l }) } else { var h = "data:image/svg+xml," + encodeURIComponent(n), c = new Image; c.crossOrigin = "anonymous", c.onload = function () { if (r.drawImage(c, 0, 0), a.msToBlob) { var t = a.msToBlob(); e({ blob: t }) } else { var i = a.toDataURL("image/png"); e({ imgURI: i }) } }, c.src = h } })) } }, { key: "exportToSVG", value: function () { this.triggerDownload(this.svgUrl(), this.w.config.chart.toolbar.export.svg.filename, ".svg") } }, { key: "exportToPng", value: function () { var t = this; this.dataURI().then((function (e) { var i = e.imgURI, a = e.blob; a ? navigator.msSaveOrOpenBlob(a, t.w.globals.chartID + ".png") : t.triggerDownload(i, t.w.config.chart.toolbar.export.png.filename, ".png") })) } }, { key: "exportToCSV", value: function (t) { var e = this, i = t.series, a = t.columnDelimiter, s = t.lineDelimiter, r = void 0 === s ? "\n" : s, n = this.w, o = [], l = [], h = "data:text/csv;charset=utf-8,", c = new O(this.ctx), d = new B(this.ctx), g = function (t) { var i = ""; if (n.globals.axisCharts) { if ("category" === n.config.xaxis.type || n.config.xaxis.convertedCatToNumeric) if (n.globals.isBarHorizontal) { var s = n.globals.yLabelFormatters[0], r = new M(e.ctx).getActiveConfigSeriesIndex(); i = s(n.globals.labels[t], { seriesIndex: r, dataPointIndex: t, w: n }) } else i = d.getLabel(n.globals.labels, n.globals.timescaleLabels, 0, t).text; "datetime" === n.config.xaxis.type && (n.config.xaxis.categories.length ? i = n.config.xaxis.categories[t] : n.config.labels.length && (i = n.config.labels[t])) } else i = n.config.labels[t]; return f.isNumber(i) ? i : i.split(a).join("") }; o.push(n.config.chart.toolbar.export.csv.headerCategory), i.map((function (t, e) { var i = t.name ? t.name : "series-".concat(e); n.globals.axisCharts && o.push(i.split(a).join("") ? i.split(a).join("") : "series-".concat(e)) })), n.globals.axisCharts || (o.push(n.config.chart.toolbar.export.csv.headerValue), l.push(o.join(a))), i.map((function (t, e) { n.globals.axisCharts ? function (t, e) { if (o.length && 0 === e && l.push(o.join(a)), t.data && t.data.length) for (var s = 0; s < t.data.length; s++) { o = []; var r = g(s); if (r || (c.isFormatXY() ? r = i[e].data[s].x : c.isFormat2DArray() && (r = i[e].data[s] ? i[e].data[s][0] : "")), 0 === e) { o.push((d = r, "datetime" === n.config.xaxis.type && String(d).length >= 10 ? n.config.chart.toolbar.export.csv.dateFormatter(r) : r.split(a).join(""))); for (var h = 0; h < n.globals.series.length; h++)o.push(n.globals.series[h][s]) } ("candlestick" === n.config.chart.type || t.type && "candlestick" === t.type) && (o.pop(), o.push(n.globals.seriesCandleO[e][s]), o.push(n.globals.seriesCandleH[e][s]), o.push(n.globals.seriesCandleL[e][s]), o.push(n.globals.seriesCandleC[e][s])), "rangeBar" === n.config.chart.type && (o.pop(), o.push(n.globals.seriesRangeStart[e][s]), o.push(n.globals.seriesRangeEnd[e][s])), o.length && l.push(o.join(a)) } var d }(t, e) : ((o = []).push(n.globals.labels[e].split(a).join("")), o.push(n.globals.series[e]), l.push(o.join(a))) })), h += l.join(r), this.triggerDownload(encodeURI(h), n.config.chart.toolbar.export.csv.filename, ".csv") } }, { key: "triggerDownload", value: function (t, e, i) { var a = document.createElement("a"); a.href = t, a.download = (e || this.w.globals.chartID) + i, document.body.appendChild(a), a.click(), document.body.removeChild(a) } }]), t }(), G = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w; var a = this.w; this.axesUtils = new B(i), this.xaxisLabels = a.globals.labels.slice(), a.globals.timescaleLabels.length > 0 && !a.globals.isBarHorizontal && (this.xaxisLabels = a.globals.timescaleLabels.slice()), this.drawnLabels = [], this.drawnLabelsRects = [], "top" === a.config.xaxis.position ? this.offY = 0 : this.offY = a.globals.gridHeight + 1, this.offY = this.offY + a.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = "bar" === a.config.chart.type && a.config.plotOptions.bar.horizontal, this.xaxisFontSize = a.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = a.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = a.config.xaxis.labels.style.colors, this.xaxisBorderWidth = a.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = a.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = a.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = a.config.xaxis.axisBorder.height, this.yaxis = a.config.yaxis[0] } return a(t, [{ key: "drawXaxis", value: function () { var t, e = this, i = this.w, a = new b(this.ctx), s = a.group({ class: "apexcharts-xaxis", transform: "translate(".concat(i.config.xaxis.offsetX, ", ").concat(i.config.xaxis.offsetY, ")") }), r = a.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(i.globals.translateXAxisX, ", ").concat(i.globals.translateXAxisY, ")") }); s.add(r); for (var n = i.globals.padHorizontal, o = [], l = 0; l < this.xaxisLabels.length; l++)o.push(this.xaxisLabels[l]); var h = o.length; if (i.globals.isXNumeric) { var c = h > 1 ? h - 1 : h; t = i.globals.gridWidth / c, n = n + t / 2 + i.config.xaxis.labels.offsetX } else t = i.globals.gridWidth / o.length, n = n + t + i.config.xaxis.labels.offsetX; for (var d = function (s) { var l = n - t / 2 + i.config.xaxis.labels.offsetX; 0 === s && 1 === h && t / 2 === n && 1 === i.globals.dataPoints && (l = i.globals.gridWidth / 2); var c = e.axesUtils.getLabel(o, i.globals.timescaleLabels, l, s, e.drawnLabels, e.xaxisFontSize), d = 28; i.globals.rotateXLabels && (d = 22); if ((c = void 0 !== i.config.xaxis.tickAmount && "dataPoints" !== i.config.xaxis.tickAmount && "datetime" !== i.config.xaxis.type ? e.axesUtils.checkLabelBasedOnTickamount(s, c, h) : e.axesUtils.checkForOverflowingLabels(s, c, h, e.drawnLabels, e.drawnLabelsRects)).text && i.globals.xaxisLabelsCount++, i.config.xaxis.labels.show) { var g = a.drawText({ x: c.x, y: e.offY + i.config.xaxis.labels.offsetY + d - ("top" === i.config.xaxis.position ? i.globals.xAxisHeight + i.config.xaxis.axisTicks.height - 2 : 0), text: c.text, textAnchor: "middle", fontWeight: c.isBold ? 600 : i.config.xaxis.labels.style.fontWeight, fontSize: e.xaxisFontSize, fontFamily: e.xaxisFontFamily, foreColor: Array.isArray(e.xaxisForeColors) ? i.config.xaxis.convertedCatToNumeric ? e.xaxisForeColors[i.globals.minX + s - 1] : e.xaxisForeColors[s] : e.xaxisForeColors, isPlainText: !1, cssClass: "apexcharts-xaxis-label " + i.config.xaxis.labels.style.cssClass }); r.add(g); var u = document.createElementNS(i.globals.SVGNS, "title"); u.textContent = Array.isArray(c.text) ? c.text.join(" ") : c.text, g.node.appendChild(u), "" !== c.text && (e.drawnLabels.push(c.text), e.drawnLabelsRects.push(c)) } n += t }, g = 0; g <= h - 1; g++)d(g); if (void 0 !== i.config.xaxis.title.text) { var u = a.group({ class: "apexcharts-xaxis-title" }), f = a.drawText({ x: i.globals.gridWidth / 2 + i.config.xaxis.title.offsetX, y: this.offY - parseFloat(this.xaxisFontSize) + i.globals.xAxisLabelsHeight + i.config.xaxis.title.offsetY, text: i.config.xaxis.title.text, textAnchor: "middle", fontSize: i.config.xaxis.title.style.fontSize, fontFamily: i.config.xaxis.title.style.fontFamily, fontWeight: i.config.xaxis.title.style.fontWeight, foreColor: i.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + i.config.xaxis.title.style.cssClass }); u.add(f), s.add(u) } if (i.config.xaxis.axisBorder.show) { var p = i.globals.barPadForNumericAxis, x = a.drawLine(i.globals.padHorizontal + i.config.xaxis.axisBorder.offsetX - p, this.offY, this.xaxisBorderWidth + p, this.offY, i.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight); s.add(x) } return s } }, { key: "drawXaxisInversed", value: function (t) { var e, i, a = this, s = this.w, r = new b(this.ctx), n = s.config.yaxis[0].opposite ? s.globals.translateYAxisX[t] : 0, o = r.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: t }), l = r.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + n + ", 0)" }); o.add(l); var h = []; if (s.config.yaxis[t].show) for (var c = 0; c < this.xaxisLabels.length; c++)h.push(this.xaxisLabels[c]); e = s.globals.gridHeight / h.length, i = -e / 2.2; var d = s.globals.yLabelFormatters[0], g = s.config.yaxis[0].labels; if (g.show) for (var u = function (n) { var o = void 0 === h[n] ? "" : h[n]; o = d(o, { seriesIndex: t, dataPointIndex: n, w: s }); var c = a.axesUtils.getYAxisForeColor(g.style.colors, t), u = 0; Array.isArray(o) && (u = o.length / 2 * parseInt(g.style.fontSize, 10)); var f = r.drawText({ x: g.offsetX - 15, y: i + e + g.offsetY - u, text: o, textAnchor: a.yaxis.opposite ? "start" : "end", foreColor: Array.isArray(c) ? c[n] : c, fontSize: g.style.fontSize, fontFamily: g.style.fontFamily, fontWeight: g.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + g.style.cssClass }); l.add(f); var p = document.createElementNS(s.globals.SVGNS, "title"); if (p.textContent = o.text, f.node.appendChild(p), 0 !== s.config.yaxis[t].labels.rotate) { var x = r.rotateAroundCenter(f.node); f.node.setAttribute("transform", "rotate(".concat(s.config.yaxis[t].labels.rotate, " 0 ").concat(x.y, ")")) } i += e }, f = 0; f <= h.length - 1; f++)u(f); if (void 0 !== s.config.yaxis[0].title.text) { var p = r.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + n + ", 0)" }), x = r.drawText({ x: 0, y: s.globals.gridHeight / 2, text: s.config.yaxis[0].title.text, textAnchor: "middle", foreColor: s.config.yaxis[0].title.style.color, fontSize: s.config.yaxis[0].title.style.fontSize, fontWeight: s.config.yaxis[0].title.style.fontWeight, fontFamily: s.config.yaxis[0].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + s.config.yaxis[0].title.style.cssClass }); p.add(x), o.add(p) } var m = 0; this.isCategoryBarHorizontal && s.config.yaxis[0].opposite && (m = s.globals.gridWidth); var v = s.config.xaxis.axisBorder; if (v.show) { var y = r.drawLine(s.globals.padHorizontal + v.offsetX + m, 1 + v.offsetY, s.globals.padHorizontal + v.offsetX + m, s.globals.gridHeight + v.offsetY, v.color, 0); o.add(y) } return s.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(m, h.length, s.config.yaxis[0].axisBorder, s.config.yaxis[0].axisTicks, 0, e, o), o } }, { key: "drawXaxisTicks", value: function (t, e) { var i = this.w, a = t; if (!(t < 0 || t - 2 > i.globals.gridWidth)) { var s = this.offY + i.config.xaxis.axisTicks.offsetY, r = s + i.config.xaxis.axisTicks.height; if ("top" === i.config.xaxis.position && (r = s - i.config.xaxis.axisTicks.height), i.config.xaxis.axisTicks.show) { var n = new b(this.ctx).drawLine(t + i.config.xaxis.axisTicks.offsetX, s + i.config.xaxis.offsetY, a + i.config.xaxis.axisTicks.offsetX, r + i.config.xaxis.offsetY, i.config.xaxis.axisTicks.color); e.add(n), n.node.classList.add("apexcharts-xaxis-tick") } } } }, { key: "getXAxisTicksPositions", value: function () { var t = this.w, e = [], i = this.xaxisLabels.length, a = t.globals.padHorizontal; if (t.globals.timescaleLabels.length > 0) for (var s = 0; s < i; s++)a = this.xaxisLabels[s].position, e.push(a); else for (var r = i, n = 0; n < r; n++) { var o = r; t.globals.isXNumeric && "bar" !== t.config.chart.type && (o -= 1), a += t.globals.gridWidth / o, e.push(a) } return e } }, { key: "xAxisLabelCorrections", value: function () { var t = this.w, e = new b(this.ctx), i = t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text"), s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan"); if (t.globals.rotateXLabels || t.config.xaxis.labels.rotateAlways) for (var n = 0; n < a.length; n++) { var o = e.rotateAroundCenter(a[n]); o.y = o.y - 1, o.x = o.x + 1, a[n].setAttribute("transform", "rotate(".concat(t.config.xaxis.labels.rotate, " ").concat(o.x, " ").concat(o.y, ")")), a[n].setAttribute("text-anchor", "end"); i.setAttribute("transform", "translate(0, ".concat(-10, ")")); var l = a[n].childNodes; t.config.xaxis.labels.trim && Array.prototype.forEach.call(l, (function (i) { e.placeTextWithEllipsis(i, i.textContent, t.config.xaxis.labels.maxHeight - ("bottom" === t.config.legend.position ? 20 : 10)) })) } else !function () { for (var i = t.globals.gridWidth / (t.globals.labels.length + 1), s = 0; s < a.length; s++) { var r = a[s].childNodes; t.config.xaxis.labels.trim && "datetime" !== t.config.xaxis.type && Array.prototype.forEach.call(r, (function (t) { e.placeTextWithEllipsis(t, t.textContent, i) })) } }(); if (s.length > 0) { var h = s[s.length - 1].getBBox(), c = s[0].getBBox(); h.x < -20 && s[s.length - 1].parentNode.removeChild(s[s.length - 1]), c.x + c.width > t.globals.gridWidth && !t.globals.isBarHorizontal && s[0].parentNode.removeChild(s[0]); for (var d = 0; d < r.length; d++)e.placeTextWithEllipsis(r[d], r[d].textContent, t.config.yaxis[0].labels.maxWidth - 2 * parseFloat(t.config.yaxis[0].title.style.fontSize) - 20) } } }]), t }(), _ = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w; var a = this.w; this.xaxisLabels = a.globals.labels.slice(), this.axesUtils = new B(i), this.isTimelineBar = "datetime" === a.config.xaxis.type && a.globals.seriesRangeBarTimeline.length, a.globals.timescaleLabels.length > 0 && (this.xaxisLabels = a.globals.timescaleLabels.slice()) } return a(t, [{ key: "drawGridArea", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = this.w, i = new b(this.ctx); null === t && (t = i.group({ class: "apexcharts-grid" })); var a = i.drawLine(e.globals.padHorizontal, 1, e.globals.padHorizontal, e.globals.gridHeight, "transparent"), s = i.drawLine(e.globals.padHorizontal, e.globals.gridHeight, e.globals.gridWidth, e.globals.gridHeight, "transparent"); return t.add(s), t.add(a), t } }, { key: "drawGrid", value: function () { var t = null; return this.w.globals.axisCharts && (t = this.renderGrid(), this.drawGridArea(t.el)), t } }, { key: "createGridMask", value: function () { var t = this.w, e = t.globals, i = new b(this.ctx), a = Array.isArray(t.config.stroke.width) ? 0 : t.config.stroke.width; if (Array.isArray(t.config.stroke.width)) { var s = 0; t.config.stroke.width.forEach((function (t) { s = Math.max(s, t) })), a = s } e.dom.elGridRectMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(e.cuid)), e.dom.elGridRectMarkerMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(e.cuid)); var r = t.config.chart.type, n = 0, o = 0; ("bar" === r || "rangeBar" === r || t.globals.comboBarCount > 0) && t.globals.isXNumeric && !t.globals.isBarHorizontal && (n = t.config.grid.padding.left, o = t.config.grid.padding.right, e.barPadForNumericAxis > n && (n = e.barPadForNumericAxis, o = e.barPadForNumericAxis)), e.dom.elGridRect = i.drawRect(-a / 2 - n - 2, -a / 2, e.gridWidth + a + o + n + 4, e.gridHeight + a, 0, "#fff"), new y(this).getLargestMarkerSize(); var l = t.globals.markers.largestSize + 1; e.dom.elGridRectMarker = i.drawRect(2 * -l, 2 * -l, e.gridWidth + 4 * l, e.gridHeight + 4 * l, 0, "#fff"), e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node), e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node); var h = e.dom.baseEl.querySelector("defs"); h.appendChild(e.dom.elGridRectMask), h.appendChild(e.dom.elGridRectMarkerMask) } }, { key: "_drawGridLines", value: function (t) { var e = t.i, i = t.x1, a = t.y1, s = t.x2, r = t.y2, n = t.xCount, o = t.parent, l = this.w; 0 === e && l.globals.skipFirstTimelinelabel || e === n - 1 && l.globals.skipLastTimelinelabel && !l.config.xaxis.labels.formatter || "radar" === l.config.chart.type || (l.config.grid.xaxis.lines.show && this._drawGridLine({ x1: i, y1: a, x2: s, y2: r, parent: o }), new G(this.ctx).drawXaxisTicks(i, this.elg)) } }, { key: "_drawGridLine", value: function (t) { var e = t.x1, i = t.y1, a = t.x2, s = t.y2, r = t.parent, n = this.w, o = r.node.classList.contains("apexcharts-gridlines-horizontal"), l = n.config.grid.strokeDashArray, h = n.globals.barPadForNumericAxis, c = new b(this).drawLine(e - (o ? h : 0), i, a + (o ? h : 0), s, n.config.grid.borderColor, l); c.node.classList.add("apexcharts-gridline"), r.add(c) } }, { key: "_drawGridBandRect", value: function (t) { var e = t.c, i = t.x1, a = t.y1, s = t.x2, r = t.y2, n = t.type, o = this.w, l = new b(this.ctx), h = o.globals.barPadForNumericAxis; if ("column" !== n || "datetime" !== o.config.xaxis.type) { var c = o.config.grid[n].colors[e], d = l.drawRect(i - ("row" === n ? h : 0), a, s + ("row" === n ? 2 * h : 0), r, 0, c, o.config.grid[n].opacity); this.elg.add(d), d.attr("clip-path", "url(#gridRectMask".concat(o.globals.cuid, ")")), d.node.classList.add("apexcharts-grid-".concat(n)) } } }, { key: "_drawXYLines", value: function (t) { var e = this, i = t.xCount, a = t.tickAmount, s = this.w; if (s.config.grid.xaxis.lines.show || s.config.xaxis.axisTicks.show) { var r, n = s.globals.padHorizontal, o = s.globals.gridHeight; s.globals.timescaleLabels.length ? function (t) { for (var a = t.xC, s = t.x1, r = t.y1, n = t.x2, o = t.y2, l = 0; l < a; l++)s = e.xaxisLabels[l].position, n = e.xaxisLabels[l].position, e._drawGridLines({ i: l, x1: s, y1: r, x2: n, y2: o, xCount: i, parent: e.elgridLinesV }) }({ xC: i, x1: n, y1: 0, x2: r, y2: o }) : (s.globals.isXNumeric && (i = s.globals.xAxisScale.result.length), s.config.xaxis.convertedCatToNumeric && (i = s.globals.xaxisLabelsCount), function (t) { var a = t.xC, r = t.x1, n = t.y1, o = t.x2, l = t.y2; if (void 0 !== s.config.xaxis.tickAmount && "dataPoints" !== s.config.xaxis.tickAmount) s.globals.dom.baseEl.querySelectorAll(".apexcharts-text.apexcharts-xaxis-label tspan:not(:empty)").forEach((function (t, a) { var s = t.getBBox(); e._drawGridLines({ i: a, x1: s.x + s.width / 2, y1: n, x2: s.x + s.width / 2, y2: l, xCount: i, parent: e.elgridLinesV }) })); else for (var h = 0; h < a + (s.globals.isXNumeric ? 0 : 1); h++)0 === h && 1 === a && 1 === s.globals.dataPoints && (o = r = s.globals.gridWidth / 2), e._drawGridLines({ i: h, x1: r, y1: n, x2: o, y2: l, xCount: i, parent: e.elgridLinesV }), o = r += s.globals.gridWidth / (s.globals.isXNumeric ? a - 1 : a) }({ xC: i, x1: n, y1: 0, x2: r, y2: o })) } if (s.config.grid.yaxis.lines.show) { var l = 0, h = 0, c = s.globals.gridWidth, d = a + 1; this.isTimelineBar && (d = s.globals.labels.length); for (var g = 0; g < d + (this.isTimelineBar ? 1 : 0); g++)this._drawGridLine({ x1: 0, y1: l, x2: c, y2: h, parent: this.elgridLinesH }), h = l += s.globals.gridHeight / (this.isTimelineBar ? d : a) } } }, { key: "_drawInvertedXYLines", value: function (t) { var e = t.xCount, i = this.w; if (i.config.grid.xaxis.lines.show || i.config.xaxis.axisTicks.show) for (var a, s = i.globals.padHorizontal, r = i.globals.gridHeight, n = 0; n < e + 1; n++) { i.config.grid.xaxis.lines.show && this._drawGridLine({ x1: s, y1: 0, x2: a, y2: r, parent: this.elgridLinesV }), new G(this.ctx).drawXaxisTicks(s, this.elg), a = s = s + i.globals.gridWidth / e + .3 } if (i.config.grid.yaxis.lines.show) for (var o = 0, l = 0, h = i.globals.gridWidth, c = 0; c < i.globals.dataPoints + 1; c++)this._drawGridLine({ x1: 0, y1: o, x2: h, y2: l, parent: this.elgridLinesH }), l = o += i.globals.gridHeight / i.globals.dataPoints } }, { key: "renderGrid", value: function () { var t = this.w, e = new b(this.ctx); this.elg = e.group({ class: "apexcharts-grid" }), this.elgridLinesH = e.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = e.group({ class: "apexcharts-gridlines-vertical" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide()); for (var i, a = t.globals.yAxisScale.length ? t.globals.yAxisScale[0].result.length - 1 : 5, s = 0; s < t.globals.series.length && (void 0 !== t.globals.yAxisScale[s] && (a = t.globals.yAxisScale[s].result.length - 1), !(a > 2)); s++); return !t.globals.isBarHorizontal || this.isTimelineBar ? (i = this.xaxisLabels.length, this.isTimelineBar && (a = t.globals.labels.length, t.config.xaxis.tickAmount && t.config.xaxis.labels.formatter && (i = t.config.xaxis.tickAmount)), this._drawXYLines({ xCount: i, tickAmount: a })) : (i = a, a = t.globals.xTickAmount, this._drawInvertedXYLines({ xCount: i, tickAmount: a })), this.drawGridBands(i, a), { el: this.elg, xAxisTickWidth: t.globals.gridWidth / i } } }, { key: "drawGridBands", value: function (t, e) { var i = this.w; if (void 0 !== i.config.grid.row.colors && i.config.grid.row.colors.length > 0) for (var a = 0, s = i.globals.gridHeight / e, r = i.globals.gridWidth, n = 0, o = 0; n < e; n++, o++)o >= i.config.grid.row.colors.length && (o = 0), this._drawGridBandRect({ c: o, x1: 0, y1: a, x2: r, y2: s, type: "row" }), a += i.globals.gridHeight / e; if (void 0 !== i.config.grid.column.colors && i.config.grid.column.colors.length > 0) for (var l = i.globals.isBarHorizontal || "category" !== i.config.xaxis.type && !i.config.xaxis.convertedCatToNumeric ? t : t - 1, h = i.globals.padHorizontal, c = i.globals.padHorizontal + i.globals.gridWidth / l, d = i.globals.gridHeight, g = 0, u = 0; g < t; g++, u++)u >= i.config.grid.column.colors.length && (u = 0), this._drawGridBandRect({ c: u, x1: h, y1: 0, x2: c, y2: d, type: "column" }), h += i.globals.gridWidth / l } }]), t }(), j = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "niceScale", value: function (t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s = arguments.length > 4 ? arguments[4] : void 0, r = this.w, n = Math.abs(e - t); if ("dataPoints" === (i = this._adjustTicksForSmallRange(i, a, n)) && (i = r.globals.dataPoints - 1), t === Number.MIN_VALUE && 0 === e || !f.isNumber(t) && !f.isNumber(e) || t === Number.MIN_VALUE && e === -Number.MAX_VALUE) { t = 0, e = i; var o = this.linearScale(t, e, i); return o } t > e ? (console.warn("axis.min cannot be greater than axis.max"), e = t + .1) : t === e && (t = 0 === t ? 0 : t - .5, e = 0 === e ? 2 : e + .5); var l = []; n < 1 && s && ("candlestick" === r.config.chart.type || "candlestick" === r.config.series[a].type || r.globals.isRangeData) && (e *= 1.01); var h = i + 1; h < 2 ? h = 2 : h > 2 && (h -= 2); var c = n / h, d = Math.floor(f.log10(c)), g = Math.pow(10, d), u = Math.round(c / g); u < 1 && (u = 1); var p = u * g, x = p * Math.floor(t / p), b = p * Math.ceil(e / p), m = x; if (s && n > 2) { for (; l.push(m), !((m += p) > b);); return { result: l, niceMin: l[0], niceMax: l[l.length - 1] } } var v = t; (l = []).push(v); for (var y = Math.abs(e - t) / i, w = 0; w <= i; w++)v += y, l.push(v); return l[l.length - 2] >= e && l.pop(), { result: l, niceMin: l[0], niceMax: l[l.length - 1] } } }, { key: "linearScale", value: function (t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, a = arguments.length > 3 ? arguments[3] : void 0, s = Math.abs(e - t), r = s / (i = this._adjustTicksForSmallRange(i, a, s)); i === Number.MAX_VALUE && (i = 10, r = 1); for (var n = [], o = t; i >= 0;)n.push(o), o += r, i -= 1; return { result: n, niceMin: n[0], niceMax: n[n.length - 1] } } }, { key: "logarithmicScale", value: function (t) { for (var e = [], i = Math.ceil(Math.log10(t)) + 1, a = 0; a < i; a++)e.push(Math.pow(10, a)); return { result: e, niceMin: e[0], niceMax: e[e.length - 1] } } }, { key: "_adjustTicksForSmallRange", value: function (t, e, i) { var a = t; if (void 0 !== e && this.w.config.yaxis[e].labels.formatter && void 0 === this.w.config.yaxis[e].tickAmount) { var s = this.w.config.yaxis[e].labels.formatter(1); f.isNumber(Number(s)) && !f.isFloat(s) && (a = Math.ceil(i)) } return a < t ? a : t } }, { key: "setYScaleForIndex", value: function (t, e, i) { var a = this.w.globals, s = this.w.config, r = a.isBarHorizontal ? s.xaxis : s.yaxis[t]; void 0 === a.yAxisScale[t] && (a.yAxisScale[t] = []); var n = Math.abs(i - e); if (r.logarithmic && n <= 5 && (a.invalidLogScale = !0), r.logarithmic && n > 5) a.allSeriesCollapsed = !1, a.yAxisScale[t] = this.logarithmicScale(i); else if (i !== -Number.MAX_VALUE && f.isNumber(i)) if (a.allSeriesCollapsed = !1, void 0 === r.min && void 0 === r.max || r.forceNiceScale) { var o = void 0 === s.yaxis[t].max && void 0 === s.yaxis[t].min || s.yaxis[t].forceNiceScale; a.yAxisScale[t] = this.niceScale(e, i, r.tickAmount ? r.tickAmount : n < 5 && n > 1 ? n + 1 : 5, t, o) } else a.yAxisScale[t] = this.linearScale(e, i, r.tickAmount, t); else a.yAxisScale[t] = this.linearScale(0, 5, 5) } }, { key: "setXScale", value: function (t, e) { var i = this.w, a = i.globals, s = i.config.xaxis, r = Math.abs(e - t); return e !== -Number.MAX_VALUE && f.isNumber(e) ? a.xAxisScale = this.niceScale(t, e, s.tickAmount ? s.tickAmount : r < 5 && r > 1 ? r + 1 : 5, 0) : a.xAxisScale = this.linearScale(0, 5, 5), a.xAxisScale } }, { key: "setMultipleYScales", value: function () { var t = this, e = this.w.globals, i = this.w.config, a = e.minYArr.concat([]), s = e.maxYArr.concat([]), r = []; i.yaxis.forEach((function (e, n) { var o = n; i.series.forEach((function (t, i) { t.name === e.seriesName && (o = i, n !== i ? r.push({ index: i, similarIndex: n, alreadyExists: !0 }) : r.push({ index: i })) })); var l = a[o], h = s[o]; t.setYScaleForIndex(n, l, h) })), this.sameScaleInMultipleAxes(a, s, r) } }, { key: "sameScaleInMultipleAxes", value: function (t, e, i) { var a = this, s = this.w.config, r = this.w.globals, n = []; i.forEach((function (t) { t.alreadyExists && (void 0 === n[t.index] && (n[t.index] = []), n[t.index].push(t.index), n[t.index].push(t.similarIndex)) })), r.yAxisSameScaleIndices = n, n.forEach((function (t, e) { n.forEach((function (i, a) { var s, r; e !== a && (s = t, r = i, s.filter((function (t) { return -1 !== r.indexOf(t) }))).length > 0 && (n[e] = n[e].concat(n[a])) })) })); var o = n.map((function (t) { return t.filter((function (e, i) { return t.indexOf(e) === i })) })).map((function (t) { return t.sort() })); n = n.filter((function (t) { return !!t })); var l = o.slice(), h = l.map((function (t) { return JSON.stringify(t) })); l = l.filter((function (t, e) { return h.indexOf(JSON.stringify(t)) === e })); var c = [], d = []; t.forEach((function (t, i) { l.forEach((function (a, s) { a.indexOf(i) > -1 && (void 0 === c[s] && (c[s] = [], d[s] = []), c[s].push({ key: i, value: t }), d[s].push({ key: i, value: e[i] })) })) })); var g = Array.apply(null, Array(l.length)).map(Number.prototype.valueOf, Number.MIN_VALUE), u = Array.apply(null, Array(l.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE); c.forEach((function (t, e) { t.forEach((function (t, i) { g[e] = Math.min(t.value, g[e]) })) })), d.forEach((function (t, e) { t.forEach((function (t, i) { u[e] = Math.max(t.value, u[e]) })) })), t.forEach((function (t, e) { d.forEach((function (t, i) { var n = g[i], o = u[i]; s.chart.stacked && (o = 0, t.forEach((function (t, e) { t.value !== -Number.MAX_VALUE && (o += t.value), n !== Number.MIN_VALUE && (n += c[i][e].value) }))), t.forEach((function (i, l) { t[l].key === e && (void 0 !== s.yaxis[e].min && (n = "function" == typeof s.yaxis[e].min ? s.yaxis[e].min(r.minY) : s.yaxis[e].min), void 0 !== s.yaxis[e].max && (o = "function" == typeof s.yaxis[e].max ? s.yaxis[e].max(r.maxY) : s.yaxis[e].max), a.setYScaleForIndex(e, n, o)) })) })) })) } }, { key: "autoScaleY", value: function (t, e, i) { t || (t = this); var a = t.w; if (a.globals.isMultipleYAxis || a.globals.collapsedSeries.length) return console.warn("autoScaleYaxis is not supported in a multi-yaxis chart."), e; var s = a.globals.seriesX[0], r = a.config.chart.stacked; return e.forEach((function (t, n) { for (var o = 0, l = 0; l < s.length; l++)if (s[l] >= i.xaxis.min) { o = l; break } var h, c, d = a.globals.minYArr[n], g = a.globals.maxYArr[n], u = a.globals.stackedSeriesTotals; a.globals.series.forEach((function (n, l) { var f = n[o]; r ? (f = u[o], h = c = f, u.forEach((function (t, e) { s[e] <= i.xaxis.max && s[e] >= i.xaxis.min && (t > c && null !== t && (c = t), n[e] < h && null !== n[e] && (h = n[e])) }))) : (h = c = f, n.forEach((function (t, e) { if (s[e] <= i.xaxis.max && s[e] >= i.xaxis.min) { var r = t, n = t; a.globals.series.forEach((function (i, a) { null !== t && (r = Math.min(i[e], r), n = Math.max(i[e], n)) })), n > c && null !== n && (c = n), r < h && null !== r && (h = r) } }))), void 0 === h && void 0 === c && (h = d, c = g), (c *= c < 0 ? .9 : 1.1) < 0 && c < g && (c = g), (h *= h < 0 ? 1.1 : .9) < 0 && h > d && (h = d), e.length > 1 ? (e[l].min = void 0 === t.min ? h : t.min, e[l].max = void 0 === t.max ? c : t.max) : (e[0].min = void 0 === t.min ? h : t.min, e[0].max = void 0 === t.max ? c : t.max) })) })), e } }]), t }(), U = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w, this.scales = new j(i) } return a(t, [{ key: "init", value: function () { this.setYRange(), this.setXRange(), this.setZRange() } }, { key: "getMinYMaxY", value: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -Number.MAX_VALUE, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s = this.w.config, r = this.w.globals, n = -Number.MAX_VALUE, o = Number.MIN_VALUE; null === a && (a = t + 1); var l = r.series, h = l, c = l; "candlestick" === s.chart.type ? (h = r.seriesCandleL, c = r.seriesCandleH) : r.isRangeData && (h = r.seriesRangeStart, c = r.seriesRangeEnd); for (var d = t; d < a; d++) { r.dataPoints = Math.max(r.dataPoints, l[d].length); for (var g = 0; g < r.series[d].length; g++) { var u = l[d][g]; null !== u && f.isNumber(u) ? (n = Math.max(n, c[d][g]), e = Math.min(e, h[d][g]), i = Math.max(i, h[d][g]), "candlestick" === this.w.config.chart.type && (n = Math.max(n, r.seriesCandleO[d][g]), n = Math.max(n, r.seriesCandleH[d][g]), n = Math.max(n, r.seriesCandleL[d][g]), i = n = Math.max(n, r.seriesCandleC[d][g])), f.isFloat(u) && (u = f.noExponents(u), r.yValueDecimal = Math.max(r.yValueDecimal, u.toString().split(".")[1].length)), o > h[d][g] && h[d][g] < 0 && (o = h[d][g])) : r.hasNullValues = !0 } } return "rangeBar" === s.chart.type && r.seriesRangeStart.length && r.isBarHorizontal && "datetime" === s.xaxis.type && (o = e), "bar" === s.chart.type && (o < 0 && n < 0 && (n = 0), o === Number.MIN_VALUE && (o = 0)), { minY: o, maxY: n, lowestY: e, highestY: i } } }, { key: "setYRange", value: function () { var t = this.w.globals, e = this.w.config; t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE; var i = Number.MAX_VALUE; if (t.isMultipleYAxis) for (var a = 0; a < t.series.length; a++) { var s = this.getMinYMaxY(a, i, null, a + 1); t.minYArr.push(s.minY), t.maxYArr.push(s.maxY), i = s.lowestY } var r = this.getMinYMaxY(0, i, null, t.series.length); if (t.minY = r.minY, t.maxY = r.maxY, i = r.lowestY, e.chart.stacked && this._setStackedMinMax(), ("line" === e.chart.type || "area" === e.chart.type || "candlestick" === e.chart.type || "rangeBar" === e.chart.type && !t.isBarHorizontal) && t.minY === Number.MIN_VALUE && i !== -Number.MAX_VALUE && i !== t.maxY) { var n = t.maxY - i; (i >= 0 && i <= 10 || void 0 !== e.yaxis[0].min || void 0 !== e.yaxis[0].max) && (n = 0), t.minY = i - 5 * n / 100, i > 0 && t.minY < 0 && (t.minY = 0), t.maxY = t.maxY + 5 * n / 100 } if (e.yaxis.forEach((function (e, i) { void 0 !== e.max && ("number" == typeof e.max ? t.maxYArr[i] = e.max : "function" == typeof e.max && (t.maxYArr[i] = e.max(t.isMultipleYAxis ? t.maxYArr[i] : t.maxY)), t.maxY = t.maxYArr[i]), void 0 !== e.min && ("number" == typeof e.min ? t.minYArr[i] = e.min : "function" == typeof e.min && (t.minYArr[i] = e.min(t.isMultipleYAxis ? t.minYArr[i] === Number.MIN_VALUE ? 0 : t.minYArr[i] : t.minY)), t.minY = t.minYArr[i]) })), t.isBarHorizontal) { ["min", "max"].forEach((function (i) { void 0 !== e.xaxis[i] && "number" == typeof e.xaxis[i] && ("min" === i ? t.minY = e.xaxis[i] : t.maxY = e.xaxis[i]) })) } return t.isMultipleYAxis ? (this.scales.setMultipleYScales(), t.minY = i, t.yAxisScale.forEach((function (e, i) { t.minYArr[i] = e.niceMin, t.maxYArr[i] = e.niceMax }))) : (this.scales.setYScaleForIndex(0, t.minY, t.maxY), t.minY = t.yAxisScale[0].niceMin, t.maxY = t.yAxisScale[0].niceMax, t.minYArr[0] = t.yAxisScale[0].niceMin, t.maxYArr[0] = t.yAxisScale[0].niceMax), { minY: t.minY, maxY: t.maxY, minYArr: t.minYArr, maxYArr: t.maxYArr, yAxisScale: t.yAxisScale } } }, { key: "setXRange", value: function () { var t = this.w.globals, e = this.w.config, i = "numeric" === e.xaxis.type || "datetime" === e.xaxis.type || "category" === e.xaxis.type && !t.noLabelsProvided || t.noLabelsProvided || t.isXNumeric; if (t.isXNumeric && function () { for (var e = 0; e < t.series.length; e++)if (t.labels[e]) for (var i = 0; i < t.labels[e].length; i++)null !== t.labels[e][i] && f.isNumber(t.labels[e][i]) && (t.maxX = Math.max(t.maxX, t.labels[e][i]), t.initialMaxX = Math.max(t.maxX, t.labels[e][i]), t.minX = Math.min(t.minX, t.labels[e][i]), t.initialMinX = Math.min(t.minX, t.labels[e][i])) }(), t.noLabelsProvided && 0 === e.xaxis.categories.length && (t.maxX = t.labels[t.labels.length - 1], t.initialMaxX = t.labels[t.labels.length - 1], t.minX = 1, t.initialMinX = 1), t.isXNumeric || t.noLabelsProvided || t.dataFormatXNumeric) { var a; if (void 0 === e.xaxis.tickAmount ? (a = Math.round(t.svgWidth / 150), "numeric" === e.xaxis.type && t.dataPoints < 30 && (a = t.dataPoints - 1), a > t.dataPoints && 0 !== t.dataPoints && (a = t.dataPoints - 1)) : "dataPoints" === e.xaxis.tickAmount ? (t.series.length > 1 && (a = t.series[t.maxValsInArrayIndex].length - 1), t.isXNumeric && (a = t.maxX - t.minX - 1)) : a = e.xaxis.tickAmount, t.xTickAmount = a, void 0 !== e.xaxis.max && "number" == typeof e.xaxis.max && (t.maxX = e.xaxis.max), void 0 !== e.xaxis.min && "number" == typeof e.xaxis.min && (t.minX = e.xaxis.min), void 0 !== e.xaxis.range && (t.minX = t.maxX - e.xaxis.range), t.minX !== Number.MAX_VALUE && t.maxX !== -Number.MAX_VALUE) if (e.xaxis.convertedCatToNumeric && !t.dataFormatXNumeric) { for (var s = [], r = t.minX - 1; r < t.maxX; r++)s.push(r + 1); t.xAxisScale = { result: s, niceMin: s[0], niceMax: s[s.length - 1] } } else t.xAxisScale = this.scales.setXScale(t.minX, t.maxX); else t.xAxisScale = this.scales.linearScale(1, a, a), t.noLabelsProvided && t.labels.length > 0 && (t.xAxisScale = this.scales.linearScale(1, t.labels.length, a - 1), t.seriesX = t.labels.slice()); i && (t.labels = t.xAxisScale.result.slice()) } return t.isBarHorizontal && t.labels.length && (t.xTickAmount = t.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), { minX: t.minX, maxX: t.maxX } } }, { key: "setZRange", value: function () { var t = this.w.globals; if (t.isDataXYZ) for (var e = 0; e < t.series.length; e++)if (void 0 !== t.seriesZ[e]) for (var i = 0; i < t.seriesZ[e].length; i++)null !== t.seriesZ[e][i] && f.isNumber(t.seriesZ[e][i]) && (t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i]), t.minZ = Math.min(t.minZ, t.seriesZ[e][i])) } }, { key: "_handleSingleDataPoint", value: function () { var t = this.w.globals, e = this.w.config; if (t.minX === t.maxX) { var i = new Y(this.ctx); if ("datetime" === e.xaxis.type) { var a = i.getDate(t.minX); a.setUTCDate(a.getDate() - 2), t.minX = new Date(a).getTime(); var s = i.getDate(t.maxX); s.setUTCDate(s.getDate() + 2), t.maxX = new Date(s).getTime() } else ("numeric" === e.xaxis.type || "category" === e.xaxis.type && !t.noLabelsProvided) && (t.minX = t.minX - 2, t.initialMinX = t.minX, t.maxX = t.maxX + 2, t.initialMaxX = t.maxX) } } }, { key: "_getMinXDiff", value: function () { var t = this.w.globals; t.isXNumeric && t.seriesX.forEach((function (e, i) { 1 === e.length && e.push(t.seriesX[t.maxValsInArrayIndex][t.seriesX[t.maxValsInArrayIndex].length - 1]); var a = e.slice(); a.sort((function (t, e) { return t - e })), a.forEach((function (e, a) { if (a > 0) { var s = e - t.seriesX[i][a - 1]; s > 0 && (t.minXDiff = Math.min(s, t.minXDiff)) } })), 1 === t.dataPoints && t.minXDiff === Number.MAX_VALUE && (t.minXDiff = .5) })) } }, { key: "_setStackedMinMax", value: function () { var t = this.w.globals, e = [], i = []; if (t.series.length) for (var a = 0; a < t.series[t.maxValsInArrayIndex].length; a++)for (var s = 0, r = 0, n = 0; n < t.series.length; n++)null !== t.series[n][a] && f.isNumber(t.series[n][a]) && (t.series[n][a] > 0 ? s = s + parseFloat(t.series[n][a]) + 1e-4 : r += parseFloat(t.series[n][a])), n === t.series.length - 1 && (e.push(s), i.push(r)); for (var o = 0; o < e.length; o++)t.maxY = Math.max(t.maxY, e[o]), t.minY = Math.min(t.minY, i[o]) } }]), t }(), q = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w; var a = this.w; this.xaxisFontSize = a.config.xaxis.labels.style.fontSize, this.axisFontFamily = a.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = a.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = "bar" === a.config.chart.type && a.config.plotOptions.bar.horizontal, this.xAxisoffX = 0, "bottom" === a.config.xaxis.position && (this.xAxisoffX = a.globals.gridHeight), this.drawnLabels = [], this.axesUtils = new B(i) } return a(t, [{ key: "drawYaxis", value: function (t) { var e = this, i = this.w, a = new b(this.ctx), s = i.config.yaxis[t].labels.style, r = s.fontSize, n = s.fontFamily, o = s.fontWeight, l = a.group({ class: "apexcharts-yaxis", rel: t, transform: "translate(" + i.globals.translateYAxisX[t] + ", 0)" }); if (this.axesUtils.isYAxisHidden(t)) return l; var h = a.group({ class: "apexcharts-yaxis-texts-g" }); l.add(h); var c = i.globals.yAxisScale[t].result.length - 1, d = i.globals.gridHeight / c, g = i.globals.translateY, u = i.globals.yLabelFormatters[t], f = i.globals.yAxisScale[t].result.slice(); f = this.axesUtils.checkForReversedLabels(t, f); var p = ""; if (i.config.yaxis[t].labels.show) for (var x = function (l) { var x = f[l]; x = u(x, l); var b = i.config.yaxis[t].labels.padding; i.config.yaxis[t].opposite && 0 !== i.config.yaxis.length && (b *= -1); var m = e.axesUtils.getYAxisForeColor(s.colors, t), v = a.drawText({ x: b, y: g + c / 10 + i.config.yaxis[t].labels.offsetY + 1, text: x, textAnchor: i.config.yaxis[t].opposite ? "start" : "end", fontSize: r, fontFamily: n, fontWeight: o, foreColor: Array.isArray(m) ? m[l] : m, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + s.cssClass }); if (l === c && (p = v), h.add(v), 0 !== i.config.yaxis[t].labels.rotate) { var y = a.rotateAroundCenter(p.node), w = a.rotateAroundCenter(v.node); v.node.setAttribute("transform", "rotate(".concat(i.config.yaxis[t].labels.rotate, " ").concat(y.x, " ").concat(w.y, ")")) } g += d }, m = c; m >= 0; m--)x(m); if (void 0 !== i.config.yaxis[t].title.text) { var v = a.group({ class: "apexcharts-yaxis-title" }), y = 0; i.config.yaxis[t].opposite && (y = i.globals.translateYAxisX[t]); var w = a.drawText({ x: y, y: i.globals.gridHeight / 2 + i.globals.translateY + i.config.yaxis[t].title.offsetY, text: i.config.yaxis[t].title.text, textAnchor: "end", foreColor: i.config.yaxis[t].title.style.color, fontSize: i.config.yaxis[t].title.style.fontSize, fontWeight: i.config.yaxis[t].title.style.fontWeight, fontFamily: i.config.yaxis[t].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + i.config.yaxis[t].title.style.cssClass }); v.add(w), l.add(v) } var k = i.config.yaxis[t].axisBorder, A = 31 + k.offsetX; if (i.config.yaxis[t].opposite && (A = -31 - k.offsetX), k.show) { var S = a.drawLine(A, i.globals.translateY + k.offsetY - 2, A, i.globals.gridHeight + i.globals.translateY + k.offsetY + 2, k.color, 0, k.width); l.add(S) } return i.config.yaxis[t].axisTicks.show && this.axesUtils.drawYAxisTicks(A, c, k, i.config.yaxis[t].axisTicks, t, d, l), l } }, { key: "drawYaxisInversed", value: function (t) { var e = this.w, i = new b(this.ctx), a = i.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }), s = i.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")") }); a.add(s); var r = e.globals.yAxisScale[t].result.length - 1, n = e.globals.gridWidth / r + .1, o = n + e.config.xaxis.labels.offsetX, l = e.globals.xLabelFormatter, h = e.globals.yAxisScale[t].result.slice(), c = e.globals.timescaleLabels; c.length > 0 && (this.xaxisLabels = c.slice(), r = (h = c.slice()).length), h = this.axesUtils.checkForReversedLabels(t, h); var d = c.length; if (e.config.xaxis.labels.show) for (var g = d ? 0 : r; d ? g < d : g >= 0; d ? g++ : g--) { var u = h[g]; u = l(u, g); var f = e.globals.gridWidth + e.globals.padHorizontal - (o - n + e.config.xaxis.labels.offsetX); if (c.length) { var p = this.axesUtils.getLabel(h, c, f, g, this.drawnLabels, this.xaxisFontSize); f = p.x, u = p.text, this.drawnLabels.push(p.text), 0 === g && e.globals.skipFirstTimelinelabel && (u = ""), g === h.length - 1 && e.globals.skipLastTimelinelabel && (u = "") } var x = i.drawText({ x: f, y: this.xAxisoffX + e.config.xaxis.labels.offsetY + 30 - ("top" === e.config.xaxis.position ? e.globals.xAxisHeight + e.config.xaxis.axisTicks.height - 2 : 0), text: u, textAnchor: "middle", foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t] : this.xaxisForeColors, fontSize: this.xaxisFontSize, fontFamily: this.xaxisFontFamily, fontWeight: e.config.xaxis.labels.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass }); s.add(x), x.tspan(u); var m = document.createElementNS(e.globals.SVGNS, "title"); m.textContent = u, x.node.appendChild(m), o += n } return this.inversedYAxisTitleText(a), this.inversedYAxisBorder(a), a } }, { key: "inversedYAxisBorder", value: function (t) { var e = this.w, i = new b(this.ctx), a = e.config.xaxis.axisBorder; if (a.show) { var s = 0; "bar" === e.config.chart.type && e.globals.isXNumeric && (s -= 15); var r = i.drawLine(e.globals.padHorizontal + s + a.offsetX, this.xAxisoffX, e.globals.gridWidth, this.xAxisoffX, a.color, 0, a.height); t.add(r) } } }, { key: "inversedYAxisTitleText", value: function (t) { var e = this.w, i = new b(this.ctx); if (void 0 !== e.config.xaxis.title.text) { var a = i.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }), s = i.drawText({ x: e.globals.gridWidth / 2 + e.config.xaxis.title.offsetX, y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e.config.xaxis.title.style.fontSize) + e.config.xaxis.title.offsetY + 20, text: e.config.xaxis.title.text, textAnchor: "middle", fontSize: e.config.xaxis.title.style.fontSize, fontFamily: e.config.xaxis.title.style.fontFamily, fontWeight: e.config.xaxis.title.style.fontWeight, foreColor: e.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass }); a.add(s), t.add(a) } } }, { key: "yAxisTitleRotate", value: function (t, e) { var i = this.w, a = new b(this.ctx), s = { width: 0, height: 0 }, r = { width: 0, height: 0 }, n = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-texts-g")); null !== n && (s = n.getBoundingClientRect()); var o = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-title text")); if (null !== o && (r = o.getBoundingClientRect()), null !== o) { var l = this.xPaddingForYAxisTitle(t, s, r, e); o.setAttribute("x", l.xPos - (e ? 10 : 0)) } if (null !== o) { var h = a.rotateAroundCenter(o); o.setAttribute("transform", "rotate(".concat(e ? -1 * i.config.yaxis[t].title.rotate : i.config.yaxis[t].title.rotate, " ").concat(h.x, " ").concat(h.y, ")")) } } }, { key: "xPaddingForYAxisTitle", value: function (t, e, i, a) { var s = this.w, r = 0, n = 0, o = 10; return void 0 === s.config.yaxis[t].title.text || t < 0 ? { xPos: n, padd: 0 } : (a ? (n = e.width + s.config.yaxis[t].title.offsetX + i.width / 2 + o / 2, 0 === (r += 1) && (n -= o / 2)) : (n = -1 * e.width + s.config.yaxis[t].title.offsetX + o / 2 + i.width / 2, s.globals.isBarHorizontal && (o = 25, n = -1 * e.width - s.config.yaxis[t].title.offsetX - o)), { xPos: n, padd: o }) } }, { key: "setYAxisXPosition", value: function (t, e) { var i = this.w, a = 0, s = 0, r = 18, n = 1; i.config.yaxis.length > 1 && (this.multipleYs = !0), i.config.yaxis.map((function (o, l) { var h = i.globals.ignoreYAxisIndexes.indexOf(l) > -1 || !o.show || o.floating || 0 === t[l].width, c = t[l].width + e[l].width; o.opposite ? i.globals.isBarHorizontal ? (s = i.globals.gridWidth + i.globals.translateX - 1, i.globals.translateYAxisX[l] = s - o.labels.offsetX) : (s = i.globals.gridWidth + i.globals.translateX + n, h || (n = n + c + 20), i.globals.translateYAxisX[l] = s - o.labels.offsetX + 20) : (a = i.globals.translateX - r, h || (r = r + c + 20), i.globals.translateYAxisX[l] = a + o.labels.offsetX) })) } }, { key: "setYAxisTextAlignments", value: function () { var t = this.w, e = t.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis"); (e = f.listToArray(e)).forEach((function (e, i) { var a = t.config.yaxis[i]; if (a && void 0 !== a.labels.align) { var s = t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-texts-g")), r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-label")); r = f.listToArray(r); var n = s.getBoundingClientRect(); "left" === a.labels.align ? (r.forEach((function (t, e) { t.setAttribute("text-anchor", "start") })), a.opposite || s.setAttribute("transform", "translate(-".concat(n.width, ", 0)"))) : "center" === a.labels.align ? (r.forEach((function (t, e) { t.setAttribute("text-anchor", "middle") })), s.setAttribute("transform", "translate(".concat(n.width / 2 * (a.opposite ? 1 : -1), ", 0)"))) : "right" === a.labels.align && (r.forEach((function (t, e) { t.setAttribute("text-anchor", "end") })), a.opposite && s.setAttribute("transform", "translate(".concat(n.width, ", 0)"))) } })) } }]), t }(), Z = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w, this.documentEvent = f.bind(this.documentEvent, this) } return a(t, [{ key: "addEventListener", value: function (t, e) { var i = this.w; i.globals.events.hasOwnProperty(t) ? i.globals.events[t].push(e) : i.globals.events[t] = [e] } }, { key: "removeEventListener", value: function (t, e) { var i = this.w; if (i.globals.events.hasOwnProperty(t)) { var a = i.globals.events[t].indexOf(e); -1 !== a && i.globals.events[t].splice(a, 1) } } }, { key: "fireEvent", value: function (t, e) { var i = this.w; if (i.globals.events.hasOwnProperty(t)) { e && e.length || (e = []); for (var a = i.globals.events[t], s = a.length, r = 0; r < s; r++)a[r].apply(null, e) } } }, { key: "setupEventHandlers", value: function () { var t = this, e = this.w, i = this.ctx, a = e.globals.dom.baseEl.querySelector(e.globals.chartClass); this.ctx.eventList.forEach((function (t) { a.addEventListener(t, (function (t) { var a = Object.assign({}, e, { seriesIndex: e.globals.capturedSeriesIndex, dataPointIndex: e.globals.capturedDataPointIndex }); "mousemove" === t.type || "touchmove" === t.type ? "function" == typeof e.config.chart.events.mouseMove && e.config.chart.events.mouseMove(t, i, a) : ("mouseup" === t.type && 1 === t.which || "touchend" === t.type) && ("function" == typeof e.config.chart.events.click && e.config.chart.events.click(t, i, a), i.ctx.events.fireEvent("click", [t, i, a])) }), { capture: !1, passive: !0 }) })), this.ctx.eventList.forEach((function (i) { e.globals.dom.baseEl.addEventListener(i, t.documentEvent, { passive: !0 }) })), this.ctx.core.setupBrushHandler() } }, { key: "documentEvent", value: function (t) { var e = this.w, i = t.target.className; if ("click" === t.type) { var a = e.globals.dom.baseEl.querySelector(".apexcharts-menu"); a && a.classList.contains("apexcharts-menu-open") && "apexcharts-menu-icon" !== i && a.classList.remove("apexcharts-menu-open") } e.globals.clientX = "touchmove" === t.type ? t.touches[0].clientX : t.clientX, e.globals.clientY = "touchmove" === t.type ? t.touches[0].clientY : t.clientY } }]), t }(), $ = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "setCurrentLocaleValues", value: function (t) { var e = this.w.config.chart.locales; window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (e = this.w.config.chart.locales.concat(window.Apex.chart.locales)); var i = e.filter((function (e) { return e.name === t }))[0]; if (!i) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options"); var a = f.extend(A, i); this.w.globals.locale = a.options } }]), t }(), J = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "drawAxis", value: function (t, e) { var i, a, s = this.w.globals, r = this.w.config, n = new G(this.ctx), o = new q(this.ctx); s.axisCharts && "radar" !== t && (s.isBarHorizontal ? (a = o.drawYaxisInversed(0), i = n.drawXaxisInversed(0), s.dom.elGraphical.add(i), s.dom.elGraphical.add(a)) : (i = n.drawXaxis(), s.dom.elGraphical.add(i), r.yaxis.map((function (t, e) { -1 === s.ignoreYAxisIndexes.indexOf(e) && (a = o.drawYaxis(e), s.dom.Paper.add(a)) })))); r.yaxis.map((function (t, e) { -1 === s.ignoreYAxisIndexes.indexOf(e) && o.yAxisTitleRotate(e, t.opposite) })) } }]), t }(), Q = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "drawXCrosshairs", value: function () { var t = this.w, e = new b(this.ctx), i = new p(this.ctx), a = t.config.xaxis.crosshairs.fill.gradient, s = t.config.xaxis.crosshairs.dropShadow, r = t.config.xaxis.crosshairs.fill.type, n = a.colorFrom, o = a.colorTo, l = a.opacityFrom, h = a.opacityTo, c = a.stops, d = s.enabled, g = s.left, u = s.top, x = s.blur, m = s.color, v = s.opacity, y = t.config.xaxis.crosshairs.fill.color; if (t.config.xaxis.crosshairs.show) { "gradient" === r && (y = e.drawGradient("vertical", n, o, l, h, null, c, null)); var w = e.drawRect(); 1 === t.config.xaxis.crosshairs.width && (w = e.drawLine()), w.attr({ class: "apexcharts-xcrosshairs", x: 0, y: 0, y2: t.globals.gridHeight, width: f.isNumber(t.config.xaxis.crosshairs.width) ? t.config.xaxis.crosshairs.width : 0, height: t.globals.gridHeight, fill: y, filter: "none", "fill-opacity": t.config.xaxis.crosshairs.opacity, stroke: t.config.xaxis.crosshairs.stroke.color, "stroke-width": t.config.xaxis.crosshairs.stroke.width, "stroke-dasharray": t.config.xaxis.crosshairs.stroke.dashArray }), d && (w = i.dropShadow(w, { left: g, top: u, blur: x, color: m, opacity: v })), t.globals.dom.elGraphical.add(w) } } }, { key: "drawYCrosshairs", value: function () { var t = this.w, e = new b(this.ctx), i = t.config.yaxis[0].crosshairs, a = t.globals.barPadForNumericAxis; if (t.config.yaxis[0].crosshairs.show) { var s = e.drawLine(-a, 0, t.globals.gridWidth + a, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width); s.attr({ class: "apexcharts-ycrosshairs" }), t.globals.dom.elGraphical.add(s) } var r = e.drawLine(-a, 0, t.globals.gridWidth + a, 0, i.stroke.color, 0, 0); r.attr({ class: "apexcharts-ycrosshairs-hidden" }), t.globals.dom.elGraphical.add(r) } }]), t }(), K = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "checkResponsiveConfig", value: function (t) { var e = this, i = this.w, a = i.config; if (0 !== a.responsive.length) { var s = a.responsive.slice(); s.sort((function (t, e) { return t.breakpoint > e.breakpoint ? 1 : e.breakpoint > t.breakpoint ? -1 : 0 })).reverse(); var r = new D({}), n = function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = s[0].breakpoint, n = window.innerWidth > 0 ? window.innerWidth : screen.width; if (n > a) { var o = y.extendArrayProps(r, i.globals.initialConfig, i); t = f.extend(o, t), t = f.extend(i.config, t), e.overrideResponsiveOptions(t) } else for (var l = 0; l < s.length; l++)n < s[l].breakpoint && (t = y.extendArrayProps(r, s[l].options, i), t = f.extend(i.config, t), e.overrideResponsiveOptions(t)) }; if (t) { var o = y.extendArrayProps(r, t, i); o = f.extend(i.config, o), n(o = f.extend(o, t)) } else n({}) } } }, { key: "overrideResponsiveOptions", value: function (t) { var e = new D(t).init({ responsiveOverride: !0 }); this.w.config = e } }]), t }(), tt = function () { function t(i) { e(this, t), this.ctx = i, this.colors = [], this.w = i.w; var a = this.w; this.isColorFn = !1, this.isHeatmapDistributed = "treemap" === a.config.chart.type && a.config.plotOptions.treemap.distributed || "heatmap" === a.config.chart.type && a.config.plotOptions.heatmap.distributed, this.isBarDistributed = a.config.plotOptions.bar.distributed && ("bar" === a.config.chart.type || "rangeBar" === a.config.chart.type) } return a(t, [{ key: "init", value: function () { this.setDefaultColors() } }, { key: "setDefaultColors", value: function () { var t = this, e = this.w, i = new f; if (e.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(e.config.theme.mode)), void 0 === e.config.colors ? e.globals.colors = this.predefined() : (e.globals.colors = e.config.colors, Array.isArray(e.config.colors) && e.config.colors.length > 0 && "function" == typeof e.config.colors[0] && (e.globals.colors = e.config.series.map((function (i, a) { var s = e.config.colors[a]; return s || (s = e.config.colors[0]), "function" == typeof s ? (t.isColorFn = !0, s({ value: e.globals.axisCharts ? e.globals.series[a][0] ? e.globals.series[a][0] : 0 : e.globals.series[a], seriesIndex: a, dataPointIndex: a, w: e })) : s })))), e.globals.seriesColors.map((function (t, i) { t && (e.globals.colors[i] = t) })), e.config.theme.monochrome.enabled) { var a = [], s = e.globals.series.length; (this.isBarDistributed || this.isHeatmapDistributed) && (s = e.globals.series[0].length * e.globals.series.length); for (var r = e.config.theme.monochrome.color, n = 1 / (s / e.config.theme.monochrome.shadeIntensity), o = e.config.theme.monochrome.shadeTo, l = 0, h = 0; h < s; h++) { var c = void 0; "dark" === o ? (c = i.shadeColor(-1 * l, r), l += n) : (c = i.shadeColor(l, r), l += n), a.push(c) } e.globals.colors = a.slice() } var d = e.globals.colors.slice(); this.pushExtraColors(e.globals.colors);["fill", "stroke"].forEach((function (i) { void 0 === e.config[i].colors ? e.globals[i].colors = t.isColorFn ? e.config.colors : d : e.globals[i].colors = e.config[i].colors.slice(), t.pushExtraColors(e.globals[i].colors) })), void 0 === e.config.dataLabels.style.colors ? e.globals.dataLabels.style.colors = d : e.globals.dataLabels.style.colors = e.config.dataLabels.style.colors.slice(), this.pushExtraColors(e.globals.dataLabels.style.colors, 50), void 0 === e.config.plotOptions.radar.polygons.fill.colors ? e.globals.radarPolygons.fill.colors = ["dark" === e.config.theme.mode ? "#424242" : "#fff"] : e.globals.radarPolygons.fill.colors = e.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(e.globals.radarPolygons.fill.colors, 20), void 0 === e.config.markers.colors ? e.globals.markers.colors = d : e.globals.markers.colors = e.config.markers.colors.slice(), this.pushExtraColors(e.globals.markers.colors) } }, { key: "pushExtraColors", value: function (t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a = this.w, s = e || a.globals.series.length; if (null === i && (i = this.isBarDistributed || this.isHeatmapDistributed || "heatmap" === a.config.chart.type && a.config.plotOptions.heatmap.colorScale.inverse), i && a.globals.series.length && (s = a.globals.series[a.globals.maxValsInArrayIndex].length * a.globals.series.length), t.length < s) for (var r = s - t.length, n = 0; n < r; n++)t.push(t[n]) } }, { key: "updateThemeOptions", value: function (t) { t.chart = t.chart || {}, t.tooltip = t.tooltip || {}; var e = t.theme.mode || "light", i = t.theme.palette ? t.theme.palette : "dark" === e ? "palette4" : "palette1", a = t.chart.foreColor ? t.chart.foreColor : "dark" === e ? "#f6f7f8" : "#373d3f"; return t.tooltip.theme = e, t.chart.foreColor = a, t.theme.palette = i, t } }, { key: "predefined", value: function () { switch (this.w.config.theme.palette) { case "palette1": this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"]; break; case "palette2": this.colors = ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"]; break; case "palette3": this.colors = ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"]; break; case "palette4": this.colors = ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"]; break; case "palette5": this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"]; break; case "palette6": this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"]; break; case "palette7": this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"]; break; case "palette8": this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"]; break; case "palette9": this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"]; break; case "palette10": this.colors = ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"]; break; default: this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"] }return this.colors } }]), t }(), et = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "draw", value: function () { this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle") } }, { key: "drawTitleSubtitle", value: function (t) { var e = this.w, i = "title" === t ? e.config.title : e.config.subtitle, a = e.globals.svgWidth / 2, s = i.offsetY, r = "middle"; if ("left" === i.align ? (a = 10, r = "start") : "right" === i.align && (a = e.globals.svgWidth - 10, r = "end"), a += i.offsetX, s = s + parseInt(i.style.fontSize, 10) + i.margin / 2, void 0 !== i.text) { var n = new b(this.ctx).drawText({ x: a, y: s, text: i.text, textAnchor: r, fontSize: i.style.fontSize, fontFamily: i.style.fontFamily, fontWeight: i.style.fontWeight, foreColor: i.style.color, opacity: 1 }); n.node.setAttribute("class", "apexcharts-".concat(t, "-text")), e.globals.dom.Paper.add(n) } } }]), t }(), it = function () { function t(i) { e(this, t), this.w = i.w, this.dCtx = i } return a(t, [{ key: "getTitleSubtitleCoords", value: function (t) { var e = this.w, i = 0, a = 0, s = "title" === t ? e.config.title.floating : e.config.subtitle.floating, r = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t, "-text")); if (null !== r && !s) { var n = r.getBoundingClientRect(); i = n.width, a = e.globals.axisCharts ? n.height + 5 : n.height } return { width: i, height: a } } }, { key: "getLegendsRect", value: function () { var t = this.w, e = t.globals.dom.baseEl.querySelector(".apexcharts-legend"); t.config.legend.height || "top" !== t.config.legend.position && "bottom" !== t.config.legend.position || (e.style.maxHeight = t.globals.svgHeight / 2 + "px"); var i = Object.assign({}, f.getBoundingClientRect(e)); return null !== e && !t.config.legend.floating && t.config.legend.show ? this.dCtx.lgRect = { x: i.x, y: i.y, height: i.height, width: 0 === i.height ? 0 : i.width } : this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }, "left" !== t.config.legend.position && "right" !== t.config.legend.position || 1.5 * this.dCtx.lgRect.width > t.globals.svgWidth && (this.dCtx.lgRect.width = t.globals.svgWidth / 1.5), this.dCtx.lgRect } }, { key: "getLargestStringFromMultiArr", value: function (t, e) { var i = t; if (this.w.globals.isMultiLineX) { var a = e.map((function (t, e) { return Array.isArray(t) ? t.length : 1 })), s = Math.max.apply(Math, g(a)); i = e[a.indexOf(s)] } return i } }]), t }(), at = function () { function t(i) { e(this, t), this.w = i.w, this.dCtx = i } return a(t, [{ key: "getxAxisLabelsCoords", value: function () { var t, e = this.w, i = e.globals.labels.slice(); if (e.config.xaxis.convertedCatToNumeric && 0 === i.length && (i = e.globals.categoryLabels), e.globals.timescaleLabels.length > 0) { var a = this.getxAxisTimeScaleLabelsCoords(); t = { width: a.width, height: a.height }, e.globals.rotateXLabels = !1 } else { this.dCtx.lgWidthForSideLegends = "left" !== e.config.legend.position && "right" !== e.config.legend.position || e.config.legend.floating ? 0 : this.dCtx.lgRect.width; var s = e.globals.xLabelFormatter, r = f.getLargestStringFromArr(i), n = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r, i); e.globals.isBarHorizontal && (n = r = e.globals.yAxisScale[0].result.reduce((function (t, e) { return t.length > e.length ? t : e }), 0)); var o = new W(this.dCtx.ctx), l = r; r = o.xLabelFormat(s, r, l, { i: void 0, dateFormatter: new Y(this.dCtx.ctx).formatDate, w: e }), n = o.xLabelFormat(s, n, l, { i: void 0, dateFormatter: new Y(this.dCtx.ctx).formatDate, w: e }), (e.config.xaxis.convertedCatToNumeric && void 0 === r || "" === String(r).trim()) && (n = r = "1"); var h = new b(this.dCtx.ctx), c = h.getTextRects(r, e.config.xaxis.labels.style.fontSize), d = c; if (r !== n && (d = h.getTextRects(n, e.config.xaxis.labels.style.fontSize)), (t = { width: c.width >= d.width ? c.width : d.width, height: c.height >= d.height ? c.height : d.height }).width * i.length > e.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && 0 !== e.config.xaxis.labels.rotate || e.config.xaxis.labels.rotateAlways) { if (!e.globals.isBarHorizontal) { e.globals.rotateXLabels = !0; var g = function (t) { return h.getTextRects(t, e.config.xaxis.labels.style.fontSize, e.config.xaxis.labels.style.fontFamily, "rotate(".concat(e.config.xaxis.labels.rotate, " 0 0)"), !1) }; c = g(r), r !== n && (d = g(n)), t.height = (c.height > d.height ? c.height : d.height) / 1.5, t.width = c.width > d.width ? c.width : d.width } } else e.globals.rotateXLabels = !1 } return e.config.xaxis.labels.show || (t = { width: 0, height: 0 }), { width: t.width, height: t.height } } }, { key: "getxAxisTitleCoords", value: function () { var t = this.w, e = 0, i = 0; if (void 0 !== t.config.xaxis.title.text) { var a = new b(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize); e = a.width, i = a.height } return { width: e, height: i } } }, { key: "getxAxisTimeScaleLabelsCoords", value: function () { var t, e = this.w; this.dCtx.timescaleLabels = e.globals.timescaleLabels.slice(); var i = this.dCtx.timescaleLabels.map((function (t) { return t.value })), a = i.reduce((function (t, e) { return void 0 === t ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t.length > e.length ? t : e }), 0); return 1.05 * (t = new b(this.dCtx.ctx).getTextRects(a, e.config.xaxis.labels.style.fontSize)).width * i.length > e.globals.gridWidth && 0 !== e.config.xaxis.labels.rotate && (e.globals.overlappingXLabels = !0), t } }, { key: "additionalPaddingXLabels", value: function (t) { var e = this, i = this.w, a = i.globals, s = i.config, r = s.xaxis.type, n = t.width; a.skipLastTimelinelabel = !1, a.skipFirstTimelinelabel = !1; var o = i.config.yaxis[0].opposite && i.globals.isBarHorizontal, l = function (t, s) { (function (t) { return -1 !== a.collapsedSeriesIndices.indexOf(t) })(s) || function (t) { if (e.dCtx.timescaleLabels && e.dCtx.timescaleLabels.length) { var s = e.dCtx.timescaleLabels[0], o = e.dCtx.timescaleLabels[e.dCtx.timescaleLabels.length - 1].position + n / 1.75 - e.dCtx.yAxisWidthRight, l = s.position - n / 1.75 + e.dCtx.yAxisWidthLeft; o > a.svgWidth - a.translateX && (a.skipLastTimelinelabel = !0), l < 0 && (a.skipFirstTimelinelabel = !0) } else "datetime" === r ? e.dCtx.gridPad.right < n && !a.rotateXLabels && (a.skipLastTimelinelabel = !0) : "datetime" !== r && e.dCtx.gridPad.right < n / 2 - e.dCtx.yAxisWidthRight && !a.rotateXLabels && ("between" !== i.config.xaxis.tickPlacement || i.globals.isBarHorizontal) && (e.dCtx.xPadRight = n / 2 + 1) }() }; s.yaxis.forEach((function (t, i) { o ? (e.dCtx.gridPad.left < n && (e.dCtx.xPadLeft = n / 2 + 1), e.dCtx.xPadRight = n / 2 + 1) : l(0, i) })) } }]), t }(), st = function () { function t(i) { e(this, t), this.w = i.w, this.dCtx = i } return a(t, [{ key: "getyAxisLabelsCoords", value: function () { var t = this, e = this.w, i = [], a = 10, s = new B(this.dCtx.ctx); return e.config.yaxis.map((function (r, n) { var o = e.globals.yAxisScale[n]; if (!s.isYAxisHidden(n) && r.labels.show && o.result.length) { var l = e.globals.yLabelFormatters[n], h = String(o.niceMin).length > String(o.niceMax).length ? o.niceMin : o.niceMax, c = l(h, { seriesIndex: n, dataPointIndex: -1, w: e }), d = c; if (void 0 !== c && 0 !== c.length || (c = h), e.globals.isBarHorizontal) { a = 0; var g = e.globals.labels.slice(); c = l(c = f.getLargestStringFromArr(g), { seriesIndex: n, dataPointIndex: -1, w: e }), d = t.dCtx.dimHelpers.getLargestStringFromMultiArr(c, g) } var u = new b(t.dCtx.ctx), p = u.getTextRects(c, r.labels.style.fontSize), x = p; c !== d && (x = u.getTextRects(d, r.labels.style.fontSize)), i.push({ width: (x.width > p.width ? x.width : p.width) + a, height: x.height > p.height ? x.height : p.height }) } else i.push({ width: 0, height: 0 }) })), i } }, { key: "getyAxisTitleCoords", value: function () { var t = this, e = this.w, i = []; return e.config.yaxis.map((function (e, a) { if (e.show && void 0 !== e.title.text) { var s = new b(t.dCtx.ctx).getTextRects(e.title.text, e.title.style.fontSize, e.title.style.fontFamily, "rotate(-90 0 0)", !1); i.push({ width: s.width, height: s.height }) } else i.push({ width: 0, height: 0 }) })), i } }, { key: "getTotalYAxisWidth", value: function () { var t = this.w, e = 0, i = 0, a = 0, s = t.globals.yAxisScale.length > 1 ? 10 : 0, r = new B(this.dCtx.ctx), n = function (n, o) { var l = t.config.yaxis[o].floating, h = 0; n.width > 0 && !l ? (h = n.width + s, function (e) { return t.globals.ignoreYAxisIndexes.indexOf(e) > -1 }(o) && (h = h - n.width - s)) : h = l || r.isYAxisHidden(o) ? 0 : 5, t.config.yaxis[o].opposite ? a += h : i += h, e += h }; return t.globals.yLabelsCoords.map((function (t, e) { n(t, e) })), t.globals.yTitleCoords.map((function (t, e) { n(t, e) })), t.globals.isBarHorizontal && !t.config.yaxis[0].floating && (e = t.globals.yLabelsCoords[0].width + t.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = i, this.dCtx.yAxisWidthRight = a, e } }]), t }(), rt = function () { function t(i) { e(this, t), this.w = i.w, this.dCtx = i } return a(t, [{ key: "gridPadForColumnsInNumericAxis", value: function (t) { var e = this.w; if (e.globals.noData || e.globals.allSeriesCollapsed) return 0; var i = e.config.chart.type, a = 0, s = "bar" === i || "rangeBar" === i ? e.config.series.length : 1; if (e.globals.comboBarCount > 0 && (s = e.globals.comboBarCount), e.globals.collapsedSeries.forEach((function (t) { "bar" !== t.type && "rangeBar" !== t.type || (s -= 1) })), e.config.chart.stacked && (s = 1), ("bar" === i || "rangeBar" === i || e.globals.comboBarCount > 0) && e.globals.isXNumeric && !e.globals.isBarHorizontal && s > 0) { var r, n, o = Math.abs(e.globals.initialMaxX - e.globals.initialMinX); o <= 3 && (o = e.globals.dataPoints), r = o / t, e.globals.minXDiff && e.globals.minXDiff / r > 0 && (n = e.globals.minXDiff / r), n > t / 2 && (n /= 2), (a = n / s * parseInt(e.config.plotOptions.bar.columnWidth, 10) / 100) < 1 && (a = 1), a = a / (s > 1 ? 1 : 1.5) + 5, e.globals.barPadForNumericAxis = a } return a } }, { key: "gridPadFortitleSubtitle", value: function () { var t = this, e = this.w, i = e.globals, a = this.dCtx.isSparkline || !e.globals.axisCharts ? 0 : 10;["title", "subtitle"].forEach((function (i) { void 0 !== e.config[i].text ? a += e.config[i].margin : a += t.dCtx.isSparkline || !e.globals.axisCharts ? 0 : 5 })), !e.config.legend.show || "bottom" !== e.config.legend.position || e.config.legend.floating || e.globals.axisCharts || (a += 10); var s = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), r = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle"); i.gridHeight = i.gridHeight - s.height - r.height - a, i.translateY = i.translateY + s.height + r.height + a } }, { key: "setGridXPosForDualYAxis", value: function (t, e) { var i = this.w, a = new B(this.dCtx.ctx); i.config.yaxis.map((function (s, r) { -1 !== i.globals.ignoreYAxisIndexes.indexOf(r) || s.floating || a.isYAxisHidden(r) || (s.opposite && (i.globals.translateX = i.globals.translateX - (e[r].width + t[r].width) - parseInt(i.config.yaxis[r].labels.style.fontSize, 10) / 1.2 - 12), i.globals.translateX < 2 && (i.globals.translateX = 2)) })) } }]), t }(), nt = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new it(this), this.dimYAxis = new st(this), this.dimXAxis = new at(this), this.dimGrid = new rt(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0 } return a(t, [{ key: "plotCoords", value: function () { var t = this.w.globals; this.lgRect = this.dimHelpers.getLegendsRect(), t.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), t.gridHeight = t.gridHeight - this.gridPad.top - this.gridPad.bottom, t.gridWidth = t.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft; var e = this.dimGrid.gridPadForColumnsInNumericAxis(t.gridWidth); t.gridWidth = t.gridWidth - 2 * e, t.translateX = t.translateX + this.gridPad.left + this.xPadLeft + (e > 0 ? e + 4 : 0), t.translateY = t.translateY + this.gridPad.top } }, { key: "setDimensionsForAxisCharts", value: function () { var t = this, e = this.w, i = e.globals, a = this.dimYAxis.getyAxisLabelsCoords(), s = this.dimYAxis.getyAxisTitleCoords(); e.globals.yLabelsCoords = [], e.globals.yTitleCoords = [], e.config.yaxis.map((function (t, i) { e.globals.yLabelsCoords.push({ width: a[i].width, index: i }), e.globals.yTitleCoords.push({ width: s[i].width, index: i }) })), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth(); var r = this.dimXAxis.getxAxisLabelsCoords(), n = this.dimXAxis.getxAxisTitleCoords(); this.conditionalChecksForAxisCoords(r, n), i.translateXAxisY = e.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i.translateXAxisX = e.globals.rotateXLabels && e.globals.isXNumeric && e.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, e.globals.isBarHorizontal && (i.rotateXLabels = !1, i.translateXAxisY = parseInt(e.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i.translateXAxisY = i.translateXAxisY + e.config.xaxis.labels.offsetY, i.translateXAxisX = i.translateXAxisX + e.config.xaxis.labels.offsetX; var o = this.yAxisWidth, l = this.xAxisHeight; i.xAxisLabelsHeight = this.xAxisHeight, i.xAxisLabelsWidth = this.xAxisWidth, i.xAxisHeight = this.xAxisHeight; var h = 10; ("radar" === e.config.chart.type || this.isSparkline) && (o = 0, l = i.goldenPadding), this.isSparkline && (this.lgRect = { height: 0, width: 0 }), (this.isSparkline || "treemap" === e.config.chart.type) && (o = 0, l = 0, h = 0), this.isSparkline || this.dimXAxis.additionalPaddingXLabels(r); var c = function () { i.translateX = o, i.gridHeight = i.svgHeight - t.lgRect.height - l - (t.isSparkline || "treemap" === e.config.chart.type ? 0 : e.globals.rotateXLabels ? 10 : 15), i.gridWidth = i.svgWidth - o }; switch ("top" === e.config.xaxis.position && (h = i.xAxisHeight - e.config.xaxis.axisTicks.height - 5), e.config.legend.position) { case "bottom": i.translateY = h, c(); break; case "top": i.translateY = this.lgRect.height + h, c(); break; case "left": i.translateY = h, i.translateX = this.lgRect.width + o, i.gridHeight = i.svgHeight - l - 12, i.gridWidth = i.svgWidth - this.lgRect.width - o; break; case "right": i.translateY = h, i.translateX = o, i.gridHeight = i.svgHeight - l - 12, i.gridWidth = i.svgWidth - this.lgRect.width - o - 5; break; default: throw new Error("Legend position not supported") }this.dimGrid.setGridXPosForDualYAxis(s, a), new q(this.ctx).setYAxisXPosition(a, s) } }, { key: "setDimensionsForNonAxisCharts", value: function () { var t = this.w, e = t.globals, i = t.config, a = 0; t.config.legend.show && !t.config.legend.floating && (a = 20); var s = "pie" === i.chart.type || "polarArea" === i.chart.type || "donut" === i.chart.type ? "pie" : "radialBar", r = i.plotOptions[s].offsetY, n = i.plotOptions[s].offsetX; if (!i.legend.show || i.legend.floating) return e.gridHeight = e.svgHeight - i.grid.padding.left + i.grid.padding.right, e.gridWidth = e.gridHeight, e.translateY = r, void (e.translateX = n + (e.svgWidth - e.gridWidth) / 2); switch (i.legend.position) { case "bottom": e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = r - 10, e.translateX = n + (e.svgWidth - e.gridWidth) / 2; break; case "top": e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = this.lgRect.height + r + 10, e.translateX = n + (e.svgWidth - e.gridWidth) / 2; break; case "left": e.gridWidth = e.svgWidth - this.lgRect.width - a, e.gridHeight = "auto" !== i.chart.height ? e.svgHeight : e.gridWidth, e.translateY = r, e.translateX = n + this.lgRect.width + a; break; case "right": e.gridWidth = e.svgWidth - this.lgRect.width - a - 5, e.gridHeight = "auto" !== i.chart.height ? e.svgHeight : e.gridWidth, e.translateY = r, e.translateX = n + 10; break; default: throw new Error("Legend position not supported") } } }, { key: "conditionalChecksForAxisCoords", value: function (t, e) { var i = this.w; this.xAxisHeight = (t.height + e.height) * (i.globals.isMultiLineX ? 1.2 : i.globals.LINE_HEIGHT_RATIO) + (i.globals.rotateXLabels ? 22 : 10), this.xAxisWidth = t.width, this.xAxisHeight - e.height > i.config.xaxis.labels.maxHeight && (this.xAxisHeight = i.config.xaxis.labels.maxHeight), i.config.xaxis.labels.minHeight && this.xAxisHeight < i.config.xaxis.labels.minHeight && (this.xAxisHeight = i.config.xaxis.labels.minHeight), i.config.xaxis.floating && (this.xAxisHeight = 0); var a = 0, s = 0; i.config.yaxis.forEach((function (t) { a += t.labels.minWidth, s += t.labels.maxWidth })), this.yAxisWidth < a && (this.yAxisWidth = a), this.yAxisWidth > s && (this.yAxisWidth = s) } }]), t }(), ot = function () { function t(i) { e(this, t), this.w = i.w, this.lgCtx = i } return a(t, [{ key: "getLegendStyles", value: function () { var t = document.createElement("style"); t.setAttribute("type", "text/css"); var e = document.createTextNode("\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.position-right, .apexcharts-legend.position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-left, .apexcharts-legend.position-top.apexcharts-align-left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-center, .apexcharts-legend.position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-right, .apexcharts-legend.position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }"); return t.appendChild(e), t } }, { key: "getLegendBBox", value: function () { var t = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), e = t.width; return { clwh: t.height, clww: e } } }, { key: "appendToForeignObject", value: function () { var t = this.w.globals; t.dom.elLegendForeign = document.createElementNS(t.SVGNS, "foreignObject"); var e = t.dom.elLegendForeign; e.setAttribute("x", 0), e.setAttribute("y", 0), e.setAttribute("width", t.svgWidth), e.setAttribute("height", t.svgHeight), t.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), e.appendChild(t.dom.elLegendWrap), e.appendChild(this.getLegendStyles()), t.dom.Paper.node.insertBefore(e, t.dom.elGraphical.node) } }, { key: "toggleDataSeries", value: function (t, e) { var i = this, a = this.w; if (a.globals.axisCharts || "radialBar" === a.config.chart.type) { a.globals.resized = !0; var s = null, r = null; if (a.globals.risingSeries = [], a.globals.axisCharts ? (s = a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "']")), r = parseInt(s.getAttribute("data:realIndex"), 10)) : (s = a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t + 1, "']")), r = parseInt(s.getAttribute("rel"), 10) - 1), e) [{ cs: a.globals.collapsedSeries, csi: a.globals.collapsedSeriesIndices }, { cs: a.globals.ancillaryCollapsedSeries, csi: a.globals.ancillaryCollapsedSeriesIndices }].forEach((function (t) { i.riseCollapsedSeries(t.cs, t.csi, r) })); else this.hideSeries({ seriesEl: s, realIndex: r }) } else { var n = a.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t + 1, "'] path")), o = a.config.chart.type; if ("pie" === o || "polarArea" === o || "donut" === o) { var l = a.config.plotOptions.pie.donut.labels; new b(this.lgCtx.ctx).pathMouseDown(n.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(n.members[0].node, l) } n.fire("click") } } }, { key: "hideSeries", value: function (t) { var e = t.seriesEl, i = t.realIndex, a = this.w, s = f.clone(a.config.series); if (a.globals.axisCharts) { var r = !1; if (a.config.yaxis[i] && a.config.yaxis[i].show && a.config.yaxis[i].showAlways && (r = !0, a.globals.ancillaryCollapsedSeriesIndices.indexOf(i) < 0 && (a.globals.ancillaryCollapsedSeries.push({ index: i, data: s[i].data.slice(), type: e.parentNode.className.baseVal.split("-")[1] }), a.globals.ancillaryCollapsedSeriesIndices.push(i))), !r) { a.globals.collapsedSeries.push({ index: i, data: s[i].data.slice(), type: e.parentNode.className.baseVal.split("-")[1] }), a.globals.collapsedSeriesIndices.push(i); var n = a.globals.risingSeries.indexOf(i); a.globals.risingSeries.splice(n, 1) } } else a.globals.collapsedSeries.push({ index: i, data: s[i] }), a.globals.collapsedSeriesIndices.push(i); for (var o = e.childNodes, l = 0; l < o.length; l++)o[l].classList.contains("apexcharts-series-markers-wrap") && (o[l].classList.contains("apexcharts-hide") ? o[l].classList.remove("apexcharts-hide") : o[l].classList.add("apexcharts-hide")); a.globals.allSeriesCollapsed = a.globals.collapsedSeries.length === a.config.series.length, s = this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled) } }, { key: "riseCollapsedSeries", value: function (t, e, i) { var a = this.w, s = f.clone(a.config.series); if (t.length > 0) { for (var r = 0; r < t.length; r++)t[r].index === i && (a.globals.axisCharts ? (s[i].data = t[r].data.slice(), t.splice(r, 1), e.splice(r, 1), a.globals.risingSeries.push(i)) : (s[i] = t[r].data, t.splice(r, 1), e.splice(r, 1), a.globals.risingSeries.push(i))); s = this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled) } } }, { key: "_getSeriesBasedOnCollapsedState", value: function (t) { var e = this.w; return e.globals.axisCharts ? t.forEach((function (i, a) { e.globals.collapsedSeriesIndices.indexOf(a) > -1 && (t[a].data = []) })) : t.forEach((function (i, a) { e.globals.collapsedSeriesIndices.indexOf(a) > -1 && (t[a] = 0) })), t } }]), t }(), lt = function () { function t(i, a) { e(this, t), this.ctx = i, this.w = i.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.distributed && 1 === this.w.config.series.length, this.legendHelpers = new ot(this) } return a(t, [{ key: "init", value: function () { var t = this.w, e = t.globals, i = t.config; if ((i.legend.showForSingleSeries && 1 === e.series.length || this.isBarsDistributed || e.series.length > 1 || !e.axisCharts) && i.legend.show) { for (; e.dom.elLegendWrap.firstChild;)e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild); this.drawLegends(), f.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()) : this.legendHelpers.appendToForeignObject(), "bottom" === i.legend.position || "top" === i.legend.position ? this.legendAlignHorizontal() : "right" !== i.legend.position && "left" !== i.legend.position || this.legendAlignVertical() } } }, { key: "drawLegends", value: function () { var t = this, e = this.w, i = e.config.legend.fontFamily, a = e.globals.seriesNames, s = e.globals.colors.slice(); if ("heatmap" === e.config.chart.type) { var r = e.config.plotOptions.heatmap.colorScale.ranges; a = r.map((function (t) { return t.name ? t.name : t.from + " - " + t.to })), s = r.map((function (t) { return t.color })) } else this.isBarsDistributed && (a = e.globals.labels.slice()); for (var n = e.globals.legendFormatter, o = e.config.legend.inverseOrder, l = o ? a.length - 1 : 0; o ? l >= 0 : l <= a.length - 1; o ? l-- : l++) { var h = n(a[l], { seriesIndex: l, w: e }), c = !1, d = !1; if (e.globals.collapsedSeries.length > 0) for (var g = 0; g < e.globals.collapsedSeries.length; g++)e.globals.collapsedSeries[g].index === l && (c = !0); if (e.globals.ancillaryCollapsedSeriesIndices.length > 0) for (var u = 0; u < e.globals.ancillaryCollapsedSeriesIndices.length; u++)e.globals.ancillaryCollapsedSeriesIndices[u] === l && (d = !0); var p = document.createElement("span"); p.classList.add("apexcharts-legend-marker"); var x = e.config.legend.markers.offsetX, m = e.config.legend.markers.offsetY, v = e.config.legend.markers.height, w = e.config.legend.markers.width, k = e.config.legend.markers.strokeWidth, A = e.config.legend.markers.strokeColor, S = e.config.legend.markers.radius, C = p.style; C.background = s[l], C.color = s[l], C.setProperty("background", s[l], "important"), e.config.legend.markers.fillColors && e.config.legend.markers.fillColors[l] && (C.background = e.config.legend.markers.fillColors[l]), void 0 !== e.globals.seriesColors[l] && (C.background = e.globals.seriesColors[l], C.color = e.globals.seriesColors[l]), C.height = Array.isArray(v) ? parseFloat(v[l]) + "px" : parseFloat(v) + "px", C.width = Array.isArray(w) ? parseFloat(w[l]) + "px" : parseFloat(w) + "px", C.left = Array.isArray(x) ? x[l] : x, C.top = Array.isArray(m) ? m[l] : m, C.borderWidth = Array.isArray(k) ? k[l] : k, C.borderColor = Array.isArray(A) ? A[l] : A, C.borderRadius = Array.isArray(S) ? parseFloat(S[l]) + "px" : parseFloat(S) + "px", e.config.legend.markers.customHTML && (Array.isArray(e.config.legend.markers.customHTML) ? e.config.legend.markers.customHTML[l] && (p.innerHTML = e.config.legend.markers.customHTML[l]()) : p.innerHTML = e.config.legend.markers.customHTML()), b.setAttrs(p, { rel: l + 1, "data:collapsed": c || d }), (c || d) && p.classList.add("apexcharts-inactive-legend"); var L = document.createElement("div"), P = document.createElement("span"); P.classList.add("apexcharts-legend-text"), P.innerHTML = Array.isArray(h) ? h.join(" ") : h; var T = e.config.legend.labels.useSeriesColors ? e.globals.colors[l] : e.config.legend.labels.colors; T || (T = e.config.chart.foreColor), P.style.color = T, P.style.fontSize = parseFloat(e.config.legend.fontSize) + "px", P.style.fontWeight = e.config.legend.fontWeight, P.style.fontFamily = i || e.config.chart.fontFamily, b.setAttrs(P, { rel: l + 1, i: l, "data:default-text": encodeURIComponent(h), "data:collapsed": c || d }), L.appendChild(p), L.appendChild(P); var z = new y(this.ctx); if (!e.config.legend.showForZeroSeries) 0 === z.getSeriesTotalByIndex(l) && z.seriesHaveSameValues(l) && !z.isSeriesNull(l) && -1 === e.globals.collapsedSeriesIndices.indexOf(l) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(l) && L.classList.add("apexcharts-hidden-zero-series"); e.config.legend.showForNullSeries || z.isSeriesNull(l) && -1 === e.globals.collapsedSeriesIndices.indexOf(l) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(l) && L.classList.add("apexcharts-hidden-null-series"), e.globals.dom.elLegendWrap.appendChild(L), e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)), e.globals.dom.elLegendWrap.classList.add("position-" + e.config.legend.position), L.classList.add("apexcharts-legend-series"), L.style.margin = "".concat(e.config.legend.itemMargin.vertical, "px ").concat(e.config.legend.itemMargin.horizontal, "px"), e.globals.dom.elLegendWrap.style.width = e.config.legend.width ? e.config.legend.width + "px" : "", e.globals.dom.elLegendWrap.style.height = e.config.legend.height ? e.config.legend.height + "px" : "", b.setAttrs(L, { rel: l + 1, seriesName: f.escapeString(a[l]), "data:collapsed": c || d }), (c || d) && L.classList.add("apexcharts-inactive-legend"), e.config.legend.onItemClick.toggleDataSeries || L.classList.add("apexcharts-no-click") } e.globals.dom.elWrap.addEventListener("click", t.onLegendClick, !0), e.config.legend.onItemHover.highlightDataSeries && (e.globals.dom.elWrap.addEventListener("mousemove", t.onLegendHovered, !0), e.globals.dom.elWrap.addEventListener("mouseout", t.onLegendHovered, !0)) } }, { key: "setLegendWrapXY", value: function (t, e) { var i = this.w, a = i.globals.dom.baseEl.querySelector(".apexcharts-legend"), s = a.getBoundingClientRect(), r = 0, n = 0; if ("bottom" === i.config.legend.position) n += i.globals.svgHeight - s.height / 2; else if ("top" === i.config.legend.position) { var o = new nt(this.ctx), l = o.dimHelpers.getTitleSubtitleCoords("title").height, h = o.dimHelpers.getTitleSubtitleCoords("subtitle").height; n = n + (l > 0 ? l - 10 : 0) + (h > 0 ? h - 10 : 0) } a.style.position = "absolute", r = r + t + i.config.legend.offsetX, n = n + e + i.config.legend.offsetY, a.style.left = r + "px", a.style.top = n + "px", "bottom" === i.config.legend.position ? (a.style.top = "auto", a.style.bottom = 5 - i.config.legend.offsetY + "px") : "right" === i.config.legend.position && (a.style.left = "auto", a.style.right = 25 + i.config.legend.offsetX + "px");["width", "height"].forEach((function (t) { a.style[t] && (a.style[t] = parseInt(i.config.legend[t], 10) + "px") })) } }, { key: "legendAlignHorizontal", value: function () { var t = this.w; t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right = 0; var e = this.legendHelpers.getLegendBBox(), i = new nt(this.ctx), a = i.dimHelpers.getTitleSubtitleCoords("title"), s = i.dimHelpers.getTitleSubtitleCoords("subtitle"), r = 0; "bottom" === t.config.legend.position ? r = -e.clwh / 1.8 : "top" === t.config.legend.position && (r = a.height + s.height + t.config.title.margin + t.config.subtitle.margin - 10), this.setLegendWrapXY(20, r) } }, { key: "legendAlignVertical", value: function () { var t = this.w, e = this.legendHelpers.getLegendBBox(), i = 0; "left" === t.config.legend.position && (i = 20), "right" === t.config.legend.position && (i = t.globals.svgWidth - e.clww - 10), this.setLegendWrapXY(i, 20) } }, { key: "onLegendHovered", value: function (t) { var e = this.w, i = t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker"); if ("heatmap" === e.config.chart.type || this.isBarsDistributed) { if (i) { var a = parseInt(t.target.getAttribute("rel"), 10) - 1; this.ctx.events.fireEvent("legendHover", [this.ctx, a, this.w]), new M(this.ctx).highlightRangeInSeries(t, t.target) } } else !t.target.classList.contains("apexcharts-inactive-legend") && i && new M(this.ctx).toggleSeriesOnHover(t, t.target) } }, { key: "onLegendClick", value: function (t) { var e = this.w; if (t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker")) { var i = parseInt(t.target.getAttribute("rel"), 10) - 1, a = "true" === t.target.getAttribute("data:collapsed"), s = this.w.config.chart.events.legendClick; "function" == typeof s && s(this.ctx, i, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i, this.w]); var r = this.w.config.legend.markers.onClick; "function" == typeof r && t.target.classList.contains("apexcharts-legend-marker") && (r(this.ctx, i, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i, this.w])), "treemap" !== e.config.chart.type && "heatmap" !== e.config.chart.type && !this.isBarsDistributed && e.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i, a) } } }]), t }(), ht = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w; var a = this.w; this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = a.globals.minX, this.maxX = a.globals.maxX } return a(t, [{ key: "createToolbar", value: function () { var t = this, e = this.w, i = function () { return document.createElement("div") }, a = i(); if (a.setAttribute("class", "apexcharts-toolbar"), a.style.top = e.config.chart.toolbar.offsetY + "px", a.style.right = 3 - e.config.chart.toolbar.offsetX + "px", e.globals.dom.elWrap.appendChild(a), this.elZoom = i(), this.elZoomIn = i(), this.elZoomOut = i(), this.elPan = i(), this.elSelection = i(), this.elZoomReset = i(), this.elMenuIcon = i(), this.elMenu = i(), this.elCustomIcons = [], this.t = e.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (var s = 0; s < this.t.customIcons.length; s++)this.elCustomIcons.push(i()); var r = [], n = function (i, a, s) { var n = i.toLowerCase(); t.t[n] && e.config.chart.zoom.enabled && r.push({ el: a, icon: "string" == typeof t.t[n] ? t.t[n] : s, title: t.localeValues[i], class: "apexcharts-".concat(n, "-icon") }) }; n("zoomIn", this.elZoomIn, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'), n("zoomOut", this.elZoomOut, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'); var o = function (i) { t.t[i] && e.config.chart[i].enabled && r.push({ el: "zoom" === i ? t.elZoom : t.elSelection, icon: "string" == typeof t.t[i] ? t.t[i] : "zoom" === i ? '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>' : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>', title: t.localeValues["zoom" === i ? "selectionZoom" : "selection"], class: e.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(i, "-icon") }) }; o("zoom"), o("selection"), this.t.pan && e.config.chart.zoom.enabled && r.push({ el: this.elPan, icon: "string" == typeof this.t.pan ? this.t.pan : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>', title: this.localeValues.pan, class: e.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon" }), n("reset", this.elZoomReset, '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'), this.t.download && r.push({ el: this.elMenuIcon, icon: "string" == typeof this.t.download ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>', title: this.localeValues.menu, class: "apexcharts-menu-icon" }); for (var l = 0; l < this.elCustomIcons.length; l++)r.push({ el: this.elCustomIcons[l], icon: this.t.customIcons[l].icon, title: this.t.customIcons[l].title, index: this.t.customIcons[l].index, class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[l].class }); r.forEach((function (t, e) { t.index && f.moveIndexInArray(r, e, t.index) })); for (var h = 0; h < r.length; h++)b.setAttrs(r[h].el, { class: r[h].class, title: r[h].title }), r[h].el.innerHTML = r[h].icon, a.appendChild(r[h].el); this._createHamburgerMenu(a), e.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : e.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : e.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners() } }, { key: "_createHamburgerMenu", value: function (t) { this.elMenuItems = [], t.appendChild(this.elMenu), b.setAttrs(this.elMenu, { class: "apexcharts-menu" }); var e = [{ name: "exportSVG", title: this.localeValues.exportToSVG }, { name: "exportPNG", title: this.localeValues.exportToPNG }, { name: "exportCSV", title: this.localeValues.exportToCSV }]; this.w.globals.allSeriesHasEqualX || e.splice(2, 1); for (var i = 0; i < e.length; i++)this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i].innerHTML = e[i].title, b.setAttrs(this.elMenuItems[i], { class: "apexcharts-menu-item ".concat(e[i].name), title: e[i].title }), this.elMenu.appendChild(this.elMenuItems[i]) } }, { key: "addToolbarEventListeners", value: function () { var t = this; this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach((function (e) { e.classList.contains("exportSVG") ? e.addEventListener("click", t.handleDownload.bind(t, "svg")) : e.classList.contains("exportPNG") ? e.addEventListener("click", t.handleDownload.bind(t, "png")) : e.classList.contains("exportCSV") && e.addEventListener("click", t.handleDownload.bind(t, "csv")) })); for (var e = 0; e < this.t.customIcons.length; e++)this.elCustomIcons[e].addEventListener("click", this.t.customIcons[e].click.bind(this, this.ctx, this.ctx.w)) } }, { key: "toggleZoomSelection", value: function (t) { this.ctx.getSyncedCharts().forEach((function (e) { e.ctx.toolbar.toggleOtherControls(); var i = "selection" === t ? e.ctx.toolbar.elSelection : e.ctx.toolbar.elZoom, a = "selection" === t ? "selectionEnabled" : "zoomEnabled"; e.w.globals[a] = !e.w.globals[a], i.classList.contains(e.ctx.toolbar.selectedClass) ? i.classList.remove(e.ctx.toolbar.selectedClass) : i.classList.add(e.ctx.toolbar.selectedClass) })) } }, { key: "getToolbarIconsReference", value: function () { var t = this.w; this.elZoom || (this.elZoom = t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon")) } }, { key: "enableZoomPanFromToolbar", value: function (t) { this.toggleOtherControls(), "pan" === t ? this.w.globals.panEnabled = !0 : this.w.globals.zoomEnabled = !0; var e = "pan" === t ? this.elPan : this.elZoom, i = "pan" === t ? this.elZoom : this.elPan; e && e.classList.add(this.selectedClass), i && i.classList.remove(this.selectedClass) } }, { key: "togglePanning", value: function () { this.ctx.getSyncedCharts().forEach((function (t) { t.ctx.toolbar.toggleOtherControls(), t.w.globals.panEnabled = !t.w.globals.panEnabled, t.ctx.toolbar.elPan.classList.contains(t.ctx.toolbar.selectedClass) ? t.ctx.toolbar.elPan.classList.remove(t.ctx.toolbar.selectedClass) : t.ctx.toolbar.elPan.classList.add(t.ctx.toolbar.selectedClass) })) } }, { key: "toggleOtherControls", value: function () { var t = this, e = this.w; e.globals.panEnabled = !1, e.globals.zoomEnabled = !1, e.globals.selectionEnabled = !1, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach((function (e) { e && e.classList.remove(t.selectedClass) })) } }, { key: "handleZoomIn", value: function () { var t = this.w; t.globals.isTimelineBar && (this.minX = t.globals.minY, this.maxX = t.globals.maxY); var e = (this.minX + this.maxX) / 2, i = (this.minX + e) / 2, a = (this.maxX + e) / 2, s = this._getNewMinXMaxX(i, a); t.globals.disableZoomIn || this.zoomUpdateOptions(s.minX, s.maxX) } }, { key: "handleZoomOut", value: function () { var t = this.w; if (t.globals.isTimelineBar && (this.minX = t.globals.minY, this.maxX = t.globals.maxY), !("datetime" === t.config.xaxis.type && new Date(this.minX).getUTCFullYear() < 1e3)) { var e = (this.minX + this.maxX) / 2, i = this.minX - (e - this.minX), a = this.maxX - (e - this.maxX), s = this._getNewMinXMaxX(i, a); t.globals.disableZoomOut || this.zoomUpdateOptions(s.minX, s.maxX) } } }, { key: "_getNewMinXMaxX", value: function (t, e) { var i = this.w.config.xaxis.convertedCatToNumeric; return { minX: i ? Math.floor(t) : t, maxX: i ? Math.floor(e) : e } } }, { key: "zoomUpdateOptions", value: function (t, e) { var i = this.w; if (void 0 !== t || void 0 !== e) { if (!(i.config.xaxis.convertedCatToNumeric && (t < 1 && (t = 1, e = i.globals.dataPoints), e - t < 2))) { var a = { min: t, max: e }, s = this.getBeforeZoomRange(a); s && (a = s.xaxis); var r = { xaxis: a }, n = f.clone(i.globals.initialConfig.yaxis); if (i.config.chart.zoom.autoScaleYaxis) n = new j(this.ctx).autoScaleY(this.ctx, n, { xaxis: a }); i.config.chart.group || (r.yaxis = n), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(r, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(a, n) } } else this.handleZoomReset() } }, { key: "zoomCallback", value: function (t, e) { "function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, { xaxis: t, yaxis: e }) } }, { key: "getBeforeZoomRange", value: function (t, e) { var i = null; return "function" == typeof this.ev.beforeZoom && (i = this.ev.beforeZoom(this, { xaxis: t, yaxis: e })), i } }, { key: "toggleMenu", value: function () { var t = this; window.setTimeout((function () { t.elMenu.classList.contains("apexcharts-menu-open") ? t.elMenu.classList.remove("apexcharts-menu-open") : t.elMenu.classList.add("apexcharts-menu-open") }), 0) } }, { key: "handleDownload", value: function (t) { var e = this.w, i = new V(this.ctx); switch (t) { case "svg": i.exportToSVG(this.ctx); break; case "png": i.exportToPng(this.ctx); break; case "csv": i.exportToCSV({ series: e.config.series, columnDelimiter: e.config.chart.toolbar.export.csv.columnDelimiter }) } } }, { key: "handleZoomReset", value: function (t) { this.ctx.getSyncedCharts().forEach((function (t) { var e = t.w; if (e.globals.lastXAxis.min = void 0, e.globals.lastXAxis.max = void 0, t.updateHelpers.revertDefaultAxisMinMax(), "function" == typeof e.config.chart.events.beforeResetZoom) { var i = e.config.chart.events.beforeResetZoom(t, e); i && t.updateHelpers.revertDefaultAxisMinMax(i) } "function" == typeof e.config.chart.events.zoomed && t.ctx.toolbar.zoomCallback({ min: e.config.xaxis.min, max: e.config.xaxis.max }), e.globals.zoomed = !1; var a = t.ctx.series.emptyCollapsedSeries(f.clone(e.globals.initialSeries)); t.updateHelpers._updateSeries(a, e.config.chart.animations.dynamicAnimation.enabled) })) } }, { key: "destroy", value: function () { this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null } }]), t }(), ct = function (t) { o(s, t); var i = d(s); function s(t) { var a; return e(this, s), (a = i.call(this, t)).ctx = t, a.w = t.w, a.dragged = !1, a.graphics = new b(a.ctx), a.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], a.clientX = 0, a.clientY = 0, a.startX = 0, a.endX = 0, a.dragX = 0, a.startY = 0, a.endY = 0, a.dragY = 0, a.moveDirection = "none", a } return a(s, [{ key: "init", value: function (t) { var e = this, i = t.xyRatios, a = this.w, s = this; this.xyRatios = i, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = a.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), a.globals.dom.elGraphical.add(this.zoomRect), a.globals.dom.elGraphical.add(this.selectionRect), "x" === a.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: a.globals.gridWidth, maxY: a.globals.gridHeight }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : "y" === a.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: a.globals.gridWidth }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = a.globals.dom.baseEl.querySelector("".concat(a.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach((function (t) { e.hoverArea.addEventListener(t, s.svgMouseEvents.bind(s, i), { capture: !1, passive: !0 }) })) } }, { key: "destroy", value: function () { this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null } }, { key: "svgMouseEvents", value: function (t, e) { var i = this.w, a = this, s = this.ctx.toolbar, r = i.globals.zoomEnabled ? i.config.chart.zoom.type : i.config.chart.selection.type, n = i.config.chart.toolbar.autoSelected; e.shiftKey ? (this.shiftWasPressed = !0, s.enableZoomPanFromToolbar("pan" === n ? "zoom" : "pan")) : this.shiftWasPressed && (s.enableZoomPanFromToolbar(n), this.shiftWasPressed = !1); var o = e.target.classList; if (!(o.contains("apexcharts-selection-rect") || o.contains("apexcharts-legend-marker") || o.contains("apexcharts-legend-text") || e.target.parentNode.classList.contains("apexcharts-toolbar"))) { if (a.clientX = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientX : "touchend" === e.type ? e.changedTouches[0].clientX : e.clientX, a.clientY = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientY : "touchend" === e.type ? e.changedTouches[0].clientY : e.clientY, "mousedown" === e.type && 1 === e.which) { var l = a.gridRect.getBoundingClientRect(); a.startX = a.clientX - l.left, a.startY = a.clientY - l.top, a.dragged = !1, a.w.globals.mousedown = !0 } if (("mousemove" === e.type && 1 === e.which || "touchmove" === e.type) && (a.dragged = !0, i.globals.panEnabled ? (i.globals.selection = null, a.w.globals.mousedown && a.panDragging({ context: a, zoomtype: r, xyRatios: t })) : (a.w.globals.mousedown && i.globals.zoomEnabled || a.w.globals.mousedown && i.globals.selectionEnabled) && (a.selection = a.selectionDrawing({ context: a, zoomtype: r }))), "mouseup" === e.type || "touchend" === e.type || "mouseleave" === e.type) { var h = a.gridRect.getBoundingClientRect(); a.w.globals.mousedown && (a.endX = a.clientX - h.left, a.endY = a.clientY - h.top, a.dragX = Math.abs(a.endX - a.startX), a.dragY = Math.abs(a.endY - a.startY), (i.globals.zoomEnabled || i.globals.selectionEnabled) && a.selectionDrawn({ context: a, zoomtype: r }), i.globals.panEnabled && i.config.xaxis.convertedCatToNumeric && a.delayedPanScrolled()), i.globals.zoomEnabled && a.hideSelectionRect(this.selectionRect), a.dragged = !1, a.w.globals.mousedown = !1 } this.makeSelectionRectDraggable() } } }, { key: "makeSelectionRectDraggable", value: function () { var t = this.w; if (this.selectionRect) { var e = this.selectionRect.node.getBoundingClientRect(); e.width > 0 && e.height > 0 && this.slDraggableRect.selectize({ points: "l, r", pointSize: 8, pointType: "rect" }).resize({ constraint: { minX: 0, minY: 0, maxX: t.globals.gridWidth, maxY: t.globals.gridHeight } }).on("resizing", this.selectionDragging.bind(this, "resizing")) } } }, { key: "preselectedSelection", value: function () { var t = this.w, e = this.xyRatios; if (!t.globals.zoomEnabled) if (void 0 !== t.globals.selection && null !== t.globals.selection) this.drawSelectionRect(t.globals.selection); else if (void 0 !== t.config.chart.selection.xaxis.min && void 0 !== t.config.chart.selection.xaxis.max) { var i = (t.config.chart.selection.xaxis.min - t.globals.minX) / e.xRatio, a = { x: i, y: 0, width: t.globals.gridWidth - (t.globals.maxX - t.config.chart.selection.xaxis.max) / e.xRatio - i, height: t.globals.gridHeight, translateX: 0, translateY: 0, selectionEnabled: !0 }; this.drawSelectionRect(a), this.makeSelectionRectDraggable(), "function" == typeof t.config.chart.events.selection && t.config.chart.events.selection(this.ctx, { xaxis: { min: t.config.chart.selection.xaxis.min, max: t.config.chart.selection.xaxis.max }, yaxis: {} }) } } }, { key: "drawSelectionRect", value: function (t) { var e = t.x, i = t.y, a = t.width, s = t.height, r = t.translateX, n = void 0 === r ? 0 : r, o = t.translateY, l = void 0 === o ? 0 : o, h = this.w, c = this.zoomRect, d = this.selectionRect; if (this.dragged || null !== h.globals.selection) { var g = { transform: "translate(" + n + ", " + l + ")" }; h.globals.zoomEnabled && this.dragged && (a < 0 && (a = 1), c.attr({ x: e, y: i, width: a, height: s, fill: h.config.chart.zoom.zoomedArea.fill.color, "fill-opacity": h.config.chart.zoom.zoomedArea.fill.opacity, stroke: h.config.chart.zoom.zoomedArea.stroke.color, "stroke-width": h.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity": h.config.chart.zoom.zoomedArea.stroke.opacity }), b.setAttrs(c.node, g)), h.globals.selectionEnabled && (d.attr({ x: e, y: i, width: a > 0 ? a : 0, height: s > 0 ? s : 0, fill: h.config.chart.selection.fill.color, "fill-opacity": h.config.chart.selection.fill.opacity, stroke: h.config.chart.selection.stroke.color, "stroke-width": h.config.chart.selection.stroke.width, "stroke-dasharray": h.config.chart.selection.stroke.dashArray, "stroke-opacity": h.config.chart.selection.stroke.opacity }), b.setAttrs(d.node, g)) } } }, { key: "hideSelectionRect", value: function (t) { t && t.attr({ x: 0, y: 0, width: 0, height: 0 }) } }, { key: "selectionDrawing", value: function (t) { var e = t.context, i = t.zoomtype, a = this.w, s = e, r = this.gridRect.getBoundingClientRect(), n = s.startX - 1, o = s.startY, l = !1, h = !1, c = s.clientX - r.left - n, d = s.clientY - r.top - o, g = {}; return Math.abs(c + n) > a.globals.gridWidth ? c = a.globals.gridWidth - n : s.clientX - r.left < 0 && (c = n), n > s.clientX - r.left && (l = !0, c = Math.abs(c)), o > s.clientY - r.top && (h = !0, d = Math.abs(d)), g = "x" === i ? { x: l ? n - c : n, y: 0, width: c, height: a.globals.gridHeight } : "y" === i ? { x: 0, y: h ? o - d : o, width: a.globals.gridWidth, height: d } : { x: l ? n - c : n, y: h ? o - d : o, width: c, height: d }, s.drawSelectionRect(g), s.selectionDragging("resizing"), g } }, { key: "selectionDragging", value: function (t, e) { var i = this, a = this.w, s = this.xyRatios, r = this.selectionRect, n = 0; "resizing" === t && (n = 30); var o = function (t) { return parseFloat(r.node.getAttribute(t)) }, l = { x: o("x"), y: o("y"), width: o("width"), height: o("height") }; a.globals.selection = l, "function" == typeof a.config.chart.events.selection && a.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout((function () { var t = i.gridRect.getBoundingClientRect(), e = r.node.getBoundingClientRect(), n = { xaxis: { min: a.globals.xAxisScale.niceMin + (e.left - t.left) * s.xRatio, max: a.globals.xAxisScale.niceMin + (e.right - t.left) * s.xRatio }, yaxis: { min: a.globals.yAxisScale[0].niceMin + (t.bottom - e.bottom) * s.yRatio[0], max: a.globals.yAxisScale[0].niceMax - (e.top - t.top) * s.yRatio[0] } }; a.config.chart.events.selection(i.ctx, n), a.config.chart.brush.enabled && void 0 !== a.config.chart.events.brushScrolled && a.config.chart.events.brushScrolled(i.ctx, n) }), n)) } }, { key: "selectionDrawn", value: function (t) { var e = t.context, i = t.zoomtype, a = this.w, s = e, r = this.xyRatios, n = this.ctx.toolbar; if (s.startX > s.endX) { var o = s.startX; s.startX = s.endX, s.endX = o } if (s.startY > s.endY) { var l = s.startY; s.startY = s.endY, s.endY = l } var h = void 0, c = void 0; a.globals.isTimelineBar ? (h = a.globals.yAxisScale[0].niceMin + s.startX * r.invertedYRatio, c = a.globals.yAxisScale[0].niceMin + s.endX * r.invertedYRatio) : (h = a.globals.xAxisScale.niceMin + s.startX * r.xRatio, c = a.globals.xAxisScale.niceMin + s.endX * r.xRatio); var d = [], g = []; if (a.config.yaxis.forEach((function (t, e) { d.push(a.globals.yAxisScale[e].niceMax - r.yRatio[e] * s.startY), g.push(a.globals.yAxisScale[e].niceMax - r.yRatio[e] * s.endY) })), s.dragged && (s.dragX > 10 || s.dragY > 10) && h !== c) if (a.globals.zoomEnabled) { var u = f.clone(a.globals.initialConfig.yaxis), p = f.clone(a.globals.initialConfig.xaxis); if (a.globals.zoomed = !0, a.config.xaxis.convertedCatToNumeric && (h = Math.floor(h), c = Math.floor(c), h < 1 && (h = 1, c = a.globals.dataPoints), c - h < 2 && (c = h + 1)), "xy" !== i && "x" !== i || (p = { min: h, max: c }), "xy" !== i && "y" !== i || u.forEach((function (t, e) { u[e].min = g[e], u[e].max = d[e] })), a.config.chart.zoom.autoScaleYaxis) { var x = new j(s.ctx); u = x.autoScaleY(s.ctx, u, { xaxis: p }) } if (n) { var b = n.getBeforeZoomRange(p, u); b && (p = b.xaxis ? b.xaxis : p, u = b.yaxis ? b.yaxis : u) } var m = { xaxis: p }; a.config.chart.group || (m.yaxis = u), s.ctx.updateHelpers._updateOptions(m, !1, s.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof a.config.chart.events.zoomed && n.zoomCallback(p, u) } else if (a.globals.selectionEnabled) { var v, y = null; v = { min: h, max: c }, "xy" !== i && "y" !== i || (y = f.clone(a.config.yaxis)).forEach((function (t, e) { y[e].min = g[e], y[e].max = d[e] })), a.globals.selection = s.selection, "function" == typeof a.config.chart.events.selection && a.config.chart.events.selection(s.ctx, { xaxis: v, yaxis: y }) } } }, { key: "panDragging", value: function (t) { var e = t.context, i = this.w, a = e; if (void 0 !== i.globals.lastClientPosition.x) { var s = i.globals.lastClientPosition.x - a.clientX, r = i.globals.lastClientPosition.y - a.clientY; Math.abs(s) > Math.abs(r) && s > 0 ? this.moveDirection = "left" : Math.abs(s) > Math.abs(r) && s < 0 ? this.moveDirection = "right" : Math.abs(r) > Math.abs(s) && r > 0 ? this.moveDirection = "up" : Math.abs(r) > Math.abs(s) && r < 0 && (this.moveDirection = "down") } i.globals.lastClientPosition = { x: a.clientX, y: a.clientY }; var n = i.globals.isTimelineBar ? i.globals.minY : i.globals.minX, o = i.globals.isTimelineBar ? i.globals.maxY : i.globals.maxX; i.config.xaxis.convertedCatToNumeric || a.panScrolled(n, o) } }, { key: "delayedPanScrolled", value: function () { var t = this.w, e = t.globals.minX, i = t.globals.maxX, a = (t.globals.maxX - t.globals.minX) / 2; "left" === this.moveDirection ? (e = t.globals.minX + a, i = t.globals.maxX + a) : "right" === this.moveDirection && (e = t.globals.minX - a, i = t.globals.maxX - a), e = Math.floor(e), i = Math.floor(i), this.updateScrolledChart({ xaxis: { min: e, max: i } }, e, i) } }, { key: "panScrolled", value: function (t, e) { var i = this.w, a = this.xyRatios, s = f.clone(i.globals.initialConfig.yaxis), r = a.xRatio, n = i.globals.minX, o = i.globals.maxX; i.globals.isTimelineBar && (r = a.invertedYRatio, n = i.globals.minY, o = i.globals.maxY), "left" === this.moveDirection ? (t = n + i.globals.gridWidth / 15 * r, e = o + i.globals.gridWidth / 15 * r) : "right" === this.moveDirection && (t = n - i.globals.gridWidth / 15 * r, e = o - i.globals.gridWidth / 15 * r), i.globals.isTimelineBar || (t < i.globals.initialMinX || e > i.globals.initialMaxX) && (t = n, e = o); var l = { min: t, max: e }; i.config.chart.zoom.autoScaleYaxis && (s = new j(this.ctx).autoScaleY(this.ctx, s, { xaxis: l })); var h = { xaxis: { min: t, max: e } }; i.config.chart.group || (h.yaxis = s), this.updateScrolledChart(h, t, e) } }, { key: "updateScrolledChart", value: function (t, e, i) { var a = this.w; this.ctx.updateHelpers._updateOptions(t, !1, !1), "function" == typeof a.config.chart.events.scrolled && a.config.chart.events.scrolled(this.ctx, { xaxis: { min: e, max: i } }) } }]), s }(ht), dt = function () { function t(i) { e(this, t), this.w = i.w, this.ttCtx = i, this.ctx = i.ctx } return a(t, [{ key: "getNearestValues", value: function (t) { var e = t.hoverArea, i = t.elGrid, a = t.clientX, s = t.clientY, r = this.w, n = r.globals.gridWidth, o = n / (r.globals.dataPoints - 1), l = i.getBoundingClientRect(), h = this.hasBars(); !r.globals.comboCharts && !h || r.config.xaxis.convertedCatToNumeric || (o = n / r.globals.dataPoints); var c = a - l.left - r.globals.barPadForNumericAxis, d = s - l.top; c < 0 || d < 0 || c > r.globals.gridWidth || d > r.globals.gridHeight ? (e.classList.remove("hovering-zoom"), e.classList.remove("hovering-pan")) : r.globals.zoomEnabled ? (e.classList.remove("hovering-pan"), e.classList.add("hovering-zoom")) : r.globals.panEnabled && (e.classList.remove("hovering-zoom"), e.classList.add("hovering-pan")); var g = Math.round(c / o); h && !r.config.xaxis.convertedCatToNumeric && (g = Math.ceil(c / o), g -= 1); for (var u, p = null, x = null, b = [], m = 0; m < r.globals.seriesXvalues.length; m++)b.push([r.globals.seriesXvalues[m][0] - 1e-6].concat(r.globals.seriesXvalues[m])); return b = b.map((function (t) { return t.filter((function (t) { return t })) })), u = r.globals.seriesYvalues.map((function (t) { return t.filter((function (t) { return f.isNumber(t) })) })), r.globals.isXNumeric && (p = (x = this.closestInMultiArray(c, d, b, u)).index, g = x.j, null !== p && (b = r.globals.seriesXvalues[p], g = (x = this.closestInArray(c, b)).index)), r.globals.capturedSeriesIndex = null === p ? -1 : p, (!g || g < 1) && (g = 0), r.globals.capturedDataPointIndex = g, { capturedSeries: p, j: g, hoverX: c, hoverY: d } } }, { key: "closestInMultiArray", value: function (t, e, i, a) { var s = this.w, r = 0, n = null, o = -1; s.globals.series.length > 1 ? r = this.getFirstActiveXArray(i) : n = 0; var l = a[r][0], h = i[r][0], c = Math.abs(t - h), d = Math.abs(e - l), g = d + c; return a.map((function (s, r) { s.map((function (s, l) { var h = Math.abs(e - a[r][l]), u = Math.abs(t - i[r][l]), f = u + h; f < g && (g = f, c = u, d = h, n = r, o = l) })) })), { index: n, j: o } } }, { key: "getFirstActiveXArray", value: function (t) { for (var e = 0, i = t.map((function (t, e) { return t.length > 0 ? e : -1 })), a = 0; a < i.length; a++)if (-1 !== i[a]) { e = i[a]; break } return e } }, { key: "closestInArray", value: function (t, e) { for (var i = e[0], a = null, s = Math.abs(t - i), r = 0; r < e.length; r++) { var n = Math.abs(t - e[r]); n < s && (s = n, a = r) } return { index: a } } }, { key: "isXoverlap", value: function (t) { var e = [], i = this.w.globals.seriesX.filter((function (t) { return void 0 !== t[0] })); if (i.length > 0) for (var a = 0; a < i.length - 1; a++)void 0 !== i[a][t] && void 0 !== i[a + 1][t] && i[a][t] !== i[a + 1][t] && e.push("unEqual"); return 0 === e.length } }, { key: "isInitialSeriesSameLen", value: function () { for (var t = !0, e = this.w.globals.initialSeries, i = 0; i < e.length - 1; i++)if (e[i].data.length !== e[i + 1].data.length) { t = !1; break } return t } }, { key: "getBarsHeight", value: function (t) { return g(t).reduce((function (t, e) { return t + e.getBBox().height }), 0) } }, { key: "getElMarkers", value: function () { return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers") } }, { key: "getAllMarkers", value: function () { var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap"); (t = g(t)).sort((function (t, e) { return Number(e.getAttribute("data:realIndex")) < Number(t.getAttribute("data:realIndex")) ? 0 : -1 })); var e = []; return t.forEach((function (t) { e.push(t.querySelector(".apexcharts-marker")) })), e } }, { key: "hasMarkers", value: function () { return this.getElMarkers().length > 0 } }, { key: "getElBars", value: function () { return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-rangebar-series") } }, { key: "hasBars", value: function () { return this.getElBars().length > 0 } }, { key: "getHoverMarkerSize", value: function (t) { var e = this.w, i = e.config.markers.hover.size; return void 0 === i && (i = e.globals.markers.size[t] + e.config.markers.hover.sizeOffset), i } }, { key: "toggleAllTooltipSeriesGroups", value: function (t) { var e = this.w, i = this.ttCtx; 0 === i.allTooltipSeriesGroups.length && (i.allTooltipSeriesGroups = e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group")); for (var a = i.allTooltipSeriesGroups, s = 0; s < a.length; s++)"enable" === t ? (a[s].classList.add("apexcharts-active"), a[s].style.display = e.config.tooltip.items.display) : (a[s].classList.remove("apexcharts-active"), a[s].style.display = "none") } }]), t }(), gt = function () { function t(i) { e(this, t), this.w = i.w, this.ctx = i.ctx, this.ttCtx = i, this.tooltipUtil = new dt(i) } return a(t, [{ key: "drawSeriesTexts", value: function (t) { var e = t.shared, i = void 0 === e || e, a = t.ttItems, s = t.i, r = void 0 === s ? 0 : s, n = t.j, o = void 0 === n ? null : n, l = t.y1, h = t.y2, c = t.e, d = this.w; void 0 !== d.config.tooltip.custom ? this.handleCustomTooltip({ i: r, j: o, y1: l, y2: h, w: d }) : this.toggleActiveInactiveSeries(i); var g = this.getValuesToPrint({ i: r, j: o }); this.printLabels({ i: r, j: o, values: g, ttItems: a, shared: i, e: c }); var u = this.ttCtx.getElTooltip(); this.ttCtx.tooltipRect.ttWidth = u.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = u.getBoundingClientRect().height } }, { key: "printLabels", value: function (t) { var e, i = this, a = t.i, s = t.j, r = t.values, o = t.ttItems, l = t.shared, h = t.e, c = this.w, d = r.xVal, g = r.zVal, u = r.xAxisTTVal, f = "", p = c.globals.colors[a]; null !== s && c.config.plotOptions.bar.distributed && (p = c.globals.colors[s]); for (var x = function (t, r) { var x = i.getFormatters(a); f = i.getSeriesName({ fn: x.yLbTitleFormatter, index: a, seriesIndex: a, j: s }), "treemap" === c.config.chart.type && (f = x.yLbTitleFormatter(String(c.config.series[a].data[s].x), { series: c.globals.series, seriesIndex: a, dataPointIndex: s, w: c })); var b = c.config.tooltip.inverseOrder ? r : t; if (c.globals.axisCharts) { var m = function (t) { return x.yLbFormatter(c.globals.series[t][s], { series: c.globals.series, seriesIndex: t, dataPointIndex: s, w: c }) }; l ? (x = i.getFormatters(b), f = i.getSeriesName({ fn: x.yLbTitleFormatter, index: b, seriesIndex: a, j: s }), p = c.globals.colors[b], e = m(b)) : (h && h.target && h.target.getAttribute("fill") && (p = h.target.getAttribute("fill")), e = m(a)) } null === s && (e = x.yLbFormatter(c.globals.series[a], n(n({}, c), {}, { seriesIndex: a, dataPointIndex: a }))), i.DOMHandling({ i: a, t: b, j: s, ttItems: o, values: { val: e, xVal: d, xAxisTTVal: u, zVal: g }, seriesName: f, shared: l, pColor: p }) }, b = 0, m = c.globals.series.length - 1; b < c.globals.series.length; b++, m--)x(b, m) } }, { key: "getFormatters", value: function (t) { var e, i = this.w, a = i.globals.yLabelFormatters[t]; return void 0 !== i.globals.ttVal ? Array.isArray(i.globals.ttVal) ? (a = i.globals.ttVal[t] && i.globals.ttVal[t].formatter, e = i.globals.ttVal[t] && i.globals.ttVal[t].title && i.globals.ttVal[t].title.formatter) : (a = i.globals.ttVal.formatter, "function" == typeof i.globals.ttVal.title.formatter && (e = i.globals.ttVal.title.formatter)) : e = i.config.tooltip.y.title.formatter, "function" != typeof a && (a = i.globals.yLabelFormatters[0] ? i.globals.yLabelFormatters[0] : function (t) { return t }), "function" != typeof e && (e = function (t) { return t }), { yLbFormatter: a, yLbTitleFormatter: e } } }, { key: "getSeriesName", value: function (t) { var e = t.fn, i = t.index, a = t.seriesIndex, s = t.j, r = this.w; return e(String(r.globals.seriesNames[i]), { series: r.globals.series, seriesIndex: a, dataPointIndex: s, w: r }) } }, { key: "DOMHandling", value: function (t) { t.i; var e = t.t, i = (t.j, t.ttItems), a = t.values, s = t.seriesName, r = t.shared, n = t.pColor, o = this.w, l = this.ttCtx, h = a.val, c = a.xVal, d = a.xAxisTTVal, g = a.zVal, u = null; u = i[e].children, o.config.tooltip.fillSeriesColor && (i[e].style.backgroundColor = n, u[0].style.display = "none"), l.showTooltipTitle && (null === l.tooltipTitle && (l.tooltipTitle = o.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), l.tooltipTitle.innerHTML = c), l.blxaxisTooltip && (l.xaxisTooltipText.innerHTML = "" !== d ? d : c); var f = i[e].querySelector(".apexcharts-tooltip-text-label"); f && (f.innerHTML = s || ""); var p = i[e].querySelector(".apexcharts-tooltip-text-value"); (p && (p.innerHTML = void 0 !== h ? h : ""), u[0] && u[0].classList.contains("apexcharts-tooltip-marker") && (o.config.tooltip.marker.fillColors && Array.isArray(o.config.tooltip.marker.fillColors) && (n = o.config.tooltip.marker.fillColors[e]), u[0].style.backgroundColor = n), o.config.tooltip.marker.show || (u[0].style.display = "none"), null !== g) && (i[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = o.config.tooltip.z.title, i[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = void 0 !== g ? g : ""); r && u[0] && (null == h || o.globals.collapsedSeriesIndices.indexOf(e) > -1 ? u[0].parentNode.style.display = "none" : u[0].parentNode.style.display = o.config.tooltip.items.display) } }, { key: "toggleActiveInactiveSeries", value: function (t) { var e = this.w; if (t) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable"); else { this.tooltipUtil.toggleAllTooltipSeriesGroups("disable"); var i = e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group"); i && (i.classList.add("apexcharts-active"), i.style.display = e.config.tooltip.items.display) } } }, { key: "getValuesToPrint", value: function (t) { var e = t.i, i = t.j, a = this.w, s = this.ctx.series.filteredSeriesX(), r = "", n = "", o = null, l = null, h = { series: a.globals.series, seriesIndex: e, dataPointIndex: i, w: a }, c = a.globals.ttZFormatter; null === i ? l = a.globals.series[e] : a.globals.isXNumeric && "treemap" !== a.config.chart.type ? (r = s[e][i], 0 === s[e].length && (r = s[this.tooltipUtil.getFirstActiveXArray(s)][i])) : r = void 0 !== a.globals.labels[i] ? a.globals.labels[i] : ""; var d = r; a.globals.isXNumeric && "datetime" === a.config.xaxis.type ? r = new W(this.ctx).xLabelFormat(a.globals.ttKeyFormatter, d, d, { i: void 0, dateFormatter: new Y(this.ctx).formatDate, w: this.w }) : r = a.globals.isBarHorizontal ? a.globals.yLabelFormatters[0](d, h) : a.globals.xLabelFormatter(d, h); return void 0 !== a.config.tooltip.x.formatter && (r = a.globals.ttKeyFormatter(d, h)), a.globals.seriesZ.length > 0 && a.globals.seriesZ[e].length > 0 && (o = c(a.globals.seriesZ[e][i], a)), n = "function" == typeof a.config.xaxis.tooltip.formatter ? a.globals.xaxisTooltipFormatter(d, h) : r, { val: Array.isArray(l) ? l.join(" ") : l, xVal: Array.isArray(r) ? r.join(" ") : r, xAxisTTVal: Array.isArray(n) ? n.join(" ") : n, zVal: o } } }, { key: "handleCustomTooltip", value: function (t) { var e = t.i, i = t.j, a = t.y1, s = t.y2, r = t.w, n = this.ttCtx.getElTooltip(), o = r.config.tooltip.custom; Array.isArray(o) && o[e] && (o = o[e]), n.innerHTML = o({ ctx: this.ctx, series: r.globals.series, seriesIndex: e, dataPointIndex: i, y1: a, y2: s, w: r }) } }]), t }(), ut = function () { function t(i) { e(this, t), this.ttCtx = i, this.ctx = i.ctx, this.w = i.w } return a(t, [{ key: "moveXCrosshairs", value: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = this.ttCtx, a = this.w, s = i.getElXCrosshairs(), r = t - i.xcrosshairsWidth / 2, n = a.globals.labels.slice().length; if (null !== e && (r = a.globals.gridWidth / n * e), null !== s && (s.setAttribute("x", r), s.setAttribute("x1", r), s.setAttribute("x2", r), s.setAttribute("y2", a.globals.gridHeight), s.classList.add("apexcharts-active")), r < 0 && (r = 0), r > a.globals.gridWidth && (r = a.globals.gridWidth), i.blxaxisTooltip) { var o = r; "tickWidth" !== a.config.xaxis.crosshairs.width && "barWidth" !== a.config.xaxis.crosshairs.width || (o = r + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(o) } } }, { key: "moveYCrosshairs", value: function (t) { var e = this.ttCtx; null !== e.ycrosshairs && b.setAttrs(e.ycrosshairs, { y1: t, y2: t }), null !== e.ycrosshairsHidden && b.setAttrs(e.ycrosshairsHidden, { y1: t, y2: t }) } }, { key: "moveXAxisTooltip", value: function (t) { var e = this.w, i = this.ttCtx; if (null !== i.xaxisTooltip) { i.xaxisTooltip.classList.add("apexcharts-active"); var a = i.xaxisOffY + e.config.xaxis.tooltip.offsetY + e.globals.translateY + 1 + e.config.xaxis.offsetY; if (t -= i.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t)) { t += e.globals.translateX; var s; s = new b(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML), i.xaxisTooltipText.style.minWidth = s.width + "px", i.xaxisTooltip.style.left = t + "px", i.xaxisTooltip.style.top = a + "px" } } } }, { key: "moveYAxisTooltip", value: function (t) { var e = this.w, i = this.ttCtx; null === i.yaxisTTEls && (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip")); var a = parseInt(i.ycrosshairsHidden.getAttribute("y1"), 10), s = e.globals.translateY + a, r = i.yaxisTTEls[t].getBoundingClientRect().height, n = e.globals.translateYAxisX[t] - 2; e.config.yaxis[t].opposite && (n -= 26), s -= r / 2, -1 === e.globals.ignoreYAxisIndexes.indexOf(t) ? (i.yaxisTTEls[t].classList.add("apexcharts-active"), i.yaxisTTEls[t].style.top = s + "px", i.yaxisTTEls[t].style.left = n + e.config.yaxis[t].tooltip.offsetX + "px") : i.yaxisTTEls[t].classList.remove("apexcharts-active") } }, { key: "moveTooltip", value: function (t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a = this.w, s = this.ttCtx, r = s.getElTooltip(), n = s.tooltipRect, o = null !== i ? parseFloat(i) : 1, l = parseFloat(t) + o + 5, h = parseFloat(e) + o / 2; if (l > a.globals.gridWidth / 2 && (l = l - n.ttWidth - o - 15), l > a.globals.gridWidth - n.ttWidth - 10 && (l = a.globals.gridWidth - n.ttWidth), l < -20 && (l = -20), a.config.tooltip.followCursor) { var c = s.getElGrid(), d = c.getBoundingClientRect(); h = s.e.clientY + a.globals.translateY - d.top - n.ttHeight / 2 } if (!a.config.tooltip.followCursor) { var g = this.positionChecks(n, l, h); l = g.x, h = g.y } isNaN(l) || (l += a.globals.translateX, r.style.left = l + "px", r.style.top = h + "px") } }, { key: "positionChecks", value: function (t, e, i) { var a = this.w; return t.ttHeight / 2 + i > a.globals.gridHeight && (i = a.globals.gridHeight - t.ttHeight + a.globals.translateY), i < 0 && (i = 0), { x: e, y: i } } }, { key: "moveMarkers", value: function (t, e) { var i = this.w, a = this.ttCtx; if (i.globals.markers.size[t] > 0) for (var s = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-marker")), r = 0; r < s.length; r++)parseInt(s[r].getAttribute("rel"), 10) === e && (a.marker.resetPointsSize(), a.marker.enlargeCurrentPoint(e, s[r])); else a.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t) } }, { key: "moveDynamicPointOnHover", value: function (t, e) { var i, a, s = this.w, r = this.ttCtx, n = s.globals.pointsArray, o = r.tooltipUtil.getHoverMarkerSize(e), l = s.config.series[e].type; if (!l || "column" !== l && "candlestick" !== l) { i = n[e][t][0], a = n[e][t][1] ? n[e][t][1] : 0; var h = s.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers circle")); h && a < s.globals.gridHeight && a > 0 && (h.setAttribute("r", o), h.setAttribute("cx", i), h.setAttribute("cy", a)), this.moveXCrosshairs(i), r.fixedTooltip || this.moveTooltip(i, a, o) } } }, { key: "moveDynamicPointsOnHover", value: function (t) { var e, i = this.ttCtx, a = i.w, s = 0, r = 0, n = a.globals.pointsArray; e = new M(this.ctx).getActiveConfigSeriesIndex(!0); var o = i.tooltipUtil.getHoverMarkerSize(e); n[e] && (s = n[e][t][0], r = n[e][t][1]); var l = i.tooltipUtil.getAllMarkers(); if (null !== l) for (var h = 0; h < a.globals.series.length; h++) { var c = n[h]; if (a.globals.comboCharts && void 0 === c && l.splice(h, 0, null), c && c.length) { var d = n[h][t][1]; l[h].setAttribute("cx", s), null !== d && !isNaN(d) && d < a.globals.gridHeight && d > 0 ? (l[h] && l[h].setAttribute("r", o), l[h] && l[h].setAttribute("cy", d)) : l[h] && l[h].setAttribute("r", 0) } } if (this.moveXCrosshairs(s), !i.fixedTooltip) { var g = r || a.globals.gridHeight; this.moveTooltip(s, g, o) } } }, { key: "moveStickyTooltipOverBars", value: function (t) { var e, i = this.w, a = this.ttCtx, s = i.globals.columnSeries ? i.globals.columnSeries.length : i.globals.series.length, r = s >= 2 && s % 2 == 0 ? Math.floor(s / 2) : Math.floor(s / 2) + 1, n = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r, "'] path[j='").concat(t, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(t, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(t, "']")), o = n ? parseFloat(n.getAttribute("cx")) : 0, l = n ? parseFloat(n.getAttribute("barWidth")) : 0; i.globals.isXNumeric ? o -= s % 2 != 0 ? l / 2 : 0 : (o = a.xAxisTicksPositions[t - 1] + a.dataPointsDividedWidth / 2, isNaN(o) && (o = a.xAxisTicksPositions[t] - a.dataPointsDividedWidth / 2)); var h = a.getElGrid().getBoundingClientRect(); if (e = a.e.clientY - h.top - a.tooltipRect.ttHeight / 2, this.moveXCrosshairs(o), !a.fixedTooltip) { var c = e || i.globals.gridHeight; this.moveTooltip(o, c) } } }]), t }(), ft = function () { function t(i) { e(this, t), this.w = i.w, this.ttCtx = i, this.ctx = i.ctx, this.tooltipPosition = new ut(i) } return a(t, [{ key: "drawDynamicPoints", value: function () { var t = this.w, e = new b(this.ctx), i = new P(this.ctx), a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series"); a = g(a), t.config.chart.stacked && a.sort((function (t, e) { return parseFloat(t.getAttribute("data:realIndex")) - parseFloat(e.getAttribute("data:realIndex")) })); for (var s = 0; s < a.length; s++) { var r = a[s].querySelector(".apexcharts-series-markers-wrap"); if (null !== r) { var n = void 0, o = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4)); "line" !== t.config.chart.type && "area" !== t.config.chart.type || t.globals.comboCharts || t.config.tooltip.intersect || (o += " no-pointer-events"); var l = i.getMarkerConfig(o, s); (n = e.drawMarker(0, 0, l)).node.setAttribute("default-marker-size", 0); var h = document.createElementNS(t.globals.SVGNS, "g"); h.classList.add("apexcharts-series-markers"), h.appendChild(n.node), r.appendChild(h) } } } }, { key: "enlargeCurrentPoint", value: function (t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s = this.w; "bubble" !== s.config.chart.type && this.newPointSize(t, e); var r = e.getAttribute("cx"), n = e.getAttribute("cy"); if (null !== i && null !== a && (r = i, n = a), this.tooltipPosition.moveXCrosshairs(r), !this.fixedTooltip) { if ("radar" === s.config.chart.type) { var o = this.ttCtx.getElGrid(), l = o.getBoundingClientRect(); r = this.ttCtx.e.clientX - l.left } this.tooltipPosition.moveTooltip(r, n, s.config.markers.hover.size) } } }, { key: "enlargePoints", value: function (t) { for (var e = this.w, i = this, a = this.ttCtx, s = t, r = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), n = e.config.markers.hover.size, o = 0; o < r.length; o++) { var l = r[o].getAttribute("rel"), h = r[o].getAttribute("index"); if (void 0 === n && (n = e.globals.markers.size[h] + e.config.markers.hover.sizeOffset), s === parseInt(l, 10)) { i.newPointSize(s, r[o]); var c = r[o].getAttribute("cx"), d = r[o].getAttribute("cy"); i.tooltipPosition.moveXCrosshairs(c), a.fixedTooltip || i.tooltipPosition.moveTooltip(c, d, n) } else i.oldPointSize(r[o]) } } }, { key: "newPointSize", value: function (t, e) { var i = this.w, a = i.config.markers.hover.size, s = 0 === t ? e.parentNode.firstChild : e.parentNode.lastChild; if ("0" !== s.getAttribute("default-marker-size")) { var r = parseInt(s.getAttribute("index"), 10); void 0 === a && (a = i.globals.markers.size[r] + i.config.markers.hover.sizeOffset), s.setAttribute("r", a) } } }, { key: "oldPointSize", value: function (t) { var e = parseFloat(t.getAttribute("default-marker-size")); t.setAttribute("r", e) } }, { key: "resetPointsSize", value: function () { for (var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e = 0; e < t.length; e++) { var i = parseFloat(t[e].getAttribute("default-marker-size")); f.isNumber(i) ? t[e].setAttribute("r", i) : t[e].setAttribute("r", 0) } } }]), t }(), pt = function () { function t(i) { e(this, t), this.w = i.w, this.ttCtx = i } return a(t, [{ key: "getAttr", value: function (t, e) { return parseFloat(t.target.getAttribute(e)) } }, { key: "handleHeatTreeTooltip", value: function (t) { var e = t.e, i = t.opt, a = t.x, s = t.y, r = t.type, n = this.ttCtx, o = this.w; if (e.target.classList.contains("apexcharts-".concat(r, "-rect"))) { var l = this.getAttr(e, "i"), h = this.getAttr(e, "j"), c = this.getAttr(e, "cx"), d = this.getAttr(e, "cy"), g = this.getAttr(e, "width"), u = this.getAttr(e, "height"); if (n.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: l, j: h, shared: !1, e: e }), o.globals.capturedSeriesIndex = l, o.globals.capturedDataPointIndex = h, a = c + n.tooltipRect.ttWidth / 2 + g, s = d + n.tooltipRect.ttHeight / 2 - u / 2, n.tooltipPosition.moveXCrosshairs(c + g / 2), a > o.globals.gridWidth / 2 && (a = c - n.tooltipRect.ttWidth / 2 + g), n.w.config.tooltip.followCursor) { var f = n.getElGrid().getBoundingClientRect(); (a = n.e.clientX - f.left + 10) > o.globals.gridWidth / 2 && (a = a - n.tooltipRect.ttWidth - 10), s = n.e.clientY - f.top + o.globals.translateY / 2 - 10 } } return { x: a, y: s } } }, { key: "handleMarkerTooltip", value: function (t) { var e, i, a = t.e, s = t.opt, r = t.x, n = t.y, o = this.w, l = this.ttCtx; if (a.target.classList.contains("apexcharts-marker")) { var h = parseInt(s.paths.getAttribute("cx"), 10), c = parseInt(s.paths.getAttribute("cy"), 10), d = parseFloat(s.paths.getAttribute("val")); if (i = parseInt(s.paths.getAttribute("rel"), 10), e = parseInt(s.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, l.intersect) { var g = f.findAncestor(s.paths, "apexcharts-series"); g && (e = parseInt(g.getAttribute("data:realIndex"), 10)) } if (l.tooltipLabels.drawSeriesTexts({ ttItems: s.ttItems, i: e, j: i, shared: !l.showOnIntersect && o.config.tooltip.shared, e: a }), "mouseup" === a.type && l.markerClick(a, e, i), o.globals.capturedSeriesIndex = e, o.globals.capturedDataPointIndex = i, r = h, n = c + o.globals.translateY - 1.4 * l.tooltipRect.ttHeight, l.w.config.tooltip.followCursor) { var u = l.getElGrid().getBoundingClientRect(); n = l.e.clientY + o.globals.translateY - u.top } d < 0 && (n = c), l.marker.enlargeCurrentPoint(i, s.paths, r, n) } return { x: r, y: n } } }, { key: "handleBarTooltip", value: function (t) { var e, i, a = t.e, s = t.opt, r = this.w, n = this.ttCtx, o = n.getElTooltip(), l = 0, h = 0, c = 0, d = this.getBarTooltipXY({ e: a, opt: s }); e = d.i; var g = d.barHeight, u = d.j; if (r.globals.capturedSeriesIndex = e, r.globals.capturedDataPointIndex = u, r.globals.isBarHorizontal && n.tooltipUtil.hasBars() || !r.config.tooltip.shared ? (h = d.x, c = d.y, i = Array.isArray(r.config.stroke.width) ? r.config.stroke.width[e] : r.config.stroke.width, l = h) : r.globals.comboCharts || r.config.tooltip.shared || (l /= 2), isNaN(c) ? c = r.globals.svgHeight - n.tooltipRect.ttHeight : c < 0 && (c = 0), h + n.tooltipRect.ttWidth > r.globals.gridWidth ? h -= n.tooltipRect.ttWidth : h < 0 && (h = 0), n.w.config.tooltip.followCursor) { var f = n.getElGrid().getBoundingClientRect(); c = n.e.clientY - f.top } if (null === n.tooltip && (n.tooltip = r.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), r.config.tooltip.shared || (r.globals.comboBarCount > 0 ? n.tooltipPosition.moveXCrosshairs(l + i / 2) : n.tooltipPosition.moveXCrosshairs(l)), !n.fixedTooltip && (!r.config.tooltip.shared || r.globals.isBarHorizontal && n.tooltipUtil.hasBars())) { var p = r.globals.isMultipleYAxis ? r.config.yaxis[x] && r.config.yaxis[x].reversed : r.config.yaxis[0].reversed; p && (h -= n.tooltipRect.ttWidth) < 0 && (h = 0), o.style.left = h + r.globals.translateX + "px"; var x = parseInt(s.paths.parentNode.getAttribute("data:realIndex"), 10); !p || r.globals.isBarHorizontal && n.tooltipUtil.hasBars() || (c = c + g - 2 * (r.globals.series[e][u] < 0 ? g : 0)), n.tooltipRect.ttHeight + c > r.globals.gridHeight ? (c = r.globals.gridHeight - n.tooltipRect.ttHeight + r.globals.translateY, o.style.top = c + "px") : o.style.top = c + r.globals.translateY - n.tooltipRect.ttHeight / 2 + "px" } } }, { key: "getBarTooltipXY", value: function (t) { var e = t.e, i = t.opt, a = this.w, s = null, r = this.ttCtx, n = 0, o = 0, l = 0, h = 0, c = 0, d = e.target.classList; if (d.contains("apexcharts-bar-area") || d.contains("apexcharts-candlestick-area") || d.contains("apexcharts-rangebar-area")) { var g = e.target, u = g.getBoundingClientRect(), f = i.elGrid.getBoundingClientRect(), p = u.height; c = u.height; var x = u.width, b = parseInt(g.getAttribute("cx"), 10), m = parseInt(g.getAttribute("cy"), 10); h = parseFloat(g.getAttribute("barWidth")); var v = "touchmove" === e.type ? e.touches[0].clientX : e.clientX; s = parseInt(g.getAttribute("j"), 10), n = parseInt(g.parentNode.getAttribute("rel"), 10) - 1; var y = g.getAttribute("data-range-y1"), w = g.getAttribute("data-range-y2"); a.globals.comboCharts && (n = parseInt(g.parentNode.getAttribute("data:realIndex"), 10)), r.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: n, j: s, y1: y ? parseInt(y, 10) : null, y2: w ? parseInt(w, 10) : null, shared: !r.showOnIntersect && a.config.tooltip.shared, e: e }), a.config.tooltip.followCursor ? a.globals.isBarHorizontal ? (o = v - f.left + 15, l = m - r.dataPointsDividedHeight + p / 2 - r.tooltipRect.ttHeight / 2) : (o = a.globals.isXNumeric ? b - x / 2 : b - r.dataPointsDividedWidth + x / 2, l = e.clientY - f.top - r.tooltipRect.ttHeight / 2 - 15) : a.globals.isBarHorizontal ? ((o = b) < r.xyRatios.baseLineInvertedY && (o = b - r.tooltipRect.ttWidth), l = m - r.dataPointsDividedHeight + p / 2 - r.tooltipRect.ttHeight / 2) : (o = a.globals.isXNumeric ? b - x / 2 : b - r.dataPointsDividedWidth + x / 2, l = m) } return { x: o, y: l, barHeight: c, barWidth: h, i: n, j: s } } }]), t }(), xt = function () { function t(i) { e(this, t), this.w = i.w, this.ttCtx = i } return a(t, [{ key: "drawXaxisTooltip", value: function () { var t = this.w, e = this.ttCtx, i = "bottom" === t.config.xaxis.position; e.xaxisOffY = i ? t.globals.gridHeight + 1 : -t.globals.xAxisHeight - t.config.xaxis.axisTicks.height + 3; var a = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", s = t.globals.dom.elWrap; e.blxaxisTooltip && (null === t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e.xaxisTooltip = document.createElement("div"), e.xaxisTooltip.setAttribute("class", a + " apexcharts-theme-" + t.config.tooltip.theme), s.appendChild(e.xaxisTooltip), e.xaxisTooltipText = document.createElement("div"), e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e.xaxisTooltipText.style.fontFamily = t.config.xaxis.tooltip.style.fontFamily || t.config.chart.fontFamily, e.xaxisTooltipText.style.fontSize = t.config.xaxis.tooltip.style.fontSize, e.xaxisTooltip.appendChild(e.xaxisTooltipText))) } }, { key: "drawYaxisTooltip", value: function () { for (var t = this.w, e = this.ttCtx, i = function (i) { var a = t.config.yaxis[i].opposite || t.config.yaxis[i].crosshairs.opposite; e.yaxisOffX = a ? t.globals.gridWidth + 1 : 1; var s = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i, a ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left"); t.globals.yAxisSameScaleIndices.map((function (e, a) { e.map((function (e, a) { a === i && (s += t.config.yaxis[a].show ? " " : " apexcharts-yaxistooltip-hidden") })) })); var r = t.globals.dom.elWrap; null === t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i)) && (e.yaxisTooltip = document.createElement("div"), e.yaxisTooltip.setAttribute("class", s + " apexcharts-theme-" + t.config.tooltip.theme), r.appendChild(e.yaxisTooltip), 0 === i && (e.yaxisTooltipText = []), e.yaxisTooltipText[i] = document.createElement("div"), e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"), e.yaxisTooltip.appendChild(e.yaxisTooltipText[i])) }, a = 0; a < t.config.yaxis.length; a++)i(a) } }, { key: "setXCrosshairWidth", value: function () { var t = this.w, e = this.ttCtx, i = e.getElXCrosshairs(); if (e.xcrosshairsWidth = parseInt(t.config.xaxis.crosshairs.width, 10), t.globals.comboCharts) { var a = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area"); if (null !== a && "barWidth" === t.config.xaxis.crosshairs.width) { var s = parseFloat(a.getAttribute("barWidth")); e.xcrosshairsWidth = s } else if ("tickWidth" === t.config.xaxis.crosshairs.width) { var r = t.globals.labels.length; e.xcrosshairsWidth = t.globals.gridWidth / r } } else if ("tickWidth" === t.config.xaxis.crosshairs.width) { var n = t.globals.labels.length; e.xcrosshairsWidth = t.globals.gridWidth / n } else if ("barWidth" === t.config.xaxis.crosshairs.width) { var o = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area"); if (null !== o) { var l = parseFloat(o.getAttribute("barWidth")); e.xcrosshairsWidth = l } else e.xcrosshairsWidth = 1 } t.globals.isBarHorizontal && (e.xcrosshairsWidth = 0), null !== i && e.xcrosshairsWidth > 0 && i.setAttribute("width", e.xcrosshairsWidth) } }, { key: "handleYCrosshair", value: function () { var t = this.w, e = this.ttCtx; e.ycrosshairs = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden") } }, { key: "drawYaxisTooltipText", value: function (t, e, i) { var a = this.ttCtx, s = this.w, r = s.globals.yLabelFormatters[t]; if (a.yaxisTooltips[t]) { var n = a.getElGrid().getBoundingClientRect(), o = (e - n.top) * i.yRatio[t], l = s.globals.maxYArr[t] - s.globals.minYArr[t], h = s.globals.minYArr[t] + (l - o); a.tooltipPosition.moveYCrosshairs(e - n.top), a.yaxisTooltipText[t].innerHTML = r(h), a.tooltipPosition.moveYAxisTooltip(t) } } }]), t }(), bt = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w; var a = this.w; this.tConfig = a.config.tooltip, this.tooltipUtil = new dt(this), this.tooltipLabels = new gt(this), this.tooltipPosition = new ut(this), this.marker = new ft(this), this.intersect = new pt(this), this.axesTooltip = new xt(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !a.globals.isBarHorizontal && this.tConfig.shared } return a(t, [{ key: "getElTooltip", value: function (t) { return t || (t = this), t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") } }, { key: "getElXCrosshairs", value: function () { return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs") } }, { key: "getElGrid", value: function () { return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid") } }, { key: "drawTooltip", value: function (t) { var e = this.w; this.xyRatios = t, this.blxaxisTooltip = e.config.xaxis.tooltip.enabled && e.globals.axisCharts, this.yaxisTooltips = e.config.yaxis.map((function (t, i) { return !!(t.show && t.tooltip.enabled && e.globals.axisCharts) })), this.allTooltipSeriesGroups = [], e.globals.axisCharts || (this.showTooltipTitle = !1); var i = document.createElement("div"); if (i.classList.add("apexcharts-tooltip"), i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), e.globals.dom.elWrap.appendChild(i), e.globals.axisCharts) { this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair(); var a = new G(this.ctx); this.xAxisTicksPositions = a.getXAxisTicksPositions() } if (!e.globals.comboCharts && !this.tConfig.intersect && "bar" !== e.config.chart.type && "rangeBar" !== e.config.chart.type || this.tConfig.shared || (this.showOnIntersect = !0), 0 !== e.config.markers.size && 0 !== e.globals.markers.largestSize || this.marker.drawDynamicPoints(this), e.globals.collapsedSeries.length !== e.globals.series.length) { this.dataPointsDividedHeight = e.globals.gridHeight / e.globals.dataPoints, this.dataPointsDividedWidth = e.globals.gridWidth / e.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i.appendChild(this.tooltipTitle)); var s = e.globals.series.length; (e.globals.xyCharts || e.globals.comboCharts) && this.tConfig.shared && (s = this.showOnIntersect ? 1 : e.globals.series.length), this.legendLabels = e.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(s), this.addSVGEvents() } } }, { key: "createTTElements", value: function (t) { for (var e = this.w, i = [], a = this.getElTooltip(), s = 0; s < t; s++) { var r = document.createElement("div"); r.classList.add("apexcharts-tooltip-series-group"), r.style.order = e.config.tooltip.inverseOrder ? t - s : s + 1, this.tConfig.shared && this.tConfig.enabledOnSeries && Array.isArray(this.tConfig.enabledOnSeries) && this.tConfig.enabledOnSeries.indexOf(s) < 0 && r.classList.add("apexcharts-tooltip-series-group-hidden"); var n = document.createElement("span"); n.classList.add("apexcharts-tooltip-marker"), n.style.backgroundColor = e.globals.colors[s], r.appendChild(n); var o = document.createElement("div"); o.classList.add("apexcharts-tooltip-text"), o.style.fontFamily = this.tConfig.style.fontFamily || e.config.chart.fontFamily, o.style.fontSize = this.tConfig.style.fontSize; var l = document.createElement("div"); l.classList.add("apexcharts-tooltip-y-group"); var h = document.createElement("span"); h.classList.add("apexcharts-tooltip-text-label"), l.appendChild(h); var c = document.createElement("span"); c.classList.add("apexcharts-tooltip-text-value"), l.appendChild(c); var d = document.createElement("div"); d.classList.add("apexcharts-tooltip-z-group"); var g = document.createElement("span"); g.classList.add("apexcharts-tooltip-text-z-label"), d.appendChild(g); var u = document.createElement("span"); u.classList.add("apexcharts-tooltip-text-z-value"), d.appendChild(u), o.appendChild(l), o.appendChild(d), r.appendChild(o), a.appendChild(r), i.push(r) } return i } }, { key: "addSVGEvents", value: function () { var t = this.w, e = t.config.chart.type, i = this.getElTooltip(), a = !("bar" !== e && "candlestick" !== e && "rangeBar" !== e), s = "area" === e || "line" === e || "scatter" === e || "bubble" === e || "radar" === e, r = t.globals.dom.Paper.node, n = this.getElGrid(); n && (this.seriesBound = n.getBoundingClientRect()); var o, l = [], h = [], c = { hoverArea: r, elGrid: n, tooltipEl: i, tooltipY: l, tooltipX: h, ttItems: this.ttItems }; if (t.globals.axisCharts && (s ? o = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a ? o = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" !== e && "treemap" !== e || (o = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), o && o.length)) for (var d = 0; d < o.length; d++)l.push(o[d].getAttribute("cy")), h.push(o[d].getAttribute("cx")); if (t.globals.xyCharts && !this.showOnIntersect || t.globals.comboCharts && !this.showOnIntersect || a && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([r], c); else if (a && !t.globals.comboCharts || s && this.showOnIntersect) this.addDatapointEventsListeners(c); else if (!t.globals.axisCharts || "heatmap" === e || "treemap" === e) { var g = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series"); this.addPathsEventListeners(g, c) } if (this.showOnIntersect) { var u = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker"); u.length > 0 && this.addPathsEventListeners(u, c), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(c) } } }, { key: "drawFixedTooltipRect", value: function () { var t = this.w, e = this.getElTooltip(), i = e.getBoundingClientRect(), a = i.width + 10, s = i.height + 10, r = this.tConfig.fixed.offsetX, n = this.tConfig.fixed.offsetY, o = this.tConfig.fixed.position.toLowerCase(); return o.indexOf("right") > -1 && (r = r + t.globals.svgWidth - a + 10), o.indexOf("bottom") > -1 && (n = n + t.globals.svgHeight - s - 10), e.style.left = r + "px", e.style.top = n + "px", { x: r, y: n, ttWidth: a, ttHeight: s } } }, { key: "addDatapointEventsListeners", value: function (t) { var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-rangebar-area"); this.addPathsEventListeners(e, t) } }, { key: "addPathsEventListeners", value: function (t, e) { for (var i = this, a = function (a) { var s = { paths: t[a], tooltipEl: e.tooltipEl, tooltipY: e.tooltipY, tooltipX: e.tooltipX, elGrid: e.elGrid, hoverArea: e.hoverArea, ttItems: e.ttItems };["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map((function (e) { return t[a].addEventListener(e, i.seriesHover.bind(i, s), { capture: !1, passive: !0 }) })) }, s = 0; s < t.length; s++)a(s) } }, { key: "seriesHover", value: function (t, e) { var i = this, a = [], s = this.w; s.config.chart.group && (a = this.ctx.getGroupedCharts()), s.globals.axisCharts && (s.globals.minX === -1 / 0 && s.globals.maxX === 1 / 0 || 0 === s.globals.dataPoints) || (a.length ? a.forEach((function (a) { var s = i.getElTooltip(a), r = { paths: t.paths, tooltipEl: s, tooltipY: t.tooltipY, tooltipX: t.tooltipX, elGrid: t.elGrid, hoverArea: t.hoverArea, ttItems: a.w.globals.tooltip.ttItems }; a.w.globals.minX === i.w.globals.minX && a.w.globals.maxX === i.w.globals.maxX && a.w.globals.tooltip.seriesHoverByContext({ chartCtx: a, ttCtx: a.w.globals.tooltip, opt: r, e: e }) })) : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: t, e: e })) } }, { key: "seriesHoverByContext", value: function (t) { var e = t.chartCtx, i = t.ttCtx, a = t.opt, s = t.e, r = e.w, n = this.getElTooltip(); (i.tooltipRect = { x: 0, y: 0, ttWidth: n.getBoundingClientRect().width, ttHeight: n.getBoundingClientRect().height }, i.e = s, !i.tooltipUtil.hasBars() || r.globals.comboCharts || i.isBarShared) || this.tConfig.onDatasetHover.highlightDataSeries && new M(e).toggleSeriesOnHover(s, s.target.parentNode); i.fixedTooltip && i.drawFixedTooltipRect(), r.globals.axisCharts ? i.axisChartsTooltips({ e: s, opt: a, tooltipRect: i.tooltipRect }) : i.nonAxisChartsTooltips({ e: s, opt: a, tooltipRect: i.tooltipRect }) } }, { key: "axisChartsTooltips", value: function (t) { var e, i, a = t.e, s = t.opt, r = this.w, n = s.elGrid.getBoundingClientRect(), o = "touchmove" === a.type ? a.touches[0].clientX : a.clientX, l = "touchmove" === a.type ? a.touches[0].clientY : a.clientY; if (this.clientY = l, this.clientX = o, r.globals.capturedSeriesIndex = -1, r.globals.capturedDataPointIndex = -1, l < n.top || l > n.top + n.height) this.handleMouseOut(s); else { if (Array.isArray(this.tConfig.enabledOnSeries) && !r.config.tooltip.shared) { var h = parseInt(s.paths.getAttribute("index"), 10); if (this.tConfig.enabledOnSeries.indexOf(h) < 0) return void this.handleMouseOut(s) } var c = this.getElTooltip(), d = this.getElXCrosshairs(), g = r.globals.xyCharts || "bar" === r.config.chart.type && !r.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || r.globals.comboCharts && this.tooltipUtil.hasBars(); if (r.globals.isBarHorizontal && this.tooltipUtil.hasBars() && (g = !1), "mousemove" === a.type || "touchmove" === a.type || "mouseup" === a.type) { null !== d && d.classList.add("apexcharts-active"); var u = this.yaxisTooltips.filter((function (t) { return !0 === t })); if (null !== this.ycrosshairs && u.length && this.ycrosshairs.classList.add("apexcharts-active"), g && !this.showOnIntersect) this.handleStickyTooltip(a, o, l, s); else if ("heatmap" === r.config.chart.type || "treemap" === r.config.chart.type) { var f = this.intersect.handleHeatTreeTooltip({ e: a, opt: s, x: e, y: i, type: r.config.chart.type }); e = f.x, i = f.y, c.style.left = e + "px", c.style.top = i + "px" } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({ e: a, opt: s }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({ e: a, opt: s, x: e, y: i }); if (this.yaxisTooltips.length) for (var p = 0; p < r.config.yaxis.length; p++)this.axesTooltip.drawYaxisTooltipText(p, l, this.xyRatios); s.tooltipEl.classList.add("apexcharts-active") } else "mouseout" !== a.type && "touchend" !== a.type || this.handleMouseOut(s) } } }, { key: "nonAxisChartsTooltips", value: function (t) { var e = t.e, i = t.opt, a = t.tooltipRect, s = this.w, r = i.paths.getAttribute("rel"), n = this.getElTooltip(), o = s.globals.dom.elWrap.getBoundingClientRect(); if ("mousemove" === e.type || "touchmove" === e.type) { n.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: parseInt(r, 10) - 1, shared: !1 }); var l = s.globals.clientX - o.left - a.ttWidth / 2, h = s.globals.clientY - o.top - a.ttHeight - 10; if (n.style.left = l + "px", n.style.top = h + "px", s.config.legend.tooltipHoverFormatter) { var c = r - 1, d = (0, s.config.legend.tooltipHoverFormatter)(this.legendLabels[c].getAttribute("data:default-text"), { seriesIndex: c, dataPointIndex: c, w: s }); this.legendLabels[c].innerHTML = d } } else "mouseout" !== e.type && "touchend" !== e.type || (n.classList.remove("apexcharts-active"), s.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((function (t) { var e = t.getAttribute("data:default-text"); t.innerHTML = decodeURIComponent(e) }))) } }, { key: "handleStickyTooltip", value: function (t, e, i, a) { var s = this.w, r = this.tooltipUtil.getNearestValues({ context: this, hoverArea: a.hoverArea, elGrid: a.elGrid, clientX: e, clientY: i }), n = r.j, o = r.capturedSeries; r.hoverX < 0 || r.hoverX > s.globals.gridWidth ? this.handleMouseOut(a) : null !== o ? this.handleStickyCapturedSeries(t, o, a, n) : this.tooltipUtil.isXoverlap(n) && this.create(t, this, 0, n, a.ttItems) } }, { key: "handleStickyCapturedSeries", value: function (t, e, i, a) { var s = this.w; null === s.globals.series[e][a] ? this.handleMouseOut(i) : void 0 !== s.globals.series[e][a] ? this.tConfig.shared && this.tooltipUtil.isXoverlap(a) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t, this, e, a, i.ttItems) : this.create(t, this, e, a, i.ttItems, !1) : this.tooltipUtil.isXoverlap(a) && this.create(t, this, 0, a, i.ttItems) } }, { key: "deactivateHoverFilter", value: function () { for (var t = this.w, e = new b(this.ctx), i = t.globals.dom.Paper.select(".apexcharts-bar-area"), a = 0; a < i.length; a++)e.pathMouseLeave(i[a]) } }, { key: "handleMouseOut", value: function (t) { var e = this.w, i = this.getElXCrosshairs(); if (t.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), "bubble" !== e.config.chart.type && this.marker.resetPointsSize(), null !== i && i.classList.remove("apexcharts-active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("apexcharts-active"), this.blxaxisTooltip && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) { null === this.yaxisTTEls && (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip")); for (var a = 0; a < this.yaxisTTEls.length; a++)this.yaxisTTEls[a].classList.remove("apexcharts-active") } e.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((function (t) { var e = t.getAttribute("data:default-text"); t.innerHTML = decodeURIComponent(e) })) } }, { key: "markerClick", value: function (t, e, i) { var a = this.w; "function" == typeof a.config.chart.events.markerClick && a.config.chart.events.markerClick(t, this.ctx, { seriesIndex: e, dataPointIndex: i, w: a }), this.ctx.events.fireEvent("markerClick", [t, this.ctx, { seriesIndex: e, dataPointIndex: i, w: a }]) } }, { key: "create", value: function (t, e, i, a, s) { var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, n = this.w, o = e; "mouseup" === t.type && this.markerClick(t, i, a), null === r && (r = this.tConfig.shared); var l = this.tooltipUtil.hasMarkers(), h = this.tooltipUtil.getElBars(); if (n.config.legend.tooltipHoverFormatter) { var c = n.config.legend.tooltipHoverFormatter, d = Array.from(this.legendLabels); d.forEach((function (t) { var e = t.getAttribute("data:default-text"); t.innerHTML = decodeURIComponent(e) })); for (var g = 0; g < d.length; g++) { var u = d[g], f = parseInt(u.getAttribute("i"), 10), p = decodeURIComponent(u.getAttribute("data:default-text")), x = c(p, { seriesIndex: r ? f : i, dataPointIndex: a, w: n }); if (r) u.innerHTML = n.globals.collapsedSeriesIndices.indexOf(f) < 0 ? x : p; else if (u.innerHTML = f === i ? x : p, i === f) break } } if (r) { if (o.tooltipLabels.drawSeriesTexts({ ttItems: s, i: i, j: a, shared: !this.showOnIntersect && this.tConfig.shared }), l && (n.globals.markers.largestSize > 0 ? o.marker.enlargePoints(a) : o.tooltipPosition.moveDynamicPointsOnHover(a)), this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(h), this.barSeriesHeight > 0)) { var m = new b(this.ctx), v = n.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a, "']")); this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(a); for (var y = 0; y < v.length; y++)m.pathMouseEnter(v[y]) } } else o.tooltipLabels.drawSeriesTexts({ shared: !1, ttItems: s, i: i, j: a }), this.tooltipUtil.hasBars() && o.tooltipPosition.moveStickyTooltipOverBars(a), l && o.tooltipPosition.moveMarkers(i, a) } }]), t }(), mt = function (t) { o(s, t); var i = d(s); function s() { return e(this, s), i.apply(this, arguments) } return a(s, [{ key: "draw", value: function (t, e) { var i = this, a = this.w; this.graphics = new b(this.ctx), this.bar = new X(this.ctx, this.xyRatios); var s = new y(this.ctx, a); t = s.getLogSeries(t), this.yRatio = s.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t), "100%" === a.config.chart.stackType && (t = a.globals.seriesPercent.slice()), this.series = t, this.totalItems = 0, this.prevY = [], this.prevX = [], this.prevYF = [], this.prevXF = [], this.prevYVal = [], this.prevXVal = [], this.xArrj = [], this.xArrjF = [], this.xArrjVal = [], this.yArrj = [], this.yArrjF = [], this.yArrjVal = []; for (var r = 0; r < t.length; r++)t[r].length > 0 && (this.totalItems += t[r].length); for (var o = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" }), l = 0, h = 0, c = function (s, r) { var c = void 0, d = void 0, g = void 0, u = void 0, p = [], x = [], b = a.globals.comboCharts ? e[s] : s; i.yRatio.length > 1 && (i.yaxisIndex = b), i.isReversed = a.config.yaxis[i.yaxisIndex] && a.config.yaxis[i.yaxisIndex].reversed; var m = i.graphics.group({ class: "apexcharts-series", seriesName: f.escapeString(a.globals.seriesNames[b]), rel: s + 1, "data:realIndex": b }); i.ctx.series.addCollapsedClassToSeries(m, b); var v = i.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": b }), y = 0, w = 0, k = i.initialPositions(l, h, c, d, g, u); h = k.y, y = k.barHeight, d = k.yDivision, u = k.zeroW, l = k.x, w = k.barWidth, c = k.xDivision, g = k.zeroH, i.yArrj = [], i.yArrjF = [], i.yArrjVal = [], i.xArrj = [], i.xArrjF = [], i.xArrjVal = [], 1 === i.prevY.length && i.prevY[0].every((function (t) { return isNaN(t) })) && (i.prevY[0] = i.prevY[0].map((function (t) { return g })), i.prevYF[0] = i.prevYF[0].map((function (t) { return 0 }))); for (var A = 0; A < a.globals.dataPoints; A++) { var S = i.barHelpers.getStrokeWidth(s, A, b), C = { indexes: { i: s, j: A, realIndex: b, bc: r }, strokeWidth: S, x: l, y: h, elSeries: m }, L = null; i.isHorizontal ? (L = i.drawStackedBarPaths(n(n({}, C), {}, { zeroW: u, barHeight: y, yDivision: d })), w = i.series[s][A] / i.invertedYRatio) : (L = i.drawStackedColumnPaths(n(n({}, C), {}, { xDivision: c, barWidth: w, zeroH: g })), y = i.series[s][A] / i.yRatio[i.yaxisIndex]), h = L.y, l = L.x, p.push(l), x.push(h); var P = i.barHelpers.getPathFillColor(t, s, A, b); m = i.renderSeries({ realIndex: b, pathFill: P, j: A, i: s, pathFrom: L.pathFrom, pathTo: L.pathTo, strokeWidth: S, elSeries: m, x: l, y: h, series: t, barHeight: y, barWidth: w, elDataLabelsWrap: v, type: "bar", visibleSeries: 0 }) } a.globals.seriesXvalues[b] = p, a.globals.seriesYvalues[b] = x, i.prevY.push(i.yArrj), i.prevYF.push(i.yArrjF), i.prevYVal.push(i.yArrjVal), i.prevX.push(i.xArrj), i.prevXF.push(i.xArrjF), i.prevXVal.push(i.xArrjVal), o.add(m) }, d = 0, g = 0; d < t.length; d++, g++)c(d, g); return o } }, { key: "initialPositions", value: function (t, e, i, a, s, r) { var n, o, l = this.w; return this.isHorizontal ? (n = (n = a = l.globals.gridHeight / l.globals.dataPoints) * parseInt(l.config.plotOptions.bar.barHeight, 10) / 100, r = this.baseLineInvertedY + l.globals.padHorizontal + (this.isReversed ? l.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0), e = (a - n) / 2) : (o = i = l.globals.gridWidth / l.globals.dataPoints, o = l.globals.isXNumeric && l.globals.dataPoints > 1 ? (i = l.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : o * parseInt(l.config.plotOptions.bar.columnWidth, 10) / 100, s = this.baseLineY[this.yaxisIndex] + (this.isReversed ? l.globals.gridHeight : 0) - (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), t = l.globals.padHorizontal + (i - o) / 2), { x: t, y: e, yDivision: a, xDivision: i, barHeight: n, barWidth: o, zeroH: s, zeroW: r } } }, { key: "drawStackedBarPaths", value: function (t) { for (var e, i = t.indexes, a = t.barHeight, s = t.strokeWidth, r = t.zeroW, n = t.x, o = t.y, l = t.yDivision, h = t.elSeries, c = this.w, d = o, g = i.i, u = i.j, f = 0, p = 0; p < this.prevXF.length; p++)f += this.prevXF[p][u]; if (g > 0) { var x = r; this.prevXVal[g - 1][u] < 0 ? x = this.series[g][u] >= 0 ? this.prevX[g - 1][u] + f - 2 * (this.isReversed ? f : 0) : this.prevX[g - 1][u] : this.prevXVal[g - 1][u] >= 0 && (x = this.series[g][u] >= 0 ? this.prevX[g - 1][u] : this.prevX[g - 1][u] - f + 2 * (this.isReversed ? f : 0)), e = x } else e = r; n = null === this.series[g][u] ? e : e + this.series[g][u] / this.invertedYRatio - 2 * (this.isReversed ? this.series[g][u] / this.invertedYRatio : 0), this.xArrj.push(n), this.xArrjF.push(Math.abs(e - n)), this.xArrjVal.push(this.series[g][u]); var b = this.barHelpers.getBarpaths({ barYPosition: d, barHeight: a, x1: e, x2: n, strokeWidth: s, series: this.series, realIndex: i.realIndex, i: g, j: u, w: c }); return this.barHelpers.barBackground({ j: u, i: g, y1: d, y2: a, elSeries: h }), o += l, { pathTo: b.pathTo, pathFrom: b.pathFrom, x: n, y: o } } }, { key: "drawStackedColumnPaths", value: function (t) { var e = t.indexes, i = t.x, a = t.y, s = t.xDivision, r = t.barWidth, n = t.zeroH, o = (t.strokeWidth, t.elSeries), l = this.w, h = e.i, c = e.j, d = e.bc; if (l.globals.isXNumeric) { var g = l.globals.seriesX[h][c]; g || (g = 0), i = (g - l.globals.minX) / this.xRatio - r / 2 } for (var u, f = i, p = 0, x = 0; x < this.prevYF.length; x++)p += isNaN(this.prevYF[x][c]) ? 0 : this.prevYF[x][c]; if (h > 0 && !l.globals.isXNumeric || h > 0 && l.globals.isXNumeric && l.globals.seriesX[h - 1][c] === l.globals.seriesX[h][c]) { var b, m, v = Math.min(this.yRatio.length + 1, h + 1); if (void 0 !== this.prevY[h - 1]) for (var y = 1; y < v; y++)if (!isNaN(this.prevY[h - y][c])) { m = this.prevY[h - y][c]; break } for (var w = 1; w < v; w++) { if (this.prevYVal[h - w][c] < 0) { b = this.series[h][c] >= 0 ? m - p + 2 * (this.isReversed ? p : 0) : m; break } if (this.prevYVal[h - w][c] >= 0) { b = this.series[h][c] >= 0 ? m : m + p - 2 * (this.isReversed ? p : 0); break } } void 0 === b && (b = l.globals.gridHeight), u = this.prevYF[0].every((function (t) { return 0 === t })) && this.prevYF.slice(1, h).every((function (t) { return t.every((function (t) { return isNaN(t) })) })) ? l.globals.gridHeight - n : b } else u = l.globals.gridHeight - n; a = u - this.series[h][c] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[h][c] / this.yRatio[this.yaxisIndex] : 0), this.yArrj.push(a), this.yArrjF.push(Math.abs(u - a)), this.yArrjVal.push(this.series[h][c]); var k = this.barHelpers.getColumnPaths({ barXPosition: f, barWidth: r, y1: u, y2: a, yRatio: this.yRatio[this.yaxisIndex], strokeWidth: this.strokeWidth, series: this.series, realIndex: e.realIndex, i: h, j: c, w: l }); return this.barHelpers.barBackground({ bc: d, j: c, i: h, x1: f, x2: r, elSeries: o }), i += s, { pathTo: k.pathTo, pathFrom: k.pathFrom, x: l.globals.isXNumeric ? i - s : i, y: a } } }]), s }(X), vt = function (t) { o(s, t); var i = d(s); function s() { return e(this, s), i.apply(this, arguments) } return a(s, [{ key: "draw", value: function (t, e) { var i = this.w, a = new b(this.ctx), s = new L(this.ctx); this.candlestickOptions = this.w.config.plotOptions.candlestick; var r = new y(this.ctx, i); t = r.getLogSeries(t), this.series = t, this.yRatio = r.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t); for (var n = a.group({ class: "apexcharts-candlestick-series apexcharts-plot-series" }), o = 0; o < t.length; o++) { var l, h, c = void 0, d = void 0, g = [], u = [], p = i.globals.comboCharts ? e[o] : o, x = a.group({ class: "apexcharts-series", seriesName: f.escapeString(i.globals.seriesNames[p]), rel: o + 1, "data:realIndex": p }); t[o].length > 0 && (this.visibleI = this.visibleI + 1); var m, v; this.yRatio.length > 1 && (this.yaxisIndex = p); var w = this.barHelpers.initialPositions(); d = w.y, m = w.barHeight, c = w.x, v = w.barWidth, l = w.xDivision, h = w.zeroH, u.push(c + v / 2); for (var k = a.group({ class: "apexcharts-datalabels", "data:realIndex": p }), A = 0; A < i.globals.dataPoints; A++) { var S, C = this.barHelpers.getStrokeWidth(o, A, p), P = this.drawCandleStickPaths({ indexes: { i: o, j: A, realIndex: p }, x: c, y: d, xDivision: l, barWidth: v, zeroH: h, strokeWidth: C, elSeries: x }); d = P.y, c = P.x, S = P.color, A > 0 && u.push(c + v / 2), g.push(d); var T = s.fillPath({ seriesNumber: p, dataPointIndex: A, color: S, value: t[o][A] }), z = this.candlestickOptions.wick.useFillColor ? S : void 0; this.renderSeries({ realIndex: p, pathFill: T, lineFill: z, j: A, i: o, pathFrom: P.pathFrom, pathTo: P.pathTo, strokeWidth: C, elSeries: x, x: c, y: d, series: t, barHeight: m, barWidth: v, elDataLabelsWrap: k, visibleSeries: this.visibleI, type: "candlestick" }) } i.globals.seriesXvalues[p] = u, i.globals.seriesYvalues[p] = g, n.add(x) } return n } }, { key: "drawCandleStickPaths", value: function (t) { var e = t.indexes, i = t.x, a = (t.y, t.xDivision), s = t.barWidth, r = t.zeroH, n = t.strokeWidth, o = this.w, l = new b(this.ctx), h = e.i, c = e.j, d = !0, g = o.config.plotOptions.candlestick.colors.upward, u = o.config.plotOptions.candlestick.colors.downward, f = this.yRatio[this.yaxisIndex], p = e.realIndex, x = this.getOHLCValue(p, c), m = r, v = r; x.o > x.c && (d = !1); var y = Math.min(x.o, x.c), w = Math.max(x.o, x.c); o.globals.isXNumeric && (i = (o.globals.seriesX[p][c] - o.globals.minX) / this.xRatio - s / 2); var k = i + s * this.visibleI; void 0 === this.series[h][c] || null === this.series[h][c] ? y = r : (y = r - y / f, w = r - w / f, m = r - x.h / f, v = r - x.l / f); var A = l.move(k, r), S = l.move(k, y); return o.globals.previousPaths.length > 0 && (S = this.getPreviousPath(p, c, !0)), A = l.move(k, w) + l.line(k + s / 2, w) + l.line(k + s / 2, m) + l.line(k + s / 2, w) + l.line(k + s, w) + l.line(k + s, y) + l.line(k + s / 2, y) + l.line(k + s / 2, v) + l.line(k + s / 2, y) + l.line(k, y) + l.line(k, w - n / 2), S += l.move(k, y), o.globals.isXNumeric || (i += a), { pathTo: A, pathFrom: S, x: i, y: w, barXPosition: k, color: d ? g : u } } }, { key: "getOHLCValue", value: function (t, e) { var i = this.w; return { o: i.globals.seriesCandleO[t][e], h: i.globals.seriesCandleH[t][e], l: i.globals.seriesCandleL[t][e], c: i.globals.seriesCandleC[t][e] } } }]), s }(X), yt = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "checkColorRange", value: function () { var t = this.w, e = !1, i = t.config.plotOptions[t.config.chart.type]; return i.colorScale.ranges.length > 0 && i.colorScale.ranges.map((function (t, i) { t.from <= 0 && (e = !0) })), e } }, { key: "getShadeColor", value: function (t, e, i, a) { var s = this.w, r = 1, n = s.config.plotOptions[t].shadeIntensity, o = this.determineColor(t, e, i); s.globals.hasNegs || a ? r = s.config.plotOptions[t].reverseNegativeShade ? o.percent < 0 ? o.percent / 100 * (1.25 * n) : (1 - o.percent / 100) * (1.25 * n) : o.percent <= 0 ? 1 - (1 + o.percent / 100) * n : (1 - o.percent / 100) * n : (r = 1 - o.percent / 100, "treemap" === t && (r = (1 - o.percent / 100) * (1.25 * n))); var l = o.color, h = new f; return s.config.plotOptions[t].enableShades && (r < 0 && (r = 0), l = "dark" === this.w.config.theme.mode ? f.hexToRgba(h.shadeColor(-1 * r, o.color), s.config.fill.opacity) : f.hexToRgba(h.shadeColor(r, o.color), s.config.fill.opacity)), { color: l, colorProps: o } } }, { key: "determineColor", value: function (t, e, i) { var a = this.w, s = a.globals.series[e][i], r = a.config.plotOptions[t], n = r.colorScale.inverse ? i : e; a.config.plotOptions[t].distributed && (n = i); var o = a.globals.colors[n], l = null, h = Math.min.apply(Math, g(a.globals.series[e])), c = Math.max.apply(Math, g(a.globals.series[e])); r.distributed || "heatmap" !== t || (h = a.globals.minY, c = a.globals.maxY), void 0 !== r.colorScale.min && (h = r.colorScale.min < a.globals.minY ? r.colorScale.min : a.globals.minY, c = r.colorScale.max > a.globals.maxY ? r.colorScale.max : a.globals.maxY); var d = Math.abs(c) + Math.abs(h), u = 100 * s / (0 === d ? d - 1e-6 : d); r.colorScale.ranges.length > 0 && r.colorScale.ranges.map((function (t, e) { if (s >= t.from && s <= t.to) { o = t.color, l = t.foreColor ? t.foreColor : null, h = t.from, c = t.to; var i = Math.abs(c) + Math.abs(h); u = 100 * s / (0 === i ? i - 1e-6 : i) } })); return { color: o, foreColor: l, percent: u } } }, { key: "calculateDataLabels", value: function (t) { var e = t.text, i = t.x, a = t.y, s = t.i, r = t.j, n = t.colorProps, o = t.fontSize, l = this.w.config.dataLabels, h = new b(this.ctx), c = new z(this.ctx), d = null; if (l.enabled) { d = h.group({ class: "apexcharts-data-labels" }); var g = l.offsetX, u = l.offsetY, f = i + g, p = a + parseFloat(l.style.fontSize) / 3 + u; c.plotDataLabelsText({ x: f, y: p, text: e, i: s, j: r, color: n.foreColor, parent: d, fontSize: o, dataLabelsConfig: l }) } return d } }, { key: "addListeners", value: function (t) { var e = new b(this.ctx); t.node.addEventListener("mouseenter", e.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", e.pathMouseLeave.bind(this, t)), t.node.addEventListener("mousedown", e.pathMouseDown.bind(this, t)) } }]), t }(), wt = function () { function t(i, a) { e(this, t), this.ctx = i, this.w = i.w, this.xRatio = a.xRatio, this.yRatio = a.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new yt(i), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0 } return a(t, [{ key: "draw", value: function (t) { var e = this.w, i = new b(this.ctx), a = i.group({ class: "apexcharts-heatmap" }); a.attr("clip-path", "url(#gridRectMask".concat(e.globals.cuid, ")")); var s = e.globals.gridWidth / e.globals.dataPoints, r = e.globals.gridHeight / e.globals.series.length, n = 0, o = !1; this.negRange = this.helpers.checkColorRange(); var l = t.slice(); e.config.yaxis[0].reversed && (o = !0, l.reverse()); for (var h = o ? 0 : l.length - 1; o ? h < l.length : h >= 0; o ? h++ : h--) { var c = i.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: f.escapeString(e.globals.seriesNames[h]), rel: h + 1, "data:realIndex": h }); if (this.ctx.series.addCollapsedClassToSeries(c, h), e.config.chart.dropShadow.enabled) { var d = e.config.chart.dropShadow; new p(this.ctx).dropShadow(c, d, h) } for (var g = 0, u = e.config.plotOptions.heatmap.shadeIntensity, x = 0; x < l[h].length; x++) { var m = this.helpers.getShadeColor(e.config.chart.type, h, x, this.negRange), v = m.color, y = m.colorProps; if ("image" === e.config.fill.type) v = new L(this.ctx).fillPath({ seriesNumber: h, dataPointIndex: x, opacity: e.globals.hasNegs ? y.percent < 0 ? 1 - (1 + y.percent / 100) : u + y.percent / 100 : y.percent / 100, patternID: f.randomId(), width: e.config.fill.image.width ? e.config.fill.image.width : s, height: e.config.fill.image.height ? e.config.fill.image.height : r }); var w = this.rectRadius, k = i.drawRect(g, n, s, r, w); if (k.attr({ cx: g, cy: n }), k.node.classList.add("apexcharts-heatmap-rect"), c.add(k), k.attr({ fill: v, i: h, index: h, j: x, val: l[h][x], "stroke-width": this.strokeWidth, stroke: e.config.plotOptions.heatmap.useFillColorAsStroke ? v : e.globals.stroke.colors[0], color: v }), this.helpers.addListeners(k), e.config.chart.animations.enabled && !e.globals.dataChanged) { var A = 1; e.globals.resized || (A = e.config.chart.animations.speed), this.animateHeatMap(k, g, n, s, r, A) } if (e.globals.dataChanged) { var S = 1; if (this.dynamicAnim.enabled && e.globals.shouldAnimate) { S = this.dynamicAnim.speed; var C = e.globals.previousPaths[h] && e.globals.previousPaths[h][x] && e.globals.previousPaths[h][x].color; C || (C = "rgba(255, 255, 255, 0)"), this.animateHeatColor(k, f.isColorHex(C) ? C : f.rgb2hex(C), f.isColorHex(v) ? v : f.rgb2hex(v), S) } } var P = (0, e.config.dataLabels.formatter)(e.globals.series[h][x], { value: e.globals.series[h][x], seriesIndex: h, dataPointIndex: x, w: e }), T = this.helpers.calculateDataLabels({ text: P, x: g + s / 2, y: n + r / 2, i: h, j: x, colorProps: y, series: l }); null !== T && c.add(T), g += s } n += r, a.add(c) } var z = e.globals.yAxisScale[0].result.slice(); e.config.yaxis[0].reversed ? z.unshift("") : z.push(""), e.globals.yAxisScale[0].result = z; var I = e.globals.gridHeight / e.globals.series.length; return e.config.yaxis[0].labels.offsetY = -I / 2, a } }, { key: "animateHeatMap", value: function (t, e, i, a, s, r) { var n = new x(this.ctx); n.animateRect(t, { x: e + a / 2, y: i + s / 2, width: 0, height: 0 }, { x: e, y: i, width: a, height: s }, r, (function () { n.animationCompleted(t) })) } }, { key: "animateHeatColor", value: function (t, e, i, a) { t.attr({ fill: e }).animate(a).attr({ fill: i }) } }]), t }(), kt = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "drawYAxisTexts", value: function (t, e, i, a) { var s = this.w, r = s.config.yaxis[0], n = s.globals.yLabelFormatters[0]; return new b(this.ctx).drawText({ x: t + r.labels.offsetX, y: e + r.labels.offsetY, text: n(a, i), textAnchor: "middle", fontSize: r.labels.style.fontSize, fontFamily: r.labels.style.fontFamily, foreColor: Array.isArray(r.labels.style.colors) ? r.labels.style.colors[i] : r.labels.style.colors }) } }]), t }(), At = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w; var a = this.w; this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = void 0 !== a.globals.stroke.colors ? a.globals.stroke.colors : a.globals.colors, this.defaultSize = Math.min(a.globals.gridWidth, a.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = a.globals.gridWidth / 2, "radialBar" === a.config.chart.type ? this.fullAngle = 360 : this.fullAngle = Math.abs(a.config.plotOptions.pie.endAngle - a.config.plotOptions.pie.startAngle), this.initialAngle = a.config.plotOptions.pie.startAngle % this.fullAngle, a.globals.radialSize = this.defaultSize / 2.05 - a.config.stroke.width - (a.config.chart.sparkline.enabled ? 0 : a.config.chart.dropShadow.blur), this.donutSize = a.globals.radialSize * parseInt(a.config.plotOptions.pie.donut.size, 10) / 100, this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [] } return a(t, [{ key: "draw", value: function (t) { var e = this, i = this.w, a = new b(this.ctx); if (this.ret = a.group({ class: "apexcharts-pie" }), i.globals.noData) return this.ret; for (var s = 0, r = 0; r < t.length; r++)s += f.negToZero(t[r]); var n = [], o = a.group(); 0 === s && (s = 1e-5), t.forEach((function (t) { e.maxY = Math.max(e.maxY, t) })), i.config.yaxis[0].max && (this.maxY = i.config.yaxis[0].max), "polarArea" === this.chartType && this.drawPolarElements(); for (var l = 0; l < t.length; l++) { var h = this.fullAngle * f.negToZero(t[l]) / s; n.push(h), "polarArea" === this.chartType ? (n[l] = this.fullAngle / t.length, this.sliceSizes.push(i.globals.radialSize * t[l] / this.maxY)) : this.sliceSizes.push(i.globals.radialSize) } if (i.globals.dataChanged) { for (var c, d = 0, g = 0; g < i.globals.previousPaths.length; g++)d += f.negToZero(i.globals.previousPaths[g]); for (var u = 0; u < i.globals.previousPaths.length; u++)c = this.fullAngle * f.negToZero(i.globals.previousPaths[u]) / d, this.prevSectorAngleArr.push(c) } this.donutSize < 0 && (this.donutSize = 0); var p = i.config.plotOptions.pie.customScale, x = i.globals.gridWidth / 2, m = i.globals.gridHeight / 2, v = x - i.globals.gridWidth / 2 * p, y = m - i.globals.gridHeight / 2 * p; if ("donut" === this.chartType) { var w = a.drawCircle(this.donutSize); w.attr({ cx: this.centerX, cy: this.centerY, fill: i.config.plotOptions.pie.donut.background ? i.config.plotOptions.pie.donut.background : "transparent" }), o.add(w) } var k = this.drawArcs(n, t); if (this.sliceLabels.forEach((function (t) { k.add(t) })), o.attr({ transform: "translate(".concat(v, ", ").concat(y, ") scale(").concat(p, ")") }), o.add(k), this.ret.add(o), this.donutDataLabels.show) { var A = this.renderInnerDataLabels(this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show, translateX: v, translateY: y }); this.ret.add(A) } return this.ret } }, { key: "drawArcs", value: function (t, e) { var i = this.w, a = new p(this.ctx), s = new b(this.ctx), r = new L(this.ctx), n = s.group({ class: "apexcharts-slices" }), o = this.initialAngle, l = this.initialAngle, h = this.initialAngle, c = this.initialAngle; this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0; for (var d = 0; d < t.length; d++) { var g = s.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: f.escapeString(i.globals.seriesNames[d]), rel: d + 1, "data:realIndex": d }); n.add(g), l = c, h = (o = h) + t[d], c = l + this.prevSectorAngleArr[d]; var u = h < o ? this.fullAngle + h - o : h - o, x = r.fillPath({ seriesNumber: d, size: this.sliceSizes[d], value: e[d] }), m = this.getChangedPath(l, c), v = s.drawPath({ d: m, stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[d] : this.lineColorArr, strokeWidth: 0, fill: x, fillOpacity: i.config.fill.opacity, classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(d) }); if (v.attr({ index: 0, j: d }), a.setSelectionFilter(v, 0, d), i.config.chart.dropShadow.enabled) { var y = i.config.chart.dropShadow; a.dropShadow(v, y, d) } this.addListeners(v, this.donutDataLabels), b.setAttrs(v.node, { "data:angle": u, "data:startAngle": o, "data:strokeWidth": this.strokeWidth, "data:value": e[d] }); var w = { x: 0, y: 0 }; "pie" === this.chartType || "polarArea" === this.chartType ? w = f.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize / 1.25 + i.config.plotOptions.pie.dataLabels.offset, (o + u / 2) % this.fullAngle) : "donut" === this.chartType && (w = f.polarToCartesian(this.centerX, this.centerY, (i.globals.radialSize + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, (o + u / 2) % this.fullAngle)), g.add(v); var k = 0; if (!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : (0 === (k = u / this.fullAngle * i.config.chart.animations.speed) && (k = 1), this.animDur = k + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i.globals.dataChanged ? this.animatePaths(v, { size: this.sliceSizes[d], endAngle: h, startAngle: o, prevStartAngle: l, prevEndAngle: c, animateStartingPos: !0, i: d, animBeginArr: this.animBeginArr, shouldSetPrevPaths: !0, dur: i.config.chart.animations.dynamicAnimation.speed }) : this.animatePaths(v, { size: this.sliceSizes[d], endAngle: h, startAngle: o, i: d, totalItems: t.length - 1, animBeginArr: this.animBeginArr, dur: k }), i.config.plotOptions.pie.expandOnClick && "polarArea" !== this.chartType && v.click(this.pieClicked.bind(this, d)), void 0 !== i.globals.selectedDataPoints[0] && i.globals.selectedDataPoints[0].indexOf(d) > -1 && this.pieClicked(d), i.config.dataLabels.enabled) { var A = w.x, S = w.y, C = 100 * u / this.fullAngle + "%"; if (0 !== u && i.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t[d]) { var P = i.config.dataLabels.formatter; void 0 !== P && (C = P(i.globals.seriesPercent[d][0], { seriesIndex: d, w: i })); var T = i.globals.dataLabels.style.colors[d], z = s.group({ class: "apexcharts-datalabels" }), I = s.drawText({ x: A, y: S, text: C, textAnchor: "middle", fontSize: i.config.dataLabels.style.fontSize, fontFamily: i.config.dataLabels.style.fontFamily, fontWeight: i.config.dataLabels.style.fontWeight, foreColor: T }); if (z.add(I), i.config.dataLabels.dropShadow.enabled) { var M = i.config.dataLabels.dropShadow; a.dropShadow(I, M) } I.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate && !1 === i.globals.resized && (I.node.classList.add("apexcharts-pie-label-delay"), I.node.style.animationDelay = i.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(z) } } } return n } }, { key: "addListeners", value: function (t, e) { var i = new b(this.ctx); t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, t)), t.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this, t)), this.donutDataLabels.total.showAlways || (t.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t.node, e))) } }, { key: "animatePaths", value: function (t, e) { var i = this.w, a = e.endAngle < e.startAngle ? this.fullAngle + e.endAngle - e.startAngle : e.endAngle - e.startAngle, s = a, r = e.startAngle, n = e.startAngle; void 0 !== e.prevStartAngle && void 0 !== e.prevEndAngle && (r = e.prevEndAngle, s = e.prevEndAngle < e.prevStartAngle ? this.fullAngle + e.prevEndAngle - e.prevStartAngle : e.prevEndAngle - e.prevStartAngle), e.i === i.config.series.length - 1 && (a + n > this.fullAngle ? e.endAngle = e.endAngle - (a + n) : a + n < this.fullAngle && (e.endAngle = e.endAngle + (this.fullAngle - (a + n)))), a === this.fullAngle && (a = this.fullAngle - .01), this.animateArc(t, r, n, a, s, e) } }, { key: "animateArc", value: function (t, e, i, a, s, r) { var n, o = this, l = this.w, h = new x(this.ctx), c = r.size; (isNaN(e) || isNaN(s)) && (e = i, s = a, r.dur = 0); var d = a, g = i, u = e < i ? this.fullAngle + e - i : e - i; l.globals.dataChanged && r.shouldSetPrevPaths && r.prevEndAngle && (n = o.getPiePath({ me: o, startAngle: r.prevStartAngle, angle: r.prevEndAngle < r.prevStartAngle ? this.fullAngle + r.prevEndAngle - r.prevStartAngle : r.prevEndAngle - r.prevStartAngle, size: c }), t.attr({ d: n })), 0 !== r.dur ? t.animate(r.dur, l.globals.easing, r.animBeginArr[r.i]).afterAll((function () { "pie" !== o.chartType && "donut" !== o.chartType && "polarArea" !== o.chartType || this.animate(l.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": o.strokeWidth }), r.i === l.config.series.length - 1 && h.animationCompleted(t) })).during((function (l) { d = u + (a - u) * l, r.animateStartingPos && (d = s + (a - s) * l, g = e - s + (i - (e - s)) * l), n = o.getPiePath({ me: o, startAngle: g, angle: d, size: c }), t.node.setAttribute("data:pathOrig", n), t.attr({ d: n }) })) : (n = o.getPiePath({ me: o, startAngle: g, angle: a, size: c }), r.isTrack || (l.globals.animationEnded = !0), t.node.setAttribute("data:pathOrig", n), t.attr({ d: n, "stroke-width": o.strokeWidth })) } }, { key: "pieClicked", value: function (t) { var e, i = this.w, a = this, s = a.sliceSizes[t] + (i.config.plotOptions.pie.expandOnClick ? 4 : 0), r = i.globals.dom.Paper.select(".apexcharts-".concat(a.chartType.toLowerCase(), "-slice-").concat(t)).members[0]; if ("true" !== r.attr("data:pieClicked")) { var n = i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"); Array.prototype.forEach.call(n, (function (t) { t.setAttribute("data:pieClicked", "false"); var e = t.getAttribute("data:pathOrig"); t.setAttribute("d", e) })), r.attr("data:pieClicked", "true"); var o = parseInt(r.attr("data:startAngle"), 10), l = parseInt(r.attr("data:angle"), 10); e = a.getPiePath({ me: a, startAngle: o, angle: l, size: s }), 360 !== l && r.plot(e) } else { r.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(r.node, this.donutDataLabels); var h = r.attr("data:pathOrig"); r.attr({ d: h }) } } }, { key: "getChangedPath", value: function (t, e) { var i = ""; return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({ me: this, startAngle: t, angle: e - t, size: this.size })), i } }, { key: "getPiePath", value: function (t) { var e = t.me, i = t.startAngle, a = t.angle, s = t.size, r = i, n = Math.PI * (r - 90) / 180, o = a + i; Math.ceil(o) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (o = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - .01), Math.ceil(o) > this.fullAngle && (o -= this.fullAngle); var l = Math.PI * (o - 90) / 180, h = e.centerX + s * Math.cos(n), c = e.centerY + s * Math.sin(n), d = e.centerX + s * Math.cos(l), g = e.centerY + s * Math.sin(l), u = f.polarToCartesian(e.centerX, e.centerY, e.donutSize, o), p = f.polarToCartesian(e.centerX, e.centerY, e.donutSize, r), x = a > 180 ? 1 : 0, b = ["M", h, c, "A", s, s, 0, x, 1, d, g]; return "donut" === e.chartType ? [].concat(b, ["L", u.x, u.y, "A", e.donutSize, e.donutSize, 0, x, 0, p.x, p.y, "L", h, c, "z"]).join(" ") : "pie" === e.chartType || "polarArea" === e.chartType ? [].concat(b, ["L", e.centerX, e.centerY, "L", h, c]).join(" ") : [].concat(b).join(" ") } }, { key: "drawPolarElements", value: function () { var t = this.w, e = new j(this.ctx), i = new b(this.ctx), a = new kt(this.ctx), s = i.group(), r = i.group(), n = e.niceScale(0, Math.ceil(this.maxY), t.config.yaxis[0].tickAmount, 0, !0), o = n.result.reverse(), l = n.result.length; this.maxY = n.niceMax; for (var h = t.globals.radialSize, c = h / (l - 1), d = 0; d < l - 1; d++) { var g = i.drawCircle(h); if (g.attr({ cx: this.centerX, cy: this.centerY, fill: "none", "stroke-width": t.config.plotOptions.polarArea.rings.strokeWidth, stroke: t.config.plotOptions.polarArea.rings.strokeColor }), t.config.yaxis[0].show) { var u = a.drawYAxisTexts(this.centerX, this.centerY - h + parseInt(t.config.yaxis[0].labels.style.fontSize, 10) / 2, d, o[d]); r.add(u) } s.add(g), h -= c } this.ret.add(s), this.ret.add(r) } }, { key: "renderInnerDataLabels", value: function (t, e) { var i = this.w, a = new b(this.ctx), s = a.group({ class: "apexcharts-datalabels-group", transform: "translate(".concat(e.translateX ? e.translateX : 0, ", ").concat(e.translateY ? e.translateY : 0, ") scale(").concat(i.config.plotOptions.pie.customScale, ")") }), r = t.total.show; s.node.style.opacity = e.opacity; var n, o, l = e.centerX, h = e.centerY; n = void 0 === t.name.color ? i.globals.colors[0] : t.name.color; var c = t.name.fontSize, d = t.name.fontFamily, g = t.value.fontWeight; o = void 0 === t.value.color ? i.config.chart.foreColor : t.value.color; var u = t.value.formatter, f = "", p = ""; if (r ? (n = t.total.color, c = t.total.fontSize, d = t.total.fontFamily, g = t.total.fontWeight, p = t.total.label, f = t.total.formatter(i)) : 1 === i.globals.series.length && (f = u(i.globals.series[0], i), p = i.globals.seriesNames[0]), p && (p = t.name.formatter(p, t.total.show, i)), t.name.show) { var x = a.drawText({ x: l, y: h + parseFloat(t.name.offsetY), text: p, textAnchor: "middle", foreColor: n, fontSize: c, fontWeight: g, fontFamily: d }); x.node.classList.add("apexcharts-datalabel-label"), s.add(x) } if (t.value.show) { var m = t.name.show ? parseFloat(t.value.offsetY) + 16 : t.value.offsetY, v = a.drawText({ x: l, y: h + m, text: f, textAnchor: "middle", foreColor: o, fontWeight: t.value.fontWeight, fontSize: t.value.fontSize, fontFamily: t.value.fontFamily }); v.node.classList.add("apexcharts-datalabel-value"), s.add(v) } return s } }, { key: "printInnerLabels", value: function (t, e, i, a) { var s, r = this.w; a ? s = void 0 === t.name.color ? r.globals.colors[parseInt(a.parentNode.getAttribute("rel"), 10) - 1] : t.name.color : r.globals.series.length > 1 && t.total.show && (s = t.total.color); var n = r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), o = r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value"); i = (0, t.value.formatter)(i, r), a || "function" != typeof t.total.formatter || (i = t.total.formatter(r)); var l = e === t.total.label; e = t.name.formatter(e, l, r), null !== n && (n.textContent = e), null !== o && (o.textContent = i), null !== n && (n.style.fill = s) } }, { key: "printDataLabelsInner", value: function (t, e) { var i = this.w, a = t.getAttribute("data:value"), s = i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"), 10) - 1]; i.globals.series.length > 1 && this.printInnerLabels(e, s, a, t); var r = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"); null !== r && (r.style.opacity = 1) } }, { key: "revertDataLabelsInner", value: function (t, e, i) { var a = this, s = this.w, r = s.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"), n = !1, o = s.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"), l = function (t) { var i = t.makeSliceOut, s = t.printLabel; Array.prototype.forEach.call(o, (function (t) { "true" === t.getAttribute("data:pieClicked") && (i && (n = !0), s && a.printDataLabelsInner(t, e)) })) }; if (l({ makeSliceOut: !0, printLabel: !1 }), e.total.show && s.globals.series.length > 1) n && !e.total.showAlways ? l({ makeSliceOut: !1, printLabel: !0 }) : this.printInnerLabels(e, e.total.label, e.total.formatter(s)); else if (l({ makeSliceOut: !1, printLabel: !0 }), !n) if (s.globals.selectedDataPoints.length && s.globals.series.length > 1) if (s.globals.selectedDataPoints[0].length > 0) { var h = s.globals.selectedDataPoints[0], c = s.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(h)); this.printDataLabelsInner(c, e) } else r && s.globals.selectedDataPoints.length && 0 === s.globals.selectedDataPoints[0].length && (r.style.opacity = 0); else r && s.globals.series.length > 1 && (r.style.opacity = 0) } }]), t }(), St = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0; var a = this.w; this.graphics = new b(this.ctx), this.lineColorArr = void 0 !== a.globals.stroke.colors ? a.globals.stroke.colors : a.globals.colors, this.defaultSize = a.globals.svgHeight < a.globals.svgWidth ? a.globals.gridHeight + 1.5 * a.globals.goldenPadding : a.globals.gridWidth, this.isLog = a.config.yaxis[0].logarithmic, this.coreUtils = new y(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(a.globals.maxY, 0) : a.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.w.globals.minY, 0) : a.globals.minY, this.polygons = a.config.plotOptions.radar.polygons, this.strokeWidth = a.config.stroke.show ? a.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - a.config.chart.dropShadow.blur, a.config.xaxis.labels.show && (this.size = this.size - a.globals.xAxisLabelsWidth / 1.75), void 0 !== a.config.plotOptions.radar.size && (this.size = a.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [] } return a(t, [{ key: "draw", value: function (t) { var e = this, i = this.w, a = new L(this.ctx), s = [], r = new z(this.ctx); t.length && (this.dataPointsLen = t[i.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen; var o = i.globals.gridWidth / 2, l = i.globals.gridHeight / 2, h = o + i.config.plotOptions.radar.offsetX, c = l + i.config.plotOptions.radar.offsetY, d = this.graphics.group({ class: "apexcharts-radar-series apexcharts-plot-series", transform: "translate(".concat(h || 0, ", ").concat(c || 0, ")") }), g = [], u = null, x = null; if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), t.forEach((function (t, o) { var l = t.length === i.globals.dataPoints, h = e.graphics.group().attr({ class: "apexcharts-series", "data:longestSeries": l, seriesName: f.escapeString(i.globals.seriesNames[o]), rel: o + 1, "data:realIndex": o }); e.dataRadiusOfPercent[o] = [], e.dataRadius[o] = [], e.angleArr[o] = [], t.forEach((function (t, i) { var a = Math.abs(e.maxValue - e.minValue); t += Math.abs(e.minValue), e.isLog && (t = e.coreUtils.getLogVal(t, 0)), e.dataRadiusOfPercent[o][i] = t / a, e.dataRadius[o][i] = e.dataRadiusOfPercent[o][i] * e.size, e.angleArr[o][i] = i * e.disAngle })), g = e.getDataPointsPos(e.dataRadius[o], e.angleArr[o]); var c = e.createPaths(g, { x: 0, y: 0 }); u = e.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), x = e.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": o }), i.globals.delayedElements.push({ el: u.node, index: o }); var d = { i: o, realIndex: o, animationDelay: o, initialSpeed: i.config.chart.animations.speed, dataChangeSpeed: i.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-radar", shouldClipToGrid: !1, bindEventsOnPaths: !1, stroke: i.globals.stroke.colors[o], strokeLineCap: i.config.stroke.lineCap }, b = null; i.globals.previousPaths.length > 0 && (b = e.getPreviousPath(o)); for (var m = 0; m < c.linePathsTo.length; m++) { var v = e.graphics.renderPaths(n(n({}, d), {}, { pathFrom: null === b ? c.linePathsFrom[m] : b, pathTo: c.linePathsTo[m], strokeWidth: Array.isArray(e.strokeWidth) ? e.strokeWidth[o] : e.strokeWidth, fill: "none", drawShadow: !1 })); h.add(v); var y = a.fillPath({ seriesNumber: o }), w = e.graphics.renderPaths(n(n({}, d), {}, { pathFrom: null === b ? c.areaPathsFrom[m] : b, pathTo: c.areaPathsTo[m], strokeWidth: 0, fill: y, drawShadow: !1 })); if (i.config.chart.dropShadow.enabled) { var k = new p(e.ctx), A = i.config.chart.dropShadow; k.dropShadow(w, Object.assign({}, A, { noUserSpaceOnUse: !0 }), o) } h.add(w) } t.forEach((function (t, a) { var s = new P(e.ctx).getMarkerConfig("apexcharts-marker", o, a), l = e.graphics.drawMarker(g[a].x, g[a].y, s); l.attr("rel", a), l.attr("j", a), l.attr("index", o), l.node.setAttribute("default-marker-size", s.pSize); var c = e.graphics.group({ class: "apexcharts-series-markers" }); c && c.add(l), u.add(c), h.add(u); var d = i.config.dataLabels; if (d.enabled) { var f = d.formatter(i.globals.series[o][a], { seriesIndex: o, dataPointIndex: a, w: i }); r.plotDataLabelsText({ x: g[a].x, y: g[a].y, text: f, textAnchor: "middle", i: o, j: o, parent: x, offsetCorrection: !1, dataLabelsConfig: n({}, d) }) } h.add(x) })), s.push(h) })), this.drawPolygons({ parent: d }), i.config.xaxis.labels.show) { var b = this.drawXAxisTexts(); d.add(b) } return d.add(this.yaxisLabels), s.forEach((function (t) { d.add(t) })), d } }, { key: "drawPolygons", value: function (t) { for (var e = this, i = this.w, a = t.parent, s = new kt(this.ctx), r = i.globals.yAxisScale[0].result.reverse(), n = r.length, o = [], l = this.size / (n - 1), h = 0; h < n; h++)o[h] = l * h; o.reverse(); var c = [], d = []; o.forEach((function (t, i) { var a = e.getPolygonPos(t), s = ""; a.forEach((function (t, a) { if (0 === i) { var r = e.graphics.drawLine(t.x, t.y, 0, 0, Array.isArray(e.polygons.connectorColors) ? e.polygons.connectorColors[a] : e.polygons.connectorColors); d.push(r) } 0 === a && e.yaxisLabelsTextsPos.push({ x: t.x, y: t.y }), s += t.x + "," + t.y + " " })), c.push(s) })), c.forEach((function (t, s) { var r = e.polygons.strokeColors, n = e.polygons.strokeWidth, o = e.graphics.drawPolygon(t, Array.isArray(r) ? r[s] : r, Array.isArray(n) ? n[s] : n, i.globals.radarPolygons.fill.colors[s]); a.add(o) })), d.forEach((function (t) { a.add(t) })), i.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach((function (t, i) { var a = s.drawYAxisTexts(t.x, t.y, i, r[i]); e.yaxisLabels.add(a) })) } }, { key: "drawXAxisTexts", value: function () { var t = this, e = this.w, i = e.config.xaxis.labels, a = this.graphics.group({ class: "apexcharts-xaxis" }), s = this.getPolygonPos(this.size); return e.globals.labels.forEach((function (r, o) { var l = e.config.xaxis.labels.formatter, h = new z(t.ctx); if (s[o]) { var c = t.getTextPos(s[o], t.size), d = l(r, { seriesIndex: -1, dataPointIndex: o, w: e }); h.plotDataLabelsText({ x: c.newX, y: c.newY, text: d, textAnchor: c.textAnchor, i: o, j: o, parent: a, color: Array.isArray(i.style.colors) && i.style.colors[o] ? i.style.colors[o] : "#a8a8a8", dataLabelsConfig: n({ textAnchor: c.textAnchor, dropShadow: { enabled: !1 } }, i), offsetCorrection: !1 }) } })), a } }, { key: "createPaths", value: function (t, e) { var i = this, a = [], s = [], r = [], n = []; if (t.length) { s = [this.graphics.move(e.x, e.y)], n = [this.graphics.move(e.x, e.y)]; var o = this.graphics.move(t[0].x, t[0].y), l = this.graphics.move(t[0].x, t[0].y); t.forEach((function (e, a) { o += i.graphics.line(e.x, e.y), l += i.graphics.line(e.x, e.y), a === t.length - 1 && (o += "Z", l += "Z") })), a.push(o), r.push(l) } return { linePathsFrom: s, linePathsTo: a, areaPathsFrom: n, areaPathsTo: r } } }, { key: "getTextPos", value: function (t, e) { var i = "middle", a = t.x, s = t.y; return Math.abs(t.x) >= 10 ? t.x > 0 ? (i = "start", a += 10) : t.x < 0 && (i = "end", a -= 10) : i = "middle", Math.abs(t.y) >= e - 10 && (t.y < 0 ? s -= 10 : t.y > 0 && (s += 10)), { textAnchor: i, newX: a, newY: s } } }, { key: "getPreviousPath", value: function (t) { for (var e = this.w, i = null, a = 0; a < e.globals.previousPaths.length; a++) { var s = e.globals.previousPaths[a]; s.paths.length > 0 && parseInt(s.realIndex, 10) === parseInt(t, 10) && void 0 !== e.globals.previousPaths[a].paths[0] && (i = e.globals.previousPaths[a].paths[0].d) } return i } }, { key: "getDataPointsPos", value: function (t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.dataPointsLen; t = t || [], e = e || []; for (var a = [], s = 0; s < i; s++) { var r = {}; r.x = t[s] * Math.sin(e[s]), r.y = -t[s] * Math.cos(e[s]), a.push(r) } return a } }, { key: "getPolygonPos", value: function (t) { for (var e = [], i = 2 * Math.PI / this.dataPointsLen, a = 0; a < this.dataPointsLen; a++) { var s = {}; s.x = t * Math.sin(a * i), s.y = -t * Math.cos(a * i), e.push(s) } return e } }]), t }(), Ct = function (t) { o(s, t); var i = d(s); function s(t) { var a; e(this, s), (a = i.call(this, t)).ctx = t, a.w = t.w, a.animBeginArr = [0], a.animDur = 0; var r = a.w; return a.startAngle = r.config.plotOptions.radialBar.startAngle, a.endAngle = r.config.plotOptions.radialBar.endAngle, a.totalAngle = Math.abs(r.config.plotOptions.radialBar.endAngle - r.config.plotOptions.radialBar.startAngle), a.trackStartAngle = r.config.plotOptions.radialBar.track.startAngle, a.trackEndAngle = r.config.plotOptions.radialBar.track.endAngle, a.radialDataLabels = r.config.plotOptions.radialBar.dataLabels, a.trackStartAngle || (a.trackStartAngle = a.startAngle), a.trackEndAngle || (a.trackEndAngle = a.endAngle), 360 === a.endAngle && (a.endAngle = 359.99), a.margin = parseInt(r.config.plotOptions.radialBar.track.margin, 10), a } return a(s, [{ key: "draw", value: function (t) { var e = this.w, i = new b(this.ctx), a = i.group({ class: "apexcharts-radialbar" }); if (e.globals.noData) return a; var s = i.group(), r = this.defaultSize / 2, n = e.globals.gridWidth / 2, o = this.defaultSize / 2.05; e.config.chart.sparkline.enabled || (o = o - e.config.stroke.width - e.config.chart.dropShadow.blur); var l = e.globals.fill.colors; if (e.config.plotOptions.radialBar.track.show) { var h = this.drawTracks({ size: o, centerX: n, centerY: r, colorArr: l, series: t }); s.add(h) } var c = this.drawArcs({ size: o, centerX: n, centerY: r, colorArr: l, series: t }), d = 360; e.config.plotOptions.radialBar.startAngle < 0 && (d = this.totalAngle); var g = (360 - d) / 360; if (e.globals.radialSize = o - o * g, this.radialDataLabels.value.show) { var u = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY); e.globals.radialSize += u * g } return s.add(c.g), "front" === e.config.plotOptions.radialBar.hollow.position && (c.g.add(c.elHollow), c.dataLabels && c.g.add(c.dataLabels)), a.add(s), a } }, { key: "drawTracks", value: function (t) { var e = this.w, i = new b(this.ctx), a = i.group({ class: "apexcharts-tracks" }), s = new p(this.ctx), r = new L(this.ctx), n = this.getStrokeWidth(t); t.size = t.size - n / 2; for (var o = 0; o < t.series.length; o++) { var l = i.group({ class: "apexcharts-radialbar-track apexcharts-track" }); a.add(l), l.attr({ rel: o + 1 }), t.size = t.size - n - this.margin; var h = e.config.plotOptions.radialBar.track, c = r.fillPath({ seriesNumber: 0, size: t.size, fillColors: Array.isArray(h.background) ? h.background[o] : h.background, solid: !0 }), d = this.trackStartAngle, g = this.trackEndAngle; Math.abs(g) + Math.abs(d) >= 360 && (g = 360 - Math.abs(this.startAngle) - .1); var u = i.drawPath({ d: "", stroke: c, strokeWidth: n * parseInt(h.strokeWidth, 10) / 100, fill: "none", strokeOpacity: h.opacity, classes: "apexcharts-radialbar-area" }); if (h.dropShadow.enabled) { var f = h.dropShadow; s.dropShadow(u, f) } l.add(u), u.attr("id", "apexcharts-radialbarTrack-" + o), this.animatePaths(u, { centerX: t.centerX, centerY: t.centerY, endAngle: g, startAngle: d, size: t.size, i: o, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: !0, easing: e.globals.easing }) } return a } }, { key: "drawArcs", value: function (t) { var e = this.w, i = new b(this.ctx), a = new L(this.ctx), s = new p(this.ctx), r = i.group(), n = this.getStrokeWidth(t); t.size = t.size - n / 2; var o = e.config.plotOptions.radialBar.hollow.background, l = t.size - n * t.series.length - this.margin * t.series.length - n * parseInt(e.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, h = l - e.config.plotOptions.radialBar.hollow.margin; void 0 !== e.config.plotOptions.radialBar.hollow.image && (o = this.drawHollowImage(t, r, l, o)); var c = this.drawHollow({ size: h, centerX: t.centerX, centerY: t.centerY, fill: o || "transparent" }); if (e.config.plotOptions.radialBar.hollow.dropShadow.enabled) { var d = e.config.plotOptions.radialBar.hollow.dropShadow; s.dropShadow(c, d) } var g = 1; !this.radialDataLabels.total.show && e.globals.series.length > 1 && (g = 0); var u = null; this.radialDataLabels.show && (u = this.renderInnerDataLabels(this.radialDataLabels, { hollowSize: l, centerX: t.centerX, centerY: t.centerY, opacity: g })), "back" === e.config.plotOptions.radialBar.hollow.position && (r.add(c), u && r.add(u)); var x = !1; e.config.plotOptions.radialBar.inverseOrder && (x = !0); for (var m = x ? t.series.length - 1 : 0; x ? m >= 0 : m < t.series.length; x ? m-- : m++) { var v = i.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: f.escapeString(e.globals.seriesNames[m]) }); r.add(v), v.attr({ rel: m + 1, "data:realIndex": m }), this.ctx.series.addCollapsedClassToSeries(v, m), t.size = t.size - n - this.margin; var y = a.fillPath({ seriesNumber: m, size: t.size, value: t.series[m] }), w = this.startAngle, k = void 0, A = f.negToZero(t.series[m] > 100 ? 100 : t.series[m]) / 100, S = Math.round(this.totalAngle * A) + this.startAngle, C = void 0; e.globals.dataChanged && (k = this.startAngle, C = Math.round(this.totalAngle * f.negToZero(e.globals.previousPaths[m]) / 100) + k), Math.abs(S) + Math.abs(w) >= 360 && (S -= .01), Math.abs(C) + Math.abs(k) >= 360 && (C -= .01); var P = S - w, T = Array.isArray(e.config.stroke.dashArray) ? e.config.stroke.dashArray[m] : e.config.stroke.dashArray, z = i.drawPath({ d: "", stroke: y, strokeWidth: n, fill: "none", fillOpacity: e.config.fill.opacity, classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + m, strokeDashArray: T }); if (b.setAttrs(z.node, { "data:angle": P, "data:value": t.series[m] }), e.config.chart.dropShadow.enabled) { var I = e.config.chart.dropShadow; s.dropShadow(z, I, m) } s.setSelectionFilter(z, 0, m), this.addListeners(z, this.radialDataLabels), v.add(z), z.attr({ index: 0, j: m }); var M = 0; !this.initialAnim || e.globals.resized || e.globals.dataChanged || (M = (S - w) / 360 * e.config.chart.animations.speed, this.animDur = M / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur)), e.globals.dataChanged && (M = (S - w) / 360 * e.config.chart.animations.dynamicAnimation.speed, this.animDur = M / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur)), this.animatePaths(z, { centerX: t.centerX, centerY: t.centerY, endAngle: S, startAngle: w, prevEndAngle: C, prevStartAngle: k, size: t.size, i: m, totalItems: 2, animBeginArr: this.animBeginArr, dur: M, shouldSetPrevPaths: !0, easing: e.globals.easing }) } return { g: r, elHollow: c, dataLabels: u } } }, { key: "drawHollow", value: function (t) { var e = new b(this.ctx).drawCircle(2 * t.size); return e.attr({ class: "apexcharts-radialbar-hollow", cx: t.centerX, cy: t.centerY, r: t.size, fill: t.fill }), e } }, { key: "drawHollowImage", value: function (t, e, i, a) { var s = this.w, r = new L(this.ctx), n = f.randomId(), o = s.config.plotOptions.radialBar.hollow.image; if (s.config.plotOptions.radialBar.hollow.imageClipped) r.clippedImgArea({ width: i, height: i, image: o, patternID: "pattern".concat(s.globals.cuid).concat(n) }), a = "url(#pattern".concat(s.globals.cuid).concat(n, ")"); else { var l = s.config.plotOptions.radialBar.hollow.imageWidth, h = s.config.plotOptions.radialBar.hollow.imageHeight; if (void 0 === l && void 0 === h) { var c = s.globals.dom.Paper.image(o).loaded((function (e) { this.move(t.centerX - e.width / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetX, t.centerY - e.height / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetY) })); e.add(c) } else { var d = s.globals.dom.Paper.image(o).loaded((function (e) { this.move(t.centerX - l / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetX, t.centerY - h / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l, h) })); e.add(d) } } return a } }, { key: "getStrokeWidth", value: function (t) { var e = this.w; return t.size * (100 - parseInt(e.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t.series.length + 1) - this.margin } }]), s }(At), Lt = function () { function t(i) { e(this, t), this.w = i.w, this.lineCtx = i } return a(t, [{ key: "sameValueSeriesFix", value: function (t, e) { var i = this.w; if ("line" === i.config.chart.type && ("gradient" === i.config.fill.type || "gradient" === i.config.fill.type[t]) && new y(this.lineCtx.ctx, i).seriesHaveSameValues(t)) { var a = e[t].slice(); a[a.length - 1] = a[a.length - 1] + 1e-6, e[t] = a } return e } }, { key: "calculatePoints", value: function (t) { var e = t.series, i = t.realIndex, a = t.x, s = t.y, r = t.i, n = t.j, o = t.prevY, l = this.w, h = [], c = []; if (0 === n) { var d = this.lineCtx.categoryAxisCorrection + l.config.markers.offsetX; l.globals.isXNumeric && (d = (l.globals.seriesX[i][0] - l.globals.minX) / this.lineCtx.xRatio + l.config.markers.offsetX), h.push(d), c.push(f.isNumber(e[r][0]) ? o + l.config.markers.offsetY : null), h.push(a + l.config.markers.offsetX), c.push(f.isNumber(e[r][n + 1]) ? s + l.config.markers.offsetY : null) } else h.push(a + l.config.markers.offsetX), c.push(f.isNumber(e[r][n + 1]) ? s + l.config.markers.offsetY : null); return { x: h, y: c } } }, { key: "checkPreviousPaths", value: function (t) { for (var e = t.pathFromLine, i = t.pathFromArea, a = t.realIndex, s = this.w, r = 0; r < s.globals.previousPaths.length; r++) { var n = s.globals.previousPaths[r]; ("line" === n.type || "area" === n.type) && n.paths.length > 0 && parseInt(n.realIndex, 10) === parseInt(a, 10) && ("line" === n.type ? (this.lineCtx.appendPathFrom = !1, e = s.globals.previousPaths[r].paths[0].d) : "area" === n.type && (this.lineCtx.appendPathFrom = !1, i = s.globals.previousPaths[r].paths[0].d, s.config.stroke.show && s.globals.previousPaths[r].paths[1] && (e = s.globals.previousPaths[r].paths[1].d))) } return { pathFromLine: e, pathFromArea: i } } }, { key: "determineFirstPrevY", value: function (t) { var e = t.i, i = t.series, a = t.prevY, s = t.lineYPosition, r = this.w; if (void 0 !== i[e][0]) a = (s = r.config.chart.stacked && e > 0 ? this.lineCtx.prevSeriesY[e - 1][0] : this.lineCtx.zeroY) - i[e][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] + 2 * (this.lineCtx.isReversed ? i[e][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] : 0); else if (r.config.chart.stacked && e > 0 && void 0 === i[e][0]) for (var n = e - 1; n >= 0; n--)if (null !== i[n][0] && void 0 !== i[n][0]) { a = s = this.lineCtx.prevSeriesY[n][0]; break } return { prevY: a, lineYPosition: s } } }]), t }(), Pt = function () { function t(i, a, s) { e(this, t), this.ctx = i, this.w = i.w, this.xyRatios = a, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || s, this.scatter = new T(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new Lt(this), this.markers = new P(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0 } return a(t, [{ key: "draw", value: function (t, e, i) { var a = this.w, s = new b(this.ctx), r = a.globals.comboCharts ? e : a.config.chart.type, n = s.group({ class: "apexcharts-".concat(r, "-series apexcharts-plot-series") }), o = new y(this.ctx, a); this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t = o.getLogSeries(t), this.yRatio = o.getLogYRatios(this.yRatio); for (var l = [], h = 0; h < t.length; h++) { t = this.lineHelpers.sameValueSeriesFix(h, t); var c = a.globals.comboCharts ? i[h] : h; this._initSerieVariables(t, h, c); var d = [], g = [], u = a.globals.padHorizontal + this.categoryAxisCorrection; this.ctx.series.addCollapsedClassToSeries(this.elSeries, c), a.globals.isXNumeric && a.globals.seriesX.length > 0 && (u = (a.globals.seriesX[c][0] - a.globals.minX) / this.xRatio), g.push(u); var f, p = u, x = p, m = this.zeroY; m = this.lineHelpers.determineFirstPrevY({ i: h, series: t, prevY: m, lineYPosition: 0 }).prevY, d.push(m), f = m; var v = this._calculatePathsFrom({ series: t, i: h, realIndex: c, prevX: x, prevY: m }), w = this._iterateOverDataPoints({ series: t, realIndex: c, i: h, x: u, y: 1, pX: p, pY: f, pathsFrom: v, linePaths: [], areaPaths: [], seriesIndex: i, lineYPosition: 0, xArrj: g, yArrj: d }); this._handlePaths({ type: r, realIndex: c, i: h, paths: w }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), l.push(this.elSeries) } if (a.config.chart.stacked) for (var k = l.length; k > 0; k--)n.add(l[k - 1]); else for (var A = 0; A < l.length; A++)n.add(l[A]); return n } }, { key: "_initSerieVariables", value: function (t, e, i) { var a = this.w, s = new b(this.ctx); this.xDivision = a.globals.gridWidth / (a.globals.dataPoints - ("on" === a.config.xaxis.tickPlacement ? 1 : 0)), this.strokeWidth = Array.isArray(a.config.stroke.width) ? a.config.stroke.width[i] : a.config.stroke.width, this.yRatio.length > 1 && (this.yaxisIndex = i), this.isReversed = a.config.yaxis[this.yaxisIndex] && a.config.yaxis[this.yaxisIndex].reversed, this.zeroY = a.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? a.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), this.areaBottomY = this.zeroY, (this.zeroY > a.globals.gridHeight || "end" === a.config.plotOptions.area.fillTo) && (this.areaBottomY = a.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = s.group({ class: "apexcharts-series", seriesName: f.escapeString(a.globals.seriesNames[i]) }), this.elPointsMain = s.group({ class: "apexcharts-series-markers-wrap", "data:realIndex": i }), this.elDataLabelsWrap = s.group({ class: "apexcharts-datalabels", "data:realIndex": i }); var r = t[e].length === a.globals.dataPoints; this.elSeries.attr({ "data:longestSeries": r, rel: e + 1, "data:realIndex": i }), this.appendPathFrom = !0 } }, { key: "_calculatePathsFrom", value: function (t) { var e, i, a, s, r = t.series, n = t.i, o = t.realIndex, l = t.prevX, h = t.prevY, c = this.w, d = new b(this.ctx); if (null === r[n][0]) { for (var g = 0; g < r[n].length; g++)if (null !== r[n][g]) { l = this.xDivision * g, h = this.zeroY - r[n][g] / this.yRatio[this.yaxisIndex], e = d.move(l, h), i = d.move(l, this.areaBottomY); break } } else e = d.move(l, h), i = d.move(l, this.areaBottomY) + d.line(l, h); if (a = d.move(-1, this.zeroY) + d.line(-1, this.zeroY), s = d.move(-1, this.zeroY) + d.line(-1, this.zeroY), c.globals.previousPaths.length > 0) { var u = this.lineHelpers.checkPreviousPaths({ pathFromLine: a, pathFromArea: s, realIndex: o }); a = u.pathFromLine, s = u.pathFromArea } return { prevX: l, prevY: h, linePath: e, areaPath: i, pathFromLine: a, pathFromArea: s } } }, { key: "_handlePaths", value: function (t) { var e = t.type, i = t.realIndex, a = t.i, s = t.paths, r = this.w, o = new b(this.ctx), l = new L(this.ctx); this.prevSeriesY.push(s.yArrj), r.globals.seriesXvalues[i] = s.xArrj, r.globals.seriesYvalues[i] = s.yArrj, this.pointsChart || r.globals.delayedElements.push({ el: this.elPointsMain.node, index: i }); var h = { i: a, realIndex: i, animationDelay: a, initialSpeed: r.config.chart.animations.speed, dataChangeSpeed: r.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(e) }; if ("area" === e) for (var c = l.fillPath({ seriesNumber: i }), d = 0; d < s.areaPaths.length; d++) { var g = o.renderPaths(n(n({}, h), {}, { pathFrom: s.pathFromArea, pathTo: s.areaPaths[d], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: c })); this.elSeries.add(g) } if (r.config.stroke.show && !this.pointsChart) { var u = null; u = "line" === e ? l.fillPath({ seriesNumber: i, i: a }) : r.globals.stroke.colors[i]; for (var f = 0; f < s.linePaths.length; f++) { var p = o.renderPaths(n(n({}, h), {}, { pathFrom: s.pathFromLine, pathTo: s.linePaths[f], stroke: u, strokeWidth: this.strokeWidth, strokeLineCap: r.config.stroke.lineCap, fill: "none" })); this.elSeries.add(p) } } } }, { key: "_iterateOverDataPoints", value: function (t) { for (var e = t.series, i = t.realIndex, a = t.i, s = t.x, r = t.y, n = t.pX, o = t.pY, l = t.pathsFrom, h = t.linePaths, c = t.areaPaths, d = t.seriesIndex, g = t.lineYPosition, u = t.xArrj, p = t.yArrj, x = this.w, m = new b(this.ctx), v = this.yRatio, y = l.prevY, w = l.linePath, k = l.areaPath, A = l.pathFromLine, S = l.pathFromArea, C = f.isNumber(x.globals.minYArr[i]) ? x.globals.minYArr[i] : x.globals.minY, L = x.globals.dataPoints > 1 ? x.globals.dataPoints - 1 : x.globals.dataPoints, P = 0; P < L; P++) { var T = void 0 === e[a][P + 1] || null === e[a][P + 1]; if (x.globals.isXNumeric) { var z = x.globals.seriesX[i][P + 1]; void 0 === x.globals.seriesX[i][P + 1] && (z = x.globals.seriesX[i][L - 1]), s = (z - x.globals.minX) / this.xRatio } else s += this.xDivision; if (x.config.chart.stacked) if (a > 0 && x.globals.collapsedSeries.length < x.config.series.length - 1) { g = this.prevSeriesY[function (t) { for (var e = t, i = 0; i < x.globals.series.length; i++)if (x.globals.collapsedSeriesIndices.indexOf(t) > -1) { e--; break } return e >= 0 ? e : 0 }(a - 1)][P + 1] } else g = this.zeroY; else g = this.zeroY; r = T ? g - C / v[this.yaxisIndex] + 2 * (this.isReversed ? C / v[this.yaxisIndex] : 0) : g - e[a][P + 1] / v[this.yaxisIndex] + 2 * (this.isReversed ? e[a][P + 1] / v[this.yaxisIndex] : 0), u.push(s), p.push(r); var I = this.lineHelpers.calculatePoints({ series: e, x: s, y: r, realIndex: i, i: a, j: P, prevY: y }), M = this._createPaths({ series: e, i: a, realIndex: i, j: P, x: s, y: r, pX: n, pY: o, linePath: w, areaPath: k, linePaths: h, areaPaths: c, seriesIndex: d }); c = M.areaPaths, h = M.linePaths, n = M.pX, o = M.pY, k = M.areaPath, w = M.linePath, this.appendPathFrom && (A += m.line(s, this.zeroY), S += m.line(s, this.zeroY)), this.handleNullDataPoints(e, I, a, P, i), this._handleMarkersAndLabels({ pointsPos: I, series: e, x: s, y: r, prevY: y, i: a, j: P, realIndex: i }) } return { yArrj: p, xArrj: u, pathFromArea: S, areaPaths: c, pathFromLine: A, linePaths: h } } }, { key: "_handleMarkersAndLabels", value: function (t) { var e = t.pointsPos, i = (t.series, t.x, t.y, t.prevY, t.i), a = t.j, s = t.realIndex, r = this.w, n = new z(this.ctx); if (this.pointsChart) this.scatter.draw(this.elSeries, a, { realIndex: s, pointsPos: e, zRatio: this.zRatio, elParent: this.elPointsMain }); else { r.globals.series[i].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden"); var o = this.markers.plotChartMarkers(e, s, a + 1); null !== o && this.elPointsMain.add(o) } var l = n.drawDataLabel(e, s, a + 1, null); null !== l && this.elDataLabelsWrap.add(l) } }, { key: "_createPaths", value: function (t) { var e = t.series, i = t.i, a = t.realIndex, s = t.j, r = t.x, n = t.y, o = t.pX, l = t.pY, h = t.linePath, c = t.areaPath, d = t.linePaths, g = t.areaPaths, u = t.seriesIndex, f = this.w, p = new b(this.ctx), x = f.config.stroke.curve, m = this.areaBottomY; if (Array.isArray(f.config.stroke.curve) && (x = Array.isArray(u) ? f.config.stroke.curve[u[i]] : f.config.stroke.curve[i]), "smooth" === x) { var v = .35 * (r - o); f.globals.hasNullValues ? (null !== e[i][s] && (null !== e[i][s + 1] ? (h = p.move(o, l) + p.curve(o + v, l, r - v, n, r + 1, n), c = p.move(o + 1, l) + p.curve(o + v, l, r - v, n, r + 1, n) + p.line(r, m) + p.line(o, m) + "z") : (h = p.move(o, l), c = p.move(o, l) + "z")), d.push(h), g.push(c)) : (h += p.curve(o + v, l, r - v, n, r, n), c += p.curve(o + v, l, r - v, n, r, n)), o = r, l = n, s === e[i].length - 2 && (c = c + p.curve(o, l, r, n, r, m) + p.move(r, n) + "z", f.globals.hasNullValues || (d.push(h), g.push(c))) } else { if (null === e[i][s + 1]) { h += p.move(r, n); var y = f.globals.isXNumeric ? (f.globals.seriesX[a][s] - f.globals.minX) / this.xRatio : r - this.xDivision; c = c + p.line(y, m) + p.move(r, n) + "z" } null === e[i][s] && (h += p.move(r, n), c += p.move(r, m)), "stepline" === x ? (h = h + p.line(r, null, "H") + p.line(null, n, "V"), c = c + p.line(r, null, "H") + p.line(null, n, "V")) : "straight" === x && (h += p.line(r, n), c += p.line(r, n)), s === e[i].length - 2 && (c = c + p.line(r, m) + p.move(r, n) + "z", d.push(h), g.push(c)) } return { linePaths: d, areaPaths: g, pX: o, pY: l, linePath: h, areaPath: c } } }, { key: "handleNullDataPoints", value: function (t, e, i, a, s) { var r = this.w; if (null === t[i][a] && r.config.markers.showNullDataPoints || 1 === t[i].length) { var n = this.markers.plotChartMarkers(e, s, a + 1, this.strokeWidth - r.config.markers.strokeWidth / 2, !0); null !== n && this.elPointsMain.add(n) } } }]), t }(); window.TreemapSquared = {}, window.TreemapSquared.generate = function () { function t(e, i, a, s) { this.xoffset = e, this.yoffset = i, this.height = s, this.width = a, this.shortestEdge = function () { return Math.min(this.height, this.width) }, this.getCoordinates = function (t) { var e, i = [], a = this.xoffset, s = this.yoffset, n = r(t) / this.height, o = r(t) / this.width; if (this.width >= this.height) for (e = 0; e < t.length; e++)i.push([a, s, a + n, s + t[e] / n]), s += t[e] / n; else for (e = 0; e < t.length; e++)i.push([a, s, a + t[e] / o, s + o]), a += t[e] / o; return i }, this.cutArea = function (e) { var i; if (this.width >= this.height) { var a = e / this.height, s = this.width - a; i = new t(this.xoffset + a, this.yoffset, s, this.height) } else { var r = e / this.width, n = this.height - r; i = new t(this.xoffset, this.yoffset + r, this.width, n) } return i } } function e(e, a, s, n, o) { return n = void 0 === n ? 0 : n, o = void 0 === o ? 0 : o, function (t) { var e, i, a = []; for (e = 0; e < t.length; e++)for (i = 0; i < t[e].length; i++)a.push(t[e][i]); return a }(i(function (t, e) { var i, a = [], s = e / r(t); for (i = 0; i < t.length; i++)a[i] = t[i] * s; return a }(e, a * s), [], new t(n, o, a, s), [])) } function i(t, e, s, n) { var o, l, h; if (0 !== t.length) return o = s.shortestEdge(), function (t, e, i) { var s; if (0 === t.length) return !0; (s = t.slice()).push(e); var r = a(t, i), n = a(s, i); return r >= n }(e, l = t[0], o) ? (e.push(l), i(t.slice(1), e, s, n)) : (h = s.cutArea(r(e), n), n.push(s.getCoordinates(e)), i(t, [], h, n)), n; n.push(s.getCoordinates(e)) } function a(t, e) { var i = Math.min.apply(Math, t), a = Math.max.apply(Math, t), s = r(t); return Math.max(Math.pow(e, 2) * a / Math.pow(s, 2), Math.pow(s, 2) / (Math.pow(e, 2) * i)) } function s(t) { return t && t.constructor === Array } function r(t) { var e, i = 0; for (e = 0; e < t.length; e++)i += t[e]; return i } function n(t) { var e, i = 0; if (s(t[0])) for (e = 0; e < t.length; e++)i += n(t[e]); else i = r(t); return i } return function t(i, a, r, o, l) { o = void 0 === o ? 0 : o, l = void 0 === l ? 0 : l; var h, c, d = [], g = []; if (s(i[0])) { for (c = 0; c < i.length; c++)d[c] = n(i[c]); for (h = e(d, a, r, o, l), c = 0; c < i.length; c++)g.push(t(i[c], h[c][2] - h[c][0], h[c][3] - h[c][1], h[c][0], h[c][1])) } else g = e(i, a, r, o, l); return g } }(); var Tt, zt, It = function () { function t(i, a) { e(this, t), this.ctx = i, this.w = i.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new yt(i), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [] } return a(t, [{ key: "draw", value: function (t) { var e = this, i = this.w, a = new b(this.ctx), s = new L(this.ctx), r = a.group({ class: "apexcharts-treemap" }); if (i.globals.noData) return r; var n = []; return t.forEach((function (t) { var e = t.map((function (t) { return Math.abs(t) })); n.push(e) })), this.negRange = this.helpers.checkColorRange(), i.config.series.forEach((function (t, i) { t.data.forEach((function (t) { Array.isArray(e.labels[i]) || (e.labels[i] = []), e.labels[i].push(t.x) })) })), window.TreemapSquared.generate(n, i.globals.gridWidth, i.globals.gridHeight).forEach((function (n, o) { var l = a.group({ class: "apexcharts-series apexcharts-treemap-series", seriesName: f.escapeString(i.globals.seriesNames[o]), rel: o + 1, "data:realIndex": o }); if (i.config.chart.dropShadow.enabled) { var h = i.config.chart.dropShadow; new p(e.ctx).dropShadow(r, h, o) } var c = a.group({ class: "apexcharts-data-labels" }); n.forEach((function (r, n) { var h = r[0], c = r[1], d = r[2], g = r[3], u = a.drawRect(h, c, d - h, g - c, 0, "#fff", 1, e.strokeWidth, i.config.plotOptions.treemap.useFillColorAsStroke ? p : i.globals.stroke.colors[o]); u.attr({ cx: h, cy: c, index: o, i: o, j: n, width: d - h, height: g - c }); var f = e.helpers.getShadeColor(i.config.chart.type, o, n, e.negRange), p = f.color; void 0 !== i.config.series[o].data[n] && i.config.series[o].data[n].fillColor && (p = i.config.series[o].data[n].fillColor); var x = s.fillPath({ color: p, seriesNumber: o, dataPointIndex: n }); u.node.classList.add("apexcharts-treemap-rect"), u.attr({ fill: x }), e.helpers.addListeners(u); var b = { x: h + (d - h) / 2, y: c + (g - c) / 2, width: 0, height: 0 }, m = { x: h, y: c, width: d - h, height: g - c }; if (i.config.chart.animations.enabled && !i.globals.dataChanged) { var v = 1; i.globals.resized || (v = i.config.chart.animations.speed), e.animateTreemap(u, b, m, v) } if (i.globals.dataChanged) { var y = 1; e.dynamicAnim.enabled && i.globals.shouldAnimate && (y = e.dynamicAnim.speed, i.globals.previousPaths[o][n] && i.globals.previousPaths[o][n].rect && (b = i.globals.previousPaths[o][n].rect), e.animateTreemap(u, b, m, y)) } var w = e.getFontSize(r), k = i.config.dataLabels.formatter(e.labels[o][n], { value: i.globals.series[o][n], seriesIndex: o, dataPointIndex: n, w: i }), A = e.helpers.calculateDataLabels({ text: k, x: (h + d) / 2, y: (c + g) / 2 + e.strokeWidth / 2 + w / 3, i: o, j: n, colorProps: f, fontSize: w, series: t }); i.config.dataLabels.enabled && A && e.rotateToFitLabel(A, k, h, c, d, g), l.add(u), null !== A && l.add(A) })), l.add(c), r.add(l) })), r } }, { key: "getFontSize", value: function (t) { var e = this.w; var i, a, s, r, n = function t(e) { var i, a = 0; if (Array.isArray(e[0])) for (i = 0; i < e.length; i++)a += t(e[i]); else for (i = 0; i < e.length; i++)a += e[i].length; return a }(this.labels) / function t(e) { var i, a = 0; if (Array.isArray(e[0])) for (i = 0; i < e.length; i++)a += t(e[i]); else for (i = 0; i < e.length; i++)a += 1; return a }(this.labels); return i = t[2] - t[0], a = t[3] - t[1], s = i * a, r = Math.pow(s, .5), Math.min(r / n, parseInt(e.config.dataLabels.style.fontSize, 10)) } }, { key: "rotateToFitLabel", value: function (t, e, i, a, s, r) { var n = new b(this.ctx), o = n.getTextRects(e); if (o.width + 5 > s - i && o.width <= r - a) { var l = n.rotateAroundCenter(t.node); t.node.setAttribute("transform", "rotate(-90 ".concat(l.x, " ").concat(l.y, ")")) } } }, { key: "animateTreemap", value: function (t, e, i, a) { var s = new x(this.ctx); s.animateRect(t, { x: e.x, y: e.y, width: e.width, height: e.height }, { x: i.x, y: i.y, width: i.width, height: i.height }, a, (function () { s.animationCompleted(t) })) } }]), t }(), Mt = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC } return a(t, [{ key: "calculateTimeScaleTicks", value: function (t, e) { var i = this, a = this.w; if (a.globals.allSeriesCollapsed) return a.globals.labels = [], a.globals.timescaleLabels = [], []; var s = new Y(this.ctx), r = (e - t) / 864e5; this.determineInterval(r), a.globals.disableZoomIn = !1, a.globals.disableZoomOut = !1, r < .005 ? a.globals.disableZoomIn = !0 : r > 5e4 && (a.globals.disableZoomOut = !0); var o = s.getTimeUnitsfromTimestamp(t, e, this.utc), l = a.globals.gridWidth / r, h = l / 24, c = h / 60, d = c / 60, g = Math.floor(24 * r), u = Math.floor(24 * r * 60), f = Math.floor(24 * r * 60 * 60), p = Math.floor(r), x = Math.floor(r / 30), b = Math.floor(r / 365), m = { minSecond: o.minSecond, minMinute: o.minMinute, minHour: o.minHour, minDate: o.minDate, minMonth: o.minMonth, minYear: o.minYear }, v = { firstVal: m, currentSecond: m.minSecond, currentMinute: m.minMinute, currentHour: m.minHour, currentMonthDate: m.minDate, currentDate: m.minDate, currentMonth: m.minMonth, currentYear: m.minYear, daysWidthOnXAxis: l, hoursWidthOnXAxis: h, minutesWidthOnXAxis: c, secondsWidthOnXAxis: d, numberOfSeconds: f, numberOfMinutes: u, numberOfHours: g, numberOfDays: p, numberOfMonths: x, numberOfYears: b }; switch (this.tickInterval) { case "years": this.generateYearScale(v); break; case "months": case "half_year": this.generateMonthScale(v); break; case "months_days": case "months_fortnight": case "days": case "week_days": this.generateDayScale(v); break; case "hours": this.generateHourScale(v); break; case "minutes": this.generateMinuteScale(v) }var y = this.timeScaleArray.map((function (t) { var e = { position: t.position, unit: t.unit, year: t.year, day: t.day ? t.day : 1, hour: t.hour ? t.hour : 0, month: t.month + 1 }; return "month" === t.unit ? n(n({}, e), {}, { day: 1, value: t.value + 1 }) : "day" === t.unit || "hour" === t.unit ? n(n({}, e), {}, { value: t.value }) : "minute" === t.unit ? n(n({}, e), {}, { value: t.value, minute: t.value }) : t })); return y.filter((function (t) { var e = 1, s = Math.ceil(a.globals.gridWidth / 120), r = t.value; void 0 !== a.config.xaxis.tickAmount && (s = a.config.xaxis.tickAmount), y.length > s && (e = Math.floor(y.length / s)); var n = !1, o = !1; switch (i.tickInterval) { case "years": "year" === t.unit && (n = !0); break; case "half_year": e = 7, "year" === t.unit && (n = !0); break; case "months": e = 1, "year" === t.unit && (n = !0); break; case "months_fortnight": e = 15, "year" !== t.unit && "month" !== t.unit || (n = !0), 30 === r && (o = !0); break; case "months_days": e = 10, "month" === t.unit && (n = !0), 30 === r && (o = !0); break; case "week_days": e = 8, "month" === t.unit && (n = !0); break; case "days": e = 1, "month" === t.unit && (n = !0); break; case "hours": "day" === t.unit && (n = !0); break; case "minutes": r % 5 != 0 && (o = !0) }if ("minutes" === i.tickInterval || "hours" === i.tickInterval) { if (!o) return !0 } else if ((r % e == 0 || n) && !o) return !0 })) } }, { key: "recalcDimensionsBasedOnFormat", value: function (t, e) { var i = this.w, a = this.formatDates(t), s = this.removeOverlappingTS(a); i.globals.timescaleLabels = s.slice(), new nt(this.ctx).plotCoords() } }, { key: "determineInterval", value: function (t) { switch (!0) { case t > 1825: this.tickInterval = "years"; break; case t > 800 && t <= 1825: this.tickInterval = "half_year"; break; case t > 180 && t <= 800: this.tickInterval = "months"; break; case t > 90 && t <= 180: this.tickInterval = "months_fortnight"; break; case t > 60 && t <= 90: this.tickInterval = "months_days"; break; case t > 30 && t <= 60: this.tickInterval = "week_days"; break; case t > 2 && t <= 30: this.tickInterval = "days"; break; case t > .1 && t <= 2: this.tickInterval = "hours"; break; case t < .1: this.tickInterval = "minutes"; break; default: this.tickInterval = "days" } } }, { key: "generateYearScale", value: function (t) { var e = t.firstVal, i = t.currentMonth, a = t.currentYear, s = t.daysWidthOnXAxis, r = t.numberOfYears, n = e.minYear, o = 0, l = new Y(this.ctx), h = "year"; if (e.minDate > 1 || e.minMonth > 0) { var c = l.determineRemainingDaysOfYear(e.minYear, e.minMonth, e.minDate); o = (l.determineDaysOfYear(e.minYear) - c + 1) * s, n = e.minYear + 1, this.timeScaleArray.push({ position: o, value: n, unit: h, year: n, month: f.monthMod(i + 1) }) } else 1 === e.minDate && 0 === e.minMonth && this.timeScaleArray.push({ position: o, value: n, unit: h, year: a, month: f.monthMod(i + 1) }); for (var d = n, g = o, u = 0; u < r; u++)d++, g = l.determineDaysOfYear(d - 1) * s + g, this.timeScaleArray.push({ position: g, value: d, unit: h, year: d, month: 1 }) } }, { key: "generateMonthScale", value: function (t) { var e = t.firstVal, i = t.currentMonthDate, a = t.currentMonth, s = t.currentYear, r = t.daysWidthOnXAxis, n = t.numberOfMonths, o = a, l = 0, h = new Y(this.ctx), c = "month", d = 0; if (e.minDate > 1) { l = (h.determineDaysOfMonths(a + 1, e.minYear) - i + 1) * r, o = f.monthMod(a + 1); var g = s + d, u = f.monthMod(o), p = o; 0 === o && (c = "year", p = g, u = 1, g += d += 1), this.timeScaleArray.push({ position: l, value: p, unit: c, year: g, month: u }) } else this.timeScaleArray.push({ position: l, value: o, unit: c, year: s, month: f.monthMod(a) }); for (var x = o + 1, b = l, m = 0, v = 1; m < n; m++, v++) { 0 === (x = f.monthMod(x)) ? (c = "year", d += 1) : c = "month"; var y = this._getYear(s, x, d); b = h.determineDaysOfMonths(x, y) * r + b; var w = 0 === x ? y : x; this.timeScaleArray.push({ position: b, value: w, unit: c, year: y, month: 0 === x ? 1 : x }), x++ } } }, { key: "generateDayScale", value: function (t) { var e = t.firstVal, i = t.currentMonth, a = t.currentYear, s = t.hoursWidthOnXAxis, r = t.numberOfDays, n = new Y(this.ctx), o = "day", l = e.minDate + 1, h = l, c = function (t, e, i) { return t > n.determineDaysOfMonths(e + 1, i) ? (h = 1, o = "month", g = e += 1, e) : e }, d = (24 - e.minHour) * s, g = l, u = c(h, i, a); 0 === e.minHour && 1 === e.minDate && (d = 0, g = f.monthMod(e.minMonth), o = "month", h = e.minDate, r++), this.timeScaleArray.push({ position: d, value: g, unit: o, year: this._getYear(a, u, 0), month: f.monthMod(u), day: h }); for (var p = d, x = 0; x < r; x++) { o = "day", u = c(h += 1, u, this._getYear(a, u, 0)); var b = this._getYear(a, u, 0); p = 24 * s + p; var m = 1 === h ? f.monthMod(u) : h; this.timeScaleArray.push({ position: p, value: m, unit: o, year: b, month: f.monthMod(u), day: m }) } } }, { key: "generateHourScale", value: function (t) { var e = t.firstVal, i = t.currentDate, a = t.currentMonth, s = t.currentYear, r = t.minutesWidthOnXAxis, n = t.numberOfHours, o = new Y(this.ctx), l = "hour", h = function (t, e) { return t > o.determineDaysOfMonths(e + 1, s) && (x = 1, e += 1), { month: e, date: x } }, c = function (t, e) { return t > o.determineDaysOfMonths(e + 1, s) ? e += 1 : e }, d = 60 - (e.minMinute + e.minSecond / 60), g = d * r, u = e.minHour + 1, p = u + 1; 60 === d && (g = 0, p = (u = e.minHour) + 1); var x = i, b = c(x, a); this.timeScaleArray.push({ position: g, value: u, unit: l, day: x, hour: p, year: s, month: f.monthMod(b) }); for (var m = g, v = 0; v < n; v++) { if (l = "hour", p >= 24) p = 0, l = "day", b = h(x += 1, b).month, b = c(x, b); var y = this._getYear(s, b, 0); m = 0 === p && 0 === v ? d * r : 60 * r + m; var w = 0 === p ? x : p; this.timeScaleArray.push({ position: m, value: w, unit: l, hour: p, day: x, year: y, month: f.monthMod(b) }), p++ } } }, { key: "generateMinuteScale", value: function (t) { var e = t.firstVal, i = (t.currentSecond, t.currentMinute, t.currentHour), a = t.currentDate, s = t.currentMonth, r = t.currentYear, n = t.minutesWidthOnXAxis, o = t.secondsWidthOnXAxis, l = t.numberOfMinutes, h = "minute", c = (60 - e.minSecond) * o, d = e.minMinute + 1, g = d + 1, u = a, p = s, x = r, b = i; this.timeScaleArray.push({ position: c, value: d, unit: h, day: u, hour: b, minute: g, year: x, month: f.monthMod(p) }); for (var m = c, v = 0; v < l; v++)g >= 60 && (g = 0, 24 === (b += 1) && (b = 0)), m = n + m, this.timeScaleArray.push({ position: m, value: g, unit: h, hour: b, minute: g, day: u, year: this._getYear(r, p, 0), month: f.monthMod(p) }), g++ } }, { key: "createRawDateString", value: function (t, e) { var i = t.year; return i += "-" + ("0" + t.month.toString()).slice(-2), "day" === t.unit ? i += "day" === t.unit ? "-" + ("0" + e).slice(-2) : "-01" : i += "-" + ("0" + (t.day ? t.day : "1")).slice(-2), "hour" === t.unit ? i += "hour" === t.unit ? "T" + ("0" + e).slice(-2) : "T00" : i += "T" + ("0" + (t.hour ? t.hour : "0")).slice(-2), i += "minute" === t.unit ? ":" + ("0" + e).slice(-2) + ":00" : ":00:00", this.utc && (i += ".000Z"), i } }, { key: "formatDates", value: function (t) { var e = this, i = this.w; return t.map((function (t) { var a = t.value.toString(), s = new Y(e.ctx), r = e.createRawDateString(t, a), n = s.getDate(s.parseDate(r)); if (e.utc || (n = s.getDate(s.parseDateWithTimezone(r))), void 0 === i.config.xaxis.labels.format) { var o = "dd MMM", l = i.config.xaxis.labels.datetimeFormatter; "year" === t.unit && (o = l.year), "month" === t.unit && (o = l.month), "day" === t.unit && (o = l.day), "hour" === t.unit && (o = l.hour), "minute" === t.unit && (o = l.minute), a = s.formatDate(n, o) } else a = s.formatDate(n, i.config.xaxis.labels.format); return { dateString: r, position: t.position, value: a, unit: t.unit, year: t.year, month: t.month } })) } }, { key: "removeOverlappingTS", value: function (t) { var e, i = this, a = new b(this.ctx), s = !1; t.length > 0 && t[0].value && t.every((function (e) { return e.value.length === t[0].value.length })) && (s = !0, e = a.getTextRects(t[0].value).width); var r = 0, n = t.map((function (n, o) { if (o > 0 && i.w.config.xaxis.labels.hideOverlappingLabels) { var l = s ? e : a.getTextRects(t[r].value).width, h = t[r].position; return n.position > h + l + 10 ? (r = o, n) : null } return n })); return n = n.filter((function (t) { return null !== t })) } }, { key: "_getYear", value: function (t, e, i) { return t + Math.floor(e / 12) + i } }]), t }(), Et = function () { function t(i, a) { e(this, t), this.ctx = a, this.w = a.w, this.el = i } return a(t, [{ key: "setupElements", value: function () { var t = this.w.globals, e = this.w.config, i = e.chart.type; t.axisCharts = ["line", "area", "bar", "rangeBar", "candlestick", "scatter", "bubble", "radar", "heatmap", "treemap"].indexOf(i) > -1, t.xyCharts = ["line", "area", "bar", "rangeBar", "candlestick", "scatter", "bubble"].indexOf(i) > -1, t.isBarHorizontal = ("bar" === e.chart.type || "rangeBar" === e.chart.type) && e.plotOptions.bar.horizontal, t.chartClass = ".apexcharts" + t.chartID, t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), b.setAttrs(t.dom.elWrap, { id: t.chartClass.substring(1), class: "apexcharts-canvas " + t.chartClass.substring(1) }), this.el.appendChild(t.dom.elWrap), t.dom.Paper = new window.SVG.Doc(t.dom.elWrap), t.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: "translate(".concat(e.chart.offsetX, ", ").concat(e.chart.offsetY, ")") }), t.dom.Paper.node.style.background = e.chart.background, this.setSVGDimensions(), t.dom.elGraphical = t.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), t.dom.elAnnotations = t.dom.Paper.group().attr({ class: "apexcharts-annotations" }), t.dom.elDefs = t.dom.Paper.defs(), t.dom.elLegendWrap = document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elWrap.appendChild(t.dom.elLegendWrap), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs) } }, { key: "plotChartType", value: function (t, e) { var i = this.w, a = i.config, s = i.globals, r = { series: [], i: [] }, n = { series: [], i: [] }, o = { series: [], i: [] }, l = { series: [], i: [] }, h = { series: [], i: [] }, c = { series: [], i: [] }; s.series.map((function (e, d) { void 0 !== t[d].type ? ("column" === t[d].type || "bar" === t[d].type ? (s.series.length > 1 && a.plotOptions.bar.horizontal && console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"), h.series.push(e), h.i.push(d), i.globals.columnSeries = h.series) : "area" === t[d].type ? (n.series.push(e), n.i.push(d)) : "line" === t[d].type ? (r.series.push(e), r.i.push(d)) : "scatter" === t[d].type ? (o.series.push(e), o.i.push(d)) : "bubble" === t[d].type ? (l.series.push(e), l.i.push(d)) : "candlestick" === t[d].type ? (c.series.push(e), c.i.push(d)) : console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble"), s.comboCharts = !0) : (r.series.push(e), r.i.push(d)) })); var d = new Pt(this.ctx, e), g = new vt(this.ctx, e); this.ctx.pie = new At(this.ctx); var u = new Ct(this.ctx); this.ctx.rangeBar = new F(this.ctx, e); var f = new St(this.ctx), p = []; if (s.comboCharts) { if (n.series.length > 0 && p.push(d.draw(n.series, "area", n.i)), h.series.length > 0) if (i.config.chart.stacked) { var x = new mt(this.ctx, e); p.push(x.draw(h.series, h.i)) } else { var b = new X(this.ctx, e); p.push(b.draw(h.series, h.i)) } if (r.series.length > 0 && p.push(d.draw(r.series, "line", r.i)), c.series.length > 0 && p.push(g.draw(c.series, c.i)), o.series.length > 0) { var m = new Pt(this.ctx, e, !0); p.push(m.draw(o.series, "scatter", o.i)) } if (l.series.length > 0) { var v = new Pt(this.ctx, e, !0); p.push(v.draw(l.series, "bubble", l.i)) } } else switch (a.chart.type) { case "line": p = d.draw(s.series, "line"); break; case "area": p = d.draw(s.series, "area"); break; case "bar": if (a.chart.stacked) p = new mt(this.ctx, e).draw(s.series); else p = new X(this.ctx, e).draw(s.series); break; case "candlestick": p = new vt(this.ctx, e).draw(s.series); break; case "rangeBar": p = this.ctx.rangeBar.draw(s.series); break; case "heatmap": p = new wt(this.ctx, e).draw(s.series); break; case "treemap": p = new It(this.ctx, e).draw(s.series); break; case "pie": case "donut": case "polarArea": p = this.ctx.pie.draw(s.series); break; case "radialBar": p = u.draw(s.series); break; case "radar": p = f.draw(s.series); break; default: p = d.draw(s.series) }return p } }, { key: "setSVGDimensions", value: function () { var t = this.w.globals, e = this.w.config; t.svgWidth = e.chart.width, t.svgHeight = e.chart.height; var i = f.getDimensions(this.el), a = e.chart.width.toString().split(/[0-9]+/g).pop(); "%" === a ? f.isNumber(i[0]) && (0 === i[0].width && (i = f.getDimensions(this.el.parentNode)), t.svgWidth = i[0] * parseInt(e.chart.width, 10) / 100) : "px" !== a && "" !== a || (t.svgWidth = parseInt(e.chart.width, 10)); var s = e.chart.height.toString().split(/[0-9]+/g).pop(); if ("auto" !== t.svgHeight && "" !== t.svgHeight) if ("%" === s) { var r = f.getDimensions(this.el.parentNode); t.svgHeight = r[1] * parseInt(e.chart.height, 10) / 100 } else t.svgHeight = parseInt(e.chart.height, 10); else t.axisCharts ? t.svgHeight = t.svgWidth / 1.61 : t.svgHeight = t.svgWidth / 1.2; if (t.svgWidth < 0 && (t.svgWidth = 0), t.svgHeight < 0 && (t.svgHeight = 0), b.setAttrs(t.dom.Paper.node, { width: t.svgWidth, height: t.svgHeight }), "%" !== s) { var n = e.chart.sparkline.enabled ? 0 : t.axisCharts ? e.chart.parentHeightOffset : 0; t.dom.Paper.node.parentNode.parentNode.style.minHeight = t.svgHeight + n + "px" } t.dom.elWrap.style.width = t.svgWidth + "px", t.dom.elWrap.style.height = t.svgHeight + "px" } }, { key: "shiftGraphPosition", value: function () { var t = this.w.globals, e = t.translateY, i = { transform: "translate(" + t.translateX + ", " + e + ")" }; b.setAttrs(t.dom.elGraphical.node, i) } }, { key: "resizeNonAxisCharts", value: function () { var t = this.w, e = t.globals, i = 0, a = t.config.chart.sparkline.enabled ? 1 : 15; a += t.config.grid.padding.bottom, "top" !== t.config.legend.position && "bottom" !== t.config.legend.position || !t.config.legend.show || t.config.legend.floating || (i = new lt(this.ctx).legendHelpers.getLegendBBox().clwh + 10); var s = t.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"), r = 2.05 * t.globals.radialSize; if (s && !t.config.chart.sparkline.enabled) { var n = f.getBoundingClientRect(s); r = n.bottom; var o = n.bottom - n.top; r = Math.max(2.05 * t.globals.radialSize, o) } var l = r + e.translateY + i + a; e.dom.elLegendForeign && e.dom.elLegendForeign.setAttribute("height", l), e.dom.elWrap.style.height = l + "px", b.setAttrs(e.dom.Paper.node, { height: l }), e.dom.Paper.node.parentNode.parentNode.style.minHeight = l + "px" } }, { key: "coreCalculations", value: function () { new U(this.ctx).init() } }, { key: "resetGlobals", value: function () { var t = this, e = function () { return t.w.config.series.map((function (t) { return [] })) }, i = new H, a = this.w.globals; i.initGlobalVars(a), a.seriesXvalues = e(), a.seriesYvalues = e() } }, { key: "isMultipleY", value: function () { if (this.w.config.yaxis.constructor === Array && this.w.config.yaxis.length > 1) return this.w.globals.isMultipleYAxis = !0, !0 } }, { key: "xySettings", value: function () { var t = null, e = this.w; if (e.globals.axisCharts) { if ("back" === e.config.xaxis.crosshairs.position) new Q(this.ctx).drawXCrosshairs(); if ("back" === e.config.yaxis[0].crosshairs.position) new Q(this.ctx).drawYCrosshairs(); if ("datetime" === e.config.xaxis.type && void 0 === e.config.xaxis.labels.formatter) { this.ctx.timeScale = new Mt(this.ctx); var i = []; isFinite(e.globals.minX) && isFinite(e.globals.maxX) && !e.globals.isBarHorizontal ? i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX) : e.globals.isBarHorizontal && (i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minY, e.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i) } t = new y(this.ctx).getCalculatedRatios() } return t } }, { key: "updateSourceChart", value: function (t) { this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: { min: t.w.globals.minX, max: t.w.globals.maxX } } } }, !1, !1) } }, { key: "setupBrushHandler", value: function () { var t = this, e = this.w; if (e.config.chart.brush.enabled && "function" != typeof e.config.chart.events.selection) { var i = e.config.chart.brush.targets || [e.config.chart.brush.target]; i.forEach((function (e) { var i = ApexCharts.getChartByID(e); i.w.globals.brushSource = t.ctx, "function" != typeof i.w.config.chart.events.zoomed && (i.w.config.chart.events.zoomed = function () { t.updateSourceChart(i) }), "function" != typeof i.w.config.chart.events.scrolled && (i.w.config.chart.events.scrolled = function () { t.updateSourceChart(i) }) })), e.config.chart.events.selection = function (t, a) { i.forEach((function (t) { var i = ApexCharts.getChartByID(t), s = f.clone(e.config.yaxis); if (e.config.chart.brush.autoScaleYaxis && 1 === i.w.globals.series.length) { var r = new j(i); s = r.autoScaleY(i, s, a) } var o = i.w.config.yaxis.reduce((function (t, e, a) { return [].concat(g(t), [n(n({}, i.w.config.yaxis[a]), {}, { min: s[0].min, max: s[0].max })]) }), []); i.ctx.updateHelpers._updateOptions({ xaxis: { min: a.xaxis.min, max: a.xaxis.max }, yaxis: o }, !1, !1, !1, !1) })) } } } }]), t }(), Xt = function () { function i(t) { e(this, i), this.ctx = t, this.w = t.w } return a(i, [{ key: "_updateOptions", value: function (e) { var i = this, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = [this.ctx]; r && (o = this.ctx.getSyncedCharts()), this.ctx.w.globals.isExecCalled && (o = [this.ctx], this.ctx.w.globals.isExecCalled = !1), o.forEach((function (r) { var o = r.w; return o.globals.shouldAnimate = s, a || (o.globals.resized = !0, o.globals.dataChanged = !0, s && r.series.getPreviousPaths()), e && "object" === t(e) && (r.config = new D(e), e = y.extendArrayProps(r.config, e, o), r.w.globals.chartID !== i.ctx.w.globals.chartID && delete e.series, o.config = f.extend(o.config, e), n && (o.globals.lastXAxis = e.xaxis ? f.clone(e.xaxis) : [], o.globals.lastYAxis = e.yaxis ? f.clone(e.yaxis) : [], o.globals.initialConfig = f.extend({}, o.config), o.globals.initialSeries = f.clone(o.config.series))), r.update(e) })) } }, { key: "_updateSeries", value: function (t, e) { var i, a = this, s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = this.w; return r.globals.shouldAnimate = e, r.globals.dataChanged = !0, e && this.ctx.series.getPreviousPaths(), r.globals.axisCharts ? (0 === (i = t.map((function (t, e) { return a._extendSeries(t, e) }))).length && (i = [{ data: [] }]), r.config.series = i) : r.config.series = t.slice(), s && (r.globals.initialSeries = f.clone(r.config.series)), this.ctx.update() } }, { key: "_extendSeries", value: function (t, e) { var i = this.w, a = i.config.series[e]; return n(n({}, i.config.series[e]), {}, { name: t.name ? t.name : a && a.name, color: t.color ? t.color : a && a.color, type: t.type ? t.type : a && a.type, data: t.data ? t.data : a && a.data }) } }, { key: "toggleDataPointSelection", value: function (t, e) { var i = this.w, a = null, s = ".apexcharts-series[data\\:realIndex='".concat(t, "']"); return i.globals.axisCharts ? a = i.globals.dom.Paper.select("".concat(s, " path[j='").concat(e, "'], ").concat(s, " circle[j='").concat(e, "'], ").concat(s, " rect[j='").concat(e, "']")).members[0] : void 0 === e && (a = i.globals.dom.Paper.select("".concat(s, " path[j='").concat(t, "']")).members[0], "pie" !== i.config.chart.type && "polarArea" !== i.config.chart.type && "donut" !== i.config.chart.type || this.ctx.pie.pieClicked(t)), a ? (new b(this.ctx).pathMouseDown(a, null), a.node ? a.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null) } }, { key: "forceXAxisUpdate", value: function (t) { var e = this.w; if (["min", "max"].forEach((function (i) { void 0 !== t.xaxis[i] && (e.config.xaxis[i] = t.xaxis[i], e.globals.lastXAxis[i] = t.xaxis[i]) })), t.xaxis.categories && t.xaxis.categories.length && (e.config.xaxis.categories = t.xaxis.categories), e.config.xaxis.convertedCatToNumeric) { var i = new R(t); t = i.convertCatToNumericXaxis(t, this.ctx) } return t } }, { key: "forceYAxisUpdate", value: function (t) { var e = this.w; return e.config.chart.stacked && "100%" === e.config.chart.stackType && (Array.isArray(t.yaxis) ? t.yaxis.forEach((function (e, i) { t.yaxis[i].min = 0, t.yaxis[i].max = 100 })) : (t.yaxis.min = 0, t.yaxis.max = 100)), t } }, { key: "revertDefaultAxisMinMax", value: function (t) { var e = this, i = this.w, a = i.globals.lastXAxis, s = i.globals.lastYAxis; t && t.xaxis && (a = t.xaxis), t && t.yaxis && (s = t.yaxis), i.config.xaxis.min = a.min, i.config.xaxis.max = a.max; var r = function (t) { void 0 !== s[t] && (i.config.yaxis[t].min = s[t].min, i.config.yaxis[t].max = s[t].max) }; i.config.yaxis.map((function (t, a) { i.globals.zoomed || void 0 !== s[a] ? r(a) : void 0 !== e.ctx.opts.yaxis[a] && (t.min = e.ctx.opts.yaxis[a].min, t.max = e.ctx.opts.yaxis[a].max) })) } }]), i }(); Tt = "undefined" != typeof window ? window : void 0, zt = function (e, i) { var a = (void 0 !== this ? this : e).SVG = function (t) { if (a.supported) return t = new a.Doc(t), a.parser.draw || a.prepare(), t }; if (a.ns = "http://www.w3.org/2000/svg", a.xmlns = "http://www.w3.org/2000/xmlns/", a.xlink = "http://www.w3.org/1999/xlink", a.svgjs = "http://svgjs.com/svgjs", a.supported = !0, !a.supported) return !1; a.did = 1e3, a.eid = function (t) { return "Svgjs" + d(t) + a.did++ }, a.create = function (t) { var e = i.createElementNS(this.ns, t); return e.setAttribute("id", this.eid(t)), e }, a.extend = function () { var t, e; e = (t = [].slice.call(arguments)).pop(); for (var i = t.length - 1; i >= 0; i--)if (t[i]) for (var s in e) t[i].prototype[s] = e[s]; a.Set && a.Set.inherit && a.Set.inherit() }, a.invent = function (t) { var e = "function" == typeof t.create ? t.create : function () { this.constructor.call(this, a.create(t.create)) }; return t.inherit && (e.prototype = new t.inherit), t.extend && a.extend(e, t.extend), t.construct && a.extend(t.parent || a.Container, t.construct), e }, a.adopt = function (t) { return t ? t.instance ? t.instance : ((i = "svg" == t.nodeName ? t.parentNode instanceof e.SVGElement ? new a.Nested : new a.Doc : "linearGradient" == t.nodeName ? new a.Gradient("linear") : "radialGradient" == t.nodeName ? new a.Gradient("radial") : a[d(t.nodeName)] ? new (a[d(t.nodeName)]) : new a.Element(t)).type = t.nodeName, i.node = t, t.instance = i, i instanceof a.Doc && i.namespace().defs(), i.setData(JSON.parse(t.getAttribute("svgjs:data")) || {}), i) : null; var i }, a.prepare = function () { var t = i.getElementsByTagName("body")[0], e = (t ? new a.Doc(t) : a.adopt(i.documentElement).nested()).size(2, 0); a.parser = { body: t || i.documentElement, draw: e.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node, poly: e.polyline().node, path: e.path().node, native: a.create("svg") } }, a.parser = { native: a.create("svg") }, i.addEventListener("DOMContentLoaded", (function () { a.parser.draw || a.prepare() }), !1), a.regex = { numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, rgb: /rgb\((\d+),(\d+),(\d+)\)/, reference: /#([a-z0-9\-_]+)/i, transforms: /\)\s*,?\s*/, whitespace: /\s/g, isHex: /^#[a-f0-9]{3,6}$/i, isRgb: /^rgb\(/, isCss: /[^:]+:[^;]+;?/, isBlank: /^(\s+)?$/, isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, isPercent: /^-?[\d\.]+%$/, isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, delimiter: /[\s,]+/, hyphen: /([^e])\-/gi, pathLetters: /[MLHVCSQTAZ]/gi, isPathLetter: /[MLHVCSQTAZ]/i, numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi, dots: /\./g }, a.utils = { map: function (t, e) { for (var i = t.length, a = [], s = 0; s < i; s++)a.push(e(t[s])); return a }, filter: function (t, e) { for (var i = t.length, a = [], s = 0; s < i; s++)e(t[s]) && a.push(t[s]); return a }, filterSVGElements: function (t) { return this.filter(t, (function (t) { return t instanceof e.SVGElement })) } }, a.defaults = { attrs: { "fill-opacity": 1, "stroke-opacity": 1, "stroke-width": 0, "stroke-linejoin": "miter", "stroke-linecap": "butt", fill: "#000000", stroke: "#000000", opacity: 1, x: 0, y: 0, cx: 0, cy: 0, width: 0, height: 0, r: 0, rx: 0, ry: 0, offset: 0, "stop-opacity": 1, "stop-color": "#000000", "font-size": 16, "font-family": "Helvetica, Arial, sans-serif", "text-anchor": "start" } }, a.Color = function (e) { var i, s; this.r = 0, this.g = 0, this.b = 0, e && ("string" == typeof e ? a.regex.isRgb.test(e) ? (i = a.regex.rgb.exec(e.replace(a.regex.whitespace, "")), this.r = parseInt(i[1]), this.g = parseInt(i[2]), this.b = parseInt(i[3])) : a.regex.isHex.test(e) && (i = a.regex.hex.exec(4 == (s = e).length ? ["#", s.substring(1, 2), s.substring(1, 2), s.substring(2, 3), s.substring(2, 3), s.substring(3, 4), s.substring(3, 4)].join("") : s), this.r = parseInt(i[1], 16), this.g = parseInt(i[2], 16), this.b = parseInt(i[3], 16)) : "object" === t(e) && (this.r = e.r, this.g = e.g, this.b = e.b)) }, a.extend(a.Color, { toString: function () { return this.toHex() }, toHex: function () { return "#" + g(this.r) + g(this.g) + g(this.b) }, toRgb: function () { return "rgb(" + [this.r, this.g, this.b].join() + ")" }, brightness: function () { return this.r / 255 * .3 + this.g / 255 * .59 + this.b / 255 * .11 }, morph: function (t) { return this.destination = new a.Color(t), this }, at: function (t) { return this.destination ? (t = t < 0 ? 0 : t > 1 ? 1 : t, new a.Color({ r: ~~(this.r + (this.destination.r - this.r) * t), g: ~~(this.g + (this.destination.g - this.g) * t), b: ~~(this.b + (this.destination.b - this.b) * t) })) : this } }), a.Color.test = function (t) { return t += "", a.regex.isHex.test(t) || a.regex.isRgb.test(t) }, a.Color.isRgb = function (t) { return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b }, a.Color.isColor = function (t) { return a.Color.isRgb(t) || a.Color.test(t) }, a.Array = function (t, e) { 0 == (t = (t || []).valueOf()).length && e && (t = e.valueOf()), this.value = this.parse(t) }, a.extend(a.Array, { toString: function () { return this.value.join(" ") }, valueOf: function () { return this.value }, parse: function (t) { return t = t.valueOf(), Array.isArray(t) ? t : this.split(t) } }), a.PointArray = function (t, e) { a.Array.call(this, t, e || [[0, 0]]) }, a.PointArray.prototype = new a.Array, a.PointArray.prototype.constructor = a.PointArray; for (var s = { M: function (t, e, i) { return e.x = i.x = t[0], e.y = i.y = t[1], ["M", e.x, e.y] }, L: function (t, e) { return e.x = t[0], e.y = t[1], ["L", t[0], t[1]] }, H: function (t, e) { return e.x = t[0], ["H", t[0]] }, V: function (t, e) { return e.y = t[0], ["V", t[0]] }, C: function (t, e) { return e.x = t[4], e.y = t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]] }, Q: function (t, e) { return e.x = t[2], e.y = t[3], ["Q", t[0], t[1], t[2], t[3]] }, Z: function (t, e, i) { return e.x = i.x, e.y = i.y, ["Z"] } }, r = "mlhvqtcsaz".split(""), n = 0, o = r.length; n < o; ++n)s[r[n]] = function (t) { return function (e, i, a) { if ("H" == t) e[0] = e[0] + i.x; else if ("V" == t) e[0] = e[0] + i.y; else if ("A" == t) e[5] = e[5] + i.x, e[6] = e[6] + i.y; else for (var r = 0, n = e.length; r < n; ++r)e[r] = e[r] + (r % 2 ? i.y : i.x); return s[t](e, i, a) } }(r[n].toUpperCase()); a.PathArray = function (t, e) { a.Array.call(this, t, e || [["M", 0, 0]]) }, a.PathArray.prototype = new a.Array, a.PathArray.prototype.constructor = a.PathArray, a.extend(a.PathArray, { toString: function () { return function (t) { for (var e = 0, i = t.length, a = ""; e < i; e++)a += t[e][0], null != t[e][1] && (a += t[e][1], null != t[e][2] && (a += " ", a += t[e][2], null != t[e][3] && (a += " ", a += t[e][3], a += " ", a += t[e][4], null != t[e][5] && (a += " ", a += t[e][5], a += " ", a += t[e][6], null != t[e][7] && (a += " ", a += t[e][7]))))); return a + " " }(this.value) }, move: function (t, e) { var i = this.bbox(); return i.x, i.y, this }, at: function (t) { if (!this.destination) return this; for (var e = this.value, i = this.destination.value, s = [], r = new a.PathArray, n = 0, o = e.length; n < o; n++) { s[n] = [e[n][0]]; for (var l = 1, h = e[n].length; l < h; l++)s[n][l] = e[n][l] + (i[n][l] - e[n][l]) * t; "A" === s[n][0] && (s[n][4] = +(0 != s[n][4]), s[n][5] = +(0 != s[n][5])) } return r.value = s, r }, parse: function (t) { if (t instanceof a.PathArray) return t.valueOf(); var e, i = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 }; t = "string" == typeof t ? t.replace(a.regex.numbersWithDots, h).replace(a.regex.pathLetters, " $& ").replace(a.regex.hyphen, "$1 -").trim().split(a.regex.delimiter) : t.reduce((function (t, e) { return [].concat.call(t, e) }), []); var r = [], n = new a.Point, o = new a.Point, l = 0, c = t.length; do { a.regex.isPathLetter.test(t[l]) ? (e = t[l], ++l) : "M" == e ? e = "L" : "m" == e && (e = "l"), r.push(s[e].call(null, t.slice(l, l += i[e.toUpperCase()]).map(parseFloat), n, o)) } while (c > l); return r }, bbox: function () { return a.parser.draw || a.prepare(), a.parser.path.setAttribute("d", this.toString()), a.parser.path.getBBox() } }), a.Number = a.invent({ create: function (t, e) { this.value = 0, this.unit = e || "", "number" == typeof t ? this.value = isNaN(t) ? 0 : isFinite(t) ? t : t < 0 ? -34e37 : 34e37 : "string" == typeof t ? (e = t.match(a.regex.numberAndUnit)) && (this.value = parseFloat(e[1]), "%" == e[5] ? this.value /= 100 : "s" == e[5] && (this.value *= 1e3), this.unit = e[5]) : t instanceof a.Number && (this.value = t.valueOf(), this.unit = t.unit) }, extend: { toString: function () { return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) + this.unit }, toJSON: function () { return this.toString() }, valueOf: function () { return this.value }, plus: function (t) { return t = new a.Number(t), new a.Number(this + t, this.unit || t.unit) }, minus: function (t) { return t = new a.Number(t), new a.Number(this - t, this.unit || t.unit) }, times: function (t) { return t = new a.Number(t), new a.Number(this * t, this.unit || t.unit) }, divide: function (t) { return t = new a.Number(t), new a.Number(this / t, this.unit || t.unit) }, to: function (t) { var e = new a.Number(this); return "string" == typeof t && (e.unit = t), e }, morph: function (t) { return this.destination = new a.Number(t), t.relative && (this.destination.value += this.value), this }, at: function (t) { return this.destination ? new a.Number(this.destination).minus(this).times(t).plus(this) : this } } }), a.Element = a.invent({ create: function (t) { this._stroke = a.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = t) && (this.type = t.nodeName, this.node.instance = this, this._stroke = t.getAttribute("stroke") || this._stroke) }, extend: { x: function (t) { return this.attr("x", t) }, y: function (t) { return this.attr("y", t) }, cx: function (t) { return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2) }, cy: function (t) { return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2) }, move: function (t, e) { return this.x(t).y(e) }, center: function (t, e) { return this.cx(t).cy(e) }, width: function (t) { return this.attr("width", t) }, height: function (t) { return this.attr("height", t) }, size: function (t, e) { var i = u(this, t, e); return this.width(new a.Number(i.width)).height(new a.Number(i.height)) }, clone: function (t) { this.writeDataToDom(); var e = x(this.node.cloneNode(!0)); return t ? t.add(e) : this.after(e), e }, remove: function () { return this.parent() && this.parent().removeElement(this), this }, replace: function (t) { return this.after(t).remove(), t }, addTo: function (t) { return t.put(this) }, putIn: function (t) { return t.add(this) }, id: function (t) { return this.attr("id", t) }, show: function () { return this.style("display", "") }, hide: function () { return this.style("display", "none") }, visible: function () { return "none" != this.style("display") }, toString: function () { return this.attr("id") }, classes: function () { var t = this.attr("class"); return null == t ? [] : t.trim().split(a.regex.delimiter) }, hasClass: function (t) { return -1 != this.classes().indexOf(t) }, addClass: function (t) { if (!this.hasClass(t)) { var e = this.classes(); e.push(t), this.attr("class", e.join(" ")) } return this }, removeClass: function (t) { return this.hasClass(t) && this.attr("class", this.classes().filter((function (e) { return e != t })).join(" ")), this }, toggleClass: function (t) { return this.hasClass(t) ? this.removeClass(t) : this.addClass(t) }, reference: function (t) { return a.get(this.attr(t)) }, parent: function (t) { var i = this; if (!i.node.parentNode) return null; if (i = a.adopt(i.node.parentNode), !t) return i; for (; i && i.node instanceof e.SVGElement;) { if ("string" == typeof t ? i.matches(t) : i instanceof t) return i; if (!i.node.parentNode || "#document" == i.node.parentNode.nodeName) return null; i = a.adopt(i.node.parentNode) } }, doc: function () { return this instanceof a.Doc ? this : this.parent(a.Doc) }, parents: function (t) { var e = [], i = this; do { if (!(i = i.parent(t)) || !i.node) break; e.push(i) } while (i.parent); return e }, matches: function (t) { return function (t, e) { return (t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector).call(t, e) }(this.node, t) }, native: function () { return this.node }, svg: function (t) { var e = i.createElement("svg"); if (!(t && this instanceof a.Parent)) return e.appendChild(t = i.createElement("svg")), this.writeDataToDom(), t.appendChild(this.node.cloneNode(!0)), e.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, ""); e.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>"; for (var s = 0, r = e.firstChild.childNodes.length; s < r; s++)this.node.appendChild(e.firstChild.firstChild); return this }, writeDataToDom: function () { return (this.each || this.lines) && (this.each ? this : this.lines()).each((function () { this.writeDataToDom() })), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this }, setData: function (t) { return this.dom = t, this }, is: function (t) { return function (t, e) { return t instanceof e }(this, t) } } }), a.easing = { "-": function (t) { return t }, "<>": function (t) { return -Math.cos(t * Math.PI) / 2 + .5 }, ">": function (t) { return Math.sin(t * Math.PI / 2) }, "<": function (t) { return 1 - Math.cos(t * Math.PI / 2) } }, a.morph = function (t) { return function (e, i) { return new a.MorphObj(e, i).at(t) } }, a.Situation = a.invent({ create: function (t) { this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new a.Number(t.duration).valueOf(), this.delay = new a.Number(t.delay).valueOf(), this.start = +new Date + this.delay, this.finish = this.start + this.duration, this.ease = t.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {} } }), a.FX = a.invent({ create: function (t) { this._target = t, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1 }, extend: { animate: function (e, i, s) { "object" === t(e) && (i = e.ease, s = e.delay, e = e.duration); var r = new a.Situation({ duration: e || 1e3, delay: s || 0, ease: a.easing[i || "-"] || i }); return this.queue(r), this }, target: function (t) { return t && t instanceof a.Element ? (this._target = t, this) : this._target }, timeToAbsPos: function (t) { return (t - this.situation.start) / (this.situation.duration / this._speed) }, absPosToTime: function (t) { return this.situation.duration / this._speed * t + this.situation.start }, startAnimFrame: function () { this.stopAnimFrame(), this.animationFrame = e.requestAnimationFrame(function () { this.step() }.bind(this)) }, stopAnimFrame: function () { e.cancelAnimationFrame(this.animationFrame) }, start: function () { return !this.active && this.situation && (this.active = !0, this.startCurrent()), this }, startCurrent: function () { return this.situation.start = +new Date + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step() }, queue: function (t) { return ("function" == typeof t || t instanceof a.Situation) && this.situations.push(t), this.situation || (this.situation = this.situations.shift()), this }, dequeue: function () { return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof a.Situation ? this.start() : this.situation.call(this)), this }, initAnimations: function () { var t, e = this.situation; if (e.init) return this; for (var i in e.animations) { t = this.target()[i](), Array.isArray(t) || (t = [t]), Array.isArray(e.animations[i]) || (e.animations[i] = [e.animations[i]]); for (var s = t.length; s--;)e.animations[i][s] instanceof a.Number && (t[s] = new a.Number(t[s])), e.animations[i][s] = t[s].morph(e.animations[i][s]) } for (var i in e.attrs) e.attrs[i] = new a.MorphObj(this.target().attr(i), e.attrs[i]); for (var i in e.styles) e.styles[i] = new a.MorphObj(this.target().style(i), e.styles[i]); return e.initialTransformation = this.target().matrixify(), e.init = !0, this }, clearQueue: function () { return this.situations = [], this }, clearCurrent: function () { return this.situation = null, this }, stop: function (t, e) { var i = this.active; return this.active = !1, e && this.clearQueue(), t && this.situation && (!i && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent() }, after: function (t) { var e = this.last(); return this.target().on("finished.fx", (function i(a) { a.detail.situation == e && (t.call(this, e), this.off("finished.fx", i)) })), this._callStart() }, during: function (t) { var e = this.last(), i = function (i) { i.detail.situation == e && t.call(this, i.detail.pos, a.morph(i.detail.pos), i.detail.eased, e) }; return this.target().off("during.fx", i).on("during.fx", i), this.after((function () { this.off("during.fx", i) })), this._callStart() }, afterAll: function (t) { var e = function e(i) { t.call(this), this.off("allfinished.fx", e) }; return this.target().off("allfinished.fx", e).on("allfinished.fx", e), this._callStart() }, last: function () { return this.situations.length ? this.situations[this.situations.length - 1] : this.situation }, add: function (t, e, i) { return this.last()[i || "animations"][t] = e, this._callStart() }, step: function (t) { var e, i, a; t || (this.absPos = this.timeToAbsPos(+new Date)), !1 !== this.situation.loops ? (e = Math.max(this.absPos, 0), i = Math.floor(e), !0 === this.situation.loops || i < this.situation.loops ? (this.pos = e - i, a = this.situation.loop, this.situation.loop = i) : (this.absPos = this.situation.loops, this.pos = 1, a = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - a) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos); var s = this.situation.ease(this.pos); for (var r in this.situation.once) r > this.lastPos && r <= s && (this.situation.once[r].call(this.target(), this.pos, s), delete this.situation.once[r]); return this.active && this.target().fire("during", { pos: this.pos, eased: s, fx: this, situation: this.situation }), this.situation ? (this.eachAt(), 1 == this.pos && !this.situation.reversed || this.situation.reversed && 0 == this.pos ? (this.stopAnimFrame(), this.target().fire("finished", { fx: this, situation: this.situation }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = s, this) : this }, eachAt: function () { var t, e = this, i = this.target(), s = this.situation; for (var r in s.animations) t = [].concat(s.animations[r]).map((function (t) { return "string" != typeof t && t.at ? t.at(s.ease(e.pos), e.pos) : t })), i[r].apply(i, t); for (var r in s.attrs) t = [r].concat(s.attrs[r]).map((function (t) { return "string" != typeof t && t.at ? t.at(s.ease(e.pos), e.pos) : t })), i.attr.apply(i, t); for (var r in s.styles) t = [r].concat(s.styles[r]).map((function (t) { return "string" != typeof t && t.at ? t.at(s.ease(e.pos), e.pos) : t })), i.style.apply(i, t); if (s.transforms.length) { t = s.initialTransformation, r = 0; for (var n = s.transforms.length; r < n; r++) { var o = s.transforms[r]; o instanceof a.Matrix ? t = o.relative ? t.multiply((new a.Matrix).morph(o).at(s.ease(this.pos))) : t.morph(o).at(s.ease(this.pos)) : (o.relative || o.undo(t.extract()), t = t.multiply(o.at(s.ease(this.pos)))) } i.matrix(t) } return this }, once: function (t, e, i) { var a = this.last(); return i || (t = a.ease(t)), a.once[t] = e, this }, _callStart: function () { return setTimeout(function () { this.start() }.bind(this), 0), this } }, parent: a.Element, construct: { animate: function (t, e, i) { return (this.fx || (this.fx = new a.FX(this))).animate(t, e, i) }, delay: function (t) { return (this.fx || (this.fx = new a.FX(this))).delay(t) }, stop: function (t, e) { return this.fx && this.fx.stop(t, e), this }, finish: function () { return this.fx && this.fx.finish(), this } } }), a.MorphObj = a.invent({ create: function (t, e) { return a.Color.isColor(e) ? new a.Color(t).morph(e) : a.regex.delimiter.test(t) ? a.regex.pathLetters.test(t) ? new a.PathArray(t).morph(e) : new a.Array(t).morph(e) : a.regex.numberAndUnit.test(e) ? new a.Number(t).morph(e) : (this.value = t, void (this.destination = e)) }, extend: { at: function (t, e) { return e < 1 ? this.value : this.destination }, valueOf: function () { return this.value } } }), a.extend(a.FX, { attr: function (e, i, a) { if ("object" === t(e)) for (var s in e) this.attr(s, e[s]); else this.add(e, i, "attrs"); return this }, plot: function (t, e, i, a) { return 4 == arguments.length ? this.plot([t, e, i, a]) : this.add("plot", new (this.target().morphArray)(t)) } }), a.Box = a.invent({ create: function (e, i, s, r) { if (!("object" !== t(e) || e instanceof a.Element)) return a.Box.call(this, null != e.left ? e.left : e.x, null != e.top ? e.top : e.y, e.width, e.height); 4 == arguments.length && (this.x = e, this.y = i, this.width = s, this.height = r), b(this) } }), a.BBox = a.invent({ create: function (t) { if (a.Box.apply(this, [].slice.call(arguments)), t instanceof a.Element) { var e; try { if (!i.documentElement.contains) { for (var s = t.node; s.parentNode;)s = s.parentNode; if (s != i) throw new Error("Element not in the dom") } e = t.node.getBBox() } catch (i) { if (t instanceof a.Shape) { a.parser.draw || a.prepare(); var r = t.clone(a.parser.draw.instance).show(); e = r.node.getBBox(), r.remove() } else e = { x: t.node.clientLeft, y: t.node.clientTop, width: t.node.clientWidth, height: t.node.clientHeight } } a.Box.call(this, e) } }, inherit: a.Box, parent: a.Element, construct: { bbox: function () { return new a.BBox(this) } } }), a.BBox.prototype.constructor = a.BBox, a.Matrix = a.invent({ create: function (e) { var i = p([1, 0, 0, 1, 0, 0]); e = e instanceof a.Element ? e.matrixify() : "string" == typeof e ? p(e.split(a.regex.delimiter).map(parseFloat)) : 6 == arguments.length ? p([].slice.call(arguments)) : Array.isArray(e) ? p(e) : "object" === t(e) ? e : i; for (var s = v.length - 1; s >= 0; --s)this[v[s]] = null != e[v[s]] ? e[v[s]] : i[v[s]] }, extend: { extract: function () { var t = f(this, 0, 1), e = (f(this, 1, 0), 180 / Math.PI * Math.atan2(t.y, t.x) - 90); return { x: this.e, y: this.f, transformedX: (this.e * Math.cos(e * Math.PI / 180) + this.f * Math.sin(e * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b), transformedY: (this.f * Math.cos(e * Math.PI / 180) + this.e * Math.sin(-e * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d), rotation: e, a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f, matrix: new a.Matrix(this) } }, clone: function () { return new a.Matrix(this) }, morph: function (t) { return this.destination = new a.Matrix(t), this }, multiply: function (t) { return new a.Matrix(this.native().multiply(function (t) { return t instanceof a.Matrix || (t = new a.Matrix(t)), t }(t).native())) }, inverse: function () { return new a.Matrix(this.native().inverse()) }, translate: function (t, e) { return new a.Matrix(this.native().translate(t || 0, e || 0)) }, native: function () { for (var t = a.parser.native.createSVGMatrix(), e = v.length - 1; e >= 0; e--)t[v[e]] = this[v[e]]; return t }, toString: function () { return "matrix(" + m(this.a) + "," + m(this.b) + "," + m(this.c) + "," + m(this.d) + "," + m(this.e) + "," + m(this.f) + ")" } }, parent: a.Element, construct: { ctm: function () { return new a.Matrix(this.node.getCTM()) }, screenCTM: function () { if (this instanceof a.Nested) { var t = this.rect(1, 1), e = t.node.getScreenCTM(); return t.remove(), new a.Matrix(e) } return new a.Matrix(this.node.getScreenCTM()) } } }), a.Point = a.invent({ create: function (e, i) { var a; a = Array.isArray(e) ? { x: e[0], y: e[1] } : "object" === t(e) ? { x: e.x, y: e.y } : null != e ? { x: e, y: null != i ? i : e } : { x: 0, y: 0 }, this.x = a.x, this.y = a.y }, extend: { clone: function () { return new a.Point(this) }, morph: function (t, e) { return this.destination = new a.Point(t, e), this } } }), a.extend(a.Element, { point: function (t, e) { return new a.Point(t, e).transform(this.screenCTM().inverse()) } }), a.extend(a.Element, { attr: function (e, i, s) { if (null == e) { for (e = {}, s = (i = this.node.attributes).length - 1; s >= 0; s--)e[i[s].nodeName] = a.regex.isNumber.test(i[s].nodeValue) ? parseFloat(i[s].nodeValue) : i[s].nodeValue; return e } if ("object" === t(e)) for (var r in e) this.attr(r, e[r]); else if (null === i) this.node.removeAttribute(e); else { if (null == i) return null == (i = this.node.getAttribute(e)) ? a.defaults.attrs[e] : a.regex.isNumber.test(i) ? parseFloat(i) : i; "stroke-width" == e ? this.attr("stroke", parseFloat(i) > 0 ? this._stroke : null) : "stroke" == e && (this._stroke = i), "fill" != e && "stroke" != e || (a.regex.isImage.test(i) && (i = this.doc().defs().image(i, 0, 0)), i instanceof a.Image && (i = this.doc().defs().pattern(0, 0, (function () { this.add(i) })))), "number" == typeof i ? i = new a.Number(i) : a.Color.isColor(i) ? i = new a.Color(i) : Array.isArray(i) && (i = new a.Array(i)), "leading" == e ? this.leading && this.leading(i) : "string" == typeof s ? this.node.setAttributeNS(s, e, i.toString()) : this.node.setAttribute(e, i.toString()), !this.rebuild || "font-size" != e && "x" != e || this.rebuild(e, i) } return this } }), a.extend(a.Element, { transform: function (e, i) { var s; return "object" !== t(e) ? (s = new a.Matrix(this).extract(), "string" == typeof e ? s[e] : s) : (s = new a.Matrix(this), i = !!i || !!e.relative, null != e.a && (s = i ? s.multiply(new a.Matrix(e)) : new a.Matrix(e)), this.attr("transform", s)) } }), a.extend(a.Element, { untransform: function () { return this.attr("transform", null) }, matrixify: function () { return (this.attr("transform") || "").split(a.regex.transforms).slice(0, -1).map((function (t) { var e = t.trim().split("("); return [e[0], e[1].split(a.regex.delimiter).map((function (t) { return parseFloat(t) }))] })).reduce((function (t, e) { return "matrix" == e[0] ? t.multiply(p(e[1])) : t[e[0]].apply(t, e[1]) }), new a.Matrix) }, toParent: function (t) { if (this == t) return this; var e = this.screenCTM(), i = t.screenCTM().inverse(); return this.addTo(t).untransform().transform(i.multiply(e)), this }, toDoc: function () { return this.toParent(this.doc()) } }), a.Transformation = a.invent({ create: function (e, i) { if (arguments.length > 1 && "boolean" != typeof i) return this.constructor.call(this, [].slice.call(arguments)); if (Array.isArray(e)) for (var a = 0, s = this.arguments.length; a < s; ++a)this[this.arguments[a]] = e[a]; else if ("object" === t(e)) for (a = 0, s = this.arguments.length; a < s; ++a)this[this.arguments[a]] = e[this.arguments[a]]; this.inversed = !1, !0 === i && (this.inversed = !0) } }), a.Translate = a.invent({ parent: a.Matrix, inherit: a.Transformation, create: function (t, e) { this.constructor.apply(this, [].slice.call(arguments)) }, extend: { arguments: ["transformedX", "transformedY"], method: "translate" } }), a.extend(a.Element, { style: function (e, i) { if (0 == arguments.length) return this.node.style.cssText || ""; if (arguments.length < 2) if ("object" === t(e)) for (var s in e) this.style(s, e[s]); else { if (!a.regex.isCss.test(e)) return this.node.style[c(e)]; for (e = e.split(/\s*;\s*/).filter((function (t) { return !!t })).map((function (t) { return t.split(/\s*:\s*/) })); i = e.pop();)this.style(i[0], i[1]) } else this.node.style[c(e)] = null === i || a.regex.isBlank.test(i) ? "" : i; return this } }), a.Parent = a.invent({ create: function (t) { this.constructor.call(this, t) }, inherit: a.Element, extend: { children: function () { return a.utils.map(a.utils.filterSVGElements(this.node.childNodes), (function (t) { return a.adopt(t) })) }, add: function (t, e) { return null == e ? this.node.appendChild(t.node) : t.node != this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this }, put: function (t, e) { return this.add(t, e), t }, has: function (t) { return this.index(t) >= 0 }, index: function (t) { return [].slice.call(this.node.childNodes).indexOf(t.node) }, get: function (t) { return a.adopt(this.node.childNodes[t]) }, first: function () { return this.get(0) }, last: function () { return this.get(this.node.childNodes.length - 1) }, each: function (t, e) { for (var i = this.children(), s = 0, r = i.length; s < r; s++)i[s] instanceof a.Element && t.apply(i[s], [s, i]), e && i[s] instanceof a.Container && i[s].each(t, e); return this }, removeElement: function (t) { return this.node.removeChild(t.node), this }, clear: function () { for (; this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild); return delete this._defs, this }, defs: function () { return this.doc().defs() } } }), a.extend(a.Parent, { ungroup: function (t, e) { return 0 === e || this instanceof a.Defs || this.node == a.parser.draw || (t = t || (this instanceof a.Doc ? this : this.parent(a.Parent)), e = e || 1 / 0, this.each((function () { return this instanceof a.Defs ? this : this instanceof a.Parent ? this.ungroup(t, e - 1) : this.toParent(t) })), this.node.firstChild || this.remove()), this }, flatten: function (t, e) { return this.ungroup(t, e) } }), a.Container = a.invent({ create: function (t) { this.constructor.call(this, t) }, inherit: a.Parent }), a.ViewBox = a.invent({ parent: a.Container, construct: {} }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach((function (t) { a.Element.prototype[t] = function (e) { return a.on(this.node, t, e), this } })), a.listeners = [], a.handlerMap = [], a.listenerId = 0, a.on = function (t, e, i, s, r) { var n = i.bind(s || t.instance || t), o = (a.handlerMap.indexOf(t) + 1 || a.handlerMap.push(t)) - 1, l = e.split(".")[0], h = e.split(".")[1] || "*"; a.listeners[o] = a.listeners[o] || {}, a.listeners[o][l] = a.listeners[o][l] || {}, a.listeners[o][l][h] = a.listeners[o][l][h] || {}, i._svgjsListenerId || (i._svgjsListenerId = ++a.listenerId), a.listeners[o][l][h][i._svgjsListenerId] = n, t.addEventListener(l, n, r || { passive: !0 }) }, a.off = function (t, e, i) { var s = a.handlerMap.indexOf(t), r = e && e.split(".")[0], n = e && e.split(".")[1], o = ""; if (-1 != s) if (i) { if ("function" == typeof i && (i = i._svgjsListenerId), !i) return; a.listeners[s][r] && a.listeners[s][r][n || "*"] && (t.removeEventListener(r, a.listeners[s][r][n || "*"][i], !1), delete a.listeners[s][r][n || "*"][i]) } else if (n && r) { if (a.listeners[s][r] && a.listeners[s][r][n]) { for (var l in a.listeners[s][r][n]) a.off(t, [r, n].join("."), l); delete a.listeners[s][r][n] } } else if (n) for (var h in a.listeners[s]) for (var o in a.listeners[s][h]) n === o && a.off(t, [h, n].join(".")); else if (r) { if (a.listeners[s][r]) { for (var o in a.listeners[s][r]) a.off(t, [r, o].join(".")); delete a.listeners[s][r] } } else { for (var h in a.listeners[s]) a.off(t, h); delete a.listeners[s], delete a.handlerMap[s] } }, a.extend(a.Element, { on: function (t, e, i, s) { return a.on(this.node, t, e, i, s), this }, off: function (t, e) { return a.off(this.node, t, e), this }, fire: function (t, i) { return t instanceof e.Event ? this.node.dispatchEvent(t) : this.node.dispatchEvent(t = new a.CustomEvent(t, { detail: i, cancelable: !0 })), this._event = t, this }, event: function () { return this._event } }), a.Defs = a.invent({ create: "defs", inherit: a.Container }), a.G = a.invent({ create: "g", inherit: a.Container, extend: { x: function (t) { return null == t ? this.transform("x") : this.transform({ x: t - this.x() }, !0) } }, construct: { group: function () { return this.put(new a.G) } } }), a.Doc = a.invent({ create: function (t) { t && ("svg" == (t = "string" == typeof t ? i.getElementById(t) : t).nodeName ? this.constructor.call(this, t) : (this.constructor.call(this, a.create("svg")), t.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs()) }, inherit: a.Container, extend: { namespace: function () { return this.attr({ xmlns: a.ns, version: "1.1" }).attr("xmlns:xlink", a.xlink, a.xmlns).attr("xmlns:svgjs", a.svgjs, a.xmlns) }, defs: function () { var t; return this._defs || ((t = this.node.getElementsByTagName("defs")[0]) ? this._defs = a.adopt(t) : this._defs = new a.Defs, this.node.appendChild(this._defs.node)), this._defs }, parent: function () { return this.node.parentNode && "#document" != this.node.parentNode.nodeName ? this.node.parentNode : null }, remove: function () { return this.parent() && this.parent().removeChild(this.node), this }, clear: function () { for (; this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild); return delete this._defs, a.parser.draw && !a.parser.draw.parentNode && this.node.appendChild(a.parser.draw), this }, clone: function (t) { this.writeDataToDom(); var e = this.node, i = x(e.cloneNode(!0)); return t ? (t.node || t).appendChild(i.node) : e.parentNode.insertBefore(i.node, e.nextSibling), i } } }), a.extend(a.Element, {}), a.Gradient = a.invent({ create: function (t) { this.constructor.call(this, a.create(t + "Gradient")), this.type = t }, inherit: a.Container, extend: { at: function (t, e, i) { return this.put(new a.Stop).update(t, e, i) }, update: function (t) { return this.clear(), "function" == typeof t && t.call(this, this), this }, fill: function () { return "url(#" + this.id() + ")" }, toString: function () { return this.fill() }, attr: function (t, e, i) { return "transform" == t && (t = "gradientTransform"), a.Container.prototype.attr.call(this, t, e, i) } }, construct: { gradient: function (t, e) { return this.defs().gradient(t, e) } } }), a.extend(a.Gradient, a.FX, { from: function (t, e) { return "radial" == (this._target || this).type ? this.attr({ fx: new a.Number(t), fy: new a.Number(e) }) : this.attr({ x1: new a.Number(t), y1: new a.Number(e) }) }, to: function (t, e) { return "radial" == (this._target || this).type ? this.attr({ cx: new a.Number(t), cy: new a.Number(e) }) : this.attr({ x2: new a.Number(t), y2: new a.Number(e) }) } }), a.extend(a.Defs, { gradient: function (t, e) { return this.put(new a.Gradient(t)).update(e) } }), a.Stop = a.invent({ create: "stop", inherit: a.Element, extend: { update: function (t) { return ("number" == typeof t || t instanceof a.Number) && (t = { offset: arguments[0], color: arguments[1], opacity: arguments[2] }), null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new a.Number(t.offset)), this } } }), a.Pattern = a.invent({ create: "pattern", inherit: a.Container, extend: { fill: function () { return "url(#" + this.id() + ")" }, update: function (t) { return this.clear(), "function" == typeof t && t.call(this, this), this }, toString: function () { return this.fill() }, attr: function (t, e, i) { return "transform" == t && (t = "patternTransform"), a.Container.prototype.attr.call(this, t, e, i) } }, construct: { pattern: function (t, e, i) { return this.defs().pattern(t, e, i) } } }), a.extend(a.Defs, { pattern: function (t, e, i) { return this.put(new a.Pattern).update(i).attr({ x: 0, y: 0, width: t, height: e, patternUnits: "userSpaceOnUse" }) } }), a.Shape = a.invent({ create: function (t) { this.constructor.call(this, t) }, inherit: a.Element }), a.Symbol = a.invent({ create: "symbol", inherit: a.Container, construct: { symbol: function () { return this.put(new a.Symbol) } } }), a.Use = a.invent({ create: "use", inherit: a.Shape, extend: { element: function (t, e) { return this.attr("href", (e || "") + "#" + t, a.xlink) } }, construct: { use: function (t, e) { return this.put(new a.Use).element(t, e) } } }), a.Rect = a.invent({ create: "rect", inherit: a.Shape, construct: { rect: function (t, e) { return this.put(new a.Rect).size(t, e) } } }), a.Circle = a.invent({ create: "circle", inherit: a.Shape, construct: { circle: function (t) { return this.put(new a.Circle).rx(new a.Number(t).divide(2)).move(0, 0) } } }), a.extend(a.Circle, a.FX, { rx: function (t) { return this.attr("r", t) }, ry: function (t) { return this.rx(t) } }), a.Ellipse = a.invent({ create: "ellipse", inherit: a.Shape, construct: { ellipse: function (t, e) { return this.put(new a.Ellipse).size(t, e).move(0, 0) } } }), a.extend(a.Ellipse, a.Rect, a.FX, { rx: function (t) { return this.attr("rx", t) }, ry: function (t) { return this.attr("ry", t) } }), a.extend(a.Circle, a.Ellipse, { x: function (t) { return null == t ? this.cx() - this.rx() : this.cx(t + this.rx()) }, y: function (t) { return null == t ? this.cy() - this.ry() : this.cy(t + this.ry()) }, cx: function (t) { return null == t ? this.attr("cx") : this.attr("cx", t) }, cy: function (t) { return null == t ? this.attr("cy") : this.attr("cy", t) }, width: function (t) { return null == t ? 2 * this.rx() : this.rx(new a.Number(t).divide(2)) }, height: function (t) { return null == t ? 2 * this.ry() : this.ry(new a.Number(t).divide(2)) }, size: function (t, e) { var i = u(this, t, e); return this.rx(new a.Number(i.width).divide(2)).ry(new a.Number(i.height).divide(2)) } }), a.Line = a.invent({ create: "line", inherit: a.Shape, extend: { array: function () { return new a.PointArray([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]) }, plot: function (t, e, i, s) { return null == t ? this.array() : (t = void 0 !== e ? { x1: t, y1: e, x2: i, y2: s } : new a.PointArray(t).toLine(), this.attr(t)) }, move: function (t, e) { return this.attr(this.array().move(t, e).toLine()) }, size: function (t, e) { var i = u(this, t, e); return this.attr(this.array().size(i.width, i.height).toLine()) } }, construct: { line: function (t, e, i, s) { return a.Line.prototype.plot.apply(this.put(new a.Line), null != t ? [t, e, i, s] : [0, 0, 0, 0]) } } }), a.Polyline = a.invent({ create: "polyline", inherit: a.Shape, construct: { polyline: function (t) { return this.put(new a.Polyline).plot(t || new a.PointArray) } } }), a.Polygon = a.invent({ create: "polygon", inherit: a.Shape, construct: { polygon: function (t) { return this.put(new a.Polygon).plot(t || new a.PointArray) } } }), a.extend(a.Polyline, a.Polygon, { array: function () { return this._array || (this._array = new a.PointArray(this.attr("points"))) }, plot: function (t) { return null == t ? this.array() : this.clear().attr("points", "string" == typeof t ? t : this._array = new a.PointArray(t)) }, clear: function () { return delete this._array, this }, move: function (t, e) { return this.attr("points", this.array().move(t, e)) }, size: function (t, e) { var i = u(this, t, e); return this.attr("points", this.array().size(i.width, i.height)) } }), a.extend(a.Line, a.Polyline, a.Polygon, { morphArray: a.PointArray, x: function (t) { return null == t ? this.bbox().x : this.move(t, this.bbox().y) }, y: function (t) { return null == t ? this.bbox().y : this.move(this.bbox().x, t) }, width: function (t) { var e = this.bbox(); return null == t ? e.width : this.size(t, e.height) }, height: function (t) { var e = this.bbox(); return null == t ? e.height : this.size(e.width, t) } }), a.Path = a.invent({ create: "path", inherit: a.Shape, extend: { morphArray: a.PathArray, array: function () { return this._array || (this._array = new a.PathArray(this.attr("d"))) }, plot: function (t) { return null == t ? this.array() : this.clear().attr("d", "string" == typeof t ? t : this._array = new a.PathArray(t)) }, clear: function () { return delete this._array, this } }, construct: { path: function (t) { return this.put(new a.Path).plot(t || new a.PathArray) } } }), a.Image = a.invent({ create: "image", inherit: a.Shape, extend: { load: function (t) { if (!t) return this; var i = this, s = new e.Image; return a.on(s, "load", (function () { a.off(s); var e = i.parent(a.Pattern); null !== e && (0 == i.width() && 0 == i.height() && i.size(s.width, s.height), e && 0 == e.width() && 0 == e.height() && e.size(i.width(), i.height()), "function" == typeof i._loaded && i._loaded.call(i, { width: s.width, height: s.height, ratio: s.width / s.height, url: t })) })), a.on(s, "error", (function (t) { a.off(s), "function" == typeof i._error && i._error.call(i, t) })), this.attr("href", s.src = this.src = t, a.xlink) }, loaded: function (t) { return this._loaded = t, this }, error: function (t) { return this._error = t, this } }, construct: { image: function (t, e, i) { return this.put(new a.Image).load(t).size(e || 0, i || e || 0) } } }), a.Text = a.invent({ create: function () { this.constructor.call(this, a.create("text")), this.dom.leading = new a.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", a.defaults.attrs["font-family"]) }, inherit: a.Shape, extend: { x: function (t) { return null == t ? this.attr("x") : this.attr("x", t) }, text: function (t) { if (void 0 === t) { t = ""; for (var e = this.node.childNodes, i = 0, s = e.length; i < s; ++i)0 != i && 3 != e[i].nodeType && 1 == a.adopt(e[i]).dom.newLined && (t += "\n"), t += e[i].textContent; return t } if (this.clear().build(!0), "function" == typeof t) t.call(this, this); else { i = 0; for (var r = (t = t.split("\n")).length; i < r; i++)this.tspan(t[i]).newLine() } return this.build(!1).rebuild() }, size: function (t) { return this.attr("font-size", t).rebuild() }, leading: function (t) { return null == t ? this.dom.leading : (this.dom.leading = new a.Number(t), this.rebuild()) }, lines: function () { var t = (this.textPath && this.textPath() || this).node, e = a.utils.map(a.utils.filterSVGElements(t.childNodes), (function (t) { return a.adopt(t) })); return new a.Set(e) }, rebuild: function (t) { if ("boolean" == typeof t && (this._rebuild = t), this._rebuild) { var e = this, i = 0, s = this.dom.leading * new a.Number(this.attr("font-size")); this.lines().each((function () { this.dom.newLined && (e.textPath() || this.attr("x", e.attr("x")), "\n" == this.text() ? i += s : (this.attr("dy", s + i), i = 0)) })), this.fire("rebuild") } return this }, build: function (t) { return this._build = !!t, this }, setData: function (t) { return this.dom = t, this.dom.leading = new a.Number(t.leading || 1.3), this } }, construct: { text: function (t) { return this.put(new a.Text).text(t) }, plain: function (t) { return this.put(new a.Text).plain(t) } } }), a.Tspan = a.invent({ create: "tspan", inherit: a.Shape, extend: { text: function (t) { return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? t.call(this, this) : this.plain(t), this) }, dx: function (t) { return this.attr("dx", t) }, dy: function (t) { return this.attr("dy", t) }, newLine: function () { var t = this.parent(a.Text); return this.dom.newLined = !0, this.dy(t.dom.leading * t.attr("font-size")).attr("x", t.x()) } } }), a.extend(a.Text, a.Tspan, { plain: function (t) { return !1 === this._build && this.clear(), this.node.appendChild(i.createTextNode(t)), this }, tspan: function (t) { var e = (this.textPath && this.textPath() || this).node, i = new a.Tspan; return !1 === this._build && this.clear(), e.appendChild(i.node), i.text(t) }, clear: function () { for (var t = (this.textPath && this.textPath() || this).node; t.hasChildNodes();)t.removeChild(t.lastChild); return this }, length: function () { return this.node.getComputedTextLength() } }), a.TextPath = a.invent({ create: "textPath", inherit: a.Parent, parent: a.Text, construct: { morphArray: a.PathArray, array: function () { var t = this.track(); return t ? t.array() : null }, plot: function (t) { var e = this.track(), i = null; return e && (i = e.plot(t)), null == t ? i : this }, track: function () { var t = this.textPath(); if (t) return t.reference("href") }, textPath: function () { if (this.node.firstChild && "textPath" == this.node.firstChild.nodeName) return a.adopt(this.node.firstChild) } } }), a.Nested = a.invent({ create: function () { this.constructor.call(this, a.create("svg")), this.style("overflow", "visible") }, inherit: a.Container, construct: { nested: function () { return this.put(new a.Nested) } } }); var l = { stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"], fill: ["color", "opacity", "rule"], prefix: function (t, e) { return "color" == e ? t : t + "-" + e } }; function h(t, e, i, s) { return i + s.replace(a.regex.dots, " .") } function c(t) { return t.toLowerCase().replace(/-(.)/g, (function (t, e) { return e.toUpperCase() })) } function d(t) { return t.charAt(0).toUpperCase() + t.slice(1) } function g(t) { var e = t.toString(16); return 1 == e.length ? "0" + e : e } function u(t, e, i) { if (null == e || null == i) { var a = t.bbox(); null == e ? e = a.width / a.height * i : null == i && (i = a.height / a.width * e) } return { width: e, height: i } } function f(t, e, i) { return { x: e * t.a + i * t.c + 0, y: e * t.b + i * t.d + 0 } } function p(t) { return { a: t[0], b: t[1], c: t[2], d: t[3], e: t[4], f: t[5] } } function x(t) { for (var i = t.childNodes.length - 1; i >= 0; i--)t.childNodes[i] instanceof e.SVGElement && x(t.childNodes[i]); return a.adopt(t).id(a.eid(t.nodeName)) } function b(t) { return null == t.x && (t.x = 0, t.y = 0, t.width = 0, t.height = 0), t.w = t.width, t.h = t.height, t.x2 = t.x + t.width, t.y2 = t.y + t.height, t.cx = t.x + t.width / 2, t.cy = t.y + t.height / 2, t } function m(t) { return Math.abs(t) > 1e-37 ? t : 0 } ["fill", "stroke"].forEach((function (t) { var e = {}; e[t] = function (e) { if (void 0 === e) return this; if ("string" == typeof e || a.Color.isRgb(e) || e && "function" == typeof e.fill) this.attr(t, e); else for (var i = l[t].length - 1; i >= 0; i--)null != e[l[t][i]] && this.attr(l.prefix(t, l[t][i]), e[l[t][i]]); return this }, a.extend(a.Element, a.FX, e) })), a.extend(a.Element, a.FX, { translate: function (t, e) { return this.transform({ x: t, y: e }) }, matrix: function (t) { return this.attr("transform", new a.Matrix(6 == arguments.length ? [].slice.call(arguments) : t)) }, opacity: function (t) { return this.attr("opacity", t) }, dx: function (t) { return this.x(new a.Number(t).plus(this instanceof a.FX ? 0 : this.x()), !0) }, dy: function (t) { return this.y(new a.Number(t).plus(this instanceof a.FX ? 0 : this.y()), !0) } }), a.extend(a.Path, { length: function () { return this.node.getTotalLength() }, pointAt: function (t) { return this.node.getPointAtLength(t) } }), a.Set = a.invent({ create: function (t) { Array.isArray(t) ? this.members = t : this.clear() }, extend: { add: function () { for (var t = [].slice.call(arguments), e = 0, i = t.length; e < i; e++)this.members.push(t[e]); return this }, remove: function (t) { var e = this.index(t); return e > -1 && this.members.splice(e, 1), this }, each: function (t) { for (var e = 0, i = this.members.length; e < i; e++)t.apply(this.members[e], [e, this.members]); return this }, clear: function () { return this.members = [], this }, length: function () { return this.members.length }, has: function (t) { return this.index(t) >= 0 }, index: function (t) { return this.members.indexOf(t) }, get: function (t) { return this.members[t] }, first: function () { return this.get(0) }, last: function () { return this.get(this.members.length - 1) }, valueOf: function () { return this.members } }, construct: { set: function (t) { return new a.Set(t) } } }), a.FX.Set = a.invent({ create: function (t) { this.set = t } }), a.Set.inherit = function () { var t = []; for (var e in a.Shape.prototype) "function" == typeof a.Shape.prototype[e] && "function" != typeof a.Set.prototype[e] && t.push(e); for (var e in t.forEach((function (t) { a.Set.prototype[t] = function () { for (var e = 0, i = this.members.length; e < i; e++)this.members[e] && "function" == typeof this.members[e][t] && this.members[e][t].apply(this.members[e], arguments); return "animate" == t ? this.fx || (this.fx = new a.FX.Set(this)) : this } })), t = [], a.FX.prototype) "function" == typeof a.FX.prototype[e] && "function" != typeof a.FX.Set.prototype[e] && t.push(e); t.forEach((function (t) { a.FX.Set.prototype[t] = function () { for (var e = 0, i = this.set.members.length; e < i; e++)this.set.members[e].fx[t].apply(this.set.members[e].fx, arguments); return this } })) }, a.extend(a.Element, {}), a.extend(a.Element, { remember: function (e, i) { if ("object" === t(arguments[0])) for (var a in e) this.remember(a, e[a]); else { if (1 == arguments.length) return this.memory()[e]; this.memory()[e] = i } return this }, forget: function () { if (0 == arguments.length) this._memory = {}; else for (var t = arguments.length - 1; t >= 0; t--)delete this.memory()[arguments[t]]; return this }, memory: function () { return this._memory || (this._memory = {}) } }), a.get = function (t) { var e = i.getElementById(function (t) { var e = (t || "").toString().match(a.regex.reference); if (e) return e[1] }(t) || t); return a.adopt(e) }, a.select = function (t, e) { return new a.Set(a.utils.map((e || i).querySelectorAll(t), (function (t) { return a.adopt(t) }))) }, a.extend(a.Parent, { select: function (t) { return a.select(t, this.node) } }); var v = "abcdef".split(""); if ("function" != typeof e.CustomEvent) { var y = function (t, e) { e = e || { bubbles: !1, cancelable: !1, detail: void 0 }; var a = i.createEvent("CustomEvent"); return a.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), a }; y.prototype = e.Event.prototype, a.CustomEvent = y } else a.CustomEvent = e.CustomEvent; return a }, "function" == typeof define && define.amd ? define((function () { return zt(Tt, Tt.document) })) : "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = Tt.document ? zt(Tt, Tt.document) : function (t) { return zt(t, t.document) } : Tt.SVG = zt(Tt, Tt.document),
		/*! svg.filter.js - v2.0.2 - 2016-02-24
		  * https://github.com/wout/svg.filter.js
		  * Copyright (c) 2016 Wout Fierens; Licensed MIT */
		function () { SVG.Filter = SVG.invent({ create: "filter", inherit: SVG.Parent, extend: { source: "SourceGraphic", sourceAlpha: "SourceAlpha", background: "BackgroundImage", backgroundAlpha: "BackgroundAlpha", fill: "FillPaint", stroke: "StrokePaint", autoSetIn: !0, put: function (t, e) { return this.add(t, e), !t.attr("in") && this.autoSetIn && t.attr("in", this.source), t.attr("result") || t.attr("result", t), t }, blend: function (t, e, i) { return this.put(new SVG.BlendEffect(t, e, i)) }, colorMatrix: function (t, e) { return this.put(new SVG.ColorMatrixEffect(t, e)) }, convolveMatrix: function (t) { return this.put(new SVG.ConvolveMatrixEffect(t)) }, componentTransfer: function (t) { return this.put(new SVG.ComponentTransferEffect(t)) }, composite: function (t, e, i) { return this.put(new SVG.CompositeEffect(t, e, i)) }, flood: function (t, e) { return this.put(new SVG.FloodEffect(t, e)) }, offset: function (t, e) { return this.put(new SVG.OffsetEffect(t, e)) }, image: function (t) { return this.put(new SVG.ImageEffect(t)) }, merge: function () { var t = [void 0]; for (var e in arguments) t.push(arguments[e]); return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, t))) }, gaussianBlur: function (t, e) { return this.put(new SVG.GaussianBlurEffect(t, e)) }, morphology: function (t, e) { return this.put(new SVG.MorphologyEffect(t, e)) }, diffuseLighting: function (t, e, i) { return this.put(new SVG.DiffuseLightingEffect(t, e, i)) }, displacementMap: function (t, e, i, a, s) { return this.put(new SVG.DisplacementMapEffect(t, e, i, a, s)) }, specularLighting: function (t, e, i, a) { return this.put(new SVG.SpecularLightingEffect(t, e, i, a)) }, tile: function () { return this.put(new SVG.TileEffect) }, turbulence: function (t, e, i, a, s) { return this.put(new SVG.TurbulenceEffect(t, e, i, a, s)) }, toString: function () { return "url(#" + this.attr("id") + ")" } } }), SVG.extend(SVG.Defs, { filter: function (t) { var e = this.put(new SVG.Filter); return "function" == typeof t && t.call(e, e), e } }), SVG.extend(SVG.Container, { filter: function (t) { return this.defs().filter(t) } }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, { filter: function (t) { return this.filterer = t instanceof SVG.Element ? t : this.doc().filter(t), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer }, unfilter: function (t) { return this.filterer && !0 === t && this.filterer.remove(), delete this.filterer, this.attr("filter", null) } }), SVG.Effect = SVG.invent({ create: function () { this.constructor.call(this) }, inherit: SVG.Element, extend: { in: function (t) { return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t) }, result: function (t) { return null == t ? this.attr("result") : this.attr("result", t) }, toString: function () { return this.result() } } }), SVG.ParentEffect = SVG.invent({ create: function () { this.constructor.call(this) }, inherit: SVG.Parent, extend: { in: function (t) { return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t) }, result: function (t) { return null == t ? this.attr("result") : this.attr("result", t) }, toString: function () { return this.result() } } }); var t = { blend: function (t, e) { return this.parent() && this.parent().blend(this, t, e) }, colorMatrix: function (t, e) { return this.parent() && this.parent().colorMatrix(t, e).in(this) }, convolveMatrix: function (t) { return this.parent() && this.parent().convolveMatrix(t).in(this) }, componentTransfer: function (t) { return this.parent() && this.parent().componentTransfer(t).in(this) }, composite: function (t, e) { return this.parent() && this.parent().composite(this, t, e) }, flood: function (t, e) { return this.parent() && this.parent().flood(t, e) }, offset: function (t, e) { return this.parent() && this.parent().offset(t, e).in(this) }, image: function (t) { return this.parent() && this.parent().image(t) }, merge: function () { return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments)) }, gaussianBlur: function (t, e) { return this.parent() && this.parent().gaussianBlur(t, e).in(this) }, morphology: function (t, e) { return this.parent() && this.parent().morphology(t, e).in(this) }, diffuseLighting: function (t, e, i) { return this.parent() && this.parent().diffuseLighting(t, e, i).in(this) }, displacementMap: function (t, e, i, a) { return this.parent() && this.parent().displacementMap(this, t, e, i, a) }, specularLighting: function (t, e, i, a) { return this.parent() && this.parent().specularLighting(t, e, i, a).in(this) }, tile: function () { return this.parent() && this.parent().tile().in(this) }, turbulence: function (t, e, i, a, s) { return this.parent() && this.parent().turbulence(t, e, i, a, s).in(this) } }; SVG.extend(SVG.Effect, t), SVG.extend(SVG.ParentEffect, t), SVG.ChildEffect = SVG.invent({ create: function () { this.constructor.call(this) }, inherit: SVG.Element, extend: { in: function (t) { this.attr("in", t) } } }); var e = { blend: function (t, e, i) { this.attr({ in: t, in2: e, mode: i || "normal" }) }, colorMatrix: function (t, e) { "matrix" == t && (e = s(e)), this.attr({ type: t, values: void 0 === e ? null : e }) }, convolveMatrix: function (t) { t = s(t), this.attr({ order: Math.sqrt(t.split(" ").length), kernelMatrix: t }) }, composite: function (t, e, i) { this.attr({ in: t, in2: e, operator: i }) }, flood: function (t, e) { this.attr("flood-color", t), null != e && this.attr("flood-opacity", e) }, offset: function (t, e) { this.attr({ dx: t, dy: e }) }, image: function (t) { this.attr("href", t, SVG.xlink) }, displacementMap: function (t, e, i, a, s) { this.attr({ in: t, in2: e, scale: i, xChannelSelector: a, yChannelSelector: s }) }, gaussianBlur: function (t, e) { null != t || null != e ? this.attr("stdDeviation", r(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0") }, morphology: function (t, e) { this.attr({ operator: t, radius: e }) }, tile: function () { }, turbulence: function (t, e, i, a, s) { this.attr({ numOctaves: e, seed: i, stitchTiles: a, baseFrequency: t, type: s }) } }, i = { merge: function () { var t; if (arguments[0] instanceof SVG.Set) { var e = this; arguments[0].each((function (t) { this instanceof SVG.MergeNode ? e.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && e.put(new SVG.MergeNode(this)) })) } else { t = Array.isArray(arguments[0]) ? arguments[0] : arguments; for (var i = 0; i < t.length; i++)t[i] instanceof SVG.MergeNode ? this.put(t[i]) : this.put(new SVG.MergeNode(t[i])) } }, componentTransfer: function (t) { if (this.rgb = new SVG.Set, ["r", "g", "b", "a"].forEach(function (t) { this[t] = new (SVG["Func" + t.toUpperCase()])("identity"), this.rgb.add(this[t]), this.node.appendChild(this[t].node) }.bind(this)), t) for (var e in t.rgb && (["r", "g", "b"].forEach(function (e) { this[e].attr(t.rgb) }.bind(this)), delete t.rgb), t) this[e].attr(t[e]) }, diffuseLighting: function (t, e, i) { this.attr({ surfaceScale: t, diffuseConstant: e, kernelUnitLength: i }) }, specularLighting: function (t, e, i, a) { this.attr({ surfaceScale: t, diffuseConstant: e, specularExponent: i, kernelUnitLength: a }) } }, a = { distantLight: function (t, e) { this.attr({ azimuth: t, elevation: e }) }, pointLight: function (t, e, i) { this.attr({ x: t, y: e, z: i }) }, spotLight: function (t, e, i, a, s, r) { this.attr({ x: t, y: e, z: i, pointsAtX: a, pointsAtY: s, pointsAtZ: r }) }, mergeNode: function (t) { this.attr("in", t) } }; function s(t) { return Array.isArray(t) && (t = new SVG.Array(t)), t.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ") } function r(t) { if (!Array.isArray(t)) return t; for (var e = 0, i = t.length, a = []; e < i; e++)a.push(t[e]); return a.join(" ") } function n() { var t = function () { }; for (var e in "function" == typeof arguments[arguments.length - 1] && (t = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments) for (var i in arguments[e]) t(arguments[e][i], i, arguments[e]) } ["r", "g", "b", "a"].forEach((function (t) { a["Func" + t.toUpperCase()] = function (t) { switch (this.attr("type", t), t) { case "table": this.attr("tableValues", arguments[1]); break; case "linear": this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]); break; case "gamma": this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2]) } } })), n(e, (function (t, e) { var i = e.charAt(0).toUpperCase() + e.slice(1); SVG[i + "Effect"] = SVG.invent({ create: function () { this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out") }, inherit: SVG.Effect, extend: {} }) })), n(i, (function (t, e) { var i = e.charAt(0).toUpperCase() + e.slice(1); SVG[i + "Effect"] = SVG.invent({ create: function () { this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out") }, inherit: SVG.ParentEffect, extend: {} }) })), n(a, (function (t, e) { var i = e.charAt(0).toUpperCase() + e.slice(1); SVG[i] = SVG.invent({ create: function () { this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments) }, inherit: SVG.ChildEffect, extend: {} }) })), SVG.extend(SVG.MergeEffect, { in: function (t) { return t instanceof SVG.MergeNode ? this.add(t, 0) : this.add(new SVG.MergeNode(t), 0), this } }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, { in2: function (t) { return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", t) } }), SVG.filter = { sepiatone: [.343, .669, .119, 0, 0, .249, .626, .13, 0, 0, .172, .334, .111, 0, 0, 0, 0, 0, 1, 0] } }.call(void 0), function () { function t(t, s, r, n, o, l, h) { for (var c = t.slice(s, r || h), d = n.slice(o, l || h), g = 0, u = { pos: [0, 0], start: [0, 0] }, f = { pos: [0, 0], start: [0, 0] }; ;) { if (c[g] = e.call(u, c[g]), d[g] = e.call(f, d[g]), c[g][0] != d[g][0] || "M" == c[g][0] || "A" == c[g][0] && (c[g][4] != d[g][4] || c[g][5] != d[g][5]) ? (Array.prototype.splice.apply(c, [g, 1].concat(a.call(u, c[g]))), Array.prototype.splice.apply(d, [g, 1].concat(a.call(f, d[g])))) : (c[g] = i.call(u, c[g]), d[g] = i.call(f, d[g])), ++g == c.length && g == d.length) break; g == c.length && c.push(["C", u.pos[0], u.pos[1], u.pos[0], u.pos[1], u.pos[0], u.pos[1]]), g == d.length && d.push(["C", f.pos[0], f.pos[1], f.pos[0], f.pos[1], f.pos[0], f.pos[1]]) } return { start: c, dest: d } } function e(t) { switch (t[0]) { case "z": case "Z": t[0] = "L", t[1] = this.start[0], t[2] = this.start[1]; break; case "H": t[0] = "L", t[2] = this.pos[1]; break; case "V": t[0] = "L", t[2] = t[1], t[1] = this.pos[0]; break; case "T": t[0] = "Q", t[3] = t[1], t[4] = t[2], t[1] = this.reflection[1], t[2] = this.reflection[0]; break; case "S": t[0] = "C", t[6] = t[4], t[5] = t[3], t[4] = t[2], t[3] = t[1], t[2] = this.reflection[1], t[1] = this.reflection[0] }return t } function i(t) { var e = t.length; return this.pos = [t[e - 2], t[e - 1]], -1 != "SCQT".indexOf(t[0]) && (this.reflection = [2 * this.pos[0] - t[e - 4], 2 * this.pos[1] - t[e - 3]]), t } function a(t) { var e = [t]; switch (t[0]) { case "M": return this.pos = this.start = [t[1], t[2]], e; case "L": t[5] = t[3] = t[1], t[6] = t[4] = t[2], t[1] = this.pos[0], t[2] = this.pos[1]; break; case "Q": t[6] = t[4], t[5] = t[3], t[4] = 1 * t[4] / 3 + 2 * t[2] / 3, t[3] = 1 * t[3] / 3 + 2 * t[1] / 3, t[2] = 1 * this.pos[1] / 3 + 2 * t[2] / 3, t[1] = 1 * this.pos[0] / 3 + 2 * t[1] / 3; break; case "A": t = (e = function (t, e) { var i, a, s, r, n, o, l, h, c, d, g, u, f, p, x, b, m, v, y, w, k, A, S, C, L, P, T = Math.abs(e[1]), z = Math.abs(e[2]), I = e[3] % 360, M = e[4], E = e[5], X = e[6], Y = e[7], F = new SVG.Point(t), R = new SVG.Point(X, Y), D = []; if (0 === T || 0 === z || F.x === R.x && F.y === R.y) return [["C", F.x, F.y, R.x, R.y, R.x, R.y]]; i = new SVG.Point((F.x - R.x) / 2, (F.y - R.y) / 2).transform((new SVG.Matrix).rotate(I)), (a = i.x * i.x / (T * T) + i.y * i.y / (z * z)) > 1 && (T *= a = Math.sqrt(a), z *= a); s = (new SVG.Matrix).rotate(I).scale(1 / T, 1 / z).rotate(-I), F = F.transform(s), R = R.transform(s), r = [R.x - F.x, R.y - F.y], o = r[0] * r[0] + r[1] * r[1], n = Math.sqrt(o), r[0] /= n, r[1] /= n, l = o < 4 ? Math.sqrt(1 - o / 4) : 0, M === E && (l *= -1); h = new SVG.Point((R.x + F.x) / 2 + l * -r[1], (R.y + F.y) / 2 + l * r[0]), c = new SVG.Point(F.x - h.x, F.y - h.y), d = new SVG.Point(R.x - h.x, R.y - h.y), g = Math.acos(c.x / Math.sqrt(c.x * c.x + c.y * c.y)), c.y < 0 && (g *= -1); u = Math.acos(d.x / Math.sqrt(d.x * d.x + d.y * d.y)), d.y < 0 && (u *= -1); E && g > u && (u += 2 * Math.PI); !E && g < u && (u -= 2 * Math.PI); for (p = Math.ceil(2 * Math.abs(g - u) / Math.PI), b = [], m = g, f = (u - g) / p, x = 4 * Math.tan(f / 4) / 3, k = 0; k <= p; k++)y = Math.cos(m), v = Math.sin(m), w = new SVG.Point(h.x + y, h.y + v), b[k] = [new SVG.Point(w.x + x * v, w.y - x * y), w, new SVG.Point(w.x - x * v, w.y + x * y)], m += f; for (b[0][0] = b[0][1].clone(), b[b.length - 1][2] = b[b.length - 1][1].clone(), s = (new SVG.Matrix).rotate(I).scale(T, z).rotate(-I), k = 0, A = b.length; k < A; k++)b[k][0] = b[k][0].transform(s), b[k][1] = b[k][1].transform(s), b[k][2] = b[k][2].transform(s); for (k = 1, A = b.length; k < A; k++)S = (w = b[k - 1][2]).x, C = w.y, L = (w = b[k][0]).x, P = w.y, X = (w = b[k][1]).x, Y = w.y, D.push(["C", S, C, L, P, X, Y]); return D }(this.pos, t))[0] }return t[0] = "C", this.pos = [t[5], t[6]], this.reflection = [2 * t[5] - t[3], 2 * t[6] - t[4]], e } function s(t, e) { if (!1 === e) return !1; for (var i = e, a = t.length; i < a; ++i)if ("M" == t[i][0]) return i; return !1 } SVG.extend(SVG.PathArray, { morph: function (e) { for (var i = this.value, a = this.parse(e), r = 0, n = 0, o = !1, l = !1; !1 !== r || !1 !== n;) { var h; o = s(i, !1 !== r && r + 1), l = s(a, !1 !== n && n + 1), !1 === r && (r = 0 == (h = new SVG.PathArray(c.start).bbox()).height || 0 == h.width ? i.push(i[0]) - 1 : i.push(["M", h.x + h.width / 2, h.y + h.height / 2]) - 1), !1 === n && (n = 0 == (h = new SVG.PathArray(c.dest).bbox()).height || 0 == h.width ? a.push(a[0]) - 1 : a.push(["M", h.x + h.width / 2, h.y + h.height / 2]) - 1); var c = t(i, r, o, a, n, l); i = i.slice(0, r).concat(c.start, !1 === o ? [] : i.slice(o)), a = a.slice(0, n).concat(c.dest, !1 === l ? [] : a.slice(l)), r = !1 !== o && r + c.start.length, n = !1 !== l && n + c.dest.length } return this.value = i, this.destination = new SVG.PathArray, this.destination.value = a, this } }) }(),
		/*! svg.draggable.js - v2.2.2 - 2019-01-08
		  * https://github.com/svgdotjs/svg.draggable.js
		  * Copyright (c) 2019 Wout Fierens; Licensed MIT */
		function () { function t(t) { t.remember("_draggable", this), this.el = t } t.prototype.init = function (t, e) { var i = this; this.constraint = t, this.value = e, this.el.on("mousedown.drag", (function (t) { i.start(t) })), this.el.on("touchstart.drag", (function (t) { i.start(t) })) }, t.prototype.transformPoint = function (t, e) { var i = (t = t || window.event).changedTouches && t.changedTouches[0] || t; return this.p.x = i.clientX - (e || 0), this.p.y = i.clientY, this.p.matrixTransform(this.m) }, t.prototype.getBBox = function () { var t = this.el.bbox(); return this.el instanceof SVG.Nested && (t = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t.x = this.el.x(), t.y = this.el.y()), t }, t.prototype.start = function (t) { if ("click" != t.type && "mousedown" != t.type && "mousemove" != t.type || 1 == (t.which || t.buttons)) { var e = this; if (this.el.fire("beforedrag", { event: t, handler: this }), !this.el.event().defaultPrevented) { t.preventDefault(), t.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse(); var i, a = this.getBBox(); if (this.el instanceof SVG.Text) switch (i = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) { case "middle": i /= 2; break; case "start": i = 0 }this.startPoints = { point: this.transformPoint(t, i), box: a, transform: this.el.transform() }, SVG.on(window, "mousemove.drag", (function (t) { e.drag(t) })), SVG.on(window, "touchmove.drag", (function (t) { e.drag(t) })), SVG.on(window, "mouseup.drag", (function (t) { e.end(t) })), SVG.on(window, "touchend.drag", (function (t) { e.end(t) })), this.el.fire("dragstart", { event: t, p: this.startPoints.point, m: this.m, handler: this }) } } }, t.prototype.drag = function (t) { var e = this.getBBox(), i = this.transformPoint(t), a = this.startPoints.box.x + i.x - this.startPoints.point.x, s = this.startPoints.box.y + i.y - this.startPoints.point.y, r = this.constraint, n = i.x - this.startPoints.point.x, o = i.y - this.startPoints.point.y; if (this.el.fire("dragmove", { event: t, p: i, m: this.m, handler: this }), this.el.event().defaultPrevented) return i; if ("function" == typeof r) { var l = r.call(this.el, a, s, this.m); "boolean" == typeof l && (l = { x: l, y: l }), !0 === l.x ? this.el.x(a) : !1 !== l.x && this.el.x(l.x), !0 === l.y ? this.el.y(s) : !1 !== l.y && this.el.y(l.y) } else "object" == typeof r && (null != r.minX && a < r.minX ? n = (a = r.minX) - this.startPoints.box.x : null != r.maxX && a > r.maxX - e.width && (n = (a = r.maxX - e.width) - this.startPoints.box.x), null != r.minY && s < r.minY ? o = (s = r.minY) - this.startPoints.box.y : null != r.maxY && s > r.maxY - e.height && (o = (s = r.maxY - e.height) - this.startPoints.box.y), null != r.snapToGrid && (a -= a % r.snapToGrid, s -= s % r.snapToGrid, n -= n % r.snapToGrid, o -= o % r.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({ x: n, y: o }, !0) : this.el.move(a, s)); return i }, t.prototype.end = function (t) { var e = this.drag(t); this.el.fire("dragend", { event: t, p: e, m: this.m, handler: this }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag") }, SVG.extend(SVG.Element, { draggable: function (e, i) { "function" != typeof e && "object" != typeof e || (i = e, e = !0); var a = this.remember("_draggable") || new t(this); return (e = void 0 === e || e) ? a.init(i || {}, e) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this } }) }.call(void 0), function () { function t(t) { this.el = t, t.remember("_selectHandler", this), this.pointSelection = { isSelected: !1 }, this.rectSelection = { isSelected: !1 }, this.pointsList = { lt: [0, 0], rt: ["width", 0], rb: ["width", "height"], lb: [0, "height"], t: ["width", 0], r: ["width", "height"], b: ["width", "height"], l: [0, "height"] }, this.pointCoord = function (t, e, i) { var a = "string" != typeof t ? t : e[t]; return i ? a / 2 : a }, this.pointCoords = function (t, e) { var i = this.pointsList[t]; return { x: this.pointCoord(i[0], e, "t" === t || "b" === t), y: this.pointCoord(i[1], e, "r" === t || "l" === t) } } } t.prototype.init = function (t, e) { var i = this.el.bbox(); this.options = {}; var a = this.el.selectize.defaults.points; for (var s in this.el.selectize.defaults) this.options[s] = this.el.selectize.defaults[s], void 0 !== e[s] && (this.options[s] = e[s]); var r = ["points", "pointsExclude"]; for (var s in r) { var n = this.options[r[s]]; "string" == typeof n ? n = n.length > 0 ? n.split(/\s*,\s*/i) : [] : "boolean" == typeof n && "points" === r[s] && (n = n ? a : []), this.options[r[s]] = n } this.options.points = [a, this.options.points].reduce((function (t, e) { return t.filter((function (t) { return e.indexOf(t) > -1 })) })), this.options.points = [this.options.points, this.options.pointsExclude].reduce((function (t, e) { return t.filter((function (t) { return e.indexOf(t) < 0 })) })), this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)), this.options.deepSelect && -1 !== ["line", "polyline", "polygon"].indexOf(this.el.type) ? this.selectPoints(t) : this.selectRect(t), this.observe(), this.cleanup() }, t.prototype.selectPoints = function (t) { return this.pointSelection.isSelected = t, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawPoints()), this }, t.prototype.getPointArray = function () { var t = this.el.bbox(); return this.el.array().valueOf().map((function (e) { return [e[0] - t.x, e[1] - t.y] })) }, t.prototype.drawPoints = function () { for (var t = this, e = this.getPointArray(), i = 0, a = e.length; i < a; ++i) { var s = function (e) { return function (i) { (i = i || window.event).preventDefault ? i.preventDefault() : i.returnValue = !1, i.stopPropagation(); var a = i.pageX || i.touches[0].pageX, s = i.pageY || i.touches[0].pageY; t.el.fire("point", { x: a, y: s, i: e, event: i }) } }(i), r = this.drawPoint(e[i][0], e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", s).on("mousedown", s); this.pointSelection.set.add(r) } }, t.prototype.drawPoint = function (t, e) { var i = this.options.pointType; switch (i) { case "circle": return this.drawCircle(t, e); case "rect": return this.drawRect(t, e); default: if ("function" == typeof i) return i.call(this, t, e); throw new Error("Unknown " + i + " point type!") } }, t.prototype.drawCircle = function (t, e) { return this.nested.circle(this.options.pointSize).center(t, e) }, t.prototype.drawRect = function (t, e) { return this.nested.rect(this.options.pointSize, this.options.pointSize).center(t, e) }, t.prototype.updatePointSelection = function () { var t = this.getPointArray(); this.pointSelection.set.each((function (e) { this.cx() === t[e][0] && this.cy() === t[e][1] || this.center(t[e][0], t[e][1]) })) }, t.prototype.updateRectSelection = function () { var t = this, e = this.el.bbox(); if (this.rectSelection.set.get(0).attr({ width: e.width, height: e.height }), this.options.points.length && this.options.points.map((function (i, a) { var s = t.pointCoords(i, e); t.rectSelection.set.get(a + 1).center(s.x, s.y) })), this.options.rotationPoint) { var i = this.rectSelection.set.length(); this.rectSelection.set.get(i - 1).center(e.width / 2, 20) } }, t.prototype.selectRect = function (t) { var e = this, i = this.el.bbox(); function a(t) { return function (i) { (i = i || window.event).preventDefault ? i.preventDefault() : i.returnValue = !1, i.stopPropagation(); var a = i.pageX || i.touches[0].pageX, s = i.pageY || i.touches[0].pageY; e.el.fire(t, { x: a, y: s, event: i }) } } if (this.rectSelection.isSelected = t, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(i.width, i.height).addClass(this.options.classRect)), this.options.points.length && this.rectSelection.set.length() < 2) { this.options.points.map((function (t, s) { var r = e.pointCoords(t, i), n = e.drawPoint(r.x, r.y).attr("class", e.options.classPoints + "_" + t).on("mousedown", a(t)).on("touchstart", a(t)); e.rectSelection.set.add(n) })), this.rectSelection.set.each((function () { this.addClass(e.options.classPoints) })) } if (this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) { var s = function (t) { (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation(); var i = t.pageX || t.touches[0].pageX, a = t.pageY || t.touches[0].pageY; e.el.fire("rot", { x: i, y: a, event: t }) }, r = this.drawPoint(i.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", s).on("mousedown", s); this.rectSelection.set.add(r) } }, t.prototype.handler = function () { var t = this.el.bbox(); this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection() }, t.prototype.observe = function () { var t = this; if (MutationObserver) if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst || new MutationObserver((function () { t.handler() })), this.observerInst.observe(this.el.node, { attributes: !0 }); else try { this.observerInst.disconnect(), delete this.observerInst } catch (t) { } else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", (function () { t.handler() })) }, t.prototype.cleanup = function () { !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each((function () { this.remove() })), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each((function () { this.remove() })), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested) }, SVG.extend(SVG.Element, { selectize: function (e, i) { return "object" == typeof e && (i = e, e = !0), (this.remember("_selectHandler") || new t(this)).init(void 0 === e || e, i || {}), this } }), SVG.Element.prototype.selectize.defaults = { points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"], pointsExclude: [], classRect: "svg_select_boundingRect", classPoints: "svg_select_points", pointSize: 7, rotationPoint: !0, deepSelect: !1, pointType: "circle" } }(), function () { (function () { function t(t) { t.remember("_resizeHandler", this), this.el = t, this.parameters = {}, this.lastUpdateCall = null, this.p = t.doc().node.createSVGPoint() } t.prototype.transformPoint = function (t, e, i) { return this.p.x = t - (this.offset.x - window.pageXOffset), this.p.y = e - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i || this.m) }, t.prototype._extractPosition = function (t) { return { x: null != t.clientX ? t.clientX : t.touches[0].clientX, y: null != t.clientY ? t.clientY : t.touches[0].clientY } }, t.prototype.init = function (t) { var e = this; if (this.stop(), "stop" !== t) { for (var i in this.options = {}, this.el.resize.defaults) this.options[i] = this.el.resize.defaults[i], void 0 !== t[i] && (this.options[i] = t[i]); this.el.on("lt.resize", (function (t) { e.resize(t || window.event) })), this.el.on("rt.resize", (function (t) { e.resize(t || window.event) })), this.el.on("rb.resize", (function (t) { e.resize(t || window.event) })), this.el.on("lb.resize", (function (t) { e.resize(t || window.event) })), this.el.on("t.resize", (function (t) { e.resize(t || window.event) })), this.el.on("r.resize", (function (t) { e.resize(t || window.event) })), this.el.on("b.resize", (function (t) { e.resize(t || window.event) })), this.el.on("l.resize", (function (t) { e.resize(t || window.event) })), this.el.on("rot.resize", (function (t) { e.resize(t || window.event) })), this.el.on("point.resize", (function (t) { e.resize(t || window.event) })), this.update() } }, t.prototype.stop = function () { return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this }, t.prototype.resize = function (t) { var e = this; this.m = this.el.node.getScreenCTM().inverse(), this.offset = { x: window.pageXOffset, y: window.pageYOffset }; var i = this._extractPosition(t.detail.event); if (this.parameters = { type: this.el.type, p: this.transformPoint(i.x, i.y), x: t.detail.x, y: t.detail.y, box: this.el.bbox(), rotation: this.el.transform().rotation }, "text" === this.el.type && (this.parameters.fontSize = this.el.attr()["font-size"]), void 0 !== t.detail.i) { var a = this.el.array().valueOf(); this.parameters.i = t.detail.i, this.parameters.pointCoords = [a[t.detail.i][0], a[t.detail.i][1]] } switch (t.type) { case "lt": this.calc = function (t, e) { var i = this.snapToGrid(t, e); if (this.parameters.box.width - i[0] > 0 && this.parameters.box.height - i[1] > 0) { if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]); i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y + i[1]).size(this.parameters.box.width - i[0], this.parameters.box.height - i[1]) } }; break; case "rt": this.calc = function (t, e) { var i = this.snapToGrid(t, e, 2); if (this.parameters.box.width + i[0] > 0 && this.parameters.box.height - i[1] > 0) { if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]); i = this.checkAspectRatio(i, !0), this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).size(this.parameters.box.width + i[0], this.parameters.box.height - i[1]) } }; break; case "rb": this.calc = function (t, e) { var i = this.snapToGrid(t, e, 0); if (this.parameters.box.width + i[0] > 0 && this.parameters.box.height + i[1] > 0) { if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]); i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + i[0], this.parameters.box.height + i[1]) } }; break; case "lb": this.calc = function (t, e) { var i = this.snapToGrid(t, e, 1); if (this.parameters.box.width - i[0] > 0 && this.parameters.box.height + i[1] > 0) { if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]); i = this.checkAspectRatio(i, !0), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).size(this.parameters.box.width - i[0], this.parameters.box.height + i[1]) } }; break; case "t": this.calc = function (t, e) { var i = this.snapToGrid(t, e, 2); if (this.parameters.box.height - i[1] > 0) { if ("text" === this.parameters.type) return; this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).height(this.parameters.box.height - i[1]) } }; break; case "r": this.calc = function (t, e) { var i = this.snapToGrid(t, e, 0); if (this.parameters.box.width + i[0] > 0) { if ("text" === this.parameters.type) return; this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + i[0]) } }; break; case "b": this.calc = function (t, e) { var i = this.snapToGrid(t, e, 0); if (this.parameters.box.height + i[1] > 0) { if ("text" === this.parameters.type) return; this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + i[1]) } }; break; case "l": this.calc = function (t, e) { var i = this.snapToGrid(t, e, 1); if (this.parameters.box.width - i[0] > 0) { if ("text" === this.parameters.type) return; this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).width(this.parameters.box.width - i[0]) } }; break; case "rot": this.calc = function (t, e) { var i = t + this.parameters.p.x, a = e + this.parameters.p.y, s = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2), r = Math.atan2(a - this.parameters.box.y - this.parameters.box.height / 2, i - this.parameters.box.x - this.parameters.box.width / 2), n = this.parameters.rotation + 180 * (r - s) / Math.PI + this.options.snapToAngle / 2; this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(n - n % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy) }; break; case "point": this.calc = function (t, e) { var i = this.snapToGrid(t, e, this.parameters.pointCoords[0], this.parameters.pointCoords[1]), a = this.el.array().valueOf(); a[this.parameters.i][0] = this.parameters.pointCoords[0] + i[0], a[this.parameters.i][1] = this.parameters.pointCoords[1] + i[1], this.el.plot(a) } }this.el.fire("resizestart", { dx: this.parameters.x, dy: this.parameters.y, event: t }), SVG.on(window, "touchmove.resize", (function (t) { e.update(t || window.event) })), SVG.on(window, "touchend.resize", (function () { e.done() })), SVG.on(window, "mousemove.resize", (function (t) { e.update(t || window.event) })), SVG.on(window, "mouseup.resize", (function () { e.done() })) }, t.prototype.update = function (t) { if (t) { var e = this._extractPosition(t), i = this.transformPoint(e.x, e.y), a = i.x - this.parameters.p.x, s = i.y - this.parameters.p.y; this.lastUpdateCall = [a, s], this.calc(a, s), this.el.fire("resizing", { dx: a, dy: s, event: t }) } else this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1]) }, t.prototype.done = function () { this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone") }, t.prototype.snapToGrid = function (t, e, i, a) { var s; return void 0 !== a ? s = [(i + t) % this.options.snapToGrid, (a + e) % this.options.snapToGrid] : (i = null == i ? 3 : i, s = [(this.parameters.box.x + t + (1 & i ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid]), t < 0 && (s[0] -= this.options.snapToGrid), e < 0 && (s[1] -= this.options.snapToGrid), t -= Math.abs(s[0]) < this.options.snapToGrid / 2 ? s[0] : s[0] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e -= Math.abs(s[1]) < this.options.snapToGrid / 2 ? s[1] : s[1] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t, e, i, a) }, t.prototype.constraintToBox = function (t, e, i, a) { var s, r, n = this.options.constraint || {}; return void 0 !== a ? (s = i, r = a) : (s = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width), r = this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height)), void 0 !== n.minX && s + t < n.minX && (t = n.minX - s), void 0 !== n.maxX && s + t > n.maxX && (t = n.maxX - s), void 0 !== n.minY && r + e < n.minY && (e = n.minY - r), void 0 !== n.maxY && r + e > n.maxY && (e = n.maxY - r), [t, e] }, t.prototype.checkAspectRatio = function (t, e) { if (!this.options.saveAspectRatio) return t; var i = t.slice(), a = this.parameters.box.width / this.parameters.box.height, s = this.parameters.box.width + t[0], r = this.parameters.box.height - t[1], n = s / r; return n < a ? (i[1] = s / a - this.parameters.box.height, e && (i[1] = -i[1])) : n > a && (i[0] = this.parameters.box.width - r * a, e && (i[0] = -i[0])), i }, SVG.extend(SVG.Element, { resize: function (e) { return (this.remember("_resizeHandler") || new t(this)).init(e || {}), this } }), SVG.Element.prototype.resize.defaults = { snapToAngle: .1, snapToGrid: 1, constraint: {}, saveAspectRatio: !1 } }).call(this) }(); !function (t, e) { void 0 === e && (e = {}); var i = e.insertAt; if (t && "undefined" != typeof document) { var a = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style"); s.type = "text/css", "top" === i && a.firstChild ? a.insertBefore(s, a.firstChild) : a.appendChild(s), s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(document.createTextNode(t)) } }('.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n}\n\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.apexcharts-text tspan {\n  font-family: inherit;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, 0.8);\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #333;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-text-z-label:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0 !important;\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-candlestick {\n  padding: 4px 8px;\n}\n\n.apexcharts-tooltip-candlestick>div {\n  margin: 4px 0;\n}\n\n.apexcharts-tooltip-candlestick span.value {\n  font-weight: bold;\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px;\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777;\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-left: -6px;\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #ECEFF1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-top: -6px;\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1;\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none;\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_boundingRect, .svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n}\n.apexcharts-selection-rect + g .svg_select_boundingRect,\n.apexcharts-selection-rect + g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.apexcharts-selection-rect + g .svg_select_points_l,\n.apexcharts-selection-rect + g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2;\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon,\n.apexcharts-reset-icon,\n.apexcharts-pan-icon,\n.apexcharts-selection-icon,\n.apexcharts-menu-icon,\n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {\n  fill: #f3f4f5;\n}\n\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {\n  fill: #008FFB;\n}\n\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon,\n.apexcharts-menu-icon {\n  position: relative;\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px;\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-reset-icon,\n.apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008FFB;\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee;\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  }\n}\n\n.apexcharts-datalabel.apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabels,\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-gridline,\n.apexcharts-annotation-rect,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line,\n.apexcharts-zoom-rect,\n.apexcharts-toolbar svg,\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-radar-series path,\n.apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n/* Resize generated styles */\n\n@keyframes resizeanim {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.resize-triggers,\n.resize-triggers>div,\n.contract-trigger:before {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.resize-triggers>div {\n  background: #eee;\n  overflow: auto;\n}\n\n.contract-trigger:before {\n  width: 200%;\n  height: 200%;\n}'), function () { function t(t) { var e = t.__resizeTriggers__, i = e.firstElementChild, a = e.lastElementChild, s = i ? i.firstElementChild : null; a && (a.scrollLeft = a.scrollWidth, a.scrollTop = a.scrollHeight), s && (s.style.width = i.offsetWidth + 1 + "px", s.style.height = i.offsetHeight + 1 + "px"), i && (i.scrollLeft = i.scrollWidth, i.scrollTop = i.scrollHeight) } function e(e) { var i = this; t(this), this.__resizeRAF__ && r(this.__resizeRAF__), this.__resizeRAF__ = s((function () { (function (t) { return t.offsetWidth != t.__resizeLast__.width || t.offsetHeight != t.__resizeLast__.height })(i) && (i.__resizeLast__.width = i.offsetWidth, i.__resizeLast__.height = i.offsetHeight, i.__resizeListeners__.forEach((function (t) { t.call(e) }))) })) } var i, a, s = (i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (t) { return window.setTimeout(t, 20) }, function (t) { return i(t) }), r = (a = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout, function (t) { return a(t) }), n = !1, o = "animationstart", l = "Webkit Moz O ms".split(" "), h = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "), c = document.createElement("fakeelement"); if (void 0 !== c.style.animationName && (n = !0), !1 === n) for (var d = 0; d < l.length; d++)if (void 0 !== c.style[l[d] + "AnimationName"]) { o = h[d]; break } window.addResizeListener = function (i, a) { i.__resizeTriggers__ || ("static" == getComputedStyle(i).position && (i.style.position = "relative"), i.__resizeLast__ = {}, i.__resizeListeners__ = [], (i.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers", i.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', i.appendChild(i.__resizeTriggers__), t(i), i.addEventListener("scroll", e, !0), o && i.__resizeTriggers__.addEventListener(o, (function (e) { "resizeanim" == e.animationName && t(i) }))), i.__resizeListeners__.push(a) }, window.removeResizeListener = function (t, i) { t && (t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(i), 1), t.__resizeListeners__.length || (t.removeEventListener("scroll", e), t.__resizeTriggers__.parentNode && (t.__resizeTriggers__ = !t.removeChild(t.__resizeTriggers__)))) } }(), void 0 === window.Apex && (window.Apex = {}); var Yt = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "initModules", value: function () { this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], this.ctx.animations = new x(this.ctx), this.ctx.axes = new J(this.ctx), this.ctx.core = new Et(this.ctx.el, this.ctx), this.ctx.config = new D({}), this.ctx.data = new O(this.ctx), this.ctx.grid = new _(this.ctx), this.ctx.graphics = new b(this.ctx), this.ctx.coreUtils = new y(this.ctx), this.ctx.crosshairs = new Q(this.ctx), this.ctx.events = new Z(this.ctx), this.ctx.exports = new V(this.ctx), this.ctx.localization = new $(this.ctx), this.ctx.options = new S, this.ctx.responsive = new K(this.ctx), this.ctx.series = new M(this.ctx), this.ctx.theme = new tt(this.ctx), this.ctx.formatters = new W(this.ctx), this.ctx.titleSubtitle = new et(this.ctx), this.ctx.legend = new lt(this.ctx), this.ctx.toolbar = new ht(this.ctx), this.ctx.dimensions = new nt(this.ctx), this.ctx.updateHelpers = new Xt(this.ctx), this.ctx.zoomPanSelection = new ct(this.ctx), this.ctx.w.globals.tooltip = new bt(this.ctx) } }]), t }(), Ft = function () { function t(i) { e(this, t), this.ctx = i, this.w = i.w } return a(t, [{ key: "clear", value: function (t) { var e = t.isUpdating; this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({ isUpdating: e }) } }, { key: "killSVG", value: function (t) { t.each((function (t, e) { this.removeClass("*"), this.off(), this.stop() }), !0), t.ungroup(), t.clear() } }, { key: "clearDomElements", value: function (t) { var e = this, i = t.isUpdating, a = this.w.globals.dom.Paper.node; a.parentNode && a.parentNode.parentNode && !i && (a.parentNode.parentNode.style.minHeight = "unset"); var s = this.w.globals.dom.baseEl; s && this.ctx.eventList.forEach((function (t) { s.removeEventListener(t, e.ctx.events.documentEvent) })); var r = this.w.globals.dom; if (null !== this.ctx.el) for (; this.ctx.el.firstChild;)this.ctx.el.removeChild(this.ctx.el.firstChild); this.killSVG(r.Paper), r.Paper.remove(), r.elWrap = null, r.elGraphical = null, r.elAnnotations = null, r.elLegendWrap = null, r.baseEl = null, r.elGridRect = null, r.elGridRectMask = null, r.elGridRectMarkerMask = null, r.elDefs = null } }]), t }(); return function () { function t(i, a) { e(this, t), this.opts = a, this.ctx = this, this.w = new N(a).init(), this.el = i, this.w.globals.cuid = f.randomId(), this.w.globals.chartID = this.w.config.chart.id ? f.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new Yt(this).initModules(), this.create = f.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this) } return a(t, [{ key: "render", value: function () { var t = this; return new Promise((function (e, i) { if (null !== t.el) { void 0 === Apex._chartInstances && (Apex._chartInstances = []), t.w.config.chart.id && Apex._chartInstances.push({ id: t.w.globals.chartID, group: t.w.config.chart.group, chart: t }), t.setLocale(t.w.config.chart.defaultLocale); var a = t.w.config.chart.events.beforeMount; "function" == typeof a && a(t, t.w), t.events.fireEvent("beforeMount", [t, t.w]), window.addEventListener("resize", t.windowResizeHandler), window.addResizeListener(t.el.parentNode, t.parentResizeHandler); var s = t.create(t.w.config.series, {}); if (!s) return e(t); t.mount(s).then((function () { "function" == typeof t.w.config.chart.events.mounted && t.w.config.chart.events.mounted(t, t.w), t.events.fireEvent("mounted", [t, t.w]), e(s) })).catch((function (t) { i(t) })) } else i(new Error("Element not found")) })) } }, { key: "create", value: function (t, e) { var i = this.w; new Yt(this).initModules(); var a = this.w.globals; (a.noData = !1, a.animationEnded = !1, this.responsive.checkResponsiveConfig(e), i.config.xaxis.convertedCatToNumeric) && new R(i.config).convertCatToNumericXaxis(i.config, this.ctx); if (null === this.el) return a.animationEnded = !0, null; if (this.core.setupElements(), "treemap" === i.config.chart.type && (i.config.grid.show = !1, i.config.yaxis[0].show = !1), 0 === a.svgWidth) return a.animationEnded = !0, null; var s = y.checkComboSeries(t); a.comboCharts = s.comboCharts, a.comboBarCount = s.comboBarCount; var r = t.every((function (t) { return t.data && 0 === t.data.length })); (0 === t.length || r) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(t), this.theme.init(), new P(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), a.noData && a.collapsedSeries.length !== a.series.length && !i.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), a.axisCharts && (this.core.coreCalculations(), "category" !== i.config.xaxis.type && this.formatters.setLabelFormatters()), this.formatters.heatmapLabelFormatters(), this.dimensions.plotCoords(); var n = this.core.xySettings(); this.grid.createGridMask(); var o = this.core.plotChartType(t, n), l = new z(this); l.bringForward(), i.config.dataLabels.background.enabled && l.dataLabelsBackground(), this.core.shiftGraphPosition(); var h = { plot: { left: i.globals.translateX, top: i.globals.translateY, width: i.globals.gridWidth, height: i.globals.gridHeight } }; return { elGraph: o, xyRatios: n, elInner: i.globals.dom.elGraphical, dimensions: h } } }, { key: "mount", value: function () { var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = this, a = i.w; return new Promise((function (s, r) { if (null === i.el) return r(new Error("Not enough data to display or target element not found")); (null === e || a.globals.allSeriesCollapsed) && i.series.handleNoData(), "treemap" !== a.config.chart.type && i.axes.drawAxis(a.config.chart.type, e.xyRatios), i.grid = new _(i); var n = i.grid.drawGrid(); i.annotations = new C(i), i.annotations.drawImageAnnos(), i.annotations.drawTextAnnos(), "back" === a.config.grid.position && n && a.globals.dom.elGraphical.add(n.el); var o = new G(t.ctx), l = new q(t.ctx); if (null !== n && (o.xAxisLabelCorrections(n.xAxisTickWidth), l.setYAxisTextAlignments()), "back" === a.config.annotations.position && (a.globals.dom.Paper.add(a.globals.dom.elAnnotations), i.annotations.drawAxesAnnotations()), Array.isArray(e.elGraph)) for (var h = 0; h < e.elGraph.length; h++)a.globals.dom.elGraphical.add(e.elGraph[h]); else a.globals.dom.elGraphical.add(e.elGraph); if ("front" === a.config.grid.position && n && a.globals.dom.elGraphical.add(n.el), "front" === a.config.xaxis.crosshairs.position && i.crosshairs.drawXCrosshairs(), "front" === a.config.yaxis[0].crosshairs.position && i.crosshairs.drawYCrosshairs(), "front" === a.config.annotations.position && (a.globals.dom.Paper.add(a.globals.dom.elAnnotations), i.annotations.drawAxesAnnotations()), !a.globals.noData) { if (a.config.tooltip.enabled && !a.globals.noData && i.w.globals.tooltip.drawTooltip(e.xyRatios), a.globals.axisCharts && (a.globals.isXNumeric || a.config.xaxis.convertedCatToNumeric || a.globals.isTimelineBar)) (a.config.chart.zoom.enabled || a.config.chart.selection && a.config.chart.selection.enabled || a.config.chart.pan && a.config.chart.pan.enabled) && i.zoomPanSelection.init({ xyRatios: e.xyRatios }); else { var c = a.config.chart.toolbar.tools;["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach((function (t) { c[t] = !1 })) } a.config.chart.toolbar.show && !a.globals.allSeriesCollapsed && i.toolbar.createToolbar() } a.globals.memory.methodsToExec.length > 0 && a.globals.memory.methodsToExec.forEach((function (t) { t.method(t.params, !1, t.context) })), a.globals.axisCharts || a.globals.noData || i.core.resizeNonAxisCharts(), s(i) })) } }, { key: "destroy", value: function () { window.removeEventListener("resize", this.windowResizeHandler), window.removeResizeListener(this.el.parentNode, this.parentResizeHandler); var t = this.w.config.chart.id; t && Apex._chartInstances.forEach((function (e, i) { e.id === f.escapeString(t) && Apex._chartInstances.splice(i, 1) })), new Ft(this.ctx).clear({ isUpdating: !1 }) } }, { key: "updateOptions", value: function (t) { var e = this, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], n = this.w; return n.globals.selection = void 0, t.series && (this.series.resetSeries(!1, !0, !1), t.series.length && t.series[0].data && (t.series = t.series.map((function (t, i) { return e.updateHelpers._extendSeries(t, i) }))), this.updateHelpers.revertDefaultAxisMinMax()), t.xaxis && (t = this.updateHelpers.forceXAxisUpdate(t)), t.yaxis && (t = this.updateHelpers.forceYAxisUpdate(t)), n.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), t.theme && (t = this.theme.updateThemeOptions(t)), this.updateHelpers._updateOptions(t, i, a, s, r) } }, { key: "updateSeries", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]; return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t, e, i) } }, { key: "appendSeries", value: function (t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a = this.w.config.series.slice(); return a.push(t), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(a, e, i) } }, { key: "appendData", value: function (t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = this; i.w.globals.dataChanged = !0, i.series.getPreviousPaths(); for (var a = i.w.config.series.slice(), s = 0; s < a.length; s++)if (null !== t[s] && void 0 !== t[s]) for (var r = 0; r < t[s].data.length; r++)a[s].data.push(t[s].data[r]); return i.w.config.series = a, e && (i.w.globals.initialSeries = f.clone(i.w.config.series)), this.update() } }, { key: "update", value: function (t) { var e = this; return new Promise((function (i, a) { new Ft(e.ctx).clear({ isUpdating: !0 }); var s = e.create(e.w.config.series, t); if (!s) return i(e); e.mount(s).then((function () { "function" == typeof e.w.config.chart.events.updated && e.w.config.chart.events.updated(e, e.w), e.events.fireEvent("updated", [e, e.w]), e.w.globals.isDirty = !0, i(e) })).catch((function (t) { a(t) })) })) } }, { key: "getSyncedCharts", value: function () { var t = this.getGroupedCharts(), e = [this]; return t.length && (e = [], t.forEach((function (t) { e.push(t) }))), e } }, { key: "getGroupedCharts", value: function () { var t = this; return Apex._chartInstances.filter((function (t) { if (t.group) return !0 })).map((function (e) { return t.w.config.chart.group === e.group ? e.chart : t })) } }, { key: "toggleSeries", value: function (t) { return this.series.toggleSeries(t) } }, { key: "showSeries", value: function (t) { this.series.showSeries(t) } }, { key: "hideSeries", value: function (t) { this.series.hideSeries(t) } }, { key: "resetSeries", value: function () { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; this.series.resetSeries(t, e) } }, { key: "addEventListener", value: function (t, e) { this.events.addEventListener(t, e) } }, { key: "removeEventListener", value: function (t, e) { this.events.removeEventListener(t, e) } }, { key: "addXaxisAnnotation", value: function (t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a = this; i && (a = i), a.annotations.addXaxisAnnotationExternal(t, e, a) } }, { key: "addYaxisAnnotation", value: function (t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a = this; i && (a = i), a.annotations.addYaxisAnnotationExternal(t, e, a) } }, { key: "addPointAnnotation", value: function (t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a = this; i && (a = i), a.annotations.addPointAnnotationExternal(t, e, a) } }, { key: "clearAnnotations", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, e = this; t && (e = t), e.annotations.clearAnnotations(e) } }, { key: "removeAnnotation", value: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i = this; e && (i = e), i.annotations.removeAnnotation(i, t) } }, { key: "getChartArea", value: function () { return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner") } }, { key: "getSeriesTotalXRange", value: function (t, e) { return this.coreUtils.getSeriesTotalsXRange(t, e) } }, { key: "getHighestValueInSeries", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = new U(this.ctx); return e.getMinYMaxY(t).highestY } }, { key: "getLowestValueInSeries", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = new U(this.ctx); return e.getMinYMaxY(t).lowestY } }, { key: "getSeriesTotal", value: function () { return this.w.globals.seriesTotals } }, { key: "toggleDataPointSelection", value: function (t, e) { return this.updateHelpers.toggleDataPointSelection(t, e) } }, { key: "zoomX", value: function (t, e) { this.ctx.toolbar.zoomUpdateOptions(t, e) } }, { key: "setLocale", value: function (t) { this.localization.setCurrentLocaleValues(t) } }, { key: "dataURI", value: function () { return new V(this.ctx).dataURI() } }, { key: "paper", value: function () { return this.w.globals.dom.Paper } }, { key: "_parentResizeCallback", value: function () { !this.w.globals.noData && this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize() } }, { key: "_windowResize", value: function () { var t = this; clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout((function () { t.w.globals.resized = !0, t.w.globals.dataChanged = !1, t.ctx.update() }), 150) } }, { key: "_windowResizeHandler", value: function () { var t = this.w.config.chart.redrawOnWindowResize; "function" == typeof t && (t = t()), t && this._windowResize() } }], [{ key: "getChartByID", value: function (t) { var e = f.escapeString(t), i = Apex._chartInstances.filter((function (t) { return t.id === e }))[0]; return i && i.chart } }, { key: "initOnLoad", value: function () { for (var e = document.querySelectorAll("[data-apexcharts]"), i = 0; i < e.length; i++) { new t(e[i], JSON.parse(e[i].getAttribute("data-options"))).render() } } }, { key: "exec", value: function (t, e) { var i = this.getChartByID(t); if (i) { i.w.globals.isExecCalled = !0; var a = null; if (-1 !== i.publicMethods.indexOf(e)) { for (var s = arguments.length, r = new Array(s > 2 ? s - 2 : 0), n = 2; n < s; n++)r[n - 2] = arguments[n]; a = i[e].apply(i, r) } return a } } }, { key: "merge", value: function (t, e) { return f.extend(t, e) } }]), t }()
}));

!function (a) { "use strict"; a.sessionTimeout = function (b) { function c() { n || (a.ajax({ type: i.ajaxType, url: i.keepAliveUrl, data: i.ajaxData }), n = !0, setTimeout(function () { n = !1 }, i.keepAliveInterval)) } function d() { clearTimeout(g), (i.countdownMessage || i.countdownBar) && f("session", !0), "function" == typeof i.onStart && i.onStart(i), i.keepAlive && c(), g = setTimeout(function () { "function" != typeof i.onWarn ? a("#session-timeout-dialog").modal("show") : i.onWarn(i), e() }, i.warnAfter) } function e() { clearTimeout(g), a("#session-timeout-dialog").hasClass("in") || !i.countdownMessage && !i.countdownBar || f("dialog", !0), g = setTimeout(function () { "function" != typeof i.onRedir ? window.location = i.redirUrl : i.onRedir(i) }, i.redirAfter - i.warnAfter) } function f(b, c) { clearTimeout(j.timer), "dialog" === b && c ? j.timeLeft = Math.floor((i.redirAfter - i.warnAfter) / 1e3) : "session" === b && c && (j.timeLeft = Math.floor(i.redirAfter / 1e3)), i.countdownBar && "dialog" === b ? j.percentLeft = Math.floor(j.timeLeft / ((i.redirAfter - i.warnAfter) / 1e3) * 100) : i.countdownBar && "session" === b && (j.percentLeft = Math.floor(j.timeLeft / (i.redirAfter / 1e3) * 100)); var d = a(".countdown-holder"), e = j.timeLeft >= 0 ? j.timeLeft : 0; if (i.countdownSmart) { var g = Math.floor(e / 60), h = e % 60, k = g > 0 ? g + "m" : ""; k.length > 0 && (k += " "), k += h + "s", d.text(k) } else d.text(e + "s"); i.countdownBar && a(".countdown-bar").css("width", j.percentLeft + "%"), j.timeLeft = j.timeLeft - 1, j.timer = setTimeout(function () { f(b) }, 1e3) } var g, h = { title: "Your Session is About to Expire!", message: "Your session is about to expire.", logoutButton: "Logout", keepAliveButton: "Stay Connected", keepAliveUrl: "/keep-alive", ajaxType: "POST", ajaxData: "", redirUrl: "/timed-out", logoutUrl: "/log-out", warnAfter: 9e5, redirAfter: 12e5, keepAliveInterval: 5e3, keepAlive: !0, ignoreUserActivity: !1, onStart: !1, onWarn: !1, onRedir: !1, countdownMessage: !1, countdownBar: !1, countdownSmart: !1 }, i = h, j = {}; if (b && (i = a.extend(h, b)), i.warnAfter >= i.redirAfter) return console.error('Bootstrap-session-timeout plugin is miss-configured. Option "redirAfter" must be equal or greater than "warnAfter".'), !1; if ("function" != typeof i.onWarn) { var k = i.countdownMessage ? "<p>" + i.countdownMessage.replace(/{timer}/g, '<span class="countdown-holder"></span>') + "</p>" : "", l = i.countdownBar ? '<div class="progress">                   <div class="progress-bar progress-bar-striped countdown-bar active" role="progressbar" style="min-width: 15px; width: 100%;">                     <span class="countdown-holder"></span>                   </div>                 </div>' : ""; a("body").append('<div class="modal fade" id="session-timeout-dialog">               <div class="modal-dialog">                 <div class="modal-content">                   <div class="modal-header">                     <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>                     <h4 class="modal-title">' + i.title + '</h4>                   </div>                   <div class="modal-body">                     <p>' + i.message + "</p>                     " + k + "                     " + l + '                   </div>                   <div class="modal-footer">                     <button id="session-timeout-dialog-logout" type="button" class="btn btn-default">' + i.logoutButton + '</button>                     <button id="session-timeout-dialog-keepalive" type="button" class="btn btn-primary" data-dismiss="modal">' + i.keepAliveButton + "</button>                   </div>                 </div>               </div>              </div>"), a("#session-timeout-dialog-logout").on("click", function () { window.location = i.logoutUrl }), a("#session-timeout-dialog").on("hide.bs.modal", function () { d() }) } if (!i.ignoreUserActivity) { var m = [-1, -1]; a(document).on("keyup mouseup mousemove touchend touchmove", function (b) { if ("mousemove" === b.type) { if (b.clientX === m[0] && b.clientY === m[1]) return; m[0] = b.clientX, m[1] = b.clientY } d(), a("#session-timeout-dialog").length > 0 && a("#session-timeout-dialog").data("bs.modal") && a("#session-timeout-dialog").data("bs.modal").isShown && (a("#session-timeout-dialog").modal("hide"), a("body").removeClass("modal-open"), a("div.modal-backdrop").remove()) }) } var n = !1; d() } }(jQuery);
/*! Idle Timer v1.1.0 2016-03-21 | https://github.com/thorst/jquery-idletimer | (c) 2016 Paul Irish | Licensed MIT */
!function (a) { a.idleTimer = function (b, c) { var d; "object" == typeof b ? (d = b, b = null) : "number" == typeof b && (d = { timeout: b }, b = null), c = c || document, d = a.extend({ idle: !1, timeout: 3e4, events: "mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart touchmove MSPointerDown MSPointerMove" }, d); var e = a(c), f = e.data("idleTimerObj") || {}, g = function (b) { var d = a.data(c, "idleTimerObj") || {}; d.idle = !d.idle, d.olddate = +new Date; var e = a.Event((d.idle ? "idle" : "active") + ".idleTimer"); a(c).trigger(e, [c, a.extend({}, d), b]) }, h = function (b) { var d = a.data(c, "idleTimerObj") || {}; if (("storage" !== b.type || b.originalEvent.key === d.timerSyncId) && null == d.remaining) { if ("mousemove" === b.type) { if (b.pageX === d.pageX && b.pageY === d.pageY) return; if ("undefined" == typeof b.pageX && "undefined" == typeof b.pageY) return; var e = +new Date - d.olddate; if (200 > e) return } clearTimeout(d.tId), d.idle && g(b), d.lastActive = +new Date, d.pageX = b.pageX, d.pageY = b.pageY, "storage" !== b.type && d.timerSyncId && "undefined" != typeof localStorage && localStorage.setItem(d.timerSyncId, d.lastActive), d.tId = setTimeout(g, d.timeout) } }, i = function () { var b = a.data(c, "idleTimerObj") || {}; b.idle = b.idleBackup, b.olddate = +new Date, b.lastActive = b.olddate, b.remaining = null, clearTimeout(b.tId), b.idle || (b.tId = setTimeout(g, b.timeout)) }, j = function () { var b = a.data(c, "idleTimerObj") || {}; null == b.remaining && (b.remaining = b.timeout - (+new Date - b.olddate), clearTimeout(b.tId)) }, k = function () { var b = a.data(c, "idleTimerObj") || {}; null != b.remaining && (b.idle || (b.tId = setTimeout(g, b.remaining)), b.remaining = null) }, l = function () { var b = a.data(c, "idleTimerObj") || {}; clearTimeout(b.tId), e.removeData("idleTimerObj"), e.off("._idleTimer") }, m = function () { var b = a.data(c, "idleTimerObj") || {}; if (b.idle) return 0; if (null != b.remaining) return b.remaining; var d = b.timeout - (+new Date - b.lastActive); return 0 > d && (d = 0), d }; if (null === b && "undefined" != typeof f.idle) return i(), e; if (null === b); else { if (null !== b && "undefined" == typeof f.idle) return !1; if ("destroy" === b) return l(), e; if ("pause" === b) return j(), e; if ("resume" === b) return k(), e; if ("reset" === b) return i(), e; if ("getRemainingTime" === b) return m(); if ("getElapsedTime" === b) return +new Date - f.olddate; if ("getLastActiveTime" === b) return f.lastActive; if ("isIdle" === b) return f.idle } return e.on(a.trim((d.events + " ").split(" ").join("._idleTimer ")), function (a) { h(a) }), d.timerSyncId && a(window).bind("storage", h), f = a.extend({}, { olddate: +new Date, lastActive: +new Date, idle: d.idle, idleBackup: d.idle, timeout: d.timeout, remaining: null, timerSyncId: d.timerSyncId, tId: null, pageX: null, pageY: null }), f.idle || (f.tId = setTimeout(g, f.timeout)), a.data(c, "idleTimerObj", f), e }, a.fn.idleTimer = function (b) { return this[0] ? a.idleTimer(b, this[0]) : this } }(jQuery);


/*!
 * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(c,d){return function(){return d!==b&&a.fn.datepicker.deprecated(d),this[c].apply(this,arguments)}}function g(a){return a&&!isNaN(a.getTime())}function h(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function i(b){var c={};if(q[b]||(b=b.split("-")[0],q[b])){var d=q[b];return a.each(p,function(a,b){b in d&&(c[b]=d[b])}),c}}var j=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;c<d;c++)if(0<=this[c].valueOf()-b&&this[c].valueOf()-b<864e5)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new j;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),k=function(b,c){a.data(b,"datepicker",this),this._events=[],this._secondaryEvents=[],this._process_options(c),this.dates=new j,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=!!this.element.hasClass("date")&&this.element.find(".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"),this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=a(r.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.o.calendarWeeks&&this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(a,b){return Number(b)+1}),this._process_options({startDate:this._o.startDate,endDate:this._o.endDate,daysOfWeekDisabled:this.o.daysOfWeekDisabled,daysOfWeekHighlighted:this.o.daysOfWeekHighlighted,datesDisabled:this.o.datesDisabled}),this._allow_update=!1,this.setViewMode(this.o.startView),this._allow_update=!0,this.fillDow(),this.fillMonths(),this.update(),this.isInline&&this.show()};k.prototype={constructor:k,_resolveViewName:function(b){return a.each(r.viewModes,function(c,d){if(b===c||-1!==a.inArray(b,d.names))return b=c,!1}),b},_resolveDaysOfWeek:function(b){return a.isArray(b)||(b=b.split(/[,\s]*/)),a.map(b,Number)},_check_template:function(c){try{if(c===b||""===c)return!1;if((c.match(/[<>]/g)||[]).length<=0)return!0;return a(c).length>0}catch(a){return!1}},_process_options:function(b){this._o=a.extend({},this._o,b);var e=this.o=a.extend({},this._o),f=e.language;q[f]||(f=f.split("-")[0],q[f]||(f=o.language)),e.language=f,e.startView=this._resolveViewName(e.startView),e.minViewMode=this._resolveViewName(e.minViewMode),e.maxViewMode=this._resolveViewName(e.maxViewMode),e.startView=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,e.startView)),!0!==e.multidate&&(e.multidate=Number(e.multidate)||!1,!1!==e.multidate&&(e.multidate=Math.max(0,e.multidate))),e.multidateSeparator=String(e.multidateSeparator),e.weekStart%=7,e.weekEnd=(e.weekStart+6)%7;var g=r.parseFormat(e.format);e.startDate!==-1/0&&(e.startDate?e.startDate instanceof Date?e.startDate=this._local_to_utc(this._zero_time(e.startDate)):e.startDate=r.parseDate(e.startDate,g,e.language,e.assumeNearbyYear):e.startDate=-1/0),e.endDate!==1/0&&(e.endDate?e.endDate instanceof Date?e.endDate=this._local_to_utc(this._zero_time(e.endDate)):e.endDate=r.parseDate(e.endDate,g,e.language,e.assumeNearbyYear):e.endDate=1/0),e.daysOfWeekDisabled=this._resolveDaysOfWeek(e.daysOfWeekDisabled||[]),e.daysOfWeekHighlighted=this._resolveDaysOfWeek(e.daysOfWeekHighlighted||[]),e.datesDisabled=e.datesDisabled||[],a.isArray(e.datesDisabled)||(e.datesDisabled=e.datesDisabled.split(",")),e.datesDisabled=a.map(e.datesDisabled,function(a){return r.parseDate(a,g,e.language,e.assumeNearbyYear)});var h=String(e.orientation).toLowerCase().split(/\s+/g),i=e.orientation.toLowerCase();if(h=a.grep(h,function(a){return/^auto|left|right|top|bottom$/.test(a)}),e.orientation={x:"auto",y:"auto"},i&&"auto"!==i)if(1===h.length)switch(h[0]){case"top":case"bottom":e.orientation.y=h[0];break;case"left":case"right":e.orientation.x=h[0]}else i=a.grep(h,function(a){return/^left|right$/.test(a)}),e.orientation.x=i[0]||"auto",i=a.grep(h,function(a){return/^top|bottom$/.test(a)}),e.orientation.y=i[0]||"auto";else;if(e.defaultViewDate instanceof Date||"string"==typeof e.defaultViewDate)e.defaultViewDate=r.parseDate(e.defaultViewDate,g,e.language,e.assumeNearbyYear);else if(e.defaultViewDate){var j=e.defaultViewDate.year||(new Date).getFullYear(),k=e.defaultViewDate.month||0,l=e.defaultViewDate.day||1;e.defaultViewDate=c(j,k,l)}else e.defaultViewDate=d()},_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this),paste:a.proxy(this.paste,this)};!0===this.o.showOnFocus&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.inputField.length?this._events=[[this.inputField,b],[this.component,{click:a.proxy(this.show,this)}]]:this._events=[[this.element,{click:a.proxy(this.show,this),keydown:a.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":a.proxy(function(a){this.update(a.date)},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[this.picker,".prev, .next",{click:a.proxy(this.navArrowsClick,this)}],[this.picker,".day:not(.disabled)",{click:a.proxy(this.dayCellClick,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{"mousedown touchstart":a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,viewMode:this.viewMode,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return r.formatDate(c,b,this.o.language)},this)})},show:function(){if(!(this.inputField.is(":disabled")||this.inputField.prop("readonly")&&!1===this.o.enableOnReadonly))return this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.setViewMode(this.o.startView),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(b){var c;if(b.originalEvent.clipboardData&&b.originalEvent.clipboardData.types&&-1!==a.inArray("text/plain",b.originalEvent.clipboardData.types))c=b.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;c=window.clipboardData.getData("Text")}this.setDate(c),this.update(),b.preventDefault()},_utc_to_local:function(a){if(!a)return a;var b=new Date(a.getTime()+6e4*a.getTimezoneOffset());return b.getTimezoneOffset()!==a.getTimezoneOffset()&&(b=new Date(a.getTime()+6e4*b.getTimezoneOffset())),b},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&c(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate())},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return a!==b?new Date(a):null},clearDates:function(){this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.setDates.apply(this,a.map(b,this._utc_to_local)),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),remove:f("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),setValue:function(){var a=this.getFormattedDate();return this.inputField.val(a),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return r.formatDate(a,c,d)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this},setDaysOfWeekHighlighted:function(a){return this._process_options({daysOfWeekHighlighted:a}),this.update(),this},setDatesDisabled:function(a){return this._process_options({datesDisabled:a}),this.update(),this},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=a(this.o.container),e=d.width(),f="body"===this.o.container?a(document).scrollTop():d.scrollTop(),g=d.offset(),h=[0];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==Number(b)&&h.push(Number(b))});var i=Math.max.apply(Math,h)+this.o.zIndexOffset,j=this.component?this.component.parent().offset():this.element.offset(),k=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),l=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),m=j.left-g.left,n=j.top-g.top;"body"!==this.o.container&&(n+=f),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(m-=b-l)):j.left<0?(this.picker.addClass("datepicker-orient-left"),m-=j.left-10):m+b>e?(this.picker.addClass("datepicker-orient-right"),m+=l-b):this.o.rtl?this.picker.addClass("datepicker-orient-right"):this.picker.addClass("datepicker-orient-left");var o,p=this.o.orientation.y;if("auto"===p&&(o=-f+n-c,p=o<0?"bottom":"top"),this.picker.addClass("datepicker-orient-"+p),"top"===p?n-=c+parseInt(this.picker.css("padding-top")):n+=k,this.o.rtl){var q=e-(m+l);this.picker.css({top:n,right:q,zIndex:i})}else this.picker.css({top:n,left:m,zIndex:i});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return r.parseDate(a,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),c=a.grep(c,a.proxy(function(a){return!this.dateWithinRange(a)||!a},this),!0),this.dates.replace(c),this.o.updateViewDate&&(this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate),d?(this.setValue(),this.element.change()):this.dates.length&&String(b)!==String(this.dates)&&d&&(this._trigger("changeDate"),this.element.change()),!this.dates.length&&b.length&&(this._trigger("clearDate"),this.element.change()),this.fill(),this},fillDow:function(){if(this.o.showWeekDays){var b=this.o.weekStart,c="<tr>";for(this.o.calendarWeeks&&(c+='<th class="cw">&#160;</th>');b<this.o.weekStart+7;)c+='<th class="dow',-1!==a.inArray(b,this.o.daysOfWeekDisabled)&&(c+=" disabled"),c+='">'+q[this.o.language].daysMin[b++%7]+"</th>";c+="</tr>",this.picker.find(".datepicker-days thead").append(c)}},fillMonths:function(){for(var a,b=this._utc_to_local(this.viewDate),c="",d=0;d<12;d++)a=b&&b.getMonth()===d?" focused":"",c+='<span class="month'+a+'">'+q[this.o.language].monthsShort[d]+"</span>";this.picker.find(".datepicker-months td").html(c)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],f=this.viewDate.getUTCFullYear(),g=this.viewDate.getUTCMonth(),h=d();return b.getUTCFullYear()<f||b.getUTCFullYear()===f&&b.getUTCMonth()<g?c.push("old"):(b.getUTCFullYear()>f||b.getUTCFullYear()===f&&b.getUTCMonth()>g)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&e(b,h)&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),this.dateWithinRange(b)||c.push("disabled"),this.dateIsDisabled(b)&&c.push("disabled","disabled-date"),-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekHighlighted)&&c.push("highlighted"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected"),b.valueOf()===this.range[0]&&c.push("range-start"),b.valueOf()===this.range[this.range.length-1]&&c.push("range-end")),c},_fill_yearsView:function(c,d,e,f,g,h,i){for(var j,k,l,m="",n=e/10,o=this.picker.find(c),p=Math.floor(f/e)*e,q=p+9*n,r=Math.floor(this.viewDate.getFullYear()/n)*n,s=a.map(this.dates,function(a){return Math.floor(a.getUTCFullYear()/n)*n}),t=p-n;t<=q+n;t+=n)j=[d],k=null,t===p-n?j.push("old"):t===q+n&&j.push("new"),-1!==a.inArray(t,s)&&j.push("active"),(t<g||t>h)&&j.push("disabled"),t===r&&j.push("focused"),i!==a.noop&&(l=i(new Date(t,0,1)),l===b?l={}:"boolean"==typeof l?l={enabled:l}:"string"==typeof l&&(l={classes:l}),!1===l.enabled&&j.push("disabled"),l.classes&&(j=j.concat(l.classes.split(/\s+/))),l.tooltip&&(k=l.tooltip)),m+='<span class="'+j.join(" ")+'"'+(k?' title="'+k+'"':"")+">"+t+"</span>";o.find(".datepicker-switch").text(p+"-"+q),o.find("td").html(m)},fill:function(){var e,f,g=new Date(this.viewDate),h=g.getUTCFullYear(),i=g.getUTCMonth(),j=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,k=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,m=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,n=q[this.o.language].today||q.en.today||"",o=q[this.o.language].clear||q.en.clear||"",p=q[this.o.language].titleFormat||q.en.titleFormat,s=d(),t=(!0===this.o.todayBtn||"linked"===this.o.todayBtn)&&s>=this.o.startDate&&s<=this.o.endDate&&!this.weekOfDateIsDisabled(s);if(!isNaN(h)&&!isNaN(i)){this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(g,p,this.o.language)),this.picker.find("tfoot .today").text(n).css("display",t?"table-cell":"none"),this.picker.find("tfoot .clear").text(o).css("display",!0===this.o.clearBtn?"table-cell":"none"),this.picker.find("thead .datepicker-title").text(this.o.title).css("display","string"==typeof this.o.title&&""!==this.o.title?"table-cell":"none"),this.updateNavArrows(),this.fillMonths();var u=c(h,i,0),v=u.getUTCDate();u.setUTCDate(v-(u.getUTCDay()-this.o.weekStart+7)%7);var w=new Date(u);u.getUTCFullYear()<100&&w.setUTCFullYear(u.getUTCFullYear()),w.setUTCDate(w.getUTCDate()+42),w=w.valueOf();for(var x,y,z=[];u.valueOf()<w;){if((x=u.getUTCDay())===this.o.weekStart&&(z.push("<tr>"),this.o.calendarWeeks)){var A=new Date(+u+(this.o.weekStart-x-7)%7*864e5),B=new Date(Number(A)+(11-A.getUTCDay())%7*864e5),C=new Date(Number(C=c(B.getUTCFullYear(),0,1))+(11-C.getUTCDay())%7*864e5),D=(B-C)/864e5/7+1;z.push('<td class="cw">'+D+"</td>")}y=this.getClassNames(u),y.push("day");var E=u.getUTCDate();this.o.beforeShowDay!==a.noop&&(f=this.o.beforeShowDay(this._utc_to_local(u)),f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),!1===f.enabled&&y.push("disabled"),f.classes&&(y=y.concat(f.classes.split(/\s+/))),f.tooltip&&(e=f.tooltip),f.content&&(E=f.content)),y=a.isFunction(a.uniqueSort)?a.uniqueSort(y):a.unique(y),z.push('<td class="'+y.join(" ")+'"'+(e?' title="'+e+'"':"")+' data-date="'+u.getTime().toString()+'">'+E+"</td>"),e=null,x===this.o.weekEnd&&z.push("</tr>"),u.setUTCDate(u.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").html(z.join(""));var F=q[this.o.language].monthsTitle||q.en.monthsTitle||"Months",G=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?F:h).end().find("tbody span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===h&&G.eq(b.getUTCMonth()).addClass("active")}),(h<j||h>l)&&G.addClass("disabled"),h===j&&G.slice(0,k).addClass("disabled"),h===l&&G.slice(m+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var H=this;a.each(G,function(c,d){var e=new Date(h,c,1),f=H.o.beforeShowMonth(e);f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),!1!==f.enabled||a(d).hasClass("disabled")||a(d).addClass("disabled"),f.classes&&a(d).addClass(f.classes),f.tooltip&&a(d).prop("title",f.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,h,j,l,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,h,j,l,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,h,j,l,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var a,b,c=new Date(this.viewDate),d=c.getUTCFullYear(),e=c.getUTCMonth(),f=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,g=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,h=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,i=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,j=1;switch(this.viewMode){case 4:j*=10;case 3:j*=10;case 2:j*=10;case 1:a=Math.floor(d/j)*j<=f,b=Math.floor(d/j)*j+j>h;break;case 0:a=d<=f&&e<=g,b=d>=h&&e>=i}this.picker.find(".prev").toggleClass("disabled",a),this.picker.find(".next").toggleClass("disabled",b)}},click:function(b){b.preventDefault(),b.stopPropagation();var e,f,g,h;e=a(b.target),e.hasClass("datepicker-switch")&&this.viewMode!==this.o.maxViewMode&&this.setViewMode(this.viewMode+1),e.hasClass("today")&&!e.hasClass("day")&&(this.setViewMode(0),this._setDate(d(),"linked"===this.o.todayBtn?null:"view")),e.hasClass("clear")&&this.clearDates(),e.hasClass("disabled")||(e.hasClass("month")||e.hasClass("year")||e.hasClass("decade")||e.hasClass("century"))&&(this.viewDate.setUTCDate(1),f=1,1===this.viewMode?(h=e.parent().find("span").index(e),g=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(h)):(h=0,g=Number(e.text()),this.viewDate.setUTCFullYear(g)),this._trigger(r.viewModes[this.viewMode-1].e,this.viewDate),this.viewMode===this.o.minViewMode?this._setDate(c(g,h,f)):(this.setViewMode(this.viewMode-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&this._focused_from.focus(),delete this._focused_from},dayCellClick:function(b){var c=a(b.currentTarget),d=c.data("date"),e=new Date(d);this.o.updateViewDate&&(e.getUTCFullYear()!==this.viewDate.getUTCFullYear()&&this._trigger("changeYear",this.viewDate),e.getUTCMonth()!==this.viewDate.getUTCMonth()&&this._trigger("changeMonth",this.viewDate)),this._setDate(e)},navArrowsClick:function(b){var c=a(b.currentTarget),d=c.hasClass("prev")?-1:1;0!==this.viewMode&&(d*=12*r.viewModes[this.viewMode].navStep),this.viewDate=this.moveMonth(this.viewDate,d),this._trigger(r.viewModes[this.viewMode].e,this.viewDate),this.fill()},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(!0===this.o.multidate||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):!1===this.o.multidate?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),(!b&&this.o.updateViewDate||"view"===b)&&(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate"),this.inputField.trigger("change"),!this.o.autoclose||b&&"date"!==b||this.hide()},moveDay:function(a,b){var c=new Date(a);return c.setUTCDate(a.getUTCDate()+b),c},moveWeek:function(a,b){return this.moveDay(a,7*b)},moveMonth:function(a,b){if(!g(a))return this.o.defaultViewDate;if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),h=e.getUTCMonth(),i=Math.abs(b);if(b=b>0?1:-1,1===i)d=-1===b?function(){return e.getUTCMonth()===h}:function(){return e.getUTCMonth()!==c},c=h+b,e.setUTCMonth(c),c=(c+12)%12;else{for(var j=0;j<i;j++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!==e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},moveAvailableDate:function(a,b,c){do{if(a=this[c](a,b),!this.dateWithinRange(a))return!1;c="moveDay"}while(this.dateIsDisabled(a));return a},weekOfDateIsDisabled:function(b){return-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(b){return this.weekOfDateIsDisabled(b)||a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void(40!==a.keyCode&&27!==a.keyCode||(this.show(),a.stopPropagation()));var b,c,d=!1,e=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault(),a.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;b=37===a.keyCode||38===a.keyCode?-1:1,0===this.viewMode?a.ctrlKey?(c=this.moveAvailableDate(e,b,"moveYear"))&&this._trigger("changeYear",this.viewDate):a.shiftKey?(c=this.moveAvailableDate(e,b,"moveMonth"))&&this._trigger("changeMonth",this.viewDate):37===a.keyCode||39===a.keyCode?c=this.moveAvailableDate(e,b,"moveDay"):this.weekOfDateIsDisabled(e)||(c=this.moveAvailableDate(e,b,"moveWeek")):1===this.viewMode?(38!==a.keyCode&&40!==a.keyCode||(b*=4),c=this.moveAvailableDate(e,b,"moveMonth")):2===this.viewMode&&(38!==a.keyCode&&40!==a.keyCode||(b*=4),c=this.moveAvailableDate(e,b,"moveYear")),c&&(this.focusDate=this.viewDate=c,this.setValue(),this.fill(),a.preventDefault());break;case 13:if(!this.o.forceParse)break;e=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(e),d=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),a.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}d&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField.trigger("change"))},setViewMode:function(a){this.viewMode=a,this.picker.children("div").hide().filter(".datepicker-"+r.viewModes[this.viewMode].clsName).show(),this.updateNavArrows(),this._trigger("changeViewMode",new Date(this.viewDate))}};var l=function(b,c){a.data(b,"datepicker",this),this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,this.keepEmptyValues=c.keepEmptyValues,delete c.keepEmptyValues,n.call(a(this.inputs),c).on("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a.data(b,"datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},clearDates:function(){a.each(this.pickers,function(a,b){b.clearDates()})},dateUpdated:function(c){if(!this.updating){this.updating=!0;var d=a.data(c.target,"datepicker");if(d!==b){var e=d.getUTCDate(),f=this.keepEmptyValues,g=a.inArray(c.target,this.inputs),h=g-1,i=g+1,j=this.inputs.length;if(-1!==g){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b!==d&&f||b.setUTCDate(e)}),e<this.dates[h])for(;h>=0&&e<this.dates[h];)this.pickers[h--].setUTCDate(e);else if(e>this.dates[i])for(;i<j&&e>this.dates[i];)this.pickers[i++].setUTCDate(e);this.updateDates(),delete this.updating}}}},destroy:function(){a.map(this.pickers,function(a){a.destroy()}),a(this.inputs).off("changeDate",this.dateUpdated),delete this.element.data().datepicker},remove:f("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")};var m=a.fn.datepicker,n=function(c){var d=Array.apply(null,arguments);d.shift();var e;if(this.each(function(){var b=a(this),f=b.data("datepicker"),g="object"==typeof c&&c;if(!f){var j=h(this,"date"),m=a.extend({},o,j,g),n=i(m.language),p=a.extend({},o,n,j,g);b.hasClass("input-daterange")||p.inputs?(a.extend(p,{inputs:p.inputs||b.find("input").toArray()}),f=new l(this,p)):f=new k(this,p),b.data("datepicker",f)}"string"==typeof c&&"function"==typeof f[c]&&(e=f[c].apply(f,d))}),e===b||e instanceof k||e instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+c+" function)");return e};a.fn.datepicker=n;var o=a.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,beforeShowYear:a.noop,beforeShowDecade:a.noop,beforeShowCentury:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keepEmptyValues:!1,keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,updateViewDate:!0,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&#x00AB;",rightArrow:"&#x00BB;"},showWeekDays:!0},p=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=k;var q=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},r={viewModes:[{names:["days","month"],clsName:"days",e:"changeMonth"},{names:["months","year"],clsName:"months",e:"changeYear",navStep:1},{names:["years","decade"],clsName:"years",e:"changeDecade",navStep:10},{names:["decades","century"],clsName:"decades",e:"changeCentury",navStep:100},{names:["centuries","millennium"],clsName:"centuries",e:"changeMillennium",navStep:1e3}],validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(a){if("function"==typeof a.toValue&&"function"==typeof a.toDisplay)return a;var b=a.replace(this.validParts,"\0").split("\0"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(c,e,f,g){function h(a,b){return!0===b&&(b=10),a<100&&(a+=2e3)>(new Date).getFullYear()+b&&(a-=100),a}function i(){var a=this.slice(0,j[n].length),b=j[n].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!c)return b;if(c instanceof Date)return c;if("string"==typeof e&&(e=r.parseFormat(e)),e.toValue)return e.toValue(c,e,f);var j,l,m,n,o,p={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},s={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(c in s&&(c=s[c]),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c)){for(j=c.match(/([\-+]\d+)([dmwy])/gi),c=new Date,n=0;n<j.length;n++)l=j[n].match(/([\-+]\d+)([dmwy])/i),m=Number(l[1]),o=p[l[2].toLowerCase()],c=k.prototype[o](c,m);return k.prototype._zero_utc_time(c)}j=c&&c.match(this.nonpunctuation)||[];var t,u,v={},w=["yyyy","yy","M","MM","m","mm","d","dd"],x={yyyy:function(a,b){return a.setUTCFullYear(g?h(b,g):b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;b<0;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};x.yy=x.yyyy,x.M=x.MM=x.mm=x.m,x.dd=x.d,c=d();var y=e.parts.slice();if(j.length!==y.length&&(y=a(y).filter(function(b,c){return-1!==a.inArray(c,w)}).toArray()),j.length===y.length){var z;for(n=0,z=y.length;n<z;n++){if(t=parseInt(j[n],10),l=y[n],isNaN(t))switch(l){case"MM":u=a(q[f].months).filter(i),t=a.inArray(u[0],q[f].months)+1;break;case"M":u=a(q[f].monthsShort).filter(i),t=a.inArray(u[0],q[f].monthsShort)+1}v[l]=t}var A,B;for(n=0;n<w.length;n++)(B=w[n])in v&&!isNaN(v[B])&&(A=new Date(c),x[B](A,v[B]),isNaN(A)||(c=A))}return c},formatDate:function(b,c,d){if(!b)return"";if("string"==typeof c&&(c=r.parseFormat(c)),c.toDisplay)return c.toDisplay(b,c,d);var e={d:b.getUTCDate(),D:q[d].daysShort[b.getUTCDay()],DD:q[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:q[d].monthsShort[b.getUTCMonth()],MM:q[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;g<=h;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},
headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">'+o.templates.leftArrow+'</th><th colspan="5" class="datepicker-switch"></th><th class="next">'+o.templates.rightArrow+"</th></tr></thead>",contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};r.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=r,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=m,this},a.fn.datepicker.version="1.9.0",a.fn.datepicker.deprecated=function(a){var b=window.console;b&&b.warn&&b.warn("DEPRECATED: "+a)},a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),n.call(c,"show"))}),a(function(){n.call(a('[data-provide="datepicker-inline"]'))})});
"use strict";
$.fn.datepicker.defaults.zIndexOffset = 10;


/* Select2 4.0.13
* https://select2.github.io
*
* Released under the MIT license
* https://github.com/select2/select2/blob/master/LICENSE.md
*/
;(function (factory) {
 if (typeof define === 'function' && define.amd) {
   // AMD. Register as an anonymous module.
   define(['jquery'], factory);
 } else if (typeof module === 'object' && module.exports) {
   // Node/CommonJS
   module.exports = function (root, jQuery) {
	 if (jQuery === undefined) {
	   // require('jQuery') returns a factory that requires window to
	   // build a jQuery instance, we normalize how we use modules
	   // that require this pattern but the window provided is a noop
	   // if it's defined (how jquery works)
	   if (typeof window !== 'undefined') {
		 jQuery = require('jquery');
	   }
	   else {
		 jQuery = require('jquery')(root);
	   }
	 }
	 factory(jQuery);
	 return jQuery;
   };
 } else {
   // Browser globals
   factory(jQuery);
 }
} (function (jQuery) {
 // This is needed so we can catch the AMD loader configuration and use it
 // The inner file should be wrapped (by `banner.start.js`) in a function that
 // returns the AMD loader references.
 var S2 =(function () {
 // Restore the Select2 AMD loader so it can be used
 // Needed mostly in the language files, where the loader is not inserted
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
   var S2 = jQuery.fn.select2.amd;
 }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
* @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
* Released under MIT license, http://github.com/requirejs/almond/LICENSE
*/
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
   var main, req, makeMap, handlers,
	   defined = {},
	   waiting = {},
	   config = {},
	   defining = {},
	   hasOwn = Object.prototype.hasOwnProperty,
	   aps = [].slice,
	   jsSuffixRegExp = /\.js$/;

   function hasProp(obj, prop) {
	   return hasOwn.call(obj, prop);
   }

   /**
	* Given a relative module name, like ./something, normalize it to
	* a real name that can be mapped to a path.
	* @param {String} name the relative name
	* @param {String} baseName a real name that the name arg is relative
	* to.
	* @returns {String} normalized name
	*/
   function normalize(name, baseName) {
	   var nameParts, nameSegment, mapValue, foundMap, lastIndex,
		   foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
		   baseParts = baseName && baseName.split("/"),
		   map = config.map,
		   starMap = (map && map['*']) || {};

	   //Adjust any relative paths.
	   if (name) {
		   name = name.split('/');
		   lastIndex = name.length - 1;

		   // If wanting node ID compatibility, strip .js from end
		   // of IDs. Have to do this here, and not in nameToUrl
		   // because node allows either .js or non .js to map
		   // to same file.
		   if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
			   name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
		   }

		   // Starts with a '.' so need the baseName
		   if (name[0].charAt(0) === '.' && baseParts) {
			   //Convert baseName to array, and lop off the last part,
			   //so that . matches that 'directory' and not name of the baseName's
			   //module. For instance, baseName of 'one/two/three', maps to
			   //'one/two/three.js', but we want the directory, 'one/two' for
			   //this normalization.
			   normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
			   name = normalizedBaseParts.concat(name);
		   }

		   //start trimDots
		   for (i = 0; i < name.length; i++) {
			   part = name[i];
			   if (part === '.') {
				   name.splice(i, 1);
				   i -= 1;
			   } else if (part === '..') {
				   // If at the start, or previous value is still ..,
				   // keep them so that when converted to a path it may
				   // still work when converted to a path, even though
				   // as an ID it is less than ideal. In larger point
				   // releases, may be better to just kick out an error.
				   if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
					   continue;
				   } else if (i > 0) {
					   name.splice(i - 1, 2);
					   i -= 2;
				   }
			   }
		   }
		   //end trimDots

		   name = name.join('/');
	   }

	   //Apply map config if available.
	   if ((baseParts || starMap) && map) {
		   nameParts = name.split('/');

		   for (i = nameParts.length; i > 0; i -= 1) {
			   nameSegment = nameParts.slice(0, i).join("/");

			   if (baseParts) {
				   //Find the longest baseName segment match in the config.
				   //So, do joins on the biggest to smallest lengths of baseParts.
				   for (j = baseParts.length; j > 0; j -= 1) {
					   mapValue = map[baseParts.slice(0, j).join('/')];

					   //baseName segment has  config, find if it has one for
					   //this name.
					   if (mapValue) {
						   mapValue = mapValue[nameSegment];
						   if (mapValue) {
							   //Match, update name to the new value.
							   foundMap = mapValue;
							   foundI = i;
							   break;
						   }
					   }
				   }
			   }

			   if (foundMap) {
				   break;
			   }

			   //Check for a star map match, but just hold on to it,
			   //if there is a shorter segment match later in a matching
			   //config, then favor over this star map.
			   if (!foundStarMap && starMap && starMap[nameSegment]) {
				   foundStarMap = starMap[nameSegment];
				   starI = i;
			   }
		   }

		   if (!foundMap && foundStarMap) {
			   foundMap = foundStarMap;
			   foundI = starI;
		   }

		   if (foundMap) {
			   nameParts.splice(0, foundI, foundMap);
			   name = nameParts.join('/');
		   }
	   }

	   return name;
   }

   function makeRequire(relName, forceSync) {
	   return function () {
		   //A version of a require function that passes a moduleName
		   //value for items that may need to
		   //look up paths relative to the moduleName
		   var args = aps.call(arguments, 0);

		   //If first arg is not require('string'), and there is only
		   //one arg, it is the array form without a callback. Insert
		   //a null so that the following concat is correct.
		   if (typeof args[0] !== 'string' && args.length === 1) {
			   args.push(null);
		   }
		   return req.apply(undef, args.concat([relName, forceSync]));
	   };
   }

   function makeNormalize(relName) {
	   return function (name) {
		   return normalize(name, relName);
	   };
   }

   function makeLoad(depName) {
	   return function (value) {
		   defined[depName] = value;
	   };
   }

   function callDep(name) {
	   if (hasProp(waiting, name)) {
		   var args = waiting[name];
		   delete waiting[name];
		   defining[name] = true;
		   main.apply(undef, args);
	   }

	   if (!hasProp(defined, name) && !hasProp(defining, name)) {
		   throw new Error('No ' + name);
	   }
	   return defined[name];
   }

   //Turns a plugin!resource to [plugin, resource]
   //with the plugin being undefined if the name
   //did not have a plugin prefix.
   function splitPrefix(name) {
	   var prefix,
		   index = name ? name.indexOf('!') : -1;
	   if (index > -1) {
		   prefix = name.substring(0, index);
		   name = name.substring(index + 1, name.length);
	   }
	   return [prefix, name];
   }

   //Creates a parts array for a relName where first part is plugin ID,
   //second part is resource ID. Assumes relName has already been normalized.
   function makeRelParts(relName) {
	   return relName ? splitPrefix(relName) : [];
   }

   /**
	* Makes a name map, normalizing the name, and using a plugin
	* for normalization if necessary. Grabs a ref to plugin
	* too, as an optimization.
	*/
   makeMap = function (name, relParts) {
	   var plugin,
		   parts = splitPrefix(name),
		   prefix = parts[0],
		   relResourceName = relParts[1];

	   name = parts[1];

	   if (prefix) {
		   prefix = normalize(prefix, relResourceName);
		   plugin = callDep(prefix);
	   }

	   //Normalize according
	   if (prefix) {
		   if (plugin && plugin.normalize) {
			   name = plugin.normalize(name, makeNormalize(relResourceName));
		   } else {
			   name = normalize(name, relResourceName);
		   }
	   } else {
		   name = normalize(name, relResourceName);
		   parts = splitPrefix(name);
		   prefix = parts[0];
		   name = parts[1];
		   if (prefix) {
			   plugin = callDep(prefix);
		   }
	   }

	   //Using ridiculous property names for space reasons
	   return {
		   f: prefix ? prefix + '!' + name : name, //fullName
		   n: name,
		   pr: prefix,
		   p: plugin
	   };
   };

   function makeConfig(name) {
	   return function () {
		   return (config && config.config && config.config[name]) || {};
	   };
   }

   handlers = {
	   require: function (name) {
		   return makeRequire(name);
	   },
	   exports: function (name) {
		   var e = defined[name];
		   if (typeof e !== 'undefined') {
			   return e;
		   } else {
			   return (defined[name] = {});
		   }
	   },
	   module: function (name) {
		   return {
			   id: name,
			   uri: '',
			   exports: defined[name],
			   config: makeConfig(name)
		   };
	   }
   };

   main = function (name, deps, callback, relName) {
	   var cjsModule, depName, ret, map, i, relParts,
		   args = [],
		   callbackType = typeof callback,
		   usingExports;

	   //Use name if no relName
	   relName = relName || name;
	   relParts = makeRelParts(relName);

	   //Call the callback to define the module, if necessary.
	   if (callbackType === 'undefined' || callbackType === 'function') {
		   //Pull out the defined dependencies and pass the ordered
		   //values to the callback.
		   //Default to [require, exports, module] if no deps
		   deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
		   for (i = 0; i < deps.length; i += 1) {
			   map = makeMap(deps[i], relParts);
			   depName = map.f;

			   //Fast path CommonJS standard dependencies.
			   if (depName === "require") {
				   args[i] = handlers.require(name);
			   } else if (depName === "exports") {
				   //CommonJS module spec 1.1
				   args[i] = handlers.exports(name);
				   usingExports = true;
			   } else if (depName === "module") {
				   //CommonJS module spec 1.1
				   cjsModule = args[i] = handlers.module(name);
			   } else if (hasProp(defined, depName) ||
						  hasProp(waiting, depName) ||
						  hasProp(defining, depName)) {
				   args[i] = callDep(depName);
			   } else if (map.p) {
				   map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
				   args[i] = defined[depName];
			   } else {
				   throw new Error(name + ' missing ' + depName);
			   }
		   }

		   ret = callback ? callback.apply(defined[name], args) : undefined;

		   if (name) {
			   //If setting exports via "module" is in play,
			   //favor that over return value and exports. After that,
			   //favor a non-undefined return value over exports use.
			   if (cjsModule && cjsModule.exports !== undef &&
					   cjsModule.exports !== defined[name]) {
				   defined[name] = cjsModule.exports;
			   } else if (ret !== undef || !usingExports) {
				   //Use the return value from the function.
				   defined[name] = ret;
			   }
		   }
	   } else if (name) {
		   //May just be an object definition for the module. Only
		   //worry about defining if have a module name.
		   defined[name] = callback;
	   }
   };

   requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
	   if (typeof deps === "string") {
		   if (handlers[deps]) {
			   //callback in this case is really relName
			   return handlers[deps](callback);
		   }
		   //Just return the module wanted. In this scenario, the
		   //deps arg is the module name, and second arg (if passed)
		   //is just the relName.
		   //Normalize module name, if it contains . or ..
		   return callDep(makeMap(deps, makeRelParts(callback)).f);
	   } else if (!deps.splice) {
		   //deps is a config object, not an array.
		   config = deps;
		   if (config.deps) {
			   req(config.deps, config.callback);
		   }
		   if (!callback) {
			   return;
		   }

		   if (callback.splice) {
			   //callback is an array, which means it is a dependency list.
			   //Adjust args if there are dependencies
			   deps = callback;
			   callback = relName;
			   relName = null;
		   } else {
			   deps = undef;
		   }
	   }

	   //Support require(['a'])
	   callback = callback || function () {};

	   //If relName is a function, it is an errback handler,
	   //so remove it.
	   if (typeof relName === 'function') {
		   relName = forceSync;
		   forceSync = alt;
	   }

	   //Simulate async callback;
	   if (forceSync) {
		   main(undef, deps, callback, relName);
	   } else {
		   //Using a non-zero value because of concern for what old browsers
		   //do, and latest browsers "upgrade" to 4 if lower value is used:
		   //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
		   //If want a value immediately, use require('id') instead -- something
		   //that works in almond on the global level, but not guaranteed and
		   //unlikely to work in other AMD implementations.
		   setTimeout(function () {
			   main(undef, deps, callback, relName);
		   }, 4);
	   }

	   return req;
   };

   /**
	* Just drops the config on the floor, but returns req in case
	* the config return value is used.
	*/
   req.config = function (cfg) {
	   return req(cfg);
   };

   /**
	* Expose module registry for debugging and tooling
	*/
   requirejs._defined = defined;

   define = function (name, deps, callback) {
	   if (typeof name !== 'string') {
		   throw new Error('See almond README: incorrect module build, no module name');
	   }

	   //This module may not have dependencies
	   if (!deps.splice) {
		   //deps is not an array, so probably means
		   //an object literal or factory function for
		   //the value. Adjust args.
		   callback = deps;
		   deps = [];
	   }

	   if (!hasProp(defined, name) && !hasProp(waiting, name)) {
		   waiting[name] = [name, deps, callback];
	   }
   };

   define.amd = {
	   jQuery: true
   };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
 var _$ = jQuery || $;

 if (_$ == null && console && console.error) {
   console.error(
	 'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
	 'found. Make sure that you are including jQuery before Select2 on your ' +
	 'web page.'
   );
 }

 return _$;
});

S2.define('select2/utils',[
 'jquery'
], function ($) {
 var Utils = {};

 Utils.Extend = function (ChildClass, SuperClass) {
   var __hasProp = {}.hasOwnProperty;

   function BaseConstructor () {
	 this.constructor = ChildClass;
   }

   for (var key in SuperClass) {
	 if (__hasProp.call(SuperClass, key)) {
	   ChildClass[key] = SuperClass[key];
	 }
   }

   BaseConstructor.prototype = SuperClass.prototype;
   ChildClass.prototype = new BaseConstructor();
   ChildClass.__super__ = SuperClass.prototype;

   return ChildClass;
 };

 function getMethods (theClass) {
   var proto = theClass.prototype;

   var methods = [];

   for (var methodName in proto) {
	 var m = proto[methodName];

	 if (typeof m !== 'function') {
	   continue;
	 }

	 if (methodName === 'constructor') {
	   continue;
	 }

	 methods.push(methodName);
   }

   return methods;
 }

 Utils.Decorate = function (SuperClass, DecoratorClass) {
   var decoratedMethods = getMethods(DecoratorClass);
   var superMethods = getMethods(SuperClass);

   function DecoratedClass () {
	 var unshift = Array.prototype.unshift;

	 var argCount = DecoratorClass.prototype.constructor.length;

	 var calledConstructor = SuperClass.prototype.constructor;

	 if (argCount > 0) {
	   unshift.call(arguments, SuperClass.prototype.constructor);

	   calledConstructor = DecoratorClass.prototype.constructor;
	 }

	 calledConstructor.apply(this, arguments);
   }

   DecoratorClass.displayName = SuperClass.displayName;

   function ctr () {
	 this.constructor = DecoratedClass;
   }

   DecoratedClass.prototype = new ctr();

   for (var m = 0; m < superMethods.length; m++) {
	 var superMethod = superMethods[m];

	 DecoratedClass.prototype[superMethod] =
	   SuperClass.prototype[superMethod];
   }

   var calledMethod = function (methodName) {
	 // Stub out the original method if it's not decorating an actual method
	 var originalMethod = function () {};

	 if (methodName in DecoratedClass.prototype) {
	   originalMethod = DecoratedClass.prototype[methodName];
	 }

	 var decoratedMethod = DecoratorClass.prototype[methodName];

	 return function () {
	   var unshift = Array.prototype.unshift;

	   unshift.call(arguments, originalMethod);

	   return decoratedMethod.apply(this, arguments);
	 };
   };

   for (var d = 0; d < decoratedMethods.length; d++) {
	 var decoratedMethod = decoratedMethods[d];

	 DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
   }

   return DecoratedClass;
 };

 var Observable = function () {
   this.listeners = {};
 };

 Observable.prototype.on = function (event, callback) {
   this.listeners = this.listeners || {};

   if (event in this.listeners) {
	 this.listeners[event].push(callback);
   } else {
	 this.listeners[event] = [callback];
   }
 };

 Observable.prototype.trigger = function (event) {
   var slice = Array.prototype.slice;
   var params = slice.call(arguments, 1);

   this.listeners = this.listeners || {};

   // Params should always come in as an array
   if (params == null) {
	 params = [];
   }

   // If there are no arguments to the event, use a temporary object
   if (params.length === 0) {
	 params.push({});
   }

   // Set the `_type` of the first object to the event
   params[0]._type = event;

   if (event in this.listeners) {
	 this.invoke(this.listeners[event], slice.call(arguments, 1));
   }

   if ('*' in this.listeners) {
	 this.invoke(this.listeners['*'], arguments);
   }
 };

 Observable.prototype.invoke = function (listeners, params) {
   for (var i = 0, len = listeners.length; i < len; i++) {
	 listeners[i].apply(this, params);
   }
 };

 Utils.Observable = Observable;

 Utils.generateChars = function (length) {
   var chars = '';

   for (var i = 0; i < length; i++) {
	 var randomChar = Math.floor(Math.random() * 36);
	 chars += randomChar.toString(36);
   }

   return chars;
 };

 Utils.bind = function (func, context) {
   return function () {
	 func.apply(context, arguments);
   };
 };

 Utils._convertData = function (data) {
   for (var originalKey in data) {
	 var keys = originalKey.split('-');

	 var dataLevel = data;

	 if (keys.length === 1) {
	   continue;
	 }

	 for (var k = 0; k < keys.length; k++) {
	   var key = keys[k];

	   // Lowercase the first letter
	   // By default, dash-separated becomes camelCase
	   key = key.substring(0, 1).toLowerCase() + key.substring(1);

	   if (!(key in dataLevel)) {
		 dataLevel[key] = {};
	   }

	   if (k == keys.length - 1) {
		 dataLevel[key] = data[originalKey];
	   }

	   dataLevel = dataLevel[key];
	 }

	 delete data[originalKey];
   }

   return data;
 };

 Utils.hasScroll = function (index, el) {
   // Adapted from the function created by @ShadowScripter
   // and adapted by @BillBarry on the Stack Exchange Code Review website.
   // The original code can be found at
   // http://codereview.stackexchange.com/q/13338
   // and was designed to be used with the Sizzle selector engine.

   var $el = $(el);
   var overflowX = el.style.overflowX;
   var overflowY = el.style.overflowY;

   //Check both x and y declarations
   if (overflowX === overflowY &&
	   (overflowY === 'hidden' || overflowY === 'visible')) {
	 return false;
   }

   if (overflowX === 'scroll' || overflowY === 'scroll') {
	 return true;
   }

   return ($el.innerHeight() < el.scrollHeight ||
	 $el.innerWidth() < el.scrollWidth);
 };

 Utils.escapeMarkup = function (markup) {
   var replaceMap = {
	 '\\': '&#92;',
	 '&': '&amp;',
	 '<': '&lt;',
	 '>': '&gt;',
	 '"': '&quot;',
	 '\'': '&#39;',
	 '/': '&#47;'
   };

   // Do not try to escape the markup if it's not a string
   if (typeof markup !== 'string') {
	 return markup;
   }

   return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
	 return replaceMap[match];
   });
 };

 // Append an array of jQuery nodes to a given element.
 Utils.appendMany = function ($element, $nodes) {
   // jQuery 1.7.x does not support $.fn.append() with an array
   // Fall back to a jQuery object collection using $.fn.add()
   if ($.fn.jquery.substr(0, 3) === '1.7') {
	 var $jqNodes = $();

	 $.map($nodes, function (node) {
	   $jqNodes = $jqNodes.add(node);
	 });

	 $nodes = $jqNodes;
   }

   $element.append($nodes);
 };

 // Cache objects in Utils.__cache instead of $.data (see #4346)
 Utils.__cache = {};

 var id = 0;
 Utils.GetUniqueElementId = function (element) {
   // Get a unique element Id. If element has no id,
   // creates a new unique number, stores it in the id
   // attribute and returns the new id.
   // If an id already exists, it simply returns it.

   var select2Id = element.getAttribute('data-select2-id');
   if (select2Id == null) {
	 // If element has id, use it.
	 if (element.id) {
	   select2Id = element.id;
	   element.setAttribute('data-select2-id', select2Id);
	 } else {
	   element.setAttribute('data-select2-id', ++id);
	   select2Id = id.toString();
	 }
   }
   return select2Id;
 };

 Utils.StoreData = function (element, name, value) {
   // Stores an item in the cache for a specified element.
   // name is the cache key.
   var id = Utils.GetUniqueElementId(element);
   if (!Utils.__cache[id]) {
	 Utils.__cache[id] = {};
   }

   Utils.__cache[id][name] = value;
 };

 Utils.GetData = function (element, name) {
   // Retrieves a value from the cache by its key (name)
   // name is optional. If no name specified, return
   // all cache items for the specified element.
   // and for a specified element.
   var id = Utils.GetUniqueElementId(element);
   if (name) {
	 if (Utils.__cache[id]) {
	   if (Utils.__cache[id][name] != null) {
		 return Utils.__cache[id][name];
	   }
	   return $(element).data(name); // Fallback to HTML5 data attribs.
	 }
	 return $(element).data(name); // Fallback to HTML5 data attribs.
   } else {
	 return Utils.__cache[id];
   }
 };

 Utils.RemoveData = function (element) {
   // Removes all cached items for a specified element.
   var id = Utils.GetUniqueElementId(element);
   if (Utils.__cache[id] != null) {
	 delete Utils.__cache[id];
   }

   element.removeAttribute('data-select2-id');
 };

 return Utils;
});

S2.define('select2/results',[
 'jquery',
 './utils'
], function ($, Utils) {
 function Results ($element, options, dataAdapter) {
   this.$element = $element;
   this.data = dataAdapter;
   this.options = options;

   Results.__super__.constructor.call(this);
 }

 Utils.Extend(Results, Utils.Observable);

 Results.prototype.render = function () {
   var $results = $(
	 '<ul class="select2-results__options" role="listbox"></ul>'
   );

   if (this.options.get('multiple')) {
	 $results.attr('aria-multiselectable', 'true');
   }

   this.$results = $results;

   return $results;
 };

 Results.prototype.clear = function () {
   this.$results.empty();
 };

 Results.prototype.displayMessage = function (params) {
   var escapeMarkup = this.options.get('escapeMarkup');

   this.clear();
   this.hideLoading();

   var $message = $(
	 '<li role="alert" aria-live="assertive"' +
	 ' class="select2-results__option"></li>'
   );

   var message = this.options.get('translations').get(params.message);

   $message.append(
	 escapeMarkup(
	   message(params.args)
	 )
   );

   $message[0].className += ' select2-results__message';

   this.$results.append($message);
 };

 Results.prototype.hideMessages = function () {
   this.$results.find('.select2-results__message').remove();
 };

 Results.prototype.append = function (data) {
   this.hideLoading();

   var $options = [];

   if (data.results == null || data.results.length === 0) {
	 if (this.$results.children().length === 0) {
	   this.trigger('results:message', {
		 message: 'noResults'
	   });
	 }

	 return;
   }

   data.results = this.sort(data.results);

   for (var d = 0; d < data.results.length; d++) {
	 var item = data.results[d];

	 var $option = this.option(item);

	 $options.push($option);
   }

   this.$results.append($options);
 };

 Results.prototype.position = function ($results, $dropdown) {
   var $resultsContainer = $dropdown.find('.select2-results');
   $resultsContainer.append($results);
 };

 Results.prototype.sort = function (data) {
   var sorter = this.options.get('sorter');

   return sorter(data);
 };

 Results.prototype.highlightFirstItem = function () {
   var $options = this.$results
	 .find('.select2-results__option[aria-selected]');

   var $selected = $options.filter('[aria-selected=true]');

   // Check if there are any selected options
   if ($selected.length > 0) {
	 // If there are selected options, highlight the first
	 $selected.first().trigger('mouseenter');
   } else {
	 // If there are no selected options, highlight the first option
	 // in the dropdown
	 $options.first().trigger('mouseenter');
   }

   this.ensureHighlightVisible();
 };

 Results.prototype.setClasses = function () {
   var self = this;

   this.data.current(function (selected) {
	 var selectedIds = $.map(selected, function (s) {
	   return s.id.toString();
	 });

	 var $options = self.$results
	   .find('.select2-results__option[aria-selected]');

	 $options.each(function () {
	   var $option = $(this);

	   var item = Utils.GetData(this, 'data');

	   // id needs to be converted to a string when comparing
	   var id = '' + item.id;

	   if ((item.element != null && item.element.selected) ||
		   (item.element == null && $.inArray(id, selectedIds) > -1)) {
		 $option.attr('aria-selected', 'true');
	   } else {
		 $option.attr('aria-selected', 'false');
	   }
	 });

   });
 };

 Results.prototype.showLoading = function (params) {
   this.hideLoading();

   var loadingMore = this.options.get('translations').get('searching');

   var loading = {
	 disabled: true,
	 loading: true,
	 text: loadingMore(params)
   };
   var $loading = this.option(loading);
   $loading.className += ' loading-results';

   this.$results.prepend($loading);
 };

 Results.prototype.hideLoading = function () {
   this.$results.find('.loading-results').remove();
 };

 Results.prototype.option = function (data) {
   var option = document.createElement('li');
   option.className = 'select2-results__option';

   var attrs = {
	 'role': 'option',
	 'aria-selected': 'false'
   };

   var matches = window.Element.prototype.matches ||
	 window.Element.prototype.msMatchesSelector ||
	 window.Element.prototype.webkitMatchesSelector;

   if ((data.element != null && matches.call(data.element, ':disabled')) ||
	   (data.element == null && data.disabled)) {
	 delete attrs['aria-selected'];
	 attrs['aria-disabled'] = 'true';
   }

   if (data.id == null) {
	 delete attrs['aria-selected'];
   }

   if (data._resultId != null) {
	 option.id = data._resultId;
   }

   if (data.title) {
	 option.title = data.title;
   }

   if (data.children) {
	 attrs.role = 'group';
	 attrs['aria-label'] = data.text;
	 delete attrs['aria-selected'];
   }

   for (var attr in attrs) {
	 var val = attrs[attr];

	 option.setAttribute(attr, val);
   }

   if (data.children) {
	 var $option = $(option);

	 var label = document.createElement('strong');
	 label.className = 'select2-results__group';

	 var $label = $(label);
	 this.template(data, label);

	 var $children = [];

	 for (var c = 0; c < data.children.length; c++) {
	   var child = data.children[c];

	   var $child = this.option(child);

	   $children.push($child);
	 }

	 var $childrenContainer = $('<ul></ul>', {
	   'class': 'select2-results__options select2-results__options--nested'
	 });

	 $childrenContainer.append($children);

	 $option.append(label);
	 $option.append($childrenContainer);
   } else {
	 this.template(data, option);
   }

   Utils.StoreData(option, 'data', data);

   return option;
 };

 Results.prototype.bind = function (container, $container) {
   var self = this;

   var id = container.id + '-results';

   this.$results.attr('id', id);

   container.on('results:all', function (params) {
	 self.clear();
	 self.append(params.data);

	 if (container.isOpen()) {
	   self.setClasses();
	   self.highlightFirstItem();
	 }
   });

   container.on('results:append', function (params) {
	 self.append(params.data);

	 if (container.isOpen()) {
	   self.setClasses();
	 }
   });

   container.on('query', function (params) {
	 self.hideMessages();
	 self.showLoading(params);
   });

   container.on('select', function () {
	 if (!container.isOpen()) {
	   return;
	 }

	 self.setClasses();

	 if (self.options.get('scrollAfterSelect')) {
	   self.highlightFirstItem();
	 }
   });

   container.on('unselect', function () {
	 if (!container.isOpen()) {
	   return;
	 }

	 self.setClasses();

	 if (self.options.get('scrollAfterSelect')) {
	   self.highlightFirstItem();
	 }
   });

   container.on('open', function () {
	 // When the dropdown is open, aria-expended="true"
	 self.$results.attr('aria-expanded', 'true');
	 self.$results.attr('aria-hidden', 'false');

	 self.setClasses();
	 self.ensureHighlightVisible();
   });

   container.on('close', function () {
	 // When the dropdown is closed, aria-expended="false"
	 self.$results.attr('aria-expanded', 'false');
	 self.$results.attr('aria-hidden', 'true');
	 self.$results.removeAttr('aria-activedescendant');
   });

   container.on('results:toggle', function () {
	 var $highlighted = self.getHighlightedResults();

	 if ($highlighted.length === 0) {
	   return;
	 }

	 $highlighted.trigger('mouseup');
   });

   container.on('results:select', function () {
	 var $highlighted = self.getHighlightedResults();

	 if ($highlighted.length === 0) {
	   return;
	 }

	 var data = Utils.GetData($highlighted[0], 'data');

	 if ($highlighted.attr('aria-selected') == 'true') {
	   self.trigger('close', {});
	 } else {
	   self.trigger('select', {
		 data: data
	   });
	 }
   });

   container.on('results:previous', function () {
	 var $highlighted = self.getHighlightedResults();

	 var $options = self.$results.find('[aria-selected]');

	 var currentIndex = $options.index($highlighted);

	 // If we are already at the top, don't move further
	 // If no options, currentIndex will be -1
	 if (currentIndex <= 0) {
	   return;
	 }

	 var nextIndex = currentIndex - 1;

	 // If none are highlighted, highlight the first
	 if ($highlighted.length === 0) {
	   nextIndex = 0;
	 }

	 var $next = $options.eq(nextIndex);

	 $next.trigger('mouseenter');

	 var currentOffset = self.$results.offset().top;
	 var nextTop = $next.offset().top;
	 var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

	 if (nextIndex === 0) {
	   self.$results.scrollTop(0);
	 } else if (nextTop - currentOffset < 0) {
	   self.$results.scrollTop(nextOffset);
	 }
   });

   container.on('results:next', function () {
	 var $highlighted = self.getHighlightedResults();

	 var $options = self.$results.find('[aria-selected]');

	 var currentIndex = $options.index($highlighted);

	 var nextIndex = currentIndex + 1;

	 // If we are at the last option, stay there
	 if (nextIndex >= $options.length) {
	   return;
	 }

	 var $next = $options.eq(nextIndex);

	 $next.trigger('mouseenter');

	 var currentOffset = self.$results.offset().top +
	   self.$results.outerHeight(false);
	 var nextBottom = $next.offset().top + $next.outerHeight(false);
	 var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

	 if (nextIndex === 0) {
	   self.$results.scrollTop(0);
	 } else if (nextBottom > currentOffset) {
	   self.$results.scrollTop(nextOffset);
	 }
   });

   container.on('results:focus', function (params) {
	 params.element.addClass('select2-results__option--highlighted');
   });

   container.on('results:message', function (params) {
	 self.displayMessage(params);
   });

   if ($.fn.mousewheel) {
	 this.$results.on('mousewheel', function (e) {
	   var top = self.$results.scrollTop();

	   var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

	   var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
	   var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

	   if (isAtTop) {
		 self.$results.scrollTop(0);

		 e.preventDefault();
		 e.stopPropagation();
	   } else if (isAtBottom) {
		 self.$results.scrollTop(
		   self.$results.get(0).scrollHeight - self.$results.height()
		 );

		 e.preventDefault();
		 e.stopPropagation();
	   }
	 });
   }

   this.$results.on('mouseup', '.select2-results__option[aria-selected]',
	 function (evt) {
	 var $this = $(this);

	 var data = Utils.GetData(this, 'data');

	 if ($this.attr('aria-selected') === 'true') {
	   if (self.options.get('multiple')) {
		 self.trigger('unselect', {
		   originalEvent: evt,
		   data: data
		 });
	   } else {
		 self.trigger('close', {});
	   }

	   return;
	 }

	 self.trigger('select', {
	   originalEvent: evt,
	   data: data
	 });
   });

   this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
	 function (evt) {
	 var data = Utils.GetData(this, 'data');

	 self.getHighlightedResults()
		 .removeClass('select2-results__option--highlighted');

	 self.trigger('results:focus', {
	   data: data,
	   element: $(this)
	 });
   });
 };

 Results.prototype.getHighlightedResults = function () {
   var $highlighted = this.$results
   .find('.select2-results__option--highlighted');

   return $highlighted;
 };

 Results.prototype.destroy = function () {
   this.$results.remove();
 };

 Results.prototype.ensureHighlightVisible = function () {
   var $highlighted = this.getHighlightedResults();

   if ($highlighted.length === 0) {
	 return;
   }

   var $options = this.$results.find('[aria-selected]');

   var currentIndex = $options.index($highlighted);

   var currentOffset = this.$results.offset().top;
   var nextTop = $highlighted.offset().top;
   var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

   var offsetDelta = nextTop - currentOffset;
   nextOffset -= $highlighted.outerHeight(false) * 2;

   if (currentIndex <= 2) {
	 this.$results.scrollTop(0);
   } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
	 this.$results.scrollTop(nextOffset);
   }
 };

 Results.prototype.template = function (result, container) {
   var template = this.options.get('templateResult');
   var escapeMarkup = this.options.get('escapeMarkup');

   var content = template(result, container);

   if (content == null) {
	 container.style.display = 'none';
   } else if (typeof content === 'string') {
	 container.innerHTML = escapeMarkup(content);
   } else {
	 $(container).append(content);
   }
 };

 return Results;
});

S2.define('select2/keys',[

], function () {
 var KEYS = {
   BACKSPACE: 8,
   TAB: 9,
   ENTER: 13,
   SHIFT: 16,
   CTRL: 17,
   ALT: 18,
   ESC: 27,
   SPACE: 32,
   PAGE_UP: 33,
   PAGE_DOWN: 34,
   END: 35,
   HOME: 36,
   LEFT: 37,
   UP: 38,
   RIGHT: 39,
   DOWN: 40,
   DELETE: 46
 };

 return KEYS;
});

S2.define('select2/selection/base',[
 'jquery',
 '../utils',
 '../keys'
], function ($, Utils, KEYS) {
 function BaseSelection ($element, options) {
   this.$element = $element;
   this.options = options;

   BaseSelection.__super__.constructor.call(this);
 }

 Utils.Extend(BaseSelection, Utils.Observable);

 BaseSelection.prototype.render = function () {
   var $selection = $(
	 '<span class="select2-selection" role="combobox" ' +
	 ' aria-haspopup="true" aria-expanded="false">' +
	 '</span>'
   );

   this._tabindex = 0;

   if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
	 this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
   } else if (this.$element.attr('tabindex') != null) {
	 this._tabindex = this.$element.attr('tabindex');
   }

   $selection.attr('title', this.$element.attr('title'));
   $selection.attr('tabindex', this._tabindex);
   $selection.attr('aria-disabled', 'false');

   this.$selection = $selection;

   return $selection;
 };

 BaseSelection.prototype.bind = function (container, $container) {
   var self = this;

   var resultsId = container.id + '-results';

   this.container = container;

   this.$selection.on('focus', function (evt) {
	 self.trigger('focus', evt);
   });

   this.$selection.on('blur', function (evt) {
	 self._handleBlur(evt);
   });

   this.$selection.on('keydown', function (evt) {
	 self.trigger('keypress', evt);

	 if (evt.which === KEYS.SPACE) {
	   evt.preventDefault();
	 }
   });

   container.on('results:focus', function (params) {
	 self.$selection.attr('aria-activedescendant', params.data._resultId);
   });

   container.on('selection:update', function (params) {
	 self.update(params.data);
   });

   container.on('open', function () {
	 // When the dropdown is open, aria-expanded="true"
	 self.$selection.attr('aria-expanded', 'true');
	 self.$selection.attr('aria-owns', resultsId);

	 self._attachCloseHandler(container);
   });

   container.on('close', function () {
	 // When the dropdown is closed, aria-expanded="false"
	 self.$selection.attr('aria-expanded', 'false');
	 self.$selection.removeAttr('aria-activedescendant');
	 self.$selection.removeAttr('aria-owns');

	 self.$selection.trigger('focus');

	 self._detachCloseHandler(container);
   });

   container.on('enable', function () {
	 self.$selection.attr('tabindex', self._tabindex);
	 self.$selection.attr('aria-disabled', 'false');
   });

   container.on('disable', function () {
	 self.$selection.attr('tabindex', '-1');
	 self.$selection.attr('aria-disabled', 'true');
   });
 };

 BaseSelection.prototype._handleBlur = function (evt) {
   var self = this;

   // This needs to be delayed as the active element is the body when the tab
   // key is pressed, possibly along with others.
   window.setTimeout(function () {
	 // Don't trigger `blur` if the focus is still in the selection
	 if (
	   (document.activeElement == self.$selection[0]) ||
	   ($.contains(self.$selection[0], document.activeElement))
	 ) {
	   return;
	 }

	 self.trigger('blur', evt);
   }, 1);
 };

 BaseSelection.prototype._attachCloseHandler = function (container) {

   $(document.body).on('mousedown.select2.' + container.id, function (e) {
	 var $target = $(e.target);

	 var $select = $target.closest('.select2');

	 var $all = $('.select2.select2-container--open');

	 $all.each(function () {
	   if (this == $select[0]) {
		 return;
	   }

	   var $element = Utils.GetData(this, 'element');

	   $element.select2('close');
	 });
   });
 };

 BaseSelection.prototype._detachCloseHandler = function (container) {
   $(document.body).off('mousedown.select2.' + container.id);
 };

 BaseSelection.prototype.position = function ($selection, $container) {
   var $selectionContainer = $container.find('.selection');
   $selectionContainer.append($selection);
 };

 BaseSelection.prototype.destroy = function () {
   this._detachCloseHandler(this.container);
 };

 BaseSelection.prototype.update = function (data) {
   throw new Error('The `update` method must be defined in child classes.');
 };

 /**
  * Helper method to abstract the "enabled" (not "disabled") state of this
  * object.
  *
  * @return {true} if the instance is not disabled.
  * @return {false} if the instance is disabled.
  */
 BaseSelection.prototype.isEnabled = function () {
   return !this.isDisabled();
 };

 /**
  * Helper method to abstract the "disabled" state of this object.
  *
  * @return {true} if the disabled option is true.
  * @return {false} if the disabled option is false.
  */
 BaseSelection.prototype.isDisabled = function () {
   return this.options.get('disabled');
 };

 return BaseSelection;
});

S2.define('select2/selection/single',[
 'jquery',
 './base',
 '../utils',
 '../keys'
], function ($, BaseSelection, Utils, KEYS) {
 function SingleSelection () {
   SingleSelection.__super__.constructor.apply(this, arguments);
 }

 Utils.Extend(SingleSelection, BaseSelection);

 SingleSelection.prototype.render = function () {
   var $selection = SingleSelection.__super__.render.call(this);

   $selection.addClass('select2-selection--single');

   $selection.html(
	 '<span class="select2-selection__rendered"></span>' +
	 '<span class="select2-selection__arrow" role="presentation">' +
	   '<b role="presentation"></b>' +
	 '</span>'
   );

   return $selection;
 };

 SingleSelection.prototype.bind = function (container, $container) {
   var self = this;

   SingleSelection.__super__.bind.apply(this, arguments);

   var id = container.id + '-container';

   this.$selection.find('.select2-selection__rendered')
	 .attr('id', id)
	 .attr('role', 'textbox')
	 .attr('aria-readonly', 'true');
   this.$selection.attr('aria-labelledby', id);

   this.$selection.on('mousedown', function (evt) {
	 // Only respond to left clicks
	 if (evt.which !== 1) {
	   return;
	 }

	 self.trigger('toggle', {
	   originalEvent: evt
	 });
   });

   this.$selection.on('focus', function (evt) {
	 // User focuses on the container
   });

   this.$selection.on('blur', function (evt) {
	 // User exits the container
   });

   container.on('focus', function (evt) {
	 if (!container.isOpen()) {
	   self.$selection.trigger('focus');
	 }
   });
 };

 SingleSelection.prototype.clear = function () {
   var $rendered = this.$selection.find('.select2-selection__rendered');
   $rendered.empty();
   $rendered.removeAttr('title'); // clear tooltip on empty
 };

 SingleSelection.prototype.display = function (data, container) {
   var template = this.options.get('templateSelection');
   var escapeMarkup = this.options.get('escapeMarkup');

   return escapeMarkup(template(data, container));
 };

 SingleSelection.prototype.selectionContainer = function () {
   return $('<span></span>');
 };

 SingleSelection.prototype.update = function (data) {
   if (data.length === 0) {
	 this.clear();
	 return;
   }

   var selection = data[0];

   var $rendered = this.$selection.find('.select2-selection__rendered');
   var formatted = this.display(selection, $rendered);

   $rendered.empty().append(formatted);

   var title = selection.title || selection.text;

   if (title) {
	 $rendered.attr('title', title);
   } else {
	 $rendered.removeAttr('title');
   }
 };

 return SingleSelection;
});

S2.define('select2/selection/multiple',[
 'jquery',
 './base',
 '../utils'
], function ($, BaseSelection, Utils) {
 function MultipleSelection ($element, options) {
   MultipleSelection.__super__.constructor.apply(this, arguments);
 }

 Utils.Extend(MultipleSelection, BaseSelection);

 MultipleSelection.prototype.render = function () {
   var $selection = MultipleSelection.__super__.render.call(this);

   $selection.addClass('select2-selection--multiple');

   $selection.html(
	 '<ul class="select2-selection__rendered"></ul>'
   );

   return $selection;
 };

 MultipleSelection.prototype.bind = function (container, $container) {
   var self = this;

   MultipleSelection.__super__.bind.apply(this, arguments);

   this.$selection.on('click', function (evt) {
	 self.trigger('toggle', {
	   originalEvent: evt
	 });
   });

   this.$selection.on(
	 'click',
	 '.select2-selection__choice__remove',
	 function (evt) {
	   // Ignore the event if it is disabled
	   if (self.isDisabled()) {
		 return;
	   }

	   var $remove = $(this);
	   var $selection = $remove.parent();

	   var data = Utils.GetData($selection[0], 'data');

	   self.trigger('unselect', {
		 originalEvent: evt,
		 data: data
	   });
	 }
   );
 };

 MultipleSelection.prototype.clear = function () {
   var $rendered = this.$selection.find('.select2-selection__rendered');
   $rendered.empty();
   $rendered.removeAttr('title');
 };

 MultipleSelection.prototype.display = function (data, container) {
   var template = this.options.get('templateSelection');
   var escapeMarkup = this.options.get('escapeMarkup');

   return escapeMarkup(template(data, container));
 };

 MultipleSelection.prototype.selectionContainer = function () {
   var $container = $(
	 '<li class="select2-selection__choice">' +
	   '<span class="select2-selection__choice__remove" role="presentation">' +
		 '&times;' +
	   '</span>' +
	 '</li>'
   );

   return $container;
 };

 MultipleSelection.prototype.update = function (data) {
   this.clear();

   if (data.length === 0) {
	 return;
   }

   var $selections = [];

   for (var d = 0; d < data.length; d++) {
	 var selection = data[d];

	 var $selection = this.selectionContainer();
	 var formatted = this.display(selection, $selection);

	 $selection.append(formatted);

	 var title = selection.title || selection.text;

	 if (title) {
	   $selection.attr('title', title);
	 }

	 Utils.StoreData($selection[0], 'data', selection);

	 $selections.push($selection);
   }

   var $rendered = this.$selection.find('.select2-selection__rendered');

   Utils.appendMany($rendered, $selections);
 };

 return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
 '../utils'
], function (Utils) {
 function Placeholder (decorated, $element, options) {
   this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

   decorated.call(this, $element, options);
 }

 Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
   if (typeof placeholder === 'string') {
	 placeholder = {
	   id: '',
	   text: placeholder
	 };
   }

   return placeholder;
 };

 Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
   var $placeholder = this.selectionContainer();

   $placeholder.html(this.display(placeholder));
   $placeholder.addClass('select2-selection__placeholder')
			   .removeClass('select2-selection__choice');

   return $placeholder;
 };

 Placeholder.prototype.update = function (decorated, data) {
   var singlePlaceholder = (
	 data.length == 1 && data[0].id != this.placeholder.id
   );
   var multipleSelections = data.length > 1;

   if (multipleSelections || singlePlaceholder) {
	 return decorated.call(this, data);
   }

   this.clear();

   var $placeholder = this.createPlaceholder(this.placeholder);

   this.$selection.find('.select2-selection__rendered').append($placeholder);
 };

 return Placeholder;
});

S2.define('select2/selection/allowClear',[
 'jquery',
 '../keys',
 '../utils'
], function ($, KEYS, Utils) {
 function AllowClear () { }

 AllowClear.prototype.bind = function (decorated, container, $container) {
   var self = this;

   decorated.call(this, container, $container);

   if (this.placeholder == null) {
	 if (this.options.get('debug') && window.console && console.error) {
	   console.error(
		 'Select2: The `allowClear` option should be used in combination ' +
		 'with the `placeholder` option.'
	   );
	 }
   }

   this.$selection.on('mousedown', '.select2-selection__clear',
	 function (evt) {
	   self._handleClear(evt);
   });

   container.on('keypress', function (evt) {
	 self._handleKeyboardClear(evt, container);
   });
 };

 AllowClear.prototype._handleClear = function (_, evt) {
   // Ignore the event if it is disabled
   if (this.isDisabled()) {
	 return;
   }

   var $clear = this.$selection.find('.select2-selection__clear');

   // Ignore the event if nothing has been selected
   if ($clear.length === 0) {
	 return;
   }

   evt.stopPropagation();

   var data = Utils.GetData($clear[0], 'data');

   var previousVal = this.$element.val();
   this.$element.val(this.placeholder.id);

   var unselectData = {
	 data: data
   };
   this.trigger('clear', unselectData);
   if (unselectData.prevented) {
	 this.$element.val(previousVal);
	 return;
   }

   for (var d = 0; d < data.length; d++) {
	 unselectData = {
	   data: data[d]
	 };

	 // Trigger the `unselect` event, so people can prevent it from being
	 // cleared.
	 this.trigger('unselect', unselectData);

	 // If the event was prevented, don't clear it out.
	 if (unselectData.prevented) {
	   this.$element.val(previousVal);
	   return;
	 }
   }

   this.$element.trigger('input').trigger('change');

   this.trigger('toggle', {});
 };

 AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
   if (container.isOpen()) {
	 return;
   }

   if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
	 this._handleClear(evt);
   }
 };

 AllowClear.prototype.update = function (decorated, data) {
   decorated.call(this, data);

   if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
	   data.length === 0) {
	 return;
   }

   var removeAll = this.options.get('translations').get('removeAllItems');

   var $remove = $(
	 '<span class="select2-selection__clear" title="' + removeAll() +'">' +
	   '&times;' +
	 '</span>'
   );
   Utils.StoreData($remove[0], 'data', data);

   this.$selection.find('.select2-selection__rendered').prepend($remove);
 };

 return AllowClear;
});

S2.define('select2/selection/search',[
 'jquery',
 '../utils',
 '../keys'
], function ($, Utils, KEYS) {
 function Search (decorated, $element, options) {
   decorated.call(this, $element, options);
 }

 Search.prototype.render = function (decorated) {
   var $search = $(
	 '<li class="select2-search select2-search--inline">' +
	   '<input class="select2-search__field" type="search" tabindex="-1"' +
	   ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
	   ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
	 '</li>'
   );

   this.$searchContainer = $search;
   this.$search = $search.find('input');

   var $rendered = decorated.call(this);

   this._transferTabIndex();

   return $rendered;
 };

 Search.prototype.bind = function (decorated, container, $container) {
   var self = this;

   var resultsId = container.id + '-results';

   decorated.call(this, container, $container);

   container.on('open', function () {
	 self.$search.attr('aria-controls', resultsId);
	 self.$search.trigger('focus');
   });

   container.on('close', function () {
	 self.$search.val('');
	 self.$search.removeAttr('aria-controls');
	 self.$search.removeAttr('aria-activedescendant');
	 self.$search.trigger('focus');
   });

   container.on('enable', function () {
	 self.$search.prop('disabled', false);

	 self._transferTabIndex();
   });

   container.on('disable', function () {
	 self.$search.prop('disabled', true);
   });

   container.on('focus', function (evt) {
	 self.$search.trigger('focus');
   });

   container.on('results:focus', function (params) {
	 if (params.data._resultId) {
	   self.$search.attr('aria-activedescendant', params.data._resultId);
	 } else {
	   self.$search.removeAttr('aria-activedescendant');
	 }
   });

   this.$selection.on('focusin', '.select2-search--inline', function (evt) {
	 self.trigger('focus', evt);
   });

   this.$selection.on('focusout', '.select2-search--inline', function (evt) {
	 self._handleBlur(evt);
   });

   this.$selection.on('keydown', '.select2-search--inline', function (evt) {
	 evt.stopPropagation();

	 self.trigger('keypress', evt);

	 self._keyUpPrevented = evt.isDefaultPrevented();

	 var key = evt.which;

	 if (key === KEYS.BACKSPACE && self.$search.val() === '') {
	   var $previousChoice = self.$searchContainer
		 .prev('.select2-selection__choice');

	   if ($previousChoice.length > 0) {
		 var item = Utils.GetData($previousChoice[0], 'data');

		 self.searchRemoveChoice(item);

		 evt.preventDefault();
	   }
	 }
   });

   this.$selection.on('click', '.select2-search--inline', function (evt) {
	 if (self.$search.val()) {
	   evt.stopPropagation();
	 }
   });

   // Try to detect the IE version should the `documentMode` property that
   // is stored on the document. This is only implemented in IE and is
   // slightly cleaner than doing a user agent check.
   // This property is not available in Edge, but Edge also doesn't have
   // this bug.
   var msie = document.documentMode;
   var disableInputEvents = msie && msie <= 11;

   // Workaround for browsers which do not support the `input` event
   // This will prevent double-triggering of events for browsers which support
   // both the `keyup` and `input` events.
   this.$selection.on(
	 'input.searchcheck',
	 '.select2-search--inline',
	 function (evt) {
	   // IE will trigger the `input` event when a placeholder is used on a
	   // search box. To get around this issue, we are forced to ignore all
	   // `input` events in IE and keep using `keyup`.
	   if (disableInputEvents) {
		 self.$selection.off('input.search input.searchcheck');
		 return;
	   }

	   // Unbind the duplicated `keyup` event
	   self.$selection.off('keyup.search');
	 }
   );

   this.$selection.on(
	 'keyup.search input.search',
	 '.select2-search--inline',
	 function (evt) {
	   // IE will trigger the `input` event when a placeholder is used on a
	   // search box. To get around this issue, we are forced to ignore all
	   // `input` events in IE and keep using `keyup`.
	   if (disableInputEvents && evt.type === 'input') {
		 self.$selection.off('input.search input.searchcheck');
		 return;
	   }

	   var key = evt.which;

	   // We can freely ignore events from modifier keys
	   if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
		 return;
	   }

	   // Tabbing will be handled during the `keydown` phase
	   if (key == KEYS.TAB) {
		 return;
	   }

	   self.handleSearch(evt);
	 }
   );
 };

 /**
  * This method will transfer the tabindex attribute from the rendered
  * selection to the search box. This allows for the search box to be used as
  * the primary focus instead of the selection container.
  *
  * @private
  */
 Search.prototype._transferTabIndex = function (decorated) {
   this.$search.attr('tabindex', this.$selection.attr('tabindex'));
   this.$selection.attr('tabindex', '-1');
 };

 Search.prototype.createPlaceholder = function (decorated, placeholder) {
   this.$search.attr('placeholder', placeholder.text);
 };

 Search.prototype.update = function (decorated, data) {
   var searchHadFocus = this.$search[0] == document.activeElement;

   this.$search.attr('placeholder', '');

   decorated.call(this, data);

   this.$selection.find('.select2-selection__rendered')
				  .append(this.$searchContainer);

   this.resizeSearch();
   if (searchHadFocus) {
	 this.$search.trigger('focus');
   }
 };

 Search.prototype.handleSearch = function () {
   this.resizeSearch();

   if (!this._keyUpPrevented) {
	 var input = this.$search.val();

	 this.trigger('query', {
	   term: input
	 });
   }

   this._keyUpPrevented = false;
 };

 Search.prototype.searchRemoveChoice = function (decorated, item) {
   this.trigger('unselect', {
	 data: item
   });

   this.$search.val(item.text);
   this.handleSearch();
 };

 Search.prototype.resizeSearch = function () {
   this.$search.css('width', '25px');

   var width = '';

   if (this.$search.attr('placeholder') !== '') {
	 width = this.$selection.find('.select2-selection__rendered').width();
   } else {
	 var minimumWidth = this.$search.val().length + 1;

	 width = (minimumWidth * 0.75) + 'em';
   }

   this.$search.css('width', width);
 };

 return Search;
});

S2.define('select2/selection/eventRelay',[
 'jquery'
], function ($) {
 function EventRelay () { }

 EventRelay.prototype.bind = function (decorated, container, $container) {
   var self = this;
   var relayEvents = [
	 'open', 'opening',
	 'close', 'closing',
	 'select', 'selecting',
	 'unselect', 'unselecting',
	 'clear', 'clearing'
   ];

   var preventableEvents = [
	 'opening', 'closing', 'selecting', 'unselecting', 'clearing'
   ];

   decorated.call(this, container, $container);

   container.on('*', function (name, params) {
	 // Ignore events that should not be relayed
	 if ($.inArray(name, relayEvents) === -1) {
	   return;
	 }

	 // The parameters should always be an object
	 params = params || {};

	 // Generate the jQuery event for the Select2 event
	 var evt = $.Event('select2:' + name, {
	   params: params
	 });

	 self.$element.trigger(evt);

	 // Only handle preventable events if it was one
	 if ($.inArray(name, preventableEvents) === -1) {
	   return;
	 }

	 params.prevented = evt.isDefaultPrevented();
   });
 };

 return EventRelay;
});

S2.define('select2/translation',[
 'jquery',
 'require'
], function ($, require) {
 function Translation (dict) {
   this.dict = dict || {};
 }

 Translation.prototype.all = function () {
   return this.dict;
 };

 Translation.prototype.get = function (key) {
   return this.dict[key];
 };

 Translation.prototype.extend = function (translation) {
   this.dict = $.extend({}, translation.all(), this.dict);
 };

 // Static functions

 Translation._cache = {};

 Translation.loadPath = function (path) {
   if (!(path in Translation._cache)) {
	 var translations = require(path);

	 Translation._cache[path] = translations;
   }

   return new Translation(Translation._cache[path]);
 };

 return Translation;
});

S2.define('select2/diacritics',[

], function () {
 var diacritics = {
   '\u24B6': 'A',
   '\uFF21': 'A',
   '\u00C0': 'A',
   '\u00C1': 'A',
   '\u00C2': 'A',
   '\u1EA6': 'A',
   '\u1EA4': 'A',
   '\u1EAA': 'A',
   '\u1EA8': 'A',
   '\u00C3': 'A',
   '\u0100': 'A',
   '\u0102': 'A',
   '\u1EB0': 'A',
   '\u1EAE': 'A',
   '\u1EB4': 'A',
   '\u1EB2': 'A',
   '\u0226': 'A',
   '\u01E0': 'A',
   '\u00C4': 'A',
   '\u01DE': 'A',
   '\u1EA2': 'A',
   '\u00C5': 'A',
   '\u01FA': 'A',
   '\u01CD': 'A',
   '\u0200': 'A',
   '\u0202': 'A',
   '\u1EA0': 'A',
   '\u1EAC': 'A',
   '\u1EB6': 'A',
   '\u1E00': 'A',
   '\u0104': 'A',
   '\u023A': 'A',
   '\u2C6F': 'A',
   '\uA732': 'AA',
   '\u00C6': 'AE',
   '\u01FC': 'AE',
   '\u01E2': 'AE',
   '\uA734': 'AO',
   '\uA736': 'AU',
   '\uA738': 'AV',
   '\uA73A': 'AV',
   '\uA73C': 'AY',
   '\u24B7': 'B',
   '\uFF22': 'B',
   '\u1E02': 'B',
   '\u1E04': 'B',
   '\u1E06': 'B',
   '\u0243': 'B',
   '\u0182': 'B',
   '\u0181': 'B',
   '\u24B8': 'C',
   '\uFF23': 'C',
   '\u0106': 'C',
   '\u0108': 'C',
   '\u010A': 'C',
   '\u010C': 'C',
   '\u00C7': 'C',
   '\u1E08': 'C',
   '\u0187': 'C',
   '\u023B': 'C',
   '\uA73E': 'C',
   '\u24B9': 'D',
   '\uFF24': 'D',
   '\u1E0A': 'D',
   '\u010E': 'D',
   '\u1E0C': 'D',
   '\u1E10': 'D',
   '\u1E12': 'D',
   '\u1E0E': 'D',
   '\u0110': 'D',
   '\u018B': 'D',
   '\u018A': 'D',
   '\u0189': 'D',
   '\uA779': 'D',
   '\u01F1': 'DZ',
   '\u01C4': 'DZ',
   '\u01F2': 'Dz',
   '\u01C5': 'Dz',
   '\u24BA': 'E',
   '\uFF25': 'E',
   '\u00C8': 'E',
   '\u00C9': 'E',
   '\u00CA': 'E',
   '\u1EC0': 'E',
   '\u1EBE': 'E',
   '\u1EC4': 'E',
   '\u1EC2': 'E',
   '\u1EBC': 'E',
   '\u0112': 'E',
   '\u1E14': 'E',
   '\u1E16': 'E',
   '\u0114': 'E',
   '\u0116': 'E',
   '\u00CB': 'E',
   '\u1EBA': 'E',
   '\u011A': 'E',
   '\u0204': 'E',
   '\u0206': 'E',
   '\u1EB8': 'E',
   '\u1EC6': 'E',
   '\u0228': 'E',
   '\u1E1C': 'E',
   '\u0118': 'E',
   '\u1E18': 'E',
   '\u1E1A': 'E',
   '\u0190': 'E',
   '\u018E': 'E',
   '\u24BB': 'F',
   '\uFF26': 'F',
   '\u1E1E': 'F',
   '\u0191': 'F',
   '\uA77B': 'F',
   '\u24BC': 'G',
   '\uFF27': 'G',
   '\u01F4': 'G',
   '\u011C': 'G',
   '\u1E20': 'G',
   '\u011E': 'G',
   '\u0120': 'G',
   '\u01E6': 'G',
   '\u0122': 'G',
   '\u01E4': 'G',
   '\u0193': 'G',
   '\uA7A0': 'G',
   '\uA77D': 'G',
   '\uA77E': 'G',
   '\u24BD': 'H',
   '\uFF28': 'H',
   '\u0124': 'H',
   '\u1E22': 'H',
   '\u1E26': 'H',
   '\u021E': 'H',
   '\u1E24': 'H',
   '\u1E28': 'H',
   '\u1E2A': 'H',
   '\u0126': 'H',
   '\u2C67': 'H',
   '\u2C75': 'H',
   '\uA78D': 'H',
   '\u24BE': 'I',
   '\uFF29': 'I',
   '\u00CC': 'I',
   '\u00CD': 'I',
   '\u00CE': 'I',
   '\u0128': 'I',
   '\u012A': 'I',
   '\u012C': 'I',
   '\u0130': 'I',
   '\u00CF': 'I',
   '\u1E2E': 'I',
   '\u1EC8': 'I',
   '\u01CF': 'I',
   '\u0208': 'I',
   '\u020A': 'I',
   '\u1ECA': 'I',
   '\u012E': 'I',
   '\u1E2C': 'I',
   '\u0197': 'I',
   '\u24BF': 'J',
   '\uFF2A': 'J',
   '\u0134': 'J',
   '\u0248': 'J',
   '\u24C0': 'K',
   '\uFF2B': 'K',
   '\u1E30': 'K',
   '\u01E8': 'K',
   '\u1E32': 'K',
   '\u0136': 'K',
   '\u1E34': 'K',
   '\u0198': 'K',
   '\u2C69': 'K',
   '\uA740': 'K',
   '\uA742': 'K',
   '\uA744': 'K',
   '\uA7A2': 'K',
   '\u24C1': 'L',
   '\uFF2C': 'L',
   '\u013F': 'L',
   '\u0139': 'L',
   '\u013D': 'L',
   '\u1E36': 'L',
   '\u1E38': 'L',
   '\u013B': 'L',
   '\u1E3C': 'L',
   '\u1E3A': 'L',
   '\u0141': 'L',
   '\u023D': 'L',
   '\u2C62': 'L',
   '\u2C60': 'L',
   '\uA748': 'L',
   '\uA746': 'L',
   '\uA780': 'L',
   '\u01C7': 'LJ',
   '\u01C8': 'Lj',
   '\u24C2': 'M',
   '\uFF2D': 'M',
   '\u1E3E': 'M',
   '\u1E40': 'M',
   '\u1E42': 'M',
   '\u2C6E': 'M',
   '\u019C': 'M',
   '\u24C3': 'N',
   '\uFF2E': 'N',
   '\u01F8': 'N',
   '\u0143': 'N',
   '\u00D1': 'N',
   '\u1E44': 'N',
   '\u0147': 'N',
   '\u1E46': 'N',
   '\u0145': 'N',
   '\u1E4A': 'N',
   '\u1E48': 'N',
   '\u0220': 'N',
   '\u019D': 'N',
   '\uA790': 'N',
   '\uA7A4': 'N',
   '\u01CA': 'NJ',
   '\u01CB': 'Nj',
   '\u24C4': 'O',
   '\uFF2F': 'O',
   '\u00D2': 'O',
   '\u00D3': 'O',
   '\u00D4': 'O',
   '\u1ED2': 'O',
   '\u1ED0': 'O',
   '\u1ED6': 'O',
   '\u1ED4': 'O',
   '\u00D5': 'O',
   '\u1E4C': 'O',
   '\u022C': 'O',
   '\u1E4E': 'O',
   '\u014C': 'O',
   '\u1E50': 'O',
   '\u1E52': 'O',
   '\u014E': 'O',
   '\u022E': 'O',
   '\u0230': 'O',
   '\u00D6': 'O',
   '\u022A': 'O',
   '\u1ECE': 'O',
   '\u0150': 'O',
   '\u01D1': 'O',
   '\u020C': 'O',
   '\u020E': 'O',
   '\u01A0': 'O',
   '\u1EDC': 'O',
   '\u1EDA': 'O',
   '\u1EE0': 'O',
   '\u1EDE': 'O',
   '\u1EE2': 'O',
   '\u1ECC': 'O',
   '\u1ED8': 'O',
   '\u01EA': 'O',
   '\u01EC': 'O',
   '\u00D8': 'O',
   '\u01FE': 'O',
   '\u0186': 'O',
   '\u019F': 'O',
   '\uA74A': 'O',
   '\uA74C': 'O',
   '\u0152': 'OE',
   '\u01A2': 'OI',
   '\uA74E': 'OO',
   '\u0222': 'OU',
   '\u24C5': 'P',
   '\uFF30': 'P',
   '\u1E54': 'P',
   '\u1E56': 'P',
   '\u01A4': 'P',
   '\u2C63': 'P',
   '\uA750': 'P',
   '\uA752': 'P',
   '\uA754': 'P',
   '\u24C6': 'Q',
   '\uFF31': 'Q',
   '\uA756': 'Q',
   '\uA758': 'Q',
   '\u024A': 'Q',
   '\u24C7': 'R',
   '\uFF32': 'R',
   '\u0154': 'R',
   '\u1E58': 'R',
   '\u0158': 'R',
   '\u0210': 'R',
   '\u0212': 'R',
   '\u1E5A': 'R',
   '\u1E5C': 'R',
   '\u0156': 'R',
   '\u1E5E': 'R',
   '\u024C': 'R',
   '\u2C64': 'R',
   '\uA75A': 'R',
   '\uA7A6': 'R',
   '\uA782': 'R',
   '\u24C8': 'S',
   '\uFF33': 'S',
   '\u1E9E': 'S',
   '\u015A': 'S',
   '\u1E64': 'S',
   '\u015C': 'S',
   '\u1E60': 'S',
   '\u0160': 'S',
   '\u1E66': 'S',
   '\u1E62': 'S',
   '\u1E68': 'S',
   '\u0218': 'S',
   '\u015E': 'S',
   '\u2C7E': 'S',
   '\uA7A8': 'S',
   '\uA784': 'S',
   '\u24C9': 'T',
   '\uFF34': 'T',
   '\u1E6A': 'T',
   '\u0164': 'T',
   '\u1E6C': 'T',
   '\u021A': 'T',
   '\u0162': 'T',
   '\u1E70': 'T',
   '\u1E6E': 'T',
   '\u0166': 'T',
   '\u01AC': 'T',
   '\u01AE': 'T',
   '\u023E': 'T',
   '\uA786': 'T',
   '\uA728': 'TZ',
   '\u24CA': 'U',
   '\uFF35': 'U',
   '\u00D9': 'U',
   '\u00DA': 'U',
   '\u00DB': 'U',
   '\u0168': 'U',
   '\u1E78': 'U',
   '\u016A': 'U',
   '\u1E7A': 'U',
   '\u016C': 'U',
   '\u00DC': 'U',
   '\u01DB': 'U',
   '\u01D7': 'U',
   '\u01D5': 'U',
   '\u01D9': 'U',
   '\u1EE6': 'U',
   '\u016E': 'U',
   '\u0170': 'U',
   '\u01D3': 'U',
   '\u0214': 'U',
   '\u0216': 'U',
   '\u01AF': 'U',
   '\u1EEA': 'U',
   '\u1EE8': 'U',
   '\u1EEE': 'U',
   '\u1EEC': 'U',
   '\u1EF0': 'U',
   '\u1EE4': 'U',
   '\u1E72': 'U',
   '\u0172': 'U',
   '\u1E76': 'U',
   '\u1E74': 'U',
   '\u0244': 'U',
   '\u24CB': 'V',
   '\uFF36': 'V',
   '\u1E7C': 'V',
   '\u1E7E': 'V',
   '\u01B2': 'V',
   '\uA75E': 'V',
   '\u0245': 'V',
   '\uA760': 'VY',
   '\u24CC': 'W',
   '\uFF37': 'W',
   '\u1E80': 'W',
   '\u1E82': 'W',
   '\u0174': 'W',
   '\u1E86': 'W',
   '\u1E84': 'W',
   '\u1E88': 'W',
   '\u2C72': 'W',
   '\u24CD': 'X',
   '\uFF38': 'X',
   '\u1E8A': 'X',
   '\u1E8C': 'X',
   '\u24CE': 'Y',
   '\uFF39': 'Y',
   '\u1EF2': 'Y',
   '\u00DD': 'Y',
   '\u0176': 'Y',
   '\u1EF8': 'Y',
   '\u0232': 'Y',
   '\u1E8E': 'Y',
   '\u0178': 'Y',
   '\u1EF6': 'Y',
   '\u1EF4': 'Y',
   '\u01B3': 'Y',
   '\u024E': 'Y',
   '\u1EFE': 'Y',
   '\u24CF': 'Z',
   '\uFF3A': 'Z',
   '\u0179': 'Z',
   '\u1E90': 'Z',
   '\u017B': 'Z',
   '\u017D': 'Z',
   '\u1E92': 'Z',
   '\u1E94': 'Z',
   '\u01B5': 'Z',
   '\u0224': 'Z',
   '\u2C7F': 'Z',
   '\u2C6B': 'Z',
   '\uA762': 'Z',
   '\u24D0': 'a',
   '\uFF41': 'a',
   '\u1E9A': 'a',
   '\u00E0': 'a',
   '\u00E1': 'a',
   '\u00E2': 'a',
   '\u1EA7': 'a',
   '\u1EA5': 'a',
   '\u1EAB': 'a',
   '\u1EA9': 'a',
   '\u00E3': 'a',
   '\u0101': 'a',
   '\u0103': 'a',
   '\u1EB1': 'a',
   '\u1EAF': 'a',
   '\u1EB5': 'a',
   '\u1EB3': 'a',
   '\u0227': 'a',
   '\u01E1': 'a',
   '\u00E4': 'a',
   '\u01DF': 'a',
   '\u1EA3': 'a',
   '\u00E5': 'a',
   '\u01FB': 'a',
   '\u01CE': 'a',
   '\u0201': 'a',
   '\u0203': 'a',
   '\u1EA1': 'a',
   '\u1EAD': 'a',
   '\u1EB7': 'a',
   '\u1E01': 'a',
   '\u0105': 'a',
   '\u2C65': 'a',
   '\u0250': 'a',
   '\uA733': 'aa',
   '\u00E6': 'ae',
   '\u01FD': 'ae',
   '\u01E3': 'ae',
   '\uA735': 'ao',
   '\uA737': 'au',
   '\uA739': 'av',
   '\uA73B': 'av',
   '\uA73D': 'ay',
   '\u24D1': 'b',
   '\uFF42': 'b',
   '\u1E03': 'b',
   '\u1E05': 'b',
   '\u1E07': 'b',
   '\u0180': 'b',
   '\u0183': 'b',
   '\u0253': 'b',
   '\u24D2': 'c',
   '\uFF43': 'c',
   '\u0107': 'c',
   '\u0109': 'c',
   '\u010B': 'c',
   '\u010D': 'c',
   '\u00E7': 'c',
   '\u1E09': 'c',
   '\u0188': 'c',
   '\u023C': 'c',
   '\uA73F': 'c',
   '\u2184': 'c',
   '\u24D3': 'd',
   '\uFF44': 'd',
   '\u1E0B': 'd',
   '\u010F': 'd',
   '\u1E0D': 'd',
   '\u1E11': 'd',
   '\u1E13': 'd',
   '\u1E0F': 'd',
   '\u0111': 'd',
   '\u018C': 'd',
   '\u0256': 'd',
   '\u0257': 'd',
   '\uA77A': 'd',
   '\u01F3': 'dz',
   '\u01C6': 'dz',
   '\u24D4': 'e',
   '\uFF45': 'e',
   '\u00E8': 'e',
   '\u00E9': 'e',
   '\u00EA': 'e',
   '\u1EC1': 'e',
   '\u1EBF': 'e',
   '\u1EC5': 'e',
   '\u1EC3': 'e',
   '\u1EBD': 'e',
   '\u0113': 'e',
   '\u1E15': 'e',
   '\u1E17': 'e',
   '\u0115': 'e',
   '\u0117': 'e',
   '\u00EB': 'e',
   '\u1EBB': 'e',
   '\u011B': 'e',
   '\u0205': 'e',
   '\u0207': 'e',
   '\u1EB9': 'e',
   '\u1EC7': 'e',
   '\u0229': 'e',
   '\u1E1D': 'e',
   '\u0119': 'e',
   '\u1E19': 'e',
   '\u1E1B': 'e',
   '\u0247': 'e',
   '\u025B': 'e',
   '\u01DD': 'e',
   '\u24D5': 'f',
   '\uFF46': 'f',
   '\u1E1F': 'f',
   '\u0192': 'f',
   '\uA77C': 'f',
   '\u24D6': 'g',
   '\uFF47': 'g',
   '\u01F5': 'g',
   '\u011D': 'g',
   '\u1E21': 'g',
   '\u011F': 'g',
   '\u0121': 'g',
   '\u01E7': 'g',
   '\u0123': 'g',
   '\u01E5': 'g',
   '\u0260': 'g',
   '\uA7A1': 'g',
   '\u1D79': 'g',
   '\uA77F': 'g',
   '\u24D7': 'h',
   '\uFF48': 'h',
   '\u0125': 'h',
   '\u1E23': 'h',
   '\u1E27': 'h',
   '\u021F': 'h',
   '\u1E25': 'h',
   '\u1E29': 'h',
   '\u1E2B': 'h',
   '\u1E96': 'h',
   '\u0127': 'h',
   '\u2C68': 'h',
   '\u2C76': 'h',
   '\u0265': 'h',
   '\u0195': 'hv',
   '\u24D8': 'i',
   '\uFF49': 'i',
   '\u00EC': 'i',
   '\u00ED': 'i',
   '\u00EE': 'i',
   '\u0129': 'i',
   '\u012B': 'i',
   '\u012D': 'i',
   '\u00EF': 'i',
   '\u1E2F': 'i',
   '\u1EC9': 'i',
   '\u01D0': 'i',
   '\u0209': 'i',
   '\u020B': 'i',
   '\u1ECB': 'i',
   '\u012F': 'i',
   '\u1E2D': 'i',
   '\u0268': 'i',
   '\u0131': 'i',
   '\u24D9': 'j',
   '\uFF4A': 'j',
   '\u0135': 'j',
   '\u01F0': 'j',
   '\u0249': 'j',
   '\u24DA': 'k',
   '\uFF4B': 'k',
   '\u1E31': 'k',
   '\u01E9': 'k',
   '\u1E33': 'k',
   '\u0137': 'k',
   '\u1E35': 'k',
   '\u0199': 'k',
   '\u2C6A': 'k',
   '\uA741': 'k',
   '\uA743': 'k',
   '\uA745': 'k',
   '\uA7A3': 'k',
   '\u24DB': 'l',
   '\uFF4C': 'l',
   '\u0140': 'l',
   '\u013A': 'l',
   '\u013E': 'l',
   '\u1E37': 'l',
   '\u1E39': 'l',
   '\u013C': 'l',
   '\u1E3D': 'l',
   '\u1E3B': 'l',
   '\u017F': 'l',
   '\u0142': 'l',
   '\u019A': 'l',
   '\u026B': 'l',
   '\u2C61': 'l',
   '\uA749': 'l',
   '\uA781': 'l',
   '\uA747': 'l',
   '\u01C9': 'lj',
   '\u24DC': 'm',
   '\uFF4D': 'm',
   '\u1E3F': 'm',
   '\u1E41': 'm',
   '\u1E43': 'm',
   '\u0271': 'm',
   '\u026F': 'm',
   '\u24DD': 'n',
   '\uFF4E': 'n',
   '\u01F9': 'n',
   '\u0144': 'n',
   '\u00F1': 'n',
   '\u1E45': 'n',
   '\u0148': 'n',
   '\u1E47': 'n',
   '\u0146': 'n',
   '\u1E4B': 'n',
   '\u1E49': 'n',
   '\u019E': 'n',
   '\u0272': 'n',
   '\u0149': 'n',
   '\uA791': 'n',
   '\uA7A5': 'n',
   '\u01CC': 'nj',
   '\u24DE': 'o',
   '\uFF4F': 'o',
   '\u00F2': 'o',
   '\u00F3': 'o',
   '\u00F4': 'o',
   '\u1ED3': 'o',
   '\u1ED1': 'o',
   '\u1ED7': 'o',
   '\u1ED5': 'o',
   '\u00F5': 'o',
   '\u1E4D': 'o',
   '\u022D': 'o',
   '\u1E4F': 'o',
   '\u014D': 'o',
   '\u1E51': 'o',
   '\u1E53': 'o',
   '\u014F': 'o',
   '\u022F': 'o',
   '\u0231': 'o',
   '\u00F6': 'o',
   '\u022B': 'o',
   '\u1ECF': 'o',
   '\u0151': 'o',
   '\u01D2': 'o',
   '\u020D': 'o',
   '\u020F': 'o',
   '\u01A1': 'o',
   '\u1EDD': 'o',
   '\u1EDB': 'o',
   '\u1EE1': 'o',
   '\u1EDF': 'o',
   '\u1EE3': 'o',
   '\u1ECD': 'o',
   '\u1ED9': 'o',
   '\u01EB': 'o',
   '\u01ED': 'o',
   '\u00F8': 'o',
   '\u01FF': 'o',
   '\u0254': 'o',
   '\uA74B': 'o',
   '\uA74D': 'o',
   '\u0275': 'o',
   '\u0153': 'oe',
   '\u01A3': 'oi',
   '\u0223': 'ou',
   '\uA74F': 'oo',
   '\u24DF': 'p',
   '\uFF50': 'p',
   '\u1E55': 'p',
   '\u1E57': 'p',
   '\u01A5': 'p',
   '\u1D7D': 'p',
   '\uA751': 'p',
   '\uA753': 'p',
   '\uA755': 'p',
   '\u24E0': 'q',
   '\uFF51': 'q',
   '\u024B': 'q',
   '\uA757': 'q',
   '\uA759': 'q',
   '\u24E1': 'r',
   '\uFF52': 'r',
   '\u0155': 'r',
   '\u1E59': 'r',
   '\u0159': 'r',
   '\u0211': 'r',
   '\u0213': 'r',
   '\u1E5B': 'r',
   '\u1E5D': 'r',
   '\u0157': 'r',
   '\u1E5F': 'r',
   '\u024D': 'r',
   '\u027D': 'r',
   '\uA75B': 'r',
   '\uA7A7': 'r',
   '\uA783': 'r',
   '\u24E2': 's',
   '\uFF53': 's',
   '\u00DF': 's',
   '\u015B': 's',
   '\u1E65': 's',
   '\u015D': 's',
   '\u1E61': 's',
   '\u0161': 's',
   '\u1E67': 's',
   '\u1E63': 's',
   '\u1E69': 's',
   '\u0219': 's',
   '\u015F': 's',
   '\u023F': 's',
   '\uA7A9': 's',
   '\uA785': 's',
   '\u1E9B': 's',
   '\u24E3': 't',
   '\uFF54': 't',
   '\u1E6B': 't',
   '\u1E97': 't',
   '\u0165': 't',
   '\u1E6D': 't',
   '\u021B': 't',
   '\u0163': 't',
   '\u1E71': 't',
   '\u1E6F': 't',
   '\u0167': 't',
   '\u01AD': 't',
   '\u0288': 't',
   '\u2C66': 't',
   '\uA787': 't',
   '\uA729': 'tz',
   '\u24E4': 'u',
   '\uFF55': 'u',
   '\u00F9': 'u',
   '\u00FA': 'u',
   '\u00FB': 'u',
   '\u0169': 'u',
   '\u1E79': 'u',
   '\u016B': 'u',
   '\u1E7B': 'u',
   '\u016D': 'u',
   '\u00FC': 'u',
   '\u01DC': 'u',
   '\u01D8': 'u',
   '\u01D6': 'u',
   '\u01DA': 'u',
   '\u1EE7': 'u',
   '\u016F': 'u',
   '\u0171': 'u',
   '\u01D4': 'u',
   '\u0215': 'u',
   '\u0217': 'u',
   '\u01B0': 'u',
   '\u1EEB': 'u',
   '\u1EE9': 'u',
   '\u1EEF': 'u',
   '\u1EED': 'u',
   '\u1EF1': 'u',
   '\u1EE5': 'u',
   '\u1E73': 'u',
   '\u0173': 'u',
   '\u1E77': 'u',
   '\u1E75': 'u',
   '\u0289': 'u',
   '\u24E5': 'v',
   '\uFF56': 'v',
   '\u1E7D': 'v',
   '\u1E7F': 'v',
   '\u028B': 'v',
   '\uA75F': 'v',
   '\u028C': 'v',
   '\uA761': 'vy',
   '\u24E6': 'w',
   '\uFF57': 'w',
   '\u1E81': 'w',
   '\u1E83': 'w',
   '\u0175': 'w',
   '\u1E87': 'w',
   '\u1E85': 'w',
   '\u1E98': 'w',
   '\u1E89': 'w',
   '\u2C73': 'w',
   '\u24E7': 'x',
   '\uFF58': 'x',
   '\u1E8B': 'x',
   '\u1E8D': 'x',
   '\u24E8': 'y',
   '\uFF59': 'y',
   '\u1EF3': 'y',
   '\u00FD': 'y',
   '\u0177': 'y',
   '\u1EF9': 'y',
   '\u0233': 'y',
   '\u1E8F': 'y',
   '\u00FF': 'y',
   '\u1EF7': 'y',
   '\u1E99': 'y',
   '\u1EF5': 'y',
   '\u01B4': 'y',
   '\u024F': 'y',
   '\u1EFF': 'y',
   '\u24E9': 'z',
   '\uFF5A': 'z',
   '\u017A': 'z',
   '\u1E91': 'z',
   '\u017C': 'z',
   '\u017E': 'z',
   '\u1E93': 'z',
   '\u1E95': 'z',
   '\u01B6': 'z',
   '\u0225': 'z',
   '\u0240': 'z',
   '\u2C6C': 'z',
   '\uA763': 'z',
   '\u0386': '\u0391',
   '\u0388': '\u0395',
   '\u0389': '\u0397',
   '\u038A': '\u0399',
   '\u03AA': '\u0399',
   '\u038C': '\u039F',
   '\u038E': '\u03A5',
   '\u03AB': '\u03A5',
   '\u038F': '\u03A9',
   '\u03AC': '\u03B1',
   '\u03AD': '\u03B5',
   '\u03AE': '\u03B7',
   '\u03AF': '\u03B9',
   '\u03CA': '\u03B9',
   '\u0390': '\u03B9',
   '\u03CC': '\u03BF',
   '\u03CD': '\u03C5',
   '\u03CB': '\u03C5',
   '\u03B0': '\u03C5',
   '\u03CE': '\u03C9',
   '\u03C2': '\u03C3',
   '\u2019': '\''
 };

 return diacritics;
});

S2.define('select2/data/base',[
 '../utils'
], function (Utils) {
 function BaseAdapter ($element, options) {
   BaseAdapter.__super__.constructor.call(this);
 }

 Utils.Extend(BaseAdapter, Utils.Observable);

 BaseAdapter.prototype.current = function (callback) {
   throw new Error('The `current` method must be defined in child classes.');
 };

 BaseAdapter.prototype.query = function (params, callback) {
   throw new Error('The `query` method must be defined in child classes.');
 };

 BaseAdapter.prototype.bind = function (container, $container) {
   // Can be implemented in subclasses
 };

 BaseAdapter.prototype.destroy = function () {
   // Can be implemented in subclasses
 };

 BaseAdapter.prototype.generateResultId = function (container, data) {
   var id = container.id + '-result-';

   id += Utils.generateChars(4);

   if (data.id != null) {
	 id += '-' + data.id.toString();
   } else {
	 id += '-' + Utils.generateChars(4);
   }
   return id;
 };

 return BaseAdapter;
});

S2.define('select2/data/select',[
 './base',
 '../utils',
 'jquery'
], function (BaseAdapter, Utils, $) {
 function SelectAdapter ($element, options) {
   this.$element = $element;
   this.options = options;

   SelectAdapter.__super__.constructor.call(this);
 }

 Utils.Extend(SelectAdapter, BaseAdapter);

 SelectAdapter.prototype.current = function (callback) {
   var data = [];
   var self = this;

   this.$element.find(':selected').each(function () {
	 var $option = $(this);

	 var option = self.item($option);

	 data.push(option);
   });

   callback(data);
 };

 SelectAdapter.prototype.select = function (data) {
   var self = this;

   data.selected = true;

   // If data.element is a DOM node, use it instead
   if ($(data.element).is('option')) {
	 data.element.selected = true;

	 this.$element.trigger('input').trigger('change');

	 return;
   }

   if (this.$element.prop('multiple')) {
	 this.current(function (currentData) {
	   var val = [];

	   data = [data];
	   data.push.apply(data, currentData);

	   for (var d = 0; d < data.length; d++) {
		 var id = data[d].id;

		 if ($.inArray(id, val) === -1) {
		   val.push(id);
		 }
	   }

	   self.$element.val(val);
	   self.$element.trigger('input').trigger('change');
	 });
   } else {
	 var val = data.id;

	 this.$element.val(val);
	 this.$element.trigger('input').trigger('change');
   }
 };

 SelectAdapter.prototype.unselect = function (data) {
   var self = this;

   if (!this.$element.prop('multiple')) {
	 return;
   }

   data.selected = false;

   if ($(data.element).is('option')) {
	 data.element.selected = false;

	 this.$element.trigger('input').trigger('change');

	 return;
   }

   this.current(function (currentData) {
	 var val = [];

	 for (var d = 0; d < currentData.length; d++) {
	   var id = currentData[d].id;

	   if (id !== data.id && $.inArray(id, val) === -1) {
		 val.push(id);
	   }
	 }

	 self.$element.val(val);

	 self.$element.trigger('input').trigger('change');
   });
 };

 SelectAdapter.prototype.bind = function (container, $container) {
   var self = this;

   this.container = container;

   container.on('select', function (params) {
	 self.select(params.data);
   });

   container.on('unselect', function (params) {
	 self.unselect(params.data);
   });
 };

 SelectAdapter.prototype.destroy = function () {
   // Remove anything added to child elements
   this.$element.find('*').each(function () {
	 // Remove any custom data set by Select2
	 Utils.RemoveData(this);
   });
 };

 SelectAdapter.prototype.query = function (params, callback) {
   var data = [];
   var self = this;

   var $options = this.$element.children();

   $options.each(function () {
	 var $option = $(this);

	 if (!$option.is('option') && !$option.is('optgroup')) {
	   return;
	 }

	 var option = self.item($option);

	 var matches = self.matches(params, option);

	 if (matches !== null) {
	   data.push(matches);
	 }
   });

   callback({
	 results: data
   });
 };

 SelectAdapter.prototype.addOptions = function ($options) {
   Utils.appendMany(this.$element, $options);
 };

 SelectAdapter.prototype.option = function (data) {
   var option;

   if (data.children) {
	 option = document.createElement('optgroup');
	 option.label = data.text;
   } else {
	 option = document.createElement('option');

	 if (option.textContent !== undefined) {
	   option.textContent = data.text;
	 } else {
	   option.innerText = data.text;
	 }
   }

   if (data.id !== undefined) {
	 option.value = data.id;
   }

   if (data.disabled) {
	 option.disabled = true;
   }

   if (data.selected) {
	 option.selected = true;
   }

   if (data.title) {
	 option.title = data.title;
   }

   var $option = $(option);

   var normalizedData = this._normalizeItem(data);
   normalizedData.element = option;

   // Override the option's data with the combined data
   Utils.StoreData(option, 'data', normalizedData);

   return $option;
 };

 SelectAdapter.prototype.item = function ($option) {
   var data = {};

   data = Utils.GetData($option[0], 'data');

   if (data != null) {
	 return data;
   }

   if ($option.is('option')) {
	 data = {
	   id: $option.val(),
	   text: $option.text(),
	   disabled: $option.prop('disabled'),
	   selected: $option.prop('selected'),
	   title: $option.prop('title')
	 };
   } else if ($option.is('optgroup')) {
	 data = {
	   text: $option.prop('label'),
	   children: [],
	   title: $option.prop('title')
	 };

	 var $children = $option.children('option');
	 var children = [];

	 for (var c = 0; c < $children.length; c++) {
	   var $child = $($children[c]);

	   var child = this.item($child);

	   children.push(child);
	 }

	 data.children = children;
   }

   data = this._normalizeItem(data);
   data.element = $option[0];

   Utils.StoreData($option[0], 'data', data);

   return data;
 };

 SelectAdapter.prototype._normalizeItem = function (item) {
   if (item !== Object(item)) {
	 item = {
	   id: item,
	   text: item
	 };
   }

   item = $.extend({}, {
	 text: ''
   }, item);

   var defaults = {
	 selected: false,
	 disabled: false
   };

   if (item.id != null) {
	 item.id = item.id.toString();
   }

   if (item.text != null) {
	 item.text = item.text.toString();
   }

   if (item._resultId == null && item.id && this.container != null) {
	 item._resultId = this.generateResultId(this.container, item);
   }

   return $.extend({}, defaults, item);
 };

 SelectAdapter.prototype.matches = function (params, data) {
   var matcher = this.options.get('matcher');

   return matcher(params, data);
 };

 return SelectAdapter;
});

S2.define('select2/data/array',[
 './select',
 '../utils',
 'jquery'
], function (SelectAdapter, Utils, $) {
 function ArrayAdapter ($element, options) {
   this._dataToConvert = options.get('data') || [];

   ArrayAdapter.__super__.constructor.call(this, $element, options);
 }

 Utils.Extend(ArrayAdapter, SelectAdapter);

 ArrayAdapter.prototype.bind = function (container, $container) {
   ArrayAdapter.__super__.bind.call(this, container, $container);

   this.addOptions(this.convertToOptions(this._dataToConvert));
 };

 ArrayAdapter.prototype.select = function (data) {
   var $option = this.$element.find('option').filter(function (i, elm) {
	 return elm.value == data.id.toString();
   });

   if ($option.length === 0) {
	 $option = this.option(data);

	 this.addOptions($option);
   }

   ArrayAdapter.__super__.select.call(this, data);
 };

 ArrayAdapter.prototype.convertToOptions = function (data) {
   var self = this;

   var $existing = this.$element.find('option');
   var existingIds = $existing.map(function () {
	 return self.item($(this)).id;
   }).get();

   var $options = [];

   // Filter out all items except for the one passed in the argument
   function onlyItem (item) {
	 return function () {
	   return $(this).val() == item.id;
	 };
   }

   for (var d = 0; d < data.length; d++) {
	 var item = this._normalizeItem(data[d]);

	 // Skip items which were pre-loaded, only merge the data
	 if ($.inArray(item.id, existingIds) >= 0) {
	   var $existingOption = $existing.filter(onlyItem(item));

	   var existingData = this.item($existingOption);
	   var newData = $.extend(true, {}, item, existingData);

	   var $newOption = this.option(newData);

	   $existingOption.replaceWith($newOption);

	   continue;
	 }

	 var $option = this.option(item);

	 if (item.children) {
	   var $children = this.convertToOptions(item.children);

	   Utils.appendMany($option, $children);
	 }

	 $options.push($option);
   }

   return $options;
 };

 return ArrayAdapter;
});

S2.define('select2/data/ajax',[
 './array',
 '../utils',
 'jquery'
], function (ArrayAdapter, Utils, $) {
 function AjaxAdapter ($element, options) {
   this.ajaxOptions = this._applyDefaults(options.get('ajax'));

   if (this.ajaxOptions.processResults != null) {
	 this.processResults = this.ajaxOptions.processResults;
   }

   AjaxAdapter.__super__.constructor.call(this, $element, options);
 }

 Utils.Extend(AjaxAdapter, ArrayAdapter);

 AjaxAdapter.prototype._applyDefaults = function (options) {
   var defaults = {
	 data: function (params) {
	   return $.extend({}, params, {
		 q: params.term
	   });
	 },
	 transport: function (params, success, failure) {
	   var $request = $.ajax(params);

	   $request.then(success);
	   $request.fail(failure);

	   return $request;
	 }
   };

   return $.extend({}, defaults, options, true);
 };

 AjaxAdapter.prototype.processResults = function (results) {
   return results;
 };

 AjaxAdapter.prototype.query = function (params, callback) {
   var matches = [];
   var self = this;

   if (this._request != null) {
	 // JSONP requests cannot always be aborted
	 if ($.isFunction(this._request.abort)) {
	   this._request.abort();
	 }

	 this._request = null;
   }

   var options = $.extend({
	 type: 'GET'
   }, this.ajaxOptions);

   if (typeof options.url === 'function') {
	 options.url = options.url.call(this.$element, params);
   }

   if (typeof options.data === 'function') {
	 options.data = options.data.call(this.$element, params);
   }

   function request () {
	 var $request = options.transport(options, function (data) {
	   var results = self.processResults(data, params);

	   if (self.options.get('debug') && window.console && console.error) {
		 // Check to make sure that the response included a `results` key.
		 if (!results || !results.results || !$.isArray(results.results)) {
		   console.error(
			 'Select2: The AJAX results did not return an array in the ' +
			 '`results` key of the response.'
		   );
		 }
	   }

	   callback(results);
	 }, function () {
	   // Attempt to detect if a request was aborted
	   // Only works if the transport exposes a status property
	   if ('status' in $request &&
		   ($request.status === 0 || $request.status === '0')) {
		 return;
	   }

	   self.trigger('results:message', {
		 message: 'errorLoading'
	   });
	 });

	 self._request = $request;
   }

   if (this.ajaxOptions.delay && params.term != null) {
	 if (this._queryTimeout) {
	   window.clearTimeout(this._queryTimeout);
	 }

	 this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
   } else {
	 request();
   }
 };

 return AjaxAdapter;
});

S2.define('select2/data/tags',[
 'jquery'
], function ($) {
 function Tags (decorated, $element, options) {
   var tags = options.get('tags');

   var createTag = options.get('createTag');

   if (createTag !== undefined) {
	 this.createTag = createTag;
   }

   var insertTag = options.get('insertTag');

   if (insertTag !== undefined) {
	   this.insertTag = insertTag;
   }

   decorated.call(this, $element, options);

   if ($.isArray(tags)) {
	 for (var t = 0; t < tags.length; t++) {
	   var tag = tags[t];
	   var item = this._normalizeItem(tag);

	   var $option = this.option(item);

	   this.$element.append($option);
	 }
   }
 }

 Tags.prototype.query = function (decorated, params, callback) {
   var self = this;

   this._removeOldTags();

   if (params.term == null || params.page != null) {
	 decorated.call(this, params, callback);
	 return;
   }

   function wrapper (obj, child) {
	 var data = obj.results;

	 for (var i = 0; i < data.length; i++) {
	   var option = data[i];

	   var checkChildren = (
		 option.children != null &&
		 !wrapper({
		   results: option.children
		 }, true)
	   );

	   var optionText = (option.text || '').toUpperCase();
	   var paramsTerm = (params.term || '').toUpperCase();

	   var checkText = optionText === paramsTerm;

	   if (checkText || checkChildren) {
		 if (child) {
		   return false;
		 }

		 obj.data = data;
		 callback(obj);

		 return;
	   }
	 }

	 if (child) {
	   return true;
	 }

	 var tag = self.createTag(params);

	 if (tag != null) {
	   var $option = self.option(tag);
	   $option.attr('data-select2-tag', true);

	   self.addOptions([$option]);

	   self.insertTag(data, tag);
	 }

	 obj.results = data;

	 callback(obj);
   }

   decorated.call(this, params, wrapper);
 };

 Tags.prototype.createTag = function (decorated, params) {
   var term = $.trim(params.term);

   if (term === '') {
	 return null;
   }

   return {
	 id: term,
	 text: term
   };
 };

 Tags.prototype.insertTag = function (_, data, tag) {
   data.unshift(tag);
 };

 Tags.prototype._removeOldTags = function (_) {
   var $options = this.$element.find('option[data-select2-tag]');

   $options.each(function () {
	 if (this.selected) {
	   return;
	 }

	 $(this).remove();
   });
 };

 return Tags;
});

S2.define('select2/data/tokenizer',[
 'jquery'
], function ($) {
 function Tokenizer (decorated, $element, options) {
   var tokenizer = options.get('tokenizer');

   if (tokenizer !== undefined) {
	 this.tokenizer = tokenizer;
   }

   decorated.call(this, $element, options);
 }

 Tokenizer.prototype.bind = function (decorated, container, $container) {
   decorated.call(this, container, $container);

   this.$search =  container.dropdown.$search || container.selection.$search ||
	 $container.find('.select2-search__field');
 };

 Tokenizer.prototype.query = function (decorated, params, callback) {
   var self = this;

   function createAndSelect (data) {
	 // Normalize the data object so we can use it for checks
	 var item = self._normalizeItem(data);

	 // Check if the data object already exists as a tag
	 // Select it if it doesn't
	 var $existingOptions = self.$element.find('option').filter(function () {
	   return $(this).val() === item.id;
	 });

	 // If an existing option wasn't found for it, create the option
	 if (!$existingOptions.length) {
	   var $option = self.option(item);
	   $option.attr('data-select2-tag', true);

	   self._removeOldTags();
	   self.addOptions([$option]);
	 }

	 // Select the item, now that we know there is an option for it
	 select(item);
   }

   function select (data) {
	 self.trigger('select', {
	   data: data
	 });
   }

   params.term = params.term || '';

   var tokenData = this.tokenizer(params, this.options, createAndSelect);

   if (tokenData.term !== params.term) {
	 // Replace the search term if we have the search box
	 if (this.$search.length) {
	   this.$search.val(tokenData.term);
	   this.$search.trigger('focus');
	 }

	 params.term = tokenData.term;
   }

   decorated.call(this, params, callback);
 };

 Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
   var separators = options.get('tokenSeparators') || [];
   var term = params.term;
   var i = 0;

   var createTag = this.createTag || function (params) {
	 return {
	   id: params.term,
	   text: params.term
	 };
   };

   while (i < term.length) {
	 var termChar = term[i];

	 if ($.inArray(termChar, separators) === -1) {
	   i++;

	   continue;
	 }

	 var part = term.substr(0, i);
	 var partParams = $.extend({}, params, {
	   term: part
	 });

	 var data = createTag(partParams);

	 if (data == null) {
	   i++;
	   continue;
	 }

	 callback(data);

	 // Reset the term to not include the tokenized portion
	 term = term.substr(i + 1) || '';
	 i = 0;
   }

   return {
	 term: term
   };
 };

 return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
 function MinimumInputLength (decorated, $e, options) {
   this.minimumInputLength = options.get('minimumInputLength');

   decorated.call(this, $e, options);
 }

 MinimumInputLength.prototype.query = function (decorated, params, callback) {
   params.term = params.term || '';

   if (params.term.length < this.minimumInputLength) {
	 this.trigger('results:message', {
	   message: 'inputTooShort',
	   args: {
		 minimum: this.minimumInputLength,
		 input: params.term,
		 params: params
	   }
	 });

	 return;
   }

   decorated.call(this, params, callback);
 };

 return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
 function MaximumInputLength (decorated, $e, options) {
   this.maximumInputLength = options.get('maximumInputLength');

   decorated.call(this, $e, options);
 }

 MaximumInputLength.prototype.query = function (decorated, params, callback) {
   params.term = params.term || '';

   if (this.maximumInputLength > 0 &&
	   params.term.length > this.maximumInputLength) {
	 this.trigger('results:message', {
	   message: 'inputTooLong',
	   args: {
		 maximum: this.maximumInputLength,
		 input: params.term,
		 params: params
	   }
	 });

	 return;
   }

   decorated.call(this, params, callback);
 };

 return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
 function MaximumSelectionLength (decorated, $e, options) {
   this.maximumSelectionLength = options.get('maximumSelectionLength');

   decorated.call(this, $e, options);
 }

 MaximumSelectionLength.prototype.bind =
   function (decorated, container, $container) {
	 var self = this;

	 decorated.call(this, container, $container);

	 container.on('select', function () {
	   self._checkIfMaximumSelected();
	 });
 };

 MaximumSelectionLength.prototype.query =
   function (decorated, params, callback) {
	 var self = this;

	 this._checkIfMaximumSelected(function () {
	   decorated.call(self, params, callback);
	 });
 };

 MaximumSelectionLength.prototype._checkIfMaximumSelected =
   function (_, successCallback) {
	 var self = this;

	 this.current(function (currentData) {
	   var count = currentData != null ? currentData.length : 0;
	   if (self.maximumSelectionLength > 0 &&
		 count >= self.maximumSelectionLength) {
		 self.trigger('results:message', {
		   message: 'maximumSelected',
		   args: {
			 maximum: self.maximumSelectionLength
		   }
		 });
		 return;
	   }

	   if (successCallback) {
		 successCallback();
	   }
	 });
 };

 return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
 'jquery',
 './utils'
], function ($, Utils) {
 function Dropdown ($element, options) {
   this.$element = $element;
   this.options = options;

   Dropdown.__super__.constructor.call(this);
 }

 Utils.Extend(Dropdown, Utils.Observable);

 Dropdown.prototype.render = function () {
   var $dropdown = $(
	 '<span class="select2-dropdown">' +
	   '<span class="select2-results"></span>' +
	 '</span>'
   );

   $dropdown.attr('dir', this.options.get('dir'));

   this.$dropdown = $dropdown;

   return $dropdown;
 };

 Dropdown.prototype.bind = function () {
   // Should be implemented in subclasses
 };

 Dropdown.prototype.position = function ($dropdown, $container) {
   // Should be implemented in subclasses
 };

 Dropdown.prototype.destroy = function () {
   // Remove the dropdown from the DOM
   this.$dropdown.remove();
 };

 return Dropdown;
});

S2.define('select2/dropdown/search',[
 'jquery',
 '../utils'
], function ($, Utils) {
 function Search () { }

 Search.prototype.render = function (decorated) {
   var $rendered = decorated.call(this);

   var $search = $(
	 '<span class="select2-search select2-search--dropdown">' +
	   '<input class="select2-search__field" type="search" tabindex="-1"' +
	   ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
	   ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
	 '</span>'
   );

   this.$searchContainer = $search;
   this.$search = $search.find('input');

   $rendered.prepend($search);

   return $rendered;
 };

 Search.prototype.bind = function (decorated, container, $container) {
   var self = this;

   var resultsId = container.id + '-results';

   decorated.call(this, container, $container);

   this.$search.on('keydown', function (evt) {
	 self.trigger('keypress', evt);

	 self._keyUpPrevented = evt.isDefaultPrevented();
   });

   // Workaround for browsers which do not support the `input` event
   // This will prevent double-triggering of events for browsers which support
   // both the `keyup` and `input` events.
   this.$search.on('input', function (evt) {
	 // Unbind the duplicated `keyup` event
	 $(this).off('keyup');
   });

   this.$search.on('keyup input', function (evt) {
	 self.handleSearch(evt);
   });

   container.on('open', function () {
	 self.$search.attr('tabindex', 0);
	 self.$search.attr('aria-controls', resultsId);

	 self.$search.trigger('focus');

	 window.setTimeout(function () {
	   self.$search.trigger('focus');
	 }, 0);
   });

   container.on('close', function () {
	 self.$search.attr('tabindex', -1);
	 self.$search.removeAttr('aria-controls');
	 self.$search.removeAttr('aria-activedescendant');

	 self.$search.val('');
	 self.$search.trigger('blur');
   });

   container.on('focus', function () {
	 if (!container.isOpen()) {
	   self.$search.trigger('focus');
	 }
   });

   container.on('results:all', function (params) {
	 if (params.query.term == null || params.query.term === '') {
	   var showSearch = self.showSearch(params);

	   if (showSearch) {
		 self.$searchContainer.removeClass('select2-search--hide');
	   } else {
		 self.$searchContainer.addClass('select2-search--hide');
	   }
	 }
   });

   container.on('results:focus', function (params) {
	 if (params.data._resultId) {
	   self.$search.attr('aria-activedescendant', params.data._resultId);
	 } else {
	   self.$search.removeAttr('aria-activedescendant');
	 }
   });
 };

 Search.prototype.handleSearch = function (evt) {
   if (!this._keyUpPrevented) {
	 var input = this.$search.val();

	 this.trigger('query', {
	   term: input
	 });
   }

   this._keyUpPrevented = false;
 };

 Search.prototype.showSearch = function (_, params) {
   return true;
 };

 return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
 function HidePlaceholder (decorated, $element, options, dataAdapter) {
   this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

   decorated.call(this, $element, options, dataAdapter);
 }

 HidePlaceholder.prototype.append = function (decorated, data) {
   data.results = this.removePlaceholder(data.results);

   decorated.call(this, data);
 };

 HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
   if (typeof placeholder === 'string') {
	 placeholder = {
	   id: '',
	   text: placeholder
	 };
   }

   return placeholder;
 };

 HidePlaceholder.prototype.removePlaceholder = function (_, data) {
   var modifiedData = data.slice(0);

   for (var d = data.length - 1; d >= 0; d--) {
	 var item = data[d];

	 if (this.placeholder.id === item.id) {
	   modifiedData.splice(d, 1);
	 }
   }

   return modifiedData;
 };

 return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
 'jquery'
], function ($) {
 function InfiniteScroll (decorated, $element, options, dataAdapter) {
   this.lastParams = {};

   decorated.call(this, $element, options, dataAdapter);

   this.$loadingMore = this.createLoadingMore();
   this.loading = false;
 }

 InfiniteScroll.prototype.append = function (decorated, data) {
   this.$loadingMore.remove();
   this.loading = false;

   decorated.call(this, data);

   if (this.showLoadingMore(data)) {
	 this.$results.append(this.$loadingMore);
	 this.loadMoreIfNeeded();
   }
 };

 InfiniteScroll.prototype.bind = function (decorated, container, $container) {
   var self = this;

   decorated.call(this, container, $container);

   container.on('query', function (params) {
	 self.lastParams = params;
	 self.loading = true;
   });

   container.on('query:append', function (params) {
	 self.lastParams = params;
	 self.loading = true;
   });

   this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
 };

 InfiniteScroll.prototype.loadMoreIfNeeded = function () {
   var isLoadMoreVisible = $.contains(
	 document.documentElement,
	 this.$loadingMore[0]
   );

   if (this.loading || !isLoadMoreVisible) {
	 return;
   }

   var currentOffset = this.$results.offset().top +
	 this.$results.outerHeight(false);
   var loadingMoreOffset = this.$loadingMore.offset().top +
	 this.$loadingMore.outerHeight(false);

   if (currentOffset + 50 >= loadingMoreOffset) {
	 this.loadMore();
   }
 };

 InfiniteScroll.prototype.loadMore = function () {
   this.loading = true;

   var params = $.extend({}, {page: 1}, this.lastParams);

   params.page++;

   this.trigger('query:append', params);
 };

 InfiniteScroll.prototype.showLoadingMore = function (_, data) {
   return data.pagination && data.pagination.more;
 };

 InfiniteScroll.prototype.createLoadingMore = function () {
   var $option = $(
	 '<li ' +
	 'class="select2-results__option select2-results__option--load-more"' +
	 'role="option" aria-disabled="true"></li>'
   );

   var message = this.options.get('translations').get('loadingMore');

   $option.html(message(this.lastParams));

   return $option;
 };

 return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
 'jquery',
 '../utils'
], function ($, Utils) {
 function AttachBody (decorated, $element, options) {
   this.$dropdownParent = $(options.get('dropdownParent') || document.body);

   decorated.call(this, $element, options);
 }

 AttachBody.prototype.bind = function (decorated, container, $container) {
   var self = this;

   decorated.call(this, container, $container);

   container.on('open', function () {
	 self._showDropdown();
	 self._attachPositioningHandler(container);

	 // Must bind after the results handlers to ensure correct sizing
	 self._bindContainerResultHandlers(container);
   });

   container.on('close', function () {
	 self._hideDropdown();
	 self._detachPositioningHandler(container);
   });

   this.$dropdownContainer.on('mousedown', function (evt) {
	 evt.stopPropagation();
   });
 };

 AttachBody.prototype.destroy = function (decorated) {
   decorated.call(this);

   this.$dropdownContainer.remove();
 };

 AttachBody.prototype.position = function (decorated, $dropdown, $container) {
   // Clone all of the container classes
   $dropdown.attr('class', $container.attr('class'));

   $dropdown.removeClass('select2');
   $dropdown.addClass('select2-container--open');

   $dropdown.css({
	 position: 'absolute',
	 top: -999999
   });

   this.$container = $container;
 };

 AttachBody.prototype.render = function (decorated) {
   var $container = $('<span></span>');

   var $dropdown = decorated.call(this);
   $container.append($dropdown);

   this.$dropdownContainer = $container;

   return $container;
 };

 AttachBody.prototype._hideDropdown = function (decorated) {
   this.$dropdownContainer.detach();
 };

 AttachBody.prototype._bindContainerResultHandlers =
	 function (decorated, container) {

   // These should only be bound once
   if (this._containerResultsHandlersBound) {
	 return;
   }

   var self = this;

   container.on('results:all', function () {
	 self._positionDropdown();
	 self._resizeDropdown();
   });

   container.on('results:append', function () {
	 self._positionDropdown();
	 self._resizeDropdown();
   });

   container.on('results:message', function () {
	 self._positionDropdown();
	 self._resizeDropdown();
   });

   container.on('select', function () {
	 self._positionDropdown();
	 self._resizeDropdown();
   });

   container.on('unselect', function () {
	 self._positionDropdown();
	 self._resizeDropdown();
   });

   this._containerResultsHandlersBound = true;
 };

 AttachBody.prototype._attachPositioningHandler =
	 function (decorated, container) {
   var self = this;

   var scrollEvent = 'scroll.select2.' + container.id;
   var resizeEvent = 'resize.select2.' + container.id;
   var orientationEvent = 'orientationchange.select2.' + container.id;

   var $watchers = this.$container.parents().filter(Utils.hasScroll);
   $watchers.each(function () {
	 Utils.StoreData(this, 'select2-scroll-position', {
	   x: $(this).scrollLeft(),
	   y: $(this).scrollTop()
	 });
   });

   $watchers.on(scrollEvent, function (ev) {
	 var position = Utils.GetData(this, 'select2-scroll-position');
	 $(this).scrollTop(position.y);
   });

   $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
	 function (e) {
	 self._positionDropdown();
	 self._resizeDropdown();
   });
 };

 AttachBody.prototype._detachPositioningHandler =
	 function (decorated, container) {
   var scrollEvent = 'scroll.select2.' + container.id;
   var resizeEvent = 'resize.select2.' + container.id;
   var orientationEvent = 'orientationchange.select2.' + container.id;

   var $watchers = this.$container.parents().filter(Utils.hasScroll);
   $watchers.off(scrollEvent);

   $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
 };

 AttachBody.prototype._positionDropdown = function () {
   var $window = $(window);

   var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
   var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

   var newDirection = null;

   var offset = this.$container.offset();

   offset.bottom = offset.top + this.$container.outerHeight(false);

   var container = {
	 height: this.$container.outerHeight(false)
   };

   container.top = offset.top;
   container.bottom = offset.top + container.height;

   var dropdown = {
	 height: this.$dropdown.outerHeight(false)
   };

   var viewport = {
	 top: $window.scrollTop(),
	 bottom: $window.scrollTop() + $window.height()
   };

   var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
   var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

   var css = {
	 left: offset.left,
	 top: container.bottom
   };

   // Determine what the parent element is to use for calculating the offset
   var $offsetParent = this.$dropdownParent;

   // For statically positioned elements, we need to get the element
   // that is determining the offset
   if ($offsetParent.css('position') === 'static') {
	 $offsetParent = $offsetParent.offsetParent();
   }

   var parentOffset = {
	 top: 0,
	 left: 0
   };

   if (
	 $.contains(document.body, $offsetParent[0]) ||
	 $offsetParent[0].isConnected
	 ) {
	 parentOffset = $offsetParent.offset();
   }

   css.top -= parentOffset.top;
   css.left -= parentOffset.left;

   if (!isCurrentlyAbove && !isCurrentlyBelow) {
	 newDirection = 'below';
   }

   if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
	 newDirection = 'above';
   } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
	 newDirection = 'below';
   }

   if (newDirection == 'above' ||
	 (isCurrentlyAbove && newDirection !== 'below')) {
	 css.top = container.top - parentOffset.top - dropdown.height;
   }

   if (newDirection != null) {
	 this.$dropdown
	   .removeClass('select2-dropdown--below select2-dropdown--above')
	   .addClass('select2-dropdown--' + newDirection);
	 this.$container
	   .removeClass('select2-container--below select2-container--above')
	   .addClass('select2-container--' + newDirection);
   }

   this.$dropdownContainer.css(css);
 };

 AttachBody.prototype._resizeDropdown = function () {
   var css = {
	 width: this.$container.outerWidth(false) + 'px'
   };

   if (this.options.get('dropdownAutoWidth')) {
	 css.minWidth = css.width;
	 css.position = 'relative';
	 css.width = 'auto';
   }

   this.$dropdown.css(css);
 };

 AttachBody.prototype._showDropdown = function (decorated) {
   this.$dropdownContainer.appendTo(this.$dropdownParent);

   this._positionDropdown();
   this._resizeDropdown();
 };

 return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
 function countResults (data) {
   var count = 0;

   for (var d = 0; d < data.length; d++) {
	 var item = data[d];

	 if (item.children) {
	   count += countResults(item.children);
	 } else {
	   count++;
	 }
   }

   return count;
 }

 function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
   this.minimumResultsForSearch = options.get('minimumResultsForSearch');

   if (this.minimumResultsForSearch < 0) {
	 this.minimumResultsForSearch = Infinity;
   }

   decorated.call(this, $element, options, dataAdapter);
 }

 MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
   if (countResults(params.data.results) < this.minimumResultsForSearch) {
	 return false;
   }

   return decorated.call(this, params);
 };

 return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[
 '../utils'
], function (Utils) {
 function SelectOnClose () { }

 SelectOnClose.prototype.bind = function (decorated, container, $container) {
   var self = this;

   decorated.call(this, container, $container);

   container.on('close', function (params) {
	 self._handleSelectOnClose(params);
   });
 };

 SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
   if (params && params.originalSelect2Event != null) {
	 var event = params.originalSelect2Event;

	 // Don't select an item if the close event was triggered from a select or
	 // unselect event
	 if (event._type === 'select' || event._type === 'unselect') {
	   return;
	 }
   }

   var $highlightedResults = this.getHighlightedResults();

   // Only select highlighted results
   if ($highlightedResults.length < 1) {
	 return;
   }

   var data = Utils.GetData($highlightedResults[0], 'data');

   // Don't re-select already selected resulte
   if (
	 (data.element != null && data.element.selected) ||
	 (data.element == null && data.selected)
   ) {
	 return;
   }

   this.trigger('select', {
	   data: data
   });
 };

 return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
 function CloseOnSelect () { }

 CloseOnSelect.prototype.bind = function (decorated, container, $container) {
   var self = this;

   decorated.call(this, container, $container);

   container.on('select', function (evt) {
	 self._selectTriggered(evt);
   });

   container.on('unselect', function (evt) {
	 self._selectTriggered(evt);
   });
 };

 CloseOnSelect.prototype._selectTriggered = function (_, evt) {
   var originalEvent = evt.originalEvent;

   // Don't close if the control key is being held
   if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
	 return;
   }

   this.trigger('close', {
	 originalEvent: originalEvent,
	 originalSelect2Event: evt
   });
 };

 return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
 // English
 return {
   errorLoading: function () {
	 return 'The results could not be loaded.';
   },
   inputTooLong: function (args) {
	 var overChars = args.input.length - args.maximum;

	 var message = 'Please delete ' + overChars + ' character';

	 if (overChars != 1) {
	   message += 's';
	 }

	 return message;
   },
   inputTooShort: function (args) {
	 var remainingChars = args.minimum - args.input.length;

	 var message = 'Please enter ' + remainingChars + ' or more characters';

	 return message;
   },
   loadingMore: function () {
	 return 'Loading more results…';
   },
   maximumSelected: function (args) {
	 var message = 'You can only select ' + args.maximum + ' item';

	 if (args.maximum != 1) {
	   message += 's';
	 }

	 return message;
   },
   noResults: function () {
	 return 'No results found';
   },
   searching: function () {
	 return 'Searching…';
   },
   removeAllItems: function () {
	 return 'Remove all items';
   }
 };
});

S2.define('select2/defaults',[
 'jquery',
 'require',

 './results',

 './selection/single',
 './selection/multiple',
 './selection/placeholder',
 './selection/allowClear',
 './selection/search',
 './selection/eventRelay',

 './utils',
 './translation',
 './diacritics',

 './data/select',
 './data/array',
 './data/ajax',
 './data/tags',
 './data/tokenizer',
 './data/minimumInputLength',
 './data/maximumInputLength',
 './data/maximumSelectionLength',

 './dropdown',
 './dropdown/search',
 './dropdown/hidePlaceholder',
 './dropdown/infiniteScroll',
 './dropdown/attachBody',
 './dropdown/minimumResultsForSearch',
 './dropdown/selectOnClose',
 './dropdown/closeOnSelect',

 './i18n/en'
], function ($, require,

			ResultsList,

			SingleSelection, MultipleSelection, Placeholder, AllowClear,
			SelectionSearch, EventRelay,

			Utils, Translation, DIACRITICS,

			SelectData, ArrayData, AjaxData, Tags, Tokenizer,
			MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

			Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
			AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

			EnglishTranslation) {
 function Defaults () {
   this.reset();
 }

 Defaults.prototype.apply = function (options) {
   options = $.extend(true, {}, this.defaults, options);

   if (options.dataAdapter == null) {
	 if (options.ajax != null) {
	   options.dataAdapter = AjaxData;
	 } else if (options.data != null) {
	   options.dataAdapter = ArrayData;
	 } else {
	   options.dataAdapter = SelectData;
	 }

	 if (options.minimumInputLength > 0) {
	   options.dataAdapter = Utils.Decorate(
		 options.dataAdapter,
		 MinimumInputLength
	   );
	 }

	 if (options.maximumInputLength > 0) {
	   options.dataAdapter = Utils.Decorate(
		 options.dataAdapter,
		 MaximumInputLength
	   );
	 }

	 if (options.maximumSelectionLength > 0) {
	   options.dataAdapter = Utils.Decorate(
		 options.dataAdapter,
		 MaximumSelectionLength
	   );
	 }

	 if (options.tags) {
	   options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
	 }

	 if (options.tokenSeparators != null || options.tokenizer != null) {
	   options.dataAdapter = Utils.Decorate(
		 options.dataAdapter,
		 Tokenizer
	   );
	 }

	 if (options.query != null) {
	   var Query = require(options.amdBase + 'compat/query');

	   options.dataAdapter = Utils.Decorate(
		 options.dataAdapter,
		 Query
	   );
	 }

	 if (options.initSelection != null) {
	   var InitSelection = require(options.amdBase + 'compat/initSelection');

	   options.dataAdapter = Utils.Decorate(
		 options.dataAdapter,
		 InitSelection
	   );
	 }
   }

   if (options.resultsAdapter == null) {
	 options.resultsAdapter = ResultsList;

	 if (options.ajax != null) {
	   options.resultsAdapter = Utils.Decorate(
		 options.resultsAdapter,
		 InfiniteScroll
	   );
	 }

	 if (options.placeholder != null) {
	   options.resultsAdapter = Utils.Decorate(
		 options.resultsAdapter,
		 HidePlaceholder
	   );
	 }

	 if (options.selectOnClose) {
	   options.resultsAdapter = Utils.Decorate(
		 options.resultsAdapter,
		 SelectOnClose
	   );
	 }
   }

   if (options.dropdownAdapter == null) {
	 if (options.multiple) {
	   options.dropdownAdapter = Dropdown;
	 } else {
	   var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

	   options.dropdownAdapter = SearchableDropdown;
	 }

	 if (options.minimumResultsForSearch !== 0) {
	   options.dropdownAdapter = Utils.Decorate(
		 options.dropdownAdapter,
		 MinimumResultsForSearch
	   );
	 }

	 if (options.closeOnSelect) {
	   options.dropdownAdapter = Utils.Decorate(
		 options.dropdownAdapter,
		 CloseOnSelect
	   );
	 }

	 if (
	   options.dropdownCssClass != null ||
	   options.dropdownCss != null ||
	   options.adaptDropdownCssClass != null
	 ) {
	   var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

	   options.dropdownAdapter = Utils.Decorate(
		 options.dropdownAdapter,
		 DropdownCSS
	   );
	 }

	 options.dropdownAdapter = Utils.Decorate(
	   options.dropdownAdapter,
	   AttachBody
	 );
   }

   if (options.selectionAdapter == null) {
	 if (options.multiple) {
	   options.selectionAdapter = MultipleSelection;
	 } else {
	   options.selectionAdapter = SingleSelection;
	 }

	 // Add the placeholder mixin if a placeholder was specified
	 if (options.placeholder != null) {
	   options.selectionAdapter = Utils.Decorate(
		 options.selectionAdapter,
		 Placeholder
	   );
	 }

	 if (options.allowClear) {
	   options.selectionAdapter = Utils.Decorate(
		 options.selectionAdapter,
		 AllowClear
	   );
	 }

	 if (options.multiple) {
	   options.selectionAdapter = Utils.Decorate(
		 options.selectionAdapter,
		 SelectionSearch
	   );
	 }

	 if (
	   options.containerCssClass != null ||
	   options.containerCss != null ||
	   options.adaptContainerCssClass != null
	 ) {
	   var ContainerCSS = require(options.amdBase + 'compat/containerCss');

	   options.selectionAdapter = Utils.Decorate(
		 options.selectionAdapter,
		 ContainerCSS
	   );
	 }

	 options.selectionAdapter = Utils.Decorate(
	   options.selectionAdapter,
	   EventRelay
	 );
   }

   // If the defaults were not previously applied from an element, it is
   // possible for the language option to have not been resolved
   options.language = this._resolveLanguage(options.language);

   // Always fall back to English since it will always be complete
   options.language.push('en');

   var uniqueLanguages = [];

   for (var l = 0; l < options.language.length; l++) {
	 var language = options.language[l];

	 if (uniqueLanguages.indexOf(language) === -1) {
	   uniqueLanguages.push(language);
	 }
   }

   options.language = uniqueLanguages;

   options.translations = this._processTranslations(
	 options.language,
	 options.debug
   );

   return options;
 };

 Defaults.prototype.reset = function () {
   function stripDiacritics (text) {
	 // Used 'uni range + named function' from http://jsperf.com/diacritics/18
	 function match(a) {
	   return DIACRITICS[a] || a;
	 }

	 return text.replace(/[^\u0000-\u007E]/g, match);
   }

   function matcher (params, data) {
	 // Always return the object if there is nothing to compare
	 if ($.trim(params.term) === '') {
	   return data;
	 }

	 // Do a recursive check for options with children
	 if (data.children && data.children.length > 0) {
	   // Clone the data object if there are children
	   // This is required as we modify the object to remove any non-matches
	   var match = $.extend(true, {}, data);

	   // Check each child of the option
	   for (var c = data.children.length - 1; c >= 0; c--) {
		 var child = data.children[c];

		 var matches = matcher(params, child);

		 // If there wasn't a match, remove the object in the array
		 if (matches == null) {
		   match.children.splice(c, 1);
		 }
	   }

	   // If any children matched, return the new object
	   if (match.children.length > 0) {
		 return match;
	   }

	   // If there were no matching children, check just the plain object
	   return matcher(params, match);
	 }

	 var original = stripDiacritics(data.text).toUpperCase();
	 var term = stripDiacritics(params.term).toUpperCase();

	 // Check if the text contains the term
	 if (original.indexOf(term) > -1) {
	   return data;
	 }

	 // If it doesn't contain the term, don't return anything
	 return null;
   }

   this.defaults = {
	 amdBase: './',
	 amdLanguageBase: './i18n/',
	 closeOnSelect: true,
	 debug: false,
	 dropdownAutoWidth: false,
	 escapeMarkup: Utils.escapeMarkup,
	 language: {},
	 matcher: matcher,
	 minimumInputLength: 0,
	 maximumInputLength: 0,
	 maximumSelectionLength: 0,
	 minimumResultsForSearch: 0,
	 selectOnClose: false,
	 scrollAfterSelect: false,
	 sorter: function (data) {
	   return data;
	 },
	 templateResult: function (result) {
	   return result.text;
	 },
	 templateSelection: function (selection) {
	   return selection.text;
	 },
	 theme: 'default',
	 width: 'resolve'
   };
 };

 Defaults.prototype.applyFromElement = function (options, $element) {
   var optionLanguage = options.language;
   var defaultLanguage = this.defaults.language;
   var elementLanguage = $element.prop('lang');
   var parentLanguage = $element.closest('[lang]').prop('lang');

   var languages = Array.prototype.concat.call(
	 this._resolveLanguage(elementLanguage),
	 this._resolveLanguage(optionLanguage),
	 this._resolveLanguage(defaultLanguage),
	 this._resolveLanguage(parentLanguage)
   );

   options.language = languages;

   return options;
 };

 Defaults.prototype._resolveLanguage = function (language) {
   if (!language) {
	 return [];
   }

   if ($.isEmptyObject(language)) {
	 return [];
   }

   if ($.isPlainObject(language)) {
	 return [language];
   }

   var languages;

   if (!$.isArray(language)) {
	 languages = [language];
   } else {
	 languages = language;
   }

   var resolvedLanguages = [];

   for (var l = 0; l < languages.length; l++) {
	 resolvedLanguages.push(languages[l]);

	 if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
	   // Extract the region information if it is included
	   var languageParts = languages[l].split('-');
	   var baseLanguage = languageParts[0];

	   resolvedLanguages.push(baseLanguage);
	 }
   }

   return resolvedLanguages;
 };

 Defaults.prototype._processTranslations = function (languages, debug) {
   var translations = new Translation();

   for (var l = 0; l < languages.length; l++) {
	 var languageData = new Translation();

	 var language = languages[l];

	 if (typeof language === 'string') {
	   try {
		 // Try to load it with the original name
		 languageData = Translation.loadPath(language);
	   } catch (e) {
		 try {
		   // If we couldn't load it, check if it wasn't the full path
		   language = this.defaults.amdLanguageBase + language;
		   languageData = Translation.loadPath(language);
		 } catch (ex) {
		   // The translation could not be loaded at all. Sometimes this is
		   // because of a configuration problem, other times this can be
		   // because of how Select2 helps load all possible translation files
		   if (debug && window.console && console.warn) {
			 console.warn(
			   'Select2: The language file for "' + language + '" could ' +
			   'not be automatically loaded. A fallback will be used instead.'
			 );
		   }
		 }
	   }
	 } else if ($.isPlainObject(language)) {
	   languageData = new Translation(language);
	 } else {
	   languageData = language;
	 }

	 translations.extend(languageData);
   }

   return translations;
 };

 Defaults.prototype.set = function (key, value) {
   var camelKey = $.camelCase(key);

   var data = {};
   data[camelKey] = value;

   var convertedData = Utils._convertData(data);

   $.extend(true, this.defaults, convertedData);
 };

 var defaults = new Defaults();

 return defaults;
});

S2.define('select2/options',[
 'require',
 'jquery',
 './defaults',
 './utils'
], function (require, $, Defaults, Utils) {
 function Options (options, $element) {
   this.options = options;

   if ($element != null) {
	 this.fromElement($element);
   }

   if ($element != null) {
	 this.options = Defaults.applyFromElement(this.options, $element);
   }

   this.options = Defaults.apply(this.options);

   if ($element && $element.is('input')) {
	 var InputCompat = require(this.get('amdBase') + 'compat/inputData');

	 this.options.dataAdapter = Utils.Decorate(
	   this.options.dataAdapter,
	   InputCompat
	 );
   }
 }

 Options.prototype.fromElement = function ($e) {
   var excludedData = ['select2'];

   if (this.options.multiple == null) {
	 this.options.multiple = $e.prop('multiple');
   }

   if (this.options.disabled == null) {
	 this.options.disabled = $e.prop('disabled');
   }

   if (this.options.dir == null) {
	 if ($e.prop('dir')) {
	   this.options.dir = $e.prop('dir');
	 } else if ($e.closest('[dir]').prop('dir')) {
	   this.options.dir = $e.closest('[dir]').prop('dir');
	 } else {
	   this.options.dir = 'ltr';
	 }
   }

   $e.prop('disabled', this.options.disabled);
   $e.prop('multiple', this.options.multiple);

   if (Utils.GetData($e[0], 'select2Tags')) {
	 if (this.options.debug && window.console && console.warn) {
	   console.warn(
		 'Select2: The `data-select2-tags` attribute has been changed to ' +
		 'use the `data-data` and `data-tags="true"` attributes and will be ' +
		 'removed in future versions of Select2.'
	   );
	 }

	 Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
	 Utils.StoreData($e[0], 'tags', true);
   }

   if (Utils.GetData($e[0], 'ajaxUrl')) {
	 if (this.options.debug && window.console && console.warn) {
	   console.warn(
		 'Select2: The `data-ajax-url` attribute has been changed to ' +
		 '`data-ajax--url` and support for the old attribute will be removed' +
		 ' in future versions of Select2.'
	   );
	 }

	 $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
	 Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
   }

   var dataset = {};

   function upperCaseLetter(_, letter) {
	 return letter.toUpperCase();
   }

   // Pre-load all of the attributes which are prefixed with `data-`
   for (var attr = 0; attr < $e[0].attributes.length; attr++) {
	 var attributeName = $e[0].attributes[attr].name;
	 var prefix = 'data-';

	 if (attributeName.substr(0, prefix.length) == prefix) {
	   // Get the contents of the attribute after `data-`
	   var dataName = attributeName.substring(prefix.length);

	   // Get the data contents from the consistent source
	   // This is more than likely the jQuery data helper
	   var dataValue = Utils.GetData($e[0], dataName);

	   // camelCase the attribute name to match the spec
	   var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);

	   // Store the data attribute contents into the dataset since
	   dataset[camelDataName] = dataValue;
	 }
   }

   // Prefer the element's `dataset` attribute if it exists
   // jQuery 1.x does not correctly handle data attributes with multiple dashes
   if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
	 dataset = $.extend(true, {}, $e[0].dataset, dataset);
   }

   // Prefer our internal data cache if it exists
   var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);

   data = Utils._convertData(data);

   for (var key in data) {
	 if ($.inArray(key, excludedData) > -1) {
	   continue;
	 }

	 if ($.isPlainObject(this.options[key])) {
	   $.extend(this.options[key], data[key]);
	 } else {
	   this.options[key] = data[key];
	 }
   }

   return this;
 };

 Options.prototype.get = function (key) {
   return this.options[key];
 };

 Options.prototype.set = function (key, val) {
   this.options[key] = val;
 };

 return Options;
});

S2.define('select2/core',[
 'jquery',
 './options',
 './utils',
 './keys'
], function ($, Options, Utils, KEYS) {
 var Select2 = function ($element, options) {
   if (Utils.GetData($element[0], 'select2') != null) {
	 Utils.GetData($element[0], 'select2').destroy();
   }

   this.$element = $element;

   this.id = this._generateId($element);

   options = options || {};

   this.options = new Options(options, $element);

   Select2.__super__.constructor.call(this);

   // Set up the tabindex

   var tabindex = $element.attr('tabindex') || 0;
   Utils.StoreData($element[0], 'old-tabindex', tabindex);
   $element.attr('tabindex', '-1');

   // Set up containers and adapters

   var DataAdapter = this.options.get('dataAdapter');
   this.dataAdapter = new DataAdapter($element, this.options);

   var $container = this.render();

   this._placeContainer($container);

   var SelectionAdapter = this.options.get('selectionAdapter');
   this.selection = new SelectionAdapter($element, this.options);
   this.$selection = this.selection.render();

   this.selection.position(this.$selection, $container);

   var DropdownAdapter = this.options.get('dropdownAdapter');
   this.dropdown = new DropdownAdapter($element, this.options);
   this.$dropdown = this.dropdown.render();

   this.dropdown.position(this.$dropdown, $container);

   var ResultsAdapter = this.options.get('resultsAdapter');
   this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
   this.$results = this.results.render();

   this.results.position(this.$results, this.$dropdown);

   // Bind events

   var self = this;

   // Bind the container to all of the adapters
   this._bindAdapters();

   // Register any DOM event handlers
   this._registerDomEvents();

   // Register any internal event handlers
   this._registerDataEvents();
   this._registerSelectionEvents();
   this._registerDropdownEvents();
   this._registerResultsEvents();
   this._registerEvents();

   // Set the initial state
   this.dataAdapter.current(function (initialData) {
	 self.trigger('selection:update', {
	   data: initialData
	 });
   });

   // Hide the original select
   $element.addClass('select2-hidden-accessible');
   $element.attr('aria-hidden', 'true');

   // Synchronize any monitored attributes
   this._syncAttributes();

   Utils.StoreData($element[0], 'select2', this);

   // Ensure backwards compatibility with $element.data('select2').
   $element.data('select2', this);
 };

 Utils.Extend(Select2, Utils.Observable);

 Select2.prototype._generateId = function ($element) {
   var id = '';

   if ($element.attr('id') != null) {
	 id = $element.attr('id');
   } else if ($element.attr('name') != null) {
	 id = $element.attr('name') + '-' + Utils.generateChars(2);
   } else {
	 id = Utils.generateChars(4);
   }

   id = id.replace(/(:|\.|\[|\]|,)/g, '');
   id = 'select2-' + id;

   return id;
 };

 Select2.prototype._placeContainer = function ($container) {
   $container.insertAfter(this.$element);

   var width = this._resolveWidth(this.$element, this.options.get('width'));

   if (width != null) {
	 $container.css('width', width);
   }
 };

 Select2.prototype._resolveWidth = function ($element, method) {
   var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

   if (method == 'resolve') {
	 var styleWidth = this._resolveWidth($element, 'style');

	 if (styleWidth != null) {
	   return styleWidth;
	 }

	 return this._resolveWidth($element, 'element');
   }

   if (method == 'element') {
	 var elementWidth = $element.outerWidth(false);

	 if (elementWidth <= 0) {
	   return 'auto';
	 }

	 return elementWidth + 'px';
   }

   if (method == 'style') {
	 var style = $element.attr('style');

	 if (typeof(style) !== 'string') {
	   return null;
	 }

	 var attrs = style.split(';');

	 for (var i = 0, l = attrs.length; i < l; i = i + 1) {
	   var attr = attrs[i].replace(/\s/g, '');
	   var matches = attr.match(WIDTH);

	   if (matches !== null && matches.length >= 1) {
		 return matches[1];
	   }
	 }

	 return null;
   }

   if (method == 'computedstyle') {
	 var computedStyle = window.getComputedStyle($element[0]);

	 return computedStyle.width;
   }

   return method;
 };

 Select2.prototype._bindAdapters = function () {
   this.dataAdapter.bind(this, this.$container);
   this.selection.bind(this, this.$container);

   this.dropdown.bind(this, this.$container);
   this.results.bind(this, this.$container);
 };

 Select2.prototype._registerDomEvents = function () {
   var self = this;

   this.$element.on('change.select2', function () {
	 self.dataAdapter.current(function (data) {
	   self.trigger('selection:update', {
		 data: data
	   });
	 });
   });

   this.$element.on('focus.select2', function (evt) {
	 self.trigger('focus', evt);
   });

   this._syncA = Utils.bind(this._syncAttributes, this);
   this._syncS = Utils.bind(this._syncSubtree, this);

   if (this.$element[0].attachEvent) {
	 this.$element[0].attachEvent('onpropertychange', this._syncA);
   }

   var observer = window.MutationObserver ||
	 window.WebKitMutationObserver ||
	 window.MozMutationObserver
   ;

   if (observer != null) {
	 this._observer = new observer(function (mutations) {
	   self._syncA();
	   self._syncS(null, mutations);
	 });
	 this._observer.observe(this.$element[0], {
	   attributes: true,
	   childList: true,
	   subtree: false
	 });
   } else if (this.$element[0].addEventListener) {
	 this.$element[0].addEventListener(
	   'DOMAttrModified',
	   self._syncA,
	   false
	 );
	 this.$element[0].addEventListener(
	   'DOMNodeInserted',
	   self._syncS,
	   false
	 );
	 this.$element[0].addEventListener(
	   'DOMNodeRemoved',
	   self._syncS,
	   false
	 );
   }
 };

 Select2.prototype._registerDataEvents = function () {
   var self = this;

   this.dataAdapter.on('*', function (name, params) {
	 self.trigger(name, params);
   });
 };

 Select2.prototype._registerSelectionEvents = function () {
   var self = this;
   var nonRelayEvents = ['toggle', 'focus'];

   this.selection.on('toggle', function () {
	 self.toggleDropdown();
   });

   this.selection.on('focus', function (params) {
	 self.focus(params);
   });

   this.selection.on('*', function (name, params) {
	 if ($.inArray(name, nonRelayEvents) !== -1) {
	   return;
	 }

	 self.trigger(name, params);
   });
 };

 Select2.prototype._registerDropdownEvents = function () {
   var self = this;

   this.dropdown.on('*', function (name, params) {
	 self.trigger(name, params);
   });
 };

 Select2.prototype._registerResultsEvents = function () {
   var self = this;

   this.results.on('*', function (name, params) {
	 self.trigger(name, params);
   });
 };

 Select2.prototype._registerEvents = function () {
   var self = this;

   this.on('open', function () {
	 self.$container.addClass('select2-container--open');
   });

   this.on('close', function () {
	 self.$container.removeClass('select2-container--open');
   });

   this.on('enable', function () {
	 self.$container.removeClass('select2-container--disabled');
   });

   this.on('disable', function () {
	 self.$container.addClass('select2-container--disabled');
   });

   this.on('blur', function () {
	 self.$container.removeClass('select2-container--focus');
   });

   this.on('query', function (params) {
	 if (!self.isOpen()) {
	   self.trigger('open', {});
	 }

	 this.dataAdapter.query(params, function (data) {
	   self.trigger('results:all', {
		 data: data,
		 query: params
	   });
	 });
   });

   this.on('query:append', function (params) {
	 this.dataAdapter.query(params, function (data) {
	   self.trigger('results:append', {
		 data: data,
		 query: params
	   });
	 });
   });

   this.on('keypress', function (evt) {
	 var key = evt.which;

	 if (self.isOpen()) {
	   if (key === KEYS.ESC || key === KEYS.TAB ||
		   (key === KEYS.UP && evt.altKey)) {
		 self.close(evt);

		 evt.preventDefault();
	   } else if (key === KEYS.ENTER) {
		 self.trigger('results:select', {});

		 evt.preventDefault();
	   } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
		 self.trigger('results:toggle', {});

		 evt.preventDefault();
	   } else if (key === KEYS.UP) {
		 self.trigger('results:previous', {});

		 evt.preventDefault();
	   } else if (key === KEYS.DOWN) {
		 self.trigger('results:next', {});

		 evt.preventDefault();
	   }
	 } else {
	   if (key === KEYS.ENTER || key === KEYS.SPACE ||
		   (key === KEYS.DOWN && evt.altKey)) {
		 self.open();

		 evt.preventDefault();
	   }
	 }
   });
 };

 Select2.prototype._syncAttributes = function () {
   this.options.set('disabled', this.$element.prop('disabled'));

   if (this.isDisabled()) {
	 if (this.isOpen()) {
	   this.close();
	 }

	 this.trigger('disable', {});
   } else {
	 this.trigger('enable', {});
   }
 };

 Select2.prototype._isChangeMutation = function (evt, mutations) {
   var changed = false;
   var self = this;

   // Ignore any mutation events raised for elements that aren't options or
   // optgroups. This handles the case when the select element is destroyed
   if (
	 evt && evt.target && (
	   evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
	 )
   ) {
	 return;
   }

   if (!mutations) {
	 // If mutation events aren't supported, then we can only assume that the
	 // change affected the selections
	 changed = true;
   } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
	 for (var n = 0; n < mutations.addedNodes.length; n++) {
	   var node = mutations.addedNodes[n];

	   if (node.selected) {
		 changed = true;
	   }
	 }
   } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
	 changed = true;
   } else if ($.isArray(mutations)) {
	 $.each(mutations, function(evt, mutation) {
	   if (self._isChangeMutation(evt, mutation)) {
		 // We've found a change mutation.
		 // Let's escape from the loop and continue
		 changed = true;
		 return false;
	   }
	 });
   }
   return changed;
 };

 Select2.prototype._syncSubtree = function (evt, mutations) {
   var changed = this._isChangeMutation(evt, mutations);
   var self = this;

   // Only re-pull the data if we think there is a change
   if (changed) {
	 this.dataAdapter.current(function (currentData) {
	   self.trigger('selection:update', {
		 data: currentData
	   });
	 });
   }
 };

 /**
  * Override the trigger method to automatically trigger pre-events when
  * there are events that can be prevented.
  */
 Select2.prototype.trigger = function (name, args) {
   var actualTrigger = Select2.__super__.trigger;
   var preTriggerMap = {
	 'open': 'opening',
	 'close': 'closing',
	 'select': 'selecting',
	 'unselect': 'unselecting',
	 'clear': 'clearing'
   };

   if (args === undefined) {
	 args = {};
   }

   if (name in preTriggerMap) {
	 var preTriggerName = preTriggerMap[name];
	 var preTriggerArgs = {
	   prevented: false,
	   name: name,
	   args: args
	 };

	 actualTrigger.call(this, preTriggerName, preTriggerArgs);

	 if (preTriggerArgs.prevented) {
	   args.prevented = true;

	   return;
	 }
   }

   actualTrigger.call(this, name, args);
 };

 Select2.prototype.toggleDropdown = function () {
   if (this.isDisabled()) {
	 return;
   }

   if (this.isOpen()) {
	 this.close();
   } else {
	 this.open();
   }
 };

 Select2.prototype.open = function () {
   if (this.isOpen()) {
	 return;
   }

   if (this.isDisabled()) {
	 return;
   }

   this.trigger('query', {});
 };

 Select2.prototype.close = function (evt) {
   if (!this.isOpen()) {
	 return;
   }

   this.trigger('close', { originalEvent : evt });
 };

 /**
  * Helper method to abstract the "enabled" (not "disabled") state of this
  * object.
  *
  * @return {true} if the instance is not disabled.
  * @return {false} if the instance is disabled.
  */
 Select2.prototype.isEnabled = function () {
   return !this.isDisabled();
 };

 /**
  * Helper method to abstract the "disabled" state of this object.
  *
  * @return {true} if the disabled option is true.
  * @return {false} if the disabled option is false.
  */
 Select2.prototype.isDisabled = function () {
   return this.options.get('disabled');
 };

 Select2.prototype.isOpen = function () {
   return this.$container.hasClass('select2-container--open');
 };

 Select2.prototype.hasFocus = function () {
   return this.$container.hasClass('select2-container--focus');
 };

 Select2.prototype.focus = function (data) {
   // No need to re-trigger focus events if we are already focused
   if (this.hasFocus()) {
	 return;
   }

   this.$container.addClass('select2-container--focus');
   this.trigger('focus', {});
 };

 Select2.prototype.enable = function (args) {
   if (this.options.get('debug') && window.console && console.warn) {
	 console.warn(
	   'Select2: The `select2("enable")` method has been deprecated and will' +
	   ' be removed in later Select2 versions. Use $element.prop("disabled")' +
	   ' instead.'
	 );
   }

   if (args == null || args.length === 0) {
	 args = [true];
   }

   var disabled = !args[0];

   this.$element.prop('disabled', disabled);
 };

 Select2.prototype.data = function () {
   if (this.options.get('debug') &&
	   arguments.length > 0 && window.console && console.warn) {
	 console.warn(
	   'Select2: Data can no longer be set using `select2("data")`. You ' +
	   'should consider setting the value instead using `$element.val()`.'
	 );
   }

   var data = [];

   this.dataAdapter.current(function (currentData) {
	 data = currentData;
   });

   return data;
 };

 Select2.prototype.val = function (args) {
   if (this.options.get('debug') && window.console && console.warn) {
	 console.warn(
	   'Select2: The `select2("val")` method has been deprecated and will be' +
	   ' removed in later Select2 versions. Use $element.val() instead.'
	 );
   }

   if (args == null || args.length === 0) {
	 return this.$element.val();
   }

   var newVal = args[0];

   if ($.isArray(newVal)) {
	 newVal = $.map(newVal, function (obj) {
	   return obj.toString();
	 });
   }

   this.$element.val(newVal).trigger('input').trigger('change');
 };

 Select2.prototype.destroy = function () {
   this.$container.remove();

   if (this.$element[0].detachEvent) {
	 this.$element[0].detachEvent('onpropertychange', this._syncA);
   }

   if (this._observer != null) {
	 this._observer.disconnect();
	 this._observer = null;
   } else if (this.$element[0].removeEventListener) {
	 this.$element[0]
	   .removeEventListener('DOMAttrModified', this._syncA, false);
	 this.$element[0]
	   .removeEventListener('DOMNodeInserted', this._syncS, false);
	 this.$element[0]
	   .removeEventListener('DOMNodeRemoved', this._syncS, false);
   }

   this._syncA = null;
   this._syncS = null;

   this.$element.off('.select2');
   this.$element.attr('tabindex',
   Utils.GetData(this.$element[0], 'old-tabindex'));

   this.$element.removeClass('select2-hidden-accessible');
   this.$element.attr('aria-hidden', 'false');
   Utils.RemoveData(this.$element[0]);
   this.$element.removeData('select2');

   this.dataAdapter.destroy();
   this.selection.destroy();
   this.dropdown.destroy();
   this.results.destroy();

   this.dataAdapter = null;
   this.selection = null;
   this.dropdown = null;
   this.results = null;
 };

 Select2.prototype.render = function () {
   var $container = $(
	 '<span class="select2 select2-container">' +
	   '<span class="selection"></span>' +
	   '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
	 '</span>'
   );

   $container.attr('dir', this.options.get('dir'));

   this.$container = $container;

   this.$container.addClass('select2-container--' + this.options.get('theme'));

   Utils.StoreData($container[0], 'element', this.$element);

   return $container;
 };

 return Select2;
});

S2.define('select2/compat/utils',[
 'jquery'
], function ($) {
 function syncCssClasses ($dest, $src, adapter) {
   var classes, replacements = [], adapted;

   classes = $.trim($dest.attr('class'));

   if (classes) {
	 classes = '' + classes; // for IE which returns object

	 $(classes.split(/\s+/)).each(function () {
	   // Save all Select2 classes
	   if (this.indexOf('select2-') === 0) {
		 replacements.push(this);
	   }
	 });
   }

   classes = $.trim($src.attr('class'));

   if (classes) {
	 classes = '' + classes; // for IE which returns object

	 $(classes.split(/\s+/)).each(function () {
	   // Only adapt non-Select2 classes
	   if (this.indexOf('select2-') !== 0) {
		 adapted = adapter(this);

		 if (adapted != null) {
		   replacements.push(adapted);
		 }
	   }
	 });
   }

   $dest.attr('class', replacements.join(' '));
 }

 return {
   syncCssClasses: syncCssClasses
 };
});

S2.define('select2/compat/containerCss',[
 'jquery',
 './utils'
], function ($, CompatUtils) {
 // No-op CSS adapter that discards all classes by default
 function _containerAdapter (clazz) {
   return null;
 }

 function ContainerCSS () { }

 ContainerCSS.prototype.render = function (decorated) {
   var $container = decorated.call(this);

   var containerCssClass = this.options.get('containerCssClass') || '';

   if ($.isFunction(containerCssClass)) {
	 containerCssClass = containerCssClass(this.$element);
   }

   var containerCssAdapter = this.options.get('adaptContainerCssClass');
   containerCssAdapter = containerCssAdapter || _containerAdapter;

   if (containerCssClass.indexOf(':all:') !== -1) {
	 containerCssClass = containerCssClass.replace(':all:', '');

	 var _cssAdapter = containerCssAdapter;

	 containerCssAdapter = function (clazz) {
	   var adapted = _cssAdapter(clazz);

	   if (adapted != null) {
		 // Append the old one along with the adapted one
		 return adapted + ' ' + clazz;
	   }

	   return clazz;
	 };
   }

   var containerCss = this.options.get('containerCss') || {};

   if ($.isFunction(containerCss)) {
	 containerCss = containerCss(this.$element);
   }

   CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

   $container.css(containerCss);
   $container.addClass(containerCssClass);

   return $container;
 };

 return ContainerCSS;
});

S2.define('select2/compat/dropdownCss',[
 'jquery',
 './utils'
], function ($, CompatUtils) {
 // No-op CSS adapter that discards all classes by default
 function _dropdownAdapter (clazz) {
   return null;
 }

 function DropdownCSS () { }

 DropdownCSS.prototype.render = function (decorated) {
   var $dropdown = decorated.call(this);

   var dropdownCssClass = this.options.get('dropdownCssClass') || '';

   if ($.isFunction(dropdownCssClass)) {
	 dropdownCssClass = dropdownCssClass(this.$element);
   }

   var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
   dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

   if (dropdownCssClass.indexOf(':all:') !== -1) {
	 dropdownCssClass = dropdownCssClass.replace(':all:', '');

	 var _cssAdapter = dropdownCssAdapter;

	 dropdownCssAdapter = function (clazz) {
	   var adapted = _cssAdapter(clazz);

	   if (adapted != null) {
		 // Append the old one along with the adapted one
		 return adapted + ' ' + clazz;
	   }

	   return clazz;
	 };
   }

   var dropdownCss = this.options.get('dropdownCss') || {};

   if ($.isFunction(dropdownCss)) {
	 dropdownCss = dropdownCss(this.$element);
   }

   CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

   $dropdown.css(dropdownCss);
   $dropdown.addClass(dropdownCssClass);

   return $dropdown;
 };

 return DropdownCSS;
});

S2.define('select2/compat/initSelection',[
 'jquery'
], function ($) {
 function InitSelection (decorated, $element, options) {
   if (options.get('debug') && window.console && console.warn) {
	 console.warn(
	   'Select2: The `initSelection` option has been deprecated in favor' +
	   ' of a custom data adapter that overrides the `current` method. ' +
	   'This method is now called multiple times instead of a single ' +
	   'time when the instance is initialized. Support will be removed ' +
	   'for the `initSelection` option in future versions of Select2'
	 );
   }

   this.initSelection = options.get('initSelection');
   this._isInitialized = false;

   decorated.call(this, $element, options);
 }

 InitSelection.prototype.current = function (decorated, callback) {
   var self = this;

   if (this._isInitialized) {
	 decorated.call(this, callback);

	 return;
   }

   this.initSelection.call(null, this.$element, function (data) {
	 self._isInitialized = true;

	 if (!$.isArray(data)) {
	   data = [data];
	 }

	 callback(data);
   });
 };

 return InitSelection;
});

S2.define('select2/compat/inputData',[
 'jquery',
 '../utils'
], function ($, Utils) {
 function InputData (decorated, $element, options) {
   this._currentData = [];
   this._valueSeparator = options.get('valueSeparator') || ',';

   if ($element.prop('type') === 'hidden') {
	 if (options.get('debug') && console && console.warn) {
	   console.warn(
		 'Select2: Using a hidden input with Select2 is no longer ' +
		 'supported and may stop working in the future. It is recommended ' +
		 'to use a `<select>` element instead.'
	   );
	 }
   }

   decorated.call(this, $element, options);
 }

 InputData.prototype.current = function (_, callback) {
   function getSelected (data, selectedIds) {
	 var selected = [];

	 if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
	   data.selected = true;
	   selected.push(data);
	 } else {
	   data.selected = false;
	 }

	 if (data.children) {
	   selected.push.apply(selected, getSelected(data.children, selectedIds));
	 }

	 return selected;
   }

   var selected = [];

   for (var d = 0; d < this._currentData.length; d++) {
	 var data = this._currentData[d];

	 selected.push.apply(
	   selected,
	   getSelected(
		 data,
		 this.$element.val().split(
		   this._valueSeparator
		 )
	   )
	 );
   }

   callback(selected);
 };

 InputData.prototype.select = function (_, data) {
   if (!this.options.get('multiple')) {
	 this.current(function (allData) {
	   $.map(allData, function (data) {
		 data.selected = false;
	   });
	 });

	 this.$element.val(data.id);
	 this.$element.trigger('input').trigger('change');
   } else {
	 var value = this.$element.val();
	 value += this._valueSeparator + data.id;

	 this.$element.val(value);
	 this.$element.trigger('input').trigger('change');
   }
 };

 InputData.prototype.unselect = function (_, data) {
   var self = this;

   data.selected = false;

   this.current(function (allData) {
	 var values = [];

	 for (var d = 0; d < allData.length; d++) {
	   var item = allData[d];

	   if (data.id == item.id) {
		 continue;
	   }

	   values.push(item.id);
	 }

	 self.$element.val(values.join(self._valueSeparator));
	 self.$element.trigger('input').trigger('change');
   });
 };

 InputData.prototype.query = function (_, params, callback) {
   var results = [];

   for (var d = 0; d < this._currentData.length; d++) {
	 var data = this._currentData[d];

	 var matches = this.matches(params, data);

	 if (matches !== null) {
	   results.push(matches);
	 }
   }

   callback({
	 results: results
   });
 };

 InputData.prototype.addOptions = function (_, $options) {
   var options = $.map($options, function ($option) {
	 return Utils.GetData($option[0], 'data');
   });

   this._currentData.push.apply(this._currentData, options);
 };

 return InputData;
});

S2.define('select2/compat/matcher',[
 'jquery'
], function ($) {
 function oldMatcher (matcher) {
   function wrappedMatcher (params, data) {
	 var match = $.extend(true, {}, data);

	 if (params.term == null || $.trim(params.term) === '') {
	   return match;
	 }

	 if (data.children) {
	   for (var c = data.children.length - 1; c >= 0; c--) {
		 var child = data.children[c];

		 // Check if the child object matches
		 // The old matcher returned a boolean true or false
		 var doesMatch = matcher(params.term, child.text, child);

		 // If the child didn't match, pop it off
		 if (!doesMatch) {
		   match.children.splice(c, 1);
		 }
	   }

	   if (match.children.length > 0) {
		 return match;
	   }
	 }

	 if (matcher(params.term, data.text, data)) {
	   return match;
	 }

	 return null;
   }

   return wrappedMatcher;
 }

 return oldMatcher;
});

S2.define('select2/compat/query',[

], function () {
 function Query (decorated, $element, options) {
   if (options.get('debug') && window.console && console.warn) {
	 console.warn(
	   'Select2: The `query` option has been deprecated in favor of a ' +
	   'custom data adapter that overrides the `query` method. Support ' +
	   'will be removed for the `query` option in future versions of ' +
	   'Select2.'
	 );
   }

   decorated.call(this, $element, options);
 }

 Query.prototype.query = function (_, params, callback) {
   params.callback = callback;

   var query = this.options.get('query');

   query.call(null, params);
 };

 return Query;
});

S2.define('select2/dropdown/attachContainer',[

], function () {
 function AttachContainer (decorated, $element, options) {
   decorated.call(this, $element, options);
 }

 AttachContainer.prototype.position =
   function (decorated, $dropdown, $container) {
   var $dropdownContainer = $container.find('.dropdown-wrapper');
   $dropdownContainer.append($dropdown);

   $dropdown.addClass('select2-dropdown--below');
   $container.addClass('select2-container--below');
 };

 return AttachContainer;
});

S2.define('select2/dropdown/stopPropagation',[

], function () {
 function StopPropagation () { }

 StopPropagation.prototype.bind = function (decorated, container, $container) {
   decorated.call(this, container, $container);

   var stoppedEvents = [
   'blur',
   'change',
   'click',
   'dblclick',
   'focus',
   'focusin',
   'focusout',
   'input',
   'keydown',
   'keyup',
   'keypress',
   'mousedown',
   'mouseenter',
   'mouseleave',
   'mousemove',
   'mouseover',
   'mouseup',
   'search',
   'touchend',
   'touchstart'
   ];

   this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
	 evt.stopPropagation();
   });
 };

 return StopPropagation;
});

S2.define('select2/selection/stopPropagation',[

], function () {
 function StopPropagation () { }

 StopPropagation.prototype.bind = function (decorated, container, $container) {
   decorated.call(this, container, $container);

   var stoppedEvents = [
	 'blur',
	 'change',
	 'click',
	 'dblclick',
	 'focus',
	 'focusin',
	 'focusout',
	 'input',
	 'keydown',
	 'keyup',
	 'keypress',
	 'mousedown',
	 'mouseenter',
	 'mouseleave',
	 'mousemove',
	 'mouseover',
	 'mouseup',
	 'search',
	 'touchend',
	 'touchstart'
   ];

   this.$selection.on(stoppedEvents.join(' '), function (evt) {
	 evt.stopPropagation();
   });
 };

 return StopPropagation;
});

/*!
* jQuery Mousewheel 3.1.13
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license
* http://jquery.org/license
*/

(function (factory) {
   if ( typeof S2.define === 'function' && S2.define.amd ) {
	   // AMD. Register as an anonymous module.
	   S2.define('jquery-mousewheel',['jquery'], factory);
   } else if (typeof exports === 'object') {
	   // Node/CommonJS style for Browserify
	   module.exports = factory;
   } else {
	   // Browser globals
	   factory(jQuery);
   }
}(function ($) {

   var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
	   toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
				   ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
	   slice  = Array.prototype.slice,
	   nullLowestDeltaTimeout, lowestDelta;

   if ( $.event.fixHooks ) {
	   for ( var i = toFix.length; i; ) {
		   $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
	   }
   }

   var special = $.event.special.mousewheel = {
	   version: '3.1.12',

	   setup: function() {
		   if ( this.addEventListener ) {
			   for ( var i = toBind.length; i; ) {
				   this.addEventListener( toBind[--i], handler, false );
			   }
		   } else {
			   this.onmousewheel = handler;
		   }
		   // Store the line height and page height for this particular element
		   $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
		   $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
	   },

	   teardown: function() {
		   if ( this.removeEventListener ) {
			   for ( var i = toBind.length; i; ) {
				   this.removeEventListener( toBind[--i], handler, false );
			   }
		   } else {
			   this.onmousewheel = null;
		   }
		   // Clean up the data we added to the element
		   $.removeData(this, 'mousewheel-line-height');
		   $.removeData(this, 'mousewheel-page-height');
	   },

	   getLineHeight: function(elem) {
		   var $elem = $(elem),
			   $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
		   if (!$parent.length) {
			   $parent = $('body');
		   }
		   return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
	   },

	   getPageHeight: function(elem) {
		   return $(elem).height();
	   },

	   settings: {
		   adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
		   normalizeOffset: true  // calls getBoundingClientRect for each event
	   }
   };

   $.fn.extend({
	   mousewheel: function(fn) {
		   return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
	   },

	   unmousewheel: function(fn) {
		   return this.unbind('mousewheel', fn);
	   }
   });


   function handler(event) {
	   var orgEvent   = event || window.event,
		   args       = slice.call(arguments, 1),
		   delta      = 0,
		   deltaX     = 0,
		   deltaY     = 0,
		   absDelta   = 0,
		   offsetX    = 0,
		   offsetY    = 0;
	   event = $.event.fix(orgEvent);
	   event.type = 'mousewheel';

	   // Old school scrollwheel delta
	   if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
	   if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
	   if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
	   if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

	   // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
	   if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
		   deltaX = deltaY * -1;
		   deltaY = 0;
	   }

	   // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
	   delta = deltaY === 0 ? deltaX : deltaY;

	   // New school wheel delta (wheel event)
	   if ( 'deltaY' in orgEvent ) {
		   deltaY = orgEvent.deltaY * -1;
		   delta  = deltaY;
	   }
	   if ( 'deltaX' in orgEvent ) {
		   deltaX = orgEvent.deltaX;
		   if ( deltaY === 0 ) { delta  = deltaX * -1; }
	   }

	   // No change actually happened, no reason to go any further
	   if ( deltaY === 0 && deltaX === 0 ) { return; }

	   // Need to convert lines and pages to pixels if we aren't already in pixels
	   // There are three delta modes:
	   //   * deltaMode 0 is by pixels, nothing to do
	   //   * deltaMode 1 is by lines
	   //   * deltaMode 2 is by pages
	   if ( orgEvent.deltaMode === 1 ) {
		   var lineHeight = $.data(this, 'mousewheel-line-height');
		   delta  *= lineHeight;
		   deltaY *= lineHeight;
		   deltaX *= lineHeight;
	   } else if ( orgEvent.deltaMode === 2 ) {
		   var pageHeight = $.data(this, 'mousewheel-page-height');
		   delta  *= pageHeight;
		   deltaY *= pageHeight;
		   deltaX *= pageHeight;
	   }

	   // Store lowest absolute delta to normalize the delta values
	   absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

	   if ( !lowestDelta || absDelta < lowestDelta ) {
		   lowestDelta = absDelta;

		   // Adjust older deltas if necessary
		   if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
			   lowestDelta /= 40;
		   }
	   }

	   // Adjust older deltas if necessary
	   if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
		   // Divide all the things by 40!
		   delta  /= 40;
		   deltaX /= 40;
		   deltaY /= 40;
	   }

	   // Get a whole, normalized value for the deltas
	   delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
	   deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
	   deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

	   // Normalise offsetX and offsetY properties
	   if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
		   var boundingRect = this.getBoundingClientRect();
		   offsetX = event.clientX - boundingRect.left;
		   offsetY = event.clientY - boundingRect.top;
	   }

	   // Add information to the event object
	   event.deltaX = deltaX;
	   event.deltaY = deltaY;
	   event.deltaFactor = lowestDelta;
	   event.offsetX = offsetX;
	   event.offsetY = offsetY;
	   // Go ahead and set deltaMode to 0 since we converted to pixels
	   // Although this is a little odd since we overwrite the deltaX/Y
	   // properties with normalized deltas.
	   event.deltaMode = 0;

	   // Add event and delta to the front of the arguments
	   args.unshift(event, delta, deltaX, deltaY);

	   // Clearout lowestDelta after sometime to better
	   // handle multiple device types that give different
	   // a different lowestDelta
	   // Ex: trackpad = 3 and mouse wheel = 120
	   if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
	   nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

	   return ($.event.dispatch || $.event.handle).apply(this, args);
   }

   function nullLowestDelta() {
	   lowestDelta = null;
   }

   function shouldAdjustOldDeltas(orgEvent, absDelta) {
	   // If this is an older event and the delta is divisable by 120,
	   // then we are assuming that the browser is treating this as an
	   // older mouse wheel event and that we should divide the deltas
	   // by 40 to try and get a more usable deltaFactor.
	   // Side note, this actually impacts the reported scroll distance
	   // in older browsers and can cause scrolling to be slower than native.
	   // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
	   return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
   }

}));

S2.define('jquery.select2',[
 'jquery',
 'jquery-mousewheel',

 './select2/core',
 './select2/defaults',
 './select2/utils'
], function ($, _, Select2, Defaults, Utils) {
 if ($.fn.select2 == null) {
   // All methods that should return the element
   var thisMethods = ['open', 'close', 'destroy'];

   $.fn.select2 = function (options) {
	 options = options || {};

	 if (typeof options === 'object') {
	   this.each(function () {
		 var instanceOptions = $.extend(true, {}, options);

		 var instance = new Select2($(this), instanceOptions);
	   });

	   return this;
	 } else if (typeof options === 'string') {
	   var ret;
	   var args = Array.prototype.slice.call(arguments, 1);

	   this.each(function () {
		 var instance = Utils.GetData(this, 'select2');

		 if (instance == null && window.console && console.error) {
		   console.error(
			 'The select2(\'' + options + '\') method was called on an ' +
			 'element that is not using Select2.'
		   );
		 }

		 ret = instance[options].apply(instance, args);
	   });

	   // Check if we should be returning `this`
	   if ($.inArray(options, thisMethods) > -1) {
		 return this;
	   }

	   return ret;
	 } else {
	   throw new Error('Invalid arguments for Select2: ' + options);
	 }
   };
 }

 if ($.fn.select2.defaults == null) {
   $.fn.select2.defaults = Defaults;
 }

 return Select2;
});

 // Return the AMD loader configuration so it can be used outside of this file
 return {
   define: S2.define,
   require: S2.require
 };
}());

 // Autoload the jQuery bindings
 // We know that all of the modules exist above this, so we're safe
 var select2 = S2.require('jquery.select2');

 // Hold the AMD module references on the jQuery function that was just loaded
 // This allows Select2 to use the internal loader outside of this file, such
 // as in the language files.
 jQuery.fn.select2.amd = S2;

 // Return the Select2 instance for anyone who is importing it.
 return select2;
}));

/* perfect-scrollbar v1.5.0
* Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
* Licensed under MIT
*/

(function (global, factory) {
 typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
 typeof define === 'function' && define.amd ? define(factory) :
 (global = global || self, global.PerfectScrollbar = factory());
}(this, (function () { 'use strict';

 function get(element) {
   return getComputedStyle(element);
 }

 function set(element, obj) {
   for (var key in obj) {
     var val = obj[key];
     if (typeof val === 'number') {
       val = val + "px";
     }
     element.style[key] = val;
   }
   return element;
 }

 function div(className) {
   var div = document.createElement('div');
   div.className = className;
   return div;
 }

 var elMatches =
   typeof Element !== 'undefined' &&
   (Element.prototype.matches ||
     Element.prototype.webkitMatchesSelector ||
     Element.prototype.mozMatchesSelector ||
     Element.prototype.msMatchesSelector);

 function matches(element, query) {
   if (!elMatches) {
     throw new Error('No element matching method supported');
   }

   return elMatches.call(element, query);
 }

 function remove(element) {
   if (element.remove) {
     element.remove();
   } else {
     if (element.parentNode) {
       element.parentNode.removeChild(element);
     }
   }
 }

 function queryChildren(element, selector) {
   return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
   );
 }

 var cls = {
   main: 'ps',
   rtl: 'ps__rtl',
   element: {
     thumb: function (x) { return ("ps__thumb-" + x); },
     rail: function (x) { return ("ps__rail-" + x); },
     consuming: 'ps__child--consume',
   },
   state: {
     focus: 'ps--focus',
     clicking: 'ps--clicking',
     active: function (x) { return ("ps--active-" + x); },
     scrolling: function (x) { return ("ps--scrolling-" + x); },
   },
 };

 /*
  * Helper methods
  */
 var scrollingClassTimeout = { x: null, y: null };

 function addScrollingClass(i, x) {
   var classList = i.element.classList;
   var className = cls.state.scrolling(x);

   if (classList.contains(className)) {
     clearTimeout(scrollingClassTimeout[x]);
   } else {
     classList.add(className);
   }
 }

 function removeScrollingClass(i, x) {
   scrollingClassTimeout[x] = setTimeout(
     function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
     i.settings.scrollingThreshold
   );
 }

 function setScrollingClassInstantly(i, x) {
   addScrollingClass(i, x);
   removeScrollingClass(i, x);
 }

 var EventElement = function EventElement(element) {
   this.element = element;
   this.handlers = {};
 };

 var prototypeAccessors = { isEmpty: { configurable: true } };

 EventElement.prototype.bind = function bind (eventName, handler) {
   if (typeof this.handlers[eventName] === 'undefined') {
     this.handlers[eventName] = [];
   }
   this.handlers[eventName].push(handler);
   this.element.addEventListener(eventName, handler, false);
 };

 EventElement.prototype.unbind = function unbind (eventName, target) {
     var this$1 = this;

   this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
     if (target && handler !== target) {
       return true;
     }
     this$1.element.removeEventListener(eventName, handler, false);
     return false;
   });
 };

 EventElement.prototype.unbindAll = function unbindAll () {
   for (var name in this.handlers) {
     this.unbind(name);
   }
 };

 prototypeAccessors.isEmpty.get = function () {
     var this$1 = this;

   return Object.keys(this.handlers).every(
     function (key) { return this$1.handlers[key].length === 0; }
   );
 };

 Object.defineProperties( EventElement.prototype, prototypeAccessors );

 var EventManager = function EventManager() {
   this.eventElements = [];
 };

 EventManager.prototype.eventElement = function eventElement (element) {
   var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
   if (!ee) {
     ee = new EventElement(element);
     this.eventElements.push(ee);
   }
   return ee;
 };

 EventManager.prototype.bind = function bind (element, eventName, handler) {
   this.eventElement(element).bind(eventName, handler);
 };

 EventManager.prototype.unbind = function unbind (element, eventName, handler) {
   var ee = this.eventElement(element);
   ee.unbind(eventName, handler);

   if (ee.isEmpty) {
     // remove
     this.eventElements.splice(this.eventElements.indexOf(ee), 1);
   }
 };

 EventManager.prototype.unbindAll = function unbindAll () {
   this.eventElements.forEach(function (e) { return e.unbindAll(); });
   this.eventElements = [];
 };

 EventManager.prototype.once = function once (element, eventName, handler) {
   var ee = this.eventElement(element);
   var onceHandler = function (evt) {
     ee.unbind(eventName, onceHandler);
     handler(evt);
   };
   ee.bind(eventName, onceHandler);
 };

 function createEvent(name) {
   if (typeof window.CustomEvent === 'function') {
     return new CustomEvent(name);
   } else {
     var evt = document.createEvent('CustomEvent');
     evt.initCustomEvent(name, false, false, undefined);
     return evt;
   }
 }

 function processScrollDiff(
   i,
   axis,
   diff,
   useScrollingClass,
   forceFireReachEvent
 ) {
   if ( useScrollingClass === void 0 ) useScrollingClass = true;
   if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

   var fields;
   if (axis === 'top') {
     fields = [
       'contentHeight',
       'containerHeight',
       'scrollTop',
       'y',
       'up',
       'down' ];
   } else if (axis === 'left') {
     fields = [
       'contentWidth',
       'containerWidth',
       'scrollLeft',
       'x',
       'left',
       'right' ];
   } else {
     throw new Error('A proper axis should be provided');
   }

   processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
 }

 function processScrollDiff$1(
   i,
   diff,
   ref,
   useScrollingClass,
   forceFireReachEvent
 ) {
   var contentHeight = ref[0];
   var containerHeight = ref[1];
   var scrollTop = ref[2];
   var y = ref[3];
   var up = ref[4];
   var down = ref[5];
   if ( useScrollingClass === void 0 ) useScrollingClass = true;
   if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

   var element = i.element;

   // reset reach
   i.reach[y] = null;

   // 1 for subpixel rounding
   if (element[scrollTop] < 1) {
     i.reach[y] = 'start';
   }

   // 1 for subpixel rounding
   if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
     i.reach[y] = 'end';
   }

   if (diff) {
     element.dispatchEvent(createEvent(("ps-scroll-" + y)));

     if (diff < 0) {
       element.dispatchEvent(createEvent(("ps-scroll-" + up)));
     } else if (diff > 0) {
       element.dispatchEvent(createEvent(("ps-scroll-" + down)));
     }

     if (useScrollingClass) {
       setScrollingClassInstantly(i, y);
     }
   }

   if (i.reach[y] && (diff || forceFireReachEvent)) {
     element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
   }
 }

 function toInt(x) {
   return parseInt(x, 10) || 0;
 }

 function isEditable(el) {
   return (
     matches(el, 'input,[contenteditable]') ||
     matches(el, 'select,[contenteditable]') ||
     matches(el, 'textarea,[contenteditable]') ||
     matches(el, 'button,[contenteditable]')
   );
 }

 function outerWidth(element) {
   var styles = get(element);
   return (
     toInt(styles.width) +
     toInt(styles.paddingLeft) +
     toInt(styles.paddingRight) +
     toInt(styles.borderLeftWidth) +
     toInt(styles.borderRightWidth)
   );
 }

 var env = {
   isWebKit:
     typeof document !== 'undefined' &&
     'WebkitAppearance' in document.documentElement.style,
   supportsTouch:
     typeof window !== 'undefined' &&
     ('ontouchstart' in window ||
       ('maxTouchPoints' in window.navigator &&
         window.navigator.maxTouchPoints > 0) ||
       (window.DocumentTouch && document instanceof window.DocumentTouch)),
   supportsIePointer:
     typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
   isChrome:
     typeof navigator !== 'undefined' &&
     /Chrome/i.test(navigator && navigator.userAgent),
 };

 function updateGeometry(i) {
   var element = i.element;
   var roundedScrollTop = Math.floor(element.scrollTop);
   var rect = element.getBoundingClientRect();

   i.containerWidth = Math.ceil(rect.width);
   i.containerHeight = Math.ceil(rect.height);
   i.contentWidth = element.scrollWidth;
   i.contentHeight = element.scrollHeight;

   if (!element.contains(i.scrollbarXRail)) {
     // clean up and append
     queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
     );
     element.appendChild(i.scrollbarXRail);
   }
   if (!element.contains(i.scrollbarYRail)) {
     // clean up and append
     queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
     );
     element.appendChild(i.scrollbarYRail);
   }

   if (
     !i.settings.suppressScrollX &&
     i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
   ) {
     i.scrollbarXActive = true;
     i.railXWidth = i.containerWidth - i.railXMarginWidth;
     i.railXRatio = i.containerWidth / i.railXWidth;
     i.scrollbarXWidth = getThumbSize(
       i,
       toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
     );
     i.scrollbarXLeft = toInt(
       ((i.negativeScrollAdjustment + element.scrollLeft) *
         (i.railXWidth - i.scrollbarXWidth)) /
         (i.contentWidth - i.containerWidth)
     );
   } else {
     i.scrollbarXActive = false;
   }

   if (
     !i.settings.suppressScrollY &&
     i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
   ) {
     i.scrollbarYActive = true;
     i.railYHeight = i.containerHeight - i.railYMarginHeight;
     i.railYRatio = i.containerHeight / i.railYHeight;
     i.scrollbarYHeight = getThumbSize(
       i,
       toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
     );
     i.scrollbarYTop = toInt(
       (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
         (i.contentHeight - i.containerHeight)
     );
   } else {
     i.scrollbarYActive = false;
   }

   if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
     i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
   }
   if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
     i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
   }

   updateCss(element, i);

   if (i.scrollbarXActive) {
     element.classList.add(cls.state.active('x'));
   } else {
     element.classList.remove(cls.state.active('x'));
     i.scrollbarXWidth = 0;
     i.scrollbarXLeft = 0;
     element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
   }
   if (i.scrollbarYActive) {
     element.classList.add(cls.state.active('y'));
   } else {
     element.classList.remove(cls.state.active('y'));
     i.scrollbarYHeight = 0;
     i.scrollbarYTop = 0;
     element.scrollTop = 0;
   }
 }

 function getThumbSize(i, thumbSize) {
   if (i.settings.minScrollbarLength) {
     thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
   }
   if (i.settings.maxScrollbarLength) {
     thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
   }
   return thumbSize;
 }

 function updateCss(element, i) {
   var xRailOffset = { width: i.railXWidth };
   var roundedScrollTop = Math.floor(element.scrollTop);

   if (i.isRtl) {
     xRailOffset.left =
       i.negativeScrollAdjustment +
       element.scrollLeft +
       i.containerWidth -
       i.contentWidth;
   } else {
     xRailOffset.left = element.scrollLeft;
   }
   if (i.isScrollbarXUsingBottom) {
     xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
   } else {
     xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
   }
   set(i.scrollbarXRail, xRailOffset);

   var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
   if (i.isScrollbarYUsingRight) {
     if (i.isRtl) {
       yRailOffset.right =
         i.contentWidth -
         (i.negativeScrollAdjustment + element.scrollLeft) -
         i.scrollbarYRight -
         i.scrollbarYOuterWidth -
         9;
     } else {
       yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
     }
   } else {
     if (i.isRtl) {
       yRailOffset.left =
         i.negativeScrollAdjustment +
         element.scrollLeft +
         i.containerWidth * 2 -
         i.contentWidth -
         i.scrollbarYLeft -
         i.scrollbarYOuterWidth;
     } else {
       yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
     }
   }
   set(i.scrollbarYRail, yRailOffset);

   set(i.scrollbarX, {
     left: i.scrollbarXLeft,
     width: i.scrollbarXWidth - i.railBorderXWidth,
   });
   set(i.scrollbarY, {
     top: i.scrollbarYTop,
     height: i.scrollbarYHeight - i.railBorderYWidth,
   });
 }

 function clickRail(i) {
   var element = i.element;

   i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
   i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
     var positionTop =
       e.pageY -
       window.pageYOffset -
       i.scrollbarYRail.getBoundingClientRect().top;
     var direction = positionTop > i.scrollbarYTop ? 1 : -1;

     i.element.scrollTop += direction * i.containerHeight;
     updateGeometry(i);

     e.stopPropagation();
   });

   i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
   i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
     var positionLeft =
       e.pageX -
       window.pageXOffset -
       i.scrollbarXRail.getBoundingClientRect().left;
     var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

     i.element.scrollLeft += direction * i.containerWidth;
     updateGeometry(i);

     e.stopPropagation();
   });
 }

 function dragThumb(i) {
   bindMouseScrollHandler(i, [
     'containerWidth',
     'contentWidth',
     'pageX',
     'railXWidth',
     'scrollbarX',
     'scrollbarXWidth',
     'scrollLeft',
     'x',
     'scrollbarXRail' ]);
   bindMouseScrollHandler(i, [
     'containerHeight',
     'contentHeight',
     'pageY',
     'railYHeight',
     'scrollbarY',
     'scrollbarYHeight',
     'scrollTop',
     'y',
     'scrollbarYRail' ]);
 }

 function bindMouseScrollHandler(
   i,
   ref
 ) {
   var containerHeight = ref[0];
   var contentHeight = ref[1];
   var pageY = ref[2];
   var railYHeight = ref[3];
   var scrollbarY = ref[4];
   var scrollbarYHeight = ref[5];
   var scrollTop = ref[6];
   var y = ref[7];
   var scrollbarYRail = ref[8];

   var element = i.element;

   var startingScrollTop = null;
   var startingMousePageY = null;
   var scrollBy = null;

   function mouseMoveHandler(e) {
     if (e.touches && e.touches[0]) {
       e[pageY] = e.touches[0].pageY;
     }
     element[scrollTop] =
       startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
     addScrollingClass(i, y);
     updateGeometry(i);

     e.stopPropagation();
     e.preventDefault();
   }

   function mouseUpHandler() {
     removeScrollingClass(i, y);
     i[scrollbarYRail].classList.remove(cls.state.clicking);
     i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
   }

   function bindMoves(e, touchMode) {
     startingScrollTop = element[scrollTop];
     if (touchMode && e.touches) {
       e[pageY] = e.touches[0].pageY;
     }
     startingMousePageY = e[pageY];
     scrollBy =
       (i[contentHeight] - i[containerHeight]) /
       (i[railYHeight] - i[scrollbarYHeight]);
     if (!touchMode) {
       i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
       i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
       e.preventDefault();
     } else {
       i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
     }

     i[scrollbarYRail].classList.add(cls.state.clicking);

     e.stopPropagation();
   }

   i.event.bind(i[scrollbarY], 'mousedown', function (e) {
     bindMoves(e);
   });
   i.event.bind(i[scrollbarY], 'touchstart', function (e) {
     bindMoves(e, true);
   });
 }

 function keyboard(i) {
   var element = i.element;

   var elementHovered = function () { return matches(element, ':hover'); };
   var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

   function shouldPreventDefault(deltaX, deltaY) {
     var scrollTop = Math.floor(element.scrollTop);
     if (deltaX === 0) {
       if (!i.scrollbarYActive) {
         return false;
       }
       if (
         (scrollTop === 0 && deltaY > 0) ||
         (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
       ) {
         return !i.settings.wheelPropagation;
       }
     }

     var scrollLeft = element.scrollLeft;
     if (deltaY === 0) {
       if (!i.scrollbarXActive) {
         return false;
       }
       if (
         (scrollLeft === 0 && deltaX < 0) ||
         (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
       ) {
         return !i.settings.wheelPropagation;
       }
     }
     return true;
   }

   i.event.bind(i.ownerDocument, 'keydown', function (e) {
     if (
       (e.isDefaultPrevented && e.isDefaultPrevented()) ||
       e.defaultPrevented
     ) {
       return;
     }

     if (!elementHovered() && !scrollbarFocused()) {
       return;
     }

     var activeElement = document.activeElement
       ? document.activeElement
       : i.ownerDocument.activeElement;
     if (activeElement) {
       if (activeElement.tagName === 'IFRAME') {
         activeElement = activeElement.contentDocument.activeElement;
       } else {
         // go deeper if element is a webcomponent
         while (activeElement.shadowRoot) {
           activeElement = activeElement.shadowRoot.activeElement;
         }
       }
       if (isEditable(activeElement)) {
         return;
       }
     }

     var deltaX = 0;
     var deltaY = 0;

     switch (e.which) {
       case 37: // left
         if (e.metaKey) {
           deltaX = -i.contentWidth;
         } else if (e.altKey) {
           deltaX = -i.containerWidth;
         } else {
           deltaX = -30;
         }
         break;
       case 38: // up
         if (e.metaKey) {
           deltaY = i.contentHeight;
         } else if (e.altKey) {
           deltaY = i.containerHeight;
         } else {
           deltaY = 30;
         }
         break;
       case 39: // right
         if (e.metaKey) {
           deltaX = i.contentWidth;
         } else if (e.altKey) {
           deltaX = i.containerWidth;
         } else {
           deltaX = 30;
         }
         break;
       case 40: // down
         if (e.metaKey) {
           deltaY = -i.contentHeight;
         } else if (e.altKey) {
           deltaY = -i.containerHeight;
         } else {
           deltaY = -30;
         }
         break;
       case 32: // space bar
         if (e.shiftKey) {
           deltaY = i.containerHeight;
         } else {
           deltaY = -i.containerHeight;
         }
         break;
       case 33: // page up
         deltaY = i.containerHeight;
         break;
       case 34: // page down
         deltaY = -i.containerHeight;
         break;
       case 36: // home
         deltaY = i.contentHeight;
         break;
       case 35: // end
         deltaY = -i.contentHeight;
         break;
       default:
         return;
     }

     if (i.settings.suppressScrollX && deltaX !== 0) {
       return;
     }
     if (i.settings.suppressScrollY && deltaY !== 0) {
       return;
     }

     element.scrollTop -= deltaY;
     element.scrollLeft += deltaX;
     updateGeometry(i);

     if (shouldPreventDefault(deltaX, deltaY)) {
       e.preventDefault();
     }
   });
 }

 function wheel(i) {
   var element = i.element;

   function shouldPreventDefault(deltaX, deltaY) {
     var roundedScrollTop = Math.floor(element.scrollTop);
     var isTop = element.scrollTop === 0;
     var isBottom =
       roundedScrollTop + element.offsetHeight === element.scrollHeight;
     var isLeft = element.scrollLeft === 0;
     var isRight =
       element.scrollLeft + element.offsetWidth === element.scrollWidth;

     var hitsBound;

     // pick axis with primary direction
     if (Math.abs(deltaY) > Math.abs(deltaX)) {
       hitsBound = isTop || isBottom;
     } else {
       hitsBound = isLeft || isRight;
     }

     return hitsBound ? !i.settings.wheelPropagation : true;
   }

   function getDeltaFromEvent(e) {
     var deltaX = e.deltaX;
     var deltaY = -1 * e.deltaY;

     if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
       // OS X Safari
       deltaX = (-1 * e.wheelDeltaX) / 6;
       deltaY = e.wheelDeltaY / 6;
     }

     if (e.deltaMode && e.deltaMode === 1) {
       // Firefox in deltaMode 1: Line scrolling
       deltaX *= 10;
       deltaY *= 10;
     }

     if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
       // IE in some mouse drivers
       deltaX = 0;
       deltaY = e.wheelDelta;
     }

     if (e.shiftKey) {
       // reverse axis with shift key
       return [-deltaY, -deltaX];
     }
     return [deltaX, deltaY];
   }

   function shouldBeConsumedByChild(target, deltaX, deltaY) {
     // FIXME: this is a workaround for <select> issue in FF and IE #571
     if (!env.isWebKit && element.querySelector('select:focus')) {
       return true;
     }

     if (!element.contains(target)) {
       return false;
     }

     var cursor = target;

     while (cursor && cursor !== element) {
       if (cursor.classList.contains(cls.element.consuming)) {
         return true;
       }

       var style = get(cursor);

       // if deltaY && vertical scrollable
       if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
         var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
         if (maxScrollTop > 0) {
           if (
             (cursor.scrollTop > 0 && deltaY < 0) ||
             (cursor.scrollTop < maxScrollTop && deltaY > 0)
           ) {
             return true;
           }
         }
       }
       // if deltaX && horizontal scrollable
       if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
         var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
         if (maxScrollLeft > 0) {
           if (
             (cursor.scrollLeft > 0 && deltaX < 0) ||
             (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
           ) {
             return true;
           }
         }
       }

       cursor = cursor.parentNode;
     }

     return false;
   }

   function mousewheelHandler(e) {
     var ref = getDeltaFromEvent(e);
     var deltaX = ref[0];
     var deltaY = ref[1];

     if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
       return;
     }

     var shouldPrevent = false;
     if (!i.settings.useBothWheelAxes) {
       // deltaX will only be used for horizontal scrolling and deltaY will
       // only be used for vertical scrolling - this is the default
       element.scrollTop -= deltaY * i.settings.wheelSpeed;
       element.scrollLeft += deltaX * i.settings.wheelSpeed;
     } else if (i.scrollbarYActive && !i.scrollbarXActive) {
       // only vertical scrollbar is active and useBothWheelAxes option is
       // active, so let's scroll vertical bar using both mouse wheel axes
       if (deltaY) {
         element.scrollTop -= deltaY * i.settings.wheelSpeed;
       } else {
         element.scrollTop += deltaX * i.settings.wheelSpeed;
       }
       shouldPrevent = true;
     } else if (i.scrollbarXActive && !i.scrollbarYActive) {
       // useBothWheelAxes and only horizontal bar is active, so use both
       // wheel axes for horizontal bar
       if (deltaX) {
         element.scrollLeft += deltaX * i.settings.wheelSpeed;
       } else {
         element.scrollLeft -= deltaY * i.settings.wheelSpeed;
       }
       shouldPrevent = true;
     }

     updateGeometry(i);

     shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
     if (shouldPrevent && !e.ctrlKey) {
       e.stopPropagation();
       e.preventDefault();
     }
   }

   if (typeof window.onwheel !== 'undefined') {
     i.event.bind(element, 'wheel', mousewheelHandler);
   } else if (typeof window.onmousewheel !== 'undefined') {
     i.event.bind(element, 'mousewheel', mousewheelHandler);
   }
 }

 function touch(i) {
   if (!env.supportsTouch && !env.supportsIePointer) {
     return;
   }

   var element = i.element;

   function shouldPrevent(deltaX, deltaY) {
     var scrollTop = Math.floor(element.scrollTop);
     var scrollLeft = element.scrollLeft;
     var magnitudeX = Math.abs(deltaX);
     var magnitudeY = Math.abs(deltaY);

     if (magnitudeY > magnitudeX) {
       // user is perhaps trying to swipe up/down the page

       if (
         (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
         (deltaY > 0 && scrollTop === 0)
       ) {
         // set prevent for mobile Chrome refresh
         return window.scrollY === 0 && deltaY > 0 && env.isChrome;
       }
     } else if (magnitudeX > magnitudeY) {
       // user is perhaps trying to swipe left/right across the page

       if (
         (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
         (deltaX > 0 && scrollLeft === 0)
       ) {
         return true;
       }
     }

     return true;
   }

   function applyTouchMove(differenceX, differenceY) {
     element.scrollTop -= differenceY;
     element.scrollLeft -= differenceX;

     updateGeometry(i);
   }

   var startOffset = {};
   var startTime = 0;
   var speed = {};
   var easingLoop = null;

   function getTouch(e) {
     if (e.targetTouches) {
       return e.targetTouches[0];
     } else {
       // Maybe IE pointer
       return e;
     }
   }

   function shouldHandle(e) {
     if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
       return false;
     }
     if (e.targetTouches && e.targetTouches.length === 1) {
       return true;
     }
     if (
       e.pointerType &&
       e.pointerType !== 'mouse' &&
       e.pointerType !== e.MSPOINTER_TYPE_MOUSE
     ) {
       return true;
     }
     return false;
   }

   function touchStart(e) {
     if (!shouldHandle(e)) {
       return;
     }

     var touch = getTouch(e);

     startOffset.pageX = touch.pageX;
     startOffset.pageY = touch.pageY;

     startTime = new Date().getTime();

     if (easingLoop !== null) {
       clearInterval(easingLoop);
     }
   }

   function shouldBeConsumedByChild(target, deltaX, deltaY) {
     if (!element.contains(target)) {
       return false;
     }

     var cursor = target;

     while (cursor && cursor !== element) {
       if (cursor.classList.contains(cls.element.consuming)) {
         return true;
       }

       var style = get(cursor);

       // if deltaY && vertical scrollable
       if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
         var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
         if (maxScrollTop > 0) {
           if (
             (cursor.scrollTop > 0 && deltaY < 0) ||
             (cursor.scrollTop < maxScrollTop && deltaY > 0)
           ) {
             return true;
           }
         }
       }
       // if deltaX && horizontal scrollable
       if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
         var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
         if (maxScrollLeft > 0) {
           if (
             (cursor.scrollLeft > 0 && deltaX < 0) ||
             (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
           ) {
             return true;
           }
         }
       }

       cursor = cursor.parentNode;
     }

     return false;
   }

   function touchMove(e) {
     if (shouldHandle(e)) {
       var touch = getTouch(e);

       var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

       var differenceX = currentOffset.pageX - startOffset.pageX;
       var differenceY = currentOffset.pageY - startOffset.pageY;

       if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
         return;
       }

       applyTouchMove(differenceX, differenceY);
       startOffset = currentOffset;

       var currentTime = new Date().getTime();

       var timeGap = currentTime - startTime;
       if (timeGap > 0) {
         speed.x = differenceX / timeGap;
         speed.y = differenceY / timeGap;
         startTime = currentTime;
       }

       if (shouldPrevent(differenceX, differenceY)) {
         e.preventDefault();
       }
     }
   }
   function touchEnd() {
     if (i.settings.swipeEasing) {
       clearInterval(easingLoop);
       easingLoop = setInterval(function() {
         if (i.isInitialized) {
           clearInterval(easingLoop);
           return;
         }

         if (!speed.x && !speed.y) {
           clearInterval(easingLoop);
           return;
         }

         if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
           clearInterval(easingLoop);
           return;
         }

         applyTouchMove(speed.x * 30, speed.y * 30);

         speed.x *= 0.8;
         speed.y *= 0.8;
       }, 10);
     }
   }

   if (env.supportsTouch) {
     i.event.bind(element, 'touchstart', touchStart);
     i.event.bind(element, 'touchmove', touchMove);
     i.event.bind(element, 'touchend', touchEnd);
   } else if (env.supportsIePointer) {
     if (window.PointerEvent) {
       i.event.bind(element, 'pointerdown', touchStart);
       i.event.bind(element, 'pointermove', touchMove);
       i.event.bind(element, 'pointerup', touchEnd);
     } else if (window.MSPointerEvent) {
       i.event.bind(element, 'MSPointerDown', touchStart);
       i.event.bind(element, 'MSPointerMove', touchMove);
       i.event.bind(element, 'MSPointerUp', touchEnd);
     }
   }
 }

 var defaultSettings = function () { return ({
   handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
   maxScrollbarLength: null,
   minScrollbarLength: null,
   scrollingThreshold: 1000,
   scrollXMarginOffset: 0,
   scrollYMarginOffset: 0,
   suppressScrollX: false,
   suppressScrollY: false,
   swipeEasing: true,
   useBothWheelAxes: false,
   wheelPropagation: true,
   wheelSpeed: 1,
 }); };

 var handlers = {
   'click-rail': clickRail,
   'drag-thumb': dragThumb,
   keyboard: keyboard,
   wheel: wheel,
   touch: touch,
 };

 var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
   var this$1 = this;
   if ( userSettings === void 0 ) userSettings = {};

   if (typeof element === 'string') {
     element = document.querySelector(element);
   }

   if (!element || !element.nodeName) {
     throw new Error('no element is specified to initialize PerfectScrollbar');
   }

   this.element = element;

   element.classList.add(cls.main);

   this.settings = defaultSettings();
   for (var key in userSettings) {
     this.settings[key] = userSettings[key];
   }

   this.containerWidth = null;
   this.containerHeight = null;
   this.contentWidth = null;
   this.contentHeight = null;

   var focus = function () { return element.classList.add(cls.state.focus); };
   var blur = function () { return element.classList.remove(cls.state.focus); };

   this.isRtl = get(element).direction === 'rtl';
   if (this.isRtl === true) {
     element.classList.add(cls.rtl);
   }
   this.isNegativeScroll = (function () {
     var originalScrollLeft = element.scrollLeft;
     var result = null;
     element.scrollLeft = -1;
     result = element.scrollLeft < 0;
     element.scrollLeft = originalScrollLeft;
     return result;
   })();
   this.negativeScrollAdjustment = this.isNegativeScroll
     ? element.scrollWidth - element.clientWidth
     : 0;
   this.event = new EventManager();
   this.ownerDocument = element.ownerDocument || document;

   this.scrollbarXRail = div(cls.element.rail('x'));
   element.appendChild(this.scrollbarXRail);
   this.scrollbarX = div(cls.element.thumb('x'));
   this.scrollbarXRail.appendChild(this.scrollbarX);
   this.scrollbarX.setAttribute('tabindex', 0);
   this.event.bind(this.scrollbarX, 'focus', focus);
   this.event.bind(this.scrollbarX, 'blur', blur);
   this.scrollbarXActive = null;
   this.scrollbarXWidth = null;
   this.scrollbarXLeft = null;
   var railXStyle = get(this.scrollbarXRail);
   this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
   if (isNaN(this.scrollbarXBottom)) {
     this.isScrollbarXUsingBottom = false;
     this.scrollbarXTop = toInt(railXStyle.top);
   } else {
     this.isScrollbarXUsingBottom = true;
   }
   this.railBorderXWidth =
     toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
   // Set rail to display:block to calculate margins
   set(this.scrollbarXRail, { display: 'block' });
   this.railXMarginWidth =
     toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
   set(this.scrollbarXRail, { display: '' });
   this.railXWidth = null;
   this.railXRatio = null;

   this.scrollbarYRail = div(cls.element.rail('y'));
   element.appendChild(this.scrollbarYRail);
   this.scrollbarY = div(cls.element.thumb('y'));
   this.scrollbarYRail.appendChild(this.scrollbarY);
   this.scrollbarY.setAttribute('tabindex', 0);
   this.event.bind(this.scrollbarY, 'focus', focus);
   this.event.bind(this.scrollbarY, 'blur', blur);
   this.scrollbarYActive = null;
   this.scrollbarYHeight = null;
   this.scrollbarYTop = null;
   var railYStyle = get(this.scrollbarYRail);
   this.scrollbarYRight = parseInt(railYStyle.right, 10);
   if (isNaN(this.scrollbarYRight)) {
     this.isScrollbarYUsingRight = false;
     this.scrollbarYLeft = toInt(railYStyle.left);
   } else {
     this.isScrollbarYUsingRight = true;
   }
   this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
   this.railBorderYWidth =
     toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
   set(this.scrollbarYRail, { display: 'block' });
   this.railYMarginHeight =
     toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
   set(this.scrollbarYRail, { display: '' });
   this.railYHeight = null;
   this.railYRatio = null;

   this.reach = {
     x:
       element.scrollLeft <= 0
         ? 'start'
         : element.scrollLeft >= this.contentWidth - this.containerWidth
         ? 'end'
         : null,
     y:
       element.scrollTop <= 0
         ? 'start'
         : element.scrollTop >= this.contentHeight - this.containerHeight
         ? 'end'
         : null,
   };

   this.isAlive = true;

   this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

   this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
   this.lastScrollLeft = element.scrollLeft; // for onScroll only
   this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
   updateGeometry(this);
 };

 PerfectScrollbar.prototype.update = function update () {
   if (!this.isAlive) {
     return;
   }

   // Recalcuate negative scrollLeft adjustment
   this.negativeScrollAdjustment = this.isNegativeScroll
     ? this.element.scrollWidth - this.element.clientWidth
     : 0;

   // Recalculate rail margins
   set(this.scrollbarXRail, { display: 'block' });
   set(this.scrollbarYRail, { display: 'block' });
   this.railXMarginWidth =
     toInt(get(this.scrollbarXRail).marginLeft) +
     toInt(get(this.scrollbarXRail).marginRight);
   this.railYMarginHeight =
     toInt(get(this.scrollbarYRail).marginTop) +
     toInt(get(this.scrollbarYRail).marginBottom);

   // Hide scrollbars not to affect scrollWidth and scrollHeight
   set(this.scrollbarXRail, { display: 'none' });
   set(this.scrollbarYRail, { display: 'none' });

   updateGeometry(this);

   processScrollDiff(this, 'top', 0, false, true);
   processScrollDiff(this, 'left', 0, false, true);

   set(this.scrollbarXRail, { display: '' });
   set(this.scrollbarYRail, { display: '' });
 };

 PerfectScrollbar.prototype.onScroll = function onScroll (e) {
   if (!this.isAlive) {
     return;
   }

   updateGeometry(this);
   processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
   processScrollDiff(
     this,
     'left',
     this.element.scrollLeft - this.lastScrollLeft
   );

   this.lastScrollTop = Math.floor(this.element.scrollTop);
   this.lastScrollLeft = this.element.scrollLeft;
 };

 PerfectScrollbar.prototype.destroy = function destroy () {
   if (!this.isAlive) {
     return;
   }

   this.event.unbindAll();
   remove(this.scrollbarX);
   remove(this.scrollbarY);
   remove(this.scrollbarXRail);
   remove(this.scrollbarYRail);
   this.removePsClasses();

   // unset elements
   this.element = null;
   this.scrollbarX = null;
   this.scrollbarY = null;
   this.scrollbarXRail = null;
   this.scrollbarYRail = null;

   this.isAlive = false;
 };

 PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
   this.element.className = this.element.className
     .split(' ')
     .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
     .join(' ');
 };

 return PerfectScrollbar;

})));
//# sourceMappingURL=perfect-scrollbar.js.map

(function(factory) {
 if (typeof define === "function" && define.amd) {
   // AMD. Register as an anonymous module.
   define([], factory);
 } else if (typeof exports === "object") {
   // Node/CommonJS
   module.exports = factory();
 } else {
   // Browser globals
   window.wNumb = factory();
 }
})(function() {
 "use strict";

 var FormatOptions = [
   "decimals",
   "thousand",
   "mark",
   "prefix",
   "suffix",
   "encoder",
   "decoder",
   "negativeBefore",
   "negative",
   "edit",
   "undo"
 ];

 // General

 // Reverse a string
 function strReverse(a) {
   return a
     .split("")
     .reverse()
     .join("");
 }

 // Check if a string starts with a specified prefix.
 function strStartsWith(input, match) {
   return input.substring(0, match.length) === match;
 }

 // Check is a string ends in a specified suffix.
 function strEndsWith(input, match) {
   return input.slice(-1 * match.length) === match;
 }

 // Throw an error if formatting options are incompatible.
 function throwEqualError(F, a, b) {
   if ((F[a] || F[b]) && F[a] === F[b]) {
     throw new Error(a);
   }
 }

 // Check if a number is finite and not NaN
 function isValidNumber(input) {
   return typeof input === "number" && isFinite(input);
 }

 // Provide rounding-accurate toFixed method.
 // Borrowed: http://stackoverflow.com/a/21323330/775265
 function toFixed(value, exp) {
   value = value.toString().split("e");
   value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] + exp : exp)));
   value = value.toString().split("e");
   return (+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))).toFixed(exp);
 }

 // Formatting

 // Accept a number as input, output formatted string.
 function formatTo(
   decimals,
   thousand,
   mark,
   prefix,
   suffix,
   encoder,
   decoder,
   negativeBefore,
   negative,
   edit,
   undo,
   input
 ) {
   var originalInput = input,
     inputIsNegative,
     inputPieces,
     inputBase,
     inputDecimals = "",
     output = "";

   // Apply user encoder to the input.
   // Expected outcome: number.
   if (encoder) {
     input = encoder(input);
   }

   // Stop if no valid number was provided, the number is infinite or NaN.
   if (!isValidNumber(input)) {
     return false;
   }

   // Rounding away decimals might cause a value of -0
   // when using very small ranges. Remove those cases.
   if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
     input = 0;
   }

   // Formatting is done on absolute numbers,
   // decorated by an optional negative symbol.
   if (input < 0) {
     inputIsNegative = true;
     input = Math.abs(input);
   }

   // Reduce the number of decimals to the specified option.
   if (decimals !== false) {
     input = toFixed(input, decimals);
   }

   // Transform the number into a string, so it can be split.
   input = input.toString();

   // Break the number on the decimal separator.
   if (input.indexOf(".") !== -1) {
     inputPieces = input.split(".");

     inputBase = inputPieces[0];

     if (mark) {
       inputDecimals = mark + inputPieces[1];
     }
   } else {
     // If it isn't split, the entire number will do.
     inputBase = input;
   }

   // Group numbers in sets of three.
   if (thousand) {
     inputBase = strReverse(inputBase).match(/.{1,3}/g);
     inputBase = strReverse(inputBase.join(strReverse(thousand)));
   }

   // If the number is negative, prefix with negation symbol.
   if (inputIsNegative && negativeBefore) {
     output += negativeBefore;
   }

   // Prefix the number
   if (prefix) {
     output += prefix;
   }

   // Normal negative option comes after the prefix. Defaults to '-'.
   if (inputIsNegative && negative) {
     output += negative;
   }

   // Append the actual number.
   output += inputBase;
   output += inputDecimals;

   // Apply the suffix.
   if (suffix) {
     output += suffix;
   }

   // Run the output through a user-specified post-formatter.
   if (edit) {
     output = edit(output, originalInput);
   }

   // All done.
   return output;
 }

 // Accept a sting as input, output decoded number.
 function formatFrom(
   decimals,
   thousand,
   mark,
   prefix,
   suffix,
   encoder,
   decoder,
   negativeBefore,
   negative,
   edit,
   undo,
   input
 ) {
   var originalInput = input,
     inputIsNegative,
     output = "";

   // User defined pre-decoder. Result must be a non empty string.
   if (undo) {
     input = undo(input);
   }

   // Test the input. Can't be empty.
   if (!input || typeof input !== "string") {
     return false;
   }

   // If the string starts with the negativeBefore value: remove it.
   // Remember is was there, the number is negative.
   if (negativeBefore && strStartsWith(input, negativeBefore)) {
     input = input.replace(negativeBefore, "");
     inputIsNegative = true;
   }

   // Repeat the same procedure for the prefix.
   if (prefix && strStartsWith(input, prefix)) {
     input = input.replace(prefix, "");
   }

   // And again for negative.
   if (negative && strStartsWith(input, negative)) {
     input = input.replace(negative, "");
     inputIsNegative = true;
   }

   // Remove the suffix.
   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
   if (suffix && strEndsWith(input, suffix)) {
     input = input.slice(0, -1 * suffix.length);
   }

   // Remove the thousand grouping.
   if (thousand) {
     input = input.split(thousand).join("");
   }

   // Set the decimal separator back to period.
   if (mark) {
     input = input.replace(mark, ".");
   }

   // Prepend the negative symbol.
   if (inputIsNegative) {
     output += "-";
   }

   // Add the number
   output += input;

   // Trim all non-numeric characters (allow '.' and '-');
   output = output.replace(/[^0-9\.\-.]/g, "");

   // The value contains no parse-able number.
   if (output === "") {
     return false;
   }

   // Covert to number.
   output = Number(output);

   // Run the user-specified post-decoder.
   if (decoder) {
     output = decoder(output);
   }

   // Check is the output is valid, otherwise: return false.
   if (!isValidNumber(output)) {
     return false;
   }

   return output;
 }

 // Framework

 // Validate formatting options
 function validate(inputOptions) {
   var i,
     optionName,
     optionValue,
     filteredOptions = {};

   if (inputOptions["suffix"] === undefined) {
     inputOptions["suffix"] = inputOptions["postfix"];
   }

   for (i = 0; i < FormatOptions.length; i += 1) {
     optionName = FormatOptions[i];
     optionValue = inputOptions[optionName];

     if (optionValue === undefined) {
       // Only default if negativeBefore isn't set.
       if (optionName === "negative" && !filteredOptions.negativeBefore) {
         filteredOptions[optionName] = "-";
         // Don't set a default for mark when 'thousand' is set.
       } else if (optionName === "mark" && filteredOptions.thousand !== ".") {
         filteredOptions[optionName] = ".";
       } else {
         filteredOptions[optionName] = false;
       }

       // Floating points in JS are stable up to 7 decimals.
     } else if (optionName === "decimals") {
       if (optionValue >= 0 && optionValue < 8) {
         filteredOptions[optionName] = optionValue;
       } else {
         throw new Error(optionName);
       }

       // These options, when provided, must be functions.
     } else if (
       optionName === "encoder" ||
       optionName === "decoder" ||
       optionName === "edit" ||
       optionName === "undo"
     ) {
       if (typeof optionValue === "function") {
         filteredOptions[optionName] = optionValue;
       } else {
         throw new Error(optionName);
       }

       // Other options are strings.
     } else {
       if (typeof optionValue === "string") {
         filteredOptions[optionName] = optionValue;
       } else {
         throw new Error(optionName);
       }
     }
   }

   // Some values can't be extracted from a
   // string if certain combinations are present.
   throwEqualError(filteredOptions, "mark", "thousand");
   throwEqualError(filteredOptions, "prefix", "negative");
   throwEqualError(filteredOptions, "prefix", "negativeBefore");

   return filteredOptions;
 }

 // Pass all options as function arguments
 function passAll(options, method, input) {
   var i,
     args = [];

   // Add all options in order of FormatOptions
   for (i = 0; i < FormatOptions.length; i += 1) {
     args.push(options[FormatOptions[i]]);
   }

   // Append the input, then call the method, presenting all
   // options as arguments.
   args.push(input);
   return method.apply("", args);
 }

 function wNumb(options) {
   if (!(this instanceof wNumb)) {
     return new wNumb(options);
   }

   if (typeof options !== "object") {
     return;
   }

   options = validate(options);

   // Call 'formatTo' with proper arguments.
   this.to = function(input) {
     return passAll(options, formatTo, input);
   };

   // Call 'formatFrom' with proper arguments.
   this.from = function(input) {
     return passAll(options, formatFrom, input);
   };
 }

 return wNumb;
});


/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return o={},r.m=n=[function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var d=n(3),h=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(u=t).addEventListener(s,f),{destroy:function(){u.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,l=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,l)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,l)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,l,u,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(5);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.resolveOptions(t),this.initSelection()}var l=(function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(c,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(t){var e=0<arguments.length&&void 0!==t?t:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),c),u=n(1),s=n.n(u),f=n(2),d=n.n(f),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t};function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var m=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(v,s.a),p(v,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=d()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return b("action",t)}},{key:"defaultTarget",value:function(t){var e=b("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return b("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(t){var e=0<arguments.length&&void 0!==t?t:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),v);function v(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(v.__proto__||Object.getPrototypeOf(v)).call(this));return n.resolveOptions(e),n.listenClick(t),n}function b(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=m}],r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,o});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
// The Emitter class provides the ability to call `.on()` on Dropzone to listen
// to events.
// It is strongly based on component's emitter class, and I removed the
// functionality because of the dependency hell with different frameworks.
var Emitter = /*#__PURE__*/function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
  }

  _createClass(Emitter, [{
    key: "on",
    // Add an event listener for given event
    value: function on(event, fn) {
      this._callbacks = this._callbacks || {}; // Create namespace for this event

      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }

      this._callbacks[event].push(fn);

      return this;
    }
  }, {
    key: "emit",
    value: function emit(event) {
      this._callbacks = this._callbacks || {};
      var callbacks = this._callbacks[event];

      if (callbacks) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var _iterator = _createForOfIteratorHelper(callbacks),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var callback = _step.value;
            callback.apply(this, args);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return this;
    } // Remove event listener for given event. If fn is not provided, all event
    // listeners for that event will be removed. If neither is provided, all
    // event listeners will be removed.

  }, {
    key: "off",
    value: function off(event, fn) {
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      } // specific event


      var callbacks = this._callbacks[event];

      if (!callbacks) {
        return this;
      } // remove all handlers


      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      } // remove specific handler


      for (var i = 0; i < callbacks.length; i++) {
        var callback = callbacks[i];

        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }

      return this;
    }
  }]);

  return Emitter;
}();

var Dropzone = /*#__PURE__*/function (_Emitter) {
  _inherits(Dropzone, _Emitter);

  var _super = _createSuper(Dropzone);

  _createClass(Dropzone, null, [{
    key: "initClass",
    value: function initClass() {
      // Exposing the emitter class, mainly for tests
      this.prototype.Emitter = Emitter;
      /*
       This is a list of all available events you can register on a dropzone object.
        You can register an event handler like this:
        dropzone.on("dragEnter", function() { });
        */

      this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];
      this.prototype.defaultOptions = {
        /**
         * Has to be specified on elements other than form (or when the form
         * doesn't have an `action` attribute). You can also
         * provide a function that will be called with `files` and
         * must return the url (since `v3.12.0`)
         */
        url: null,

        /**
         * Can be changed to `"put"` if necessary. You can also provide a function
         * that will be called with `files` and must return the method (since `v3.12.0`).
         */
        method: "post",

        /**
         * Will be set on the XHRequest.
         */
        withCredentials: false,

        /**
         * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
         */
        timeout: 30000,

        /**
         * How many file uploads to process in parallel (See the
         * Enqueuing file uploads documentation section for more info)
         */
        parallelUploads: 2,

        /**
         * Whether to send multiple files in one request. If
         * this it set to true, then the fallback file input element will
         * have the `multiple` attribute as well. This option will
         * also trigger additional events (like `processingmultiple`). See the events
         * documentation section for more information.
         */
        uploadMultiple: false,

        /**
         * Whether you want files to be uploaded in chunks to your server. This can't be
         * used in combination with `uploadMultiple`.
         *
         * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
         */
        chunking: false,

        /**
         * If `chunking` is enabled, this defines whether **every** file should be chunked,
         * even if the file size is below chunkSize. This means, that the additional chunk
         * form data will be submitted and the `chunksUploaded` callback will be invoked.
         */
        forceChunking: false,

        /**
         * If `chunking` is `true`, then this defines the chunk size in bytes.
         */
        chunkSize: 2000000,

        /**
         * If `true`, the individual chunks of a file are being uploaded simultaneously.
         */
        parallelChunkUploads: false,

        /**
         * Whether a chunk should be retried if it fails.
         */
        retryChunks: false,

        /**
         * If `retryChunks` is true, how many times should it be retried.
         */
        retryChunksLimit: 3,

        /**
         * If not `null` defines how many files this Dropzone handles. If it exceeds,
         * the event `maxfilesexceeded` will be called. The dropzone element gets the
         * class `dz-max-files-reached` accordingly so you can provide visual feedback.
         */
        maxFilesize: 256,

        /**
         * The name of the file param that gets transferred.
         * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
         * Dropzone will append `[]` to the name.
         */
        paramName: "file",

        /**
         * Whether thumbnails for images should be generated
         */
        createImageThumbnails: true,

        /**
         * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
         */
        maxThumbnailFilesize: 10,

        /**
         * If `null`, the ratio of the image will be used to calculate it.
         */
        thumbnailWidth: 120,

        /**
         * The same as `thumbnailWidth`. If both are null, images will not be resized.
         */
        thumbnailHeight: 120,

        /**
         * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        thumbnailMethod: 'crop',

        /**
         * If set, images will be resized to these dimensions before being **uploaded**.
         * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
         * ratio of the file will be preserved.
         *
         * The `options.transformFile` function uses these options, so if the `transformFile` function
         * is overridden, these options don't do anything.
         */
        resizeWidth: null,

        /**
         * See `resizeWidth`.
         */
        resizeHeight: null,

        /**
         * The mime type of the resized image (before it gets uploaded to the server).
         * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
         * See `resizeWidth` for more information.
         */
        resizeMimeType: null,

        /**
         * The quality of the resized images. See `resizeWidth`.
         */
        resizeQuality: 0.8,

        /**
         * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        resizeMethod: 'contain',

        /**
         * The base that is used to calculate the filesize. You can change this to
         * 1024 if you would rather display kibibytes, mebibytes, etc...
         * 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte` not `1 kilobyte`.
         * You can change this to `1024` if you don't care about validity.
         */
        filesizeBase: 1000,

        /**
         * Can be used to limit the maximum number of files that will be handled by this Dropzone
         */
        maxFiles: null,

        /**
         * An optional object to send additional headers to the server. Eg:
         * `{ "My-Awesome-Header": "header value" }`
         */
        headers: null,

        /**
         * If `true`, the dropzone element itself will be clickable, if `false`
         * nothing will be clickable.
         *
         * You can also pass an HTML element, a CSS selector (for multiple elements)
         * or an array of those. In that case, all of those elements will trigger an
         * upload when clicked.
         */
        clickable: true,

        /**
         * Whether hidden files in directories should be ignored.
         */
        ignoreHiddenFiles: true,

        /**
         * The default implementation of `accept` checks the file's mime type or
         * extension against this list. This is a comma separated list of mime
         * types or file extensions.
         *
         * Eg.: `image/*,application/pdf,.psd`
         *
         * If the Dropzone is `clickable` this option will also be used as
         * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
         * parameter on the hidden file input as well.
         */
        acceptedFiles: null,

        /**
         * **Deprecated!**
         * Use acceptedFiles instead.
         */
        acceptedMimeTypes: null,

        /**
         * If false, files will be added to the queue but the queue will not be
         * processed automatically.
         * This can be useful if you need some additional user input before sending
         * files (or if you want want all files sent at once).
         * If you're ready to send the file simply call `myDropzone.processQueue()`.
         *
         * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
         * section for more information.
         */
        autoProcessQueue: true,

        /**
         * If false, files added to the dropzone will not be queued by default.
         * You'll have to call `enqueueFile(file)` manually.
         */
        autoQueue: true,

        /**
         * If `true`, this will add a link to every file preview to remove or cancel (if
         * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
         * and `dictRemoveFile` options are used for the wording.
         */
        addRemoveLinks: false,

        /**
         * Defines where to display the file previews – if `null` the
         * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
         * selector. The element should have the `dropzone-previews` class so
         * the previews are displayed properly.
         */
        previewsContainer: null,

        /**
         * This is the element the hidden input field (which is used when clicking on the
         * dropzone to trigger file selection) will be appended to. This might
         * be important in case you use frameworks to switch the content of your page.
         *
         * Can be a selector string, or an element directly.
         */
        hiddenInputContainer: "body",

        /**
         * If null, no capture type will be specified
         * If camera, mobile devices will skip the file selection and choose camera
         * If microphone, mobile devices will skip the file selection and choose the microphone
         * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
         * On apple devices multiple must be set to false.  AcceptedFiles may need to
         * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
         */
        capture: null,

        /**
         * **Deprecated**. Use `renameFile` instead.
         */
        renameFilename: null,

        /**
         * A function that is invoked before the file is uploaded to the server and renames the file.
         * This function gets the `File` as argument and can use the `file.name`. The actual name of the
         * file that gets used during the upload can be accessed through `file.upload.filename`.
         */
        renameFile: null,

        /**
         * If `true` the fallback will be forced. This is very useful to test your server
         * implementations first and make sure that everything works as
         * expected without dropzone if you experience problems, and to test
         * how your fallbacks will look.
         */
        forceFallback: false,

        /**
         * The text used before any files are dropped.
         */
        dictDefaultMessage: "Drop files here to upload",

        /**
         * The text that replaces the default message text it the browser is not supported.
         */
        dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",

        /**
         * The text that will be added before the fallback form.
         * If you provide a  fallback element yourself, or if this option is `null` this will
         * be ignored.
         */
        dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",

        /**
         * If the filesize is too big.
         * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
         */
        dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",

        /**
         * If the file doesn't match the file type.
         */
        dictInvalidFileType: "You can't upload files of this type.",

        /**
         * If the server response was invalid.
         * `{{statusCode}}` will be replaced with the servers status code.
         */
        dictResponseError: "Server responded with {{statusCode}} code.",

        /**
         * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
         */
        dictCancelUpload: "Cancel upload",

        /**
         * The text that is displayed if an upload was manually canceled
         */
        dictUploadCanceled: "Upload canceled.",

        /**
         * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
         */
        dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",

        /**
         * If `addRemoveLinks` is true, the text to be used to remove a file.
         */
        dictRemoveFile: "Remove file",

        /**
         * If this is not null, then the user will be prompted before removing a file.
         */
        dictRemoveFileConfirmation: null,

        /**
         * Displayed if `maxFiles` is st and exceeded.
         * The string `{{maxFiles}}` will be replaced by the configuration value.
         */
        dictMaxFilesExceeded: "You can not upload any more files.",

        /**
         * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
         * `b` for bytes.
         */
        dictFileSizeUnits: {
          tb: "TB",
          gb: "GB",
          mb: "MB",
          kb: "KB",
          b: "b"
        },

        /**
         * Called when dropzone initialized
         * You can add event listeners here
         */
        init: function init() {},

        /**
         * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
         * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
         * of a function, this needs to return a map.
         *
         * The default implementation does nothing for normal uploads, but adds relevant information for
         * chunked uploads.
         *
         * This is the same as adding hidden input fields in the form element.
         */
        params: function params(files, xhr, chunk) {
          if (chunk) {
            return {
              dzuuid: chunk.file.upload.uuid,
              dzchunkindex: chunk.index,
              dztotalfilesize: chunk.file.size,
              dzchunksize: this.options.chunkSize,
              dztotalchunkcount: chunk.file.upload.totalChunkCount,
              dzchunkbyteoffset: chunk.index * this.options.chunkSize
            };
          }
        },

        /**
         * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
         * and a `done` function as parameters.
         *
         * If the done function is invoked without arguments, the file is "accepted" and will
         * be processed. If you pass an error message, the file is rejected, and the error
         * message will be displayed.
         * This function will not be called if the file is too big or doesn't match the mime types.
         */
        accept: function accept(file, done) {
          return done();
        },

        /**
         * The callback that will be invoked when all chunks have been uploaded for a file.
         * It gets the file for which the chunks have been uploaded as the first parameter,
         * and the `done` function as second. `done()` needs to be invoked when everything
         * needed to finish the upload process is done.
         */
        chunksUploaded: function chunksUploaded(file, done) {
          done();
        },

        /**
         * Gets called when the browser is not supported.
         * The default implementation shows the fallback input field and adds
         * a text.
         */
        fallback: function fallback() {
          // This code should pass in IE7... :(
          var messageElement;
          this.element.className = "".concat(this.element.className, " dz-browser-not-supported");

          var _iterator2 = _createForOfIteratorHelper(this.element.getElementsByTagName("div")),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var child = _step2.value;

              if (/(^| )dz-message($| )/.test(child.className)) {
                messageElement = child;
                child.className = "dz-message"; // Removes the 'dz-default' class

                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (!messageElement) {
            messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
            this.element.appendChild(messageElement);
          }

          var span = messageElement.getElementsByTagName("span")[0];

          if (span) {
            if (span.textContent != null) {
              span.textContent = this.options.dictFallbackMessage;
            } else if (span.innerText != null) {
              span.innerText = this.options.dictFallbackMessage;
            }
          }

          return this.element.appendChild(this.getFallbackForm());
        },

        /**
         * Gets called to calculate the thumbnail dimensions.
         *
         * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
         *
         *  - `srcWidth` & `srcHeight` (required)
         *  - `trgWidth` & `trgHeight` (required)
         *  - `srcX` & `srcY` (optional, default `0`)
         *  - `trgX` & `trgY` (optional, default `0`)
         *
         * Those values are going to be used by `ctx.drawImage()`.
         */
        resize: function resize(file, width, height, resizeMethod) {
          var info = {
            srcX: 0,
            srcY: 0,
            srcWidth: file.width,
            srcHeight: file.height
          };
          var srcRatio = file.width / file.height; // Automatically calculate dimensions if not specified

          if (width == null && height == null) {
            width = info.srcWidth;
            height = info.srcHeight;
          } else if (width == null) {
            width = height * srcRatio;
          } else if (height == null) {
            height = width / srcRatio;
          } // Make sure images aren't upscaled


          width = Math.min(width, info.srcWidth);
          height = Math.min(height, info.srcHeight);
          var trgRatio = width / height;

          if (info.srcWidth > width || info.srcHeight > height) {
            // Image is bigger and needs rescaling
            if (resizeMethod === 'crop') {
              if (srcRatio > trgRatio) {
                info.srcHeight = file.height;
                info.srcWidth = info.srcHeight * trgRatio;
              } else {
                info.srcWidth = file.width;
                info.srcHeight = info.srcWidth / trgRatio;
              }
            } else if (resizeMethod === 'contain') {
              // Method 'contain'
              if (srcRatio > trgRatio) {
                height = width / srcRatio;
              } else {
                width = height * srcRatio;
              }
            } else {
              throw new Error("Unknown resizeMethod '".concat(resizeMethod, "'"));
            }
          }

          info.srcX = (file.width - info.srcWidth) / 2;
          info.srcY = (file.height - info.srcHeight) / 2;
          info.trgWidth = width;
          info.trgHeight = height;
          return info;
        },

        /**
         * Can be used to transform the file (for example, resize an image if necessary).
         *
         * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
         * images according to those dimensions.
         *
         * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
         * to be invoked with the file when the transformation is done.
         */
        transformFile: function transformFile(file, done) {
          if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
            return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
          } else {
            return done(file);
          }
        },

        /**
         * A string that contains the template used for each dropped
         * file. Change it to fulfill your needs but make sure to properly
         * provide all elements.
         *
         * If you want to use an actual HTML element instead of providing a String
         * as a config option, you could create a div with the id `tpl`,
         * put the template inside it and provide the element like this:
         *
         *     document
         *       .querySelector('#tpl')
         *       .innerHTML
         *
         */
        previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>Check</title>\n      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>Error</title>\n      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",
        // END OPTIONS
        // (Required by the dropzone documentation parser)

        /*
         Those functions register themselves to the events on init and handle all
         the user interface specific stuff. Overwriting them won't break the upload
         but can break the way it's displayed.
         You can overwrite them if you don't like the default behavior. If you just
         want to add an additional event handler, register it on the dropzone object
         and don't overwrite those options.
         */
        // Those are self explanatory and simply concern the DragnDrop.
        drop: function drop(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragstart: function dragstart(e) {},
        dragend: function dragend(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragenter: function dragenter(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragover: function dragover(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragleave: function dragleave(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        paste: function paste(e) {},
        // Called whenever there are no files left in the dropzone anymore, and the
        // dropzone should be displayed as if in the initial state.
        reset: function reset() {
          return this.element.classList.remove("dz-started");
        },
        // Called when a file is added to the queue
        // Receives `file`
        addedfile: function addedfile(file) {
          var _this2 = this;

          if (this.element === this.previewsContainer) {
            this.element.classList.add("dz-started");
          }

          if (this.previewsContainer) {
            file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
            file.previewTemplate = file.previewElement; // Backwards compatibility

            this.previewsContainer.appendChild(file.previewElement);

            var _iterator3 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-name]")),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var node = _step3.value;
                node.textContent = file.name;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            var _iterator4 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-size]")),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                node = _step4.value;
                node.innerHTML = this.filesize(file.size);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            if (this.options.addRemoveLinks) {
              file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>".concat(this.options.dictRemoveFile, "</a>"));
              file.previewElement.appendChild(file._removeLink);
            }

            var removeFileEvent = function removeFileEvent(e) {
              e.preventDefault();
              e.stopPropagation();

              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this2.options.dictCancelUploadConfirmation, function () {
                  return _this2.removeFile(file);
                });
              } else {
                if (_this2.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this2.options.dictRemoveFileConfirmation, function () {
                    return _this2.removeFile(file);
                  });
                } else {
                  return _this2.removeFile(file);
                }
              }
            };

            var _iterator5 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-remove]")),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var removeLink = _step5.value;
                removeLink.addEventListener("click", removeFileEvent);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        },
        // Called whenever a file is removed.
        removedfile: function removedfile(file) {
          if (file.previewElement != null && file.previewElement.parentNode != null) {
            file.previewElement.parentNode.removeChild(file.previewElement);
          }

          return this._updateMaxFilesReachedClass();
        },
        // Called when a thumbnail has been generated
        // Receives `file` and `dataUrl`
        thumbnail: function thumbnail(file, dataUrl) {
          if (file.previewElement) {
            file.previewElement.classList.remove("dz-file-preview");

            var _iterator6 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-thumbnail]")),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var thumbnailElement = _step6.value;
                thumbnailElement.alt = file.name;
                thumbnailElement.src = dataUrl;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return setTimeout(function () {
              return file.previewElement.classList.add("dz-image-preview");
            }, 1);
          }
        },
        // Called whenever an error occurs
        // Receives `file` and `message`
        error: function error(file, message) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-error");

            if (typeof message !== "string" && message.error) {
              message = message.error;
            }

            var _iterator7 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-errormessage]")),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var node = _step7.value;
                node.textContent = message;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        },
        errormultiple: function errormultiple() {},
        // Called when a file gets processed. Since there is a cue, not all added
        // files are processed immediately.
        // Receives `file`
        processing: function processing(file) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-processing");

            if (file._removeLink) {
              return file._removeLink.innerHTML = this.options.dictCancelUpload;
            }
          }
        },
        processingmultiple: function processingmultiple() {},
        // Called whenever the upload progress gets updated.
        // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
        // To get the total number of bytes of the file, use `file.size`
        uploadprogress: function uploadprogress(file, progress, bytesSent) {
          if (file.previewElement) {
            var _iterator8 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-uploadprogress]")),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var node = _step8.value;
                node.nodeName === 'PROGRESS' ? node.value = progress : node.style.width = "".concat(progress, "%");
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        },
        // Called whenever the total upload progress gets updated.
        // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
        totaluploadprogress: function totaluploadprogress() {},
        // Called just before the file is sent. Gets the `xhr` object as second
        // parameter, so you can modify it (for example to add a CSRF token) and a
        // `formData` object to add additional information.
        sending: function sending() {},
        sendingmultiple: function sendingmultiple() {},
        // When the complete upload is finished and successful
        // Receives `file`
        success: function success(file) {
          if (file.previewElement) {
            return file.previewElement.classList.add("dz-success");
          }
        },
        successmultiple: function successmultiple() {},
        // When the upload is canceled.
        canceled: function canceled(file) {
          return this.emit("error", file, this.options.dictUploadCanceled);
        },
        canceledmultiple: function canceledmultiple() {},
        // When the upload is finished, either with success or an error.
        // Receives `file`
        complete: function complete(file) {
          if (file._removeLink) {
            file._removeLink.innerHTML = this.options.dictRemoveFile;
          }

          if (file.previewElement) {
            return file.previewElement.classList.add("dz-complete");
          }
        },
        completemultiple: function completemultiple() {},
        maxfilesexceeded: function maxfilesexceeded() {},
        maxfilesreached: function maxfilesreached() {},
        queuecomplete: function queuecomplete() {},
        addedfiles: function addedfiles() {}
      };
      this.prototype._thumbnailQueue = [];
      this.prototype._processingThumbnail = false;
    } // global utility

  }, {
    key: "extend",
    value: function extend(target) {
      for (var _len2 = arguments.length, objects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        objects[_key2 - 1] = arguments[_key2];
      }

      for (var _i = 0, _objects = objects; _i < _objects.length; _i++) {
        var object = _objects[_i];

        for (var key in object) {
          var val = object[key];
          target[key] = val;
        }
      }

      return target;
    }
  }]);

  function Dropzone(el, options) {
    var _this;

    _classCallCheck(this, Dropzone);

    _this = _super.call(this);
    var fallback, left;
    _this.element = el; // For backwards compatibility since the version was in the prototype previously

    _this.version = Dropzone.version;
    _this.defaultOptions.previewTemplate = _this.defaultOptions.previewTemplate.replace(/\n*/g, "");
    _this.clickableElements = [];
    _this.listeners = [];
    _this.files = []; // All files

    if (typeof _this.element === "string") {
      _this.element = document.querySelector(_this.element);
    } // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.


    if (!_this.element || _this.element.nodeType == null) {
      throw new Error("Invalid dropzone element.");
    }

    if (_this.element.dropzone) {
      throw new Error("Dropzone already attached.");
    } // Now add this dropzone to the instances.


    Dropzone.instances.push(_assertThisInitialized(_this)); // Put the dropzone inside the element itself.

    _this.element.dropzone = _assertThisInitialized(_this);
    var elementOptions = (left = Dropzone.optionsForElement(_this.element)) != null ? left : {};
    _this.options = Dropzone.extend({}, _this.defaultOptions, elementOptions, options != null ? options : {}); // If the browser failed, just call the fallback and leave

    if (_this.options.forceFallback || !Dropzone.isBrowserSupported()) {
      return _possibleConstructorReturn(_this, _this.options.fallback.call(_assertThisInitialized(_this)));
    } // @options.url = @element.getAttribute "action" unless @options.url?


    if (_this.options.url == null) {
      _this.options.url = _this.element.getAttribute("action");
    }

    if (!_this.options.url) {
      throw new Error("No URL provided.");
    }

    if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) {
      throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
    }

    if (_this.options.uploadMultiple && _this.options.chunking) {
      throw new Error('You cannot set both: uploadMultiple and chunking.');
    } // Backwards compatibility


    if (_this.options.acceptedMimeTypes) {
      _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
      delete _this.options.acceptedMimeTypes;
    } // Backwards compatibility


    if (_this.options.renameFilename != null) {
      _this.options.renameFile = function (file) {
        return _this.options.renameFilename.call(_assertThisInitialized(_this), file.name, file);
      };
    }

    if (typeof _this.options.method === 'string') {
      _this.options.method = _this.options.method.toUpperCase();
    }

    if ((fallback = _this.getExistingFallback()) && fallback.parentNode) {
      // Remove the fallback
      fallback.parentNode.removeChild(fallback);
    } // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false


    if (_this.options.previewsContainer !== false) {
      if (_this.options.previewsContainer) {
        _this.previewsContainer = Dropzone.getElement(_this.options.previewsContainer, "previewsContainer");
      } else {
        _this.previewsContainer = _this.element;
      }
    }

    if (_this.options.clickable) {
      if (_this.options.clickable === true) {
        _this.clickableElements = [_this.element];
      } else {
        _this.clickableElements = Dropzone.getElements(_this.options.clickable, "clickable");
      }
    }

    _this.init();

    return _this;
  } // Returns all files that have been accepted


  _createClass(Dropzone, [{
    key: "getAcceptedFiles",
    value: function getAcceptedFiles() {
      return this.files.filter(function (file) {
        return file.accepted;
      }).map(function (file) {
        return file;
      });
    } // Returns all files that have been rejected
    // Not sure when that's going to be useful, but added for completeness.

  }, {
    key: "getRejectedFiles",
    value: function getRejectedFiles() {
      return this.files.filter(function (file) {
        return !file.accepted;
      }).map(function (file) {
        return file;
      });
    }
  }, {
    key: "getFilesWithStatus",
    value: function getFilesWithStatus(status) {
      return this.files.filter(function (file) {
        return file.status === status;
      }).map(function (file) {
        return file;
      });
    } // Returns all files that are in the queue

  }, {
    key: "getQueuedFiles",
    value: function getQueuedFiles() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    }
  }, {
    key: "getUploadingFiles",
    value: function getUploadingFiles() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    }
  }, {
    key: "getAddedFiles",
    value: function getAddedFiles() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    } // Files that are either queued or uploading

  }, {
    key: "getActiveFiles",
    value: function getActiveFiles() {
      return this.files.filter(function (file) {
        return file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED;
      }).map(function (file) {
        return file;
      });
    } // The function that gets called when Dropzone is initialized. You
    // can (and should) setup event listeners inside this function.

  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      // In case it isn't set already
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }

      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><button class=\"dz-button\" type=\"button\">".concat(this.options.dictDefaultMessage, "</button></div>")));
      }

      if (this.clickableElements.length) {
        var setupHiddenFileInput = function setupHiddenFileInput() {
          if (_this3.hiddenFileInput) {
            _this3.hiddenFileInput.parentNode.removeChild(_this3.hiddenFileInput);
          }

          _this3.hiddenFileInput = document.createElement("input");

          _this3.hiddenFileInput.setAttribute("type", "file");

          if (_this3.options.maxFiles === null || _this3.options.maxFiles > 1) {
            _this3.hiddenFileInput.setAttribute("multiple", "multiple");
          }

          _this3.hiddenFileInput.className = "dz-hidden-input";

          if (_this3.options.acceptedFiles !== null) {
            _this3.hiddenFileInput.setAttribute("accept", _this3.options.acceptedFiles);
          }

          if (_this3.options.capture !== null) {
            _this3.hiddenFileInput.setAttribute("capture", _this3.options.capture);
          } // Not setting `display="none"` because some browsers don't accept clicks
          // on elements that aren't displayed.


          _this3.hiddenFileInput.style.visibility = "hidden";
          _this3.hiddenFileInput.style.position = "absolute";
          _this3.hiddenFileInput.style.top = "0";
          _this3.hiddenFileInput.style.left = "0";
          _this3.hiddenFileInput.style.height = "0";
          _this3.hiddenFileInput.style.width = "0";
          Dropzone.getElement(_this3.options.hiddenInputContainer, 'hiddenInputContainer').appendChild(_this3.hiddenFileInput);
          return _this3.hiddenFileInput.addEventListener("change", function () {
            var files = _this3.hiddenFileInput.files;

            if (files.length) {
              var _iterator9 = _createForOfIteratorHelper(files),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var file = _step9.value;

                  _this3.addFile(file);
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }

            _this3.emit("addedfiles", files);

            return setupHiddenFileInput();
          });
        };

        setupHiddenFileInput();
      }

      this.URL = window.URL !== null ? window.URL : window.webkitURL; // Setup all event listeners on the Dropzone object itself.
      // They're not in @setupEventListeners() because they shouldn't be removed
      // again when the dropzone gets disabled.

      var _iterator10 = _createForOfIteratorHelper(this.events),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var eventName = _step10.value;
          this.on(eventName, this.options[eventName]);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      this.on("uploadprogress", function () {
        return _this3.updateTotalUploadProgress();
      });
      this.on("removedfile", function () {
        return _this3.updateTotalUploadProgress();
      });
      this.on("canceled", function (file) {
        return _this3.emit("complete", file);
      }); // Emit a `queuecomplete` event if all files finished uploading.

      this.on("complete", function (file) {
        if (_this3.getAddedFiles().length === 0 && _this3.getUploadingFiles().length === 0 && _this3.getQueuedFiles().length === 0) {
          // This needs to be deferred so that `queuecomplete` really triggers after `complete`
          return setTimeout(function () {
            return _this3.emit("queuecomplete");
          }, 0);
        }
      });

      var containsFiles = function containsFiles(e) {
        if (e.dataTransfer.types) {
          // Because e.dataTransfer.types is an Object in
          // IE, we need to iterate like this instead of
          // using e.dataTransfer.types.some()
          for (var i = 0; i < e.dataTransfer.types.length; i++) {
            if (e.dataTransfer.types[i] === "Files") return true;
          }
        }

        return false;
      };

      var noPropagation = function noPropagation(e) {
        // If there are no files, we don't want to stop
        // propagation so we don't interfere with other
        // drag and drop behaviour.
        if (!containsFiles(e)) return;
        e.stopPropagation();

        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      }; // Create the listeners


      this.listeners = [{
        element: this.element,
        events: {
          "dragstart": function dragstart(e) {
            return _this3.emit("dragstart", e);
          },
          "dragenter": function dragenter(e) {
            noPropagation(e);
            return _this3.emit("dragenter", e);
          },
          "dragover": function dragover(e) {
            // Makes it possible to drag files from chrome's download bar
            // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
            // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
            var efct;

            try {
              efct = e.dataTransfer.effectAllowed;
            } catch (error) {}

            e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
            noPropagation(e);
            return _this3.emit("dragover", e);
          },
          "dragleave": function dragleave(e) {
            return _this3.emit("dragleave", e);
          },
          "drop": function drop(e) {
            noPropagation(e);
            return _this3.drop(e);
          },
          "dragend": function dragend(e) {
            return _this3.emit("dragend", e);
          }
        } // This is disabled right now, because the browsers don't implement it properly.
        // "paste": (e) =>
        //   noPropagation e
        //   @paste e

      }];
      this.clickableElements.forEach(function (clickableElement) {
        return _this3.listeners.push({
          element: clickableElement,
          events: {
            "click": function click(evt) {
              // Only the actual dropzone or the message element should trigger file selection
              if (clickableElement !== _this3.element || evt.target === _this3.element || Dropzone.elementInside(evt.target, _this3.element.querySelector(".dz-message"))) {
                _this3.hiddenFileInput.click(); // Forward the click

              }

              return true;
            }
          }
        });
      });
      this.enable();
      return this.options.init.call(this);
    } // Not fully tested yet

  }, {
    key: "destroy",
    value: function destroy() {
      this.disable();
      this.removeAllFiles(true);

      if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }

      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    }
  }, {
    key: "updateTotalUploadProgress",
    value: function updateTotalUploadProgress() {
      var totalUploadProgress;
      var totalBytesSent = 0;
      var totalBytes = 0;
      var activeFiles = this.getActiveFiles();

      if (activeFiles.length) {
        var _iterator11 = _createForOfIteratorHelper(this.getActiveFiles()),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var file = _step11.value;
            totalBytesSent += file.upload.bytesSent;
            totalBytes += file.upload.total;
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }

      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    } // @options.paramName can be a function taking one parameter rather than a string.
    // A parameter name for a file is obtained simply by calling this with an index number.

  }, {
    key: "_getParamName",
    value: function _getParamName(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(n, "]") : "");
      }
    } // If @options.renameFile is a function,
    // the function will be used to rename the file.name before appending it to the formData

  }, {
    key: "_renameFile",
    value: function _renameFile(file) {
      if (typeof this.options.renameFile !== "function") {
        return file.name;
      }

      return this.options.renameFile(file);
    } // Returns a form that can be used as fallback if the browser does not support DragnDrop
    //
    // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
    // This code has to pass in IE7 :(

  }, {
    key: "getFallbackForm",
    value: function getFallbackForm() {
      var existingFallback, form;

      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }

      var fieldsString = "<div class=\"dz-fallback\">";

      if (this.options.dictFallbackText) {
        fieldsString += "<p>".concat(this.options.dictFallbackText, "</p>");
      }

      fieldsString += "<input type=\"file\" name=\"".concat(this._getParamName(0), "\" ").concat(this.options.uploadMultiple ? 'multiple="multiple"' : undefined, " /><input type=\"submit\" value=\"Upload!\"></div>");
      var fields = Dropzone.createElement(fieldsString);

      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"".concat(this.options.url, "\" enctype=\"multipart/form-data\" method=\"").concat(this.options.method, "\"></form>"));
        form.appendChild(fields);
      } else {
        // Make sure that the enctype and method attributes are set properly
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }

      return form != null ? form : fields;
    } // Returns the fallback elements if they exist already
    //
    // This code has to pass in IE7 :(

  }, {
    key: "getExistingFallback",
    value: function getExistingFallback() {
      var getFallback = function getFallback(elements) {
        var _iterator12 = _createForOfIteratorHelper(elements),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var el = _step12.value;

            if (/(^| )fallback($| )/.test(el.className)) {
              return el;
            }
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      };

      for (var _i2 = 0, _arr = ["div", "form"]; _i2 < _arr.length; _i2++) {
        var tagName = _arr[_i2];
        var fallback;

        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    } // Activates all listeners stored in @listeners

  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];

          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.addEventListener(event, listener, false));
          }

          return result;
        }();
      });
    } // Deactivates all listeners stored in @listeners

  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];

          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.removeEventListener(event, listener, false));
          }

          return result;
        }();
      });
    } // Removes all event listeners and cancels all files in the queue or being processed.

  }, {
    key: "disable",
    value: function disable() {
      var _this4 = this;

      this.clickableElements.forEach(function (element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      this.disabled = true;
      return this.files.map(function (file) {
        return _this4.cancelUpload(file);
      });
    }
  }, {
    key: "enable",
    value: function enable() {
      delete this.disabled;
      this.clickableElements.forEach(function (element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    } // Returns a nicely formatted filesize

  }, {
    key: "filesize",
    value: function filesize(size) {
      var selectedSize = 0;
      var selectedUnit = "b";

      if (size > 0) {
        var units = ['tb', 'gb', 'mb', 'kb', 'b'];

        for (var i = 0; i < units.length; i++) {
          var unit = units[i];
          var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;

          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }

        selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
      }

      return "<strong>".concat(selectedSize, "</strong> ").concat(this.options.dictFileSizeUnits[selectedUnit]);
    } // Adds or removes the `dz-max-files-reached` class from the form.

  }, {
    key: "_updateMaxFilesReachedClass",
    value: function _updateMaxFilesReachedClass() {
      if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }

        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    }
  }, {
    key: "drop",
    value: function drop(e) {
      if (!e.dataTransfer) {
        return;
      }

      this.emit("drop", e); // Convert the FileList to an Array
      // This is necessary for IE11

      var files = [];

      for (var i = 0; i < e.dataTransfer.files.length; i++) {
        files[i] = e.dataTransfer.files[i];
      } // Even if it's a folder, files.length will contain the folders.


      if (files.length) {
        var items = e.dataTransfer.items;

        if (items && items.length && items[0].webkitGetAsEntry != null) {
          // The browser supports dropping of folders, so handle items instead of files
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }

      this.emit("addedfiles", files);
    }
  }, {
    key: "paste",
    value: function paste(e) {
      if (__guard__(e != null ? e.clipboardData : undefined, function (x) {
        return x.items;
      }) == null) {
        return;
      }

      this.emit("paste", e);
      var items = e.clipboardData.items;

      if (items.length) {
        return this._addFilesFromItems(items);
      }
    }
  }, {
    key: "handleFiles",
    value: function handleFiles(files) {
      var _iterator13 = _createForOfIteratorHelper(files),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var file = _step13.value;
          this.addFile(file);
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    } // When a folder is dropped (or files are pasted), items must be handled
    // instead of files.

  }, {
    key: "_addFilesFromItems",
    value: function _addFilesFromItems(items) {
      var _this5 = this;

      return function () {
        var result = [];

        var _iterator14 = _createForOfIteratorHelper(items),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var item = _step14.value;
            var entry;

            if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
              if (entry.isFile) {
                result.push(_this5.addFile(item.getAsFile()));
              } else if (entry.isDirectory) {
                // Append all files from that directory to files
                result.push(_this5._addFilesFromDirectory(entry, entry.name));
              } else {
                result.push(undefined);
              }
            } else if (item.getAsFile != null) {
              if (item.kind == null || item.kind === "file") {
                result.push(_this5.addFile(item.getAsFile()));
              } else {
                result.push(undefined);
              }
            } else {
              result.push(undefined);
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }

        return result;
      }();
    } // Goes through the directory, and adds each file it finds recursively

  }, {
    key: "_addFilesFromDirectory",
    value: function _addFilesFromDirectory(directory, path) {
      var _this6 = this;

      var dirReader = directory.createReader();

      var errorHandler = function errorHandler(error) {
        return __guardMethod__(console, 'log', function (o) {
          return o.log(error);
        });
      };

      var readEntries = function readEntries() {
        return dirReader.readEntries(function (entries) {
          if (entries.length > 0) {
            var _iterator15 = _createForOfIteratorHelper(entries),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var entry = _step15.value;

                if (entry.isFile) {
                  entry.file(function (file) {
                    if (_this6.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                      return;
                    }

                    file.fullPath = "".concat(path, "/").concat(file.name);
                    return _this6.addFile(file);
                  });
                } else if (entry.isDirectory) {
                  _this6._addFilesFromDirectory(entry, "".concat(path, "/").concat(entry.name));
                }
              } // Recursively call readEntries() again, since browser only handle
              // the first 100 entries.
              // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries

            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }

            readEntries();
          }

          return null;
        }, errorHandler);
      };

      return readEntries();
    } // If `done()` is called without argument the file is accepted
    // If you call it with an error message, the file is rejected
    // (This allows for asynchronous validation)
    //
    // This function checks the filesize, and if the file.type passes the
    // `acceptedFiles` check.

  }, {
    key: "accept",
    value: function accept(file, done) {
      if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1024 * 1024) {
        done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        done(this.options.dictInvalidFileType);
      } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        this.emit("maxfilesexceeded", file);
      } else {
        this.options.accept.call(this, file, done);
      }
    }
  }, {
    key: "addFile",
    value: function addFile(file) {
      var _this7 = this;

      file.upload = {
        uuid: Dropzone.uuidv4(),
        progress: 0,
        // Setting the total upload size to file.size for the beginning
        // It's actual different than the size to be transmitted.
        total: file.size,
        bytesSent: 0,
        filename: this._renameFile(file) // Not setting chunking information here, because the acutal data — and
        // thus the chunks — might change if `options.transformFile` is set
        // and does something to the data.

      };
      this.files.push(file);
      file.status = Dropzone.ADDED;
      this.emit("addedfile", file);

      this._enqueueThumbnail(file);

      this.accept(file, function (error) {
        if (error) {
          file.accepted = false;

          _this7._errorProcessing([file], error); // Will set the file.status

        } else {
          file.accepted = true;

          if (_this7.options.autoQueue) {
            _this7.enqueueFile(file);
          } // Will set .accepted = true

        }

        _this7._updateMaxFilesReachedClass();
      });
    } // Wrapper for enqueueFile

  }, {
    key: "enqueueFiles",
    value: function enqueueFiles(files) {
      var _iterator16 = _createForOfIteratorHelper(files),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var file = _step16.value;
          this.enqueueFile(file);
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      return null;
    }
  }, {
    key: "enqueueFile",
    value: function enqueueFile(file) {
      var _this8 = this;

      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;

        if (this.options.autoProcessQueue) {
          return setTimeout(function () {
            return _this8.processQueue();
          }, 0); // Deferring the call
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    }
  }, {
    key: "_enqueueThumbnail",
    value: function _enqueueThumbnail(file) {
      var _this9 = this;

      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);

        return setTimeout(function () {
          return _this9._processThumbnailQueue();
        }, 0); // Deferring the call
      }
    }
  }, {
    key: "_processThumbnailQueue",
    value: function _processThumbnailQueue() {
      var _this10 = this;

      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }

      this._processingThumbnail = true;

      var file = this._thumbnailQueue.shift();

      return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, function (dataUrl) {
        _this10.emit("thumbnail", file, dataUrl);

        _this10._processingThumbnail = false;
        return _this10._processThumbnailQueue();
      });
    } // Can be called by the user to remove a file

  }, {
    key: "removeFile",
    value: function removeFile(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }

      this.files = without(this.files, file);
      this.emit("removedfile", file);

      if (this.files.length === 0) {
        return this.emit("reset");
      }
    } // Removes all files that aren't currently processed from the list

  }, {
    key: "removeAllFiles",
    value: function removeAllFiles(cancelIfNecessary) {
      // Create a copy of files since removeFile() changes the @files array.
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }

      var _iterator17 = _createForOfIteratorHelper(this.files.slice()),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var file = _step17.value;

          if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
            this.removeFile(file);
          }
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      return null;
    } // Resizes an image before it gets sent to the server. This function is the default behavior of
    // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
    // the resized blob.

  }, {
    key: "resizeImage",
    value: function resizeImage(file, width, height, resizeMethod, callback) {
      var _this11 = this;

      return this.createThumbnail(file, width, height, resizeMethod, true, function (dataUrl, canvas) {
        if (canvas == null) {
          // The image has not been resized
          return callback(file);
        } else {
          var resizeMimeType = _this11.options.resizeMimeType;

          if (resizeMimeType == null) {
            resizeMimeType = file.type;
          }

          var resizedDataURL = canvas.toDataURL(resizeMimeType, _this11.options.resizeQuality);

          if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {
            // Now add the original EXIF information
            resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
          }

          return callback(Dropzone.dataURItoBlob(resizedDataURL));
        }
      });
    }
  }, {
    key: "createThumbnail",
    value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
      var _this12 = this;

      var fileReader = new FileReader();

      fileReader.onload = function () {
        file.dataURL = fileReader.result; // Don't bother creating a thumbnail for SVG images since they're vector

        if (file.type === "image/svg+xml") {
          if (callback != null) {
            callback(fileReader.result);
          }

          return;
        }

        _this12.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
      };

      fileReader.readAsDataURL(file);
    } // `mockFile` needs to have these attributes:
    // 
    //     { name: 'name', size: 12345, imageUrl: '' }
    //
    // `callback` will be invoked when the image has been downloaded and displayed.
    // `crossOrigin` will be added to the `img` tag when accessing the file.

  }, {
    key: "displayExistingFile",
    value: function displayExistingFile(mockFile, imageUrl, callback, crossOrigin) {
      var _this13 = this;

      var resizeThumbnail = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      this.emit("addedfile", mockFile);
      this.emit("complete", mockFile);

      if (!resizeThumbnail) {
        this.emit("thumbnail", mockFile, imageUrl);
        if (callback) callback();
      } else {
        var onDone = function onDone(thumbnail) {
          _this13.emit('thumbnail', mockFile, thumbnail);

          if (callback) callback();
        };

        mockFile.dataURL = imageUrl;
        this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.resizeMethod, this.options.fixOrientation, onDone, crossOrigin);
      }
    }
  }, {
    key: "createThumbnailFromUrl",
    value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
      var _this14 = this;

      // Not using `new Image` here because of a bug in latest Chrome versions.
      // See https://github.com/enyo/dropzone/pull/226
      var img = document.createElement("img");

      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      } // fixOrientation is not needed anymore with browsers handling imageOrientation


      fixOrientation = getComputedStyle(document.body)['imageOrientation'] == 'from-image' ? false : fixOrientation;

      img.onload = function () {
        var loadExif = function loadExif(callback) {
          return callback(1);
        };

        if (typeof EXIF !== 'undefined' && EXIF !== null && fixOrientation) {
          loadExif = function loadExif(callback) {
            return EXIF.getData(img, function () {
              return callback(EXIF.getTag(this, 'Orientation'));
            });
          };
        }

        return loadExif(function (orientation) {
          file.width = img.width;
          file.height = img.height;

          var resizeInfo = _this14.options.resize.call(_this14, file, width, height, resizeMethod);

          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          canvas.width = resizeInfo.trgWidth;
          canvas.height = resizeInfo.trgHeight;

          if (orientation > 4) {
            canvas.width = resizeInfo.trgHeight;
            canvas.height = resizeInfo.trgWidth;
          }

          switch (orientation) {
            case 2:
              // horizontal flip
              ctx.translate(canvas.width, 0);
              ctx.scale(-1, 1);
              break;

            case 3:
              // 180° rotate left
              ctx.translate(canvas.width, canvas.height);
              ctx.rotate(Math.PI);
              break;

            case 4:
              // vertical flip
              ctx.translate(0, canvas.height);
              ctx.scale(1, -1);
              break;

            case 5:
              // vertical flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.scale(1, -1);
              break;

            case 6:
              // 90° rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(0, -canvas.width);
              break;

            case 7:
              // horizontal flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(canvas.height, -canvas.width);
              ctx.scale(-1, 1);
              break;

            case 8:
              // 90° rotate left
              ctx.rotate(-0.5 * Math.PI);
              ctx.translate(-canvas.height, 0);
              break;
          } // This is a bugfix for iOS' scaling bug.


          drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
          var thumbnail = canvas.toDataURL("image/png");

          if (callback != null) {
            return callback(thumbnail, canvas);
          }
        });
      };

      if (callback != null) {
        img.onerror = callback;
      }

      return img.src = file.dataURL;
    } // Goes through the queue and processes files if there aren't too many already.

  }, {
    key: "processQueue",
    value: function processQueue() {
      var parallelUploads = this.options.parallelUploads;
      var processingLength = this.getUploadingFiles().length;
      var i = processingLength; // There are already at least as many files uploading than should be

      if (processingLength >= parallelUploads) {
        return;
      }

      var queuedFiles = this.getQueuedFiles();

      if (!(queuedFiles.length > 0)) {
        return;
      }

      if (this.options.uploadMultiple) {
        // The files should be uploaded in one request
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          } // Nothing left to process


          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    } // Wrapper for `processFiles`

  }, {
    key: "processFile",
    value: function processFile(file) {
      return this.processFiles([file]);
    } // Loads the file, then calls finishedLoading()

  }, {
    key: "processFiles",
    value: function processFiles(files) {
      var _iterator18 = _createForOfIteratorHelper(files),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var file = _step18.value;
          file.processing = true; // Backwards compatibility

          file.status = Dropzone.UPLOADING;
          this.emit("processing", file);
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }

      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }

      return this.uploadFiles(files);
    }
  }, {
    key: "_getFilesWithXhr",
    value: function _getFilesWithXhr(xhr) {
      var files;
      return files = this.files.filter(function (file) {
        return file.xhr === xhr;
      }).map(function (file) {
        return file;
      });
    } // Cancels the file upload and sets the status to CANCELED
    // **if** the file is actually being uploaded.
    // If it's still in the queue, the file is being removed from it and the status
    // set to CANCELED.

  }, {
    key: "cancelUpload",
    value: function cancelUpload(file) {
      if (file.status === Dropzone.UPLOADING) {
        var groupedFiles = this._getFilesWithXhr(file.xhr);

        var _iterator19 = _createForOfIteratorHelper(groupedFiles),
            _step19;

        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var groupedFile = _step19.value;
            groupedFile.status = Dropzone.CANCELED;
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }

        if (typeof file.xhr !== 'undefined') {
          file.xhr.abort();
        }

        var _iterator20 = _createForOfIteratorHelper(groupedFiles),
            _step20;

        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var _groupedFile = _step20.value;
            this.emit("canceled", _groupedFile);
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }

        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if (file.status === Dropzone.ADDED || file.status === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);

        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }, {
    key: "resolveOption",
    value: function resolveOption(option) {
      if (typeof option === 'function') {
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        return option.apply(this, args);
      }

      return option;
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(file) {
      return this.uploadFiles([file]);
    }
  }, {
    key: "uploadFiles",
    value: function uploadFiles(files) {
      var _this15 = this;

      this._transformFiles(files, function (transformedFiles) {
        if (_this15.options.chunking) {
          // Chunking is not allowed to be used with `uploadMultiple` so we know
          // that there is only __one__file.
          var transformedFile = transformedFiles[0];
          files[0].upload.chunked = _this15.options.chunking && (_this15.options.forceChunking || transformedFile.size > _this15.options.chunkSize);
          files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / _this15.options.chunkSize);
        }

        if (files[0].upload.chunked) {
          // This file should be sent in chunks!
          // If the chunking option is set, we **know** that there can only be **one** file, since
          // uploadMultiple is not allowed with this option.
          var file = files[0];
          var _transformedFile = transformedFiles[0];
          var startedChunkCount = 0;
          file.upload.chunks = [];

          var handleNextChunk = function handleNextChunk() {
            var chunkIndex = 0; // Find the next item in file.upload.chunks that is not defined yet.

            while (file.upload.chunks[chunkIndex] !== undefined) {
              chunkIndex++;
            } // This means, that all chunks have already been started.


            if (chunkIndex >= file.upload.totalChunkCount) return;
            startedChunkCount++;
            var start = chunkIndex * _this15.options.chunkSize;
            var end = Math.min(start + _this15.options.chunkSize, _transformedFile.size);
            var dataBlock = {
              name: _this15._getParamName(0),
              data: _transformedFile.webkitSlice ? _transformedFile.webkitSlice(start, end) : _transformedFile.slice(start, end),
              filename: file.upload.filename,
              chunkIndex: chunkIndex
            };
            file.upload.chunks[chunkIndex] = {
              file: file,
              index: chunkIndex,
              dataBlock: dataBlock,
              // In case we want to retry.
              status: Dropzone.UPLOADING,
              progress: 0,
              retries: 0 // The number of times this block has been retried.

            };

            _this15._uploadData(files, [dataBlock]);
          };

          file.upload.finishedChunkUpload = function (chunk) {
            var allFinished = true;
            chunk.status = Dropzone.SUCCESS; // Clear the data from the chunk

            chunk.dataBlock = null; // Leaving this reference to xhr intact here will cause memory leaks in some browsers

            chunk.xhr = null;

            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              if (file.upload.chunks[i] === undefined) {
                return handleNextChunk();
              }

              if (file.upload.chunks[i].status !== Dropzone.SUCCESS) {
                allFinished = false;
              }
            }

            if (allFinished) {
              _this15.options.chunksUploaded(file, function () {
                _this15._finished(files, '', null);
              });
            }
          };

          if (_this15.options.parallelChunkUploads) {
            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              handleNextChunk();
            }
          } else {
            handleNextChunk();
          }
        } else {
          var dataBlocks = [];

          for (var _i3 = 0; _i3 < files.length; _i3++) {
            dataBlocks[_i3] = {
              name: _this15._getParamName(_i3),
              data: transformedFiles[_i3],
              filename: files[_i3].upload.filename
            };
          }

          _this15._uploadData(files, dataBlocks);
        }
      });
    } /// Returns the right chunk for given file and xhr

  }, {
    key: "_getChunk",
    value: function _getChunk(file, xhr) {
      for (var i = 0; i < file.upload.totalChunkCount; i++) {
        if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) {
          return file.upload.chunks[i];
        }
      }
    } // This function actually uploads the file(s) to the server.
    // If dataBlocks contains the actual data to upload (meaning, that this could either be transformed
    // files, or individual chunks for chunked upload).

  }, {
    key: "_uploadData",
    value: function _uploadData(files, dataBlocks) {
      var _this16 = this;

      var xhr = new XMLHttpRequest(); // Put the xhr object in the file objects to be able to reference it later.

      var _iterator21 = _createForOfIteratorHelper(files),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var file = _step21.value;
          file.xhr = xhr;
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }

      if (files[0].upload.chunked) {
        // Put the xhr object in the right chunk object, so it can be associated later, and found with _getChunk
        files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
      }

      var method = this.resolveOption(this.options.method, files);
      var url = this.resolveOption(this.options.url, files);
      xhr.open(method, url, true); // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8

      xhr.timeout = this.resolveOption(this.options.timeout, files); // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179

      xhr.withCredentials = !!this.options.withCredentials;

      xhr.onload = function (e) {
        _this16._finishedUploading(files, xhr, e);
      };

      xhr.ontimeout = function () {
        _this16._handleUploadError(files, xhr, "Request timedout after ".concat(_this16.options.timeout / 1000, " seconds"));
      };

      xhr.onerror = function () {
        _this16._handleUploadError(files, xhr);
      }; // Some browsers do not have the .upload property


      var progressObj = xhr.upload != null ? xhr.upload : xhr;

      progressObj.onprogress = function (e) {
        return _this16._updateFilesUploadProgress(files, xhr, e);
      };

      var headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };

      if (this.options.headers) {
        Dropzone.extend(headers, this.options.headers);
      }

      for (var headerName in headers) {
        var headerValue = headers[headerName];

        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }

      var formData = new FormData(); // Adding all @options parameters

      if (this.options.params) {
        var additionalParams = this.options.params;

        if (typeof additionalParams === 'function') {
          additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
        }

        for (var key in additionalParams) {
          var value = additionalParams[key];

          if (Array.isArray(value)) {
            // The additional parameter contains an array,
            // so lets iterate over it to attach each value
            // individually.
            for (var i = 0; i < value.length; i++) {
              formData.append(key, value[i]);
            }
          } else {
            formData.append(key, value);
          }
        }
      } // Let the user add additional data if necessary


      var _iterator22 = _createForOfIteratorHelper(files),
          _step22;

      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var _file = _step22.value;
          this.emit("sending", _file, xhr, formData);
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }

      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }

      this._addFormElementData(formData); // Finally add the files
      // Has to be last because some servers (eg: S3) expect the file to be the last parameter


      for (var _i4 = 0; _i4 < dataBlocks.length; _i4++) {
        var dataBlock = dataBlocks[_i4];
        formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
      }

      this.submitRequest(xhr, formData, files);
    } // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.

  }, {
    key: "_transformFiles",
    value: function _transformFiles(files, done) {
      var _this17 = this;

      var transformedFiles = []; // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.

      var doneCounter = 0;

      var _loop = function _loop(i) {
        _this17.options.transformFile.call(_this17, files[i], function (transformedFile) {
          transformedFiles[i] = transformedFile;

          if (++doneCounter === files.length) {
            done(transformedFiles);
          }
        });
      };

      for (var i = 0; i < files.length; i++) {
        _loop(i);
      }
    } // Takes care of adding other input elements of the form to the AJAX request

  }, {
    key: "_addFormElementData",
    value: function _addFormElementData(formData) {
      // Take care of other input elements
      if (this.element.tagName === "FORM") {
        var _iterator23 = _createForOfIteratorHelper(this.element.querySelectorAll("input, textarea, select, button")),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var input = _step23.value;
            var inputName = input.getAttribute("name");
            var inputType = input.getAttribute("type");
            if (inputType) inputType = inputType.toLowerCase(); // If the input doesn't have a name, we can't use it.

            if (typeof inputName === 'undefined' || inputName === null) continue;

            if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
              // Possibly multiple values
              var _iterator24 = _createForOfIteratorHelper(input.options),
                  _step24;

              try {
                for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                  var option = _step24.value;

                  if (option.selected) {
                    formData.append(inputName, option.value);
                  }
                }
              } catch (err) {
                _iterator24.e(err);
              } finally {
                _iterator24.f();
              }
            } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) {
              formData.append(inputName, input.value);
            }
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      }
    } // Invoked when there is new progress information about given files.
    // If e is not provided, it is assumed that the upload is finished.

  }, {
    key: "_updateFilesUploadProgress",
    value: function _updateFilesUploadProgress(files, xhr, e) {
      var progress;

      if (typeof e !== 'undefined') {
        progress = 100 * e.loaded / e.total;

        if (files[0].upload.chunked) {
          var file = files[0]; // Since this is a chunked upload, we need to update the appropriate chunk progress.

          var chunk = this._getChunk(file, xhr);

          chunk.progress = progress;
          chunk.total = e.total;
          chunk.bytesSent = e.loaded;
          var fileProgress = 0,
              fileTotal,
              fileBytesSent;
          file.upload.progress = 0;
          file.upload.total = 0;
          file.upload.bytesSent = 0;

          for (var i = 0; i < file.upload.totalChunkCount; i++) {
            if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].progress !== undefined) {
              file.upload.progress += file.upload.chunks[i].progress;
              file.upload.total += file.upload.chunks[i].total;
              file.upload.bytesSent += file.upload.chunks[i].bytesSent;
            }
          }

          file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
        } else {
          var _iterator25 = _createForOfIteratorHelper(files),
              _step25;

          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var _file2 = _step25.value;
              _file2.upload.progress = progress;
              _file2.upload.total = e.total;
              _file2.upload.bytesSent = e.loaded;
            }
          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
          }
        }

        var _iterator26 = _createForOfIteratorHelper(files),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var _file3 = _step26.value;
            this.emit("uploadprogress", _file3, _file3.upload.progress, _file3.upload.bytesSent);
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }
      } else {
        // Called when the file finished uploading
        var allFilesFinished = true;
        progress = 100;

        var _iterator27 = _createForOfIteratorHelper(files),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var _file4 = _step27.value;

            if (_file4.upload.progress !== 100 || _file4.upload.bytesSent !== _file4.upload.total) {
              allFilesFinished = false;
            }

            _file4.upload.progress = progress;
            _file4.upload.bytesSent = _file4.upload.total;
          } // Nothing to do, all files already at 100%

        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }

        if (allFilesFinished) {
          return;
        }

        var _iterator28 = _createForOfIteratorHelper(files),
            _step28;

        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _file5 = _step28.value;
            this.emit("uploadprogress", _file5, progress, _file5.upload.bytesSent);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      }
    }
  }, {
    key: "_finishedUploading",
    value: function _finishedUploading(files, xhr, e) {
      var response;

      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {
        response = xhr.responseText;

        if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
          try {
            response = JSON.parse(response);
          } catch (error) {
            e = error;
            response = "Invalid JSON response from server.";
          }
        }
      }

      this._updateFilesUploadProgress(files);

      if (!(200 <= xhr.status && xhr.status < 300)) {
        this._handleUploadError(files, xhr, response);
      } else {
        if (files[0].upload.chunked) {
          files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr));
        } else {
          this._finished(files, response, e);
        }
      }
    }
  }, {
    key: "_handleUploadError",
    value: function _handleUploadError(files, xhr, response) {
      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (files[0].upload.chunked && this.options.retryChunks) {
        var chunk = this._getChunk(files[0], xhr);

        if (chunk.retries++ < this.options.retryChunksLimit) {
          this._uploadData(files, [chunk.dataBlock]);

          return;
        } else {
          console.warn('Retried this chunk too often. Giving up.');
        }
      }

      this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
    }
  }, {
    key: "submitRequest",
    value: function submitRequest(xhr, formData, files) {
      xhr.send(formData);
    } // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_finished",
    value: function _finished(files, responseText, e) {
      var _iterator29 = _createForOfIteratorHelper(files),
          _step29;

      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var file = _step29.value;
          file.status = Dropzone.SUCCESS;
          this.emit("success", file, responseText, e);
          this.emit("complete", file);
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }

      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    } // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_errorProcessing",
    value: function _errorProcessing(files, message, xhr) {
      var _iterator30 = _createForOfIteratorHelper(files),
          _step30;

      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var file = _step30.value;
          file.status = Dropzone.ERROR;
          this.emit("error", file, message, xhr);
          this.emit("complete", file);
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }

      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }], [{
    key: "uuidv4",
    value: function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
  }]);

  return Dropzone;
}(Emitter);

Dropzone.initClass();
Dropzone.version = "5.7.2"; // This is a map of options for your different dropzones. Add configurations
// to this object for your different dropzone elemens.
//
// Example:
//
//     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
//
// To disable autoDiscover for a specific element, you can set `false` as an option:
//
//     Dropzone.options.myDisabledElementId = false;
//
// And in html:
//
//     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>

Dropzone.options = {}; // Returns the options for an element or undefined if none available.

Dropzone.optionsForElement = function (element) {
  // Get the `Dropzone.options.elementId` for this element if it exists
  if (element.getAttribute("id")) {
    return Dropzone.options[camelize(element.getAttribute("id"))];
  } else {
    return undefined;
  }
}; // Holds a list of all dropzone instances


Dropzone.instances = []; // Returns the dropzone for given element if any

Dropzone.forElement = function (element) {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }

  if ((element != null ? element.dropzone : undefined) == null) {
    throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
  }

  return element.dropzone;
}; // Set to false if you don't want Dropzone to automatically find and attach to .dropzone elements.


Dropzone.autoDiscover = true; // Looks for all .dropzone elements and creates a dropzone for them

Dropzone.discover = function () {
  var dropzones;

  if (document.querySelectorAll) {
    dropzones = document.querySelectorAll(".dropzone");
  } else {
    dropzones = []; // IE :(

    var checkElements = function checkElements(elements) {
      return function () {
        var result = [];

        var _iterator31 = _createForOfIteratorHelper(elements),
            _step31;

        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var el = _step31.value;

            if (/(^| )dropzone($| )/.test(el.className)) {
              result.push(dropzones.push(el));
            } else {
              result.push(undefined);
            }
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }

        return result;
      }();
    };

    checkElements(document.getElementsByTagName("div"));
    checkElements(document.getElementsByTagName("form"));
  }

  return function () {
    var result = [];

    var _iterator32 = _createForOfIteratorHelper(dropzones),
        _step32;

    try {
      for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
        var dropzone = _step32.value;

        // Create a dropzone unless auto discover has been disabled for specific element
        if (Dropzone.optionsForElement(dropzone) !== false) {
          result.push(new Dropzone(dropzone));
        } else {
          result.push(undefined);
        }
      }
    } catch (err) {
      _iterator32.e(err);
    } finally {
      _iterator32.f();
    }

    return result;
  }();
}; // Since the whole Drag'n'Drop API is pretty new, some browsers implement it,
// but not correctly.
// So I created a blacklist of userAgents. Yes, yes. Browser sniffing, I know.
// But what to do when browsers *theoretically* support an API, but crash
// when using it.
//
// This is a list of regular expressions tested against navigator.userAgent
//
// ** It should only be used on browser that *do* support the API, but
// incorrectly **
//


Dropzone.blacklistedBrowsers = [// The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
/opera.*(Macintosh|Windows Phone).*version\/12/i]; // Checks if the browser is supported

Dropzone.isBrowserSupported = function () {
  var capableBrowser = true;

  if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
    if (!("classList" in document.createElement("a"))) {
      capableBrowser = false;
    } else {
      // The browser supports the API, but may be blacklisted.
      var _iterator33 = _createForOfIteratorHelper(Dropzone.blacklistedBrowsers),
          _step33;

      try {
        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
          var regex = _step33.value;

          if (regex.test(navigator.userAgent)) {
            capableBrowser = false;
            continue;
          }
        }
      } catch (err) {
        _iterator33.e(err);
      } finally {
        _iterator33.f();
      }
    }
  } else {
    capableBrowser = false;
  }

  return capableBrowser;
};

Dropzone.dataURItoBlob = function (dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]); // separate out the mime component

  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to an ArrayBuffer

  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
    ia[i] = byteString.charCodeAt(i);
  } // write the ArrayBuffer to a blob


  return new Blob([ab], {
    type: mimeString
  });
}; // Returns an array without the rejected item


var without = function without(list, rejectedItem) {
  return list.filter(function (item) {
    return item !== rejectedItem;
  }).map(function (item) {
    return item;
  });
}; // abc-def_ghi -> abcDefGhi


var camelize = function camelize(str) {
  return str.replace(/[\-_](\w)/g, function (match) {
    return match.charAt(1).toUpperCase();
  });
}; // Creates an element from string


Dropzone.createElement = function (string) {
  var div = document.createElement("div");
  div.innerHTML = string;
  return div.childNodes[0];
}; // Tests if given element is inside (or simply is) the container


Dropzone.elementInside = function (element, container) {
  if (element === container) {
    return true;
  } // Coffeescript doesn't support do/while loops


  while (element = element.parentNode) {
    if (element === container) {
      return true;
    }
  }

  return false;
};

Dropzone.getElement = function (el, name) {
  var element;

  if (typeof el === "string") {
    element = document.querySelector(el);
  } else if (el.nodeType != null) {
    element = el;
  }

  if (element == null) {
    throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector or a plain HTML element."));
  }

  return element;
};

Dropzone.getElements = function (els, name) {
  var el, elements;

  if (els instanceof Array) {
    elements = [];

    try {
      var _iterator34 = _createForOfIteratorHelper(els),
          _step34;

      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          el = _step34.value;
          elements.push(this.getElement(el, name));
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }
    } catch (e) {
      elements = null;
    }
  } else if (typeof els === "string") {
    elements = [];

    var _iterator35 = _createForOfIteratorHelper(document.querySelectorAll(els)),
        _step35;

    try {
      for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
        el = _step35.value;
        elements.push(el);
      }
    } catch (err) {
      _iterator35.e(err);
    } finally {
      _iterator35.f();
    }
  } else if (els.nodeType != null) {
    elements = [els];
  }

  if (elements == null || !elements.length) {
    throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
  }

  return elements;
}; // Asks the user the question and calls accepted or rejected accordingly
//
// The default implementation just uses `window.confirm` and then calls the
// appropriate callback.


Dropzone.confirm = function (question, accepted, rejected) {
  if (window.confirm(question)) {
    return accepted();
  } else if (rejected != null) {
    return rejected();
  }
}; // Validates the mime type like this:
//
// https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept


Dropzone.isValidFile = function (file, acceptedFiles) {
  if (!acceptedFiles) {
    return true;
  } // If there are no accepted mime types, it's OK


  acceptedFiles = acceptedFiles.split(",");
  var mimeType = file.type;
  var baseMimeType = mimeType.replace(/\/.*$/, "");

  var _iterator36 = _createForOfIteratorHelper(acceptedFiles),
      _step36;

  try {
    for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
      var validType = _step36.value;
      validType = validType.trim();

      if (validType.charAt(0) === ".") {
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
          return true;
        }
      } else if (/\/\*$/.test(validType)) {
        // This is something like a image/* mime type
        if (baseMimeType === validType.replace(/\/.*$/, "")) {
          return true;
        }
      } else {
        if (mimeType === validType) {
          return true;
        }
      }
    }
  } catch (err) {
    _iterator36.e(err);
  } finally {
    _iterator36.f();
  }

  return false;
}; // Augment jQuery


if (typeof jQuery !== 'undefined' && jQuery !== null) {
  jQuery.fn.dropzone = function (options) {
    return this.each(function () {
      return new Dropzone(this, options);
    });
  };
}

if (typeof module !== 'undefined' && module !== null) {
  module.exports = Dropzone;
} else {
  window.Dropzone = Dropzone;
} // Dropzone file status codes


Dropzone.ADDED = "added";
Dropzone.QUEUED = "queued"; // For backwards compatibility. Now, if a file is accepted, it's either queued
// or uploading.

Dropzone.ACCEPTED = Dropzone.QUEUED;
Dropzone.UPLOADING = "uploading";
Dropzone.PROCESSING = Dropzone.UPLOADING; // alias

Dropzone.CANCELED = "canceled";
Dropzone.ERROR = "error";
Dropzone.SUCCESS = "success";