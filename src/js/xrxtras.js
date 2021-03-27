! function(e) {
    var n = {};
  
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
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
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var o in e) t.d(r, o, function(n) {
                return e[n]
            }.bind(null, o));
        return r
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 6)
  }([function(e, n, t) {
    "use strict";
    e.exports = function(e) {
        var n = [];
        return n.toString = function() {
            return this.map((function(n) {
                var t = function(e, n) {
                    var t = e[1] || "",
                        r = e[3];
                    if (!r) return t;
                    if (n && "function" == typeof btoa) {
                        var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                            i = r.sources.map((function(e) {
                                return "/*# sourceURL=" + r.sourceRoot + e + " */"
                            }));
                        return [t].concat(i).concat([o]).join("\n")
                    }
                    var a;
                    return [t].join("\n")
                }(n, e);
                return n[2] ? "@media " + n[2] + "{" + t + "}" : t
            })).join("")
        }, n.i = function(e, t) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                null != i && (r[i] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var a = e[o];
                null != a[0] && r[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), n.push(a))
            }
        }, n
    }
  }, function(e, n, t) {
    var r, o, i = {},
        a = (r = function() {
            return window && document && document.all && !window.atob
        }, function() {
            return void 0 === o && (o = r.apply(this, arguments)), o
        }),
        s = function(e, n) {
            return n ? n.querySelector(e) : document.querySelector(e)
        },
        l = function(e) {
            var n = {};
            return function(e, t) {
                if ("function" == typeof e) return e();
                if (void 0 === n[e]) {
                    var r = s.call(this, e, t);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (e) {
                        r = null
                    }
                    n[e] = r
                }
                return n[e]
            }
        }(),
        d = null,
        c = 0,
        m = [],
        u = t(13);
  
    function p(e, n) {
        console.log(e)
        for (var t = 0; t < e.length; t++) {
            var r = e[t],
                o = i[r.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) o.parts.push(x(r.parts[a], n))
            } else {
                var s = [];
                for (a = 0; a < r.parts.length; a++) s.push(x(r.parts[a], n));
                i[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }
  
    function h(e, n) {
        for (var t = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o],
                a = n.base ? i[0] + n.base : i[0],
                s = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            r[a] ? r[a].parts.push(s) : t.push(r[a] = {
                id: a,
                parts: [s]
            })
        }
        return t
    }
  
    function g(e, n) {
        var t = l(e.insertInto);
        if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = m[m.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? t.insertBefore(n, r.nextSibling) : t.appendChild(n) : t.insertBefore(n, t.firstChild), m.push(n);
        else if ("bottom" === e.insertAt) t.appendChild(n);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = l(e.insertAt.before, t);
            t.insertBefore(n, o)
        }
    }
  
    function f(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var n = m.indexOf(e);
        n >= 0 && m.splice(n, 1)
    }
  
    function v(e) {
        var n = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var r = function() {
                0;
                return t.nc
            }();
            r && (e.attrs.nonce = r)
        }
        return w(n, e.attrs), g(e, n), n
    }
  
    function w(e, n) {
        Object.keys(n).forEach((function(t) {
            e.setAttribute(t, n[t])
        }))
    }
  
    function x(e, n) {
        var t, r, o, i;
        if (n.transform && e.css) {
            if (!(i = "function" == typeof n.transform ? n.transform(e.css) : n.transform.default(e.css))) return function() {};
            e.css = i
        }
        if (n.singleton) {
            var a = c++;
            t = d || (d = v(n)), r = E.bind(null, t, a, !1), o = E.bind(null, t, a, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = function(e) {
            var n = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", w(n, e.attrs), g(e, n), n
        }(n), r = k.bind(null, t, n), o = function() {
            f(t), t.href && URL.revokeObjectURL(t.href)
        }) : (t = v(n), r = R.bind(null, t), o = function() {
            f(t)
        });
        return r(e),
            function(n) {
                if (n) {
                    if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                    r(e = n)
                } else o()
            }
    }
    e.exports = function(e, n) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (n = n || {}).attrs = "object" == typeof n.attrs ? n.attrs : {}, n.singleton || "boolean" == typeof n.singleton || (n.singleton = a()), n.insertInto || (n.insertInto = "head"), n.insertAt || (n.insertAt = "bottom");
        var t = h(e, n);
        return p(t, n),
            function(e) {
                for (var r = [], o = 0; o < t.length; o++) {
                    var a = t[o];
                    (s = i[a.id]).refs--, r.push(s)
                }
                e && p(h(e, n), n);
                for (o = 0; o < r.length; o++) {
                    var s;
                    if (0 === (s = r[o]).refs) {
                        for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                        delete i[s.id]
                    }
                }
            }
    };
    var b, y = (b = [], function(e, n) {
        return b[e] = n, b.filter(Boolean).join("\n")
    });
  
    function E(e, n, t, r) {
        var o = t ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = y(n, o);
        else {
            var i = document.createTextNode(o),
                a = e.childNodes;
            a[n] && e.removeChild(a[n]), a.length ? e.insertBefore(i, a[n]) : e.appendChild(i)
        }
    }
  
    function R(e, n) {
        var t = n.css,
            r = n.media;
        if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = t;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t))
        }
    }
  
    function k(e, n, t) {
        var r = t.css,
            o = t.sourceMap,
            i = void 0 === n.convertToAbsoluteUrls && o;
        (n.convertToAbsoluteUrls || i) && (r = u(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var a = new Blob([r], {
                type: "text/css"
            }),
            s = e.href;
        e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
    }
  }, function(e, n, t) {
    var r = t(12);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    t(1)(r, o);
    r.locals && (e.exports = r.locals)
  }, function(e, n, t) {
    "use strict";
    t.r(n), t.d(n, "ensureXrAndExtras", (function() {
        return o
    }));
    const r = e => new Promise(n => window.addEventListener(e, n, {
            once: !0
        })),
        o = () => {
            const e = [];
            return window.XR8 || e.push("xrloaded"), window.XRExtras || e.push("xrextrasloaded"), Promise.all(e.map(r))
        }
  }, function(e, n) {
    e.exports = '<div id="previewContainer">\n  <div class="top-bar">\n    <div class="preview-box">\n      <button id="closePreviewButton" class="style-reset icon-button">\n        <img src="//cdn.8thwall.com/web/img/mediarecorder/close-v2.svg">\n      </button>\n      <img id="imagePreview">\n      <video id="videoPreview" playsinline loop></video>\n      <button id="toggleMuteButton" class="style-reset icon-button" >\n        <img id="muteButtonImg" src="//cdn.8thwall.com/web/img/mediarecorder/sound-on-v1.svg">\n      </button>\n    </div>\n  </div>\n\n  <div class="bottom-bar">\n    <button id="downloadButton" class="style-reset icon-button">\n      <img src="//cdn.8thwall.com/web/img/mediarecorder/download-v1.svg">\n    </button>\n    <div id="openSafariText" class="style-reset">Downloading is only available in Safari</div>\n    <div id="tapAndHoldText" class="style-reset">Tap + Hold to Share</div>\n    <button id="actionButton" class="style-reset">\n      <span id="actionButtonText"></span>\n      <img id="actionButtonImg">\n    </button>\n  </div>\n</div>\n'
  }, function(e, n) {
    e.exports = '<div id="recorder" class="recorder-container">\n  <svg viewBox="0 0 38 38" class="progress-container">\n    <circle class="progress-track" r="16" cx="19" cy="19"></circle>\n    <circle id="progressBar" class="progress-bar" r="16" cx="19" cy="19"></circle>\n    <circle class="loading-circle" r="16" cx="19" cy="19"></circle>\n  </svg>\n\n  <button id="recorder-button" class="style-reset">\n    Record\n  </button>\n</div>\n\n<div id="flashElement" class="flash-element"></div>\n\n'
  }, function(e, n, t) {
    const r = t(7),
        o = () => {
            setTimeout(() => {
                window.dispatchEvent(new CustomEvent("xrandextrasloaded"))
            }, 1)
        };
    !window.XR8 && window.XR && "function" == typeof window.XR && (window.nativeXR = window.XR, window.XR = void 0), window.XRExtras = r.XRExtras, setTimeout(() => window.dispatchEvent(new CustomEvent("xrextrasloaded")), 1), window.XR8 ? o() : window.addEventListener("xrloaded", o)
  }, function(e, n, t) {
    const {
        AFrameFactory: r
    } = t(8), {
        AlmostThereFactory: o
    } = t(11), {
        DebugWebViewsFactory: i
    } = t(17), {
        FullWindowCanvasFactory: a
    } = t(18), {
        LoadingFactory: s
    } = t(19), {
        PauseOnBlurFactory: l
    } = t(23), {
        PauseOnHiddenFactory: d
    } = t(24), {
        PlayCanvasFactory: c
    } = t(25), {
        PwaInstallerFactory: m
    } = t(26), {
        RuntimeErrorFactory: u
    } = t(32), {
        StatsFactory: p
    } = t(36), {
        ThreeExtrasFactory: h
    } = t(37), {
        MediaRecorder: g
    } = t(44);
    t(42), e.exports = {
        XRExtras: {
            AFrame: r(),
            AlmostThere: o(),
            DebugWebViews: i(),
            FullWindowCanvas: a(),
            Loading: s(),
            PauseOnBlur: l(),
            PauseOnHidden: d(),
            PlayCanvas: c(),
            PwaInstaller: m(),
            RuntimeError: u(),
            Stats: p(),
            ThreeExtras: h(),
            MediaRecorder: g
        }
    }
  }, function(e, n, t) {
    const {
        xrComponents: r
    } = t(9), {
        xrPrimitives: o
    } = t(10), {
        ensureXrAndExtras: i
    } = t(3);
    let a = null;
    const s = () => {
        XR8.addCameraPipelineModule(XRExtras.Loading.pipelineModule())
    };
    const l = () => {
            const e = document.getElementsByTagName("a-scene")[0];
            if (!e) return;
            const n = e.attributes;
            let t = !1,
                r = !1,
                o = null,
                i = null;
            Object.keys(n).forEach(e => {
                const a = n.item(e).name;
                console.log(n.item(e).name)
                if ("xrextras-almost-there" == a) {
                    t = !0;
                    const r = new RegExp("url:([^;]*)").exec(n.item(e).value);
                    r && (o = r[1])
                }
                if ("xrextras-loading" == a && (r = !0), "xrweb" === a || "xrface" === a) {
                    const t = new RegExp("allowedDevices:([^;]*)").exec(n.item(e).value);
                    t && (i = {
                        allowedDevices: t[1].trim()
                    })
                }
            }), t && (o && window.XRExtras.AlmostThere.configure({
                url: o
            }), window.XR8 ? window.XRExtras.AlmostThere.checkCompatibility(i) : window.addEventListener("xrloaded", () => window.XRExtras.AlmostThere.checkCompatibility(i))), r && window.XRExtras.Loading.showLoading({
                onxrloaded: s
            })
        },
        d = window.onload;
    window.onload = () => {
        d && d(), window.XRExtras ? l() : window.addEventListener("xrextrasloaded", l, {
            once: !0
        })
    }, e.exports = {
        AFrameFactory: () => (a || (a = function() {
            let e = !1;
            const n = ["latest", "0.9.0", "0.8.2"],
                t = n[1],
                a = e => new Promise((r, o) => n.includes(e) ? r("latest" === e ? t : e) : o(`${e} is an unsupported AFrame version: (${JSON.stringify(allowedVersions)})`)),
                s = () => {
                    window.XR8 && window.AFRAME.registerComponent("xrweb", XR8.AFrame.xrwebComponent()), window.XRExtras && window.XRExtras.AFrame.registerXrExtrasComponents()
                },
                l = e => Object.keys(e).map(n => AFRAME.registerComponent(n, e[n])),
                d = () => {
                    var n;
                    !e && window.AFRAME && (e = !0, l(r()), n = o(), Object.keys(n).map(e => AFRAME.registerPrimitive(e, n[e])))
                };
            return d(), {
                loadAFrameForXr: e => {
                    const {
                        version: n = "latest",
                        components: t = {}
                    } = e || {};
                    return a(n).then(e => {
                        return n = `//cdn.8thwall.com/web/aframe/8frame-${e}.min.js`, new Promise((e, t) => document.head.appendChild(Object.assign(document.createElement("script"), {
                            async: !0,
                            onload: e,
                            onError: t,
                            src: n
                        })));
                        var n
                    }).then(s).then(i).then(e => l(t))
                },
                registerXrExtrasComponents: d
            }
        }()), a)
    }
  }, function(e, n, t) {
    const {
        ensureXrAndExtras: r
    } = t(3);
    e.exports = {
        xrComponents: () => {
            const e = () => {
                    XR8.addCameraPipelineModule(XRExtras.Loading.pipelineModule())
                },
                n = (e, n) => {
                    if (!n) return n;
                    const t = e.querySelector(n);
                    return t && t.getAttribute("src") || n
                };
            return {
                "xrextras-almost-there": {
                    schema: {
                        url: {
                            default: ""
                        }
                    },
                    init() {
                        const e = () => {
                            this.data.url && XRExtras.AlmostThere.configure({
                                url: this.data.url
                            }), XR8.addCameraPipelineModule(XRExtras.AlmostThere.pipelineModule())
                        };
                        window.XRExtras && window.XR8 ? e() : window.addEventListener("xrandextrasloaded", e, {
                            once: !0
                        })
                    },
                    remove() {
                        XRExtras.AlmostThere.hideAlmostThere(), XR8.removeCameraPipelineModule("almostthere")
                    }
                },
                "xrextras-loading": {
                    schema: {
                        loadBackgroundColor: {
                            default: ""
                        },
                        cameraBackgroundColor: {
                            default: ""
                        },
                        loadImage: {
                            default: ""
                        },
                        loadAnimation: {
                            default: ""
                        }
                    },
                    init() {
                        let n = !1;
                        this.el.addEventListener("loaded", () => {
                            n = !0
                        });
                        const t = () => n,
                            r = () => {
                                XRExtras.Loading.setAppLoadedProvider(t), XRExtras.Loading.showLoading({
                                    onxrloaded: e
                                })
                            };
                        window.XRExtras ? r() : window.addEventListener("xrextrasloaded", r, {
                            once: !0
                        });
                        const o = document.querySelector("#loadImage");
                        o && ("" !== this.data.loadImage && (o.src = document.querySelector(this.data.loadImage).src), "" !== this.data.loadAnimation && (o.classList.remove("spin"), "none" !== this.data.loadAnimation && o.classList.add(this.data.loadAnimation)));
                        const i = document.querySelector("#loadBackground");
                        i && (i.style.backgroundColor = this.data.loadBackgroundColor);
                        const a = document.querySelector("#requestingCameraPermissions");
                        a && (a.style.backgroundColor = this.data.cameraBackgroundColor)
                    },
                    remove() {
                        
                        XR8.removeCameraPipelineModule("loading")
                    }
                },
                "xrextras-runtime-error": {
                    init() {
                        const e = () => {
                            XR8.addCameraPipelineModule(XRExtras.RuntimeError.pipelineModule())
                        };
                        window.XRExtras && window.XR8 ? e() : window.addEventListener("xrandextrasloaded", e, {
                            once: !0
                        })
                    },
                    remove() {
                        XRExtras.RuntimeError.hideRuntimeError(), XR8.removeCameraPipelineModule("error")
                    }
                },
                "xrextras-stats": {
                    init: function() {
                        this.loadModule = () => {
                            XR8.addCameraPipelineModule(XRExtras.Stats.pipelineModule())
                        }, window.XRExtras && window.XR8 ? this.loadModule() : (this.xrEventListenerAdded = !0, window.addEventListener("xrandextrasloaded", this.loadModule, {
                            once: !0
                        }))
                    },
                    remove: function() {
                        this.xrEventListenerAdded && window.removeEventListener("xrandextrasloaded", this.loadModule, {
                            once: !0
                        }), XR8.removeCameraPipelineModule("stats")
                    }
                },
                "xrextras-tap-recenter": {
                    init() {
                        const e = this.el.sceneEl;
                        e.addEventListener("click", () => {
                            e.emit("recenter", {})
                        })
                    }
                },
                "xrextras-generate-image-targets": {
                    schema: {
                        primitive: {
                            type: "string"
                        }
                    },
                    init() {
                        const e = {},
                            n = n => {
                                const t = e[n.detail.name];
                                t && t.emit(n.type, n.detail, !1)
                            };
                        this.el.sceneEl.addEventListener("xrimageloading", ({
                            detail: n
                        }) => {
                            n.imageTargets.forEach(({
                                name: n,
                                type: t,
                                metadata: r,
                                properties: o
                            }) => {
                                const i = document.createElement(this.data.primitive);
                                i.setAttribute("id", "xrextras-imagetargets-" + n), i.setAttribute("name", n), i.setAttribute("type", t), i.setAttribute("rotated", o && o.isRotated ? "true" : "false"), i.setAttribute("metadata", "string" == typeof r ? r : JSON.stringify(r)), document.querySelector("a-scene").appendChild(i), e[n] = i
                            })
                        }), this.el.sceneEl.addEventListener("xrimagefound", n), this.el.sceneEl.addEventListener("xrimageupdated", n), this.el.sceneEl.addEventListener("xrimagelost", n)
                    }
                },
                "xrextras-named-image-target": {
                    schema: {
                        name: {
                            type: "string"
                        }
                    },
                    init() {
                        const {
                            object3D: e
                        } = this.el, {
                            name: n
                        } = this.data, t = {};
                        e.visible = !1;
                        const r = e => {
                                let n = !1;
                                ["type", "height", "radiusTop", "radiusBottom", "arcLengthRadians", "arcStartRadians", "scaledWidth", "scaledHeight"].forEach(r => {
                                    t[r] !== e[r] && (t[r] = e[r], n = !0)
                                }), n && this.el.emit("xrextrasimagegeometry", t, !1)
                            },
                            o = ({
                                detail: t
                            }) => {
                                n === t.name && (e.position.copy(t.position), e.quaternion.copy(t.rotation), e.scale.set(t.scale, t.scale, t.scale), e.visible = !0)
                            };
                        this.el.sceneEl.addEventListener("xrimagescanning", ({
                            detail: e
                        }) => {
                            e.imageTargets.forEach(e => {
                                n === e.name && r(Object.assign({
                                    type: e.type
                                }, e.geometry))
                            })
                        }), this.el.sceneEl.addEventListener("xrimagefound", ({
                            detail: e
                        }) => {
                            n === e.name && (r(e), o({
                                detail: e
                            }), this.el.emit("xrextrasfound", {}, !1))
                        }), this.el.sceneEl.addEventListener("xrimageupdated", o), this.el.sceneEl.addEventListener("xrimagelost", ({
                            detail: t
                        }) => {
                            n === t.name && (this.el.emit("xrextraslost", {}, !1), e.visible = !1)
                        })
                    }
                },
                "xrextras-gesture-detector": {
                    schema: {
                        element: {
                            default: ""
                        }
                    },
                    init() {
                        this.targetElement = this.data.element && document.querySelector(this.data.element), this.targetElement || (this.targetElement = this.el), this.internalState = {
                            previousState: null
                        }, this.emitGestureEvent = this.emitGestureEvent.bind(this), this.targetElement.addEventListener("touchstart", this.emitGestureEvent), this.targetElement.addEventListener("touchend", this.emitGestureEvent), this.targetElement.addEventListener("touchmove", this.emitGestureEvent)
                    },
                    remove() {
                        this.targetElement.removeEventListener("touchstart", this.emitGestureEvent), this.targetElement.removeEventListener("touchend", this.emitGestureEvent), this.targetElement.removeEventListener("touchmove", this.emitGestureEvent)
                    },
                    emitGestureEvent(e) {
                        const n = this.getTouchState(e),
                            {
                                previousState: t
                            } = this.internalState,
                            r = t && n && n.touchCount == t.touchCount,
                            o = n && !r;
                        if (t && !r) {
                            const e = this.getEventPrefix(t.touchCount) + "fingerend";
                            this.el.emit(e, t), this.internalState.previousState = null
                        }
                        if (o) {
                            n.startTime = performance.now(), n.startPosition = n.position, n.startSpread = n.spread;
                            const e = this.getEventPrefix(n.touchCount) + "fingerstart";
                            this.el.emit(e, n), this.internalState.previousState = n
                        }
                        if (r) {
                            const e = {
                                positionChange: {
                                    x: n.position.x - t.position.x,
                                    y: n.position.y - t.position.y
                                }
                            };
                            n.spread && (e.spreadChange = n.spread - t.spread), Object.assign(t, n), Object.assign(e, t);
                            const r = this.getEventPrefix(n.touchCount) + "fingermove";
                            this.el.emit(r, e)
                        }
                    },
                    getTouchState(e) {
                        if (0 == e.touches.length) return null;
                        const n = [];
                        for (let t = 0; t < e.touches.length; t++) n.push(e.touches[t]);
                        const t = {
                                touchCount: n.length
                            },
                            r = n.reduce((e, n) => e + n.clientX, 0) / n.length,
                            o = n.reduce((e, n) => e + n.clientY, 0) / n.length;
                        t.positionRaw = {
                            x: r,
                            y: o
                        };
                        const i = 2 / (window.innerWidth + window.innerHeight);
                        if (t.position = {
                                x: r * i,
                                y: o * i
                            }, n.length >= 2) {
                            const e = n.reduce((e, n) => e + Math.sqrt(Math.pow(r - n.clientX, 2) + Math.pow(o - n.clientY, 2)), 0) / n.length;
                            t.spread = e * i
                        }
                        return t
                    },
                    getEventPrefix: e => ["one", "two", "three", "many"][Math.min(e, 4) - 1]
                },
                "xrextras-one-finger-rotate": {
                    schema: {
                        factor: {
                            default: 6
                        }
                    },
                    init() {
                        this.handleEvent = this.handleEvent.bind(this), this.el.sceneEl.addEventListener("onefingermove", this.handleEvent), this.el.classList.add("cantap")
                    },
                    remove() {
                        this.el.sceneEl.removeEventListener("onefingermove", this.handleEvent)
                    },
                    handleEvent(e) {
                        this.el.object3D.rotation.y += e.detail.positionChange.x * this.data.factor
                    }
                },
                "xrextras-two-finger-rotate": {
                    schema: {
                        factor: {
                            default: 5
                        }
                    },
                    init() {
                        this.handleEvent = this.handleEvent.bind(this), this.el.sceneEl.addEventListener("twofingermove", this.handleEvent), this.el.classList.add("cantap")
                    },
                    remove() {
                        this.el.sceneEl.removeEventListener("twofingermove", this.handleEvent)
                    },
                    handleEvent(e) {
                        this.el.object3D.rotation.y += e.detail.positionChange.x * this.data.factor
                    }
                },
                "xrextras-pinch-scale": {
                    schema: {
                        min: {
                            default: .33
                        },
                        max: {
                            default: 3
                        },
                        scale: {
                            default: 0
                        }
                    },
                    init() {
                        const e = this.data.scale;
                        this.initialScale = e && {
                            x: e,
                            y: e,
                            z: e
                        } || this.el.object3D.scale.clone(), this.scaleFactor = 1, this.handleEvent = this.handleEvent.bind(this), this.el.sceneEl.addEventListener("twofingermove", this.handleEvent), this.el.classList.add("cantap")
                    },
                    remove() {
                        this.el.sceneEl.removeEventListener("twofingermove", this.handleEvent)
                    },
                    handleEvent(e) {
                        this.scaleFactor *= 1 + e.detail.spreadChange / e.detail.startSpread, this.scaleFactor = Math.min(Math.max(this.scaleFactor, this.data.min), this.data.max), this.el.object3D.scale.x = this.scaleFactor * this.initialScale.x, this.el.object3D.scale.y = this.scaleFactor * this.initialScale.y, this.el.object3D.scale.z = this.scaleFactor * this.initialScale.z
                    }
                },
                "xrextras-hold-drag": {
                    schema: {
                        cameraId: {
                            default: "camera"
                        },
                        groundId: {
                            default: "ground"
                        },
                        dragDelay: {
                            default: 300
                        }
                    },
                    init() {
                        this.camera = document.getElementById(this.data.cameraId), this.threeCamera = this.camera.getObject3D("camera"), this.ground = document.getElementById(this.data.groundId), this.internalState = {
                            fingerDown: !1,
                            dragging: !1,
                            distance: 0,
                            startDragTimeout: null,
                            raycaster: new THREE.Raycaster
                        }, this.fingerDown = this.fingerDown.bind(this), this.startDrag = this.startDrag.bind(this), this.fingerMove = this.fingerMove.bind(this), this.fingerUp = this.fingerUp.bind(this), this.el.addEventListener("mousedown", this.fingerDown), this.el.sceneEl.addEventListener("onefingermove", this.fingerMove), this.el.sceneEl.addEventListener("onefingerend", this.fingerUp), this.el.classList.add("cantap")
                    },
                    tick() {
                        if (this.internalState.dragging) {
                            let e = null;
                            if (this.internalState.positionRaw) {
                                const n = this.internalState.positionRaw.x / document.body.clientWidth * 2 - 1,
                                    t = this.internalState.positionRaw.y / document.body.clientHeight * 2 - 1,
                                    r = new THREE.Vector2(n, -t);
                                this.threeCamera = this.threeCamera || this.camera.getObject3D("camera"), this.internalState.raycaster.setFromCamera(r, this.threeCamera);
                                const o = this.internalState.raycaster.intersectObject(this.ground.object3D, !0);
                                if (o.length > 0) {
                                    const n = o[0];
                                    this.internalState.distance = n.distance, e = n.point
                                }
                            }
                            e || (e = this.camera.object3D.localToWorld(new THREE.Vector3(0, 0, -this.internalState.distance))), e.y = 1, this.el.object3D.position.lerp(e, .2)
                        }
                    },
                    remove() {
                        this.el.removeEventListener("mousedown", this.fingerDown), this.el.sceneEl.removeEventListener("onefingermove", this.fingerMove), this.el.sceneEl.removeEventListener("onefingerend", this.fingerUp), this.internalState.fingerDown && this.fingerUp()
                    },
                    fingerDown(e) {
                        this.internalState.fingerDown = !0, this.internalState.startDragTimeout = setTimeout(this.startDrag, this.data.dragDelay), this.internalState.positionRaw = e.detail.positionRaw
                    },
                    startDrag(e) {
                        this.internalState.fingerDown && (this.internalState.dragging = !0, this.internalState.distance = this.el.object3D.position.distanceTo(this.camera.object3D.position))
                    },
                    fingerMove(e) {
                        this.internalState.positionRaw = e.detail.positionRaw
                    },
                    fingerUp(e) {
                        if (this.internalState.fingerDown = !1, clearTimeout(this.internalState.startDragTimeout), this.internalState.positionRaw = null, this.internalState.dragging) {
                            const e = this.el.object3D.position.clone();
                            this.el.setAttribute("animation__drop", {
                                property: "position",
                                to: `${e.x} 0 ${e.z}`,
                                dur: 300,
                                easing: "easeOutQuad"
                            })
                        }
                        this.internalState.dragging = !1
                    }
                },
                "xrextras-attach": {
                    schema: {
                        target: {
                            default: ""
                        },
                        offset: {
                            default: "0 0 0"
                        }
                    },
                    update() {
                        const e = document.getElementById(this.data.target);
                        e && (this.target = e.object3D, this.offset = this.data.offset.split(" ").map(e => Number(e)))
                    },
                    tick() {
                        if (!this.target) return;
                        const [e, n, t] = this.offset;
                        this.el.object3D.position.set(this.target.position.x + e, this.target.position.y + n, this.target.position.z + t)
                    }
                },
                "xrextras-play-video": {
                    schema: {
                        video: {
                            type: "string"
                        },
                        thumb: {
                            type: "string"
                        },
                        canstop: {
                            type: "bool"
                        }
                    },
                    init() {
                        const e = document.querySelector(this.data.video),
                            n = this.data.thumb && document.querySelector(this.data.thumb),
                            {
                                el: t
                            } = this;
                        t.setAttribute("material", "src", n || e), t.setAttribute("class", "cantap");
                        let r = !1;
                        t.addEventListener("click", () => {
                            r ? this.data.canstop && (t.setAttribute("material", "src", n || e), e.pause(), r = !1) : (t.setAttribute("material", "src", e), e.play(), r = !0)
                        })
                    }
                },
                "xrextras-log-to-screen": {
                    init() {
                        XRExtras.DebugWebViews.enableLogToScreen()
                    }
                },
                "xrextras-pwa-installer": {
                    schema: {
                        name: {
                            default: ""
                        },
                        iconSrc: {
                            default: ""
                        },
                        installTitle: {
                            default: ""
                        },
                        installSubtitle: {
                            default: ""
                        },
                        installButtonText: {
                            default: ""
                        },
                        iosInstallText: {
                            default: ""
                        },
                        delayAfterDismissalMillis: {
                            default: -1,
                            type: "int"
                        },
                        minNumVisits: {
                            default: -1,
                            type: "int"
                        }
                    },
                    init() {
                        const e = () => {
                            const {
                                name: e,
                                iconSrc: n,
                                installTitle: t,
                                installSubtitle: r,
                                installButtonText: o,
                                iosInstallText: i,
                                delayAfterDismissalMillis: a,
                                minNumVisits: s
                            } = this.data, l = {
                                promptConfig: {},
                                displayConfig: {}
                            };
                            e && (l.displayConfig.name = e), n && (l.displayConfig.iconSrc = n), t && (l.displayConfig.installTitle = t), r && (l.displayConfig.installSubtitle = r), o && (l.displayConfig.installButtonText = o), i && (l.displayConfig.iosInstallText = i), a >= 0 && (l.promptConfig.delayAfterDismissalMillis = a), s >= 0 && (l.promptConfig.minNumVisits = s), (Object.keys(l.promptConfig).length || Object.keys(l.displayConfig).length) && XRExtras.PwaInstaller.configure(l), XR8.addCameraPipelineModule(XRExtras.PwaInstaller.pipelineModule())
                        };
                        window.XRExtras && window.XR8 ? e() : window.addEventListener("xrandextrasloaded", e, {
                            once: !0
                        })
                    },
                    remove() {
                        XR8.removeCameraPipelineModule("pwa-installer")
                    }
                },
                "xrextras-pause-on-blur": {
                    init() {
                        const e = this.el.sceneEl,
                            n = () => e.pause(),
                            t = () => e.play();
                        XR8.addCameraPipelineModule({
                            name: "pauseonbluraframe",
                            onAttach: () => {
                                window.addEventListener("blur", n), window.addEventListener("focus", t)
                            },
                            onDetach: () => {
                                window.removeEventListener("blur", n), window.removeEventListener("focus", t)
                            }
                        })
                    },
                    remove() {
                        XR8.removeCameraPipelineModule("pauseonbluraframe")
                    }
                },
                "xrextras-pause-on-hidden": {
                    init() {
                        const e = this.el.sceneEl,
                            n = () => {
                                "visible" === document.visibilityState ? e.play() : e.pause()
                            };
                        XR8.addCameraPipelineModule({
                            name: "pauseonhiddenaframe",
                            onAttach: () => {
                                document.addEventListener("visibilitychange", n)
                            },
                            onDetach: () => {
                                document.removeEventListener("visibilitychange", n)
                            }
                        })
                    },
                    remove() {
                        XR8.removeCameraPipelineModule("pauseonhiddenaframe")
                    }
                },
                "xrextras-faceanchor": {
                    init() {
                        let e = null;
                        this.el.object3D.visible = !1;
                        const n = ({
                            detail: n
                        }) => {
                            if (e && n.id != e) return;
                            e = n.id;
                            const {
                                position: t,
                                rotation: r,
                                scale: o
                            } = n.transform;
                            this.el.object3D.position.copy(t), this.el.object3D.quaternion.copy(r), this.el.object3D.scale.set(o, o, o), this.el.object3D.visible = !0
                        };
                        this.el.sceneEl.addEventListener("xrfacefound", n), this.el.sceneEl.addEventListener("xrfaceupdated", n), this.el.sceneEl.addEventListener("xrfacelost", ({
                            detail: n
                        }) => {
                            this.el.object3D.visible = !1, e = null
                        })
                    }
                },
                "xrextras-resource": {
                    schema: {
                        src: {
                            type: "string"
                        }
                    }
                },
                "xrextras-pbr-material": {
                    schema: {
                        tex: {
                            type: "string"
                        },
                        metalness: {
                            type: "string"
                        },
                        normals: {
                            type: "string"
                        },
                        roughness: {
                            type: "string"
                        },
                        alpha: {
                            type: "string"
                        },
                        opacity: {
                            default: 1
                        }
                    },
                    init() {
                        this.el.object3D.visible = !1, this.el.material = XRExtras.ThreeExtras.pbrMaterial({
                            tex: n(this.el.sceneEl, this.data.tex),
                            metalness: n(this.el.sceneEl, this.data.metalness),
                            normals: n(this.el.sceneEl, this.data.normals),
                            roughness: n(this.el.sceneEl, this.data.roughness),
                            alpha: n(this.el.sceneEl, this.data.alpha),
                            opacity: this.data.opacity
                        })
                    }
                },
                "xrextras-basic-material": {
                    schema: {
                        tex: {
                            type: "string"
                        },
                        alpha: {
                            type: "string"
                        },
                        opacity: {
                            default: 1
                        }
                    },
                    init() {
                        this.el.object3D.visible = !1, this.el.material = XRExtras.ThreeExtras.basicMaterial({
                            tex: n(this.el.sceneEl, this.data.tex),
                            alpha: n(this.el.sceneEl, this.data.alpha),
                            opacity: this.data.opacity
                        })
                    }
                },
                "xrextras-video-material": {
                    schema: {
                        video: {
                            type: "string"
                        },
                        alpha: {
                            type: "string"
                        },
                        autoplay: {
                            type: "bool",
                            default: !0
                        },
                        opacity: {
                            default: 1
                        }
                    },
                    init() {
                        const e = document.querySelector(this.data.video);
                        this.el.object3D.visible = !1, this.el.material = XRExtras.ThreeExtras.videoMaterial({
                            video: e,
                            alpha: n(this.el.sceneEl, this.data.alpha),
                            opacity: this.data.opacity
                        }), this.data.autoplay && e.play()
                    }
                },
                "xrextras-face-mesh": {
                    schema: {
                        "material-resource": {
                            type: "string"
                        }
                    },
                    init() {
                        this.headMesh = null, this.el.object3D.visible = !1;
                        const e = e => {
                            this.headMesh.show(e), this.el.object3D.visible = !0
                        };
                        this.el.sceneEl.addEventListener("xrfaceloading", ({
                            detail: e
                        }) => {
                            let n;
                            n = this.el.getAttribute("material") ? this.el.components.material.material : this.data["material-resource"] ? this.el.sceneEl.querySelector(this.data["material-resource"]).material : new THREE.MeshBasicMaterial({
                                color: "#7611B6",
                                opacity: .5,
                                transparent: !0
                            }), this.headMesh = XRExtras.ThreeExtras.faceMesh(e, n), this.el.setObject3D("mesh", this.headMesh.mesh), this.el.emit("model-loaded")
                        }), this.el.sceneEl.addEventListener("xrfacefound", e), this.el.sceneEl.addEventListener("xrfaceupdated", e), this.el.sceneEl.addEventListener("xrfacelost", () => {
                            this.headMesh.hide(), this.el.object3D.visible = !1
                        })
                    },
                    update() {
                        if (!this.headMesh) return;
                        let e;
                        e = this.el.getAttribute("material") ? this.el.components.material.material : this.data["material-resource"] ? this.el.sceneEl.querySelector(this.data["material-resource"]).material : new THREE.MeshBasicMaterial({
                            color: "#7611B6",
                            opacity: .5,
                            transparent: !0
                        }), this.headMesh.mesh.material = e
                    }
                },
                "xrextras-face-attachment": {
                    schema: {
                        point: {
                            type: "string",
                            default: "forehead"
                        }
                    },
                    init() {
                        let e = null;
                        this.el.object3D.visible = !1;
                        const n = ({
                            detail: n
                        }) => {
                            if (e && n.id != e) return;
                            e = n.id;
                            const t = n.attachmentPoints[this.data.point];
                            if (!t) return;
                            const {
                                position: r,
                                rotation: o
                            } = t;
                            this.el.object3D.position.copy(r), this.el.object3D.visible = !0
                        };
                        this.el.sceneEl.addEventListener("xrfacefound", n), this.el.sceneEl.addEventListener("xrfaceupdated", n), this.el.sceneEl.addEventListener("xrfacelost", ({
                            detail: n
                        }) => {
                            this.el.object3D.visible = !1, e = null
                        })
                    }
                },
                "xrextras-hide-camera-feed": {
                    schema: {
                        color: {
                            type: "string",
                            default: "#2D2E43"
                        }
                    },
                    init() {
                        this.el.sceneEl.emit("hidecamerafeed"), this.firstTick = !0, document.querySelector("a-sky") || (this.skyEl = document.createElement("a-sky"), this.skyEl.setAttribute("color", this.data.color), this.el.sceneEl.appendChild(this.skyEl))
                    },
                    tick() {
                        this.firstTick && (this.firstTick = !1, this.el.sceneEl.emit("hidecamerafeed"))
                    },
                    remove() {
                        this.el.sceneEl.emit("showcamerafeed"), this.skyEl && this.el.sceneEl.removeChild(this.skyEl)
                    }
                },
                "xrextras-hider-material": {
                    init() {
                        const e = new THREE.MeshStandardMaterial;
                        e.colorWrite = !1;
                        const n = n => {
                            n && (n.material && (n.material = e), n.traverse(n => {
                                n.isMesh && (n.material = e)
                            }))
                        };
                        n(this.el.getObject3D("mesh")), this.el.addEventListener("model-loaded", () => n(this.el.getObject3D("mesh")))
                    }
                },
                "xrextras-capture-button": {
                    schema: {
                        captureMode: {
                            default: "standard"
                        }
                    },
                    init() {
                        r().then(() => {
                            this.removed || (this.added = !0, XRExtras.MediaRecorder.initRecordButton(), XRExtras.MediaRecorder.setCaptureMode(this.data.captureMode))
                        })
                    },
                    update() {
                        this.added && XRExtras.MediaRecorder.setCaptureMode(this.data.captureMode)
                    },
                    remove() {
                        this.removed = !0, this.added && XRExtras.MediaRecorder.removeRecordButton()
                    }
                },
                "xrextras-capture-preview": {
                    schema: {
                        actionButtonShareText: {
                            default: ""
                        },
                        actionButtonViewText: {
                            default: ""
                        }
                    },
                    init() {
                        r().then(() => {
                            this.removed || (this.added = !0, XRExtras.MediaRecorder.initMediaPreview(this.data))
                        })
                    },
                    remove() {
                        this.removed = !0, this.added && XRExtras.MediaRecorder.removeMediaPreview()
                    }
                },
                "xrextras-capture-config": {
                    schema: {
                        enableEndCard: {
                            type: "boolean"
                        },
                        shortLink: {
                            type: "string"
                        },
                        coverImageUrl: {
                            type: "string"
                        },
                        footerImageUrl: {
                            type: "string"
                        },
                        maxDurationMs: {
                            type: "int"
                        },
                        endCardCallToAction: {
                            type: "string"
                        },
                        maxDimension: {
                            type: "int"
                        },
                        watermarkImageUrl: {
                            type: "string"
                        },
                        watermarkMaxWidth: {
                            type: "number"
                        },
                        watermarkMaxHeight: {
                            type: "number"
                        },
                        watermarkLocation: {
                            type: "string"
                        },
                        fileNamePrefix: {
                            type: "string"
                        },
                        requestMic: {
                            type: "string"
                        },
                        includeSceneAudio: {
                            type: "boolean",
                            default: !0
                        },
                        excludeSceneAudio: {
                            type: "boolean",
                            default: !1
                        }
                    },
                    init() {
                        this.includeSceneAudio = this.includeSceneAudio.bind(this)
                    },
                    update() {
                        const e = {
                            audioContext: THREE.AudioContext.getContext()
                        };
                        void 0 !== this.attrValue.excludeSceneAudio ? (console.warn('"exclude-scene-audio" has been deprecated in favor of "include-scene-audio"'), e.configureAudioOutput = this.data.excludeSceneAudio ? null : this.includeSceneAudio) : e.configureAudioOutput = this.data.includeSceneAudio ? this.includeSceneAudio : null, Object.keys(this.data).forEach(n => {
                            void 0 === this.attrValue[n] || ["includeSceneAudio", "excludeSceneAudio"].includes(n) || (e[n] = this.data[n])
                        }), XRExtras.MediaRecorder.configure(e)
                    },
                    includeSceneAudio({
                        microphoneInput: e,
                        audioProcessor: n
                    }) {
                        const t = n.context;
                        return this.el.sceneEl.audioListener || (this.el.sceneEl.audioListener = new THREE.AudioListener), this.el.sceneEl.audioListener.gain.connect(n), this.el.sceneEl.audioListener.gain.connect(t.destination), e
                    }
                },
                "xrextras-curved-target-container": {
                    schema: {
                        color: {
                            type: "string",
                            default: "#464766"
                        },
                        height: {
                            type: "number"
                        },
                        width: {
                            type: "number"
                        }
                    },
                    init() {
                        const {
                            object3D: e
                        } = this.el;
                        let n = null,
                            t = null,
                            r = null,
                            o = null,
                            i = null,
                            a = null;
                        const s = this.data.color,
                            l = (e, n, t, r) => {
                                const o = (2 * Math.PI - e.arcLengthRadians) * (r || 1),
                                    i = n;
                                return new THREE.CylinderGeometry(e.radiusTop, e.radiusBottom, t ? e.height * t : e.height, 50, 1, i, (n ? 0 : (2 * Math.PI - o) / 2) + Math.PI, n ? 2 * Math.PI : o)
                            },
                            d = (e, n) => {
                                const t = n ? e.radiusTop : e.radiusBottom;
                                return new THREE.CircleGeometry(t, 50)
                            };
                        this.el.parentNode.addEventListener("xrextrasimagegeometry", ({
                            detail: e
                        }) => {
                            const c = this.data.height,
                                m = this.data.width,
                                u = document.createElement("a-entity"),
                                p = l(e, !1, c, m),
                                h = new THREE.MeshBasicMaterial({
                                    colorWrite: !1
                                });
                            n = new THREE.Mesh(p, h), n.rotation.set(0, Math.PI, 0), u.setObject3D("mesh", n), this.el.appendChild(u);
                            const g = n.geometry.parameters.height,
                                f = document.createElement("a-entity"),
                                v = l(e, !0, c, m);
                            t = new THREE.Mesh(v, h), t.rotation.set(Math.PI, 0, 0), f.setObject3D("mesh", t), f.object3D.position.set(0, g, 0), this.el.appendChild(f);
                            const w = document.createElement("a-entity"),
                                x = l(e, !0, c, m);
                            r = new THREE.Mesh(x, h), r.rotation.set(Math.PI, 0, 0), w.setObject3D("mesh", r), w.object3D.position.set(0, -g, 0), this.el.appendChild(w);
                            const b = new THREE.MeshStandardMaterial({
                                    color: s,
                                    side: THREE.BackSide
                                }),
                                y = new THREE.MeshStandardMaterial({
                                    color: s,
                                    side: THREE.FrontSide
                                }),
                                E = document.createElement("a-entity"),
                                R = d(e, !0);
                            o = new THREE.Mesh(R, y), o.rotation.set(Math.PI / 2, 0, 0), E.setObject3D("mesh", o), E.object3D.position.set(0, g / 2, 0), this.el.appendChild(E);
                            const k = document.createElement("a-entity"),
                                L = l(e, !0, c, m);
                            i = new THREE.Mesh(L, b), i.rotation.set(0, Math.PI, 0), k.setObject3D("mesh", i), k.object3D.position.set(0, 0, 0), k.object3D.scale.set(1, 1, 1), this.el.appendChild(k);
                            const S = document.createElement("a-entity"),
                                M = d(e, !1);
                            a = new THREE.Mesh(M, b), a.rotation.set(Math.PI / 2, 0, 0), S.setObject3D("mesh", a), S.object3D.position.set(0, -g / 2, 0), this.el.appendChild(S)
                        })
                    }
                },
                "xrextras-target-mesh": {
                    schema: {
                        "material-resource": {
                            type: "string"
                        },
                        geometry: {
                            type: "string"
                        },
                        height: {
                            type: "number"
                        },
                        width: {
                            type: "number"
                        }
                    },
                    init() {
                        this.curvedMesh = null;
                        const e = ["full", "label"].includes(this.data.geometry) ? this.data.geometry : "label";
                        this.el.parentNode.addEventListener("xrextrasimagegeometry", ({
                            detail: n
                        }) => {
                            let t;
                            t = this.el.getAttribute("material") ? this.el.components.material.material : this.data["material-resource"] ? this.el.sceneEl.querySelector(this.data["material-resource"]).material : new THREE.MeshBasicMaterial({
                                color: "#7611B6",
                                opacity: .5,
                                transparent: !0
                            });
                            const r = this.data.height,
                                o = this.data.width,
                                i = XRExtras.ThreeExtras.createTargetGeometry(n, "full" === e, r, o);
                            this.curvedMesh = new THREE.Mesh(i, t), this.el.setObject3D("mesh", this.curvedMesh), this.el.emit("model-loaded")
                        })
                    },
                    update() {
                        if (!this.curvedMesh) return;
                        let e;
                        e = this.el.getAttribute("material") ? this.el.components.material.material : this.data["material-resource"] ? this.el.sceneEl.querySelector(this.data["material-resource"]).material : new THREE.MeshBasicMaterial({
                            color: "#7611B6",
                            opacity: .5,
                            transparent: !0
                        }), this.curvedMesh.material = e
                    }
                },
                "xrextras-target-video-fade": {
                    schema: {
                        video: {
                            type: "string"
                        },
                        height: {
                            type: "number"
                        },
                        width: {
                            type: "number"
                        }
                    },
                    init() {
                        const {
                            object3D: e
                        } = this.el, n = document.querySelector(this.data.video);
                        let t = null;
                        this.el.parentNode.addEventListener("xrextrasimagegeometry", ({
                            detail: e
                        }) => {
                            const r = XRExtras.ThreeExtras.createTargetGeometry(e, !1, this.data.height, this.data.width);
                            t = new THREE.Mesh(r), this.el.setObject3D("mesh", t), this.el.setAttribute("material", "opacity", 0), this.el.setAttribute("material", "src", n)
                        }), this.el.parentNode.addEventListener("xrextrasfound", () => {
                            n.play(), this.el.setAttribute("animation", {
                                property: "components.material.material.opacity",
                                dur: 800,
                                isRawProperty: !0,
                                easing: "easeInOutQuad",
                                loop: !1,
                                to: "1"
                            })
                        }), this.el.parentNode.addEventListener("xrextraslost", () => {
                            n.pause(), n.currentTime = 0, this.el.components.material.material.opacity = 0, this.el.removeAttribute("animation")
                        })
                    }
                },
                "xrextras-target-video-sound": {
                    schema: {
                        video: {
                            type: "string"
                        },
                        thumb: {
                            type: "string"
                        },
                        height: {
                            type: "number"
                        },
                        width: {
                            type: "number"
                        }
                    },
                    init() {
                        const {
                            object3D: e
                        } = this.el, n = document.querySelector(this.data.video), t = this.data.thumb && document.querySelector(this.data.thumb);
                        let r = !1,
                            o = null;
                        this.el.addEventListener("click", () => {
                            r || (this.el.setAttribute("material", "src", n), n.play(), r = !0)
                        });
                        this.el.parentNode.addEventListener("xrextrasimagegeometry", ({
                            detail: e
                        }) => {
                            const r = XRExtras.ThreeExtras.createTargetGeometry(e, !1, this.data.height, this.data.width);
                            o = new THREE.Mesh(r), this.el.setObject3D("mesh", o), this.el.setAttribute("class", "cantap"), this.el.setAttribute("material", "src", t || n)
                        }), this.el.parentNode.addEventListener("xrextrasfound", () => {
                            r && n.play()
                        }), this.el.parentNode.addEventListener("xrextraslost", () => {
                            r && n.pause()
                        })
                    }
                },
                "xrextras-spin": {
                    schema: {
                        speed: {
                            default: 2e3
                        },
                        direction: {
                            default: "normal"
                        }
                    },
                    init() {
                        const {
                            el: e
                        } = this;
                        e.setAttribute("animation__spin", {
                            property: "object3D.rotation.y",
                            from: 0,
                            to: 360,
                            dur: this.data.speed,
                            dir: this.data.direction,
                            loop: !0,
                            easing: "linear"
                        })
                    }
                }
            }
        }
    }
  }, function(e, n) {
    e.exports = {
        xrPrimitives: () => ({
            "xrextras-faceanchor": {
                defaultComponents: {
                    "xrextras-faceanchor": {}
                }
            },
            "xrextras-resource": {
                defaultComponents: {
                    "xrextras-resource": {}
                },
                mappings: {
                    src: "xrextras-resource.src"
                }
            },
            "xrextras-pbr-material": {
                defaultComponents: {
                    "xrextras-pbr-material": {}
                },
                mappings: {
                    tex: "xrextras-pbr-material.tex",
                    metalness: "xrextras-pbr-material.metalness",
                    normals: "xrextras-pbr-material.normals",
                    roughness: "xrextras-pbr-material.roughness",
                    alpha: "xrextras-pbr-material.alpha",
                    opacity: "xrextras-pbr-material.opacity"
                }
            },
            "xrextras-basic-material": {
                defaultComponents: {
                    "xrextras-basic-material": {}
                },
                mappings: {
                    tex: "xrextras-basic-material.tex",
                    alpha: "xrextras-basic-material.alpha",
                    opacity: "xrextras-basic-material.opacity"
                }
            },
            "xrextras-video-material": {
                defaultComponents: {
                    "xrextras-video-material": {}
                },
                mappings: {
                    video: "xrextras-video-material.video",
                    alpha: "xrextras-video-material.alpha",
                    autoplay: "xrextras-video-material.autoplay",
                    opacity: "xrextras-video-material.opacity"
                }
            },
            "xrextras-face-mesh": {
                defaultComponents: {
                    "xrextras-face-mesh": {}
                },
                mappings: {
                    "material-resource": "xrextras-face-mesh.material-resource"
                }
            },
            "xrextras-face-attachment": {
                defaultComponents: {
                    "xrextras-face-attachment": {}
                },
                mappings: {
                    point: "xrextras-face-attachment.point"
                }
            },
            "xrextras-capture-button": {
                defaultComponents: {
                    "xrextras-capture-button": {}
                },
                mappings: {
                    "capture-mode": "xrextras-capture-button.captureMode"
                }
            },
            "xrextras-capture-preview": {
                defaultComponents: {
                    "xrextras-capture-preview": {}
                },
                mappings: {
                    "action-button-view-text": "xrextras-capture-preview.actionButtonViewText",
                    "action-button-share-text": "xrextras-capture-preview.actionButtonShareText"
                }
            },
            "xrextras-capture-config": {
                defaultComponents: {
                    "xrextras-capture-config": {}
                },
                mappings: {
                    "enable-end-card": "xrextras-capture-config.enableEndCard",
                    "short-link": "xrextras-capture-config.shortLink",
                    "cover-image-url": "xrextras-capture-config.coverImageUrl",
                    "footer-image-url": "xrextras-capture-config.footerImageUrl",
                    "max-duration-ms": "xrextras-capture-config.maxDurationMs",
                    "end-card-call-to-action": "xrextras-capture-config.endCardCallToAction",
                    "max-dimension": "xrextras-capture-config.maxDimension",
                    "watermark-image-url": "xrextras-capture-config.watermarkImageUrl",
                    "watermark-max-width": "xrextras-capture-config.watermarkMaxWidth",
                    "watermark-max-height": "xrextras-capture-config.watermarkMaxHeight",
                    "watermark-location": "xrextras-capture-config.watermarkLocation",
                    "file-name-prefix": "xrextras-capture-config.fileNamePrefix",
                    "request-mic": "xrextras-capture-config.requestMic",
                    "include-scene-audio": "xrextras-capture-config.includeSceneAudio",
                    "exclude-scene-audio": "xrextras-capture-config.excludeSceneAudio"
                }
            },
            "xrextras-curved-target-container": {
                defaultComponents: {
                    "xrextras-curved-target-container": {}
                },
                mappings: {
                    color: "xrextras-curved-target-container.color",
                    width: "xrextras-curved-target-container.width",
                    height: "xrextras-curved-target-container.height"
                }
            },
            "xrextras-named-image-target": {
                defaultComponents: {
                    "xrextras-named-image-target": {}
                },
                mappings: {
                    name: "xrextras-named-image-target.name"
                }
            },
            "xrextras-target-mesh": {
                defaultComponents: {
                    "xrextras-target-mesh": {}
                },
                mappings: {
                    "material-resource": "xrextras-target-mesh.material-resource",
                    "target-geometry": "xrextras-target-mesh.geometry",
                    height: "xrextras-target-mesh.height",
                    width: "xrextras-target-mesh.width"
                }
            },
            "xrextras-target-video-fade": {
                defaultComponents: {
                    "xrextras-target-video-fade": {}
                },
                mappings: {
                    video: "xrextras-target-video-fade.video",
                    width: "xrextras-target-video-fade.width",
                    height: "xrextras-target-video-fade.height"
                }
            },
            "xrextras-target-video-sound": {
                defaultComponents: {
                    "xrextras-target-video-sound": {}
                },
                mappings: {
                    video: "xrextras-target-video-sound.video",
                    thumb: "xrextras-target-video-sound.thumb",
                    width: "xrextras-target-video-sound.width",
                    height: "xrextras-target-video-sound.height"
                }
            }
        })
    }
  }, function(e, n, t) {
    t(2), t(14);
    const r = t(16);
    let o = null;
    e.exports = {
        AlmostThereFactory: () => (o || (o = function() {
            let e, n = null,
                t = null;
            const o = e => {
                    document.getElementById(e).classList.remove("hidden")
                },
                i = t => !n && (!!XR8.XrDevice.isDeviceBrowserCompatible(t) || ((t => {
                    const i = document.createElement("template");
                    i.innerHTML = r.trim(), n = i.content.firstChild, document.getElementsByTagName("body")[0].appendChild(n);
                    const a = e || window.location.href,
                        s = n.querySelectorAll(".desktop-home-link");
                    for (let e = 0; e < s.length; e++) s[e].textContent = a;
                    const l = XR8.XrDevice.incompatibleReasons(t),
                        d = XR8.XrDevice.incompatibleReasonDetails(t),
                        c = XR8.XrDevice.deviceEstimate(),
                        m = document.querySelector('meta[name="og:image"]'),
                        u = m && m.content;
                    Array.from(document.querySelectorAll(".app-header-img")).forEach(e => {
                        u ? e.src = u : (e.classList.add("foreground-image"), e.src = "https://cdn.8thwall.com/web/img/almostthere/v2/safari-fallback.png")
                    });
                    const p = document.getElementById("error_copy_link_btn");
                    if (p.addEventListener("click", () => {
                            const e = document.createElement("input");
                            document.body.appendChild(e), e.value = a, e.select(), document.execCommand("copy"), document.body.removeChild(e), p.innerHTML = "Copied!", p.classList.add("error-copy-link-copied")
                        }), l.includes(XR8.XrDevice.IncompatibilityReasons.UNSUPPORTED_BROWSER) && "iOS" === c.os) {
                        if ("Safari" == d.inAppBrowserType) o("error_msg_open_in_safari"), o("apple_open_safari_hint");
                        else switch (d.inAppBrowser) {
                            case "Instagram":
                            case "Facebook":
                            case "WeChat":
                            case "LinkedIn":
                            case "QQ":
                            case "Sino Weibo":
                            case "Snapchat":
                                o("error_msg_open_in_safari"), o("error_text_header_top"), o("top_corner_open_safari"), "Instagram" === d.inAppBrowser && document.body.classList.add("bottombarbump");
                                break;
                            case "Facebook Messenger":
                            case "Kakao Talk":
                            case "Naver":
                                o("error_msg_open_in_safari"), o("error_text_header_bottom"), o("bottom_corner_open_safari");
                                break;
                            case "Line":
                            case "Mozilla Firefox Focus":
                                o("error_msg_open_in_safari"), o("error_text_header_top"), o("top_close_open_safari");
                                break;
                            default:
                                o("error_unknown_webview")
                        }
                        return
                    }
                    if (l.includes(XR8.XrDevice.IncompatibilityReasons.MISSING_WEB_ASSEMBLY)) {
                        if ("iOS" == c.os) return void o("error_msg_web_assembly_ios");
                        if ("Android" == c.os) return void o("error_msg_web_assembly_android")
                    }
                    if ("iOS" == c.os) return o("error_unknown_webview"), void o("error_text_header_unknown");
                    if ("Android" == c.os) return void o("error_msg_android_almost_there");
                    o("error_msg_device");
                    const h = document.createElement("script");
                    h.type = "text/javascript", h.src = "https://cdn.8thwall.com/web/share/qrcode8-1.1.0.js", h.onload = () => {
                        document.getElementById("qrcode").innerHTML = qrcode8.generateQR8Svg(a, 250, 80)
                    }, document.getElementById("almostthereContainer").appendChild(h)
                })(t), XR8.pause(), XR8.stop(), !1));
            return {
                pipelineModule: () => ({
                    name: "almostthere",
                    onBeforeRun: e => {
                        t = e && e.config
                    },
                    onCameraStatusChange: () => {
                        if (!i(t)) throw Error("Device or browser incompatible with XR.")
                    },
                    onException: () => {
                        i(t)
                    }
                }),
                checkCompatibility: i,
                configure: ({
                    url: n
                }) => {
                    void 0 !== n && (e = n)
                },
                hideAlmostThere: () => {
                    n && (n.parentNode.removeChild(n), n = null)
                }
            }
        }()), o)
    }
  }, function(e, n, t) {
    (e.exports = t(0)(!1)).push([e.i, "@font-face {\n  font-family: 'Raleway-Regular';\n  src: url('//cdn.8thwall.com/web/fonts/raleway-regular.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/raleway-regular.ttf')  format('truetype') /* Safari, Android, iOS */\n}\n\n@font-face {\n  font-family: 'Raleway-Bold';\n  src: url('//cdn.8thwall.com/web/fonts/raleway-bold.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/raleway-bold.ttf')  format('truetype') /* Safari, Android, iOS */\n}\n\n@font-face {\n  font-family: 'Varela-Round';\n  src: url('//cdn.8thwall.com/web/fonts/VarelaRound-Regular.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/VarelaRound-Regular.ttf')  format('truetype') /* Safari, Android, iOS */\n}\n\n@font-face {\n  font-family: 'Nunito';\n  src: url('//cdn.8thwall.com/web/fonts/Nunito-Regular.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/Nunito-Regular.ttf')  format('truetype') /* Safari, Android, iOS */\n}\n\n@font-face {\n  font-family: 'Nunito-SemiBold';\n  src: url('//cdn.8thwall.com/web/fonts/Nunito-SemiBold.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/Nunito-SemiBold.ttf')  format('truetype') /* Safari, Android, iOS */\n}", ""])
  }, function(e, n) {
    e.exports = function(e) {
        var n = "undefined" != typeof window && window.location;
        if (!n) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var t = n.protocol + "//" + n.host,
            r = t + n.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(e, n) {
            var o, i = n.trim().replace(/^"(.*)"$/, (function(e, n) {
                return n
            })).replace(/^'(.*)'$/, (function(e, n) {
                return n
            }));
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? t + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
        }))
    }
  }, function(e, n, t) {
    var r = t(15);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    t(1)(r, o);
    r.locals && (e.exports = r.locals)
  }, function(e, n, t) {
    (e.exports = t(0)(!1)).push([e.i, "#almostthereContainer {\n  z-index: 820;\n  background-color: #101118;\n}\n\n.xrextras-old-style #almostthereContainer {\n  background-color: #FFFFFF;\n}\n\n#qrcode {\n  background-color: white;\n  margin: 0 auto;\n  width: 250px;\n  height: 250px;\n  padding: 8px;\n  border-radius: 20px;\n  box-sizing: content-box;\n}\n\n#qrcode>svg {\n  width: 100%;\n  display: block;\n}\n\n.arrow-top-corner {\n  position: fixed;\n  top: 3%;\n  right: 1.5%;\n  height: 36px;\n}\n\n.arrow-top-close {\n  position: fixed;\n  top: 3%;\n  right: 12.5%;\n  height: 36px;\n}\n\n.arrow-bottom-close {\n  position: fixed;\n  bottom: 3%;\n  right: 15%;\n  height: 36px;\n  -moz-transform: scale(-1, -1);\n  -o-transform: scale(-1, -1);\n  -webkit-transform: scale(-1, -1);\n  transform: scale(-1, -1);\n}\n\n.arrow-bottom-corner {\n  position: fixed;\n  bottom: 3%;\n  right: 2%;\n  height: 36px;\n  -moz-transform: scale(-1, -1);\n  -o-transform: scale(-1, -1);\n  -webkit-transform: scale(-1, -1);\n  transform: scale(-1, -1);\n}\n\n.app-header-img {\n  position: fixed;\n  width: 100vw;\n  max-width: 500px;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.app-header-img.unknown {\n  position: fixed;\n  width: 100vw;\n  max-width: 500px;\n  left: 50%;\n  top: 43%;\n  transform: translateX(-50%) translateY(-57%);\n}\n\n.poweredby-img {\n  width: 35vw;\n  max-width: 200px;\n  position: fixed;\n  bottom: 2%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.poweredby-img.desktop {\n  width: 200px;\n  bottom: 5%;\n}\n\n.bottombarbump .poweredby-img{\n  bottom: 15%;\n}\n\n#error_msg_open_in_safari {\n  background-color: #101118;\n}\n\n.xrextras-old-style #error_msg_open_in_safari {\n  background-color: white;\n}\n\n.open-header-top {\n  font-family: 'Nunito-SemiBold', sans-serif;\n  color: white;\n  letter-spacing: .37;\n  font-size: 1em;\n  position: fixed;\n  top: 0%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.xrextras-old-style .open-header-top {\n  color: #323232;\n}\n\n.open-header-bottom {\n  font-family: 'Nunito-SemiBold', sans-serif;\n  color: white;\n  letter-spacing: .37;\n  font-size: 1em;\n  position: fixed;\n  top: 10%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.xrextras-old-style .open-header-bottom {\n  color: #323232;\n}\n\n.open-header-unknown {\n  font-family: 'Nunito-SemiBold', sans-serif;\n  color: white;\n  letter-spacing: .37;\n  font-size: 1em;\n  position: fixed;\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.xrextras-old-style .open-header-unknown {\n  color: #323232;\n}\n\n.desktop-message {\n  font-family: 'Nunito-SemiBold', sans-serif;\n  margin: 0 auto;\n  margin-top: 1vh;\n  width: 500px;\n  color: white;\n  font-size: 24pt;\n  line-height: 1em;\n}\n\n.xrextras-old-style .desktop-message {\n  color: #323232;\n}\n\n.desktop-hint {\n  font-family: 'Nunito', sans-serif;\n  font-size: 14pt;\n  color: #fff;\n  line-height: 2em;\n  margin-top: 2vh;\n  letter-spacing: .37;\n}\n\n.xrextras-old-style .desktop-hint {\n  color: #323232;\n}\n\n.copy-link-btn {\n  position: fixed;\n  bottom: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  font-family: 'Nunito-SemiBold', sans-serif;\n  font-weight: 800;\n  font-size: 1.1em;\n  text-align: center;\n  color: white;\n  text-decoration: none;\n  border: none;\n  background-color: #AD50FF;\n  padding: 6px 13px;\n  border-radius: 10px;\n}\n\n.xrextras-old-style .copy-link-btn {\n  background-color: #7611B7;\n}\n\n.error-copy-link-copied {\n  background-color: #8083A2 !important;\n}\n\n.safari-hero-image {\n  max-height: 30vmin;\n}\n", ""])
  }, function(e, n) {
    e.exports = '<div id="almostthereContainer" class="absolute-fill">\n  \x3c!--Not on mobile --\x3e\n  <div id="error_msg_device" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-20">\n        <div id="qrcode"></div>\n        <br />\n        <div class="desktop-message">\n          <span>\n            To view, open camera on smartphone and scan code\n          </span>\n        </div>\n        <div class="desktop-hint">\n          <span style="font-size:15pt;line-height:20pt;letter-spacing:-.21;">\n            or visit <br /><span class="desktop-home-link"></span><br />\n            on a smartphone or tablet.\n          </span>\n        </div>\n        <img class="foreground-image poweredby-img desktop" src="//cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-2.svg">\n      </div>\n    </div>\n  </div>\n\n  \x3c!--iOS webview, reachable from button press --\x3e\n  <div id="error_msg_open_in_safari" class="hidden absolute-fill">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <span id="error_text_header_top" class="hidden open-header-top">\n          <h2>Open in Safari<br /> to view AR</h2>\n        </span>\n        <span id="error_text_header_bottom" class="hidden open-header-bottom">\n          <h2>Open in Safari<br /> to view AR</h2>\n        </span>\n        <img class="app-header-img">\n        <img class="foreground-image poweredby-img" src="//cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-2.svg">\n        <br />\n        <img id="top_corner_open_safari" src="//cdn.8thwall.com/web/img/almostthere/v2/xtra-arrow.svg"\n          class="foreground-image arrow-top-corner hidden" />\n        <img id="top_close_open_safari" src="//cdn.8thwall.com/web/img/almostthere/v2/xtra-arrow.svg"\n          class="foreground-image arrow-top-close hidden" />\n        <img id="bottom_corner_open_safari" src="//cdn.8thwall.com/web/img/almostthere/v2/xtra-arrow.svg"\n          class="foreground-image arrow-bottom-corner hidden" />\n        <img id="bottom_close_open_safari" src="//cdn.8thwall.com/web/img/almostthere/v2/xtra-arrow.svg"\n          class="foreground-image arrow-bottom-close hidden" />\n      </div>\n    </div>\n  </div>\n\n  \x3c!--iOS webview, requires copy/paste of link --\x3e\n  <div id="error_unknown_webview" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <span id="error_text_header_unknown" class="open-header-unknown">\n          <h2>Open in Safari<br /> to view AR</h2>\n        </span>\n        <img id="app_img" class="app-header-img unknown">\n        <br />\n        <span id="app_link" class="desktop-home-link mobile"></span>\n        <button id="error_copy_link_btn" class="copy-link-btn">Copy Link</button>\n        <img class="foreground-image poweredby-img" src="//cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-2.svg">\n      </div>\n    </div>\n  </div>\n\n  \x3c!--Missing Web Assembly, or iOS 11.2 (which has a WebAssembly regression)--\x3e\n  <div id="error_msg_web_assembly_ios" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img class="foreground-image safari-hero-image" src="//cdn.8thwall.com/web/img/almostthere/v2/safari-fallback.png"></p>\n        <div class="error-text-header">You\'re almost there!</div>\n        <div class="error-text-detail">\n          To view this experience, please update to a newer version of iOS.\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="error_msg_web_assembly_android" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img src="//cdn.8thwall.com/web/img/almostthere/v1/google-chrome.png"></p>\n        <div class="error-text-header">You\'re almost there!</div>\n        <div class="error-text-detail">\n          Browser doesn\'t support WebAssembly. Please update your browser.\n        </div>\n      </div>\n    </div>\n  </div>\n\n  \x3c!--Android unsupported browser --\x3e\n  <div id="error_msg_android_almost_there" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img height="100px" src="//cdn.8thwall.com/web/img/almostthere/v1/google-chrome.png"></p>\n        <div class="error-text-header">You\'re almost there!</div>\n        <div class="error-text-detail">\n          To view this experience on your Android device, please open in Google Chrome or your\n          native browser.\n        </div>\n        <br />\n        <p><span class="desktop-home-link"></span></p>\n        <div id="android_copy_hint" class="error-text-hint">Open your browser and paste.</div>\n      </div>\n    </div>\n  </div>\n</div>\n'
  }, function(e, n) {
    let t = null;
    e.exports = {
        DebugWebViewsFactory: () => (t || (t = function() {
            let e = "";
            const n = window.console.log;
            return {
                enableLogToScreen: () => {
                    const t = t => {
                        n(t), e = e + "* " + t + "<br>";
                        let r = document.getElementById("logdiv");
                        if (!r) {
                            const e = document.getElementsByTagName("body")[0];
                            if (!e) return;
                            r = document.createElement("div"), e.appendChild(r), r.style.zIndex = 850, r.style.position = "absolute", r.style.top = "0px", r.style.left = "0px", r.style.backgroundColor = "#FFFFFF", r.id = "logdiv"
                        }
                        r.innerHTML = "<pre>" + e + "</pre>"
                    };
                    window.console.log = t, window.console.error = e => {
                        t(`<font color=red>${e}</font>`)
                    }, window.console.warn = e => {
                        t(`<font color=orange>${e}</font>`)
                    }
                }
            }
        }()), t)
    }
  }, function(e, n) {
    let t = null;
    e.exports = {
        FullWindowCanvasFactory: () => (null == t && (t = function() {
            let e = null;
            const n = {};
            let t = 0;
            const r = {
                    width: "100%",
                    height: "100%",
                    margin: "0px",
                    padding: "0px",
                    border: "0px",
                    display: "block"
                },
                o = {
                    width: "100%",
                    height: "100%",
                    margin: "0px",
                    padding: "0px",
                    border: "0px"
                },
                i = () => XR8.XrDevice.isDeviceBrowserCompatible({
                    allowedDevices: XR8.XrConfig.device().MOBILE
                }),
                a = () => {
                    i() || s()
                },
                s = () => {
                    if (!e) return;
                    const o = window.innerWidth,
                        a = window.innerHeight,
                        l = o * devicePixelRatio,
                        d = a * devicePixelRatio;
                    if (((0 == t || 180 == t) && l > d || (90 == t || -90 == t) && d > l) && i()) return void window.requestAnimationFrame(s);
                    const c = Math.max(l, d),
                        m = Math.min(l, d),
                        u = c / m,
                        p = Math.max(n.w, n.h),
                        h = Math.min(n.w, n.h);
                    let g = p,
                        f = Math.round(p / u);
                    if (f > h && (f = h, g = Math.round(h * u)), (f > m || g > c) && (f = m, g = c), l > d) {
                        let e = f;
                        f = g, g = e
                    }
                    Object.assign(e.style, r), e.width = f, e.height = g, setTimeout(() => window.scrollTo(0, (window.scrollY + 1) % 2), 300)
                },
                l = ({
                    videoWidth: e,
                    videoHeight: t
                }) => {
                    n.w = e, n.h = t
                },
                d = ({
                    videoWidth: e,
                    videoHeight: n
                }) => {
                    l({
                        videoWidth: e,
                        videoHeight: n
                    }), s()
                },
                c = ({
                    status: e,
                    video: n
                }) => {
                    "hasVideo" === e && l(n)
                },
                m = () => {
                    s()
                },
                u = () => {
                    e.style.width === r.width && e.style.height === r.height || s()
                },
                p = ({
                    canvas: n,
                    orientation: r,
                    videoWidth: i,
                    videoHeight: d
                }) => {
                    e = n, t = r;
                    const c = document.getElementsByTagName("body")[0];
                    Object.assign(c.style, o), c.appendChild(e), window.addEventListener("resize", a), l({
                        videoWidth: i,
                        videoHeight: d
                    }), s()
                },
                h = () => {
                    e = null, t = 0, delete n.w, delete n.h, window.removeEventListener("resize", a)
                },
                g = ({
                    orientation: e
                }) => {
                    t = e, s()
                };
            return {
                pipelineModule: () => ({
                    name: "fullwindowcanvas",
                    onAttach: p,
                    onDetach: h,
                    onCameraStatusChange: c,
                    onDeviceOrientationChange: g,
                    onVideoSizeChange: d,
                    onCanvasSizeChange: m,
                    onUpdate: u
                })
            }
        }()), t)
    }
  }, function(e, n, t) {
    t(2), t(20);
    const r = t(22);
    let o = null;
  
    function i() {
        let e, n, t, o, i, a, s, l, d, c, m, u, p, h = null,
            g = () => !0,
            f = 0,
            v = !1,
            w = !1,
            x = null;
        const b = navigator.userAgent;
        let y, E = !1;
        const R = () => {
            E = !0, window.removeEventListener("devicemotion", R)
        };
        window.addEventListener("devicemotion", R);
        const k = () => {
                const e = XR8.XrDevice.deviceEstimate();
                return e.browser.inAppBrowser ? e.browser.inAppBrowser : "Mobile Safari" === e.browser.name ? "" : e.browser.name
            },
            L = e => {
                (e.data.deviceOrientation8w || e.data.deviceMotion8w) && (E = !0, window.removeEventListener("message", L))
            };
        window.addEventListener("message", L);
        const S = (n = !0) => {
                e.classList.add("hidden"), n && h.parentNode && h.parentNode.removeChild(h)
            },
            M = (t = !0) => {
                n.classList.add("fade-out"), setTimeout(() => {
                    e.classList.add("fade-out"), e.style.pointerEvents = "none", setTimeout(() => S(t), 400)
                }, 400)
            },
            C = () => {
                t.classList.add("fade-out")
            },
            T = e => {
                t.classList.add("hidden"), "NO_MICROPHONE" === e || "DENY_MICROPHONE" === e ? (() => {
                    if (b.includes("Linux")) {
                        let e;
                        const n = h.querySelectorAll(".domain-view");
                        for (let e = 0; e < n.length; e++) n[e].textContent = window.location.hostname;
                        e = navigator.userAgent.includes("SamsungBrowser") ? h.querySelectorAll(".samsung-instruction") : h.querySelectorAll(".chrome-instruction"), a.classList.remove("hidden"), e.forEach(e => {
                            e.classList.remove("hidden")
                        })
                    } else s.classList.remove("hidden"), s.getElementsByClassName("wk-app-name")[0].innerText = k()
                })() : (() => {
                    if (b.includes("Linux")) {
                        let e;
                        const n = h.querySelectorAll(".domain-view");
                        for (let e = 0; e < n.length; e++) n[e].textContent = window.location.hostname;
                        e = navigator.userAgent.includes("SamsungBrowser") ? h.querySelectorAll(".samsung-instruction") : h.querySelectorAll(".chrome-instruction"), o.classList.remove("hidden"), e.forEach(e => {
                            e.classList.remove("hidden")
                        })
                    } else i.classList.remove("hidden"), i.getElementsByClassName("wk-app-name")[0].innerText = k()
                })(), M(!1), XR8.pause(), XR8.stop()
            },
            A = () => {
                t.classList.add("hidden");
                const e = document.querySelector('meta[name="og:image"]'),
                    n = e && e.content;
                Array.from(document.querySelectorAll(".app-header-img")).forEach(e => {
                    n ? e.src = n : (e.classList.add("foreground-image"), e.src = "https://cdn.8thwall.com/web/img/almostthere/v2/android-fallback.png")
                });
                const r = document.getElementById("open_browser_android"),
                    o = window.location.href.replace(/^https:\/\//, "");
                r.href = `intent://${o}#Intent;scheme=https;action=android.intent.action.VIEW;end;`, l.classList.remove("hidden"), M(!1), XR8.pause(), XR8.stop()
            },
            _ = () => {
                t.classList.add("hidden");
                const e = document.querySelector('meta[name="og:image"]'),
                    n = e && e.content;
                Array.from(document.querySelectorAll(".app-header-img")).forEach(e => {
                    n ? e.src = n : (e.classList.add("foreground-image"), e.src = "https://cdn.8thwall.com/web/img/almostthere/v2/android-fallback.png")
                });
                const r = window.location.href,
                    o = document.querySelectorAll(".desktop-home-link");
                for (let e = 0; e < o.length; e++) o[e].textContent = r;
                const i = document.getElementById("copy_link_android");
                i.addEventListener("click", () => {
                    const e = document.createElement("input");
                    document.body.appendChild(e), e.value = r, e.select(), document.execCommand("copy"), document.body.removeChild(e), i.innerHTML = "Copied!", i.classList.add("error-copy-link-copied")
                }), d.classList.remove("hidden"), M(!1), XR8.pause(), XR8.stop()
            },
            I = () => {
                if (window.removeEventListener("devicemotion", R), window.removeEventListener("message", L), "iOS" === XR8.XrDevice.deviceEstimate().os) {
                    if (XR8.XrPermissions) {
                        const e = XR8.XrPermissions.permissions(),
                            n = XR8.requiredPermissions();
                        if (!n.has(e.DEVICE_MOTION) && !n.has(e.DEVICE_ORIENTATION)) return
                    }
                    XR8.XrDevice.deviceEstimate().osVersion.startsWith("12") ? p.classList.remove("hidden") : (m.classList.remove("hidden"), m.getElementsByClassName("wk-app-name")[0].innerText = k()), M(!1), XR8.pause(), XR8.stop()
                }
            },
            B = g => {
                if (h) return;
                const f = document.createElement("template");
                f.innerHTML = r.trim();
                const w = f.content.firstChild;
                document.getElementsByTagName("body")[0].appendChild(w), (r => {
                    h = r, e = h.querySelector("#loadBackground"), n = h.querySelector("#loadImageContainer"), t = document.getElementById("requestingCameraPermissions"), o = document.getElementById("cameraPermissionsErrorAndroid"), i = document.getElementById("cameraPermissionsErrorApple"), a = document.getElementById("microphonePermissionsErrorAndroid"), s = document.getElementById("microphonePermissionsErrorApple"), l = document.getElementById("linkOutViewAndroid"), d = document.getElementById("copyLinkViewAndroid"), p = document.getElementById("deviceMotionErrorApple"), c = document.getElementById("userPromptError"), u = document.getElementById("cameraSelectionWorldTrackingError"), m = document.getElementById("motionPermissionsErrorApple")
                })(w), v = !0, g && g.onxrloaded && (window.XR8 ? g.onxrloaded() : window.addEventListener("xrloaded", g.onxrloaded))
            },
            D = () => {
                if (g() && !v) return w && (document.cookie = "previouslyGotCameraPermission=true;max-age=31536000"), void M();
                requestAnimationFrame(() => {
                    D()
                })
            },
            P = b.includes("Linux");
        w = P && !document.cookie.includes("previouslyGotCameraPermission=true");
        const X = P && !w;
        return {
            pipelineModule: () => ({
                name: "loading",
                onStart: () => {
                    !0 !== E && I()
                },
                onUpdate: () => {
                    v && (f < 5 ? ++f : (v = !1, D()))
                },
                onBeforeRun: e => {
                    x = e && e.config, B()
                },
                onCameraStatusChange: ({
                    status: e,
                    config: n,
                    reason: r
                }) => {
                    if (XR8.XrDevice.isDeviceBrowserCompatible(x))
                        if ("requesting" === e) {
                            if (n.verbose) {
                                const e = document.getElementById("camera_mode_world_tracking_error");
                                e && (e.innerText = JSON.stringify({
                                    ua: b,
                                    device: XR8.XrDevice.deviceEstimate()
                                }))
                            }
                            XR8.XrDevice.deviceEstimate().browser.inAppBrowser && (y = setTimeout(() => {
                                "iOS" !== XR8.XrDevice.deviceEstimate().os && (XR8.pause(), XR8.stop(), A())
                            }, 3e3)), B(), X || t.classList.remove("hidden")
                        } else if ("hasStream" === e) clearTimeout(y), X || C();
                    else if ("hasVideo" === e);
                    else if ("failed" === e) {
                        clearTimeout(y);
                        const e = XR8.XrDevice.deviceEstimate();
                        if (navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) switch (e.browser.inAppBrowser) {
                            case "Sino Weibo":
                            case "WeChat":
                                _();
                                break;
                            case void 0:
                            case "Apple News":
                            case "Facebook Messenger":
                            case "Facebook":
                            case "Google Chrome":
                            case "Instagram":
                            case "Line":
                            case "LinkedIn":
                            case "Microsoft Edge":
                            case "Mozilla Firefox Focus":
                            case "Naver":
                            case "Opera Touch":
                            case "Pinterest":
                            case "Snapchat":
                                T(r);
                                break;
                            default:
                                A()
                        } else _()
                    }
                },
                onException: e => {
                    if (h) {
                        if (e instanceof Object) {
                            if ("permission" === e.type) {
                                if ("prompt" === e.permission) return M(!1), void c.classList.remove("hidden");
                                if (e.permission === XR8.XrPermissions.permissions().DEVICE_MOTION || e.permission === XR8.XrPermissions.permissions().DEVICE_ORIENTATION) return void I()
                            }
                            if ("configuration" === e.type && "reality" === e.source && "slam-front-camera-unsupported" === e.err) {
                                M(!1);
                                const n = document.getElementById("camera_mode_world_tracking_error");
                                return void(n && (n.innerHTML = e.message, u.classList.remove("hidden"), XR8.pause(), XR8.stop()))
                            }
                        }
                        C(), S()
                    }
                }
            }),
            showLoading: B,
            setAppLoadedProvider: e => {
                g = e
            }
        }
    }
    e.exports = {
        LoadingFactory: () => (o || (o = i()), o)
    }
  }, function(e, n, t) {
    var r = t(21);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    t(1)(r, o);
    console.log(e,n,t,r)
    r.locals && (e.exports = r.locals)
  }, function(e, n, t) {
    (e.exports = t(0)(!1)).push([e.i, "#loadingContainer {\n  z-index: 800;\n  font-family: 'Nunito-SemiBold', sans-serif;\n}\n\n#loadBackground {\n  z-index: 10;\n  background-color: #101118;\n  pointer-events: auto;\n}\n\n.xrextras-old-style #loadBackground {\n  background-color: white;\n}\n\n#requestingCameraPermissions {\n  z-index: 11;\n  position: absolute;\n  top: 0;\n  width: 100vw;\n  text-align: center;\n  color: white;\n  font-size: 1.8em;\n  font-family: 'Nunito-SemiBold', sans-serif;\n  background-color: #464766;\n  padding-top: 3vh;\n  padding-bottom: 1.75vh;\n}\n\n#requestingCameraIcon {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 2vh;\n  height: 5.5vh;\n}\n\n#loadImage {\n  position: absolute;\n  margin-top: -2.5em;\n  margin-left: -2.5em;\n  top: 50%;\n  left: 50%;\n  height: 5em;\n  width: 5em;\n  transform: translate(-50%, -50%);\n}\n\n/* camera and micrphone permission related styles */\n#cameraPermissionsErrorApple, #microphonePermissionsErrorApple {\n  background-color: #101118;\n}\n\n.xrextras-old-style #cameraPermissionsErrorApple, .xrextras-old-style #microphonePermissionsErrorApple {\n  background-color: white;\n}\n\n#cameraPermissionsErrorAppleMessage, #microphonePermissionsErrorAppleMessage {\n  font-size: 1.75em;\n  text-align: center;\n  max-width: 90vw;\n  margin-top: 5vh;\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n}\n\n.xrextras-old-style #cameraPermissionsErrorAppleMessage, .xrextras-old-style #microphonePermissionsErrorAppleMessage {\n  color: #323232;\n}\n\n.permissionIconIos {\n  display: block;\n  margin: 0 auto;\n  margin-top: 17vh;\n  text-align: center;\n}\n.permissionIconIos img {\n  height: 20vw;\n}\n.permissionIconIos img + img {\n  margin-left: 10vw;\n}\n\n.bottom-message {\n  color: white;\n  padding: 0 5vw;\n  position: absolute;\n  bottom: 10vh;\n  text-align: center;\n  font-size: 1.25em;\n}\n\n#cameraPermissionsErrorAndroid, #microphonePermissionsErrorAndroid {\n  padding: 2vh 0;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #101118;\n}\n\n.xrextras-old-style #cameraPermissionsErrorAndroid, .xrextras-old-style #microphonePermissionsErrorAndroid {\n  background-color: white;\n}\n\n/* device motion permission related styles */\n\n#deviceMotionErrorApple {\n  padding: 3vh 2vh;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #101118;\n  color: white;\n}\n\n.xrextras-old-style #deviceMotionErrorApple {\n  color: #2D2E43;\n  background-color: white;\n}\n\n#linkOutViewAndroid, #copyLinkViewAndroid {\n  background-color: #101118;\n}\n\n.xrextras-old-style #linkOutViewAndroid, .xrextras-old-style #copyLinkViewAndroid {\n  background-color: #fff;\n}\n\n.permission-error {\n  padding: 3vh 5vh;\n  font-size: 3.5vh;\n  color: #fff;\n  background-color: #101118;\n}\n\n.xrextras-old-style .permission-error {\n  color: #323232;\n  background-color: white;\n}\n\n.permission-error>h1 {\n  font-size: 1.3em;\n}\n\n.main-button {\n  border: none;\n  outline: none;\n  background-color: #AD50FF;\n  color: white;\n  font-size: 2.5vh;\n  display: block;\n  margin-top: 2em;\n  padding: 0.5em 1em;\n  border-radius: 0.5em;\n}\n\n.xrextras-old-style .main-button {\n  background-color: #7611B7;\n}\n\n.start-ar-button {\n  position: fixed;\n  bottom: 25%;\n  left: 50%;\n  transform: translateX(-50%);\n  font-family: 'Nunito-SemiBold', sans-serif;\n  font-weight: 800;\n  font-size: 1.5em;\n  text-align: center;\n  color: white;\n  text-decoration: none;\n  border: none;\n  background-color: #AD50FF;\n  padding: 6px 13px;\n  border-radius: 10px;\n}\n\n.xrextras-old-style .start-ar-button {\n  background-color: #7611b7;\n}\n\n.permissionIcon {\n  overflow: hidden;\n  flex: 0 0 auto;\n  margin-bottom: 2vh;\n}\n\n.permissionIcon img {\n  display: block;\n  margin: 0 auto;\n  height: 5vh;\n}\n\n#cameraSelectionWorldTrackingError {\n  z-index: 999;\n  position: absolute;\n  top: 0;\n  width: 100vw;\n  text-align: center;\n  color: black;\n  font-size: 3.7vh;\n  background-color: white;\n  padding: 3vh 0;\n}\n\n.loading-error-header {\n  font-size: 3.5vh;\n  flex: 0 0 auto;\n  color: white;\n}\n\n.xrextras-old-style .loading-error-header {\n  color: #323232;\n}\n\n.loading-error-footer {\n  font-size: 3vh;\n  line-height: 5.5vh;\n  flex: 0 0 auto;\n  text-align: center;\n  width: 80vmin;\n  color: white;\n}\n\n.xrextras-old-style .loading-error-footer {\n  color: #323232;\n}\n\n.loading-error-footer img {\n  display: block;\n  height: 5vh;\n  margin: 0 auto;\n  margin-bottom: 2vh;\n}\n\n.loading-error-instructions {\n  font-family: 'Nunito', sans-serif;\n  color: #fff;\n  font-size: 2.5vh;\n  list-style: none;\n  margin-left: 1em;\n  counter-reset: line;\n  flex: 0 0 auto;\n}\n\n.xrextras-old-style .loading-error-instructions {\n  color: #2D2E43;\n}\n\n.loading-error-instructions>li {\n  position: relative;\n  margin-bottom: 4.5vh;\n}\n\n.loading-error-instructions>li>img {\n  max-height: 3vh;\n  vertical-align: middle;\n  margin: 0 .5vh;\n}\n\n.loading-error-instructions>li:before {\n  font-family: 'Nunito', sans-serif;\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  border-radius: 3vh;\n  color: #fff;\n  background-color: #464766;\n  text-align: center;\n  left: -8vh;\n  top: -1vh;\n  font-size: 2.5vh;\n  line-height: 5.5vh;\n  counter-increment: line;\n  content: counter(line);\n}\n\n.xrextras-old-style .loading-error-instructions>li:before {\n  background-color: rgba(218, 209, 228, 128);\n}\n\n.highlight {\n  color: white;\n  font-family: 'Nunito-SemiBold', sans-serif;\n  font-weight: 800;\n}\n\n.xrextras-old-style .highlight {\n  color: #7611B7;\n}\n\n.camera-instruction-block {\n  display: inline-block;\n  background-color: #8083A2;\n  padding: 1vh;\n}\n\n.xrextras-old-style .camera-instruction-block {\n  background-color: #EBEBEB;\n}\n\n.camera-instruction-button {\n  display: inline-block;\n  padding: 1vh;\n  background-color: #359AFF;\n  color: white;\n  font-size: 2vh;\n  box-shadow: 0 .125vh .25vh rgba(0, 0, 0, 0.5);\n}\n\nbody:not(.xrextras-old-style) .prompt-box-8w {\n  background-color: #3A3B55;\n  color: #fff;\n  text-align: center;\n}\n\nbody:not(.xrextras-old-style) .prompt-button-8w {\n  background-color: #8083A2;\n  border-radius: 10px;\n}\n\nbody:not(.xrextras-old-style) .button-primary-8w {\n  background-color: #AD50FF;\n}\n\n.fade-out {\n  animation: fade-out 0.3s linear forwards;\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.spin {\n  animation: spin 1.1s cubic-bezier(0.785, 0.135, 0.150, 0.860) infinite both;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.scale {\n  -webkit-animation: scale 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite alternate-reverse both;\n  animation: scale 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite alternate-reverse both;\n}\n\n@keyframes scale {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.pulse {\n  -webkit-animation: pulse 1s ease-in-out infinite both;\n  animation: pulse 1s ease-in-out infinite both;\n}\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n", ""])
  }, function(e, n) {
    e.exports = '<div id="loadingContainer" class="absolute-fill">\n  \x3c!--Loading screen--\x3e\n  <div id="loadBackground" class="absolute-fill">\n    <div id="loadImageContainer" class="absolute-fill">\n      <img src="//cdn.8thwall.com/web/img/loading/v2/load-grad.png" id="loadImage" class="spin" />\n      <img class=\'foreground-image poweredby-img\'\n        src="//cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-2.svg" />\n    </div>\n  </div>\n\n  \x3c!--Camera Permissions--\x3e\n  <div id="requestingCameraPermissions" class="hidden">\n    <img id="requestingCameraIcon" src="//cdn.8thwall.com/web/img/loading/v2/camera.svg" />\n    Tap \'Allow\' to access AR\n  </div>\n\n  \x3c!--Permission error, camera, iOS--\x3e\n  <div id="cameraPermissionsErrorApple" class="absolute-fill hidden">\n    <div class="permissionIconIos">\n      <img class=\'foreground-image\' src="//cdn.8thwall.com/web/img/loading/v2/camera.svg" />\n    </div>\n    <p id="cameraPermissionsErrorAppleMessage">\n      Reload the page and enable camera access\n    </p>\n    <div class=\'bottom-message\'>\n      Ensure camera access is allowed in <span class=\'wk-app-name\'></span> app settings\n    </div>\n  </div>\n\n  \x3c!--Permission error, camera, Android--\x3e\n  <div id="cameraPermissionsErrorAndroid" class="absolute-fill hidden">\n    <div class="permissionIcon">\n      <img class=\'foreground-image\' src="//cdn.8thwall.com/web/img/loading/v2/camera.svg" />\n    </div>\n    <div class="loading-error-header">Let\'s enable your camera</div>\n    <ol class="loading-error-instructions">\n      <li>Tap the <img class=\'foreground-image\' src="//cdn.8thwall.com/web/img/loading/v2/dots.svg"> in the top right\n      </li>\n      <li>Tap Settings</li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Site settings</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Camera</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Blocked</span>\n        <br>\n        <span class="camera-instruction-block domain-view">apps.8thwall.com</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="camera-instruction-button">CLEAR & RESET</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight">Advanced</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight">Manage website data</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        Press and hold<br>\n        <span class="camera-instruction-block domain-view">apps.8thwall.com</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight" style="color: #1500ba">DELETE</span>\n      </li>\n    </ol>\n    <div class="loading-error-footer">\n      <img class=\'foreground-image\' style="transform: rotate(130deg);"\n        src="//cdn.8thwall.com/web/img/loading/v2/reload.svg" />\n      Then, reload the page for AR!\n    </div>\n  </div>\n\n  \x3c!--Permission error, microphone + camera, iOS--\x3e\n  <div id="microphonePermissionsErrorApple" class="absolute-fill hidden">\n    <div class=\'permissionIconIos\'>\n      <img class=\'foreground-image\' src="//cdn.8thwall.com/web/img/loading/v2/camera.svg" />\n      <img class=\'foreground-image\' src="//cdn.8thwall.com/web/img/loading/v2/microphone.svg" />\n    </div>\n    <p id="microphonePermissionsErrorAppleMessage">\n      Reload the page and enable camera + microphone access\n    </p>\n    <div class=\'bottom-message\'>\n      Ensure camera + microphone access is allowed in <span class=\'wk-app-name\'></span> app settings\n    </div>\n  </div>\n\n  \x3c!--Permission error, microphone + camera, Android--\x3e\n  <div id="microphonePermissionsErrorAndroid" class="absolute-fill hidden">\n    <div class="permissionIcon">\n      <img class=\'foreground-image\' src="//cdn.8thwall.com/web/img/loading/v2/microphone.svg" />\n    </div>\n    <div class="loading-error-header">Let\'s enable your microphone</div>\n    <ol class="loading-error-instructions">\n      <li>Tap the <img class=\'foreground-image\' src="//cdn.8thwall.com/web/img/loading/v2/dots.svg"> in the top right\n      </li>\n      <li>Tap Settings</li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Site settings</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Microphone</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Blocked</span>\n        <br>\n        <span class="microphone-instruction-block domain-view">apps.8thwall.com</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="microphone-instruction-button">CLEAR & RESET</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Do the same for Camera</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight">Advanced</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight">Manage website data</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        Press and hold<br>\n        <span class="microphone-instruction-block domain-view">apps.8thwall.com</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight" style="color: #1500ba">DELETE</span>\n      </li>\n    </ol>\n    <div class="loading-error-footer">\n      <img class=\'foreground-image\' style="transform: rotate(130deg);"\n        src="//cdn.8thwall.com/web/img/loading/v2/reload.svg" />\n      Then, reload the page for AR!\n    </div>\n  </div>\n\n  <div id="linkOutViewAndroid" class="absolute-fill hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <img id="app_img" class="app-header-img unknown">\n        <br />\n        <a id="open_browser_android" class="start-ar-button">Start AR</a>\n        <img class="foreground-image poweredby-img" src="//cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-2.svg">\n      </div>\n    </div>\n  </div>\n\n  <div id="copyLinkViewAndroid" class="absolute-fill hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <span id="error_text_header_unknown" class="open-header-unknown">\n          <h2>Open in Browser<br /> to view AR</h2>\n        </span>\n        <img id="app_img" class="app-header-img unknown">\n        <br />\n        <span id="app_link" class="desktop-home-link mobile"></span>\n        <button id="copy_link_android" class="copy-link-btn">Copy Link</button>\n        <img class="foreground-image poweredby-img" src="//cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-2.svg">\n      </div>\n    </div>\n  </div>\n\n  \x3c!--iOS devicemotion sensor is disabled --\x3e\n  <div id="deviceMotionErrorApple" class="absolute-fill hidden">\n    <div class="loading-error-header">Let\'s enable your motion sensors</div>\n    <ol class="loading-error-instructions">\n      <li>Open <img src="https://cdn.8thwall.com/web/img/loading/v1/settings-icon-ios.png"\n          style="max-height: 4vh"><b>Settings</b></li>\n      <li>Select <img src="https://cdn.8thwall.com/web/img/loading/v1/safari-icon.png"\n          style="max-height: 4vh"><b>Safari</b></li>\n      <li>Enable <span class="highlight">Motion&nbsp;&amp;&nbsp;Orientation Access</span></li>\n      <li>Reload the page <img class="foreground-image" style="transform: rotate(130deg);" src="//cdn.8thwall.com/web/img/loading/v2/reload.svg"></li>\n    </ol>\n    \x3c!-- Empty footer to take up space --\x3e\n    <div class="loading-error-footer"></div>\n  </div>\n\n  <div id="userPromptError" class="permission-error absolute-fill hidden">\n    <h1>Permissions were denied.</h1>\n    <p>You need to accept motion permissions to continue.</p>\n    <button id="reloadButton" class="main-button" onClick="window.location.reload()">Refresh</button>\n  </div>\n\n  <div id="motionPermissionsErrorApple" class="permission-error absolute-fill hidden">\n    <h1>Permissions were denied.</h1>\n    <p>You\'ve prevented the page from accessing your motion sensors.</p>\n    <p>Please close <span class=\'wk-app-name\'></span> app to reenable your motion sensors.</p>\n  </div>\n\n  <div id="cameraSelectionWorldTrackingError" class="permission-error absolute-fill hidden">\n    <p><img height="75px" src="//cdn.8thwall.com/web/img/runtimeerror/v1/computer-voxel.png" class="floater"></p>\n    <div class="error-text-header">Oops, something went wrong!</div>\n    <p id="camera_mode_world_tracking_error"></p>\n  </div>\n  <div id=\'debug-message\' style=\'color:#eee; word-break: break-all; position:absolute; top:0\'></div>\n</div>\n'
  }, function(e, n) {
    let t = null;
    e.exports = {
        PauseOnBlurFactory: () => (null == t && (t = function() {
            const e = () => {
                    XR8.pause()
                },
                n = () => {
                    XR8.resume()
                };
            return {
                pipelineModule: () => ({
                    name: "pauseonblur",
                    onAttach: () => {
                        window.addEventListener("blur", e), window.addEventListener("focus", n)
                    },
                    onDetach: () => {
                        window.removeEventListener("blur", e), window.removeEventListener("focus", n)
                    }
                })
            }
        }()), t)
    }
  }, function(e, n) {
    let t = null;
    e.exports = {
        PauseOnHiddenFactory: () => (null == t && (t = function() {
            const e = () => {
                "visible" === document.visibilityState ? XR8.resume() : XR8.resume()
            };
            return {
                pipelineModule: () => ({
                    name: "pauseonhidden",
                    onAttach: () => {
                        document.addEventListener("visibilitychange", e)
                    },
                    onDetach: () => {
                        document.removeEventListener("visibilitychange", e)
                    }
                })
            }
        }()), t)
    }
  }, function(e, n) {
    let t = null;
    e.exports = {
        PlayCanvasFactory: () => (t || (t = {
            findOneCamera: e => {
                const n = e => e.parent && n(e.parent) || e,
                    t = e => [e].concat(e.children.reduce((e, n) => e.concat(t(n)), [])),
                    r = (e => t(n(e)).filter(e => e.camera && e.camera instanceof pc.CameraComponent))(e);
                if (r.length) return r.length > 1 && console.warn(`Found too many cameras (${r.length}) in the scene graph of ${e.name}`), r[0];
                console.error("Couldn't find any cameras in the scene graph of " + e.name)
            },
            makeShadowMaterial: ({
                pc: e,
                material: n
            }) => {
                const t = n.resource || n;
                t.chunks.emissivePS = "\n      #ifdef GL2\n      #define SHADOW_SAMPLERVS sampler2DShadow\n      #else\n      #define SHADOW_SAMPLERVS sampler2D\n      #endif\n      float getShadowPCF3x3VS(SHADOW_SAMPLERVS shadowMap, vec3 shadowParams);\n\n      vec3 getEmission() {\n          float shadow = getShadowPCF3x3VS(light0_shadowMap, light0_shadowParams);\n          dAlpha = 1. - clamp(shadow + 0.5, 0., 1.);\n          return -gl_FragColor.rgb;\n      }", t.blendType = e.BLEND_PREMULTIPLIED, t.update()
            },
            trackImageTargetWithName: ({
                name: e,
                entity: n,
                app: t
            }) => {
                n.enabled = !1;
                const r = t => {
                    if (e != t.name) return;
                    const {
                        rotation: r,
                        position: o,
                        scale: i
                    } = t;
                    n.setRotation(r.x, r.y, r.z, r.w), n.setPosition(o.x, o.y, o.z), n.setLocalScale(i, i, i), n.enabled = !0
                };
                t.on("xr:imagefound", r, {}), t.on("xr:imageupdated", r, {}), t.on("xr:imagelost", t => {
                    e == t.name && (n.enabled = !1)
                }, {})
            }
        }), t)
    }
  }, function(e, n, t) {
    t(2), t(27);
    const {
        MILLISECONDS_PER_SECOND: r,
        MILLISECONDS_PER_DAY: o
    } = t(29), i = t(30), a = t(31), s = 90 * o;
    let l = null,
        d = null;
    const c = () => "LAST_INSTALL_DISMISS_TIME_KEY/" + u(),
        m = () => "NUM_VISITS_KEY/" + u(),
        u = () => {
            try {
                //return new URL([].find.call(document.scripts, e => /xrweb(\?.*)?$/.test(e.src)).src).searchParams.get("appKey")
            } catch (e) {
                //return ""
            }
        },
        p = (e, n = null) => {
            try {
                return localStorage.getItem(e) || n
            } catch (e) {
                return n
            }
        },
        h = (e, n) => {
            try {
              //localStorage.setItem(e, n)
            } catch (e) {}
        },
        g = () => {
            const e = {
                    delayAfterDismissalMillis: s,
                    minNumVisits: 2
                },
                n = {
                    preferredName: function() {
                        return (document.querySelector('meta[name="8thwall:pwa_name"]') || {
                            content: ""
                        }).content
                    },
                    preferredIconSrc: function() {
                        return (document.querySelector('meta[name="8thwall:pwa_icon"]') || {
                            content: ""
                        }).content
                    },
                    preferredInstallTitle: function() {
                        return "Add to your home screen"
                    },
                    preferredInstallSubtitle: function() {
                        return "for easy access."
                    },
                    preferredInstallButtonText: function() {
                        return "Install"
                    },
                    preferredIosInstallText: function() {
                        return 'Tap $ACTION_ICON and then "Add to Homescreen"'
                    }
                };
            let t = 0,
                o = !0,
                l = null,
                u = null,
                g = !1,
                f = null,
                v = function(e, n, t) {
                    if (!XR8.XrDevice.isDeviceBrowserCompatible(f)) return !1;
                    if ("iOS" !== XR8.XrDevice.deviceEstimate().os && !d) return !1;
                    const r = (new Date).getTime(),
                        o = e.delayAfterDismissalMillis;
                    if (n && r < n + o) return !1;
                    if (t < e.minNumVisits) return !1;
                    const i = new URL(location.href);
                    if ("pwa" === i.searchParams.get("mode") || window.matchMedia("(display-mode: standalone)").matches) return !1;
                    return !0
                },
                w = function(e, n, t) {
                    const r = document.createElement("template");
                    r.innerHTML = i.trim(), l = r.content.firstChild;
                    ("iOS" !== XR8.XrDevice.deviceEstimate().os ? l.querySelector("#android-install-action") : l.querySelector("#ios-install-action")).classList.remove("hidden");
                    const o = l.querySelector("#pwa-icon-preview");
                    o && (o.src = e.iconSrc);
                    const s = l.querySelector("#pwa-name");
                    s && (s.innerHTML = e.name);
                    const c = l.querySelector("#install-title");
                    c && (c.innerHTML = e.installTitle);
                    const m = l.querySelector("#install-subtitle");
                    m && (m.innerHTML = e.installSubtitle);
                    const u = l.querySelector("#close-button");
                    u && (u.onclick = t);
                    const p = l.querySelector("#android-install-action");
                    p && (p.innerHTML = e.installButtonText, p.onclick = () => d ? (d.prompt(), d.userChoice.then(e => {
                        "accepted" === e.outcome ? n() : t(), d = null
                    })) : (console.error("Attempting install app without `beforeinstallprompt` event"), void x()));
                    const h = l.querySelector("#ios-install-action");
                    if (h) {
                        const n = e.iosInstallText && e.iosInstallText.replace("$ACTION_ICON", a);
                        h.innerHTML = n
                    }
                    document.getElementsByTagName("body")[0].appendChild(l), installPromptShown = !0
                },
                x = function() {
                    if (!l) return;
                    document.getElementsByTagName("body")[0].removeChild(l), l = null
                };
  
            function b() {
                x()
            }
  
            function y() {
                h(c(), (new Date).getTime().toString()), x()
            }
  
            function E() {
                u && (clearTimeout(u), u = null);
                const t = parseInt(p(m(), "0"), 10),
                    o = parseInt(p(c(), "0"), 10);
                if (g && v(e, o, t)) {
                    const e = {
                        name: n.preferredName(),
                        iconSrc: n.preferredIconSrc(),
                        installTitle: n.preferredInstallTitle(),
                        installSubtitle: n.preferredInstallSubtitle(),
                        installButtonText: n.preferredInstallButtonText(),
                        iosInstallText: n.preferredIosInstallText()
                    };
                    w(e, b, y)
                } else w ? u = setTimeout(E, 5 * r) : x()
            }
  
            function R(e) {
                g = e, E()
            }
            return {
                configure: t => {
                    const {
                        promptConfig: r,
                        displayConfig: o,
                        shouldDisplayInstallPrompt: i,
                        displayInstallPrompt: a,
                        hideInstallPrompt: s
                    } = t;
                    o && (o.name && (n.preferredName = () => o.name), o.iconSrc && (n.preferredIconSrc = () => o.iconSrc), o.installButtonText && (n.preferredInstallButtonText = () => o.installButtonText), o.iosInstallText && (n.preferredIosInstallText = () => o.iosInstallText), o.installTitle && (n.preferredInstallTitle = () => o.installTitle), o.installSubtitle && (n.preferredInstallSubtitle = () => o.installSubtitle)), r && Object.assign(e, r), i && (v = i), a && (w = a), s && (x = s)
                },
                pipelineModule: function() {
                    return {
                        name: "pwa-installer",
                        onBeforeRun: e => {
                            f = e && e.config, R(!1)
                        },
                        onAttach: () => {
                            t = 0, o = !0
                        },
                        onUpdate: () => {
                            o && (t < 5 ? ++t : (o = !1, R(!0)))
                        },
                        onDetach: () => {
                            R(!1)
                        }
                    }
                },
                setDisplayAllowed: R
            }
        };
    window.addEventListener("beforeinstallprompt", (function(e) {
        e.preventDefault(), d = e
    })), window.addEventListener("load", e => {
        (() => {
            const e = m(),
                n = parseInt(p(e, "0"), 10);
            h(e, (n + 1).toString())
        })()
    }), e.exports = {
        PwaInstallerFactory: () => (l || (l = g()), l)
    }
  }, function(e, n, t) {
    var r = t(28);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    t(1)(r, o);
    r.locals && (e.exports = r.locals)
  }, function(e, n, t) {
    (e.exports = t(0)(!1)).push([e.i, ".pwa-installer-root {\n  position: fixed;\n  z-index: 1300;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  font-family: Nunito,Roboto,Arial,sans-serif;\n  font-size: 14px;\n  line-height: 1.43;\n}\n\n.pwa-installer-root .backdrop {\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  display: flex;\n  z-index: -1;\n  position: fixed;\n  align-items: center;\n  touch-action: none;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.pwa-installer-root .drawer {\n  overflow-y: visible;\n  top: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: auto;\n  max-height: 100%;\n  flex: 1 0 auto;\n  display: flex;\n  outline: 0;\n  z-index: 1200;\n  position: fixed;\n  flex-direction: column;\n  -webkit-overflow-scrolling: touch;\n  box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2),\n    0px 16px 24px 2px rgba(0,0,0,0.14),\n    0px 6px 30px 5px rgba(0,0,0,0.12);\n  color: rgba(0, 0, 0, 0.87);\n  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  background-color: #ffffff;\n}\n\n.pwa-installer-root .drawer .container {\n  display: inline-block;\n}\n\n.pwa-installer-root .drawer .container .content {\n  display: flex;\n  padding: 2em;\n  align-items: center;\n  flex-direction: column;\n}\n\n.pwa-installer-root .drawer .container .content .close-button {\n  padding: 0;\n  position: absolute;\n  align-self: flex-end;\n  border: 0;\n  cursor: pointer;\n}\n\n.pwa-installer-root .drawer .container .content .close-button .close::before{\n  position: absolute;\n  content: ' ';\n  height: 2em;\n  width: 2px;\n  background-color: #333;\n}\n\n.pwa-installer-root .drawer .container .content .close-button .close::after{\n  position: absolute;\n  content: ' ';\n  height: 2em;\n  width: 2px;\n  background-color: #333;\n}\n\n.close::before {\n  transform: rotate(45deg);\n}\n\n.pwa-installer-root .drawer .container .content .close-button .close::after {\n  transform: rotate(-45deg);\n}\n\n.pwa-installer-root .drawer .container .content .icon-container {\n  filter: drop-shadow(0px 1px 2px rgba(0,0,0,0.3));\n}\n\n.pwa-installer-root .drawer .container .content .icon-container .icon-preview {\n  width: 6em;\n  height: 6em;\n  margin-top: -5em;\n  clip-path: inset(6.36% round 17.543%);\n  -webkit-clip-path: inset(6.36% round 17.543%);\n  object-fit: fill;\n}\n\n.pwa-installer-root .drawer .container .content .pwa-name {\n  margin-top: 0em;\n  font-weight: 700;\n  margin-bottom: 1em;\n}\n\n.pwa-installer-root .drawer .container .content .install-title {\n  margin: 0em;\n  font-weight: bold;\n}\n\n.pwa-installer-root .drawer .container .content .install-subtitle {\n  margin: 0em;\n}\n\n.pwa-installer-root .drawer .container .content .install-action-text {\n  margin: 0em;\n}\n\n.pwa-installer-root .drawer .container .content .install-action-text svg {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  font-size: 1.5rem;\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  flex-shrink: 0;\n  user-select: none;\n}\n\n.pwa-installer-root .drawer .container .content .install-button {\n  color: #FFFFFF;\n  margin-top: 1em;\n  background-color: #7611B6;\n  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),\n    0px 2px 2px 0px rgba(0,0,0,0.14),\n    0px 1px 5px 0px rgba(0,0,0,0.12);\n  padding: 6px 16px;\n  font-size: 0.875rem;\n  min-width: 64px;\n  box-sizing: border-box;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  font-weight: 500;\n  border-radius: 4px;\n  text-transform: uppercase;\n  font-family: Nunito,Roboto,Arial,sans-serif;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  vertical-align: center;\n  text-decoration: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n}\n", ""])
  }, function(e, n, t) {
    "use strict";
    t.r(n), t.d(n, "DAYS_PER_WEEK", (function() {
        return r
    })), t.d(n, "HOURS_PER_DAY", (function() {
        return o
    })), t.d(n, "HOURS_PER_WEEK", (function() {
        return i
    })), t.d(n, "MINUTES_PER_HOUR", (function() {
        return a
    })), t.d(n, "MINUTES_PER_DAY", (function() {
        return s
    })), t.d(n, "MINUTES_PER_WEEK", (function() {
        return l
    })), t.d(n, "SECONDS_PER_MINUTE", (function() {
        return d
    })), t.d(n, "SECONDS_PER_HOUR", (function() {
        return c
    })), t.d(n, "SECONDS_PER_DAY", (function() {
        return m
    })), t.d(n, "SECONDS_PER_WEEK", (function() {
        return u
    })), t.d(n, "MILLISECONDS_PER_SECOND", (function() {
        return p
    })), t.d(n, "MILLISECONDS_PER_MINUTE", (function() {
        return h
    })), t.d(n, "MILLISECONDS_PER_HOUR", (function() {
        return g
    })), t.d(n, "MILLISECONDS_PER_DAY", (function() {
        return f
    })), t.d(n, "MILLISECONDS_PER_WEEK", (function() {
        return v
    }));
    const r = 7,
        o = 24,
        i = o * r,
        a = 60,
        s = a * o,
        l = a * i,
        d = 60,
        c = d * a,
        m = d * s,
        u = d * l,
        p = 1e3,
        h = p * d,
        g = p * c,
        f = p * m,
        v = p * u
  }, function(e, n) {
    e.exports = "<div class='pwa-installer-root'>\n  <div class='backdrop'></div>\n  <div class='drawer'>\n    <div class='container'>\n      <div class='content'>\n        <button id='close-button' class='close-button'>\n          <span class='close'></span>\n        </button>\n        <div class='icon-container'>\n          <img id='pwa-icon-preview' class='icon-preview' />\n        </div>\n        <p id='pwa-name' class='pwa-name'></p>\n        <p id='install-title' class='install-title'></p>\n        <p id='install-subtitle' class='install-subtitle'>for easy access.</p>\n        <p id='ios-install-action' class='install-action-text hidden'></p>\n        <button id='android-install-action' class='install-button hidden'></button>\n      </div>\n    </div>\n  </div>\n</div>\n"
  }, function(e, n) {
    e.exports = '<svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">\n  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g transform="translate(6, 7)" fill="#4A90E2">\n      <g>\n        <path d="M6.39209659,3.4962638 L6.39209659,9.59103653 C6.39209659,\n          9.98342289 6.07402841,10.3013206 5.6818125,10.3013206 C5.28959659,\n          10.3013206 4.97152841,9.98342289 4.97152841,9.59103653 L4.97152841,\n          3.4962638 L4.17516477,4.29262744 C3.89783523,4.56995698 3.44817614,\n          4.56995698 3.17084659,4.29262744 C2.89351705,4.01529789 2.89351705,\n          3.5656388 3.17084659,3.28830925 L5.17965341,1.27950244 C5.45698295,\n          1.00217289 5.90664205,1.00217289 6.18397159,1.27950244 L8.19277841,\n          3.28830925 C8.47010795,3.5656388 8.47010795,4.01529789 8.19277841,\n          4.29262744 C7.91561932,4.56995698 7.46578977,4.56995698 7.18846023,\n          4.29262744 L6.39209659,3.4962638 Z M9.94317614,4.96852841 C10.7277784,\n          4.96852841 11.3635739,5.60449432 11.3635739,6.38909659 L11.3635739,\n          13.4912557 C11.3635739,14.275858 10.7277784,14.9116534 9.94317614,\n          14.9116534 L1.42044886,14.9116534 C0.635846591,14.9116534 -0.000119318182,\n          14.275858 -0.000119318182,13.4912557 L-0.000119318182,\n          6.38909659 C-0.000119318182,5.60449432 0.635846591,4.96852841 1.42044886,\n          4.96852841 L2.1305625,4.96852841 C2.52294886,4.96852841 2.84084659,\n          5.28659659 2.84084659,5.6788125 C2.84084659,6.07102841 2.52294886,\n          6.38909659 2.1305625,6.38909659 L1.42044886,6.38909659 L1.42044886,\n          13.4912557 L9.94317614,13.4912557 L9.94317614,6.38909659 L9.23289205,\n          6.38909659 C8.84067614,6.38909659 8.52277841,6.07102841 8.52277841,\n          5.6788125 C8.52277841,5.28659659 8.84067614,4.96852841 9.23289205,\n          4.96852841 L9.94317614,4.96852841 Z" id="Fill-1">\n        </path>\n      </g>\n    </g>\n  </g>\n</svg>\n'
  }, function(e, n, t) {
    t(2), t(33);
    const r = t(35);
    let o = null;
    const i = () => {
        let e = !1,
            n = null;
        return {
            pipelineModule: () => ({
                name: "error",
                onStart: () => {
                    e = !0
                },
                onException: t => {
                    if (!e) return;
                    if (n) return;
                    console.error("[RuntimeError] XR caught an error; stopping.", t);
                    const o = document.createElement("template");
                    o.innerHTML = r.trim(), n = o.content.firstChild, document.getElementsByTagName("body")[0].appendChild(n), document.getElementById("error_msg_unknown").classList.remove("hidden"), XR8.pause(), XR8.stop()
                }
            }),
            hideRuntimeError: () => {
                n && (n.parentNode.removeChild(n), n = null)
            }
        }
    };
    e.exports = {
        RuntimeErrorFactory: () => (o || (o = i()), o)
    }
  }, function(e, n, t) {
    var r = t(34);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    t(1)(r, o);
    r.locals && (e.exports = r.locals)
  }, function(e, n, t) {
    (e.exports = t(0)(!1)).push([e.i, "#runtimeErrorContainer {\n  z-index: 800;\n  background-color: #101118;\n}\n\n.xrextras-old-style #runtimeErrorContainer {\n  background-color: #FFFFFF;\n}\n\n.floater {\n  -webkit-filter: drop-shadow(5px 5px 5px #222);\n}\n", ""])
  }, function(e, n) {
    e.exports = '<div id="runtimeErrorContainer" class="absolute-fill">\n  <div id="error_msg_unknown" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img height="75px" src="//cdn.8thwall.com/web/img/runtimeerror/v1/computer-voxel.png" class="floater"></p>\n        <div class="error-text-header">Oops, something went wrong!</div>\n        <div class="error-text-hint">\n          <p id="error_unknown_detail" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'
  }, function(e, n) {
    let t = null;
    e.exports = {
        StatsFactory: () => (null == t && (t = {
            pipelineModule: () => {
                let e = null;
                return {
                    name: "stats",
                    onBeforeRun: () => {
                        return window.Stats ? Promise.resolve() : (e = "https://cdn.8thwall.com/web/aframe/stats.16.min.js", new Promise((n, t) => document.head.appendChild(Object.assign(document.createElement("script"), {
                            async: !0,
                            onload: n,
                            onError: t,
                            src: e
                        }))));
                        var e
                        console.log(window.Stats)
                    },
                    onAttach: () => {
                        e = new Stats, e.showPanel(0), e.dom.style.zIndex = 5e3, e.dom.style.position = "absolute", e.dom.style.top = "0px", e.dom.style.left = "0px", document.body.appendChild(e.dom)
                    },
                    onUpdate: () => {
                        e.update()
                    },
                    onDetach: () => {
                        document.body.removeChild(e.dom), e = null
                    }
                }
            }
        }), t)
    }
  }, function(e, n) {
    let t = null;
    const r = ({
            opacity: e,
            tex: n,
            metalness: t,
            normals: r,
            roughness: o,
            alpha: i
        }) => {
            let a = null;
            const s = {};
            return e < 1 && (s.transparent = !0, s.opacity = Math.max(0, e)), n && (a = a || new THREE.TextureLoader, s.map = a.load(n)), t && (a = a || new THREE.TextureLoader, s.metalnessMap = a.load(t)), r && (a = a || new THREE.TextureLoader, s.normalMap = a.load(r)), o && (a = a || new THREE.TextureLoader, s.roughnessMap = a.load(o)), i && (a = a || new THREE.TextureLoader, s.alphaMap = a.load(i)), new THREE.MeshStandardMaterial(s)
        },
        o = ({
            opacity: e,
            tex: n,
            alpha: t
        }) => {
            let r = null;
            const o = {};
            return e < 1 && (o.transparent = !0, o.opacity = Math.max(0, e)), n && (r = r || new THREE.TextureLoader, o.map = r.load(n)), t && (r = r || new THREE.TextureLoader, o.alphaMap = r.load(t)), new THREE.MeshBasicMaterial(o)
        },
        i = ({
            opacity: e,
            video: n,
            alpha: t
        }) => {
            let r = null;
            const o = {};
            return e < 1 && (o.transparent = !0, o.opacity = Math.max(0, e)), n && (o.map = new THREE.VideoTexture(n)), t && (r = r || new THREE.TextureLoader, o.alphaMap = r.load(t)), new THREE.MeshBasicMaterial(o)
        },
        a = (e, n) => {
            const t = new THREE.Geometry;
            for (let n = 0; n < e.pointsPerDetection; n++) t.vertices.push(new THREE.Vector3);
            const r = [];
            for (let n = 0; n < e.uvs.length; ++n) {
                const t = e.uvs[n];
                r.push(new THREE.Vector2(t.u, t.v))
            }
            const {
                indices: o
            } = e;
            for (let e = 0; e < o.length; e += 1) {
                const n = o[e],
                    i = new THREE.Face3(n.a, n.b, n.c);
                i.vertexNormals[0] = new THREE.Vector3, i.vertexNormals[1] = new THREE.Vector3, i.vertexNormals[2] = new THREE.Vector3, t.faces.push(i), t.faceVertexUvs[0].push([r[n.a], r[n.b], r[n.c]])
            }
            const i = new THREE.Mesh(t, n);
            return {
                mesh: i,
                show: ({
                    detail: e
                }) => {
                    const {
                        vertices: n,
                        normals: t
                    } = e;
                    n.forEach((e, n) => {
                        i.geometry.vertices[n].x = e.x, i.geometry.vertices[n].y = e.y, i.geometry.vertices[n].z = e.z
                    }), i.geometry.verticesNeedUpdate = !0, i.geometry.faces.forEach(e => {
                        e.vertexNormals[0].copy(t[e.a]), e.vertexNormals[1].copy(t[e.b]), e.vertexNormals[2].copy(t[e.c])
                    }), i.geometry.normalsNeedUpdate = !0, i.visible = !0
                },
                hide: () => {
                    i.visible = !1
                }
            }
        },
        s = (e, n, t, r) => {
            switch (e.type) {
                case "FLAT":
                    return ((e, n, t) => new THREE.PlaneGeometry(e.scaledWidth * (t || 1), e.scaledHeight * (n || 1)))(e, t, r);
                case "CONICAL":
                case "CYLINDRICAL":
                    return ((e, n, t, r) => {
                        const o = e.arcLengthRadians * (r || 1);
                        return new THREE.CylinderGeometry(e.radiusTop, e.radiusBottom, t ? e.height * t : e.height, 50, 1, !0, (n ? 0 : (2 * Math.PI - o) / 2) + Math.PI, n ? 2 * Math.PI : o)
                    })(e, !!n, t, r);
                default:
                    return null
            }
        },
        l = () => ({
            basicMaterial: o,
            createTargetGeometry: s,
            faceMesh: a,
            pbrMaterial: r,
            videoMaterial: i
        });
    e.exports = {
        ThreeExtrasFactory: () => (null == t && (t = l()), t)
    }
  }, function(e, n, t) {
    var r = t(39);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    t(1)(r, o);
    r.locals && (e.exports = r.locals)
  }, function(e, n, t) {
    (e.exports = t(0)(!1)).push([e.i, "/* Preview Container */\n\n#previewContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: space-between;\n  z-index: 30;\n  opacity: 0.0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n#previewContainer.fade-in {\n  transition: 0.5s opacity;\n  opacity: 1;\n}\n\n#videoPreview, #imagePreview {\n  display: none;\n  max-width: 90vw;\n  max-height: calc(88vh - 12vmin);\n  border-radius: 10px;\n  border: 1vmin solid white;\n  background-color: white;\n}\n\n.icon-button img, #videoPreview, #imagePreview {\n  filter: drop-shadow(0 0 2px #333);\n}\n\n.video-preview #videoPreview {\n  display: block;\n}\n\n.image-preview #imagePreview {\n  display: block;\n}\n\n/* Top Bar */\n\n.top-bar {\n  position: relative;\n  flex: 1 0 0;\n}\n\n.preview-box {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.icon-button {\n  padding: 4vmin;\n  user-select: none;\n  -webkit-user-select: none;\n  cursor: pointer;\n}\n\n.icon-button img {\n  display: block;\n  height: 7.5vmin;\n}\n\n#toggleMuteButton, #closePreviewButton {\n  position: absolute;\n  z-index: 1;\n}\n\n#toggleMuteButton {\n  left: 0;\n  bottom: 0;\n  display: none;\n}\n\n.video-preview #toggleMuteButton {\n  display: block;\n}\n\n#closePreviewButton {\n  top: 0;\n  right: 0;\n}\n\n/* Bottom Bar */\n\n.bottom-bar {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  margin: 0 5vmin;\n}\n\n.style-reset {\n  background: none;\n  border: none;\n  outline: none;\n  box-shadow: none !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.style-reset:focus { outline:0; }\n\n#actionButton {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n  padding: 0.3em 0.5em 0.3em 0.5em;\n  user-select: none;\n  -webkit-user-select: none;\n  font-family: 'Nunito', sans-serif;\n  text-align: right;\n  color: white;\n  background-color: #AD50FF;\n  border-radius: 0.5em;\n  font-size: 5vmin;\n  min-width: 3.25em;\n}\n\n#actionButton img {\n  height: 0.8em;\n  margin-left: 0.4em;\n}\n\n.disabled-download.video-preview #openSafariText {\n  display: block;\n  font-size: 5vmin;\n}\n\n.disabled-download.image-preview #tapAndHoldText {\n  display: block;\n  font-size: 7.5vmin;\n}\n\n#openSafariText, #tapAndHoldText {\n  display: none;\n  padding: 0.3em 0.5em 0.3em 0.5em;\n  user-select: none;\n  -webkit-user-select: none;\n  font-family: 'Nunito', sans-serif;\n  text-align: center;\n  color: white;\n  filter: drop-shadow(0px 1px 2px #333);\n}\n\n#previewContainer:not(.downloaded) .show-after-download {\n  display: none;\n}\n", ""])
  }, function(e, n, t) {
    var r = t(41);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    t(1)(r, o);
    r.locals && (e.exports = r.locals)
  }, function(e, n, t) {
    (e.exports = t(0)(!1)).push([e.i, ".recorder-container {\n  position: fixed;\n  width: 25vmin;\n  height: 25vmin;\n  max-width: 10em;\n  max-height: 10em;\n  bottom: 3vmin;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 20;\n  transition: 0.5s opacity;\n}\n\n#recorder-button {\n  display: block;\n  border: none;\n  outline: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  position: absolute;\n  background: white;\n  border-radius: 50%;\n  color: transparent;\n  top: 0;\n  left: 0;\n  transform-origin: 50% 50%;\n  transform: scale(0.6);\n  transition: 0.3s border-radius, 0.3s transform;\n  width: 100%;\n  height: 100%;\n}\n\n.progress-container {\n  display: block;\n  position: absolute;\n  top:0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0.9);\n  transition: 0.3s transform, 0.3s opacity;\n}\n\n.progress-track, .progress-bar, .loading-circle {\n  fill: transparent;\n  stroke-width: 3;\n}\n\n.progress-track {\n  stroke: white;\n}\n\n.progress-bar {\n  opacity: 0;\n  transition: 0;\n  transform-origin: 50% 50%;\n  stroke: white;\n  transform: rotate(-90deg);\n  stroke-dasharray: 100.531 100.531;\n  stroke-dashoffset: 100;\n}\n\n.recording .progress-container, .loading .progress-container {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.recording .progress-track, .loading .progress-track {\n  transition: 0.8s stroke;\n  stroke: #fff5;\n}\n\n.recording .progress-bar {\n  opacity: 1;\n}\n\n.active #recorder-button {\n  transform: scale(0.5);\n}\n\n.active:not(.fixed-mode) #recorder-button {\n  background: #fff5;\n}\n\n.fixed-mode #recorder-button {\n  border-radius: 15%;\n  transform: scale(0.42);\n}\n\n.flash-element {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: white;\n  opacity: 0;\n  transition: 0.6s opacity;\n  pointer-events: none;\n  z-index: 40;\n}\n\n.flash-element.flashing {\n  transition: 0s opacity;\n  opacity: 1;\n  pointer-events: auto;\n  z-index: 100;\n}\n\n.loading-circle {\n  stroke-dasharray: 25 25 25 25;\n  stroke-dashoffset: 0;\n  stroke: white;\n  opacity: 0;\n  transform-origin: 50% 50%;\n}\n\n@keyframes record-button-spin {\n  0% {\n  transform: rotate(-90deg);\n  }\n  100% {\n    transform: rotate(270deg);\n  }\n}\n\n.loading .loading-circle {\n  animation: record-button-spin 1.1s linear infinite both;\n  opacity: 1;\n}\n\n.fade-container {\n  opacity: 0;\n  pointer-events: none;\n}\n", ""])
  }, function(e, n, t) {
    var r = t(43);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    t(1)(r, o);
    r.locals && (e.exports = r.locals)
  }, function(e, n, t) {
    (e.exports = t(0)(!1)).push([e.i, "* {\n  font-family: inherit;\n  box-sizing: inherit;\n}\n\n.absolute-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.error-text-outer-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.error-text-container {\n  flex: 0 0 auto;\n  text-align: center;\n  width: 100%;\n}\n\n.error-text-header {\n  font-family: 'Nunito', sans-serif;\n  font-size: 16pt;\n  color: white;\n  letter-spacing: .37;\n  line-height: 23pt;\n}\n\n.xrextras-old-style .error-text-header {\n  color: #323232;\n}\n\n.error-text-hint {\n  font-family: 'Nunito', sans-serif;\n  font-size: 14pt;\n  color: #A8A8BA;\n  letter-spacing: .37;\n}\n\n.error-text-detail {\n  font-family: 'Nunito', sans-serif;\n  font-size: 14pt;\n  color: white;\n}\n\n.xrextras-old-style .error-text-detail {\n  color: #323232;\n}\n\n.error-margin-top-5 {\n  margin-top: 5vh;\n}\n\n.error-margin-top-20 {\n  margin-top: 20vh;\n}\n\n.desktop-home-link {\n  font-family: 'Nunito-SemiBold', sans-serif;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 10px;\n  color: white;\n  background-color: #464766;\n  -webkit-user-select: all;\n  /* Chrome 49+ */\n  -moz-user-select: all;\n  /* Firefox 43+ */\n  -ms-user-select: all;\n  /* No support yet */\n  user-select: all;\n  pointer-events: auto;\n}\n\n.xrextras-old-style .desktop-home-link {\n  color: #323232;\n  background-color:rgba(173, 80, 255, 0.2);\n}\n\n.desktop-home-link.mobile {\n  position: fixed;\n  width: 100vw;\n  font-size: 1.1em;\n  font-weight: 800;\n  border-radius: 0px;\n  bottom: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.xrextras-old-style .foreground-image {\n  filter: invert(1);\n}\n", ""])
  }, function(e, n, t) {
    "use strict";
    t.r(n), t.d(n, "MediaRecorder", (function() {
        return re
    }));
    var r = t(4);
    t(38);
    const o = {
            enableEndCard: !0,
            footerImageUrl: "https://cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-2.svg"
        },
        i = {};
    let a, s = !1;
    const l = () => {
            XR8.MediaRecorder.configure(o)
        },
        d = new Set(["watermarkImageUrl", "watermarkMaxWidth", "watermarkMaxHeight", "watermarkLocation", "fileNamePrefix"]),
        c = (e = {}) => {
            Object.keys(e).forEach(n => {
                const t = e[n];
                void 0 !== t && (d.has(n) ? i[n] = t : o[n] = t)
            }), (() => {
                const e = i.watermarkImageUrl;
                if (e === a) return;
                if (a = e, !a) return void(i.watermarkImage = null);
                const n = document.createElement("img");
                n.onload = () => {
                    i.watermarkImage = n
                }, n.onerror = () => {
                    console.error("Failed to load image from " + n.src), i.watermarkImage = null
                }, n.setAttribute("crossorigin", "anonymous"), n.setAttribute("src", a)
            })(), window.XR8 ? l() : s || (s = !0, window.addEventListener("xrloaded", l, {
                once: !0
            }))
        },
        m = () => i,
        u = () => m().fileNamePrefix || "my-capture-",
        p = e => {
            const n = document.createElement("a");
            Object.assign(n, e), document.body.appendChild(n), n.click(), document.body.removeChild(n)
        };
    let h, g, f, v, w = null,
        x = null,
        b = null,
        y = !1,
        E = null;
    const R = () => {
            w = null, x && URL.revokeObjectURL(x), clearTimeout(E), h.style.removeProperty("pointer-events"), x = null, y = !1, h.classList.remove("fade-in"), h.classList.remove("image-preview"), h.classList.remove("video-preview"), h.classList.remove("downloaded")
        },
        k = e => {
            f.muted = e, v.src = e ? "//cdn.8thwall.com/web/img/mediarecorder/sound-off-v1.svg" : "//cdn.8thwall.com/web/img/mediarecorder/sound-on-v1.svg"
        },
        L = () => {
            R(), g.removeAttribute("src"), f.pause(), f.removeAttribute("src"), window.dispatchEvent(new CustomEvent("mediarecorder-previewclosed"))
        },
        S = () => {
            p({
                href: x,
                download: b
            }), h.classList.add("downloaded")
        },
        M = () => {
            p({
                href: "shareddocuments:///private/var/mobile/Library/Mobile Documents/com~apple~CloudDocs/Downloads/" + b,
                target: "_blank"
            })
        },
        C = () => {
            const e = {
                title: "",
                text: "",
                files: [new File([w], b, {
                    type: y ? "image/jpeg" : "video/mp4",
                    lastModified: Date.now()
                })]
            };
            navigator.share(e)
        },
        T = () => {
            const e = new Date;
            return [e.getHours(), e.getMinutes(), e.getSeconds()].map(e => e.toString().padStart(2, "0")).join("")
        },
        A = () => {
            h.classList.add("fade-in"), window.dispatchEvent(new CustomEvent("mediarecorder-previewopened")), clearTimeout(E), E = setTimeout(() => {
                h.style.pointerEvents = "auto"
            }, 100)
        },
        _ = e => (({
            videoBlob: e
        }) => {
            R(), w = e, x = URL.createObjectURL(e), b = `${u()}${T()}.mp4`, h.classList.add("video-preview"), f.oncanplaythrough = () => {
                f.oncanplaythrough = null, A(), k(!1), f.play().then(() => {
                    "iOS" === window.XR8.XrDevice.deviceEstimate().os && (f.pause(), f.play())
                }).catch(() => {
                    k(!0), f.play()
                })
            }, f.src = x, f.load()
        })(e.detail),
        I = e => (({
            blob: e
        }) => {
            R(), w = e, x = URL.createObjectURL(e), b = `${u()}${T()}.jpg`, y = !0;
            const n = new FileReader;
            n.readAsDataURL(e), n.onloadend = () => {
                g.src = n.result, h.classList.add("image-preview"), A()
            }
        })(e.detail),
        B = (e = {}) => {
            document.body.insertAdjacentHTML("beforeend", r), h = document.getElementById("previewContainer"), g = document.getElementById("imagePreview"), f = document.getElementById("videoPreview"), v = document.getElementById("muteButtonImg");
            const n = document.getElementById("downloadButton"),
                t = document.getElementById("actionButton"),
                o = document.getElementById("actionButtonText"),
                i = document.getElementById("actionButtonImg"),
                a = ["Microsoft Edge", "Google Chrome", "Mozilla Firefox Focus", "Opera Touch", "Pinterest", "Snapchat", "Instagram", "Facebook", "Facebook Messenger", "Line", "LinkedIn", "Naver", "Baidu"].includes(window.XR8.XrDevice.deviceEstimate().browser.inAppBrowser) || "Firefox" === window.XR8.XrDevice.deviceEstimate().browser.name,
                s = {
                    files: [new File([new Blob], "tmp.mp4", {
                        type: "video/mp4",
                        lastModified: Date.now()
                    })]
                };
            navigator.canShare && navigator.canShare(s) ? (o.textContent = e.actionButtonShareText || "Share", i.src = "//cdn.8thwall.com/web/img/mediarecorder/share-v1.svg", t.addEventListener("click", C)) : "iOS" === window.XR8.XrDevice.deviceEstimate().os && a ? (h.classList.add("disabled-download"), t.parentNode.removeChild(t), n.parentNode.removeChild(n)) : "iOS" === window.XR8.XrDevice.deviceEstimate().os ? (o.textContent = e.actionButtonViewText || "View", i.src = "//cdn.8thwall.com/web/img/mediarecorder/view-v1.svg", t.addEventListener("click", M), t.classList.add("show-after-download")) : t.parentNode.removeChild(t), document.getElementById("toggleMuteButton").addEventListener("click", () => {
                k(!f.muted)
            }), window.addEventListener("mediarecorder-recordcomplete", _), window.addEventListener("mediarecorder-photocomplete", I), document.getElementById("closePreviewButton").addEventListener("click", L), document.getElementById("downloadButton") && n.addEventListener("click", S), c()
        },
        D = () => {
            h.parentNode.removeChild(h), R(), b = null, h = null, g = null, f = null, v = null, window.removeEventListener("mediarecorder-recordcomplete", _), window.removeEventListener("mediarecorder-photocomplete", I)
        };
    var P = t(5);
    t(40);
    const X = e => {
            switch (e) {
                case "topLeft":
                case "topMiddle":
                case "topRight":
                    return 0;
                case "bottomLeft":
                case "bottomMiddle":
                case "bottomRight":
                default:
                    return 2
            }
        },
        O = e => {
            switch (e) {
                case "topLeft":
                case "bottomLeft":
                    return 0;
                case "topMiddle":
                case "bottomMiddle":
                    return 1;
                case "topRight":
                case "bottomRight":
                default:
                    return 2
            }
        },
        N = (e, n, t) => {
            switch (e) {
                case 0:
                    return 0;
                case 1:
                    return t / 2 - n / 2;
                case 2:
                default:
                    return t - n
            }
        },
        j = e => {
            const n = m();
            if (!n.watermarkImage) return;
            const {
                watermarkImage: t,
                watermarkLocation: r,
                watermarkMaxWidth: o,
                watermarkMaxHeight: i
            } = n, a = t.naturalWidth, s = t.naturalHeight, l = e.canvas.width, d = e.canvas.height, c = l * (o || 20) / 100, u = d * (i || 20) / 100, {
                width: p,
                height: h
            } = ((e, n, t, r) => {
                const o = Math.min(t / e, r / n);
                return {
                    width: e * o,
                    height: n * o
                }
            })(a, s, c, u), {
                x: g,
                y: f
            } = ((e, n, t, r, o) => ({
                x: N(O(o), e, t),
                y: N(X(o), n, r)
            }))(p, h, l, d, r);
            e.drawImage(n.watermarkImage, g, f, p, h)
        };
    let F, H, z, q = "standard",
        U = "waiting",
        V = null,
        W = !1;
    const G = () => {
            F.classList.remove("fade-container"), F.classList.remove("active"), F.classList.remove("recording"), F.classList.remove("loading"), F.classList.remove("fixed-mode"), H.classList.remove("flashing"), clearTimeout(V), W = !1, U = "waiting"
        },
        Y = () => {
            G(), F.classList.add("fade-container")
        },
        $ = () => {
            G()
        },
        K = () => {
            U = "flash", H.classList.add("flashing"), window.XR8.CanvasScreenshot.takeScreenshot({
                onProcessFrame: ({
                    ctx: e
                }) => {
                    j(e)
                }
            }).then(e => {
                const n = atob(e),
                    t = new ArrayBuffer(n.length),
                    r = new Uint8Array(t);
                for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
                const o = new Blob([t], {
                    type: "image/jpeg"
                });
                G(), window.dispatchEvent(new CustomEvent("mediarecorder-photocomplete", {
                    detail: {
                        blob: o
                    }
                }))
            }).catch(() => {
                G()
            })
        },
        J = () => {
            "recording" === U && (F.classList.remove("fixed-mode"), F.classList.remove("recording"), F.classList.add("loading"), U = "loading")
        },
        Q = () => {
            "recording" === U && (XR8.MediaRecorder.stopRecording(), J())
        },
        Z = () => {
            "active" === U && (U = "recording", F.classList.add("recording"), XR8.MediaRecorder.recordVideo({
                onVideoReady: e => window.dispatchEvent(new CustomEvent("mediarecorder-recordcomplete", {
                    detail: e
                })),
                onStop: () => J(),
                onError: () => G(),
                onProcessFrame: ({
                    elapsedTimeMs: e,
                    maxRecordingMs: n,
                    ctx: t
                }) => {
                    const r = 1 - e / n;
                    z.style.strokeDashoffset = "" + 100 * r, j(t)
                }
            }))
        },
        ee = e => {
            e.preventDefault(), W || (W = !0, "fixed" === q ? "waiting" === U ? (U = "active", F.classList.add("fixed-mode"), F.classList.add("active"), Z()) : "recording" === U && Q() : "photo" === q ? (F.classList.add("active"), K()) : "waiting" === U && "waiting" === U && (U = "active", F.classList.add("active"), V = setTimeout(Z, 300)))
        },
        ne = () => {
            W && (W = !1, "standard" === q && ("active" === U && "active" === U && (clearTimeout(V), K()), "recording" === U && Q()))
        };
    let te = null;
    const re = (null === te && (te = {
        initMediaPreview: B,
        removeMediaPreview: D,
        initRecordButton: () => {
            window.XR8.addCameraPipelineModule(XR8.MediaRecorder.pipelineModule()), document.body.insertAdjacentHTML("beforeend", P), F = document.querySelector("#recorder"), H = document.querySelector("#flashElement"), z = document.querySelector("#progressBar");
            const e = document.querySelector("#recorder-button");
            e.addEventListener("touchstart", ee), e.addEventListener("mousedown", ee), window.addEventListener("mouseup", ne), window.addEventListener("touchend", ne), window.addEventListener("mediarecorder-previewclosed", $), window.addEventListener("mediarecorder-previewopened", Y), c()
        },
        removeRecordButton: () => {
            window.XR8.removeCameraPipelineModule(window.XR8.MediaRecorder.pipelineModule().name), F.parentNode.removeChild(F), H.parentNode.removeChild(H), window.removeEventListener("mouseup", ne), window.removeEventListener("touchend", ne), window.removeEventListener("mediarecorder-previewclosed", $), window.removeEventListener("mediarecorder-previewopened", Y), G(), F = null, H = null, z = null
        },
        configure: c,
        setCaptureMode: e => {
            switch (e) {
                case "photo":
                case "fixed":
                    q = e;
                    break;
                default:
                    q = "standard"
            }
        }
    }), te)
  }]);