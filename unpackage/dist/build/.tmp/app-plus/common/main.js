(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0846":function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o("2f62"),r=l(o("66fd"));function l(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){c(t,e,o[e])})}return t}function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var i={methods:u({},(0,a.mapMutations)(["checkSession"])),computed:u({},(0,a.mapState)(["hasLogin"])),onLaunch:function(){var e=this;r.default.prototype.$checkLogin=function(){e.checkSession(),e.hasLogin?console.log(t("登录成功"," at App.vue:19")):(e.$api.msg("未登录"),n.navigateTo({url:"../login/login"}))},n.getLocation({type:"wgs84",success:function(t){r.default.prototype.$latitude=t.latitude,r.default.prototype.$longitude=t.longitude}}),n.getSystemInfo({success:function(t){r.default.prototype.ScreenWidth=t.safeArea.width,r.default.prototype.ScreenHeight=t.safeArea.height,r.default.prototype.StatusBar=t.statusBarHeight,"android"==t.platform?r.default.prototype.CustomBar=t.statusBarHeight+50:r.default.prototype.CustomBar=t.statusBarHeight+45}}),r.default.prototype.ColorList=[{title:"嫣红",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}]},onShow:function(){console.log(t("App Show"," at App.vue:158"))},onHide:function(){console.log(t("App Hide"," at App.vue:161"))}};e.default=i}).call(this,o("0de9")["default"],o("6e42")["default"])},"7ce8":function(t,e,o){"use strict";o.r(e);var n=o("8233");for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);o("a4bf");var r,l,u,c,i=o("f0c5"),f=Object(i["a"])(n["default"],r,l,!1,null,null,null,!1,u,c);e["default"]=f.exports},8233:function(t,e,o){"use strict";o.r(e);var n=o("0846"),a=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},"9df1":function(t,e,o){"use strict";(function(t,e){o("949b"),o("921b");var n=u(o("66fd")),a=u(o("a409")),r=u(o("7ce8")),l=u(o("752c"));function u(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){i(t,e,o[e])})}return t}function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var f=l.default.http,p=function(){return o.e("colorui/components/cu-custom").then(o.bind(null,"4baf"))};n.default.component("cu-custom",p);var d=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none";!1!==Boolean(e)&&t.showToast({title:e,duration:o,mask:n,icon:a})};n.default.config.productionTip=!0,n.default.prototype.$fire=new n.default,n.default.prototype.$store=a.default,n.default.prototype.$api={msg:d},n.default.prototype.$http=f,r.default.mpType="app";var s=new n.default(c({},r.default));e(s).$mount()}).call(this,o("6e42")["default"],o("6e42")["createApp"])},a4bf:function(t,e,o){"use strict";var n=o("b50c"),a=o.n(n);a.a},b50c:function(t,e,o){}},[["9df1","common/runtime","common/vendor"]]]);