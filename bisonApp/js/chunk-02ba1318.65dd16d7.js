(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02ba1318"],{"04c4":function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var n=i("c120"),s=i("ce76");const r=5e4,a={minX:0,minY:0,maxX:0,maxY:0};function o(e,t,i){a.minX=t[0],a.minY=t[1],a.maxX=t[2],a.maxY=t[3],e.search(a,i)}class d{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s["a"](9,Object(n["a"])("csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach((i,n)=>{e[t++]=n}),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(e=>this._idByBounds.has(e))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),o(this._index,e,e=>t(this._idByBounds.get(e)))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>r&&this._loadIndex()))}}},"1a59":function(e,t,i){"use strict";i.r(t);var n=i("ce50"),s=i("a9ab"),r=i("7f83"),a=i("6655"),o=i("a745"),d=i("6517"),l=i("1ec3"),u=i("6411"),h=i("88d1"),c=i("21ca"),f=i("80b7"),p=i("6781"),m=i("c1da");const y=r["a"],g={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:r["a"]},b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function _(e){return Object(s["f"])(e)?null!=e.z:!!e.hasZ}function I(e){return Object(s["f"])(e)?null!=e.m:!!e.hasM}class x{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,s=this._inferLayerProperties(i,e.fields),r=e.fields||[],a=null!=e.hasM?e.hasM:s.hasM,c=null!=e.hasZ?e.hasZ:s.hasZ,_=!e.spatialReference&&!s.spatialReference,I=_?y:e.spatialReference||s.spatialReference,x=_?g:null,j=e.geometryType||s.geometryType,B=!j;let O=e.objectIdField||s.objectIdField,F=e.timeInfo;if(!B&&(_&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!j))throw new n["a"]("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!O)throw new n["a"]("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(s.objectIdField&&O!==s.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${O}" doesn't match the field name "${s.objectIdField}", found in the provided fields`}),O=s.objectIdField),O&&!s.objectIdField){let e=null;r.some(t=>t.name===O&&(e=t,!0))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:O,name:O,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const o of r){if(null==o.name&&(o.name=o.alias),null==o.alias&&(o.alias=o.name),!o.name)throw new n["a"]("feature-layer:invalid-field-name","field name is missing",{field:o});if(o.name===O&&(o.type="esriFieldTypeOID"),-1===p["a"].jsonValues.indexOf(o.type))throw new n["a"]("feature-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o})}const M={};this._requiredFields=[];for(const n of r)if("esriFieldTypeOID"!==n.type&&"esriFieldTypeGlobalID"!==n.type){n.editable=null==n.editable||!!n.editable,n.nullable=null==n.nullable||!!n.nullable;const e=Object(m["n"])(n);n.nullable||void 0!==e?M[n.name]=e:this._requiredFields.push(n)}if(this._fieldsIndex=new f["a"](r),this._createDefaultAttributes=Object(h["b"])(M,O),F){if(F.startTimeField){const e=this._fieldsIndex.get(F.startTimeField);e?(F.startTimeField=e.name,e.type="esriFieldTypeDate"):F.startTimeField=null}if(F.endTimeField){const e=this._fieldsIndex.get(F.endTimeField);e?(F.endTimeField=e.name,e.type="esriFieldTypeDate"):F.endTimeField=null}if(F.trackIdField){const e=this._fieldsIndex.get(F.trackIdField);e?F.trackIdField=e.name:(F.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:F}}))}F.startTimeField||F.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:F}}),F=null)}const v={warnings:t,featureErrors:[],layerDefinition:{...b,drawingInfo:Object(h["d"])(j),templates:Object(h["c"])(M),extent:x,geometryType:j,objectIdField:O,fields:r,hasZ:!!c,hasM:!!a,timeInfo:F},assignedObjectIds:{}};if(this._queryEngine=new u["a"]({fields:r,geometryType:j,hasM:a,hasZ:c,objectIdField:O,spatialReference:I,featureStore:new d["a"]({geometryType:j,hasM:a,hasZ:c}),timeInfo:F,cacheSpatialQueries:!0}),!i||!i.length)return this._nextObjectId=o["b"],v;const w=Object(o["a"])(O,i);return this._nextObjectId=w+1,await Object(l["a"])(i,I),this._loadInitialFeatures(v,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([Object(c["c"])(t,i),Object(l["a"])(e.adds,t),Object(l["a"])(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let i,n,r=null,a=null,o=null;for(const d of e){const e=d.geometry;if(e&&(r||(r=Object(s["c"])(e)),a||(a=e.spatialReference),null==i&&(i=_(e)),null==n&&(n=I(e)),r&&a&&null!=i&&null!=n))break}if(t&&t.length){let e=null;t.some(t=>{const i="esriFieldTypeOID"===t.type,n=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||n})&&(o=e.name)}return{geometryType:r,spatialReference:a,objectIdField:o,hasM:n,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:n,hasZ:r,objectIdField:o,spatialReference:d,featureStore:u}=this._queryEngine,h=[];for(const a of t){if(null!=a.uid&&(e.assignedObjectIds[a.uid]=-1),a.geometry&&i!==Object(s["c"])(a.geometry)){e.featureErrors.push(Object(c["a"])("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=Object(c["d"])(this._fieldsIndex,t,a.attributes,this._requiredFields,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,a.attributes,!0),a.attributes=t,null!=a.uid&&(e.assignedObjectIds[a.uid]=a.attributes[o]),a.geometry&&(a.geometry=Object(l["b"])(a.geometry,a.geometry.spatialReference,d)),h.push(a))}if(u.addMany(Object(a["c"])([],h,i,r,n,o)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:n}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(s,t),i&&i.length&&this._applyUpdateEdits(s,i),n&&n.length){for(const e of n)s.deleteResults.push(Object(c["b"])(e));this._queryEngine.featureStore.removeManyById(n)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:n,hasM:r,hasZ:o,objectIdField:d,spatialReference:u,featureStore:h}=this._queryEngine,f=[];for(const a of t){if(a.geometry&&n!==Object(s["c"])(a.geometry)){i.push(Object(c["a"])("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=Object(c["d"])(this._fieldsIndex,t,a.attributes,this._requiredFields);if(r)i.push(r);else{if(this._assignObjectId(t,a.attributes),a.attributes=t,null!=a.uid){const t=a.attributes[d];e.uidToObjectId[a.uid]=t}a.geometry&&(a.geometry=Object(l["b"])(Object(c["e"])(a.geometry,u),a.geometry.spatialReference,u)),f.push(a),i.push(Object(c["b"])(a.attributes[d]))}}h.addMany(Object(a["c"])([],f,n,o,r,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:n,hasZ:r,objectIdField:o,spatialReference:d,featureStore:u}=this._queryEngine;for(const h of t){const{attributes:t,geometry:f}=h,p=t&&t[o];if(null==p){e.push(Object(c["a"])(`Identifier field ${o} missing`));continue}if(!u.has(p)){e.push(Object(c["a"])(`Feature with object id ${p} missing`));continue}const m=Object(a["i"])(u.getFeature(p),i,r,n);if(f){if(i!==Object(s["c"])(f)){e.push(Object(c["a"])("Incorrect geometry type."));continue}m.geometry=Object(l["b"])(Object(c["e"])(f,d),f.spatialReference,d)}if(t){const i=Object(c["d"])(this._fieldsIndex,m.attributes,t,this._requiredFields);if(i){e.push(i);continue}}u.add(Object(a["a"])(m,i,r,n,o)),e.push(Object(c["b"])(p))}}_assignObjectId(e,t,i=!1){const n=this._queryEngine.objectIdField;i&&t&&isFinite(t[n])?e[n]=t[n]:e[n]=this._nextObjectId++}}t["default"]=x},"21ca":function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return y})),i.d(t,"d",(function(){return h})),i.d(t,"e",(function(){return p}));var n=i("7f83"),s=i("c1da");class r{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new r,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function o(e){return new a(e)}class d{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function l(e){return new d(e)}const u=new Set;function h(e,t,i,n,r=!1,a){u.clear();for(const d in i){const n=e.get(d);if(!n)continue;const l=i[d],h=c(n,l);if(h!==l&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:n,originalValue:l,sanitizedValue:h}}),u.add(n.name),n&&(r||n.editable)){const e=Object(s["t"])(n,h);if(e)return o(Object(s["u"])(e,n,h));t[n.name]=h}}if(n)for(const s of n)if(!u.has(s.name))return o(`missing required field "${s.name}"`);return null}function c(e,t){let i=t;return"string"==typeof t&&Object(s["o"])(e)?i=parseFloat(t):null!=t&&Object(s["p"])(e)&&"string"!=typeof t&&(i=String(t)),Object(s["r"])(i)}let f;function p(e,t){if(!e||!Object(n["j"])(t))return e;if("rings"in e||"paths"in e){if(!f)throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function m(){return f||(f=await Promise.all([i.e("chunk-2d22cf8c"),i.e("chunk-180660b2")]).then(i.bind(null,"00ac")),f)}async function y(e,t){!Object(n["j"])(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await m()}},6517:function(e,t,i){"use strict";var n=i("ce50"),s=i("ce6d"),r=i("e92d"),a=i("b2b2"),o=i("4261"),d=i("9180"),l=i("6655"),u=i("04c4"),h=i("d97e"),c=i("9392"),f=i("8152");const p={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new c["a"](t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=Object(h["a"])(new f["a"],e.geometry,t.hasZ,t.hasM)),e.centroid)};class m{constructor(e){this.geometryInfo=e,this._boundsStore=new u["a"],this._featuresById=new Map,this._markedIds=new Set,this.events=new s["a"],this.featureAdapter=p}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(d["f"])(d["a"]);return this._featuresById.forEach(t=>{const i=this._boundsStore.get(t.objectId);i&&(e[0]=Math.min(i[0],e[0]),e[1]=Math.min(i[1],e[1]),e[2]=Math.max(i[2],e[2]),e[3]=Math.max(i[3],e[3]))}),e}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,i){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t(Object(o["h"])(i,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,e=>{t(this._featuresById.get(e))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach((t,i)=>{this._markedIds.has(i)||(e=!0,this._remove(t))}),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void r["a"].getLogger("esri.layers.graphics.data.FeatureStore").error(new n["a"]("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(t);let s;if(this._markedIds.add(t),i?(e.displayId=i.displayId,s=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(a["i"])(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);s=Object(l["r"])(s||Object(d["f"])(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,s),this._featuresById.set(t,e)}_remove(e){return Object(a["i"])(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}t["a"]=m},"88d1":function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return o}));var n=i("c120"),s=i("7ffa"),r=i("a94c"),a=i("8246");function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a["a"]:"esriGeometryPolyline"===e?a["c"]:a["b"]}}}function d(e,t){if(Object(n["a"])("csp-restrictions"))return()=>({[t]:null,...e});try{let i=`this.${t} = null;`;for(const t in e)i+=`this${t.indexOf(".")?`["${t}"]`:"."+t} = ${JSON.stringify(e[t])};`;const n=new Function(i);return()=>new n}catch(i){return()=>({[t]:null,...e})}}function l(e={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(s["a"])(e)}}]}function u(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:r["a"],queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},a745:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return n}));const n=1;function s(e,t){let i=0;for(const s of t){var n;const t=null==(n=s.attributes)?void 0:n[e];"number"==typeof t&&isFinite(t)&&(i=Math.max(i,t))}return i}},ce76:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("b50f"),s=i("b2b2"),r=i("8a44"),a=i("4637");class o{constructor(e=9,t){this.compareMinX=h,this.compareMinY=c,this.toBBox=function(e){return e},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this.toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),I.prune(),x.prune(),j.prune(),B.prune()}all(e){this._all(this.data,e)}search(e,t){let i=this.data;const n=this.toBBox;if(b(e,i))for(I.clear();i;){for(let s=0,r=i.children.length;s<r;s++){const r=i.children[s],a=i.leaf?n(r):r;b(e,a)&&(i.leaf?t(r):g(e,a)?this._all(r,t):I.push(r))}i=I.pop()}}collides(e){let t=this.data;const i=this.toBBox;if(!b(e,t))return!1;for(I.clear();t;){for(let n=0,s=t.children.length;n<s;n++){const s=t.children[n],r=t.leaf?i(s):s;if(b(e,r)){if(t.leaf||g(e,r))return!0;I.push(s)}}t=I.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,i=e.length;t<i;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new M([]),this}remove(e){if(!e)return this;let t,i=this.data,r=null,a=0,o=!1;const d=this.toBBox(e);for(j.clear(),B.clear();i||j.length>0;){var l;if(i||(i=Object(s["c"])(j.pop()),r=j.data[j.length-1],a=null!=(l=B.pop())?l:0,o=!0),i.leaf&&(t=Object(n["e"])(i.children,e,i.children.length,i.indexHint),-1!==t))return i.children.splice(t,1),j.push(i),this._condense(j),this;o||i.leaf||!g(i,d)?r?(a++,i=r.children[a],o=!1):i=null:(j.push(i),B.push(a),a=0,r=i,i=i.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let i=e;for(x.clear();i;){var n;if(!0===i.leaf)for(const e of i.children)t(e);else x.pushArray(i.children);i=null!=(n=x.pop())?n:null}}_build(e,t,i,n){const s=i-t+1;let r=this._maxEntries;if(s<=r){const n=new M(e.slice(t,i+1));return d(n,this.toBBox),n}n||(n=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(n-1)));const a=new v([]);a.height=n;const o=Math.ceil(s/r),l=o*Math.ceil(Math.sqrt(r));_(e,t,i,l,this.compareMinX);for(let d=t;d<=i;d+=l){const t=Math.min(d+l-1,i);_(e,d,t,o,this.compareMinY);for(let i=d;i<=t;i+=o){const s=Math.min(i+o-1,t);a.children.push(this._build(e,i,s,n-1))}}return d(a,this.toBBox),a}_chooseSubtree(e,t,i,n){for(;n.push(t),!0!==t.leaf&&n.length-1!==i;){let i,n=1/0,s=1/0;for(let r=0,a=t.children.length;r<a;r++){const a=t.children[r],o=f(a),d=m(e,a)-o;d<s?(s=d,n=o<n?o:n,i=a):d===s&&o<n&&(n=o,i=a)}t=i||t.children[0]}return t}_insert(e,t,i){const n=this.toBBox,s=i?e:n(e);j.clear();const r=this._chooseSubtree(s,this.data,t,j);for(r.children.push(e),u(r,s);t>=0&&j.data[t].children.length>this._maxEntries;)this._split(j,t),t--;this._adjustParentBBoxes(s,j,t)}_split(e,t){const i=e.data[t],n=i.children.length,s=this._minEntries;this._chooseSplitAxis(i,s,n);const r=this._chooseSplitIndex(i,s,n);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=i.children.splice(r,i.children.length-r),o=i.leaf?new M(a):new v(a);o.height=i.height,d(i,this.toBBox),d(o,this.toBBox),t?e.data[t-1].children.push(o):this._splitRoot(i,o)}_splitRoot(e,t){this.data=new v([e,t]),this.data.height=e.height+1,d(this.data,this.toBBox)}_chooseSplitIndex(e,t,i){let n,s,r;n=s=1/0;for(let a=t;a<=i-t;a++){const t=l(e,0,a,this.toBBox),o=l(e,a,i,this.toBBox),d=y(t,o),u=f(t)+f(o);d<n?(n=d,r=a,s=u<s?u:s):d===n&&u<s&&(s=u,r=a)}return r}_chooseSplitAxis(e,t,i){const n=e.leaf?this.compareMinX:h,s=e.leaf?this.compareMinY:c;this._allDistMargin(e,t,i,n)<this._allDistMargin(e,t,i,s)&&e.children.sort(n)}_allDistMargin(e,t,i,n){e.children.sort(n);const s=this.toBBox,r=l(e,0,t,s),a=l(e,i-t,i,s);let o=p(r)+p(a);for(let d=t;d<i-t;d++){const t=e.children[d];u(r,e.leaf?s(t):t),o+=p(r)}for(let d=i-t-1;d>=t;d--){const t=e.children[d];u(a,e.leaf?s(t):t),o+=p(a)}return o}_adjustParentBBoxes(e,t,i){for(let n=i;n>=0;n--)u(t.data[n],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const i=e.data[t];if(0===i.children.length)if(t>0){const s=e.data[t-1],r=s.children;r.splice(Object(n["e"])(r,i,r.length,s.indexHint),1)}else this.clear();else d(i,this.toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function d(e,t){l(e,0,e.children.length,t,e)}function l(e,t,i,n,s){s||(s=new M([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,a=t;a<i;a++)r=e.children[a],u(s,e.leaf?n(r):r);return s}function u(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function h(e,t){return e.minX-t.minX}function c(e,t){return e.minY-t.minY}function f(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function p(e){return e.maxX-e.minX+(e.maxY-e.minY)}function m(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function y(e,t){const i=Math.max(e.minX,t.minX),n=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,s-i)*Math.max(0,r-n)}function g(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function b(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function _(e,t,i,n,r){const o=[t,i];for(;o.length;){const t=Object(s["c"])(o.pop()),i=Object(s["c"])(o.pop());if(t-i<=n)continue;const d=i+Math.ceil((t-i)/n/2)*n;Object(a["a"])(e,d,i,t,r),o.push(i,d,d,t)}}const I=new r["a"],x=new r["a"],j=new r["a"],B=new r["a"]({deallocator:void 0});class O{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class F extends O{constructor(){super(...arguments),this.height=1,this.indexHint=new n["a"]}}class M extends F{constructor(e){super(),this.children=e,this.leaf=!0}}class v extends F{constructor(e){super(),this.children=e,this.leaf=!1}}}}]);
//# sourceMappingURL=chunk-02ba1318.65dd16d7.js.map