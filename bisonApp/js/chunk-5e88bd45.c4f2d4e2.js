(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e88bd45","chunk-2d0d3e74"],{1:function(t,n){},2:function(t,n){},4362:function(t,n,e){n.nextTick=function(t){var n=Array.prototype.slice.call(arguments);n.shift(),setTimeout((function(){t.apply(null,n)}),0)},n.platform=n.arch=n.execPath=n.title="browser",n.pid=1,n.browser=!0,n.env={},n.argv=[],n.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";n.cwd=function(){return r},n.chdir=function(n){t||(t=e("df7c")),r=t.resolve(n,r)}}(),n.exit=n.kill=n.umask=n.dlopen=n.uptime=n.memoryUsage=n.uvCounters=function(){},n.features={}},"5f6c":function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i}));var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof t?t:"undefined"!=typeof self?self:{};function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function o(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}}).call(this,e("c8ba"))},a58f:function(t,n,e){"use strict";e.r(n),function(t,r,i){e.d(n,"b",(function(){return f}));var o,a,u,s=e("5f6c"),l={exports:{}};o=l,a="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,a=a||t,u=function(t){var n,o,u=void 0!==(t=t||{})?t:{};u.ready=new Promise((function(t,e){n=t,o=e}));var l,c={};for(l in u)u.hasOwnProperty(l)&&(c[l]=u[l]);var f=!1,p=!1,d=!1,y=!1;f="object"==typeof window,p="function"==typeof importScripts,d="object"==typeof r&&"object"==typeof r.versions&&"string"==typeof r.versions.node,y=!f&&!d&&!p;var h,v,m,g,b="";function w(t){return u.locateFile?u.locateFile(t,b):b+t}d?(b=p?e(1).dirname(b)+"/":i+"/",h=function(t,n){return m||(m=e(2)),g||(g=e(1)),t=g.normalize(t),m.readFileSync(t,n?null:"utf8")},v=function(t){var n=h(t,!0);return n.buffer||(n=new Uint8Array(n)),k(n.buffer),n},r.argv.length>1&&r.argv[1].replace(/\\/g,"/"),r.argv.slice(2),r.on("uncaughtException",(function(t){if(!(t instanceof er))throw t})),r.on("unhandledRejection",bt),u.inspect=function(){return"[Emscripten Module object]"}):y?("undefined"!=typeof read&&(h=function(t){return read(t)}),v=function(t){var n;return"function"==typeof readbuffer?new Uint8Array(readbuffer(t)):(k("object"==typeof(n=read(t,"binary"))),n)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(f||p)&&(p?b=self.location.href:document.currentScript&&(b=document.currentScript.src),a&&(b=a),b=0!==b.indexOf("blob:")?b.substr(0,b.lastIndexOf("/")+1):"",h=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.send(null),n.responseText},p&&(v=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}));var $,C,T=u.print||console.log.bind(console),P=u.printErr||console.warn.bind(console);for(l in c)c.hasOwnProperty(l)&&(u[l]=c[l]);c=null,u.arguments&&u.arguments,u.thisProgram&&u.thisProgram,u.quit&&u.quit,u.wasmBinary&&($=u.wasmBinary),u.noExitRuntime&&u.noExitRuntime,"object"!=typeof WebAssembly&&bt("no native wasm support detected");var _=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),A=!1;function k(t,n){t||bt("Assertion failed: "+n)}var E="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function W(t,n,e){for(var r=n+e,i=n;t[i]&&!(i>=r);)++i;if(i-n>16&&t.subarray&&E)return E.decode(t.subarray(n,i));for(var o="";n<i;){var a=t[n++];if(128&a){var u=63&t[n++];if(192!=(224&a)){var s=63&t[n++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&t[n++])<65536)o+=String.fromCharCode(a);else{var l=a-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function j(t,n){return t?W(q,t,n):""}function S(t,n,e,r){if(!(r>0))return 0;for(var i=e,o=e+r-1,a=0;a<t.length;++a){var u=t.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&t.charCodeAt(++a)),u<=127){if(e>=o)break;n[e++]=u}else if(u<=2047){if(e+1>=o)break;n[e++]=192|u>>6,n[e++]=128|63&u}else if(u<=65535){if(e+2>=o)break;n[e++]=224|u>>12,n[e++]=128|u>>6&63,n[e++]=128|63&u}else{if(e+3>=o)break;n[e++]=240|u>>18,n[e++]=128|u>>12&63,n[e++]=128|u>>6&63,n[e++]=128|63&u}}return n[e]=0,e-i}function O(t,n,e){return S(t,q,n,e)}function F(t){for(var n=0,e=0;e<t.length;++e){var r=t.charCodeAt(e);r>=55296&&r<=57343&&(r=65536+((1023&r)<<10)|1023&t.charCodeAt(++e)),r<=127?++n:n+=r<=2047?2:r<=65535?3:4}return n}var x="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function R(t,n){for(var e=t,r=e>>1,i=r+n/2;!(r>=i)&&N[r];)++r;if((e=r<<1)-t>32&&x)return x.decode(q.subarray(t,e));for(var o=0,a="";;){var u=B[t+2*o>>1];if(0==u||o==n/2)return a;++o,a+=String.fromCharCode(u)}}function D(t,n,e){if(void 0===e&&(e=2147483647),e<2)return 0;for(var r=n,i=(e-=2)<2*t.length?e/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);B[n>>1]=a,n+=2}return B[n>>1]=0,n-r}function I(t){return 2*t.length}function U(t,n){for(var e=0,r="";!(e>=n/4);){var i=G[t+4*e>>2];if(0==i)break;if(++e,i>=65536){var o=i-65536;r+=String.fromCharCode(55296|o>>10,56320|1023&o)}else r+=String.fromCharCode(i)}return r}function M(t,n,e){if(void 0===e&&(e=2147483647),e<4)return 0;for(var r=n,i=r+e-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),G[n>>2]=a,(n+=4)+4>i)break}return G[n>>2]=0,n-r}function V(t){for(var n=0,e=0;e<t.length;++e){var r=t.charCodeAt(e);r>=55296&&r<=57343&&++e,n+=4}return n}var z,H,q,B,N,G,L,J,X,Y=65536;function Z(t,n){return t%n>0&&(t+=n-t%n),t}function K(t){z=t,u.HEAP8=H=new Int8Array(t),u.HEAP16=B=new Int16Array(t),u.HEAP32=G=new Int32Array(t),u.HEAPU8=q=new Uint8Array(t),u.HEAPU16=N=new Uint16Array(t),u.HEAPU32=L=new Uint32Array(t),u.HEAPF32=J=new Float32Array(t),u.HEAPF64=X=new Float64Array(t)}var Q=5565536,tt=322496,nt=u.INITIAL_MEMORY||16777216;function et(t){for(;t.length>0;){var n=t.shift();if("function"!=typeof n){var e=n.func;"number"==typeof e?void 0===n.arg?u.dynCall_v(e):u.dynCall_vi(e,n.arg):e(void 0===n.arg?null:n.arg)}else n(u)}}(C=u.wasmMemory?u.wasmMemory:new WebAssembly.Memory({initial:nt/Y,maximum:2147483648/Y}))&&(z=C.buffer),nt=z.byteLength,K(z),G[tt>>2]=Q;var rt=[],it=[],ot=[],at=[];function ut(){if(u.preRun)for("function"==typeof u.preRun&&(u.preRun=[u.preRun]);u.preRun.length;)ft(u.preRun.shift());et(rt)}function st(){et(it)}function lt(){et(ot)}function ct(){if(u.postRun)for("function"==typeof u.postRun&&(u.postRun=[u.postRun]);u.postRun.length;)pt(u.postRun.shift());et(at)}function ft(t){rt.unshift(t)}function pt(t){at.unshift(t)}var dt=Math.ceil,yt=Math.floor,ht=0,vt=null;function mt(t){ht++,u.monitorRunDependencies&&u.monitorRunDependencies(ht)}function gt(t){if(ht--,u.monitorRunDependencies&&u.monitorRunDependencies(ht),0==ht&&vt){var n=vt;vt=null,n()}}function bt(t){u.onAbort&&u.onAbort(t),P(t+=""),A=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.";var n=new WebAssembly.RuntimeError(t);throw o(n),n}function wt(t,n){return String.prototype.startsWith?t.startsWith(n):0===t.indexOf(n)}u.preloadedImages={},u.preloadedAudios={};var $t="data:application/octet-stream;base64,";function Ct(t){return wt(t,$t)}var Tt="file://";function Pt(t){return wt(t,Tt)}var _t="basis_transcoder.wasm";function At(){try{if($)return new Uint8Array($);if(v)return v(_t);throw"both async and sync fetching of the wasm failed"}catch(P){bt(P)}}function kt(){return $||!f&&!p||"function"!=typeof fetch||Pt(_t)?new Promise((function(t,n){t(At())})):fetch(_t,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+_t+"'";return t.arrayBuffer()})).catch((function(){return At()}))}function Et(){var t={a:Ye};function n(t,n){var e=t.exports;u.asm=e,gt()}function e(t){n(t.instance)}function r(n){return kt().then((function(n){return WebAssembly.instantiate(n,t)})).then(n,(function(t){P("failed to asynchronously prepare wasm: "+t),bt(t)}))}function i(){if($||"function"!=typeof WebAssembly.instantiateStreaming||Ct(_t)||Pt(_t)||"function"!=typeof fetch)return r(e);fetch(_t,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,t).then(e,(function(t){return P("wasm streaming compile failed: "+t),P("falling back to ArrayBuffer instantiation"),r(e)}))}))}if(mt(),u.instantiateWasm)try{return u.instantiateWasm(t,n)}catch(l){return P("Module.instantiateWasm callback failed with error: "+l),!1}return i(),{}}Ct(_t)||(_t=w(_t)),it.push({func:function(){Ke()}});var Wt={};function jt(t){for(;t.length;){var n=t.pop();t.pop()(n)}}function St(t){return this.fromWireType(L[t>>2])}var Ot={},Ft={},xt={},Rt=48,Dt=57;function It(t){if(void 0===t)return"_unknown";var n=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return n>=Rt&&n<=Dt?"_"+t:t}function Ut(t,n){return t=It(t),function(){return n.apply(this,arguments)}}function Mt(t,n){var e=Ut(n,(function(t){this.name=n,this.message=t;var e=new Error(t).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var Vt=void 0;function zt(t){throw new Vt(t)}function Ht(t,n,e){function r(n){var r=e(n);r.length!==t.length&&zt("Mismatched type converter count");for(var i=0;i<t.length;++i)Yt(t[i],r[i])}t.forEach((function(t){xt[t]=n}));var i=new Array(n.length),o=[],a=0;n.forEach((function(t,n){Ft.hasOwnProperty(t)?i[n]=Ft[t]:(o.push(t),Ot.hasOwnProperty(t)||(Ot[t]=[]),Ot[t].push((function(){i[n]=Ft[t],++a===o.length&&r(i)})))})),0===o.length&&r(i)}function qt(t){var n=Wt[t];delete Wt[t];var e=n.rawConstructor,r=n.rawDestructor,i=n.fields;Ht([t],i.map((function(t){return t.getterReturnType})).concat(i.map((function(t){return t.setterArgumentType}))),(function(t){var o={};return i.forEach((function(n,e){var r=n.fieldName,a=t[e],u=n.getter,s=n.getterContext,l=t[e+i.length],c=n.setter,f=n.setterContext;o[r]={read:function(t){return a.fromWireType(u(s,t))},write:function(t,n){var e=[];c(f,t,l.toWireType(e,n)),jt(e)}}})),[{name:n.name,fromWireType:function(t){var n={};for(var e in o)n[e]=o[e].read(t);return r(t),n},toWireType:function(t,n){for(var i in o)if(!(i in n))throw new TypeError('Missing field:  "'+i+'"');var a=e();for(i in o)o[i].write(a,n[i]);return null!==t&&t.push(r,a),a},argPackAdvance:8,readValueFromPointer:St,destructorFunction:r}]}))}function Bt(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}function Nt(){for(var t=new Array(256),n=0;n<256;++n)t[n]=String.fromCharCode(n);Gt=t}var Gt=void 0;function Lt(t){for(var n="",e=t;q[e];)n+=Gt[q[e++]];return n}var Jt=void 0;function Xt(t){throw new Jt(t)}function Yt(t,n,e){if(e=e||{},!("argPackAdvance"in n))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=n.name;if(t||Xt('type "'+r+'" must have a positive integer typeid pointer'),Ft.hasOwnProperty(t)){if(e.ignoreDuplicateRegistrations)return;Xt("Cannot register type '"+r+"' twice")}if(Ft[t]=n,delete xt[t],Ot.hasOwnProperty(t)){var i=Ot[t];delete Ot[t],i.forEach((function(t){t()}))}}function Zt(t,n,e,r,i){var o=Bt(e);Yt(t,{name:n=Lt(n),fromWireType:function(t){return!!t},toWireType:function(t,n){return n?r:i},argPackAdvance:8,readValueFromPointer:function(t){var r;if(1===e)r=H;else if(2===e)r=B;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+n);r=G}return this.fromWireType(r[t>>o])},destructorFunction:null})}function Kt(t){if(!(this instanceof hn))return!1;if(!(t instanceof hn))return!1;for(var n=this.$$.ptrType.registeredClass,e=this.$$.ptr,r=t.$$.ptrType.registeredClass,i=t.$$.ptr;n.baseClass;)e=n.upcast(e),n=n.baseClass;for(;r.baseClass;)i=r.upcast(i),r=r.baseClass;return n===r&&e===i}function Qt(t){return{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType}}function tn(t){function n(t){return t.$$.ptrType.registeredClass.name}Xt(n(t)+" instance already deleted")}var nn=!1;function en(t){}function rn(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}function on(t){t.count.value-=1,0===t.count.value&&rn(t)}function an(t){return"undefined"==typeof FinalizationGroup?(an=function(t){return t},t):(nn=new FinalizationGroup((function(t){for(var n=t.next();!n.done;n=t.next()){var e=n.value;e.ptr?on(e):console.warn("object already deleted: "+e.ptr)}})),en=function(t){nn.unregister(t.$$)},(an=function(t){return nn.register(t,t.$$,t.$$),t})(t))}function un(){if(this.$$.ptr||tn(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t=an(Object.create(Object.getPrototypeOf(this),{$$:{value:Qt(this.$$)}}));return t.$$.count.value+=1,t.$$.deleteScheduled=!1,t}function sn(){this.$$.ptr||tn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Xt("Object already scheduled for deletion"),en(this),on(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function ln(){return!this.$$.ptr}var cn=void 0,fn=[];function pn(){for(;fn.length;){var t=fn.pop();t.$$.deleteScheduled=!1,t.delete()}}function dn(){return this.$$.ptr||tn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Xt("Object already scheduled for deletion"),fn.push(this),1===fn.length&&cn&&cn(pn),this.$$.deleteScheduled=!0,this}function yn(){hn.prototype.isAliasOf=Kt,hn.prototype.clone=un,hn.prototype.delete=sn,hn.prototype.isDeleted=ln,hn.prototype.deleteLater=dn}function hn(){}var vn={};function mn(t,n,e){if(void 0===t[n].overloadTable){var r=t[n];t[n]=function(){return t[n].overloadTable.hasOwnProperty(arguments.length)||Xt("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[n].overloadTable+")!"),t[n].overloadTable[arguments.length].apply(this,arguments)},t[n].overloadTable=[],t[n].overloadTable[r.argCount]=r}}function gn(t,n,e){u.hasOwnProperty(t)?((void 0===e||void 0!==u[t].overloadTable&&void 0!==u[t].overloadTable[e])&&Xt("Cannot register public name '"+t+"' twice"),mn(u,t,t),u.hasOwnProperty(e)&&Xt("Cannot register multiple overloads of a function with the same number of arguments ("+e+")!"),u[t].overloadTable[e]=n):(u[t]=n,void 0!==e&&(u[t].numArguments=e))}function bn(t,n,e,r,i,o,a,u){this.name=t,this.constructor=n,this.instancePrototype=e,this.rawDestructor=r,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function wn(t,n,e){for(;n!==e;)n.upcast||Xt("Expected null or instance of "+e.name+", got an instance of "+n.name),t=n.upcast(t),n=n.baseClass;return t}function $n(t,n){if(null===n)return this.isReference&&Xt("null is not a valid "+this.name),0;n.$$||Xt('Cannot pass "'+se(n)+'" as a '+this.name),n.$$.ptr||Xt("Cannot pass deleted object as a pointer of type "+this.name);var e=n.$$.ptrType.registeredClass;return wn(n.$$.ptr,e,this.registeredClass)}function Cn(t,n){var e;if(null===n)return this.isReference&&Xt("null is not a valid "+this.name),this.isSmartPointer?(e=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,e),e):0;n.$$||Xt('Cannot pass "'+se(n)+'" as a '+this.name),n.$$.ptr||Xt("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&n.$$.ptrType.isConst&&Xt("Cannot convert argument of type "+(n.$$.smartPtrType?n.$$.smartPtrType.name:n.$$.ptrType.name)+" to parameter type "+this.name);var r=n.$$.ptrType.registeredClass;if(e=wn(n.$$.ptr,r,this.registeredClass),this.isSmartPointer)switch(void 0===n.$$.smartPtr&&Xt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:n.$$.smartPtrType===this?e=n.$$.smartPtr:Xt("Cannot convert argument of type "+(n.$$.smartPtrType?n.$$.smartPtrType.name:n.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:e=n.$$.smartPtr;break;case 2:if(n.$$.smartPtrType===this)e=n.$$.smartPtr;else{var i=n.clone();e=this.rawShare(e,ee((function(){i.delete()}))),null!==t&&t.push(this.rawDestructor,e)}break;default:Xt("Unsupporting sharing policy")}return e}function Tn(t,n){if(null===n)return this.isReference&&Xt("null is not a valid "+this.name),0;n.$$||Xt('Cannot pass "'+se(n)+'" as a '+this.name),n.$$.ptr||Xt("Cannot pass deleted object as a pointer of type "+this.name),n.$$.ptrType.isConst&&Xt("Cannot convert argument of type "+n.$$.ptrType.name+" to parameter type "+this.name);var e=n.$$.ptrType.registeredClass;return wn(n.$$.ptr,e,this.registeredClass)}function Pn(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t}function _n(t){this.rawDestructor&&this.rawDestructor(t)}function An(t){null!==t&&t.delete()}function kn(t,n,e){if(n===e)return t;if(void 0===e.baseClass)return null;var r=kn(t,n,e.baseClass);return null===r?null:e.downcast(r)}function En(){return Object.keys(On).length}function Wn(){var t=[];for(var n in On)On.hasOwnProperty(n)&&t.push(On[n]);return t}function jn(t){cn=t,fn.length&&cn&&cn(pn)}function Sn(){u.getInheritedInstanceCount=En,u.getLiveInheritedInstances=Wn,u.flushPendingDeletes=pn,u.setDelayFunction=jn}var On={};function Fn(t,n){for(void 0===n&&Xt("ptr should not be undefined");t.baseClass;)n=t.upcast(n),t=t.baseClass;return n}function xn(t,n){return n=Fn(t,n),On[n]}function Rn(t,n){return n.ptrType&&n.ptr||zt("makeClassHandle requires ptr and ptrType"),!!n.smartPtrType!=!!n.smartPtr&&zt("Both smartPtrType and smartPtr must be specified"),n.count={value:1},an(Object.create(t,{$$:{value:n}}))}function Dn(t){var n=this.getPointee(t);if(!n)return this.destructor(t),null;var e=xn(this.registeredClass,n);if(void 0!==e){if(0===e.$$.count.value)return e.$$.ptr=n,e.$$.smartPtr=t,e.clone();var r=e.clone();return this.destructor(t),r}function i(){return this.isSmartPointer?Rn(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:n,smartPtrType:this,smartPtr:t}):Rn(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,a=this.registeredClass.getActualType(n),u=vn[a];if(!u)return i.call(this);o=this.isConst?u.constPointerType:u.pointerType;var s=kn(n,this.registeredClass,o.registeredClass);return null===s?i.call(this):this.isSmartPointer?Rn(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:t}):Rn(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})}function In(){Un.prototype.getPointee=Pn,Un.prototype.destructor=_n,Un.prototype.argPackAdvance=8,Un.prototype.readValueFromPointer=St,Un.prototype.deleteObject=An,Un.prototype.fromWireType=Dn}function Un(t,n,e,r,i,o,a,u,s,l,c){this.name=t,this.registeredClass=n,this.isReference=e,this.isConst=r,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=l,this.rawDestructor=c,i||void 0!==n.baseClass?this.toWireType=Cn:r?(this.toWireType=$n,this.destructorFunction=null):(this.toWireType=Tn,this.destructorFunction=null)}function Mn(t,n,e){u.hasOwnProperty(t)||zt("Replacing nonexistant public symbol"),void 0!==u[t].overloadTable&&void 0!==e?u[t].overloadTable[e]=n:(u[t]=n,u[t].argCount=e)}function Vn(t,n){function e(t){var e=[n];return function(){e.length=arguments.length+1;for(var n=0;n<arguments.length;n++)e[n+1]=arguments[n];return t.apply(null,e)}}t=Lt(t);var r=e(u["dynCall_"+t]);return"function"!=typeof r&&Xt("unknown function pointer with signature "+t+": "+n),r}var zn=void 0;function Hn(t){var n=nr(t),e=Lt(n);return tr(n),e}function qn(t,n){var e=[],r={};function i(t){r[t]||Ft[t]||(xt[t]?xt[t].forEach(i):(e.push(t),r[t]=!0))}throw n.forEach(i),new zn(t+": "+e.map(Hn).join([", "]))}function Bn(t,n,e,r,i,o,a,u,s,l,c,f,p){c=Lt(c),o=Vn(i,o),u&&(u=Vn(a,u)),l&&(l=Vn(s,l)),p=Vn(f,p);var d=It(c);gn(d,(function(){qn("Cannot construct "+c+" due to unbound types",[r])})),Ht([t,n,e],r?[r]:[],(function(n){var e,i;n=n[0],i=r?(e=n.registeredClass).instancePrototype:hn.prototype;var a=Ut(d,(function(){if(Object.getPrototypeOf(this)!==s)throw new Jt("Use 'new' to construct "+c);if(void 0===f.constructor_body)throw new Jt(c+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new Jt("Tried to invoke ctor of "+c+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),s=Object.create(i,{constructor:{value:a}});a.prototype=s;var f=new bn(c,a,s,p,e,o,u,l),y=new Un(c,f,!0,!1,!1),h=new Un(c+"*",f,!1,!1,!1),v=new Un(c+" const*",f,!1,!0,!1);return vn[t]={pointerType:h,constPointerType:v},Mn(d,a),[y,h,v]}))}function Nn(t,n){for(var e=[],r=0;r<t;r++)e.push(G[(n>>2)+r]);return e}function Gn(t,n,e,r,i,o){k(n>0);var a=Nn(n,e);i=Vn(r,i);var u=[o],s=[];Ht([],[t],(function(t){var e="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[n-1])throw new Jt("Cannot register multiple constructors with identical number of parameters ("+(n-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[n-1]=function(){qn("Cannot construct "+t.name+" due to unbound types",a)},Ht([],a,(function(r){return t.registeredClass.constructor_body[n-1]=function(){arguments.length!==n-1&&Xt(e+" called with "+arguments.length+" arguments, expected "+(n-1)),s.length=0,u.length=n;for(var t=1;t<n;++t)u[t]=r[t].toWireType(s,arguments[t-1]);var o=i.apply(null,u);return jt(s),r[0].fromWireType(o)},[]})),[]}))}function Ln(t,n,e,r,i){var o=n.length;o<2&&Xt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==n[1]&&null!==e,u=!1,s=1;s<n.length;++s)if(null!==n[s]&&void 0===n[s].destructorFunction){u=!0;break}var l="void"!==n[0].name,c=o-2,f=new Array(c),p=[],d=[];return function(){var e;arguments.length!==c&&Xt("function "+t+" called with "+arguments.length+" arguments, expected "+c+" args!"),d.length=0,p.length=a?2:1,p[0]=i,a&&(e=n[1].toWireType(d,this),p[1]=e);for(var o=0;o<c;++o)f[o]=n[o+2].toWireType(d,arguments[o]),p.push(f[o]);var s=r.apply(null,p);if(u)jt(d);else for(o=a?1:2;o<n.length;o++){var y=1===o?e:f[o-2];null!==n[o].destructorFunction&&n[o].destructorFunction(y)}if(l)return n[0].fromWireType(s)}}function Jn(t,n,e,r,i,o,a,u){var s=Nn(e,r);n=Lt(n),o=Vn(i,o),Ht([],[t],(function(t){var r=(t=t[0]).name+"."+n;function i(){qn("Cannot call "+r+" due to unbound types",s)}u&&t.registeredClass.pureVirtualFunctions.push(n);var l=t.registeredClass.instancePrototype,c=l[n];return void 0===c||void 0===c.overloadTable&&c.className!==t.name&&c.argCount===e-2?(i.argCount=e-2,i.className=t.name,l[n]=i):(mn(l,n,r),l[n].overloadTable[e-2]=i),Ht([],s,(function(i){var u=Ln(r,i,t,o,a);return void 0===l[n].overloadTable?(u.argCount=e-2,l[n]=u):l[n].overloadTable[e-2]=u,[]})),[]}))}function Xn(t,n,e){t=Lt(t),Ht([],[n],(function(n){return n=n[0],u[t]=n.fromWireType(e),[]}))}var Yn=[],Zn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Kn(t){t>4&&0==--Zn[t].refcount&&(Zn[t]=void 0,Yn.push(t))}function Qn(){for(var t=0,n=5;n<Zn.length;++n)void 0!==Zn[n]&&++t;return t}function te(){for(var t=5;t<Zn.length;++t)if(void 0!==Zn[t])return Zn[t];return null}function ne(){u.count_emval_handles=Qn,u.get_first_emval=te}function ee(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var n=Yn.length?Yn.pop():Zn.length;return Zn[n]={refcount:1,value:t},n}}function re(t,n){Yt(t,{name:n=Lt(n),fromWireType:function(t){var n=Zn[t].value;return Kn(t),n},toWireType:function(t,n){return ee(n)},argPackAdvance:8,readValueFromPointer:St,destructorFunction:null})}function ie(t,n,e){switch(n){case 0:return function(t){var n=e?H:q;return this.fromWireType(n[t])};case 1:return function(t){var n=e?B:N;return this.fromWireType(n[t>>1])};case 2:return function(t){var n=e?G:L;return this.fromWireType(n[t>>2])};default:throw new TypeError("Unknown integer type: "+t)}}function oe(t,n,e,r){var i=Bt(e);function o(){}n=Lt(n),o.values={},Yt(t,{name:n,constructor:o,fromWireType:function(t){return this.constructor.values[t]},toWireType:function(t,n){return n.value},argPackAdvance:8,readValueFromPointer:ie(n,i,r),destructorFunction:null}),gn(n,o)}function ae(t,n){var e=Ft[t];return void 0===e&&Xt(n+" has unknown type "+Hn(t)),e}function ue(t,n,e){var r=ae(t,"enum");n=Lt(n);var i=r.constructor,o=Object.create(r.constructor.prototype,{value:{value:e},constructor:{value:Ut(r.name+"_"+n,(function(){}))}});i.values[e]=o,i[n]=o}function se(t){if(null===t)return"null";var n=typeof t;return"object"===n||"array"===n||"function"===n?t.toString():""+t}function le(t,n){switch(n){case 2:return function(t){return this.fromWireType(J[t>>2])};case 3:return function(t){return this.fromWireType(X[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function ce(t,n,e){var r=Bt(e);Yt(t,{name:n=Lt(n),fromWireType:function(t){return t},toWireType:function(t,n){if("number"!=typeof n&&"boolean"!=typeof n)throw new TypeError('Cannot convert "'+se(n)+'" to '+this.name);return n},argPackAdvance:8,readValueFromPointer:le(n,r),destructorFunction:null})}function fe(t,n,e,r,i,o){var a=Nn(n,e);t=Lt(t),i=Vn(r,i),gn(t,(function(){qn("Cannot call "+t+" due to unbound types",a)}),n-1),Ht([],a,(function(e){var r=[e[0],null].concat(e.slice(1));return Mn(t,Ln(t,r,null,i,o),n-1),[]}))}function pe(t,n,e){switch(n){case 0:return e?function(t){return H[t]}:function(t){return q[t]};case 1:return e?function(t){return B[t>>1]}:function(t){return N[t>>1]};case 2:return e?function(t){return G[t>>2]}:function(t){return L[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function de(t,n,e,r,i){n=Lt(n),-1===i&&(i=4294967295);var o=Bt(e),a=function(t){return t};if(0===r){var u=32-8*e;a=function(t){return t<<u>>>u}}var s=-1!=n.indexOf("unsigned");Yt(t,{name:n,fromWireType:a,toWireType:function(t,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+se(e)+'" to '+this.name);if(e<r||e>i)throw new TypeError('Passing a number "'+se(e)+'" from JS side to C/C++ side to an argument of type "'+n+'", which is outside the valid range ['+r+", "+i+"]!");return s?e>>>0:0|e},argPackAdvance:8,readValueFromPointer:pe(n,o,0!==r),destructorFunction:null})}function ye(t,n,e){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][n];function i(t){var n=L,e=n[t>>=2],i=n[t+1];return new r(z,i,e)}Yt(t,{name:e=Lt(e),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})}function he(t,n){var e="std::string"===(n=Lt(n));Yt(t,{name:n,fromWireType:function(t){var n,r=L[t>>2];if(e)for(var i=t+4,o=0;o<=r;++o){var a=t+4+o;if(o==r||0==q[a]){var u=j(i,a-i);void 0===n?n=u:(n+=String.fromCharCode(0),n+=u),i=a+1}}else{var s=new Array(r);for(o=0;o<r;++o)s[o]=String.fromCharCode(q[t+4+o]);n=s.join("")}return tr(t),n},toWireType:function(t,n){n instanceof ArrayBuffer&&(n=new Uint8Array(n));var r="string"==typeof n;r||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int8Array||Xt("Cannot pass non-string to std::string");var i=(e&&r?function(){return F(n)}:function(){return n.length})(),o=Qe(4+i+1);if(L[o>>2]=i,e&&r)O(n,o+4,i+1);else if(r)for(var a=0;a<i;++a){var u=n.charCodeAt(a);u>255&&(tr(o),Xt("String has UTF-16 code units that do not fit in 8 bits")),q[o+4+a]=u}else for(a=0;a<i;++a)q[o+4+a]=n[a];return null!==t&&t.push(tr,o),o},argPackAdvance:8,readValueFromPointer:St,destructorFunction:function(t){tr(t)}})}function ve(t,n,e){var r,i,o,a,u;e=Lt(e),2===n?(r=R,i=D,a=I,o=function(){return N},u=1):4===n&&(r=U,i=M,a=V,o=function(){return L},u=2),Yt(t,{name:e,fromWireType:function(t){for(var e,i=L[t>>2],a=o(),s=t+4,l=0;l<=i;++l){var c=t+4+l*n;if(l==i||0==a[c>>u]){var f=r(s,c-s);void 0===e?e=f:(e+=String.fromCharCode(0),e+=f),s=c+n}}return tr(t),e},toWireType:function(t,r){"string"!=typeof r&&Xt("Cannot pass non-string to C++ string type "+e);var o=a(r),s=Qe(4+o+n);return L[s>>2]=o>>u,i(r,s+4,o+n),null!==t&&t.push(tr,s),s},argPackAdvance:8,readValueFromPointer:St,destructorFunction:function(t){tr(t)}})}function me(t,n,e,r,i,o){Wt[t]={name:Lt(n),rawConstructor:Vn(e,r),rawDestructor:Vn(i,o),fields:[]}}function ge(t,n,e,r,i,o,a,u,s,l){Wt[t].fields.push({fieldName:Lt(n),getterReturnType:e,getter:Vn(r,i),getterContext:o,setterArgumentType:a,setter:Vn(u,s),setterContext:l})}function be(t,n){Yt(t,{isVoid:!0,name:n=Lt(n),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,n){}})}function we(t){return t||Xt("Cannot use deleted val. handle = "+t),Zn[t].value}function $e(t,n,e){t=we(t),n=ae(n,"emval::as");var r=[],i=ee(r);return G[e>>2]=i,n.toWireType(r,t)}var Ce={};function Te(t){var n=Ce[t];return void 0===n?Lt(t):n}var Pe=[];function _e(t,n,e,r){(t=Pe[t])(n=we(n),e=Te(e),null,r)}function Ae(){if("object"==typeof globalThis)return globalThis;function t(t){t.$$$embind_global$$$=t;var n="object"==typeof $$$embind_global$$$&&t.$$$embind_global$$$===t;return n||delete t.$$$embind_global$$$,n}if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof s["b"]&&t(s["b"])?$$$embind_global$$$=s["b"]:"object"==typeof self&&t(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}function ke(t){return 0===t?ee(Ae()):(t=Te(t),ee(Ae()[t]))}function Ee(t){var n=Pe.length;return Pe.push(t),n}function We(t,n){for(var e=new Array(t),r=0;r<t;++r)e[r]=ae(G[(n>>2)+r],"parameter "+r);return e}function je(t,n){var e=We(t,n),r=e[0],i=new Array(t-1);return Ee((function(n,o,a,u){for(var s=0,l=0;l<t-1;++l)i[l]=e[l+1].readValueFromPointer(u+s),s+=e[l+1].argPackAdvance;var c=n[o].apply(n,i);for(l=0;l<t-1;++l)e[l+1].deleteObject&&e[l+1].deleteObject(i[l]);if(!r.isVoid)return r.toWireType(a,c)}))}function Se(t){return t=Te(t),ee(u[t])}function Oe(t,n){return ee((t=we(t))[n=we(n)])}function Fe(t){t>4&&(Zn[t].refcount+=1)}function xe(t){var n=new Array(t+1);return function(e,r,i){n[0]=e;for(var o=0;o<t;++o){var a=ae(G[(r>>2)+o],"parameter "+o);n[o+1]=a.readValueFromPointer(i),i+=a.argPackAdvance}return ee(new(e.bind.apply(e,n)))}}var Re={};function De(t,n,e,r){t=we(t);var i=Re[n];return i||(i=xe(n),Re[n]=i),i(t,e,r)}function Ie(t){return ee(Te(t))}function Ue(t){jt(Zn[t].value),Kn(t)}function Me(){bt()}function Ve(t,n,e){q.copyWithin(t,n,n+e)}function ze(){return q.length}function He(n){try{return C.grow(n-z.byteLength+65535>>>16),K(C.buffer),1}catch(t){}}function qe(t){t>>>=0;var n=ze(),e=65536,r=2147483648;if(t>r)return!1;for(var i=16777216,o=1;o<=4;o*=2){var a=n*(1+.2/o);if(a=Math.min(a,t+100663296),He(Math.min(r,Z(Math.max(i,t,a),e))))return!0}return!1}var Be={mappings:{},buffers:[null,[],[]],printChar:function(t,n){var e=Be.buffers[t];0===n||10===n?((1===t?T:P)(W(e,0)),e.length=0):e.push(n)},varargs:void 0,get:function(){return Be.varargs+=4,G[Be.varargs-4>>2]},getStr:function(t){return j(t)},get64:function(t,n){return t}};function Ne(t){return 0}function Ge(t,n,e,r,i){}function Le(t,n,e,r){for(var i=0,o=0;o<e;o++){for(var a=G[n+8*o>>2],u=G[n+(8*o+4)>>2],s=0;s<u;s++)Be.printChar(t,q[a+s]);i+=u}return G[r>>2]=i,0}function Je(t){return(t=+t)>=0?+yt(t+.5):+dt(t-.5)}function Xe(t){}Vt=u.InternalError=Mt(Error,"InternalError"),Nt(),Jt=u.BindingError=Mt(Error,"BindingError"),yn(),In(),Sn(),zn=u.UnboundTypeError=Mt(Error,"UnboundTypeError"),ne();var Ye={u:qt,J:Zt,y:Bn,x:Gn,d:Jn,k:Xn,I:re,n:oe,a:ue,B:ce,i:fe,j:de,h:ye,C:he,w:ve,v:me,c:ge,K:be,m:$e,s:_e,b:Kn,z:ke,t:je,r:Se,e:Oe,g:Fe,q:De,f:Ie,l:Ue,p:Me,F:Ve,G:qe,H:Ne,D:Ge,A:Le,memory:C,o:Je,E:Xe,table:_};Et();var Ze,Ke=u.___wasm_call_ctors=function(){return(Ke=u.___wasm_call_ctors=u.asm.L).apply(null,arguments)},Qe=u._malloc=function(){return(Qe=u._malloc=u.asm.M).apply(null,arguments)},tr=u._free=function(){return(tr=u._free=u.asm.N).apply(null,arguments)},nr=u.___getTypeName=function(){return(nr=u.___getTypeName=u.asm.O).apply(null,arguments)};function er(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function rr(t){function e(){Ze||(Ze=!0,u.calledRun=!0,A||(st(),lt(),n(u),u.onRuntimeInitialized&&u.onRuntimeInitialized(),ct()))}ht>0||(ut(),ht>0||(u.setStatus?(u.setStatus("Running..."),setTimeout((function(){setTimeout((function(){u.setStatus("")}),1),e()}),1)):e()))}if(u.___embind_register_native_and_builtin_types=function(){return(u.___embind_register_native_and_builtin_types=u.asm.P).apply(null,arguments)},u.dynCall_viii=function(){return(u.dynCall_viii=u.asm.Q).apply(null,arguments)},u.dynCall_vi=function(){return(u.dynCall_vi=u.asm.R).apply(null,arguments)},u.dynCall_v=function(){return(u.dynCall_v=u.asm.S).apply(null,arguments)},u.dynCall_i=function(){return(u.dynCall_i=u.asm.T).apply(null,arguments)},u.dynCall_iii=function(){return(u.dynCall_iii=u.asm.U).apply(null,arguments)},u.dynCall_ii=function(){return(u.dynCall_ii=u.asm.V).apply(null,arguments)},u.dynCall_vii=function(){return(u.dynCall_vii=u.asm.W).apply(null,arguments)},u.dynCall_iiii=function(){return(u.dynCall_iiii=u.asm.X).apply(null,arguments)},u.dynCall_iiiii=function(){return(u.dynCall_iiiii=u.asm.Y).apply(null,arguments)},u.dynCall_iiiiii=function(){return(u.dynCall_iiiiii=u.asm.Z).apply(null,arguments)},u.dynCall_iiiiiiii=function(){return(u.dynCall_iiiiiiii=u.asm._).apply(null,arguments)},u.dynCall_iiiiiiiii=function(){return(u.dynCall_iiiiiiiii=u.asm.$).apply(null,arguments)},u.dynCall_viiii=function(){return(u.dynCall_viiii=u.asm.aa).apply(null,arguments)},u.dynCall_iiiiiii=function(){return(u.dynCall_iiiiiii=u.asm.ba).apply(null,arguments)},u.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(u.dynCall_iiiiiiiiiiiiiiiiiiii=u.asm.ca).apply(null,arguments)},u.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(u.dynCall_iiiiiiiiiiiiiiiiiiiii=u.asm.da).apply(null,arguments)},u.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(u.dynCall_iiiiiiiiiiiiiiiiiii=u.asm.ea).apply(null,arguments)},u.dynCall_viiiii=function(){return(u.dynCall_viiiii=u.asm.fa).apply(null,arguments)},u.dynCall_iiiiiiiiii=function(){return(u.dynCall_iiiiiiiiii=u.asm.ga).apply(null,arguments)},u.dynCall_iiiiiiiiiii=function(){return(u.dynCall_iiiiiiiiiii=u.asm.ha).apply(null,arguments)},u.dynCall_jiji=function(){return(u.dynCall_jiji=u.asm.ia).apply(null,arguments)},u.dynCall_viiiiii=function(){return(u.dynCall_viiiiii=u.asm.ja).apply(null,arguments)},vt=function t(){Ze||rr(),Ze||(vt=t)},u.run=rr,u.preInit)for("function"==typeof u.preInit&&(u.preInit=[u.preInit]);u.preInit.length>0;)u.preInit.pop()();return rr(),t.ready},o.exports=u;var c=l.exports,f=Object.freeze(Object.assign(Object.create(null),l.exports,{default:c}))}.call(this,"/index.js",e("4362"),"/")},df7c:function(t,n,e){(function(t){function e(t,n){for(var e=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),e++):e&&(t.splice(r,1),e--)}if(n)for(;e--;e)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var n,e=0,r=-1,i=!0;for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!i){e=n+1;break}}else-1===r&&(i=!1,r=n+1);return-1===r?"":t.slice(e,r)}function i(t,n){if(t.filter)return t.filter(n);for(var e=[],r=0;r<t.length;r++)n(t[r],r,t)&&e.push(t[r]);return e}n.resolve=function(){for(var n="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(n=a+"/"+n,r="/"===a.charAt(0))}return n=e(i(n.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+n||"."},n.normalize=function(t){var r=n.isAbsolute(t),a="/"===o(t,-1);return t=e(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&a&&(t+="/"),(r?"/":"")+t},n.isAbsolute=function(t){return"/"===t.charAt(0)},n.join=function(){var t=Array.prototype.slice.call(arguments,0);return n.normalize(i(t,(function(t,n){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},n.relative=function(t,e){function r(t){for(var n=0;n<t.length;n++)if(""!==t[n])break;for(var e=t.length-1;e>=0;e--)if(""!==t[e])break;return n>e?[]:t.slice(n,e-n+1)}t=n.resolve(t).substr(1),e=n.resolve(e).substr(1);for(var i=r(t.split("/")),o=r(e.split("/")),a=Math.min(i.length,o.length),u=a,s=0;s<a;s++)if(i[s]!==o[s]){u=s;break}var l=[];for(s=u;s<i.length;s++)l.push("..");return l=l.concat(o.slice(u)),l.join("/")},n.sep="/",n.delimiter=":",n.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var n=t.charCodeAt(0),e=47===n,r=-1,i=!0,o=t.length-1;o>=1;--o)if(n=t.charCodeAt(o),47===n){if(!i){r=o;break}}else i=!1;return-1===r?e?"/":".":e&&1===r?"/":t.slice(0,r)},n.basename=function(t,n){var e=r(t);return n&&e.substr(-1*n.length)===n&&(e=e.substr(0,e.length-n.length)),e},n.extname=function(t){"string"!==typeof t&&(t+="");for(var n=-1,e=0,r=-1,i=!0,o=0,a=t.length-1;a>=0;--a){var u=t.charCodeAt(a);if(47!==u)-1===r&&(i=!1,r=a+1),46===u?-1===n?n=a:1!==o&&(o=1):-1!==n&&(o=-1);else if(!i){e=a+1;break}}return-1===n||-1===r||0===o||1===o&&n===r-1&&n===e+1?"":t.slice(n,r)};var o="b"==="ab".substr(-1)?function(t,n,e){return t.substr(n,e)}:function(t,n,e){return n<0&&(n=t.length+n),t.substr(n,e)}}).call(this,e("4362"))}}]);
//# sourceMappingURL=chunk-5e88bd45.c4f2d4e2.js.map