(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-843c64d4"],{"49f0":function(e,t,r){"use strict";class i{constructor(e){this.readFile=e}resolveIncludes(e){return this.resolve(e)}resolve(e,t=new Map){if(t.has(e))return t.get(e);const r=this.read(e);if(!r)throw new Error("cannot find shader file "+e);const i=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let a=i.exec(r);const n=[];for(;null!=a;)n.push({path:a[1],start:a.index,length:a[0].length}),a=i.exec(r);let o=0,s="";return n.forEach(e=>{s+=r.slice(o,e.start),s+=t.has(e.path)?"":this.resolve(e.path,t),o=e.start+e.length}),s+=r.slice(o),t.set(e,s),s}read(e){return this.readFile(e)}}t["a"]=i},9067:function(e,t,r){"use strict";var i=r("d45f");class a{constructor(e){this._programCacheByTemplate=new Map,this._rctx=e}dispose(){this._programCacheByTemplate.forEach(e=>e.programs.forEach(e=>e.dispose())),this._programCacheByTemplate=null}getProgram(e,t){return this._programCacheByTemplate.has(e)||this.addProgramTemplate(e,t=>Object(i["a"])(this._rctx,e,t)),this.getProgramTemplateInstance(e,t)}addProgramTemplate(e,t){this._programCacheByTemplate.set(e,{constructor:t,programs:new Map})}getProgramTemplateInstance(e,t){const r=this._programCacheByTemplate.get(e);if(r){const e=t?JSON.stringify(t):"default";if(!r.programs.has(e)){const i=r.constructor(t);r.programs.set(e,i)}return r.programs.get(e)}return null}}t["a"]=a},a1ff:function(e,t,r){"use strict";var i=r("38a4"),a=r("b2b2"),n=r("d17d"),o=r("c514");const s=4;class p{constructor(e,t,r=null){this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(n["b"].Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(n["b"].Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,this.setData(null))}setData(e){if(!this._context||!this._context.gl)return;const t=this._context.gl;this._glName||(this._glName=t.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||s,this._descriptor.height=this._descriptor.height||s);const r=this._context.bindTexture(this,p.TEXTURE_UNIT_FOR_UPDATES),i=this._descriptor;p._validateTexture(this._context,i),t.pixelStorei(t.UNPACK_ALIGNMENT,i.unpackAlignment),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,i.flipped?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.preMultiplyAlpha?1:0);const n=i.pixelFormat;let o=i.internalFormat?i.internalFormat:n;if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let r=e.width,a=e.height;e instanceof HTMLVideoElement&&(r=e.videoWidth,a=e.videoHeight),i.width&&i.height,t.texImage2D(t.TEXTURE_2D,0,o,n,i.dataType,e),i.hasMipmap&&this.generateMipmap(),void 0===i.width&&(i.width=r),void 0===i.height&&(i.height=a)}else{null!=i.width&&null!=i.height||console.error("Width and height must be specified!"),t.DEPTH24_STENCIL8&&o===t.DEPTH_STENCIL&&(o=t.DEPTH24_STENCIL8);let r=i.width,s=i.height;if(c(e)){const a=Math.round(Math.log(Math.max(r,s))/Math.LN2)+1;i.hasMipmap=i.hasMipmap&&a===e.levels.length;for(let n=0;;++n){const a=e.levels[Math.min(n,e.levels.length-1)];if(t.compressedTexImage2D(t.TEXTURE_2D,n,o,r,s,0,a),1===r&&1===s||!i.hasMipmap)break;r=Math.max(1,r>>1),s=Math.max(1,s>>1)}}else if(Object(a["i"])(e))t.texImage2D(t.TEXTURE_2D,0,o,r,s,0,n,i.dataType,e),i.hasMipmap&&this.generateMipmap();else for(let e=0;t.texImage2D(t.TEXTURE_2D,e,o,r,s,0,n,i.dataType,null),(1!==r||1!==s)&&i.hasMipmap;++e)r=Math.max(1,r>>1),s=Math.max(1,s>>1)}p._applySamplingMode(t,this._descriptor),p._applyWrapMode(t,this._descriptor),p._applyAnisotropicFilteringParameters(this._context,this._descriptor),this._context.bindTexture(r,p.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,i,a,n){n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const o=this._context.gl,s=this._descriptor,c=this._context.bindTexture(this,p.TEXTURE_UNIT_FOR_UPDATES);(t<0||r<0||i>s.width||a>s.height||t+i>s.width||r+a>s.height)&&console.error("An attempt to update out of bounds of the texture!"),o.pixelStorei(o.UNPACK_ALIGNMENT,s.unpackAlignment),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,s.flipped?1:0),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.preMultiplyAlpha?1:0),n instanceof ImageData||n instanceof HTMLImageElement||n instanceof HTMLCanvasElement||n instanceof HTMLVideoElement?o.texSubImage2D(o.TEXTURE_2D,e,t,r,s.pixelFormat,s.dataType,n):o.texSubImage2D(o.TEXTURE_2D,e,t,r,i,a,s.pixelFormat,s.dataType,n),this._context.bindTexture(c,p.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,p._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.bindTexture(this,p.TEXTURE_UNIT_FOR_UPDATES),r=this._context.gl;r.generateMipmap(r.TEXTURE_2D),this._context.bindTexture(t,p.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,p._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(p._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(p._applyWrapMode(e,t),this._wrapModeDirty=!1)}static _validateTexture(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");const r=Object(i["h"])(t.width)&&Object(i["h"])(t.height);Object(o["a"])(e.gl)||r||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;9985===r||9987===r?(r=9729,t.hasMipmap||(i=9729)):9984!==r&&9986!==r||(r=9728,t.hasMipmap||(i=9728)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var r;const i=e.capabilities.textureFilterAnisotropic;if(!i)return;const a=e.gl;a.texParameterf(a.TEXTURE_2D,i.TEXTURE_MAX_ANISOTROPY,null!=(r=t.maxAnisotropy)?r:1)}}function c(e){return Object(a["i"])(e)&&"type"in e&&"compressed"===e.type}p.TEXTURE_UNIT_FOR_UPDATES=0,t["a"]=p},b69b:function(e,t,r){"use strict";r.r(t);var i=r("7ce4");r.d(t,"BufferObject",(function(){return i["a"]}));var a=r("d267");r.d(t,"FramebufferObject",(function(){return a["a"]}));var n=r("8e37");r.d(t,"Program",(function(){return n["a"]}));var o=r("9067");r.d(t,"ProgramCache",(function(){return o["a"]}));var s=r("91b0c");r.d(t,"Renderbuffer",(function(){return s["a"]}));var p=r("6df2");r.d(t,"RenderingContext",(function(){return p["a"]}));var c=r("49f0");r.d(t,"ShaderCompiler",(function(){return c["a"]}));var h=r("a1ff");r.d(t,"Texture",(function(){return h["a"]}));var d=r("0fa6");r.d(t,"VertexArrayObject",(function(){return d["a"]}));var l=r("d45f");r.d(t,"createProgram",(function(){return l["a"]})),r.d(t,"glslifyDefineMap",(function(){return l["b"]}));var u=r("cc15");r.d(t,"createContextOrErrorHTML",(function(){return u["b"]}))},c514:function(e,t,r){"use strict";function i(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}t["a"]=i},d17d:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));const i=33984;var a;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.Program=3]="Program",e[e.Framebuffer=4]="Framebuffer",e[e.Renderbuffer=5]="Renderbuffer",e[e.COUNT=6]="COUNT"}(a||(a={}))},d45f:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var i=r("8e37");function a(e){let t="";for(const r in e){const i=e[r];if("boolean"==typeof i)i&&(t+=`#define ${r}\n`);else if("number"==typeof i)t+=`#define ${r} ${i.toFixed()}\n`;else if("object"==typeof i){const e=i.options;let a=0;for(const r in e)t+=`#define ${e[r]} ${(a++).toFixed()}\n`;t+=`#define ${r} ${e[i.value]}\n`}}return t}function n(e,t,r,a){r=r||{},a=a||"";const n="function"==typeof t.shaders?t.shaders(r):t.shaders;return new i["a"](e,a+n.vertexShader,a+n.fragmentShader,t.attributes)}}}]);
//# sourceMappingURL=chunk-843c64d4.22cef6f0.js.map