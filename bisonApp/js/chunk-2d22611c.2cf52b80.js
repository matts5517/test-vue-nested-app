(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22611c"],{e6a6:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return u})),r.d(t,"contentToBlob",(function(){return h})),r.d(t,"fetchResources",(function(){return c})),r.d(t,"getSiblingOfSameType",(function(){return m})),r.d(t,"getSiblingOfSameTypeI",(function(){return b})),r.d(t,"removeAllResources",(function(){return l})),r.d(t,"removeResource",(function(){return i})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return p}));var n=r("2eab"),a=r("ce50"),o=r("b2b2"),s=r("e041");async function c(e,t={},r){await e.load(r);const n=Object(s["z"])(e.itemUrl,"resources"),{start:a=1,num:c=10,sortOrder:u="asc",sortField:i="created"}=t,l={query:{start:a,num:c,sortOrder:u,sortField:i,token:e.apiKey},signal:Object(o["g"])(r,"signal")},d=await e.portal._request(n,l);return{total:d.total,nextStart:d.nextStart,resources:d.resources.map(({created:t,size:r,resource:n})=>({created:new Date(t),size:r,resource:e.resourceFromPath(n)}))}}async function u(e,t,r,n){if(!e.hasPath())throw new a["a"](`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const c=e.portalItem;await c.load(n);const u=Object(s["z"])(c.userItemUrl,"add"===t?"addResources":"updateResources"),[i,l]=d(e.path),p=await h(r),f=new FormData;return i&&"."!==i&&f.append("resourcesPrefix",i),f.append("fileName",l),f.append("file",p,l),f.append("f","json"),Object(o["i"])(n)&&n.access&&f.append("access",n.access),await c.portal._request(u,{method:"post",body:f,signal:Object(o["g"])(n,"signal")}),e}async function i(e,t,r){if(!t.hasPath())throw new a["a"]("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const n=Object(s["z"])(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:t.path},signal:Object(o["g"])(r,"signal")}),t.portalItem=null}async function l(e,t){await e.load(t);const r=Object(s["z"])(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:Object(o["g"])(t,"signal")})}function d(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e){const[t,r]=f(e),[n,a]=d(t);return[n,a,r]}function f(e){const t=Object(s["n"])(e);return Object(o["h"])(t)?[e,""]:[e.slice(0,e.length-t.length-1),"."+t]}async function h(e){return e instanceof Blob?e:(await Object(n["default"])(e.url,{responseType:"blob"})).data}function m(e,t){if(!e.hasPath())return null;const[r,,n]=p(e.path);return e.portalItem.resourceFromPath(Object(s["z"])(r,t+n))}function b(e,t){if(!e.hasPath())return null;const[r,,n]=p(e.path);return e.portalItem.resourceFromPath(Object(s["z"])(r,t+n))}}}]);
//# sourceMappingURL=chunk-2d22611c.2cf52b80.js.map