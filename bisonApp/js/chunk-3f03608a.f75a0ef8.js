(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f03608a"],{"008c":function(t,e,n){"use strict";n.d(e,"a",(function(){return T})),n.d(e,"b",(function(){return w})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return k})),n.d(e,"e",(function(){return A})),n.d(e,"f",(function(){return O})),n.d(e,"g",(function(){return I}));var r=n("a9ab");const i=(t,e,n)=>[e,n],o=(t,e,n)=>[e,n,t[2]],s=(t,e,n)=>[e,n,t[2],t[3]];function a(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:t.extent?[t.extent.xmin,t.extent.ymax]:[0,0]}:null}function u({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function c({scale:t,translate:e},n){return Math.round((e[1]-n)/t[1])}function h(t,e,n){const r=[];let i,o,s,a;for(let h=0;h<n.length;h++){const l=n[h];h>0?(s=u(t,l[0]),a=c(t,l[1]),s===i&&a===o||(r.push(e(l,s-i,a-o)),i=s,o=a)):(i=u(t,l[0]),o=c(t,l[1]),r.push(e(l,i,o)))}return r.length>0?r:null}function l(t,e,n,r){return h(t,n?r?s:o:r?o:i,e)}function f(t,e,n,r){const a=[],u=n?r?s:o:r?o:i;for(let i=0;i<e.length;i++){const n=h(t,u,e[i]);n&&n.length>=3&&a.push(n)}return a.length?a:null}function d(t,e,n,r){const a=[],u=n?r?s:o:r?o:i;for(let i=0;i<e.length;i++){const n=h(t,u,e[i]);n&&n.length>=2&&a.push(n)}return a.length?a:null}function m({scale:t,translate:e},n){return n*t[0]+e[0]}function p({scale:t,translate:e},n){return e[1]-n*t[1]}function y(t,e,n){const r=new Array(n.length);if(!n.length)return r;const[i,o]=t.scale;let s=m(t,n[0][0]),a=p(t,n[0][1]);r[0]=e(n[0],s,a);for(let u=1;u<n.length;u++){const t=n[u];s+=t[0]*i,a-=t[1]*o,r[u]=e(t,s,a)}return r}function g(t,e,n){const r=new Array(n.length);for(let i=0;i<n.length;i++)r[i]=y(t,e,n[i]);return r}function b(t,e,n,r){return y(t,n?r?s:o:r?o:i,e)}function x(t,e,n,r){return g(t,n?r?s:o:r?o:i,e)}function M(t,e,n,r){return g(t,n?r?s:o:r?o:i,e)}function P(t,e,n,r,i){return e.xmin=u(t,n.xmin),e.ymin=c(t,n.ymin),e.xmax=u(t,n.xmax),e.ymax=c(t,n.ymax),e!==n&&(r&&(e.zmin=n.zmin,e.zmax=n.zmax),i&&(e.mmin=n.mmin,e.mmax=n.mmax)),e}function C(t,e,n,r,i){return e.points=l(t,n.points,r,i),e}function w(t,e,n,r,i){return e.x=u(t,n.x),e.y=c(t,n.y),e!==n&&(r&&(e.z=n.z),i&&(e.m=n.m)),e}function v(t,e,n,r,i){const o=f(t,n.rings,r,i);return o?(e.rings=o,e):null}function G(t,e,n,r,i){const o=d(t,n.paths,r,i);return o?(e.paths=o,e):null}function T(t,e){return t&&e?Object(r["f"])(e)?w(t,{},e,!1,!1):Object(r["h"])(e)?G(t,{},e,!1,!1):Object(r["g"])(e)?v(t,{},e,!1,!1):Object(r["e"])(e)?C(t,{},e,!1,!1):Object(r["d"])(e)?P(t,{},e,!1,!1):null:null}function k(t,e,n,r,i){return e.points=b(t,n.points,r,i),e}function A(t,e,n,r,i){return e.x=m(t,n.x),e.y=p(t,n.y),e!==n&&(r&&(e.z=n.z),i&&(e.m=n.m)),e}function O(t,e,n,r,i){return e.rings=M(t,n.rings,r,i),e}function I(t,e,n,r,i){return e.paths=x(t,n.paths,r,i),e}},"01bf":function(t,e,n){"use strict";n.r(e);var r=n("6c97"),i=n("f2e0"),o=n("5996"),s=(n("f0b9"),n("c120"),n("b2b2"),n("a21b"),n("4261")),a=n("9180"),u=(n("008c"),n("74e2"),n("a1f3"));class c{constructor(t,e,n){this.uid=t,this.geometry=e,this.attributes=n,this.visible=!0,this.objectId=null,this.centroid=null}}class h{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}Object(s["b"])(),Object(a["f"])();var l=n("6655"),f=n("8914");function d(t,e){return e}function m(t,e,n,r){switch(n){case 0:return b(t,e+r,0);case 1:return"lowerLeft"===t.originPosition?b(t,e+r,1):x(t,e+r,1)}}function p(t,e,n,r){switch(n){case 2:return b(t,e,2);default:return m(t,e,n,r)}}function y(t,e,n,r){switch(n){case 2:return b(t,e,3);default:return m(t,e,n,r)}}function g(t,e,n,r){switch(n){case 3:return b(t,e,3);default:return p(t,e,n,r)}}function b({translate:t,scale:e},n,r){return t[r]+n*e[r]}function x({translate:t,scale:e},n,r){return t[r]-n*e[r]}class M{constructor(t){this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=d,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return new h}finishFeatureResult(t){if(this.options.applyTransform&&(t.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!t.hasZ)return;const e=Object(f["a"])(t.geometryType,this.options.sourceSpatialReference,t.spatialReference);if(e)for(const n of t.features)e(n.geometry)}createSpatialReference(){return new o["a"]}addField(t,e){t.fields.push(u["a"].fromJSON(e));const n=t.fields.map(t=>t.name);this.AttributesConstructor=function(){for(const t of n)this[t]=null}}addFeature(t,e){const n=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(n>0)for(const r in e.attributes){const t=e.attributes[r];"string"==typeof t&&t.length>n&&(e.attributes[r]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:n,queryGeometryType:r}=e,i=Object(l["z"])(n.clone(),n,!1,!1,this.transform),o=Object(l["k"])(i,r,!1,!1);let s=null;switch(r){case"esriGeometryPoint":s="point";break;case"esriGeometryPolygon":s="polygon";break;case"esriGeometryPolyline":s="polyline";break;case"esriGeometryMultipoint":s="multipoint"}o.type=s,t.queryGeometryType=r,t.queryGeometry=o}prepareFeatures(t){switch(this.transform=t.transform,this.options.applyTransform&&t.transform&&(this.applyTransform=this.deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"point":this.addCoordinate=(t,e,n)=>this.addCoordinatePoint(t,e,n),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,n)=>this.addCoordinatePolygon(t,e,n),this.createGeometry=t=>this.createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,n)=>this.addCoordinatePolyline(t,e,n),this.createGeometry=t=>this.createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,n)=>this.addCoordinateMultipoint(t,e,n),this.createGeometry=t=>this.createMultipointGeometry(t);break;case"mesh":case"extent":break;default:Object(r["a"])(t.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new c(Object(i["a"])(),null,new this.AttributesConstructor)}allocateCoordinates(){const t=this.lengths.reduce((t,e)=>t+e,0);this.coordinateBuffer=new Float64Array(t*this.vertexDimension),this.coordinateBufferPtr=0}addLength(t,e,n){0===this.lengths.length&&(this.toAddInCurrentPath=e),this.lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,n){switch(e=this.applyTransform(this.transform,e,n,0),n){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}}transformPathLikeValue(t,e){let n=0;return e<=1&&(n=this.previousCoordinate[e],this.previousCoordinate[e]+=t),this.applyTransform(this.transform,t,e,n)}addCoordinatePolyline(t,e,n){this.dehydratedAddPointsCoordinate(t.paths,e,n)}addCoordinatePolygon(t,e,n){this.dehydratedAddPointsCoordinate(t.rings,e,n)}addCoordinateMultipoint(t,e,n){0===n&&t.points.push([]);const r=this.transformPathLikeValue(e,n);t.points[t.points.length-1].push(r)}createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}dehydratedAddPointsCoordinate(t,e,n){0===n&&0==this.toAddInCurrentPath--&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const r=this.transformPathLikeValue(e,n),i=t[t.length-1];0===n&&i.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=r}deriveApplyTransform(t){const{hasZ:e,hasM:n}=t;return e&&n?g:e?p:n?y:m}}var P=n("072f");class C{_parseFeatureQuery(t){const e=Object(P["a"])(t.buffer,new M(t.options)),n={...e,spatialReference:e.spatialReference.toJSON(),fields:e.fields?e.fields.map(t=>t.toJSON()):void 0};return Promise.resolve(n)}}function w(){return new C}e["default"]=w},4261:function(t,e,n){"use strict";n.d(e,"a",(function(){return P})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return g})),n.d(e,"d",(function(){return M})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return s})),n.d(e,"j",(function(){return y})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return m})),n.d(e,"m",(function(){return d}));var r=n("b2b2");n("3af1"),n("9180");function i(t){return t}function o(t=C){return i([t[0],t[1],t[2],t[3],t[4],t[5]])}function s(t,e,n,r,i,s,a=o()){return a[0]=t,a[1]=e,a[2]=n,a[3]=r,a[4]=i,a[5]=s,a}function a(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2]),t[3]=Math.max(t[3],e[3]),t[4]=Math.max(t[4],e[4]),t[5]=Math.max(t[5],e[5])}function u(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2]),t[3]=Math.max(t[3],e[0]),t[4]=Math.max(t[4],e[1]),t[5]=Math.max(t[5],e[2])}function c(t,e,n){const r=e.length;let i=t[0],o=t[1],s=t[2],a=t[3],u=t[4],c=t[5];if(n)for(let h=0;h<r;h++){const t=e[h];i=Math.min(i,t[0]),o=Math.min(o,t[1]),s=Math.min(s,t[2]),a=Math.max(a,t[0]),u=Math.max(u,t[1]),c=Math.max(c,t[2])}else for(let h=0;h<r;h++){const t=e[h];i=Math.min(i,t[0]),o=Math.min(o,t[1]),a=Math.max(a,t[0]),u=Math.max(u,t[1])}t[0]=i,t[1]=o,t[2]=s,t[3]=a,t[4]=u,t[5]=c}function h(t){return t[0]>=t[3]?0:t[3]-t[0]}function l(t){return t[1]>=t[4]?0:t[4]-t[1]}function f(t){return t[2]>=t[5]?0:t[5]-t[2]}function d(t,e=[0,0,0]){return e[0]=h(t),e[1]=l(t),e[2]=f(t),e}function m(t,e,n=t){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n!==t&&(n[3]=t[3],n[4]=t[4],n[5]=t[5]),n}function p(t,e,n=t){return n[3]=e[0],n[4]=e[1],n[5]=e[2],n!==t&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),t}function y(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function g(t){return t?y(t,P):o(P)}function b(t,e){return t[0]=e[0],t[1]=e[1],t[2]=Number.NEGATIVE_INFINITY,t[3]=e[2],t[4]=e[3],t[5]=Number.POSITIVE_INFINITY,t}function x(t){return 6===t.length}function M(t,e,n){if(Object(r["h"])(t)||Object(r["h"])(e))return t===e;if(!x(t)||!x(e))return!1;if(n){for(let r=0;r<t.length;r++)if(!n(t[r],e[r]))return!1}else for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}i([-1/0,-1/0,-1/0,1/0,1/0,1/0]);const P=i([1/0,1/0,1/0,-1/0,-1/0,-1/0]),C=i([0,0,0,0,0,0]);o()},f0b9:function(t,e,n){"use strict";function r(t){return 32+t.length}function i(){return 16}function o(t){if(!t)return 0;let e=32;for(const n in t)if(t.hasOwnProperty(n)){const o=t[n];switch(typeof o){case"string":e+=r(o);break;case"number":e+=i();break;case"boolean":e+=4}}return e}function s(t,e){return 32+t.length*e}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}))}}]);
//# sourceMappingURL=chunk-3f03608a.f75a0ef8.js.map