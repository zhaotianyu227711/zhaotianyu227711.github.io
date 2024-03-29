require = function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;
				if (!u && a) return a(o, !0);
				if (i) return i(o, !0);
				throw new Error("Cannot find module '" + o + "'")
			}
			var f = n[o] = {
				exports: {}
			};
			t[o][0].call(f.exports, function(e) {
				var n = t[o][1][e];
				return s(n ? n : e)
			}, f, f.exports, e, t, n, r)
		}
		return n[o].exports
	}
	var i = typeof require == "function" && require;
	for (var o = 0; o < r.length; o++) s(r[o]);
	return s
}({
	1: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Array/prototype.slice");
		module.exports = function toArray(arrayLike) {
			return Array.prototype.slice.call(arrayLike)
		}
	}, {
		"@marcom/ac-polyfills/Array/prototype.slice": 105
	}],
	2: [function(require, module, exports) {
		"use strict";
		var DEBUG_MESSAGING_KEY = "f7c9180f-5c45-47b4-8de4-428015f096c0";
		var allowDebugMessaging;
		var _window = window || self;
		try {
			allowDebugMessaging = !!_window.localStorage.getItem(DEBUG_MESSAGING_KEY)
		} catch (err) {}
		module.exports = function expose(funcName) {
			return function() {
				if (allowDebugMessaging && typeof window.console === "object") {
					return console[funcName].apply(console, Array.prototype.slice.call(arguments, 0))
				}
			}
		}
	}, {}],
	3: [function(require, module, exports) {
		"use strict";
		module.exports = require("./internal/expose")("log")
	}, {
		"./internal/expose": 2
	}],
	4: [function(require, module, exports) {
		"use strict";
		module.exports = 8
	}, {}],
	5: [function(require, module, exports) {
		"use strict";
		module.exports = 11
	}, {}],
	6: [function(require, module, exports) {
		"use strict";
		module.exports = 9
	}, {}],
	7: [function(require, module, exports) {
		"use strict";
		module.exports = 10
	}, {}],
	8: [function(require, module, exports) {
		"use strict";
		module.exports = 1
	}, {}],
	9: [function(require, module, exports) {
		"use strict";
		module.exports = 3
	}, {}],
	10: [function(require, module, exports) {
		"use strict";
		module.exports = {
			createDocumentFragment: require("./createDocumentFragment"),
			filterByNodeType: require("./filterByNodeType"),
			hasAttribute: require("./hasAttribute"),
			indexOf: require("./indexOf"),
			insertAfter: require("./insertAfter"),
			insertBefore: require("./insertBefore"),
			insertFirstChild: require("./insertFirstChild"),
			insertLastChild: require("./insertLastChild"),
			isComment: require("./isComment"),
			isDocument: require("./isDocument"),
			isDocumentFragment: require("./isDocumentFragment"),
			isDocumentType: require("./isDocumentType"),
			isElement: require("./isElement"),
			isNode: require("./isNode"),
			isNodeList: require("./isNodeList"),
			isTextNode: require("./isTextNode"),
			remove: require("./remove"),
			replace: require("./replace"),
			COMMENT_NODE: require("./COMMENT_NODE"),
			DOCUMENT_FRAGMENT_NODE: require("./DOCUMENT_FRAGMENT_NODE"),
			DOCUMENT_NODE: require("./DOCUMENT_NODE"),
			DOCUMENT_TYPE_NODE: require("./DOCUMENT_TYPE_NODE"),
			ELEMENT_NODE: require("./ELEMENT_NODE"),
			TEXT_NODE: require("./TEXT_NODE")
		}
	}, {
		"./COMMENT_NODE": 4,
		"./DOCUMENT_FRAGMENT_NODE": 5,
		"./DOCUMENT_NODE": 6,
		"./DOCUMENT_TYPE_NODE": 7,
		"./ELEMENT_NODE": 8,
		"./TEXT_NODE": 9,
		"./createDocumentFragment": 11,
		"./filterByNodeType": 12,
		"./hasAttribute": 13,
		"./indexOf": 14,
		"./insertAfter": 15,
		"./insertBefore": 16,
		"./insertFirstChild": 17,
		"./insertLastChild": 18,
		"./isComment": 21,
		"./isDocument": 22,
		"./isDocumentFragment": 23,
		"./isDocumentType": 24,
		"./isElement": 25,
		"./isNode": 26,
		"./isNodeList": 27,
		"./isTextNode": 28,
		"./remove": 29,
		"./replace": 30
	}],
	11: [function(require, module, exports) {
		"use strict";
		module.exports = function createDocumentFragment(html) {
			var fragment = document.createDocumentFragment();
			var div;
			if (html) {
				div = document.createElement("div");
				div.innerHTML = html;
				while (div.firstChild) {
					fragment.appendChild(div.firstChild)
				}
			}
			return fragment
		}
	}, {}],
	12: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Array/prototype.slice");
		require("@marcom/ac-polyfills/Array/prototype.filter");
		var isNodeType = require("./internal/isNodeType");
		var ELEMENT_NODE = require("./ELEMENT_NODE");
		module.exports = function filterByNodeType(nodes, nodeType) {
			nodeType = nodeType || ELEMENT_NODE;
			nodes = Array.prototype.slice.call(nodes);
			return nodes.filter(function(node) {
				return isNodeType(node, nodeType)
			})
		}
	}, {
		"./ELEMENT_NODE": 8,
		"./internal/isNodeType": 19,
		"@marcom/ac-polyfills/Array/prototype.filter": 102,
		"@marcom/ac-polyfills/Array/prototype.slice": 105
	}],
	13: [function(require, module, exports) {
		"use strict";
		module.exports = function hasAttribute(el, attr) {
			if ("hasAttribute" in el) {
				return el.hasAttribute(attr)
			}
			return el.attributes.getNamedItem(attr) !== null
		}
	}, {}],
	14: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Array/prototype.indexOf");
		require("@marcom/ac-polyfills/Array/prototype.slice");
		var validate = require("./internal/validate");
		var filterByNodeType = require("./filterByNodeType");
		module.exports = function indexOf(node, nodeType) {
			var parentNode = node.parentNode;
			var nodes;
			if (!parentNode) {
				return 0
			}
			nodes = parentNode.childNodes;
			if (nodeType !== false) {
				nodes = filterByNodeType(nodes, nodeType)
			} else {
				nodes = Array.prototype.slice.call(nodes)
			}
			return nodes.indexOf(node)
		}
	}, {
		"./filterByNodeType": 12,
		"./internal/validate": 20,
		"@marcom/ac-polyfills/Array/prototype.indexOf": 104,
		"@marcom/ac-polyfills/Array/prototype.slice": 105
	}],
	15: [function(require, module, exports) {
		"use strict";
		var validate = require("./internal/validate");
		module.exports = function insertAfter(node, target) {
			validate.insertNode(node, true, "insertAfter");
			validate.childNode(target, true, "insertAfter");
			validate.hasParentNode(target, "insertAfter");
			if (!target.nextSibling) {
				return target.parentNode.appendChild(node)
			}
			return target.parentNode.insertBefore(node, target.nextSibling)
		}
	}, {
		"./internal/validate": 20
	}],
	16: [function(require, module, exports) {
		"use strict";
		var validate = require("./internal/validate");
		module.exports = function insertBefore(node, target) {
			validate.insertNode(node, true, "insertBefore");
			validate.childNode(target, true, "insertBefore");
			validate.hasParentNode(target, "insertBefore");
			return target.parentNode.insertBefore(node, target)
		}
	}, {
		"./internal/validate": 20
	}],
	17: [function(require, module, exports) {
		"use strict";
		var validate = require("./internal/validate");
		module.exports = function insertFirstChild(node, target) {
			validate.insertNode(node, true, "insertFirstChild");
			validate.parentNode(target, true, "insertFirstChild");
			if (!target.firstChild) {
				return target.appendChild(node)
			}
			return target.insertBefore(node, target.firstChild)
		}
	}, {
		"./internal/validate": 20
	}],
	18: [function(require, module, exports) {
		"use strict";
		var validate = require("./internal/validate");
		module.exports = function insertLastChild(node, target) {
			validate.insertNode(node, true, "insertLastChild");
			validate.parentNode(target, true, "insertLastChild");
			return target.appendChild(node)
		}
	}, {
		"./internal/validate": 20
	}],
	19: [function(require, module, exports) {
		"use strict";
		var isNode = require("../isNode");
		module.exports = function isNodeType(node, nodeType) {
			if (!isNode(node)) {
				return false
			}
			if (typeof nodeType === "number") {
				return node.nodeType === nodeType
			}
			return nodeType.indexOf(node.nodeType) !== -1
		}
	}, {
		"../isNode": 26
	}],
	20: [function(require, module, exports) {
		"use strict";
		var isNodeType = require("./isNodeType");
		var COMMENT_NODE = require("../COMMENT_NODE");
		var DOCUMENT_FRAGMENT_NODE = require("../DOCUMENT_FRAGMENT_NODE");
		var ELEMENT_NODE = require("../ELEMENT_NODE");
		var TEXT_NODE = require("../TEXT_NODE");
		var VALID_INSERT_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE, DOCUMENT_FRAGMENT_NODE];
		var ERR_INVALID_INSERT_NODE = " must be an Element, TextNode, Comment, or Document Fragment";
		var VALID_CHILD_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE];
		var ERR_INVALID_CHILD_NODE = " must be an Element, TextNode, or Comment";
		var VALID_PARENT_NODE = [ELEMENT_NODE, DOCUMENT_FRAGMENT_NODE];
		var ERR_INVALID_PARENT_NODE = " must be an Element, or Document Fragment";
		var ERR_NO_PARENT_NODE = " must have a parentNode";
		module.exports = {
			parentNode: function(node, required, funcName, paramName) {
				paramName = paramName || "target";
				if ((node || required) && !isNodeType(node, VALID_PARENT_NODE)) {
					throw new TypeError(funcName + ": " + paramName + ERR_INVALID_PARENT_NODE)
				}
			},
			childNode: function(node, required, funcName, paramName) {
				paramName = paramName || "target";
				if (!node && !required) {
					return
				}
				if (!isNodeType(node, VALID_CHILD_NODE)) {
					throw new TypeError(funcName + ": " + paramName + ERR_INVALID_CHILD_NODE)
				}
			},
			insertNode: function(node, required, funcName, paramName) {
				paramName = paramName || "node";
				if (!node && !required) {
					return
				}
				if (!isNodeType(node, VALID_INSERT_NODE)) {
					throw new TypeError(funcName + ": " + paramName + ERR_INVALID_INSERT_NODE)
				}
			},
			hasParentNode: function(node, funcName, paramName) {
				paramName = paramName || "target";
				if (!node.parentNode) {
					throw new TypeError(funcName + ": " + paramName + ERR_NO_PARENT_NODE)
				}
			}
		}
	}, {
		"../COMMENT_NODE": 4,
		"../DOCUMENT_FRAGMENT_NODE": 5,
		"../ELEMENT_NODE": 8,
		"../TEXT_NODE": 9,
		"./isNodeType": 19
	}],
	21: [function(require, module, exports) {
		"use strict";
		var isNodeType = require("./internal/isNodeType");
		var COMMENT_NODE = require("./COMMENT_NODE");
		module.exports = function isComment(obj) {
			return isNodeType(obj, COMMENT_NODE)
		}
	}, {
		"./COMMENT_NODE": 4,
		"./internal/isNodeType": 19
	}],
	22: [function(require, module, exports) {
		"use strict";
		var isNodeType = require("./internal/isNodeType");
		var DOCUMENT_NODE = require("./DOCUMENT_NODE");
		module.exports = function isDocument(obj) {
			return isNodeType(obj, DOCUMENT_NODE)
		}
	}, {
		"./DOCUMENT_NODE": 6,
		"./internal/isNodeType": 19
	}],
	23: [function(require, module, exports) {
		"use strict";
		var isNodeType = require("./internal/isNodeType");
		var DOCUMENT_FRAGMENT_NODE = require("./DOCUMENT_FRAGMENT_NODE");
		module.exports = function isDocumentFragment(obj) {
			return isNodeType(obj, DOCUMENT_FRAGMENT_NODE)
		}
	}, {
		"./DOCUMENT_FRAGMENT_NODE": 5,
		"./internal/isNodeType": 19
	}],
	24: [function(require, module, exports) {
		"use strict";
		var isNodeType = require("./internal/isNodeType");
		var DOCUMENT_TYPE_NODE = require("./DOCUMENT_TYPE_NODE");
		module.exports = function isDocumentType(obj) {
			return isNodeType(obj, DOCUMENT_TYPE_NODE)
		}
	}, {
		"./DOCUMENT_TYPE_NODE": 7,
		"./internal/isNodeType": 19
	}],
	25: [function(require, module, exports) {
		"use strict";
		var isNodeType = require("./internal/isNodeType");
		var ELEMENT_NODE = require("./ELEMENT_NODE");
		module.exports = function isElement(obj) {
			return isNodeType(obj, ELEMENT_NODE)
		}
	}, {
		"./ELEMENT_NODE": 8,
		"./internal/isNodeType": 19
	}],
	26: [function(require, module, exports) {
		"use strict";
		module.exports = function isNode(obj) {
			return !!(obj && obj.nodeType)
		}
	}, {}],
	27: [function(require, module, exports) {
		"use strict";
		var nodeListToStringPattern = /^\[object (HTMLCollection|NodeList|Object)\]$/;
		module.exports = function isNodeList(obj) {
			if (!obj) {
				return false
			}
			if (typeof obj.length !== "number") {
				return false
			}
			if (typeof obj[0] === "object" && (!obj[0] || !obj[0].nodeType)) {
				return false
			}
			return nodeListToStringPattern.test(Object.prototype.toString.call(obj))
		}
	}, {}],
	28: [function(require, module, exports) {
		"use strict";
		var isNodeType = require("./internal/isNodeType");
		var TEXT_NODE = require("./TEXT_NODE");
		module.exports = function isTextNode(obj) {
			return isNodeType(obj, TEXT_NODE)
		}
	}, {
		"./TEXT_NODE": 9,
		"./internal/isNodeType": 19
	}],
	29: [function(require, module, exports) {
		"use strict";
		var validate = require("./internal/validate");
		module.exports = function remove(node) {
			validate.childNode(node, true, "remove");
			if (!node.parentNode) {
				return node
			}
			return node.parentNode.removeChild(node)
		}
	}, {
		"./internal/validate": 20
	}],
	30: [function(require, module, exports) {
		"use strict";
		var validate = require("./internal/validate");
		module.exports = function replace(newNode, oldNode) {
			validate.insertNode(newNode, true, "insertFirstChild", "newNode");
			validate.childNode(oldNode, true, "insertFirstChild", "oldNode");
			validate.hasParentNode(oldNode, "insertFirstChild", "oldNode");
			return oldNode.parentNode.replaceChild(newNode, oldNode)
		}
	}, {
		"./internal/validate": 20
	}],
	31: [function(require, module, exports) {
		"use strict";
		var isElement = require("@marcom/ac-dom-nodes/isElement");
		var matchesSelector = require("./matchesSelector");
		var validate = require("./internal/validate");
		module.exports = function ancestor(node, selector, inclusive, context) {
			validate.childNode(node, true, "ancestors");
			validate.selector(selector, false, "ancestors");
			if (inclusive && isElement(node) && (!selector || matchesSelector(node, selector))) {
				return node
			}
			context = context || document.body;
			if (node !== context) {
				while ((node = node.parentNode) && isElement(node)) {
					if (!selector || matchesSelector(node, selector)) {
						return node
					}
					if (node === context) {
						break
					}
				}
			}
			return null
		}
	}, {
		"./internal/validate": 33,
		"./matchesSelector": 34,
		"@marcom/ac-dom-nodes/isElement": 25
	}],
	32: [function(require, module, exports) {
		"use strict";
		module.exports = window.Element ? function(proto) {
			return proto.matches || proto.matchesSelector || proto.webkitMatchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector
		}(Element.prototype) : null
	}, {}],
	33: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Array/prototype.indexOf");
		var isNode = require("@marcom/ac-dom-nodes/isNode");
		var COMMENT_NODE = require("@marcom/ac-dom-nodes/COMMENT_NODE");
		var DOCUMENT_FRAGMENT_NODE = require("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");
		var DOCUMENT_NODE = require("@marcom/ac-dom-nodes/DOCUMENT_NODE");
		var ELEMENT_NODE = require("@marcom/ac-dom-nodes/ELEMENT_NODE");
		var TEXT_NODE = require("@marcom/ac-dom-nodes/TEXT_NODE");
		var isNodeType = function(node, nodeType) {
			if (!isNode(node)) {
				return false
			}
			if (typeof nodeType === "number") {
				return node.nodeType === nodeType
			}
			return nodeType.indexOf(node.nodeType) !== -1
		};
		var VALID_PARENT_NODE = [ELEMENT_NODE, DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE];
		var ERR_INVALID_PARENT_NODE = " must be an Element, Document, or Document Fragment";
		var VALID_CHILD_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE];
		var ERR_INVALID_CHILD_NODE = " must be an Element, TextNode, or Comment";
		var ERR_INVALID_SELECTOR = " must be a string";
		module.exports = {
			parentNode: function(node, required, funcName, paramName) {
				paramName = paramName || "node";
				if ((node || required) && !isNodeType(node, VALID_PARENT_NODE)) {
					throw new TypeError(funcName + ": " + paramName + ERR_INVALID_PARENT_NODE)
				}
			},
			childNode: function(node, required, funcName, paramName) {
				paramName = paramName || "node";
				if (!node && !required) {
					return
				}
				if (!isNodeType(node, VALID_CHILD_NODE)) {
					throw new TypeError(funcName + ": " + paramName + ERR_INVALID_CHILD_NODE)
				}
			},
			selector: function(selector, required, funcName, paramName) {
				paramName = paramName || "selector";
				if ((selector || required) && typeof selector !== "string") {
					throw new TypeError(funcName + ": " + paramName + ERR_INVALID_SELECTOR)
				}
			}
		}
	}, {
		"@marcom/ac-dom-nodes/COMMENT_NODE": 4,
		"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 5,
		"@marcom/ac-dom-nodes/DOCUMENT_NODE": 6,
		"@marcom/ac-dom-nodes/ELEMENT_NODE": 8,
		"@marcom/ac-dom-nodes/TEXT_NODE": 9,
		"@marcom/ac-dom-nodes/isNode": 26,
		"@marcom/ac-polyfills/Array/prototype.indexOf": 104
	}],
	34: [function(require, module, exports) {
		"use strict";
		var isElement = require("@marcom/ac-dom-nodes/isElement");
		var validate = require("./internal/validate");
		var nativeMatches = require("./internal/nativeMatches");
		var matchesSelectorShim = require("./shims/matchesSelector");
		module.exports = function matchesSelector(node, selector) {
			validate.selector(selector, true, "matchesSelector");
			if (!isElement(node)) {
				return false
			}
			if (!nativeMatches) {
				return matchesSelectorShim(node, selector)
			}
			return nativeMatches.call(node, selector)
		}
	}, {
		"./internal/nativeMatches": 32,
		"./internal/validate": 33,
		"./shims/matchesSelector": 36,
		"@marcom/ac-dom-nodes/isElement": 25
	}],
	35: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Array/prototype.slice");
		var validate = require("./internal/validate");
		var querySelectorAllShim = require("./shims/querySelectorAll");
		var querySelectorAllAvailable = "querySelectorAll" in document;
		module.exports = function querySelectorAll(selector, context) {
			context = context || document;
			validate.parentNode(context, true, "querySelectorAll", "context");
			validate.selector(selector, true, "querySelectorAll");
			if (!querySelectorAllAvailable) {
				return querySelectorAllShim(selector, context)
			}
			return Array.prototype.slice.call(context.querySelectorAll(selector))
		}
	}, {
		"./internal/validate": 33,
		"./shims/querySelectorAll": 37,
		"@marcom/ac-polyfills/Array/prototype.slice": 105
	}],
	36: [function(require, module, exports) {
		"use strict";
		var querySelectorAll = require("../querySelectorAll");
		module.exports = function matchesSelector(node, selector) {
			var context = node.parentNode || document;
			var nodes = querySelectorAll(selector, context);
			var i;
			for (i = 0; i < nodes.length; i++) {
				if (nodes[i] === node) {
					return true
				}
			}
			return false
		}
	}, {
		"../querySelectorAll": 35
	}],
	37: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Array/prototype.indexOf");
		var isElement = require("@marcom/ac-dom-nodes/isElement");
		var isDocumentFragment = require("@marcom/ac-dom-nodes/isDocumentFragment");
		var removeElement = require("@marcom/ac-dom-nodes/remove");
		var COLLECTION_PREFIX = "_ac_qsa_";
		var isElementInContext = function(el, context) {
			var parent;
			if (context === document) {
				return true
			}
			parent = el;
			while ((parent = parent.parentNode) && isElement(parent)) {
				if (parent === context) {
					return true
				}
			}
			return false
		};
		var recalcStyles = function(context) {
			if ("recalc" in context) {
				context.recalc(false)
			} else {
				document.recalc(false)
			}
			window.scrollBy(0, 0)
		};
		module.exports = function querySelectorAll(selector, context) {
			var style = document.createElement("style");
			var id = COLLECTION_PREFIX + (Math.random() + "").slice(-6);
			var els = [];
			var el;
			context = context || document;
			document[id] = [];
			if (isDocumentFragment(context)) {
				context.appendChild(style)
			} else {
				document.documentElement.firstChild.appendChild(style)
			}
			style.styleSheet.cssText = "*{display:recalc;}" + selector + '{ac-qsa:expression(document["' + id + '"] && document["' + id + '"].push(this));}';
			recalcStyles(context);
			while (document[id].length) {
				el = document[id].shift();
				el.style.removeAttribute("ac-qsa");
				if (els.indexOf(el) === -1 && isElementInContext(el, context)) {
					els.push(el)
				}
			}
			document[id] = null;
			removeElement(style);
			recalcStyles(context);
			return els
		}
	}, {
		"@marcom/ac-dom-nodes/isDocumentFragment": 23,
		"@marcom/ac-dom-nodes/isElement": 25,
		"@marcom/ac-dom-nodes/remove": 29,
		"@marcom/ac-polyfills/Array/prototype.indexOf": 104
	}],
	38: [function(require, module, exports) {
		"use strict";
		module.exports = function getDimensions(el, rendered) {
			var rect;
			if (rendered) {
				rect = el.getBoundingClientRect();
				return {
					width: rect.width,
					height: rect.height
				}
			}
			return {
				width: el.offsetWidth,
				height: el.offsetHeight
			}
		}
	}, {}],
	39: [function(require, module, exports) {
		"use strict";
		var getDimensions = require("./getDimensions");
		var getScrollX = require("./getScrollX");
		var getScrollY = require("./getScrollY");
		module.exports = function getPagePosition(el, rendered) {
			var rect;
			var scrollX;
			var scrollY;
			var dimensions;
			if (rendered) {
				rect = el.getBoundingClientRect();
				scrollX = getScrollX();
				scrollY = getScrollY();
				return {
					top: rect.top + scrollY,
					right: rect.right + scrollX,
					bottom: rect.bottom + scrollY,
					left: rect.left + scrollX
				}
			}
			dimensions = getDimensions(el, rendered);
			rect = {
				top: el.offsetTop,
				left: el.offsetLeft,
				width: dimensions.width,
				height: dimensions.height
			};
			while (el = el.offsetParent) {
				rect.top += el.offsetTop;
				rect.left += el.offsetLeft
			}
			return {
				top: rect.top,
				right: rect.left + rect.width,
				bottom: rect.top + rect.height,
				left: rect.left
			}
		}
	}, {
		"./getDimensions": 38,
		"./getScrollX": 40,
		"./getScrollY": 41
	}],
	40: [function(require, module, exports) {
		"use strict";
		module.exports = function getScrollX(el) {
			el = el || window;
			if (el === window) {
				return window.scrollX || window.pageXOffset
			}
			return el.scrollLeft
		}
	}, {}],
	41: [function(require, module, exports) {
		"use strict";
		module.exports = function getScrollY(el) {
			el = el || window;
			if (el === window) {
				return window.scrollY || window.pageYOffset
			}
			return el.scrollTop
		}
	}, {}],
	42: [function(require, module, exports) {
		var ElementTracker = require("./ac-element-tracker/ElementTracker");
		var TrackedElement = require("./ac-element-tracker/TrackedElement");
		module.exports = new ElementTracker;
		module.exports.ElementTracker = ElementTracker;
		module.exports.TrackedElement = TrackedElement
	}, {
		"./ac-element-tracker/ElementTracker": 43,
		"./ac-element-tracker/TrackedElement": 44
	}],
	43: [function(require, module, exports) {
		"use strict";
		var ac_dom_nodes = {
			isNodeList: require("@marcom/ac-dom-nodes/isNodeList"),
			isElement: require("@marcom/ac-dom-nodes/isElement")
		};
		var ac_dom_metrics = {
			getDimensions: require("@marcom/ac-dom-metrics/getDimensions"),
			getPagePosition: require("@marcom/ac-dom-metrics/getPagePosition"),
			getScrollY: require("@marcom/ac-dom-metrics/getScrollY")
		};
		var ac_Object = {
			clone: require("@marcom/ac-object/clone"),
			extend: require("@marcom/ac-object/extend")
		};
		var TrackedElement = require("./TrackedElement");
		var defaultOptions = {
			autoStart: false,
			useRenderedPosition: false
		};

		function ElementTracker(elements, options) {
			this.options = ac_Object.clone(defaultOptions);
			this.options = typeof options === "object" ? ac_Object.extend(this.options, options) : this.options;
			this._scrollY = this._getScrollY();
			this._windowHeight = this._getWindowHeight();
			this.tracking = false;
			this.elements = [];
			if (elements && (Array.isArray(elements) || ac_dom_nodes.isNodeList(elements) || ac_dom_nodes.isElement(elements))) {
				this.addElements(elements)
			}
			this.refreshAllElementStates = this.refreshAllElementStates.bind(this);
			this.refreshAllElementMetrics = this.refreshAllElementMetrics.bind(this);
			if (this.options.autoStart) {
				this.start()
			}
		}
		var proto = ElementTracker.prototype;
		proto.destroy = function() {
			var i, len;
			this.stop();
			for (i = 0, len = this.elements.length; i < len; i++) {
				this.elements[i].destroy()
			}
			this.elements = null;
			this.options = null
		};
		proto._registerTrackedElements = function(trackedElements) {
			var objects = [].concat(trackedElements);
			objects.forEach(function(object) {
				if (this._elementInDOM(object.element)) {
					object.offsetTop = object.element.offsetTop;
					this.elements.push(object)
				}
			}, this)
		};
		proto._elementInDOM = function(element) {
			var assertion = false;
			var body = document.getElementsByTagName("body")[0];
			if (ac_dom_nodes.isElement(element) && body.contains(element)) {
				assertion = true
			}
			return assertion
		};
		proto._elementPercentInView = function(trackedElement) {
			return trackedElement.pixelsInView / trackedElement.height
		};
		proto._elementPixelsInView = function(trackedElement) {
			var elementTop = trackedElement.top - this._scrollY;
			var elementBottom = trackedElement.bottom - this._scrollY;
			if (elementTop > this._windowHeight || elementBottom < 0) {
				return 0
			}
			return Math.min(elementBottom, this._windowHeight) - Math.max(elementTop, 0)
		};
		proto._ifInView = function(trackedElement, alreadyInView) {
			if (!alreadyInView) {
				trackedElement.trigger("enterview", trackedElement)
			}
		};
		proto._ifAlreadyInView = function(trackedElement) {
			if (!trackedElement.inView) {
				trackedElement.trigger("exitview", trackedElement)
			}
		};
		proto.addElements = function(collection, useRenderedPosition) {
			if (typeof useRenderedPosition === "undefined") {
				useRenderedPosition = this.options.useRenderedPosition
			}
			collection = ac_dom_nodes.isNodeList(collection) ? Array.prototype.slice.call(collection) : [].concat(collection);
			for (var i = 0, len = collection.length; i < len; i++) {
				this.addElement(collection[i], useRenderedPosition)
			}
		};
		proto.addElement = function(element, useRenderedPosition) {
			var trackedElement = null;
			if (typeof useRenderedPosition === "undefined") {
				useRenderedPosition = this.options.useRenderedPosition
			}
			if (ac_dom_nodes.isElement(element)) {
				trackedElement = new TrackedElement(element, useRenderedPosition);
				this._registerTrackedElements(trackedElement);
				this.refreshElementMetrics(trackedElement);
				this.refreshElementState(trackedElement)
			} else {
				throw new TypeError("ElementTracker: " + element + " is not a valid DOM element")
			}
			return trackedElement
		};
		proto.removeElement = function(element) {
			var indexes = [];
			var filtered;
			this.elements.forEach(function(trackedElement, i) {
				if (trackedElement === element || trackedElement.element === element) {
					indexes.push(i)
				}
			});
			filtered = this.elements.filter(function(element, i) {
				return indexes.indexOf(i) < 0
			});
			this.elements = filtered
		};
		proto.start = function() {
			if (this.tracking === false) {
				this.tracking = true;
				window.addEventListener("resize", this.refreshAllElementMetrics);
				window.addEventListener("orientationchange", this.refreshAllElementMetrics);
				window.addEventListener("scroll", this.refreshAllElementStates);
				this.refreshAllElementMetrics()
			}
		};
		proto.stop = function() {
			if (this.tracking === true) {
				this.tracking = false;
				window.removeEventListener("resize", this.refreshAllElementMetrics);
				window.removeEventListener("orientationchange", this.refreshAllElementMetrics);
				window.removeEventListener("scroll", this.refreshAllElementStates)
			}
		};
		proto.refreshAllElementMetrics = function(currentScrollY, windowHeight) {
			if (typeof currentScrollY !== "number") {
				currentScrollY = this._getScrollY()
			}
			if (typeof windowHeight !== "number") {
				windowHeight = this._getWindowHeight()
			}
			this._scrollY = currentScrollY;
			this._windowHeight = windowHeight;
			this.elements.forEach(this.refreshElementMetrics, this)
		};
		proto.refreshElementMetrics = function(trackedElement) {
			if (!trackedElement.isActive) {
				return trackedElement
			}
			var dimensions = ac_dom_metrics.getDimensions(trackedElement.element, trackedElement.useRenderedPosition);
			var position = ac_dom_metrics.getPagePosition(trackedElement.element, trackedElement.useRenderedPosition);
			trackedElement = ac_Object.extend(trackedElement, dimensions, position);
			return this.refreshElementState(trackedElement)
		};
		proto.refreshAllElementStates = function(currentScrollY) {
			if (typeof currentScrollY !== "number") {
				currentScrollY = this._getScrollY()
			}
			this._scrollY = currentScrollY;
			this.elements.forEach(this.refreshElementState, this)
		};
		proto.refreshElementState = function(trackedElement) {
			if (!trackedElement.isActive) {
				return trackedElement
			}
			var alreadyInView = trackedElement.inView;
			trackedElement.pixelsInView = this._elementPixelsInView(trackedElement);
			trackedElement.percentInView = this._elementPercentInView(trackedElement);
			trackedElement.inView = trackedElement.pixelsInView > 0;
			if (trackedElement.inView) {
				this._ifInView(trackedElement, alreadyInView)
			}
			if (alreadyInView) {
				this._ifAlreadyInView(trackedElement)
			}
			return trackedElement
		};
		proto.pauseElementTracking = function(trackedElement) {
			if (trackedElement) {
				trackedElement.isActive = false
			}
		};
		proto.resumeElementTracking = function(trackedElement) {
			if (trackedElement) {
				trackedElement.isActive = true
			}
		};
		proto._getWindowHeight = function() {
			return window.innerHeight
		};
		proto._getScrollY = function() {
			return ac_dom_metrics.getScrollY()
		};
		module.exports = ElementTracker
	}, {
		"./TrackedElement": 44,
		"@marcom/ac-dom-metrics/getDimensions": 38,
		"@marcom/ac-dom-metrics/getPagePosition": 39,
		"@marcom/ac-dom-metrics/getScrollY": 41,
		"@marcom/ac-dom-nodes/isElement": 25,
		"@marcom/ac-dom-nodes/isNodeList": 27,
		"@marcom/ac-object/clone": 45,
		"@marcom/ac-object/extend": 47
	}],
	44: [function(require, module, exports) {
		"use strict";
		var ac_dom_nodes = {
			isElement: require("@marcom/ac-dom-nodes/isElement")
		};
		var EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro;
		var superclass = EventEmitterMicro.prototype;

		function TrackedElement(element, useRenderedPosition) {
			if (!ac_dom_nodes.isElement(element)) {
				throw new TypeError("TrackedElement: " + element + " is not a valid DOM element")
			}
			EventEmitterMicro.call(this);
			this.element = element;
			this.inView = false;
			this.isActive = true;
			this.percentInView = 0;
			this.pixelsInView = 0;
			this.offsetTop = 0;
			this.top = 0;
			this.right = 0;
			this.bottom = 0;
			this.left = 0;
			this.width = 0;
			this.height = 0;
			this.useRenderedPosition = useRenderedPosition || false
		}
		var proto = TrackedElement.prototype = Object.create(superclass);
		proto.destroy = function() {
			this.element = null;
			superclass.destroy.call(this)
		};
		module.exports = TrackedElement
	}, {
		"@marcom/ac-dom-nodes/isElement": 25,
		"@marcom/ac-event-emitter-micro": 50
	}],
	45: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Array/isArray");
		var extend = require("./extend");
		var hasOwnProp = Object.prototype.hasOwnProperty;
		var deepClone = function(dest, source) {
			var prop;
			for (prop in source) {
				if (hasOwnProp.call(source, prop)) {
					if (source[prop] === null) {
						dest[prop] = null
					} else if (typeof source[prop] === "object") {
						dest[prop] = Array.isArray(source[prop]) ? [] : {};
						deepClone(dest[prop], source[prop])
					} else {
						dest[prop] = source[prop]
					}
				}
			}
			return dest
		};
		module.exports = function clone(object, deep) {
			if (deep) {
				return deepClone({}, object)
			}
			return extend({}, object)
		}
	}, {
		"./extend": 47,
		"@marcom/ac-polyfills/Array/isArray": 101
	}],
	46: [function(require, module, exports) {
		"use strict";
		var extend = require("./extend");
		module.exports = function defaults(defaultsObj, options) {
			if (typeof defaultsObj !== "object") {
				throw new TypeError("defaults: must provide a defaults object")
			}
			options = options || {};
			if (typeof options !== "object") {
				throw new TypeError("defaults: options must be a typeof object")
			}
			return extend({}, defaultsObj, options)
		}
	}, {
		"./extend": 47
	}],
	47: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Array/prototype.forEach");
		var hasOwnProp = Object.prototype.hasOwnProperty;
		module.exports = function extend() {
			var args;
			var dest;
			if (arguments.length < 2) {
				args = [{}, arguments[0]]
			} else {
				args = [].slice.call(arguments)
			}
			dest = args.shift();
			args.forEach(function(source) {
				if (source != null) {
					for (var property in source) {
						if (hasOwnProp.call(source, property)) {
							dest[property] = source[property]
						}
					}
				}
			});
			return dest
		}
	}, {
		"@marcom/ac-polyfills/Array/prototype.forEach": 103
	}],
	48: [function(require, module, exports) {
		var ElementEngagement = require("./ac-element-engagement/ElementEngagement");
		module.exports = new ElementEngagement;
		module.exports.ElementEngagement = ElementEngagement
	}, {
		"./ac-element-engagement/ElementEngagement": 49
	}],
	49: [function(require, module, exports) {
		"use strict";
		var proto;
		var EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro;
		var ac_Object = {
			defaults: require("@marcom/ac-object/defaults"),
			extend: require("@marcom/ac-object/extend")
		};
		var Super = require("@marcom/ac-element-tracker").ElementTracker;
		var trackedElementDefaults = {
			timeToEngage: 500,
			inViewThreshold: .75,
			stopOnEngaged: true
		};
		var extendedTrackedElementProps = {
			thresholdEnterTime: 0,
			thresholdExitTime: 0,
			inThreshold: false,
			engaged: false,
			tracking: true
		};
		var ElementEngagement = function(options) {
			Super.call(this, null, options);
			EventEmitterMicro.call(this);
			this._thresholdEnter = this._thresholdEnter.bind(this);
			this._thresholdExit = this._thresholdExit.bind(this);
			this._enterView = this._enterView.bind(this);
			this._exitView = this._exitView.bind(this)
		};
		proto = ElementEngagement.prototype = Object.create(Super.prototype);
		proto = ac_Object.extend(proto, EventEmitterMicro.prototype);
		proto._decorateTrackedElement = function(trackedElement, options) {
			var extendedDefaults;
			extendedDefaults = ac_Object.defaults(trackedElementDefaults, options || {});
			ac_Object.extend(trackedElement, extendedDefaults);
			ac_Object.extend(trackedElement, extendedTrackedElementProps)
		};
		proto._attachElementListeners = function(trackedElement) {
			trackedElement.on("thresholdenter", this._thresholdEnter, this);
			trackedElement.on("thresholdexit", this._thresholdExit, this);
			trackedElement.on("enterview", this._enterView, this);
			trackedElement.on("exitview", this._exitView, this)
		};
		proto._removeElementListeners = function(trackedElement) {
			trackedElement.off("thresholdenter", this._thresholdEnter);
			trackedElement.off("thresholdexit", this._thresholdExit);
			trackedElement.off("enterview", this._enterView);
			trackedElement.off("exitview", this._exitView)
		};
		proto._attachAllElementListeners = function() {
			this.elements.forEach(function(trackedElement) {
				if (!trackedElement.stopOnEngaged) {
					this._attachElementListeners(trackedElement)
				} else if (!trackedElement.engaged) {
					this._attachElementListeners(trackedElement)
				}
			}, this)
		};
		proto._removeAllElementListeners = function() {
			this.elements.forEach(function(trackedElement) {
				this._removeElementListeners(trackedElement)
			}, this)
		};
		proto._elementInViewPastThreshold = function(trackedElement) {
			var isIt = false;
			if (trackedElement.pixelsInView === this._windowHeight) {
				isIt = true
			} else {
				isIt = trackedElement.percentInView > trackedElement.inViewThreshold
			}
			return isIt
		};
		proto._ifInView = function(trackedElement, alreadyInView) {
			var alreadyInThreshold = trackedElement.inThreshold;
			Super.prototype._ifInView.apply(this, arguments);
			if (!alreadyInThreshold && this._elementInViewPastThreshold(trackedElement)) {
				trackedElement.inThreshold = true;
				trackedElement.trigger("thresholdenter", trackedElement);
				if (typeof trackedElement.timeToEngage === "number" && trackedElement.timeToEngage >= 0) {
					trackedElement.engagedTimeout = window.setTimeout(this._engaged.bind(this, trackedElement), trackedElement.timeToEngage)
				}
			}
		};
		proto._ifAlreadyInView = function(trackedElement) {
			var alreadyInThreshold = trackedElement.inThreshold;
			Super.prototype._ifAlreadyInView.apply(this, arguments);
			if (alreadyInThreshold && !this._elementInViewPastThreshold(trackedElement)) {
				trackedElement.inThreshold = false;
				trackedElement.trigger("thresholdexit", trackedElement);
				if (trackedElement.engagedTimeout) {
					window.clearTimeout(trackedElement.engagedTimeout);
					trackedElement.engagedTimeout = null
				}
			}
		};
		proto._engaged = function(trackedElement) {
			trackedElement.engagedTimeout = null;
			this._elementEngaged(trackedElement);
			trackedElement.trigger("engaged", trackedElement);
			this.trigger("engaged", trackedElement)
		};
		proto._thresholdEnter = function(trackedElement) {
			trackedElement.thresholdEnterTime = Date.now();
			trackedElement.thresholdExitTime = 0;
			this.trigger("thresholdenter", trackedElement)
		};
		proto._thresholdExit = function(trackedElement) {
			trackedElement.thresholdExitTime = Date.now();
			this.trigger("thresholdexit", trackedElement)
		};
		proto._enterView = function(trackedElement) {
			this.trigger("enterview", trackedElement)
		};
		proto._exitView = function(trackedElement) {
			this.trigger("exitview", trackedElement)
		};
		proto._elementEngaged = function(trackedElement) {
			trackedElement.engaged = true;
			if (trackedElement.stopOnEngaged) {
				this.stop(trackedElement)
			}
		};
		proto.stop = function(trackedElement) {
			if (this.tracking && !trackedElement) {
				this._removeAllElementListeners();
				Super.prototype.stop.call(this)
			}
			if (trackedElement && trackedElement.tracking) {
				trackedElement.tracking = false;
				this._removeElementListeners(trackedElement);
				this.removeElement(trackedElement)
			}
		};
		proto.start = function(trackedElement) {
			if (!trackedElement) {
				this._attachAllElementListeners()
			}
			if (trackedElement && !trackedElement.tracking) {
				if (!trackedElement.stopOnEngaged) {
					trackedElement.tracking = true;
					this._attachElementListeners(trackedElement)
				} else if (!trackedElement.engaged) {
					trackedElement.tracking = true;
					this._attachElementListeners(trackedElement)
				}
			}
			if (!this.tracking) {
				Super.prototype.start.call(this)
			} else {
				this.refreshAllElementMetrics();
				this.refreshAllElementStates()
			}
		};
		proto.addElement = function(element, options) {
			options = options || {};
			var trackedElement = Super.prototype.addElement.call(this, element, options.useRenderedPosition);
			this._decorateTrackedElement(trackedElement, options);
			return trackedElement
		};
		proto.addElements = function(collection, options) {
			[].forEach.call(collection, function(element) {
				this.addElement(element, options)
			}, this)
		};
		module.exports = ElementEngagement
	}, {
		"@marcom/ac-element-tracker": 42,
		"@marcom/ac-event-emitter-micro": 50,
		"@marcom/ac-object/defaults": 46,
		"@marcom/ac-object/extend": 47
	}],
	50: [function(require, module, exports) {
		"use strict";
		module.exports = {
			EventEmitterMicro: require("./ac-event-emitter-micro/EventEmitterMicro")
		}
	}, {
		"./ac-event-emitter-micro/EventEmitterMicro": 51
	}],
	51: [function(require, module, exports) {
		"use strict";

		function EventEmitterMicro() {
			this._events = {}
		}
		var proto = EventEmitterMicro.prototype;
		proto.on = function(eventName, callback) {
			this._events[eventName] = this._events[eventName] || [];
			this._events[eventName].unshift(callback)
		};
		proto.once = function(eventName, callback) {
			var that = this;

			function fn(data) {
				that.off(eventName, fn);
				if (data !== undefined) callback(data);
				else callback()
			}
			this.on(eventName, fn)
		};
		proto.off = function(eventName, callback) {
			if (!this.has(eventName)) return;
			if (arguments.length === 1) {
				this._events[eventName] = null;
				delete this._events[eventName];
				return
			}
			var index = this._events[eventName].indexOf(callback);
			if (index === -1) return;
			this._events[eventName].splice(index, 1)
		};
		proto.trigger = function(eventName, data) {
			if (!this.has(eventName)) return;
			for (var i = this._events[eventName].length - 1; i >= 0; i--) {
				if (data !== undefined) this._events[eventName][i](data);
				else this._events[eventName][i]()
			}
		};
		proto.has = function(eventName) {
			if (eventName in this._events === false || this._events[eventName].length === 0) {
				return false
			}
			return true
		};
		proto.destroy = function() {
			for (var eventName in this._events) {
				this._events[eventName] = null
			}
			this._events = null
		};
		module.exports = EventEmitterMicro
	}, {}],
	52: [function(require, module, exports) {
		"use strict";
		var defaultHashFunction = function() {
			var key = "";
			var i;
			for (i = 0; i < arguments.length; i++) {
				if (i > 0) {
					key += ","
				}
				key += arguments[i]
			}
			return key
		};
		module.exports = function memoize(func, hashFunction) {
			hashFunction = hashFunction || defaultHashFunction;
			var memoized = function() {
				var args = arguments;
				var key = hashFunction.apply(this, args);
				if (!(key in memoized.cache)) {
					memoized.cache[key] = func.apply(this, args)
				}
				return memoized.cache[key]
			};
			memoized.cache = {};
			return memoized
		}
	}, {}],
	53: [function(require, module, exports) {
		"use strict";
		module.exports = function once(func) {
			var result;
			return function() {
				if (typeof result === "undefined") {
					result = func.apply(this, arguments)
				}
				return result
			}
		}
	}, {}],
	54: [function(require, module, exports) {
		"use strict";
		var eventTypeAvailable = require("./utils/eventTypeAvailable");
		var camelCasedEventTypes = require("./shared/camelCasedEventTypes");
		var windowFallbackEventTypes = require("./shared/windowFallbackEventTypes");
		var prefixHelper = require("./shared/prefixHelper");
		var cache = {};
		module.exports = function getEventType(type, tagName) {
			var prefixedType;
			var tagNameCache;
			var i;
			tagName = tagName || "div";
			type = type.toLowerCase();
			if (!(tagName in cache)) {
				cache[tagName] = {}
			}
			tagNameCache = cache[tagName];
			if (type in tagNameCache) {
				return tagNameCache[type]
			}
			if (eventTypeAvailable(type, tagName)) {
				return tagNameCache[type] = type
			}
			if (type in camelCasedEventTypes) {
				for (i = 0; i < camelCasedEventTypes[type].length; i++) {
					prefixedType = camelCasedEventTypes[type][i];
					if (eventTypeAvailable(prefixedType.toLowerCase(), tagName)) {
						return tagNameCache[type] = prefixedType
					}
				}
			}
			for (i = 0; i < prefixHelper.evt.length; i++) {
				prefixedType = prefixHelper.evt[i] + type;
				if (eventTypeAvailable(prefixedType, tagName)) {
					prefixHelper.reduce(i);
					return tagNameCache[type] = prefixedType
				}
			}
			if (tagName !== "window" && windowFallbackEventTypes.indexOf(type)) {
				return tagNameCache[type] = getEventType(type, "window")
			}
			return tagNameCache[type] = false
		}
	}, {
		"./shared/camelCasedEventTypes": 57,
		"./shared/prefixHelper": 59,
		"./shared/windowFallbackEventTypes": 62,
		"./utils/eventTypeAvailable": 63
	}],
	55: [function(require, module, exports) {
		"use strict";
		var cache = require("./shared/stylePropertyCache");
		var getStyleTestElement = require("./shared/getStyleTestElement");
		var toCSS = require("./utils/toCSS");
		var toDOM = require("./utils/toDOM");
		var prefixHelper = require("./shared/prefixHelper");
		var memoizeStyleProperty = function(property, prefixed) {
			var cssProperty = toCSS(property);
			var cssPrefixed = prefixed === false ? false : toCSS(prefixed);
			cache[property] = cache[prefixed] = cache[cssProperty] = cache[cssPrefixed] = {
				dom: prefixed,
				css: cssPrefixed
			};
			return prefixed
		};
		module.exports = function getStyleProperty(property) {
			var properties;
			var ucProperty;
			var el;
			var i;
			property += "";
			if (property in cache) {
				return cache[property].dom
			}
			el = getStyleTestElement();
			property = toDOM(property);
			ucProperty = property.charAt(0).toUpperCase() + property.substring(1);
			if (property === "filter") {
				properties = ["WebkitFilter", "filter"]
			} else {
				properties = (property + " " + prefixHelper.dom.join(ucProperty + " ") + ucProperty).split(" ")
			}
			for (i = 0; i < properties.length; i++) {
				if (typeof el.style[properties[i]] !== "undefined") {
					if (i !== 0) {
						prefixHelper.reduce(i - 1)
					}
					return memoizeStyleProperty(property, properties[i])
				}
			}
			return memoizeStyleProperty(property, false)
		}
	}, {
		"./shared/getStyleTestElement": 58,
		"./shared/prefixHelper": 59,
		"./shared/stylePropertyCache": 60,
		"./utils/toCSS": 64,
		"./utils/toDOM": 65
	}],
	56: [function(require, module, exports) {
		"use strict";
		var getStyleProperty = require("./getStyleProperty");
		var styleValueAvailable = require("./shared/styleValueAvailable");
		var prefixHelper = require("./shared/prefixHelper");
		var stylePropertyCache = require("./shared/stylePropertyCache");
		var styleValueCache = {};
		var RE_CSS_FUNCTION_PARAMS = /(\([^\)]+\))/gi;
		var RE_CSS_VALUES = /([^ ,;\(]+(\([^\)]+\))?)/gi;
		module.exports = function getStyleValue(property, value) {
			var cssProperty;
			value += "";
			property = getStyleProperty(property);
			if (!property) {
				return false
			}
			if (styleValueAvailable(property, value)) {
				return value
			}
			cssProperty = stylePropertyCache[property].css;
			value = value.replace(RE_CSS_VALUES, function(match) {
				var values;
				var valueKey;
				var key;
				var i;
				if (match[0] === "#" || !isNaN(match[0])) {
					return match
				}
				valueKey = match.replace(RE_CSS_FUNCTION_PARAMS, "");
				key = cssProperty + ":" + valueKey;
				if (key in styleValueCache) {
					if (styleValueCache[key] === false) {
						return ""
					}
					return match.replace(valueKey, styleValueCache[key])
				}
				values = prefixHelper.css.map(function(prefix) {
					return prefix + match
				});
				values = [match].concat(values);
				for (i = 0; i < values.length; i++) {
					if (styleValueAvailable(property, values[i])) {
						if (i !== 0) {
							prefixHelper.reduce(i - 1)
						}
						styleValueCache[key] = values[i].replace(RE_CSS_FUNCTION_PARAMS, "");
						return values[i]
					}
				}
				styleValueCache[key] = false;
				return ""
			});
			value = value.trim();
			return value === "" ? false : value
		}
	}, {
		"./getStyleProperty": 55,
		"./shared/prefixHelper": 59,
		"./shared/stylePropertyCache": 60,
		"./shared/styleValueAvailable": 61
	}],
	57: [function(require, module, exports) {
		"use strict";
		module.exports = {
			transitionend: ["webkitTransitionEnd", "MSTransitionEnd"],
			animationstart: ["webkitAnimationStart", "MSAnimationStart"],
			animationend: ["webkitAnimationEnd", "MSAnimationEnd"],
			animationiteration: ["webkitAnimationIteration", "MSAnimationIteration"],
			fullscreenchange: ["MSFullscreenChange"],
			fullscreenerror: ["MSFullscreenError"]
		}
	}, {}],
	58: [function(require, module, exports) {
		"use strict";
		var el;
		module.exports = function getStyleTestElement() {
			if (!el) {
				el = document.createElement("_")
			} else {
				el.style.cssText = "";
				el.removeAttribute("style")
			}
			return el
		};
		module.exports.resetElement = function() {
			el = null
		}
	}, {}],
	59: [function(require, module, exports) {
		"use strict";
		var CSS_PREFIXES = ["-webkit-", "-moz-", "-ms-"];
		var DOM_PREFIXES = ["Webkit", "Moz", "ms"];
		var EVT_PREFIXES = ["webkit", "moz", "ms"];
		var PrefixeHelper = function() {
			this.initialize()
		};
		var proto = PrefixeHelper.prototype;
		proto.initialize = function() {
			this.reduced = false;
			this.css = CSS_PREFIXES;
			this.dom = DOM_PREFIXES;
			this.evt = EVT_PREFIXES
		};
		proto.reduce = function(index) {
			if (!this.reduced) {
				this.reduced = true;
				this.css = [this.css[index]];
				this.dom = [this.dom[index]];
				this.evt = [this.evt[index]]
			}
		};
		module.exports = new PrefixeHelper
	}, {}],
	60: [function(require, module, exports) {
		"use strict";
		module.exports = {}
	}, {}],
	61: [function(require, module, exports) {
		"use strict";
		var cache = require("./stylePropertyCache");
		var getStyleTestElement = require("./getStyleTestElement");
		var flagsSet = false;
		var supportsAvailable;
		var invalidStyleThrowsError;
		var prepareFlags = function() {
			var el;
			if (!flagsSet) {
				flagsSet = true;
				supportsAvailable = "CSS" in window && "supports" in window.CSS;
				invalidStyleThrowsError = false;
				el = getStyleTestElement();
				try {
					el.style.width = "invalid"
				} catch (e) {
					invalidStyleThrowsError = true
				}
			}
		};
		module.exports = function styleValueAvailable(property, value) {
			var before;
			var el;
			prepareFlags();
			if (supportsAvailable) {
				property = cache[property].css;
				return CSS.supports(property, value)
			}
			el = getStyleTestElement();
			before = el.style[property];
			if (invalidStyleThrowsError) {
				try {
					el.style[property] = value
				} catch (e) {
					return false
				}
			} else {
				el.style[property] = value
			}
			return el.style[property] && el.style[property] !== before
		};
		module.exports.resetFlags = function() {
			flagsSet = false
		}
	}, {
		"./getStyleTestElement": 58,
		"./stylePropertyCache": 60
	}],
	62: [function(require, module, exports) {
		"use strict";
		module.exports = ["transitionend", "animationstart", "animationend", "animationiteration"]
	}, {}],
	63: [function(require, module, exports) {
		"use strict";
		var testElements = {
			window: window,
			document: document
		};
		module.exports = function eventTypeAvailable(type, tagName) {
			var el;
			type = "on" + type;
			if (!(tagName in testElements)) {
				testElements[tagName] = document.createElement(tagName)
			}
			el = testElements[tagName];
			if (type in el) {
				return true
			}
			if ("setAttribute" in el) {
				el.setAttribute(type, "return;");
				return typeof el[type] === "function"
			}
			return false
		}
	}, {}],
	64: [function(require, module, exports) {
		"use strict";
		var RE_DOM_PREFIXES = /^(webkit|moz|ms)/gi;
		module.exports = function toCSS(str) {
			var i;
			if (str.toLowerCase() === "cssfloat") {
				return "float"
			}
			if (RE_DOM_PREFIXES.test(str)) {
				str = "-" + str
			}
			return str.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase()
		}
	}, {}],
	65: [function(require, module, exports) {
		"use strict";
		var RE_CSS_WORD = /-([a-z])/g;
		module.exports = function toDOM(str) {
			var i;
			if (str.toLowerCase() === "float") {
				return "cssFloat"
			}
			str = str.replace(RE_CSS_WORD, function(str, m1) {
				return m1.toUpperCase()
			});
			if (str.substr(0, 2) === "Ms") {
				str = "ms" + str.substring(2)
			}
			return str
		}
	}, {}],
	66: [function(require, module, exports) {
		"use strict";
		module.exports = {
			canvasAvailable: require("./canvasAvailable"),
			continuousScrollEventsAvailable: require("./continuousScrollEventsAvailable"),
			cookiesAvailable: require("./cookiesAvailable"),
			cssLinearGradientAvailable: require("./cssLinearGradientAvailable"),
			cssPropertyAvailable: require("./cssPropertyAvailable"),
			cssViewportUnitsAvailable: require("./cssViewportUnitsAvailable"),
			elementAttributeAvailable: require("./elementAttributeAvailable"),
			eventTypeAvailable: require("./eventTypeAvailable"),
			isDesktop: require("./isDesktop"),
			isHandheld: require("./isHandheld"),
			isRetina: require("./isRetina"),
			isTablet: require("./isTablet"),
			localStorageAvailable: require("./localStorageAvailable"),
			mediaElementsAvailable: require("./mediaElementsAvailable"),
			mediaQueriesAvailable: require("./mediaQueriesAvailable"),
			prefersReducedMotion: require("./prefersReducedMotion"),
			sessionStorageAvailable: require("./sessionStorageAvailable"),
			svgAvailable: require("./svgAvailable"),
			threeDTransformsAvailable: require("./threeDTransformsAvailable"),
			touchAvailable: require("./touchAvailable"),
			webGLAvailable: require("./webGLAvailable")
		}
	}, {
		"./canvasAvailable": 67,
		"./continuousScrollEventsAvailable": 68,
		"./cookiesAvailable": 69,
		"./cssLinearGradientAvailable": 70,
		"./cssPropertyAvailable": 71,
		"./cssViewportUnitsAvailable": 72,
		"./elementAttributeAvailable": 73,
		"./eventTypeAvailable": 74,
		"./isDesktop": 76,
		"./isHandheld": 77,
		"./isRetina": 78,
		"./isTablet": 79,
		"./localStorageAvailable": 80,
		"./mediaElementsAvailable": 81,
		"./mediaQueriesAvailable": 82,
		"./prefersReducedMotion": 83,
		"./sessionStorageAvailable": 84,
		"./svgAvailable": 85,
		"./threeDTransformsAvailable": 86,
		"./touchAvailable": 87,
		"./webGLAvailable": 88
	}],
	67: [function(require, module, exports) {
		"use strict";
		var globalsHelper = require("./helpers/globals");
		var once = require("@marcom/ac-function/once");
		var canvasAvailable = function() {
			var documentObj = globalsHelper.getDocument();
			var canvas = documentObj.createElement("canvas");
			return !!(typeof canvas.getContext === "function" && canvas.getContext("2d"))
		};
		module.exports = once(canvasAvailable);
		module.exports.original = canvasAvailable
	}, {
		"./helpers/globals": 75,
		"@marcom/ac-function/once": 53
	}],
	68: [function(require, module, exports) {
		"use strict";
		var ac_useragent = require("@marcom/ac-useragent");
		var touchAvailable = require("./touchAvailable").original;
		var once = require("@marcom/ac-function/once");

		function continuousScrollEventsAvailable() {
			return !touchAvailable() || ac_useragent.os.ios && ac_useragent.os.version.major >= 8 || ac_useragent.browser.chrome
		}
		module.exports = once(continuousScrollEventsAvailable);
		module.exports.original = continuousScrollEventsAvailable
	}, {
		"./touchAvailable": 87,
		"@marcom/ac-function/once": 53,
		"@marcom/ac-useragent": 135
	}],
	69: [function(require, module, exports) {
		"use strict";
		var globalsHelper = require("./helpers/globals");
		var once = require("@marcom/ac-function/once");

		function cookiesAvailable() {
			var available = false;
			var documentObj = globalsHelper.getDocument();
			var navigatorObj = globalsHelper.getNavigator();
			try {
				if ("cookie" in documentObj && !!navigatorObj.cookieEnabled) {
					documentObj.cookie = "ac_feature_cookie=1";
					available = documentObj.cookie.indexOf("ac_feature_cookie") !== -1;
					documentObj.cookie = "ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
				}
			} catch (err) {}
			return available
		}
		module.exports = once(cookiesAvailable);
		module.exports.original = cookiesAvailable
	}, {
		"./helpers/globals": 75,
		"@marcom/ac-function/once": 53
	}],
	70: [function(require, module, exports) {
		"use strict";
		var getStyleValue = require("@marcom/ac-prefixer/getStyleValue");
		var once = require("@marcom/ac-function/once");

		function cssLinearGradientAvailable() {
			var values = ["linear-gradient(to bottom right, #9f9, white)", "linear-gradient(top left, #9f9, white)", "gradient(linear, left top, right bottom, from(#9f9), to(white))"];
			return values.some(function(value) {
				return !!getStyleValue("background-image", value)
			})
		}
		module.exports = once(cssLinearGradientAvailable);
		module.exports.original = cssLinearGradientAvailable
	}, {
		"@marcom/ac-function/once": 53,
		"@marcom/ac-prefixer/getStyleValue": 56
	}],
	71: [function(require, module, exports) {
		"use strict";
		var getStyleValue = require("@marcom/ac-prefixer/getStyleValue");
		var getStyleProperty = require("@marcom/ac-prefixer/getStyleProperty");
		var memoize = require("@marcom/ac-function/memoize");

		function cssPropertyAvailable(property, value) {
			if (typeof value !== "undefined") {
				return !!getStyleValue(property, value)
			} else {
				return !!getStyleProperty(property)
			}
		}
		module.exports = memoize(cssPropertyAvailable);
		module.exports.original = cssPropertyAvailable
	}, {
		"@marcom/ac-function/memoize": 52,
		"@marcom/ac-prefixer/getStyleProperty": 55,
		"@marcom/ac-prefixer/getStyleValue": 56
	}],
	72: [function(require, module, exports) {
		"use strict";
		var getStyleValue = require("@marcom/ac-prefixer/getStyleValue");
		var once = require("@marcom/ac-function/once");

		function cssViewportUnitsAvailable() {
			return !!getStyleValue("margin", "1vw 1vh")
		}
		module.exports = once(cssViewportUnitsAvailable);
		module.exports.original = cssViewportUnitsAvailable
	}, {
		"@marcom/ac-function/once": 53,
		"@marcom/ac-prefixer/getStyleValue": 56
	}],
	73: [function(require, module, exports) {
		"use strict";
		var globalsHelper = require("./helpers/globals");
		var memoize = require("@marcom/ac-function/memoize");

		function elementAttributeAvailable(attr, tagName) {
			var documentObj = globalsHelper.getDocument();
			var el;
			tagName = tagName || "div";
			el = documentObj.createElement(tagName);
			return attr in el
		}
		module.exports = memoize(elementAttributeAvailable);
		module.exports.original = elementAttributeAvailable
	}, {
		"./helpers/globals": 75,
		"@marcom/ac-function/memoize": 52
	}],
	74: [function(require, module, exports) {
		"use strict";
		var getEventType = require("@marcom/ac-prefixer/getEventType");
		var memoize = require("@marcom/ac-function/memoize");

		function eventTypeAvailable(type, tagName) {
			return !!getEventType(type, tagName)
		}
		module.exports = memoize(eventTypeAvailable);
		module.exports.original = eventTypeAvailable
	}, {
		"@marcom/ac-function/memoize": 52,
		"@marcom/ac-prefixer/getEventType": 54
	}],
	75: [function(require, module, exports) {
		"use strict";
		module.exports = {
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
	76: [function(require, module, exports) {
		"use strict";
		var touchAvailable = require("./touchAvailable").original;
		var globalsHelper = require("./helpers/globals");
		var once = require("@marcom/ac-function/once");

		function isDesktop() {
			var windowObj = globalsHelper.getWindow();
			return !touchAvailable() && !windowObj.orientation
		}
		module.exports = once(isDesktop);
		module.exports.original = isDesktop
	}, {
		"./helpers/globals": 75,
		"./touchAvailable": 87,
		"@marcom/ac-function/once": 53
	}],
	77: [function(require, module, exports) {
		"use strict";
		var isDesktop = require("./isDesktop").original;
		var isTablet = require("./isTablet").original;
		var once = require("@marcom/ac-function/once");

		function isHandheld() {
			return !isDesktop() && !isTablet()
		}
		module.exports = once(isHandheld);
		module.exports.original = isHandheld
	}, {
		"./isDesktop": 76,
		"./isTablet": 79,
		"@marcom/ac-function/once": 53
	}],
	78: [function(require, module, exports) {
		"use strict";
		var globalsHelper = require("./helpers/globals");
		module.exports = function isRetina() {
			var windowObj = globalsHelper.getWindow();
			return "devicePixelRatio" in windowObj && windowObj.devicePixelRatio >= 1.5
		}
	}, {
		"./helpers/globals": 75
	}],
	79: [function(require, module, exports) {
		"use strict";
		var isDesktop = require("./isDesktop").original;
		var globalsHelper = require("./helpers/globals");
		var once = require("@marcom/ac-function/once");
		var MIN_TABLET_WIDTH = 600;

		function isTablet() {
			var windowObj = globalsHelper.getWindow();
			var width = windowObj.screen.width;
			if (windowObj.orientation && windowObj.screen.height < width) {
				width = windowObj.screen.height
			}
			return !isDesktop() && width >= MIN_TABLET_WIDTH
		}
		module.exports = once(isTablet);
		module.exports.original = isTablet
	}, {
		"./helpers/globals": 75,
		"./isDesktop": 76,
		"@marcom/ac-function/once": 53
	}],
	80: [function(require, module, exports) {
		"use strict";
		var globalsHelper = require("./helpers/globals");
		var once = require("@marcom/ac-function/once");

		function localStorageAvailable() {
			var windowObj = globalsHelper.getWindow();
			var available = false;
			try {
				available = !!(windowObj.localStorage && windowObj.localStorage.non_existent !== null)
			} catch (err) {}
			return available
		}
		module.exports = once(localStorageAvailable);
		module.exports.original = localStorageAvailable
	}, {
		"./helpers/globals": 75,
		"@marcom/ac-function/once": 53
	}],
	81: [function(require, module, exports) {
		"use strict";
		var globalsHelper = require("./helpers/globals");
		var once = require("@marcom/ac-function/once");

		function mediaElementsAvailable() {
			var windowObj = globalsHelper.getWindow();
			return "HTMLMediaElement" in windowObj
		}
		module.exports = once(mediaElementsAvailable);
		module.exports.original = mediaElementsAvailable
	}, {
		"./helpers/globals": 75,
		"@marcom/ac-function/once": 53
	}],
	82: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/matchMedia");
		var globalsHelper = require("./helpers/globals");
		var once = require("@marcom/ac-function/once");

		function mediaQueriesAvailable() {
			var windowObj = globalsHelper.getWindow();
			var mql = windowObj.matchMedia("only all");
			return !!(mql && mql.matches)
		}
		module.exports = once(mediaQueriesAvailable);
		module.exports.original = mediaQueriesAvailable
	}, {
		"./helpers/globals": 75,
		"@marcom/ac-function/once": 53,
		"@marcom/ac-polyfills/matchMedia": 108
	}],
	83: [function(require, module, exports) {
		"use strict";
		var globalsHelper = require("./helpers/globals");

		function prefersReducedMotion() {
			var windowObj = globalsHelper.getWindow();
			var reducedMotion = windowObj.matchMedia("(prefers-reduced-motion)");
			return !!(reducedMotion && reducedMotion.matches)
		}
		module.exports = prefersReducedMotion
	}, {
		"./helpers/globals": 75
	}],
	84: [function(require, module, exports) {
		"use strict";
		var globalsHelper = require("./helpers/globals");
		var once = require("@marcom/ac-function/once");

		function sessionStorageAvailable() {
			var windowObj = globalsHelper.getWindow();
			var available = false;
			try {
				if ("sessionStorage" in windowObj && typeof windowObj.sessionStorage.setItem === "function") {
					windowObj.sessionStorage.setItem("ac_feature", "test");
					available = true;
					windowObj.sessionStorage.removeItem("ac_feature", "test")
				}
			} catch (e) {}
			return available
		}
		module.exports = once(sessionStorageAvailable);
		module.exports.original = sessionStorageAvailable
	}, {
		"./helpers/globals": 75,
		"@marcom/ac-function/once": 53
	}],
	85: [function(require, module, exports) {
		"use strict";
		var globalsHelper = require("./helpers/globals");
		var once = require("@marcom/ac-function/once");

		function svgAvailable() {
			var documentObj = globalsHelper.getDocument();
			return !!documentObj.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
		}
		module.exports = once(svgAvailable);
		module.exports.original = svgAvailable
	}, {
		"./helpers/globals": 75,
		"@marcom/ac-function/once": 53
	}],
	86: [function(require, module, exports) {
		"use strict";
		var getStyleValue = require("@marcom/ac-prefixer/getStyleValue");
		var once = require("@marcom/ac-function/once");

		function threeDTransformsAvailable() {
			return !!(getStyleValue("perspective", "1px") && getStyleValue("transform", "translateZ(0)"))
		}
		module.exports = once(threeDTransformsAvailable);
		module.exports.original = threeDTransformsAvailable
	}, {
		"@marcom/ac-function/once": 53,
		"@marcom/ac-prefixer/getStyleValue": 56
	}],
	87: [function(require, module, exports) {
		"use strict";
		var globalsHelper = require("./helpers/globals");
		var once = require("@marcom/ac-function/once");

		function touchAvailable() {
			var windowObj = globalsHelper.getWindow();
			var documentObj = globalsHelper.getDocument();
			var navigatorObj = globalsHelper.getNavigator();
			return !!("ontouchstart" in windowObj || windowObj.DocumentTouch && documentObj instanceof windowObj.DocumentTouch || navigatorObj.maxTouchPoints > 0 || navigatorObj.msMaxTouchPoints > 0)
		}
		module.exports = once(touchAvailable);
		module.exports.original = touchAvailable
	}, {
		"./helpers/globals": 75,
		"@marcom/ac-function/once": 53
	}],
	88: [function(require, module, exports) {
		"use strict";
		var globalsHelper = require("./helpers/globals");
		var once = require("@marcom/ac-function/once");

		function webGLAvailable() {
			var documentObj = globalsHelper.getDocument();
			var canvas = documentObj.createElement("canvas");
			if (typeof canvas.getContext === "function") {
				return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
			}
			return false
		}
		module.exports = once(webGLAvailable);
		module.exports.original = webGLAvailable
	}, {
		"./helpers/globals": 75,
		"@marcom/ac-function/once": 53
	}],
	89: [function(require, module, exports) {
		"use strict";
		var Promise = require("./promise/promise").Promise;
		var polyfill = require("./promise/polyfill").polyfill;
		exports.Promise = Promise;
		exports.polyfill = polyfill
	}, {
		"./promise/polyfill": 93,
		"./promise/promise": 94
	}],
	90: [function(require, module, exports) {
		"use strict";
		var isArray = require("./utils").isArray;
		var isFunction = require("./utils").isFunction;

		function all(promises) {
			var Promise = this;
			if (!isArray(promises)) {
				throw new TypeError("You must pass an array to all.")
			}
			return new Promise(function(resolve, reject) {
				var results = [],
					remaining = promises.length,
					promise;
				if (remaining === 0) {
					resolve([])
				}

				function resolver(index) {
					return function(value) {
						resolveAll(index, value)
					}
				}

				function resolveAll(index, value) {
					results[index] = value;
					if (--remaining === 0) {
						resolve(results)
					}
				}
				for (var i = 0; i < promises.length; i++) {
					promise = promises[i];
					if (promise && isFunction(promise.then)) {
						promise.then(resolver(i), reject)
					} else {
						resolveAll(i, promise)
					}
				}
			})
		}
		exports.all = all
	}, {
		"./utils": 98
	}],
	91: [function(require, module, exports) {
		(function(process, global) {
			"use strict";
			var browserGlobal = typeof window !== "undefined" ? window : {};
			var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
			var local = typeof global !== "undefined" ? global : this === undefined ? window : this;

			function useNextTick() {
				return function() {
					process.nextTick(flush)
				}
			}

			function useMutationObserver() {
				var iterations = 0;
				var observer = new BrowserMutationObserver(flush);
				var node = document.createTextNode("");
				observer.observe(node, {
					characterData: true
				});
				return function() {
					node.data = iterations = ++iterations % 2
				}
			}

			function useSetTimeout() {
				return function() {
					local.setTimeout(flush, 1)
				}
			}
			var queue = [];

			function flush() {
				for (var i = 0; i < queue.length; i++) {
					var tuple = queue[i];
					var callback = tuple[0],
						arg = tuple[1];
					callback(arg)
				}
				queue = []
			}
			var scheduleFlush;
			if (typeof process !== "undefined" && {}.toString.call(process) === "[object process]") {
				scheduleFlush = useNextTick()
			} else if (BrowserMutationObserver) {
				scheduleFlush = useMutationObserver()
			} else {
				scheduleFlush = useSetTimeout()
			}

			function asap(callback, arg) {
				var length = queue.push([callback, arg]);
				if (length === 1) {
					scheduleFlush()
				}
			}
			exports.asap = asap
		}).call(this, require("FWaASH"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	}, {
		FWaASH: 200
	}],
	92: [function(require, module, exports) {
		"use strict";
		var config = {
			instrument: false
		};

		function configure(name, value) {
			if (arguments.length === 2) {
				config[name] = value
			} else {
				return config[name]
			}
		}
		exports.config = config;
		exports.configure = configure
	}, {}],
	93: [function(require, module, exports) {
		(function(global) {
			"use strict";
			var RSVPPromise = require("./promise").Promise;
			var isFunction = require("./utils").isFunction;

			function polyfill() {
				var local;
				if (typeof global !== "undefined") {
					local = global
				} else if (typeof window !== "undefined" && window.document) {
					local = window
				} else {
					local = self
				}
				var es6PromiseSupport = "Promise" in local && "resolve" in local.Promise && "reject" in local.Promise && "all" in local.Promise && "race" in local.Promise && function() {
					var resolve;
					new local.Promise(function(r) {
						resolve = r
					});
					return isFunction(resolve)
				}();
				if (!es6PromiseSupport) {
					local.Promise = RSVPPromise
				}
			}
			exports.polyfill = polyfill
		}).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	}, {
		"./promise": 94,
		"./utils": 98
	}],
	94: [function(require, module, exports) {
		"use strict";
		var config = require("./config").config;
		var configure = require("./config").configure;
		var objectOrFunction = require("./utils").objectOrFunction;
		var isFunction = require("./utils").isFunction;
		var now = require("./utils").now;
		var all = require("./all").all;
		var race = require("./race").race;
		var staticResolve = require("./resolve").resolve;
		var staticReject = require("./reject").reject;
		var asap = require("./asap").asap;
		var counter = 0;
		config.async = asap;

		function Promise(resolver) {
			if (!isFunction(resolver)) {
				throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
			}
			if (!(this instanceof Promise)) {
				throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
			}
			this._subscribers = [];
			invokeResolver(resolver, this)
		}

		function invokeResolver(resolver, promise) {
			function resolvePromise(value) {
				resolve(promise, value)
			}

			function rejectPromise(reason) {
				reject(promise, reason)
			}
			try {
				resolver(resolvePromise, rejectPromise)
			} catch (e) {
				rejectPromise(e)
			}
		}

		function invokeCallback(settled, promise, callback, detail) {
			var hasCallback = isFunction(callback),
				value, error, succeeded, failed;
			if (hasCallback) {
				try {
					value = callback(detail);
					succeeded = true
				} catch (e) {
					failed = true;
					error = e
				}
			} else {
				value = detail;
				succeeded = true
			}
			if (handleThenable(promise, value)) {
				return
			} else if (hasCallback && succeeded) {
				resolve(promise, value)
			} else if (failed) {
				reject(promise, error)
			} else if (settled === FULFILLED) {
				resolve(promise, value)
			} else if (settled === REJECTED) {
				reject(promise, value)
			}
		}
		var PENDING = void 0;
		var SEALED = 0;
		var FULFILLED = 1;
		var REJECTED = 2;

		function subscribe(parent, child, onFulfillment, onRejection) {
			var subscribers = parent._subscribers;
			var length = subscribers.length;
			subscribers[length] = child;
			subscribers[length + FULFILLED] = onFulfillment;
			subscribers[length + REJECTED] = onRejection
		}

		function publish(promise, settled) {
			var child, callback, subscribers = promise._subscribers,
				detail = promise._detail;
			for (var i = 0; i < subscribers.length; i += 3) {
				child = subscribers[i];
				callback = subscribers[i + settled];
				invokeCallback(settled, child, callback, detail)
			}
			promise._subscribers = null
		}
		Promise.prototype = {
			constructor: Promise,
			_state: undefined,
			_detail: undefined,
			_subscribers: undefined,
			then: function(onFulfillment, onRejection) {
				var promise = this;
				var thenPromise = new this.constructor(function() {});
				if (this._state) {
					var callbacks = arguments;
					config.async(function invokePromiseCallback() {
						invokeCallback(promise._state, thenPromise, callbacks[promise._state - 1], promise._detail)
					})
				} else {
					subscribe(this, thenPromise, onFulfillment, onRejection)
				}
				return thenPromise
			},
			catch: function(onRejection) {
				return this.then(null, onRejection)
			}
		};
		Promise.all = all;
		Promise.race = race;
		Promise.resolve = staticResolve;
		Promise.reject = staticReject;

		function handleThenable(promise, value) {
			var then = null,
				resolved;
			try {
				if (promise === value) {
					throw new TypeError("A promises callback cannot return that same promise.")
				}
				if (objectOrFunction(value)) {
					then = value.then;
					if (isFunction(then)) {
						then.call(value, function(val) {
							if (resolved) {
								return true
							}
							resolved = true;
							if (value !== val) {
								resolve(promise, val)
							} else {
								fulfill(promise, val)
							}
						}, function(val) {
							if (resolved) {
								return true
							}
							resolved = true;
							reject(promise, val)
						});
						return true
					}
				}
			} catch (error) {
				if (resolved) {
					return true
				}
				reject(promise, error);
				return true
			}
			return false
		}

		function resolve(promise, value) {
			if (promise === value) {
				fulfill(promise, value)
			} else if (!handleThenable(promise, value)) {
				fulfill(promise, value)
			}
		}

		function fulfill(promise, value) {
			if (promise._state !== PENDING) {
				return
			}
			promise._state = SEALED;
			promise._detail = value;
			config.async(publishFulfillment, promise)
		}

		function reject(promise, reason) {
			if (promise._state !== PENDING) {
				return
			}
			promise._state = SEALED;
			promise._detail = reason;
			config.async(publishRejection, promise)
		}

		function publishFulfillment(promise) {
			publish(promise, promise._state = FULFILLED)
		}

		function publishRejection(promise) {
			publish(promise, promise._state = REJECTED)
		}
		exports.Promise = Promise
	}, {
		"./all": 90,
		"./asap": 91,
		"./config": 92,
		"./race": 95,
		"./reject": 96,
		"./resolve": 97,
		"./utils": 98
	}],
	95: [function(require, module, exports) {
		"use strict";
		var isArray = require("./utils").isArray;

		function race(promises) {
			var Promise = this;
			if (!isArray(promises)) {
				throw new TypeError("You must pass an array to race.")
			}
			return new Promise(function(resolve, reject) {
				var results = [],
					promise;
				for (var i = 0; i < promises.length; i++) {
					promise = promises[i];
					if (promise && typeof promise.then === "function") {
						promise.then(resolve, reject)
					} else {
						resolve(promise)
					}
				}
			})
		}
		exports.race = race
	}, {
		"./utils": 98
	}],
	96: [function(require, module, exports) {
		"use strict";

		function reject(reason) {
			var Promise = this;
			return new Promise(function(resolve, reject) {
				reject(reason)
			})
		}
		exports.reject = reject
	}, {}],
	97: [function(require, module, exports) {
		"use strict";

		function resolve(value) {
			if (value && typeof value === "object" && value.constructor === this) {
				return value
			}
			var Promise = this;
			return new Promise(function(resolve) {
				resolve(value)
			})
		}
		exports.resolve = resolve
	}, {}],
	98: [function(require, module, exports) {
		"use strict";

		function objectOrFunction(x) {
			return isFunction(x) || typeof x === "object" && x !== null
		}

		function isFunction(x) {
			return typeof x === "function"
		}

		function isArray(x) {
			return Object.prototype.toString.call(x) === "[object Array]"
		}
		var now = Date.now || function() {
			return (new Date).getTime()
		};
		exports.objectOrFunction = objectOrFunction;
		exports.isFunction = isFunction;
		exports.isArray = isArray;
		exports.now = now
	}, {}],
	99: [function(require, module, exports) {
		(function() {
			if (window.matchMedia && window.matchMedia("all").addListener) {
				return false
			}
			var localMatchMedia = window.matchMedia,
				hasMediaQueries = localMatchMedia("only all").matches,
				isListening = false,
				timeoutID = 0,
				queries = [],
				handleChange = function(evt) {
					clearTimeout(timeoutID);
					timeoutID = setTimeout(function() {
						for (var i = 0, il = queries.length; i < il; i++) {
							var mql = queries[i].mql,
								listeners = queries[i].listeners || [],
								matches = localMatchMedia(mql.media).matches;
							if (matches !== mql.matches) {
								mql.matches = matches;
								for (var j = 0, jl = listeners.length; j < jl; j++) {
									listeners[j].call(window, mql)
								}
							}
						}
					}, 30)
				};
			window.matchMedia = function(media) {
				var mql = localMatchMedia(media),
					listeners = [],
					index = 0;
				mql.addListener = function(listener) {
					if (!hasMediaQueries) {
						return
					}
					if (!isListening) {
						isListening = true;
						window.addEventListener("resize", handleChange, true)
					}
					if (index === 0) {
						index = queries.push({
							mql: mql,
							listeners: listeners
						})
					}
					listeners.push(listener)
				};
				mql.removeListener = function(listener) {
					for (var i = 0, il = listeners.length; i < il; i++) {
						if (listeners[i] === listener) {
							listeners.splice(i, 1)
						}
					}
				};
				return mql
			}
		})()
	}, {}],
	100: [function(require, module, exports) {
		window.matchMedia || (window.matchMedia = function() {
			"use strict";
			var styleMedia = window.styleMedia || window.media;
			if (!styleMedia) {
				var style = document.createElement("style"),
					script = document.getElementsByTagName("script")[0],
					info = null;
				style.type = "text/css";
				style.id = "matchmediajs-test";
				if (!script) {
					document.head.appendChild(style)
				} else {
					script.parentNode.insertBefore(style, script)
				}
				info = "getComputedStyle" in window && window.getComputedStyle(style, null) || style.currentStyle;
				styleMedia = {
					matchMedium: function(media) {
						var text = "@media " + media + "{ #matchmediajs-test { width: 1px; } }";
						if (style.styleSheet) {
							style.styleSheet.cssText = text
						} else {
							style.textContent = text
						}
						return info.width === "1px"
					}
				}
			}
			return function(media) {
				return {
					matches: styleMedia.matchMedium(media || "all"),
					media: media || "all"
				}
			}
		}())
	}, {}],
	101: [function(require, module, exports) {
		if (!Array.isArray) {
			Array.isArray = function(arg) {
				return Object.prototype.toString.call(arg) === "[object Array]"
			}
		}
	}, {}],
	102: [function(require, module, exports) {
		if (!Array.prototype.filter) {
			Array.prototype.filter = function filter(callback, thisObj) {
				var arrayObject = Object(this);
				var len = arrayObject.length >>> 0;
				var i;
				var results = [];
				if (typeof callback !== "function") {
					throw new TypeError(callback + " is not a function")
				}
				for (i = 0; i < len; i += 1) {
					if (i in arrayObject && callback.call(thisObj, arrayObject[i], i, arrayObject)) {
						results.push(arrayObject[i])
					}
				}
				return results
			}
		}
	}, {}],
	103: [function(require, module, exports) {
		if (!Array.prototype.forEach) {
			Array.prototype.forEach = function forEach(callback, thisObj) {
				var arrayObject = Object(this);
				var i;
				var currentValue;
				if (typeof callback !== "function") {
					throw new TypeError("No function object passed to forEach.")
				}
				var length = this.length;
				for (i = 0; i < length; i += 1) {
					currentValue = arrayObject[i];
					callback.call(thisObj, currentValue, i, arrayObject)
				}
			}
		}
	}, {}],
	104: [function(require, module, exports) {
		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function indexOf(searchElement, fromIndex) {
				var startIndex = fromIndex || 0;
				var currentIndex = 0;
				if (startIndex < 0) {
					startIndex = this.length + fromIndex - 1;
					if (startIndex < 0) {
						throw "Wrapped past beginning of array while looking up a negative start index."
					}
				}
				for (currentIndex = 0; currentIndex < this.length; currentIndex++) {
					if (this[currentIndex] === searchElement) {
						return currentIndex
					}
				}
				return -1
			}
		}
	}, {}],
	105: [function(require, module, exports) {
		(function() {
			"use strict";
			var _slice = Array.prototype.slice;
			try {
				_slice.call(document.documentElement)
			} catch (e) {
				Array.prototype.slice = function(begin, end) {
					end = typeof end !== "undefined" ? end : this.length;
					if (Object.prototype.toString.call(this) === "[object Array]") {
						return _slice.call(this, begin, end)
					}
					var i, cloned = [],
						size, len = this.length;
					var start = begin || 0;
					start = start >= 0 ? start : len + start;
					var upTo = end ? end : len;
					if (end < 0) {
						upTo = len + end
					}
					size = upTo - start;
					if (size > 0) {
						cloned = new Array(size);
						if (this.charAt) {
							for (i = 0; i < size; i++) {
								cloned[i] = this.charAt(start + i)
							}
						} else {
							for (i = 0; i < size; i++) {
								cloned[i] = this[start + i]
							}
						}
					}
					return cloned
				}
			}
		})()
	}, {}],
	106: [function(require, module, exports) {
		if (typeof Object.assign != "function") {
			Object.assign = function(target) {
				"use strict";
				if (target == null) {
					throw new TypeError("Cannot convert undefined or null to object")
				}
				target = Object(target);
				for (var index = 1; index < arguments.length; index++) {
					var source = arguments[index];
					if (source != null) {
						for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key]
							}
						}
					}
				}
				return target
			}
		}
	}, {}],
	107: [function(require, module, exports) {
		module.exports = require("es6-promise").polyfill()
	}, {
		"es6-promise": 89
	}],
	108: [function(require, module, exports) {
		require("matchmedia-polyfill");
		require("matchmedia-polyfill/matchMedia.addListener")
	}, {
		"matchmedia-polyfill": 100,
		"matchmedia-polyfill/matchMedia.addListener": 99
	}],
	109: [function(require, module, exports) {
		"use strict";
		module.exports = {
			adler32: require("./ac-checksum/adler32")
		}
	}, {
		"./ac-checksum/adler32": 110
	}],
	110: [function(require, module, exports) {
		"use strict";
		module.exports = function adler32(string) {
			var adlerModulo = 65521;
			var checksum16a = 1;
			var checksum16b = 0;
			var unicodeValueForCurrentChar;
			var i;
			for (i = 0; i < string.length; i += 1) {
				unicodeValueForCurrentChar = string.charCodeAt(i);
				checksum16a = (checksum16a + unicodeValueForCurrentChar) % adlerModulo;
				checksum16b = (checksum16b + checksum16a) % adlerModulo
			}
			return checksum16b << 16 | checksum16a
		}
	}, {}],
	111: [function(require, module, exports) {
		"use strict";
		module.exports = {
			log: require("./ac-console/log")
		}
	}, {
		"./ac-console/log": 112
	}],
	112: [function(require, module, exports) {
		"use strict";
		var debugMessagingKey = "f7c9180f-5c45-47b4-8de4-428015f096c0";
		var allowDebugMessaging = !! function() {
			try {
				return window.localStorage.getItem(debugMessagingKey)
			} catch (err) {}
		}();
		module.exports = function log() {
			if (window.console && typeof console.log !== "undefined" && allowDebugMessaging) {
				console.log.apply(console, Array.prototype.slice.call(arguments, 0))
			}
		}
	}, {}],
	113: [function(require, module, exports) {
		"use strict";
		module.exports = function joinSearchParams(obj, questionMark) {
			var sep = "&";
			var str = "";
			if (obj) {
				var keysArr = Object.keys(obj);
				var lastIndex = keysArr.length - 1;
				keysArr.forEach(function(key, index) {
					var value = obj[key];
					key = key.trim();
					value = value && typeof value === "string" ? value.trim() : value;
					value = value === null ? "" : "=" + value;
					var param = key + value + (index === lastIndex ? "" : sep);
					str = str ? str.concat(param) : param
				})
			}
			return str && questionMark !== false ? "?" + str : str
		}
	}, {}],
	114: [function(require, module, exports) {
		"use strict";
		module.exports = {
			clone: require("./clone"),
			create: require("./create"),
			defaults: require("./defaults"),
			extend: require("./extend"),
			getPrototypeOf: require("./getPrototypeOf"),
			isDate: require("./isDate"),
			isEmpty: require("./isEmpty"),
			isRegExp: require("./isRegExp"),
			toQueryParameters: require("./toQueryParameters")
		}
	}, {
		"./clone": 115,
		"./create": 116,
		"./defaults": 117,
		"./extend": 118,
		"./getPrototypeOf": 119,
		"./isDate": 120,
		"./isEmpty": 121,
		"./isRegExp": 122,
		"./toQueryParameters": 123
	}],
	115: [function(require, module, exports) {
		module.exports = require(45)
	}, {
		"./extend": 118,
		"@marcom/ac-polyfills/Array/isArray": 101
	}],
	116: [function(require, module, exports) {
		"use strict";
		var F = function() {};
		module.exports = function create(proto) {
			if (arguments.length > 1) {
				throw new Error("Second argument not supported")
			}
			if (proto === null || typeof proto !== "object") {
				throw new TypeError("Object prototype may only be an Object.")
			}
			if (typeof Object.create === "function") {
				return Object.create(proto)
			} else {
				F.prototype = proto;
				return new F
			}
		}
	}, {}],
	117: [function(require, module, exports) {
		module.exports = require(46)
	}, {
		"./extend": 118
	}],
	118: [function(require, module, exports) {
		module.exports = require(47)
	}, {
		"@marcom/ac-polyfills/Array/prototype.forEach": 103
	}],
	119: [function(require, module, exports) {
		"use strict";
		var hasOwnProp = Object.prototype.hasOwnProperty;
		module.exports = function getPrototypeOf(obj) {
			if (Object.getPrototypeOf) {
				return Object.getPrototypeOf(obj)
			} else {
				if (typeof obj !== "object") {
					throw new Error("Requested prototype of a value that is not an object.")
				} else if (typeof this.__proto__ === "object") {
					return obj.__proto__
				} else {
					var constructor = obj.constructor;
					var oldConstructor;
					if (hasOwnProp.call(obj, "constructor")) {
						oldConstructor = constructor;
						if (!delete obj.constructor) {
							return null
						}
						constructor = obj.constructor;
						obj.constructor = oldConstructor
					}
					return constructor ? constructor.prototype : null
				}
			}
		}
	}, {}],
	120: [function(require, module, exports) {
		"use strict";
		module.exports = function isDate(date) {
			return Object.prototype.toString.call(date) === "[object Date]"
		}
	}, {}],
	121: [function(require, module, exports) {
		"use strict";
		var hasOwnProp = Object.prototype.hasOwnProperty;
		module.exports = function isEmpty(object) {
			var prop;
			if (typeof object !== "object") {
				throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
			}
			for (prop in object) {
				if (hasOwnProp.call(object, prop)) {
					return false
				}
			}
			return true
		}
	}, {}],
	122: [function(require, module, exports) {
		"use strict";
		module.exports = function isRegExp(obj) {
			return window.RegExp ? obj instanceof RegExp : false
		}
	}, {}],
	123: [function(require, module, exports) {
		"use strict";
		var joinSearchParams = require("@marcom/ac-url/joinSearchParams");
		module.exports = function toQueryParameters(object) {
			if (typeof object !== "object") {
				throw new TypeError("toQueryParameters error: argument is not an object")
			}
			return joinSearchParams(object, false)
		}
	}, {
		"@marcom/ac-url/joinSearchParams": 113
	}],
	124: [function(require, module, exports) {
		"use strict";
		var DEFAULT_NAMESPACE = "ac-storage-";
		var Item = require("./ac-storage/Item");
		var Storage = require("./ac-storage/Storage");
		var storageAvailable = require("./ac-storage/Storage/storageAvailable");
		var ac_Storage = new Storage(DEFAULT_NAMESPACE);
		ac_Storage.Item = Item;
		ac_Storage.storageAvailable = storageAvailable;
		module.exports = ac_Storage
	}, {
		"./ac-storage/Item": 125,
		"./ac-storage/Storage": 132,
		"./ac-storage/Storage/storageAvailable": 134
	}],
	125: [function(require, module, exports) {
		"use strict";
		var ac_adler32 = require("@marcom/ac-checksum").adler32;
		var ac_Object = require("@marcom/ac-object");
		var apis = require("./Item/apis");
		var createExpirationDate = require("./Item/createExpirationDate");
		var encoder = require("./Item/encoder");
		var DAY = 1e3 * 60 * 60 * 24;
		var DEFAULT_DAYS_TO_EXPIRE_IN = 30;

		function Item(key) {
			if (!key || typeof key !== "string") {
				throw "ac-storage/Item: Key for Item must be a string"
			}
			this._key = key;
			this._checksum = null;
			this._expirationDate = null;
			this._metadata = null;
			this._value = null;
			this.setExpirationDate(Item.createExpirationDate(DEFAULT_DAYS_TO_EXPIRE_IN))
		}
		Item.prototype = {
			save: function() {
				var api;
				var stateObj;
				var value;
				var options = {};
				api = apis.best(options);
				if (api) {
					if (this.value() === null && typeof api.removeItem === "function") {
						return api.removeItem(this.key())
					} else if (typeof api.setItem === "function") {
						stateObj = this.__state();
						value = encoder.encode(stateObj);
						return api.setItem(this.key(), value, this.expirationDate())
					}
				}
				return false
			},
			load: function() {
				var api;
				var value;
				api = apis.best();
				if (api && typeof api.getItem === "function") {
					value = api.getItem(this.key());
					this.__updateState(encoder.decode(value));
					if (value === null || this.hasExpired()) {
						this.remove();
						return false
					} else {
						return true
					}
				} else {
					return false
				}
			},
			remove: function() {
				var api;
				this.__updateState(null);
				api = apis.best();
				return api.removeItem(this.key())
			},
			hasExpired: function(checksum) {
				if (this.expirationDate() !== false && this.expirationDate() <= Date.now() || !this.__checksumIsValid(checksum)) {
					return true
				}
				return false
			},
			value: function(checksum) {
				if (this.hasExpired(checksum)) {
					this.remove()
				}
				return this._value
			},
			setValue: function(value) {
				this._value = value
			},
			setChecksum: function(checksum) {
				if (checksum === null) {
					this._checksum = checksum
				} else if (typeof checksum === "string" && checksum !== "") {
					this._checksum = ac_adler32(checksum)
				} else {
					throw "ac-storage/Item#setChecksum: Checksum must be null or a string"
				}
			},
			checksum: function() {
				return this._checksum
			},
			setExpirationDate: function(expirationDate) {
				if (expirationDate === null) {
					expirationDate = Item.createExpirationDate(DEFAULT_DAYS_TO_EXPIRE_IN)
				}
				if (expirationDate !== false) {
					if (typeof expirationDate === "string") {
						expirationDate = new Date(expirationDate).getTime()
					}
					if (expirationDate && typeof expirationDate.getTime === "function") {
						expirationDate = expirationDate.getTime()
					}
					if (!expirationDate || isNaN(expirationDate)) {
						throw "ac-storage/Item: Invalid date object provided as expirationDate"
					}
					expirationDate -= expirationDate % DAY;
					if (expirationDate <= Date.now()) {
						expirationDate = false
					}
				}
				this._expirationDate = expirationDate
			},
			expirationDate: function() {
				return this._expirationDate
			},
			__state: function() {
				var stateObj = {};
				stateObj.checksum = this.checksum();
				stateObj.expirationDate = this.expirationDate();
				stateObj.metadata = this.metadata();
				stateObj.value = this.value();
				return stateObj
			},
			__updateState: function(stateObj) {
				var prop;
				var setter;
				if (stateObj === null) {
					stateObj = {
						checksum: null,
						expirationDate: null,
						metadata: null,
						value: null
					}
				}
				for (prop in stateObj) {
					setter = "set" + prop.charAt(0).toUpperCase() + prop.slice(1);
					if (typeof this[setter] === "function") {
						this[setter](stateObj[prop])
					}
				}
			},
			__checksumIsValid: function(checksum) {
				if (checksum) {
					checksum = ac_adler32(checksum);
					if (!this.checksum()) {
						throw "ac-storage/Item: No checksum exists to determine if this Item’s value is valid. Try loading context from persistent storage first."
					} else if (checksum === this.checksum()) {
						return true
					}
					return false
				} else if (this.checksum()) {
					throw "ac-storage/Item: No checksum passed, but checksum exists in Item’s state."
				}
				return true
			},
			setKey: function() {
				throw "ac-storage/Item: Cannot set key /after/ initialization!"
			},
			key: function() {
				return this._key
			},
			metadata: function() {
				return this._metadata
			},
			setMetadata: function(value) {
				this._metadata = value
			}
		};
		Item.createExpirationDate = createExpirationDate;
		module.exports = Item
	}, {
		"./Item/apis": 126,
		"./Item/createExpirationDate": 129,
		"./Item/encoder": 130,
		"@marcom/ac-checksum": 109,
		"@marcom/ac-object": 114
	}],
	126: [function(require, module, exports) {
		"use strict";
		var ac_Log = require("@marcom/ac-console").log;
		var api_localStorage = require("./apis/localStorage");
		var api_userData = require("./apis/userData");
		var apis = {
			_list: [api_localStorage, api_userData],
			list: function() {
				return this._list
			},
			all: function(method) {
				ac_Log("ac-storage/Item/apis.all: Method is deprecated");
				var args = Array.prototype.slice.call(arguments, 1);
				if (typeof method !== "string") {
					throw "ac-storage/Item/apis.all: Method name must be provided as a string"
				}
				var results = this.list().map(function(api) {
					if (api.available()) {
						if (typeof api[method] === "function") {
							return api[method].apply(api, args)
						} else {
							throw "ac-storage/Item/apis.all: Method not available on api"
						}
					}
					return false
				});
				return results
			},
			best: function() {
				var best = null;
				this.list().some(function(api) {
					if (api.available()) {
						best = api;
						return true
					}
				});
				return best
			}
		};
		module.exports = apis
	}, {
		"./apis/localStorage": 127,
		"./apis/userData": 128,
		"@marcom/ac-console": 111
	}],
	127: [function(require, module, exports) {
		"use strict";
		var AC_Environment_Feature = require("@marcom/ac-feature");
		var available;
		try {
			var api = window.localStorage;
			var api_session = window.sessionStorage
		} catch (e) {
			available = false
		}
		var api_localStorage = {
			name: "localStorage",
			available: function() {
				try {
					api.setItem("localStorage", 1);
					api.removeItem("localStorage")
				} catch (e) {
					available = false
				}
				if (available === undefined) {
					available = AC_Environment_Feature.localStorageAvailable()
				}
				return available
			},
			getItem: function(key) {
				return api.getItem(key) || api_session.getItem(key)
			},
			setItem: function(key, value, expirationDate) {
				if (expirationDate === false) {
					api_session.setItem(key, value)
				} else {
					api.setItem(key, value)
				}
				return true
			},
			removeItem: function(key) {
				api.removeItem(key);
				api_session.removeItem(key);
				return true
			}
		};
		module.exports = api_localStorage
	}, {
		"@marcom/ac-feature": 66
	}],
	128: [function(require, module, exports) {
		"use strict";
		var AC_Element = require("@marcom/ac-dom-nodes");
		var DAY = 1e3 * 60 * 60 * 24;
		var storeID = "ac-storage";
		var available;
		var api_userData = {
			name: "userData",
			available: function() {
				if (available === undefined) {
					available = false;
					if (document && document.body) {
						var el = this.element();
						if (AC_Element.isElement(el) && el.addBehavior !== undefined) {
							available = true
						}
						if (available === false) {
							this.removeElement()
						}
					} else {
						throw "ac-storage/Item/apis/userData: DOM must be ready before using #userData."
					}
				}
				return available
			},
			getItem: function(key) {
				var el = this.element();
				el.load(storeID);
				return el.getAttribute(key) || null
			},
			setItem: function(key, value, expirationDate) {
				var el = this.element();
				el.setAttribute(key, value);
				if (expirationDate === false) {
					expirationDate = new Date(Date.now() + DAY)
				}
				if (expirationDate && typeof expirationDate.toUTCString === "function") {
					el.expires = expirationDate.toUTCString()
				}
				el.save(storeID);
				return true
			},
			removeItem: function(key) {
				var el = this.element();
				el.removeAttribute(key);
				el.save(storeID);
				return true
			},
			_element: null,
			element: function() {
				if (this._element === null) {
					this._element = document.createElement("meta");
					this._element.setAttribute("id", "userData");
					this._element.setAttribute("name", "ac-storage");
					this._element.style.behavior = "url('#default#userData')";
					document.getElementsByTagName("head")[0].appendChild(this._element)
				}
				return this._element
			},
			removeElement: function() {
				if (this._element !== null) {
					AC_Element.remove(this._element)
				}
				return this._element
			}
		};
		module.exports = api_userData
	}, {
		"@marcom/ac-dom-nodes": 10
	}],
	129: [function(require, module, exports) {
		"use strict";
		var DAY = 1e3 * 60 * 60 * 24;
		var createExpirationDate = function(days, fromDate) {
			if (typeof days !== "number") {
				throw "ac-storage/Item/createExpirationDate: days parameter must be a number."
			}
			if (fromDate === undefined || typeof fromDate === "number") {
				fromDate = fromDate === undefined ? new Date : new Date(fromDate)
			}
			if (typeof fromDate.toUTCString !== "function" || fromDate.toUTCString() === "Invalid Date") {
				throw "ac-storage/Item/createExpirationDate: fromDate must be a date object, timestamp, or undefined."
			}
			fromDate.setTime(fromDate.getTime() + days * DAY);
			return fromDate.getTime()
		};
		module.exports = createExpirationDate
	}, {}],
	130: [function(require, module, exports) {
		"use strict";
		var compressor = require("./encoder/compressor");
		var encoder = {
			encode: function(stateObj) {
				var stateObjString;
				var compressedStateObj;
				compressedStateObj = compressor.compress(stateObj);
				try {
					stateObjString = JSON.stringify(compressedStateObj)
				} catch (ignore) {}
				if (!this.__isValidStateObjString(stateObjString)) {
					throw "ac-storage/Item/encoder/encode: state object is invalid or cannot be saved as string"
				}
				return stateObjString
			},
			decode: function(stateObjString) {
				var stateObj;
				var decompressedStateObj;
				if (!this.__isValidStateObjString(stateObjString)) {
					if (stateObjString === undefined || stateObjString === null || stateObjString === "") {
						return null
					}
					throw "ac-storage/Item/encoder/decode: state string does not contain a valid state object"
				}
				try {
					stateObj = JSON.parse(stateObjString)
				} catch (ignore) {
					throw "ac-storage/Item/encoder/decode: Item state object could not be decoded"
				}
				decompressedStateObj = compressor.decompress(stateObj);
				return decompressedStateObj
			},
			__isValidStateObjString: function(stateObjString) {
				try {
					if (stateObjString !== undefined && stateObjString.substring(0, 1) === "{") {
						return true
					}
					return false
				} catch (e) {
					return false
				}
			}
		};
		module.exports = encoder
	}, {
		"./encoder/compressor": 131
	}],
	131: [function(require, module, exports) {
		var DAY = 1e3 * 60 * 60 * 24;
		var DATE_KEY = 14975;
		var compressor = {
			mapping: {
				key: "k",
				checksum: "c",
				expirationDate: "e",
				metadata: "m",
				value: "v"
			},
			compress: function(stateObj) {
				var compressedStateObj = {};
				var mapping = compressor.mapping;
				for (var prop in mapping) {
					if (stateObj.hasOwnProperty(prop) && stateObj[prop]) {
						if (prop === "expirationDate") {
							var days = this.millisecondsToOffsetDays(stateObj[prop]);
							compressedStateObj[mapping[prop]] = days
						} else {
							compressedStateObj[mapping[prop]] = stateObj[prop]
						}
					}
				}
				return compressedStateObj
			},
			decompress: function(compressedStateObj) {
				var stateObj = {};
				var mapping = compressor.mapping;
				for (var prop in mapping) {
					if (compressedStateObj.hasOwnProperty(mapping[prop])) {
						if (prop === "expirationDate") {
							var milliseconds = this.offsetDaysToMilliseconds(compressedStateObj[mapping[prop]]);
							stateObj[prop] = milliseconds
						} else {
							stateObj[prop] = compressedStateObj[mapping[prop]]
						}
					}
				}
				return stateObj
			},
			millisecondsToOffsetDays: function(milliseconds) {
				return Math.floor(milliseconds / DAY) - DATE_KEY
			},
			offsetDaysToMilliseconds: function(days) {
				return (days + DATE_KEY) * DAY
			}
		};
		module.exports = compressor
	}, {}],
	132: [function(require, module, exports) {
		"use strict";
		var ac_Object = require("@marcom/ac-object");
		var api_localStorage = require("./Item/apis/localStorage");
		var registry = require("./Storage/registry");
		var defaultOptions = {};

		function Storage(namespace, options) {
			this._namespace = namespace || "";
			this._options = ac_Object.extend(ac_Object.clone(defaultOptions), options || {})
		}
		Storage.prototype = {
			getItem: function(key) {
				var item = this.__item(key);
				item.load();
				return item.value()
			},
			setItem: function(key, value) {
				var item = this.__item(key);
				if (value === undefined) {
					throw "ac-storage/Storage#setItem: Must provide value to set key to. Use #removeItem to remove."
				}
				item.setValue(value);
				return item.save()
			},
			removeItem: function(key) {
				var item = this.__item(key);
				registry.remove(item.key(), true);
				return item.save()
			},
			removeExpired: function() {
				var item;
				var i;
				if (api_localStorage.available()) {
					for (i = 0; i < window.localStorage.length; i++) {
						item = this.__item(window.localStorage.key(i));
						if (item.hasExpired() && JSON.parse(window.localStorage[window.localStorage.key(i)]).v !== "undefined") {
							item.remove()
						}
					}
				} else {
					var storeID = "ac-storage";
					var el = document.getElementById("userData");
					el.load(storeID);
					var attr;
					var doc = el.xmlDocument;
					var attributes = doc.firstChild.attributes;
					var len = attributes.length;
					i = -1;
					while (++i < len) {
						attr = attributes[i];
						item = this.__item(attr.nodeName);
						if (item.hasExpired() && JSON.parse(attr.nodeValue).v !== "undefined") {
							item.remove()
						}
					}
				}
			},
			__item: function(key) {
				if (typeof key !== "string" || key === "") {
					throw "ac-storage/Storage: Key must be a String."
				}
				var item = registry.item(this.namespace() + key);
				return item
			},
			namespace: function() {
				return this._namespace
			},
			setNamespace: function(value) {
				this._namespace = value
			},
			options: function() {
				return this._namespace
			},
			setOptions: function(value) {
				this._namespace = value
			}
		};
		module.exports = Storage
	}, {
		"./Item/apis/localStorage": 127,
		"./Storage/registry": 133,
		"@marcom/ac-object": 114
	}],
	133: [function(require, module, exports) {
		"use strict";
		var Item = require("../Item");
		var items = {};
		var registry = {
			item: function(key) {
				var item = items[key];
				if (!item) {
					item = this.register(key)
				}
				return item
			},
			register: function(key) {
				var item = items[key];
				if (!item) {
					item = new Item(key);
					items[key] = item
				}
				return item
			},
			clear: function(alsoRemoveItemFromStorage) {
				var key;
				for (key in items) {
					this.remove(key, alsoRemoveItemFromStorage)
				}
				return true
			},
			remove: function(key, alsoRemoveItemFromStorage) {
				var item = items[key];
				if (item && !!alsoRemoveItemFromStorage) {
					item.remove()
				}
				items[key] = null;
				return true
			}
		};
		module.exports = registry
	}, {
		"../Item": 125
	}],
	134: [function(require, module, exports) {
		"use strict";
		var apis = require("../Item/apis");
		var available;
		module.exports = function storageAvailable() {
			if (available !== undefined) {
				return available
			}
			available = !!apis.best();
			return available
		}
	}, {
		"../Item/apis": 126
	}],
	135: [function(require, module, exports) {
		"use strict";
		var navigatorObj = {
			ua: window.navigator.userAgent,
			platform: window.navigator.platform,
			vendor: window.navigator.vendor
		};
		module.exports = require("./parseUserAgent")(navigatorObj)
	}, {
		"./parseUserAgent": 138
	}],
	136: [function(require, module, exports) {
		"use strict";
		module.exports = {
			browser: {
				safari: false,
				chrome: false,
				firefox: false,
				ie: false,
				opera: false,
				android: false,
				edge: false,
				version: {
					name: "",
					major: 0,
					minor: 0,
					patch: 0,
					documentMode: false
				}
			},
			os: {
				osx: false,
				ios: false,
				android: false,
				windows: false,
				linux: false,
				fireos: false,
				chromeos: false,
				version: {
					name: "",
					major: 0,
					minor: 0,
					patch: 0
				}
			}
		}
	}, {}],
	137: [function(require, module, exports) {
		"use strict";
		module.exports = {
			browser: [{
				name: "edge",
				userAgent: "Edge",
				version: ["rv", "Edge"],
				test: function(navigatorObj) {
					return navigatorObj.ua.indexOf("Edge") > -1 || navigatorObj.ua === "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
				}
			}, {
				name: "chrome",
				userAgent: "Chrome"
			}, {
				name: "firefox",
				test: function(navigatorObj) {
					return navigatorObj.ua.indexOf("Firefox") > -1 && navigatorObj.ua.indexOf("Opera") === -1
				},
				version: "Firefox"
			}, {
				name: "android",
				userAgent: "Android"
			}, {
				name: "safari",
				test: function(navigatorObj) {
					return navigatorObj.ua.indexOf("Safari") > -1 && navigatorObj.vendor.indexOf("Apple") > -1
				},
				version: "Version"
			}, {
				name: "ie",
				test: function(navigatorObj) {
					return navigatorObj.ua.indexOf("IE") > -1 || navigatorObj.ua.indexOf("Trident") > -1
				},
				version: ["MSIE", "rv"],
				parseDocumentMode: function() {
					var documentModeForIE = false;
					if (document.documentMode) {
						documentModeForIE = parseInt(document.documentMode, 10)
					}
					return documentModeForIE
				}
			}, {
				name: "opera",
				userAgent: "Opera",
				version: ["Version", "Opera"]
			}],
			os: [{
				name: "windows",
				test: function(navigatorObj) {
					return navigatorObj.platform.indexOf("Win") > -1
				},
				version: "Windows NT"
			}, {
				name: "osx",
				userAgent: "Mac",
				test: function(navigatorObj) {
					return navigatorObj.platform.indexOf("Mac") > -1
				}
			}, {
				name: "ios",
				test: function(navigatorObj) {
					return navigatorObj.ua.indexOf("iPhone") > -1 || navigatorObj.ua.indexOf("iPad") > -1
				},
				version: ["iPhone OS", "CPU OS"]
			}, {
				name: "linux",
				userAgent: "Linux",
				test: function(navigatorObj) {
					return navigatorObj.platform.indexOf("Linux") > -1 && navigatorObj.ua.indexOf("Android") === -1
				}
			}, {
				name: "fireos",
				test: function(navigatorObj) {
					return navigatorObj.ua.indexOf("Firefox") > -1 && navigatorObj.ua.indexOf("Mobile") > -1
				},
				version: "rv"
			}, {
				name: "android",
				userAgent: "Android"
			}, {
				name: "chromeos",
				userAgent: "CrOS"
			}]
		}
	}, {}],
	138: [function(require, module, exports) {
		"use strict";
		var defaults = require("./defaults");
		var dictionary = require("./dictionary");

		function _matchVersionStrRegExp(str) {
			return new RegExp(str + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
		}

		function _parseVersion(data, ua) {
			if (typeof data.parseVersion === "function") {
				return data.parseVersion(ua)
			} else {
				var versionSearchStr = data.version || data.userAgent;
				if (typeof versionSearchStr === "string") {
					versionSearchStr = [versionSearchStr]
				}
				var versionSearchStrLength = versionSearchStr.length;
				var match;
				for (var i = 0; i < versionSearchStrLength; i++) {
					match = ua.match(_matchVersionStrRegExp(versionSearchStr[i]));
					if (match && match.length > 1) {
						return match[1].replace(/_/g, ".")
					}
				}
			}
		}

		function _parseUserAgent(dictionaryData, defaultObj, navigatorObj) {
			var dictionaryDataLength = dictionaryData.length;
			var current;
			var currentVersion;
			for (var i = 0; i < dictionaryDataLength; i++) {
				if (typeof dictionaryData[i].test === "function") {
					if (dictionaryData[i].test(navigatorObj) === true) {
						current = dictionaryData[i].name
					}
				} else {
					if (navigatorObj.ua.indexOf(dictionaryData[i].userAgent) > -1) {
						current = dictionaryData[i].name
					}
				}
				if (current) {
					defaultObj[current] = true;
					currentVersion = _parseVersion(dictionaryData[i], navigatorObj.ua);
					if (typeof currentVersion === "string") {
						var versionBreakdown = currentVersion.split(".");
						defaultObj.version.name = currentVersion;
						if (versionBreakdown && versionBreakdown.length > 0) {
							defaultObj.version.major = parseInt(versionBreakdown[0] || 0);
							defaultObj.version.minor = parseInt(versionBreakdown[1] || 0);
							defaultObj.version.patch = parseInt(versionBreakdown[2] || 0)
						}
					} else if (current === "edge") {
						defaultObj.version.name = "12.0.0";
						defaultObj.version.major = "12";
						defaultObj.version.minor = "0";
						defaultObj.version.patch = "0"
					}
					if (typeof dictionaryData[i].parseDocumentMode === "function") {
						defaultObj.version.documentMode = dictionaryData[i].parseDocumentMode()
					}
					return defaultObj
				}
			}
			return defaultObj
		}

		function parseUserAgent(navigatorObj) {
			var userAgent = {};
			userAgent.browser = _parseUserAgent(dictionary.browser, defaults.browser, navigatorObj);
			userAgent.os = _parseUserAgent(dictionary.os, defaults.os, navigatorObj);
			return userAgent
		}
		module.exports = parseUserAgent
	}, {
		"./defaults": 136,
		"./dictionary": 137
	}],
	139: [function(require, module, exports) {
		if (typeof Object.assign != "function") {
			Object.assign = function(target) {
				"use strict";
				if (target == null) {
					throw new TypeError("Cannot convert undefined or null to object")
				}
				target = Object(target);
				for (var index = 1; index < arguments.length; index++) {
					var source = arguments[index];
					if (source != null) {
						for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key]
							}
						}
					}
				}
				return target
			}
		}
	}, {}],
	140: [function(require, module, exports) {
		module.exports = require(4)
	}, {}],
	141: [function(require, module, exports) {
		module.exports = require(5)
	}, {}],
	142: [function(require, module, exports) {
		module.exports = require(6)
	}, {}],
	143: [function(require, module, exports) {
		module.exports = require(8)
	}, {}],
	144: [function(require, module, exports) {
		module.exports = require(9)
	}, {}],
	145: [function(require, module, exports) {
		module.exports = require(19)
	}, {
		"../isNode": 149
	}],
	146: [function(require, module, exports) {
		module.exports = require(20)
	}, {
		"../COMMENT_NODE": 140,
		"../DOCUMENT_FRAGMENT_NODE": 141,
		"../ELEMENT_NODE": 143,
		"../TEXT_NODE": 144,
		"./isNodeType": 145
	}],
	147: [function(require, module, exports) {
		module.exports = require(23)
	}, {
		"./DOCUMENT_FRAGMENT_NODE": 141,
		"./internal/isNodeType": 145
	}],
	148: [function(require, module, exports) {
		module.exports = require(25)
	}, {
		"./ELEMENT_NODE": 143,
		"./internal/isNodeType": 145
	}],
	149: [function(require, module, exports) {
		module.exports = require(26)
	}, {}],
	150: [function(require, module, exports) {
		module.exports = require(29)
	}, {
		"./internal/validate": 146
	}],
	151: [function(require, module, exports) {
		arguments[4][31][0].apply(exports, arguments)
	}, {
		"./internal/validate": 153,
		"./matchesSelector": 155,
		"@marcom/ac-dom-nodes/isElement": 148
	}],
	152: [function(require, module, exports) {
		module.exports = require(32)
	}, {}],
	153: [function(require, module, exports) {
		arguments[4][33][0].apply(exports, arguments)
	}, {
		"@marcom/ac-dom-nodes/COMMENT_NODE": 140,
		"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 141,
		"@marcom/ac-dom-nodes/DOCUMENT_NODE": 142,
		"@marcom/ac-dom-nodes/ELEMENT_NODE": 143,
		"@marcom/ac-dom-nodes/TEXT_NODE": 144,
		"@marcom/ac-dom-nodes/isNode": 149,
		"@marcom/ac-polyfills/Array/prototype.indexOf": 159
	}],
	154: [function(require, module, exports) {
		"use strict";
		module.exports = function isAncestorOf(ancestor, descendent) {
			if (ancestor === descendent) {
				return false
			}
			if ("contains" in ancestor) {
				return ancestor.contains(descendent)
			} else {
				return !!(ancestor.compareDocumentPosition(descendent) & Node.DOCUMENT_POSITION_CONTAINED_BY)
			}
		}
	}, {}],
	155: [function(require, module, exports) {
		arguments[4][34][0].apply(exports, arguments)
	}, {
		"./internal/nativeMatches": 152,
		"./internal/validate": 153,
		"./shims/matchesSelector": 157,
		"@marcom/ac-dom-nodes/isElement": 148
	}],
	156: [function(require, module, exports) {
		arguments[4][35][0].apply(exports, arguments)
	}, {
		"./internal/validate": 153,
		"./shims/querySelectorAll": 158,
		"@marcom/ac-polyfills/Array/prototype.slice": 160
	}],
	157: [function(require, module, exports) {
		arguments[4][36][0].apply(exports, arguments)
	}, {
		"../querySelectorAll": 156
	}],
	158: [function(require, module, exports) {
		arguments[4][37][0].apply(exports, arguments)
	}, {
		"@marcom/ac-dom-nodes/isDocumentFragment": 147,
		"@marcom/ac-dom-nodes/isElement": 148,
		"@marcom/ac-dom-nodes/remove": 150,
		"@marcom/ac-polyfills/Array/prototype.indexOf": 159
	}],
	159: [function(require, module, exports) {
		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function indexOf(searchElement, fromIndex) {
				var startIndex = fromIndex || 0;
				var currentIndex = 0;
				if (startIndex < 0) {
					startIndex = this.length + fromIndex - 1;
					if (startIndex < 0) {
						throw "Wrapped past beginning of array while looking up a negative start index."
					}
				}
				for (currentIndex = 0; currentIndex < this.length; currentIndex++) {
					if (this[currentIndex] === searchElement) {
						return currentIndex
					}
				}
				return -1
			}
		}
	}, {}],
	160: [function(require, module, exports) {
		(function() {
			"use strict";
			var _slice = Array.prototype.slice;
			try {
				_slice.call(document.documentElement)
			} catch (e) {
				Array.prototype.slice = function(begin, end) {
					end = typeof end !== "undefined" ? end : this.length;
					if (Object.prototype.toString.call(this) === "[object Array]") {
						return _slice.call(this, begin, end)
					}
					var i, cloned = [],
						size, len = this.length;
					var start = begin || 0;
					start = start >= 0 ? start : len + start;
					var upTo = end ? end : len;
					if (end < 0) {
						upTo = len + end
					}
					size = upTo - start;
					if (size > 0) {
						cloned = new Array(size);
						if (this.charAt) {
							for (i = 0; i < size; i++) {
								cloned[i] = this.charAt(start + i)
							}
						} else {
							for (i = 0; i < size; i++) {
								cloned[i] = this[start + i]
							}
						}
					}
					return cloned
				}
			}
		})()
	}, {}],
	161: [function(require, module, exports) {
		module.exports = require(135)
	}, {
		"./parseUserAgent": 164
	}],
	162: [function(require, module, exports) {
		module.exports = require(136)
	}, {}],
	163: [function(require, module, exports) {
		module.exports = require(137)
	}, {}],
	164: [function(require, module, exports) {
		module.exports = require(138)
	}, {
		"./defaults": 162,
		"./dictionary": 163
	}],
	165: [function(require, module, exports) {
		"use strict";
		var initialize = require("./appmeasurement-wrapper/initialize");
		var plugins = require("./appmeasurement-wrapper/plugins");
		var ActivityMapCollection = require("./appmeasurement-wrapper/plugins/activitymap/ActivityMapCollection");
		module.exports = {
			init: initialize,
			plugins: plugins,
			ActivityMapCollection: ActivityMapCollection
		}
	}, {
		"./appmeasurement-wrapper/initialize": 169,
		"./appmeasurement-wrapper/plugins": 170,
		"./appmeasurement-wrapper/plugins/activitymap/ActivityMapCollection": 171
	}],
	166: [function(require, module, exports) {
		(function() {
			window.AppMeasurement_Module_ActivityMap = function(f) {
				function g(a, d) {
					var b, c, n;
					if (a && d && (b = e.c[d] || (e.c[d] = d.split(","))))
						for (n = 0; n < b.length && (c = b[n++]);)
							if (-1 < a.indexOf(c)) return null;
					p = 1;
					return a
				}

				function q(a, d, b, c, e) {
					var g, h;
					if (a.dataset && (h = a.dataset[d])) g = h;
					else if (a.getAttribute)
						if (h = a.getAttribute("data-" + b)) g = h;
						else if (h = a.getAttribute(b)) g = h;
					if (!g && f.useForcedLinkTracking && e && (g = "", d = a.onclick ? "" + a.onclick : "")) {
						b = d.indexOf(c);
						var l, k;
						if (0 <= b) {
							for (b += 10; b < d.length && 0 <= "= \t\r\n".indexOf(d.charAt(b));) b++;
							if (b < d.length) {
								h = b;
								for (l = k = 0; h < d.length && (";" != d.charAt(h) || l);) l ? d.charAt(h) != l || k ? k = "\\" == d.charAt(h) ? !k : 0 : l = 0 : (l = d.charAt(h), '"' != l && "'" != l && (l = 0)), h++;
								if (d = d.substring(b, h)) a.e = new Function("s", "var e;try{s.w." + c + "=" + d + "}catch(e){}"), a.e(f)
							}
						}
					}
					return g || e && f.w[c]
				}

				function r(a, d, b) {
					var c;
					return (c = e[d](a, b)) && (p ? (p = 0, c) : g(k(c), e[d + "Exclusions"]))
				}

				function s(a, d, b) {
					var c;
					if (a && !(1 === (c = a.nodeType) && (c = a.nodeName) && (c = c.toUpperCase()) && t[c]) && (1 === a.nodeType && (c = a.nodeValue) && (d[d.length] = c), b.a || b.t || b.s || !a.getAttribute || ((c = a.getAttribute("alt")) ? b.a = c : (c = a.getAttribute("title")) ? b.t = c : "IMG" == ("" + a.nodeName).toUpperCase() && (c = a.getAttribute("src") || a.src) && (b.s = c)), (c = a.childNodes) && c.length))
						for (a = 0; a < c.length; a++) s(c[a], d, b)
				}

				function k(a) {
					if (null == a || void 0 == a) return a;
					try {
						return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r   ᠎ - \u2028\u2029 　\ufeff]+", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r   ᠎ - \u2028\u2029 　\ufeff]+$", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r   ᠎ - \u2028\u2029 　\ufeff]{1,}", "mg"), " ").substring(0, 254)
					} catch (d) {}
				}
				var e = this;
				e.s = f;
				var m = window;
				m.s_c_in || (m.s_c_il = [], m.s_c_in = 0);
				e._il = m.s_c_il;
				e._in = m.s_c_in;
				e._il[e._in] = e;
				m.s_c_in++;
				e._c = "s_m";
				e.c = {};
				var p = 0,
					t = {
						SCRIPT: 1,
						STYLE: 1,
						LINK: 1,
						CANVAS: 1
					};
				e._g = function() {
					var a, d, b, c = f.contextData,
						e = f.linkObject;
					(a = f.pageName || f.pageURL) && (d = r(e, "link", f.linkName)) && (b = r(e, "region")) && (c["a.activitymap.page"] = a.substring(0, 255), c["a.activitymap.link"] = 128 < d.length ? d.substring(0, 128) : d, c["a.activitymap.region"] = 127 < b.length ? b.substring(0, 127) : b, c["a.activitymap.pageIDType"] = f.pageName ? 1 : 0)
				};
				e.link = function(a, d) {
					var b;
					if (d) b = g(k(d), e.linkExclusions);
					else if ((b = a) && !(b = q(a, "sObjectId", "s-object-id", "s_objectID", 1))) {
						var c, f;
						(f = g(k(a.innerText || a.textContent), e.linkExclusions)) || (s(a, c = [], b = {
							a: void 0,
							t: void 0,
							s: void 0
						}), (f = g(k(c.join("")))) || (f = g(k(b.a ? b.a : b.t ? b.t : b.s ? b.s : void 0))) || !(c = (c = a.tagName) && c.toUpperCase ? c.toUpperCase() : "") || ("INPUT" == c || "SUBMIT" == c && a.value ? f = g(k(a.value)) : "IMAGE" == c && a.src && (f = g(k(a.src)))));
						b = f
					}
					return b
				};
				e.region = function(a) {
					for (var d, b = e.regionIDAttribute || "id"; a && (a = a.parentNode);) {
						if (d = q(a, b, b, b)) return d;
						if ("BODY" == a.nodeName) return "BODY"
					}
				}
			};
			window.AppMeasurement = function(r) {
				var a = this;
				a.version = "2.7.0";
				var k = window;
				k.s_c_in || (k.s_c_il = [], k.s_c_in = 0);
				a._il = k.s_c_il;
				a._in = k.s_c_in;
				a._il[a._in] = a;
				k.s_c_in++;
				a._c = "s_c";
				var p = k.AppMeasurement.Rb;
				p || (p = null);
				var n = k,
					m, s;
				try {
					for (m = n.parent, s = n.location; m && m.location && s && "" + m.location != "" + s && n.location && "" + m.location != "" + n.location && m.location.host == s.host;) n = m, m = n.parent
				} catch (u) {}
				a.F = function(a) {
					try {
						console.log(a)
					} catch (b) {}
				};
				a.Ma = function(a) {
					return "" + parseInt(a) == "" + a
				};
				a.replace = function(a, b, d) {
					return !a || 0 > a.indexOf(b) ? a : a.split(b).join(d)
				};
				a.escape = function(c) {
					var b, d;
					if (!c) return c;
					c = encodeURIComponent(c);
					for (b = 0; 7 > b; b++) d = "+~!*()'".substring(b, b + 1), 0 <= c.indexOf(d) && (c = a.replace(c, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
					return c
				};
				a.unescape = function(c) {
					if (!c) return c;
					c = 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c;
					try {
						return decodeURIComponent(c)
					} catch (b) {}
					return unescape(c)
				};
				a.yb = function() {
					var c = k.location.hostname,
						b = a.fpCookieDomainPeriods,
						d;
					b || (b = a.cookieDomainPeriods);
					if (c && !a.Ea && !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) : 2, b = 2 < b ? b : 2, d = c.lastIndexOf("."), 0 <= d)) {
						for (; 0 <= d && 1 < b;) d = c.lastIndexOf(".", d - 1), b--;
						a.Ea = 0 < d ? c.substring(d) : c
					}
					return a.Ea
				};
				a.c_r = a.cookieRead = function(c) {
					c = a.escape(c);
					var b = " " + a.d.cookie,
						d = b.indexOf(" " + c + "="),
						f = 0 > d ? d : b.indexOf(";", d);
					c = 0 > d ? "" : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
					return "[[B]]" != c ? c : ""
				};
				a.c_w = a.cookieWrite = function(c, b, d) {
					var f = a.yb(),
						e = a.cookieLifetime,
						g;
					b = "" + b;
					e = e ? ("" + e).toUpperCase() : "";
					d && "SESSION" != e && "NONE" != e && ((g = "" != b ? parseInt(e ? e : 0) : -60) ? (d = new Date, d.setTime(d.getTime() + 1e3 * g)) : 1 == d && (d = new Date, g = d.getYear(), d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
					return c && "NONE" != e ? (a.d.cookie = a.escape(c) + "=" + a.escape("" != b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toUTCString() + ";" : "") + (f ? " domain=" + f + ";" : ""), a.cookieRead(c) == b) : 0
				};
				a.ub = function() {
					var c = a.Util.getIeVersion();
					"number" === typeof c && 10 > c && (a.unsupportedBrowser = !0, a.jb(a, function() {}))
				};
				a.jb = function(a, b) {
					for (var d in a) a.hasOwnProperty(d) && "function" === typeof a[d] && (a[d] = b)
				};
				a.L = [];
				a.ia = function(c, b, d) {
					if (a.Fa) return 0;
					a.maxDelay || (a.maxDelay = 250);
					var f = 0,
						e = (new Date).getTime() + a.maxDelay,
						g = a.d.visibilityState,
						h = ["webkitvisibilitychange", "visibilitychange"];
					g || (g = a.d.webkitVisibilityState);
					if (g && "prerender" == g) {
						if (!a.ja)
							for (a.ja = 1, d = 0; d < h.length; d++) a.d.addEventListener(h[d], function() {
								var c = a.d.visibilityState;
								c || (c = a.d.webkitVisibilityState);
								"visible" == c && (a.ja = 0, a.delayReady())
							});
						f = 1;
						e = 0
					} else d || a.p("_d") && (f = 1);
					f && (a.L.push({
						m: c,
						a: b,
						t: e
					}), a.ja || setTimeout(a.delayReady, a.maxDelay));
					return f
				};
				a.delayReady = function() {
					var c = (new Date).getTime(),
						b = 0,
						d;
					for (a.p("_d") ? b = 1 : a.xa(); 0 < a.L.length;) {
						d = a.L.shift();
						if (b && !d.t && d.t > c) {
							a.L.unshift(d);
							setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
							break
						}
						a.Fa = 1;
						a[d.m].apply(a, d.a);
						a.Fa = 0
					}
				};
				a.setAccount = a.sa = function(c) {
					var b, d;
					if (!a.ia("setAccount", arguments))
						if (a.account = c, a.allAccounts)
							for (b = a.allAccounts.concat(c.split(",")), a.allAccounts = [], b.sort(), d = 0; d < b.length; d++) 0 != d && b[d - 1] == b[d] || a.allAccounts.push(b[d]);
						else a.allAccounts = c.split(",")
				};
				a.foreachVar = function(c, b) {
					var d, f, e, g, h = "";
					e = f = "";
					if (a.lightProfileID) d = a.P, (h = a.lightTrackVars) && (h = "," + h + "," + a.na.join(",") + ",");
					else {
						d = a.g;
						if (a.pe || a.linkType) h = a.linkTrackVars, f = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (h = a[e].Pb, f = a[e].Ob));
						h && (h = "," + h + "," + a.H.join(",") + ",");
						f && h && (h += ",events,")
					}
					b && (b = "," + b + ",");
					for (f = 0; f < d.length; f++) e = d[f], (g = a[e]) && (!h || 0 <= h.indexOf("," + e + ",")) && (!b || 0 <= b.indexOf("," + e + ",")) && c(e, g)
				};
				a.r = function(c, b, d, f, e) {
					var g = "",
						h, l, k, q, m = 0;
					"contextData" == c && (c = "c");
					if (b) {
						for (h in b)
							if (!(Object.prototype[h] || e && h.substring(0, e.length) != e) && b[h] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + h + ","))) {
								k = !1;
								if (m)
									for (l = 0; l < m.length; l++) h.substring(0, m[l].length) == m[l] && (k = !0);
								if (!k && ("" == g && (g += "&" + c + "."), l = b[h], e && (h = h.substring(e.length)), 0 < h.length))
									if (k = h.indexOf("."), 0 < k) l = h.substring(0, k), k = (e ? e : "") + l + ".", m || (m = []), m.push(k), g += a.r(l, b, d, f, k);
									else if ("boolean" == typeof l && (l = l ? "true" : "false"), l) {
									if ("retrieveLightData" == f && 0 > e.indexOf(".contextData.")) switch (k = h.substring(0, 4), q = h.substring(4), h) {
										case "transactionID":
											h = "xact";
											break;
										case "channel":
											h = "ch";
											break;
										case "campaign":
											h = "v0";
											break;
										default:
											a.Ma(q) && ("prop" == k ? h = "c" + q : "eVar" == k ? h = "v" + q : "list" == k ? h = "l" + q : "hier" == k && (h = "h" + q, l = l.substring(0, 255)))
									}
									g += "&" + a.escape(h) + "=" + a.escape(l)
								}
							}
						"" != g && (g += "&." + c)
					}
					return g
				};
				a.usePostbacks = 0;
				a.Bb = function() {
					var c = "",
						b, d, f, e, g, h, l, k, q = "",
						m = "",
						n = e = "";
					if (a.lightProfileID) b = a.P, (q = a.lightTrackVars) && (q = "," + q + "," + a.na.join(",") + ",");
					else {
						b = a.g;
						if (a.pe || a.linkType) q = a.linkTrackVars, m = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (q = a[e].Pb, m = a[e].Ob));
						q && (q = "," + q + "," + a.H.join(",") + ",");
						m && (m = "," + m + ",", q && (q += ",events,"));
						a.events2 && (n += ("" != n ? "," : "") + a.events2)
					}
					if (a.visitor && a.visitor.getCustomerIDs) {
						e = p;
						if (g = a.visitor.getCustomerIDs())
							for (d in g) Object.prototype[d] || (f = g[d], "object" == typeof f && (e || (e = {}), f.id && (e[d + ".id"] = f.id), f.authState && (e[d + ".as"] = f.authState)));
						e && (c += a.r("cid", e))
					}
					a.AudienceManagement && a.AudienceManagement.isReady() && (c += a.r("d", a.AudienceManagement.getEventCallConfigParams()));
					for (d = 0; d < b.length; d++) {
						e = b[d];
						g = a[e];
						f = e.substring(0, 4);
						h = e.substring(4);
						g || ("events" == e && n ? (g = n, n = "") : "marketingCloudOrgID" == e && a.visitor && (g = a.visitor.marketingCloudOrgID));
						if (g && (!q || 0 <= q.indexOf("," + e + ","))) {
							switch (e) {
								case "customerPerspective":
									e = "cp";
									break;
								case "marketingCloudOrgID":
									e = "mcorgid";
									break;
								case "supplementalDataID":
									e = "sdid";
									break;
								case "timestamp":
									e = "ts";
									break;
								case "dynamicVariablePrefix":
									e = "D";
									break;
								case "visitorID":
									e = "vid";
									break;
								case "marketingCloudVisitorID":
									e = "mid";
									break;
								case "analyticsVisitorID":
									e = "aid";
									break;
								case "audienceManagerLocationHint":
									e = "aamlh";
									break;
								case "audienceManagerBlob":
									e = "aamb";
									break;
								case "authState":
									e = "as";
									break;
								case "pageURL":
									e = "g";
									255 < g.length && (a.pageURLRest = g.substring(255), g = g.substring(0, 255));
									break;
								case "pageURLRest":
									e = "-g";
									break;
								case "referrer":
									e = "r";
									break;
								case "vmk":
								case "visitorMigrationKey":
									e = "vmt";
									break;
								case "visitorMigrationServer":
									e = "vmf";
									a.ssl && a.visitorMigrationServerSecure && (g = "");
									break;
								case "visitorMigrationServerSecure":
									e = "vmf";
									!a.ssl && a.visitorMigrationServer && (g = "");
									break;
								case "charSet":
									e = "ce";
									break;
								case "visitorNamespace":
									e = "ns";
									break;
								case "cookieDomainPeriods":
									e = "cdp";
									break;
								case "cookieLifetime":
									e = "cl";
									break;
								case "variableProvider":
									e = "vvp";
									break;
								case "currencyCode":
									e = "cc";
									break;
								case "channel":
									e = "ch";
									break;
								case "transactionID":
									e = "xact";
									break;
								case "campaign":
									e = "v0";
									break;
								case "latitude":
									e = "lat";
									break;
								case "longitude":
									e = "lon";
									break;
								case "resolution":
									e = "s";
									break;
								case "colorDepth":
									e = "c";
									break;
								case "javascriptVersion":
									e = "j";
									break;
								case "javaEnabled":
									e = "v";
									break;
								case "cookiesEnabled":
									e = "k";
									break;
								case "browserWidth":
									e = "bw";
									break;
								case "browserHeight":
									e = "bh";
									break;
								case "connectionType":
									e = "ct";
									break;
								case "homepage":
									e = "hp";
									break;
								case "events":
									n && (g += ("" != g ? "," : "") + n);
									if (m)
										for (h = g.split(","), g = "", f = 0; f < h.length; f++) l = h[f], k = l.indexOf("="), 0 <= k && (l = l.substring(0, k)), k = l.indexOf(":"), 0 <= k && (l = l.substring(0, k)), 0 <= m.indexOf("," + l + ",") && (g += (g ? "," : "") + h[f]);
									break;
								case "events2":
									g = "";
									break;
								case "contextData":
									c += a.r("c", a[e], q, e);
									g = "";
									break;
								case "lightProfileID":
									e = "mtp";
									break;
								case "lightStoreForSeconds":
									e = "mtss";
									a.lightProfileID || (g = "");
									break;
								case "lightIncrementBy":
									e = "mti";
									a.lightProfileID || (g = "");
									break;
								case "retrieveLightProfiles":
									e = "mtsr";
									break;
								case "deleteLightProfiles":
									e = "mtsd";
									break;
								case "retrieveLightData":
									a.retrieveLightProfiles && (c += a.r("mts", a[e], q, e));
									g = "";
									break;
								default:
									a.Ma(h) && ("prop" == f ? e = "c" + h : "eVar" == f ? e = "v" + h : "list" == f ? e = "l" + h : "hier" == f && (e = "h" + h, g = g.substring(0, 255)))
							}
							g && (c += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g))
						}
						"pev3" == e && a.e && (c += a.e)
					}
					return c
				};
				a.D = function(a) {
					var b = a.tagName;
					if ("undefined" != "" + a.Ub || "undefined" != "" + a.Kb && "HTML" != ("" + a.Kb).toUpperCase()) return "";
					b = b && b.toUpperCase ? b.toUpperCase() : "";
					"SHAPE" == b && (b = "");
					b && (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A"));
					return b
				};
				a.Ia = function(a) {
					var b = k.location,
						d = a.href ? a.href : "",
						f, e, g;
					f = d.indexOf(":");
					e = d.indexOf("?");
					g = d.indexOf("/");
					d && (0 > f || 0 <= e && f > e || 0 <= g && f > g) && (e = a.protocol && 1 < a.protocol.length ? a.protocol : b.protocol ? b.protocol : "", f = b.pathname.lastIndexOf("/"), d = (e ? e + "//" : "") + (a.host ? a.host : b.host ? b.host : "") + ("/" != d.substring(0, 1) ? b.pathname.substring(0, 0 > f ? 0 : f) + "/" : "") + d);
					return d
				};
				a.M = function(c) {
					var b = a.D(c),
						d, f, e = "",
						g = 0;
					return b && (d = c.protocol, f = c.onclick, !c.href || "A" != b && "AREA" != b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""), " ", ""), g = 2) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = c.value : c.innerText ? e = c.innerText : c.textContent && (e = c.textContent), g = 3) : "IMAGE" == b && c.src && (e = c.src) : e = a.Ia(c), e) ? {
						id: e.substring(0, 100),
						type: g
					} : 0
				};
				a.Sb = function(c) {
					for (var b = a.D(c), d = a.M(c); c && !d && "BODY" != b;)
						if (c = c.parentElement ? c.parentElement : c.parentNode) b = a.D(c), d = a.M(c);
					d && "BODY" != b || (c = 0);
					c && (b = c.onclick ? "" + c.onclick : "", 0 <= b.indexOf(".tl(") || 0 <= b.indexOf(".trackLink(")) && (c = 0);
					return c
				};
				a.Jb = function() {
					var c, b, d = a.linkObject,
						f = a.linkType,
						e = a.linkURL,
						g, h;
					a.oa = 1;
					d || (a.oa = 0, d = a.clickObject);
					if (d) {
						c = a.D(d);
						for (b = a.M(d); d && !b && "BODY" != c;)
							if (d = d.parentElement ? d.parentElement : d.parentNode) c = a.D(d), b = a.M(d);
						b && "BODY" != c || (d = 0);
						if (d && !a.linkObject) {
							var l = d.onclick ? "" + d.onclick : "";
							if (0 <= l.indexOf(".tl(") || 0 <= l.indexOf(".trackLink(")) d = 0
						}
					} else a.oa = 1;
					!e && d && (e = a.Ia(d));
					e && !a.linkLeaveQueryString && (g = e.indexOf("?"), 0 <= g && (e = e.substring(0, g)));
					if (!f && e) {
						var m = 0,
							q = 0,
							n;
						if (a.trackDownloadLinks && a.linkDownloadFileTypes)
							for (l = e.toLowerCase(), g = l.indexOf("?"), h = l.indexOf("#"), 0 <= g ? 0 <= h && h < g && (g = h) : g = h, 0 <= g && (l = l.substring(0, g)), g = a.linkDownloadFileTypes.toLowerCase().split(","), h = 0; h < g.length; h++)(n = g[h]) && l.substring(l.length - (n.length + 1)) == "." + n && (f = "d");
						if (a.trackExternalLinks && !f && (l = e.toLowerCase(), a.La(l) && (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname), g = 0, a.linkExternalFilters ? (g = a.linkExternalFilters.toLowerCase().split(","), m = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(",")), g))) {
							for (h = 0; h < g.length; h++) n = g[h], 0 <= l.indexOf(n) && (q = 1);
							q ? m && (f = "e") : m || (f = "e")
						}
					}
					a.linkObject = d;
					a.linkURL = e;
					a.linkType = f;
					if (a.trackClickMap || a.trackInlineStats) a.e = "", d && (f = a.pageName, e = 1, d = d.sourceIndex, f || (f = a.pageURL, e = 0), k.s_objectID && (b.id = k.s_objectID, d = b.type = 1), f && b && b.id && c && (a.e = "&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") + "&oid=" + a.escape(b.id.substring(0, 100)) + (b.type ? "&oidt=" + b.type : "") + "&ot=" + c + (d ? "&oi=" + d : "")))
				};
				a.Cb = function() {
					var c = a.oa,
						b = a.linkType,
						d = a.linkURL,
						f = a.linkName;
					b && (d || f) && (b = b.toLowerCase(), "d" != b && "e" != b && (b = "o"), a.pe = "lnk_" + b, a.pev1 = d ? a.escape(d) : "", a.pev2 = f ? a.escape(f) : "", c = 1);
					a.abort && (c = 0);
					if (a.trackClickMap || a.trackInlineStats || a.ActivityMap) {
						var b = {},
							d = 0,
							e = a.cookieRead("s_sq"),
							g = e ? e.split("&") : 0,
							h, l, k, e = 0;
						if (g)
							for (h = 0; h < g.length; h++) l = g[h].split("="), f = a.unescape(l[0]).split(","), l = a.unescape(l[1]), b[l] = f;
						f = a.account.split(",");
						h = {};
						for (k in a.contextData) k && !Object.prototype[k] && "a.activitymap." == k.substring(0, 14) && (h[k] = a.contextData[k], a.contextData[k] = "");
						a.e = a.r("c", h) + (a.e ? a.e : "");
						if (c || a.e) {
							c && !a.e && (e = 1);
							for (l in b)
								if (!Object.prototype[l])
									for (k = 0; k < f.length; k++)
										for (e && (g = b[l].join(","), g == a.account && (a.e += ("&" != l.charAt(0) ? "&" : "") + l, b[l] = [], d = 1)), h = 0; h < b[l].length; h++) g = b[l][h], g == f[k] && (e && (a.e += "&u=" + a.escape(g) + ("&" != l.charAt(0) ? "&" : "") + l + "&u=0"), b[l].splice(h, 1), d = 1);
							c || (d = 1);
							if (d) {
								e = "";
								h = 2;
								!c && a.e && (e = a.escape(f.join(",")) + "=" + a.escape(a.e), h = 1);
								for (l in b) !Object.prototype[l] && 0 < h && 0 < b[l].length && (e += (e ? "&" : "") + a.escape(b[l].join(",")) + "=" + a.escape(l), h--);
								a.cookieWrite("s_sq", e)
							}
						}
					}
					return c
				};
				a.Db = function() {
					if (!a.Nb) {
						var c = new Date,
							b = n.location,
							d, f, e = f = d = "",
							g = "",
							h = "",
							l = "1.2",
							k = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
							m = "",
							p = "";
						if (c.setUTCDate && (l = "1.3", (0).toPrecision && (l = "1.5", c = [], c.forEach))) {
							l = "1.6";
							f = 0;
							d = {};
							try {
								f = new Iterator(d), f.next && (l = "1.7", c.reduce && (l = "1.8", l.trim && (l = "1.8.1", Date.parse && (l = "1.8.2", Object.create && (l = "1.8.5")))))
							} catch (r) {}
						}
						d = screen.width + "x" + screen.height;
						e = navigator.javaEnabled() ? "Y" : "N";
						f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
						g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
						h = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
						try {
							a.b.addBehavior("#default#homePage"), m = a.b.Tb(b) ? "Y" : "N"
						} catch (s) {}
						try {
							a.b.addBehavior("#default#clientCaps"), p = a.b.connectionType
						} catch (t) {}
						a.resolution = d;
						a.colorDepth = f;
						a.javascriptVersion = l;
						a.javaEnabled = e;
						a.cookiesEnabled = k;
						a.browserWidth = g;
						a.browserHeight = h;
						a.connectionType = p;
						a.homepage = m;
						a.Nb = 1
					}
				};
				a.Q = {};
				a.loadModule = function(c, b) {
					var d = a.Q[c];
					if (!d) {
						d = k["AppMeasurement_Module_" + c] ? new k["AppMeasurement_Module_" + c](a) : {};
						a.Q[c] = a[c] = d;
						d.eb = function() {
							return d.ib
						};
						d.kb = function(b) {
							if (d.ib = b) a[c + "_onLoad"] = b, a.ia(c + "_onLoad", [a, d], 1) || b(a, d)
						};
						try {
							Object.defineProperty ? Object.defineProperty(d, "onLoad", {
								get: d.eb,
								set: d.kb
							}) : d._olc = 1
						} catch (f) {
							d._olc = 1
						}
					}
					b && (a[c + "_onLoad"] = b, a.ia(c + "_onLoad", [a, d], 1) || b(a, d))
				};
				a.p = function(c) {
					var b, d;
					for (b in a.Q)
						if (!Object.prototype[b] && (d = a.Q[b]) && (d._olc && d.onLoad && (d._olc = 0, d.onLoad(a, d)), d[c] && d[c]())) return 1;
					return 0
				};
				a.Fb = function() {
					var c = Math.floor(1e13 * Math.random()),
						b = a.visitorSampling,
						d = a.visitorSamplingGroup,
						d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : ""),
						f = a.cookieRead(d);
					if (b) {
						b *= 100;
						f && (f = parseInt(f));
						if (!f) {
							if (!a.cookieWrite(d, c)) return 0;
							f = c
						}
						if (f % 1e4 > b) return 0
					}
					return 1
				};
				a.R = function(c, b) {
					var d, f, e, g, h, l;
					for (d = 0; 2 > d; d++)
						for (f = 0 < d ? a.Aa : a.g, e = 0; e < f.length; e++)
							if (g = f[e], (h = c[g]) || c["!" + g]) {
								if (!b && ("contextData" == g || "retrieveLightData" == g) && a[g])
									for (l in a[g]) h[l] || (h[l] = a[g][l]);
								a[g] = h
							}
				};
				a.Va = function(c, b) {
					var d, f, e, g;
					for (d = 0; 2 > d; d++)
						for (f = 0 < d ? a.Aa : a.g, e = 0; e < f.length; e++) g = f[e], c[g] = a[g], b || c[g] || (c["!" + g] = 1)
				};
				a.xb = function(a) {
					var b, d, f, e, g, h = 0,
						l, k = "",
						m = "";
					if (a && 255 < a.length && (b = "" + a, d = b.indexOf("?"), 0 < d && (l = b.substring(d + 1), b = b.substring(0, d), e = b.toLowerCase(), f = 0, "http://" == e.substring(0, 7) ? f += 7 : "https://" == e.substring(0, 8) && (f += 8), d = e.indexOf("/", f), 0 < d && (e = e.substring(f, d), g = b.substring(d), b = b.substring(0, d), 0 <= e.indexOf("google") ? h = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") && (h = ",p,ei,"), h && l)))) {
						if ((a = l.split("&")) && 1 < a.length) {
							for (f = 0; f < a.length; f++) e = a[f], d = e.indexOf("="), 0 < d && 0 <= h.indexOf("," + e.substring(0, d) + ",") ? k += (k ? "&" : "") + e : m += (m ? "&" : "") + e;
							k && m ? l = k + "&" + m : m = ""
						}
						d = 253 - (l.length - m.length) - b.length;
						a = b + (0 < d ? g.substring(0, d) : "") + "?" + l
					}
					return a
				};
				a.ab = function(c) {
					var b = a.d.visibilityState,
						d = ["webkitvisibilitychange", "visibilitychange"];
					b || (b = a.d.webkitVisibilityState);
					if (b && "prerender" == b) {
						if (c)
							for (b = 0; b < d.length; b++) a.d.addEventListener(d[b], function() {
								var b = a.d.visibilityState;
								b || (b = a.d.webkitVisibilityState);
								"visible" == b && c()
							});
						return !1
					}
					return !0
				};
				a.ea = !1;
				a.J = !1;
				a.mb = function() {
					a.J = !0;
					a.j()
				};
				a.ca = !1;
				a.V = !1;
				a.hb = function(c) {
					a.marketingCloudVisitorID = c;
					a.V = !0;
					a.j()
				};
				a.fa = !1;
				a.W = !1;
				a.nb = function(c) {
					a.visitorOptedOut = c;
					a.W = !0;
					a.j()
				};
				a.Z = !1;
				a.S = !1;
				a.Xa = function(c) {
					a.analyticsVisitorID = c;
					a.S = !0;
					a.j()
				};
				a.ba = !1;
				a.U = !1;
				a.Za = function(c) {
					a.audienceManagerLocationHint = c;
					a.U = !0;
					a.j()
				};
				a.aa = !1;
				a.T = !1;
				a.Ya = function(c) {
					a.audienceManagerBlob = c;
					a.T = !0;
					a.j()
				};
				a.$a = function(c) {
					a.maxDelay || (a.maxDelay = 250);
					return a.p("_d") ? (c && setTimeout(function() {
						c()
					}, a.maxDelay), !1) : !0
				};
				a.da = !1;
				a.I = !1;
				a.xa = function() {
					a.I = !0;
					a.j()
				};
				a.isReadyToTrack = function() {
					var c = !0,
						b = a.visitor,
						d, f, e;
					a.ea || a.J || (a.ab(a.mb) ? a.J = !0 : a.ea = !0);
					if (a.ea && !a.J) return !1;
					b && b.isAllowed() && (a.ca || a.marketingCloudVisitorID || !b.getMarketingCloudVisitorID || (a.ca = !0, a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([a, a.hb]), a.marketingCloudVisitorID && (a.V = !0)), a.fa || a.visitorOptedOut || !b.isOptedOut || (a.fa = !0, a.visitorOptedOut = b.isOptedOut([a, a.nb]), a.visitorOptedOut != p && (a.W = !0)), a.Z || a.analyticsVisitorID || !b.getAnalyticsVisitorID || (a.Z = !0, a.analyticsVisitorID = b.getAnalyticsVisitorID([a, a.Xa]), a.analyticsVisitorID && (a.S = !0)), a.ba || a.audienceManagerLocationHint || !b.getAudienceManagerLocationHint || (a.ba = !0, a.audienceManagerLocationHint = b.getAudienceManagerLocationHint([a, a.Za]), a.audienceManagerLocationHint && (a.U = !0)), a.aa || a.audienceManagerBlob || !b.getAudienceManagerBlob || (a.aa = !0, a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.Ya]), a.audienceManagerBlob && (a.T = !0)), c = a.ca && !a.V && !a.marketingCloudVisitorID, b = a.Z && !a.S && !a.analyticsVisitorID, d = a.ba && !a.U && !a.audienceManagerLocationHint, f = a.aa && !a.T && !a.audienceManagerBlob, e = a.fa && !a.W, c = c || b || d || f || e ? !1 : !0);
					a.da || a.I || (a.$a(a.xa) ? a.I = !0 : a.da = !0);
					a.da && !a.I && (c = !1);
					return c
				};
				a.o = p;
				a.u = 0;
				a.callbackWhenReadyToTrack = function(c, b, d) {
					var f;
					f = {};
					f.rb = c;
					f.qb = b;
					f.ob = d;
					a.o == p && (a.o = []);
					a.o.push(f);
					0 == a.u && (a.u = setInterval(a.j, 100))
				};
				a.j = function() {
					var c;
					if (a.isReadyToTrack() && (a.lb(), a.o != p))
						for (; 0 < a.o.length;) c = a.o.shift(), c.qb.apply(c.rb, c.ob)
				};
				a.lb = function() {
					a.u && (clearInterval(a.u), a.u = 0)
				};
				a.fb = function(c) {
					var b, d, f = p,
						e = p;
					if (!a.isReadyToTrack()) {
						b = [];
						if (c != p)
							for (d in f = {}, c) f[d] = c[d];
						e = {};
						a.Va(e, !0);
						b.push(f);
						b.push(e);
						a.callbackWhenReadyToTrack(a, a.track, b);
						return !0
					}
					return !1
				};
				a.zb = function() {
					var c = a.cookieRead("s_fid"),
						b = "",
						d = "",
						f;
					f = 8;
					var e = 4;
					if (!c || 0 > c.indexOf("-")) {
						for (c = 0; 16 > c; c++) f = Math.floor(Math.random() * f), b += "0123456789ABCDEF".substring(f, f + 1), f = Math.floor(Math.random() * e), d += "0123456789ABCDEF".substring(f, f + 1), f = e = 16;
						c = b + "-" + d
					}
					a.cookieWrite("s_fid", c, 1) || (c = 0);
					return c
				};
				a.t = a.track = function(c, b) {
					var d, f = new Date,
						e = "s" + Math.floor(f.getTime() / 108e5) % 10 + Math.floor(1e13 * Math.random()),
						g = f.getYear(),
						g = "t=" + a.escape(f.getDate() + "/" + f.getMonth() + "/" + (1900 > g ? g + 1900 : g) + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + " " + f.getDay() + " " + f.getTimezoneOffset());
					a.visitor && a.visitor.getAuthState && (a.authState = a.visitor.getAuthState());
					a.p("_s");
					a.fb(c) || (b && a.R(b), c && (d = {}, a.Va(d, 0), a.R(c)), a.Fb() && !a.visitorOptedOut && (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.zb()), a.Jb(), a.usePlugins && a.doPlugins && a.doPlugins(a), a.account && (a.abort || (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(f.getTime() / 1e3)), f = k.location, a.pageURL || (a.pageURL = f.href ? f.href : f), a.referrer || a.Wa || (f = a.Util.getQueryParam("adobe_mc_ref", null, null, !0), a.referrer = f || void 0 === f ? void 0 === f ? "" : f : n.document.referrer), a.Wa = 1, a.referrer = a.xb(a.referrer), a.p("_g")), a.Cb() && !a.abort && (a.visitor && !a.supplementalDataID && a.visitor.getSupplementalDataID && (a.supplementalDataID = a.visitor.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0)), a.Db(), g += a.Bb(), a.Ib(e, g), a.p("_t"), a.referrer = ""))), c && a.R(d, 1));
					a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = 0
				};
				a.za = [];
				a.registerPreTrackCallback = function(c) {
					for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
					"function" == typeof c ? a.za.push([c, b]) : a.debugTracking && a.F("DEBUG: Non function type passed to registerPreTrackCallback")
				};
				a.cb = function(c) {
					a.wa(a.za, c)
				};
				a.ya = [];
				a.registerPostTrackCallback = function(c) {
					for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
					"function" == typeof c ? a.ya.push([c, b]) : a.debugTracking && a.F("DEBUG: Non function type passed to registerPostTrackCallback")
				};
				a.bb = function(c) {
					a.wa(a.ya, c)
				};
				a.wa = function(c, b) {
					if ("object" == typeof c)
						for (var d = 0; d < c.length; d++) {
							var f = c[d][0],
								e = c[d][1];
							e.unshift(b);
							if ("function" == typeof f) try {
								f.apply(null, e)
							} catch (g) {
								a.debugTracking && a.F(g.message)
							}
						}
				};
				a.tl = a.trackLink = function(c, b, d, f, e) {
					a.linkObject = c;
					a.linkType = b;
					a.linkName = d;
					e && (a.l = c, a.A = e);
					return a.track(f)
				};
				a.trackLight = function(c, b, d, f) {
					a.lightProfileID = c;
					a.lightStoreForSeconds = b;
					a.lightIncrementBy = d;
					return a.track(f)
				};
				a.clearVars = function() {
					var c, b;
					for (c = 0; c < a.g.length; c++)
						if (b = a.g[c], "prop" == b.substring(0, 4) || "eVar" == b.substring(0, 4) || "hier" == b.substring(0, 4) || "list" == b.substring(0, 4) || "channel" == b || "events" == b || "eventList" == b || "products" == b || "productList" == b || "purchaseID" == b || "transactionID" == b || "state" == b || "zip" == b || "campaign" == b) a[b] = void 0
				};
				a.tagContainerMarker = "";
				a.Ib = function(c, b) {
					var d, f = a.trackingServer;
					d = "";
					var e = a.dc,
						g = "sc.",
						h = a.visitorNamespace;
					f ? a.trackingServerSecure && a.ssl && (f = a.trackingServerSecure) : (h || (h = a.account, f = h.indexOf(","), 0 <= f && (h = h.substring(0, f)), h = h.replace(/[^A-Za-z0-9]/g, "")), d || (d = "2o7.net"), e = e ? ("" + e).toLowerCase() : "d1", "2o7.net" == d && ("d1" == e ? e = "112" : "d2" == e && (e = "122"), g = ""), f = h + "." + e + "." + g + d);
					d = a.ssl ? "https://" : "http://";
					e = a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks;
					d += f + "/b/ss/" + a.account + "/" + (a.mobile ? "5." : "") + (e ? "10" : "1") + "/JS-" + a.version + (a.Mb ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "") + "/" + c + "?AQB=1&ndh=1&pf=1&" + (e ? "callback=s_c_il[" + a._in + "].doPostbacks&et=1&" : "") + b + "&AQE=1";
					a.cb(d);
					a.vb(d);
					a.ka()
				};
				a.Ua = /{(%?)(.*?)(%?)}/;
				a.Qb = RegExp(a.Ua.source, "g");
				a.wb = function(c) {
					if ("object" == typeof c.dests)
						for (var b = 0; b < c.dests.length; ++b) {
							var d = c.dests[b];
							if ("string" == typeof d.c && "aa." == d.id.substr(0, 3))
								for (var f = d.c.match(a.Qb), e = 0; e < f.length; ++e) {
									var g = f[e],
										h = g.match(a.Ua),
										k = "";
									"%" == h[1] && "timezone_offset" == h[2] ? k = (new Date).getTimezoneOffset() : "%" == h[1] && "timestampz" == h[2] && (k = a.Ab());
									d.c = d.c.replace(g, a.escape(k))
								}
						}
				};
				a.Ab = function() {
					var c = new Date,
						b = new Date(6e4 * Math.abs(c.getTimezoneOffset()));
					return a.k(4, c.getFullYear()) + "-" + a.k(2, c.getMonth() + 1) + "-" + a.k(2, c.getDate()) + "T" + a.k(2, c.getHours()) + ":" + a.k(2, c.getMinutes()) + ":" + a.k(2, c.getSeconds()) + (0 < c.getTimezoneOffset() ? "-" : "+") + a.k(2, b.getUTCHours()) + ":" + a.k(2, b.getUTCMinutes())
				};
				a.k = function(a, b) {
					return (Array(a + 1).join(0) + b).slice(-a)
				};
				a.ta = {};
				a.doPostbacks = function(c) {
					if ("object" == typeof c)
						if (a.wb(c), "object" == typeof a.AudienceManagement && "function" == typeof a.AudienceManagement.isReady && a.AudienceManagement.isReady() && "function" == typeof a.AudienceManagement.passData) a.AudienceManagement.passData(c);
						else if ("object" == typeof c && "object" == typeof c.dests)
						for (var b = 0; b < c.dests.length; ++b) {
							var d = c.dests[b];
							"object" == typeof d && "string" == typeof d.c && "string" == typeof d.id && "aa." == d.id.substr(0, 3) && (a.ta[d.id] = new Image, a.ta[d.id].alt = "", a.ta[d.id].src = d.c)
						}
				};
				a.vb = function(c) {
					a.i || a.Eb();
					a.i.push(c);
					a.ma = a.C();
					a.Sa()
				};
				a.Eb = function() {
					a.i = a.Gb();
					a.i || (a.i = [])
				};
				a.Gb = function() {
					var c, b;
					if (a.ra()) {
						try {
							(b = k.localStorage.getItem(a.pa())) && (c = k.JSON.parse(b))
						} catch (d) {}
						return c
					}
				};
				a.ra = function() {
					var c = !0;
					a.trackOffline && a.offlineFilename && k.localStorage && k.JSON || (c = !1);
					return c
				};
				a.Ja = function() {
					var c = 0;
					a.i && (c = a.i.length);
					a.q && c++;
					return c
				};
				a.ka = function() {
					if (a.q && (a.B && a.B.complete && a.B.G && a.B.va(), a.q)) return;
					a.Ka = p;
					if (a.qa) a.ma > a.O && a.Qa(a.i), a.ua(500);
					else {
						var c = a.pb();
						if (0 < c) a.ua(c);
						else if (c = a.Ga()) a.q = 1, a.Hb(c), a.Lb(c)
					}
				};
				a.ua = function(c) {
					a.Ka || (c || (c = 0), a.Ka = setTimeout(a.ka, c))
				};
				a.pb = function() {
					var c;
					if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
					c = a.C() - a.Pa;
					return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c
				};
				a.Ga = function() {
					if (0 < a.i.length) return a.i.shift()
				};
				a.Hb = function(c) {
					if (a.debugTracking) {
						var b = "AppMeasurement Debug: " + c;
						c = c.split("&");
						var d;
						for (d = 0; d < c.length; d++) b += "\n\t" + a.unescape(c[d]);
						a.F(b)
					}
				};
				a.gb = function() {
					return a.marketingCloudVisitorID || a.analyticsVisitorID
				};
				a.Y = !1;
				var t;
				try {
					t = JSON.parse('{"x":"y"}')
				} catch (w) {
					t = null
				}
				t && "y" == t.x ? (a.Y = !0, a.X = function(a) {
					return JSON.parse(a)
				}) : k.$ && k.$.parseJSON ? (a.X = function(a) {
					return k.$.parseJSON(a)
				}, a.Y = !0) : a.X = function() {
					return null
				};
				a.Lb = function(c) {
					var b, d, f;
					a.gb() && 2047 < c.length && ("undefined" != typeof XMLHttpRequest && (b = new XMLHttpRequest, "withCredentials" in b ? d = 1 : b = 0), b || "undefined" == typeof XDomainRequest || (b = new XDomainRequest, d = 2), b && (a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks) && (a.Y ? b.Ba = !0 : b = 0));
					!b && a.Ta && (c = c.substring(0, 2047));
					!b && a.d.createElement && (0 != a.usePostbacks || a.AudienceManagement && a.AudienceManagement.isReady()) && (b = a.d.createElement("SCRIPT")) && "async" in b && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (b.type = "text/javascript", b.setAttribute("async", "async"), d = 3) : b = 0);
					b || (b = new Image, b.alt = "", b.abort || "undefined" === typeof k.InstallTrigger || (b.abort = function() {
						b.src = p
					}));
					b.Da = function() {
						try {
							b.G && (clearTimeout(b.G), b.G = 0)
						} catch (a) {}
					};
					b.onload = b.va = function() {
						a.bb(c);
						b.Da();
						a.tb();
						a.ga();
						a.q = 0;
						a.ka();
						if (b.Ba) {
							b.Ba = !1;
							try {
								a.doPostbacks(a.X(b.responseText))
							} catch (d) {}
						}
					};
					b.onabort = b.onerror = b.Ha = function() {
						b.Da();
						(a.trackOffline || a.qa) && a.q && a.i.unshift(a.sb);
						a.q = 0;
						a.ma > a.O && a.Qa(a.i);
						a.ga();
						a.ua(500)
					};
					b.onreadystatechange = function() {
						4 == b.readyState && (200 == b.status ? b.va() : b.Ha())
					};
					a.Pa = a.C();
					if (1 == d || 2 == d) {
						var e = c.indexOf("?");
						f = c.substring(0, e);
						e = c.substring(e + 1);
						e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, "");
						1 == d ? (b.open("POST", f, !0), b.send(e)) : 2 == d && (b.open("POST", f), b.send(e))
					} else if (b.src = c, 3 == d) {
						if (a.Na) try {
							f.removeChild(a.Na)
						} catch (g) {}
						f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
						a.Na = a.B
					}
					b.G = setTimeout(function() {
						b.G && (b.complete ? b.va() : (a.trackOffline && b.abort && b.abort(), b.Ha()))
					}, 5e3);
					a.sb = c;
					a.B = k["s_i_" + a.replace(a.account, ",", "_")] = b;
					if (a.useForcedLinkTracking && a.K || a.A) a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250), a.ha = setTimeout(a.ga, a.forcedLinkTrackingTimeout)
				};
				a.tb = function() {
					if (a.ra() && !(a.Oa > a.O)) try {
						k.localStorage.removeItem(a.pa()), a.Oa = a.C()
					} catch (c) {}
				};
				a.Qa = function(c) {
					if (a.ra()) {
						a.Sa();
						try {
							k.localStorage.setItem(a.pa(), k.JSON.stringify(c)), a.O = a.C()
						} catch (b) {}
					}
				};
				a.Sa = function() {
					if (a.trackOffline) {
						if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
						for (; a.i.length > a.offlineLimit;) a.Ga()
					}
				};
				a.forceOffline = function() {
					a.qa = !0
				};
				a.forceOnline = function() {
					a.qa = !1
				};
				a.pa = function() {
					return a.offlineFilename + "-" + a.visitorNamespace + a.account
				};
				a.C = function() {
					return (new Date).getTime()
				};
				a.La = function(a) {
					a = a.toLowerCase();
					return 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:") ? !0 : !1
				};
				a.setTagContainer = function(c) {
					var b, d, f;
					a.Mb = c;
					for (b = 0; b < a._il.length; b++)
						if ((d = a._il[b]) && "s_l" == d._c && d.tagContainerName == c) {
							a.R(d);
							if (d.lmq)
								for (b = 0; b < d.lmq.length; b++) f = d.lmq[b], a.loadModule(f.n);
							if (d.ml)
								for (f in d.ml)
									if (a[f])
										for (b in c = a[f], f = d.ml[f], f) !Object.prototype[b] && ("function" != typeof f[b] || 0 > ("" + f[b]).indexOf("s_c_il")) && (c[b] = f[b]);
							if (d.mmq)
								for (b = 0; b < d.mmq.length; b++) f = d.mmq[b], a[f.m] && (c = a[f.m], c[f.f] && "function" == typeof c[f.f] && (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
							if (d.tq)
								for (b = 0; b < d.tq.length; b++) a.track(d.tq[b]);
							d.s = a;
							break
						}
				};
				a.Util = {
					urlEncode: a.escape,
					urlDecode: a.unescape,
					cookieRead: a.cookieRead,
					cookieWrite: a.cookieWrite,
					getQueryParam: function(c, b, d, f) {
						var e, g = "";
						b || (b = a.pageURL ? a.pageURL : k.location);
						d = d ? d : "&";
						if (!c || !b) return g;
						b = "" + b;
						e = b.indexOf("?");
						if (0 > e) return g;
						b = d + b.substring(e + 1) + d;
						if (!f || !(0 <= b.indexOf(d + c + d) || 0 <= b.indexOf(d + c + "=" + d))) {
							e = b.indexOf("#");
							0 <= e && (b = b.substr(0, e) + d);
							e = b.indexOf(d + c + "=");
							if (0 > e) return g;
							b = b.substring(e + d.length + c.length + 1);
							e = b.indexOf(d);
							0 <= e && (b = b.substring(0, e));
							0 < b.length && (g = a.unescape(b));
							return g
						}
					},
					getIeVersion: function() {
						if (document.documentMode) return document.documentMode;
						for (var a = 7; 4 < a; a--) {
							var b = document.createElement("div");
							b.innerHTML = "\x3c!--[if IE " + a + "]><span></span><![endif]--\x3e";
							if (b.getElementsByTagName("span").length) return a
						}
						return null
					}
				};
				a.H = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
				a.g = a.H.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
				a.na = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
				a.P = a.na.slice(0);
				a.Aa = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
				for (m = 0; 250 >= m; m++) 76 > m && (a.g.push("prop" + m), a.P.push("prop" + m)), a.g.push("eVar" + m), a.P.push("eVar" + m), 6 > m && a.g.push("hier" + m), 4 > m && a.g.push("list" + m);
				m = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" ");
				a.g = a.g.concat(m);
				a.H = a.H.concat(m);
				a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf("https");
				a.charSet = "UTF-8";
				a.contextData = {};
				a.offlineThrottleDelay = 0;
				a.offlineFilename = "AppMeasurement.offline";
				a.Pa = 0;
				a.ma = 0;
				a.O = 0;
				a.Oa = 0;
				a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
				a.w = k;
				a.d = k.document;
				try {
					if (a.Ta = !1, navigator) {
						var v = navigator.userAgent;
						if ("Microsoft Internet Explorer" == navigator.appName || 0 <= v.indexOf("MSIE ") || 0 <= v.indexOf("Trident/") && 0 <= v.indexOf("Windows NT 6")) a.Ta = !0
					}
				} catch (x) {}
				a.ga = function() {
					a.ha && (k.clearTimeout(a.ha), a.ha = p);
					a.l && a.K && a.l.dispatchEvent(a.K);
					a.A && ("function" == typeof a.A ? a.A() : a.l && a.l.href && (a.d.location = a.l.href));
					a.l = a.K = a.A = 0
				};
				a.Ra = function() {
					a.b = a.d.body;
					a.b ? (a.v = function(c) {
						var b, d, f, e, g;
						if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
							if (a.Ca)
								if (a.useForcedLinkTracking) a.b.removeEventListener("click", a.v, !1);
								else {
									a.b.removeEventListener("click", a.v, !0);
									a.Ca = a.useForcedLinkTracking = 0;
									return
								}
							else a.useForcedLinkTracking = 0;
							a.clickObject = c.srcElement ? c.srcElement : c.target;
							try {
								if (!a.clickObject || a.N && a.N == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement || a.clickObject.parentNode)) a.clickObject = 0;
								else {
									var h = a.N = a.clickObject;
									a.la && (clearTimeout(a.la), a.la = 0);
									a.la = setTimeout(function() {
										a.N == h && (a.N = 0)
									}, 1e4);
									f = a.Ja();
									a.track();
									if (f < a.Ja() && a.useForcedLinkTracking && c.target) {
										for (e = c.target; e && e != a.b && "A" != e.tagName.toUpperCase() && "AREA" != e.tagName.toUpperCase();) e = e.parentNode;
										if (e && (g = e.href, a.La(g) || (g = 0), d = e.target, c.target.dispatchEvent && g && (!d || "_self" == d || "_top" == d || "_parent" == d || k.name && d == k.name))) {
											try {
												b = a.d.createEvent("MouseEvents")
											} catch (l) {
												b = new k.MouseEvent
											}
											if (b) {
												try {
													b.initMouseEvent("click", c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget)
												} catch (m) {
													b = 0
												}
												b && (b["s_fe_" + a._in] = b.s_fe = 1, c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), c.preventDefault(), a.l = c.target, a.K = b)
											}
										}
									}
								}
							} catch (n) {
								a.clickObject = 0
							}
						}
					}, a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.v) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && k.MouseEvent) && (a.Ca = 1, a.useForcedLinkTracking = 1, a.b.addEventListener("click", a.v, !0)), a.b.addEventListener("click", a.v, !1))) : setTimeout(a.Ra, 30)
				};
				a.ub();
				a.Vb || (r ? a.setAccount(r) : a.F("Error, missing Report Suite ID in AppMeasurement initialization"), a.Ra(), a.loadModule("ActivityMap"))
			};

			function s_gi(r) {
				var a, k = window.s_c_il,
					p, n, m = r.split(","),
					s, u, t = 0;
				if (k)
					for (p = 0; !t && p < k.length;) {
						a = k[p];
						if ("s_c" == a._c && (a.account || a.oun))
							if (a.account && a.account == r) t = 1;
							else
								for (n = a.account ? a.account : a.oun, n = a.allAccounts ? a.allAccounts : n.split(","), s = 0; s < m.length; s++)
									for (u = 0; u < n.length; u++) m[s] == n[u] && (t = 1);
						p++
					}
				t ? a.setAccount && a.setAccount(r) : a = new AppMeasurement(r);
				return a
			}
			AppMeasurement.getInstance = s_gi;
			window.s_objectID || (window.s_objectID = 0);

			function s_pgicq() {
				var r = window,
					a = r.s_giq,
					k, p, n;
				if (a)
					for (k = 0; k < a.length; k++) p = a[k], n = s_gi(p.oun), n.setAccount(p.un), n.setTagContainer(p.tagContainerName);
				r.s_giq = 0
			}
			s_pgicq();
			module.exports = {
				s_gi: s_gi,
				s_pgicq: s_pgicq
			}
		})()
	}, {}],
	167: [function(require, module, exports) {
		"use strict";
		var constants = {
			sessionStorage: "sessionStorage"
		};
		module.exports = Object.freeze(constants)
	}, {}],
	168: [function(require, module, exports) {
		"use strict";

		function isStorageAvailable(type) {
			try {
				var storage = window[type];
				var testItem = "acAnalyticsStorageTestItem";
				storage.setItem(testItem, "a");
				storage.removeItem(testItem);
				return true
			} catch (e) {
				return false
			}
		}
		module.exports = isStorageAvailable
	}, {}],
	169: [function(require, module, exports) {
		"use strict";
		var s_gi = require("./AppMeasurement").s_gi;
		var AppMeasurement = require("./AppMeasurement");

		function initialize(s_account) {
			if (typeof s_account !== "string") {
				return
			}
			var s = s_gi(s_account);
			return s
		}
		module.exports = initialize
	}, {
		"./AppMeasurement": 166
	}],
	170: [function(require, module, exports) {
		"use strict";

		function init(appMeasurement) {
			require("./plugins/utilities/utilities")(appMeasurement);
			require("./plugins/linkHandler")(appMeasurement);
			require("./plugins/getPercentPageViewed")(appMeasurement);
			require("./plugins/getQueryParam")(appMeasurement);
			require("./plugins/getValOnce")(appMeasurement);
			require("./plugins/performanceTiming")(appMeasurement);
			require("./plugins/activitymap/link")(appMeasurement);
			require("./plugins/activitymap/region")(appMeasurement);
			require("./plugins/activitymap/ActivityMapCollection")
		}
		module.exports.init = init
	}, {
		"./plugins/activitymap/ActivityMapCollection": 171,
		"./plugins/activitymap/link": 173,
		"./plugins/activitymap/region": 174,
		"./plugins/getPercentPageViewed": 175,
		"./plugins/getQueryParam": 176,
		"./plugins/getValOnce": 177,
		"./plugins/linkHandler": 178,
		"./plugins/performanceTiming": 179,
		"./plugins/utilities/utilities": 180
	}],
	171: [function(require, module, exports) {
		"use strict";
		var _ancestor = require("@marcom/ac-dom-traversal/ancestor");
		var _isAncestorOf = require("@marcom/ac-dom-traversal/isAncestorOf");
		var _helpers = require("./helpers/helpers.js");
		var DELIMITER = " - ";

		function ActivityMapCollection() {
			this._regionSelectors = ["[data-analytics-activitymap-region-id]", "[data-analytics-section-engagement]", "[data-card-analytics]"];
			this._globalRegionSelectors = ['[data-analytics-region="buy strip"]', "#ac-globalnav", "#ac-localnav", "#ac-globalfooter", "#chapternav"];
			this.createActivityMapCollection = this.createActivityMapCollection.bind(this);
			this.addElToCollection = this.addElToCollection.bind(this);
			document.addEventListener("DOMContentLoaded", this.createActivityMapCollection)
		}
		var proto = ActivityMapCollection.prototype;
		proto.createActivityMapCollection = function() {
			this.AppMeasurement = window.s;
			if (this.AppMeasurement) {
				this.AppMeasurement.acAnalyticsActivityMapCollection = null;
				this.AppMeasurement.acAnalyticsActivityMapCollection = this._assembleActivityMapCollection()
			}
		};
		proto._createLinkData = function(node) {
			var region = this._determineRegionName(node, this._globalRegionElements, this._regionSelectors);
			var linkId = this._createLinkId(node, region.id);
			var linkData = {
				element: node,
				linkId: linkId,
				regionElement: region.el,
				regionName: region.id
			};
			return linkData
		};
		proto.addElToCollection = function(node) {
			var linkData = this._createLinkData(node);
			return this._addToActivityMapCollection(linkData)
		};
		proto._addToActivityMapCollection = function(linkData) {
			var noUniqueId = true;
			var duplicationNumber = 0;
			var duplicationCheckStr;
			var duplicate;
			duplicate = this.AppMeasurement.acAnalyticsActivityMapCollection.filter(function(obj) {
				return obj.linkId === linkData.linkId
			})[0];
			if (duplicate) {
				duplicate.linkId = duplicate.linkId.concat(DELIMITER, "#", _helpers.prefixCharacters(1));
				linkData.linkId = linkData.linkId.concat(DELIMITER, "#", _helpers.prefixCharacters(2))
			} else {
				while (noUniqueId) {
					duplicationNumber++;
					duplicationCheckStr = linkData.linkId.concat(DELIMITER, "#", _helpers.prefixCharacters(duplicationNumber));
					duplicate = this.AppMeasurement.acAnalyticsActivityMapCollection.filter(function(obj) {
						return obj.linkId === duplicationCheckStr
					})[0];
					if (!duplicate) {
						noUniqueId = false;
						if (duplicationNumber > 1) {
							linkData.linkId = duplicationCheckStr
						}
					}
				}
			}
			this.AppMeasurement.acAnalyticsActivityMapCollection.push(linkData)
		};
		proto._assembleActivityMapCollection = function() {
			this._globalRegionElements = _helpers.getGlobalElements(this._globalRegionSelectors);
			var linkEls = document.querySelectorAll("a, button");
			var collection = [];
			for (var j = 0; j < linkEls.length; j++) {
				var linkData = this._createLinkData(linkEls[j]);
				collection.push(linkData)
			}
			return this._renameDuplicateIds(collection)
		};
		proto._renameDuplicateIds = function(collection) {
			var count = {};
			var location = {};
			for (var i = 0; i < collection.length; i++) {
				var currentId = collection[i].linkId;
				count[currentId] = count[currentId] ? count[currentId] + 1 : 1;
				if (count[currentId] > 1) {
					collection[i].linkId = collection[i].linkId + " - #" + _helpers.prefixCharacters(count[currentId])
				} else {
					location[currentId] = i
				}
				if (count[currentId] === 2) {
					collection[location[currentId]].linkId = collection[location[currentId]].linkId + " - #01"
				}
			}
			return collection
		};
		proto._determineRegionName = function(linkEl, globalRegionElements, regionSelectors) {
			var regionEl = null;
			var regionId = null;
			for (var i = 0; i < globalRegionElements.length; i++) {
				if (_isAncestorOf(globalRegionElements[i], linkEl) && !regionEl) {
					regionEl = globalRegionElements[i];
					regionId = regionEl.id || regionEl.getAttribute("data-analytics-region")
				}
			}
			if (!regionEl) {
				for (var j = 0; j < regionSelectors.length; j++) {
					regionEl = _ancestor(linkEl, regionSelectors[j]);
					if (regionEl) {
						regionId = regionEl.getAttribute(_helpers.removeArrayBrackets(regionSelectors[j])).replace("name:", "");
						break
					}
				}
			}
			if (!regionEl) {
				regionEl = document.body;
				regionId = "body"
			}
			return {
				el: regionEl,
				id: regionId
			}
		};
		proto._createLinkId = function(el, region) {
			var linkText = _helpers.createLinkText(el);
			var linkHref = _helpers.createLinkHref(el);
			var linkRegion = _helpers.limitStrLength(region, 40);
			var linkId = _helpers.createLinkId(linkText, linkHref, linkRegion, DELIMITER);
			return linkId
		};
		module.exports = new ActivityMapCollection
	}, {
		"./helpers/helpers.js": 172,
		"@marcom/ac-dom-traversal/ancestor": 151,
		"@marcom/ac-dom-traversal/isAncestorOf": 154
	}],
	172: [function(require, module, exports) {
		"use strict";

		function Helpers() {
			this.createLinkId = this.createLinkId.bind(this)
		}
		var proto = Helpers.prototype;
		proto.prefixCharacters = function(id, numberOfCharacters, prefixCharacter) {
			var prefix = "";
			numberOfCharacters = numberOfCharacters || 2;
			prefixCharacter = prefixCharacter || 0;
			while (numberOfCharacters) {
				prefix += prefixCharacter;
				numberOfCharacters--
			}
			return prefix.substring(0, prefix.length - id.toString().length) + id
		};
		proto.limitStrLength = function(str, characters) {
			return str.substring(0, characters).trim()
		};
		proto.removeArrayBrackets = function(str) {
			if (str[0] === "[" && str[str.length - 1] === "]") {
				return str.substr(1, str.length - 2)
			} else {
				return str
			}
		};
		proto.getGlobalElements = function(arr) {
			var storage = [];
			for (var i = 0; i < arr.length; i++) {
				var el = document.querySelector(arr[i]);
				if (el) {
					storage.push(el)
				}
			}
			return storage
		};
		proto.createLinkText = function(el) {
			var linkText = el.getAttribute("data-analytics-activitymap-link-id") || el.getAttribute("data-ac-gallery-trigger") || el.getAttribute("data-analytics-title") || this.removeSpecialChars(el.textContent) || el.id || el.tagName || "no text";
			return linkText = this.limitStrLength(linkText, 50)
		};
		proto.createLinkHref = function(el) {
			var externalLink;
			var linkHref;
			if (el.hostname !== window.location.hostname && el.hostname !== "www.apple.com") {
				externalLink = el.hostname + el.pathname
			}
			linkHref = externalLink || el.hash || el.pathname || "no href";
			return linkHref
		};
		proto.createLinkId = function(text, href, region, delimiter) {
			var limitForHref;
			var trimmedHref;
			var linkId = text.concat(delimiter, href, delimiter, region);
			if (linkId.length > 128) {
				limitForHref = 128 - text.concat(delimiter, delimiter, region).length;
				trimmedHref = this.limitStrLength(href, limitForHref);
				linkId = text.concat(delimiter, trimmedHref, delimiter, region)
			}
			return linkId
		};
		proto.removeSpecialChars = function(strToClean) {
			var charNotAllowedArr = ["&rlm;", "\\u200F", "&#8207;", "&#x200f;"];
			var cleanStr;
			if (strToClean) {
				var regexStr = charNotAllowedArr.join("|");
				var regexNotAllowedChars = new RegExp(regexStr, "gi");
				cleanStr = strToClean.replace(regexNotAllowedChars, "").replace(/\s+/g, " ").trim()
			}
			return cleanStr
		};
		module.exports = new Helpers
	}, {}],
	173: [function(require, module, exports) {
		"use strict";
		var ActivityMapCollection = require("../../plugins/activitymap/ActivityMapCollection");
		var useragent = require("@marcom/ac-useragent");
		var closeStr = " - close";
		var openStr = " - open";
		var initialBagState = useragent.browser.firefox || useragent.browser.ie ? openStr : closeStr;
		var alteredBagState = useragent.browser.firefox || useragent.browser.ie ? closeStr : openStr;
		module.exports = function(appMeasurement) {
			appMeasurement.ActivityMap.link = function(linkElement, linkName) {
				var activityMapItem;

				function findInCollection(el) {
					return appMeasurement.acAnalyticsActivityMapCollection.filter(function(obj) {
						return obj.element.isSameNode(linkElement)
					})[0]
				}
				if (linkName) {
					if (linkName.indexOf("v@e") !== -1 || linkName.indexOf("v@sk") !== -1 || linkName.indexOf("v@m") !== -1) {
						return
					}
				}
				if (!linkElement) {
					return
				}
				activityMapItem = findInCollection(linkElement);
				if (activityMapItem) {
					if (activityMapItem.linkId.indexOf("/shop/goto/bag") !== -1) {
						if (activityMapItem.element.getAttribute("aria-expanded") === "true") {
							return activityMapItem.linkId + initialBagState
						} else {
							return activityMapItem.linkId + alteredBagState
						}
					}
					return activityMapItem.linkId
				}
				ActivityMapCollection.addElToCollection(linkElement);
				activityMapItem = findInCollection(linkElement);
				if (activityMapItem) {
					return activityMapItem.linkId
				}
			}
		}
	}, {
		"../../plugins/activitymap/ActivityMapCollection": 171,
		"@marcom/ac-useragent": 161
	}],
	174: [function(require, module, exports) {
		"use strict";
		module.exports = function(appMeasurement) {
			appMeasurement.ActivityMap.region = function(el) {
				if (!el) {
					return
				}
				var result = appMeasurement.acAnalyticsActivityMapCollection.filter(function(obj) {
					return obj.element.isSameNode(el)
				})[0];
				if (result) {
					return result.regionName
				}
			}
		}
	}, {}],
	175: [function(require, module, exports) {
		"use strict";
		var isStorageAvailable = require("../helpers/isStorageAvailable");
		var SESSION_STORAGE = require("../constants").sessionStorage;
		module.exports = function(appMeasurement) {
			if (!isStorageAvailable(SESSION_STORAGE)) {
				return
			}
			appMeasurement.getPercentPageViewed = function() {
				if ("undefined" === typeof s.linkType) {
					try {
						s.ppv.previous = sessionStorage.getItem(s.ppv.sessionStorageKey) ? sessionStorage.getItem(s.ppv.sessionStorageKey) : ""
					} catch (a) {}
					s.ppv.init();
					return s.ppv.previous.split(",")
				}
				if (!s.ppv.previous) {
					try {
						s.ppv.previous = sessionStorage.getItem(s.ppv.sessionStorageKey) || ""
					} catch (a) {}
					s.ppv.init();
					return s.ppv.previous.split(",")
				}
			};
			appMeasurement.ppv = {
				initialPercent: 0,
				maxPercent: 0,
				throttleAmount: 500,
				sessionStorageKey: "s_ppv",
				init: function() {
					window.addEventListener("scroll", s.ppv.throttle(s.ppv.scroll, s.ppv.throttleAmount), !1);
					window.addEventListener("resize", s.ppv.throttle(s.ppv.scroll, s.ppv.throttleAmount), !1);
					window.addEventListener("beforeunload", s.ppv.unload, !1);
					window.addEventListener("load", s.ppv.scroll, !1)
				},
				scroll: function() {
					var a = s.ppv;
					if (100 !== a.maxPercent) {
						var g = void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement || document.body.parentNode || document.body.scrollTop,
							d = document.clientHeight || document.documentElement.clientHeight || document.body.clientHeight,
							b = a.getDocHeight(),
							b = Math.round((g + d) / b * 100);
						a.initialPercent || (a.initialPercent = b);
						if (b > a.maxPercent) {
							a.maxPercent = b;
							var c = [];
							c.push(s.pageName);
							c.push(b);
							c.push(a.initialPercent);
							c.push(g + d);
							try {
								sessionStorage.setItem(a.sessionStorageKey, c.join(","))
							} catch (e) {}
						}
					}
				},
				getDocHeight: function() {
					var a = window.document;
					return Math.max(Math.max(a.body.scrollHeight, a.documentElement.scrollHeight), Math.max(a.body.offsetHeight, a.documentElement.offsetHeight), Math.max(a.body.clientHeight, a.documentElement.clientHeight))
				},
				unload: function() {
					try {
						sessionStorage.getItem(s.ppv.sessionStorageKey) && sessionStorage.setItem(s.ppv.sessionStorageKey, sessionStorage.getItem(s.ppv.sessionStorageKey))
					} catch (a) {}
				},
				throttle: function(a, g) {
					var d, b, c, e = null,
						f = 0,
						l = function() {
							f = new Date;
							e = null;
							c = a.apply(d, b)
						};
					return function() {
						var h = new Date;
						f || (f = h);
						var k = g - (h - f);
						d = this;
						b = arguments;
						0 >= k ? (clearTimeout(e), e = null, f = h, c = a.apply(d, b)) : e || (e = setTimeout(l, k));
						return c
					}
				}
			}
		}
	}, {
		"../constants": 167,
		"../helpers/isStorageAvailable": 168
	}],
	176: [function(require, module, exports) {
		"use strict";
		module.exports = function(appMeasurement) {
			appMeasurement.getQueryParam = appMeasurement.Util.getQueryParam
		}
	}, {}],
	177: [function(require, module, exports) {
		"use strict";
		module.exports = function(appMeasurement) {
			appMeasurement.getValOnce = new Function("v", "c", "e", "t", "" + "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000" + "0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e" + "==0?0:a);}return v==k?'':v")
		}
	}, {}],
	178: [function(require, module, exports) {
		"use strict";
		module.exports = function(appMeasurement) {
			appMeasurement.p_gn = function(t, h) {
				var i = t ? t.indexOf("~") : -1,
					n, x;
				if (t && h) {
					n = i < 0 ? "" : t.substring(0, i);
					x = t.substring(i + 1);
					if (h.indexOf(x.toLowerCase()) > -1) return n ? n : "[["
				}
				return 0
			};
			appMeasurement.p_gh = function() {
				var s = this;
				if (s.linkObject) return s.linkObject.href;
				if (!s.eo && !s.lnk) return "";
				var o = s.eo ? s.eo : s.lnk,
					y = s.ot(o),
					n = s.oid(o),
					x = o.s_oidt;
				if (s.eo && o == s.eo)
					while (o && !n && y != "BODY") {
						o = o.parentElement ? o.parentElement : o.parentNode;
						if (!o) return "";
						y = s.ot(o);
						n = s.oid(o);
						x = o.s_oidt
					}
				return o.href ? o.href : ""
			};
			appMeasurement.pt = new Function("x", "d", "f", "a", "" + "var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t" + ".substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substri" + "ng(z,x.length);t=z<x.length?t:''}return'';");
			appMeasurement.linkHandler = function(p, t, e) {
				var s = this,
					o = s.p_gh(),
					h = o,
					i, l;
				t = t ? t : "o";
				if (!h || s.linkType && (h || s.linkName)) return "";
				i = h.indexOf("?");
				h = s.linkLeaveQueryString || i < 0 ? h : h.substring(0, i);
				l = s.pt(p, "|", "p_gn", h.toLowerCase());
				if (l) {
					s.linkName = l == "[[" ? "" : l;
					s.linkType = t;
					return e ? o : h
				}
				return ""
			}
		}
	}, {}],
	179: [function(require, module, exports) {
		"use strict";
		var isStorageAvailable = require("../helpers/isStorageAvailable");
		var SESSION_STORAGE = require("../constants").sessionStorage;
		module.exports = function(appMeasurement) {
			if (!isStorageAvailable(SESSION_STORAGE)) {
				return
			}
			appMeasurement.performanceTiming = function(v) {
				var s = this;
				if (v) s.ptv = v;
				if (typeof performance != "undefined") {
					if (performance.timing.loadEventEnd > 0) {
						s.performanceWrite()
					}
					if (performance.timing.loadEventEnd == 0) {
						s.pi = setInterval(function() {
							s.performanceWrite()
						}, 250)
					}
					if (!s.ptc || s.linkType == "e") {
						s.performanceRead()
					} else {
						s.rfe();
						s[s.ptv] = ""
					}
				}
			};
			appMeasurement.performanceWrite = function() {
				var s = this;
				if (performance.timing.loadEventEnd > 0) clearInterval(s.pi);
				try {
					if (s.c_r("s_ptc") == "" && performance.timing.loadEventEnd > 0) {
						try {
							var pt = performance.timing;
							var pta = "";
							pta = s.performanceCheck(pt.fetchStart, pt.navigationStart);
							pta += "^^" + s.performanceCheck(pt.domainLookupStart, pt.fetchStart);
							pta += "^^" + s.performanceCheck(pt.domainLookupEnd, pt.domainLookupStart);
							pta += "^^" + s.performanceCheck(pt.connectEnd, pt.connectStart);
							pta += "^^" + s.performanceCheck(pt.responseStart, pt.connectEnd);
							pta += "^^" + s.performanceCheck(pt.responseEnd, pt.responseStart);
							pta += "^^" + s.performanceCheck(pt.domInteractive, pt.domLoading);
							pta += "^^" + s.performanceCheck(pt.domContentLoadedEventEnd, pt.domInteractive);
							pta += "^^" + s.performanceCheck(pt.domComplete, pt.domContentLoadedEventEnd);
							pta += "^^" + s.performanceCheck(pt.loadEventStart, pt.domLoading);
							pta += "^^" + s.performanceCheck(pt.loadEventEnd, pt.loadEventStart);
							pta += "^^" + s.performanceCheck(pt.loadEventEnd, pt.navigationStart);
							s.c_w("s_ptc", pta);
							if (sessionStorage && navigator.cookieEnabled && s.ptv != "undefined") {
								var pe = performance.getEntries();
								var tempPe = "";
								for (var i = 0; i < pe.length; i++) {
									tempPe += "!";
									tempPe += pe[i].name.indexOf("?") > -1 ? pe[i].name.split("?")[0] : pe[i].name;
									tempPe += "|" + (Math.round(pe[i].startTime) / 1e3).toFixed(1) + "|" + (Math.round(pe[i].duration) / 1e3).toFixed(1) + "|" + pe[i].initiatorType
								}
								sessionStorage.setItem("s_pec", tempPe)
							}
						} catch (err) {
							return
						}
					}
				} catch (err) {
					return
				}
			};
			appMeasurement.performanceCheck = function(a, b) {
				if (a >= 0 && b >= 0) {
					if (a - b < 6e4 && a - b >= 0) {
						return ((a - b) / 1e3).toFixed(3)
					} else {
						return 600
					}
				}
			};
			appMeasurement.performanceRead = function() {
				var s = this;
				if (performance.timing.loadEventEnd > 0) clearInterval(s.pi);
				var cv = s.c_r("s_ptc");
				if (s.pte) {
					var ela = s.pte.split(",")
				}
				if (cv != "") {
					var cva = s.split(cv, "^^");
					if (cva[1] != "") {
						for (var x = 0; x < ela.length - 1; x++) {
							s.events = s.apl(s.events, ela[x] + "=" + cva[x], ",", 2)
						}
					}
					s.events = s.apl(s.events, ela[ela.length - 1], ",", 2)
				}
				s.linkTrackEvents = s.apl(s.linkTrackEvents, s.pte, ",", 2);
				s.c_w("s_ptc", "", 0);
				if (sessionStorage && navigator.cookieEnabled && s.ptv != "undefined") {
					s[s.ptv] = sessionStorage.getItem("s_pec");
					sessionStorage.setItem("s_pec", "", 0)
				} else {
					s[s.ptv] = "sessionStorage Unavailable"
				}
				s.ptc = true
			};
			appMeasurement.rfe = function() {
				var s = this;
				var ea = s.split(s.events, ",");
				var pta = s.split(s.pte, ",");
				try {
					for (x in pta) {
						s.events = s.rfl(s.events, pta[x]);
						s.contextData["events"] = s.events
					}
				} catch (e) {
					return
				}
			};
			appMeasurement.rfl = function(l, v, d1, d2, ku) {
				var s = this,
					R = new Array,
					C = "",
					d1 = !d1 ? "," : d1,
					d2 = !d2 ? "," : d2,
					ku = !ku ? 0 : 1;
				if (!l) return "";
				L = l.split(d1);
				for (i = 0; i < L.length; i++) {
					if (L[i].indexOf(":") > -1) {
						C = L[i].split(":");
						C[1] = C[0] + ":" + C[1];
						L[i] = C[0]
					}
					if (L[i].indexOf("=") > -1) {
						C = L[i].split("=");
						C[1] = C[0] + "=" + C[1];
						L[i] = C[0]
					}
					if (L[i] != v && C) R.push(C[1]);
					else if (L[i] != v) R.push(L[i]);
					else if (L[i] == v && ku) {
						ku = 0;
						if (C) R.push(C[1]);
						else R.push(L[i])
					}
					C = ""
				}
				return s.join(R, {
					delim: d2
				})
			}
		}
	}, {
		"../constants": 167,
		"../helpers/isStorageAvailable": 168
	}],
	180: [function(require, module, exports) {
		"use strict";
		module.exports = function(appMeasurement) {
			appMeasurement.manageVars = function(c, l, f) {
				var s = this,
					vl, la, vla;
				l = l ? l : "";
				f = f ? f : 1;
				if (!s[c]) return false;
				vl = "pageName,purchaseID,channel,server,pageType,campaign,state,zip,events,products,transactionID";
				for (var n = 1; n < 76; n++) vl += ",prop" + n;
				for (var n = 1; n < 251; n++) vl += ",eVar" + n;
				for (n = 1; n < 6; n++) vl += ",hier" + n;
				for (n = 1; n < 4; n++) vl += ",list" + n;
				for (n in s.contextData) vl += ",contextData." + n;
				if (l && (f == 1 || f == 2)) {
					if (f == 1) vl = l.replace("['", ".").replace("']", "");
					if (f == 2) {
						la = l.split(",");
						vla = vl.split(",");
						vl = "";
						for (var x in la) {
							if (la[x].indexOf("contextData") > -1) {
								lax = la[x].split("'");
								la[x] = "contextData." + lax[1]
							}
							for (var y in vla)
								if (la[x] == vla[y]) vla[y] = ""
						}
						for (var y in vla) vl += vla[y] ? "," + vla[y] : ""
					}
					s.pt(vl, ",", c, 0);
					return true
				} else if (l == "" && f == 1) {
					s.pt(vl, ",", c, 0);
					return true
				} else return false
			};
			appMeasurement.clearVars = function(t) {
				var s = this;
				if (t.indexOf("contextData") == -1) s[t] = "";
				else if (t.indexOf("contextData") > -1) {
					var c = t.substring(t.indexOf(".") + 1);
					s.contextData[c] = ""
				}
			};
			appMeasurement.lowercaseVars = function(t) {
				var s = this;
				if (t != "events" && t.indexOf("contextData") == -1 && s[t]) {
					s[t] = s[t].toString();
					if (s[t].indexOf("D=") != 0) s[t] = s[t].toLowerCase()
				} else if (t.indexOf("contextData") > -1) {
					var c = t.substring(t.indexOf(".") + 1);
					if (s.contextData[c]) {
						s.contextData[c] = s.contextData[c].toString();
						s.contextData[c] = s.contextData[c].toLowerCase()
					}
				}
			};
			appMeasurement.pt = function(x, d, f, a) {
				var s = this,
					t = x,
					z = 0,
					y, r;
				while (t) {
					y = t.indexOf(d);
					y = y < 0 ? t.length : y;
					t = t.substring(0, y);
					r = s[f](t, a);
					if (r) return r;
					z += y + d.length;
					t = x.substring(z, x.length);
					t = z < x.length ? t : ""
				}
				return ""
			};
			appMeasurement.join = new Function("v", "p", "" + "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back" + ":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0" + ";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el" + "se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
			appMeasurement.apl = new Function("L", "v", "d", "u", "" + "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a." + "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas" + "e()));}}if(!m)L=L?L+d+v:v;return L");
			appMeasurement.split = new Function("l", "d", "" + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" + "++]=l.substring(0,i);l=l.substring(i+d.length);}return a")
		}
	}, {}],
	181: [function(require, module, exports) {
		"use strict";
		var appMeasurement = require("./appmeasurement-setup/AppMeasurement");
		module.exports = {
			init: appMeasurement.init,
			getInstance: appMeasurement.getInstance,
			ActivityMapCollection: appMeasurement.ActivityMapCollection
		}
	}, {
		"./appmeasurement-setup/AppMeasurement": 182
	}],
	182: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Object/assign");
		var appMeasurement = require("@marcom/appmeasurement-wrapper");
		var appMeasurementAccount = require("./config/account");
		var setDefaults = require("./config/defaults");
		var app;
		var initDefaults = {
			force: false
		};

		function init(options) {
			options = Object.assign({}, initDefaults, options);
			if (!app || options.force === true) {
				var bucket = options.bucket || "";
				app = window.s = appMeasurement.init(appMeasurementAccount(bucket));
				appMeasurement.plugins.init(app);
				setDefaults(app, options)
			}
			return app
		}

		function getInstance() {
			return app
		}
		module.exports = {
			init: init,
			getInstance: getInstance,
			ActivityMapCollection: appMeasurement.ActivityMapCollection
		}
	}, {
		"./config/account": 183,
		"./config/defaults": 184,
		"@marcom/ac-polyfills/Object/assign": 139,
		"@marcom/appmeasurement-wrapper": 165
	}],
	183: [function(require, module, exports) {
		"use strict";

		function appMeasurementAccount(bucket) {
			var s_account = "";
			if (typeof bucket === "string") {
				s_account = bucket
			}
			if (document.location.search && s_account && s_account.indexOf("applestoreww") === -1) {
				var dls = document.location.search;
				if (dls.indexOf("?cid=AOS-") > -1 || dls.indexOf("&cid=AOS-") > -1) {
					s_account += ",applestoreww"
				}
			}
			return s_account
		}
		module.exports = appMeasurementAccount
	}, {}],
	184: [function(require, module, exports) {
		"use strict";
		var appMeasurementPlugins = require("../plugin/appMeasurementPlugins");
		var appMeasurementServers = require("./server");
		var browserHelper = require("./helper/browser");

		function setDefaults(appMeasurement, options) {
			var internalFilters = options.linkInternalFilters ? "/" + options.linkInternalFilters : "";

			function resetCookie(cookieName, expires) {
				var date = new Date;
				var defaultExpirationDate = new Date(date.setFullYear(date.getFullYear() + 2));
				var expirationDate = expires || defaultExpirationDate;
				var cookieValue = appMeasurement.c_r(cookieName);
				if (cookieValue) {
					try {
						appMeasurement.c_w(cookieName, cookieValue, expirationDate)
					} catch (e) {}
				}
			}
			if (typeof appMeasurement.acAnalytics !== "object") {
				appMeasurement.acAnalytics = {}
			}
			appMeasurement.acAnalytics.version = options.acAnalyticsVersion;
			appMeasurement.pageName = options.pageName || "";
			appMeasurement.currencyCode = "USD";
			appMeasurement.trackDownloadLinks = true;
			appMeasurement.trackExternalLinks = true;
			appMeasurement.trackInlineStats = true;
			appMeasurement.useForcedLinkTracking = true;
			appMeasurement.forcedLinkTrackingTimeout = 100;
			appMeasurement.linkDownloadFileTypes = "zip,wav,mp3,doc,pdf,xls,dmg,sit,pkg,exe,m4a,rss,xml,extz,safariextz,ibooks";
			appMeasurement.linkInternalFilters = "tel:,mailto:,javascript:,apple.com" + internalFilters + ",apple.com/media,apple.com/105";
			appMeasurement.linkLeaveQueryString = false;
			appMeasurement.linkTrackVars = "campaign";
			appMeasurement.linkTrackEvents = "None";
			appMeasurement._isSafari = browserHelper.isSafari(appMeasurement);
			if (browserHelper.isSafariTopSitesPreview(appMeasurement) === true) {
				appMeasurement.t = function() {
					return ""
				}
			}
			resetCookie("s_vnum_n2_us");
			var tmpDate = new Date;
			tmpDate.setDate(tmpDate.getDate() - 1);
			resetCookie("s_pv", tmpDate);
			appMeasurement.eVar54 = document.location.href;
			appMeasurement.eVar49 = document.referrer;
			appMeasurement.usePlugins = true;
			appMeasurement.doPlugins = appMeasurementPlugins;
			appMeasurement.trackingServer = appMeasurementServers.getTrackingServer();
			appMeasurement.trackingServerSecure = appMeasurementServers.getSecureTrackingServer();
			appMeasurement.dc = appMeasurementServers.getDataCenterId();
			appMeasurement.pte = "event220,event221,event222,event223,event224,event225,event226,event227,event228,event229,event230,event231,event232";
			appMeasurement.ptc = false
		}
		module.exports = setDefaults
	}, {
		"../plugin/appMeasurementPlugins": 187,
		"./helper/browser": 185,
		"./server": 186
	}],
	185: [function(require, module, exports) {
		"use strict";

		function isSafariTopSitesPreview() {
			if (navigator && navigator.loadPurpose && navigator.loadPurpose === "preview") {
				return true
			}
			return false
		}

		function isSafari(appMeasurement) {
			return false
		}
		module.exports = {
			isSafariTopSitesPreview: isSafariTopSitesPreview,
			isSafari: isSafari
		}
	}, {}],
	186: [function(require, module, exports) {
		"use strict";
		var production = ["www.apple.com", "images.apple.com", "movies.apple.com", "ssl.apple.com", "search.apple.com", "partner-relay.apple.com"];

		function getTrackingServer() {
			return _isProduction() ? "metrics.apple.com" : location.hostname
		}

		function getSecureTrackingServer() {
			return _isProduction() ? "securemetrics.apple.com" : location.hostname
		}

		function getDataCenterId() {
			return 112
		}

		function _isProduction() {
			var hostname = window.location.host;
			if (production.indexOf(hostname) > -1) {
				return true
			}
			return false
		}
		module.exports = {
			getTrackingServer: getTrackingServer,
			getSecureTrackingServer: getSecureTrackingServer,
			getDataCenterId: getDataCenterId
		}
	}, {}],
	187: [function(require, module, exports) {
		"use strict";
		var plpChannel = require("./helper/plpChannel");
		var cleanPageName = require("./helper/cleanPageName");
		var osDetect = require("./helper/osDetect");
		var percentPageViewed = require("./helper/percentPageViewed");
		var clickTimer = require("./helper/clickTimer");
		var isOutgoingLink = require("./helper/isOutgoingLink");
		var specialExitLinks = require("./helper/specialExitLinks");
		var isUserSignedIn = require("./helper/isUserSignedIn");
		var acAnalyticsVersion = require("./helper/acAnalyticsVersion");
		var passiveTracker = require("./helper/passiveTracker");
		var getUsrExpDataFromAB = require("./helper/getUsrExpDataFromAB");
		var pageTitle;
		var AC_ANALYTICS_PREFIX = "ac";

		function appMeasurementPlugins(appMeasurement) {
			if (!appMeasurement.tcall && appMeasurement.linkObject && appMeasurement.linkObject.tagName === "A") {
				if (appMeasurement.linkType === "e" && !isOutgoingLink(appMeasurement)) {
					appMeasurement.linkURL = "";
					appMeasurement.linkType = ""
				}
				if (appMeasurement.linkObject.classList.contains("ac-gn-link-bag")) {
					if (typeof pageTitle === "undefined") {
						pageTitle = document.querySelector("meta[property=analytics-track]")
					}
					if (pageTitle && pageTitle.content) {
						appMeasurement.linkName = appMeasurement.prop3 = pageTitle.content.toLowerCase() + " - bag";
						appMeasurement.linkType = "o";
						appMeasurement.l = appMeasurement.linkObject;
						appMeasurement.acAnalytics.ct_li = true;
						appMeasurement.eVar1 = appMeasurement.pageName + " | global nav | bag";
						appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "eVar1", ",", 1);
						appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "prop3", ",", 1);
						appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "eVar49", ",", 1);
						appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "eVar54", ",", 1);
						appMeasurement.A = function(appMeasurement) {
							appMeasurement.N = 0;
							appMeasurement.linkTrackVars = "";
							appMeasurement.eVar1 = "";
							appMeasurement.prop3 = ""
						}.bind(null, appMeasurement)
					}
				}
				appMeasurement.linkHandler(specialExitLinks, "e");
				if (appMeasurement.linkType !== "e" && appMeasurement.linkObject.hasAttribute("data-analytics-exit-link")) {
					appMeasurement.linkType = "e";
					appMeasurement.linkName = appMeasurement.linkObject.getAttribute("data-analytics-exit-link");
					if (appMeasurement.linkTrackEvents) {
						appMeasurement.linkTrackEvents = ""
					}
					if (appMeasurement.linkTrackVars) {
						appMeasurement.linkTrackVars = ""
					}
				}
			}
			var tlcall = !!appMeasurement.linkType;
			if (typeof cleanPageName === "function") {
				cleanPageName(appMeasurement)
			}
			if (navigator && navigator.platform) {
				if (window.devicePixelRatio >= 1.5) {
					appMeasurement.prop5 = navigator.platform + " 2x"
				} else {
					appMeasurement.prop5 = navigator.platform
				}
			}
			var tempVar1 = appMeasurement.getQueryParam("ref");
			if (tempVar1 && appMeasurement.tcall) {
				appMeasurement.referrer = tempVar1
			} else if (tempVar1 && !appMeasurement.tcall) {
				appMeasurement.referrer = ""
			}
			if (!appMeasurement.campaign) {
				appMeasurement.campaign = appMeasurement.getQueryParam("cid");
				if (appMeasurement.campaign.match(/OAS-.+?-DOMAINS-/i)) {
					var tempVar0 = "http://" + appMeasurement.campaign.replace(/OAS-.+?-DOMAINS-/i, "");
					appMeasurement.referrer = appMeasurement.tcall ? tempVar0 : ""
				}
			}
			var version = acAnalyticsVersion(appMeasurement);
			if (version) {
				appMeasurement.server = AC_ANALYTICS_PREFIX + "-" + version
			}
			appMeasurement.campaign = appMeasurement.getValOnce(appMeasurement.campaign, "s_campaign", 0);
			appMeasurement.prop6 = !appMeasurement.prop6 && appMeasurement.getQueryParam("cp") && appMeasurement.pageName ? 'D="' + appMeasurement.getQueryParam("cp").toLowerCase() + ": " + appMeasurement.pageName + '"' : appMeasurement.prop6;
			appMeasurement.prop11 = appMeasurement.getQueryParam("sr");
			if (!appMeasurement.d.URL.match(/\/channel\//) && !appMeasurement.prop11 && appMeasurement.c_r("s_3p")) {
				appMeasurement.prop11 = appMeasurement.c_r("s_3p");
				appMeasurement.c_w("s_3p", "", -1)
			}
			appMeasurement.eVar7 = !appMeasurement.eVar7 ? appMeasurement.getQueryParam("aid") : "";
			appMeasurement.eVar7 = appMeasurement.getValOnce(appMeasurement.eVar7, "s_var_7", 0);
			if (appMeasurement.eVar2) {
				appMeasurement.events = appMeasurement.apl(appMeasurement.events, "event6", ",", 1)
			}
			if (!appMeasurement.d.URL.match(/apple.com\/(\w{2}|befr|benl|chfr|chde|asia|lae)\/search\//) && !appMeasurement.d.URL.match(/apple.com\/search\//) && (appMeasurement.d.referrer.match(/apple.com\/(\w{2}|befr|benl|chfr|chde|asia|lae)\/search\//) || appMeasurement.d.referrer.match(/apple.com\/search\//))) {
				appMeasurement.eVar2 = appMeasurement.d.referrer.match(/\/support\//) ? "acs: " : appMeasurement.d.referrer.match(/\/store\//) ? "aos: " : "www: ";
				if (appMeasurement.d.referrer.match(/apple.com\/(\w{2}|befr|benl|chfr|chde|asia|lae)\/search/)) {
					appMeasurement.eVar2 += appMeasurement.getQueryParam("q", "", appMeasurement.d.referrer).replace(/\+/g, " ");
					var geo = appMeasurement.d.referrer.match(/\/(\w{2}|befr|benl|chfr|chde|asia|lae)\//i);
					appMeasurement.eVar2 += " (" + geo[0].replace(/\//g, "") + ")"
				} else {
					appMeasurement.eVar2 += appMeasurement.getQueryParam("q", "", appMeasurement.d.referrer).replace(/\+/g, " ") + " (us)"
				}
			}
			if (appMeasurement.prop11 === "em" && appMeasurement.tcall) {
				appMeasurement.referrer = "imap://chatterbox.com"
			}
			if (appMeasurement.prop11 === "app" && appMeasurement.tcall) {
				appMeasurement.referrer = "file://fromApp"
			}
			if (document.referrer && document.referrer.indexOf("apple.com/startpage/") > -1 && appMeasurement.tcall) {
				appMeasurement.referrer = "news://startpage.com";
				appMeasurement._1_referrer = 1
			}
			if (typeof percentPageViewed === "function" && appMeasurement.tcall) {
				percentPageViewed(appMeasurement)
			}
			appMeasurement.prop32 = appMeasurement.eVar32 = appMeasurement.getQueryParam("psid");
			if (appMeasurement.prop32 || appMeasurement.c_r("s_sid")) {
				var e = new Date;
				var ct = e.getTime();
				e.setTime(ct + 63072e4);
				if (appMeasurement.prop32) {
					appMeasurement.c_w("s_psid", appMeasurement.prop32, e)
				} else {
					appMeasurement.c_w("s_psid", appMeasurement.c_r("s_sid"), e)
				}
				appMeasurement.c_w("s_sid", "", -1)
			}
			if (!appMeasurement.prop32 && !appMeasurement.c_r("s_pathLength")) {
				appMeasurement.prop32 = appMeasurement.c_r("s_psid")
			}
			appMeasurement.linkLeaveQueryString = true;
			var pageURL = appMeasurement.linkURL;
			if (appMeasurement.linkType === "d" && pageURL) {
				if (pageURL.match(/\.rss|\.xml/)) {
					appMeasurement.eVar16 = appMeasurement.prop16 = "sign ups"
				} else {
					appMeasurement.eVar11 = appMeasurement.pageName + " - " + pageURL.substring(pageURL.lastIndexOf("/") + 1, pageURL.length);
					appMeasurement.eVar16 = appMeasurement.prop16 = "downloads";
					appMeasurement.events = appMeasurement.apl(appMeasurement.events, "event5", ",", 1);
					appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "eVar11", ",", 1);
					appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "events", ",", 1);
					appMeasurement.linkTrackEvents = appMeasurement.apl(appMeasurement.linkTrackEvents, "event5", ",", 1)
				}
				appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "eVar16", ",", 1);
				appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "prop16", ",", 1)
			}
			appMeasurement.linkLeaveQueryString = false;
			if (typeof osDetect === "function") {
				osDetect(appMeasurement)
			}
			if (appMeasurement.pageName && appMeasurement.pageName.match(/feedback - thank you/)) {
				appMeasurement.prop16 = appMeasurement.eVar16 = "feedback"
			}
			appMeasurement.linkLeaveQueryString = true;
			appMeasurement.linkHandler("rss~ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/|rss~rss.support.apple.com");
			if (appMeasurement.linkName === "rss") {
				appMeasurement.eVar16 = appMeasurement.prop16 = "sign ups";
				appMeasurement.apl(appMeasurement.linkTrackVars, "eVar16,prop16", ",", 1)
			}
			appMeasurement.linkLeaveQueryString = false;
			if (typeof clickTimer === "function") {
				clickTimer(appMeasurement)
			}
			if (appMeasurement.tcall) {
				if (typeof appMeasurement.performanceTiming === "function") {
					appMeasurement.performanceTiming()
				}
			}
			if (typeof plpChannel === "function") {
				plpChannel(appMeasurement)
			}
			var docLang;
			if (document && document.documentElement.lang) {
				docLang = document.documentElement.lang
			} else {
				docLang = "n/a"
			}
			appMeasurement.eVar14 = docLang;
			if (tlcall) {
				appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "eVar14", ", ", 1)
			}
			if (isUserSignedIn(appMeasurement)) {
				if (tlcall) {
					appMeasurement.linkTrackEvents = appMeasurement.apl(appMeasurement.linkTrackEvents, "event209", ",", 1);
					appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "events", ",", 1)
				}
				appMeasurement.events = appMeasurement.apl(appMeasurement.events, "event209", ",", 1)
			}
			appMeasurement.eVar4 = "D=pageName";
			if (tlcall) {
				appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "eVar4", ", ", 1)
			}
			if (appMeasurement.tcall) {
				appMeasurement.eVar97 = "s.t-p"
			} else if (tlcall) {
				appMeasurement.eVar97 = "s.tl-" + appMeasurement.linkType;
				appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "eVar97", ",", 1)
			}
			if (appMeasurement.tcall) {
				if (appMeasurement.c_r("as_pvi")) {
					appMeasurement.prop51 = appMeasurement.c_r("as_pvi")
				}
			} else if (tlcall) {
				if (appMeasurement.linkTrackVars.indexOf("prop51") === -1 && typeof appMeasurement.prop51 !== "undefined") {
					appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "prop51", ",", 1)
				}
			}
			if (appMeasurement.tcall) {
				var userAbTestData = getUsrExpDataFromAB(appMeasurement);
				if (userAbTestData) {
					appMeasurement.eVar57 = userAbTestData
				}
			}
			appMeasurement.hier1 = appMeasurement.channel ? appMeasurement.channel : "";
			appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "hier1", ", ", 1);
			appMeasurement.linkTrackVars = appMeasurement.linkTrackVars.replace(new RegExp(" ", "g"), "");
			var eVar10 = appMeasurement.getQueryParam("afid");
			if (eVar10) {
				appMeasurement.eVar10 = appMeasurement.getValOnce(eVar10, "s_afc")
			}
			appMeasurement.prop4 = appMeasurement.prop4 ? appMeasurement.prop4 : "D=g";
			var retailCookie = appMeasurement.c_r("rtsid") || appMeasurement.c_r("rtsidInt") || null;
			if (retailCookie) {
				if (!appMeasurement.events) {
					appMeasurement.events = "event37"
				} else {
					if (typeof appMeasurement.events === "string" && appMeasurement.events.indexOf("event37") === -1) {
						appMeasurement.events += ",event37"
					}
				}
			}
			passiveTracker(appMeasurement);
			appMeasurement.manageVars("lowercaseVars", "purchaseID,pageType,events,products,transactionID", 2);
			appMeasurement.tcall = false
		}
		module.exports = appMeasurementPlugins
	}, {
		"./helper/acAnalyticsVersion": 188,
		"./helper/cleanPageName": 189,
		"./helper/clickTimer": 190,
		"./helper/getUsrExpDataFromAB": 191,
		"./helper/isOutgoingLink": 192,
		"./helper/isUserSignedIn": 193,
		"./helper/osDetect": 194,
		"./helper/passiveTracker": 195,
		"./helper/percentPageViewed": 196,
		"./helper/plpChannel": 197,
		"./helper/specialExitLinks": 198
	}],
	188: [function(require, module, exports) {
		"use strict";

		function acAnalyticsVersion(appMeasurement) {
			return appMeasurement.acAnalytics.version
		}
		module.exports = acAnalyticsVersion
	}, {}],
	189: [function(require, module, exports) {
		"use strict";

		function cleanPageName(appMeasurement) {
			if (appMeasurement.pageName) {
				var pgEscaped = escape(appMeasurement.pageName);
				pgEscaped = pgEscaped.replace(/(%u2018|%u2019|%u02BC|%u02BD)/g, "%27");
				pgEscaped = pgEscaped.replace(/(%u201C|%u201D|%E2%80%9C|%E2%80%9D)/g, "%22");
				pgEscaped = pgEscaped.replace(/(%09|%0A|%0D)/g, "");
				appMeasurement.pageName = unescape(pgEscaped)
			}
		}
		module.exports = cleanPageName
	}, {}],
	190: [function(require, module, exports) {
		"use strict";
		var isOutgoingLink = require("./isOutgoingLink");
		var COUNT_PROP = "eVar93";
		var TIME_PROP = "eVar94";
		var TIME_EVENT = "event210";
		var TIME_EVENT_COUNTER = "event246";
		var INVALID_EVENT = "event242";
		var COOKIE = "s_aca_ct";
		var CLICK_TIME_THRESHOLD = 900;
		var TIME_SINCE_LOAD = _setTimeSinceLoad();
		var CLICK_TIMER_LINK_INTERACTION = "ct_li";
		var CLICK_TIMER_COUNT = "ct_c";

		function trackClickTime(appMeasurement) {
			if (appMeasurement.linkName) {
				if (appMeasurement.linkName.indexOf("v@e") !== -1 || appMeasurement.linkName.indexOf("v@sk") !== -1 || appMeasurement.linkName.indexOf("v@m") !== -1) {
					return
				}
			}
			if (appMeasurement.tcall) {
				_track(appMeasurement);
				return
			}
			if (isOutgoingLink(appMeasurement) && !(appMeasurement.linkType === "e" || appMeasurement.linkType === "d")) {
				_storeData(appMeasurement);
				return
			}
			if (appMeasurement.acAnalytics[CLICK_TIMER_LINK_INTERACTION] && appMeasurement.linkName) {
				_track(appMeasurement);
				return
			}
			if (appMeasurement.linkObject) {
				if (appMeasurement.linkType === "d" || appMeasurement.linkType === "e") {
					_track(appMeasurement);
					return
				}
				appMeasurement.acAnalytics[CLICK_TIMER_LINK_INTERACTION] = true
			}
		}

		function _track(appMeasurement) {
			var data;
			if (appMeasurement.tcall) {
				data = _fetchData(appMeasurement)
			} else {
				_incrementClickTimer(appMeasurement);
				data = _createDataObject(appMeasurement);
				appMeasurement.acAnalytics[CLICK_TIMER_LINK_INTERACTION] = false
			}
			if (data) {
				_applyData(appMeasurement, data)
			}
		}

		function _storeData(appMeasurement) {
			_incrementClickTimer(appMeasurement);
			var data = JSON.stringify(_createDataObject(appMeasurement));
			var expirationDate = new Date;
			expirationDate.setTime(expirationDate.getTime() + 18e5);
			appMeasurement.Util.cookieWrite(COOKIE, data, expirationDate)
		}

		function _fetchData(appMeasurement) {
			var data;
			if (appMeasurement.Util.cookieRead(COOKIE)) {
				data = JSON.parse(appMeasurement.Util.cookieRead(COOKIE));
				appMeasurement.Util.cookieWrite(COOKIE, "");
				return data
			}
		}

		function _applyData(appMeasurement, data) {
			if (data[COUNT_PROP]) {
				appMeasurement[COUNT_PROP] = data[COUNT_PROP]
			}
			if (data[TIME_PROP]) {
				appMeasurement[TIME_PROP] = data[TIME_PROP]
			}
			if (data.events) {
				_applyEventsData(appMeasurement, data.events)
			}
			if (!appMeasurement.tcall) {
				if (typeof data.linkTrackEvents !== "undefined") {
					data.linkTrackEvents.forEach(function(event) {
						appMeasurement.linkTrackEvents = appMeasurement.apl(appMeasurement.linkTrackEvents, event, ",", 1)
					})
				}
				if (typeof data.linkTrackVars !== "undefined") {
					data.linkTrackVars.forEach(function(prop) {
						appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, prop, ",", 1)
					})
				}
			}
		}

		function _createDataObject(appMeasurement) {
			var time = _getTimeSinceLoad();
			var data = {
				linkTrackVars: [],
				linkTrackEvents: [],
				events: []
			};
			if (time !== null) {
				data.events.push(TIME_EVENT_COUNTER);
				data.events.push(TIME_EVENT + "=" + time);
				data.linkTrackVars.push(TIME_PROP);
				data.linkTrackEvents.push(TIME_EVENT, TIME_EVENT_COUNTER);
				data[TIME_PROP] = time
			} else {
				data.events.push(INVALID_EVENT);
				data.linkTrackEvents.push(INVALID_EVENT)
			}
			data[COUNT_PROP] = appMeasurement.acAnalytics[CLICK_TIMER_COUNT];
			data.linkTrackVars.push(COUNT_PROP);
			data.linkTrackVars.push("events");
			return data
		}

		function _incrementClickTimer(appMeasurement) {
			if (appMeasurement.acAnalytics[CLICK_TIMER_COUNT]) {
				appMeasurement.acAnalytics[CLICK_TIMER_COUNT]++
			} else {
				appMeasurement.acAnalytics[CLICK_TIMER_COUNT] = 1
			}
		}

		function _applyEventCounter(appMeasurement, event) {
			if (!event) {
				return
			}
			appMeasurement.events = appMeasurement.apl(appMeasurement.events, event, ",", 1)
		}

		function _applyEventWithValue(appMeasurement, event) {
			var trackedEvents;
			var trackedEventsKeys = {};
			var eventName;
			if (!event) {
				return
			}
			eventName = event.split("=")[0];
			trackedEvents = appMeasurement.events.split(",");
			trackedEvents.forEach(function(trackedEvent, index) {
				trackedEventsKeys[trackedEvent.split("=")[0]] = index
			});
			if (isNaN(trackedEventsKeys[eventName])) {
				appMeasurement.events = appMeasurement.apl(appMeasurement.events, event, ",", 1);
				return
			}
			trackedEvents.splice(trackedEventsKeys[eventName], 1, event);
			appMeasurement.events = trackedEvents.join(",")
		}

		function _applyEventsData(appMeasurement, events) {
			if (typeof appMeasurement.events !== "string" && typeof appMeasurement.events !== "undefined") {
				return
			}
			events.forEach(function(event) {
				if (event.indexOf("=") === -1) {
					_applyEventCounter(appMeasurement, event)
				} else {
					_applyEventWithValue(appMeasurement, event)
				}
			})
		}

		function _getTimeSinceLoad() {
			if (TIME_SINCE_LOAD) {
				return _calculateTimeSinceLoad()
			} else {
				TIME_SINCE_LOAD = _setTimeSinceLoad();
				return _getTimeSinceLoadAfterLoad()
			}
		}

		function _getTimeSinceLoadAfterLoad() {
			if (TIME_SINCE_LOAD) {
				return _calculateTimeSinceLoad()
			} else {
				return null
			}
		}

		function _calculateTimeSinceLoad() {
			if (!TIME_SINCE_LOAD) {
				return null
			}
			var time = ((Date.now() - TIME_SINCE_LOAD) / 1e3).toFixed(2);
			if (isNaN(time)) {
				return null
			}
			time = parseFloat(time);
			if (time >= CLICK_TIME_THRESHOLD || time <= 0) {
				return null
			}
			return time
		}

		function _setTimeSinceLoad() {
			if (window && window.performance && window.performance.timing && window.performance.timing.domInteractive) {
				return window.performance.timing.domInteractive
			}
		}
		module.exports = trackClickTime
	}, {
		"./isOutgoingLink": 192
	}],
	191: [function(require, module, exports) {
		"use strict";

		function getUsrExpDataFromAB(appMeasurement) {
			if (!window || !window.AB) {
				return
			}
			if (!appMeasurement.tcall) {
				return
			}
			if (!isAbTestActive()) {
				return
			}
			var targetData = getDataFromTarget();
			if (targetData) {
				return targetData.eVar57 ? targetData.eVar57 : "no tests found"
			}
		}

		function getDataFromTarget() {
			if (window.AB) {
				return window.AB.targetData
			}
		}

		function isAbTestActive() {
			return window.AB && window.AB.isAbTestActive
		}
		module.exports = getUsrExpDataFromAB
	}, {}],
	192: [function(require, module, exports) {
		"use strict";

		function isOutgoingLink(appMeasurement) {
			var href;
			var link;
			if (!appMeasurement.linkObject) {
				return false
			}
			link = appMeasurement.linkObject;
			if (!link || link.tagName !== "A" || !link.href) {
				return false
			}
			href = link.getAttribute("href").trim();
			if (href.charAt(0) === "#" || href.indexOf("javascript:") === 0 || href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0) {
				return false
			}
			if (link.hasAttribute("data-analytics-id") || link.hasAttribute("data-analytics-intrapage-link")) {
				return false
			}
			if (link.classList.contains("ac-gn-link-search") || link.classList.contains("ac-gn-link-bag")) {
				return false
			}
			return true
		}
		module.exports = isOutgoingLink
	}, {}],
	193: [function(require, module, exports) {
		"use strict";

		function isUserSignedIn(appMeasurement) {
			return appMeasurement.Util.cookieRead("as_cn")
		}
		module.exports = isUserSignedIn
	}, {}],
	194: [function(require, module, exports) {
		"use strict";

		function osDetect(appMeasurement) {
			var userAgent = navigator.userAgent;
			var match;
			if (userAgent.match(/windows/i)) {
				appMeasurement.prop9 = "windows";
				return
			}
			if (userAgent.match(/(kindle|silk-accelerated)/i)) {
				if (userAgent.match(/(kindle fire|silk-accelerated)/i)) {
					appMeasurement.prop9 = "kindle fire"
				} else {
					appMeasurement.prop9 = "kindle"
				}
				return
			}
			if (userAgent.match(/(iphone|ipod|ipad)/i)) {
				match = userAgent.match(/OS [0-9_]+/i);
				appMeasurement.prop9 = "i" + match[0].replace(/_/g, ".");
				return
			}
			if (userAgent.match(/android/i)) {
				appMeasurement.prop9 = userAgent.match(/android [0-9]\.?[0-9]?\.?[0-9]?/i);
				return
			}
			if (userAgent.match(/webos\/[0-9\.]+/i)) {
				match = userAgent.match(/webos\/[0-9]\.?[0-9]?\.?[0-9]?/i);
				appMeasurement.prop9 = match[0].replace(/webos\//i, "web os ");
				return
			}
			if (userAgent.match(/rim tablet os [0-9\.]+/i)) {
				match = userAgent.match(/rim tablet os [0-9]\.?[0-9]?\.?[0-9]?/i);
				appMeasurement.prop9 = match[0].replace(/rim tablet os/i, "rim os ");
				return
			}
			if ((userAgent.match(/firefox\/(\d{2}||[3-9])/i) || userAgent.match(/AppleWebKit\//)) && userAgent.match(/Mac OS X [0-9_\.]+/)) {
				var matches = userAgent.match(/[0-9_\.]+/g);
				matches = matches[1].split(/_|\./);
				appMeasurement.prop9 = matches[0] + "." + matches[1] + ".x";
				return
			}
			var mv = userAgent.match(/AppleWebKit\/\d*/i) && userAgent.match(/AppleWebKit\/\d*/i).toString().replace(/AppleWebKit\//i, "");
			if (mv > 522) {
				appMeasurement.prop9 = "10.5.x"
			} else if (mv > 400) {
				appMeasurement.prop9 = "10.4.x"
			} else if (mv > 99) {
				appMeasurement.prop9 = "10.3.x"
			} else if (mv > 80) {
				appMeasurement.prop9 = "10.2.x"
			} else {
				appMeasurement.prop9 = "mac unknown or non-safari"
			}
		}
		module.exports = osDetect
	}, {}],
	195: [function(require, module, exports) {
		"use strict";
		var appMeasurement;
		var SESSION_STORAGE_KEY = "s_aca_ptd";
		var options = {};

		function track(appMeasurementObject) {
			var data;
			appMeasurement = appMeasurementObject;
			if (!isTrackingCall() || !isStorageAvailable("sessionStorage")) {
				return
			}
			data = getData();
			if (data) {
				setOptions(data);
				prepareAppMeasurement(data)
			}
		}

		function setOptions(data) {
			options.overwriteAppMeasurementValues = data.options && data.options.overwriteAppMeasurementValues === true ? true : false;
			options.overwriteAppMeasurementEvents = data.options && data.options.overwriteAppMeasurementEvents === false ? false : true;
			delete data.options
		}

		function isTrackingCall() {
			var isMicroEvent = typeof appMeasurement.linkType === "string" && appMeasurement.linkType.length > 0;
			return isMicroEvent || isPageTrackingCall()
		}

		function isPageTrackingCall() {
			return appMeasurement.tcall
		}

		function getData() {
			var data = sessionStorage.getItem(SESSION_STORAGE_KEY);
			if (!data) {
				return
			}
			try {
				return data = JSON.parse(data)
			} catch (e) {
				return
			}
		}

		function prepareAppMeasurement(data) {
			if (data.events && typeof data.events === "string") {
				setEventsData(data.events);
				delete data.events
			}
			setVarData(data);
			sessionStorage.removeItem(SESSION_STORAGE_KEY)
		}

		function setEventsData(events) {
			var eventWasApplied = false;
			var trackedEvents = getCurrentTrackedEvents();
			var currentEvents = getCurrentEvents();
			events.split(",").forEach(function(event) {
				var eventData = event.split("=");
				var eventName = eventData[0];
				var eventValue = eventData[1];
				var duplicateEvent = null;
				var eventAlreadyTracked;
				var shouldTrack;
				if (!isPageTrackingCall() && trackedEvents) {
					eventAlreadyTracked = trackedEvents.indexOf(eventName) !== -1
				}
				currentEvents.forEach(function(item) {
					if (item.eventName === eventName) {
						duplicateEvent = item;
						if (isPageTrackingCall()) {
							eventAlreadyTracked = true
						}
					}
				});
				currentEvents.push({
					eventName: eventName,
					eventValue: eventValue
				});
				shouldTrack = options.overwriteAppMeasurementEvents === false && eventAlreadyTracked ? false : true;
				if (shouldTrack) {
					if (duplicateEvent) {
						removeCurrentlyTrackedDuplicateEvent(duplicateEvent)
					}
					appMeasurement.events = appMeasurement.apl(appMeasurement.events, event, ",", 1);
					if (!eventWasApplied) {
						eventWasApplied = true
					}
					if (!isPageTrackingCall()) {
						appMeasurement.linkTrackEvents = appMeasurement.apl(appMeasurement.linkTrackEvents, eventName, ",", 1)
					}
				}
			});
			if (eventWasApplied) {
				appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, "events", ",", 1)
			}
		}

		function getCurrentTrackedEvents() {
			if (appMeasurement.linkTrackEvents && typeof appMeasurement.linkTrackEvents === "string") {
				return appMeasurement.linkTrackEvents.split(",")
			}
		}

		function getCurrentEvents() {
			var events = [];
			if (appMeasurement.events) {
				events = appMeasurement.events.split(",").map(function(event) {
					var eventData = event.split("=");
					return {
						eventName: eventData[0],
						eventValue: eventData[1]
					}
				})
			}
			return events
		}

		function removeCurrentlyTrackedDuplicateEvent(duplicateEvent) {
			var eventReplacementRegExPattern = duplicateEvent.eventName;
			if (duplicateEvent.eventValue) {
				eventReplacementRegExPattern += "=" + duplicateEvent.eventValue
			}
			eventReplacementRegExPattern = "^(" + eventReplacementRegExPattern + ",+)|(" + eventReplacementRegExPattern + ",+)|(," + eventReplacementRegExPattern + "$)";
			eventReplacementRegExPattern = new RegExp(eventReplacementRegExPattern);
			appMeasurement.events = appMeasurement.events.replace(eventReplacementRegExPattern, "")
		}

		function setVarData(data) {
			var isPropTracked;
			var trackedVars = getCurrentTrackedVars();
			for (var prop in data) {
				if (data.hasOwnProperty(prop)) {
					if (isPageTrackingCall()) {
						isPropTracked = !!appMeasurement[prop]
					} else {
						isPropTracked = trackedVars.indexOf(prop) !== -1;
						if (!isPropTracked) {
							appMeasurement.linkTrackVars = appMeasurement.apl(appMeasurement.linkTrackVars, prop, ",", 1)
						}
					}
					if (options.overwriteAppMeasurementValues || !isPropTracked) {
						appMeasurement[prop] = data[prop]
					}
				}
			}
		}

		function getCurrentTrackedVars() {
			if (appMeasurement.linkTrackVars && typeof appMeasurement.linkTrackVars === "string") {
				return appMeasurement.linkTrackVars.split(",")
			}
		}

		function isStorageAvailable(type) {
			try {
				var storage = window[type];
				var testItem = "acAnalyticsStorageTestItem";
				storage.setItem(testItem, "a");
				storage.removeItem(testItem);
				return true
			} catch (e) {
				return false
			}
		}
		module.exports = track
	}, {}],
	196: [function(require, module, exports) {
		"use strict";

		function percentPageViewed(appMeasurement) {
			var percentPageViewedData;
			if (!appMeasurement.prop17) {
				if (typeof appMeasurement.getPercentPageViewed === "function") {
					percentPageViewedData = appMeasurement.getPercentPageViewed()
				}
				if (percentPageViewedData && percentPageViewedData.length >= 4 && typeof percentPageViewedData[1] !== "undefined") {
					appMeasurement.prop14 = percentPageViewedData[0];
					appMeasurement.prop17 = percentPageViewedData[1] + ":" + percentPageViewedData[2];
					appMeasurement.prop28 = Math.round(percentPageViewedData[3] / 10) * 10
				}
			}
		}
		module.exports = percentPageViewed
	}, {}],
	197: [function(require, module, exports) {
		"use strict";

		function plpChannel(appMeasurement) {
			if ((appMeasurement.pageName && appMeasurement.prop14 && appMeasurement.pageName.toLowerCase() !== appMeasurement.prop14.toLowerCase() || !appMeasurement.prop14) && appMeasurement.tcall) {
				var ch;
				var pathLengthValue;
				var cookieValue = appMeasurement.c_r("s_pathLength");
				var pathLengthArray = cookieValue.indexOf(",") > -1 ? cookieValue.split(",") : [];
				var e = new Date;
				var ct = e.getTime();
				e.setTime(ct + 30 * 60 * 1e3);
				if (appMeasurement.channel) {
					ch = appMeasurement.channel.substring(appMeasurement.channel.indexOf(".") + 1, appMeasurement.channel.length);
					ch = ch.substring(ch.indexOf(".") + 1, ch.length)
				} else {
					ch = "no channel"
				}
				if (pathLengthArray.length !== 0 && pathLengthArray.toString().indexOf(ch + "=") > -1) {
					var pathLengthArraySize = pathLengthArray.length;
					for (var i = 0; i < pathLengthArraySize; i++) {
						if (pathLengthArray[i].toString().indexOf(ch + "=") > -1) {
							pathLengthValue = pathLengthArray[i].split("=");
							++pathLengthValue[1];
							pathLengthArray[i] = pathLengthValue[0] + "=" + pathLengthValue[1];
							appMeasurement.prop48 = pathLengthValue[1]
						}
					}
					appMeasurement.c_w("s_pathLength", pathLengthArray, e)
				} else {
					pathLengthValue = cookieValue + ch + "=" + 1 + ",";
					appMeasurement.c_w("s_pathLength", pathLengthValue, e);
					appMeasurement.prop48 = "1"
				}
			}
		}
		module.exports = plpChannel
	}, {}],
	198: [function(require, module, exports) {
		"use strict";

		function specialExitLinks() {
			var specialExitLinkString = "";
			var specialExitLinkList = [{
				name: "deploy",
				url: "deploy.apple.com"
			}, {
				name: "ade",
				url: "ade.apple.com"
			}, {
				name: "appleteacher",
				url: "appleteacher.apple.com"
			}, {
				name: "ecommerce",
				url: "ecommerce.apple.com"
			}, {
				name: "school",
				url: "school.apple.com"
			}, {
				name: "help",
				url: "help.apple.com"
			}, {
				name: "survey",
				url: "survey.apple.com"
			}, {
				name: "itunespartner",
				url: "itunespartner.apple.com"
			}, {
				name: "investor",
				url: "investor.apple.com"
			}, {
				name: "consultants",
				url: "consultants.apple.com"
			}, {
				name: "itms",
				url: "itms.apple.com"
			}, {
				name: "artists",
				url: "artists.apple.com"
			}, {
				name: "itunes",
				url: "itunes.apple.com"
			}];
			specialExitLinkList.forEach(function(item, index, arr) {
				specialExitLinkString += item.name + "~" + item.url + "|"
			});
			specialExitLinkString = specialExitLinkString.slice(0, -1);
			return specialExitLinkString
		}
		module.exports = specialExitLinks()
	}, {}],
	199: [function(require, module, exports) {
		"use strict";
		var PARAM_ERROR_TEXT = "Error: Expected parameter is missing or has the wrong type";
		var DEFAULT_OPTIONS = {
			trailing: true,
			leading: false
		};

		function debounce(func, wait, options) {
			if (typeof wait !== "number" || typeof func !== "function") {
				throw new TypeError(PARAM_ERROR_TEXT)
			}
			options = Object.assign({}, DEFAULT_OPTIONS, options);
			if (typeof options.trailing !== "boolean" || typeof options.leading !== "boolean") {
				throw new TypeError(PARAM_ERROR_TEXT)
			}
			if (!options.trailing && !options.leading) {
				options.trailing = true
			}
			var timeout = null;
			var callsNumber = 0;

			function debounced() {
				if (options.leading && options.trailing) {
					callsNumber++
				}
				var args = arguments;
				if (timeout === null && options.leading) {
					func.apply(this, args)
				}
				var later = function() {
					timeout = null;
					if (options.leading) {
						if (callsNumber > 1 && options.trailing) {
							func.apply(this, args);
							callsNumber = 0
						}
					} else {
						func.apply(this, args)
					}
				}.bind(this);
				clearTimeout(timeout);
				timeout = setTimeout(later, wait)
			}

			function cancel() {
				clearTimeout(timeout)
			}
			debounced.cancel = cancel;
			return debounced
		}
		module.exports = debounce
	}, {}],
	200: [function(require, module, exports) {
		var process = module.exports = {};
		process.nextTick = function() {
			var canSetImmediate = typeof window !== "undefined" && window.setImmediate;
			var canPost = typeof window !== "undefined" && window.postMessage && window.addEventListener;
			if (canSetImmediate) {
				return function(f) {
					return window.setImmediate(f)
				}
			}
			if (canPost) {
				var queue = [];
				window.addEventListener("message", function(ev) {
					var source = ev.source;
					if ((source === window || source === null) && ev.data === "process-tick") {
						ev.stopPropagation();
						if (queue.length > 0) {
							var fn = queue.shift();
							fn()
						}
					}
				}, true);
				return function nextTick(fn) {
					queue.push(fn);
					window.postMessage("process-tick", "*")
				}
			}
			return function nextTick(fn) {
				setTimeout(fn, 0)
			}
		}();
		process.title = "browser";
		process.browser = true;
		process.env = {};
		process.argv = [];

		function noop() {}
		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;
		process.binding = function(name) {
			throw new Error("process.binding is not supported")
		};
		process.cwd = function() {
			return "/"
		};
		process.chdir = function(dir) {
			throw new Error("process.chdir is not supported")
		}
	}, {}],
	"++O3BW": [function(require, module, exports) {
		module.exports = {
			observer: {
				Audio: require("./ac-analytics/observer/Audio"),
				Click: require("./ac-analytics/observer/Click"),
				Event: require("./ac-analytics/observer/Event"),
				Exit: require("./ac-analytics/observer/Exit"),
				Gallery: require("./ac-analytics/observer/Gallery"),
				Link: require("./ac-analytics/observer/Link"),
				Overlay: require("./ac-analytics/observer/Overlay"),
				Page: require("./ac-analytics/observer/Page"),
				Section: require("./ac-analytics/observer/Section"),
				Video: require("./ac-analytics/observer/Video")
			},
			track: require("./ac-analytics/metricsTracker").trackGeneric,
			passiveTracker: require("./ac-analytics/plugins/appmeasurement/passiveTracker"),
			regions: require("./ac-analytics/regions/regions"),
			createBasicObserverSuite: require("./ac-analytics/factory/basicObserverSuite").create,
			reset: require("./ac-analytics/reset"),
			resetActivityMap: require("@marcom/appmeasurement-setup").ActivityMapCollection.createActivityMapCollection,
			addActivityMapItem: require("@marcom/appmeasurement-setup").ActivityMapCollection.addElToCollection
		}
	}, {
		"./ac-analytics/factory/basicObserverSuite": "eT/lVE",
		"./ac-analytics/metricsTracker": "nHWlaR",
		"./ac-analytics/observer/Audio": "0uVCsT",
		"./ac-analytics/observer/Click": "smIHK0",
		"./ac-analytics/observer/Event": "FP42yW",
		"./ac-analytics/observer/Exit": "G1nVnI",
		"./ac-analytics/observer/Gallery": "7OkBs0",
		"./ac-analytics/observer/Link": "csLHIR",
		"./ac-analytics/observer/Overlay": "ZDCq+L",
		"./ac-analytics/observer/Page": "2ltmNh",
		"./ac-analytics/observer/Section": "ft2q1p",
		"./ac-analytics/observer/Video": "EVr9gK",
		"./ac-analytics/plugins/appmeasurement/passiveTracker": "4LCd3r",
		"./ac-analytics/regions/regions": "DxeItO",
		"./ac-analytics/reset": "DebV0p",
		"@marcom/appmeasurement-setup": 181
	}],
	"@marcom/ac-analytics": [function(require, module, exports) {
		module.exports = require("++O3BW")
	}, {}],
	"@marcom/ac-analytics/Queue": [function(require, module, exports) {
		module.exports = require("ZTQIFU")
	}, {}],
	ZTQIFU: [function(require, module, exports) {
		"use strict";
		var proto;
		var errorHandler = require("./error-handler/ErrorHandler");
		var ac_storage = require("@marcom/ac-storage");
		var STORAGE_KEY = require("./storageKey").analyticsQueue;

		function Queue() {
			this._storage = ac_storage;
			this._arr = [];
			this._length = 0
		}
		proto = Queue.prototype;
		proto.add = function(item) {
			if (!item) {
				errorHandler.log("Queue", "add", item + " is not a valid object")
			}
			if (errorHandler.exception) {
				return
			}
			this._arr.push(item);
			this._updateQueueSize()
		};
		proto.remove = function() {
			if (this.size() > 0) {
				this._arr.shift();
				this._updateQueueSize()
			}
		};
		proto.reset = function() {
			this._arr = [];
			this._length = 0
		};
		proto.peek = function() {
			if (this.size() > 0) {
				return this._arr[0]
			}
		};
		proto.isEmpty = function() {
			return this.size() === 0
		};
		proto.size = function() {
			return this._length
		};
		proto.load = function() {
			var analyticsData = this._storage.getItem(STORAGE_KEY);
			if (Array.isArray(analyticsData)) {
				this._arr = analyticsData;
				this._storage.removeItem(STORAGE_KEY);
				this._updateQueueSize()
			}
		};
		proto.save = function() {
			this._storage.setItem(STORAGE_KEY, this._arr);
			this.reset()
		};
		proto.collect = function() {
			var analyticsQueue = this._arr;
			var analyticsData = this._storage.getItem(STORAGE_KEY);
			if (Array.isArray(analyticsData)) {
				var temp = analyticsData;
				analyticsQueue = temp.concat(analyticsQueue)
			}
			this._storage.setItem(STORAGE_KEY, analyticsQueue);
			this.reset()
		};
		proto.canSave = function() {
			return this._storage.storageAvailable()
		};
		proto._updateQueueSize = function() {
			this._length = this._arr.length
		};
		module.exports = Queue
	}, {
		"./error-handler/ErrorHandler": "yoExqy",
		"./storageKey": "ntdzZF",
		"@marcom/ac-storage": 124
	}],
	"@marcom/ac-analytics/Tracker": [function(require, module, exports) {
		module.exports = require("vBwaVP")
	}, {}],
	vBwaVP: [function(require, module, exports) {
		"use strict";
		var proto;
		require("@marcom/ac-polyfills/Promise");
		var Queue = require("./Queue");
		var plugins = require("./plugins/plugins");
		var translator = require("./translator/translator");
		var errorHandler = require("./error-handler/ErrorHandler");
		var moduleName = "Tracker";

		function Tracker(plugin) {
			if (typeof plugins[plugin] === "function") {
				this.plugin = new plugins[plugin]
			} else {
				errorHandler.log(moduleName, null, 'Could not create a Tracker. "' + plugin + '" is not a valid plugin')
			}
			if (errorHandler.exception) {
				return
			}
			this.paused = false;
			this._queue = new Queue;
			this.trackGeneric = this.trackGeneric.bind(this);
			this.resume()
		}
		proto = Tracker.prototype;
		proto.track = function(request) {
			var translatedRequest;
			if (!request || typeof request !== "object" || !request.type) {
				errorHandler.log(moduleName, "track", request + " is not a valid request object")
			}
			if (errorHandler.exception) {
				return
			}
			translatedRequest = translator.translate(request);
			translatedRequest = this.plugin.translate(translatedRequest);
			this._queue.add(translatedRequest);
			if (this.paused === true) {
				this._queue.collect();
				return
			}
			this._run()
		};
		proto.isPaused = function() {
			return this.paused
		};
		proto.resume = function() {
			this._queue.load();
			var queueSize = this._queue.size();
			if (queueSize === 0) {
				return
			}
			this.paused = false;
			this._run()
		};
		proto._run = function() {
			var promise;
			if (this._queue.size() === 0) {
				return
			}
			var request = this._queue.peek();
			var options = request.options || {};
			if (typeof options.async === "undefined") {
				options.async = true
			}
			if (options.async === false) {
				promise = this.sync(this.send.bind(this))
			} else {
				promise = this.async(this.send.bind(this))
			}
			promise.then(function() {
				if (!this.paused && this._queue.size() > 0) {
					this._run()
				}
			}.bind(this))
		};
		proto.send = function() {
			if (typeof this.plugin.submit !== "function") {
				errorHandler.log(moduleName, "send", "provided plugin does not contain a valid submit method")
			}
			if (errorHandler.exception) {
				return
			}
			if (this._queue.size() === 0) {
				return
			}
			var request = this._queue.peek();
			this.plugin.submit(request);
			this._queue.remove()
		};
		proto.pause = function() {
			if (this.paused === true) {
				return
			}
			if (!this.canPause()) {
				return
			}
			if (this._queue.size() > 0) {
				this._queue.save()
			}
			this.paused = true
		};
		proto.canPause = function() {
			return this._queue.canSave()
		};
		proto.async = function(callback) {
			if (!callback || typeof callback !== "function") {
				errorHandler.log(moduleName, "async", 'Provided callback "' + callback + '" is not a function')
			}
			if (errorHandler.exception) {
				return
			}
			return new Promise(function(resolve, reject) {
				setTimeout(function() {
					callback();
					resolve()
				}, 0)
			})
		};
		proto.sync = function(callback) {
			if (!callback || typeof callback !== "function") {
				errorHandler.log(moduleName, "sync", 'Provided callback "' + callback + '" is not a function')
			}
			if (errorHandler.exception) {
				return
			}
			return new Promise(function(resolve, reject) {
				callback();
				resolve()
			})
		};
		proto.trackGeneric = function(data, options) {
			var request = {
				data: data,
				type: "event",
				options: options || {}
			};
			this.track(request)
		};
		module.exports = Tracker
	}, {
		"./Queue": "ZTQIFU",
		"./error-handler/ErrorHandler": "yoExqy",
		"./plugins/plugins": "kyzDBL",
		"./translator/translator": "eq7uW9",
		"@marcom/ac-polyfills/Promise": 107
	}],
	"@marcom/ac-analytics/constants": [function(require, module, exports) {
		module.exports = require("6L0A63")
	}, {}],
	"6L0A63": [function(require, module, exports) {
		"use strict";
		var versionString = require("../ac-analytics/utils/getVersion");
		var constants = {
			acAnalyticsVersion: versionString,
			sessionStorage: "sessionStorage",
			passiveTrackerStorageKey: "s_aca_ptd"
		};
		module.exports = Object.freeze(constants)
	}, {
		"../ac-analytics/utils/getVersion": "hDaz38"
	}],
	"@marcom/ac-analytics/controller/Touch": [function(require, module, exports) {
		module.exports = require("FmX+Kz")
	}, {}],
	"FmX+Kz": [function(require, module, exports) {
		"use strict";
		var proto;
		var ac_DOMNodes = require("@marcom/ac-dom-nodes");
		var errorHandler = require("../error-handler/ErrorHandler");
		var moduleName = "TouchController";

		function TouchController(element, eventCallback) {
			if (!ac_DOMNodes.isElement(element)) {
				errorHandler.log(moduleName, null, element + " is not a valid DOM element")
			}
			if (typeof eventCallback !== "function") {
				errorHandler.log(moduleName, null, eventCallback + " is not a valid function")
			}
			if (errorHandler.exception) {
				return
			}
			this._element = element;
			this._eventCallback = eventCallback;
			this.addEventListener()
		}
		proto = TouchController.prototype;
		proto.addEventListener = function() {
			this._element.addEventListener("touchstart", this._onTouchStart.bind(this))
		};
		proto.removeEventListener = function() {
			this._element.removeEventListener("touchstart", this._boundOnTouchStart);
			this._element.removeEventListener("touchmove", this._boundOnTouchMove);
			this._element.removeEventListener("touchend", this._boundOnTouchEnd)
		};
		proto._onTouchStart = function(e) {
			this.moved = false;
			this._boundOnTouchMove = this._onTouchMove.bind(this);
			this._boundOnTouchEnd = this._onTouchEnd.bind(this);
			this._element.addEventListener("touchmove", this._boundOnTouchMove);
			this._element.addEventListener("touchend", this._boundOnTouchEnd)
		};
		proto._onTouchMove = function(e) {
			this.moved = true
		};
		proto._onTouchEnd = function(e) {
			this._element.removeEventListener("touchmove", this._boundOnTouchMove);
			this._element.removeEventListener("touchend", this._boundOnTouchEnd);
			if (!this.moved) {
				this._eventCallback(e)
			}
		};
		proto.destroy = function() {
			this.removeEventListener();
			this._element = null;
			this._eventCallback = null;
			this._boundOnTouchStart = null
		};
		module.exports = TouchController
	}, {
		"../error-handler/ErrorHandler": "yoExqy",
		"@marcom/ac-dom-nodes": 10
	}],
	yoExqy: [function(require, module, exports) {
		"use strict";
		var proto;
		var ac_console_log = require("@marcom/ac-console/log");
		var messagePrefix = "Analytics";

		function ErrorHandler() {
			this.exception = false;
			this.errors = []
		}
		proto = ErrorHandler.prototype;
		proto.log = function(moduleName, methodName, message) {
			var formattedMessage = this._formatMessage(moduleName, methodName, message);
			this.exception = true;
			this.errors.push({
				instance: moduleName,
				method: methodName,
				message: formattedMessage
			});
			ac_console_log(formattedMessage)
		};
		proto.warn = function(moduleName, methodName, message) {
			var formattedMessage = this._formatMessage(moduleName, methodName, message);
			ac_console_log(formattedMessage)
		};
		proto.report = function(index) {
			var out = "";
			if (typeof index === "number" && this.errors[index]) {
				out = this.errors[index].message;
				ac_console_log(this.errors[index].message)
			} else {
				this.errors.forEach(function(err) {
					out += err.message + "\r\n"
				});
				ac_console_log(out)
			}
			return out
		};
		proto._formatMessage = function(moduleName, methodName, message) {
			var thrower;
			var throwerString = "";
			var separator = " : ";
			var throwerSep;
			if (!!moduleName || !!methodName) {
				throwerSep = moduleName && methodName ? "." : "";
				throwerString = (moduleName || "") + throwerSep + (methodName || "") + separator
			}
			return messagePrefix + separator + throwerString + message
		};
		module.exports = new ErrorHandler
	}, {
		"@marcom/ac-console/log": 3
	}],
	"@marcom/ac-analytics/error-handler/ErrorHandler": [function(require, module, exports) {
		module.exports = require("yoExqy")
	}, {}],
	"@marcom/ac-analytics/factory/basicObserverSuite": [function(require, module, exports) {
		module.exports = require("eT/lVE")
	}, {}],
	"eT/lVE": [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Object/assign");
		var PageObserver = require("../observer/Page");
		var LinkObserver = require("../observer/Link");
		var ClickObserver = require("../observer/Click");
		var SectionObserver = require("../observer/Section");
		var onDocumentReady = require("../onDocumentReady");
		var defaults = {
			page: {},
			link: {
				autoEnable: false
			},
			click: {
				autoEnable: false
			},
			section: {
				autoEnable: false
			}
		};

		function _enableObservers(observers) {
			for (var prop in observers) {
				if (observers.hasOwnProperty(prop)) {
					if (typeof observers[prop].enable === "function") {
						observers[prop].enable()
					}
				}
			}
		}

		function create(options) {
			options = Object.assign({}, defaults, options || {});
			var observers = {
				page: new PageObserver(options.page),
				link: new LinkObserver(options.link),
				click: new ClickObserver(options.click),
				section: new SectionObserver(options.section)
			};
			onDocumentReady(function() {
				_enableObservers(observers)
			});
			return observers
		}
		module.exports = {
			create: create
		}
	}, {
		"../observer/Click": "smIHK0",
		"../observer/Link": "csLHIR",
		"../observer/Page": "2ltmNh",
		"../observer/Section": "ft2q1p",
		"../onDocumentReady": "s+JdTz",
		"@marcom/ac-polyfills/Object/assign": 106
	}],
	"@marcom/ac-analytics/metadata": [function(require, module, exports) {
		module.exports = require("W+q+EN")
	}, {}],
	"W+q+EN": [function(require, module, exports) {
		(function() {
			"use strict";
			var errorHandler = require("./error-handler/ErrorHandler");
			var toArray = require("@marcom/ac-array/toArray");
			var head = document.getElementsByTagName("head")[0];
			var metaTags = toArray(head.getElementsByTagName("meta"));
			var metaPropertyPrefix = "analytics";
			var prefixPattern = "^" + metaPropertyPrefix + "-";
			var patternRegex = new RegExp(prefixPattern);
			var metaObject;
			var initialTimeStamp = Date.now();
			var moduleName = "metadata";

			function _getProductName(metaObject) {
				var analyticsPageTitle = _strToArray(metaObject.track);
				if (!Array.isArray(analyticsPageTitle) || analyticsPageTitle.length === 0) {
					errorHandler.log(moduleName, "_getProductname", '"track" meta tag value is malformed. e.g. "product name - page name"')
				}
				if (errorHandler.exception) {
					return
				}
				return analyticsPageTitle[0].trim()
			}

			function _getPageName(metaObject) {
				if (!metaObject.track || metaObject.track === "") {
					errorHandler.log(moduleName, "_getPageName", '"track" meta tag value is malformed. e.g. "product name - page name"')
				}
				if (metaObject.track.match(/[^\S ]/g)) {
					errorHandler.warn(moduleName, "_getPageName", '"track" meta tag value includes an invalid whitespace character, identified by the following regex: "[^\\S ]"')
				}
				if (errorHandler.exception) {
					return
				}
				return metaObject.track.toLowerCase()
			}

			function _getLocale() {
				var htmlEl = document.documentElement;
				var locale = htmlEl.getAttribute("data-locale") || htmlEl.lang;
				if (!locale) {
					errorHandler.log(moduleName, "_getLocale", "html lang attribute can not be empty")
				}
				if (errorHandler.exception) {
					return
				}
				return locale
			}

			function _metaTagsToObject(tags) {
				tags = _filterMetaTags(tags);
				var metaObject = {};
				tags.forEach(function(tag) {
					var key = _transformPropertyName(tag.getAttribute("property"));
					var value = tag.getAttribute("content");
					metaObject[key] = value
				});
				return metaObject
			}

			function _filterMetaTags(tags) {
				var filtered = tags.filter(function(tag) {
					var propName = tag.getAttribute("property");
					return patternRegex.test(propName)
				});
				return filtered
			}

			function _transformPropertyName(name) {
				var transformed = name.replace(metaPropertyPrefix + "-", "");
				return transformed.replace(/-+(.)?/g, function(match, character) {
					return character ? character.toUpperCase() : ""
				})
			}

			function _augmentMetaObject(metaObject) {
				metaObject.pageName = metaObject.pageName || _getPageName(metaObject);
				metaObject.productName = metaObject.productName || _getProductName(metaObject);
				metaObject.locale = metaObject.locale || _getLocale();
				metaObject.initialTimeStamp = initialTimeStamp;
				return metaObject
			}

			function _strToArray(str, separator) {
				separator = separator || "-";
				if (typeof str !== "string") {
					errorHandler.log(moduleName, "_strToArray", str + " is not a valid string")
				}
				if (errorHandler.exception) {
					return
				}
				return str.split(separator)
			}

			function bundleMetaObject(metaTags) {
				metaObject = _metaTagsToObject(metaTags)
			}

			function getMetadata() {
				return _augmentMetaObject(metaObject)
			}

			function refreshMetadata() {
				metaTags = toArray(head.getElementsByTagName("meta"));
				metaObject = null;
				initialTimeStamp = Date.now();
				bundleMetaObject(metaTags);
				return _augmentMetaObject(metaObject)
			}
			bundleMetaObject(metaTags);
			module.exports = {
				getMetadata: getMetadata,
				refreshMetadata: refreshMetadata
			}
		})()
	}, {
		"./error-handler/ErrorHandler": "yoExqy",
		"@marcom/ac-array/toArray": 1
	}],
	"@marcom/ac-analytics/metricsTracker": [function(require, module, exports) {
		module.exports = require("nHWlaR")
	}, {}],
	nHWlaR: [function(require, module, exports) {
		"use strict";
		var Tracker = require("./Tracker");
		module.exports = new Tracker("appMeasurement");
		module.exports.Tracker = Tracker
	}, {
		"./Tracker": "vBwaVP"
	}],
	"0uVCsT": [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Object/assign");
		var proto;
		var isElement = require("@marcom/ac-dom-nodes/isElement");
		var metricsTracker = require("../metricsTracker");
		var errorHandler = require("../error-handler/ErrorHandler");
		var defaultOptions = {
			mediaEvents: ["play", "ended"],
			dataAttribute: "analytics-audio-id"
		};
		var moduleName = "AudioAnalyticsObserver";

		function AudioAnalyticsObserver(audio, options) {
			if (!audio) {
				errorHandler.log(moduleName, null, audio + " is not a valid audio object")
			}
			defaultOptions.mediaEventCallbacks = {
				ended: this._onEnded.bind(this)
			};
			this.options = Object.assign({}, defaultOptions, options || {});
			if (!Array.isArray(this.options.mediaEvents)) {
				errorHandler.log(moduleName, null, this.options.mediaEvents + " is not a valid media events array")
			}
			this.audio = audio;
			this.tracker = metricsTracker;
			this.defaultTracking = this.track.bind(this);
			this.attachEvents()
		}
		proto = AudioAnalyticsObserver.prototype;
		proto.attachEvents = function() {
			if (errorHandler.exception) {
				return
			}
			var options = this.options;
			var customCallback;
			var mediaEventCallback;
			options.mediaEvents.forEach(function(mediaEvent) {
				customCallback = options.mediaEventCallbacks[mediaEvent];
				mediaEventCallback = typeof customCallback === "function" ? customCallback : this.defaultTracking;
				this.addListener(mediaEvent, mediaEventCallback)
			}.bind(this))
		};
		proto.detachEvents = function() {
			var options = this.options;
			var customCallback;
			var mediaEventCallback;
			options.mediaEvents.forEach(function(mediaEvent) {
				customCallback = options.mediaEventCallbacks[mediaEvent];
				mediaEventCallback = typeof customCallback === "function" ? customCallback : this.defaultTracking;
				this.removeListener(mediaEvent, mediaEventCallback)
			}.bind(this))
		};
		proto.addListener = function(eventName, callback) {
			this.audio.addEventListener(eventName, callback)
		};
		proto.removeListener = function(eventName, callback) {
			this.audio.removeEventListener(eventName, callback)
		};
		proto._onEnded = function(e) {
			this.ended = true;
			this.track(e)
		};
		proto._getAudioId = function(targetEl) {
			return targetEl.getAttribute("data-" + this.options.dataAttribute)
		};
		proto.track = function(e) {
			var data = {};
			data.targetEl = e.target;
			if (!isElement(data.targetEl)) {
				errorHandler.log(moduleName, "track", data.targetEl + " is not a valid DOM element")
			}
			if (errorHandler.exception) {
				return
			}
			data.audioId = this._getAudioId(data.targetEl);
			data.ended = this.ended;
			this.tracker.track({
				type: "audio",
				event: e,
				data: data,
				options: this.options
			})
		};
		proto.destroy = function() {
			this.detachEvents();
			this.options = null;
			this.tracker = null;
			this.audio = null;
			this.defaultTracking = null
		};
		module.exports = AudioAnalyticsObserver
	}, {
		"../error-handler/ErrorHandler": "yoExqy",
		"../metricsTracker": "nHWlaR",
		"@marcom/ac-dom-nodes/isElement": 25,
		"@marcom/ac-polyfills/Object/assign": 106
	}],
	"@marcom/ac-analytics/observer/Audio": [function(require, module, exports) {
		module.exports = require("0uVCsT")
	}, {}],
	smIHK0: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Object/assign");
		var proto;
		var ancestor = require("@marcom/ac-dom-traversal/ancestor");
		var ac_DOMNodes = require("@marcom/ac-dom-nodes");
		var ac_Feature = require("@marcom/ac-feature");
		var metricsTracker = require("../metricsTracker");
		var errorHandler = require("../error-handler/ErrorHandler");
		var EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro;
		var defaultOptions = {
			dataAttribute: "analytics-click",
			titleDataAttribute: "analytics-title",
			autoEnable: true
		};
		var moduleName = "ClickAnalyticsObserver";
		var exitLinkPattern = /^https?:\/\/|^\/\//i;

		function ClickAnalyticsObserver(options) {
			this.options = Object.assign({}, defaultOptions, options || {});
			this.tracker = metricsTracker;
			this.isEnabled = false;
			this._boundOnInteraction = this._onInteraction.bind(this);
			this._elements = null;
			EventEmitterMicro.call(this);
			if (this.options.autoEnable === true) {
				this.enable()
			}
		}
		proto = ClickAnalyticsObserver.prototype = Object.create(EventEmitterMicro.prototype);
		proto.enable = function() {
			if (errorHandler.exception) {
				return
			}
			if (!this.isEnabled) {
				this.addListener();
				this.isEnabled = true;
				this.trigger("enabled")
			}
		};
		proto.addListener = function() {
			document.body.addEventListener("click", this._boundOnInteraction)
		};
		proto.removeListener = function() {
			document.body.removeEventListener("click", this._boundOnInteraction)
		};
		proto._onInteraction = function(e) {
			var targetEl = e.target;
			var linkAncestor;
			if (!targetEl.getAttribute("data-" + this.options.dataAttribute)) {
				linkAncestor = ancestor(targetEl, "[data-" + this.options.dataAttribute + "]");
				if (linkAncestor) {
					targetEl = linkAncestor
				}
			}
			if (targetEl.classList.contains("ac-gn-link-bag")) {
				return
			}
			if (targetEl.hasAttribute("href") && targetEl.tagName === "A" && !targetEl.hasAttribute("data-analytics-intrapage-link")) {
				if (exitLinkPattern.test(targetEl.getAttribute("href"))) {
					return
				}
			}
			if (targetEl.getAttribute("data-" + this.options.dataAttribute)) {
				this.track(e, targetEl)
			}
		};
		proto.track = function(e, targetEl) {
			var data = {};
			if (!ac_DOMNodes.isElement(targetEl)) {
				errorHandler.log(moduleName, "track", targetEl + " is not a valid DOM element")
			}
			if (errorHandler.exception) {
				return
			}
			data.targetEl = targetEl;
			this.tracker.track({
				type: "click",
				event: e,
				data: data,
				options: this.options
			})
		};
		proto.destroy = function() {
			this.removeListener();
			this.options = null;
			this.tracker = null;
			this.isEnabled = null;
			this._boundOnInteraction = null;
			this._elements = null
		};
		module.exports = ClickAnalyticsObserver
	}, {
		"../error-handler/ErrorHandler": "yoExqy",
		"../metricsTracker": "nHWlaR",
		"@marcom/ac-dom-nodes": 10,
		"@marcom/ac-dom-traversal/ancestor": 31,
		"@marcom/ac-event-emitter-micro": 50,
		"@marcom/ac-feature": 66,
		"@marcom/ac-polyfills/Object/assign": 106
	}],
	"@marcom/ac-analytics/observer/Click": [function(require, module, exports) {
		module.exports = require("smIHK0")
	}, {}],
	"@marcom/ac-analytics/observer/Event": [function(require, module, exports) {
		module.exports = require("FP42yW")
	}, {}],
	FP42yW: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Object/assign");
		var proto;
		var errorHandler = require("../error-handler/ErrorHandler");
		var metricsTracker = require("../metricsTracker");
		var defaultOptions = {
			interactionEvents: [],
			interactionEventCallbacks: {}
		};
		var moduleName = "EventAnalyticsObserver";

		function EventAnalyticsObserver(targetObj, options) {
			if (!targetObj || typeof targetObj !== "object" || typeof targetObj.on !== "function" || typeof targetObj.off !== "function") {
				errorHandler.log(moduleName, null, targetObj + " does not appear to be a valid EventEmitter")
			}
			this.options = Object.assign({}, defaultOptions, options || {});
			if (!Array.isArray(this.options.interactionEvents)) {
				errorHandler.log(moduleName, null, this.options.interactionEvents + " is not an array")
			}
			this.tracker = metricsTracker;
			this.targetObj = targetObj;
			this._callbacks = {};
			this.attachEvents()
		}
		proto = EventAnalyticsObserver.prototype;
		proto.attachEvents = function() {
			if (errorHandler.exception) {
				return
			}
			var options = this.options;
			var interactionEventCallback;
			var instanceCallbackName;
			options.interactionEvents.forEach(function(interactionEvent) {
				interactionEventCallback = options.interactionEventCallbacks[interactionEvent];
				interactionEventCallback = typeof interactionEventCallback === "function" ? interactionEventCallback : this.track.bind(this);
				this._callbacks[interactionEvent] = interactionEventCallback;
				this.addListener(interactionEvent, interactionEventCallback)
			}, this)
		};
		proto.detachEvents = function() {
			var options = this.options;
			var instanceCallbackName;
			Object.keys(this._callbacks).forEach(function(callbackName) {
				this.removeListener(callbackName, this._callbacks[callbackName])
			}, this)
		};
		proto.addListener = function(eventType, callback) {
			this.targetObj.on(eventType, callback)
		};
		proto.removeListener = function(eventType, callback) {
			this.targetObj.off(eventType, callback)
		};
		proto.track = function(data) {
			this.tracker.track({
				type: "event",
				data: data,
				options: this.options
			})
		};
		proto.destroy = function() {
			this.detachEvents();
			this.options = null;
			this.tracker = null;
			this.targetObj = null;
			this._callbacks = null
		};
		module.exports = EventAnalyticsObserver
	}, {
		"../error-handler/ErrorHandler": "yoExqy",
		"../metricsTracker": "nHWlaR",
		"@marcom/ac-polyfills/Object/assign": 106
	}],
	G1nVnI: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Object/assign");
		var proto;
		var metricsTracker = require("../metricsTracker");
		var errorHandler = require("../error-handler/ErrorHandler");
		var defaultOptions = {
			async: false
		};

		function ExitAnalyticsObserver(options) {
			this.options = Object.assign({}, defaultOptions, options || {});
			this.tracker = metricsTracker;
			this._boundOnBeforeUnload = this._onBeforeUnload.bind(this);
			this.addExitListener()
		}
		proto = ExitAnalyticsObserver.prototype;
		proto.addExitListener = function() {
			if (errorHandler.exception) {
				return
			}
			if ("onbeforeunload" in window) {
				window.addEventListener("beforeunload", this._boundOnBeforeUnload)
			}
		};
		proto.removeExitListener = function() {
			if ("onbeforeunload" in window) {
				window.removeEventListener("beforeunload", this._boundOnBeforeUnload)
			}
		};
		proto._onBeforeUnload = function(e) {
			var data = {};
			data.exitTimeStamp = e.timeStamp;
			this.tracker.track({
				type: "exit",
				event: e,
				data: data,
				options: this.options
			})
		};
		proto.destroy = function() {
			this.removeExitListener();
			this.options = null;
			this.tracker = null;
			this._boundOnBeforeUnload = null
		};
		module.exports = ExitAnalyticsObserver
	}, {
		"../error-handler/ErrorHandler": "yoExqy",
		"../metricsTracker": "nHWlaR",
		"@marcom/ac-polyfills/Object/assign": 106
	}],
	"@marcom/ac-analytics/observer/Exit": [function(require, module, exports) {
		module.exports = require("G1nVnI")
	}, {}],
	"7OkBs0": [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Object/assign");
		var proto;
		var metricsTracker = require("../metricsTracker");
		var metadata = require("../metadata").getMetadata();
		var errorHandler = require("../error-handler/ErrorHandler");
		var defaultOptions = {
			trackAutoRotate: false,
			beforeUpdateEvent: "willShow",
			afterUpdateEvent: "didShow"
		};
		var moduleName = "GalleryAnalyticsObserver";

		function GalleryAnalyticsObserver(gallery, options) {
			if (!gallery || typeof gallery !== "object") {
				errorHandler.log(moduleName, null, gallery + " is not an object")
			}
			this.options = Object.assign({}, defaultOptions, options || {});
			this.gallery = gallery;
			this.tracker = metricsTracker;
			this.trackedInteractionTypes = [];
			this.outgoingSlideInteractionType = "auto";
			this.incomingSlideTimestamp = metadata.initialTimeStamp;
			this._onUpdate = this._onUpdate.bind(this);
			this._onComplete = this.track.bind(this);
			this.addListener()
		}
		proto = GalleryAnalyticsObserver.prototype;
		proto.addListener = function() {
			if (errorHandler.exception) {
				return
			}
			if (this.options.beforeUpdateEvent) {
				this.gallery.on(this.options.beforeUpdateEvent, this._onUpdate)
			}
			if (this.options.afterUpdateEvent) {
				this.gallery.on(this.options.afterUpdateEvent, this._onComplete)
			}
		};
		proto.removeListener = function() {
			if (this.options.beforeUpdateEvent) {
				this.gallery.off(this.options.beforeUpdateEvent, this._onUpdate)
			}
			if (this.options.afterUpdateEvent) {
				this.gallery.off(this.options.afterUpdateEvent, this._onComplete)
			}
		};
		proto._createInteractionEvent = function(evt) {
			var interactionEvent = evt.interactionEvent.originalEvent || evt.interactionEvent;
			if (interactionEvent) {
				return interactionEvent = {
					type: interactionEvent.type,
					target: interactionEvent.target,
					srcElement: interactionEvent.srcElement
				}
			}
			return null
		};
		proto._onUpdate = function(d) {
			var interactionEvent;
			this.interactionEvent = null;
			if (d.interactionEvent) {
				this.interactionEvent = this._createInteractionEvent(d)
			}
		};
		proto._getSlideId = function(slide) {
			var slideId = "";
			var length = 0;
			if (slide && Array.isArray(slide)) {
				length = slide.length;
				for (var i = 0; i < length; i++) {
					if (typeof slide[i].getElement === "function" && typeof slide[i].getElementId === "function") {
						var slideElement = slide[i].getElement(),
							customSlideId = slideElement ? slideElement.getAttribute("data-analytics-gallery-item-id") : null;
						if (customSlideId) {
							slideId += customSlideId + "-"
						} else {
							slideId += slide[i].getElementId() + "-"
						}
					}
				}
			}
			return slideId.slice(0, slideId.length - 1)
		};
		proto.track = function(d) {
			if (this.options.trackAutoRotate === false) {
				if (!d.interactionEvent || d.interactionEvent.gallery && d.interactionEvent.gallery === this.gallery) {
					return
				}
			}
			var data = Object.assign({}, d);
			data.interactionEvent = this.interactionEvent || this._createInteractionEvent(d);
			if (!this.options.galleryName) {
				errorHandler.log(moduleName, "track", this.options.galleryName + " is not a valid gallery name")
			}
			if (errorHandler.exception) {
				return
			}
			if (data.incoming && typeof data.incoming.id !== "string") {
				data.incoming.id = this._getSlideId(data.incoming)
			}
			if (data.outgoing && typeof data.outgoing.id !== "string") {
				data.outgoing.id = this._getSlideId(data.outgoing)
			}
			this.outgoingSlideTimestamp = this.incomingSlideTimestamp;
			this.incomingSlideTimestamp = Date.now();
			data.incomingSlideTimestamp = this.incomingSlideTimestamp;
			data.outgoingSlideTimestamp = this.outgoingSlideTimestamp;
			this.tracker.track({
				type: "gallery",
				data: data,
				observer: this,
				options: this.options
			})
		};
		proto.destroy = function() {
			if (!this.gallery) {
				errorHandler.log(moduleName, "destroy", this.gallery + " is not an object")
			}
			if (errorHandler.exception) {
				return
			}
			this.removeListener();
			this.options = null;
			this.tracker = null;
			this.gallery = null;
			this.trackedInteractionTypes = null;
			this.interactionEvent = null
		};
		module.exports = GalleryAnalyticsObserver
	}, {
		"../error-handler/ErrorHandler": "yoExqy",
		"../metadata": "W+q+EN",
		"../metricsTracker": "nHWlaR",
		"@marcom/ac-polyfills/Object/assign": 106
	}],
	"@marcom/ac-analytics/observer/Gallery": [function(require, module, exports) {
		module.exports = require("7OkBs0")
	}, {}],
	"@marcom/ac-analytics/observer/Link": [function(require, module, exports) {
		module.exports = require("csLHIR")
	}, {}],
	csLHIR: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Object/assign");
		var ancestor = require("@marcom/ac-dom-traversal/ancestor");
		var metricsTracker = require("../metricsTracker");
		var errorHandler = require("../error-handler/ErrorHandler");
		var EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro;
		var proto;
		var defaultOptions = {
			dataAttribute: "analytics-link",
			titleDataAttribute: "analytics-title",
			silent: true,
			autoEnable: true
		};

		function LinkAnalyticsObserver(options) {
			this.options = Object.assign({}, defaultOptions, options || {});
			this.tracker = metricsTracker;
			this.isEnabled = false;
			this.defaultTracking = this.track.bind(this);
			EventEmitterMicro.call(this);
			if (this.options.autoEnable === true) {
				this.enable()
			}
		}
		proto = LinkAnalyticsObserver.prototype = Object.create(EventEmitterMicro.prototype);
		proto.enable = function() {
			if (errorHandler.exception) {
				return
			}
			if (!this.isEnabled) {
				this.addListener();
				this.isEnabled = true;
				this.trigger("enabled")
			}
		};
		proto.addListener = function() {
			var element = document.body;
			element.addEventListener("mouseup", this.defaultTracking)
		};
		proto.removeListener = function() {
			var element = document.body;
			element.removeEventListener("mouseup", this.defaultTracking)
		};
		proto.track = function(e) {
			var data = {};
			var targetEl;
			var linkAncestor;
			var element = e.target;
			if (element.nodeName.toLowerCase() === "a") {
				targetEl = element
			}
			if (!targetEl) {
				linkAncestor = ancestor(element, "a");
				if (linkAncestor) {
					targetEl = linkAncestor
				}
			}
			if (targetEl) {
				data.targetEl = targetEl;
				this.tracker.track({
					type: "link",
					event: e,
					data: data,
					options: this.options
				})
			}
		};
		proto.destroy = function() {
			this.removeListener();
			this.options = null;
			this.tracker = null;
			this.isEnabled = null;
			this.defaultTracking = null
		};
		module.exports = LinkAnalyticsObserver
	}, {
		"../error-handler/ErrorHandler": "yoExqy",
		"../metricsTracker": "nHWlaR",
		"@marcom/ac-dom-traversal/ancestor": 31,
		"@marcom/ac-event-emitter-micro": 50,
		"@marcom/ac-polyfills/Object/assign": 106
	}],
	"ZDCq+L": [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Object/assign");
		var proto;
		var metricsTracker = require("../metricsTracker");
		var errorHandler = require("../error-handler/ErrorHandler");
		var defaultOptions = {
			interactionEvents: ["open", "close", "reopen"]
		};
		var moduleName = "OverlayAnalyticsObserver";

		function OverlayAnalyticsObserver(overlay, options) {
			if (!overlay || typeof overlay !== "object" || typeof overlay.on !== "function" || typeof overlay.off !== "function") {
				errorHandler.log(moduleName, null, overlay + " is not an object")
			}
			defaultOptions.interactionEventCallbacks = {
				open: this._onOpen.bind(this),
				close: this._onClose.bind(this),
				reopen: this._onReopen.bind(this)
			};
			this.options = Object.assign({}, defaultOptions, options || {});
			if (!Array.isArray(this.options.interactionEvents)) {
				errorHandler.log(moduleName, null, this.options.interactionEvents + " is not a valid interaction events array")
			}
			this.overlay = overlay;
			this.tracker = metricsTracker;
			this.active = false;
			this.defaultTracking = this.track.bind(this);
			this.attachEvents()
		}
		proto = OverlayAnalyticsObserver.prototype;
		proto.attachEvents = function() {
			if (errorHandler.exception) {
				return
			}
			var options = this.options;
			var customCallback;
			var interactionEventCallback;
			options.interactionEvents.forEach(function(interactionEvent) {
				customCallback = options.interactionEventCallbacks[interactionEvent];
				interactionEventCallback = typeof customCallback === "function" ? customCallback : this.defaultTracking;
				this.addListener(interactionEvent, interactionEventCallback)
			}.bind(this))
		};
		proto.detachEvents = function() {
			var options = this.options;
			var customCallback;
			var interactionEventCallback;
			options.interactionEvents.forEach(function(interactionEvent) {
				customCallback = options.interactionEventCallbacks[interactionEvent];
				interactionEventCallback = typeof customCallback === "function" ? customCallback : this.defaultTracking;
				this.removeListener(interactionEvent, interactionEventCallback)
			}.bind(this))
		};
		proto.addListener = function(eventName, callback) {
			this.overlay.on(eventName, callback)
		};
		proto.removeListener = function(eventName, callback) {
			this.overlay.off(eventName, callback)
		};
		proto._onOpen = function(e) {
			this.active = true;
			this.track(e)
		};
		proto._onReopen = function(e) {
			this.active = true;
			this.track(e)
		};
		proto._onClose = function(e) {
			this.active = false;
			this.track(e)
		};
		proto.track = function(e) {
			var data = this.options.data || {};
			data.active = this.active;
			this.tracker.track({
				type: "overlay",
				event: e,
				data: data,
				options: this.options
			})
		};
		proto.destroy = function() {
			this.detachEvents();
			this.options = null;
			this.tracker = null;
			this.overlay = null;
			this.active = null;
			this.defaultTracking = null
		};
		module.exports = OverlayAnalyticsObserver
	}, {
		"../error-handler/ErrorHandler": "yoExqy",
		"../metricsTracker": "nHWlaR",
		"@marcom/ac-polyfills/Object/assign": 106
	}],
	"@marcom/ac-analytics/observer/Overlay": [function(require, module, exports) {
		module.exports = require("ZDCq+L")
	}, {}],
	"@marcom/ac-analytics/observer/Page": [function(require, module, exports) {
		module.exports = require("2ltmNh")
	}, {}],
	"2ltmNh": [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Object/assign");
		var proto;
		var metricsTracker = require("../metricsTracker");
		var errorHandler = require("../error-handler/ErrorHandler");
		var EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro;
		var defaultOptions = {
			autoEnable: true
		};

		function PageAnalyticsObserver(options) {
			this.options = Object.assign({}, defaultOptions, options || {});
			this.tracker = metricsTracker;
			this.data = this.options.data || {};
			this.isEnabled = false;
			EventEmitterMicro.call(this);
			if (this.options.autoEnable === true) {
				this.enable()
			}
		}
		proto = PageAnalyticsObserver.prototype = Object.create(EventEmitterMicro.prototype);
		proto.enable = function() {
			if (errorHandler.exception) {
				return
			}
			if (!this.isEnabled) {
				this.track();
				this.isEnabled = true;
				this.trigger("enabled")
			}
		};
		proto.track = function(e) {
			var data = this.options.data || {};
			this.tracker.track({
				type: "page",
				event: e,
				data: data,
				options: this.options
			})
		};
		proto.destroy = function() {
			this.options = null;
			this.tracker = null;
			this.data = null;
			this.isEnabled = null
		};
		module.exports = PageAnalyticsObserver
	}, {
		"../error-handler/ErrorHandler": "yoExqy",
		"../metricsTracker": "nHWlaR",
		"@marcom/ac-event-emitter-micro": 50,
		"@marcom/ac-polyfills/Object/assign": 106
	}],
	"@marcom/ac-analytics/observer/Section": [function(require, module, exports) {
		module.exports = require("ft2q1p")
	}, {}],
	ft2q1p: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Object/assign");
		var proto;
		var ElementEngagement = require("@marcom/ac-element-engagement");
		var metricsTracker = require("../metricsTracker");
		var errorHandler = require("../error-handler/ErrorHandler");
		var dataStringToObject = require("../translator/helpers/dataStringToObject");
		var EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro;
		var debounce = require("@marcom/function-utils/debounce");
		var toArray = require("@marcom/ac-array/toArray");
		var moduleName = "SectionAnalyticsObserver";
		ElementEngagement._elementInViewPastThreshold = function(trackedElement) {
			var isInThreshold = false;
			if (trackedElement.engaged) {
				isInThreshold = trackedElement.pixelsInView >= Math.min(this._windowHeight / 3, 325)
			} else {
				isInThreshold = trackedElement.pixelsInView >= Math.min(this._windowHeight / 2.1, 450)
			}
			isInThreshold = isInThreshold || trackedElement.percentInView > trackedElement.inViewThreshold;
			return isInThreshold
		};
		var defaultOptions = {
			dataAttribute: "analytics-section-engagement",
			autoEnable: true,
			customInitialization: false
		};
		var trackedElementDefaults = {
			stopOnEngaged: false,
			timeToEngage: 1e3
		};
		var debounceOptions = {
			leading: true
		};

		function SectionAnalyticsObserver(options) {
			if (ElementEngagement.elements.length > 0) {
				errorHandler.warn(moduleName, "constructor", "element engagement was already tracking elements when a new section observer was created. This could lead to errors in tracking. Make sure to destroy section observer before creating a new one.")
			}
			this.options = Object.assign({}, defaultOptions, options || {});
			this.tracker = metricsTracker;
			this.elementEngagement = ElementEngagement;
			this.isEnabled = false;
			this.sections = [];
			this._listeners = false;
			EventEmitterMicro.call(this);
			if (this.options.autoEnable === true) {
				this.enable()
			}
		}
		proto = SectionAnalyticsObserver.prototype = Object.create(EventEmitterMicro.prototype);
		proto.enable = function() {
			if (errorHandler.exception) {
				return
			}
			if (!this.isEnabled) {
				this._bindMethods();
				if (!this.options.customInitialization) {
					this._loadSections();
					this.initializeTracking()
				}
			}
		};
		proto.initializeTracking = function() {
			if (this.sections && this.sections.length > 0) {
				this._setPosition();
				this.options.elements = this.sections;
				this._addListeners();
				this.elementEngagement.start();
				this.isEnabled = true;
				this.trigger("enabled")
			} else {
				errorHandler.warn(moduleName, "initializeTracking", "initialization of Section Observer had no effect because no valid sections were queued before initialization.")
			}
		};
		proto.initializeSection = function(el) {
			if (!this.sections || this.sections.length === 0) {
				return
			}
			var trackedElement = this._getTrackedElement(el);
			if (trackedElement) {
				this._setPosition();
				if (!this._listeners) {
					this._addListeners()
				}
				if (this.options.elements && Array.isArray(this.options.elements)) {
					this.options.elements.push(el)
				} else {
					this.options.elements = [el]
				}
				trackedElement.tracking = false;
				this.elementEngagement.start(trackedElement)
			}
		};
		proto.addSection = function(el) {
			if (!el || !(el instanceof Element) || this._getTrackedElement(el)) {
				return
			}
			this.sections.push(el);
			var options;
			var dataString = el.getAttribute("data-" + this.options.dataAttribute);
			options = dataStringToObject(dataString);
			options = this._castDataAttributeOptions(options);
			options = Object.assign({}, trackedElementDefaults, options);
			this.elementEngagement.addElement(el, options)
		};
		proto.removeSection = function(el) {
			var trackedElement = this._getTrackedElement(el);
			var index = this.sections.indexOf(el);
			if (index > -1) {
				this.sections.splice(index, 1)
			}
			this.elementEngagement.stop(trackedElement)
		};
		proto.clearSections = function() {
			if (this.elementEngagement) {
				if (this.elementEngagement.elements) {
					this.elementEngagement.elements.forEach(function(trackedElement) {
						this.elementEngagement.stop(trackedElement)
					}.bind(this))
				}
			}
			this.sections = []
		};
		proto.refreshMetrics = function() {
			this.elementEngagement.refreshAllElementMetrics()
		};
		proto.startSectionEngagement = function(el) {
			var trackedElement = this._getTrackedElement(el);
			if (trackedElement) {
				trackedElement.trigger("thresholdenter", trackedElement);
				trackedElement.trigger("engaged", trackedElement);
				this.elementEngagement._engaged.call(this.elementEngagement, trackedElement)
			}
		};
		proto.endSectionEngagement = function(el) {
			var trackedElement = this._getTrackedElement(el);
			if (trackedElement && trackedElement.tracking) {
				trackedElement.thresholdExitTime = Date.now();
				this.elementEngagement.stop(trackedElement);
				this.track({
					element: trackedElement
				})
			}
		};
		proto.pauseElementTracking = function(el) {
			var trackedElement = this._getTrackedElement(el);
			if (trackedElement) {
				trackedElement.isActive = false
			}
		};
		proto.resumeElementTracking = function(el) {
			var trackedElement = this._getTrackedElement(el);
			if (trackedElement) {
				trackedElement.isActive = true
			}
		};
		proto._bindMethods = function() {
			this._onThresholdExit = this._onThresholdExit.bind(this);
			this._onScroll = this._onScroll.bind(this);
			this._onResize = this._onResize.bind(this);
			this.endSectionEngagement = this.endSectionEngagement.bind(this);
			this._getTrackedElement = this._getTrackedElement.bind(this)
		};
		proto._loadSections = function() {
			var sections = toArray(document.querySelectorAll("[data-" + this.options.dataAttribute + "]"));
			sections.forEach(function(section) {
				this.addSection(section)
			}, this)
		};
		proto._setPosition = function() {
			var i;
			var totalSections = this.sections.length;
			for (i = 0; i < totalSections; i += 1) {
				this.sections[i].position = i + 1
			}
		};
		proto._castDataAttributeOptions = function(options) {
			var inViewThreshold;
			var timeToEngage;
			var trackOnce;
			options = Object.assign({}, options);
			Object.keys(options).forEach(function(key) {
				var value = options[key];
				var castValue;
				if (value === "false") {
					castValue = false
				} else if (value === "true") {
					castValue = true
				} else if (!isNaN(parseFloat(value))) {
					castValue = parseFloat(value)
				} else {
					castValue = value
				}
				options[key] = castValue
			});
			return options
		};
		proto._addListeners = function() {
			this._listeners = true;
			this.elementEngagement.on("thresholdexit", this._onThresholdExit);
			window.addEventListener("scroll", this._onScroll);
			window.addEventListener("resize", this._onResize);
			window.addEventListener("orientationchange", this._onResize)
		};
		proto._removeListeners = function() {
			this._listeners = false;
			this.elementEngagement.off("thresholdexit", this._onThresholdExit);
			window.removeEventListener("scroll", this._onScroll);
			window.removeEventListener("resize", this._onResize);
			window.removeEventListener("orientationchange", this._onResize)
		};
		proto._onThresholdExit = function(trackedElement) {
			if (trackedElement.engaged) {
				var data = {
					element: trackedElement
				};
				this.elementEngagement.stop(trackedElement);
				this.track(data)
			}
		};
		proto._onScroll = debounce(function() {
			this.refreshMetrics();
			this._checkForPageEnd()
		}, 300, debounceOptions);
		proto._onResize = debounce(function() {
			this._checkForPageEnd()
		}, 300, debounceOptions);
		proto._checkForPageEnd = function() {
			if (window.pageYOffset >= document.body.scrollHeight - window.innerHeight) {
				this._pageEnd()
			}
		};
		proto._pageEnd = function() {
			var len = this.elementEngagement.elements.length;
			var sectionsInView = [];
			this.elementEngagement.elements.forEach(function(element) {
				if (element.inView && element.inThreshold && element.tracking && element.isActive) {
					sectionsInView.push(element)
				}
			});
			sectionsInView.forEach(function(section) {
				if (section.engaged) {
					this.endSectionEngagement(section)
				} else {
					if (section.has("engaged") === false) {
						section.once("engaged", this.endSectionEngagement)
					}
				}
			}, this)
		};
		proto.track = function(data) {
			this.tracker.track({
				type: "section",
				data: data,
				options: this.options
			})
		};
		proto.destroy = function() {
			if (this.elementEngagement) {
				this.clearSections();
				this.elementEngagement.stop()
			}
			this._removeListeners();
			this.options = null;
			this.elementEngagement = null;
			this.tracker = null;
			this.sections = null
		};
		proto._getTrackedElement = function(trackedElement) {
			if (trackedElement instanceof Element) {
				trackedElement = this.elementEngagement.elements.filter(function(elementTracker) {
					if (elementTracker.element.contains(trackedElement)) {
						return elementTracker
					}
				})[0]
			}
			if (!(trackedElement instanceof EventEmitterMicro)) {
				return null
			}
			return trackedElement
		};
		module.exports = SectionAnalyticsObserver
	}, {
		"../error-handler/ErrorHandler": "yoExqy",
		"../metricsTracker": "nHWlaR",
		"../translator/helpers/dataStringToObject": "P1lp7V",
		"@marcom/ac-array/toArray": 1,
		"@marcom/ac-element-engagement": 48,
		"@marcom/ac-event-emitter-micro": 50,
		"@marcom/ac-polyfills/Object/assign": 106,
		"@marcom/function-utils/debounce": 199
	}],
	"@marcom/ac-analytics/observer/Video": [function(require, module, exports) {
		module.exports = require("EVr9gK")
	}, {}],
	EVr9gK: [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Object/assign");
		var proto;
		var errorHandler = require("../error-handler/ErrorHandler");
		var metricsTracker = require("../metricsTracker");
		var ac_DOMNodes_isElement = require("@marcom/ac-dom-nodes/isElement");
		var debounce = require("@marcom/function-utils/debounce");
		var isHandheld = require("@marcom/ac-feature/isHandheld")();
		var ac_userAgent = require("@marcom/ac-useragent");
		var dataAttributeAnalyticsId = "analytics-id";
		var moduleName = "VideoAnalyticsObserver";
		var videoSegmentBoundries = [0, .1, .25, .5, .75, .9, 1];
		var defaultOptions = {
			mediaEvents: [],
			mediaEventCallbacks: {},
			dataAttribute: dataAttributeAnalyticsId,
			trackCaptions: true,
			trackMilestones: true,
			trackSeeking: true,
			trackDuration: true,
			trackCurrentTime: true,
			streamingVideo: false
		};
		var AC_VIDEO_SUPPORTS_CUSTOM_PLAY_VERSION = "3.6.1";
		var IS_IE = ac_userAgent.browser.ie;
		var IS_MOBILE = ac_userAgent.os.ios || ac_userAgent.os.android;

		function VideoAnalyticsObserver(video, options) {
			if (!video || typeof video !== "object") {
				errorHandler.log(moduleName, null, video + " is not an object")
			}
			this.options = Object.assign({}, defaultOptions, options || {});
			if (this.options.streamingVideo === true) {
				this.options.trackMilestones = false;
				this.options.trackSeeking = false;
				this.options.trackDuration = false;
				this.options.trackCurrentTime = false
			}
			if (!Array.isArray(this.options.mediaEvents)) {
				errorHandler.log(moduleName, null, this.options.mediaEvents + " is not a valid media events array")
			}
			this.tracker = metricsTracker;
			this.video = video;
			this.playCount = 0;
			this.ttShowCount = 0;
			this._callbacks = {};
			this._events = {
				play: "play",
				playing: "playing",
				pause: "pause",
				timeupdate: "timeupdate",
				seeking: "seeking",
				seeked: "seeked",
				ended: "ended",
				texttrackshow: "texttrackshow",
				PlayPromiseResolved: "PlayPromiseResolved"
			};
			this._onWebkitEndFullscreen = this._onWebkitEndFullscreen.bind(this);
			this._onPlayingFromStart = this._onPlayFromStart.bind(this);
			this._getPlayEventName = this._getPlayEventName.bind(this);
			this._initializeInDOM()
		}
		proto = VideoAnalyticsObserver.prototype;
		proto._initializeInDOM = function() {
			if (errorHandler.exception) {
				return
			}
			if (this.options.videoElement) {
				this.videoElement = this.options.videoElement
			} else if (this._isAcVideo()) {
				this._setVideoElement()
			}
			if (this.options.trackMilestones || this.options.trackSeeking) {
				this._setupMilestoneTracking()
			}
			this.attachEvents()
		};
		proto._setupMilestoneTracking = function() {
			this._milestoneTrackingTimeout = null;
			this._hadSeeked = false;
			this._hadJustEnded = false;
			this._milestoneTimeoutDuration = 1e3;
			this._allVideoMilestone = this._createVideoMilestones();
			this._activeVideoMilestones = [];
			this._milestonesSeekedCancel = this._milestonesSeeked.cancel;
			this._bindMilestoneHandlers()
		};
		proto._createVideoMilestones = function() {
			var milestones = [];
			videoSegmentBoundries.forEach(function(item, index) {
				var segment;
				if (index === videoSegmentBoundries.length - 1) {
					return
				}
				milestones.push([item, videoSegmentBoundries[index + 1]])
			});
			return milestones
		};
		proto.attachEvents = function() {
			var options = this.options;
			var mediaEventCallback;
			options.mediaEvents.forEach(function(mediaEvent) {
				mediaEventCallback = options.mediaEventCallbacks[mediaEvent];
				mediaEventCallback = typeof mediaEventCallback === "function" ? mediaEventCallback : this._defaultTracking.bind(this, mediaEvent);
				this._callbacks[mediaEvent] = mediaEventCallback;
				this.addListener(mediaEvent, this._callbacks[mediaEvent])
			}.bind(this));
			this._attachDefaultEvents()
		};
		proto._attachDefaultEvents = function() {
			this._prepareForPlayFromStart();
			this.video.on(this._events.ended, this._onEnded, this);
			this.video.on(this._events.timeupdate, this._onTimeupdate, this);
			if (this.options.trackCaptions === true) {
				this.video.on(this._events.texttrackshow, this._onTextTrackShow, this)
			}
		};
		proto.detachEvents = function() {
			var options = this.options;
			options.mediaEvents.forEach(function(mediaEvent) {
				this.removeListener(mediaEvent, this._callbacks[mediaEvent])
			}.bind(this));
			this._detachPrivateEvents()
		};
		proto._detachPrivateEvents = function() {
			this.video.off(this._events.play, this._onPlayFromStart, this);
			this.video.off(this._events.PlayPromiseResolved, this._onPlayingFromStart, this);
			this.video.off(this._events.ended, this._onEnded, this);
			this.video.off(this._events.timeupdate, this._onTimeupdate, this);
			this.video.off(this._events.texttrackshow, this._onTextTrackShow, this)
		};
		proto._prepareForPlayFromStart = function() {
			if (!this._playBound) {
				if (this.options.trackMilestones || this.options.trackSeeking) {
					this._cleanUpMilestoneTracking()
				}
				if (IS_IE && this._isAcVideo() && this.ended) {
					this.videoElement.addEventListener(this._events.playing, this._onPlayingFromStart)
				} else {
					if (IS_IE) {
						this.video.once(this._events.play, this._onPlayFromStart, this)
					} else {
						this.video.once(this._getPlayEventName(), this._onPlayingFromStart, this)
					}
				}
				this._playBound = true
			}
		};
		proto._onPlayFromStart = function(e) {
			if (this.started) {
				return
			}
			if (this.options.trackMilestones || this.options.trackSeeking) {
				this._setVideoElement();
				if (this.videoElement) {
					if (IS_IE && this._isAcVideo() && this.ended) {
						this.videoElement.removeEventListener(this._events.playing, this._onPlayingFromStart)
					}
					if (isHandheld && !this._isAcVideo()) {
						this.videoElement.addEventListener("webkitendfullscreen", this._onWebkitEndFullscreen)
					}
				}
				this._hadSeeked = false;
				this._refreshMilestones();
				this._startTrackingMilestones()
			}
			this._started = true;
			var data = this._bundleTrackingData(this._events.play, e);
			data.playCount = this.playCount;
			this.track(data);
			this.playCount += 1;
			this._playBound = false
		};
		proto._onWebkitEndFullscreen = function(e) {
			this._started = false;
			if (this.videoElement) {
				this.videoElement.removeEventListener("webkitendfullscreen", this._prepareForPlayFromStart)
			}
			this._prepareForPlayFromStart()
		};
		proto._onTimeupdate = function(e) {
			if (e.currentTime < .1) {
				var paused = true;
				if (this.videoElement && typeof this.videoElement.paused !== undefined) {
					paused = this.videoElement.paused
				}
				if (this.playCount > 0 && this._started && paused) {
					this._started = false;
					this._prepareForPlayFromStart()
				}
			}
		};
		proto._onEnded = function(e) {
			if (this.options.trackMilestones || this.options.trackSeeking) {
				this._milestonesSeekedCancel();
				this._hadJustEnded = true
			}
			this._started = false;
			var data = this._bundleTrackingData("ended", e);
			this.ended = true;
			this.track(data);
			this._prepareForPlayFromStart()
		};
		proto._onTextTrackShow = function(e) {
			var data = this._bundleTrackingData(this._events.texttrackshow, e);
			data.ttShowCount = this.ttShowCount;
			this.track(data);
			this.ttShowCount += 1
		};
		proto._setVideoElement = function() {
			if (!this.video) {
				return
			}
			if (typeof this.video.getMediaElement !== "undefined" && this.video.getMediaElement()) {
				this.videoElement = this.video.getMediaElement();
				return
			}
			if (this.video.videoId) {
				this.videoElement = document.querySelector('[data-analytics-video-id="' + this.video.videoId + '"] video')
			}
		};
		proto._startTrackingMilestones = function() {
			if (!this.videoElement) {
				return
			}
			this._setMilestoneEventListeners();
			this._checkForMilestone()
		};
		proto._bindMilestoneHandlers = function() {
			this._milestonesSeeking = this._milestonesSeeking.bind(this);
			this._milestonesSeeked = this._milestonesSeeked.bind(this);
			this._milestonesPlay = this._milestonesPlay.bind(this);
			this._milestonesPause = this._milestonesPause.bind(this)
		};
		proto._setMilestoneEventListeners = function() {
			this.videoElement.addEventListener(this._events.seeking, this._milestonesSeeking);
			this.videoElement.addEventListener(this._events.seeked, this._milestonesSeeked);
			if (IS_IE || IS_MOBILE) {
				this.videoElement.addEventListener(this._events.play, this._milestonesPlay)
			} else {
				this.videoElement.addEventListener(this._getPlayEventName(), this._milestonesPlay)
			}
			this.videoElement.addEventListener(this._events.pause, this._milestonesPause)
		};
		proto._milestonesSeeking = function(e) {
			if (this._hadSeeked) {
				this._hadSeeked = false
			}
			if (this._milestoneTrackingTimeout) {
				if (this._hadJustEnded && this._isAcVideo()) {
					return
				}
				clearTimeout(this._milestoneTrackingTimeout);
				this._milestoneTrackingTimeout = null
			}
		};
		proto._milestonesSeeked = debounce(function() {
			if (this._hadSeeked) {
				return
			}
			if (this._hadJustEnded && this._isAcVideo()) {
				this._hadJustEnded = false;
				return
			}
			this._hadSeeked = true;
			this._refreshMilestones();
			if (this.videoElement && !this.videoElement.paused) {
				this._milestoneTimeoutDuration = 2500;
				this._checkForMilestone()
			}
		}, 100);
		proto._milestonesPlay = function(e) {
			this._checkForMilestone()
		};
		proto._milestonesPause = function(e) {
			clearTimeout(this._milestoneTrackingTimeout);
			this._milestoneTrackingTimeout = null
		};
		proto._checkForMilestone = function() {
			if (this._milestoneTrackingTimeout) {
				clearTimeout(this._milestoneTrackingTimeout)
			}
			this._milestoneTrackingTimeout = setTimeout(function() {
				var milestone = this._getElligibleMilestone();
				if (milestone) {
					this._trackMilestone(milestone)
				}
				this._milestoneTimeoutDuration = 1e3;
				this._checkForMilestone()
			}.bind(this), this._milestoneTimeoutDuration)
		};
		proto._getElligibleMilestone = function() {
			if (!this.videoElement || this.videoElement.paused || this.videoElement.currentTime === 0 || this.videoElement.readyState < 3 || this.videoElement.duration === 0 || this.videoElement.duration === Infinity || isNaN(this.videoElement.duration)) {
				return
			}
			if (!this._activeVideoMilestones[0]) {
				return
			}
			var currentTimeAsPercentage;
			currentTimeAsPercentage = this.videoElement.currentTime / this.videoElement.duration;
			if (isNaN(currentTimeAsPercentage)) {
				return
			}
			var firstMilestoneBoundry = this._activeVideoMilestones[0][0];
			if (firstMilestoneBoundry > currentTimeAsPercentage) {
				return
			}
			var matchedMilestoneIndex;
			var currentMilestone = this._activeVideoMilestones.filter(function(milestone, index) {
				if (currentTimeAsPercentage >= milestone[0] && currentTimeAsPercentage < milestone[1]) {
					matchedMilestoneIndex = index;
					return true
				}
			});
			if (currentMilestone && currentMilestone[0]) {
				return {
					name: currentMilestone[0][0],
					index: matchedMilestoneIndex
				}
			}
			return
		};
		proto._trackMilestone = function(milestone) {
			var data;
			this._activeVideoMilestones.splice(milestone.index, 1);
			data = this._bundleTrackingData("milestone");
			data.milestone = milestone.name;
			if (this._hadSeeked) {
				data.seeked = true;
				this._hadSeeked = false
			}
			this.track(data)
		};
		proto._cleanUpMilestoneTracking = function() {
			this._hadSeeked = false;
			this._refreshMilestones();
			clearTimeout(this._milestoneTrackingTimeout);
			this._milestoneTrackingTimeout = null;
			if (this.videoElement) {
				this.videoElement.removeEventListener(this._events.seeking, this._milestonesSeeking);
				this.videoElement.removeEventListener(this._events.seeked, this._milestonesSeeked);
				if (IS_IE || IS_MOBILE) {
					this.videoElement.removeEventListener(this._events.play, this._milestonesPlay)
				} else {
					this.videoElement.removeEventListener(this._getPlayEventName(), this._milestonesPlay)
				}
				this.videoElement.removeEventListener(this._events.pause, this._milestonesPause)
			}
		};
		proto._refreshMilestones = function() {
			if (this._hadSeeked) {
				this._activeVideoMilestones = this._allVideoMilestone.slice(0)
			} else {
				this._activeVideoMilestones = this._allVideoMilestone.slice(1)
			}
		};
		proto.addListener = function(eventType, callback) {
			this.video.on(eventType, callback)
		};
		proto.removeListener = function(eventType, callback) {
			this.video.off(eventType, callback)
		};
		proto._getCommonVideoData = function(eventType) {
			var data = {};
			var videoIdFromDataAttr;
			data.targetEl = this.video.el || null;
			videoIdFromDataAttr = data.targetEl && ac_DOMNodes_isElement(data.targetEl) ? data.targetEl.getAttribute("data-" + dataAttributeAnalyticsId) : "";
			data.videoId = videoIdFromDataAttr ? videoIdFromDataAttr : this.video.targetId;
			data.ended = this.ended;
			data.eventType = eventType;
			if (data.eventType === "playing") {
				data.eventType = "play"
			}
			if (this.videoElement) {
				data.duration = NaN;
				data.currentTime = NaN;
				data.src = null;
				if (!isNaN(this.videoElement.duration)) {
					data.duration = this.videoElement.duration
				}
				if (!isNaN(this.videoElement.currentTime)) {
					data.currentTime = this.videoElement.currentTime
				}
				if (typeof this.videoElement.src !== "undefined") {
					data.src = this._getUniqueVideoId(this.videoElement.src)
				}
			}
			if (this._hadSeeked && data.currentTime) {
				data.currentTime = data.currentTime - this._milestoneTimeoutDuration / (this._milestoneTimeoutDuration / 2)
			}
			return data
		};
		proto._getUniqueVideoId = function(videoSrc) {
			var videoId = null;
			videoId = videoSrc.match(/[\w\d]{8}[\w\d\-]+[\w\d\/]+\//g);
			if (videoId && videoId.length) {
				return videoId[0]
			}
			return videoSrc
		};
		proto._bundleTrackingData = function(eventType, e) {
			var commonTrackingData = this._getCommonVideoData(eventType);
			return Object.assign({}, e, commonTrackingData)
		};
		proto._defaultTracking = function(eventType) {
			var data = this._bundleTrackingData(eventType);
			this.track(data)
		};
		proto._isAcVideo = function() {
			return typeof this.video.play === "function"
		};
		proto._getPlayEventName = function() {
			if (this.video.VERSION) {
				var isCustomPlayAvailable = this._isVersionGreaterOrEqual(this.video.VERSION.toArray(), AC_VIDEO_SUPPORTS_CUSTOM_PLAY_VERSION.split("."));
				if (isCustomPlayAvailable) {
					return this._events.PlayPromiseResolved
				} else {
					return this._events.play
				}
			}
			return this._events.play
		};
		proto._isVersionGreaterOrEqual = function(v1, v2) {
			if (!v1.length && !v2.length) {
				return true
			} else if (v1[0] > v2[0]) {
				return true
			} else if (parseInt(v1[0]) === parseInt(v2[0])) {
				return this._isVersionGreaterOrEqual(v1.slice(1), v2.slice(1))
			} else if (v1[0] < v2[0]) {
				return false
			}
		};
		proto.track = function(data) {
			if (data.eventType === "milestone") {
				if (!this.options.trackMilestones && typeof data.seeked === "undefined") {
					return
				}
				if (!this.options.trackSeeking && typeof data.seeked !== "undefined") {
					return
				}
			}
			this.tracker.track({
				type: "video",
				data: data,
				options: this.options
			})
		};
		proto.destroy = function() {
			this.detachEvents();
			this.options = null;
			this.tracker = null;
			this.video = null;
			this.playCount = null;
			this.ttShowCount = null;
			this._events = null;
			this._callbacks = null
		};
		module.exports = VideoAnalyticsObserver
	}, {
		"../error-handler/ErrorHandler": "yoExqy",
		"../metricsTracker": "nHWlaR",
		"@marcom/ac-dom-nodes/isElement": 25,
		"@marcom/ac-feature/isHandheld": 77,
		"@marcom/ac-polyfills/Object/assign": 106,
		"@marcom/ac-useragent": 135,
		"@marcom/function-utils/debounce": 199
	}],
	"@marcom/ac-analytics/onDocumentReady": [function(require, module, exports) {
		module.exports = require("s+JdTz")
	}, {}],
	"s+JdTz": [function(require, module, exports) {
		"use strict";
		var isLoaded = false;

		function onDocumentReady(func) {
			function _documentReadyCallback() {
				if (document.readyState === "complete") {
					func();
					document.removeEventListener("readystatechange", _documentReadyCallback)
				}
			}
			if (document.readyState === "complete") {
				func()
			} else {
				document.addEventListener("readystatechange", _documentReadyCallback)
			}
		}
		module.exports = onDocumentReady
	}, {}],
	"@marcom/ac-analytics/plugins/appmeasurement/appMeasurement": [function(require, module, exports) {
		module.exports = require("cqjrzf")
	}, {}],
	cqjrzf: [function(require, module, exports) {
		"use strict";
		var proto;
		var errorHandler = require("../../error-handler/ErrorHandler");
		var appMeasurementSetup = require("@marcom/appmeasurement-setup");
		var topLevelMetadata = require("../../metadata");
		var formatter = require("./helpers/formatter");
		var metadataHelper = require("./helpers/metadata");
		var translator = require("./translator/translator");
		var submitMethods = require("./submit-methods/submitMethods");
		var templateVarHelper = require("./helpers/templateVar");
		var constants = require("../../constants");
		var countryBucket = ["us", "au|ca|cn|de|es|fr|it|jp|uk", "ap|at|bf|bl|br|ce|cr|dk|fi|hk|ie|in|kr|la|mx|nl|no|nz|pl|pt|ru|se|sg|th|tw|za"];
		var moduleName = "AppMeasurementPlugin";

		function AppMeasurementPlugin() {
			if (errorHandler.exception) {
				return
			}
			this._replaceTemplateVars = this._replaceTemplateVars.bind(this);
			this._initializePlugin(topLevelMetadata.getMetadata())
		}
		proto = AppMeasurementPlugin.prototype;
		proto.reset = function() {
			var options = {
				force: true
			};
			this.clearProps();
			this._initializePlugin(topLevelMetadata.refreshMetadata(), options)
		};
		proto._initializePlugin = function(topLevelMetadataObj, options) {
			this.setPageMetadata(topLevelMetadataObj);
			this.setFormattedValues();
			this.setTemplateVars();
			this.formattedValues.channel = this._replaceTemplateVars(this.formattedValues.channel);
			this.initializeAppMeasurement(topLevelMetadataObj, options)
		};
		proto.initializeAppMeasurement = function(topLevelMetadataObj, options) {
			options = options || {};
			options.bucket = this.getBucket(topLevelMetadataObj);
			options.channel = this.formattedValues.channel;
			options.pageName = this.formattedValues.pageName;
			options.linkInternalFilters = this.getLinkInternalFilters();
			options.acAnalyticsVersion = constants.acAnalyticsVersion;
			appMeasurementSetup.init(options)
		};
		proto.setPageMetadata = function(topLevelMetadataObj) {
			this.pageMetadata = Object.assign({}, topLevelMetadataObj);
			this.pageMetadata.platform = metadataHelper.platform();
			this.pageMetadata.campaign = metadataHelper.campaign(topLevelMetadataObj);
			this.pageMetadata.channel = metadataHelper.channel(topLevelMetadataObj);
			this.pageMetadata.pageName = formatter.lowerCaseString(this.pageMetadata.pageName);
			this.pageMetadata.locale = formatter.lowerCaseString(this.pageMetadata.locale)
		};
		proto.setFormattedValues = function() {
			this.formattedValues = {
				pageName: formatter.pageName(this.pageMetadata.pageName, this.pageMetadata.locale),
				channel: formatter.channel(this.pageMetadata.channel, this.pageMetadata.locale),
				productName: formatter.productName(this.pageMetadata.productName),
				countryCodeFilter: formatter.countryCodeFilter(this.pageMetadata.locale),
				legacyCountryCode: formatter.legacyCountryCode(this.pageMetadata.locale),
				campaign: this.pageMetadata.campaign,
				platform: this.pageMetadata.platform
			}
		};
		proto.setTemplateVars = function() {
			this.templateVarArr = templateVarHelper.set(this.formattedValues, this.pageMetadata)
		};
		proto.clearProps = function() {
			var appMeasurement = appMeasurementSetup.getInstance();
			if (typeof appMeasurement === "object") {
				appMeasurement.manageVars("clearVars");
				appMeasurement.tcall = undefined;
				appMeasurement.pageURL = appMeasurement.g_prop6 = appMeasurement.g_pageURL = appMeasurement.g_channel = ""
			}
		};
		proto.translate = function(request) {
			if (!request || typeof request !== "object") {
				errorHandler.log(moduleName, "translate", "Request param (" + request + ") is not an object")
			}
			if (errorHandler.exception) {
				return
			}
			request = translator.translate(request, this.formattedValues, this.pageMetadata);
			return request
		};
		proto.submit = function(translatedRequest) {
			var options;
			var appMeasurement = appMeasurementSetup.getInstance();
			if (!translatedRequest || typeof translatedRequest !== "object") {
				errorHandler.log(moduleName, "submit", "Request param (" + translatedRequest + ") is not an object")
			}
			if (errorHandler.exception) {
				return
			}
			if (!translatedRequest.type || typeof translatedRequest.type !== "string") {
				errorHandler.log(moduleName, "submit", 'property "type" (' + translatedRequest.type + '") must be a string')
			}
			if (!window.s || typeof window.s !== "object") {
				errorHandler.log(moduleName, "submit", "appMeasurement (" + window.s + ") is not an object")
			}
			if (errorHandler.exception) {
				return
			}
			options = translatedRequest.options || {};
			this._setAppMeasurementProps(translatedRequest);
			if (options.silent !== true) {
				if (translatedRequest.submitMethod && submitMethods[translatedRequest.submitMethod]) {
					submitMethods[translatedRequest.submitMethod](translatedRequest, this.formattedValues, appMeasurement)
				}
			}
		};
		proto.getLinkInternalFilters = function() {
			var value;
			if (this.formattedValues.countryCodeFilter !== "us") {
				value = this.formattedValues.countryCodeFilter
			}
			return value
		};
		proto._setAppMeasurementProps = function(request) {
			var events;
			var properties = request.properties || {};
			var appMeasurement = appMeasurementSetup.getInstance();
			appMeasurement.linkTrackEvents = "";
			request.data.linkTrackVars = request.data.linkTrackVars || [];
			for (var key in properties) {
				if (key === "events") {
					appMeasurement.linkTrackEvents = properties[key].replace(/=([^,]+)/g, "")
				}
				if (key !== "title") {
					request.data.linkTrackVars.push(key);
					appMeasurement[key] = properties[key]
				}
			}
		};
		proto.getBucket = function(topLevelMetadataObj) {
			var countryBucketSize = countryBucket.length;
			var index = 2;
			for (var i = 0; i < countryBucketSize; i++) {
				if (countryBucket[i].indexOf(this.formattedValues.legacyCountryCode) !== -1) {
					index = i;
					break
				}
			}
			var bucketMetaTagValue = metadataHelper.bucket(index, topLevelMetadataObj);
			var bucket = this._replaceTemplateVars(bucketMetaTagValue);
			var bucketProduct = this._replaceTemplateVars(metadataHelper.bucketProduct(index, topLevelMetadataObj));
			var bucketStore = this._replaceTemplateVars(metadataHelper.bucketStore(topLevelMetadataObj));
			return bucket + (!!bucketProduct ? "," + bucketProduct : "") + (!!bucketStore ? "," + bucketStore : "")
		};
		proto._replaceTemplateVars = function(str) {
			return templateVarHelper.translate(str, this.templateVarArr)
		};
		module.exports = AppMeasurementPlugin
	}, {
		"../../constants": "6L0A63",
		"../../error-handler/ErrorHandler": "yoExqy",
		"../../metadata": "W+q+EN",
		"./helpers/formatter": "NN4x8A",
		"./helpers/metadata": "22Qmnb",
		"./helpers/templateVar": "RN5Re0",
		"./submit-methods/submitMethods": "jSBNzh",
		"./translator/translator": "ES/LD6",
		"@marcom/appmeasurement-setup": 181
	}],
	"@marcom/ac-analytics/plugins/appmeasurement/helpers/DOM": [function(require, module, exports) {
		module.exports = require("PI3ocS")
	}, {}],
	PI3ocS: [function(require, module, exports) {
		(function() {
			"use strict";
			var ac_DOMNodes = require("@marcom/ac-dom-nodes");
			var errorHandler = require("../../../error-handler/ErrorHandler");
			var storeUrlPattern = require("../../../regexp/storeUrlPattern");
			var moduleName = "appMeasurementPluginHelper-DOM";

			function isIntraPageLink(element) {
				var href;
				if (!ac_DOMNodes.isElement(element)) {
					return true
				}
				if (!element.href) {
					return true
				}
				href = element.getAttribute("href");
				if (href.charAt(0) === "#" || href.indexOf("javascript:") === 0 || href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0) {
					return true
				}
				if (element.classList.contains("ac-gn-link-search") || element.classList.contains("ac-gn-link-bag")) {
					return true
				}
				if (element.hasAttribute("data-analytics-intrapage-link") || element.hasAttribute("data-analytics-id") || element.hasAttribute("data-analytics-video-id")) {
					return true
				}
				return false
			}

			function isStoreLink(url) {
				if (typeof url !== "string") {
					errorHandler.log(moduleName, "isStoreLink", url + " is not a valid string")
				}
				if (errorHandler.exception) {
					return
				}
				return storeUrlPattern.test(url)
			}

			function getLinkHref(targetEl) {
				return targetEl.getAttribute("href") || ""
			}
			module.exports = {
				isIntraPageLink: isIntraPageLink,
				isStoreLink: isStoreLink,
				getLinkHref: getLinkHref
			}
		})()
	}, {
		"../../../error-handler/ErrorHandler": "yoExqy",
		"../../../regexp/storeUrlPattern": "rjjbV7",
		"@marcom/ac-dom-nodes": 10
	}],
	"@marcom/ac-analytics/plugins/appmeasurement/helpers/formatter": [function(require, module, exports) {
		module.exports = require("NN4x8A")
	}, {}],
	NN4x8A: [function(require, module, exports) {
		(function() {
			"use strict";
			var errorHandler = require("../../../error-handler/ErrorHandler");
			var moduleName = "appMeasurementPluginFormatter";
			var separator = require("./separator");

			function productName(value) {
				return lowerCaseString(value)
			}

			function channel(value, locale) {
				var prefix = "www.";
				var customCountryCodeFormat = {
					"fr-ca": "ca.fr"
				};
				prefix += customCountryCodeFormat[locale] ? customCountryCodeFormat[locale] : legacyCountryCode(locale);
				return prefix + "." + value
			}

			function pageName(originalPageName, locale) {
				var suffix = "";
				var customCountryCodes = {
					"fr-ca": "ca-fr"
				};
				var customCode = customCountryCodes[locale];
				originalPageName = originalPageName || "";
				if (typeof locale === "string") {
					locale = locale.toLowerCase();
					suffix = customCode ? customCode : legacyCountryCode(locale);
					suffix = _decorateCountryCode(suffix)
				}
				return lowerCaseString(originalPageName) + suffix
			}

			function eventString(prefix, suffix) {
				prefix = prefix || "";
				suffix = suffix || "";
				return !!prefix ? prefix + "@" + suffix : suffix
			}

			function countryCodeFilter(locale) {
				var translated;
				var customCountryFilter = {
					"fr-ca": "ca/fr",
					"en-419": "lae",
					"es-419": "la",
					"en-ap": "asia",
					"en-gb": "uk"
				};
				var reversedLocales = ["fr-be", "nl-be", "fr-ch", "de-ch"];
				if (customCountryFilter[locale]) {
					translated = customCountryFilter[locale]
				} else if (reversedLocales.indexOf(locale) >= 0) {
					var localeStr = _transformLocale(locale);
					translated = localeStr.reverse().join("-")
				} else {
					translated = _getCountryCodeFromLocale(locale)
				}
				return translated
			}

			function legacyCountryCode(locale) {
				var legacy;
				var customCountryCode = {
					"fr-be": "bf",
					"nl-be": "bl",
					"fr-ch": "cr",
					"de-ch": "ce",
					"en-419": "la",
					"es-419": "la",
					"en-gb": "uk"
				};
				if (customCountryCode[locale]) {
					legacy = customCountryCode[locale]
				} else {
					legacy = _getCountryCodeFromLocale(locale)
				}
				return legacy
			}

			function cleanProps(properties) {
				var cleanProperties = {};
				if (typeof properties === "object") {
					for (var key in properties) {
						cleanProperties[key] = _sanitize(properties[key])
					}
				}
				return cleanProperties
			}

			function stringReplacer(str, target, replaceWith) {
				var transformedStr = str;
				target = typeof target === "string" ? target : "";
				replaceWith = typeof replaceWith === "string" ? replaceWith : "";
				if (typeof transformedStr === "string") {
					transformedStr = transformedStr.replace(new RegExp(target, "gi"), replaceWith)
				}
				return transformedStr
			}

			function getRegionAncestry(data) {
				var regionAncestry = "";
				if (Array.isArray(data.regionAncestry)) {
					data.regionAncestry.forEach(function(region) {
						regionAncestry += region.name + separator.pipe
					})
				}
				return regionAncestry
			}

			function lowerCaseString(str) {
				if (typeof str === "string") {
					str = str.toLowerCase()
				}
				return str
			}

			function _getCountryCodeFromLocale(locale) {
				if (!locale) {
					errorHandler.log(moduleName, "_getCountryCodeFromLocale", "locale should be a valid string")
				}
				if (errorHandler.exception) {
					return
				}
				var temp = _transformLocale(locale);
				var country;
				if (temp.length > 1) {
					country = lowerCaseString(temp[1])
				}
				return country
			}

			function _decorateCountryCode(countryCode) {
				if (!countryCode) {
					errorHandler.log(moduleName, "_decorateCountryCode", "countryCode should be a valid string")
				}
				if (errorHandler.exception) {
					return
				}
				return " (" + lowerCaseString(countryCode) + ")"
			}
			var whitelist = /[\ì\î\ë\í]/g;

			function _sanitize(value) {
				if (typeof value === "string") {
					value = value.replace(whitelist, "")
				}
				return value
			}

			function _transformLocale(locale) {
				return locale.split(/[-_]/)
			}
			module.exports = {
				productName: productName,
				channel: channel,
				pageName: pageName,
				eventString: eventString,
				countryCodeFilter: countryCodeFilter,
				legacyCountryCode: legacyCountryCode,
				cleanProps: cleanProps,
				stringReplacer: stringReplacer,
				lowerCaseString: lowerCaseString,
				getRegionAncestry: getRegionAncestry
			}
		})()
	}, {
		"../../../error-handler/ErrorHandler": "yoExqy",
		"./separator": "ym5HyM"
	}],
	"@marcom/ac-analytics/plugins/appmeasurement/helpers/metadata": [function(require, module, exports) {
		module.exports = require("22Qmnb")
	}, {}],
	"22Qmnb": [function(require, module, exports) {
		(function() {
			"use strict";
			var errorHandler = require("../../../error-handler/ErrorHandler");
			var sProps = {
				channel: "sChannel",
				campaign: "sCampaign",
				bucket: "sBucket",
				bucketProduct: "sBucketProduct",
				bucketStore: "sBucketStore"
			};
			var moduleName = "AppMeasurementPluginMetadataHelper";

			function channel(topLevelMetadata) {
				var value = topLevelMetadata[sProps.channel];
				if (!value) {
					errorHandler.log(moduleName, "channel", "analytics-s-channel metadata tag must exist")
				}
				if (errorHandler.exception) {
					return
				}
				value = value.toLowerCase().split(" ").join(".");
				return value
			}

			function bucket(bucketIndex, topLevelMetadata) {
				var bucketProp = sProps.bucket + bucketIndex;
				if (!topLevelMetadata[bucketProp]) {
					errorHandler.log(moduleName, "bucket", "analytics-s-bucket-" + bucketIndex + " metadata tag must exist")
				}
				if (errorHandler.exception) {
					return
				}
				return topLevelMetadata[bucketProp]
			}

			function bucketProduct(bucketIndex, topLevelMetadata) {
				var bucketProductProp = sProps.bucketProduct + bucketIndex;
				var bucketProd = topLevelMetadata[bucketProductProp];
				return bucketProd
			}

			function bucketStore(topLevelMetadata) {
				return topLevelMetadata[sProps.bucketStore] || ""
			}

			function campaign(topLevelMetadata) {
				return topLevelMetadata[sProps.campaign] || ""
			}

			function platform() {
				var value = "other";
				var userAgent = navigator.userAgent;
				var patterns = {
					"mobile other": "/(kindle|silk-accelerated|android|webos|rim tablet os|windows phone)/i",
					windows: /windows/i,
					"iphone/ipod touch": /(iphone|ipod)/i,
					ipad: /(ipad)/i,
					Mac: /Mac OS X/i
				};
				for (var key in patterns) {
					if (userAgent.match(patterns[key])) {
						value = key;
						break
					}
				}
				return value
			}
			module.exports = {
				channel: channel,
				bucket: bucket,
				bucketProduct: bucketProduct,
				bucketStore: bucketStore,
				platform: platform,
				campaign: campaign
			}
		})()
	}, {
		"../../../error-handler/ErrorHandler": "yoExqy"
	}],
	ym5HyM: [function(require, module, exports) {
		(function() {
			"use strict";
			module.exports = {
				pipe: " | ",
				hyphen: " - ",
				colon: ": ",
				dot: ".",
				space: " "
			}
		})()
	}, {}],
	"@marcom/ac-analytics/plugins/appmeasurement/helpers/separator": [function(require, module, exports) {
		module.exports = require("ym5HyM")
	}, {}],
	"@marcom/ac-analytics/plugins/appmeasurement/helpers/setNavigationSrc": [function(require, module, exports) {
		module.exports = require("3XwVja")
	}, {}],
	"3XwVja": [function(require, module, exports) {
		(function() {
			"use strict";
			var STORAGE_KEY = require("../../../storageKey").appleMetrics;
			var ac_storage = require("@marcom/ac-storage");
			var ac_feature = require("@marcom/ac-feature");
			var formatter = require("./formatter");
			var separator = require("./separator");
			var DOMHelper = require("./DOM");

			function setNavigationSrc(data, metadata, linkUrl) {
				var navSrcObj = {};
				var navSrcStr;
				var regionAncestry = formatter.getRegionAncestry(data);
				var label = data.targetEl.getAttribute("data-label") || "";
				if (data.region) {
					navSrcObj.region = data.region
				}
				navSrcObj.pageName = metadata.pageName || "";
				navSrcObj.linkText = data.linkText || "";
				navSrcObj.eVar1 = navSrcObj.pageName + separator.pipe + regionAncestry + navSrcObj.linkText;
				navSrcObj.prop57 = metadata.channel || "";
				if (data.region === "search") {
					navSrcObj.prop7 = "www" + separator.colon + label;
					navSrcObj.eVar2 = label;
					navSrcObj.events = "event8"
				}
				navSrcStr = JSON.stringify(navSrcObj);
				if (DOMHelper.isStoreLink(linkUrl) === false) {
					ac_storage.setItem(STORAGE_KEY, navSrcStr)
				} else {
					_navPathInfoHandOff(navSrcStr)
				}
			}

			function _navPathInfoHandOff(navSrcStr) {
				if (ac_feature.localStorageAvailable() === true) {
					window.localStorage.setItem(STORAGE_KEY, navSrcStr)
				}
			}
			module.exports = setNavigationSrc
		})()
	}, {
		"../../../storageKey": "ntdzZF",
		"./DOM": "PI3ocS",
		"./formatter": "NN4x8A",
		"./separator": "ym5HyM",
		"@marcom/ac-feature": 66,
		"@marcom/ac-storage": 124
	}],
	maW9d7: [function(require, module, exports) {
		(function() {
			"use strict";
			var DOMHelper = require("./DOM");

			function async (data) {
				var isIntraPageLink = DOMHelper.isIntraPageLink(data.targetEl);
				var isAsync = true;
				if (!isIntraPageLink) {
					isAsync = false
				}
				return isAsync
			}
			module.exports = {
				async: async
			}
		})()
	}, {
		"./DOM": "PI3ocS"
	}],
	"@marcom/ac-analytics/plugins/appmeasurement/helpers/setOptions": [function(require, module, exports) {
		module.exports = require("maW9d7")
	}, {}],
	"@marcom/ac-analytics/plugins/appmeasurement/helpers/templateVar": [function(require, module, exports) {
		module.exports = require("RN5Re0")
	}, {}],
	RN5Re0: [function(require, module, exports) {
		(function() {
			"use strict";
			var formatter = require("./formatter");

			function set(metadata, originalMetaData) {
				return [{
					name: "{PAGE_NAME}",
					value: metadata.pageName
				}, {
					name: "{PAGE_NAME_NO_LOCALE}",
					value: originalMetaData.pageName
				}, {
					name: "{CHANNEL}",
					value: metadata.channel
				}, {
					name: "{CAMPAIGN}",
					value: metadata.campaign
				}, {
					name: "{COUNTRY_CODE}",
					value: metadata.legacyCountryCode
				}, {
					name: "{COUNTRY_CODE_FILTER}",
					value: metadata.countryCodeFilter
				}, {
					name: "{PRODUCT_NAME}",
					value: metadata.productName
				}, {
					name: "{PLATFORM}",
					value: metadata.platform
				}]
			}

			function translate(str, templateVarArr) {
				if (typeof str === "string") {
					templateVarArr.forEach(function(templateVar) {
						if (templateVar.name && typeof templateVar.name === "string") {
							if (str.toLowerCase().indexOf(templateVar.name.toLowerCase()) > -1) {
								str = formatter.stringReplacer(str, templateVar.name, templateVar.value)
							}
						}
					})
				}
				return str
			}
			module.exports = {
				set: set,
				translate: translate
			}
		})()
	}, {
		"./formatter": "NN4x8A"
	}],
	"@marcom/ac-analytics/plugins/appmeasurement/passiveTracker": [function(require, module, exports) {
		module.exports = require("4LCd3r")
	}, {}],
	"4LCd3r": [function(require, module, exports) {
		"use strict";
		require("@marcom/ac-polyfills/Object/assign");
		var errorHandler = require("../../error-handler/ErrorHandler");
		var moduleName = "PassiveTracker";
		var constants = require("../../constants");
		var replaceTemplateVars = require("../../metricsTracker").plugin._replaceTemplateVars;
		var sessionStorageAvailable = require("@marcom/ac-feature/sessionStorageAvailable");
		var SESSION_STORAGE = constants.sessionStorage;
		var STORAGE_ITEM_KEY = constants.passiveTrackerStorageKey;

		function track(data, options) {
			var dataStr;
			options = options || {};
			if (!sessionStorageAvailable()) {
				errorHandler.log(moduleName, "track", "sessionStorage is not available");
				return
			}
			if (!data || typeof data !== "object" || Array.isArray(data)) {
				errorHandler.log(moduleName, "track", "data must be a valid object");
				return
			}
			options.overwriteStorageItem = options.overwriteStorageItem === true ? true : false;
			options.overwriteStorageItemValues = options.overwriteStorageItemValues === true ? true : false;
			options.overwriteAppMeasurementValues = options.overwriteAppMeasurementValues === true ? true : false;
			options.overwriteAppMeasurementEvents = options.overwriteAppMeasurementEvents === false ? false : true;
			data.options = {};
			if (options.overwriteAppMeasurementValues) {
				data.options.overwriteAppMeasurementValues = true
			}
			if (options.overwriteAppMeasurementEvents === false) {
				data.options.overwriteAppMeasurementEvents = false
			}
			dataStr = JSON.stringify(data);
			if (!dataStr) {
				errorHandler.log(moduleName, "track", "data was invalid because it could not be stringified");
				return
			}
			dataStr = replaceTemplateVars(dataStr);
			storeTrackingData(STORAGE_ITEM_KEY, dataStr, data, options)
		}

		function storeTrackingData(key, dataStr, data, options) {
			var mergedData;
			var existingData = getExistingData(key, options);
			if (!existingData) {
				storeData(dataStr);
				return
			}
			mergedData = createMergedData(data, existingData, options);
			mergedData = JSON.stringify(mergedData);
			mergedData = replaceTemplateVars(mergedData);
			if (mergedData) {
				storeData(mergedData)
			}
		}

		function getExistingData(key, options) {
			var existingData;
			if (options.overwriteStorageItem) {
				return null
			}
			existingData = window[SESSION_STORAGE].getItem(key);
			if (!existingData) {
				return null
			}
			try {
				existingData = JSON.parse(existingData)
			} catch (e) {
				existingData = ""
			}
			if (!existingData || typeof existingData !== "object") {
				return null
			}
			return existingData
		}

		function createMergedData(newData, existingData, options) {
			var mergedData;
			if (options.overwriteStorageItemValues) {
				mergedData = mergeData(existingData, newData)
			} else {
				mergedData = mergeData(newData, existingData)
			}
			mergedData.events = createMergedEventsData(newData.events, existingData.events, options);
			return mergedData
		}

		function createMergedEventsData(newEvents, existingEvents, options) {
			var mergedEvents;
			var newEvents = generateEventsDataObj(newEvents);
			var currentEvents = generateEventsDataObj(existingEvents);
			if (currentEvents) {
				if (newEvents) {
					if (options.overwriteStorageItemValues) {
						mergedEvents = mergeData(currentEvents, newEvents)
					} else {
						mergedEvents = mergeData(newEvents, currentEvents)
					}
				}
			}
			return generateEventsDataStr(mergedEvents)
		}

		function generateEventsDataObj(eventsStr) {
			if (!eventsStr || typeof eventsStr !== "string") {
				return
			}
			var eventsArr = eventsStr.split(",");
			var eventsObj = {};
			eventsArr.forEach(function(event) {
				var eventKey;
				var eventValue;
				var eventArr = event.split("=");
				eventKey = eventArr[0];
				eventValue = true;
				if (eventArr.length === 2) {
					eventValue = eventArr[1]
				}
				eventsObj[eventKey] = eventValue
			});
			return eventsObj
		}

		function generateEventsDataStr(eventsObj) {
			var eventsStr = "";
			var eventsArr = [];
			if (!eventsObj || typeof eventsObj !== "object") {
				return
			}
			for (var event in eventsObj) {
				var eventValue;
				if (eventsObj.hasOwnProperty(event)) {
					eventValue = parseFloat(eventsObj[event]);
					if (!isNaN(eventValue)) {
						eventsArr.push(event + "=" + eventValue)
					} else {
						eventsArr.push(event)
					}
				}
			}
			if (eventsArr.length) {
				eventsStr = eventsArr.join(",")
			}
			return eventsStr
		}

		function mergeData(original, overwrite) {
			return Object.assign(original, overwrite)
		}

		function storeData(value) {
			window[SESSION_STORAGE].setItem(STORAGE_ITEM_KEY, value)
		}
		module.exports = track
	}, {
		"../../constants": "6L0A63",
		"../../error-handler/ErrorHandler": "yoExqy",
		"../../metricsTracker": "nHWlaR",
		"@marcom/ac-feature/sessionStorageAvailable": 84,
		"@marcom/ac-polyfills/Object/assign": 106
	}],
	"CvV/n/": [function(require, module, exports) {
		(function() {
			"use strict";

			function submit(request, metadata, appMeasurement) {
				var url = window.location.href;
				var title = request.properties.title || "";
				var src;
				var img1x1;
				if (typeof appMeasurement === "object") {
					src = _getBasePath(url) + (metadata.countryCodeFilter !== "us" ? metadata.countryCodeFilter : "") + "/b/ss/" + appMeasurement.un + "/" + (appMeasurement.mobile ? "5.1" : "1") + "/" + appMeasurement.version + "/s0" + Date.now() + "?ndh=1&t=" + _getTimestamp() + "&fid=" + appMeasurement.fid + "&g=" + url + "&pageName=" + metadata.pageName + "&cc=" + appMeasurement.currencyCode + "&c3=" + title + "&h1=" + appMeasurement.channel + "&pe=lnk_e&pev2=" + title + "&s=" + appMeasurement.resolution + "&c=" + appMeasurement.colorDepth + "&j=" + appMeasurement.javascriptVersion + "&v=" + appMeasurement.javaEnabled + "&k=" + appMeasurement.cookiesEnabled + "&bw=" + appMeasurement.browserWidth + "&bh=" + appMeasurement.browserHeight + "&p=" + appMeasurement.plugins + "&r=" + appMeasurement.eVar49;
					img1x1 = document.createElement("img");
					img1x1.setAttribute("width", "1");
					img1x1.setAttribute("height", "1");
					img1x1.setAttribute("border", "0");
					img1x1.src = src;
					return img1x1
				}
			}

			function _getBasePath(url) {
				var protocol;
				var host;
				url = url.split("/");
				protocol = url[0];
				host = url[2];
				return protocol + "//" + host + "/"
			}

			function _getTimestamp() {
				var now = new Date;
				return now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " " + now.getDay() + " " + now.getTimezoneOffset()
			}
			module.exports = submit
		})()
	}, {}],
	"@marcom/ac-analytics/plugins/appmeasurement/submit-methods/manual": [function(require, module, exports) {
		module.exports = require("CvV/n/")
	}, {}],
	"@marcom/ac-analytics/plugins/appmeasurement/submit-methods/submitMethods": [function(require, module, exports) {
		module.exports = require("jSBNzh")
	}, {}],
	jSBNzh: [function(require, module, exports) {
		var t = require("./t");
		var tl = require("./tl");
		var manual = require("./manual");
		module.exports = {
			t: t,
			tl: tl,
			manual: manual
		}
	}, {
		"./manual": "CvV/n/",
		"./t": "/ngZv5",
		"./tl": "5XxI5A"
	}],
	"@marcom/ac-analytics/plugins/appmeasurement/submit-methods/t": [function(require, module, exports) {
		module.exports = require("/ngZv5")
	}, {}],
	"/ngZv5": [function(require, module, exports) {
		(function() {
			"use strict";

			function submit(request, metadata, appMeasurement) {
				if (typeof appMeasurement === "object" && typeof appMeasurement.t === "function") {
					appMeasurement.tcall = true;
					appMeasurement.t()
				}
			}
			module.exports = submit
		})()
	}, {}],
	"@marcom/ac-analytics/plugins/appmeasurement/submit-methods/tl": [function(require, module, exports) {
		module.exports = require("5XxI5A")
	}, {}],
	"5XxI5A": [function(require, module, exports) {
		(function() {
			"use strict";
			var errorHandler = require("../../../error-handler/ErrorHandler");
			var moduleName = "appMeasurementPluginSubmitMethodtl";
			var DOMHelper = require("../helpers/DOM");

			function submit(request, metadata, appMeasurement) {
				var linkType;
				var targetEl;
				if (typeof appMeasurement === "object" && typeof appMeasurement.tl === "function") {
					if (typeof request.data !== "object") {
						errorHandler.log(moduleName, "submit", "Request param data (" + request.data + ") is not an object")
					}
					if (typeof request.properties.title !== "string") {
						errorHandler.log(moduleName, "submit", "Request param title (" + request.properties.title + ") is not a string")
					}
					if (errorHandler.exception) {
						return
					}
					appMeasurement.linkTrackVars = "eVar54,eVar49";
					if (request.data.linkTrackVars && request.data.linkTrackVars.length > 0) {
						appMeasurement.linkTrackVars += "," + request.data.linkTrackVars.join(",")
					}
					linkType = request.data.linkType || "o";
					targetEl = _targetEl(request.data.targetEl);
					appMeasurement.forcedLinkTrackingTimeout = _forcedLinkTrackingTimeout(request);
					appMeasurement.tl(targetEl, linkType, request.properties.title);
					_clearTrackingData(appMeasurement)
				}
			}

			function _clearTrackingData(appMeasurement) {
				appMeasurement.linkTrackVars = "";
				appMeasurement.linkTrackEvents = ""
			}

			function _forcedLinkTrackingTimeout(request) {
				var duration = 0;
				var element = request.data.targetEl;
				var href;
				if (request.type && request.type === "link" || request.type === "click") {
					if (_isOutgoingLink(element) === true) {
						duration = 500
					}
				}
				return duration
			}

			function _targetEl(element) {
				var result = _isOutgoingLink(element);
				return result === true ? element : true
			}

			function _isOutgoingLink(element) {
				if (!element) {
					return false
				}
				if (DOMHelper.isIntraPageLink(element) === true) {
					return false
				}
				return true
			}
			module.exports = submit
		})()
	}, {
		"../../../error-handler/ErrorHandler": "yoExqy",
		"../helpers/DOM": "PI3ocS"
	}],
	QMyAm8: [function(require, module, exports) {
		(function() {
			"use strict";
			var formatter = require("../../helpers/formatter");
			var separator = require("../../helpers/separator");
			var interactionTypePrefix = {
				play: "s",
				replay: "r",
				ended: "e"
			};

			function translate(request, metadata, originalMetaData) {
				var translatedRequest = request;
				translatedRequest.properties = {};
				_setDefaultTrackingProps(translatedRequest, originalMetaData);
				translatedRequest.submitMethod = "tl";
				return translatedRequest
			}

			function _setDefaultTrackingProps(translatedRequest, originalMetaData) {
				var defaultText = formatter.eventString("a", interactionTypePrefix[translatedRequest.data.interactionType]) + separator.hyphen + originalMetaData.pageName + separator.hyphen + formatter.lowerCaseString(translatedRequest.data.audioId);
				translatedRequest.properties.prop13 = defaultText;
				translatedRequest.properties.prop3 = defaultText;
				translatedRequest.properties.title = defaultText;
				translatedRequest.properties.prop4 = translatedRequest.data.audioSrc
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {
		"../../helpers/formatter": "NN4x8A",
		"../../helpers/separator": "ym5HyM"
	}],
	"@marcom/ac-analytics/plugins/appmeasurement/translator/component/audio": [function(require, module, exports) {
		module.exports = require("QMyAm8")
	}, {}],
	"@marcom/ac-analytics/plugins/appmeasurement/translator/component/click": [function(require, module, exports) {
		module.exports = require("HqQj56")
	}, {}],
	HqQj56: [function(require, module, exports) {
		(function() {
			"use strict";
			var setOptions = require("../../helpers/setOptions");
			var separator = require("../../helpers/separator");
			var formatter = require("../../helpers/formatter");

			function translate(request, metadata, originalMetaData) {
				var translatedRequest = request;
				translatedRequest.properties = {};
				_setDefaultTrackingProps(translatedRequest, metadata, originalMetaData);
				translatedRequest.options.async = setOptions.async(translatedRequest.data);
				translatedRequest.submitMethod = "tl";
				return translatedRequest
			}

			function _setDefaultTrackingProps(translatedRequest, metadata, originalMetaData) {
				var linkText = translatedRequest.data.linkText.toLowerCase();
				var defaultText = originalMetaData.pageName + separator.hyphen + (translatedRequest.data.linkImg || linkText);
				var regionAncestry = formatter.getRegionAncestry(translatedRequest.data);
				translatedRequest.properties.title = defaultText;
				translatedRequest.properties.prop3 = defaultText;
				translatedRequest.properties.eVar1 = metadata.pageName + separator.pipe + regionAncestry + linkText;
				_setCustomTrackingProps(translatedRequest)
			}

			function _setCustomTrackingProps(translatedRequest) {
				if (!translatedRequest.data.dataAnalyticsClick && typeof translatedRequest.data.dataAnalyticsClick !== "object") {
					return
				}
				for (var key in translatedRequest.data.dataAnalyticsClick) {
					translatedRequest.properties[key] = translatedRequest.data.dataAnalyticsClick[key]
				}
				_formatDefaultProps(translatedRequest)
			}

			function _formatDefaultProps(translatedRequest) {
				if (translatedRequest.data.dataAnalyticsClick.prefix && translatedRequest.properties.prop3) {
					formatter.eventString(translatedRequest.data.dataAnalyticsClick.prefix, translatedRequest.properties.prop3)
				}
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {
		"../../helpers/formatter": "NN4x8A",
		"../../helpers/separator": "ym5HyM",
		"../../helpers/setOptions": "maW9d7"
	}],
	"0DJ0vR": [function(require, module, exports) {
		(function() {
			"use strict";
			var formatter = require("../../helpers/formatter");
			var templateVarHelper = require("../../helpers/templateVar");

			function translate(request, metadata, originalMetaData) {
				var translatedRequest = request;
				var data = translatedRequest.data;
				var templateVarArr = templateVarHelper.set(metadata, originalMetaData);
				var properties = {};
				for (var key in data) {
					properties[key] = data[key];
					if (typeof properties[key] === "string") {
						properties[key] = templateVarHelper.translate(properties[key], templateVarArr)
					}
				}
				translatedRequest.properties = properties;
				translatedRequest.submitMethod = "tl";
				return translatedRequest
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {
		"../../helpers/formatter": "NN4x8A",
		"../../helpers/templateVar": "RN5Re0"
	}],
	"@marcom/ac-analytics/plugins/appmeasurement/translator/component/event": [function(require, module, exports) {
		module.exports = require("0DJ0vR")
	}, {}],
	"@marcom/ac-analytics/plugins/appmeasurement/translator/component/exit": [function(require, module, exports) {
		module.exports = require("WAUT4A")
	}, {}],
	WAUT4A: [function(require, module, exports) {
		(function() {
			"use strict";
			var formatter = require("../../helpers/formatter");

			function translate(request, metadata, originalMetaData) {
				var translatedRequest = request;
				var data = translatedRequest.data;
				var divider = " - ";
				var properties = {};
				var timeSpentOnPage = ((data.exitTimeStamp - originalMetaData.initialTimeStamp) * .001).toFixed(2);
				properties.prop3 = timeSpentOnPage;
				properties.title = formatter.eventString(timeSpentOnPage, originalMetaData.pageName);
				translatedRequest.properties = properties;
				translatedRequest.submitMethod = "manual";
				return translatedRequest
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {
		"../../helpers/formatter": "NN4x8A"
	}],
	QePN2u: [function(require, module, exports) {
		(function() {
			"use strict";
			var errorHandler = require("../../../../error-handler/ErrorHandler");
			var formatter = require("../../helpers/formatter");
			var separator = require("../../helpers/separator");
			var moduleName = "AppMeasurementPluginGalleryTranslator";

			function translate(request, metadata, originalMetaData) {
				var translatedRequest = request;
				var data = translatedRequest.data;
				var interactionTypeMap = {
					click: "ci",
					keydown: "ki",
					swipe: "si",
					dotnav: "bi",
					thumbnav: "ci",
					tabnav: "ci",
					paddlenav: "pi",
					auto: "ai"
				};
				var outgoingInteractionType;
				var incomingInteractionType;
				var properties = {};
				var propString = "";
				_clearConditionalAppMeasurementCodeProps(properties);
				if (interactionTypeMap[data.incomingInteractionType]) {
					incomingInteractionType = interactionTypeMap[data.incomingInteractionType]
				}
				if (typeof incomingInteractionType === "undefined") {
					incomingInteractionType = "ci"
				}
				if (interactionTypeMap[data.outgoingInteractionType]) {
					outgoingInteractionType = interactionTypeMap[data.outgoingInteractionType]
				}
				if (typeof outgoingInteractionType === "undefined") {
					outgoingInteractionType = "ci"
				}
				propString = originalMetaData.pageName + separator.hyphen + request.options.galleryName + separator.hyphen;
				properties.prop2 = formatter.eventString(outgoingInteractionType, "") + propString + data.outgoing.id;
				properties.prop3 = properties.title = formatter.eventString(incomingInteractionType, "") + propString + data.incoming.id;
				if (data.galleryFirstTimeTrigger === true) {
					properties.prop16 = "gallery interaction";
					properties.eVar16 = (request.options.galleryName ? request.options.galleryName + " " : "") + "gallery interaction";
					properties.events = "event1"
				}
				translatedRequest.properties = properties;
				translatedRequest.submitMethod = "tl";
				return translatedRequest
			}

			function _clearConditionalAppMeasurementCodeProps(properties) {
				properties.prop16 = properties.eVar16 = ""
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {
		"../../../../error-handler/ErrorHandler": "yoExqy",
		"../../helpers/formatter": "NN4x8A",
		"../../helpers/separator": "ym5HyM"
	}],
	"@marcom/ac-analytics/plugins/appmeasurement/translator/component/gallery": [function(require, module, exports) {
		module.exports = require("QePN2u")
	}, {}],
	n2hSep: [function(require, module, exports) {
		(function() {
			"use strict";
			var setOptions = require("../../helpers/setOptions");
			var separator = require("../../helpers/separator");
			var formatter = require("../../helpers/formatter");
			var DOMHelper = require("../../helpers/DOM");
			var dataStringToObject = require("../../../../translator/helpers/dataStringToObject");
			var templateVarHelper = require("../../helpers/templateVar");
			var setNavigationSrc = require("../../helpers/setNavigationSrc");

			function translate(request, metadata, originalMetaData) {
				var translatedRequest = request;
				var linkUrl = DOMHelper.getLinkHref(translatedRequest.data.targetEl);
				translatedRequest.properties = {};
				translatedRequest.options.async = setOptions.async(translatedRequest.data);
				_setDefaultTrackingProps(translatedRequest, originalMetaData, linkUrl);
				_setCustomProps(translatedRequest, metadata, originalMetaData);
				setNavigationSrc(translatedRequest.data, metadata, linkUrl);
				translatedRequest.submitMethod = "tl";
				return translatedRequest
			}

			function _setDefaultTrackingProps(translatedRequest, originalMetaData, linkUrl) {
				var identityStr = "";
				var defaultLinkTitle = _getDefaultLinkTitle(translatedRequest.data, originalMetaData);
				if (linkUrl.indexOf("http://") > -1 || linkUrl.indexOf("https://") > -1) {
					identityStr = separator.hyphen + (linkUrl.split("/")[2].split(".")[0] + " link")
				}
				translatedRequest.properties.title = defaultLinkTitle + identityStr
			}

			function _setCustomProps(translatedRequest, metadata, originalMetaData) {
				var dataAttrValue = translatedRequest.data.targetEl.getAttribute("data-" + translatedRequest.options.dataAttribute);
				var templateVarArr = templateVarHelper.set(metadata, originalMetaData);
				var customProperties;
				if (dataAttrValue) {
					customProperties = dataStringToObject(dataAttrValue);
					for (var prop in customProperties) {
						if (customProperties.hasOwnProperty(prop)) {
							translatedRequest.properties[prop] = customProperties[prop];
							if (typeof translatedRequest.properties[prop] === "string") {
								translatedRequest.properties[prop] = templateVarHelper.translate(translatedRequest.properties[prop], templateVarArr)
							}
						}
					}
				}
			}

			function _getDefaultLinkTitle(data, originalMetaData) {
				var title = originalMetaData.pageName + separator.hyphen + data.linkText;
				var postfix = data.linkImg || data.linkText || data.linkId || "";
				if (data.region) {
					title = formatter.eventString(data.region.charAt(0), postfix)
				}
				return title
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {
		"../../../../translator/helpers/dataStringToObject": "P1lp7V",
		"../../helpers/DOM": "PI3ocS",
		"../../helpers/formatter": "NN4x8A",
		"../../helpers/separator": "ym5HyM",
		"../../helpers/setNavigationSrc": "3XwVja",
		"../../helpers/setOptions": "maW9d7",
		"../../helpers/templateVar": "RN5Re0"
	}],
	"@marcom/ac-analytics/plugins/appmeasurement/translator/component/link": [function(require, module, exports) {
		module.exports = require("n2hSep")
	}, {}],
	"@marcom/ac-analytics/plugins/appmeasurement/translator/component/overlay": [function(require, module, exports) {
		module.exports = require("VmsSb5")
	}, {}],
	VmsSb5: [function(require, module, exports) {
		(function() {
			"use strict";
			var formatter = require("../../helpers/formatter");

			function translate(request, metadata, originalMetaData) {
				var translatedRequest = request;
				var properties = {};
				translatedRequest.properties = properties;
				translatedRequest.submitMethod = "tl";
				return translatedRequest
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {
		"../../helpers/formatter": "NN4x8A"
	}],
	uY9yr1: [function(require, module, exports) {
		(function() {
			"use strict";
			var STORAGE_KEY = require("../../../../storageKey").appleMetrics;
			var separator = require("../../helpers/separator");
			var ac_storage = require("@marcom/ac-storage");
			var formatter = require("../../helpers/formatter");
			var DOMHelper = require("../../helpers/DOM");
			var templateVarHelper = require("../../helpers/templateVar");
			var errorHandler = require("../../../../error-handler/ErrorHandler");
			var ac_feature = require("@marcom/ac-feature");
			var dataStringToObject = require("../../../../translator/helpers/dataStringToObject");
			var w = window;
			var moduleName = "AppMeasurementPageTranslator";
			var PAGE_TRACKING_META_DATA = "sPageTrackingData";

			function translate(request, metadata, originalMetaData) {
				var translatedRequest = request;
				var templateVarArr = templateVarHelper.set(metadata, originalMetaData);
				translatedRequest.properties = {};
				_setDefaultProps(translatedRequest);
				_replaceTemplateVars(translatedRequest, metadata, originalMetaData, templateVarArr);
				_setPageRequestProps(translatedRequest, metadata);
				_setNavSrcProps(translatedRequest, metadata);
				_setCustomProps(translatedRequest, originalMetaData, templateVarArr);
				translatedRequest.submitMethod = "t";
				return translatedRequest
			}

			function _setDefaultProps(translatedRequest) {
				translatedRequest.data.prop20 = translatedRequest.data.prop20 || "AOS" + separator.colon + "{COUNTRY_CODE}"
			}

			function _setPageRequestProps(translatedRequest, metadata) {
				if (typeof translatedRequest.properties !== "object") {
					errorHandler.log(moduleName, "_setPageRequestProps", translatedRequest.properties + " is not a valid properties object in the analytics request")
				}
				if (errorHandler.exception) {
					return
				}
				_setProperty(translatedRequest.properties, "pageName", metadata.pageName);
				_setProperty(translatedRequest.properties, "channel", metadata.channel);
				_setProperty(translatedRequest.properties, "prop19", translatedRequest.properties.prop20 + separator.colon + translatedRequest.properties.pageName);
				_setProperty(translatedRequest.properties, "eVar3", translatedRequest.properties.prop20)
			}

			function _setNavSrcProps(translatedRequest, metadata) {
				var navSrcData = _getNavPathInfo() || {};
				_setProperty(translatedRequest.properties, "prop25", _getNavSource(navSrcData));
				_setProperty(translatedRequest.properties, "prop57", navSrcData.prop57);
				_setProperty(translatedRequest.properties, "eVar1", navSrcData.eVar1);
				_setProperty(translatedRequest.properties, "products", navSrcData.products);
				_setProperty(translatedRequest.properties, "eVar2", navSrcData.eVar2);
				_setProperty(translatedRequest.properties, "prop7", navSrcData.prop7);
				if (navSrcData.events) {
					_setProperty(translatedRequest.properties, "events", navSrcData.events)
				}
			}

			function _setCustomProps(translatedRequest, originalMetaData, templateVarArr) {
				if (!(PAGE_TRACKING_META_DATA in originalMetaData)) {
					return
				}
				var pageData;
				try {
					pageData = JSON.parse(originalMetaData[PAGE_TRACKING_META_DATA])
				} catch (e) {
					errorHandler.warn(moduleName, "_setCustomProps", "JSON.parse had an error with the input of: \n\n" + originalMetaData[PAGE_TRACKING_META_DATA] + "\n\nIs it in proper JSON format? \n\nOriginal error:\n" + e)
				}
				if (!pageData || typeof pageData !== "object" || Array.isArray(pageData)) {
					return
				}
				for (var key in pageData) {
					var customData;
					if (pageData.hasOwnProperty(key)) {
						if (typeof pageData[key] === "string") {
							customData = templateVarHelper.translate(pageData[key], templateVarArr)
						} else {
							customData = pageData[key]
						}
						translatedRequest.properties[key] = customData
					}
				}
			}

			function _getNavPathInfo() {
				var isArrivingFromStore = _isArrivingFromStore();
				var navSrcStr;
				var navSrcObj;
				if (isArrivingFromStore === true && ac_feature.localStorageAvailable() === true) {
					navSrcStr = w.localStorage.getItem(STORAGE_KEY);
					navSrcObj = _transformLocalStorageStrtoObject(w.localStorage, navSrcStr)
				} else {
					navSrcStr = ac_storage.getItem(STORAGE_KEY);
					navSrcObj = _transformLocalStorageStrtoObject(ac_storage, navSrcStr)
				}
				return navSrcObj
			}

			function _setProperty(translatedRequest, key, value) {
				if (typeof translatedRequest[key] === "undefined") {
					translatedRequest[key] = value
				}
			}

			function _transformLocalStorageStrtoObject(storageObj, str) {
				var obj;
				if (str) {
					storageObj.removeItem(STORAGE_KEY);
					obj = JSON.parse(str)
				}
				return obj
			}

			function _isArrivingFromStore() {
				var referrer = document.referrer;
				return referrer && DOMHelper.isStoreLink(referrer)
			}

			function _replaceTemplateVars(translatedRequest, metadata, originalMetaData, templateVarArr) {
				if (typeof translatedRequest.data !== "object") {
					errorHandler.log(moduleName, "_replaceTemplateVars", translatedRequest.data + " is not a valid data object in the analytics request")
				}
				if (errorHandler.exception) {
					return
				}
				for (var key in translatedRequest.data) {
					if (translatedRequest.data.hasOwnProperty(key)) {
						translatedRequest.properties[key] = translatedRequest.data[key];
						if (typeof translatedRequest.properties[key] === "string") {
							translatedRequest.properties[key] = templateVarHelper.translate(translatedRequest.properties[key], templateVarArr)
						}
					}
				}
			}

			function _getNavSource(navSourceData) {
				var entryPoint = _getEntryPointStr();
				if (navSourceData.region) {
					return navSourceData.region
				}
				if (entryPoint) {
					return entryPoint
				}
				return "other nav or none"
			}

			function _getEntryPointStr() {
				var referrer = document.referrer;
				var currentDomain = window.location.host;
				var entryPoint;
				if (!referrer) {
					entryPoint = "direct entry"
				}
				if (referrer && referrer !== "" && referrer.split("?")[0].indexOf(currentDomain) === -1) {
					entryPoint = "third party"
				}
				return entryPoint
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {
		"../../../../error-handler/ErrorHandler": "yoExqy",
		"../../../../storageKey": "ntdzZF",
		"../../../../translator/helpers/dataStringToObject": "P1lp7V",
		"../../helpers/DOM": "PI3ocS",
		"../../helpers/formatter": "NN4x8A",
		"../../helpers/separator": "ym5HyM",
		"../../helpers/templateVar": "RN5Re0",
		"@marcom/ac-feature": 66,
		"@marcom/ac-storage": 124
	}],
	"@marcom/ac-analytics/plugins/appmeasurement/translator/component/page": [function(require, module, exports) {
		module.exports = require("uY9yr1")
	}, {}],
	"0g+J3A": [function(require, module, exports) {
		(function() {
			"use strict";
			var separator = require("../../helpers/separator");

			function translate(request, metadata, originalMetaData) {
				var translatedRequest = request;
				var trackedElement = translatedRequest.data.element;
				var properties = {};
				var elementName = trackedElement.name || trackedElement.id || "";
				var timeInThreshold = trackedElement.thresholdExitTime - trackedElement.thresholdEnterTime;
				var sectionNumberStart = "";
				var sectionNumberEnd = "";
				if (trackedElement.element && trackedElement.element.position) {
					sectionNumberStart = trackedElement.element.position + separator.dot + separator.space;
					sectionNumberEnd = separator.space + separator.dot + trackedElement.element.position
				}
				properties.prop34 = properties.title = sectionNumberStart + originalMetaData.pageName + separator.hyphen + elementName + separator.hyphen + "section engaged" + sectionNumberEnd;
				properties.prop35 = (timeInThreshold / 1e3).toFixed(2);
				translatedRequest.properties = properties;
				if (properties.prop35) {
					var event243WithValue = "event243=" + properties.prop35;
					translatedRequest.properties.events = event243WithValue + ",event244"
				}
				translatedRequest.submitMethod = "tl";
				return translatedRequest
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {
		"../../helpers/separator": "ym5HyM"
	}],
	"@marcom/ac-analytics/plugins/appmeasurement/translator/component/section": [function(require, module, exports) {
		module.exports = require("0g+J3A")
	}, {}],
	"@marcom/ac-analytics/plugins/appmeasurement/translator/component/video": [function(require, module, exports) {
		module.exports = require("lxo24I")
	}, {}],
	lxo24I: [function(require, module, exports) {
		(function() {
			"use strict";
			var formatter = require("../../helpers/formatter");
			var separator = require("../../helpers/separator");

			function translate(request, metadata, originalMetaData) {
				var translatedRequest = request;
				var data = translatedRequest.data;
				var eventTypeMap = {
					started: "s",
					ended: "e",
					texttrackshow: "ce",
					seeked: "sk",
					milestone: "m"
				};
				if (!eventTypeMap[data.eventType]) {
					translatedRequest.options.silent = true
				} else {
					translatedRequest.options.silent = false
				}
				var milestoneEvents = {
					0: {
						play: null,
						seek: "event214"
					},
					.1: {
						play: "event73",
						seek: "event215"
					},
					.25: {
						play: "event74",
						seek: "event216"
					},
					.5: {
						play: "event75",
						seek: "event217"
					},
					.75: {
						play: "event76",
						seek: "event218"
					},
					.9: {
						play: "event77",
						seek: "event219"
					}
				};
				var videoName = originalMetaData.pageName + separator.hyphen + data.videoId;
				var eventType = data.eventType && eventTypeMap[data.eventType] ? eventTypeMap[data.eventType] : data.eventType;
				var title = _setTitle(data, videoName, eventType);
				var properties = {};
				_clearConditionalAppMeasurementProps(properties);
				properties.title = properties.prop13 = title;
				properties.eVar87 = videoName;
				if (typeof data.duration !== "undefined" && translatedRequest.options.trackDuration) {
					properties.eVar91 = data.duration;
					_setEvents(properties, "event233=" + data.duration)
				}
				if (typeof data.currentTime !== "undefined" && data.eventType !== "ended" && translatedRequest.options.trackCurrentTime) {
					properties.eVar92 = data.currentTime;
					_setEvents(properties, "event69=" + data.currentTime)
				}
				if (data.src) {
					properties.eVar95 = data.src
				}
				if (data.eventType === "started") {
					properties.prop16 = properties.eVar16 = "video plays";
					_setEvents(properties, "event2")
				}
				if (data.eventType === "ended") {
					properties.prop16 = properties.eVar16 = "video ends";
					_setEvents(properties, "event72");
					if (typeof data.duration !== "undefined" && translatedRequest.options.trackCurrentTime) {
						properties.eVar92 = data.duration;
						_setEvents(properties, "event69=" + data.duration)
					}
				}
				if (data.eventType === "texttrackshow") {
					properties.title = properties.prop2 = videoName + separator.hyphen + "cc";
					properties.prop13 = ""
				}
				if (data.eventType === "milestone" || data.eventType === "seeked") {
					_setMilestoneEventValues(milestoneEvents, data, properties);
					properties.prop13 = ""
				}
				if (data.eventType === "milestone") {
					properties.prop16 = properties.eVar16 = "video milestone"
				}
				if (data.eventType === "seeked") {
					properties.eVar96 = "" + data.milestone * 100;
					properties.prop16 = properties.eVar16 = "video seek"
				}
				if (data.videoType && data.playerType) {
					properties.prop18 = data.videoType + " via " + data.playerType
				}
				translatedRequest.properties = properties;
				translatedRequest.submitMethod = "tl";
				return translatedRequest
			}

			function _clearConditionalAppMeasurementProps(properties) {
				properties.prop16 = properties.eVar16 = properties.prop18 = properties.prop2 = ""
			}

			function _setMilestoneEventValues(events, data, properties) {
				var event;
				if (data.seeked) {
					event = events[data.milestone]["seek"]
				} else {
					event = events[data.milestone]["play"]
				}
				_setEvents(properties, event)
			}

			function _setEvents(properties, event) {
				if (properties.events) {
					properties.events += "," + event
				} else {
					properties.events = event
				}
			}

			function _setTitle(data, videoName, eventType) {
				var title = formatter.eventString("v", eventType);
				var milestoneNumber = null;
				if (data.hasOwnProperty("milestone") && !isNaN(data.milestone)) {
					milestoneNumber = data.milestone * 100
				}
				if (milestoneNumber !== null) {
					title += milestoneNumber
				}
				title += ": " + videoName;
				return title
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {
		"../../helpers/formatter": "NN4x8A",
		"../../helpers/separator": "ym5HyM"
	}],
	"ES/LD6": [function(require, module, exports) {
		(function() {
			"use strict";
			var components = {
				audio: require("./component/audio"),
				gallery: require("./component/gallery"),
				link: require("./component/link"),
				click: require("./component/click"),
				overlay: require("./component/overlay"),
				page: require("./component/page"),
				section: require("./component/section"),
				video: require("./component/video"),
				exit: require("./component/exit"),
				event: require("./component/event")
			};

			function translate(request, metaData, originalMetaData) {
				var translatedRequest = request;
				if (request.type && components[request.type]) {
					translatedRequest = components[request.type].translate(request, metaData, originalMetaData)
				}
				return translatedRequest
			}
			module.exports = {
				translate: translate,
				components: components
			}
		})()
	}, {
		"./component/audio": "QMyAm8",
		"./component/click": "HqQj56",
		"./component/event": "0DJ0vR",
		"./component/exit": "WAUT4A",
		"./component/gallery": "QePN2u",
		"./component/link": "n2hSep",
		"./component/overlay": "VmsSb5",
		"./component/page": "uY9yr1",
		"./component/section": "0g+J3A",
		"./component/video": "lxo24I"
	}],
	"@marcom/ac-analytics/plugins/appmeasurement/translator/translator": [function(require, module, exports) {
		module.exports = require("ES/LD6")
	}, {}],
	kyzDBL: [function(require, module, exports) {
		"use strict";
		module.exports = {
			appMeasurement: require("./appmeasurement/appMeasurement")
		}
	}, {
		"./appmeasurement/appMeasurement": "cqjrzf"
	}],
	"@marcom/ac-analytics/plugins/plugins": [function(require, module, exports) {
		module.exports = require("kyzDBL")
	}, {}],
	"@marcom/ac-analytics/regexp/curlyBracePattern": [function(require, module, exports) {
		module.exports = require("Fkknw/")
	}, {}],
	"Fkknw/": [function(require, module, exports) {
		"use strict";
		module.exports = new RegExp(/[\{|\}]/g)
	}, {}],
	rjjbV7: [function(require, module, exports) {
		"use strict";
		module.exports = new RegExp(/^(https?:\/\/.*\.apple\.com)?(\/[a-z\-_0-9]*)?\/shop(\/.*)?$/i)
	}, {}],
	"@marcom/ac-analytics/regexp/storeUrlPattern": [function(require, module, exports) {
		module.exports = require("rjjbV7")
	}, {}],
	"@marcom/ac-analytics/regexp/tokenPattern": [function(require, module, exports) {
		module.exports = require("aNrbqj")
	}, {}],
	aNrbqj: [function(require, module, exports) {
		"use strict";
		module.exports = new RegExp(/(\{[a-zA-Z][\w-]+?\})/g)
	}, {}],
	"@marcom/ac-analytics/regions/Region": [function(require, module, exports) {
		module.exports = require("DXveIM")
	}, {}],
	DXveIM: [function(require, module, exports) {
		"use strict";
		var proto;
		var dataAttribute = "analytics-region";
		var validJSONPattern = /(?:\w+:\w+)(?:,(?=(?:\w+:\w+))|$)/;
		var singleValuePattern = /[\w\s]+/;
		var dataStringToObject = require("../translator/helpers/dataStringToObject");

		function Region(regionElement) {
			this.element = regionElement;
			this.childRegions = {};
			this.parentRegion = "";
			this.options = this.getDataOptions();
			this.name = this.setName()
		}
		proto = Region.prototype;
		proto.setName = function() {
			var value = "";
			if (this.options.name) {
				value = this.options.name
			}
			if (!this.options.name && this.element.id) {
				this.options.name = this.element.id
			}
			return value
		};
		proto.getDataOptions = function() {
			var data = {};
			var value = this.element.getAttribute("data-" + dataAttribute);
			value = value.charAt(value.length - 1) === "," ? value.substr(0, value.length - 1) : value;
			if (this._isJSONable(value)) {
				data = dataStringToObject(value)
			} else if (this._isSingleValue(value)) {
				data.name = value
			}
			return data
		};
		proto._isJSONable = function(value) {
			return validJSONPattern.test(value)
		};
		proto._isSingleValue = function(value) {
			return singleValuePattern.test(value)
		};
		module.exports = {
			Region: Region,
			dataAttribute: dataAttribute
		}
	}, {
		"../translator/helpers/dataStringToObject": "P1lp7V"
	}],
	"@marcom/ac-analytics/regions/regions": [function(require, module, exports) {
		module.exports = require("DxeItO")
	}, {}],
	DxeItO: [function(require, module, exports) {
		(function() {
			"use strict";
			var ac_DOMNodes = require("@marcom/ac-dom-nodes");
			var Region = require("./Region").Region;
			var dataAttribute = require("./Region").dataAttribute;
			var allRegions = [];
			var tree = {};

			function getAllRegions() {
				if (allRegions.length > 0) {
					return allRegions
				}
				var allRegionsElements = document.querySelectorAll("[data-" + dataAttribute + "]");
				var topLevelRegion;
				var regionsLen = allRegionsElements.length;
				var i = 0;

				function _getChildRegions(regionObj) {
					var childRegion;
					while (ac_DOMNodes.isElement(allRegionsElements[i + 1]) && regionObj.element.contains(allRegionsElements[i + 1])) {
						childRegion = new Region(allRegionsElements[i + 1]);
						allRegions.push(childRegion);
						childRegion.parentRegion = regionObj.name;
						regionObj.childRegions[childRegion.name] = childRegion;
						i += 1;
						_getChildRegions(childRegion)
					}
				}
				for (i; i < regionsLen; i += 1) {
					topLevelRegion = new Region(allRegionsElements[i]);
					tree[topLevelRegion.name] = topLevelRegion;
					allRegions.push(topLevelRegion);
					_getChildRegions(topLevelRegion)
				}
				return allRegions
			}

			function getTree() {
				getAllRegions();
				if (Object.keys(tree).length > 0) {
					return tree
				}
			}

			function getRegionByElement(element) {
				var parsedRegions = getAllRegions();
				if (ac_DOMNodes.isElement(element)) {
					var allAncestorRegions = getRegionAncestryByElement(element);
					if (allAncestorRegions.length > 0) {
						return allAncestorRegions.pop()
					}
				}
			}

			function getRegionAncestryByElement(element) {
				var parsedRegions = getAllRegions();
				if (ac_DOMNodes.isElement(element)) {
					return parsedRegions.filter(function(region) {
						return region.element.contains(element)
					})
				}
			}

			function getRegionByName(name) {
				var parsedRegions = getAllRegions();
				if (typeof name === "string") {
					return parsedRegions.filter(function(region) {
						return region.name === name
					})
				}
			}

			function refreshRegion(region) {
				var regionObj = region;
				if (ac_DOMNodes.isElement(region)) {
					regionObj = getRegionByElement(region)
				}
				if (typeof regionObj === "object") {
					allRegions.forEach(function(r) {
						if (r.element === regionObj.element) {
							r.options = r.getDataOptions();
							r.name = r.setName()
						}
					})
				}
			}

			function clearRegions() {
				allRegions = []
			}
			module.exports = {
				getTree: getTree,
				getAllRegions: getAllRegions,
				getRegionByElement: getRegionByElement,
				getRegionByName: getRegionByName,
				getRegionAncestryByElement: getRegionAncestryByElement,
				refreshRegion: refreshRegion,
				clearRegions: clearRegions
			}
		})()
	}, {
		"./Region": "DXveIM",
		"@marcom/ac-dom-nodes": 10
	}],
	"@marcom/ac-analytics/reset": [function(require, module, exports) {
		module.exports = require("DebV0p")
	}, {}],
	DebV0p: [function(require, module, exports) {
		"use strict";
		var topLevelMetadata = require("./metadata");
		var regions = require("./regions/regions");
		var metricsTracker = require("./metricsTracker");
		var defaultOptions = {
			clearRegions: true
		};

		function resetACAnalytics(options) {
			var options = Object.assign({}, defaultOptions, options || {});
			if (options.clearRegions) {
				regions.clearRegions()
			}
			topLevelMetadata.refreshMetadata();
			metricsTracker.plugin.reset()
		}
		module.exports = resetACAnalytics
	}, {
		"./metadata": "W+q+EN",
		"./metricsTracker": "nHWlaR",
		"./regions/regions": "DxeItO"
	}],
	"@marcom/ac-analytics/storageKey": [function(require, module, exports) {
		module.exports = require("ntdzZF")
	}, {}],
	ntdzZF: [function(require, module, exports) {
		(function() {
			"use strict";
			module.exports = {
				appleMetrics: "apple_Metrics",
				analyticsQueue: "ac-analytics-queue"
			}
		})()
	}, {}],
	scrVj8: [function(require, module, exports) {
		"use strict";
		var proto;
		var moduleName = "TokenRegistry";
		var errorHandler = require("../error-handler/ErrorHandler");

		function TokenRegistry() {
			this.tokens = {};
			this._size = 0
		}
		proto = TokenRegistry.prototype;
		proto.setToken = function(tokenName, tokenValue) {
			if (typeof tokenName !== "string") {
				errorHandler.log(moduleName, "setToken", tokenName + " is not a valid string")
			}
			if (typeof tokenValue !== "string") {
				errorHandler.log(moduleName, "setToken", tokenValue + " is not a valid string")
			}
			if (errorHandler.exception) {
				return
			}
			this.tokens[tokenName] = tokenValue;
			this._updateSize()
		};
		proto.removeToken = function(tokenName) {
			var index;
			if (typeof tokenName !== "string") {
				errorHandler.log(moduleName, "removeToken", tokenName + " is not a valid string")
			}
			if (!this.tokens[tokenName]) {
				errorHandler.log(moduleName, "removeToken", tokenName + " doesnt exist")
			}
			if (errorHandler.exception) {
				return
			}
			delete this.tokens[tokenName];
			this._updateSize()
		};
		proto.getToken = function(tokenName) {
			if (typeof tokenName !== "string") {
				errorHandler.log(moduleName, "getToken", tokenName + " is not a valid string")
			}
			if (errorHandler.exception) {
				return
			}
			return this.tokens[tokenName]
		};
		proto.size = function() {
			return this._size
		};
		proto.clear = function() {
			this.tokens = {};
			this._size = 0
		};
		proto._updateSize = function() {
			this._size = Object.keys(this.tokens).length
		};
		module.exports = new TokenRegistry
	}, {
		"../error-handler/ErrorHandler": "yoExqy"
	}],
	"@marcom/ac-analytics/tokens/Registry": [function(require, module, exports) {
		module.exports = require("scrVj8")
	}, {}],
	dJInuT: [function(require, module, exports) {
		"use strict";
		var proto;
		var moduleName = "TokenReplacer";
		var tokenPattern = require("../regexp/tokenPattern");
		var curlysPattern = require("../regexp/curlyBracePattern");
		var tokenRegistry = require("./Registry");
		var errorHandler = require("../error-handler/ErrorHandler");

		function TokenReplacer() {
			this.registry = tokenRegistry
		}
		proto = TokenReplacer.prototype;
		proto.replace = function(str, replacements) {
			if (typeof str !== "string") {
				errorHandler.log(moduleName, "replace", str + " is not a valid string")
			}
			if (errorHandler.exception) {
				return
			}
			if (typeof replacements === "object") {
				str = this._replace(str, replacements)
			}
			if (this.registry.size() > 0) {
				str = this._replace(str, this.registry.tokens)
			}
			return str
		};
		proto.parseTokens = function(str) {
			var tokens;
			if (typeof str !== "string") {
				errorHandler.log(moduleName, "parseTokens", str + " is not a valid string")
			}
			if (errorHandler.exception) {
				return
			}
			tokens = str.match(tokenPattern);
			if (tokens) {
				return tokens.map(function(value) {
					return this._removeCurlys(value)
				}.bind(this))
			}
		};
		proto._replace = function(str, replacements) {
			return str.replace(tokenPattern, function(match) {
				return typeof replacements[this._removeCurlys(match)] === "string" ? replacements[this._removeCurlys(match)] : match
			}.bind(this))
		};
		proto._removeCurlys = function(str) {
			str = str.trim();
			return str.replace(curlysPattern, "")
		};
		module.exports = new TokenReplacer
	}, {
		"../error-handler/ErrorHandler": "yoExqy",
		"../regexp/curlyBracePattern": "Fkknw/",
		"../regexp/tokenPattern": "aNrbqj",
		"./Registry": "scrVj8"
	}],
	"@marcom/ac-analytics/tokens/Replacer": [function(require, module, exports) {
		module.exports = require("dJInuT")
	}, {}],
	"8lTacU": [function(require, module, exports) {
		(function() {
			"use strict";
			var interactionTypes = {
				play: function(request) {
					if (request.data.ended === true) {
						return "replay"
					}
					return "play"
				},
				ended: function(request) {
					if (request.data.ended === true) {
						return "reended"
					}
					return "ended"
				}
			};

			function translate(request) {
				var translatedRequest = request;
				var audioSrc = translatedRequest.data.targetEl.getAttribute("src");
				if (audioSrc) {
					translatedRequest.data.audioSrc = audioSrc
				} else {
					var audioSourceTag = translatedRequest.data.targetEl.querySelector("source");
					if (audioSourceTag && audioSourceTag.getAttribute("src")) {
						translatedRequest.data.audioSrc = audioSourceTag.getAttribute("src")
					}
				}
				translatedRequest.data.interactionType = interactionTypes[request.event.type] ? interactionTypes[request.event.type](request) : request.event.type;
				translatedRequest.data.duration = translatedRequest.data.targetEl.duration;
				translatedRequest.data.currentTime = translatedRequest.data.targetEl.currentTime;
				return translatedRequest
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {}],
	"@marcom/ac-analytics/translator/component/audio": [function(require, module, exports) {
		module.exports = require("8lTacU")
	}, {}],
	JuqcqK: [function(require, module, exports) {
		(function() {
			"use strict";
			var regions = require("../../regions/regions");
			var parseFromDataAttribute = require("./../helpers/parseFromDataAttribute");

			function translate(request) {
				var translatedRequest = request;
				var linkImg = request.data.targetEl.querySelector("img");
				var linkImgSrc;
				var targetElParentRegion = regions.getRegionByElement(request.data.targetEl);
				var linkTitle = request.data.targetEl.getAttribute("data-" + request.options.titleDataAttribute);
				var dataAttrValue = request.data.targetEl.getAttribute("data-" + request.options.dataAttribute);
				var customProperties = dataAttrValue ? parseFromDataAttribute(dataAttrValue, request.data.targetEl) : "";
				translatedRequest.data.regionAncestry = regions.getRegionAncestryByElement(request.data.targetEl);
				if (linkImg) {
					linkImgSrc = linkImg.getAttribute("src");
					translatedRequest.data.linkImg = linkImgSrc.substring(linkImgSrc.lastIndexOf("/") + 1, linkImgSrc.length);
					if (typeof translatedRequest.data.linkImg === "string") {
						translatedRequest.data.linkImg = translatedRequest.data.linkImg.toLowerCase()
					}
				}
				if (linkTitle) {
					translatedRequest.data.linkText = linkTitle
				} else {
					if (typeof request.data.targetEl.innerText === "string") {
						translatedRequest.data.linkText = request.data.targetEl.innerText.trim()
					} else {
						translatedRequest.data.linkText = request.data.targetEl.textContent.trim()
					}
				}
				if (typeof targetElParentRegion === "object") {
					translatedRequest.data.region = targetElParentRegion.name
				}
				if (customProperties) {
					translatedRequest.data.dataAnalyticsClick = customProperties
				}
				return translatedRequest
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {
		"../../regions/regions": "DxeItO",
		"./../helpers/parseFromDataAttribute": "uohxOy"
	}],
	"@marcom/ac-analytics/translator/component/click": [function(require, module, exports) {
		module.exports = require("JuqcqK")
	}, {}],
	kZao3w: [function(require, module, exports) {
		(function() {
			"use strict";

			function translate(request) {
				var translatedRequest = request;
				return translatedRequest
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {}],
	"@marcom/ac-analytics/translator/component/event": [function(require, module, exports) {
		module.exports = require("kZao3w")
	}, {}],
	yWnp5u: [function(require, module, exports) {
		(function() {
			"use strict";

			function translate(request) {
				var translatedRequest = request;
				return translatedRequest
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {}],
	"@marcom/ac-analytics/translator/component/exit": [function(require, module, exports) {
		module.exports = require("yWnp5u")
	}, {}],
	"@marcom/ac-analytics/translator/component/gallery": [function(require, module, exports) {
		module.exports = require("P9nfNI")
	}, {}],
	P9nfNI: [function(require, module, exports) {
		(function() {
			"use strict";
			var ancestor = require("@marcom/ac-dom-traversal/ancestor");
			var interactionTypes = {
				click: function(request) {
					var type = "click";
					var navType = _triggerNavType(request);
					return navType || type
				},
				auto: function(request) {
					var type = "auto";
					return type
				},
				keydown: function(request) {
					var type = "keydown";
					return type
				},
				touchend: function(request) {
					var type = "swipe";
					return type
				},
				touchstart: function(request) {
					var type = "swipe";
					return type
				},
				touchmove: function(request) {
					var type = "swipe";
					return type
				}
			};

			function translate(request) {
				var interactionEventType = _interactionEventType(request);
				var interactionType = interactionEventType;
				var observer = request.observer;
				var translatedRequest = request;
				if (interactionTypes[interactionEventType]) {
					interactionType = interactionTypes[interactionEventType](request)
				}
				translatedRequest.data.targetEl = _getTargetElement(request);
				translatedRequest.data.slideInViewTime = _slideInViewTime(request);
				translatedRequest.data.outgoingInteractionType = request.observer.outgoingSlideInteractionType;
				translatedRequest.data.incomingInteractionType = interactionType;
				translatedRequest.data.galleryFirstTimeTrigger = _isFirstTimeGalleryTrigger(translatedRequest);
				observer.outgoingSlideInteractionType = interactionType;
				return translatedRequest
			}

			function _triggerNavType(request) {
				var type = false;
				var trigger = _getTargetElement(request);
				if (trigger) {
					type = _getNavType(trigger)
				}
				return type
			}

			function _getNavType(trigger) {
				var containerClassName;
				var i;
				var type = null;
				var interactionTypeClasses = ["dotnav", "thumbnav", "paddlenav", "tabnav"];
				var interactionTypeAttribute = "data-analytics-gallery-interaction-type";
				var triggerContainerSelector = ".dotnav, .thumbnav, .paddlenav, .tabnav, [" + interactionTypeAttribute + "]";
				var triggerContainer = ancestor(trigger, triggerContainerSelector);
				if (triggerContainer) {
					if (triggerContainer.hasAttribute(interactionTypeAttribute)) {
						type = triggerContainer.getAttribute(interactionTypeAttribute)
					} else {
						containerClassName = triggerContainer.className;
						for (i = 0; i < interactionTypeClasses.length; i++) {
							if (containerClassName.indexOf(interactionTypeClasses[i]) !== -1) {
								type = interactionTypeClasses[i];
								break
							}
						}
					}
				}
				return type
			}

			function _getTargetElement(request) {
				var interactionEvent = request.data.interactionEvent;
				var element = false;
				if (interactionEvent) {
					element = interactionEvent.target || interactionEvent.srcElement
				}
				return element
			}

			function _slideInViewTime(request) {
				return request.data.incomingSlideTimestamp - request.data.outgoingSlideTimestamp
			}

			function _isFirstTimeGalleryTrigger(request) {
				var incomingInteractionType = request.data.incomingInteractionType;
				var observer = request.observer;
				var firstTimeGalleryTrigger = false;
				if (incomingInteractionType !== "auto" && observer.trackedInteractionTypes.indexOf(incomingInteractionType) === -1) {
					firstTimeGalleryTrigger = true;
					observer.trackedInteractionTypes.push(incomingInteractionType)
				}
				return firstTimeGalleryTrigger
			}

			function _interactionEventType(request) {
				var data = request.data;
				var type = "auto";
				if (data.interactionEvent && data.interactionEvent.type) {
					type = data.interactionEvent.type
				}
				return type
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {
		"@marcom/ac-dom-traversal/ancestor": 31
	}],
	"@marcom/ac-analytics/translator/component/link": [function(require, module, exports) {
		module.exports = require("L1gkGb")
	}, {}],
	L1gkGb: [function(require, module, exports) {
		(function() {
			"use strict";
			var regions = require("../../regions/regions");

			function translate(request) {
				var translatedRequest = request;
				var linkImg = request.data.targetEl.querySelector("img");
				var linkImgSrc;
				var targetElParentRegion = regions.getRegionByElement(request.data.targetEl);
				var linkTitle = request.data.targetEl.getAttribute("data-" + request.options.titleDataAttribute);
				if (linkTitle) {
					translatedRequest.data.linkText = linkTitle
				} else {
					translatedRequest.data.linkText = typeof request.data.targetEl.innerText === "string" ? request.data.targetEl.innerText.trim() : request.data.targetEl.textContent.trim()
				}
				translatedRequest.data.regionAncestry = regions.getRegionAncestryByElement(request.data.targetEl);
				if (request.data.targetEl.id) {
					translatedRequest.data.linkId = request.data.targetEl.id
				}
				if (linkImg) {
					linkImgSrc = linkImg.getAttribute("src");
					translatedRequest.data.linkImg = linkImgSrc.substring(linkImgSrc.lastIndexOf("/") + 1, linkImgSrc.length);
					if (typeof translatedRequest.data.linkImg === "string") {
						translatedRequest.data.linkImg = translatedRequest.data.linkImg.toLowerCase()
					}
				}
				if (typeof targetElParentRegion === "object") {
					translatedRequest.data.region = targetElParentRegion.name
				}
				return translatedRequest
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {
		"../../regions/regions": "DxeItO"
	}],
	vPF0EK: [function(require, module, exports) {
		(function() {
			"use strict";

			function translate(request) {
				var translatedRequest = request;
				return translatedRequest
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {}],
	"@marcom/ac-analytics/translator/component/overlay": [function(require, module, exports) {
		module.exports = require("vPF0EK")
	}, {}],
	"@marcom/ac-analytics/translator/component/page": [function(require, module, exports) {
		module.exports = require("NcRXMk")
	}, {}],
	NcRXMk: [function(require, module, exports) {
		(function() {
			"use strict";

			function translate(request) {
				var translatedRequest = request;
				return translatedRequest
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {}],
	"chF+IX": [function(require, module, exports) {
		(function() {
			"use strict";

			function translate(request) {
				return request
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {}],
	"@marcom/ac-analytics/translator/component/section": [function(require, module, exports) {
		module.exports = require("chF+IX")
	}, {}],
	"@marcom/ac-analytics/translator/component/video": [function(require, module, exports) {
		module.exports = require("ighRR/")
	}, {}],
	"ighRR/": [function(require, module, exports) {
		(function() {
			"use strict";
			var eventTypes = {
				play: function(request) {
					return "started"
				},
				ended: function(request) {
					return "ended"
				},
				texttrackshow: function(request) {
					if (request.data.ttShowCount === 0) {
						return "texttrackshow"
					}
					return "texttrackshown"
				},
				milestone: function(request) {
					if (request.data.seeked) {
						return "seeked"
					}
					return "milestone"
				}
			};
			var interactionTypes = {
				click: function(request) {
					return request.data.event.type
				}
			};

			function translate(request) {
				var translatedRequest = request;
				translatedRequest.data.eventType = eventTypes[request.data.eventType] ? eventTypes[request.data.eventType](request) : request.data.eventType;
				if (request.data.event && interactionTypes[request.data.event.type]) {
					translatedRequest.data.interactionType = interactionTypes[request.data.event.type](request)
				}
				if (!isNaN(translatedRequest.data.duration)) {
					translatedRequest.data.duration = Math.round(translatedRequest.data.duration).toString()
				} else {
					translatedRequest.data.duration = "unavailable"
				}
				if (!isNaN(translatedRequest.data.currentTime)) {
					translatedRequest.data.currentTime = Math.round(translatedRequest.data.currentTime).toString()
				} else {
					translatedRequest.data.currentTime = "unavailable"
				}
				return translatedRequest
			}
			module.exports = {
				translate: translate
			}
		})()
	}, {}],
	"@marcom/ac-analytics/translator/helpers/dataStringToObject": [function(require, module, exports) {
		module.exports = require("P1lp7V")
	}, {}],
	P1lp7V: [function(require, module, exports) {
		var errorHandler = require("../../error-handler/ErrorHandler");
		(function() {
			"use strict";
			var moduleName = "dataAttributeHelper";
			var methodName = "dataStringToObject";

			function dataStringToObject(str) {
				if (!str) {
					errorHandler.log(moduleName, methodName, "`str` must not be falsey");
					return {}
				}
				if (typeof str !== "string" || str.length === 0) {
					errorHandler.log(moduleName, methodName, "`str` must contain a value and be of type string");
					return {}
				}
				var parsedStr;
				try {
					parsedStr = JSON.parse(str)
				} catch (e) {}
				if (parsedStr) {
					return parsedStr
				}
				var keys;
				var key;
				var dataObj = {};
				keys = str.split(",");
				for (var i = 0; i < keys.length; i++) {
					key = keys[i].split(":");
					dataObj[key[0].trim()] = key[1] ? key[1].trim() : key[1]
				}
				return dataObj
			}
			module.exports = dataStringToObject
		})()
	}, {
		"../../error-handler/ErrorHandler": "yoExqy"
	}],
	"@marcom/ac-analytics/translator/helpers/parseFromDataAttribute": [function(require, module, exports) {
		module.exports = require("uohxOy")
	}, {}],
	uohxOy: [function(require, module, exports) {
		(function() {
			"use strict";
			var tokenReplacer = require("./../../tokens/Replacer");
			var dataStringToObject = require("./../../translator/helpers/dataStringToObject");
			var isElement = require("@marcom/ac-dom-nodes/isElement");
			var hasAttribute = require("@marcom/ac-dom-nodes/hasAttribute");

			function parseFromDataAttribute(dataAttrValue, el) {
				var dataObj;
				var tokensArr;
				var replacements = {};
				var translatedStr;
				tokensArr = tokenReplacer.parseTokens(dataAttrValue);
				if (!tokensArr || tokensArr.length === 0) {
					return dataStringToObject(dataAttrValue)
				}
				replacements = _getTokenValues(el, tokensArr);
				translatedStr = tokenReplacer.replace(dataAttrValue, replacements);
				dataObj = dataStringToObject(translatedStr);
				return dataObj
			}

			function _getTokenValues(el, tokensArr) {
				var replacements = {};
				var value;
				var len = tokensArr.length;
				if (isElement(el)) {
					for (var i = 0; i < len; i++) {
						if (hasAttribute(el, tokensArr[i])) {
							value = el.getAttribute(tokensArr[i]);
							replacements[tokensArr[i]] = value
						}
					}
				}
				return replacements
			}
			module.exports = parseFromDataAttribute
		})()
	}, {
		"./../../tokens/Replacer": "dJInuT",
		"./../../translator/helpers/dataStringToObject": "P1lp7V",
		"@marcom/ac-dom-nodes/hasAttribute": 13,
		"@marcom/ac-dom-nodes/isElement": 25
	}],
	eq7uW9: [function(require, module, exports) {
		(function() {
			"use strict";
			var errorHandler = require("../error-handler/ErrorHandler");
			var components = {
				audio: require("./component/audio"),
				gallery: require("./component/gallery"),
				link: require("./component/link"),
				click: require("./component/click"),
				overlay: require("./component/overlay"),
				page: require("./component/page"),
				section: require("./component/section"),
				video: require("./component/video"),
				exit: require("./component/exit"),
				event: require("./component/event")
			};

			function translate(request) {
				var translatedRequest = request;
				if (request.type && components[request.type]) {
					if (typeof request.data !== "object") {
						errorHandler.log("Translator", "translate", "request.data (" + request.data + ") must be an object")
					}
					if (errorHandler.exception) {
						return
					}
					translatedRequest = components[request.type].translate(request)
				}
				return translatedRequest
			}
			module.exports = {
				translate: translate,
				components: components
			}
		})()
	}, {
		"../error-handler/ErrorHandler": "yoExqy",
		"./component/audio": "8lTacU",
		"./component/click": "JuqcqK",
		"./component/event": "kZao3w",
		"./component/exit": "yWnp5u",
		"./component/gallery": "P9nfNI",
		"./component/link": "L1gkGb",
		"./component/overlay": "vPF0EK",
		"./component/page": "NcRXMk",
		"./component/section": "chF+IX",
		"./component/video": "ighRR/"
	}],
	"@marcom/ac-analytics/translator/translator": [function(require, module, exports) {
		module.exports = require("eq7uW9")
	}, {}],
	H9Yz3H: [function(require, module, exports) {
		"use strict";
		module.exports = require("../ac-analytics")
	}, {
		"../ac-analytics": "++O3BW"
	}],
	"ac-analytics": [function(require, module, exports) {
		module.exports = require("H9Yz3H")
	}, {}],
	"@marcom/ac-analytics/utils/getVersion": [function(require, module, exports) {
		module.exports = require("hDaz38")
	}, {}],
	hDaz38: [function(require, module, exports) {
		"use strict";
		var versionString = require("../versionfile");
		module.exports = versionString
	}, {
		"../versionfile": "NHmGZw"
	}],
	"@marcom/ac-analytics/versionfile": [function(require, module, exports) {
		module.exports = require("NHmGZw")
	}, {}],
	NHmGZw: [function(require, module, exports) {
		module.exports = "2.6.0"
	}, {}]
}, {}, ["++O3BW"]);