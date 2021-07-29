(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  color: white;\n  background-color: #141850;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  font-family: 'Varela Round', sans-serif;\n  font-weight: 600;\n}\n\n.header {\n  padding: 20px 0 30px 0;\n  align-self: center;\n}\n\n.container {\n  background-color: #303179;\n  display: flex;\n  align-self: center;\n  padding: 10px;\n  border-radius: 12px;\n  box-shadow: 2px 2px 5px;\n}\n\n.board {\n  width: auto;\n  margin-right: 100px;\n}\n\n.board__head {\n  display: inline-flex;\n  margin-bottom: 15px;\n}\n\n.board__title {\n  padding-right: 20px;\n}\n\n.board__refresh {\n  box-shadow: 1px 1px 1px;\n  border: none;\n  border-radius: 6px;\n  padding: 0 6px;\n  background: #ed7966;\n  color: white;\n  font-weight: 600;\n}\n\n.refresh-icon {\n  margin-left: 5px;\n  animation: rotation 8s infinite linear;\n}\n\n@keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n.board__content {\n  border: 2px #f5cac2 solid;\n  list-style: none;\n  border-radius: 12px;\n\n}\n\n.board__item {\n  padding: 3px 10px;\n}\n\n.board__item:nth-of-type(2n + 2) {\n  background-color: #ed7966;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n\n.form__title {\n  margin-bottom: 15px;\n}\n\n.form input {\n  margin: 0 0 10px 0;\n  border-radius: 6px;\n  padding: 3px 5px;\n}\n\n.form__submit {\n  width: fit-content;\n  align-self: flex-end;\n  box-shadow: 1px 1px 1px;\n  border: none;\n  border-radius: 6px;\n  padding: 2px 3px;\n  background: #ed7966;\n  color: white;\n  font-weight: 600;\n}\n\n@media only screen and (max-width: 500px) {\n  .container {\n    flex-direction: column;\n  }\n\n  .board {\n    margin-bottom: 50px;\n  }\n}\n",""]);const a=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(e[p].references++,e[p].updater(f)):e.push({identifier:u,updater:o(f,r),references:1}),i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=new class{setScores=async(n,e)=>{const t=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uGidfxD7uXav77djQKgn/scores",{method:"POST",body:JSON.stringify({user:n,score:e}),headers:{"Content-type":"application/json; charset=UTF-8"}});return await t.json()};asyncRequest=async()=>{await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/",{method:"POST",body:JSON.stringify({name:"Trializma"}),headers:{"Content-type":"application/json; charset=UTF-8"}})};getScores=async()=>{const n=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uGidfxD7uXav77djQKgn/scores");return(await n.json()).result}},b=new class{leaderboard=document.querySelector(".board__content");form=document.querySelector(".form");newScore=()=>{const n=this.form.name.value,e=this.form.score.value;h.setScores(n,e),this.form.name.value="",this.form.score.value=""};createScore=n=>{const{user:e,score:t}=n,r=document.createElement("li");r.classList.add("board__item"),r.innerHTML=`${e}: ${t}`,this.leaderboard.appendChild(r)};loadScores=async()=>{let n=[];n=await h.getScores(),this.sortScores(n),n.forEach((n=>{this.createScore(n)}))};clearBoard=()=>{this.leaderboard.innerHTML=""};sortScores=n=>n.sort(((n,e)=>e.score-n.score))},x=document.querySelector(".form__submit"),g=document.querySelector(".board__refresh");x.addEventListener("click",(n=>{n.preventDefault(),b.newScore()})),g.addEventListener("click",(()=>{b.clearBoard(),b.loadScores()})),window.addEventListener("load",(()=>{b.clearBoard(),b.loadScores()}))})()})();