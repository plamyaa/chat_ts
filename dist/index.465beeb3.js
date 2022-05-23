function e(e){return e&&e.__esModule?e.default:e}var t={};function n(e){try{return JSON.stringify(e)}catch(e){return alert("Error "+e.name+":"+e.message+"\n"+e.stack),null}}function o(e){try{return JSON.parse(e)}catch(e){return void alert("Error "+e.name+":"+e.message+"\n"+e.stack)}}t=function(){function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}function t(n,o){function s(t,s,r){if("undefined"!=typeof document){"number"==typeof(r=e({},o,r)).expires&&(r.expires=new Date(Date.now()+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var a in r)r[a]&&(i+="; "+a,!0!==r[a]&&(i+="="+r[a].split(";")[0]));return document.cookie=t+"="+n.write(s,t)+i}}function r(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},s=0;s<t.length;s++){var r=t[s].split("="),i=r.slice(1).join("=");try{var a=decodeURIComponent(r[0]);if(o[a]=n.read(i,a),e===a)break}catch(e){}}return e?o[e]:o}}return Object.create({set:s,get:r,remove:function(t,n){s(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}();const s={CONTAINER:document.querySelector(".container-shape"),SETTINGS_BUTTON:document.querySelector(".buttons-above__settings"),EXIT_BUTTON:document.querySelector(".buttons-above__exit"),ENTER_CODE:document.querySelector(".modal-autorization__code"),SEND_TEXT:document.querySelector(".message-below__input"),SEND_BUTTON:document.querySelector(".message-below__button"),CHAT:document.querySelector(".chat"),CHAT_WINDOW:document.querySelector(".chat-window"),TEMPLATE:document.querySelector("#template-message"),MODAL:{SETTINGS:{TEXT:document.querySelector(".modal-settings__input"),SEND_BUTTON:document.querySelector(".modal-settings__button"),EXIT:document.querySelector(".modal-settings__exit")},AUTORIZATION:{TEXT:document.querySelector(".modal-autorization__input"),SEND_BUTTON:document.querySelector(".modal-autorization__button"),EXIT:document.querySelector(".modal-autorization__exit")},CONFIRMATION:{TEXT:document.querySelector(".modal-confirmation__input"),SEND_BUTTON:document.querySelector(".modal-confirmation__button"),EXIT:document.querySelector(".modal-confirmation__exit")}},MODAL_SETTINGS:document.querySelector(".modal-settings"),MODAL_AUTORIZATION:document.querySelector(".modal-autorization"),MODAL_CONFIRMATION:document.querySelector(".modal-confirmation"),USER_API:"https://mighty-cove-31255.herokuapp.com/api/user",MESSAGES_API:"https://mighty-cove-31255.herokuapp.com/api/messages",SERVER_API:"ws://mighty-cove-31255.herokuapp.com/websockets?"};class r{constructor(){this.token=e(t).get("token"),this.socket=new WebSocket(`${s.SERVER_API+this.token}`)}listener(){this.socket.addEventListener("message",(e=>this.addMessage(e))),this.socket.addEventListener("error",(e=>alert(e.message))),this.socket.addEventListener("close",(new r).listener)}sendMessage(e){this.socket.send(n({text:`${e}`}))}addMessage(e){const t=o(e.data);s.CHAT_WINDOW.append(i(t)),s.CHAT.scrollTop+=1e5}}function i(n){const o=function(e){return{formValue:e.text,name:e.user.name,date:new Date(e.createdAt),email:e.user.email}}(n),r=document.createElement("div");var i;return r.classList.add("chat-window__message"),o.email!=e(t).get("email")?r.classList.add("message-he"):r.classList.add("message-my"),r.append(s.TEMPLATE.content.cloneNode(!0)),r.firstElementChild.textContent=o.name+": "+o.formValue,r.lastElementChild.textContent=(i=o.date,String(i).slice(16,21)),r}function a(e){const t=o(localStorage.getItem("messagesHistory")),n=t.length-1;for(let o=n-e;o>n-e-20;o--){let e=i(t[o]);s.CHAT_WINDOW.prepend(e),s.CHAT.scrollTop+=e.clientHeight-48}}function c(){return e(t).get("token")?(s.EXIT_BUTTON.textContent="Выйти",!0):(s.EXIT_BUTTON.textContent="Войти",!1)}class l{constructor(){this.input=s.SEND_TEXT,this.send=s.SEND_BUTTON,this.chatScroll=s.CHAT,this.chat=s.CHAT_WINDOW}listener(){c();const n=new r;this.send.addEventListener("click",(()=>{s.SEND_TEXT.value&&function(){const n=e(t).get("email"),o=e(t).get("token"),s=e(t).get("myName");return n?o?s?((new r).listener(),!0):(alert("Пожалуйста введите имя в настройках"),!1):(alert("Пожалуйста введите токен"),!1):(alert("Пожалуйста авторизуйтесь"),!1)}()&&n.sendMessage(s.SEND_TEXT.value),s.SEND_TEXT.value=""}));let o=0;this.chatScroll.addEventListener("scroll",(()=>{0===s.CHAT.scrollTop&&(o++,a(20*o))}))}showModal(e){s.CONTAINER.style.display="none",e.style.display="block",document.body.style.background="#535353"}hideModal(e){s.CONTAINER.style.display="flex",e.style.display="none",document.body.style.background="#FFF"}}const T=new class{constructor(){this.window=s.MODAL_CONFIRMATION,this.sendButton=s.MODAL.CONFIRMATION.SEND_BUTTON,this.exitButton=s.MODAL.CONFIRMATION.EXIT,this.input=s.MODAL.CONFIRMATION.TEXT}listener(){const n=new l;this.sendButton.addEventListener("click",(()=>{if(s.MODAL.CONFIRMATION.TEXT.value){const o=s.MODAL.CONFIRMATION.TEXT.value;e(t).set("token",o),n.hideModal(s.MODAL_CONFIRMATION),n.showModal(s.MODAL_SETTINGS)}else alert("Введите токен");s.MODAL.CONFIRMATION.TEXT.value=""})),this.exitButton.addEventListener("click",(()=>n.hideModal(s.MODAL_CONFIRMATION)))}},d=new class{constructor(){this.mainButton=s.SETTINGS_BUTTON,this.window=s.MODAL_SETTINGS,this.sendButton=s.MODAL.SETTINGS.SEND_BUTTON,this.exitButton=s.MODAL.SETTINGS.EXIT,this.input=s.MODAL.SETTINGS.TEXT}listener(){const o=new l;s.MODAL.SETTINGS.SEND_BUTTON.addEventListener("click",(()=>{if(s.MODAL.SETTINGS.TEXT.value){const r=s.MODAL.SETTINGS.TEXT.value;e(t).set("myName",r),o.hideModal(s.MODAL_SETTINGS),async function(o){const r=n({name:o}),i=e(t).get("token");try{fetch(s.USER_API,{method:"PATCH",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json;charset=utf-8"},body:r})}catch(e){alert("Error "+e.name+":"+e.message+"\n"+e.stack)}}(r)}else alert("Введите имя");s.MODAL.SETTINGS.TEXT.value=""})),this.mainButton.addEventListener("click",(()=>o.showModal(s.MODAL_SETTINGS))),this.exitButton.addEventListener("click",(()=>o.hideModal(s.MODAL_SETTINGS)))}},u=new class{constructor(){this.mainButton=s.EXIT_BUTTON,this.window=s.MODAL_AUTORIZATION,this.sendButton=s.MODAL.AUTORIZATION.SEND_BUTTON,this.exitButton=s.MODAL.AUTORIZATION.EXIT,this.toConfirmation=s.ENTER_CODE,this.input=s.MODAL.AUTORIZATION.TEXT}listener(){const o=new l;this.sendButton.addEventListener("click",(()=>{if(s.MODAL.AUTORIZATION.TEXT.value.includes("@")){const r=s.MODAL.AUTORIZATION.TEXT.value;e(t).set("email",r),o.hideModal(s.MODAL_AUTORIZATION),o.showModal(s.MODAL_CONFIRMATION),async function(e){const t=n({email:e});try{fetch(s.USER_API,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:t})}catch(e){alert("Error "+e.name+":"+e.message+"\n"+e.stack)}}(r),s.MODAL.AUTORIZATION.TEXT.value=""}else alert("Введите корректный email")})),this.mainButton.addEventListener("click",(()=>{c()&&(e(t).remove("myName"),e(t).remove("email"),e(t).remove("token"),this.mainButton.textContent="Войти"),o.showModal(s.MODAL_AUTORIZATION)})),this.exitButton.addEventListener("click",(()=>o.hideModal(s.MODAL_AUTORIZATION))),this.toConfirmation.addEventListener("click",(()=>{o.hideModal(s.MODAL_AUTORIZATION),o.showModal(s.MODAL_CONFIRMATION)}))}},m=new l;document.addEventListener("DOMContentLoaded",(()=>{if(m.listener(),u.listener(),d.listener(),T.listener(),async function(){try{const e=await fetch(s.MESSAGES_API,{method:"GET",headers:{"Content-Type":"application/json;"}}),t=n((await e.json()).messages);localStorage.setItem("messagesHistory",`${t}`),a(0),s.CHAT.scrollTop+=1e4}catch(e){alert("Error "+e.name+":"+e.message+"\n"+e.stack)}}(),c()){(new r).listener()}}));
//# sourceMappingURL=index.465beeb3.js.map
