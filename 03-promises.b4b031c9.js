function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},t=o.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in l){var o=l[e];delete l[e];var t={id:e,exports:{}};return n[e]=t,o.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){l[e]=o},o.parcelRequired7c6=t);var r=t("7Y9D8");let i=document.querySelector('input[name ="delay"]'),u=document.querySelector('[name ="step"]'),s=document.querySelector('[name ="amount"]');function c(o,n){const l=Math.random()>.3;return new Promise(((t,i)=>{setTimeout((()=>{l?(console.log(`✅ Fulfilled promise ${o} in ${n} ms`),e(r).Notify.success(`✅ Fulfilled promise ${o} in ${n} ms`),t(`✅ Fulfilled promise ${o} in ${n} ms`)):(console.log(`❌ Rejected promise ${o} in ${n} ms`),e(r).Notify.failure(`❌ Rejected promise ${o} in ${n} ms`),i(`❌ Rejected promise ${o} in ${n} ms`))}),n)}))}document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault(),console.log("click");let o=Number(i.value),n=Number(u.value),l=Number(s.value);for(let e=1;e<=l;e+=1)setTimeout((()=>{let l=o;console.log(l),o+=n,c(e,l).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}),o)}));
//# sourceMappingURL=03-promises.b4b031c9.js.map