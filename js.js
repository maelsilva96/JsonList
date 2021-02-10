! function(e) {
    var n = {};

    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: i
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (t.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var o in e) t.d(i, o, function(n) {
                return e[n]
            }.bind(null, o));
        return i
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 1)
}([function(e, n, t) {
    e.exports = t(4)
}, function(e, n, t) {
    e.exports = t(2)
}, function(e, n, t) {
    "use strict";
    t.r(n);
    t(3);
    var i = t(0);
    window.buildIframe = function(e) {
        var n, t, o, r, a, c = e.dataset.form,
            u = e.dataset.portal,
            s = e.dataset.title,
            d = e.dataset.params,
            l = window.PORTAL_ENV.PIPEFY_URL,
            f = window.PORTAL_ENV.IFRAME_RESIZER_LOG,
            m = window.PORTAL_ENV.IFRAME_RESIZER_CHECK_ORIGIN;
        n = u, t = window.PORTAL_ENV.PIPEFY_COOKIE_NAME, o = window.PORTAL_ENV.PIPEFY_COOKIE_DOMAIN, r = window.PORTAL_ENV.PIPEFY_COOKIE_MAX_AGE, a = t + "=" + n + ";path=/;domain=" + o + ";max-age=" + r, document.cookie = a;
        var g, h, p = document.createElement("iframe");
        document.getElementById("pipeStartForm").appendChild(p), p.src = l + "/public/portals/" + c + (d ? "?initialValues=" + encodeURIComponent(d) : ""), p.className = "unstarted", p.name = "portalForm", document.getElementById("pipeName").innerText = s, g = document.getElementById("mainContainer"), h = g.querySelector(".pr-iframe-header"), g.classList.add("pr-active"), setTimeout((function() {
            h.classList.add("header-fixed")
        }), 600), Object(i.iframeResize)({
            log: f,
            checkOrigin: m,
            heightCalculationMethod: "documentElementScroll",
            onInit: function() {
                p.classList.remove("unstarted")
            }
        })
    }, window.hideForm = function() {
        var e = document.getElementById("mainContainer");
        e.querySelector(".pr-iframe-header").classList.remove("header-fixed"), e.classList.remove("pr-active");
        var n = document.getElementsByTagName("iframe");
        n[0].parentNode.removeChild(n[0])
    }, window.addEventListener("message", (function(e) {
        if ("publicFormSubmitted" === e.data) {
            var n = document.querySelector(".portal-form");
            if (window.innerWidth < 860) return void(document.querySelector("html").scrollTop = 0);
            n && (n.scrollTop = 0)
        }
    }))
}, function(e, n, t) {}, function(e, n, t) {
    var i = t(5);
    n.iframeResize = i, n.iframeResizer = i, n.iframeResizerContentWindow = t(6)
}, function(e, n, t) {
    var i, o, r;
    ! function(t) {
        if ("undefined" != typeof window) {
            var a, c = 0,
                u = !1,
                s = !1,
                d = "message".length,
                l = "[iFrameSizer]",
                f = l.length,
                m = null,
                g = window.requestAnimationFrame,
                h = {
                    max: 1,
                    scroll: 1,
                    bodyScroll: 1,
                    documentElementScroll: 1
                },
                p = {},
                w = null,
                y = {
                    autoResize: !0,
                    bodyBackground: null,
                    bodyMargin: null,
                    bodyMarginV1: 8,
                    bodyPadding: null,
                    checkOrigin: !0,
                    inPageLinks: !1,
                    enablePublicMethods: !0,
                    heightCalculationMethod: "bodyOffset",
                    id: "iFrameResizer",
                    interval: 32,
                    log: !1,
                    maxHeight: 1 / 0,
                    maxWidth: 1 / 0,
                    minHeight: 0,
                    minWidth: 0,
                    resizeFrom: "parent",
                    scrolling: !1,
                    sizeHeight: !0,
                    sizeWidth: !1,
                    warningTimeout: 5e3,
                    tolerance: 0,
                    widthCalculationMethod: "scroll",
                    onClose: function() {
                        return !0
                    },
                    onClosed: function() {},
                    onInit: function() {},
                    onMessage: function() {
                        R("onMessage function not defined")
                    },
                    onResized: function() {},
                    onScroll: function() {
                        return !0
                    }
                },
                b = {};
            window.jQuery && ((a = window.jQuery).fn ? a.fn.iFrameResize || (a.fn.iFrameResize = function(e) {
                return this.filter("iframe").each((function(n, t) {
                    B(t, e)
                })).end()
            }) : S("", "Unable to bind to jQuery, it is not fully loaded.")), o = [], (r = "function" == typeof(i = J) ? i.apply(n, o) : i) === t || (e.exports = r), window.iFrameResize = window.iFrameResize || J()
        }

        function v() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }

        function E(e, n, t) {
            e.addEventListener(n, t, !1)
        }

        function T(e, n, t) {
            e.removeEventListener(n, t, !1)
        }

        function O(e) {
            return l + "[" + function(e) {
                var n = "Host page: " + e;
                return window.top !== window.self && (n = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + e : "Nested host page: " + e), n
            }(e) + "]"
        }

        function I(e) {
            return p[e] ? p[e].log : u
        }

        function M(e, n) {
            x("log", e, n, I(e))
        }

        function S(e, n) {
            x("info", e, n, I(e))
        }

        function R(e, n) {
            x("warn", e, n, !0)
        }

        function x(e, n, t, i) {
            !0 === i && "object" == typeof window.console && console[e](O(n), t)
        }

        function N(e) {
            function n() {
                o("Height"), o("Width"), j((function() {
                    W(N), A(F), g("onResized", N)
                }), N, "init")
            }

            function t(e) {
                return "border-box" !== e.boxSizing ? 0 : (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) + (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0)
            }

            function i(e) {
                return "border-box" !== e.boxSizing ? 0 : (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) + (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0)
            }

            function o(e) {
                var n = Number(p[F]["max" + e]),
                    t = Number(p[F]["min" + e]),
                    i = e.toLowerCase(),
                    o = Number(N[i]);
                M(F, "Checking " + i + " is in range " + t + "-" + n), o < t && (o = t, M(F, "Set " + i + " to min value")), o > n && (o = n, M(F, "Set " + i + " to max value")), N[i] = "" + o
            }

            function r(e) {
                return x.substr(x.indexOf(":") + d + e)
            }

            function a(e, n) {
                var t, i, o;
                t = function() {
                    var t, i;
                    H("Send Page Info", "pageInfo:" + (t = document.body.getBoundingClientRect(), i = N.iframe.getBoundingClientRect(), JSON.stringify({
                        iframeHeight: i.height,
                        iframeWidth: i.width,
                        clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                        clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                        offsetTop: parseInt(i.top - t.top, 10),
                        offsetLeft: parseInt(i.left - t.left, 10),
                        scrollTop: window.pageYOffset,
                        scrollLeft: window.pageXOffset,
                        documentHeight: document.documentElement.clientHeight,
                        documentWidth: document.documentElement.clientWidth,
                        windowHeight: window.innerHeight,
                        windowWidth: window.innerWidth
                    })), e, n)
                }, i = 32, b[o = n] || (b[o] = setTimeout((function() {
                    b[o] = null, t()
                }), i))
            }

            function c(e) {
                var n = e.getBoundingClientRect();
                return C(F), {
                    x: Math.floor(Number(n.left) + Number(m.x)),
                    y: Math.floor(Number(n.top) + Number(m.y))
                }
            }

            function u(e) {
                var n = e ? c(N.iframe) : {
                        x: 0,
                        y: 0
                    },
                    t = {
                        x: Number(N.width) + n.x,
                        y: Number(N.height) + n.y
                    };
                M(F, "Reposition requested from iFrame (offset x:" + n.x + " y:" + n.y + ")"), window.top !== window.self ? window.parentIFrame ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](t.x, t.y) : R(F, "Unable to scroll to requested position, window.parentIFrame not found") : (m = t, s(), M(F, "--"))
            }

            function s() {
                !1 !== g("onScroll", m) ? A(F) : P()
            }

            function g(e, n) {
                return z(F, e, n)
            }
            var h, w, y, v, O, I, x = e.data,
                N = {},
                F = null;
            "[iFrameResizerChild]Ready" === x ? function() {
                for (var e in p) H("iFrame requested init", _(e), p[e].iframe, e)
            }() : l === ("" + x).substr(0, f) && x.substr(f).split(":")[0] in p ? (y = x.substr(f).split(":"), v = y[1] ? parseInt(y[1], 10) : 0, O = p[y[0]] && p[y[0]].iframe, I = getComputedStyle(O), N = {
                iframe: O,
                id: y[0],
                height: v + t(I) + i(I),
                width: y[2],
                type: y[3]
            }, F = N.id, p[F] && (p[F].loaded = !0), (w = N.type in {
                true: 1,
                false: 1,
                undefined: 1
            }) && M(F, "Ignoring init message from meta parent page"), !w && function(e) {
                var n = !0;
                return p[e] || (n = !1, R(N.type + " No settings for " + e + ". Message was: " + x)), n
            }(F) && (M(F, "Received: " + x), h = !0, null === N.iframe && (R(F, "IFrame (" + N.id + ") not found"), h = !1), h && function() {
                var n, t = e.origin,
                    i = p[F] && p[F].checkOrigin;
                if (i && "" + t != "null" && !(i.constructor === Array ? function() {
                        var e = 0,
                            n = !1;
                        for (M(F, "Checking connection is from allowed list of origins: " + i); e < i.length; e++)
                            if (i[e] === t) {
                                n = !0;
                                break
                            } return n
                    }() : (n = p[F] && p[F].remoteHost, M(F, "Checking connection is from: " + n), t === n))) throw new Error("Unexpected message received from: " + t + " for " + N.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
                return !0
            }() && function() {
                switch (p[F] && p[F].firstRun && p[F] && (p[F].firstRun = !1), N.type) {
                    case "close":
                        k(N.iframe);
                        break;
                    case "message":
                        e = r(6), M(F, "onMessage passed: {iframe: " + N.iframe.id + ", message: " + e + "}"), g("onMessage", {
                            iframe: N.iframe,
                            message: JSON.parse(e)
                        }), M(F, "--");
                        break;
                    case "autoResize":
                        p[F].autoResize = JSON.parse(r(9));
                        break;
                    case "scrollTo":
                        u(!1);
                        break;
                    case "scrollToOffset":
                        u(!0);
                        break;
                    case "pageInfo":
                        a(p[F] && p[F].iframe, F),
                            function() {
                                function e(e, i) {
                                    function o() {
                                        p[t] ? a(p[t].iframe, t) : n()
                                    } ["scroll", "resize"].forEach((function(n) {
                                        M(t, e + n + " listener for sendPageInfo"), i(window, n, o)
                                    }))
                                }

                                function n() {
                                    e("Remove ", T)
                                }
                                var t = F;
                                e("Add ", E), p[t] && (p[t].stopPageInfo = n)
                            }();
                        break;
                    case "pageInfoStop":
                        p[F] && p[F].stopPageInfo && (p[F].stopPageInfo(), delete p[F].stopPageInfo);
                        break;
                    case "inPageLink":
                        ! function(e) {
                            var n, t = e.split("#")[1] || "",
                                i = decodeURIComponent(t),
                                o = document.getElementById(i) || document.getElementsByName(i)[0];
                            o ? (n = c(o), M(F, "Moving to in page link (#" + t + ") at x: " + n.x + " y: " + n.y), m = {
                                x: n.x,
                                y: n.y
                            }, s(), M(F, "--")) : window.top !== window.self ? window.parentIFrame ? window.parentIFrame.moveToAnchor(t) : M(F, "In page link #" + t + " not found and window.parentIFrame not found") : M(F, "In page link #" + t + " not found")
                        }(r(9));
                        break;
                    case "reset":
                        L(N);
                        break;
                    case "init":
                        n(), g("onInit", N.iframe);
                        break;
                    default:
                        n()
                }
                var e
            }())) : S(F, "Ignored: " + x)
        }

        function z(e, n, t) {
            var i = null,
                o = null;
            if (p[e]) {
                if ("function" != typeof(i = p[e][n])) throw new TypeError(n + " on iFrame[" + e + "] is not a function");
                o = i(t)
            }
            return o
        }

        function F(e) {
            var n = e.id;
            delete p[n]
        }

        function k(e) {
            var n = e.id;
            if (!1 !== z(n, "onClose", n)) {
                M(n, "Removing iFrame: " + n);
                try {
                    e.parentNode && e.parentNode.removeChild(e)
                } catch (e) {
                    R(e)
                }
                z(n, "onClosed", n), M(n, "--"), F(e)
            } else M(n, "Close iframe cancelled by onClose event")
        }

        function C(e) {
            null === m && M(e, "Get page position: " + (m = {
                x: window.pageXOffset !== t ? window.pageXOffset : document.documentElement.scrollLeft,
                y: window.pageYOffset !== t ? window.pageYOffset : document.documentElement.scrollTop
            }).x + "," + m.y)
        }

        function A(e) {
            null !== m && (window.scrollTo(m.x, m.y), M(e, "Set page position: " + m.x + "," + m.y), P())
        }

        function P() {
            m = null
        }

        function L(e) {
            M(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")), C(e.id), j((function() {
                W(e), H("reset", "reset", e.iframe, e.id)
            }), e, "reset")
        }

        function W(e) {
            function n(n) {
                s || "0" !== e[n] || (s = !0, M(i, "Hidden iFrame detected, creating visibility listener"), function() {
                    function e() {
                        function e(e) {
                            function n(n) {
                                return "0px" === (p[e] && p[e].iframe.style[n])
                            }

                            function t(e) {
                                return null !== e.offsetParent
                            }
                            p[e] && t(p[e].iframe) && (n("height") || n("width")) && H("Visibility change", "resize", p[e].iframe, e)
                        }
                        Object.keys(p).forEach((function(n) {
                            e(n)
                        }))
                    }

                    function n(n) {
                        M("window", "Mutation observed: " + n[0].target + " " + n[0].type), q(e, 16)
                    }

                    function t() {
                        var e = document.querySelector("body"),
                            t = {
                                attributes: !0,
                                attributeOldValue: !1,
                                characterData: !0,
                                characterDataOldValue: !1,
                                childList: !0,
                                subtree: !0
                            };
                        new i(n).observe(e, t)
                    }
                    var i = v();
                    i && t()
                }())
            }

            function t(t) {
                ! function(n) {
                    e.id ? (e.iframe.style[n] = e[n] + "px", M(e.id, "IFrame (" + i + ") " + n + " set to " + e[n] + "px")) : M("undefined", "messageData id not set")
                }(t), n(t)
            }
            var i = e.iframe.id;
            p[i] && (p[i].sizeHeight && t("height"), p[i].sizeWidth && t("width"))
        }

        function j(e, n, t) {
            t !== n.type && g && !window.jasmine ? (M(n.id, "Requesting animation frame"), g(e)) : e()
        }

        function H(e, n, t, i, o) {
            var r, a = !1;
            i = i || t.id, p[i] && (t && "contentWindow" in t && null !== t.contentWindow ? (r = p[i] && p[i].targetOrigin, M(i, "[" + e + "] Sending msg to iframe[" + i + "] (" + n + ") targetOrigin: " + r), t.contentWindow.postMessage(l + n, r)) : R(i, "[" + e + "] IFrame(" + i + ") not found"), o && p[i] && p[i].warningTimeout && (p[i].msgTimeout = setTimeout((function() {
                !p[i] || p[i].loaded || a || (a = !0, R(i, "IFrame has not responded within " + p[i].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))
            }), p[i].warningTimeout)))
        }

        function _(e) {
            return e + ":" + p[e].bodyMarginV1 + ":" + p[e].sizeWidth + ":" + p[e].log + ":" + p[e].interval + ":" + p[e].enablePublicMethods + ":" + p[e].autoResize + ":" + p[e].bodyMargin + ":" + p[e].heightCalculationMethod + ":" + p[e].bodyBackground + ":" + p[e].bodyPadding + ":" + p[e].tolerance + ":" + p[e].inPageLinks + ":" + p[e].resizeFrom + ":" + p[e].widthCalculationMethod
        }

        function B(e, n) {
            function i(e) {
                var n = e.split("Callback");
                if (2 === n.length) {
                    var t = "on" + n[0].charAt(0).toUpperCase() + n[0].slice(1);
                    this[t] = this[e], delete this[e], R(a, "Deprecated: '" + e + "' has been renamed '" + t + "'. The old method will be removed in the next major version.")
                }
            }
            var o, r, a = function(t) {
                var i;
                return "" === t && (e.id = (i = n && n.id || y.id + c++, null !== document.getElementById(i) && (i += c++), t = i), u = (n || {}).log, M(t, "Added missing iframe ID: " + t + " (" + e.src + ")")), t
            }(e.id);
            a in p && "iFrameResizer" in e ? R(a, "Ignored iFrame, already setup.") : (! function(n) {
                var t;
                n = n || {}, p[a] = {
                        firstRun: !0,
                        iframe: e,
                        remoteHost: e.src && e.src.split("/").slice(0, 3).join("/")
                    },
                    function(e) {
                        if ("object" != typeof e) throw new TypeError("Options is not an object")
                    }(n), Object.keys(n).forEach(i, n),
                    function(e) {
                        for (var n in y) Object.prototype.hasOwnProperty.call(y, n) && (p[a][n] = Object.prototype.hasOwnProperty.call(e, n) ? e[n] : y[n])
                    }(n), p[a] && (p[a].targetOrigin = !0 === p[a].checkOrigin ? "" === (t = p[a].remoteHost) || null !== t.match(/^(about:blank|javascript:|file:\/\/)/) ? "*" : t : "*")
            }(n), function() {
                switch (M(a, "IFrame scrolling " + (p[a] && p[a].scrolling ? "enabled" : "disabled") + " for " + a), e.style.overflow = !1 === (p[a] && p[a].scrolling) ? "hidden" : "auto", p[a] && p[a].scrolling) {
                    case "omit":
                        break;
                    case !0:
                        e.scrolling = "yes";
                        break;
                    case !1:
                        e.scrolling = "no";
                        break;
                    default:
                        e.scrolling = p[a] ? p[a].scrolling : "no"
                }
            }(), function() {
                function n(n) {
                    1 / 0 !== p[a][n] && 0 !== p[a][n] && (e.style[n] = p[a][n] + "px", M(a, "Set " + n + " = " + p[a][n] + "px"))
                }

                function t(e) {
                    if (p[a]["min" + e] > p[a]["max" + e]) throw new Error("Value for min" + e + " can not be greater than max" + e)
                }
                t("Height"), t("Width"), n("maxHeight"), n("minHeight"), n("maxWidth"), n("minWidth")
            }(), "number" != typeof(p[a] && p[a].bodyMargin) && "0" !== (p[a] && p[a].bodyMargin) || (p[a].bodyMarginV1 = p[a].bodyMargin, p[a].bodyMargin = p[a].bodyMargin + "px"), o = _(a), (r = v()) && function(n) {
                e.parentNode && new n((function(n) {
                    n.forEach((function(n) {
                        Array.prototype.slice.call(n.removedNodes).forEach((function(n) {
                            n === e && k(e)
                        }))
                    }))
                })).observe(e.parentNode, {
                    childList: !0
                })
            }(r), E(e, "load", (function() {
                var n, i;
                H("iFrame.onload", o, e, t, !0), n = p[a] && p[a].firstRun, i = p[a] && p[a].heightCalculationMethod in h, !n && i && L({
                    iframe: e,
                    height: 0,
                    width: 0,
                    type: "init"
                })
            })), H("init", o, e, t, !0), p[a] && (p[a].iframe.iFrameResizer = {
                close: k.bind(null, p[a].iframe),
                removeListeners: F.bind(null, p[a].iframe),
                resize: H.bind(null, "Window resize", "resize", p[a].iframe),
                moveToAnchor: function(e) {
                    H("Move to anchor", "moveToAnchor:" + e, p[a].iframe, a)
                },
                sendMessage: function(e) {
                    H("Send Message", "message:" + (e = JSON.stringify(e)), p[a].iframe, a)
                }
            }))
        }

        function q(e, n) {
            null === w && (w = setTimeout((function() {
                w = null, e()
            }), n))
        }

        function V() {
            "hidden" !== document.visibilityState && (M("document", "Trigger event: Visiblity change"), q((function() {
                D("Tab Visable", "resize")
            }), 16))
        }

        function D(e, n) {
            Object.keys(p).forEach((function(t) {
                (function(e) {
                    return p[e] && "parent" === p[e].resizeFrom && p[e].autoResize && !p[e].firstRun
                })(t) && H(e, n, p[t].iframe, t)
            }))
        }

        function U() {
            E(window, "message", N), E(window, "resize", (function() {
                var e;
                M("window", "Trigger event: " + (e = "resize")), q((function() {
                    D("Window " + e, "resize")
                }), 16)
            })), E(document, "visibilitychange", V), E(document, "-webkit-visibilitychange", V)
        }

        function J() {
            function e(e, t) {
                t && (! function() {
                    if (!t.tagName) throw new TypeError("Object is not a valid DOM element");
                    if ("IFRAME" !== t.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + t.tagName + ">")
                }(), B(t, e), n.push(t))
            }
            var n;
            return function() {
                    var e, n = ["moz", "webkit", "o", "ms"];
                    for (e = 0; e < n.length && !g; e += 1) g = window[n[e] + "RequestAnimationFrame"];
                    g ? g = g.bind(window) : M("setup", "RequestAnimationFrame not supported")
                }(), U(),
                function(i, o) {
                    switch (n = [], function(e) {
                            e && e.enablePublicMethods && R("enablePublicMethods option has been removed, public methods are now always available in the iFrame")
                        }(i), typeof o) {
                        case "undefined":
                        case "string":
                            Array.prototype.forEach.call(document.querySelectorAll(o || "iframe"), e.bind(t, i));
                            break;
                        case "object":
                            e(i, o);
                            break;
                        default:
                            throw new TypeError("Unexpected data type (" + typeof o + ")")
                    }
                    return n
                }
        }
    }()
}, function(e, n, t) {
    ! function(n) {
        if ("undefined" != typeof window) {
            var t = !0,
                i = "",
                o = 0,
                r = "",
                a = null,
                c = "",
                u = !1,
                s = {
                    resize: 1,
                    click: 1
                },
                d = 128,
                l = !0,
                f = 1,
                m = "bodyOffset",
                g = m,
                h = !0,
                p = "",
                w = {},
                y = 32,
                b = null,
                v = !1,
                E = "[iFrameSizer]",
                T = E.length,
                O = "",
                I = {
                    max: 1,
                    min: 1,
                    bodyScroll: 1,
                    documentElementScroll: 1
                },
                M = "child",
                S = window.parent,
                R = "*",
                x = 0,
                N = !1,
                z = null,
                F = 16,
                k = 1,
                C = "scroll",
                A = C,
                P = window,
                L = function() {
                    re("onMessage function not defined")
                },
                W = function() {},
                j = function() {},
                H = {
                    height: function() {
                        return re("Custom height calculation function not defined"), document.documentElement.offsetHeight
                    },
                    width: function() {
                        return re("Custom width calculation function not defined"), document.body.scrollWidth
                    }
                },
                _ = {},
                B = !1;
            try {
                var q = Object.create({}, {
                    passive: {
                        get: function() {
                            B = !0
                        }
                    }
                });
                window.addEventListener("test", ee, q), window.removeEventListener("test", ee, q)
            } catch (e) {}
            var V, D, U, J, Y, K, X, Q = Date.now || function() {
                    return (new Date).getTime()
                },
                G = {
                    bodyOffset: function() {
                        return document.body.offsetHeight + pe("marginTop") + pe("marginBottom")
                    },
                    offset: function() {
                        return G.bodyOffset()
                    },
                    bodyScroll: function() {
                        return document.body.scrollHeight
                    },
                    custom: function() {
                        return H.height()
                    },
                    documentElementOffset: function() {
                        return document.documentElement.offsetHeight
                    },
                    documentElementScroll: function() {
                        return document.documentElement.scrollHeight
                    },
                    max: function() {
                        return Math.max.apply(null, ye(G))
                    },
                    min: function() {
                        return Math.min.apply(null, ye(G))
                    },
                    grow: function() {
                        return G.max()
                    },
                    lowestElement: function() {
                        return Math.max(G.bodyOffset() || G.documentElementOffset(), we("bottom", ve()))
                    },
                    taggedElement: function() {
                        return be("bottom", "data-iframe-height")
                    }
                },
                Z = {
                    bodyScroll: function() {
                        return document.body.scrollWidth
                    },
                    bodyOffset: function() {
                        return document.body.offsetWidth
                    },
                    custom: function() {
                        return H.width()
                    },
                    documentElementScroll: function() {
                        return document.documentElement.scrollWidth
                    },
                    documentElementOffset: function() {
                        return document.documentElement.offsetWidth
                    },
                    scroll: function() {
                        return Math.max(Z.bodyScroll(), Z.documentElementScroll())
                    },
                    max: function() {
                        return Math.max.apply(null, ye(Z))
                    },
                    min: function() {
                        return Math.min.apply(null, ye(Z))
                    },
                    rightMostElement: function() {
                        return we("right", ve())
                    },
                    taggedElement: function() {
                        return be("right", "data-iframe-width")
                    }
                },
                $ = (V = Ee, Y = null, K = 0, X = function() {
                    K = Q(), Y = null, J = V.apply(D, U), Y || (D = U = null)
                }, function() {
                    var e = Q();
                    K || (K = e);
                    var n = F - (e - K);
                    return D = this, U = arguments, n <= 0 || n > F ? (Y && (clearTimeout(Y), Y = null), K = e, J = V.apply(D, U), Y || (D = U = null)) : Y || (Y = setTimeout(X, n)), J
                });
            ne(window, "message", (function(n) {
                var t = {
                    init: function() {
                        p = n.data, S = n.source, ae(), l = !1, setTimeout((function() {
                            h = !1
                        }), d)
                    },
                    reset: function() {
                        h ? oe("Page reset ignored by init") : (oe("Page size reset by host page"), Ie("resetPage"))
                    },
                    resize: function() {
                        Te("resizeParent", "Parent window requested size check")
                    },
                    moveToAnchor: function() {
                        w.findTarget(o())
                    },
                    inPageLink: function() {
                        this.moveToAnchor()
                    },
                    pageInfo: function() {
                        var e = o();
                        oe("PageInfoFromParent called from parent: " + e), j(JSON.parse(e)), oe(" --")
                    },
                    message: function() {
                        var e = o();
                        oe("onMessage called from parent: " + e), L(JSON.parse(e)), oe(" --")
                    }
                };

                function i() {
                    return n.data.split("]")[1].split(":")[0]
                }

                function o() {
                    return n.data.substr(n.data.indexOf(":") + 1)
                }

                function r() {
                    return n.data.split(":")[2] in {
                        true: 1,
                        false: 1
                    }
                }

                function a() {
                    var o = i();
                    o in t ? t[o]() : !e.exports && "iFrameResize" in window || "jQuery" in window && "iFrameResize" in window.jQuery.prototype || r() || re("Unexpected message (" + n.data + ")")
                }
                E === ("" + n.data).substr(0, T) && (!1 === l ? a() : r() ? t.init() : oe('Ignored message of type "' + i() + '". Received before initialization.'))
            })), ne(window, "readystatechange", Re), Re()
        }

        function ee() {}

        function ne(e, n, t, i) {
            e.addEventListener(n, t, !!B && (i || {}))
        }

        function te(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }

        function ie(e) {
            return E + "[" + O + "] " + e
        }

        function oe(e) {
            v && "object" == typeof window.console && console.log(ie(e))
        }

        function re(e) {
            "object" == typeof window.console && console.warn(ie(e))
        }

        function ae() {
            var e;
            ! function() {
                function e(e) {
                    return "true" === e
                }
                var a = p.substr(T).split(":");
                O = a[0], o = n !== a[1] ? Number(a[1]) : o, u = n !== a[2] ? e(a[2]) : u, v = n !== a[3] ? e(a[3]) : v, y = n !== a[4] ? Number(a[4]) : y, t = n !== a[6] ? e(a[6]) : t, r = a[7], g = n !== a[8] ? a[8] : g, i = a[9], c = a[10], x = n !== a[11] ? Number(a[11]) : x, w.enable = n !== a[12] && e(a[12]), M = n !== a[13] ? a[13] : M, A = n !== a[14] ? a[14] : A
            }(), oe("Initialising iFrame (" + location.href + ")"),
                function() {
                    function e() {
                        var e = window.iFrameResizer;
                        oe("Reading data from page: " + JSON.stringify(e)), Object.keys(e).forEach(ce, e), L = "onMessage" in e ? e.onMessage : L, W = "onReady" in e ? e.onReady : W, R = "targetOrigin" in e ? e.targetOrigin : R, g = "heightCalculationMethod" in e ? e.heightCalculationMethod : g, A = "widthCalculationMethod" in e ? e.widthCalculationMethod : A
                    }

                    function n(e, n) {
                        return "function" == typeof e && (oe("Setup custom " + n + "CalcMethod"), H[n] = e, e = "custom"), e
                    }
                    "iFrameResizer" in window && Object === window.iFrameResizer.constructor && (e(), g = n(g, "height"), A = n(A, "width"));
                    oe("TargetOrigin for parent set to: " + R)
                }(),
                function() {
                    n === r && (r = o + "px");
                    ue("margin", function(e, n) {
                        -1 !== n.indexOf("-") && (re("Negative CSS value ignored for " + e), n = "");
                        return n
                    }("margin", r))
                }(), ue("background", i), ue("padding", c), (e = document.createElement("div")).style.clear = "both", e.style.display = "block", e.style.height = "0", document.body.appendChild(e), fe(), me(), document.documentElement.style.height = "", document.body.style.height = "", oe('HTML & body height set to "auto"'), oe("Enable public methods"), P.parentIFrame = {
                    autoResize: function(e) {
                        return !0 === e && !1 === t ? (t = !0, ge()) : !1 === e && !0 === t && (t = !1, de("remove"), null !== a && a.disconnect(), clearInterval(b)), Se(0, 0, "autoResize", JSON.stringify(t)), t
                    },
                    close: function() {
                        Se(0, 0, "close")
                    },
                    getId: function() {
                        return O
                    },
                    getPageInfo: function(e) {
                        "function" == typeof e ? (j = e, Se(0, 0, "pageInfo")) : (j = function() {}, Se(0, 0, "pageInfoStop"))
                    },
                    moveToAnchor: function(e) {
                        w.findTarget(e)
                    },
                    reset: function() {
                        Me("parentIFrame.reset")
                    },
                    scrollTo: function(e, n) {
                        Se(n, e, "scrollTo")
                    },
                    scrollToOffset: function(e, n) {
                        Se(n, e, "scrollToOffset")
                    },
                    sendMessage: function(e, n) {
                        Se(0, 0, "message", JSON.stringify(e), n)
                    },
                    setHeightCalculationMethod: function(e) {
                        g = e, fe()
                    },
                    setWidthCalculationMethod: function(e) {
                        A = e, me()
                    },
                    setTargetOrigin: function(e) {
                        oe("Set targetOrigin: " + e), R = e
                    },
                    size: function(e, n) {
                        Te("size", "parentIFrame.size(" + (e || "") + (n ? "," + n : "") + ")", e, n)
                    }
                }, ge(), w = function() {
                    function e() {
                        return {
                            x: window.pageXOffset !== n ? window.pageXOffset : document.documentElement.scrollLeft,
                            y: window.pageYOffset !== n ? window.pageYOffset : document.documentElement.scrollTop
                        }
                    }

                    function t(n) {
                        var t = n.getBoundingClientRect(),
                            i = e();
                        return {
                            x: parseInt(t.left, 10) + parseInt(i.x, 10),
                            y: parseInt(t.top, 10) + parseInt(i.y, 10)
                        }
                    }

                    function i(e) {
                        function i(e) {
                            var n = t(e);
                            oe("Moving to in page link (#" + o + ") at x: " + n.x + " y: " + n.y), Se(n.y, n.x, "scrollToOffset")
                        }
                        var o = e.split("#")[1] || e,
                            r = decodeURIComponent(o),
                            a = document.getElementById(r) || document.getElementsByName(r)[0];
                        n !== a ? i(a) : (oe("In page link (#" + o + ") not found in iFrame, so sending to parent"), Se(0, 0, "inPageLink", "#" + o))
                    }

                    function o() {
                        "" !== location.hash && "#" !== location.hash && i(location.href)
                    }

                    function r() {
                        function e(e) {
                            function n(e) {
                                e.preventDefault(), i(this.getAttribute("href"))
                            }
                            "#" !== e.getAttribute("href") && ne(e, "click", n)
                        }
                        Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), e)
                    }

                    function a() {
                        ne(window, "hashchange", o)
                    }

                    function c() {
                        setTimeout(o, d)
                    }

                    function u() {
                        Array.prototype.forEach && document.querySelectorAll ? (oe("Setting up location.hash handlers"), r(), a(), c()) : re("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")
                    }
                    w.enable ? u() : oe("In page linking not enabled");
                    return {
                        findTarget: i
                    }
                }(), Te("init", "Init message from host page"), W()
        }

        function ce(e) {
            var n = e.split("Callback");
            if (2 === n.length) {
                var t = "on" + n[0].charAt(0).toUpperCase() + n[0].slice(1);
                this[t] = this[e], delete this[e], re("Deprecated: '" + e + "' has been renamed '" + t + "'. The old method will be removed in the next major version.")
            }
        }

        function ue(e, t) {
            n !== t && "" !== t && "null" !== t && (document.body.style[e] = t, oe("Body " + e + ' set to "' + t + '"'))
        }

        function se(e) {
            var n = {
                add: function(n) {
                    function t() {
                        Te(e.eventName, e.eventType)
                    }
                    _[n] = t, ne(window, n, t, {
                        passive: !0
                    })
                },
                remove: function(e) {
                    var n, t, i, o = _[e];
                    delete _[e], n = window, t = e, i = o, n.removeEventListener(t, i, !1)
                }
            };
            e.eventNames && Array.prototype.map ? (e.eventName = e.eventNames[0], e.eventNames.map(n[e.method])) : n[e.method](e.eventName), oe(te(e.method) + " event listener: " + e.eventType)
        }

        function de(e) {
            se({
                method: e,
                eventType: "Animation Start",
                eventNames: ["animationstart", "webkitAnimationStart"]
            }), se({
                method: e,
                eventType: "Animation Iteration",
                eventNames: ["animationiteration", "webkitAnimationIteration"]
            }), se({
                method: e,
                eventType: "Animation End",
                eventNames: ["animationend", "webkitAnimationEnd"]
            }), se({
                method: e,
                eventType: "Input",
                eventName: "input"
            }), se({
                method: e,
                eventType: "Mouse Up",
                eventName: "mouseup"
            }), se({
                method: e,
                eventType: "Mouse Down",
                eventName: "mousedown"
            }), se({
                method: e,
                eventType: "Orientation Change",
                eventName: "orientationchange"
            }), se({
                method: e,
                eventType: "Print",
                eventName: ["afterprint", "beforeprint"]
            }), se({
                method: e,
                eventType: "Ready State Change",
                eventName: "readystatechange"
            }), se({
                method: e,
                eventType: "Touch Start",
                eventName: "touchstart"
            }), se({
                method: e,
                eventType: "Touch End",
                eventName: "touchend"
            }), se({
                method: e,
                eventType: "Touch Cancel",
                eventName: "touchcancel"
            }), se({
                method: e,
                eventType: "Transition Start",
                eventNames: ["transitionstart", "webkitTransitionStart", "MSTransitionStart", "oTransitionStart", "otransitionstart"]
            }), se({
                method: e,
                eventType: "Transition Iteration",
                eventNames: ["transitioniteration", "webkitTransitionIteration", "MSTransitionIteration", "oTransitionIteration", "otransitioniteration"]
            }), se({
                method: e,
                eventType: "Transition End",
                eventNames: ["transitionend", "webkitTransitionEnd", "MSTransitionEnd", "oTransitionEnd", "otransitionend"]
            }), "child" === M && se({
                method: e,
                eventType: "IFrame Resized",
                eventName: "resize"
            })
        }

        function le(e, n, t, i) {
            return n !== e && (e in t || (re(e + " is not a valid option for " + i + "CalculationMethod."), e = n), oe(i + ' calculation method set to "' + e + '"')), e
        }

        function fe() {
            g = le(g, m, G, "height")
        }

        function me() {
            A = le(A, C, Z, "width")
        }

        function ge() {
            var e;
            !0 === t ? (de("add"), e = 0 > y, window.MutationObserver || window.WebKitMutationObserver ? e ? he() : a = function() {
                function e(e) {
                    function n(e) {
                        !1 === e.complete && (oe("Attach listeners to " + e.src), e.addEventListener("load", r, !1), e.addEventListener("error", a, !1), s.push(e))
                    }
                    "attributes" === e.type && "src" === e.attributeName ? n(e.target) : "childList" === e.type && Array.prototype.forEach.call(e.target.querySelectorAll("img"), n)
                }

                function t(e) {
                    s.splice(s.indexOf(e), 1)
                }

                function i(e) {
                    oe("Remove listeners from " + e.src), e.removeEventListener("load", r, !1), e.removeEventListener("error", a, !1), t(e)
                }

                function o(e, t, o) {
                    i(e.target), Te(t, o + ": " + e.target.src, n, n)
                }

                function r(e) {
                    o(e, "imageLoad", "Image loaded")
                }

                function a(e) {
                    o(e, "imageLoadFailed", "Image load failed")
                }

                function c(n) {
                    Te("mutationObserver", "mutationObserver: " + n[0].target + " " + n[0].type), n.forEach(e)
                }

                function u() {
                    var e = document.querySelector("body"),
                        n = {
                            attributes: !0,
                            attributeOldValue: !1,
                            characterData: !0,
                            characterDataOldValue: !1,
                            childList: !0,
                            subtree: !0
                        };
                    return l = new d(c), oe("Create body MutationObserver"), l.observe(e, n), l
                }
                var s = [],
                    d = window.MutationObserver || window.WebKitMutationObserver,
                    l = u();
                return {
                    disconnect: function() {
                        "disconnect" in l && (oe("Disconnect body MutationObserver"), l.disconnect(), s.forEach(i))
                    }
                }
            }() : (oe("MutationObserver not supported in this browser!"), he())) : oe("Auto Resize disabled")
        }

        function he() {
            0 !== y && (oe("setInterval: " + y + "ms"), b = setInterval((function() {
                Te("interval", "setInterval: " + y)
            }), Math.abs(y)))
        }

        function pe(e, n) {
            var t = 0;
            return n = n || document.body, t = null !== (t = document.defaultView.getComputedStyle(n, null)) ? t[e] : 0, parseInt(t, 10)
        }

        function we(e, n) {
            for (var t = n.length, i = 0, o = 0, r = te(e), a = Q(), c = 0; c < t; c++)(i = n[c].getBoundingClientRect()[e] + pe("margin" + r, n[c])) > o && (o = i);
            return a = Q() - a, oe("Parsed " + t + " HTML elements"), oe("Element position calculated in " + a + "ms"),
                function(e) {
                    e > F / 2 && oe("Event throttle increased to " + (F = 2 * e) + "ms")
                }(a), o
        }

        function ye(e) {
            return [e.bodyOffset(), e.bodyScroll(), e.documentElementOffset(), e.documentElementScroll()]
        }

        function be(e, n) {
            var t = document.querySelectorAll("[" + n + "]");
            return 0 === t.length && (re("No tagged elements (" + n + ") found on page"), document.querySelectorAll("body *")), we(e, t)
        }

        function ve() {
            return document.querySelectorAll("body *")
        }

        function Ee(e, t, i, o) {
            var r, a;
            ! function() {
                function e(e, n) {
                    return !(Math.abs(e - n) <= x)
                }
                return r = n !== i ? i : G[g](), a = n !== o ? o : Z[A](), e(f, r) || u && e(k, a)
            }() && "init" !== e ? !(e in {
                init: 1,
                interval: 1,
                size: 1
            }) && (g in I || u && A in I) ? Me(t) : e in {
                interval: 1
            } || oe("No change in size detected") : (Oe(), Se(f = r, k = a, e))
        }

        function Te(e, n, t, i) {
            N && e in s ? oe("Trigger event cancelled: " + e) : (e in {
                reset: 1,
                resetPage: 1,
                init: 1
            } || oe("Trigger event: " + n), "init" === e ? Ee(e, n, t, i) : $(e, n, t, i))
        }

        function Oe() {
            N || (N = !0, oe("Trigger event lock on")), clearTimeout(z), z = setTimeout((function() {
                N = !1, oe("Trigger event lock off"), oe("--")
            }), d)
        }

        function Ie(e) {
            f = G[g](), k = Z[A](), Se(f, k, e)
        }

        function Me(e) {
            var n = g;
            g = m, oe("Reset trigger event: " + e), Oe(), Ie("reset"), g = n
        }

        function Se(e, t, i, o, r) {
            var a;
            n === r ? r = R : oe("Message targetOrigin: " + r), oe("Sending message to host page (" + (a = O + ":" + e + ":" + t + ":" + i + (n !== o ? ":" + o : "")) + ")"), S.postMessage(E + a, r)
        }

        function Re() {
            "loading" !== document.readyState && window.parent.postMessage("[iFrameResizerChild]Ready", "*")
        }
    }()
}]);
