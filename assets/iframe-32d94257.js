import"../sb-preview/runtime.mjs";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const _ of e.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const R="modulepreload",f=function(r,n){return new URL(r,n).href},a={},o=function(n,s,l){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=f(e,l),e in a)return;a[e]=!0;const _=e.endsWith(".css"),d=_?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const O=t[c];if(O.href===e&&(!_||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const i=document.createElement("link");if(i.rel=_?"stylesheet":R,_||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),_)return new Promise((c,O)=>{i.addEventListener("load",c),i.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},{createChannel:p}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:S}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:E}=__STORYBOOK_MODULE_PREVIEW_API__,m=p({page:"preview"});E.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;const{SERVER_CHANNEL_URL:u}=globalThis;if(u){const r=S({url:u});E.setServerChannel(r),window.__STORYBOOK_SERVER_CHANNEL__=r}const T={};async function P(r){return T[r]()}const{composeConfigs:w,PreviewWeb:L,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const r=await Promise.all([o(()=>import("./config-9377d811.js"),["./config-9377d811.js","./index-8a581957.js","./_commonjsHelpers-725317a4.js"],import.meta.url),o(()=>import("./preview-0435c720.js"),["./preview-0435c720.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),o(()=>import("./preview-745c3597.js"),[],import.meta.url),o(()=>import("./preview-e0dcbdf1.js"),["./preview-e0dcbdf1.js","./_commonjsHelpers-725317a4.js"],import.meta.url),o(()=>import("./preview-f96f0111.js"),["./preview-f96f0111.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-e6f1f377.js"),["./preview-e6f1f377.js","./index-d475d2ea.js"],import.meta.url),o(()=>import("./preview-62235626.js"),["./preview-62235626.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),o(()=>import("./preview-4372e0bb.js"),["./preview-4372e0bb.js","./index-d475d2ea.js","./_commonjsHelpers-725317a4.js"],import.meta.url),o(()=>import("./preview-6e8f1c2b.js"),["./preview-6e8f1c2b.js","./preview-1a3a6d19.css"],import.meta.url)]);return w(r)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new h({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:A});export{o as _};
//# sourceMappingURL=iframe-32d94257.js.map