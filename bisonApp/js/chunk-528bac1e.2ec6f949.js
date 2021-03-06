(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-528bac1e"],{"0310":function(e,t,i){"use strict";i.d(t,"a",(function(){return E})),i.d(t,"b",(function(){return F}));var r=i("bd75"),a=i("17ca"),o=i("d272"),n=i("4db9"),s=i("d539"),c=i("c332"),l=i("b09a"),d=i("6cb2"),u=i("dfaf"),h=i("6d5b"),m=i("7d11"),p=i("17b0"),f=i("7e21"),v=i("d047"),g=i("0d7a"),b=i("7088"),x=i("ea4b"),O=i("c6d7"),T=i("aab5"),_=i("5d5f"),y=i("a7d7"),w=i("d017"),M=i("be24"),S=i("ebd5"),C=i("d56e"),A=i("3626"),P=i("3886"),j=i("690a");function F(e){const t=new j["a"],i=t.vertex.code,F=t.fragment.code;return t.include(C["a"],{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l["a"]),t.varyings.add("vpos","vec3"),t.include(M["a"],e),t.include(s["a"],e),t.include(p["a"],e),0!==e.output&&7!==e.output||(t.include(c["a"],e),t.include(n["a"],{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(a["a"]),t.include(g["a"],e),t.include(m["a"],e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(u["a"],e),t.include(r["a"],e),t.include(d["a"],e),t.include(h["a"],e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),i.add(P["a"]`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${P["a"].float(S["c"])}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?P["a"]`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(o["a"],e),t.include(S["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(v["a"]),t.include(O["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(A["a"]),F.add(P["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P["a"]`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?P["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(o["a"],e),t.include(x["a"],e),t.include(b["a"],e),t.include(S["a"],e),e.receiveShadows&&t.include(w["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(v["a"]),t.include(O["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(y["a"],e),t.include(_["a"],e),t.fragment.include(A["a"]),t.include(T["a"],e),F.add(P["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P["a"]`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?P["a"]`
        vec3 normal = screenDerivativeNormal(localvpos);`:P["a"]`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?P["a"]`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P["a"]`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?P["a"]`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?P["a"]`vec3 normalGround = normalize(vpos + localOrigin);`:P["a"]`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P["a"]``}
        ${1===e.pbrMode||2===e.pbrMode?P["a"]`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(f["a"],e),t}var E=Object.freeze({__proto__:null,build:F})},"0d7a":function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i("7cb4"),a=i("3886");function o(e,t){const i=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?i.code.add(a["a"]`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):i.code.add(a["a"]`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),i.code.add(a["a"]`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==t.attributeTextureCoordinates&&(e.include(r["a"],t),i.uniforms.add("normalTexture","sampler2D"),i.uniforms.add("normalTextureSize","vec2"),i.code.add(a["a"]`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},1153:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s}));i("38a4"),i("d791"),i("3349"),i("02f1"),i("0b2d"),i("7577");var r=i("0fc4");Object(r["b"])();class a{constructor(e){this.message=e}toString(){return"AssertException: "+this.message}}function o(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new a(t)}}function n(e,t,i,r){e[12]=t,e[13]=i,e[14]=r}function s(e,t=0){let i=0;for(let r=0;r<4;r++)i+=e[t+r]*c[r];return i}const c=[1/256,1/65536,1/16777216,1/4294967296];s(new Uint8ClampedArray([255,255,255,255]))},"17b0":function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return n}));var r=i("3886");i("7c51");function a(e){e.vertex.code.add(r["a"]`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(r["a"]`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(r["a"]`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(r["a"]`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(r["a"]`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(r["a"]`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),e.vertex.code.add(r["a"]`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function o(e,t){const i=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(a),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),i.add(r["a"]`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?r["a"]`vec3 worldNormal = normalize(worldPos + localOrigin);`:r["a"]`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?r["a"]`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:r["a"]`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):i.add(r["a"]`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function n(e,t,i){if(!t.verticalOffset)return;const r=s(t.verticalOffset,i.camera.fovY,i.camera.fullViewport[3]),a=i.camera.pixelRatio||1;e.setUniform4f("verticalOffset",r.screenLength*a,r.perDistance,r.minWorldLength,r.maxWorldLength)}function s(e,t,i,r=c){return r.screenLength=e.screenLength,r.perDistance=Math.tan(.5*t)/(.5*i),r.minWorldLength=e.minWorldLength,r.maxWorldLength=e.maxWorldLength,r}const c={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},"17ca":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("3886");function a(e){e.vertex.code.add(r["a"]`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},"2db0":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("2eab");async function a(e,t){const{data:i}=await Object(r["default"])(e,{responseType:"image",...t});return i}},3626:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i("3886");function a(e){e.code.add(r["a"]`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function o(e){e.include(a),e.code.add(r["a"]`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r["a"].int(1)}) {
        return allMixed;
      }
      else if (mode == ${r["a"].int(2)}) {
        return internalMixed;
      }
      else if (mode == ${r["a"].int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${r["a"].int(2)}) {
        return internalMixed;
      }
      else if (mode == ${r["a"].int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},"377b":function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i("7ce4"),a=i("d267"),o=i("8e37"),n=i("a1ff"),s=i("0fa6");async function c(e){const t=new Image;if(t.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",t.width=5,t.height=5,await t.decode(),!e.gl)return!0;const i=new a["a"](e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),c=r["a"].createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),l=new s["a"](e,new Map([["a_pos",0]]),{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:c}),d=new o["a"](e,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",new Map([["a_pos",0]]));e.useProgram(d);const u=new n["a"](e,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},t);e.bindTexture(u,0),d.setUniform1i("u_texture",0);const h=e.getBoundFramebufferObject(),{x:m,y:p,width:f,height:v}=e.getViewport();e.bindFramebuffer(i),e.setViewport(0,0,1,1),e.bindVAO(l),e.drawArrays(5,0,4);const g=new Uint8Array(4);return i.readPixels(0,0,1,1,6408,5121,g),d.dispose(),l.dispose(!1),c.dispose(),i.dispose(),u.dispose(),e.setViewport(m,p,f,v),e.bindFramebuffer(h),t.src="",255===g[0]}},3886:function(e,t,i){"use strict";function r(e,...t){let i="";for(let r=0;r<t.length;r++)i+=e[r]+t[r];return i+=e[e.length-1],i}i.d(t,"a",(function(){return r})),function(e){function t(e){return Math.round(e).toString()}function i(e){return e.toPrecision(8)}e.int=t,e.float=i}(r||(r={}))},"47f8":function(e,t,i){"use strict";function r(){return new Float32Array(3)}function a(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function o(e,t,i){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=i,r}function n(e,t){return new Float32Array(e,t,3)}function s(){return r()}function c(){return o(1,1,1)}function l(){return o(1,0,0)}function d(){return o(0,1,0)}function u(){return o(0,0,1)}i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o}));const h=s(),m=c(),p=l(),f=d(),v=u();Object.freeze({__proto__:null,create:r,clone:a,fromValues:o,createView:n,zeros:s,ones:c,unitX:l,unitY:d,unitZ:u,ZEROS:h,ONES:m,UNIT_X:p,UNIT_Y:f,UNIT_Z:v})},"4db9":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("3886");function a(e,t){t.linearDepth?e.vertex.code.add(r["a"]`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(r["a"]`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},"501b":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("3886");function a(e){e.code.add(r["a"]`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},"5d5f":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i("3886");function a(e){const t=e.fragment.code;t.add(r["a"]`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(r["a"]`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(r["a"]`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=i("c51b");function n(e,t){const i=e.fragment.code;e.include(o["a"]),3===t.pbrMode||4===t.pbrMode?(i.add(r["a"]`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),i.add(r["a"]`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),i.add(r["a"]`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),i.add(r["a"]`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),i.add(r["a"]`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(a),i.add(r["a"]`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),i.add(r["a"]`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),i.add(r["a"]`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),i.add(r["a"]`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),i.add(r["a"]`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),i.add(r["a"]`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},"690a":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i("e92d");const a=r["a"].getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class o{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&a.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class n extends o{constructor(){super(...arguments),this.vertex=new l,this.fragment=new l,this.attributes=new d,this.varyings=new u,this.extensions=new h,this.constants=new m}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),i=this.attributes.generateSource(e),r=this.varyings.generateSource(),a="vertex"===e?this.vertex:this.fragment,o=a.uniforms.generateSource(),n=a.code.generateSource(),s="vertex"===e?f:p,c=this.constants.generateSource().concat(a.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${o.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}`}}class s{constructor(){this._entries=new Map}add(e,t,i){const r=`${e}_${t}_${i}`;return this._entries.set(r,{name:e,type:t,arraySize:i}),this}generateSource(){const e=e=>e?`[${e}]`:"";return Array.from(this._entries.values()).map(t=>`uniform ${t.type} ${t.name}${e(t.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class c{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class l extends o{constructor(){super(...arguments),this.uniforms=new s,this.code=new c,this.constants=new m}get builder(){return this}}class d{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map(e=>`attribute ${e[1]} ${e[0]};`)}}class u{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class h{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?h.ALLOWLIST_VERTEX:h.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(e=>t.includes(e)).map(e=>`#extension ${e} : enable`)}}h.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],h.ALLOWLIST_VERTEX=[];class m{constructor(){this._entries=[]}add(e,t,i){let r="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":r=m.numberToFloatStr(i);break;case"int":r=m.numberToIntStr(i);break;case"bool":r=i.toString();break;case"vec2":r=`vec2(${m.numberToFloatStr(i[0])},                            ${m.numberToFloatStr(i[1])})`;break;case"vec3":r=`vec3(${m.numberToFloatStr(i[0])},                            ${m.numberToFloatStr(i[1])},                            ${m.numberToFloatStr(i[2])})`;break;case"vec4":r=`vec4(${m.numberToFloatStr(i[0])},                            ${m.numberToFloatStr(i[1])},                            ${m.numberToFloatStr(i[2])},                            ${m.numberToFloatStr(i[3])})`;break;case"ivec2":r=`ivec2(${m.numberToIntStr(i[0])},                             ${m.numberToIntStr(i[1])})`;break;case"ivec3":r=`ivec3(${m.numberToIntStr(i[0])},                             ${m.numberToIntStr(i[1])},                             ${m.numberToIntStr(i[2])})`;break;case"ivec4":r=`ivec4(${m.numberToIntStr(i[0])},                             ${m.numberToIntStr(i[1])},                             ${m.numberToIntStr(i[2])},                             ${m.numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":r=`${t}(${Array.prototype.map.call(i,e=>m.numberToFloatStr(e)).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${r};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const p="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",f="precision highp float;\nprecision highp sampler2D;"},"6a07":function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return c}));var r=i("0fc4"),a=i("3886");const o=Object(r["c"])(1,1,0,1),n=Object(r["c"])(1,0,1,1);function s(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",o).add("unoccludedHighlightFlag","vec4",n),e.fragment.code.add(a["a"]`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function c(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}},"6a21":function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return x}));var r=i("c120"),a=i("3886"),o=i("b2b2"),n=i("0b2d"),s=i("7ce4"),c=i("d267"),l=i("8e37"),d=(i("d17d"),i("6df2"),i("a1ff"),i("0fa6")),u=i("9a64"),h=i("1153"),m=i("377b");class p{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,Object(m["a"])(e).then(e=>this.svgAlwaysPremultipliesAlpha=!e)}get doublePrecisionRequiresObfuscation(){if(Object(o["h"])(this._doublePrecisionRequiresObfuscation)){const e=g(this.context,!1),t=g(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let f=null;function v(e){return(Object(o["h"])(f)||f.context!==e)&&(f=new p(e)),f}function g(e,t){const i=new c["a"](e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});function r(i,r){const a=new l["a"](e,`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",new Map([["position",0]])),o=new Float32Array(6);Object(u["a"])(i,o,3);const n=new Float32Array(6);return Object(u["a"])(r,n,3),e.useProgram(a),a.setUniform3f("u_highA",o[0],o[2],o[4]),a.setUniform3f("u_lowA",o[1],o[3],o[5]),a.setUniform3f("u_highB",n[0],n[2],n[4]),a.setUniform3f("u_lowB",n[1],n[3],n[5]),a}const a=s["a"].createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),o=new d["a"](e,new Map([["position",0]]),{geometry:[{name:"position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:a}),m=Object(n["g"])(5633261.287538229,2626832.878767164,1434988.0495278358),p=Object(n["g"])(5633271.46742708,2626873.6381334523,1434963.231608387),f=r(m,p),v=e.getBoundFramebufferObject(),{x:g,y:b,width:x,height:O}=e.getViewport();e.bindFramebuffer(i),e.setViewport(0,0,1,1),e.bindVAO(o),e.drawArrays(5,0,4);const T=new Uint8Array(4);i.readPixels(0,0,1,1,6408,5121,T),f.dispose(),o.dispose(!1),a.dispose(),i.dispose(),e.setViewport(g,b,x,O),e.bindFramebuffer(v);const _=(m[2]-p[2])/25,y=Object(h["c"])(T);return Math.abs(_-y)}function b({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(a["a"]`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(a["a"]`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function x(e){return!!Object(r["a"])("force-double-precision-obfuscation")||v(e).doublePrecisionRequiresObfuscation}},"6cb2":function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i("3886");function a(e){e.vertex.code.add(r["a"]`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r["a"].int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r["a"].int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r["a"].int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r["a"].int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function o(e,t){t.symbolColor?(e.include(a),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(r["a"]`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(r["a"]`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},"6d5b":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("3886");function a(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(r["a"]`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(r["a"]`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(r["a"]`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},7088:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("3886");function a(e,t){const i=e.fragment;t.receiveAmbientOcclusion?(i.uniforms.add("ssaoTex","sampler2D"),i.uniforms.add("viewportPixelSz","vec4"),i.code.add(r["a"]`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):i.code.add(r["a"]`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},"7c51":function(e,t,i){"use strict";i.d(t,"a",(function(){return F})),i.d(t,"b",(function(){return z})),i.d(t,"c",(function(){return E})),i.d(t,"d",(function(){return b})),i.d(t,"e",(function(){return D})),i.d(t,"f",(function(){return j}));var r=i("38a4"),a=i("b2b2"),o=i("e431"),n=i("0b2d"),s=i("4261");function c(e){return Math.abs(e*e*e)}function l(e,t,i){const r=i.parameters,a=i.paddingPixelsOverride;return m.scale=Math.min(r.divisor/(t-r.offset),1),m.factor=c(e),m.minPixelSize=r.minPixelSize,m.paddingPixels=a,m}function d(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function u(e,t){return Math.max(Object(r["i"])(e*t.scale,e,t.factor),d(e,t))}function h(e,t,i,r){return u(e,l(t,i,r))}Object(r["e"])(10),Object(r["e"])(12),Object(r["e"])(70),Object(r["e"])(40);const m={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var p=i("1153"),f=(i("d791"),i("afe1"));i("9a64");function v(e){return!!Object(a["i"])(e)&&!e.visible}new Float64Array(3),new Float32Array(6),Object(f["d"])();const g=Object(s["b"])();function b(e,t,i,r,a,o,n){if(!v(t))if(e.boundingInfo){Object(p["a"])(0===e.primitiveType);const t=i.tolerance;O(e.boundingInfo,r,a,t,o,n)}else{const t=e.indices.get("position"),i=e.vertexAttributes.get("position");_(r,a,0,t.length/3,t,i,void 0,o,n)}}const x=Object(n["e"])();function O(e,t,i,r,o,n){if(Object(a["h"])(e))return;const c=C(t,i,x);if(Object(s["l"])(g,e.getBBMin()),Object(s["k"])(g,e.getBBMax()),Object(a["i"])(o)&&o.applyToAabb(g),A(g,t,c,r)){const{primitiveIndices:a,indices:s,position:c}=e,l=a?a.length:s.length/3;if(l>R){const a=e.getChildren();if(void 0!==a){for(let e=0;e<8;++e)void 0!==a[e]&&O(a[e],t,i,r,o,n);return}}_(t,i,0,l,s,c,a,o,n)}}const T=Object(n["e"])();function _(e,t,i,r,o,n,s,c,l){if(s)return y(e,t,i,r,o,n,s,c,l);const d=n.data,u=n.stride||n.size,h=e[0],m=e[1],p=e[2],f=t[0]-h,v=t[1]-m,g=t[2]-p;for(let b=i,x=3*i;b<r;++b){let e=u*o[x++],t=d[e++],i=d[e++],r=d[e];e=u*o[x++];let n=d[e++],s=d[e++],O=d[e];e=u*o[x++];let _=d[e++],y=d[e++],w=d[e];Object(a["i"])(c)&&([t,i,r]=c.applyToVertex(t,i,r,b),[n,s,O]=c.applyToVertex(n,s,O,b),[_,y,w]=c.applyToVertex(_,y,w,b));const M=n-t,C=s-i,A=O-r,P=_-t,j=y-i,F=w-r,E=v*F-j*g,D=g*P-F*f,I=f*j-P*v,z=M*E+C*D+A*I;if(Math.abs(z)<=Number.EPSILON)continue;const R=h-t,L=m-i,N=p-r,B=R*E+L*D+N*I;if(z>0){if(B<0||B>z)continue}else if(B>0||B<z)continue;const V=L*A-C*N,U=N*M-A*R,H=R*C-M*L,G=f*V+v*U+g*H;if(z>0){if(G<0||B+G>z)continue}else if(G>0||B+G<z)continue;const k=(P*V+j*U+F*H)/z;k>=0&&l(k,S(M,C,A,P,j,F,T),b)}}function y(e,t,i,r,o,n,s,c,l){const d=n.data,u=n.stride||n.size,h=e[0],m=e[1],p=e[2],f=t[0]-h,v=t[1]-m,g=t[2]-p;for(let b=i;b<r;++b){const e=s[b];let t=3*e,i=u*o[t++],r=d[i++],n=d[i++],x=d[i];i=u*o[t++];let O=d[i++],_=d[i++],y=d[i];i=u*o[t];let w=d[i++],M=d[i++],C=d[i];Object(a["i"])(c)&&([r,n,x]=c.applyToVertex(r,n,x,b),[O,_,y]=c.applyToVertex(O,_,y,b),[w,M,C]=c.applyToVertex(w,M,C,b));const A=O-r,P=_-n,j=y-x,F=w-r,E=M-n,D=C-x,I=v*D-E*g,z=g*F-D*f,R=f*E-F*v,L=A*I+P*z+j*R;if(Math.abs(L)<=Number.EPSILON)continue;const N=h-r,B=m-n,V=p-x,U=N*I+B*z+V*R;if(L>0){if(U<0||U>L)continue}else if(U>0||U<L)continue;const H=B*j-P*V,G=V*A-j*N,k=N*P-A*B,q=f*H+v*G+g*k;if(L>0){if(q<0||U+q>L)continue}else if(q>0||U+q<L)continue;const $=(F*H+E*G+D*k)/L;$>=0&&l($,S(A,P,j,F,E,D,T),e)}}const w=Object(n["e"])(),M=Object(n["e"])();function S(e,t,i,r,a,n,s){return Object(o["s"])(w,e,t,i),Object(o["s"])(M,r,a,n),Object(o["d"])(s,w,M),Object(o["o"])(s,s),s}function C(e,t,i){return Object(o["s"])(i,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function A(e,t,i,r){return P(e,t,i,r,1/0)}function P(e,t,i,r,a){const o=(e[0]-r-t[0])*i[0],n=(e[3]+r-t[0])*i[0];let s=Math.min(o,n),c=Math.max(o,n);const l=(e[1]-r-t[1])*i[1],d=(e[4]+r-t[1])*i[1];if(c=Math.min(c,Math.max(l,d)),c<0)return!1;if(s=Math.max(s,Math.min(l,d)),s>c)return!1;const u=(e[2]-r-t[2])*i[2],h=(e[5]+r-t[2])*i[2];return c=Math.min(c,Math.max(u,h)),!(c<0)&&(s=Math.max(s,Math.min(u,h)),!(s>c)&&s<a)}function j(e,t,i,a,o){let n=(i.screenLength||0)*e.pixelRatio;o&&(n=h(n,a,t,o));const s=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Object(r["d"])(s*t,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function F(e,t,i){if(!e)return;const r=e.parameters,a=e.paddingPixelsOverride;t.setUniform4f(i,r.divisor,r.offset,r.minPixelSize,a)}function E(e,t){const i=t?E(t):{};for(const r in e){let t=e[r];t&&t.forEach&&(t=I(t)),null==t&&r in i||(i[r]=t)}return i}function D(e,t){let i=!1;for(const r in t){const a=t[r];void 0!==a&&(i=!0,Array.isArray(a)?e[r]=a.slice():e[r]=a)}return i}function I(e){const t=[];return e.forEach(e=>t.push(e)),t}const z={multiply:1,ignore:2,replace:3,tint:4},R=1e3},"7cb4":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i("dfaf"),a=i("3886");function o(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(a["a"]`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function n(e,t){e.include(r["a"],t),e.fragment.code.add(a["a"]`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(a["a"]`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(o),e.fragment.code.add(a["a"]`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},"7d11":function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i("c332"),a=i("dae5"),o=i("afe1"),n=i("0b2d"),s=i("b09a"),c=i("6a21"),l=i("3886");function d(e,t){e.include(s["a"]),e.vertex.include(c["a"],t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(l["a"]`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(l["a"]`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function u(e,t){0===t.normalType||1===t.normalType?(e.include(r["a"],t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(l["a"]`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(d,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(l["a"]`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?l["a"]`normalize(vPositionWorldCameraRelative);`:l["a"]`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(l["a"]`void forwardNormal() {}`)}!function(e){class t{constructor(){this.worldFromModel_RS=Object(a["b"])(),this.worldFromModel_TH=Object(n["e"])(),this.worldFromModel_TL=Object(n["e"])()}}e.ModelTransform=t;class i{constructor(){this.worldFromView_TH=Object(n["e"])(),this.worldFromView_TL=Object(n["e"])(),this.viewFromCameraRelative_RS=Object(a["b"])(),this.projFromView=Object(o["d"])()}}function r(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)}function s(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}e.ViewProjectionTransform=i,e.bindModelTransform=r,e.bindViewProjTransform=s}(d||(d={})),function(e){function t(e,t){e.setUniformMatrix4fv("viewNormal",t)}e.bindUniforms=t}(u||(u={}))},"7e21":function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var r=i("d272"),a=i("4db9"),o=i("c332"),n=i("dfaf"),s=i("7d11"),c=i("501b"),l=i("3886");function d(e,t){e.fragment.include(c["a"]),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(l["a"]`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===t.output&&e.fragment.code.add(l["a"]`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}var u=i("6a07"),h=i("be24"),m=i("ebd5");function p(e,t){const i=e.vertex.code,c=e.fragment.code;1!==t.output&&3!==t.output||(e.include(a["a"],{linearDepth:!0}),e.include(n["a"],t),e.include(h["a"],t),e.include(d,t),e.include(r["a"],t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),i.add(l["a"]`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(m["a"],t),c.add(l["a"]`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?l["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(a["a"],{linearDepth:!1}),e.include(o["a"],t),e.include(s["a"],t),e.include(n["a"],t),e.include(h["a"],t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),i.add(l["a"]`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?l["a"]`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(r["a"],t),e.include(m["a"],t),c.add(l["a"]`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?l["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?l["a"]`
            vec3 normal = screenDerivativeNormal(vPositionView);`:l["a"]`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(a["a"],{linearDepth:!1}),e.include(n["a"],t),e.include(h["a"],t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),i.add(l["a"]`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(r["a"],t),e.include(m["a"],t),e.include(u["a"]),c.add(l["a"]`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?l["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},"94a6":function(e,t,i){"use strict";i.r(t),i.d(t,"fetch",(function(){return Zi})),i.d(t,"gltfToEngineResources",(function(){return tr})),i.d(t,"parseUrl",(function(){return er}));var r=i("49b8"),a=i("b2b2"),o=i("1c92"),n=i("dae5"),s=i("d791"),c=i("afe1"),l=i("e431"),d=i("0b2d"),u=i("4261"),h=i("8190"),m=i("668b"),p=i("e4c1"),f=i("7e2d"),v=i("2b60"),g=i("3c3b"),b=i("087c"),x=i("2eab"),O=i("792b"),T=i("ce50"),_=i("e92d"),y=i("f4cc"),w=i("549a"),M=i("2db0"),S=i("8a44"),C=i("1153");class A{constructor(e,t,i,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=i,this.position=r,this.center=Object(d["e"])(),Object(C["a"])(e.length>=1),Object(C["a"])(i.length%this._numIndexPerPrimitive==0),Object(C["a"])(i.length>=e.length*this._numIndexPerPrimitive),Object(C["a"])(3===r.size||4===r.size);const{data:a,size:o}=r,n=e.length;let s=o*i[this._numIndexPerPrimitive*e[0]];P.clear(),P.push(s),this.bbMin=Object(d["g"])(a[s],a[s+1],a[s+2]),this.bbMax=Object(d["c"])(this.bbMin);for(let l=0;l<n;++l){const t=this._numIndexPerPrimitive*e[l];for(let e=0;e<this._numIndexPerPrimitive;++e){s=o*i[t+e],P.push(s);let r=a[s];this.bbMin[0]=Math.min(r,this.bbMin[0]),this.bbMax[0]=Math.max(r,this.bbMax[0]),r=a[s+1],this.bbMin[1]=Math.min(r,this.bbMin[1]),this.bbMax[1]=Math.max(r,this.bbMax[1]),r=a[s+2],this.bbMin[2]=Math.min(r,this.bbMin[2]),this.bbMax[2]=Math.max(r,this.bbMax[2])}}Object(l["f"])(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let l=0;l<P.length;++l){s=P.getItemAt(l);const e=a[s]-this.center[0],t=a[s+1]-this.center[1],i=a[s+2]-this.center[2],r=e*e+t*t+i*i;if(r<=c)continue;const o=Math.sqrt(r),n=.5*(o-this.radius);this.radius=this.radius+n,c=this.radius*this.radius;const d=n/o;this.center[0]+=e*d,this.center[1]+=t*d,this.center[2]+=i*d}P.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Object(l["i"])(this.bbMin,this.bbMax)>1){const e=Object(l["f"])(Object(d["e"])(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,i=new Uint8Array(t),r=new Array(8);for(let c=0;c<8;++c)r[c]=0;const{data:a,size:o}=this.position;for(let c=0;c<t;++c){let t=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[c];let s=o*this.indices[n],l=a[s],d=a[s+1],u=a[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=o*this.indices[n+e];const t=a[s],i=a[s+1],r=a[s+2];t<l&&(l=t),i<d&&(d=i),r<u&&(u=r)}l<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),i[c]=t,++r[t]}let n=0;for(let c=0;c<8;++c)r[c]>0&&++n;if(n<2)return;const s=new Array(8);for(let c=0;c<8;++c)s[c]=r[c]>0?new Uint32Array(r[c]):void 0;for(let c=0;c<8;++c)r[c]=0;for(let c=0;c<t;++c){const e=i[c];s[e][r[e]++]=this.primitiveIndices[c]}this._children=new Array(8);for(let c=0;c<8;++c)void 0!==s[c]&&(this._children[c]=new A(s[c],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){P.prune()}}const P=new S["a"]({deallocator:null});var j=i("f2e0");class F{constructor(){this.id=Object(j["a"])()}unload(){}}var E=i("1038");class D extends F{constructor(e,t=[],i=0,r=-1){super(),this._primitiveType=i,this.edgeIndicesLength=r,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[a,o]of e)o&&this._vertexAttributes.set(a,{...o});if(null==t||0===t.length){const e=I(this._vertexAttributes),t=Object(E["c"])(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,t)}else for(const[a,o]of t)o&&(this._indices.set(a,z(o)),"position"===a&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(a).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return Object(a["h"])(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position"),i=this.vertexAttributes.get("position");return Object(E["b"])(i,t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position"),i=this.vertexAttributes.get("position");return Object(E["a"])(i,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;Object(C["a"])(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const i=Object(E["c"])(e.length/t),r=this.vertexAttributes.get("position");return new A(i,t,e,r)}}function I(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}function z(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var R=i("6c97"),L=i("ce6d"),N=i("38a4"),B=i("a21b"),V=i("e041"),U=i("228a"),H=i("b2cd");function G(){if(Object(a["h"])(k)){const e=e=>Object(H["a"])("esri/libs/basisu/"+e);k=i.e("chunk-5e88bd45").then(i.bind(null,"a58f")).then((function(e){return e.b})).then(({default:t})=>t({locateFile:e}).then(e=>(e.initializeBasis(),delete e.then,e)))}return k}let k;var q=i("a1ff"),$=i("8539");let W=null,X=null;async function K(){return Object(a["h"])(X)&&(X=G(),W=await X),X}function Y(e,t){if(Object(a["h"])(W))return e.byteLength;const i=new W.BasisFile(new Uint8Array(e)),r=Z(i)?Q(i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),t):0;return i.close(),i.delete(),r}function J(e,t){if(Object(a["h"])(W))return e.byteLength;const i=new W.KTX2File(new Uint8Array(e)),r=ee(i)?Q(i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),t):0;return i.close(),i.delete(),r}function Q(e,t,i,r,a){const o=Object($["b"])(t?37496:37492),n=a&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(i*r*o*n)}function Z(e){return e.getNumImages()>=1&&!e.isUASTC()}function ee(e){return e.getFaces()>=1&&e.isETC1S()}async function te(e,t,i){Object(a["h"])(W)&&(W=await K());const r=new W.BasisFile(new Uint8Array(i));if(!Z(r))return null;r.startTranscoding();const o=re(e,t,r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),(e,t)=>r.getImageTranscodedSizeInBytes(0,e,t),(e,t,i)=>r.transcodeImage(i,0,e,t,0,0));return r.close(),r.delete(),o}async function ie(e,t,i){Object(a["h"])(W)&&(W=await K());const r=new W.KTX2File(new Uint8Array(i));if(!ee(r))return null;r.startTranscoding();const o=re(e,t,r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),(e,t)=>r.getImageTranscodedSizeInBytes(e,0,0,t),(e,t,i)=>r.transcodeImage(i,e,0,0,t,0,-1,-1));return r.close(),r.delete(),o}function re(e,t,i,r,a,o,n,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=e.capabilities,[d,u]=c?r?[1,37496]:[0,37492]:l?r?[3,33779]:[2,33776]:[13,6408],h=t.hasMipmap?i:Math.min(1,i),m=[];for(let g=0;g<h;g++)m.push(new Uint8Array(n(g,d))),s(g,d,m[g]);const p=m.length>1,f=p?9987:9729,v={...t,samplingMode:f,hasMipmap:p,internalFormat:u,width:a,height:o};return new q["a"](e,v,{type:"compressed",levels:m})}const ae=_["a"].getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),oe=542327876,ne=131072,se=4;function ce(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function le(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const de=ce("DXT1"),ue=ce("DXT3"),he=ce("DXT5"),me=31,pe=0,fe=1,ve=2,ge=3,be=4,xe=7,Oe=20,Te=21;function _e(e,t,i){const{textureData:r,internalFormat:a,width:o,height:n}=ye(i,t.hasMipmap);return t.samplingMode=r.levels.length>1?9987:9729,t.hasMipmap=r.levels.length>1,t.internalFormat=a,t.width=o,t.height=n,new q["a"](e,t,r)}function ye(e,t){const i=new Int32Array(e,0,me);if(i[pe]!==oe)return ae.error("Invalid magic number in DDS header"),null;if(!(i[Oe]&se))return ae.error("Unsupported format, must contain a FourCC code"),null;const r=i[Te];let a,o;switch(r){case de:a=8,o=33776;break;case ue:a=16,o=33778;break;case he:a=16,o=33779;break;default:return ae.error("Unsupported FourCC code:",le(r)),null}let n=1,s=i[be],c=i[ge];0==(3&s)&&0==(3&c)||(ae.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,d=c;let u,h;i[ve]&ne&&!1!==t&&(n=Math.max(1,i[xe])),1===n||Object(N["h"])(s)&&Object(N["h"])(c)||(ae.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let m=i[fe]+4;const p=[];for(let f=0;f<n;++f)h=(s+3>>2)*(c+3>>2)*a,u=new Uint8Array(e,m,h),p.push(u),m+=h,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:p},internalFormat:o,width:l,height:d}}const we=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]),Me=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],Se=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];var Ce=i("7ce4"),Ae=i("0fa6");function Pe(e,t=Me,i=we,r=-1,a=1){let o=null;switch(t){case Se:o=new Float32Array([r,r,0,0,a,r,1,0,r,a,0,1,a,a,1,1]);break;case Me:default:o=new Float32Array([r,r,a,r,r,a,a,a])}return new Ae["a"](e,i,{geometry:t},{geometry:Ce["a"].createVertex(e,35044,o)})}var je=i("d267"),Fe=i("c514");class Ee extends F{constructor(e,t){super(),this.data=e,this.type=4,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new L["a"],this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Ee.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;Object(a["h"])(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){Object(V["t"])(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){Object(V["u"])(e.src)||Object(V["t"])(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(Object(a["h"])(e))return 0;if(Object(B["c"])(e)||Object(B["k"])(e))return t.encoding===Ee.KTX2_ENCODING?J(e,t.mipmap):t.encoding===Ee.BASIS_ENCODING?Y(e,t.mipmap):e.byteLength;const{width:i,height:r}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Ee.getDataDimensions(e):t;return(t.mipmap?4/3:1)*i*r*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){var t;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}load(e,t){if(Object(a["i"])(this.glTexture))return this.glTexture;if(Object(a["i"])(this.loadingPromise))return this.loadingPromise;const i=this.data;return Object(a["h"])(i)?(this.glTexture=new q["a"](e,this.createDescriptor(e),null),this.glTexture):"string"==typeof i?this.loadFromURL(e,t,i):i instanceof Image?this.loadFromImageElement(e,t,i):i instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this.loadFromImage(e,i,t):(Object(B["c"])(i)||Object(B["k"])(i))&&this.params.encoding===Ee.DDS_ENCODING?this.loadFromDDSData(e,i):(Object(B["c"])(i)||Object(B["k"])(i))&&this.params.encoding===Ee.KTX2_ENCODING?this.loadFromKTX2(e,i):(Object(B["c"])(i)||Object(B["k"])(i))&&this.params.encoding===Ee.BASIS_ENCODING?this.loadFromBasis(e,i):Object(B["k"])(i)?this.loadFromPixelData(e,i):Object(B["c"])(i)?this.loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,i){if(!(this.data instanceof HTMLVideoElement)||Object(a["h"])(this.glTexture))return i;if(this.data.readyState<2||i===this.data.currentTime)return i;if(Object(a["i"])(this.powerOfTwoStretchInfo)){const{framebuffer:i,vao:r,sourceTexture:a}=this.powerOfTwoStretchInfo;a.setData(this.data),this.drawStretchedTexture(e,t,i,r,a,this.glTexture)}else{const{width:e,height:t}=this.data,{width:i,height:r}=this.glTexture.descriptor;e!==i||t!==r?this.glTexture.updateData(0,0,0,Math.min(e,i),Math.min(t,r),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=_e(e,this.createDescriptor(e),t),this.glTexture}loadFromKTX2(e,t){return this.loadAsync(()=>ie(e,this.createDescriptor(e),t).then(e=>(this.glTexture=e,e)))}loadFromBasis(e,t){return this.loadAsync(()=>te(e,this.createDescriptor(e),t).then(e=>(this.glTexture=e,e)))}loadFromPixelData(e,t){Object(C["a"])(this.params.width>0&&this.params.height>0);const i=this.createDescriptor(e);return i.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,i.width=this.params.width,i.height=this.params.height,this.glTexture=new q["a"](e,i,t),this.glTexture}loadAsync(e){const t=Object(y["d"])();this.loadingController=t;const i=e(t.signal);this.loadingPromise=i;const r=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===i&&(this.loadingPromise=null)};return i.then(r,r),i}loadFromURL(e,t,i){return this.loadAsync(async r=>{const a=await Object(M["a"])(i,{signal:r});return this.loadFromImage(e,a,t)})}loadFromImageElement(e,t,i){return i.complete?this.loadFromImage(e,i,t):this.loadAsync(async r=>{const a=await Object(U["a"])(i,i.src,!1,r);return this.loadFromImage(e,a,t)})}loadFromVideoElement(e,t,i){return i.readyState>=2?this.loadFromImage(e,i,t):this.loadFromVideoElementAsync(e,t,i)}loadFromVideoElementAsync(e,t,i){return this.loadAsync(r=>new Promise((o,n)=>{const s=()=>{i.removeEventListener("loadeddata",c),i.removeEventListener("error",l),Object(a["i"])(d)&&d.remove()},c=()=>{i.readyState>=2&&(s(),o(this.loadFromImage(e,i,t)))},l=e=>{s(),n(e||new T["a"]("Failed to load video"))};i.addEventListener("loadeddata",c),i.addEventListener("error",l);const d=Object(y["q"])(r,()=>l(Object(y["e"])()))}))}loadFromImage(e,t,i){const r=Ee.getDataDimensions(t);this.params.width=r.width,this.params.height=r.height;const a=this.createDescriptor(e);return a.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,a)||Object(N["h"])(r.width)&&Object(N["h"])(r.height)?(a.width=r.width,a.height=r.height,this.glTexture=new q["a"](e,a,t),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,r,a,i),this.glTexture)}requiresPowerOfTwo(e,t){const i=33071,r="number"==typeof t.wrapMode?t.wrapMode===i:t.wrapMode.s===i&&t.wrapMode.t===i;return!Object(Fe["a"])(e.gl)&&(t.hasMipmap||!r)}makePowerOfTwoTexture(e,t,i,r,a){const{width:o,height:n}=i,s=Object(N["k"])(o),c=Object(N["k"])(n);let l;switch(r.width=s,r.height=c,this.params.powerOfTwoResizeMode){case 2:r.textureCoordinateScaleFactor=[o/s,n/c],l=new q["a"](e,r),l.updateData(0,0,0,o,n,t);break;case 1:case null:case void 0:l=this.stretchToPowerOfTwo(e,t,r,a);break;default:Object(R["a"])(this.params.powerOfTwoResizeMode)}return r.hasMipmap&&l.generateMipmap(),l}stretchToPowerOfTwo(e,t,i,r){const a=new q["a"](e,i),o=new je["a"](e,{colorTarget:0,depthStencilTarget:0},a),n=new q["a"](e,{target:3553,pixelFormat:i.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},t),s=Pe(e);return this.drawStretchedTexture(e,r,o,s,n,a),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:n,framebuffer:o}:(s.dispose(!0),n.dispose(),o.detachColorTexture(),e.bindFramebuffer(null),o.dispose()),a}drawStretchedTexture(e,t,i,r,a,o){e.bindFramebuffer(i);const n=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height);const s=t.program;e.useProgram(s),s.setUniform4f("color",1,1,1,1),s.bindTexture(a,"tex"),e.bindVAO(r),e.setPipelineState(t.pipeline),e.drawArrays(5,0,Object($["e"])(r,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height)}unload(){if(Object(a["i"])(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:i}=this.powerOfTwoStretchInfo;t.dispose(!0),i.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if(Object(a["i"])(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),Object(a["i"])(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}Ee.DDS_ENCODING="image/vnd-ms.dds",Ee.KTX2_ENCODING="image/ktx2",Ee.BASIS_ENCODING="image/x.basis";var De=i("fc00"),Ie=i("ebd5");const ze=e=>{class t extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const i=this[t];this[t]=null,i&&"function"==typeof i.dispose&&i.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}}return t};class Re extends(ze(class{})){}class Le extends Re{constructor(e){super(),this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}get technique(){return this._technique}getPipelineState(e,t){return this.technique.pipeline}ensureResources(e){return 2}ensureParameters(e){}}var Ne=Le;class Be extends Ne{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquire(this._textureId),this._textureNormal=this._acquire(e.normalTextureId),this._textureEmissive=this._acquire(e.emissiveTextureId),this._textureOcclusion=this._acquire(e.occlusionTextureId),this._textureMetallicRoughness=this._acquire(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach(e=>this._textureRepository.release(e)),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._release(this._textureId),this._textureId=e,this._texture=this._acquire(this._textureId))}bindTextures(e){Object(a["i"])(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),Object(a["i"])(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),Object(a["i"])(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),Object(a["i"])(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),Object(a["i"])(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=Object(a["i"])(this._texture)&&this._texture.glTexture;t&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e){if(!Object(a["h"])(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_release(e){Object(a["h"])(e)||(this._textureIDs.delete(e),this._textureRepository.release(e))}}var Ve=Be,Ue=i("7c51");class He extends F{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=we,this._params=Object(Ue["c"])(e,t),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(e){return!1}setParameterValues(e){Object(Ue["e"])(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){Object(a["i"])(this.materialRepository)&&this.materialRepository.materialChanged(this)}}const Ge={renderOccluded:1};var ke=i("189c");const qe=Object(ke["f"])(770,1,771,771),$e=Object(ke["g"])(1,1),We=Object(ke["g"])(0,771);function Xe(e){return 2===e?null:1===e?We:$e}const Ke=5e5,Ye={factor:-1,units:-2};function Je(e){return e?Ye:null}function Qe(e){return 3===e||2===e?513:515}var Ze=i("04f0"),et=i("b139"),tt=i("47f8"),it=i("0fc4"),rt=(i("c120"),i("7577")),at=i("2119"),ot=i("7361");function nt(e,t,i){const r=Object(l["e"])(e.direction,Object(l["g"])(i,t,e.origin));return Object(l["c"])(i,e.origin,Object(l["b"])(i,e.direction,r)),i}function st(){return{origin:null,direction:null}}new at["a"](st);function ct(e,t){const i=Object(l["e"])(e,t)/(Object(l["m"])(e)*Object(l["m"])(t));return-Object(N["a"])(i)}Object(d["e"])(),Object(d["e"])();const lt=_["a"].getLogger("esri.geometry.support.sphere");function dt(){return Object(it["b"])()}function ut(e,t=dt()){return Object(rt["c"])(t,e)}function ht(e,t){return Object(it["c"])(e[0],e[1],e[2],t)}function mt(e){return e}function pt(e){e[0]=e[1]=e[2]=e[3]=0}function ft(e){return e}function vt(e){return Array.isArray(e)?e[3]:e}function gt(e){return Array.isArray(e)?e:Dt}function bt(e,t,i,r){return Object(it["c"])(e,t,i,r)}function xt(e,t,i){return e!==i&&Object(l["h"])(i,e),i[3]=e[3]+t,i}function Ot(e,t,i){return lt.error("sphere.setExtent is not yet supported"),e===i?i:ut(e,i)}function Tt(e,t,i){if(Object(a["h"])(t))return!1;const r=Object(l["g"])(ot["b"].get(),t.origin,gt(e)),o=Object(l["e"])(t.direction,t.direction),n=2*Object(l["e"])(t.direction,r),s=n*n-4*o*(Object(l["e"])(r,r)-e[3]*e[3]);if(s<0)return!1;const c=Math.sqrt(s);let d=(-n-c)/(2*o);const u=(-n+c)/(2*o);return(d<0||u<d&&u>0)&&(d=u),!(d<0)&&(i&&Object(l["c"])(i,t.origin,Object(l["b"])(ot["b"].get(),t.direction,d)),!0)}function _t(e,t){return Tt(e,t,null)}function yt(e,t,i){if(Tt(e,t,i))return i;const r=wt(e,t,ot["b"].get());return Object(l["c"])(i,t.origin,Object(l["b"])(ot["b"].get(),t.direction,Object(l["j"])(t.origin,r)/Object(l["m"])(t.direction))),i}function wt(e,t,i){const r=ot["b"].get(),a=ot["a"].get();Object(l["d"])(r,t.origin,t.direction);const o=vt(e);Object(l["d"])(i,r,t.origin),Object(l["b"])(i,i,1/Object(l["m"])(i)*o);const n=At(e,t.origin),c=ct(t.origin,i);return Object(s["h"])(a),Object(s["b"])(a,a,c+n,r),Object(l["n"])(i,i,a),i}function Mt(e,t,i){return Tt(e,t,i)?i:(nt(t,gt(e),i),St(e,i,i))}function St(e,t,i){const r=Object(l["g"])(ot["b"].get(),t,gt(e)),a=Object(l["b"])(ot["b"].get(),r,e[3]/Object(l["m"])(r));return Object(l["c"])(i,a,gt(e))}function Ct(e,t){const i=Object(l["g"])(ot["b"].get(),t,gt(e)),r=Object(l["p"])(i),a=e[3]*e[3];return Math.sqrt(Math.abs(r-a))}function At(e,t){const i=Object(l["g"])(ot["b"].get(),t,gt(e)),r=Object(l["m"])(i),a=vt(e),o=a+Math.abs(a-r);return Object(N["a"])(a/o)}const Pt=Object(d["e"])();function jt(e,t,i,r){const a=Object(l["g"])(Pt,t,gt(e));switch(i){case 0:{const e=Object(N["c"])(a,Pt)[2];return Object(l["s"])(r,-Math.sin(e),Math.cos(e),0)}case 1:{const e=Object(N["c"])(a,Pt),t=e[1],i=e[2],o=Math.sin(t);return Object(l["s"])(r,-o*Math.cos(i),-o*Math.sin(i),Math.cos(t))}case 2:return Object(l["o"])(r,a);default:return}}function Ft(e,t){const i=Object(l["g"])(It,t,gt(e));return Object(l["m"])(i)-e[3]}function Et(e,t,i,r){const a=Ft(e,t),o=jt(e,t,2,It),n=Object(l["b"])(It,o,i-a);return Object(l["c"])(r,t,n)}const Dt=Object(d["e"])(),It=Object(d["e"])();Object.freeze({__proto__:null,create:dt,copy:ut,fromCenterAndRadius:ht,wrap:mt,clear:pt,fromRadius:ft,getRadius:vt,getCenter:gt,fromValues:bt,elevate:xt,setExtent:Ot,intersectRay:Tt,intersectsRay:_t,intersectRayClosestSilhouette:yt,closestPointOnSilhouette:wt,closestPoint:Mt,projectPoint:St,distanceToSilhouette:Ct,angleToSilhouette:At,axisAt:jt,altitudeAt:Ft,setAltitudeAt:Et});class zt{constructor(e=0){this.offset=e,this.tmpVertex=Object(d["e"])()}applyToVertex(e,t,i){const r=e+this.localOrigin[0],a=t+this.localOrigin[1],o=i+this.localOrigin[2],n=this.offset/Math.sqrt(r*r+a*a+o*o);return this.tmpVertex[0]=e+r*n,this.tmpVertex[1]=t+a*n,this.tmpVertex[2]=i+o*n,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],i=e[1]+this.localOrigin[1],r=e[2]+this.localOrigin[2],a=e[3]+this.localOrigin[0],o=e[4]+this.localOrigin[1],n=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+i*i+r*r);e[0]+=t*s,e[1]+=i*s,e[2]+=r*s;const c=this.offset/Math.sqrt(a*a+o*o+n*n);return e[3]+=a*c,e[4]+=o*c,e[5]+=n*c,e}}class Rt{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=Object(d["e"])(),this.mbs=Object(it["b"])(),this.obb={center:Object(d["e"])(),halfSize:Object(tt["a"])(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,i){const r=e,a=t,o=i+this.componentLocalOriginLength,n=this.offset/Math.sqrt(r*r+a*a+o*o);return this.tmpVertex[0]=e+r*n,this.tmpVertex[1]=t+a*n,this.tmpVertex[2]=i+o*n,this.tmpVertex}applyToAabb(e){const t=e[0],i=e[1],r=e[2]+this.componentLocalOriginLength,a=e[3],o=e[4],n=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+i*i+r*r);e[0]+=t*s,e[1]+=i*s,e[2]+=r*s;const c=this.offset/Math.sqrt(a*a+o*o+n*n);return e[3]+=a*c,e[4]+=o*c,e[5]+=n*c,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/t;return this.mbs[0]=e[0]+e[0]*i,this.mbs[1]=e[1]+e[1]*i,this.mbs[2]=e[2]+e[2]*i,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*i,this.obb.center[1]=t[1]+t[1]*i,this.obb.center[2]=t[2]+t[2]*i,Object(l["q"])(this.obb.halfSize,e.halfSize,e.quaternion),Object(l["c"])(this.obb.halfSize,this.obb.halfSize,e.center);const r=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*r,this.obb.halfSize[1]+=this.obb.halfSize[1]*r,this.obb.halfSize[2]+=this.obb.halfSize[2]*r,Object(l["g"])(this.obb.halfSize,this.obb.halfSize,e.center),Object(Ze["a"])(Vt,e.quaternion),Object(l["q"])(this.obb.halfSize,this.obb.halfSize,Vt),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}}class Lt{constructor(e=0){this.offset=e,this.sphere=dt(),this.tmpVertex=Object(d["e"])()}applyToVertex(e,t,i){const r=this.objectTransform.transform;let a=r[0]*e+r[4]*t+r[8]*i+r[12],o=r[1]*e+r[5]*t+r[9]*i+r[13],n=r[2]*e+r[6]*t+r[10]*i+r[14];const s=this.offset/Math.sqrt(a*a+o*o+n*n);a+=a*s,o+=o*s,n+=n*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*a+c[4]*o+c[8]*n+c[12],this.tmpVertex[1]=c[1]*a+c[5]*o+c[9]*n+c[13],this.tmpVertex[2]=c[2]*a+c[6]*o+c[10]*n+c[14],this.tmpVertex}applyToMinMax(e,t){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*r,t[1]+=t[1]*r,t[2]+=t[2]*r}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/t;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}}const Nt=new Lt;function Bt(e){return Object(a["i"])(e)?(Nt.offset=e,Nt):null}new Rt;new zt;const Vt=Object(et["b"])();function Ut(e,t,i,r){const a=i.typedBuffer,o=i.typedBufferStride,n=e.length;r*=o;for(let s=0;s<n;++s){const i=2*e[s];a[r]=t[i],a[r+1]=t[i+1],r+=o}}function Ht(e,t,i,r,a){const o=i.typedBuffer,n=i.typedBufferStride,s=e.length;if(r*=n,null==a||1===a)for(let c=0;c<s;++c){const i=3*e[c];o[r]=t[i],o[r+1]=t[i+1],o[r+2]=t[i+2],r+=n}else for(let c=0;c<s;++c){const i=3*e[c];for(let e=0;e<a;++e)o[r]=t[i],o[r+1]=t[i+1],o[r+2]=t[i+2],r+=n}}function Gt(e,t,i,r,a=1){const o=i.typedBuffer,n=i.typedBufferStride,s=e.length;if(r*=n,1===a)for(let c=0;c<s;++c){const i=4*e[c];o[r]=t[i],o[r+1]=t[i+1],o[r+2]=t[i+2],o[r+3]=t[i+3],r+=n}else for(let c=0;c<s;++c){const i=4*e[c];for(let e=0;e<a;++e)o[r]=t[i],o[r+1]=t[i+1],o[r+2]=t[i+2],o[r+3]=t[i+3],r+=n}}function kt(e,t,i,r,a,o=1){if(!i)return void Ht(e,t,r,a,o);const n=r.typedBuffer,s=r.typedBufferStride,c=e.length,l=i[0],d=i[1],u=i[2],h=i[4],m=i[5],p=i[6],f=i[8],v=i[9],g=i[10],b=i[12],x=i[13],O=i[14];if(a*=s,1===o)for(let T=0;T<c;++T){const i=3*e[T],r=t[i],o=t[i+1],c=t[i+2];n[a]=l*r+h*o+f*c+b,n[a+1]=d*r+m*o+v*c+x,n[a+2]=u*r+p*o+g*c+O,a+=s}else for(let T=0;T<c;++T){const i=3*e[T],r=t[i],c=t[i+1],_=t[i+2],y=l*r+h*c+f*_+b,w=d*r+m*c+v*_+x,M=u*r+p*c+g*_+O;for(let e=0;e<o;++e)n[a]=y,n[a+1]=w,n[a+2]=M,a+=s}}function qt(e,t,i,r,a,o=1){if(!i)return void Ht(e,t,r,a,o);const n=i,c=r.typedBuffer,l=r.typedBufferStride,d=e.length,u=n[0],h=n[1],m=n[2],p=n[4],f=n[5],v=n[6],g=n[8],b=n[9],x=n[10],O=!Object(s["k"])(n),T=1e-6,_=1-T;if(a*=l,1===o)for(let s=0;s<d;++s){const i=3*e[s],r=t[i],o=t[i+1],n=t[i+2];let d=u*r+p*o+g*n,y=h*r+f*o+b*n,w=m*r+v*o+x*n;if(O){const e=d*d+y*y+w*w;if(e<_&&e>T){const t=1/Math.sqrt(e);d*=t,y*=t,w*=t}}c[a+0]=d,c[a+1]=y,c[a+2]=w,a+=l}else for(let s=0;s<d;++s){const i=3*e[s],r=t[i],n=t[i+1],d=t[i+2];let y=u*r+p*n+g*d,w=h*r+f*n+b*d,M=m*r+v*n+x*d;if(O){const e=y*y+w*w+M*M;if(e<_&&e>T){const t=1/Math.sqrt(e);y*=t,w*=t,M*=t}}for(let e=0;e<o;++e)c[a+0]=y,c[a+1]=w,c[a+2]=M,a+=l}}function $t(e,t,i,r,a,o=1){if(!i)return void Gt(e,t,r,a,o);const n=i,c=r.typedBuffer,l=r.typedBufferStride,d=e.length,u=n[0],h=n[1],m=n[2],p=n[4],f=n[5],v=n[6],g=n[8],b=n[9],x=n[10],O=!Object(s["k"])(n),T=1e-6,_=1-T;if(a*=l,1===o)for(let s=0;s<d;++s){const i=4*e[s],r=t[i],o=t[i+1],n=t[i+2],d=t[i+3];let y=u*r+p*o+g*n,w=h*r+f*o+b*n,M=m*r+v*o+x*n;if(O){const e=y*y+w*w+M*M;if(e<_&&e>T){const t=1/Math.sqrt(e);y*=t,w*=t,M*=t}}c[a+0]=y,c[a+1]=w,c[a+2]=M,c[a+3]=d,a+=l}else for(let s=0;s<d;++s){const i=4*e[s],r=t[i],n=t[i+1],d=t[i+2],y=t[i+3];let w=u*r+p*n+g*d,M=h*r+f*n+b*d,S=m*r+v*n+x*d;if(O){const e=w*w+M*M+S*S;if(e<_&&e>T){const t=1/Math.sqrt(e);w*=t,M*=t,S*=t}}for(let e=0;e<o;++e)c[a+0]=w,c[a+1]=M,c[a+2]=S,c[a+3]=y,a+=l}}function Wt(e,t,i,r,a,o=1){const n=r.typedBuffer,s=r.typedBufferStride,c=e.length;if(a*=s,1===o){if(4===i)for(let l=0;l<c;++l){const i=4*e[l];n[a]=t[i],n[a+1]=t[i+1],n[a+2]=t[i+2],n[a+3]=t[i+3],a+=s}else if(3===i)for(let l=0;l<c;++l){const i=3*e[l];n[a]=t[i],n[a+1]=t[i+1],n[a+2]=t[i+2],n[a+3]=255,a+=s}}else if(4===i)for(let l=0;l<c;++l){const i=4*e[l];for(let e=0;e<o;++e)n[a]=t[i],n[a+1]=t[i+1],n[a+2]=t[i+2],n[a+3]=t[i+3],a+=s}else if(3===i)for(let l=0;l<c;++l){const i=3*e[l];for(let e=0;e<o;++e)n[a]=t[i],n[a+1]=t[i+1],n[a+2]=t[i+2],n[a+3]=255,a+=s}}function Xt(e,t,i,r,a,o){for(const n of t.fieldNames){const t=e.vertexAttributes.get(n),s=e.indices.get(n);if(t&&s)switch(n){case"position":{Object(C["a"])(3===t.size);const e=a.getField(n,h["u"]);e&&kt(s,t.data,i,e,o);break}case"normal":{Object(C["a"])(3===t.size);const e=a.getField(n,h["u"]);e&&qt(s,t.data,r,e,o);break}case"uv0":{Object(C["a"])(2===t.size);const e=a.getField(n,h["m"]);e&&Ut(s,t.data,e,o);break}case"color":{Object(C["a"])(3===t.size||4===t.size);const e=a.getField(n,h["J"]);e&&Wt(s,t.data,t.size,e,o);break}case"symbolColor":{Object(C["a"])(3===t.size||4===t.size);const e=a.getField(n,h["J"]);e&&Wt(s,t.data,t.size,e,o);break}case"tangent":{Object(C["a"])(4===t.size);const e=a.getField(n,h["C"]);e&&$t(s,t.data,r,e,o);break}}}}var Kt=i("a4ee"),Yt=i("d272"),Jt=i("d539"),Qt=i("17b0"),Zt=i("6a07"),ei=i("c6d7"),ti=i("a7d7"),ii=i("d017"),ri=i("be24"),ai=i("6a21"),oi=i("970c");function ni(e,t,i){e.setUniform3f("camPos",i[3]-t[0],i[7]-t[1],i[11]-t[2])}function si(e,t){e.setUniformMatrix4fv("proj",t)}function ci(e,t,i){Object(s["m"])(li,i,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",li)}const li=Object(oi["a"])();class di{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class ui{constructor(e,t,i=(()=>this.dispose())){this.release=i,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}dispose(){this._program=Object(a["e"])(this._program),this._pipeline=this._config=null}reload(e){Object(a["e"])(this._program),this._program=this.initializeProgram(e)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e,t,i){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}class hi{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map(()=>0)}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const i of e)t[i]=this[i];return t}}function mi(e={}){return(t,i)=>{var r,a;t._parameterNames=null!=(r=t._parameterNames)?r:[],t._parameterNames.push(i);const o=t._parameterNames.length-1,n=e.count||2,s=Math.ceil(Object(N["j"])(n)),c=null!=(a=t._parameterBits)?a:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);t._parameterBits=c;const d=c[l],u=(1<<s)-1<<d;c[l]+=s,Object.defineProperty(t,i,{get(){return this[o]},set(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~u|+e<<d&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+i+" must be boolean or number, got "+typeof e}})}}var pi=i("8e37"),fi=i("6df2");class vi extends pi["a"]{constructor(e,t,i){super(e,t.generateSource("vertex"),t.generateSource("fragment"),i),this._textures=new Map,this._freeTextureUnits=new S["a"]({deallocator:null}),this._fragmentUniforms=Object(fi["b"])()?t.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(Object(a["h"])(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let i=this._textures.get(t);return null==i?(i=this._allocTextureUnit(e),this._textures.set(t,i)):i.texture=e,this._context.useProgram(this),this.setUniform1i(t,i.unit),this._context.bindTexture(e,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)}),Object(a["i"])(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}const gi={mask:255},bi={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},xi={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};var Oi=i("0310");class Ti extends ui{initializeProgram(e){const t=Ti.shader.get(),i=this.configuration,r=t.build({OITEnabled:0===i.transparencyPassType,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?i.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:i.hasMetalnessAndRoughnessTexture,hasEmissionTexture:i.hasEmissionTexture,hasOcclusionTexture:i.hasOcclusionTexture,hasNormalTexture:i.hasNormalTexture,hasColorTexture:i.hasColorTexture,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:i.normalsTypeDerivate?3:0,doubleSidedMode:i.doubleSidedMode,vertexTangents:i.vertexTangents,attributeTextureCoordinates:i.hasMetalnessAndRoughnessTexture||i.hasEmissionTexture||i.hasOcclusionTexture||i.hasNormalTexture||i.hasColorTexture?1:0,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(ai["b"])(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new vi(e.rctx,r,we)}bindPass(e,t){var i,r;si(this.program,t.camera.projectionMatrix);const a=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===a)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(ei["a"])(this.program,t)),7===a&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Ue["b"][e.colorMixMode])),0===a?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Ue["b"][e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Object(ti["b"])(this.program,e,this.configuration.isSchematic)):4===a&&Object(Zt["b"])(this.program,t),Object(ri["b"])(this.program,e),Object(Qt["b"])(this.program,e,t),Object(Ue["a"])(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(i=t.shadowMap)||i.bind(this.program),null==(r=t.ssaoHelper)||r.bind(this.program)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(d["g"])(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;ci(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&ni(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Jt["a"].bindCustomOrigin(this.program,t),Object(Yt["b"])(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&Object(ii["b"])(this.program,e,t)}setPipeline(e,t){const i=this.configuration,r=3===e,a=2===e;return Object(ke["e"])({blending:0!==i.output&&7!==i.output||!i.transparent?null:r?qe:Xe(e),culling:_i(i)&&Object(ke["b"])(i.cullFace),depthTest:{func:Qe(e)},depthWrite:r||a?i.writeDepth&&ke["d"]:null,colorWrite:ke["c"],stencilWrite:i.sceneHasOcludees?gi:null,stencilTest:i.sceneHasOcludees?t?xi:bi:null,polygonOffset:r||a?null:Je(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}function _i(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}Ti.shader=new di(Oi["a"],()=>i.e("chunk-2d0cb6c5").then(i.bind(null,"4a35")));class yi extends hi{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(Kt["a"])([mi({count:8})],yi.prototype,"output",void 0),Object(Kt["a"])([mi({count:4})],yi.prototype,"alphaDiscardMode",void 0),Object(Kt["a"])([mi({count:3})],yi.prototype,"doubleSidedMode",void 0),Object(Kt["a"])([mi()],yi.prototype,"isSchematic",void 0),Object(Kt["a"])([mi()],yi.prototype,"vertexColors",void 0),Object(Kt["a"])([mi()],yi.prototype,"offsetBackfaces",void 0),Object(Kt["a"])([mi()],yi.prototype,"symbolColors",void 0),Object(Kt["a"])([mi()],yi.prototype,"vvSize",void 0),Object(Kt["a"])([mi()],yi.prototype,"vvColor",void 0),Object(Kt["a"])([mi()],yi.prototype,"verticalOffset",void 0),Object(Kt["a"])([mi()],yi.prototype,"receiveShadows",void 0),Object(Kt["a"])([mi()],yi.prototype,"slicePlaneEnabled",void 0),Object(Kt["a"])([mi()],yi.prototype,"sliceHighlightDisabled",void 0),Object(Kt["a"])([mi()],yi.prototype,"receiveAmbientOcclusion",void 0),Object(Kt["a"])([mi()],yi.prototype,"screenSizePerspective",void 0),Object(Kt["a"])([mi()],yi.prototype,"textureAlphaPremultiplied",void 0),Object(Kt["a"])([mi()],yi.prototype,"hasColorTexture",void 0),Object(Kt["a"])([mi()],yi.prototype,"usePBR",void 0),Object(Kt["a"])([mi()],yi.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(Kt["a"])([mi()],yi.prototype,"hasEmissionTexture",void 0),Object(Kt["a"])([mi()],yi.prototype,"hasOcclusionTexture",void 0),Object(Kt["a"])([mi()],yi.prototype,"hasNormalTexture",void 0),Object(Kt["a"])([mi()],yi.prototype,"instanced",void 0),Object(Kt["a"])([mi()],yi.prototype,"instancedColor",void 0),Object(Kt["a"])([mi()],yi.prototype,"instancedDoublePrecision",void 0),Object(Kt["a"])([mi()],yi.prototype,"vertexTangents",void 0),Object(Kt["a"])([mi()],yi.prototype,"normalsTypeDerivate",void 0),Object(Kt["a"])([mi()],yi.prototype,"writeDepth",void 0),Object(Kt["a"])([mi()],yi.prototype,"sceneHasOcludees",void 0),Object(Kt["a"])([mi()],yi.prototype,"transparent",void 0),Object(Kt["a"])([mi()],yi.prototype,"enableOffset",void 0),Object(Kt["a"])([mi({count:3})],yi.prototype,"cullFace",void 0),Object(Kt["a"])([mi({count:4})],yi.prototype,"transparencyPassType",void 0),Object(Kt["a"])([mi()],yi.prototype,"multipassTerrainEnabled",void 0),Object(Kt["a"])([mi()],yi.prototype,"cullAboveGround",void 0);var wi=i("b0ab");class Mi extends Ti{initializeProgram(e){const t=Mi.shader.get(),i=this.configuration,r=t.build({OITEnabled:0===i.transparencyPassType,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:i.hasColorTexture,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:i.hasColorTexture?1:0,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(ai["b"])(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new vi(e.rctx,r,we)}}Mi.shader=new di(wi["a"],()=>i.e("chunk-2d0ab897").then(i.bind(null,"1662")));class Si extends He{constructor(e){super(e,Ai),this.supportsEdges=!0,this.techniqueConfig=new yi,this.vertexBufferLayout=Si.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?Si.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,i=e.vertexColors,r=e.symbolColors,a=!!t&&t.indexOf("color")>-1,o=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return i&&(a||o||r)?!!n||s:i?n?c:s:a||o||r?!!n||s:n?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=this.params.slicePlaneEnabled?0:this.params.cullFace,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!!t&&t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<Ke),this.techniqueConfig}intersect(e,t,i,r,a,o,n){if(null!==this.params.verticalOffset){const e=r.camera;Object(l["s"])(zi,i[12],i[13],i[14]);let t=null;switch(r.viewingMode){case 1:t=Object(l["o"])(Di,zi);break;case 2:t=Object(l["h"])(Di,Ei)}let n=0;if(null!==this.params.verticalOffset){const i=Object(l["g"])(Ri,zi,e.eye),r=Object(l["m"])(i),a=Object(l["b"])(i,i,1/r);let o=null;this.params.screenSizePerspective&&(o=Object(l["e"])(t,a)),n+=Object(Ue["f"])(e,r,this.params.verticalOffset,o,this.params.screenSizePerspective)}Object(l["b"])(t,t,n),Object(l["t"])(Ii,t,r.transform.inverseRotation),a=Object(l["g"])(ji,a,Ii),o=Object(l["g"])(Fi,o,Ii)}Object(Ue["d"])(e,t,r,a,o,Bt(r.verticalOffset),n)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new Ci(e)}createBufferWriter(){return new Pi(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,i=Object(De["a"])().vec3f("position").vec3f("normal");return e.vertexTangents&&i.vec4f("tangent"),t&&i.vec2f("uv0"),e.vertexColors&&i.vec4u8("color"),e.symbolColors&&i.vec4u8("symbolColor"),i}static getInstanceBufferLayout(e){let t=Object(De["a"])();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class Ci extends Ve{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this._material.params;this.updateTexture(t.textureId),this._technique=this._techniqueRep.releaseAndAcquire(t.treeRendering?Mi:Ti,this._material.getTechniqueConfig(this._output,e),this._technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this._material.params.shadowMappingEnabled&&this._material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.params.sceneHasOcludees&&this._material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e){this._technique.bindPass(this._material.params,e),this.bindTextures(this._technique.program)}beginSlot(e){return e===(this._material.params.transparent?this._material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this._technique.getPipelineState(t)}}const Ai={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(n["b"])(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:Ie["b"],textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...Ge};class Pi{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,i,r){Xt(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,r)}}const ji=Object(d["e"])(),Fi=Object(d["e"])(),Ei=Object(d["g"])(0,0,1),Di=Object(d["e"])(),Ii=Object(d["e"])(),zi=Object(d["e"])(),Ri=Object(d["e"])(),Li=_["a"].getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Ni(e,t){const i=await Bi(e,t);return{resource:i,textures:await qi(i.textureDefinitions,t)}}async function Bi(e,t){const i=Object(a["i"])(t)&&t.streamDataRequester;if(i)return Vi(e,i,t);const r=await Object(O["c"])(Object(x["default"])(e,Object(a["p"])(t)));if(!0===r.ok)return r.value.data;Object(y["u"])(r.error),Ui(r.error)}async function Vi(e,t,i){const r=await Object(O["c"])(t.request(e,"json",i));if(!0===r.ok)return r.value;Object(y["u"])(r.error),Ui(r.error.details.url)}function Ui(e){throw new T["a"]("","Request for object resource failed: "+e)}function Hi(e){const t=e.params,i=t.topology;let r=!0;switch(t.vertexAttributes||(Li.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const i in t.vertexAttributes){const t=e[i];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Li.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Li.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(Li.warn(`Indexed geometry does not specify face indices for '${i}' attribute`),r=!1)}}else Li.warn("Indexed geometries must specify faces"),r=!1;break}default:Li.warn(`Unsupported topology '${i}'`),r=!1}e.params.material||(Li.warn("Geometry requires material"),r=!1);const a=e.params.vertexAttributes;for(const o in a)a[o].values||(Li.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Gi(e,t){const i=[],r=[],o=[],n=[],s=e.resource,c=w["a"].parse(s.version||"1.0","wosr");Xi.validate(c);const l=s.model.name,u=s.model.geometries,h=s.materialDefinitions,m=e.textures;let p=0;const f=new Map;for(let v=0;v<u.length;v++){const e=u[v];if(!Hi(e))continue;const s=Wi(e),c=e.params.vertexAttributes,l=[];for(const t in c){const e=c[t],i=e.values;l.push([t,{data:i,size:e.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,new Uint32Array(t[e].values)])}const b=m&&m[s.texture];if(b&&!f.has(s.texture)){const{image:e,params:t}=b,i=new Ee(e,t);n.push(i),f.set(s.texture,i)}const x=f.get(s.texture),O=x?x.id:void 0;let T=o[s.material]?o[s.material][s.texture]:null;if(!T){const e=h[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const i=b&&b.alphaChannelUsage,r=e.transparency>0||"transparency"===i||"maskAndTransparency"===i,n={ambient:Object(d["f"])(e.diffuse),diffuse:Object(d["f"])(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:b?$i(b.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:O,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};Object(a["i"])(t)&&t.materialParamsMixin&&Object.assign(n,t.materialParamsMixin),T=new Si(n),o[s.material]||(o[s.material]={}),o[s.material][s.texture]=T}r.push(T);const _=new D(l,g);p+=g.position?g.position.length:0,i.push(_)}return{name:l,stageResources:{textures:n,materials:r,geometries:i},pivotOffset:s.model.pivotOffset,boundingBox:ki(i),numberOfVertices:p,lodThreshold:null}}function ki(e){const t=Object(u["c"])();return e.forEach(e=>{const i=e.boundingInfo;Object(a["i"])(i)&&(Object(u["g"])(t,i.getBBMin()),Object(u["g"])(t,i.getBBMax()))}),t}async function qi(e,t){const i=[];for(const n in e){const r=e[n],o=r.images[0].data;if(!o){Li.warn("Externally referenced texture data is not yet supported");continue}const s=r.encoding+";base64,"+o,c="/textureDefinitions/"+n,l={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},d=Object(a["i"])(t)&&t.disableTextures?Promise.resolve(null):Object(M["a"])(s,t);i.push(d.then(e=>({refId:c,image:e,params:l,alphaChannelUsage:"rgba"===r.channels?r.alphaChannelUsage||"transparency":"none"})))}const r=await Promise.all(i),o={};for(const a of r)o[a.refId]=a;return o}function $i(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function Wi(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Xi=new w["a"](1,2,"wosr");var Ki=i("0613"),Yi=i("dc56"),Ji=i("1c20"),Qi=i("4c96");async function Zi(e,t){const i=er(Object(r["a"])(e));if("wosr"===i.fileType){const e=await(t.cache?t.cache.loadWOSR(i.url,t):Ni(i.url,t)),r=Gi(e,t);return{lods:[r],referenceBoundingBox:r.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const o=await(t.cache?t.cache.loadGLTF(i.url,t,t.usePBR):Object(g["a"])(new v["a"](t.streamDataRequester),i.url,t,t.usePBR)),n=Object(a["g"])(o.model.meta,"ESRI_proxyEllipsoid");o.meta.isEsriSymbolResource&&Object(a["i"])(n)&&-1!==o.meta.uri.indexOf("/RealisticTrees/")&&ar(o,n);const s=o.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:o.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},c={...t.materialParamsMixin,treeRendering:o.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=tr(o,s,c,i.specifiedLodIndex);let t=e[0].boundingBox;return 0!==i.specifiedLodIndex&&(t=tr(o,s,c,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}const l=tr(o,s,c);return{lods:l,referenceBoundingBox:l[0].boundingBox,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}function er(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function tr(e,t,i,r){const s=e.model,c=Object(n["b"])(),l=new Array,d=new Map,v=new Map;return s.lods.forEach((e,n)=>{if(void 0!==r&&n!==r)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(a["i"])(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(u["c"])()};l.push(g),e.parts.forEach(e=>{const r=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=s.materials.get(e.material),l=Object(a["i"])(e.attributes.texCoord0),b=Object(a["i"])(e.attributes.normal);if(!d.has(r)){if(l){if(Object(a["i"])(n.textureColor)&&!v.has(n.textureColor)){const e=s.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:!0};v.set(n.textureColor,new Ee(e.data,t))}if(Object(a["i"])(n.textureNormal)&&!v.has(n.textureNormal)){const e=s.textures.get(n.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};v.set(n.textureNormal,new Ee(e.data,t))}if(Object(a["i"])(n.textureOcclusion)&&!v.has(n.textureOcclusion)){const e=s.textures.get(n.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};v.set(n.textureOcclusion,new Ee(e.data,t))}if(Object(a["i"])(n.textureEmissive)&&!v.has(n.textureEmissive)){const e=s.textures.get(n.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};v.set(n.textureEmissive,new Ee(e.data,t))}if(Object(a["i"])(n.textureMetallicRoughness)&&!v.has(n.textureMetallicRoughness)){const e=s.textures.get(n.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};v.set(n.textureMetallicRoughness,new Ee(e.data,t))}}const o=n.color[0]**(1/Ki["a"]),c=n.color[1]**(1/Ki["a"]),u=n.color[2]**(1/Ki["a"]),h=n.emissiveFactor[0]**(1/Ki["a"]),m=n.emissiveFactor[1]**(1/Ki["a"]),p=n.emissiveFactor[2]**(1/Ki["a"]);d.set(r,new Si({...t,transparent:"BLEND"===n.alphaMode,textureAlphaMode:ir(n.alphaMode),textureAlphaCutoff:n.alphaCutoff,diffuse:[o,c,u],ambient:[o,c,u],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:b?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(a["i"])(n.textureColor)&&l?v.get(n.textureColor).id:void 0,colorMixMode:n.colorMixMode,normalTextureId:Object(a["i"])(n.textureNormal)&&l?v.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:Object(a["i"])(n.textureOcclusion)&&l?v.get(n.textureOcclusion).id:void 0,emissiveTextureId:Object(a["i"])(n.textureEmissive)&&l?v.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(a["i"])(n.textureMetallicRoughness)&&l?v.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[h,m,p],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...i}))}const x=rr(e.indices||e.attributes.position.count,e.primitiveType),O=e.attributes.position.count,T=Object(f["a"])(h["u"],O);Object(m["e"])(T,e.attributes.position,e.transform);const _=[["position",{data:T.typedBuffer,size:T.elementCount,exclusive:!0}]],y=[["position",x]];if(Object(a["i"])(e.attributes.normal)){const t=Object(f["a"])(h["u"],O);Object(o["a"])(c,e.transform),Object(m["a"])(t,e.attributes.normal,c),_.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),y.push(["normal",x])}if(Object(a["i"])(e.attributes.tangent)){const t=Object(f["a"])(h["C"],O);Object(o["a"])(c,e.transform),Object(p["c"])(t,e.attributes.tangent,c),_.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),y.push(["tangent",x])}if(Object(a["i"])(e.attributes.texCoord0)){const t=Object(f["a"])(h["m"],O);Object(Yi["b"])(t,e.attributes.texCoord0),_.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),y.push(["uv0",x])}if(Object(a["i"])(e.attributes.color)){const t=Object(f["a"])(h["J"],O);if(4===e.attributes.color.elementCount)e.attributes.color instanceof h["C"]?Object(p["b"])(t,e.attributes.color,255):e.attributes.color instanceof h["J"]?Object(Ji["a"])(t,e.attributes.color):e.attributes.color instanceof h["H"]&&Object(p["b"])(t,e.attributes.color,1/256);else{Object(Ji["b"])(t,255,255,255,255);const i=new h["B"](t.buffer,0,4);e.attributes.color instanceof h["u"]?Object(m["d"])(i,e.attributes.color,255):e.attributes.color instanceof h["B"]?Object(Qi["a"])(i,e.attributes.color):e.attributes.color instanceof h["z"]&&Object(m["d"])(i,e.attributes.color,1/256)}_.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),y.push(["color",x])}const w=new D(_,y);g.stageResources.geometries.push(w),g.stageResources.materials.push(d.get(r)),l&&(Object(a["i"])(n.textureColor)&&g.stageResources.textures.push(v.get(n.textureColor)),Object(a["i"])(n.textureNormal)&&g.stageResources.textures.push(v.get(n.textureNormal)),Object(a["i"])(n.textureOcclusion)&&g.stageResources.textures.push(v.get(n.textureOcclusion)),Object(a["i"])(n.textureEmissive)&&g.stageResources.textures.push(v.get(n.textureEmissive)),Object(a["i"])(n.textureMetallicRoughness)&&g.stageResources.textures.push(v.get(n.textureMetallicRoughness))),g.numberOfVertices+=O;const M=w.boundingInfo;Object(a["i"])(M)&&(Object(u["g"])(g.boundingBox,M.getBBMin()),Object(u["g"])(g.boundingBox,M.getBBMax()))})}),l}function ir(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}function rr(e,t){switch(t){case 4:return Object(b["c"])(e);case 5:return Object(b["b"])(e);case 6:return Object(b["a"])(e)}}function ar(e,t){for(let i=0;i<e.model.lods.length;++i){const r=e.model.lods[i];e.customMeta.esriTreeRendering=!0;for(const o of r.parts){const r=o.attributes.normal;if(Object(a["h"])(r))return;const n=o.attributes.position,u=n.count,m=Object(d["e"])(),p=Object(d["e"])(),v=Object(d["e"])(),g=Object(f["a"])(h["J"],u),b=Object(f["a"])(h["u"],u),x=Object(s["a"])(Object(c["d"])(),o.transform);for(let a=0;a<u;a++){n.getVec(a,p),r.getVec(a,m),Object(l["n"])(p,p,o.transform),Object(l["g"])(v,p,t.center),Object(l["a"])(v,v,t.radius);const s=v[2],c=Object(l["m"])(v),d=Math.min(.45+.55*c*c,1);Object(l["a"])(v,v,t.radius),Object(l["n"])(v,v,x),Object(l["o"])(v,v),i+1!==e.model.lods.length&&e.model.lods.length>1&&Object(l["f"])(v,v,m,s>-1?.2:Math.min(-4*s-3.8,1)),b.setVec(a,v),g.set(a,0,255*d),g.set(a,1,255*d),g.set(a,2,255*d),g.set(a,3,255)}o.attributes.normal=b,o.attributes.color=g}}}},"970c":function(e,t,i){"use strict";function r(){const e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function a(e){const t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function o(e,t,i,r,a,o,n,s,c,l,d,u,h,m,p,f){const v=new Float32Array(16);return v[0]=e,v[1]=t,v[2]=i,v[3]=r,v[4]=a,v[5]=o,v[6]=n,v[7]=s,v[8]=c,v[9]=l,v[10]=d,v[11]=u,v[12]=h,v[13]=m,v[14]=p,v[15]=f,v}function n(e,t){return new Float32Array(e,t,16)}i.d(t,"a",(function(){return r}));const s=r();Object.freeze({__proto__:null,create:r,clone:a,fromValues:o,createView:n,IDENTITY:s})},"9a64":function(e,t,i){"use strict";function r(e,t,i){for(let r=0;r<i;++r)t[2*r]=e[r],t[2*r+1]=e[r]-t[2*r]}function a(e,t,i,a){for(let s=0;s<a;++s)o[0]=e[s],r(o,n,1),t[s]=n[0],i[s]=n[1]}i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return a}));const o=new Float64Array(1),n=new Float32Array(2)},a1ff:function(e,t,i){"use strict";var r=i("38a4"),a=i("b2b2"),o=i("d17d"),n=i("c514");const s=4;class c{constructor(e,t,i=null){this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(o["b"].Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(o["b"].Texture,this))}release(){this.dispose()}resize(e,t){const i=this._descriptor;i.width===e&&i.height===t||(i.width=e,i.height=t,this.setData(null))}setData(e){if(!this._context||!this._context.gl)return;const t=this._context.gl;this._glName||(this._glName=t.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||s,this._descriptor.height=this._descriptor.height||s);const i=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES),r=this._descriptor;c._validateTexture(this._context,r),t.pixelStorei(t.UNPACK_ALIGNMENT,r.unpackAlignment),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,r.flipped?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.preMultiplyAlpha?1:0);const o=r.pixelFormat;let n=r.internalFormat?r.internalFormat:o;if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let i=e.width,a=e.height;e instanceof HTMLVideoElement&&(i=e.videoWidth,a=e.videoHeight),r.width&&r.height,t.texImage2D(t.TEXTURE_2D,0,n,o,r.dataType,e),r.hasMipmap&&this.generateMipmap(),void 0===r.width&&(r.width=i),void 0===r.height&&(r.height=a)}else{null!=r.width&&null!=r.height||console.error("Width and height must be specified!"),t.DEPTH24_STENCIL8&&n===t.DEPTH_STENCIL&&(n=t.DEPTH24_STENCIL8);let i=r.width,s=r.height;if(l(e)){const a=Math.round(Math.log(Math.max(i,s))/Math.LN2)+1;r.hasMipmap=r.hasMipmap&&a===e.levels.length;for(let o=0;;++o){const a=e.levels[Math.min(o,e.levels.length-1)];if(t.compressedTexImage2D(t.TEXTURE_2D,o,n,i,s,0,a),1===i&&1===s||!r.hasMipmap)break;i=Math.max(1,i>>1),s=Math.max(1,s>>1)}}else if(Object(a["i"])(e))t.texImage2D(t.TEXTURE_2D,0,n,i,s,0,o,r.dataType,e),r.hasMipmap&&this.generateMipmap();else for(let e=0;t.texImage2D(t.TEXTURE_2D,e,n,i,s,0,o,r.dataType,null),(1!==i||1!==s)&&r.hasMipmap;++e)i=Math.max(1,i>>1),s=Math.max(1,s>>1)}c._applySamplingMode(t,this._descriptor),c._applyWrapMode(t,this._descriptor),c._applyAnisotropicFilteringParameters(this._context,this._descriptor),this._context.bindTexture(i,c.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,i,r,a,o){o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const n=this._context.gl,s=this._descriptor,l=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);(t<0||i<0||r>s.width||a>s.height||t+r>s.width||i+a>s.height)&&console.error("An attempt to update out of bounds of the texture!"),n.pixelStorei(n.UNPACK_ALIGNMENT,s.unpackAlignment),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,s.flipped?1:0),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.preMultiplyAlpha?1:0),o instanceof ImageData||o instanceof HTMLImageElement||o instanceof HTMLCanvasElement||o instanceof HTMLVideoElement?n.texSubImage2D(n.TEXTURE_2D,e,t,i,s.pixelFormat,s.dataType,o):n.texSubImage2D(n.TEXTURE_2D,e,t,i,r,a,s.pixelFormat,s.dataType,o),this._context.bindTexture(l,c.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,c._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES),i=this._context.gl;i.generateMipmap(i.TEXTURE_2D),this._context.bindTexture(t,c.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,c._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(c._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(c._applyWrapMode(e,t),this._wrapModeDirty=!1)}static _validateTexture(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");const i=Object(r["h"])(t.width)&&Object(r["h"])(t.height);Object(n["a"])(e.gl)||i||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let i=t.samplingMode,r=t.samplingMode;9985===i||9987===i?(i=9729,t.hasMipmap||(r=9729)):9984!==i&&9986!==i||(i=9728,t.hasMipmap||(r=9728)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,r)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var i;const r=e.capabilities.textureFilterAnisotropic;if(!r)return;const a=e.gl;a.texParameterf(a.TEXTURE_2D,r.TEXTURE_MAX_ANISOTROPY,null!=(i=t.maxAnisotropy)?i:1)}}function l(e){return Object(a["i"])(e)&&"type"in e&&"compressed"===e.type}c.TEXTURE_UNIT_FOR_UPDATES=0,t["a"]=c},a7d7:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s}));var r=i("47f8"),a=i("7cb4"),o=i("3886");Object(r["b"])(0,.6,.2);function n(e,t){const i=e.fragment,r=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&r&&e.include(a["a"],t),2!==t.pbrMode?(0===t.pbrMode&&i.code.add(o["a"]`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(i.uniforms.add("emissionFactor","vec3"),i.uniforms.add("mrrFactors","vec3"),i.code.add(o["a"]`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(i.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&i.uniforms.add("texMetallicRoughnessSize","vec2"),i.code.add(o["a"]`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(i.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&i.uniforms.add("texEmissionSize","vec2"),i.code.add(o["a"]`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(i.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&i.uniforms.add("texOcclusionSize","vec2"),i.code.add(o["a"]`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):i.code.add(o["a"]`float getBakedOcclusion() { return 1.0; }`),i.code.add(o["a"]`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${r?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):i.code.add(o["a"]`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function s(e,t,i=!1){i||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},aab5:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("3886");function a(e,t){const i=e.fragment;i.code.add(r["a"]`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?i.code.add(r["a"]`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?i.code.add(r["a"]`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):i.code.add(r["a"]`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},b09a:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("3886");function a(e){e.attributes.add("position","vec3"),e.vertex.code.add(r["a"]`vec3 positionModel() { return position; }`)}},b0ab:function(e,t,i){"use strict";i.d(t,"a",(function(){return A})),i.d(t,"b",(function(){return C}));var r=i("bd75"),a=i("17ca"),o=i("d272"),n=i("4db9"),s=i("d539"),c=i("c332"),l=i("b09a"),d=i("6cb2"),u=i("dfaf"),h=i("6d5b"),m=i("17b0"),p=i("7e21"),f=i("d047"),v=i("7088"),g=i("ea4b"),b=i("c6d7"),x=i("5d5f"),O=i("a7d7"),T=i("d017"),_=i("be24"),y=i("ebd5"),w=i("3626"),M=i("3886"),S=i("690a");function C(e){const t=new S["a"],i=t.vertex.code,C=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l["a"]),t.varyings.add("vpos","vec3"),t.include(_["a"],e),t.include(s["a"],e),t.include(m["a"],e),0!==e.output&&7!==e.output||(t.include(c["a"],e),t.include(n["a"],{linearDepth:!1}),e.offsetBackfaces&&t.include(a["a"]),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(u["a"],e),t.include(r["a"],e),t.include(d["a"],e),t.include(h["a"],e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),i.add(M["a"]`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${M["a"].float(y["c"])}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?M["a"]`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(o["a"],e),t.include(y["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(f["a"]),t.include(b["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(w["a"]),C.add(M["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?M["a"]`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?M["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:M["a"]`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?M["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:M["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(o["a"],e),t.include(g["a"],e),t.include(v["a"],e),t.include(y["a"],e),e.receiveShadows&&t.include(T["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(f["a"]),t.include(b["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(O["a"],e),t.include(x["a"],e),t.fragment.include(w["a"]),C.add(M["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?M["a"]`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?M["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:M["a"]`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?M["a"]`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:M["a"]`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${M["a"]`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?M["a"]`vec3 normalGround = normalize(vpos + localOrigin);`:M["a"]`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:M["a"]``}
        ${1===e.pbrMode||2===e.pbrMode?M["a"]`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(p["a"],e),t}var A=Object.freeze({__proto__:null,build:C})},bd75:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("3886");function a(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(r["a"]`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(r["a"]`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):e.vertex.code.add(r["a"]`void forwardLinearDepth() {}`)}},be24:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return n}));var r=i("3886");function a(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(r["a"]`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(r["a"]`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?r["a"]`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(r["a"]`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(r["a"]`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?r["a"]`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(r["a"]`vec4 vvColor() { return vec4(1.0); }`)}function o(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}function n(e,t){o(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}},c332:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i("3886");function a(e){const t=r["a"]`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function o(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(r["a"]`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(a),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(r["a"]`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r["a"]`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},c514:function(e,t,i){"use strict";function r(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}t["a"]=r},c51b:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("3886");function a(e){e.vertex.code.add(r["a"]`const float PI = 3.141592653589793;`),e.fragment.code.add(r["a"]`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},c6d7:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return a}));var r=i("3886");function a(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(r["a"]`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function o(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}},d017:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return n}));var r=i("501b"),a=i("3886");function o(e){e.fragment.include(r["a"]),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(a["a"]`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function n(e,t,i){t.shadowMappingEnabled&&t.shadowMap.bindView(e,i)}},d047:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i("501b"),a=i("3886");function o(e){e.include(r["a"]),e.code.add(a["a"]`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},d17d:function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return a}));const r=33984;var a;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.Program=3]="Program",e[e.Framebuffer=4]="Framebuffer",e[e.Renderbuffer=5]="Renderbuffer",e[e.COUNT=6]="COUNT"}(a||(a={}))},d272:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return c}));var r=i("b2b2"),a=i("e431"),o=i("0b2d"),n=i("3886");function s(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=n["a"]`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,r=n["a"]`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=t.sliceHighlightDisabled?n["a"]`#define highlightSlice(_color_, _pos_) (_color_)`:n["a"]`
        ${r}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(a)}else{const i=n["a"]`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i)}}function c(e,t,i,n){t.slicePlaneEnabled&&(Object(r["i"])(i)?(n?(Object(a["g"])(l,i.origin,n),e.setUniform3fv("slicePlaneOrigin",l)):e.setUniform3fv("slicePlaneOrigin",i.origin),e.setUniform3fv("slicePlaneBasis1",i.basis1),e.setUniform3fv("slicePlaneBasis2",i.basis2)):(e.setUniform3fv("slicePlaneBasis1",o["b"]),e.setUniform3fv("slicePlaneBasis2",o["b"]),e.setUniform3fv("slicePlaneOrigin",o["b"])))}const l=Object(o["e"])()},d539:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i("0b2d"),a=i("6a21"),o=i("3886"),n=i("9a64");function s(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(a["a"],t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const i=[o["a"]`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,o["a"]`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?o["a"]`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,o["a"]`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,o["a"]`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?o["a"]`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:o["a"]``];e.vertex.code.add(i[0]),e.vertex.code.add(i[1]),e.vertex.code.add(i[2]),2===t.output&&e.vertex.code.add(i[3]),e.vertex.code.add(i[4])}!function(e){class t{}function i(e,t){Object(n["b"])(t,c,l,3),e.setUniform3fv("viewOriginHi",c),e.setUniform3fv("viewOriginLo",l)}e.Uniforms=t,e.bindCustomOrigin=i}(s||(s={}));const c=Object(r["e"])(),l=Object(r["e"])()},d56e:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i("3886"),a=i("6df2");function o(e,t){const i=r["a"]`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;Object(a["c"])()&&(e.fragment.code.add(i),e.vertex.code.add(i))}},dfaf:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("3886");function a(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(r["a"]`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(r["a"]`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(r["a"]`void forwardTextureCoordinates() {}`)}},ea4b:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var r=i("3886");function a(e,t){const i=e.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(i.uniforms.add("lightingAmbientSH0","vec3"),i.code.add(r["a"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(i.uniforms.add("lightingAmbientSH_R","vec4"),i.uniforms.add("lightingAmbientSH_G","vec4"),i.uniforms.add("lightingAmbientSH_B","vec4"),i.code.add(r["a"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===a&&(i.uniforms.add("lightingAmbientSH0","vec3"),i.uniforms.add("lightingAmbientSH_R1","vec4"),i.uniforms.add("lightingAmbientSH_G1","vec4"),i.uniforms.add("lightingAmbientSH_B1","vec4"),i.uniforms.add("lightingAmbientSH_R2","vec4"),i.uniforms.add("lightingAmbientSH_G2","vec4"),i.uniforms.add("lightingAmbientSH_B2","vec4"),i.code.add(r["a"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||i.code.add(r["a"]`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var o=i("7088");function n(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(r["a"]`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var s=i("5d5f"),c=i("c51b"),l=i("d017");function d(e,t){const i=e.fragment;e.include(n),e.include(o["a"],t),0!==t.pbrMode&&e.include(s["a"],t),e.include(a,t),t.receiveShadows&&e.include(l["a"],t),i.uniforms.add("lightingGlobalFactor","float"),i.uniforms.add("ambientBoostFactor","float"),e.include(c["a"]),i.code.add(r["a"]`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),i.code.add(r["a"]`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?r["a"]`normalize(vPosWorld)`:r["a"]`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),i.code.add(r["a"]`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?i.code.add(r["a"]`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(i.code.add(r["a"]`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),i.code.add(r["a"]`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),i.code.add(r["a"]`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),i.code.add(r["a"]`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),i.code.add(r["a"]`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?r["a"]`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:r["a"]`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},ebd5:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o}));var r=i("3886");const a=.1,o=.001;function n(e,t){const i=e.fragment;switch(t.alphaDiscardMode){case 0:i.code.add(r["a"]`
        #define discardOrAdjustAlpha(color) { if (color.a < ${r["a"].float(o)}) { discard; } }
      `);break;case 1:i.code.add(r["a"]`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:i.uniforms.add("textureAlphaCutoff","float"),i.code.add(r["a"]`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(r["a"]`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},fc00:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i("8190"),a=i("c6ac");class o{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const i of e.fieldNames){const t=e.fields.get(i);this[i]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new o(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,i,r){const a=this.stride;if(a%4==0){const o=new Uint32Array(e.buffer,t*a,r*a/4);new Uint32Array(this.buffer,i*a,r*a/4).set(o)}else{const o=new Uint8Array(e.buffer,t*a,r*a);new Uint8Array(this.buffer,i*a,r*a).set(o)}}}class n{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this.appendField(e,r["m"],t),this}vec2f64(e,t){return this.appendField(e,r["n"],t),this}vec3f(e,t){return this.appendField(e,r["u"],t),this}vec3f64(e,t){return this.appendField(e,r["v"],t),this}vec4f(e,t){return this.appendField(e,r["C"],t),this}vec4f64(e,t){return this.appendField(e,r["D"],t),this}mat3f(e,t){return this.appendField(e,r["f"],t),this}mat3f64(e,t){return this.appendField(e,r["g"],t),this}mat4f(e,t){return this.appendField(e,r["h"],t),this}mat4f64(e,t){return this.appendField(e,r["i"],t),this}vec4u8(e,t){return this.appendField(e,r["J"],t),this}f32(e,t){return this.appendField(e,r["a"],t),this}f64(e,t){return this.appendField(e,r["b"],t),this}u8(e,t){return this.appendField(e,r["l"],t),this}u16(e,t){return this.appendField(e,r["j"],t),this}i8(e,t){return this.appendField(e,r["e"],t),this}vec2i8(e,t){return this.appendField(e,r["q"],t),this}vec2i16(e,t){return this.appendField(e,r["o"],t),this}vec2u8(e,t){return this.appendField(e,r["t"],t),this}vec4u16(e,t){return this.appendField(e,r["H"],t),this}u32(e,t){return this.appendField(e,r["k"],t),this}appendField(e,t,i){const r=t.ElementCount*Object(a["a"])(t.ElementType),o=this.stride;this.fields.set(e,{size:r,constructor:t,offset:o,optional:i}),this.stride+=r,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new o(this,e)}createView(e){return new o(this,e)}clone(){const e=new n;return e.stride=this.stride,e.fields=new Map,this.fields.forEach((t,i)=>e.fields.set(i,t)),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new n}}}]);
//# sourceMappingURL=chunk-528bac1e.2ec6f949.js.map