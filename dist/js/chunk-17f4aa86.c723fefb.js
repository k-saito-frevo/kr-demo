(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17f4aa86"],{"0fd9b":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var a=n("ade3"),i=n("5530"),o=(n("4b85"),n("2b0e")),r=n("d9f7"),s=n("80d2"),c=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return c.reduce((function(n,a){return n[t+Object(s["D"])(a)]=e(),n}),{})}var d=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},p=l("align",(function(){return{type:String,default:null,validator:d}})),f=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},h=l("justify",(function(){return{type:String,default:null,validator:f}})),v=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=l("alignContent",(function(){return{type:String,default:null,validator:v}})),b={align:Object.keys(p),justify:Object.keys(h),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,n){var a=y[t];if(null!=n){if(e){var i=e.replace(t,"");a+="-".concat(i)}return a+="-".concat(n),a.toLowerCase()}}var j=new Map;e["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},p),{},{justify:{type:String,default:null,validator:f}},h),{},{alignContent:{type:String,default:null,validator:v}},g),render:function(t,e){var n=e.props,i=e.data,o=e.children,s="";for(var c in n)s+=String(n[c]);var u=j.get(s);return u||function(){var t,e;for(e in u=[],b)b[e].forEach((function(t){var a=n[t],i=m(e,t,a);i&&u.push(i)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),j.set(s,u)}(),t(n.tag,Object(r["a"])(i,{staticClass:"row",class:u}),o)}})},"145b":function(t,e,n){"use strict";var a=n("4a75"),i=n.n(a);i.a},1859:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{id:"dashboard-core-footer"}},[n("v-container",[n("v-row",{attrs:{align:"center","no-gutters":""}},[t._l(t.links,(function(e,a){return n("v-col",{key:a,staticClass:"text-center mb-sm-0 mb-5",attrs:{cols:"auto"}},[n("a",{staticClass:"mr-0 grey--text text--darken-3",attrs:{href:e.href,rel:"noopener",target:"_blank"},domProps:{textContent:t._s(e.text)}})])})),n("v-spacer",{staticClass:"hidden-sm-and-down"}),n("v-col",{attrs:{cols:"12",md:"auto"}},[n("div",{staticClass:"body-1 font-weight-light pt-6 pt-md-0 text-center"},[t._v(" © 2020- FrevoWorks.Inc All rights reserved ")])])],2)],1)],1)},i=[],o={name:"DashboardCoreFooter",data:function(){return{links:[]}}},r=o,s=(n("145b"),n("2877")),c=n("6544"),u=n.n(c),l=n("62ad"),d=n("a523"),p=(n("a9e3"),n("c7cd"),n("5530")),f=(n("b5b6"),n("8dd9")),h=n("3a66"),v=n("d10f"),g=n("58df"),b=n("80d2"),y=Object(g["a"])(f["a"],Object(h["a"])("footer",["height","inset"]),v["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(p["a"])(Object(p["a"])({},f["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(p["a"])(Object(p["a"])({},f["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(b["g"])(t),left:Object(b["g"])(this.computedLeft),right:Object(b["g"])(this.computedRight),bottom:Object(b["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),m=n("0fd9b"),j=n("2fa4"),O=Object(s["a"])(r,a,i,!1,null,null,null);e["default"]=O.exports;u()(O,{VCol:l["a"],VContainer:d["a"],VFooter:y,VRow:m["a"],VSpacer:j["a"]})},"20f6":function(t,e,n){},"2fa4":function(t,e,n){"use strict";n("20f6");var a=n("80d2");e["a"]=Object(a["h"])("spacer","div","v-spacer")},"3a66":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("fe6c"),i=n("58df");function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(i["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"4a75":function(t,e,n){},a523:function(t,e,n){"use strict";n("99af"),n("4de4"),n("b64b"),n("2ca0"),n("20f6"),n("4b85"),n("a15b"),n("498a");var a=n("2b0e");function i(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var a=n.props,i=n.data,o=n.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var r=i.attrs;if(r){i.attrs={};var s=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(i.staticClass+=" ".concat(s.join(" ")))}return a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),e(a.tag,i,o)}})}var o=n("d9f7");e["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,a=e.props,i=e.data,r=e.children,s=i.attrs;return s&&(i.attrs={},n=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),t(a.tag,Object(o["a"])(i,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),r)}})},b5b6:function(t,e,n){}}]);
//# sourceMappingURL=chunk-17f4aa86.c723fefb.js.map