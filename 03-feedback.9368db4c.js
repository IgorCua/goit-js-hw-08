var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=l||f||Function("return this")(),u=Object.prototype.toString,s=Math.max,m=Math.min,g=function(){return c.Date.now()};function d(e,t,n){var o,a,r,i,l,f,c=0,u=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=a;return o=a=void 0,c=t,i=e.apply(r,n)}function S(e){return c=e,l=setTimeout(j,t),u?y(e):i}function h(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=r}function j(){var e=g();if(h(e))return T(e);l=setTimeout(j,function(e){var n=t-(e-f);return d?m(n,r-(e-c)):n}(e))}function T(e){return l=void 0,b&&o?y(e):(o=a=void 0,i)}function w(){var e=g(),n=h(e);if(o=arguments,a=this,f=e,n){if(void 0===l)return S(f);if(d)return l=setTimeout(j,t),y(f)}return void 0===l&&(l=setTimeout(j,t)),i}return t=p(t)||0,v(n)&&(u=!!n.leading,r=(d="maxWait"in n)?s(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=a=l=void 0},w.flush=function(){return void 0===l?i:T(g())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=a.test(e);return l||r.test(e)?i(e.slice(2),l?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),d(e,t,{leading:o,maxWait:t,trailing:a})};const b=document.querySelector(".feedback-form"),y=t((function(e){"email"===e.target.name?j=e.target.value:T=e.target.value;try{const e=JSON.stringify({email:j,message:T});localStorage.setItem("feedback-form-state",e)}catch(e){console.log(e.message)}}),500);let S=document.querySelector('[name="email"]'),h=document.querySelector('[name="message"]'),j="",T="";if(b.addEventListener("input",y),b.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget,o={email:t.value,message:n.value};console.log("local storage: ",localStorage.getItem("feedback-form-state")),console.log(o),t.value="",n.value="",j="",T="",localStorage.removeItem("feedback-form-state")})),null!==localStorage.getItem("feedback-form-state")){try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(e),S.value=e.email,h.value=e.message,j=e.email,T=e.message}catch(e){console.log("getItem error: ",e.message)}console.log("getItem ",localStorage.getItem("feedback-form-state"))}
//# sourceMappingURL=03-feedback.9368db4c.js.map
