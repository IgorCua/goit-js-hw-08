var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,f=l||c||Function("return this")(),u=Object.prototype.toString,s=Math.max,m=Math.min,g=function(){return f.Date.now()};function d(e,t,n){var o,a,r,i,l,c,f=0,u=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=a;return o=a=void 0,f=t,i=e.apply(r,n)}function S(e){return f=e,l=setTimeout(T,t),u?y(e):i}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-f>=r}function T(){var e=g();if(h(e))return j(e);l=setTimeout(T,function(e){var n=t-(e-c);return d?m(n,r-(e-f)):n}(e))}function j(e){return l=void 0,b&&o?y(e):(o=a=void 0,i)}function I(){var e=g(),n=h(e);if(o=arguments,a=this,c=e,n){if(void 0===l)return S(c);if(d)return l=setTimeout(T,t),y(c)}return void 0===l&&(l=setTimeout(T,t)),i}return t=p(t)||0,v(n)&&(u=!!n.leading,r=(d="maxWait"in n)?s(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),I.cancel=function(){void 0!==l&&clearTimeout(l),f=0,o=c=a=l=void 0},I.flush=function(){return void 0===l?i:j(g())},I}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=a.test(e);return l||r.test(e)?i(e.slice(2),l?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),d(e,t,{leading:o,maxWait:t,trailing:a})};const b=document.querySelector(".feedback-form"),y=document.querySelector('[name="email"]'),S=document.querySelector('[name="message"]');if(b.addEventListener("input",t((function(e){const{elements:{email:t,message:n}}=e.currentTarget;try{const e=JSON.stringify({email:t.value,message:n.value});localStorage.setItem("feedback-form-state",e)}catch(e){console.log(e.message)}console.log("saveInputs ",localStorage.getItem("feedback-form-state"))}),500,{trailing:!1})),b.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;t.value="",n.value="",localStorage.removeItem("feedback-form-state"),console.log("local storage: ",localStorage.getItem("feedback-form-state")),console.log({email:t.value,message:n.value})})),null!==localStorage.getItem("feedback-form-state")){try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));y.value=e.email,S.value=e.message}catch(e){console.log(e.message)}console.log("getItem ",localStorage.getItem("feedback-form-state"))}
//# sourceMappingURL=03-feedback.15088f22.js.map
