(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2370"],{"7e6b":function(t,e,r){"use strict";var o=r("a4ee"),a=r("6a0e"),i=r("59b2"),s=(r("c120"),r("cea0"),r("e92d"),r("d386")),n=r("a9ab");let c=class extends a["a"]{constructor(t){super(t),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const t=this.geometries.map((function(t){return t.toJSON()})),e=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=e.spatialReference.wkid||JSON.stringify(e.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:Object(n["c"])(e),geometries:t}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};Object(o["a"])([Object(i["b"])()],c.prototype,"geometries",void 0),Object(o["a"])([Object(i["b"])({json:{read:{source:"outSR"}}})],c.prototype,"outSpatialReference",void 0),Object(o["a"])([Object(i["b"])()],c.prototype,"transformation",void 0),Object(o["a"])([Object(i["b"])()],c.prototype,"transformForward",void 0),c=Object(o["a"])([Object(s["a"])("esri.rest.support.ProjectParameters")],c);var p=c;e["a"]=p}}]);
//# sourceMappingURL=chunk-2d0e2370.189cace7.js.map