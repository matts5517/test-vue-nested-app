(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50cf3665"],{"04f0":function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return l}));var r=n("dae5"),o=n("b139"),i=n("0b2d"),a=n("4212"),s=n("e431"),c=n("7577");function u(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function l(e,t,n){n*=.5;const r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function f(e,t){const n=2*Math.acos(t[3]),r=Math.sin(n/2);return r>a["a"]?(e[0]=t[0]/r,e[1]=t[1]/r,e[2]=t[2]/r):(e[0]=1,e[1]=0,e[2]=0),n}function d(e,t,n){const r=t[0],o=t[1],i=t[2],a=t[3],s=n[0],c=n[1],u=n[2],l=n[3];return e[0]=r*l+a*s+o*u-i*c,e[1]=o*l+a*c+i*s-r*u,e[2]=i*l+a*u+r*c-o*s,e[3]=a*l-r*s-o*c-i*u,e}function b(e,t,n){n*=.5;const r=t[0],o=t[1],i=t[2],a=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=r*c+a*s,e[1]=o*c+i*s,e[2]=i*c-o*s,e[3]=a*c-r*s,e}function p(e,t,n){n*=.5;const r=t[0],o=t[1],i=t[2],a=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=r*c-i*s,e[1]=o*c+a*s,e[2]=i*c+r*s,e[3]=a*c-o*s,e}function h(e,t,n){n*=.5;const r=t[0],o=t[1],i=t[2],a=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=r*c+o*s,e[1]=o*c-r*s,e[2]=i*c+a*s,e[3]=a*c-i*s,e}function y(e,t){const n=t[0],r=t[1],o=t[2];return e[0]=n,e[1]=r,e[2]=o,e[3]=Math.sqrt(Math.abs(1-n*n-r*r-o*o)),e}function O(e,t,n,r){const o=t[0],i=t[1],s=t[2],c=t[3];let u,l,f,d,b,p=n[0],h=n[1],y=n[2],O=n[3];return l=o*p+i*h+s*y+c*O,l<0&&(l=-l,p=-p,h=-h,y=-y,O=-O),1-l>a["a"]?(u=Math.acos(l),f=Math.sin(u),d=Math.sin((1-r)*u)/f,b=Math.sin(r*u)/f):(d=1-r,b=r),e[0]=d*o+b*p,e[1]=d*i+b*h,e[2]=d*s+b*y,e[3]=d*c+b*O,e}function j(e){const t=Object(a["b"])(),n=Object(a["b"])(),r=Object(a["b"])(),o=Math.sqrt(1-t),i=Math.sqrt(t);return e[0]=o*Math.sin(2*Math.PI*n),e[1]=o*Math.cos(2*Math.PI*n),e[2]=i*Math.sin(2*Math.PI*r),e[3]=i*Math.cos(2*Math.PI*r),e}function w(e,t){const n=t[0],r=t[1],o=t[2],i=t[3],a=n*n+r*r+o*o+i*i,s=a?1/a:0;return e[0]=-n*s,e[1]=-r*s,e[2]=-o*s,e[3]=i*s,e}function m(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function g(e,t){const n=t[0]+t[4]+t[8];let r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[3*n+n]&&(n=2);const o=(n+1)%3,i=(n+2)%3;r=Math.sqrt(t[3*n+n]-t[3*o+o]-t[3*i+i]+1),e[n]=.5*r,r=.5/r,e[3]=(t[3*o+i]-t[3*i+o])*r,e[o]=(t[3*o+n]+t[3*n+o])*r,e[i]=(t[3*i+n]+t[3*n+i])*r}return e}function v(e,t,n,r){const o=.5*Math.PI/180;t*=o,n*=o,r*=o;const i=Math.sin(t),a=Math.cos(t),s=Math.sin(n),c=Math.cos(n),u=Math.sin(r),l=Math.cos(r);return e[0]=i*c*l-a*s*u,e[1]=a*s*l+i*c*u,e[2]=a*c*u-i*s*l,e[3]=a*c*l+i*s*u,e}function M(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}const C=c["c"],T=c["k"],A=c["a"],U=d,I=c["b"],x=c["d"],z=c["i"],S=c["e"],V=S,F=c["f"],B=F,P=c["j"],k=c["g"],D=c["h"];function q(e,t,n){const r=Object(s["e"])(t,n);return r<-.999999?(Object(s["d"])(_,L,t),Object(s["u"])(_)<1e-6&&Object(s["d"])(_,R,t),Object(s["o"])(_,_),l(e,_,Math.PI),e):r>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(Object(s["d"])(_,t,n),e[0]=_[0],e[1]=_[1],e[2]=_[2],e[3]=1+r,P(e,e))}const _=Object(i["e"])(),L=Object(i["g"])(1,0,0),R=Object(i["g"])(0,1,0);function N(e,t,n,r,o,i){return O(E,t,o,i),O(Y,n,r,i),O(e,E,Y,2*i*(1-i)),e}const E=Object(o["b"])(),Y=Object(o["b"])();function Z(e,t,n,r){const o=X;return o[0]=n[0],o[3]=n[1],o[6]=n[2],o[1]=r[0],o[4]=r[1],o[7]=r[2],o[2]=-t[0],o[5]=-t[1],o[8]=-t[2],P(e,g(e,o))}const X=Object(r["b"])();Object.freeze({__proto__:null,identity:u,setAxisAngle:l,getAxisAngle:f,multiply:d,rotateX:b,rotateY:p,rotateZ:h,calculateW:y,slerp:O,random:j,invert:w,conjugate:m,fromMat3:g,fromEuler:v,str:M,copy:C,set:T,add:A,mul:U,scale:I,dot:x,lerp:z,length:S,len:V,squaredLength:F,sqrLen:B,normalize:P,exactEquals:k,equals:D,rotationTo:q,sqlerp:N,setAxes:Z})},"47f8":function(e,t,n){"use strict";function r(){return new Float32Array(3)}function o(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function i(e,t,n){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=n,r}function a(e,t){return new Float32Array(e,t,3)}function s(){return r()}function c(){return i(1,1,1)}function u(){return i(1,0,0)}function l(){return i(0,1,0)}function f(){return i(0,0,1)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));const d=s(),b=c(),p=u(),h=l(),y=f();Object.freeze({__proto__:null,create:r,clone:o,fromValues:i,createView:a,zeros:s,ones:c,unitX:u,unitY:l,unitZ:f,ZEROS:d,ONES:b,UNIT_X:p,UNIT_Y:h,UNIT_Z:y})},"4e0d":function(e,t,n){"use strict";var r,o=n("a4ee"),i=n("7ffa"),a=n("59b2"),s=n("cea0"),c=(n("c120"),n("e92d"),n("448d")),u=n("d386"),l=n("7731"),f=n("d611"),d=n("9ef0"),b=n("6a0e");let p=r=class extends b["a"]{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:Object(i["a"])(this.color)})}};Object(o["a"])([Object(a["b"])({type:String,json:{write:!0}})],p.prototype,"description",void 0),Object(o["a"])([Object(a["b"])({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(o["a"])([Object(a["b"])({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],p.prototype,"minValue",void 0),Object(o["a"])([Object(a["b"])({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],p.prototype,"maxValue",void 0),Object(o["a"])([Object(a["b"])({type:d["a"],json:{type:[s["a"]],write:!0}})],p.prototype,"color",void 0),p=r=Object(o["a"])([Object(u["a"])("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);var h,y=p,O=y;let j=h=class extends l["a"]{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:Object(i["a"])(this.colorClassBreakInfos),legendOptions:Object(i["a"])(this.legendOptions)})}};Object(o["a"])([Object(c["a"])({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],j.prototype,"type",void 0),Object(o["a"])([Object(a["b"])({json:{write:!0},type:String})],j.prototype,"field",void 0),Object(o["a"])([Object(a["b"])({type:f["a"],json:{write:!0}})],j.prototype,"legendOptions",void 0),Object(o["a"])([Object(a["b"])({type:l["a"].fieldTransformTypeKebabDict.apiValues,json:{type:l["a"].fieldTransformTypeKebabDict.jsonValues,read:l["a"].fieldTransformTypeKebabDict.read,write:l["a"].fieldTransformTypeKebabDict.write}})],j.prototype,"fieldTransformType",void 0),Object(o["a"])([Object(a["b"])({type:[O],json:{write:!0}})],j.prototype,"colorClassBreakInfos",void 0),j=h=Object(o["a"])([Object(u["a"])("esri.renderers.PointCloudClassBreaksRenderer")],j);var w=j;t["a"]=w},"578b":function(e,t,n){"use strict";var r,o=n("a4ee"),i=n("7ffa"),a=n("59b2"),s=(n("cea0"),n("c120"),n("e92d"),n("448d")),c=n("d386"),u=n("7731"),l=n("d611"),f=n("3f60");let d=r=class extends u["a"]{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:Object(i["a"])(this.field),fieldTransformType:Object(i["a"])(this.fieldTransformType),stops:Object(i["a"])(this.stops),legendOptions:Object(i["a"])(this.legendOptions)})}};Object(o["a"])([Object(s["a"])({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),Object(o["a"])([Object(a["b"])({json:{write:!0},type:String})],d.prototype,"field",void 0),Object(o["a"])([Object(a["b"])({type:l["a"],json:{write:!0}})],d.prototype,"legendOptions",void 0),Object(o["a"])([Object(a["b"])({type:u["a"].fieldTransformTypeKebabDict.apiValues,json:{type:u["a"].fieldTransformTypeKebabDict.jsonValues,read:u["a"].fieldTransformTypeKebabDict.read,write:u["a"].fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),Object(o["a"])([Object(a["b"])({type:[f["a"]],json:{write:!0}})],d.prototype,"stops",void 0),d=r=Object(o["a"])([Object(c["a"])("esri.renderers.PointCloudStretchRenderer")],d);var b=d;t["a"]=b},7577:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return C})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return z})),n.d(t,"h",(function(){return S})),n.d(t,"i",(function(){return T})),n.d(t,"j",(function(){return M})),n.d(t,"k",(function(){return i})),n.d(t,"l",(function(){return U}));var r=n("4212");function o(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function i(e,t,n,r,o){return e[0]=t,e[1]=n,e[2]=r,e[3]=o,e}function a(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function s(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function c(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e}function u(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e}function l(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e}function f(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e}function d(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e}function b(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e}function p(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e}function h(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function y(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e}function O(e,t){const n=t[0]-e[0],r=t[1]-e[1],o=t[2]-e[2],i=t[3]-e[3];return Math.sqrt(n*n+r*r+o*o+i*i)}function j(e,t){const n=t[0]-e[0],r=t[1]-e[1],o=t[2]-e[2],i=t[3]-e[3];return n*n+r*r+o*o+i*i}function w(e){const t=e[0],n=e[1],r=e[2],o=e[3];return Math.sqrt(t*t+n*n+r*r+o*o)}function m(e){const t=e[0],n=e[1],r=e[2],o=e[3];return t*t+n*n+r*r+o*o}function g(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function v(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e}function M(e,t){const n=t[0],r=t[1],o=t[2],i=t[3];let a=n*n+r*r+o*o+i*i;return a>0&&(a=1/Math.sqrt(a),e[0]=n*a,e[1]=r*a,e[2]=o*a,e[3]=i*a),e}function C(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function T(e,t,n,r){const o=t[0],i=t[1],a=t[2],s=t[3];return e[0]=o+r*(n[0]-o),e[1]=i+r*(n[1]-i),e[2]=a+r*(n[2]-a),e[3]=s+r*(n[3]-s),e}function A(e,t){let n,o,i,a,s,c;t=t||1;do{n=2*Object(r["b"])()-1,o=2*Object(r["b"])()-1,s=n*n+o*o}while(s>=1);do{i=2*Object(r["b"])()-1,a=2*Object(r["b"])()-1,c=i*i+a*a}while(c>=1);const u=Math.sqrt((1-s)/c);return e[0]=t*n,e[1]=t*o,e[2]=t*i*u,e[3]=t*a*u,e}function U(e,t,n){const r=t[0],o=t[1],i=t[2],a=t[3];return e[0]=n[0]*r+n[4]*o+n[8]*i+n[12]*a,e[1]=n[1]*r+n[5]*o+n[9]*i+n[13]*a,e[2]=n[2]*r+n[6]*o+n[10]*i+n[14]*a,e[3]=n[3]*r+n[7]*o+n[11]*i+n[15]*a,e}function I(e,t,n){const r=t[0],o=t[1],i=t[2],a=n[0],s=n[1],c=n[2],u=n[3],l=u*r+s*i-c*o,f=u*o+c*r-a*i,d=u*i+a*o-s*r,b=-a*r-s*o-c*i;return e[0]=l*u+b*-a+f*-c-d*-s,e[1]=f*u+b*-s+d*-a-l*-c,e[2]=d*u+b*-c+l*-s-f*-a,e[3]=t[3],e}function x(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}function z(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function S(e,t){const n=e[0],o=e[1],i=e[2],a=e[3],s=t[0],c=t[1],u=t[2],l=t[3];return Math.abs(n-s)<=r["a"]*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(o-c)<=r["a"]*Math.max(1,Math.abs(o),Math.abs(c))&&Math.abs(i-u)<=r["a"]*Math.max(1,Math.abs(i),Math.abs(u))&&Math.abs(a-l)<=r["a"]*Math.max(1,Math.abs(a),Math.abs(l))}const V=s,F=c,B=u,P=O,k=j,D=w,q=m;Object.freeze({__proto__:null,copy:o,set:i,add:a,subtract:s,multiply:c,divide:u,ceil:l,floor:f,min:d,max:b,round:p,scale:h,scaleAndAdd:y,distance:O,squaredDistance:j,length:w,squaredLength:m,negate:g,inverse:v,normalize:M,dot:C,lerp:T,random:A,transformMat4:U,transformQuat:I,str:x,exactEquals:z,equals:S,sub:V,mul:F,div:B,dist:P,sqrDist:k,len:D,sqrLen:q})},7731:function(e,t,n){"use strict";var r,o=n("a4ee"),i=n("fa8a"),a=n("6a0e"),s=n("7ffa"),c=n("59b2"),u=(n("cea0"),n("c120"),n("e92d"),n("d386"));let l=r=class extends a["a"]{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};Object(o["a"])([Object(c["b"])({type:String,json:{write:!0}})],l.prototype,"field",void 0),Object(o["a"])([Object(c["b"])({type:Number,nonNullable:!0,json:{write:!0}})],l.prototype,"minValue",void 0),Object(o["a"])([Object(c["b"])({type:Number,nonNullable:!0,json:{write:!0}})],l.prototype,"maxValue",void 0),l=r=Object(o["a"])([Object(u["a"])("esri.renderers.support.pointCloud.ColorModulation")],l);var f=l,d=f;const b=new i["a"]({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let p=class extends a["a"]{};Object(o["a"])([Object(c["b"])({type:b.apiValues,readOnly:!0,nonNullable:!0,json:{type:b.jsonValues,read:!1,write:b.write}})],p.prototype,"type",void 0),p=Object(o["a"])([Object(u["a"])("esri.renderers.support.pointCloud.PointSizeAlgorithm")],p);var h,y=p,O=y,j=n("448d");let w=h=class extends O{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new h({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};Object(o["a"])([Object(j["a"])({pointCloudFixedSizeAlgorithm:"fixed-size"})],w.prototype,"type",void 0),Object(o["a"])([Object(c["b"])({type:Number,nonNullable:!0,json:{write:!0}})],w.prototype,"size",void 0),Object(o["a"])([Object(c["b"])({type:Boolean,json:{write:!0}})],w.prototype,"useRealWorldSymbolSizes",void 0),w=h=Object(o["a"])([Object(u["a"])("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],w);var m,g=w,v=g;let M=m=class extends O{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new m({scaleFactor:this.scaleFactor})}};Object(o["a"])([Object(j["a"])({pointCloudSplatAlgorithm:"splat"})],M.prototype,"type",void 0),Object(o["a"])([Object(c["b"])({type:Number,value:1,nonNullable:!0,json:{write:!0}})],M.prototype,"scaleFactor",void 0),M=m=Object(o["a"])([Object(u["a"])("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],M);var C=M,T=C;const A={key:"type",base:O,typeMap:{"fixed-size":v,splat:T}},U=Object(i["b"])()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let I=class extends a["a"]{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:Object(s["a"])(this.pointSizeAlgorithm),colorModulation:Object(s["a"])(this.colorModulation),pointsPerInch:Object(s["a"])(this.pointsPerInch)}}};Object(o["a"])([Object(c["b"])({type:U.apiValues,readOnly:!0,nonNullable:!0,json:{type:U.jsonValues,read:!1,write:U.write}})],I.prototype,"type",void 0),Object(o["a"])([Object(c["b"])({types:A,json:{write:!0}})],I.prototype,"pointSizeAlgorithm",void 0),Object(o["a"])([Object(c["b"])({type:d,json:{write:!0}})],I.prototype,"colorModulation",void 0),Object(o["a"])([Object(c["b"])({json:{write:!0},nonNullable:!0,type:Number})],I.prototype,"pointsPerInch",void 0),I=Object(o["a"])([Object(u["a"])("esri.renderers.PointCloudRenderer")],I),function(e){e.fieldTransformTypeKebabDict=new i["a"]({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(I||(I={}));var x=I;t["a"]=x},a1f7:function(e,t,n){"use strict";var r,o=n("a4ee"),i=n("7ffa"),a=n("59b2"),s=n("cea0"),c=(n("c120"),n("e92d"),n("448d")),u=n("d386"),l=n("7731"),f=n("d611"),d=n("9ef0"),b=n("6a0e");let p=r=class extends b["a"]{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:Object(i["a"])(this.values),color:Object(i["a"])(this.color)})}};Object(o["a"])([Object(a["b"])({type:String,json:{write:!0}})],p.prototype,"description",void 0),Object(o["a"])([Object(a["b"])({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(o["a"])([Object(a["b"])({type:[String],json:{write:!0}})],p.prototype,"values",void 0),Object(o["a"])([Object(a["b"])({type:d["a"],json:{type:[s["a"]],write:!0}})],p.prototype,"color",void 0),p=r=Object(o["a"])([Object(u["a"])("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],p);var h,y=p,O=y;let j=h=class extends l["a"]{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:Object(i["a"])(this.field),fieldTransformType:Object(i["a"])(this.fieldTransformType),colorUniqueValueInfos:Object(i["a"])(this.colorUniqueValueInfos),legendOptions:Object(i["a"])(this.legendOptions)})}};Object(o["a"])([Object(c["a"])({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],j.prototype,"type",void 0),Object(o["a"])([Object(a["b"])({json:{write:!0},type:String})],j.prototype,"field",void 0),Object(o["a"])([Object(a["b"])({type:l["a"].fieldTransformTypeKebabDict.apiValues,json:{type:l["a"].fieldTransformTypeKebabDict.jsonValues,read:l["a"].fieldTransformTypeKebabDict.read,write:l["a"].fieldTransformTypeKebabDict.write}})],j.prototype,"fieldTransformType",void 0),Object(o["a"])([Object(a["b"])({type:[O],json:{write:!0}})],j.prototype,"colorUniqueValueInfos",void 0),Object(o["a"])([Object(a["b"])({type:f["a"],json:{write:!0}})],j.prototype,"legendOptions",void 0),j=h=Object(o["a"])([Object(u["a"])("esri.renderers.PointCloudUniqueValueRenderer")],j);var w=j;t["a"]=w},aebe:function(e,t,n){"use strict";n.r(t);var r=n("b2b2"),o=n("a21b"),i=n("04f0");function a(){const e=new Float32Array(4);return e[3]=1,e}function s(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function c(e,t,n,r){const o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=n,o[3]=r,o}function u(e,t){return new Float32Array(e,t,4)}Object.freeze({__proto__:null,create:a,clone:s,fromValues:c,createView:u});var l=n("e431"),f=n("47f8"),d=n("8188"),b=n("5996"),p=n("4e0d"),h=n("578b"),y=n("a1f7"),O=n("ce50"),j=n("7ffa"),w=n("e92d");const m=!0,g={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function v(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+g.identifierOffset,g.identifierLength)),version:t.getUint16(n+g.versionOffset,m),checksum:t.getUint32(n+g.checksumOffset,m)}}const M={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function C(e,t){return{sizeLo:e.getUint32(t+M.sizeLo,m),sizeHi:e.getUint32(t+M.sizeHi,m),minX:e.getFloat64(t+M.minX,m),minY:e.getFloat64(t+M.minY,m),minZ:e.getFloat64(t+M.minZ,m),maxX:e.getFloat64(t+M.maxX,m),maxY:e.getFloat64(t+M.maxY,m),maxZ:e.getFloat64(t+M.maxZ,m),errorX:e.getFloat64(t+M.errorX,m),errorY:e.getFloat64(t+M.errorY,m),errorZ:e.getFloat64(t+M.errorZ,m),count:e.getUint32(t+M.count,m),reserved:e.getUint32(t+M.reserved,m)}}function T(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:o}=v(e,t,n);if(n+=g.byteCount,"LEPCC     "!==r)throw new O["a"]("lepcc-decode-error","Bad identifier");if(o>1)throw new O["a"]("lepcc-decode-error","Unknown version");const i=C(t,n);if(n+=M.byteCount,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new O["a"]("lepcc-decode-error","Bad size");const a=new Float64Array(3*i.count),s=[],c=[],u=[],l=[];if(n=A(e,n,s),n=A(e,n,c),n=A(e,n,u),n=A(e,n,l),n!==e.byteLength)throw new O["a"]("lepcc-decode-error","Bad length");let f=0,d=0;for(let b=0;b<s.length;b++){d+=s[b];let e=0;for(let t=0;t<c[b];t++){e+=u[f];const t=l[f];a[3*f]=Math.min(i.maxX,i.minX+2*i.errorX*e),a[3*f+1]=Math.min(i.maxY,i.minY+2*i.errorY*d),a[3*f+2]=Math.min(i.maxZ,i.minZ+2*i.errorZ*t),f++}}return{errorX:i.errorX,errorY:i.errorY,errorZ:i.errorZ,result:a}}function A(e,t,n){const r=[];t=U(e,t,r);const o=[];for(let i=0;i<r.length;i++){o.length=0,t=U(e,t,o);for(let e=0;e<o.length;e++)n.push(o[e]+r[i])}return t}function U(e,t,n){const r=new DataView(e,t),o=r.getUint8(0),i=31&o,a=!!(32&o),s=(192&o)>>6;let c=0;if(0===s)c=r.getUint32(1,m),t+=5;else if(1===s)c=r.getUint16(1,m),t+=3;else{if(2!==s)throw new O["a"]("lepcc-decode-error","Bad count type");c=r.getUint8(1),t+=2}if(a)throw new O["a"]("lepcc-decode-error","LUT not implemented");const u=Math.ceil(c*i/8),l=new Uint8Array(e,t,u);let f=0,d=0,b=0;const p=-1>>>32-i;for(let h=0;h<c;h++){for(;d<i;)f|=l[b]<<d,d+=8,b+=1;n[h]=f&p,f>>>=i,d-=i,d+i>32&&(f|=l[b-1]>>8-d)}return t+b}const I={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function x(e,t){return{sizeLo:e.getUint32(t+I.sizeLo,m),sizeHi:e.getUint32(t+I.sizeHi,m),count:e.getUint32(t+I.count,m),colorMapCount:e.getUint16(t+I.colorMapCount,m),lookupMethod:e.getUint8(t+I.lookupMethod),compressionMethod:e.getUint8(t+I.compressionMethod)}}function z(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:o}=v(e,t,n);if(n+=g.byteCount,"ClusterRGB"!==r)throw new O["a"]("lepcc-decode-error","Bad identifier");if(o>1)throw new O["a"]("lepcc-decode-error","Unknown version");const i=x(t,n);if(n+=I.byteCount,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new O["a"]("lepcc-decode-error","Bad size");if((2===i.lookupMethod||1===i.lookupMethod)&&0===i.compressionMethod){if(3*i.colorMapCount+i.count+n!==e.byteLength||i.colorMapCount>256)throw new O["a"]("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*i.colorMapCount),r=new Uint8Array(e,n+3*i.colorMapCount,i.count),o=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++){const n=r[e];o[3*e]=t[3*n],o[3*e+1]=t[3*n+1],o[3*e+2]=t[3*n+2]}return o}if(0===i.lookupMethod&&0===i.compressionMethod){if(3*i.count+n!==e.byteLength||0!==i.colorMapCount)throw new O["a"]("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(i.lookupMethod<=2&&1===i.compressionMethod){if(n+3!==e.byteLength||1!==i.colorMapCount)throw new O["a"]("lepcc-decode-error","Bad count");const r=t.getUint8(n),o=t.getUint8(n+1),a=t.getUint8(n+2),s=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++)s[3*e]=r,s[3*e+1]=o,s[3*e+2]=a;return s}throw new O["a"]("lepcc-decode-error","Bad method "+i.lookupMethod+","+i.compressionMethod)}const S={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function V(e,t){return{sizeLo:e.getUint32(t+S.sizeLo,m),sizeHi:e.getUint32(t+S.sizeHi,m),count:e.getUint32(t+S.count,m),scaleFactor:e.getUint16(t+S.scaleFactor,m),bitsPerPoint:e.getUint8(t+S.bitsPerPoint),reserved:e.getUint8(t+S.reserved)}}function F(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:o}=v(e,t,n);if(n+=g.byteCount,"Intensity "!==r)throw new O["a"]("lepcc-decode-error","Bad identifier");if(o>1)throw new O["a"]("lepcc-decode-error","Unknown version");const i=V(t,n);if(n+=S.byteCount,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new O["a"]("lepcc-decode-error","Bad size");const a=new Uint16Array(i.count);if(8===i.bitsPerPoint){if(i.count+n!==e.byteLength)throw new O["a"]("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,i.count);for(let e=0;e<i.count;e++)a[e]=t[e]*i.scaleFactor}else if(16===i.bitsPerPoint){if(2*i.count+n!==e.byteLength)throw new O["a"]("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,i.count);for(let e=0;e<i.count;e++)a[e]=t[e]*i.scaleFactor}else{const t=[];if(U(e,n,t)!==e.byteLength)throw new O["a"]("lepcc-decode-error","Bad size");for(let e=0;e<i.count;e++)a[e]=t[e]*i.scaleFactor}return a}const B=w["a"].getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function P(e,t,n){let r="",o=0;for(;o<n;){const i=e[t+o];if(i<128)r+=String.fromCharCode(i),o++;else if(i>=192&&i<224){if(o+1>=n)throw new O["a"]("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&i)<<6|63&e[t+o+1];r+=String.fromCharCode(a),o+=2}else if(i>=224&&i<240){if(o+2>=n)throw new O["a"]("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&i)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];r+=String.fromCharCode(a),o+=3}else{if(!(i>=240&&i<248))throw new O["a"]("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=n)throw new O["a"]("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&i)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);r+=String.fromCharCode(e,t)}else r+=String.fromCharCode(a);o+=4}}}return r}function k(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],a=i.valueType||i.type,s=X[a];n.fields[i.property]=s(e,r),r+=Z[a].BYTES_PER_ELEMENT}return n.byteCount=r,n}function D(e,t,n){const r=[];let o,i,a=0;for(i=0;i<e;i+=1){if(o=t[i],o>0){if(r.push(P(n,a,o-1)),0!==n[a+o-1])throw new O["a"]("string-array-error","Invalid string array: missing null termination.")}else r.push(null);a+=o}return r}function q(e,t){return new(0,Z[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function _(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function L(e,t,n){const r=null!=t.header?k(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},o={header:r,byteOffset:r.byteCount,byteCount:0,entries:Object.create(null)};let i=r.byteCount;for(let a=0;a<t.ordering.length;a++){const e=t.ordering[a],n=Object(j["a"])(t[e]);if(n.count=r.fields.count,"String"===n.valueType){if(n.byteOffset=i,n.byteCount=r.fields[e+"ByteCount"],"UTF-8"!==n.encoding)throw new O["a"]("unsupported-encoding","Unsupported String encoding.",{encoding:n.encoding})}else{if(!K(n.valueType))throw new O["a"]("unsupported-value-type","Unsupported binary valueType",{valueType:n.valueType});{const e=H(n.valueType);i+=i%e!=0?e-i%e:0,n.byteOffset=i,n.byteCount=e*n.valuesPerElement*n.count}}i+=n.byteCount,o.entries[e]=n}return o.byteCount=i-o.byteOffset,o}function R(e,t,n){if(t!==e&&B.error(`Invalid ${n} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new O["a"]("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function N(e,t){const n=k(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,a=null!=i.vertexCount?i.vertexCount:i.count;for(const u of t.ordering){if(!t.vertexAttributes[u])continue;const e={...t.vertexAttributes[u],byteOffset:r,count:a},n=E[u]?E[u]:"_"+u;o.vertexAttributes[n]=e,r+=H(e.valueType)*e.valuesPerElement*a}const s=i.faceCount;if(t.faces&&s){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:s};o.faces[e]=n,r+=H(n.valueType)*n.valuesPerElement*s}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:c};o.featureAttributes[e]=n,r+=("UInt64"===n.valueType?8:H(n.valueType))*n.valuesPerElement*c}}return R(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}const E={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function Y(e,t,n){if("lepcc-rgb"===e.encoding)return z(t);if("lepcc-intensity"===e.encoding)return F(t);if(null!=e.encoding&&""!==e.encoding)throw new O["a"]("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(B.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(B.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const r=L(t,e,n);R(r.byteOffset+r.byteCount,t.byteLength,"attribute");const o=r.entries.attributeValues||r.entries.objectIds;if(o){if("String"===o.valueType){const e=r.entries.attributeByteCounts,n=q(t,e),i=_(t,o);return D(e.count,n,i)}return q(t,o)}throw new O["a"]("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const Z={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},X={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function K(e){return Z.hasOwnProperty(e)}function H(e){return K(e)?Z[e].BYTES_PER_ELEMENT:0}function J(e,t,n,r){const{rendererJSON:o,isRGBRenderer:i}=e;let a=null,s=null;if(t&&i)a=t;else if(t&&"pointCloudUniqueValueRenderer"===o.type){s=y["a"].fromJSON(o);const e=s.colorUniqueValueInfos;a=new Uint8Array(3*r);const n=ee(s.fieldTransformType);for(let o=0;o<r;o++){const r=(n?n(t[o]):t[o])+"";for(let t=0;t<e.length;t++)if(e[t].values.indexOf(r)>=0){a[3*o]=e[t].color.r,a[3*o+1]=e[t].color.g,a[3*o+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===o.type){s=h["a"].fromJSON(o);const e=s.stops;a=new Uint8Array(3*r);const n=ee(s.fieldTransformType);for(let o=0;o<r;o++){const r=n?n(t[o]):t[o],i=e.length-1;if(r<e[0].value)a[3*o]=e[0].color.r,a[3*o+1]=e[0].color.g,a[3*o+2]=e[0].color.b;else if(r>=e[i].value)a[3*o]=e[i].color.r,a[3*o+1]=e[i].color.g,a[3*o+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(r<e[t].value){const n=(r-e[t-1].value)/(e[t].value-e[t-1].value);a[3*o]=e[t].color.r*n+e[t-1].color.r*(1-n),a[3*o+1]=e[t].color.g*n+e[t-1].color.g*(1-n),a[3*o+2]=e[t].color.b*n+e[t-1].color.b*(1-n);break}}}else if(t&&"pointCloudClassBreaksRenderer"===o.type){s=p["a"].fromJSON(o);const e=s.colorClassBreakInfos;a=new Uint8Array(3*r);const n=ee(s.fieldTransformType);for(let o=0;o<r;o++){const r=n?n(t[o]):t[o];for(let t=0;t<e.length;t++)if(r>=e[t].minValue&&r<=e[t].maxValue){a[3*o]=e[t].color.r,a[3*o+1]=e[t].color.g,a[3*o+2]=e[t].color.b;break}}}else{a=new Uint8Array(3*r);for(let e=0;e<a.length;e++)a[e]=255}if(n&&s&&s.colorModulation){const e=s.colorModulation.minValue,t=s.colorModulation.maxValue,o=.3;for(let i=0;i<r;i++){const r=n[i],s=r>=t?1:r<=e?o:o+(1-o)*(r-e)/(t-e);a[3*i]=s*a[3*i],a[3*i+1]=s*a[3*i+1],a[3*i+2]=s*a[3*i+2]}}return a}function W(e,t){if(null==e.encoding||""===e.encoding){const n=N(t,e);if(Object(r["h"])(n.vertexAttributes.position))return;const o=q(t,n.vertexAttributes.position),i=n.header.fields,a=[i.offsetX,i.offsetY,i.offsetZ],s=[i.scaleX,i.scaleY,i.scaleZ],c=o.length/3,u=new Float64Array(3*c);for(let e=0;e<c;e++)u[3*e]=o[3*e]*s[0]+a[0],u[3*e+1]=o[3*e+1]*s[1]+a[1],u[3*e+2]=o[3*e+2]*s[2]+a[2];return u}if("lepcc-xyz"===e.encoding)return T(t).result}function G(e,t,n){return Object(r["i"])(e)&&e.attributeInfo.useElevation?$(t,n):Object(r["i"])(e)?Y(e.attributeInfo.storageInfo,e.buffer,n):null}function $(e,t){const n=new Float64Array(t);for(let r=0;r<t;r++)n[r]=e[3*r+2];return n}function Q(e,t,n,r,o){const i=e.length/3;let a=0;for(let s=0;s<i;s++){let i=!0;for(let e=0;e<r.length&&i;e++){const{filterJSON:t}=r[e],n=o[e].values[s];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;-1!==t.values.indexOf(n)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=te(t.requiredSetBits),r=te(t.requiredClearBits);(n&e)===e&&0==(n&r)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&n,r=n>>>4&15,o=r>1,a=1===e,s=e===r;let c=!1;for(const n of t.includedReturns)if("last"===n&&s||"firstOfMany"===n&&a&&o||"lastOfMany"===n&&s&&o||"single"===n&&!o){c=!0;break}c||(i=!1);break}}}i&&(n[a]=s,e[3*a]=e[3*s],e[3*a+1]=e[3*s+1],e[3*a+2]=e[3*s+2],t[3*a]=t[3*s],t[3*a+1]=t[3*s+1],t[3*a+2]=t[3*s+2],a++)}return a}function ee(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function te(e){let t=0;for(const n of e||[])t|=1<<n;return t}class ne{transform(e){const t=this._transform(e),n=[t.points.buffer,t.rgb.buffer];Object(r["i"])(t.pointIdFilterMap)&&n.push(t.pointIdFilterMap.buffer);for(const r of t.attributes)"buffer"in r.values&&Object(o["c"])(r.values.buffer)&&r.values.buffer!==t.rgb.buffer&&n.push(r.values.buffer);return Promise.resolve({result:t,transferList:n})}_transform(e){const t=W(e.schema,e.geometryBuffer);let n=t.length/3,o=null;const i=[],a=G(e.primaryAttributeData,t,n);Object(r["i"])(e.primaryAttributeData)&&a&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:a});const s=G(e.modulationAttributeData,t,n);Object(r["i"])(e.modulationAttributeData)&&s&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:s});let c=J(e.rendererInfo,a,s,n);if(e.filterInfo&&e.filterInfo.length>0&&Object(r["i"])(e.filterAttributesData)){const r=e.filterAttributesData.map(e=>{const r=G(e,t,n),o={attributeInfo:e.attributeInfo,values:r};return i.push(o),o});o=new Uint32Array(n),n=Q(t,c,o,e.filterInfo,r)}for(const r of e.userAttributesData){const e=G(r,t,n);i.push({attributeInfo:r.attributeInfo,values:e})}3*n<c.length&&(c=new Uint8Array(c.buffer.slice(0,3*n))),this._applyElevationOffsetInPlace(t,n,e.elevationOffset);const u=this._transformCoordinates(t,n,e.obb,b["a"].fromJSON(e.inSR),b["a"].fromJSON(e.outSR));return{obb:e.obb,points:u,rgb:c,attributes:i,pointIdFilterMap:o}}_transformCoordinates(e,t,n,r,o){if(!Object(d["i"])(e,r,0,e,o,0,t))throw Error("Can't reproject");const a=Object(f["b"])(n.center[0],n.center[1],n.center[2]),s=Object(f["a"])(),c=Object(f["a"])();Object(i["a"])(re,n.quaternion);const u=new Float32Array(3*t);for(let i=0;i<t;i++)s[0]=e[3*i]-a[0],s[1]=e[3*i+1]-a[1],s[2]=e[3*i+2]-a[2],Object(l["q"])(c,s,re),n.halfSize[0]=Math.max(n.halfSize[0],Math.abs(c[0])),n.halfSize[1]=Math.max(n.halfSize[1],Math.abs(c[1])),n.halfSize[2]=Math.max(n.halfSize[2],Math.abs(c[2])),u[3*i]=s[0],u[3*i+1]=s[1],u[3*i+2]=s[2];return u}_applyElevationOffsetInPlace(e,t,n){if(0!==n)for(let r=0;r<t;r++)e[3*r+2]+=n}}const re=a();function oe(){return new ne}t["default"]=oe},b139:function(e,t,n){"use strict";function r(){return[0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3]]}function i(e,t,n,r){return[e,t,n,r]}function a(e,t){return new Float64Array(e,t,4)}n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a}));const s=r();Object.freeze({__proto__:null,create:r,clone:o,fromValues:i,createView:a,IDENTITY:s})},dae5:function(e,t,n){"use strict";function r(){return[1,0,0,0,1,0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function i(e,t,n,r,o,i,a,s,c){return[e,t,n,r,o,i,a,s,c]}function a(e,t){return new Float64Array(e,t,9)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));Object.freeze({__proto__:null,create:r,clone:o,fromValues:i,createView:a})}}]);
//# sourceMappingURL=chunk-50cf3665.20a60bb3.js.map