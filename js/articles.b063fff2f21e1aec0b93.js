!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=102)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(54))},function(t,n,e){var r=e(0),o=e(10),i=e(31),u=e(64),c=r.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=u&&c[t]||(u?c:i)("Symbol."+t))}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(3);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(5),o=e(27),i=e(4),u=e(22),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(5),o=e(8),i=e(21);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(28),o=e(56);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(60),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(0),o=e(10),i=e(9),u=e(7),c=e(20),a=e(29),s=e(30),p=s.get,f=s.enforce,l=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,n,e,o){var a=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,p=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||u(e,"name")||i(e,"name",n),f(e).source=l.join("string"==typeof n?n:"")),t!==r?(a?!p&&t[n]&&(s=!0):delete t[n],s?t[n]=e:i(t,n,e)):s?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&p(this).source||a.call(this)}))},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){"use strict";e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return c})),e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o})),e.d(n,"e",(function(){return i}));var r='<li class="header__link header__link_type_selected">\n<a class="links" href="index.html">Главная</a>\n</li>\n<li class="header__link ">\n<a class="links" href="articles.html">Сохранённые</a>\n</li>\n<li class="header__link header__link_type_button button_type_exit">\n<a class="links" href="index.html"></a>\n<img class="icon-exit" alt="icon-exit" src="../images/exit-white.png">\n</li>\n',o='<li class="header__link">\n<a class="links" href="index.html">Главная</a>\n</li>\n<li class="header__link header__link_type_selected">\n<a class="links" href="articles.html">Сохранённые</a>\n</li>\n<li class="header__link header__link_type_button button_type_exit">\n<a class="links" href="index.html"></a>\n<img class="icon-exit" alt="icon-exit" src="../images/exit-black.png">\n</li>\n',i='\n<div class="popup__content popup__content_type_form">\n<img src="../images/close.png" alt="" class="popup__close">\n<h3 class="popup__title">Пользователь успешно зарегистрирован!</h3>\n<span class="popup__subtext popup__button button_type_signin" >Выполнить вход</span>\n</div>',u='\n<div class="popup__content popup__content_type_form">\n<img src="../images/close.png" alt="" class="popup__close">\n<h3 class="popup__title">Вход</h3>\n<form class="popup__form popup__form_type_login" name="login" novalidate>\n  <div class="popup__input-container">\n    <p class="popup__input-title">Email</p>\n    <input type="text" name="email"\n      pattern="^[a-zA-Z0-9]((-|_)?[a-zA-Z0-9]+)*@([a-zA-Z0-9]((-)?[a-zA-Z0-9]+)*.)+[a-zA-Z]{2,}$"\n      class="popup__input popup__input_type_email" placeholder="Введите почту" required>\n    <span class="error-message"> </span>\n  </div>\n  <div class="popup__input-container">\n    <p class="popup__input-title">Пароль</p>\n    <input type="text" name="password" minlength="8" class="popup__input popup__input_type_password"\n      placeholder="Введите пароль" required>\n    <span class="error-message"> </span>\n  </div>\n  <span class="error-message server-error"></span>\n  <button type="submit" class="popup__submit">Войти</button>\n  <span class="popup__text">или<button class="popup__button button_type_signup">Зарегистрироваться</button></span>\n</form>\n</div>',c='\n<div class="popup__content popup__content_type_form">\n<img src="../images/close.png" alt="" class="popup__close">\n      <h3 class="popup__title">Регистрация</h3>\n      <form class="popup__form popup__form_type_signup" name="signup" novalidate>\n        <div class="popup__input-container">\n          <p class="popup__input-title">Email</p>\n          <input type="text" name="email"\n            pattern="^[a-zA-Z0-9]((-|_)?[a-zA-Z0-9]+)*@([a-zA-Z0-9]((-)?[a-zA-Z0-9]+)*.)+[a-zA-Z]{2,}$"\n            class="popup__input popup__input_type_email" placeholder="Введите почту" required>\n          <span class="error-message"> </span>\n        </div>\n        <div class="popup__input-container">\n          <p class="popup__input-title">Пароль</p>\n          <input type="text" name="password" minlength="8" class="popup__input popup__input_type_password"\n            placeholder="Введите пароль" required>\n          <span class="error-message"> </span>\n        </div>\n        <div class="popup__input-container">\n          <p class="popup__input-title">Имя</p>\n          <input type="text" name="name" minlength="2" maxlength="30" class="popup__input popup__input_type_name"\n            placeholder="Введите свое имя" required>\n          <span class="error-message"> </span>\n        </div>\n        <span class="error-message server-error"></span>\n        <button type="submit" class="popup__submit">Зарегистрироваться</button>\n        <span class="popup__text">или<button class="popup__button button_type_login">Войти</button></span>\n      </form>\n    </div>'},function(t,n,e){var r=e(0),o=e(19).f,i=e(9),u=e(12),c=e(20),a=e(58),s=e(34);t.exports=function(t,n){var e,p,f,l,v,h=t.target,d=t.global,_=t.stat;if(e=d?r:_?r[h]||c(h,{}):(r[h]||{}).prototype)for(p in n){if(l=n[p],f=t.noTargetGet?(v=o(e,p))&&v.value:e[p],!s(d?p:h+(_?".":"#")+p,t.forced)&&void 0!==f){if(typeof l==typeof f)continue;a(l,f)}(t.sham||f&&f.sham)&&i(l,"sham",!0),u(e,p,l,t)}}},function(t,n,e){var r=e(44),o=e(26);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(32),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return i})),e.d(n,"d",(function(){return u}));var r=document.querySelector(".popup"),o=document.querySelector(".header__menu"),i="button_type_login",u="button_type_signup"},function(t,n,e){var r=e(5),o=e(55),i=e(21),u=e(16),c=e(22),a=e(7),s=e(27),p=Object.getOwnPropertyDescriptor;n.f=r?p:function(t,n){if(t=u(t),n=c(n,!0),s)try{return p(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(0),o=e(9);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(2);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(0),o=e(2),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n){t.exports={}},function(t,n,e){var r=e(13);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(5),o=e(3),i=e(23);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=!1},function(t,n,e){var r=e(10);t.exports=r("native-function-to-string",Function.toString)},function(t,n,e){var r,o,i,u=e(57),c=e(0),a=e(2),s=e(9),p=e(7),f=e(45),l=e(24),v=c.WeakMap;if(u){var h=new v,d=h.get,_=h.has,y=h.set;r=function(t,n){return y.call(h,t,n),n},o=function(t){return d.call(h,t)||{}},i=function(t){return _.call(h,t)}}else{var m=f("state");l[m]=!0,r=function(t,n){return s(t,m,n),n},o=function(t){return p(t,m)?t[m]:{}},i=function(t){return p(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(3),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==s||e!=a&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(6),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n){t.exports={}},function(t,n,e){var r,o,i,u=e(0),c=e(3),a=e(6),s=e(25),p=e(49),f=e(23),l=e(38),v=u.location,h=u.setImmediate,d=u.clearImmediate,_=u.process,y=u.MessageChannel,m=u.Dispatch,g=0,b={},x=function(t){if(b.hasOwnProperty(t)){var n=b[t];delete b[t],n()}},w=function(t){return function(){x(t)}},j=function(t){x(t.data)},S=function(t){u.postMessage(t+"",v.protocol+"//"+v.host)};h&&d||(h=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return b[++g]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(g),g},d=function(t){delete b[t]},"process"==a(_)?r=function(t){_.nextTick(w(t))}:m&&m.now?r=function(t){m.now(w(t))}:y&&!l?(i=(o=new y).port2,o.port1.onmessage=j,r=s(i.postMessage,i,1)):!u.addEventListener||"function"!=typeof postMessage||u.importScripts||c(S)?r="onreadystatechange"in f("script")?function(t){p.appendChild(f("script")).onreadystatechange=function(){p.removeChild(this),x(t)}}:function(t){setTimeout(w(t),0)}:(r=S,u.addEventListener("message",j,!1))),t.exports={set:h,clear:d}},function(t,n,e){var r=e(39);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,n,e){var r=e(11);t.exports=r("navigator","userAgent")||""},function(t,n,e){"use strict";var r=e(13),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n,e){var r,o,i=e(0),u=e(39),c=i.process,a=c&&c.versions,s=a&&a.v8;s?o=(r=s.split("."))[0]+r[1]:u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e(51),e(52);function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.url="http://localhost:3000/api"}var n,e,o;return n=t,(e=[{key:"login",value:function(t,n){return fetch("".concat(this.url,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})})}},{key:"getMe",value:function(){return fetch("".concat(this.url,"/users/me"),{method:"GET",headers:{authorization:"Bearer ".concat(localStorage.getItem("token")),"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"signup",value:function(t,n,e){return fetch("".concat(this.url,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n,name:e})})}}])&&r(n.prototype,e),o&&r(n,o),t}()},function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e.d(n,"a",(function(){return o}));var o=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.menuContainer=n}var n,e,o;return n=t,(e=[{key:"setMenu",value:function(t,n){this.clearMenu(),this.menuContainer.insertAdjacentHTML("beforeend",t),n&&""!==n&&this.setNameOnButton(n)}},{key:"clearMenu",value:function(){for(;this.menuContainer.firstChild;)this.menuContainer.removeChild(this.menuContainer.firstChild)}},{key:"setNameOnButton",value:function(t){this.menuContainer.querySelector(".header__link_type_button").querySelector(".links").textContent=t}}])&&r(n.prototype,e),o&&r(n,o),t}()},function(t,n,e){var r=e(3),o=e(6),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(10),o=e(31),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(7),o=e(16),i=e(47).indexOf,u=e(24);t.exports=function(t,n){var e,c=o(t),a=0,s=[];for(e in c)!r(u,e)&&r(c,e)&&s.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(16),o=e(17),i=e(48),u=function(t){return function(n,e,u){var c,a=r(n),s=o(a.length),p=i(u,s);if(t&&e!=e){for(;s>p;)if((c=a[p++])!=c)return!0}else for(;s>p;p++)if((t||p in a)&&a[p]===e)return t||p||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(32),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(11);t.exports=r("document","documentElement")},function(t,n,e){var r=e(5),o=e(8).f,i=Function.prototype,u=i.toString,c=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return u.call(this).match(c)[1]}catch(t){return""}}})},function(t,n,e){var r=e(12),o=e(66),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(t,n,e){"use strict";var r,o,i,u,c=e(15),a=e(28),s=e(0),p=e(11),f=e(67),l=e(12),v=e(68),h=e(10),d=e(69),_=e(70),y=e(2),m=e(13),g=e(71),b=e(6),x=e(72),w=e(76),j=e(77),S=e(37).set,O=e(78),k=e(79),T=e(80),E=e(40),P=e(81),M=e(30),C=e(34),A=e(1),z=e(41),q=A("species"),N="Promise",I=M.get,Z=M.set,F=M.getterFor(N),L=f,D=s.TypeError,B=s.document,G=s.process,R=h("inspectSource"),W=p("fetch"),H=E.f,J=H,K="process"==b(G),U=!!(B&&B.createEvent&&s.dispatchEvent),$=C(N,(function(){var t=R(L)!==String(L);if(66===z)return!0;if(!t&&!K&&"function"!=typeof PromiseRejectionEvent)return!0;if(a&&!L.prototype.finally)return!0;if(z>=51&&/native code/.test(L))return!1;var n=L.resolve(1),e=function(t){t((function(){}),(function(){}))};return(n.constructor={})[q]=e,!(n.then((function(){}))instanceof e)})),V=$||!w((function(t){L.all(t).catch((function(){}))})),Y=function(t){var n;return!(!y(t)||"function"!=typeof(n=t.then))&&n},Q=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;O((function(){for(var o=n.value,i=1==n.state,u=0;r.length>u;){var c,a,s,p=r[u++],f=i?p.ok:p.fail,l=p.resolve,v=p.reject,h=p.domain;try{f?(i||(2===n.rejection&&et(t,n),n.rejection=1),!0===f?c=o:(h&&h.enter(),c=f(o),h&&(h.exit(),s=!0)),c===p.promise?v(D("Promise-chain cycle")):(a=Y(c))?a.call(c,l,v):l(c)):v(o)}catch(t){h&&!s&&h.exit(),v(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&tt(t,n)}))}},X=function(t,n,e){var r,o;U?((r=B.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:n,reason:e},(o=s["on"+t])?o(r):"unhandledrejection"===t&&T("Unhandled promise rejection",e)},tt=function(t,n){S.call(s,(function(){var e,r=n.value;if(nt(n)&&(e=P((function(){K?G.emit("unhandledRejection",r,t):X("unhandledrejection",t,r)})),n.rejection=K||nt(n)?2:1,e.error))throw e.value}))},nt=function(t){return 1!==t.rejection&&!t.parent},et=function(t,n){S.call(s,(function(){K?G.emit("rejectionHandled",t):X("rejectionhandled",t,n.value)}))},rt=function(t,n,e,r){return function(o){t(n,e,o,r)}},ot=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,Q(t,n,!0))},it=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw D("Promise can't be resolved itself");var o=Y(e);o?O((function(){var r={done:!1};try{o.call(e,rt(it,t,r,n),rt(ot,t,r,n))}catch(e){ot(t,r,e,n)}})):(n.value=e,n.state=1,Q(t,n,!1))}catch(e){ot(t,{done:!1},e,n)}}};$&&(L=function(t){g(this,L,N),m(t),r.call(this);var n=I(this);try{t(rt(it,this,n),rt(ot,this,n))}catch(t){ot(this,n,t)}},(r=function(t){Z(this,{type:N,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(L.prototype,{then:function(t,n){var e=F(this),r=H(j(this,L));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=K?G.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&Q(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=I(t);this.promise=t,this.resolve=rt(it,t,n),this.reject=rt(ot,t,n)},E.f=H=function(t){return t===L||t===i?new o(t):J(t)},a||"function"!=typeof f||(u=f.prototype.then,l(f.prototype,"then",(function(t,n){var e=this;return new L((function(t,n){u.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof W&&c({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return k(L,W.apply(s,arguments))}}))),c({global:!0,wrap:!0,forced:$},{Promise:L}),d(L,N,!1,!0),_(N),i=p(N),c({target:N,stat:!0,forced:$},{reject:function(t){var n=H(this);return n.reject.call(void 0,t),n.promise}}),c({target:N,stat:!0,forced:a||$},{resolve:function(t){return k(a&&this===i?L:this,t)}}),c({target:N,stat:!0,forced:V},{all:function(t){var n=this,e=H(n),r=e.resolve,o=e.reject,i=P((function(){var e=m(n.resolve),i=[],u=0,c=1;x(t,(function(t){var a=u++,s=!1;i.push(void 0),c++,e.call(n,t).then((function(t){s||(s=!0,i[a]=t,--c||r(i))}),o)})),--c||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=H(n),r=e.reject,o=P((function(){var o=m(n.resolve);x(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},,function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(20),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(0),o=e(29),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){var r=e(7),o=e(59),i=e(19),u=e(8);t.exports=function(t,n){for(var e=o(n),c=u.f,a=i.f,s=0;s<e.length;s++){var p=e[s];r(t,p)||c(t,p,a(n,p))}}},function(t,n,e){var r=e(11),o=e(61),i=e(62),u=e(4);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){t.exports=e(0)},function(t,n,e){var r=e(46),o=e(33).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},,function(t,n,e){var r=e(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},,function(t,n,e){"use strict";var r=e(35),o={};o[e(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,n,e){var r=e(0);t.exports=r.Promise},function(t,n,e){var r=e(12);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){var r=e(8).f,o=e(7),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";var r=e(11),o=e(8),i=e(1),u=e(5),c=i("species");t.exports=function(t){var n=r(t),e=o.f;u&&n&&!n[c]&&e(n,c,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(4),o=e(73),i=e(17),u=e(25),c=e(74),a=e(75),s=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,p,f){var l,v,h,d,_,y,m,g=u(n,e,p?2:1);if(f)l=t;else{if("function"!=typeof(v=c(t)))throw TypeError("Target is not iterable");if(o(v)){for(h=0,d=i(t.length);d>h;h++)if((_=p?g(r(m=t[h])[0],m[1]):g(t[h]))&&_ instanceof s)return _;return new s(!1)}l=v.call(t)}for(y=l.next;!(m=y.call(l)).done;)if("object"==typeof(_=a(l,g,m.value,p))&&_&&_ instanceof s)return _;return new s(!1)}).stop=function(t){return new s(!0,t)}},function(t,n,e){var r=e(1),o=e(36),i=r("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,n,e){var r=e(35),o=e(36),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(4);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[r]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(4),o=e(13),i=e(1)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||null==(e=r(u)[i])?n:o(e)}},function(t,n,e){var r,o,i,u,c,a,s,p,f=e(0),l=e(19).f,v=e(6),h=e(37).set,d=e(38),_=f.MutationObserver||f.WebKitMutationObserver,y=f.process,m=f.Promise,g="process"==v(y),b=l(f,"queueMicrotask"),x=b&&b.value;x||(r=function(){var t,n;for(g&&(t=y.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?u():i=void 0,t}}i=void 0,t&&t.enter()},g?u=function(){y.nextTick(r)}:_&&!d?(c=!0,a=document.createTextNode(""),new _(r).observe(a,{characterData:!0}),u=function(){a.data=c=!c}):m&&m.resolve?(s=m.resolve(void 0),p=s.then,u=function(){p.call(s,r)}):u=function(){h.call(f,r)}),t.exports=x||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,u()),i=n}},function(t,n,e){var r=e(4),o=e(2),i=e(40);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(50),e(103);var r=e(42),o=e(43),i=e(18),u=e(14),c=new r.a,a=new o.a(i.b);c.getMe().then((function(t){t&&a.setMenu(u.a,t.name)})).catch((function(t){return console.log(t)}))},function(t,n,e){}]);