!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function y(e,t,n){var o,a,i,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=a;return o=a=void 0,c=t,u=e.apply(r,n)}function h(e){return c=e,l=setTimeout(O,t),s?y(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function O(){var e=b();if(j(e))return T(e);l=setTimeout(O,function(e){var n=t-(e-f);return d?g(n,i-(e-c)):n}(e))}function T(e){return l=void 0,m&&o?y(e):(o=a=void 0,u)}function w(){var e=b(),n=j(e);if(o=arguments,a=this,f=e,n){if(void 0===l)return h(f);if(d)return l=setTimeout(O,t),y(f)}return void 0===l&&(l=setTimeout(O,t)),u}return t=S(t)||0,p(n)&&(s=!!n.leading,i=(d="maxWait"in n)?v(S(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=a=l=void 0},w.flush=function(){return void 0===l?u:T(b())},w}function p(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(p(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=u.test(e);return r||l.test(e)?f(e.slice(2),r?2:8):i.test(e)?NaN:+e}n=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return p(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),y(e,t,{leading:o,maxWait:t,trailing:a})};var h=document.querySelector(".feedback-form"),j=document.querySelector('[name="email"]'),O=document.querySelector('[name="message"]');if(h.addEventListener("input",n((function(){try{var e=JSON.stringify({email:j.value,message:O.value});localStorage.setItem("feedback-form-state",e)}catch(e){console.log(e.message)}}),500)),h.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,o=t.message,r={email:n.value,message:o.value};console.log("local storage: ",localStorage.getItem("feedback-form-state")),console.log(r),n.value="",o.value="",localStorage.removeItem("feedback-form-state")})),null!==localStorage.getItem("feedback-form-state")){try{var T=JSON.parse(localStorage.getItem("feedback-form-state"));j.value=T.email,O.value=T.message}catch(e){console.log(e.message)}console.log("getItem ",localStorage.getItem("feedback-form-state"))}}();
//# sourceMappingURL=03-feedback.c25ad675.js.map
