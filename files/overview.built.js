! function() {
	function e(t, n, r) {
		function i(s, a) {
			if (!n[s]) {
				if (!t[s]) {
					var l = "function" == typeof require && require;
					if (!a && l) return l(s, !0);
					if (o) return o(s, !0);
					var c = new Error("Cannot find module '" + s + "'");
					throw c.code = "MODULE_NOT_FOUND", c
				}
				var u = n[s] = {
					exports: {}
				};
				t[s][0].call(u.exports, function(e) {
					var n = t[s][1][e];
					return i(n ? n : e)
				}, u, u.exports, e, t, n, r)
			}
			return n[s].exports
		}
		for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) i(r[s]);
		return i
	}
	return e
}()({
	1: [function(e, t, n) {
		"use strict";

		function r() {
			this._createElemnts(), this._bindEvents()
		}
		var i = r.prototype;
		i._bindEvents = function() {
			this._onResize = this._resize.bind(this)
		}, i._createElemnts = function() {
			this.span = document.createElement("span");
			var e = this.span.style;
			e.visibility = "hidden", e.position = "absolute", e.top = "0", e.bottom = "0", e.zIndex = "-1", this.span.innerHTML = "&nbsp;", this.iframe = document.createElement("iframe");
			var t = this.iframe.style;
			t.position = "absolute", t.top = "0", t.left = "0", t.width = "100%", t.height = "100%", this.span.appendChild(this.iframe), document.body.appendChild(this.span)
		}, i.detect = function(e) {
			this.originalSize = e || 17, this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.currentSize > this.originalSize && this._onResize(), this.isDetecting || (this.iframe.contentWindow.addEventListener("resize", this._onResize), this.isDetecting = !0)
		}, i._resize = function(e) {
			this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.originalSize < this.currentSize ? document.documentElement.classList.add("text-zoom") : document.documentElement.classList.remove("text-zoom"), window.dispatchEvent(new Event("resize"))
		}, i.remove = function() {
			this.isDetecting && (this.iframe.contentWindow.removeEventListener("resize", this._onResize), this.isDetecting = !1)
		}, i.destroy = function() {
			this.remove(), this.span && this.span.parentElement && this.span.parentElement.removeChild(this.span), this.span = null, this.iframe = null
		}, t.exports = new r
	}, {}],
	2: [function(e, t, n) {
		"use strict";
		t.exports = {
			EventEmitterMicro: e("./ac-event-emitter-micro/EventEmitterMicro")
		}
	}, {
		"./ac-event-emitter-micro/EventEmitterMicro": 3
	}],
	3: [function(e, t, n) {
		"use strict";

		function r() {
			this._events = {}
		}
		var i = r.prototype;
		i.on = function(e, t) {
			this._events[e] = this._events[e] || [], this._events[e].unshift(t)
		}, i.once = function(e, t) {
			function n(i) {
				r.off(e, n), void 0 !== i ? t(i) : t()
			}
			var r = this;
			this.on(e, n)
		}, i.off = function(e, t) {
			if (this.has(e)) {
				if (1 === arguments.length) return this._events[e] = null, void delete this._events[e];
				var n = this._events[e].indexOf(t);
				n !== -1 && this._events[e].splice(n, 1)
			}
		}, i.trigger = function(e, t) {
			if (this.has(e))
				for (var n = this._events[e].length - 1; n >= 0; n--) void 0 !== t ? this._events[e][n](t) : this._events[e][n]()
		}, i.has = function(e) {
			return e in this._events != !1 && 0 !== this._events[e].length
		}, i.destroy = function() {
			for (var e in this._events) this._events[e] = null;
			this._events = null
		}, t.exports = r
	}, {}],
	4: [function(e, t, n) {
		"use strict";
		t.exports = {
			getWindow: function() {
				return window
			},
			getDocument: function() {
				return document
			},
			getNavigator: function() {
				return navigator
			}
		}
	}, {}],
	5: [function(e, t, n) {
		"use strict";

		function r() {
			var e = i.getWindow(),
				t = e.matchMedia("(prefers-reduced-motion)");
			return !(!t || !t.matches)
		}
		var i = e("./helpers/globals");
		t.exports = r
	}, {
		"./helpers/globals": 4
	}],
	6: [function(e, t, n) {
		"use strict";

		function r() {
			var e = i.getWindow(),
				t = i.getDocument(),
				n = i.getNavigator();
			return !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch || n.maxTouchPoints > 0 || n.msMaxTouchPoints > 0)
		}
		var i = e("./helpers/globals"),
			o = e("@marcom/ac-function/once");
		t.exports = o(r), t.exports.original = r
	}, {
		"./helpers/globals": 4,
		"@marcom/ac-function/once": 7
	}],
	7: [function(e, t, n) {
		"use strict";
		t.exports = function(e) {
			var t;
			return function() {
				return "undefined" == typeof t && (t = e.apply(this, arguments)), t
			}
		}
	}, {}],
	8: [function(e, t, n) {
		"use strict";
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			i = e("./extend");
		t.exports = function(e, t) {
			if ("object" !== ("undefined" == typeof e ? "undefined" : r(e))) throw new TypeError("defaults: must provide a defaults object");
			if (t = t || {}, "object" !== ("undefined" == typeof t ? "undefined" : r(t))) throw new TypeError("defaults: options must be a typeof object");
			return i({}, e, t)
		}
	}, {
		"./extend": 9
	}],
	9: [function(e, t, n) {
		"use strict";
		e("@marcom/ac-polyfills/Array/prototype.forEach");
		var r = Object.prototype.hasOwnProperty;
		t.exports = function() {
			var e, t;
			return e = arguments.length < 2 ? [{}, arguments[0]] : [].slice.call(arguments), t = e.shift(), e.forEach(function(e) {
				if (null != e)
					for (var n in e) r.call(e, n) && (t[n] = e[n])
			}), t
		}
	}, {
		"@marcom/ac-polyfills/Array/prototype.forEach": void 0
	}],
	10: [function(e, t, n) {
		"use strict";

		function r(e) {
			s.call(this), this.options = i(c, e), this.loadingOptions = null, this.els = [], this.loadingQueue = null, this._queueItems = [], this._queueItemsObj = {}, this._loadOrder = [], this._timeout = null, this._didCallLoad = !1
		}
		var i = e("@marcom/ac-object/defaults"),
			o = e("@marcom/ac-queue").LiveQueue,
			s = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
			a = e("@marcom/ac-raf-emitter/update"),
			l = e("@marcom/ac-raf-emitter/draw"),
			c = {
				container: document.body,
				includeContainer: !1
			},
			u = {
				loadingPoolSize: 8,
				timeout: null,
				imageDataAttribute: "data-progressive-image",
				imageAnimate: !0,
				imageAnimateClass: "progressive-image-animated"
			};
		r.Events = {
			ImageLoad: "image-load",
			Complete: "complete"
		};
		var h = r.prototype = Object.create(s.prototype);
		h.load = function(e) {
			this._didCallLoad || (this._didCallLoad = !0, this.loadingOptions = i(u, e), this.loadingQueue = new o(this.loadingOptions.loadingPoolSize), this.els = Array.from(this._getProgressiveImageElements()), this.options.includeContainer && this.options.container.hasAttribute(this._getProgressiveImageDataAttribute()) && this.els.unshift(this.options.container), l(function() {
				var e, t, n = this.els.length;
				for (e = 0; e < n; e++) t = {
					queueItem: this.loadingQueue.enqueue(this._loadNextItem.bind(this, e), e),
					el: this.els[e],
					id: e
				}, this._queueItems.push(t), this._queueItemsObj[e] = t, this.loadingOptions.imageAnimate && this.els[e].classList.add(this.loadingOptions.imageAnimateClass);
				a(function() {
					this.loadingQueue.start(), "number" == typeof this.loadingOptions.timeout && (this._timeout = setTimeout(this.cancel.bind(this), this.loadingOptions.timeout))
				}.bind(this))
			}.bind(this)))
		}, h.setVisible = function(e) {
			return new Promise(function(t, n) {
				l(function() {
					e.removeAttribute(this._getProgressiveImageDataAttribute()), t(), e = null
				}.bind(this))
			}.bind(this))
		}, h.cancel = function() {
			if (this.els) {
				var e, t = this.els.length;
				for (e = 0; e < t; e++) this.setVisible(this.els[e]), this.loadingOptions.imageAnimate && l(function() {
					this.els[e].setAttribute("data-progressive-image-loaded", "")
				}.bind(this, e))
			}
			this._handleLoadingComplete()
		}, h.destroy = function() {
			this.cancel(), this.off(), s.prototype.destroy.call(this)
		}, h._loadNextItem = function(e) {
			return new Promise(function(e, t, n) {
				var r = this._queueItemsObj[e];
				this._loadAndSetVisible(r.el).then(function() {
					var e = this._queueItems.indexOf(r);
					this._queueItems.splice(e, 1), this._queueItemsObj[r.id] = null, t(), this._handleImageLoad(r.el), r = t = null, 1 === this.loadingQueue.count() && this._handleLoadingComplete()
				}.bind(this))
			}.bind(this, e))
		}, h._loadAndSetVisible = function(e) {
			return new Promise(function(t, n) {
				this.setVisible(e).then(function() {
					this._getBackgroundImageSrc(e).then(function(n) {
						this._loadImage(n).then(t), e = null
					}.bind(this))
				}.bind(this))
			}.bind(this))
		}, h._getBackgroundImageSrc = function(e) {
			return new Promise(function(t, n) {
				a(function() {
					var n = e.currentStyle;
					return n || (n = window.getComputedStyle(e, !1)), e = null, 0 === n.backgroundImage.indexOf("url(") ? void t(n.backgroundImage.slice(4, -1).replace(/"/g, "")) : void t(null)
				}.bind(this))
			}.bind(this))
		}, h._getProgressiveImageDataAttribute = function() {
			return this.loadingOptions.imageDataAttribute
		}, h._getProgressiveImageCSSQuery = function() {
			return "[" + this._getProgressiveImageDataAttribute() + "]"
		}, h._getProgressiveImageElements = function() {
			return this.options.container.querySelectorAll(this._getProgressiveImageCSSQuery()) || []
		}, h._loadImage = function(e) {
			return new Promise(this._loadImagePromiseFunc.bind(this, e))
		}, h._loadImagePromiseFunc = function(e, t, n) {
			function r() {
				this.removeEventListener("load", r), t(this), t = null
			}
			if (!e) return void t(null);
			var i = new Image;
			i.addEventListener("load", r), i.src = e
		}, h._clearTimeout = function() {
			this._timeout && (window.clearTimeout(this._timeout), this._timeout = null)
		}, h._handleImageLoad = function(e) {
			l(function() {
				this.trigger(r.Events.ImageLoad, e), this.loadingOptions.imageAnimate && e.setAttribute("data-progressive-image-loaded", ""), e = null
			}.bind(this))
		}, h._handleLoadingComplete = function() {
			this.loadingQueue.stop(), this._clearTimeout(), this.trigger(r.Events.Complete)
		}, t.exports = r
	}, {
		"@marcom/ac-event-emitter-micro": 2,
		"@marcom/ac-object/defaults": 8,
		"@marcom/ac-queue": 11,
		"@marcom/ac-raf-emitter/draw": 20,
		"@marcom/ac-raf-emitter/update": 21
	}],
	11: [function(e, t, n) {
		"use strict";
		t.exports = {
			Queue: e("./ac-queue/Queue"),
			QueueItem: e("./ac-queue/QueueItem"),
			LiveQueue: e("./ac-queue/LiveQueue")
		}
	}, {
		"./ac-queue/LiveQueue": 12,
		"./ac-queue/Queue": 13,
		"./ac-queue/QueueItem": 14
	}],
	12: [function(e, t, n) {
		"use strict";

		function r(e) {
			this._queue = new i, this._maxProcesses = e || 1, this._availableSlots = this._maxProcesses, this._rafId = 0, this._isRunning = !1, this._boundFunctions = {
				_run: this._run.bind(this),
				_releaseSlot: this._releaseSlot.bind(this)
			}
		}
		e("@marcom/ac-polyfills/Promise"), e("@marcom/ac-polyfills/requestAnimationFrame"), e("@marcom/ac-polyfills/Function/prototype.bind");
		var i = e("./Queue"),
			o = e("./QueueItem"),
			s = r.prototype;
		s.start = function() {
			this._isRunning && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(this._boundFunctions._run), this._isRunning = !0
		}, s.pause = function() {
			this._isRunning && (cancelAnimationFrame(this._rafId), this._rafId = 0), this._isRunning = !1
		}, s.stop = function() {
			this.pause(), this.clear()
		}, s.enqueue = function(e, t) {
			if ("function" != typeof e) throw new Error("LiveQueue can only enqueue functions");
			void 0 === t && (t = i.PRIORITY_DEFAULT);
			var n = new o(e, t);
			return this.enqueueQueueItem(n)
		}, s.enqueueQueueItem = function(e) {
			return this._queue.enqueueQueueItem(e), this._isRunning && 0 === this._rafId && this.start(), e
		}, s.dequeueQueueItem = function(e) {
			return this._queue.dequeueQueueItem(e)
		}, s.clear = function() {
			this._queue = new i
		}, s.destroy = function() {
			this.pause(), this._isRunning = !1, this._queue = null, this._boundFunctions = null
		}, s.count = function() {
			return this._queue.count() + this.pending()
		}, s.pending = function() {
			return this._maxProcesses - this._availableSlots
		}, s.isEmpty = function() {
			return 0 === this.count()
		}, s._run = function() {
			if (this._isRunning && (this._rafId = requestAnimationFrame(this._boundFunctions._run), !this._queue.isEmpty() && 0 !== this._availableSlots)) {
				var e = this._queue.dequeue(),
					t = e.data();
				this._isPromise(t) && (this._retainSlot(), t.then(this._boundFunctions._releaseSlot, this._boundFunctions._releaseSlot)), this._stopRunningIfDone()
			}
		}, s._retainSlot = function() {
			this._availableSlots--
		}, s._releaseSlot = function() {
			this._availableSlots++, this._stopRunningIfDone()
		}, s._stopRunningIfDone = function() {
			0 != this._rafId && 0 === this._queue.count() && this._availableSlots == this._maxProcesses && (cancelAnimationFrame(this._rafId), this._rafId = 0)
		}, s._isPromise = function(e) {
			return !(!e || "function" != typeof e.then)
		}, t.exports = r
	}, {
		"./Queue": 13,
		"./QueueItem": 14,
		"@marcom/ac-polyfills/Function/prototype.bind": void 0,
		"@marcom/ac-polyfills/Promise": void 0,
		"@marcom/ac-polyfills/requestAnimationFrame": void 0
	}],
	13: [function(e, t, n) {
		"use strict";

		function r() {
			this._items = []
		}
		var i = e("./QueueItem"),
			o = r.prototype;
		o.enqueue = function(e, t) {
			void 0 === t && (t = r.PRIORITY_DEFAULT);
			var n = new i(e, t);
			return this.enqueueQueueItem(n)
		}, o.enqueueQueueItem = function(e) {
			return this._items.indexOf(e) === -1 && this._items.push(e), e
		}, o.dequeue = function() {
			this._heapSort();
			var e = this._items.length - 1,
				t = this._items[0];
			return this._items[0] = this._items[e], this._items.pop(), t
		}, o.dequeueQueueItem = function(e) {
			var t = this._items.indexOf(e);
			return t > -1 && this._items.splice(t, 1), e
		}, o.peek = function() {
			return 0 == this.count() ? null : (this._heapSort(), this._items[0])
		}, o.isEmpty = function() {
			return 0 === this._items.length
		}, o.count = function() {
			return this._items.length
		}, o.toString = function() {
			for (var e = ["Queue total items: " + this.count() + "\n"], t = 0; t < this.count(); ++t) e.push(this._items[t].toString() + "\n");
			return e.join("")
		}, o._heapSort = function() {
			for (var e = 0, t = this._items.length - 1; t >= 0; t--)
				for (var n = t; n > 0;) {
					e++;
					var r = Math.floor((n - 1) / 2);
					if (this._items[n].compareTo(this._items[r]) >= 0) break;
					var i = this._items[n];
					this._items[n] = this._items[r], this._items[r] = i, n = r
				}
		}, r.PRIORITY_LOW = 10, r.PRIORITY_DEFAULT = 5, r.PRIORITY_HIGH = 1, t.exports = r
	}, {
		"./QueueItem": 14
	}],
	14: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			this.priority = t, this.data = e, this.insertionOrder = i++
		}
		var i = 0,
			o = r.prototype;
		o.compareTo = function(e) {
			return this.priority < e.priority ? -1 : this.priority > e.priority ? 1 : this.insertionOrder < e.insertionOrder ? -1 : 1
		}, o.toString = function() {
			return "QueueItem {priority:" + this.priority + ",\tdata:" + this.data + "\tinsertionOrder:" + this.insertionOrder + "}"
		}, t.exports = r
	}, {}],
	15: [function(e, t, n) {
		"use strict";
		var r = e("@marcom/ac-shared-instance").SharedInstance,
			i = "ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance",
			o = "1.0.3",
			s = function() {
				this._currentID = 0
			};
		s.prototype.getNewID = function() {
			return this._currentID++, "raf:" + this._currentID
		}, t.exports = r.share(i, o, s)
	}, {
		"@marcom/ac-shared-instance": 24
	}],
	16: [function(e, t, n) {
		"use strict";

		function r(e) {
			e = e || {}, o.call(this), this.id = a.getNewID(), this.executor = e.executor || s, this._reset(), this._willRun = !1, this._didDestroy = !1
		}
		var i, o = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
			s = e("@marcom/ac-raf-executor/sharedRAFExecutorInstance"),
			a = e("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");
		i = r.prototype = Object.create(o.prototype), i.run = function() {
			return this._willRun || (this._willRun = !0), this._subscribe()
		}, i.cancel = function() {
			this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset()
		}, i.destroy = function() {
			var e = this.willRun();
			return this.cancel(), this.executor = null, o.prototype.destroy.call(this), this._didDestroy = !0, e
		}, i.willRun = function() {
			return this._willRun
		}, i.isRunning = function() {
			return this._isRunning
		}, i._subscribe = function() {
			return this.executor.subscribe(this)
		}, i._unsubscribe = function() {
			return this.executor.unsubscribe(this)
		}, i._onAnimationFrameStart = function(e) {
			this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", e))
		}, i._onAnimationFrameEnd = function(e) {
			this._willRun || (this.trigger("stop", e), this._reset())
		}, i._reset = function() {
			this._didEmitFrameData = !1, this._isRunning = !1
		}, t.exports = r
	}, {
		"@marcom/ac-event-emitter-micro": 2,
		"@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance": 15,
		"@marcom/ac-raf-executor/sharedRAFExecutorInstance": 23
	}],
	17: [function(e, t, n) {
		"use strict";
		var r = e("./SingleCallRAFEmitter"),
			i = function(e) {
				this.rafEmitter = new r, this.rafEmitter.on(e, this._onRAFExecuted.bind(this)), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._frameCallbacks = [], this._nextFrameCallbacks = [], this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
			},
			o = i.prototype;
		o.requestAnimationFrame = function(e) {
			return this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, e), this._nextFrameCallbacksLength += 2, this._currentFrameID
		}, o.cancelAnimationFrame = function(e) {
			this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(e), this._cancelFrameIdx !== -1 && (this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), this._nextFrameCallbacksLength -= 2, 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel())
		}, o._onRAFExecuted = function(e) {
			for (this._frameCallbacks = this._nextFrameCallbacks, this._frameCallbackLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks = [], this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e)
		}, t.exports = i
	}, {
		"./SingleCallRAFEmitter": 19
	}],
	18: [function(e, t, n) {
		"use strict";
		var r = e("./RAFInterface"),
			i = function() {
				this.events = {}
			},
			o = i.prototype;
		o.requestAnimationFrame = function(e) {
			return this.events[e] || (this.events[e] = new r(e)), this.events[e].requestAnimationFrame
		}, o.cancelAnimationFrame = function(e) {
			return this.events[e] || (this.events[e] = new r(e)), this.events[e].cancelAnimationFrame
		}, t.exports = new i
	}, {
		"./RAFInterface": 17
	}],
	19: [function(e, t, n) {
		"use strict";
		var r = e("./RAFEmitter"),
			i = function(e) {
				r.call(this, e)
			},
			o = i.prototype = Object.create(r.prototype);
		o._subscribe = function() {
			return this.executor.subscribe(this, !0)
		}, t.exports = i
	}, {
		"./RAFEmitter": 16
	}],
	20: [function(e, t, n) {
		"use strict";
		var r = e("./RAFInterfaceController");
		t.exports = r.requestAnimationFrame("draw")
	}, {
		"./RAFInterfaceController": 18
	}],
	21: [function(e, t, n) {
		"use strict";
		var r = e("./RAFInterfaceController");
		t.exports = r.requestAnimationFrame("update")
	}, {
		"./RAFInterfaceController": 18
	}],
	22: [function(e, t, n) {
		"use strict";

		function r(e) {
			e = e || {}, this._reset(), this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
		}
		e("@marcom/ac-polyfills/performance/now");
		var i;
		i = r.prototype, i.subscribe = function(e, t) {
			return this._totalSubscribeCount++, this._nextFrameSubscribers[e.id] || (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id), this._nextFrameSubscribers[e.id] = e, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
		}, i.unsubscribe = function(e) {
			return !!this._nextFrameSubscribers[e.id] && (this._nextFrameSubscribers[e.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
		}, i.trigger = function(e, t) {
			var n;
			for (n = 0; n < this._subscriberArrayLength; n++) null !== this._subscribers[this._subscribersOrder[n]] && this._subscribers[this._subscribersOrder[n]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[n]].trigger(e, t)
		}, i.destroy = function() {
			var e = this._cancel();
			return this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, e
		}, i.useExternalAnimationFrame = function(e) {
			if ("boolean" == typeof e) {
				var t = this._isUsingExternalAnimationFrame;
				return e && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || e || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = e, e ? this._boundOnExternalAnimationFrame : t || !1
			}
		}, i._run = function() {
			if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), !0
		}, i._cancel = function() {
			var e = !1;
			return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, e = !0), this._isRunning || this._reset(), e
		}, i._onSubscribersAnimationFrameStart = function(e) {
			var t;
			for (t = 0; t < this._subscriberArrayLength; t++) null !== this._subscribers[this._subscribersOrder[t]] && this._subscribers[this._subscribersOrder[t]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[t]]._onAnimationFrameStart(e)
		}, i._onSubscribersAnimationFrameEnd = function(e) {
			var t;
			for (t = 0; t < this._subscriberArrayLength; t++) null !== this._subscribers[this._subscribersOrder[t]] && this._subscribers[this._subscribersOrder[t]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[t]]._onAnimationFrameEnd(e)
		}, i._onAnimationFrame = function(e) {
			this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = e - this.lastFrameTime, this.lastFrameTime = e, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = e, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this._onSubscribersAnimationFrameStart(this._rafData), this.trigger("update", this._rafData), this.trigger("external", this._rafData), this.trigger("draw", this._rafData), this._onSubscribersAnimationFrameEnd(this._rafData), this._willRun || this._reset()
		}, i._onExternalAnimationFrame = function(e) {
			this._isUsingExternalAnimationFrame && this._onAnimationFrame(e)
		}, i._reset = function() {
			this._rafData = {
				time: 0,
				delta: 0,
				fps: 0,
				naturalFps: 0,
				timeNow: 0
			}, this._subscribers = {}, this._subscribersOrder = [], this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0
		}, t.exports = r
	}, {
		"@marcom/ac-polyfills/performance/now": void 0
	}],
	23: [function(e, t, n) {
		"use strict";
		var r = e("@marcom/ac-shared-instance").SharedInstance,
			i = "ac-raf-executor:sharedRAFExecutorInstance",
			o = "2.0.1",
			s = e("./RAFExecutor");
		t.exports = r.share(i, o, s)
	}, {
		"./RAFExecutor": 22,
		"@marcom/ac-shared-instance": 24
	}],
	24: [function(e, t, n) {
		"use strict";
		t.exports = {
			SharedInstance: e("./ac-shared-instance/SharedInstance")
		}
	}, {
		"./ac-shared-instance/SharedInstance": 25
	}],
	25: [function(e, t, n) {
		"use strict";
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			i = window,
			o = "AC",
			s = "SharedInstance",
			a = i[o],
			l = function() {
				var e = {};
				return {
					get: function(t, n) {
						var r = null;
						return e[t] && e[t][n] && (r = e[t][n]), r
					},
					set: function(t, n, r) {
						return e[t] || (e[t] = {}), "function" == typeof r ? e[t][n] = new r : e[t][n] = r, e[t][n]
					},
					share: function(e, t, n) {
						var r = this.get(e, t);
						return r || (r = this.set(e, t, n)), r
					},
					remove: function(t, n) {
						var i = "undefined" == typeof n ? "undefined" : r(n);
						if ("string" === i || "number" === i) {
							if (!e[t] || !e[t][n]) return;
							return void(e[t][n] = null)
						}
						e[t] && (e[t] = null)
					}
				}
			}();
		a || (a = i[o] = {}), a[s] || (a[s] = l), t.exports = a[s]
	}, {}],
	26: [function(e, t, n) {
		"use strict";
		t.exports = {
			majorVersionNumber: "3.x"
		}
	}, {}],
	27: [function(e, t, n) {
		"use strict";

		function r(e) {
			e = e || {}, o.call(this), this.id = a.getNewID(), this.executor = e.executor || s, this._reset(), this._willRun = !1, this._didDestroy = !1
		}
		var i, o = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
			s = e("./sharedRAFExecutorInstance"),
			a = e("./sharedRAFEmitterIDGeneratorInstance");
		i = r.prototype = Object.create(o.prototype), i.run = function() {
			return this._willRun || (this._willRun = !0), this._subscribe()
		}, i.cancel = function() {
			this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset()
		}, i.destroy = function() {
			var e = this.willRun();
			return this.cancel(), this.executor = null, o.prototype.destroy.call(this), this._didDestroy = !0, e
		}, i.willRun = function() {
			return this._willRun
		}, i.isRunning = function() {
			return this._isRunning
		}, i._subscribe = function() {
			return this.executor.subscribe(this)
		}, i._unsubscribe = function() {
			return this.executor.unsubscribe(this)
		}, i._onAnimationFrameStart = function(e) {
			this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", e))
		}, i._onAnimationFrameEnd = function(e) {
			this._willRun || (this.trigger("stop", e), this._reset())
		}, i._reset = function() {
			this._didEmitFrameData = !1, this._isRunning = !1
		}, t.exports = r
	}, {
		"./sharedRAFEmitterIDGeneratorInstance": 35,
		"./sharedRAFExecutorInstance": 36,
		"@marcom/ac-event-emitter-micro": 2
	}],
	28: [function(e, t, n) {
		"use strict";

		function r(e) {
			e = e || {}, this._reset(), this.updatePhases(), this.eventEmitter = new o, this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
		}
		var i, o = e("@marcom/ac-event-emitter-micro/EventEmitterMicro");
		i = r.prototype, i.frameRequestedPhase = "requested", i.startPhase = "start", i.runPhases = ["update", "external", "draw"], i.endPhase = "end", i.disabledPhase = "disabled", i.beforePhaseEventPrefix = "before:", i.afterPhaseEventPrefix = "after:", i.subscribe = function(e, t) {
			return this._totalSubscribeCount++, this._nextFrameSubscribers[e.id] || (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id), this._nextFrameSubscribers[e.id] = e, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
		}, i.subscribeImmediate = function(e, t) {
			return this._totalSubscribeCount++, this._subscribers[e.id] || (t ? this._subscribersOrder.splice(this._currentSubscriberIndex + 1, 0, e.id) : this._subscribersOrder.unshift(e.id), this._subscribers[e.id] = e, this._subscriberArrayLength++, this._subscriberCount++), this._totalSubscribeCount
		}, i.unsubscribe = function(e) {
			return !!this._nextFrameSubscribers[e.id] && (this._nextFrameSubscribers[e.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
		}, i.getSubscribeID = function() {
			return this._totalSubscribeCount += 1
		}, i.destroy = function() {
			var e = this._cancel();
			return this.eventEmitter.destroy(), this.eventEmitter = null, this.phases = null, this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, e
		}, i.useExternalAnimationFrame = function(e) {
			if ("boolean" == typeof e) {
				var t = this._isUsingExternalAnimationFrame;
				return e && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || e || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = e, e ? this._boundOnExternalAnimationFrame : t || !1
			}
		}, i.updatePhases = function() {
			this.phases || (this.phases = []), this.phases.length = 0, this.phases.push(this.frameRequestedPhase), this.phases.push(this.startPhase), Array.prototype.push.apply(this.phases, this.runPhases), this.phases.push(this.endPhase), this._runPhasesLength = this.runPhases.length, this._phasesLength = this.phases.length
		}, i._run = function() {
			if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this.phase === this.disabledPhase && (this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex]), !0
		}, i._cancel = function() {
			var e = !1;
			return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, e = !0), this._isRunning || this._reset(), e
		}, i._onAnimationFrame = function(e) {
			for (this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex], this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = e - this.lastFrameTime, this.lastFrameTime = e, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = e, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
			for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
				for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
				this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
			}
			for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
			this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._willRun ? (this.phaseIndex = 0, this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
		}, i._onExternalAnimationFrame = function(e) {
			this._isUsingExternalAnimationFrame && this._onAnimationFrame(e)
		}, i._reset = function() {
			this._rafData || (this._rafData = {}), this._rafData.time = 0, this._rafData.delta = 0, this._rafData.fps = 0, this._rafData.naturalFps = 0, this._rafData.timeNow = 0, this._subscribers = {}, this._subscribersOrder = [], this._currentSubscriberIndex = -1, this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0, this._runPhaseIndex = -1, this.phaseIndex = -1, this.phase = this.disabledPhase
		}, t.exports = r
	}, {
		"@marcom/ac-event-emitter-micro/EventEmitterMicro": 3
	}],
	29: [function(e, t, n) {
		"use strict";
		var r = e("./SingleCallRAFEmitter"),
			i = function(e) {
				this.phase = e, this.rafEmitter = new r, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart), this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1,
					this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
			},
			o = i.prototype;
		o.requestAnimationFrame = function(e, t) {
			return t === !0 && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0), this._frameCallbacks.push(this._currentFrameID, e), this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1), this._currentFrameCallbacks.push(this._currentFrameID, e), this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, e), this._nextFrameCallbacksLength += 2), this._currentFrameID
		}, o.cancelAnimationFrame = function(e) {
			this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(e), this._cancelFrameIdx > -1 ? this._cancelNextAnimationFrame() : (this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(e), this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : (this._cancelFrameIdx = this._frameCallbacks.indexOf(e), this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()))
		}, o._onRAFExecuted = function(e) {
			for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e);
			this._frameCallbacks.length = 0, this._frameCallbackLength = 0
		}, o._onBeforeRAFExecutorStart = function() {
			Array.prototype.push.apply(this._currentFrameCallbacks, this._nextFrameCallbacks.splice(0, this._nextFrameCallbacksLength)), this._currentFrameCallbacksLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks.length = 0, this._nextFrameCallbacksLength = 0
		}, o._onBeforeRAFExecutorPhase = function() {
			this._phaseActive = !0, Array.prototype.push.apply(this._frameCallbacks, this._currentFrameCallbacks.splice(0, this._currentFrameCallbacksLength)), this._frameCallbackLength = this._currentFrameCallbacksLength, this._currentFrameCallbacks.length = 0, this._currentFrameCallbacksLength = 0
		}, o._onAfterRAFExecutorPhase = function() {
			this._phaseActive = !1
		}, o._cachePhaseIndex = function() {
			this.phaseIndex = this.rafEmitter.executor.phases.indexOf(this.phase)
		}, o._cancelRunningAnimationFrame = function() {
			this._frameCallbacks.splice(this._cancelFrameIdx, 2), this._frameCallbackLength -= 2
		}, o._cancelCurrentAnimationFrame = function() {
			this._currentFrameCallbacks.splice(this._cancelFrameIdx, 2), this._currentFrameCallbacksLength -= 2
		}, o._cancelNextAnimationFrame = function() {
			this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), this._nextFrameCallbacksLength -= 2, 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel()
		}, t.exports = i
	}, {
		"./SingleCallRAFEmitter": 31
	}],
	30: [function(e, t, n) {
		"use strict";
		var r = e("./RAFInterface"),
			i = function() {
				this.events = {}
			},
			o = i.prototype;
		o.requestAnimationFrame = function(e) {
			return this.events[e] || (this.events[e] = new r(e)), this.events[e].requestAnimationFrame
		}, o.cancelAnimationFrame = function(e) {
			return this.events[e] || (this.events[e] = new r(e)), this.events[e].cancelAnimationFrame
		}, t.exports = new i
	}, {
		"./RAFInterface": 29
	}],
	31: [function(e, t, n) {
		"use strict";
		var r = e("./RAFEmitter"),
			i = function(e) {
				r.call(this, e)
			},
			o = i.prototype = Object.create(r.prototype);
		o._subscribe = function() {
			return this.executor.subscribe(this, !0)
		}, t.exports = i
	}, {
		"./RAFEmitter": 27
	}],
	32: [function(e, t, n) {
		"use strict";
		var r = e("./RAFInterfaceController");
		t.exports = r.cancelAnimationFrame("update")
	}, {
		"./RAFInterfaceController": 30
	}],
	33: [function(e, t, n) {
		"use strict";
		var r = e("./RAFInterfaceController");
		t.exports = r.requestAnimationFrame("draw")
	}, {
		"./RAFInterfaceController": 30
	}],
	34: [function(e, t, n) {
		"use strict";
		var r = e("./RAFInterfaceController");
		t.exports = r.requestAnimationFrame("external")
	}, {
		"./RAFInterfaceController": 30
	}],
	35: [function(e, t, n) {
		"use strict";
		var r = e("@marcom/ac-shared-instance").SharedInstance,
			i = e("../.release-info.js").majorVersionNumber,
			o = function() {
				this._currentID = 0
			};
		o.prototype.getNewID = function() {
			return this._currentID++, "raf:" + this._currentID
		}, t.exports = r.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", i, o)
	}, {
		"../.release-info.js": 26,
		"@marcom/ac-shared-instance": 24
	}],
	36: [function(e, t, n) {
		"use strict";
		var r = e("@marcom/ac-shared-instance").SharedInstance,
			i = e("../.release-info.js").majorVersionNumber,
			o = e("./RAFExecutor");
		t.exports = r.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", i, o)
	}, {
		"../.release-info.js": 26,
		"./RAFExecutor": 28,
		"@marcom/ac-shared-instance": 24
	}],
	37: [function(e, t, n) {
		"use strict";
		var r = e("./RAFInterfaceController");
		t.exports = r.requestAnimationFrame("update")
	}, {
		"./RAFInterfaceController": 30
	}],
	38: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
			l = e("./Model/AnimSystemModel"),
			c = e("./Keyframes/Keyframe"),
			u = e("./Keyframes/KeyframeCSSClass"),
			h = e("./Keyframes/KeyframeDiscreteEvent"),
			m = e("./ScrollGroup"),
			f = e("./TimeGroup"),
			p = e("./utils/arrayToObject"),
			d = {
				create: e("@marcom/ac-raf-emitter/RAFEmitter"),
				update: e("@marcom/ac-raf-emitter/update"),
				cancelUpdate: e("@marcom/ac-raf-emitter/cancelUpdate"),
				external: e("@marcom/ac-raf-emitter/external"),
				draw: e("@marcom/ac-raf-emitter/draw")
			},
			y = null,
			v = function(e) {
				function t() {
					r(this, t);
					var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					if (y) throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
					return y = e, e.groups = [], e.scrollSystems = [], e.timeSystems = [], e._forceUpdateRAFId = -1, e.setupEvents(), e
				}
				return o(t, e), s(t, [{
					key: "initialize",
					value: function() {
						var e = this;
						this.initializeModel(), this.createDOMGroups(), d.external(function() {
							e.setupAnimatedContent()
						})
					}
				}, {
					key: "destroy",
					value: function() {
						this.groups.forEach(function(e) {
							return e.destroy()
						}), this.groups = null, this.scrollSystems = null, this.timeSystems = null, window.clearTimeout(l.RESIZE_TIMEOUT), window.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate)
					}
				}, {
					key: "createTimeGroup",
					value: function(e) {
						var t = new f(e, this);
						return this.groups.push(t), this.timeSystems.push(t), this.trigger(l.EVENTS.ON_GROUP_CREATED, t), t
					}
				}, {
					key: "createScrollGroup",
					value: function(e) {
						if (!e) throw "AnimSystem scroll based groups must supply an HTMLElement";
						var t = new m(e, this);
						return this.groups.push(t), this.scrollSystems.push(t), this.trigger(l.EVENTS.ON_GROUP_CREATED, t), t
					}
				}, {
					key: "removeGroup",
					value: function(e) {
						var t = this;
						e.keyframeControllers.forEach(function(t) {
							return e.removeKeyframeController(t)
						}), d.update(function() {
							e.destroy();
							var n = t.groups.indexOf(e);
							n !== -1 && t.groups.splice(n, 1), n = t.scrollSystems.indexOf(e), n !== -1 && t.scrollSystems.splice(n, 1), n = t.timeSystems.indexOf(e), n !== -1 && t.timeSystems.splice(n, 1)
						})
					}
				}, {
					key: "createDOMGroups",
					value: function() {
						var e = this;
						document.body.setAttribute("data-anim-scroll-group", "body"), document.querySelectorAll("[data-anim-scroll-group]").forEach(function(t) {
							return e.createScrollGroup(t)
						}), document.querySelectorAll("[data-anim-time-group]").forEach(function(t) {
							return e.createTimeGroup(t)
						}), this.trigger(l.EVENTS.ON_DOM_GROUPS_CREATED, this.groups)
					}
				}, {
					key: "setupAnimatedContent",
					value: function() {
						var e = this,
							t = [];
						[c.DATA_ATTRIBUTE, u.DATA_ATTRIBUTE, h.DATA_ATTRIBUTE].forEach(function(e) {
							for (var n = 0; n < 12; n++) t.push(e + (0 === n ? "" : "-" + (n - 1)))
						});
						for (var n = 0; n < t.length; n++)
							for (var r = t[n], i = document.querySelectorAll("[" + r + "]"), o = 0; o < i.length; o++) {
								var s = i[o],
									a = JSON.parse(s.getAttribute(r));
								this.addKeyframe(s, a)
							}
						d.update(function() {
							return e.groups.forEach(function(e) {
								return e.onKeyframesDirty({
									preventOnScroll: !0
								})
							})
						}, !0), d.update(function() {
							e.groups.forEach(function(e) {
								return e.trigger(l.EVENTS.ON_DOM_KEYFRAMES_CREATED, e)
							}), e.trigger(l.EVENTS.ON_DOM_KEYFRAMES_CREATED, e), e.groups.forEach(function(e) {
								return e.reconcile()
							}), e.onScroll()
						}, !0)
					}
				}, {
					key: "initializeModel",
					value: function() {
						l.pageMetrics.windowHeight = window.innerHeight, l.pageMetrics.windowWidth = window.innerWidth, l.pageMetrics.scrollY = window.scrollY || window.pageYOffset, l.pageMetrics.scrollX = window.scrollX || window.pageXOffset, l.pageMetrics.breakpoint = l.getBreakpoint();
						var e = document.documentElement.getBoundingClientRect();
						l.pageMetrics.documentOffsetX = e.left + l.pageMetrics.scrollX, l.pageMetrics.documentOffsetY = e.top + l.pageMetrics.scrollY
					}
				}, {
					key: "setupEvents",
					value: function() {
						this.onScroll = this.onScroll.bind(this), this.onResizedDebounced = this.onResizedDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this), window.addEventListener("scroll", this.onScroll), window.addEventListener("resize", this.onResizeImmediate)
					}
				}, {
					key: "determineActiveKeyframes",
					value: function() {
						for (var e = p(Array.from(document.documentElement.classList)), t = 0, n = this.groups.length; t < n; t++) this.groups[t].determineActiveKeyframes(e)
					}
				}, {
					key: "onScroll",
					value: function() {
						l.pageMetrics.scrollY = window.scrollY || window.pageYOffset, l.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
						for (var e = 0, t = this.scrollSystems.length; e < t; e++) this.scrollSystems[e]._onScroll();
						this.trigger(l.PageEvents.ON_SCROLL, l.pageMetrics)
					}
				}, {
					key: "onResizeImmediate",
					value: function() {
						l.pageMetrics.windowHeight = window.innerHeight, l.pageMetrics.windowWidth = window.innerWidth, l.pageMetrics.scrollY = window.scrollY || window.pageYOffset, l.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
						var e = document.documentElement.getBoundingClientRect();
						l.pageMetrics.documentOffsetX = e.left + l.pageMetrics.scrollX, l.pageMetrics.documentOffsetY = e.top + l.pageMetrics.scrollY, window.clearTimeout(l.RESIZE_TIMEOUT), l.RESIZE_TIMEOUT = window.setTimeout(this.onResizedDebounced, 250), this.trigger(l.PageEvents.ON_RESIZE_IMMEDIATE, l.pageMetrics)
					}
				}, {
					key: "onResizedDebounced",
					value: function() {
						var e = this;
						d.update(function() {
							var t = l.pageMetrics.breakpoint,
								n = l.getBreakpoint(),
								r = n !== t;
							if (r) {
								l.pageMetrics.previousBreakpoint = t, l.pageMetrics.breakpoint = n;
								for (var i = 0, o = e.groups.length; i < o; i++) e.groups[i]._onBreakpointChange();
								e.trigger(l.PageEvents.ON_BREAKPOINT_CHANGE, l.pageMetrics)
							}
							for (var s = 0, a = e.groups.length; s < a; s++) e.groups[s].forceUpdate({
								recalculateActiveKeyframes: r,
								waitForNextUpdate: !1
							});
							e.trigger(l.PageEvents.ON_RESIZE_DEBOUNCED, l.pageMetrics)
						}, !0)
					}
				}, {
					key: "forceUpdate",
					value: function() {
						var e = this,
							t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							n = t.recalculateActiveKeyframes,
							r = void 0 !== n && n,
							i = t.waitForNextUpdate,
							o = void 0 === i || i;
						this._forceUpdateRAFId !== -1 && d.cancelUpdate(this._forceUpdateRAFId);
						var s = function() {
							for (var t = 0, n = e.groups.length; t < n; t++) {
								var i = e.groups[t];
								i.forceUpdate({
									recalculateActiveKeyframes: r,
									waitForNextUpdate: !1
								})
							}
							return -1
						};
						this._forceUpdateRAFId = o ? d.update(s, !0) : s()
					}
				}, {
					key: "addKeyframe",
					value: function(e, t) {
						var n = this.getGroupForTarget(e);
						return n.addKeyframe(e, t)
					}
				}, {
					key: "getGroupForTarget",
					value: function(e) {
						if (e._animInfo && e._animInfo.group) return e._animInfo.group;
						for (var t = e; t;) {
							if (t._animInfo && t._animInfo.isGroup) return t._animInfo.group;
							t = t.parentElement
						}
					}
				}, {
					key: "getControllerForTarget",
					value: function(e) {
						return e._animInfo && e._animInfo.controller ? e._animInfo.controller : null
					}
				}]), t
			}(a);
		t.exports = new v
	}, {
		"./Keyframes/Keyframe": 40,
		"./Keyframes/KeyframeCSSClass": 41,
		"./Keyframes/KeyframeDiscreteEvent": 42,
		"./Model/AnimSystemModel": 43,
		"./ScrollGroup": 52,
		"./TimeGroup": 53,
		"./utils/arrayToObject": 54,
		"@marcom/ac-event-emitter-micro": 2,
		"@marcom/ac-raf-emitter/RAFEmitter": 27,
		"@marcom/ac-raf-emitter/cancelUpdate": 32,
		"@marcom/ac-raf-emitter/draw": 33,
		"@marcom/ac-raf-emitter/external": 34,
		"@marcom/ac-raf-emitter/update": 37
	}],
	39: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = function v(e, t, n) {
				null === e && (e = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(e, t);
				if (void 0 === r) {
					var i = Object.getPrototypeOf(e);
					return null === i ? void 0 : v(i, t, n)
				}
				if ("value" in r) return r.value;
				var o = r.get;
				if (void 0 !== o) return o.call(n)
			},
			l = e("./Model/AnimSystemModel"),
			c = (e("./Keyframes/Keyframe"), e("./Keyframes/KeyframeCSSClass")),
			u = e("./Model/InferKeyframeFromProps"),
			h = e("./utils/arrayToObject"),
			m = e("./Model/UUID"),
			f = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
			p = e("@marcom/decompose-css-transform"),
			d = {
				update: e("@marcom/ac-raf-emitter/update"),
				external: e("@marcom/ac-raf-emitter/external"),
				draw: e("@marcom/ac-raf-emitter/draw")
			},
			y = function(e) {
				function t(e, n) {
					r(this, t);
					var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return o.uuid = m(), o.group = e, o.element = n, o._ownerIsElement = o.element instanceof Element, o._ownerIsElement ? o.friendlyName = o.element.tagName + "." + Array.from(o.element.classList).join(".") : o.friendlyName = o.element.friendlyName || o.uuid, o.element._animInfo = o.element._animInfo || new l.AnimInfo(e, o), o.element._animInfo.controller = o, o.tweenProps = {}, o.eventObject = new l.EventObject(o), o.needsStyleUpdate = !1, o.needsClassUpdate = !1, o.elementMetrics = o.group.metrics.add(o.element), o._parentElementMetrics = null, o.attributes = [], o.keyframes = {}, o._allKeyframes = [], o._activeKeyframes = [], o.keyframesRequiringDispatch = [], o.updateCachedValuesFromElement(), o.boundsMin = 0, o.boundsMax = 0, o
				}
				return o(t, e), s(t, [{
					key: "destroy",
					value: function() {
						this.element._animInfo && this.element._animInfo.controller === this && (this.element._animInfo.controller = null, this.element._animInfo = null), this._parentElementMetrics = null, this.eventObject.controller = null, this.eventObject.element = null, this.eventObject.keyframe = null, this.eventObject.tweenProps = null, this.eventObject = null, this.elementMetrics = null, this.group = null, this.keyframesRequiringDispatch = null;
						for (var e = 0; e < this._allKeyframes.length; e++) this._allKeyframes[e].destroy();
						this._allKeyframes = null, this._activeKeyframes = null, this.attributes = null, this.keyframes = null, this.element = null, this.tweenProps = null, a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
					}
				}, {
					key: "remove",
					value: function() {
						this.group.removeKeyframeController(this)
					}
				}, {
					key: "updateCachedValuesFromElement",
					value: function() {
						if (this._ownerIsElement) {
							var e = getComputedStyle(this.element),
								t = p(this.element, !0),
								n = l.KeyframeDefaults.epsilon,
								r = !1;
							this.tweenProps.x = new l.TargetValue(t.translation[0], n, r), this.tweenProps.y = new l.TargetValue(t.translation[1], n, r), this.tweenProps.z = new l.TargetValue(t.translation[2], n, r), this.tweenProps.rotation = new l.TargetValue(t.eulerRotation[2], n, r), this.tweenProps.scale = new l.TargetValue(t.scale[0], n, r), this.tweenProps.scaleX = new l.TargetValue(t.scale[0], n, r), this.tweenProps.scaleY = new l.TargetValue(t.scale[1], n, r), this.tweenProps.opacity = new l.TargetValue(parseFloat(e.opacity), n, r)
						}
					}
				}, {
					key: "addKeyframe",
					value: function(e) {
						var t = u(e);
						if (!t) throw new Error("AnimSystem Cannot create keyframe for from options `" + e + "`");
						var n = new t(this, e);
						return n.parseOptions(e), n.id = this._allKeyframes.length, this._allKeyframes.push(n), n
					}
				}, {
					key: "needsUpdate",
					value: function() {
						for (var e = 0, t = this.attributes.length; e < t; e++) {
							var n = this.attributes[e],
								r = this.tweenProps[n],
								i = Math.abs(r.current - r.target);
							if (i > r.epsilon) return !0
						}
						return !1
					}
				}, {
					key: "updateLocalProgress",
					value: function(e) {
						for (var t = 0, n = this.attributes.length; t < n; t++) {
							var r = this.attributes[t],
								i = this.keyframes[this.attributes[t]];
							if (1 !== i.length) {
								var o = this.getNearestKeyframeForAttribute(e, r);
								o && o.updateLocalProgress(e)
							} else i[0].updateLocalProgress(e)
						}
					}
				}, {
					key: "reconcile",
					value: function() {
						for (var e = 0, t = this.attributes.length; e < t; e++) {
							var n = this.attributes[e],
								r = this.getNearestKeyframeForAttribute(this.group.timelines.local, n);
							r.updateLocalProgress(this.group.timelines.local), r.snapAtCreation && r.reconcile(n)
						}
					}
				}, {
					key: "determineActiveKeyframes",
					value: function(e) {
						var t = this;
						e = e || h(Array.from(document.documentElement.classList));
						var n = this._activeKeyframes,
							r = this.attributes;
						this._activeKeyframes = [], this.attributes = [], this.keyframes = {};
						for (var i = 0; i < this._allKeyframes.length; i++) {
							var o = this._allKeyframes[i];
							if (o.setEnabled(e)) {
								this._activeKeyframes.push(o);
								for (var s in o.animValues) this.keyframes[s] = this.keyframes[s] || [], this.keyframes[s].push(o), this.attributes.indexOf(s) === -1 && this.attributes.push(s)
							}
						}
						var a = n.filter(function(e) {
							return t._activeKeyframes.indexOf(e) === -1
						});
						if (0 !== a.length) {
							var l = r.filter(function(e) {
								return t.attributes.indexOf(e) === -1
							});
							0 !== l.length && this._ownerIsElement && d.external(function() {
								var e = ["x", "y", "z", "scale", "scaleX", "scaleY", "rotation", "rotationX", "rotationY", "rotationZ"],
									n = l.filter(function(t) {
										return e.indexOf(t) !== -1
									});
								n.length !== -1 && t.element.style.removeProperty("transform");
								for (var r = 0, i = l.length; r < i; ++r) {
									var o = l[r],
										s = t.tweenProps[o];
									s.current = s.target = s.initialValue, "opacity" === o && t.element.style.removeProperty("opacity")
								}
								for (var u = 0, h = a.length; u < h; ++u) {
									var m = a[u];
									m instanceof c && m._unapply()
								}
							}, !0)
						}
					}
				}, {
					key: "onDOMRead",
					value: function(e) {
						for (var t = 0, n = this.attributes.length; t < n; t++) {
							var r = this.attributes[t],
								i = this.getNearestKeyframeForAttribute(e.local, r);
							i && i.onDOMRead(r)
						}
					}
				}, {
					key: "onDOMWrite",
					value: function() {
						this._ownerIsElement ? this.onDOMWriteForElement() : this.onDOMWriteForObject(), this.handleEventDispatch()
					}
				}, {
					key: "onDOMWriteForObject",
					value: function() {
						for (var e = 0, t = this.attributes.length; e < t; e++) {
							var n = this.attributes[e];
							this.element[n] = this.tweenProps[n].current
						}
					}
				}, {
					key: "onDOMWriteForElement",
					value: function() {
						var e = this.tweenProps,
							t = "";
						if ("undefined" != typeof this.keyframes.z ? t += "translate3d(" + e.x.current + "px," + e.y.current + "px, " + e.z.current + "px)" : "undefined" == typeof this.keyframes.x && "undefined" == typeof this.keyframes.y || (t += "translate(" + e.x.current + "px," + e.y.current + "px)"), "undefined" != typeof this.keyframes.rotation ? t += "rotate(" + e.rotation.current + "deg) " : ("undefined" != typeof this.keyframes.rotationX && (t += "rotateX(" + e.rotationX.current + "deg) "), "undefined" != typeof this.keyframes.rotationY && (t += "rotateY(" + e.rotationY.current + "deg) "), "undefined" != typeof this.keyframes.rotationZ && (t += "rotateZ(" + e.rotationZ.current + "deg) ")), "undefined" != typeof this.keyframes.scale) t += "scale(" + e.scale.current + "," + e.scale.current + ") ";
						else {
							var n = "undefined" != typeof this.keyframes.scaleX,
								r = "undefined" != typeof this.keyframes.scaleY;
							(n || r) && (t += "scale(" + e.scaleX.current + "," + e.scaleY.current + ") ")
						}
						if ("" !== t && (this.element.style.transform = t), "undefined" != typeof this.keyframes.opacity && (this.element.style.opacity = e.opacity.current), this.needsStyleUpdate) {
							for (var i in this.tweenProps.targetStyles) null !== this.tweenProps.targetStyles[i] && (this.element.style[i] = this.tweenProps.targetStyles[i]), this.tweenProps.targetStyles[i] = null;
							this.needsStyleUpdate = !1
						}
						this.needsClassUpdate && (this.tweenProps.targetClasses.add.length > 0 && this.element.classList.add.apply(this.element.classList, this.tweenProps.targetClasses.add), this.tweenProps.targetClasses.remove.length > 0 && this.element.classList.remove.apply(this.element.classList, this.tweenProps.targetClasses.remove), this.tweenProps.targetClasses.add.length = 0, this.tweenProps.targetClasses.remove.length = 0, this.needsClassUpdate = !1)
					}
				}, {
					key: "handleEventDispatch",
					value: function() {
						if (0 !== this.keyframesRequiringDispatch.length) {
							for (var e = 0, t = this.keyframesRequiringDispatch.length; e < t; e++) {
								var n = this.keyframesRequiringDispatch[e];
								n.needsEventDispatch = !1, this.eventObject.keyframe = n, this.eventObject.pageMetrics = l.pageMetrics, this.eventObject.event = n.event, this.trigger(n.event, this.eventObject)
							}
							this.keyframesRequiringDispatch.length = 0
						}
					}
				}, {
					key: "updateAnimationConstraints",
					value: function() {
						for (var e = this, t = 0, n = this._activeKeyframes.length; t < n; t++) this._activeKeyframes[t].updateAnimationConstraints();
						this.attributes.forEach(function(t) {
							1 !== e.keyframes[t].length && e.keyframes[t].sort(l.KeyframeComparison)
						}), this.updateDeferredPropertyValues()
					}
				}, {
					key: "refreshMetrics",
					value: function() {
						var e = this,
							t = this._activeKeyframes.map(function(e) {
								return e.relativeTo
							}),
							n = new Set(t);
						n.add(this.element), n.forEach(function(t) {
							return e.group.metrics.refreshMetrics(t)
						}), this.group.keyframesDirty = !0
					}
				}, {
					key: "updateDeferredPropertyValues",
					value: function() {
						for (var e = 0, t = this.attributes.length; e < t; e++) {
							var n = this.attributes[e],
								r = this.keyframes[n],
								i = r[0];
							if (!(i.keyframeType > l.KeyframeTypes.InterpolationForward))
								for (var o = 0, s = r.length; o < s; o++) {
									var a = r[o];
									if (null === a.jsonProps[n][0]) {
										if (0 === o) throw new RangeError("AnimSystem - earliest keyframe cannot defer it's beginning value! " + n + ":[null," + a.jsonProps[n][1] + "]");
										a.animValues[n][0] = r[o - 1].animValues[n][1]
									}
									if (null === a.jsonProps[n][1]) {
										if (o === s - 1) throw new RangeError("AnimSystem - last keyframe cannot defer it's end value! " + n + ":[" + a.jsonProps[n][0] + ",null]");
										a.animValues[n][1] = r[o + 1].animValues[n][0]
									}
								}
						}
					}
				}, {
					key: "getBounds",
					value: function(e) {
						this.boundsMin = Number.MAX_VALUE, this.boundsMax = -Number.MAX_VALUE;
						for (var t = 0, n = this.attributes.length; t < n; t++)
							for (var r = this.keyframes[this.attributes[t]], i = 0; i < r.length; i++) {
								var o = r[i];
								this.boundsMin = Math.min(o.start, this.boundsMin), this.boundsMax = Math.max(o.end, this.boundsMax), e.min = Math.min(o.start, e.min), e.max = Math.max(o.end, e.max)
							}
					}
				}, {
					key: "getNearestKeyframeForAttribute",
					value: function(e, t) {
						var n = null,
							r = Number.POSITIVE_INFINITY,
							i = this.keyframes[t];
						if (void 0 === i) return null;
						var o = i.length;
						if (0 === o) return null;
						if (1 === o) return i[0];
						for (var s = 0; s < o; s++) {
							var a = i[s];
							if (a.isInRange(e)) {
								n = a;
								break
							}
							var l = Math.min(Math.abs(e - a.start), Math.abs(e - a.end));
							l < r && (r = l, n = a)
						}
						return n
					}
				}, {
					key: "getAllKeyframesForAttribute",
					value: function(e) {
						return this.keyframes[e]
					}
				}, {
					key: "updateKeyframe",
					value: function(e, t) {
						var n = this;
						e.parseOptions(t), e.updateAnimationConstraints(), this.group.keyframesDirty = !0, d.update(function() {
							return n.group.trigger(l.EVENTS.ON_KEYFRAME_UPDATED, e)
						}, !0)
					}
				}, {
					key: "removeKeyframe",
					value: function(e) {
						var t = this._allKeyframes.indexOf(e);
						t !== -1 && (this._allKeyframes.splice(t, 1), this.group.keyframesDirty = !0)
					}
				}, {
					key: "updateAnimation",
					value: function(e, t) {
						return this.group.gui && console.warn("KeyframeController.updateAnimation(keyframe,props) has been deprecated. Please use updateKeyframe(keyframe,props)"), this.updateKeyframe(e, t)
					}
				}]), t
			}(f);
		Object.defineProperty(y.prototype, "parentElementMetrics", {
			get: function() {
				return null === this._parentElementMetrics && (this._parentElementMetrics = this.group.metrics.add(this.element.parentElement)), this._parentElementMetrics
			}
		}), t.exports = y
	}, {
		"./Keyframes/Keyframe": 40,
		"./Keyframes/KeyframeCSSClass": 41,
		"./Model/AnimSystemModel": 43,
		"./Model/InferKeyframeFromProps": 46,
		"./Model/UUID": 47,
		"./utils/arrayToObject": 54,
		"@marcom/ac-event-emitter-micro": 2,
		"@marcom/ac-raf-emitter/draw": 33,
		"@marcom/ac-raf-emitter/external": 34,
		"@marcom/ac-raf-emitter/update": 37,
		"@marcom/decompose-css-transform": 68
	}],
	40: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			o = e("../Model/AnimSystemModel"),
			s = e("@marcom/sm-math-utils"),
			a = e("../Model/EasingFunctions"),
			l = e("../Model/UnitBezier"),
			c = e("../utils/arrayToObject"),
			u = function() {
				function e(t, n) {
					r(this, e), this.controller = t, this.relativeTo = t.element, this.jsonProps = n, this.ease = o.KeyframeDefaults.ease, this.easeFunctionString = o.KeyframeDefaults.easeFunctionString, this.easeFunction = a[this.easeFunctionString], this.start = 0, this.end = 0, this.localT = 0, this.curvedT = 0, this.id = 0, this.event = "", this.needsEventDispatch = !1, this.snapAtCreation = !1, this.isEnabled = !1, this.animValues = {}, this.breakpointMask = "SMLX", this.disabledWhen = [], this.keyframeType = o.KeyframeTypes.Interpolation, this.hold = !1
				}
				return i(e, [{
					key: "destroy",
					value: function() {
						this.controller = null, this.relativeTo = null, this.jsonProps = null, this.easeFunction = null, this.animValues = null
					}
				}, {
					key: "remove",
					value: function() {
						return this.controller.removeKeyframe(this)
					}
				}, {
					key: "parseOptions",
					value: function(e) {
						if (this.jsonProps = e, "" !== e.relativeTo && e.relativeTo ? e.relativeTo && (this.relativeTo = this.controller.group.element.querySelector(e.relativeTo) || document.querySelector(e.relativeTo), null === this.relativeTo && (console.warn("Keyframe for", this.controller.element.className, " .relativeTo failed to find " + e.relativeTo + "' via querySelector"), this.relativeTo = this.controller.element), this.controller.group.metrics.add(this.relativeTo)) : this.relativeTo = this.controller.element, e.ease ? this.ease = parseFloat(e.ease) : e.ease = this.ease, e.hasOwnProperty("snapAtCreation") ? this.snapAtCreation = e.snapAtCreation : e.snapAtCreation = this.snapAtCreation, e.easeFunction ? this.easeFunction = e.easeFunction : e.easeFunction = this.easeFunctionString, e.breakpointMask ? this.breakpointMask = e.breakpointMask : e.breakpointMask = this.breakpointMask, e.disabledWhen ? this.disabledWhen = Array.isArray(e.disabledWhen) ? e.disabledWhen : [e.disabledWhen] : e.disabledWhen = this.disabledWhen, e.hasOwnProperty("hold") ? this.hold = e.hold : e.hold = this.hold, this.easeFunction = a[e.easeFunction], !a.hasOwnProperty(e.easeFunction)) {
							var t = l.fromCSSString(e.easeFunction);
							t ? this.easeFunction = t : console.error("Keyframe parseOptions cannot find EasingFunction named '" + e.easingFunction + "'")
						}
						for (var n in e)
							if (o.KeyframeJSONReservedWords.indexOf(n) === -1) {
								var r = e[n];
								if (Array.isArray(r)) {
									if (this.animValues[n] = this.controller.group.expressionParser.parse(this, r), void 0 === this.controller.tweenProps[n] || !this.controller._ownerIsElement) {
										var i = 0;
										this.controller._ownerIsElement || (i = this.controller.element[n]);
										var s = new o.TargetValue(i, o.KeyframeDefaults.epsilon, this.snapAtCreation);
										this.controller.tweenProps[n] = s
									}
									var c = this.controller.tweenProps[n];
									if (e.epsilon) c.epsilon = e.epsilon;
									else {
										var u = Math.abs(this.animValues[n][0] - this.animValues[n][1]),
											h = Math.min(.001 * u, c.epsilon, o.KeyframeDefaults.epsilon);
										c.epsilon = Math.max(h, 1e-4)
									}
								}
							}
						this.keyframeType = this.hold ? o.KeyframeTypes.InterpolationForward : o.KeyframeTypes.Interpolation, e.event && (this.event = e.event)
					}
				}, {
					key: "overwriteProps",
					value: function(e) {
						this.animValues = {};
						var t = Object.assign({}, this.jsonProps, e);
						this.controller.updateKeyframe(this, t)
					}
				}, {
					key: "updateLocalProgress",
					value: function(e) {
						if (this.start === this.end || e > this.end) return this.localT = 1, void(this.curvedT = this.easeFunction(this.localT));
						var t = (e - this.start) / (this.end - this.start),
							n = this.hold ? this.localT : 0;
						this.localT = s.clamp(t, n, 1), this.curvedT = this.easeFunction(this.localT)
					}
				}, {
					key: "reconcile",
					value: function(e) {
						var t = this.animValues[e],
							n = this.controller.tweenProps[e];
						n.initialValue = t[0], n.target = t[0] + this.curvedT * (t[1] - t[0]), n.current !== n.target && (n.current = n.target, this.needsEventDispatch || (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this)))
					}
				}, {
					key: "reset",
					value: function(e) {
						this.localT = e || 0;
						var t = this.ease;
						this.ease = 1;
						for (var n in this.animValues) this.reconcile(n);
						this.ease = t
					}
				}, {
					key: "onDOMRead",
					value: function(e) {
						var t = this.animValues[e],
							n = this.controller.tweenProps[e];
						n.target = t[0] + this.curvedT * (t[1] - t[0]);
						var r = n.current;
						n.current += (n.target - n.current) * this.ease;
						var i = n.current - n.target;
						i < n.epsilon && i > -n.epsilon && (n.current = n.target, i = 0), "" === this.event || this.needsEventDispatch || (i > n.epsilon || i < -n.epsilon || 0 === i && r !== n.current) && (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this))
					}
				}, {
					key: "isInRange",
					value: function(e) {
						return e >= this.start && e <= this.end
					}
				}, {
					key: "setEnabled",
					value: function(e) {
						e = e || c(Array.from(document.documentElement.classList));
						var t = this.breakpointMask.indexOf(o.pageMetrics.breakpoint) !== -1,
							n = !1;
						return this.disabledWhen.length > 0 && (n = this.disabledWhen.some(function(t) {
							return "undefined" != typeof e[t]
						})), this.isEnabled = t && !n, this.isEnabled
					}
				}, {
					key: "updateAnimationConstraints",
					value: function() {
						this.start = this.controller.group.timeParser.parse(this, this.jsonProps.start), this.end = this.controller.group.timeParser.parse(this, this.jsonProps.end), this.updateAnimatedValueConstraints()
					}
				}, {
					key: "updateAnimatedValueConstraints",
					value: function() {
						for (var e in this.animValues) {
							var t = this.jsonProps[e];
							this.animValues[e] = this.controller.group.expressionParser.parse(this, t)
						}
					}
				}]), e
			}();
		u.DATA_ATTRIBUTE = "data-anim-tween", t.exports = u
	}, {
		"../Model/AnimSystemModel": 43,
		"../Model/EasingFunctions": 44,
		"../Model/UnitBezier": 48,
		"../utils/arrayToObject": 54,
		"@marcom/sm-math-utils": 72
	}],
	41: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			a = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			l = e("./Keyframe"),
			c = e("../Model/AnimSystemModel.js"),
			u = function(e) {
				function t(e, n) {
					r(this, t);
					var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
					return o.keyframeType = c.KeyframeTypes.CSSClass, o._triggerType = t.TRIGGER_TYPE_CSS_CLASS, o.cssClass = "", o.friendlyName = "", o.style = {
						on: null,
						off: null
					}, o.toggle = !1, o.isApplied = !1, o
				}
				return o(t, e), a(t, [{
					key: "parseOptions",
					value: function(e) {
						if (!this.controller._ownerIsElement) throw new TypeError("CSS Keyframes cannot be applied to JS Objects");
						if (e.x = void 0, e.y = void 0, e.scale = void 0, e.scaleX = void 0, e.scaleY = void 0, e.rotation = void 0, e.opacity = void 0, e.hold = void 0, void 0 !== e.toggle && (this.toggle = e.toggle), void 0 !== e.cssClass) this._triggerType = t.TRIGGER_TYPE_CSS_CLASS, this.cssClass = e.cssClass, this.friendlyName = "." + this.cssClass, void 0 === this.controller.tweenProps.targetClasses && (this.controller.tweenProps.targetClasses = {
							add: [],
							remove: []
						});
						else {
							if (void 0 === e.style || !this.isValidStyleProperty(e.style)) throw new TypeError("KeyframeCSSClass no 'cssClass` property found. If using `style` property its also missing or invalid");
							if (this._triggerType = t.TRIGGER_TYPE_STYLE_PROPERTY, this.style = e.style, this.friendlyName = "style", this.toggle = void 0 !== this.style.off || this.toggle, this.toggle && void 0 === this.style.off) {
								this.style.off = {};
								for (var n in this.style.on) this.style.off[n] = ""
							}
							void 0 === this.controller.tweenProps.targetStyles && (this.controller.tweenProps.targetStyles = {})
						}
						if (void 0 === e.end && (e.end = e.start),
							e.toggle = this.toggle, this._triggerType === t.TRIGGER_TYPE_CSS_CLASS) this.isApplied = this.controller.element.classList.contains(this.cssClass);
						else {
							var r = getComputedStyle(this.controller.element);
							this.isApplied = !0;
							for (var i in this.style.on)
								if (r[i] !== this.style.on[i]) {
									this.isApplied = !1;
									break
								}
						}
						l.prototype.parseOptions.call(this, e), this.animValues[this.friendlyName] = [0, 0], void 0 === this.controller.tweenProps[this.friendlyName] && (this.controller.tweenProps[this.friendlyName] = new c.TargetValue(0, 1, (!1))), this.keyframeType = c.KeyframeTypes.CSSClass
					}
				}, {
					key: "updateLocalProgress",
					value: function(e) {
						this.isApplied && !this.toggle || (this.start !== this.end ? !this.isApplied && e >= this.start && e <= this.end ? this._apply() : this.isApplied && this.toggle && (e < this.start || e > this.end) && this._unapply() : !this.isApplied && e >= this.start ? this._apply() : this.isApplied && this.toggle && e < this.start && this._unapply())
					}
				}, {
					key: "_apply",
					value: function() {
						if (this._triggerType === t.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.add.push(this.cssClass), this.controller.needsClassUpdate = !0;
						else {
							for (var e in this.style.on) this.controller.tweenProps.targetStyles[e] = this.style.on[e];
							this.controller.needsStyleUpdate = !0
						}
						this.isApplied = !0
					}
				}, {
					key: "_unapply",
					value: function() {
						if (this._triggerType === t.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.remove.push(this.cssClass), this.controller.needsClassUpdate = !0;
						else {
							for (var e in this.style.off) this.controller.tweenProps.targetStyles[e] = this.style.off[e];
							this.controller.needsStyleUpdate = !0
						}
						this.isApplied = !1
					}
				}, {
					key: "isValidStyleProperty",
					value: function(e) {
						if (!e.hasOwnProperty("on")) return !1;
						if ("object" !== s(e.on)) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:hidden, otherProperty: value}}");
						if (this.toggle && e.hasOwnProperty("off") && "object" !== s(e.off)) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:hidden, otherProperty: value}}");
						return !0
					}
				}, {
					key: "reconcile",
					value: function(e, t) {}
				}, {
					key: "onDOMRead",
					value: function(e, t) {}
				}, {
					key: "updateAnimatedValueConstraints",
					value: function() {}
				}]), t
			}(l);
		u.TRIGGER_TYPE_CSS_CLASS = 0, u.TRIGGER_TYPE_STYLE_PROPERTY = 1, u.DATA_ATTRIBUTE = "data-anim-classname", t.exports = u
	}, {
		"../Model/AnimSystemModel.js": 43,
		"./Keyframe": 40
	}],
	42: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = function h(e, t, n) {
				null === e && (e = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(e, t);
				if (void 0 === r) {
					var i = Object.getPrototypeOf(e);
					return null === i ? void 0 : h(i, t, n)
				}
				if ("value" in r) return r.value;
				var o = r.get;
				if (void 0 !== o) return o.call(n)
			},
			l = e("./Keyframe"),
			c = e("../Model/AnimSystemModel.js"),
			u = function(e) {
				function t(e, n) {
					r(this, t);
					var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
					return o.keyframeType = c.KeyframeTypes.Event, o.isApplied = !1, o.hasDuration = !1, o.isCurrentlyInRange = !1, o
				}
				return o(t, e), s(t, [{
					key: "parseOptions",
					value: function(e) {
						e.x = void 0, e.y = void 0, e.scale = void 0, e.scaleX = void 0, e.scaleY = void 0, e.rotation = void 0, e.style = void 0, e.cssClass = void 0, e.rotation = void 0, e.opacity = void 0, e.hold = void 0, void 0 === e.end && (e.end = e.start), this.event = e.event, this.animValues[this.event] = [0, 0], "undefined" == typeof this.controller.tweenProps[this.event] && (this.controller.tweenProps[this.event] = new c.TargetValue(0, 1, (!1))), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "parseOptions", this).call(this, e), this.keyframeType = c.KeyframeTypes.Event
					}
				}, {
					key: "updateLocalProgress",
					value: function(e) {
						if (this.hasDuration) {
							var t = this.isCurrentlyInRange,
								n = e >= this.start && e <= this.end;
							if (t === n) return;
							return n && !t ? this._trigger(this.event + ":enter") : t && !n && this._trigger(this.event + ":exit"), void(this.isCurrentlyInRange = n)
						}!this.isApplied && e >= this.start ? (this._trigger(this.event), this.isApplied = !0) : this.isApplied && e < this.start && (this._trigger(this.event + ":reverse"), this.isApplied = !1)
					}
				}, {
					key: "_trigger",
					value: function(e) {
						this.controller.eventObject.event = e, this.controller.eventObject.keyframe = this, this.controller.trigger(e, this.controller.eventObject)
					}
				}, {
					key: "updateAnimationConstraints",
					value: function() {
						a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateAnimationConstraints", this).call(this), this.hasDuration = this.start !== this.end
					}
				}, {
					key: "onDOMRead",
					value: function(e, t) {}
				}, {
					key: "reconcile",
					value: function(e, t) {}
				}, {
					key: "updateAnimatedValueConstraints",
					value: function() {}
				}]), t
			}(l);
		u.DATA_ATTRIBUTE = "data-anim-event", t.exports = u
	}, {
		"../Model/AnimSystemModel.js": 43,
		"./Keyframe": 40
	}],
	43: [function(e, t, n) {
		"use strict";
		var r = {
			GUI_INSTANCE: null,
			ANIM_INSTANCE: null,
			VIEWPORT_EMITTER_ELEMENT: void 0,
			LOCAL_STORAGE_KEYS: {
				GuiPosition: "GuiPosition-0"
			},
			RESIZE_TIMEOUT: -1,
			BREAKPOINTS: [{
				name: "S",
				longName: "small",
				mediaQuery: "only screen and (max-width: 735px)"
			}, {
				name: "M",
				longName: "medium",
				mediaQuery: "only screen and (max-width: 1068px)"
			}, {
				name: "L",
				longName: "xlarge",
				mediaQuery: "only screen and (min-width: 1442px)"
			}, {
				name: "L",
				longName: "large",
				mediaQuery: "only screen and (min-width: 1069px)"
			}],
			getBreakpoint: function() {
				for (var e = 0; e < r.BREAKPOINTS.length; e++) {
					var t = r.BREAKPOINTS[e],
						n = window.matchMedia(t.mediaQuery);
					if (n.matches) return t.name
				}
			},
			KeyframeDefaults: {
				ease: .1,
				epsilon: .05,
				easeFunctionString: "linear",
				easeFunction: "linear",
				hold: !1,
				snapAtCreation: !1,
				toggle: !1,
				breakpointMask: "SMLX",
				event: "",
				disabledWhen: [],
				cssClass: ""
			},
			KeyframeTypes: {
				Interpolation: 0,
				InterpolationForward: 1,
				CSSClass: 2,
				Event: 3
			},
			EVENTS: {
				ON_DOM_KEYFRAMES_CREATED: "ON_DOM_KEYFRAMES_CREATED",
				ON_DOM_GROUPS_CREATED: "ON_DOM_GROUPS_CREATED",
				ON_GROUP_CREATED: "ON_GROUP_CREATED",
				ON_KEYFRAME_UPDATED: "ON_KEYFRAME_UPDATED",
				ON_TIMELINE_START: "ON_TIMELINE_START",
				ON_TIMELINE_UPDATE: "ON_TIMELINE_UPDATE",
				ON_TIMELINE_COMPLETE: "ON_TIMELINE_COMPLETE"
			},
			PageEvents: {
				ON_SCROLL: "ON_SCROLL",
				ON_RESIZE_IMMEDIATE: "ON_RESIZE_IMMEDIATE",
				ON_RESIZE_DEBOUNCED: "ON_RESIZE_DEBOUNCED",
				ON_BREAKPOINT_CHANGE: "ON_BREAKPOINT_CHANGE"
			},
			KeyframeJSONReservedWords: ["event", "cssClass", "style", "relativeTo", "start", "end", "epsilon", "easeFunction", "ease", "breakpointMask", "disabledWhen"],
			TargetValue: function(e, t, n) {
				this.epsilon = parseFloat(t), this.snapAtCreation = n, this.initialValue = e, this.target = e, this.current = e
			},
			Timeline: function() {
				this.local = 0, this.localUnclamped = 0
			},
			ViewableRange: function(e, t) {
				this.a = e.top - t, this.a < 0 && (this.a = e.top), this.b = e.top, this.d = e.bottom, this.c = Math.max(this.d - t, this.b)
			},
			pageMetrics: new function() {
				this.scrollX = 0, this.scrollY = 0, this.windowWidth = 0, this.windowHeight = 0, this.documentOffsetX = 0, this.documentOffsetY = 0, this.previousBreakpoint = "", this.breakpoint = ""
			},
			EventObject: function(e) {
				this.controller = e, this.element = this.controller.element, this.keyframe = null, this.event = "", this.tweenProps = this.controller.tweenProps
			},
			KeyframeComparison: function(e, t) {
				return e.start < t.start ? -1 : e.start > t.start ? 1 : 0
			},
			AnimInfo: function(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				this.isGroup = n, this.group = e, this.controller = t
			}
		};
		t.exports = r
	}, {}],
	44: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var i = function o() {
			r(this, o), this.linear = function(e) {
				return e
			}, this.easeInQuad = function(e) {
				return e * e
			}, this.easeOutQuad = function(e) {
				return e * (2 - e)
			}, this.easeInOutQuad = function(e) {
				return e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
			}, this.easeInSin = function(e) {
				return 1 + Math.sin(Math.PI / 2 * e - Math.PI / 2)
			}, this.easeOutSin = function(e) {
				return Math.sin(Math.PI / 2 * e)
			}, this.easeInOutSin = function(e) {
				return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2
			}, this.easeInElastic = function(e) {
				return 0 === e ? e : (.04 - .04 / e) * Math.sin(25 * e) + 1
			}, this.easeOutElastic = function(e) {
				return .04 * e / --e * Math.sin(25 * e)
			}, this.easeInOutElastic = function(e) {
				return (e -= .5) < 0 ? (.02 + .01 / e) * Math.sin(50 * e) : (.02 - .01 / e) * Math.sin(50 * e) + 1
			}, this.easeOutBack = function(e) {
				return e -= 1, e * e * (2.70158 * e + 1.70158) + 1
			}, this.easeInCubic = function(e) {
				return e * e * e
			}, this.easeOutCubic = function(e) {
				return --e * e * e + 1
			}, this.easeInOutCubic = function(e) {
				return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
			}, this.easeInQuart = function(e) {
				return e * e * e * e
			}, this.easeOutQuart = function(e) {
				return 1 - --e * e * e * e
			}, this.easeInOutQuart = function(e) {
				return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
			}, this.easeInQuint = function(e) {
				return e * e * e * e * e
			}, this.easeOutQuint = function(e) {
				return 1 + --e * e * e * e * e
			}, this.easeInOutQuint = function(e) {
				return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
			}
		};
		t.exports = new i
	}, {}],
	45: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			o = e("./AnimSystemModel"),
			s = function(e, t) {
				return void 0 === e || null === e ? t : e
			},
			a = window.Symbol || function() {
				var e = 0;
				return function() {
					return ++e + ""
				}
			}(),
			l = function() {
				function e() {
					r(this, e), this._symbols = [], this._lut = {}
				}
				return i(e, [{
					key: "destroy",
					value: function() {
						for (var e = 0, t = this._symbols.length; e < t; e++) {
							var n = this._lut[this._symbols[e]];
							n.el = null
						}
						this._lut = null
					}
				}, {
					key: "add",
					value: function(e) {
						if (void 0 === e._animSymbol && (e._animSymbol = a()), void 0 === this._lut[e._animSymbol]) {
							var t = new c(e);
							this._refreshMetrics(t), this._lut[e._animSymbol] = t, this._symbols.push(e._animSymbol)
						}
						return this._lut[e._animSymbol]
					}
				}, {
					key: "get",
					value: function(e) {
						if (void 0 === e._animSymbol) throw "ElementMetricsLookup Attempting to retrieve info on element which is not being tracked.";
						return this._lut[e._animSymbol]
					}
				}, {
					key: "refreshAll",
					value: function() {
						for (var e = 0, t = this._symbols.length; e < t; e++) {
							var n = this._lut[this._symbols[e]];
							this._refreshMetrics(n)
						}
					}
				}, {
					key: "refreshMetrics",
					value: function(e) {
						var t = this.get(e);
						return t ? this._refreshMetrics(t) : null
					}
				}, {
					key: "_refreshMetrics",
					value: function(e) {
						var t = e.el;
						if (!(t instanceof Element)) return e.width = s(t.width, 0), e.height = s(t.height, 0), e.top = s(t.top, 0), e.left = s(t.left, 0), e.right = e.left + e.width, void(e.bottom = e.top + e.height);
						if (void 0 === t.offsetWidth) {
							var n = t.getBoundingClientRect();
							return e.width = n.width, e.height = n.height, e.top = o.pageMetrics.scrollY + n.top, e.left = o.pageMetrics.scrollX + n.left, e.right = e.left + e.width, e.bottom = e.top + e.height, e
						}
						e.width = t.offsetWidth, e.height = t.offsetHeight, e.top = o.pageMetrics.documentOffsetY, e.left = o.pageMetrics.documentOffsetX;
						for (var r = t; r;) e.top += r.offsetTop, e.left += r.offsetLeft, r = r.offsetParent;
						return e.right = e.left + e.width, e.bottom = e.top + e.height, e
					}
				}]), e
			}(),
			c = function() {
				function e(t) {
					r(this, e), this.el = t, this.top = 0, this.bottom = 0, this.left = 0, this.right = 0, this.height = 0, this.width = 0
				}
				return i(e, [{
					key: "toString",
					value: function() {
						return "top:" + this.top + ", bottom:" + this.bottom + ", left:" + this.left + ", right:" + this.right + ", height:" + this.height + ", width:" + this.width
					}
				}, {
					key: "toObject",
					value: function() {
						return {
							top: this.top,
							bottom: this.bottom,
							left: this.left,
							right: this.right,
							height: this.height,
							width: this.width
						}
					}
				}, {
					key: "destroy",
					value: function() {
						this.el = null
					}
				}]), e
			}();
		t.exports = l
	}, {
		"./AnimSystemModel": 43
	}],
	46: [function(e, t, n) {
		"use strict";
		var r = e("./AnimSystemModel"),
			i = e("../Keyframes/Keyframe"),
			o = e("../Keyframes/KeyframeDiscreteEvent"),
			s = e("../Keyframes/KeyframeCSSClass"),
			a = function(e) {
				for (var t in e) {
					var n = e[t];
					if (r.KeyframeJSONReservedWords.indexOf(t) === -1 && Array.isArray(n)) return !0
				}
				return !1
			};
		t.exports = function(e) {
			if (void 0 !== e.cssClass || void 0 !== e.style) {
				if (a(e)) throw "CSS Keyframes cannot tween values, please use multiple keyframes instead";
				return s
			}
			if (a(e)) return i;
			if (e.event) return o;
			throw "Could not determine tween type based on " + JSON.stringify(e)
		}
	}, {
		"../Keyframes/Keyframe": 40,
		"../Keyframes/KeyframeCSSClass": 41,
		"../Keyframes/KeyframeDiscreteEvent": 42,
		"./AnimSystemModel": 43
	}],
	47: [function(e, t, n) {
		"use strict";
		t.exports = function() {
			for (var e = "", t = 0; t < 8; t++) {
				var n = 16 * Math.random() | 0;
				8 !== t && 12 !== t && 16 !== t && 20 !== t || (e += "-"), e += (12 === t ? 4 : 16 === t ? 3 & n | 8 : n).toString(16)
			}
			return e
		}
	}, {}],
	48: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			o = 1e-5,
			s = Math.abs,
			a = 5,
			l = function() {
				function e(t, n, i, o) {
					r(this, e), this.cp = new Float32Array(6), this.cp[0] = 3 * t, this.cp[1] = 3 * (i - t) - this.cp[0], this.cp[2] = 1 - this.cp[0] - this.cp[1], this.cp[3] = 3 * n, this.cp[4] = 3 * (o - n) - this.cp[3], this.cp[5] = 1 - this.cp[3] - this.cp[4]
				}
				return i(e, [{
					key: "sampleCurveX",
					value: function(e) {
						return ((this.cp[2] * e + this.cp[1]) * e + this.cp[0]) * e
					}
				}, {
					key: "sampleCurveY",
					value: function(e) {
						return ((this.cp[5] * e + this.cp[4]) * e + this.cp[3]) * e
					}
				}, {
					key: "sampleCurveDerivativeX",
					value: function(e) {
						return (3 * this.cp[2] * e + 2 * this.cp[1]) * e + this.cp[0]
					}
				}, {
					key: "solveCurveX",
					value: function(e) {
						var t, n, r, i, l, c;
						for (r = e, c = 0; c < a; c++) {
							if (i = this.sampleCurveX(r) - e, s(i) < o) return r;
							if (l = this.sampleCurveDerivativeX(r), s(l) < o) break;
							r -= i / l
						}
						if (t = 0, n = 1, r = e, r < t) return t;
						if (r > n) return n;
						for (; t < n;) {
							if (i = this.sampleCurveX(r), s(i - e) < o) return r;
							e > i ? t = r : n = r, r = .5 * (n - t) + t
						}
						return r
					}
				}, {
					key: "solve",
					value: function(e) {
						return this.sampleCurveY(this.solveCurveX(e))
					}
				}]), e
			}(),
			c = /\d*\.?\d+/g;
		l.fromCSSString = function(e) {
			var t = e.match(c);
			if (4 !== t.length) throw "UnitBezier could not convert " + e + " to cubic-bezier";
			var n = t.map(Number),
				r = new l(n[0], n[1], n[2], n[3]);
			return r.solve.bind(r)
		}, t.exports = l
	}, {}],
	49: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			o = e("../Model/AnimSystemModel"),
			s = e("./Operations"),
			a = /([-|\+])?(\d+\.?\d*)(px|vh|vw|pw|ph|\%w|\%h|rw|rh|\%)?|(-|\+|\*|\/)/g,
			l = /^[-+]?(?:[0-9]{0,30}\.)?[0-9]{1,30}(?:[Ee][-+]?[1-2]?[0-9])?$/g,
			c = function() {
				function e(t) {
					r(this, e), this.group = t
				}
				return i(e, [{
					key: "parse",
					value: function(e, t) {
						if (Array.isArray(t)) return this.parseArray(e, t);
						throw new Error("Keyframe value `" + t + "` is not supported. Only arrays in the form of [start,end] are currently supported")
					}
				}, {
					key: "parseArray",
					value: function(e, t) {
						var n = this.parseExpression(e, t[0]),
							r = this.parseExpression(e, t[1]);
						return [n, r]
					}
				}, {
					key: "parseExpression",
					value: function(e, t) {
						if (null === t) return 0;
						if ("number" == typeof t) return t;
						for (var n = 5, r = void 0;
							(r = t.indexOf("(")) !== -1 && --n > 0;) {
							var i = this.captureParenthesis(t, r),
								o = this.parseExpression(e, i);
							t = t.replace("(" + i + ")", o)
						}
						for (var l = void 0, c = []; null !== (l = a.exec(t));)
							if (l.index === a.lastIndex && a.lastIndex++, l[4]) c.push(s.GetOpCode(l[4]));
							else {
								var u = l[1],
									h = parseFloat(l[2]),
									m = l[3];
								"-" === u && (h *= -1);
								var f = this.parseSplitUnit(e, h, m);
								c.push(f)
							}
						var p = c.length;
						if (3 === p && "function" == typeof c[1]) return c[1](c[0], c[2]);
						for (var d = 0; d < p; d++)
							if ("function" == typeof c[d] && 1 === c[d].priority) {
								var y = c[d - 1],
									v = c[d + 1],
									b = c[d](y, v);
								c[d - 1] = null, c[d + 0] = null, c[d + 1] = b, d += 1
							}
						for (var g = 0; null == c[g] && g < p;) g += 1;
						var _ = c[g],
							E = null,
							w = null;
						for (g += 1; g < p; g++) null !== c[g] ? c[g] instanceof Function ? E = c[g] : (null === w && (w = c[g]), null !== w && (E = E || s.add, _ = E(_, w), E = null, w = null)) : g += 1;
						return _
					}
				}, {
					key: "parseSplitUnit",
					value: function(e, t, n) {
						if ("undefined" == typeof n) return parseFloat(t);
						switch (n) {
							case "vh":
								return .01 * t * o.pageMetrics.windowHeight;
							case "%":
								return .01 * t * e.controller.elementMetrics.height;
							case "px":
								return t;
							case "rh":
								return .01 * t * this.group.metrics.get(e.relativeTo).height;
							case "vw":
								return .01 * t * o.pageMetrics.windowWidth;
							case "rw":
								return .01 * t * this.group.metrics.get(e.relativeTo).width;
							case "%w":
								return .01 * t * e.controller.elementMetrics.width;
							case "%h":
								return .01 * t * e.controller.elementMetrics.height;
							case "pw":
								return .01 * t * e.controller.parentElementMetrics.width;
							case "ph":
								return .01 * t * e.controller.parentElementMetrics.height;
							default:
								throw new Error("ExpressionParser: no strategy found for unit `" + n + "` only `vh, vw, %, ph, pw` are supported")
						}
					}
				}, {
					key: "captureParenthesis",
					value: function(e, t) {
						for (var n = "", r = 0, i = !1, o = e.length, s = t; s < o; s++)
							if ("(" === e[s] ? (r += 1, i && (n += e[s]), i = !0) : ")" === e[s] ? (r -= 1, 0 !== r && (n += e[s])) : i && (n += e[s]), i && 0 === r) return n
					}
				}, {
					key: "isUnitlessNumber",
					value: function(e) {
						return String(e).match(l)
					}
				}, {
					key: "destroy",
					value: function() {
						this.group = null
					}
				}, {
					key: "logParts",
					value: function(e) {
						console.log(e.reduce(function(e, t) {
							return "function" == typeof t ? e + t.friendlyName + " " : e + (t + " ")
						}, ""))
					}
				}]), e
			}();
		t.exports = c
	}, {
		"../Model/AnimSystemModel": 43,
		"./Operations": 50
	}],
	50: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var i = function o() {
			r(this, o), this.add = function(e, t) {
				return e + t
			}, this.sub = function(e, t) {
				return e - t
			}, this.mul = function(e, t) {
				return e * t
			}, this.div = function(e, t) {
				return e / t
			}, this.add.friendlyName = "add", this.sub.friendlyName = "sub", this.mul.friendlyName = "mul", this.div.friendlyName = "div", this.add.priority = 0, this.sub.priority = 0, this.mul.priority = 1, this.div.priority = 1, this.GetOpCode = function(e) {
				switch (e) {
					case "-":
						return this.sub;
					case "+":
						return this.add;
					case "*":
						return this.mul;
					case "/":
						return this.div;
					default:
						throw new Error('AnimSystem.parsing.Operations - op code "' + e + "\" was found. Only '+ - * /' are supported. Check expression for typos/spacing issues")
				}
			}
		};
		t.exports = new i
	}, {}],
	51: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			o = function() {
				function e(t) {
					var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					r(this, e), this.group = t, this.groupIsTimeBased = n
				}
				return i(e, [{
					key: "parse",
					value: function(e, t) {
						if ("number" == typeof t) return t;
						var n = this.groupIsTimeBased ? 0 : this.group.metrics.get(e.relativeTo).top,
							r = this.group.expressionParser.parseExpression(e, t),
							i = r + n;
						return this.group.convertScrollPositionToTValue(i)
					}
				}, {
					key: "destroy",
					value: function() {
						this.group = null
					}
				}]), e
			}();
		t.exports = o
	}, {}],
	52: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = function b(e, t, n) {
				null === e && (e = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(e, t);
				if (void 0 === r) {
					var i = Object.getPrototypeOf(e);
					return null === i ? void 0 : b(i, t, n)
				}
				if ("value" in r) return r.value;
				var o = r.get;
				if (void 0 !== o) return o.call(n)
			},
			l = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
			c = e("@marcom/sm-math-utils"),
			u = e("./utils/arrayToObject"),
			h = e("./Model/AnimSystemModel"),
			m = e("./Model/ElementMetricsLookup"),
			f = e("./Parsing/ExpressionParser"),
			p = e("./Parsing/TimeParser"),
			d = e("./KeyframeController"),
			y = {
				create: e("@marcom/ac-raf-emitter/RAFEmitter"),
				update: e("@marcom/ac-raf-emitter/update"),
				draw: e("@marcom/ac-raf-emitter/draw")
			},
			v = function(e) {
				function t(e, n) {
					r(this, t);
					var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return o.anim = n, o.element = e, o.name = o.name || e.getAttribute("data-anim-scroll-group"), o.isEnabled = !0, o.timelines = new h.Timeline, o.metrics = new m, o.metrics.add(o.element), o.expressionParser = new f(o), o.timeParser = new p(o), o.boundsMin = 0, o.boundsMax = 0, o.lastPosition = 0, o.timelineUpdateRequired = !1, o._keyframesDirty = !1, o.viewableRange = o.createViewableRange(), o.keyframeControllers = [], o.updateProgress(o.getPosition()), o.onDOMRead = o.onDOMRead.bind(o), o.onDOMWrite = o.onDOMWrite.bind(o), o.gui = null, o.finalizeInit(), o
				}
				return o(t, e), s(t, [{
					key: "finalizeInit",
					value: function() {
						this.element._animInfo = new h.AnimInfo(this, null, (!0)), this.setupRAFEmitter()
					}
				}, {
					key: "destroy",
					value: function() {
						this.expressionParser.destroy(), this.expressionParser = null, this.timeParser.destroy(), this.timeParser = null;
						for (var e = 0, n = this.keyframeControllers.length; e < n; e++) this.keyframeControllers[e].destroy();
						this.timelines = null, this.viewableRange = null, this.gui && (this.gui.destroy(), this.gui = null), this.metrics.destroy(), this.metrics = null, this.rafEmitter.destroy(), this.rafEmitter = null, this.anim = null, this.element = null, this.isEnabled = !1, a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
					}
				}, {
					key: "removeKeyframeController",
					value: function(e) {
						var t = this;
						this.keyframeControllers.includes(e) && (e._allKeyframes = [], this.keyframesDirty = !0, y.update(function() {
							var n = t.keyframeControllers.indexOf(e);
							n !== -1 && (t.keyframeControllers.splice(n, 1), e.destroy(), t.gui && t.gui.create())
						}))
					}
				}, {
					key: "remove",
					value: function() {
						this.anim.removeGroup(this)
					}
				}, {
					key: "setupRAFEmitter",
					value: function(e) {
						this.rafEmitter && this.rafEmitter.destroy(), this.rafEmitter = e || new y.create, this.rafEmitter.on("update", this.onDOMRead), this.rafEmitter.on("draw", this.onDOMWrite)
					}
				}, {
					key: "requestDOMChange",
					value: function() {
						return !!this.isEnabled && this.rafEmitter.run()
					}
				}, {
					key: "onDOMRead",
					value: function() {
						this.keyframesDirty && this.onKeyframesDirty();
						for (var e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].onDOMRead(this.timelines)
					}
				}, {
					key: "onDOMWrite",
					value: function() {
						for (var e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].onDOMWrite(this.timelines);
						this.needsUpdate() && this.requestDOMChange()
					}
				}, {
					key: "needsUpdate",
					value: function() {
						if (this._keyframesDirty) return !0;
						for (var e = 0, t = this.keyframeControllers.length; e < t; e++)
							if (this.keyframeControllers[e].needsUpdate()) return !0;
						return !1
					}
				}, {
					key: "addKeyframe",
					value: function(e, t) {
						var n = this.anim.getControllerForTarget(e);
						return null === n && (n = new d(this, e), this.keyframeControllers.push(n)), this.keyframesDirty = !0, n.addKeyframe(t)
					}
				}, {
					key: "forceUpdate",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							t = e.recalculateActiveKeyframes,
							n = void 0 !== t && t,
							r = e.waitForNextUpdate,
							i = void 0 === r || r;
						this.isEnabled && (n && this.determineActiveKeyframes(), this.metrics.refreshAll(), this.viewableRange = this.createViewableRange(), this.hasDuration() && (this.timelineUpdateRequired = !0, i ? this.keyframesDirty = !0 : this.onKeyframesDirty()))
					}
				}, {
					key: "onKeyframesDirty",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							t = e.preventOnScroll,
							n = void 0 !== t && t;
						this.determineActiveKeyframes();
						for (var r = 0, i = this.keyframeControllers.length; r < i; r++) this.keyframeControllers[r].updateAnimationConstraints();
						this.updateProgress(this.getPosition()), this.updateBounds(), n || this._onScroll(), this.gui && this.gui.create(), this.keyframesDirty = !1
					}
				}, {
					key: "reconcile",
					value: function() {
						for (var e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].reconcile()
					}
				}, {
					key: "determineActiveKeyframes",
					value: function(e) {
						e = e || u(Array.from(document.documentElement.classList));
						for (var t = 0, n = this.keyframeControllers.length; t < n; t++) this.keyframeControllers[t].determineActiveKeyframes(e)
					}
				}, {
					key: "updateBounds",
					value: function() {
						if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
						for (var e = {
								min: Number.POSITIVE_INFINITY,
								max: Number.NEGATIVE_INFINITY
							}, t = 0, n = this.keyframeControllers.length; t < n; t++) this.keyframeControllers[t].getBounds(e);
						var r = this.convertTValueToScrollPosition(e.min),
							i = this.convertTValueToScrollPosition(e.max);
						i - r < h.pageMetrics.windowHeight ? (e.min = this.convertScrollPositionToTValue(r - .5 * h.pageMetrics.windowHeight), e.max = this.convertScrollPositionToTValue(i + .5 * h.pageMetrics.windowHeight)) : (e.min -= .001, e.max += .001), this.boundsMin = e.min, this.boundsMax = e.max, this.timelineUpdateRequired = !0
					}
				}, {
					key: "_onBreakpointChange",
					value: function(e, t) {
						this.keyframesDirty = !0, this.determineActiveKeyframes()
					}
				}, {
					key: "updateProgress",
					value: function(e) {
						return this.hasDuration() ? void(this.timelines.localUnclamped = (e - this.viewableRange.a) / (this.viewableRange.d - this.viewableRange.a)) : void(this.timelines.local = this.timelines.localUnclamped = 0)
					}
				}, {
					key: "performTimelineDispatch",
					value: function() {
						for (var e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].updateLocalProgress(this.timelines.local);
						this.trigger(h.EVENTS.ON_TIMELINE_UPDATE, this.timelines.local), this.timelineUpdateRequired = !1, this.lastPosition !== this.timelines.local && (this.lastPosition <= this.boundsMin && this.timelines.localUnclamped > this.boundsMin ? this.trigger(h.EVENTS.ON_TIMELINE_START, this) : this.lastPosition >= this.boundsMin && this.timelines.localUnclamped < this.boundsMin ? this.trigger(h.EVENTS.ON_TIMELINE_START + ":reverse", this) : this.lastPosition <= this.boundsMax && this.timelines.localUnclamped > this.boundsMax ? this.trigger(h.EVENTS.ON_TIMELINE_COMPLETE, this) : this.lastPosition >= this.boundsMax && this.timelines.localUnclamped < this.boundsMax && this.trigger(h.EVENTS.ON_TIMELINE_COMPLETE + ":reverse", this)), null !== this.gui && this.gui.onScrollUpdate(this.timelines)
					}
				}, {
					key: "_onScroll",
					value: function(e) {
						if (!this.isEnabled) return !1;
						void 0 === e && (e = this.getPosition()), this.updateProgress(e);
						var t = this.lastPosition === this.boundsMin || this.lastPosition === this.boundsMax,
							n = this.timelines.localUnclamped === this.boundsMin || this.timelines.localUnclamped === this.boundsMax;
						if (!this.timelineUpdateRequired && t && n) return void(this.timelines.local = this.timelines.localUnclamped);
						if (this.timelineUpdateRequired || this.timelines.localUnclamped > this.boundsMin && this.timelines.localUnclamped < this.boundsMax) return this.timelines.local = c.clamp(this.timelines.localUnclamped, this.boundsMin, this.boundsMax), this.performTimelineDispatch(), this.requestDOMChange(), void(this.lastPosition = this.timelines.localUnclamped);
						var r = this.lastPosition > this.boundsMin && this.lastPosition < this.boundsMax,
							i = this.timelines.localUnclamped <= this.boundsMin || this.timelines.localUnclamped >= this.boundsMax;
						return r && i ? (this.timelines.local = c.clamp(this.timelines.localUnclamped, this.boundsMin, this.boundsMax), this.performTimelineDispatch(), this.requestDOMChange(), void(this.lastPosition = this.timelines.localUnclamped)) : void(null !== this.gui && this.gui.onScrollUpdate(this.timelines))
					}
				}, {
					key: "convertScrollPositionToTValue",
					value: function(e) {
						return this.hasDuration() ? c.map(e, this.viewableRange.a, this.viewableRange.d, 0, 1) : 0
					}
				}, {
					key: "convertTValueToScrollPosition",
					value: function(e) {
						return this.hasDuration() ? c.map(e, 0, 1, this.viewableRange.a, this.viewableRange.d) : 0
					}
				}, {
					key: "hasDuration",
					value: function() {
						return this.viewableRange.a !== this.viewableRange.d
					}
				}, {
					key: "getPosition",
					value: function() {
						return h.pageMetrics.scrollY
					}
				}, {
					key: "createViewableRange",
					value: function() {
						return new h.ViewableRange(this.metrics.get(this.element), h.pageMetrics.windowHeight)
					}
				}, {
					key: "getControllerForTarget",
					value: function(e) {
						return this.anim.getControllerForTarget(e)
					}
				}, {
					key: "trigger",
					value: function(e, t) {
						if ("undefined" != typeof this._events[e])
							for (var n = this._events[e].length - 1; n >= 0; n--) void 0 !== t ? this._events[e][n](t) : this._events[e][n]()
					}
				}, {
					key: "keyframesDirty",
					set: function(e) {
						this._keyframesDirty = e, this._keyframesDirty && this.requestDOMChange()
					},
					get: function() {
						return this._keyframesDirty
					}
				}, {
					key: "keyFrames",
					get: function() {
						return this.viewableRange
					}
				}]), t
			}(l);
		t.exports = v
	}, {
		"./KeyframeController": 39,
		"./Model/AnimSystemModel": 43,
		"./Model/ElementMetricsLookup": 45,
		"./Parsing/ExpressionParser": 49,
		"./Parsing/TimeParser": 51,
		"./utils/arrayToObject": 54,
		"@marcom/ac-event-emitter-micro": 2,
		"@marcom/ac-raf-emitter/RAFEmitter": 27,
		"@marcom/ac-raf-emitter/draw": 33,
		"@marcom/ac-raf-emitter/update": 37,
		"@marcom/sm-math-utils": 72
	}],
	53: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = function f(e, t, n) {
				null === e && (e = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(e, t);
				if (void 0 === r) {
					var i = Object.getPrototypeOf(e);
					return null === i ? void 0 : f(i, t, n)
				}
				if ("value" in r) return r.value;
				var o = r.get;
				if (void 0 !== o) return o.call(n)
			},
			l = e("./ScrollGroup"),
			c = e("@marcom/sm-math-utils"),
			u = 0,
			h = {
				create: e("@marcom/ac-raf-emitter/RAFEmitter")
			},
			m = function(e) {
				function t(e, n) {
					r(this, t), e || (e = document.createElement("div"), e.className = "TimeGroup-" + u++);
					var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
					return o.name = o.name || e.getAttribute("data-anim-time-group"), o.timeParser.groupIsTimeBased = !0, o._isPaused = !0, o._repeats = 0, o._isReversed = !1, o._timeScale = 1, o
				}
				return o(t, e), s(t, [{
					key: "finalizeInit",
					value: function() {
						if (!this.anim) throw "TimeGroup not instantiated correctly. Please use `AnimSystem.createTimeGroup(el)`";
						this.onPlayTimeUpdate = this.onPlayTimeUpdate.bind(this), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "finalizeInit", this).call(this)
					}
				}, {
					key: "progress",
					value: function(e) {
						if (void 0 === e) return 0 === this.boundsMax ? 0 : this.timelines.local / this.boundsMax;
						var t = e * this.boundsMax;
						this._onScroll(t)
					}
				}, {
					key: "time",
					value: function(e) {
						return void 0 === e ? this.timelines.local : (e = c.clamp(e, this.boundsMin, this.boundsMax), void this._onScroll(e))
					}
				}, {
					key: "play",
					value: function(e) {
						this.reversed(!1), this.isEnabled = !0, this._isPaused = !1, this.time(e), this._playheadEmitter.run()
					}
				}, {
					key: "reverse",
					value: function(e) {
						this.reversed(!0), this.isEnabled = !0, this._isPaused = !1, this.time(e), this._playheadEmitter.run()
					}
				}, {
					key: "restart",
					value: function() {
						this._isReversed ? (this.progress(1), this.reverse()) : (this.progress(0), this.play())
					}
				}, {
					key: "pause",
					value: function(e) {
						this.time(e), this._isPaused = !0
					}
				}, {
					key: "paused",
					value: function(e) {
						return void 0 === e ? this._isPaused : (this._isPaused = e, this._isPaused || this.play(), this)
					}
				}, {
					key: "onPlayTimeUpdate",
					value: function(e) {
						if (!this._isPaused) {
							var n = c.clamp(e.delta / 1e3, 0, .5);
							this._isReversed && (n = -n);
							var r = this.time(),
								i = r + n * this._timeScale;
							if (this._repeats === t.REPEAT_FOREVER || this._repeats > 0) {
								var o = !1;
								!this._isReversed && i > this.boundsMax ? (i -= this.boundsMax, o = !0) : this._isReversed && i < 0 && (i = this.boundsMax + i, o = !0), o && (this._repeats = this._repeats === t.REPEAT_FOREVER ? t.REPEAT_FOREVER : this._repeats - 1)
							}
							this.time(i), this._playheadEmitter.run()
						}
					}
				}, {
					key: "updateProgress",
					value: function(e) {
						return this.hasDuration() ? void(this.timelines.localUnclamped = e) : void(this.timelines.local = this.timelines.localUnclamped = 0);
					}
				}, {
					key: "updateBounds",
					value: function() {
						if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
						for (var e = {
								min: Number.POSITIVE_INFINITY,
								max: Number.NEGATIVE_INFINITY
							}, t = 0, n = this.keyframeControllers.length; t < n; t++) this.keyframeControllers[t].getBounds(e);
						this.boundsMin = 0, this.boundsMax = e.max, this.viewableRange.a = this.viewableRange.b = 0, this.viewableRange.c = this.viewableRange.d = this.boundsMax, this.timelineUpdateRequired = !0
					}
				}, {
					key: "setupRAFEmitter",
					value: function(e) {
						this._playheadEmitter = new h.create, this._playheadEmitter.on("update", this.onPlayTimeUpdate), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setupRAFEmitter", this).call(this, e)
					}
				}, {
					key: "timeScale",
					value: function(e) {
						return void 0 === e ? this._timeScale : (this._timeScale = e, this)
					}
				}, {
					key: "repeats",
					value: function(e) {
						return void 0 === e ? this._repeats : (this._repeats = e, this)
					}
				}, {
					key: "reversed",
					value: function(e) {
						return void 0 === e ? this._isReversed : (this._isReversed = e, this)
					}
				}, {
					key: "getPosition",
					value: function() {
						return this.timelines.local
					}
				}, {
					key: "convertScrollPositionToTValue",
					value: function(e) {
						return e
					}
				}, {
					key: "convertTValueToScrollPosition",
					value: function(e) {
						return e
					}
				}, {
					key: "hasDuration",
					value: function() {
						return this.boundsMax > 0
					}
				}, {
					key: "destroy",
					value: function() {
						this._playheadEmitter.destroy(), this._playheadEmitter = null, a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
					}
				}, {
					key: "duration",
					get: function() {
						return this.boundsMax
					}
				}]), t
			}(l);
		m.REPEAT_FOREVER = -1, t.exports = m
	}, {
		"./ScrollGroup": 52,
		"@marcom/ac-raf-emitter/RAFEmitter": 27,
		"@marcom/sm-math-utils": 72
	}],
	54: [function(e, t, n) {
		"use strict";
		var r = function(e) {
			return e.reduce(function(e, t) {
				return e[t] = t, e
			}, {})
		};
		t.exports = r
	}, {}],
	55: [function(e, t, n) {
		arguments[4][26][0].apply(n, arguments)
	}, {
		dup: 26
	}],
	56: [function(e, t, n) {
		arguments[4][27][0].apply(n, arguments)
	}, {
		"./sharedRAFEmitterIDGeneratorInstance": 62,
		"./sharedRAFExecutorInstance": 63,
		"@marcom/ac-event-emitter-micro": 2,
		dup: 27
	}],
	57: [function(e, t, n) {
		arguments[4][28][0].apply(n, arguments)
	}, {
		"@marcom/ac-event-emitter-micro/EventEmitterMicro": 3,
		dup: 28
	}],
	58: [function(e, t, n) {
		arguments[4][29][0].apply(n, arguments)
	}, {
		"./SingleCallRAFEmitter": 60,
		dup: 29
	}],
	59: [function(e, t, n) {
		arguments[4][30][0].apply(n, arguments)
	}, {
		"./RAFInterface": 58,
		dup: 30
	}],
	60: [function(e, t, n) {
		arguments[4][31][0].apply(n, arguments)
	}, {
		"./RAFEmitter": 56,
		dup: 31
	}],
	61: [function(e, t, n) {
		arguments[4][33][0].apply(n, arguments)
	}, {
		"./RAFInterfaceController": 59,
		dup: 33
	}],
	62: [function(e, t, n) {
		arguments[4][35][0].apply(n, arguments)
	}, {
		"../.release-info.js": 55,
		"@marcom/ac-shared-instance": 24,
		dup: 35
	}],
	63: [function(e, t, n) {
		arguments[4][36][0].apply(n, arguments)
	}, {
		"../.release-info.js": 55,
		"./RAFExecutor": 57,
		"@marcom/ac-shared-instance": 24,
		dup: 36
	}],
	64: [function(e, t, n) {
		arguments[4][37][0].apply(n, arguments)
	}, {
		"./RAFInterfaceController": 59,
		dup: 37
	}],
	65: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = function f(e, t, n) {
				null === e && (e = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(e, t);
				if (void 0 === r) {
					var i = Object.getPrototypeOf(e);
					return null === i ? void 0 : f(i, t, n)
				}
				if ("value" in r) return r.value;
				var o = r.get;
				if (void 0 !== o) return o.call(n)
			},
			l = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
			c = {
				create: e("@marcom/ac-raf-emitter/RAFEmitter"),
				update: e("@marcom/ac-raf-emitter/update"),
				draw: e("@marcom/ac-raf-emitter/draw")
			},
			u = function() {},
			h = 0,
			m = function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return n.el = e.el, n.gum = e.gum, n._keyframeController = null, n
				}
				return o(t, e), s(t, [{
					key: "destroy",
					value: function() {
						this.el = null, this.gum = null, this._keyframeController = null, a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
					}
				}, {
					key: "addKeyframe",
					value: function(e) {
						var t = e.el || this.el;
						return this.anim.addKeyframe(t, e)
					}
				}, {
					key: "addDiscreteEvent",
					value: function(e) {
						e.event = e.event || "Generic-Event-Name-" + h++;
						var t = void 0 !== e.end && e.end !== e.start,
							n = this.addKeyframe(e);
						return t ? (this._addCallbackIfNotNull(n, e.event + ":enter", e.onEnter), this._addCallbackIfNotNull(n, e.event + ":exit", e.onExit)) : (this._addCallbackIfNotNull(n, e.event, e.onEvent), this._addCallbackIfNotNull(n, e.event + ":reverse", e.onEventReverse)), n
					}
				}, {
					key: "addRAFLoop",
					value: function(e) {
						var t = ["start", "end"];
						if (!t.every(function(t) {
								return e.hasOwnProperty(t)
							})) return void console.log("BubbleGum.BaseComponent::addRAFLoop required options are missing: " + t.join(" "));
						var n = new c.create;
						n.on("update", e.onUpdate || u), n.on("draw", e.onDraw || u), n.on("draw", function() {
							return n.run()
						});
						var r = e.onEnter,
							i = e.onExit;
						return e.onEnter = function() {
							n.run(), r ? r() : 0
						}, e.onExit = function() {
							n.cancel(), i ? i() : 0
						}, this.addDiscreteEvent(e)
					}
				}, {
					key: "addContinuousEvent",
					value: function(e) {
						e.onDraw || console.log("BubbleGum.BaseComponent::addContinuousEvent required option `onDraw` is missing. Consider using a regular keyframe if you do not need a callback"), e.event = e.event || "Generic-Event-Name-" + h++;
						var t = this.addKeyframe(e);
						return t.controller.on(e.event, e.onDraw), t
					}
				}, {
					key: "mounted",
					value: function() {
						if (this.onComponentWillAppear || this.onComponentWillDisappear) {
							this.onComponentWillAppear = this.onComponentWillAppear ? this.onComponentWillAppear.bind(this) : void 0, this.onComponentWillDisappear = this.onComponentWillDisappear ? this.onComponentWillDisappear.bind(this) : void 0;
							var e = {
								start: "-100vh - 1px",
								end: "100% + 1px",
								event: "_appear" + h++
							};
							e.onEnter = this.onComponentWillAppear, e.onExit = this.onComponentWillDisappear, this.addDiscreteEvent(e)
						}
					}
				}, {
					key: "_addCallbackIfNotNull",
					value: function(e, t, n) {
						return !!n && (e.controller.on(t, n), !0)
					}
				}, {
					key: "onResizeImmediate",
					value: function(e) {}
				}, {
					key: "onResizeDebounced",
					value: function(e) {}
				}, {
					key: "onBreakpointChange",
					value: function(e) {}
				}, {
					key: "anim",
					get: function() {
						return this.gum.anim
					}
				}, {
					key: "keyframeController",
					get: function() {
						return this._keyframeController || (this._keyframeController = this.anim.getControllerForTarget(this.el))
					}
				}]), t
			}(l);
		t.exports = m
	}, {
		"@marcom/ac-event-emitter-micro": 2,
		"@marcom/ac-raf-emitter/RAFEmitter": 56,
		"@marcom/ac-raf-emitter/draw": 61,
		"@marcom/ac-raf-emitter/update": 64
	}],
	66: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
			l = e("@marcom/delayed-initializer"),
			c = e("@marcom/anim-system"),
			u = e("@marcom/anim-system/Model/AnimSystemModel"),
			h = e("./ComponentMap"),
			m = {},
			f = function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return n.el = e, n.anim = c, n.components = [], n.el.getAttribute("data-anim-scroll-group") || n.el.setAttribute("data-anim-scroll-group", "bubble-gum-group"), c.on(u.EVENTS.ON_DOM_GROUPS_CREATED, function(e) {
						n.componentsInitialized = !1, n.initComponents(), n.setupEvents()
					}), c.on(u.EVENTS.ON_DOM_KEYFRAMES_CREATED, function() {
						n.components.forEach(function(e) {
							return e.mounted()
						}), n.trigger(t.EVENTS.DOM_COMPONENTS_MOUNTED)
					}), l.add(function() {
						return c.initialize()
					}), n
				}
				return o(t, e), s(t, [{
					key: "initComponents",
					value: function() {
						var e = Array.prototype.slice.call(this.el.querySelectorAll("[data-component-list]"));
						this.el.hasAttribute("[data-component-list]") && e.push(this.el);
						for (var t = 0; t < e.length; t++)
							for (var n = e[t], r = n.getAttribute("data-component-list"), i = r.split(" "), o = 0, s = i.length; o < s; o++) {
								var a = i[o];
								"" !== a && " " !== a && this.addComponent({
									el: n,
									componentName: a
								})
							}
						this.componentsInitialized = !0
					}
				}, {
					key: "setupEvents",
					value: function() {
						this.onResizeDebounced = this.onResizeDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this), this.onBreakpointChange = this.onBreakpointChange.bind(this), c.on(u.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate), c.on(u.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced), c.on(u.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange)
					}
				}, {
					key: "addComponent",
					value: function(e) {
						var n = e.el,
							r = e.componentName,
							i = e.data;
						if (!h.hasOwnProperty(r)) throw "BubbleGum::addComponent could not add component to" + n.className + " no component type '" + r + "'found!";
						var o = h[r];
						if (!t.componentIsSupported(o, r)) return void 0 === m[r] && (console.log("BubbleGum::addComponent unsupported component '" + r + "'. Reason: '" + r + ".IS_SUPPORTED' returned false"), m[r] = !0), null;
						var s = n.dataset.componentList || "";
						s.includes(r) || (n.dataset.componentList = s.split(" ").concat(r).join(" "));
						var a = new o({
							el: n,
							data: i,
							gum: this,
							pageMetrics: u.pageMetrics
						});
						return this.components.push(a), this.componentsInitialized && a.mounted(), a
					}
				}, {
					key: "removeComponent",
					value: function(e) {
						var t = this.components.indexOf(e);
						t !== -1 && (this.components.splice(t, 1), e.el.dataset.componentList = e.el.dataset.componentList.replace(e.constructor.name, ""), e.destroy())
					}
				}, {
					key: "getComponentOfType",
					value: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement,
							n = "[data-component-list*=" + e + "]",
							r = t.matches(n) ? t : t.querySelector(n);
						return r ? this.components.find(function(t) {
							return t instanceof h[e] && t.el === r
						}) : null
					}
				}, {
					key: "getComponentsOfType",
					value: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement,
							n = "[data-component-list*=" + e + "]",
							r = t.matches(n) ? [t] : Array.from(t.querySelectorAll(n));
						return this.components.filter(function(t) {
							return t instanceof h[e] && r.includes(t.el)
						})
					}
				}, {
					key: "getComponentsForElement",
					value: function(e) {
						return this.components.filter(function(t) {
							return t.el === e
						})
					}
				}, {
					key: "onResizeImmediate",
					value: function() {
						this.components.forEach(function(e) {
							return e.onResizeImmediate(u.pageMetrics)
						})
					}
				}, {
					key: "onResizeDebounced",
					value: function() {
						this.components.forEach(function(e) {
							return e.onResizeDebounced(u.pageMetrics)
						})
					}
				}, {
					key: "onBreakpointChange",
					value: function() {
						this.components.forEach(function(e) {
							return e.onBreakpointChange(u.pageMetrics)
						})
					}
				}], [{
					key: "componentIsSupported",
					value: function(e, t) {
						var n = e.IS_SUPPORTED;
						if (void 0 === n) return !0;
						if ("function" != typeof n) return console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'), !0;
						var r = e.IS_SUPPORTED();
						return void 0 === r ? (console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'), !0) : r
					}
				}]), t
			}(a);
		f.EVENTS = {
			DOM_COMPONENTS_MOUNTED: "DOM_COMPONENTS_MOUNTED"
		}, t.exports = f
	}, {
		"./ComponentMap": 67,
		"@marcom/ac-event-emitter-micro": 2,
		"@marcom/anim-system": 38,
		"@marcom/anim-system/Model/AnimSystemModel": 43,
		"@marcom/delayed-initializer": 69
	}],
	67: [function(e, t, n) {
		"use strict";
		t.exports = {
			BaseComponent: e("./BaseComponent")
		}
	}, {
		"./BaseComponent": 65
	}],
	68: [function(e, t, n) {
		"use strict";
		var r = {
				create: e("gl-mat4/create"),
				invert: e("gl-mat4/invert"),
				clone: e("gl-mat4/clone"),
				transpose: e("gl-mat4/transpose")
			},
			i = {
				create: e("gl-vec3/create"),
				dot: e("gl-vec3/dot"),
				normalize: e("gl-vec3/normalize"),
				length: e("gl-vec3/length"),
				cross: e("gl-vec3/cross"),
				fromValues: e("gl-vec3/fromValues")
			},
			o = {
				create: e("gl-vec4/create"),
				transformMat4: e("gl-vec4/transformMat4"),
				fromValues: e("gl-vec4/fromValues")
			},
			s = (Math.PI / 180, 180 / Math.PI),
			a = 0,
			l = 1,
			c = 3,
			u = 4,
			h = 5,
			m = 7,
			f = 11,
			p = 12,
			d = 13,
			y = 15,
			v = function(e, t) {
				t = t || !1;
				for (var n = r.clone(e), a = i.create(), l = i.create(), u = i.create(), h = o.create(), p = o.create(), d = (i.create(), 0); d < 16; d++) n[d] /= n[y];
				var v = r.clone(n);
				v[c] = 0, v[m] = 0, v[f] = 0, v[y] = 1;
				var E = (n[3], n[7], n[11], n[12]),
					w = n[13],
					S = n[14],
					k = (n[15], o.create());
				if (_(n[c]) && _(n[m]) && _(n[f])) h = o.fromValues(0, 0, 0, 1);
				else {
					k[0] = n[c], k[1] = n[m], k[2] = n[f], k[3] = n[y];
					var O = r.invert(r.create(), v),
						A = r.transpose(r.create(), O);
					h = o.transformMat4(h, k, A)
				}
				a[0] = E, a[1] = w, a[2] = S;
				var C = [i.create(), i.create(), i.create()];
				C[0][0] = n[0], C[0][1] = n[1], C[0][2] = n[2], C[1][0] = n[4], C[1][1] = n[5], C[1][2] = n[6], C[2][0] = n[8], C[2][1] = n[9], C[2][2] = n[10], l[0] = i.length(C[0]), i.normalize(C[0], C[0]), u[0] = i.dot(C[0], C[1]), C[1] = b(C[1], C[0], 1, -u[0]), l[1] = i.length(C[1]), i.normalize(C[1], C[1]), u[0] /= l[1], u[1] = i.dot(C[0], C[2]), C[2] = b(C[2], C[0], 1, -u[1]), u[2] = i.dot(C[1], C[2]), C[2] = b(C[2], C[1], 1, -u[2]), l[2] = i.length(C[2]), i.normalize(C[2], C[2]), u[1] /= l[2], u[2] /= l[2];
				var x = i.cross(i.create(), C[1], C[2]);
				if (i.dot(C[0], x) < 0)
					for (d = 0; d < 3; d++) l[d] *= -1, C[d][0] *= -1, C[d][1] *= -1, C[d][2] *= -1;
				p[0] = .5 * Math.sqrt(Math.max(1 + C[0][0] - C[1][1] - C[2][2], 0)), p[1] = .5 * Math.sqrt(Math.max(1 - C[0][0] + C[1][1] - C[2][2], 0)), p[2] = .5 * Math.sqrt(Math.max(1 - C[0][0] - C[1][1] + C[2][2], 0)), p[3] = .5 * Math.sqrt(Math.max(1 + C[0][0] + C[1][1] + C[2][2], 0)), C[2][1] > C[1][2] && (p[0] = -p[0]), C[0][2] > C[2][0] && (p[1] = -p[1]), C[1][0] > C[0][1] && (p[2] = -p[2]);
				var P = o.fromValues(p[0], p[1], p[2], 2 * Math.acos(p[3])),
					I = g(p);
				return t && (u[0] = Math.round(u[0] * s * 100) / 100, u[1] = Math.round(u[1] * s * 100) / 100, u[2] = Math.round(u[2] * s * 100) / 100, I[0] = Math.round(I[0] * s * 100) / 100, I[1] = Math.round(I[1] * s * 100) / 100, I[2] = Math.round(I[2] * s * 100) / 100, P[3] = Math.round(P[3] * s * 100) / 100), {
					translation: a,
					scale: l,
					skew: u,
					perspective: h,
					quaternion: p,
					eulerRotation: I,
					axisAngle: P
				}
			},
			b = function(e, t, n, r) {
				var o = i.create();
				return o[0] = n * e[0] + r * t[0], o[1] = n * e[1] + r * t[1], o[2] = n * e[2] + r * t[2], o
			},
			g = function(e) {
				var t, n, r, o = e[3] * e[3],
					s = e[0] * e[0],
					a = e[1] * e[1],
					l = e[2] * e[2],
					c = s + a + l + o,
					u = e[0] * e[1] + e[2] * e[3];
				return u > .499 * c ? (n = 2 * Math.atan2(e[0], e[3]), r = Math.PI / 2, t = 0, i.fromValues(t, n, r)) : u < -.499 * c ? (n = -2 * Math.atan2(e[0], e[3]), r = -Math.PI / 2, t = 0, i.fromValues(t, n, r)) : (n = Math.atan2(2 * e[1] * e[3] - 2 * e[0] * e[2], s - a - l + o), r = Math.asin(2 * u / c), t = Math.atan2(2 * e[0] * e[3] - 2 * e[1] * e[2], -s + a - l + o), i.fromValues(t, n, r))
			},
			_ = function(e) {
				return Math.abs(e) < 1e-4
			},
			E = function(e) {
				var t = String(getComputedStyle(e).transform).trim(),
					n = r.create();
				if ("none" === t || "" === t) return n;
				var i, o, s = t.slice(0, t.indexOf("("));
				if ("matrix3d" === s)
					for (i = t.slice(9, -1).split(","), o = 0; o < i.length; o++) n[o] = parseFloat(i[o]);
				else {
					if ("matrix" !== s) throw new TypeError("Invalid Matrix Value");
					for (i = t.slice(7, -1).split(","), o = i.length; o--;) i[o] = parseFloat(i[o]);
					n[a] = i[0], n[l] = i[1], n[p] = i[4], n[u] = i[2], n[h] = i[3], n[d] = i[5]
				}
				return n
			};
		t.exports = function(e, t) {
			var n = E(e);
			return v(n, t)
		}
	}, {
		"gl-mat4/clone": 77,
		"gl-mat4/create": 78,
		"gl-mat4/invert": 79,
		"gl-mat4/transpose": 80,
		"gl-vec3/create": 81,
		"gl-vec3/cross": 82,
		"gl-vec3/dot": 83,
		"gl-vec3/fromValues": 84,
		"gl-vec3/length": 85,
		"gl-vec3/normalize": 86,
		"gl-vec4/create": 87,
		"gl-vec4/fromValues": 88,
		"gl-vec4/transformMat4": 89
	}],
	69: [function(e, t, n) {
		"use strict";
		var r = !1,
			i = !1,
			o = [];
		t.exports = {
			NUMBER_OF_FRAMES_TO_WAIT: 30,
			add: function(e) {
				var t = this;
				if (i && e(), o.push(e), !r) {
					r = !0;
					var n = document.documentElement.scrollHeight,
						s = 0,
						a = function l() {
							var e = document.documentElement.scrollHeight;
							if (n !== e) s = 0;
							else if (s++, s >= t.NUMBER_OF_FRAMES_TO_WAIT) return void o.forEach(function(e) {
								return e()
							});
							n = e, requestAnimationFrame(l)
						};
					requestAnimationFrame(a)
				}
			}
		}
	}, {}],
	70: [function(e, t, n) {
		"use strict";
		t.exports = {
			getWindow: function() {
				return window
			},
			getDocument: function() {
				return document
			},
			getNavigator: function() {
				return navigator
			}
		}
	}, {}],
	71: [function(e, t, n) {
		"use strict";
		var r = e("./helpers/globals");
		t.exports = function() {
			var e = r.getWindow();
			return "devicePixelRatio" in e && e.devicePixelRatio >= 1.5
		}
	}, {
		"./helpers/globals": 70
	}],
	72: [function(e, t, n) {
		"use strict";
		t.exports = {
			lerp: function(e, t, n) {
				return t + (n - t) * e
			},
			map: function(e, t, n, r, i) {
				return r + (i - r) * (e - t) / (n - t)
			},
			mapClamp: function(e, t, n, r, i) {
				var o = r + (i - r) * (e - t) / (n - t);
				return Math.max(r, Math.min(i, o))
			},
			norm: function(e, t, n) {
				return (e - t) / (n - t)
			},
			clamp: function(e, t, n) {
				return Math.max(t, Math.min(n, e))
			},
			randFloat: function(e, t) {
				return Math.random() * (t - e) + e
			},
			randInt: function(e, t) {
				return Math.floor(Math.random() * (t - e) + e)
			}
		}
	}, {}],
	73: [function(e, t, n) {
		"use strict";
		t.exports = {
			browser: {
				safari: !1,
				chrome: !1,
				firefox: !1,
				ie: !1,
				opera: !1,
				android: !1,
				edge: !1,
				version: {
					string: "",
					major: 0,
					minor: 0,
					patch: 0,
					documentMode: !1
				}
			},
			os: {
				osx: !1,
				ios: !1,
				android: !1,
				windows: !1,
				linux: !1,
				fireos: !1,
				chromeos: !1,
				version: {
					string: "",
					major: 0,
					minor: 0,
					patch: 0
				}
			}
		}
	}, {}],
	74: [function(e, t, n) {
		"use strict";
		t.exports = {
			browser: [{
				name: "edge",
				userAgent: "Edge",
				version: ["rv", "Edge"],
				test: function(e) {
					return e.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === e.ua
				}
			}, {
				name: "chrome",
				userAgent: "Chrome"
			}, {
				name: "firefox",
				test: function(e) {
					return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Opera") === -1
				},
				version: "Firefox"
			}, {
				name: "android",
				userAgent: "Android"
			}, {
				name: "safari",
				test: function(e) {
					return e.ua.indexOf("Safari") > -1 && e.vendor.indexOf("Apple") > -1
				},
				version: "Version"
			}, {
				name: "ie",
				test: function(e) {
					return e.ua.indexOf("IE") > -1 || e.ua.indexOf("Trident") > -1
				},
				version: ["MSIE", "rv"],
				parseDocumentMode: function() {
					var e = !1;
					return document.documentMode && (e = parseInt(document.documentMode, 10)), e
				}
			}, {
				name: "opera",
				userAgent: "Opera",
				version: ["Version", "Opera"]
			}],
			os: [{
				name: "windows",
				test: function(e) {
					return e.ua.indexOf("Windows") > -1
				},
				version: "Windows NT"
			}, {
				name: "osx",
				userAgent: "Mac",
				test: function(e) {
					return e.ua.indexOf("Macintosh") > -1
				}
			}, {
				name: "ios",
				test: function(e) {
					return e.ua.indexOf("iPhone") > -1 || e.ua.indexOf("iPad") > -1
				},
				version: ["iPhone OS", "CPU OS"]
			}, {
				name: "linux",
				userAgent: "Linux",
				test: function(e) {
					return (e.ua.indexOf("Linux") > -1 || e.platform.indexOf("Linux") > -1) && e.ua.indexOf("Android") === -1
				}
			}, {
				name: "fireos",
				test: function(e) {
					return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Mobile") > -1
				},
				version: "rv"
			}, {
				name: "android",
				userAgent: "Android",
				test: function(e) {
					return e.ua.indexOf("Android") > -1
				}
			}, {
				name: "chromeos",
				userAgent: "CrOS"
			}]
		}
	}, {}],
	75: [function(e, t, n) {
		"use strict";

		function r(e) {
			return new RegExp(e + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
		}

		function i(e, t) {
			if ("function" == typeof e.parseVersion) return e.parseVersion(t);
			var n = e.version || e.userAgent;
			"string" == typeof n && (n = [n]);
			for (var i, o = n.length, s = 0; s < o; s++)
				if (i = t.match(r(n[s])), i && i.length > 1) return i[1].replace(/_/g, ".");
			return !1
		}

		function o(e, t, n) {
			for (var r, o, s = e.length, a = 0; a < s; a++)
				if ("function" == typeof e[a].test ? e[a].test(n) === !0 && (r = e[a].name) : n.ua.indexOf(e[a].userAgent) > -1 && (r = e[a].name), r) {
					if (t[r] = !0, o = i(e[a], n.ua), "string" == typeof o) {
						var l = o.split(".");
						t.version.string = o, l && l.length > 0 && (t.version.major = parseInt(l[0] || 0), t.version.minor = parseInt(l[1] || 0), t.version.patch = parseInt(l[2] || 0))
					} else "edge" === r && (t.version.string = "12.0.0", t.version.major = "12", t.version.minor = "0", t.version.patch = "0");
					return "function" == typeof e[a].parseDocumentMode && (t.version.documentMode = e[a].parseDocumentMode()), t
				}
			return t
		}

		function s(e) {
			var t = {};
			return t.browser = o(l.browser, a.browser, e), t.os = o(l.os, a.os, e), t
		}
		var a = e("./defaults"),
			l = e("./dictionary");
		t.exports = s
	}, {
		"./defaults": 73,
		"./dictionary": 74
	}],
	76: [function(e, t, n) {
		"use strict";
		var r = {
			ua: window.navigator.userAgent,
			platform: window.navigator.platform,
			vendor: window.navigator.vendor
		};
		t.exports = e("./parseUserAgent")(r)
	}, {
		"./parseUserAgent": 75
	}],
	77: [function(e, t, n) {
		function r(e) {
			var t = new Float32Array(16);
			return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
		}
		t.exports = r
	}, {}],
	78: [function(e, t, n) {
		function r() {
			var e = new Float32Array(16);
			return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
		}
		t.exports = r
	}, {}],
	79: [function(e, t, n) {
		function r(e, t) {
			var n = t[0],
				r = t[1],
				i = t[2],
				o = t[3],
				s = t[4],
				a = t[5],
				l = t[6],
				c = t[7],
				u = t[8],
				h = t[9],
				m = t[10],
				f = t[11],
				p = t[12],
				d = t[13],
				y = t[14],
				v = t[15],
				b = n * a - r * s,
				g = n * l - i * s,
				_ = n * c - o * s,
				E = r * l - i * a,
				w = r * c - o * a,
				S = i * c - o * l,
				k = u * d - h * p,
				O = u * y - m * p,
				A = u * v - f * p,
				C = h * y - m * d,
				x = h * v - f * d,
				P = m * v - f * y,
				I = b * P - g * x + _ * C + E * A - w * O + S * k;
			return I ? (I = 1 / I, e[0] = (a * P - l * x + c * C) * I, e[1] = (i * x - r * P - o * C) * I, e[2] = (d * S - y * w + v * E) * I, e[3] = (m * w - h * S - f * E) * I, e[4] = (l * A - s * P - c * O) * I, e[5] = (n * P - i * A + o * O) * I, e[6] = (y * _ - p * S - v * g) * I, e[7] = (u * S - m * _ + f * g) * I, e[8] = (s * x - a * A + c * k) * I, e[9] = (r * A - n * x - o * k) * I, e[10] = (p * w - d * _ + v * b) * I, e[11] = (h * _ - u * w - f * b) * I, e[12] = (a * O - s * C - l * k) * I, e[13] = (n * C - r * O + i * k) * I, e[14] = (d * g - p * E - y * b) * I, e[15] = (u * E - h * g + m * b) * I, e) : null
		}
		t.exports = r
	}, {}],
	80: [function(e, t, n) {
		function r(e, t) {
			if (e === t) {
				var n = t[1],
					r = t[2],
					i = t[3],
					o = t[6],
					s = t[7],
					a = t[11];
				e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = r, e[9] = o, e[11] = t[14], e[12] = i, e[13] = s, e[14] = a
			} else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
			return e
		}
		t.exports = r
	}, {}],
	81: [function(e, t, n) {
		function r() {
			var e = new Float32Array(3);
			return e[0] = 0, e[1] = 0, e[2] = 0, e
		}
		t.exports = r
	}, {}],
	82: [function(e, t, n) {
		function r(e, t, n) {
			var r = t[0],
				i = t[1],
				o = t[2],
				s = n[0],
				a = n[1],
				l = n[2];
			return e[0] = i * l - o * a, e[1] = o * s - r * l, e[2] = r * a - i * s, e
		}
		t.exports = r
	}, {}],
	83: [function(e, t, n) {
		function r(e, t) {
			return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
		}
		t.exports = r
	}, {}],
	84: [function(e, t, n) {
		function r(e, t, n) {
			var r = new Float32Array(3);
			return r[0] = e, r[1] = t, r[2] = n, r
		}
		t.exports = r
	}, {}],
	85: [function(e, t, n) {
		function r(e) {
			var t = e[0],
				n = e[1],
				r = e[2];
			return Math.sqrt(t * t + n * n + r * r)
		}
		t.exports = r
	}, {}],
	86: [function(e, t, n) {
		function r(e, t) {
			var n = t[0],
				r = t[1],
				i = t[2],
				o = n * n + r * r + i * i;
			return o > 0 && (o = 1 / Math.sqrt(o), e[0] = t[0] * o, e[1] = t[1] * o, e[2] = t[2] * o), e
		}
		t.exports = r
	}, {}],
	87: [function(e, t, n) {
		function r() {
			var e = new Float32Array(4);
			return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e
		}
		t.exports = r
	}, {}],
	88: [function(e, t, n) {
		function r(e, t, n, r) {
			var i = new Float32Array(4);
			return i[0] = e, i[1] = t, i[2] = n, i[3] = r, i
		}
		t.exports = r
	}, {}],
	89: [function(e, t, n) {
		function r(e, t, n) {
			var r = t[0],
				i = t[1],
				o = t[2],
				s = t[3];
			return e[0] = n[0] * r + n[4] * i + n[8] * o + n[12] * s, e[1] = n[1] * r + n[5] * i + n[9] * o + n[13] * s, e[2] = n[2] * r + n[6] * i + n[10] * o + n[14] * s, e[3] = n[3] * r + n[7] * i + n[11] * o + n[15] * s, e
		}
		t.exports = r
	}, {}],
	90: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/bubble-gum/BaseComponent"),
			l = e("@marcom/anim-system/Model/AnimSystemModel"),
			c = (e("@marcom/anim-system/AnimSystem"), e("../helpers/BreakPoints")),
			u = e("@marcom/ac-raf-emitter/RAFEmitter"),
			h = e("../helpers/forcesBasicInteraction"),
			m = e("@marcom/ac-raf-emitter/draw"),
			f = ["key"],
			p = function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return e.pageMetrics.breakpoint !== c.BASIC && (n.parentContainer = document.querySelector(".scroll-container-horizontal"), n.scrollContent = document.querySelector(".scroll-container-touch"), n.router = document.querySelector(".router"), n.elements = Array.from(n.el.querySelectorAll("section [tabindex], section a, section button")), n._rafEmitter = new u, n.footNoteLinks = Array.from(n.el.querySelectorAll(".footnote")), n.footNote = n.el.querySelector(".ac-gf-sosumi"), n.elements.push(n.footNote)), n
				}
				return o(t, e), s(t, [{
					key: "mounted",
					value: function() {
						var e = this;
						this.onFocus = this.onFocus.bind(this), this.scrollY = window.scrollY, this.scrollComponent = this.gum.getComponentOfType("AutoScrollComponent"), this.parentContainer.scrollLeft = 0, this.parentContainer.scrollTop = 0, this.calculatePosition(), this.footNoteLinks.forEach(function(t) {
							t.addEventListener("click", function(t) {
								t.preventDefault(), window.scrollTo(0, e.footNote.moveIntoView)
							})
						})
					}
				}, {
					key: "onFocus",
					value: function(e) {
						var t = this;
						l.pageMetrics.breakpoint !== c.BASIC && f.indexOf(e.currentTarget.dataset.focusMethod) > -1 && (m(function() {
							t.parentContainer.scrollLeft = 0, t.parentContainer.scrollTop = 0
						}), window.scrollTo(0, e.currentTarget.moveIntoView))
					}
				}, {
					key: "calculatePosition",
					value: function() {
						var e = this;
						this.vh = l.pageMetrics.windowHeight, this.vw = l.pageMetrics.windowWidth;
						var t = 0,
							n = 30;
						this._rafEmitter.on("update", function() {
							if (t++, t > n) {
								var r = e.scrollComponent.content.getBoundingClientRect(),
									i = e.router.getBoundingClientRect();
								return void e.elements.forEach(function(t) {
									var n = t.getBoundingClientRect();
									t.positionX = Math.abs(r.x - n.x) - e.vw, t.positionX < e.scrollComponent.scrollableWidth - i.width ? t.moveIntoView = t.positionX + e.vw / 2 : (t.positionY = Math.abs(i.y - n.y), t.moveIntoView = e.scrollComponent.scrollableWidth + t.positionY), t.addEventListener("focus", e.onFocus)
								})
							}
							e._rafEmitter.run()
						}), this._rafEmitter.run()
					}
				}, {
					key: "onResizeDebounced",
					value: function() {
						l.pageMetrics.breakpoint !== c.BASIC && this.calculatePosition()
					}
				}], [{
					key: "IS_SUPPORTED",
					value: function() {
						return !h && l.pageMetrics.breakpoint !== c.BASIC
					}
				}]), t
			}(a);
		t.exports = p
	}, {
		"../helpers/BreakPoints": 106,
		"../helpers/forcesBasicInteraction": 109,
		"@marcom/ac-raf-emitter/RAFEmitter": 16,
		"@marcom/ac-raf-emitter/draw": 20,
		"@marcom/anim-system/AnimSystem": 38,
		"@marcom/anim-system/Model/AnimSystemModel": 43,
		"@marcom/bubble-gum/BaseComponent": 65
	}],
	91: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/bubble-gum/src/BaseComponent"),
			l = (e("../helpers/BreakPoints"), e("@marcom/anim-system/Model/AnimSystemModel")),
			c = null,
			u = function(t) {
				function n(e) {
					r(this, n);
					var t = i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
					return t.analytics = c, t.PageObserver = t._initPageObserver(), t._isAnalyticsIsOk() && (t.SectionObserver = new t.analytics.observer.Section, t.linkObserver = new t.analytics.observer.Link, t.clickObserver = new t.analytics.observer.Click, t.passiveTracker = t.analytics.passiveTracker), t.scrollDirectionMap = {}, t
				}
				return o(n, t), s(n, null, [{
					key: "IS_SUPPORTED",
					value: function() {
						try {
							return c = e("@marcom/ac-analytics"), null !== c
						} catch (t) {
							return !1
						}
					}
				}]), s(n, [{
					key: "mounted",
					value: function() {
						var e = this;
						this.scrollComponent = this.gum.getComponentOfType("AutoScrollComponent"), this.scrollComponent && this.scrollComponent.on("scrollIdentifyEvent", function(t) {
							t.direction && (e.scrollDirectionMap[t.direction] = e.scrollDirectionMap[t.direction] ? e.scrollDirectionMap[t.direction] + 1 : 1)
						})
					}
				}, {
					key: "_isAnalyticsIsOk",
					value: function() {
						return c && c.observer
					}
				}, {
					key: "_getViewPortSizeInfo",
					value: function() {
						var e = l.pageMetrics.breakpoint;
						return e ? {
							data: {
								eVar207: e
							}
						} : null
					}
				}, {
					key: "_initPageObserver",
					value: function() {
						var e = this._getViewPortSizeInfo();
						return null !== e ? new this.analytics.observer.Page(e) : new this.analytics.observer.Page
					}
				}]), n
			}(a);
		t.exports = u
	}, {
		"../helpers/BreakPoints": 106,
		"@marcom/ac-analytics": void 0,
		"@marcom/anim-system/Model/AnimSystemModel": 43,
		"@marcom/bubble-gum/src/BaseComponent": 65
	}],
	92: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/bubble-gum/BaseComponent"),
			l = e("../helpers/Easing"),
			c = e("@marcom/anim-system/Model/AnimSystemModel"),
			u = e("../helpers/forcesBasicInteraction"),
			h = {
				update: e("@marcom/ac-raf-emitter/update"),
				draw: e("@marcom/ac-raf-emitter/draw")
			},
			m = e("../helpers/BreakPoints"),
			f = {
				vertical: "vertical",
				horizontal: "horizontal"
			},
			p = function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return n.html = document.documentElement, n.content = document.querySelector(".scroll-content"), n.ancestor = document.querySelector(".scroll-container-vertical"), n.sections = Array.from(n.content.querySelectorAll("main section, .scroll-content .router")), n.router = n.content.querySelector(".router"), n.footer = n.router.querySelector("#ac-globalfooter"), n.navContent = document.querySelector("#ac-globalnav .ac-gn-content"), n.isTouch = n.html.classList.contains("touch"), n.currentBreakpoint = e.pageMetrics.breakpoint, n.footerHeight = 0, n.portableTextBlockWrap = document.querySelector(".section-portable .text-block-wrap"), n.portableTextBlock = n.portableTextBlockWrap.querySelector(".text-block"), n.isEnabled = e.pageMetrics.breakpoint !== m.BASIC, n.isRTL = "rtl" === document.documentElement.getAttribute("dir"), n.bindEvents(), n.setupEasing(), c.pageMetrics.breakpoint !== m.BASIC && n.updateDefault().then(function() {
						n.isRTL && (n.easing.target = n.scrollableWidth, n.easing.current = n.scrollableWidth, n.content.style.transform = "translateX(-" + (n.scrollableWidth - n.scrollY) + "px)"), n.isEnabled && (n.verticalScroll(0), n.addListeners())
					}), n
				}
				return o(t, e), s(t, [{
					key: "mounted",
					value: function() {
						this.scrollY = window.pageYOffset, this.cachedWindowScrollY = window.pageYOffset, this.setPortableTextBlockHeight(), this.onResizeImmediate()
					}
				}, {
					key: "bindEvents",
					value: function() {
						this.isHorizontal = !1, this.onMousewheel = this.onMousewheel.bind(this), this.onScroll = this.onScroll.bind(this), this.preventHistory = this.preventHistory.bind(this), this.onKeyDown = this.onKeyDown.bind(this)
					}
				}, {
					key: "setupEasing",
					value: function() {
						var e = this;
						this.target = 0;
						var t = window.pageYOffset - this.boundaryTop;
						this.easing = new l({
							initPosition: t > 0 ? t : 0,
							callback: function(t) {
								if (c.pageMetrics.breakpoint !== m.BASIC) {
									var n = e.isRTL ? e.scrollableWidth - t : t;
									e.content.style.transform = "translateX(" + -n + "px)";
									var r = "hide-bagview",
										i = e.navContent.classList.contains(r);
									t > 44 ? i || e.navContent.classList.add(r) : i && e.navContent.classList.remove(r), e.trigger("scroll", e.target)
								}
							},
							ease: .35
						}), this.easingRouter = new l({
							initPosition: t > 0 ? t : 0,
							callback: function(t) {
								if (c.pageMetrics.breakpoint !== m.BASIC) {
									var n = t;
									e.router.style.transform = "translateY(" + -n + "px)"
								}
							},
							ease: .35
						})
					}
				}, {
					key: "onMousewheel",
					value: function(e) {
						this.isHorizontal = this.updateDirection(e.deltaX, e.deltaY), this.isHorizontal && this.horizontalScroll(e.deltaX);
					}
				}, {
					key: "preventHistory",
					value: function(e) {
						0 !== e.deltaX && e.preventDefault()
					}
				}, {
					key: "onScroll",
					value: function(e) {
						var t = window.scrollY - this.cachedWindowScrollY;
						this.outOfSyncY && (this.outOfSyncY = !1, window.scrollTo(0, this.scrollY), t = 0), this.verticalScroll(t), this.cachedWindowScrollY = window.scrollY
					}
				}, {
					key: "setPortableTextBlockHeight",
					value: function() {
						var e = this.portableTextBlock.offsetHeight;
						c.pageMetrics.breakpoint !== m.BASIC ? this.portableTextBlockWrap.style.minHeight = e + "px" : this.portableTextBlockWrap.setAttribute("style", "")
					}
				}, {
					key: "onKeyDown",
					value: function(e) {
						e.ctrlKey || e.metaKey || e.altKey || (this.isHorizontal = !1, !this.outOfSyncY || "ArrowUp" !== e.key && "ArrowDown" !== e.key || (e.preventDefault(), this.outOfSyncY = !1, window.scrollTo(0, this.scrollY), this.verticalScroll(0), this.cachedWindowScrollY = window.scrollY), "ArrowLeft" === e.key && this.horizontalScroll(-40), "ArrowRight" === e.key && this.horizontalScroll(40))
					}
				}, {
					key: "desktopEvents",
					value: function() {
						this.content.addEventListener("mousewheel", this.onMousewheel), document.addEventListener("mousewheel", this.preventHistory), document.addEventListener("scroll", this.onScroll), document.addEventListener("keydown", this.onKeyDown)
					}
				}, {
					key: "addListeners",
					value: function() {
						this.desktopEvents()
					}
				}, {
					key: "removeListeners",
					value: function() {
						this.content.removeEventListener("mousewheel", this.onMousewheel), document.removeEventListener("mousewheel", this.preventHistory), document.removeEventListener("scroll", this.onScroll), document.removeEventListener("keydown", this.onKeyDown)
					}
				}, {
					key: "clamp",
					value: function(e, t, n) {
						var r = e;
						return r = Math.max(t, r), r = Math.min(n, r)
					}
				}, {
					key: "updateDirection",
					value: function(e, t) {
						return Math.abs(e) > Math.abs(t)
					}
				}, {
					key: "verticalScroll",
					value: function(e) {
						this.outOfSyncX = !0, this.scrollY += e, this.target = this.clamp(this.scrollY, 0, this.scrollableWidth), this.easing.setTarget(this.target), this.scrollRouter(this.scrollY), this.trigger("scrollIdentifyEvent", {
							direction: f.vertical
						}), this.scrollY > this.scrollableWidth && this.trigger("router-animation", {
							x: this.scrollY - this.scrollableWidth
						})
					}
				}, {
					key: "horizontalScroll",
					value: function(e) {
						this.outOfSyncY = !0, this.target += e, this.target = this.clamp(this.target, 0, this.scrollableWidth), this.trigger("scrollIdentifyEvent", {
							direction: f.horizontal
						}), this.scrollY < this.scrollableWidth ? this.scrollY = this.target : (this.scrollY += e, this.scrollY = Math.min(this.scrollY, this.scrollableHeight), this.target = this.scrollableWidth, this.trigger("router-animation", {
							x: this.scrollY - this.scrollableWidth
						})), this.scrollY >= 0 && this.scrollY <= 110 && window.scrollTo(0, this.scrollY), this.easing.setTarget(this.target), this.scrollRouter(this.scrollY)
					}
				}, {
					key: "scrollRouter",
					value: function(e) {
						var t = e - this.scrollableWidth;
						t < 0 && (t = 0), t > this.footerHeight && (t = this.footerHeight), this.easingRouter.setTarget(t)
					}
				}, {
					key: "onResizeDebounced",
					value: function() {
						var e = this;
						this.setPortableTextBlockHeight(), c.pageMetrics.breakpoint !== m.BASIC && this.updateDefault().then(function() {
							e.scrollY = window.pageYOffset, e.verticalScroll(0)
						})
					}
				}, {
					key: "onBreakpointChange",
					value: function(e) {
						var t = this;
						return this.currentBreakpoint === m.BASIC ? (this.addListeners(), void(this.currentBreakpoint = e.breakpoint)) : e.breakpoint === m.BASIC ? (h.draw(function() {
							t.content.removeAttribute("style"), t.ancestor.removeAttribute("style"), t.router.removeAttribute("style"), t.removeListeners()
						}), void(this.currentBreakpoint = e.breakpoint)) : void 0
					}
				}, {
					key: "updateDefault",
					value: function() {
						var e = this,
							t = new Promise(function(t, n) {
								h.update(function() {
									var n = e.sections.reduce(function(e, t) {
										return e + t.clientWidth
									}, 0);
									e.footerHeight = e.footer.clientHeight - c.pageMetrics.windowHeight + 100;
									var r = n + e.footerHeight - (c.pageMetrics.windowWidth - c.pageMetrics.windowHeight);
									h.draw(function() {
										e.updateContainerSizes(n, r), h.update(function() {
											e.scrollableWidth = e.content.clientWidth - window.innerWidth, e.scrollableHeight = r - window.innerHeight, e.boundaryTop = 0, t()
										})
									})
								})
							});
						return t
					}
				}, {
					key: "updateContainerSizes",
					value: function(e, t) {
						this.content.style.width = e + "px", this.ancestor.style.height = t + "px"
					}
				}], [{
					key: "IS_SUPPORTED",
					value: function() {
						return !u && !document.documentElement.classList.contains("touch")
					}
				}]), t
			}(a);
		t.exports = p
	}, {
		"../helpers/BreakPoints": 106,
		"../helpers/Easing": 108,
		"../helpers/forcesBasicInteraction": 109,
		"@marcom/ac-raf-emitter/draw": 20,
		"@marcom/ac-raf-emitter/update": 21,
		"@marcom/anim-system/Model/AnimSystemModel": 43,
		"@marcom/bubble-gum/BaseComponent": 65
	}],
	93: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = function p(e, t, n) {
				null === e && (e = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(e, t);
				if (void 0 === r) {
					var i = Object.getPrototypeOf(e);
					return null === i ? void 0 : p(i, t, n)
				}
				if ("value" in r) return r.value;
				var o = r.get;
				if (void 0 !== o) return o.call(n)
			},
			l = e("./AutoScrollComponent"),
			c = e("@marcom/anim-system/Model/AnimSystemModel"),
			u = e("../helpers/forcesBasicInteraction"),
			h = e("../helpers/BreakPoints"),
			m = {
				vertical: "vertical",
				horizontal: "horizontal"
			},
			f = function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return n.touchContent = document.querySelector(".scroll-container-touch"), n.isTouch = n.html.classList.contains("touch"), n.scrollInit = !1, n
				}
				return o(t, e), s(t, [{
					key: "mounted",
					value: function() {
						a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "mounted", this).call(this), this.touchContent.scrollLeft = this.scrollY
					}
				}, {
					key: "bindEvents",
					value: function() {
						this.tmpScrollX, this.tmpScrollY, this.onTouchHorizontalScroll = this.onTouchHorizontalScroll.bind(this)
					}
				}, {
					key: "detectScrolling",
					value: function(e) {
						this.isTouch && e > 0 && !this.scrollInit && (this.html.classList.add("site-scrolling"), this.scrollInit = !0)
					}
				}, {
					key: "verticalScroll",
					value: function() {}
				}, {
					key: "onTouchVerticalScroll",
					value: function(e) {
						var t = window.pageYOffset;
						if (this.tmpScrollX !== t) {
							this.detectScrolling(t), this.trigger("scrollIdentifyEvent", {
								direction: m.vertical
							}), this.tmpScrollY = t, this.scrollRouter(t), this.touchContent.scrollLeft = t;
							var n = this.clamp(t, 0, this.scrollableWidth);
							this.easing.setTarget(n), this.tmpScrollY > this.scrollableWidth && this.trigger("router-animation", {
								x: this.tmpScrollY - this.scrollableWidth
							})
						}
					}
				}, {
					key: "onTouchHorizontalScroll",
					value: function(e) {
						var t = this.touchContent.scrollLeft;
						this.tmpScrollY !== t && (this.detectScrolling(t), this.isHorizontal = !0, this.trigger("scrollIdentifyEvent", {
							direction: m.horizontal
						}), this.tmpScrollX = t, this.scrollRouter(t), (window.pageYOffset < 110 || t < 110) && window.scrollTo(0, t), t = this.clamp(t, 0, this.scrollableWidth), this.easing.setTarget(t), this.tmpScrollX > this.scrollableWidth && this.trigger("router-animation", {
							x: this.tmpScrollX - this.scrollableWidth
						}))
					}
				}, {
					key: "touchEvents",
					value: function() {
						this.touchContent.addEventListener("scroll", this.onTouchHorizontalScroll)
					}
				}, {
					key: "addListeners",
					value: function() {
						this.touchEvents()
					}
				}, {
					key: "removeListeners",
					value: function() {
						this.touchContent.removeEventListener("scroll", this.onTouchHorizontalScroll)
					}
				}, {
					key: "onBreakpointChange",
					value: function() {
						window.location.reload()
					}
				}, {
					key: "onResizeDebounced",
					value: function() {
						var e = this;
						c.pageMetrics.breakpoint !== h.BASIC && this.updateDefault().then(function() {
							e.onTouchHorizontalScroll()
						})
					}
				}, {
					key: "scrollRouter",
					value: function(e) {
						var t = e - this.scrollableWidth;
						t < 0 && (t = 0), this.easingRouter.setTarget(t)
					}
				}, {
					key: "updateContainerSizes",
					value: function(e, n) {
						a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateContainerSizes", this).call(this);
						var r = c.pageMetrics.windowWidth - c.pageMetrics.windowHeight,
							i = 100;
						this.touchContent.children[0].style.width = n + r + i + "px", this.ancestor.removeAttribute("style")
					}
				}], [{
					key: "IS_SUPPORTED",
					value: function() {
						return !u && document.documentElement.classList.contains("touch")
					}
				}]), t
			}(l);
		t.exports = f
	}, {
		"../helpers/BreakPoints": 106,
		"../helpers/forcesBasicInteraction": 109,
		"./AutoScrollComponent": 92,
		"@marcom/anim-system/Model/AnimSystemModel": 43
	}],
	94: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/bubble-gum/BaseComponent"),
			l = e("../helpers/forcesBasicInteraction"),
			c = e("../helpers/isiPadpro"),
			u = function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return n.seriously = new Seriously, n.chroma = n.seriously.effect("chroma"), n.greenScreen = [0, 1, 0, 1], n
				}
				return o(t, e), s(t, [{
					key: "mounted",
					value: function() {
						this.canvas = document.createElement("canvas"), this.target = this.seriously.target(this.canvas), this.target.source = this.chroma, this.chroma.screen = this.greenScreen
					}
				}, {
					key: "loadVideo",
					value: function(e, t) {
						t = t || {}, this.target.width = t.width || 400, this.target.height = t.height || 400, this.chroma.source = e, this.chroma.balance = t.balance || .32, this.chroma.clipBlack = t.clipBlack || .14, this.chroma.clipWhite = t.clipWhite || 1
					}
				}, {
					key: "getCanvas",
					value: function() {
						return this.canvas
					}
				}], [{
					key: "IS_SUPPORTED",
					value: function() {
						return !(l || c) && document.documentElement.classList.contains("webgl")
					}
				}]), t
			}(a);
		t.exports = u
	}, {
		"../helpers/forcesBasicInteraction": 109,
		"../helpers/isiPadpro": 110,
		"@marcom/bubble-gum/BaseComponent": 65
	}],
	95: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/bubble-gum/BaseComponent"),
			l = (e("@marcom/anim-system/Model/AnimSystemModel"), e("@marcom/anim-system"), e("../helpers/BreakPoints")),
			c = e("../helpers/forcesBasicInteraction"),
			u = function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return (e.pageMetrics.breakpoint === l.BASIC || c) && (document.documentElement.classList.remove("enhanced-interaction"), document.documentElement.classList.add("basic-interaction")), n
				}
				return o(t, e), s(t, [{
					key: "onBreakpointChange",
					value: function(e) {
						c || (e.breakpoint !== l.BASIC ? (document.documentElement.classList.remove("basic-interaction"), document.documentElement.classList.add("enhanced-interaction")) : (document.documentElement.classList.add("basic-interaction"), document.documentElement.classList.remove("enhanced-interaction")))
					}
				}]), t
			}(a);
		t.exports = u
	}, {
		"../helpers/BreakPoints": 106,
		"../helpers/forcesBasicInteraction": 109,
		"@marcom/anim-system": 38,
		"@marcom/anim-system/Model/AnimSystemModel": 43,
		"@marcom/bubble-gum/BaseComponent": 65
	}],
	96: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/bubble-gum/BaseComponent"),
			l = (e("@marcom/bubble-gum/ComponentMap"), "image-senses-your-gestures-screen-eraser"),
			c = e("../helpers/forcesBasicInteraction"),
			u = e("../helpers/isiPadpro"),
			h = function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return n.eraser = n.el.querySelector(".image-eraser"), n
				}
				return o(t, e), s(t, [{
					key: "mounted",
					value: function() {
						var e = this;
						document.querySelector(".scroll-content");
						this.chromaManager = this.gum.getComponentOfType("ChromaManager"), this.chromaManager.on("animation-reset", function(t) {
							e.el.classList.remove("animate"), e.eraser.classList.add(l + "-down"), e.eraser.classList.remove(l + "-up")
						}), this.chromaManager.on("start-animation", function(t) {
							e.el.classList.add("animate"), e.eraser.classList.add(l + "-up"), e.eraser.classList.remove(l + "-down")
						})
					}
				}], [{
					key: "IS_SUPPORTED",
					value: function() {
						return !(c || u) && document.documentElement.classList.contains("webgl")
					}
				}]), t
			}(a);
		t.exports = h
	}, {
		"../helpers/forcesBasicInteraction": 109,
		"../helpers/isiPadpro": 110,
		"@marcom/bubble-gum/BaseComponent": 65,
		"@marcom/bubble-gum/ComponentMap": 67
	}],
	97: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/bubble-gum/BaseComponent"),
			l = e("@marcom/anim-system/Model/AnimSystemModel"),
			c = e("../helpers/forcesBasicInteraction"),
			u = e("@marcom/anim-system"),
			h = e("../helpers/BreakPoints"),
			m = function(e) {
				function t(e) {
					return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
				}
				return o(t, e), s(t, [{
					key: "mounted",
					value: function() {
						var e = this;
						this.scrollComponent = this.gum.getComponentOfType("AutoScrollComponent") || this.gum.getComponentOfType("AutoScrollTouchComponent"), this.group = u.getGroupForTarget(this.el), this.createOverwriteMethods(), this.onHorizontalScroll = function() {
							e.group._onScroll()
						}, this.setScrollDirection(), this.group.forceUpdate({
							waitForNextUpdate: !1
						});
						var t = null;
						if (t) {
							t.end.style.width = t.start.style.width = "5px", t.end.style.height = t.start.style.height = "100vh", this.el.appendChild(t.element);
							t.translate;
							t.translate = function(t) {
								var n = e.scrollComponent.isRTL ? -t : t;
								return "translate(" + n + "px, 0)"
							}
						}
					}
				}, {
					key: "createOverwriteMethods",
					value: function() {
						var e = this;
						this.verticalScroll = {
							getPosition: this.group.getPosition,
							createViewableRange: this.group.createViewableRange,
							parseTime: this.group.timeParser.parse.bind(this.group.timeParser)
						}, this.horizontalScroll = {
							getPosition: function() {
								return e.scrollComponent.easing.currentPosition + e.scrollComponent.easingRouter.currentPosition
							},
							createViewableRange: function() {
								var t = e.group.metrics.get(e.el),
									n = new l.ViewableRange(t, 0);
								return n.a = 0, n.b = n.a + l.pageMetrics.windowWidth, n.d = t.right, n.c = n.d - l.pageMetrics.windowWidth, n
							},
							parseTime: function(e, t) {
								if ("number" == typeof t) return t;
								var n = this.groupIsTimeBased ? 0 : this.group.metrics.get(e.relativeTo).left,
									r = this.group.expressionParser.parseExpression(e, t),
									i = n + r;
								return e.jsonProps.rtl && (i = this.group.viewableRange.d - i), this.group.convertScrollPositionToTValue(i)
							}.bind(this.group.timeParser)
						}
					}
				}, {
					key: "onBreakpointChange",
					value: function(e) {
						this.setScrollDirection()
					}
				}, {
					key: "setScrollDirection",
					value: function() {
						var e = l.pageMetrics.breakpoint,
							t = e === h.BASIC ? this.verticalScroll : this.horizontalScroll;
						this.group.getPosition = t.getPosition, this.group.createViewableRange = t.createViewableRange, this.group.timeParser.parse = t.parseTime, e !== h.BASIC ? this.scrollComponent.on("scroll", this.onHorizontalScroll) : this.scrollComponent.off("scroll", this.onHorizontalScroll)
					}
				}], [{
					key: "IS_SUPPORTED",
					value: function() {
						return !c
					}
				}]), t
			}(a);
		t.exports = m
	}, {
		"../helpers/BreakPoints": 106,
		"../helpers/forcesBasicInteraction": 109,
		"@marcom/anim-system": 38,
		"@marcom/anim-system/Model/AnimSystemModel": 43,
		"@marcom/bubble-gum/BaseComponent": 65
	}],
	98: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/bubble-gum/BaseComponent"),
			l = (a.prototype, e("@marcom/ac-progressive-image-loader/ProgressiveImageLoader"), e("@marcom/anim-system")),
			c = e("@marcom/ac-raf-emitter/draw"),
			u = e("../helpers/forcesBasicInteraction"),
			h = e("../helpers/BreakPoints"),
			m = e("../helpers/ClipPaths"),
			f = function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return n.head = document.querySelector("head"), n
				}
				return o(t, e), s(t, [{
					key: "mounted",
					value: function() {
						this.setLineAnimation()
					}
				}, {
					key: "setLineAnimation",
					value: function() {
						var e = this,
							t = this.el.querySelectorAll("[data-clip-anim]");
						t.length && Array.from(t).forEach(function(t) {
							var n = e._lineAnimationConstants(t),
								r = JSON.parse(t.getAttribute("data-clip-anim"));
							l.addKeyframe(t, Object.assign(r, n));
							var i = t._animInfo.controller,
								o = r.origin,
								s = "polygon(" + m()[o].collapsed + ")";
							e._setClipPath(t, s), i.on("update-clip", function(n) {
								var r = n.tweenProps.clipPathChange.current;
								s = "polygon(" + m(r)[o].expanded + ")", e._setClipPath(t, s)
							})
						})
					}
				}, {
					key: "_setClipPath",
					value: function(e, t) {
						c(function() {
							e.style.cssText = "-webkit-clip-path: " + t + "; clip-path: " + t + ";"
						})
					}
				}, {
					key: "_lineAnimationConstants",
					value: function(e) {
						var t = h.ENHANCED;
						return e.classList.contains("basic-only") && (t = h.BASIC), {
							breakpointMask: t,
							ease: .8,
							clipPathChange: [0, 100],
							event: "update-clip"
						}
					}
				}], [{
					key: "IS_SUPPORTED",
					value: function() {
						return !u
					}
				}]), t
			}(a);
		t.exports = f
	}, {
		"../helpers/BreakPoints": 106,
		"../helpers/ClipPaths": 107,
		"../helpers/forcesBasicInteraction": 109,
		"@marcom/ac-progressive-image-loader/ProgressiveImageLoader": 10,
		"@marcom/ac-raf-emitter/draw": 20,
		"@marcom/anim-system": 38,
		"@marcom/bubble-gum/BaseComponent": 65
	}],
	99: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/bubble-gum/BaseComponent"),
			l = (a.prototype, e("@marcom/ac-progressive-image-loader/ProgressiveImageLoader")),
			c = (e("@marcom/anim-system"), e("../helpers/BreakPoints")),
			u = function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					try {
						n._loadOptions = JSON.parse(n.el.getAttribute("data-progressive-image-options"))
					} catch (o) {
						n._loadOptions = null
					}
					return n.imageLoader = new l({
						container: n.el,
						includeContainer: !0
					}), n
				}
				return o(t, e), s(t, [{
					key: "mounted",
					value: function() {
						var e = this;
						if (this.addDiscreteEvent({
								start: "-200vw",
								end: "-200vw",
								event: "ProgressiveImageLoad",
								breakpointMask: c.ENHANCED,
								allowRTL: !0
							}), this.addDiscreteEvent({
								start: "-200vh",
								end: "-200vh",
								event: "ProgressiveImageLoad",
								breakpointMask: c.BASIC
							}), this.el._animInfo) {
							var t = this.el._animInfo.controller;
							t.on("ProgressiveImageLoad", function() {
								e.imageLoader.load(e._loadOptions)
							})
						}
					}
				}, {
					key: "setupEvents",
					value: function() {
						this._onImageLoad = this._onImageLoad.bind(this), this._onComplete = this._onComplete.bind(this), this.imageLoader.on(l.Events.ImageLoad, this._onImageLoad), this.imageLoader.on(l.Events.Complete, this._onComplete)
					}
				}, {
					key: "destroy",
					value: function() {
						this.imageLoader.destroy(), this.imageLoader = null
					}
				}, {
					key: "_onImageLoad",
					value: function(e) {
						this.section.trigger(this.Events.ImageLoad, e)
					}
				}, {
					key: "_onComplete",
					value: function() {
						this.section.trigger(this.Events.Complete)
					}
				}]), t
			}(a);
		u.Events = {
			ImageLoad: "progressive-image-load",
			Complete: "progressive-image-complete"
		}, u.IS_SUPPORTED = function() {
			var e = document.documentElement;
			return e.classList.contains("progressive-image")
		}, t.exports = u
	}, {
		"../helpers/BreakPoints": 106,
		"@marcom/ac-progressive-image-loader/ProgressiveImageLoader": 10,
		"@marcom/anim-system": 38,
		"@marcom/bubble-gum/BaseComponent": 65
	}],
	100: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/bubble-gum/src/BaseComponent"),
			l = e("../helpers/BreakPoints"),
			c = e("@marcom/anim-system/Model/AnimSystemModel"),
			u = e("@marcom/bubble-gum/ComponentMap"),
			h = e("@marcom/ac-raf-emitter/RAFEmitter"),
			m = {
				vertical: "vertical",
				horizontal: "horizontal"
			},
			f = function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return n.raf = new h, n._tracking = !1, n._tracked = !1, n._exit = n._exit.bind(n), n._enter = n._enter.bind(n), n._engage = n._engage.bind(n), n._isEnabled = "B" !== e.pageMetrics.breakpoint, n
				}
				return o(t, e), s(t, null, [{
					key: "IS_SUPPORTED",
					value: function() {
						return !0
					}
				}]), s(t, [{
					key: "mounted",
					value: function() {
						var e = this.el.getAttribute("data-section-custom-event-triggers"),
							t = {
								start: "0",
								end: "100%w",
								relativeTo: ""
							};
						if (e && e.length > 0) try {
							var n = JSON.parse(e);
							t = Object.assign(t, n)
						} catch (r) {}
						this.addDiscreteEvent({
							start: t.start,
							end: t.end,
							relativeTo: t.relativeTo,
							event: "section engagement",
							onEnter: this._enter,
							onExit: this._exit,
							breakpointMask: l.ENHANCED
						});
						var i = document.querySelector("div.scroll-container-vertical");
						this.AnalyticsComponent = this.gum.getComponentsForElement(i).filter(function(e) {
							return e instanceof u.AnalyticsComponent
						})[0], this.AnalyticsComponent && (this.passiveTracker = this.AnalyticsComponent.passiveTracker, this.SectionObserver = this.AnalyticsComponent.SectionObserver, this._isEnabled && this.SectionObserver && this.SectionObserver.pauseElementTracking(this.el), this.stopSectionEngagement())
					}
				}, {
					key: "stopSectionEngagement",
					value: function() {
						this.SectionObserver && ("B" !== c.pageMetrics.breakpoint ? (this._isEnabled = !0, this.SectionObserver.pauseElementTracking(this.el)) : (this._isEnabled = !1, this.SectionObserver.resumeElementTracking(this.el)))
					}
				}, {
					key: "onBreakpointChange",
					value: function(e) {
						this.stopSectionEngagement()
					}
				}, {
					key: "_enter",
					value: function() {
						this.SectionObserver && this.passiveTracker && (this.el.entryTime = Date.now(), !this._tracked && this._isEnabled && this._engageAfterOneSec())
					}
				}, {
					key: "_engageAfterOneSec",
					value: function() {
						var e = this,
							t = 0,
							n = 60;
						this.raf.on("update", function() {
							t++, t < n ? e.raf.run() : e._engage(e.el)
						}), this.raf.run()
					}
				}, {
					key: "_engage",
					value: function(e) {
						this.SectionObserver && (this._tracking = !0, this.SectionObserver.startSectionEngagement(e))
					}
				}, {
					key: "_exit",
					value: function() {
						this.SectionObserver && this.passiveTracker && (this.el.exitTime = Date.now(), this.el.elapsedTime = this.el.exitTime - this.el.entryTime, this._tracked || !this._isEnabled || this.el.elapsedTime < 1e3 || this._tracking && this._disengage(this.el))
					}
				}, {
					key: "_isRouterOrBuyStrip",
					value: function(e) {
						var t = e.getAttribute("data-analytics-section-engagement");
						return !t || t.indexOf("router") >= 0 || t.indexOf("buy strip") >= 0
					}
				}, {
					key: "_disengage",
					value: function(e) {
						var t = this.AnalyticsComponent.scrollDirectionMap,
							n = Object.keys(t),
							r = this._getScrollSummary(t, n);
						this._tracked = !0, this._isEnabled && this._firePassiveTracker(this.passiveTracker, r), this.SectionObserver.endSectionEngagement(e), this.AnalyticsComponent.scrollDirectionMap = {}
					}
				}, {
					key: "_getScrollSummary",
					value: function(e, t) {
						var n = [];
						return e[m.vertical] && n.push(["event248=" + e[m.vertical], "event250"]), e[m.horizontal] && n.push(["event249=" + e[m.horizontal], "event264"]), n.join(",")
					}
				}, {
					key: "_firePassiveTracker",
					value: function(e, t) {
						if (e && "function" == typeof e && t) {
							var n = {
								events: t
							};
							e(n)
						}
					}
				}]), t
			}(a);
		t.exports = f
	}, {
		"../helpers/BreakPoints": 106,
		"@marcom/ac-raf-emitter/RAFEmitter": 16,
		"@marcom/anim-system/Model/AnimSystemModel": 43,
		"@marcom/bubble-gum/ComponentMap": 67,
		"@marcom/bubble-gum/src/BaseComponent": 65
	}],
	101: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/bubble-gum/BaseComponent"),
			l = (a.prototype, e("@marcom/ac-progressive-image-loader/ProgressiveImageLoader"), e("@marcom/anim-system")),
			c = e("../helpers/forcesBasicInteraction"),
			u = e("../helpers/BreakPoints"),
			h = function(e) {
				function t(e) {
					return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
				}
				return o(t, e), s(t, [{
					key: "mounted",
					value: function() {
						var e = this;
						this.group = l.getGroupForTarget(document.querySelector(".scroll-content[data-anim-scroll-group]")), this.group.addKeyframe(this.el, {
							start: "0%w-200vw",
							end: "100%w + 200vw",
							cssClass: "visible",
							toggle: !0,
							breakpointMask: u.ENHANCED,
							allowRTL: !0
						}), this.group.addKeyframe(this.el, {
							start: "-100vh",
							end: "100% + 100vh",
							cssClass: "visible",
							toggle: !0,
							breakpointMask: u.BASIC
						});
						var t = Array.from(this.el.querySelectorAll("[data-will-change]"));
						t.forEach(function(t) {
							t.classList.contains("basic-only") || e.group.addKeyframe(t, {
								start: "0% - 200vw",
								end: "100%w + 200vw",
								cssClass: "will-change",
								toggle: !0,
								breakpointMask: u.ENHANCED,
								allowRTL: !0
							}), t.classList.contains("enhanced-only") || e.group.addKeyframe(t, {
								start: "-100vh",
								end: "100% + 100vh",
								cssClass: "will-change",
								toggle: !0,
								breakpointMask: u.BASIC
							})
						}), this.setSharedAnimData()
					}
				}, {
					key: "_cloneObj",
					value: function(e) {
						var t = {};
						for (var n in e) t[n] = e[n];
						return t
					}
				}, {
					key: "setSharedAnimData",
					value: function() {
						var e = this,
							t = {
								"data-enhanced-anim-bare": {
									start: "0%w - 100vw",
									end: "100%w",
									ease: .8,
									x: [0, "-35%w"],
									breakpointMask: u.ENHANCED,
									allowRTL: !0
								},
								"data-enhanced-whisper-anim-lm": {
									start: "0%w - 100vw",
									end: "120%w",
									ease: .8,
									x: ["120%w", "-20%w"],
									breakpointMask: "" + u.VL + u.VM,
									allowRTL: !0
								},
								"data-enhanced-whisper-anim-s": {
									start: "0%w - 100vw",
									end: "100%w",
									ease: .8,
									x: ["100%w", "0%w"],
									breakpointMask: u.VS,
									allowRTL: !0
								},
								"data-enhanced-anim": {
									start: "0rw - 100%w",
									end: "100rw",
									x: ["30%w", "65px"],
									ease: .8,
									breakpointMask: u.ENHANCED,
									allowRTL: !0
								},
								"data-basic-device-anim": {
									start: "-100vh - 100%",
									end: "100%",
									ease: .8,
									y: ["20%", "-20%"],
									breakpointMask: u.BASIC
								},
								"data-basic-manifesto-anim": {
									start: "-85vh",
									end: "100vh",
									cssClass: "fade",
									toggle: !0,
									breakpointMask: u.BASIC
								},
								"data-basic-whisper-anim": {
									start: "-65vh",
									end: "100vh",
									cssClass: "fade",
									toggle: !0,
									breakpointMask: u.BASIC
								}
							},
							n = function(n) {
								var r = Array.from(e.el.querySelectorAll("[" + n + "]"));
								r.forEach(function(r) {
									var i = e._cloneObj(t[n]),
										o = r.getAttribute(n),
										s = o ? JSON.parse(o) : {},
										a = e.el.className.split(" ").join("."),
										c = (r.classList.contains("typography-alt-label"), r.classList.contains("image"));
									if (c || (i.relativeTo = a + " .text-block"), Object.keys(s).length)
										for (var h in s) i[h] = s[h];
									l.addKeyframe(r, i);
									var m = r.classList.contains("biggest-change");
									"data-enhanced-anim" !== n || m || l.addKeyframe(r, {
										start: "100rw + 65px",
										end: "100vw",
										x: ["65px", "-10%w"],
										relativeTo: i.relativeTo,
										ease: .8,
										breakpointMask: u.ENHANCED,
										allowRTL: !0
									})
								})
							};
						for (var r in t) n(r)
					}
				}]), t
			}(a);
		h.IS_SUPPORTED = function() {
			return !c
		}, t.exports = h
	}, {
		"../helpers/BreakPoints": 106,
		"../helpers/forcesBasicInteraction": 109,
		"@marcom/ac-progressive-image-loader/ProgressiveImageLoader": 10,
		"@marcom/anim-system": 38,
		"@marcom/bubble-gum/BaseComponent": 65
	}],
	102: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = function h(e, t, n) {
				null === e && (e = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(e, t);
				if (void 0 === r) {
					var i = Object.getPrototypeOf(e);
					return null === i ? void 0 : h(i, t, n)
				}
				if ("value" in r) return r.value;
				var o = r.get;
				if (void 0 !== o) return o.call(n);
			},
			l = e("./VideoPlayer"),
			c = (e("../helpers/forcesBasicInteraction"), e("@marcom/ac-raf-emitter/update")),
			u = function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return n.pencilWrapper = document.querySelector(".section-pencil .pair-and-charge .pencil-pairing"), n.pill = document.querySelector(".section-pencil .pencil-pill"), n
				}
				return o(t, e), s(t, [{
					key: "mounted",
					value: function() {
						var e = this;
						a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "mounted", this).call(this), this.pencilVideo = this.gum.getComponentOfType("VideoPlayer", this.pencilWrapper), c(function() {
							e.video.pause(), e.video.currentTime = 0, e.pencilVideo.video.addEventListener("ended", function() {
								e.pill.classList.add("reveal"), e.playVideo()
							}), e.pencilVideo.video.addEventListener("play", function() {
								e.pill.classList.remove("reveal"), e.onExit()
							})
						})
					}
				}]), t
			}(l);
		t.exports = u
	}, {
		"../helpers/forcesBasicInteraction": 109,
		"./VideoPlayer": 105,
		"@marcom/ac-raf-emitter/update": 21
	}],
	103: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/bubble-gum/BaseComponent"),
			l = (e("@marcom/anim-system/Model/AnimSystemModel"), e("../helpers/forcesBasicInteraction")),
			c = (e("../helpers/BreakPoints"), e("@marcom/anim-system"), function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return n.heroBtn = document.querySelector("#hero-film"), n
				}
				return o(t, e), s(t, [{
					key: "mounted",
					value: function() {
						this.el.addEventListener("click", function(e) {
							var t = e.clientX,
								n = e.clientY,
								r = document.msElementsFromPoint ? document.msElementsFromPoint(t, n) : document.elementsFromPoint(t, n),
								i = /(^a$)|(button)/;
							r.every(function(e) {
								return e.localName.match(i) && e.click(), !e.localName.match(i)
							})
						})
					}
				}], [{
					key: "IS_SUPPORTED",
					value: function() {
						return !l && (document.documentElement.classList.contains("touch") && !document.documentElement.classList.contains("basic-interaction"))
					}
				}]), t
			}(a));
		t.exports = c
	}, {
		"../helpers/BreakPoints": 106,
		"../helpers/forcesBasicInteraction": 109,
		"@marcom/anim-system": 38,
		"@marcom/anim-system/Model/AnimSystemModel": 43,
		"@marcom/bubble-gum/BaseComponent": 65
	}],
	104: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = function y(e, t, n) {
				null === e && (e = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(e, t);
				if (void 0 === r) {
					var i = Object.getPrototypeOf(e);
					return null === i ? void 0 : y(i, t, n)
				}
				if ("value" in r) return r.value;
				var o = r.get;
				if (void 0 !== o) return o.call(n)
			},
			l = e("./VideoPlayer"),
			c = e("@marcom/ac-raf-emitter/RAFEmitter"),
			u = e("@marcom/ac-raf-emitter/draw"),
			h = e("@marcom/anim-system/Model/AnimSystemModel"),
			m = e("../helpers/BreakPoints"),
			f = (e("@marcom/bubble-gum/ComponentMap"), e("../helpers/forcesBasicInteraction")),
			p = e("../helpers/isiPadpro"),
			d = function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return n.rafEmitter = new c, n
				}
				return o(t, e), s(t, [{
					key: "bindEvents",
					value: function() {
						a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "bindEvents", this).call(this), this.stopChomaVideo = this.stopChomaVideo.bind(this)
					}
				}, {
					key: "mounted",
					value: function() {
						a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "mounted", this).call(this);
						document.querySelector(".scroll-content");
						this.chromaManager = this.gum.getComponentOfType("ChromaManager"), this.texture = this.chromaManager.seriously.source(this.video)
					}
				}, {
					key: "createVideoElements",
					value: function() {
						a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "createVideoElements", this).call(this), h.pageMetrics.breakpoint !== m.BASIC && this.addVideoEvents()
					}
				}, {
					key: "addVideoEvents",
					value: function() {
						this.video.addEventListener("ended", this.onExit), this.video.addEventListener("pause", this.onExit), this.video.style.visibility = "hidden"
					}
				}, {
					key: "removeVideoEvents",
					value: function() {
						this.video.removeEventListener("ended", this.onExit), this.video.removeEventListener("pause", this.onExit), this.video.style.visibility = "visible"
					}
				}, {
					key: "onBreakpointChange",
					value: function(e) {
						e.breakpoint !== m.BASIC ? this.currentBreakpoint === m.BASIC && this.addVideoEvents() : this.removeVideoEvents()
					}
				}, {
					key: "onPreload",
					value: function() {
						if (h.pageMetrics.breakpoint !== m.BASIC) {
							if (this.canplaythrough) return;
							this.video.src = this.getMediaFile(this.options.src), this.video.muted = !0, this.video.load()
						}
					}
				}, {
					key: "onEnter",
					value: function() {
						if (h.pageMetrics.breakpoint !== m.BASIC) {
							if (!this.canplaythrough) return void this.video.addEventListener("canplaythrough", this.onEnterPlay);
							if (this.noReplay && this.animated) return;
							this.playVideo()
						} else this.chromaManager.trigger("start-animation", this.options.src)
					}
				}, {
					key: "onExit",
					value: function() {
						h.pageMetrics.breakpoint !== m.BASIC ? this.canvas && this.stopChomaVideo() : a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onExit", this).call(this)
					}
				}, {
					key: "onEnterPlay",
					value: function() {
						this.canplaythrough = !0, this.playVideo(), this.video.removeEventListener("canplaythrough", this.onEnterPlay)
					}
				}, {
					key: "playVideo",
					value: function() {
						var e = this;
						this.replayBtn && (this.replayBtn.disabled = !0), this.canvas = this.chromaManager.getCanvas(), this.el.appendChild(this.canvas), this.options.width = this.options.width || this.video.videoWidth, this.options.height = this.options.height || this.video.videoHeight, this.chromaManager.loadVideo(this.texture, this.options), this.chromaManager.trigger("animation-reset", this.options.src), this.rafEmitter.on("update", function() {
							e.video.currentTime >= e.options.triggerAtTime && !e.triggered && (e.triggered = !0, e.chromaManager.trigger("start-animation", e.options.src)), e.el.contains(e.canvas) || (console.log("video stopped", e.video.src), e.stopChomaVideo()), e.rafEmitter.run()
						}), this.animatePosterFrame(), this.rafEmitter.run()
					}
				}, {
					key: "animatePosterFrame",
					value: function() {
						var e = this,
							t = 1,
							n = 1 / 60;
						this.rafEmitter.on("draw", function() {
							t -= n, t <= 0 && (u(function() {
								e.StartFrame.style.opacity = 0, e.EndFrame.style.opacity = 0, e.canvas.style.opacity = 1
							}), e.video.play(), e.chromaManager.seriously.go(), e.rafEmitter.off("draw"))
						})
					}
				}, {
					key: "stopChomaVideo",
					value: function() {
						var e = this;
						this.replayBtn && (this.replayBtn.disabled = !1), this.video.pause(), this.triggered = !1, this.animated = !0, this.chromaManager.seriously.stop(), u(function() {
							e.StartFrame.style.opacity = 0, e.EndFrame.style.opacity = 1, e.canvas.style.opacity = 0, e.video.currentTime = 0
						}), this.rafEmitter.off("update"), this.rafEmitter.off("draw"), this.rafEmitter.cancel()
					}
				}, {
					key: "getMediaFile",
					value: function(e) {
						return "" + this.baseURL + e + "/large.mp4"
					}
				}], [{
					key: "IS_SUPPORTED",
					value: function() {
						return !(f || h.pageMetrics.breakpoint === m.BASIC || p) && document.documentElement.classList.contains("webgl")
					}
				}]), t
			}(l);
		t.exports = d
	}, {
		"../helpers/BreakPoints": 106,
		"../helpers/forcesBasicInteraction": 109,
		"../helpers/isiPadpro": 110,
		"./VideoPlayer": 105,
		"@marcom/ac-raf-emitter/RAFEmitter": 16,
		"@marcom/ac-raf-emitter/draw": 20,
		"@marcom/anim-system/Model/AnimSystemModel": 43,
		"@marcom/bubble-gum/ComponentMap": 67
	}],
	105: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = e("@marcom/bubble-gum/BaseComponent"),
			l = e("@marcom/ac-raf-emitter/draw"),
			c = e("@marcom/anim-system/Model/AnimSystemModel"),
			u = e("../helpers/BreakPoints"),
			h = e("../helpers/forcesBasicInteraction"),
			m = e("@marcom/feature-detect/isRetina")(),
			f = e("../helpers/isiPadpro"),
			p = {
				V_S: "medium",
				V_M: "medium",
				V_L: "medium",
				B: "medium"
			},
			d = function(e) {
				function t(e) {
					r(this, t);
					var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return n.options = n.getOptions("data-video"), n.noReplay = n.options.noReplay || !0, n.customURL = n.el.getAttribute("data-video-base-url"), n.defaultURL = "/video/", n.baseURL = n.customURL ? n.customURL : n.defaultURL, n
				}
				return o(t, e), s(t, [{
					key: "bindEvents",
					value: function() {
						this.onPreload = this.onPreload.bind(this), this.onEnter = this.onEnter.bind(this), this.onExit = this.onExit.bind(this), this.forcePlay = this.forcePlay.bind(this), this.onEnterPlay = this.onEnterPlay.bind(this)
					}
				}, {
					key: "mounted",
					value: function() {
						var e = this;
						this.bindEvents(), this.chromaManager = this.gum.getComponentOfType("ChromaManager"), this.StartFrame = this.el.querySelector(".poster-frame.startframe"), this.EndFrame = this.el.querySelector(".poster-frame.endframe"), this.EndFrame = this.EndFrame || this.StartFrame, this.createVideoElements();
						var t = {
								start: "-300vw",
								end: "-300vw",
								event: "preloadVideo",
								breakpointMask: u.ENHANCED
							},
							n = {
								start: "-200vh",
								end: "-200vh",
								event: "preloadVideo",
								breakpointMask: u.BASIC
							},
							r = {
								start: "-50vw",
								end: "100%w",
								event: "playVideo",
								breakpointMask: u.ENHANCED
							},
							i = {
								start: "-50vh",
								end: "100%",
								event: "playVideo",
								breakpointMask: u.BASIC
							},
							o = {
								preloadEnhanced: t,
								preloadBasic: n,
								playVideoEhnaced: r,
								playVideoBasic: i
							},
							s = {
								preloadBasic: n,
								playVideoBasic: i
							},
							a = {
								preloadEnhanced: t,
								playVideoEhnaced: r
							};
						if (this.options.mask || this.createEvent(o), this.options.mask === u.ENHANCED && this.createEvent(a), this.options.mask === u.BASIC && this.createEvent(s), this.el._animInfo) {
							var l = this.el._animInfo.controller;
							l.on("preloadVideo", this.onPreload), this.options.relativeVideo ? this.chromaManager && (this.chromaManager.on("animation-reset", function(t) {
								(t = e.options.relativeVideo) && (e.video.pause(), e.video.currentTime = 0)
							}), this.chromaManager.on("start-animation", function(t) {
								(t = e.options.relativeVideo) && (e.noReplay = !1, e.onEnter())
							})) : l.on("playVideo:enter", this.onEnter), l.on("playVideo:exit", this.onExit), this.options.replayBtnClass ? this.replayBtn = document.querySelector(this.options.replayBtnClass) : this.replayBtn = this.el.querySelector(".replay-btn"), this.replayBtn && this.replayBtn.addEventListener("click", this.forcePlay)
						}
					}
				}, {
					key: "createEvent",
					value: function(e) {
						for (var t in e)
							if (e.hasOwnProperty(t)) {
								var n = e[t];
								"playVideoEhnaced" === t && (n = Object.assign({}, e[t], this.getOptions("data-anim-play-video"))), "playVideoBasic" === t && (n = Object.assign({}, e[t], this.getOptions("data-anim-play-video-basic"))), this.addDiscreteEvent(n)
							}
					}
				}, {
					key: "createVideoElements",
					value: function() {
						var e = this;
						this.video = document.createElement("video"), this.video.style.opacity = 0, this.video.muted = !0, this.video.playsInline = !0, this.video.setAttribute("aria-hidden", "true"), this.video.addEventListener("ended", this.onExit), this.el.appendChild(this.video), this.video.addEventListener("canplaythrough", function() {
							e.canplaythrough || (e.canplaythrough = !0)
						})
					}
				}, {
					key: "useStatic",
					value: function() {
						return f && this.options.useStatic && c.pageMetrics.breakpoint === u.VL
					}
				}, {
					key: "getMediaFile",
					value: function(e) {
						this.currentBreakpoint = c.pageMetrics.breakpoint;
						var t = this.currentBreakpoint === u.VL && f && !this.options.useRetina;
						if (!this.options.mask || this.options.mask.indexOf(this.currentBreakpoint) > -1) {
							var n = p[this.currentBreakpoint],
								r = m && !t ? ""/*控制ipad pro设备的视频文件尾标*/ : ""; 
							return "" + this.baseURL + e + "/" + n + r + ".mp4"
						}
					}
				}, {
					key: "onPreload",
					value: function() {
						var e = this.getMediaFile(this.options.src);
						!e || this.useStatic() || this.canplaythrough && this.currentBreakpoint === c.pageMetrics.breakpoint || (this.video.src = e, this.video.load())
					}
				}, {
					key: "onEnter",
					value: function() {
						if (!this.noReplay || !this.animated) {
							if (!this.canplaythrough) return void this.video.addEventListener("canplaythrough", this.onEnterPlay);
							this.video.currentTime = 0, this.playVideo()
						}
					}
				}, {
					key: "onExit",
					value: function() {
						var e = this;
						this.canplaythrough && (this.replayBtn && (this.replayBtn.disabled = !1), this.video.pause(), this.animated = !0, l(function() {
							e.EndFrame.style.opacity = 1, e.video.style.opacity = 0
						}))
					}
				}, {
					key: "onEnterPlay",
					value: function() {
						this.canplaythrough = !0, this.playVideo(), this.video.removeEventListener("canplaythrough", this.onEnterPlay)
					}
				}, {
					key: "playVideo",
					value: function() {
						var e = this;
						this.replayBtn && (this.replayBtn.disabled = !0), l(function() {
							e.video.style.opacity = 1, e.EndFrame.style.opacity = 0, e.video.currentTime = 0, l(function() {
								e.StartFrame.style.visibility = "hidden"
							})
						}), this.video.play()
					}
				}, {
					key: "forcePlay",
					value: function() {
						this.replayBtn.disabled || this.playVideo()
					}
				}, {
					key: "getOptions",
					value: function(e) {
						var t = this.el.getAttribute(e);
						return t ? JSON.parse(t) : {}
					}
				}, {
					key: "onBreakpointChange",
					value: function(e) {
						this.canplaythrough = !1, this.video.src = this.getMediaFile(this.options.src), this.video.load()
					}
				}], [{
					key: "IS_SUPPORTED",
					value: function() {
						return !h
					}
				}]), t
			}(a);
		t.exports = d
	}, {
		"../helpers/BreakPoints": 106,
		"../helpers/forcesBasicInteraction": 109,
		"../helpers/isiPadpro": 110,
		"@marcom/ac-raf-emitter/draw": 20,
		"@marcom/anim-system/Model/AnimSystemModel": 43,
		"@marcom/bubble-gum/BaseComponent": 65,
		"@marcom/feature-detect/isRetina": 71
	}],
	106: [function(e, t, n) {
		"use strict";
		t.exports = {
			BASIC: "B",
			VS: "V_S",
			VM: "V_M",
			VL: "V_L",
			ENHANCED: "V_SV_MV_L"
		}
	}, {}],
	107: [function(e, t, n) {
		"use strict";
		t.exports = function(e) {
			var t = function(e) {
					return (e - 100) * -1
				},
				n = t(e);
			return {
				"top-left": {
					collapsed: "0 0, 100% 0, 0 0, 0% 100%",
					expanded: "0 0, 100% 0, " + e + "% " + e + "%, 0% 100%"
				},
				"top-right": {
					collapsed: "0 0, 100% 0, 100% 100%, 100% 0",
					expanded: "0 0, 100% 0, 100% 100%, " + n + "% " + e + "%"
				},
				"bottom-left": {
					collapsed: "0 0, 0 100%, 100% 100%, 0% 100%",
					expanded: "0 0, " + e + "% " + n + "%, 100% 100%, 0% 100%"
				},
				"bottom-right": {
					collapsed: "100% 100%, 100% 0, 100% 100%, 0 100%",
					expanded: n + "% " + n + "%, 100% 0, 100% 100%, 0 100%"
				},
				top: {
					collapsed: "0 100%, 100% 100%, 100% 100%, 0% 100%",
					expanded: "0 100%, 100% 100%, 100% " + e + "%, 0% " + e + "%"
				},
				right: {
					collapsed: "100% 0, 100% 0, 100% 100%, 100% 100%",
					expanded: n + "% 0, 100% 0, 100% 100%, " + n + "% 100%"
				},
				bottom: {
					collapsed: "0 100%, 100% 100%, 100% 100%, 0% 100%",
					expanded: "0 " + n + "%, 100% " + n + "%, 100% 100%, 0% 100%"
				},
				left: {
					collapsed: "0 0, 0 0, 0 100%, 0% 100%",
					expanded: "0 0, " + e + "% 0, " + e + "% 100%, 0% 100%"
				}
			}
		}
	}, {}],
	108: [function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			o = e("@marcom/ac-raf-emitter/RAFEmitter");
		t.exports = function() {
			function e(t) {
				var n = this;
				r(this, e), this.target = 0, this.current = t.initPosition || 0, this.fn = t.callback || function() {}, this.ease = t.ease, this._rafEmitter = new o, this._rafEmitter.on("update", function() {
					var e = n.target - n.current,
						t = 1;
					e > .01 && (t = n.ease, n._rafEmitter.run()), n.current += e * t
				}), this._rafEmitter.on("draw", function() {
					return n.fn(n.current, n.target)
				})
			}
			return i(e, [{
				key: "_startLoop",
				value: function() {
					this._rafEmitter.run()
				}
			}, {
				key: "setTarget",
				value: function(e) {
					this.target = e, this._startLoop()
				}
			}, {
				key: "setChaser",
				value: function(e) {
					this.current = e
				}
			}, {
				key: "stop",
				value: function() {
					this._rafEmitter.cancel()
				}
			}, {
				key: "currentPosition",
				get: function() {
					return this.current
				}
			}]), e
		}()
	}, {
		"@marcom/ac-raf-emitter/RAFEmitter": 16
	}],
	109: [function(e, t, n) {
		"use strict";
		var r = e("@marcom/useragent-detect"),
			i = e("@marcom/ac-feature/touchAvailable")(),
			o = (r.browser.ie, document.documentElement.classList.contains("aow")),
			s = e("@marcom/ac-feature/prefersReducedMotion")(),
			a = function() {
				return !i || "function" == typeof document.elementsFromPoint
			}(),
			l = function() {
				return !!i && "function" == typeof document.msElementsFromPoint
			}(),
			c = r.os.android,
			u = o || c || r.browser.ie || l || !a || s;
		t.exports = u
	}, {
		"@marcom/ac-feature/prefersReducedMotion": 5,
		"@marcom/ac-feature/touchAvailable": 6,
		"@marcom/useragent-detect": 76
	}],
	110: [function(e, t, n) {
		"use strict";
		var r = document.documentElement.classList.contains("touch");
		t.exports = r && 1024 === window.screen.width && 1366 === window.screen.height
	}, {}],
	111: [function(e, t, n) {
		"use strict";
		t.exports = {
			AutoScrollComponent: e("../components/AutoScrollComponent"),
			AutoScrollTouchComponent: e("../components/AutoScrollTouchComponent"),
			HorizontalAnimGroup: e("../components/HorizontalAnimGroup"),
			TouchClick: e("../components/TouchClick"),
			ClassManager: e("../components/ClassManager"),
			SectionTriggers: e("../components/SectionTriggersComponent"),
			LineAnimation: e("../components/LineAnimationComponent"),
			ProgressiveImage: e("../components/ProgressiveImageComponent"),
			VideoChroma: e("../components/VideoChroma"),
			ChromaManager: e("../components/ChromaManager"),
			VideoPlayer: e("../components/VideoPlayer"),
			SequencePlayer: e("../components/SequencePlayer"),
			DoubleTap: e("../components/DoubleTap"),
			AnalyticsComponent: e("../components/AnalyticsComponent"),
			SectionEngagement: e("../components/SectionEngagementComponent"),
			AccessibilityComponent: e("../components/AccessibilityComponent")
		}
	}, {
		"../components/AccessibilityComponent": 90,
		"../components/AnalyticsComponent": 91,
		"../components/AutoScrollComponent": 92,
		"../components/AutoScrollTouchComponent": 93,
		"../components/ChromaManager": 94,
		"../components/ClassManager": 95,
		"../components/DoubleTap": 96,
		"../components/HorizontalAnimGroup": 97,
		"../components/LineAnimationComponent": 98,
		"../components/ProgressiveImageComponent": 99,
		"../components/SectionEngagementComponent": 100,
		"../components/SectionTriggersComponent": 101,
		"../components/SequencePlayer": 102,
		"../components/TouchClick": 103,
		"../components/VideoChroma": 104,
		"../components/VideoPlayer": 105
	}],
	112: [function(e, t, n) {
		"use strict";
		var r = e("@marcom/bubble-gum/BubbleGum"),
			i = e("@marcom/bubble-gum/ComponentMap"),
			o = e("./model/OverviewComponentMap"),
			s = (e("@marcom/anim-system/ScrollGroup"), e("@marcom/anim-system/Model/AnimSystemModel")),
			a = e("@marcom/anim-system/AnimSystem"),
			l = e("@marcom/ac-accessibility/TextZoom"),
			c = e("./helpers/BreakPoints"),
			u = e("./helpers/ClipPaths"),
			h = e("./helpers/isiPadpro"),
			m = {
				minWidth: 736
			},
			f = {
				vs: 414,
				vm: 824,
				vl: 1200
			},
			p = function() {
				var e = document.documentElement.classList.contains("webgl"),
					t = "files/",
					n = ["seriously.min.js", "./seriously.chroma.min.js"],
					r = new Promise(function(r, i) {
						!e || h ? r() : n.forEach(function(e, n) {
							var i = document.createElement("script");
							0 === n && i.addEventListener("load", function() {
								r()
							}), i.src = "" + t + e, document.body.appendChild(i)
						})
					});
				return r
			},
			d = function() {
				var e = document.createElement("div");
				e.setAttribute("windowDimensionsTracker", "true"), e.style.position = "fixed", e.style.top = "0", e.style.width = "100vw", e.style.height = "100vh", e.style.background = "red", e.style.pointerEvents = "none", e.style.visibility = "hidden", e.style.zIndex = "-1", document.documentElement.appendChild(e);
				var t = e.clientWidth,
					n = e.clientHeight,
					r = document.documentElement.classList.contains("text-zoom");
				a.on("ON_DOM_GROUPS_CREATED", function() {
					return s.pageMetrics.windowHeight = n
				}), a.on("ON_RESIZE_IMMEDIATE", function() {
					return s.pageMetrics.windowHeight = n
				}), window.removeEventListener("resize", a.onResizeImmediate), window.addEventListener("resize", function(i) {
					var o = document.documentElement.classList.contains("text-zoom");
					r !== o && location.reload(!1), r = o;
					var s = e.clientWidth,
						l = e.clientHeight;
					s === t && l === n || (t = s, n = l, a.onResizeImmediate(i))
				})
			},
			y = function() {
				Object.assign(i, o);
				var e = document.querySelector("body");
				document.documentElement.classList.contains("text-zoom") ? s.BREAKPOINTS = [{
					name: c.BASIC,
					longName: "default-wide",
					mediaQuery: "only screen\n\t\t\t\t\tand (min-width: 100px)"
				}] : s.BREAKPOINTS = [{
					name: c.VS,
					longName: "enhanced-small",
					mediaQuery: "only screen\n\t\t\t\t\tand (min-width: " + m.minWidth + "px)\n\t\t\t\t\tand (max-height: " + f.vs + "px)"
				}, {
					name: c.VM,
					longName: "enhanced-medium",
					mediaQuery: "only screen\n\t\t\t\t\tand (min-width: " + m.minWidth + "px)\n\t\t\t\t\tand (max-height: " + f.vm + "px)"
				}, {
					name: c.VM,
					longName: "enhanced-medium",
					mediaQuery: "only screen and (max-width: 1334px) and (min-width: " + m.minWidth + "px)"
				}, {
					name: c.VL,
					longName: "enhanced-large",
					mediaQuery: "only screen\n\t\t\t\t\tand (min-width: " + m.minWidth + "px)\n\t\t\t\t\tand (min-height: " + (f.vm + 1) + "px)"
				}, {
					name: c.BASIC,
					longName: "default-wide",
					mediaQuery: "only screen\n\t\t\t\t\tand (max-width: " + (m.minWidth - 1) + "px)"
				}];
				var t = new r(e);
				return t
			},
			v = function(e) {
				"rtl" === document.documentElement.getAttribute("dir") && e.on(r.EVENTS.DOM_COMPONENTS_MOUNTED, function() {
					var t = e.anim.getGroupForTarget(document.querySelector(".scroll-content"));
					t.keyframeControllers.forEach(function(e) {
						e._allKeyframes.forEach(function(e) {
							if (e.jsonProps.allowRTL) {
								e.jsonProps.rtl = !0;
								var t = "" + e.jsonProps.end,
									n = "" + e.jsonProps.start;
								e.jsonProps.end === e.jsonProps.start && (t = "100%w - (" + t + ")", n = "100%w - (" + n + ")"), e.overwriteProps({
									start: t,
									end: n,
									x: e.jsonProps.x ? [e.jsonProps.x[0], e.jsonProps.x[1] + " * -1"] : void 0
								})
							}
						})
					})
				})
			},
			b = function() {
				var e = document.querySelector("head"),
					t = document.createElement("style");
				t.type = "text/css";
				var n = "",
					r = u(100),
					i = function(e) {
						var t = function(t) {
								return "polygon(" + r[e][t] + ")"
							},
							i = function(e) {
								return "-webkit-clip-path: " + t(e) + "; clip-path: " + t(e) + ";"
							},
							o = ".clip-path-" + e + " {" + i("collapsed") + "}",
							s = ".expanded .clip-path-" + e + " {" + i("expanded") + "}";
						n += o + "\n" + s + "\n"
					};
				for (var o in r) i(o);
				var s = document.createTextNode(n);
				t.appendChild(s), e.appendChild(t)
			};
		! function() {
			l.detect(), d(), p().then(function() {
				b();
				var e = y(),
					t = document.querySelector(".ac-gf-buystrip");
				t && (t.setAttribute("data-section-custom-event-triggers", '{"start": "100vh + 95rh","end":"100vh + 98rh + 35%","relativeTo": ".section-router-overview"}'), e.addComponent({
					componentName: "SectionEngagement",
					el: t
				})), v(e), e.on(r.EVENTS.DOM_COMPONENTS_MOUNTED, function() {
					document.documentElement.classList.add("loaded")
				})
			})
		}()
	}, {
		"./helpers/BreakPoints": 106,
		"./helpers/ClipPaths": 107,
		"./helpers/isiPadpro": 110,
		"./model/OverviewComponentMap": 111,
		"@marcom/ac-accessibility/TextZoom": 1,
		"@marcom/anim-system/AnimSystem": 38,
		"@marcom/anim-system/Model/AnimSystemModel": 43,
		"@marcom/anim-system/ScrollGroup": 52,
		"@marcom/bubble-gum/BubbleGum": 66,
		"@marcom/bubble-gum/ComponentMap": 67
	}]
}, {}, [112]);