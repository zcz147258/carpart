(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/berth-number/berth-number"],{1949:function(t,e,n){"use strict";n.r(e);var r=n("68b1"),u=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=u.a},3407:function(t,e,n){"use strict";var r,u=function(){var t=this,e=t.$createElement,n=(t._self._c,t.berthNum.slice(0,1)),r=t.berthNum.slice(1,2),u=t.berthNum.slice(2,3),i=t.berthNum.slice(3,4),s=t.berthNum.slice(4,5);t.$mp.data=Object.assign({},{$root:{g0:n,g1:r,g2:u,g3:i,g4:s}})},i=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return r})},"68b1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a1dd"));function u(t){return t&&t.__esModule?t:{default:t}}var i=function(){return n.e("components/keyboard-package/keyboard-package").then(n.bind(null,"58a8"))},s={props:{berthNum:String},mounted:function(){this.cursor=r.default},components:{keyboardPackage:i},data:function(){return{cursorIndex:-1,type:"berth",cursor:""}},methods:{berthInputClick:function(t){this.cursorIndex=t,this.$refs[this.type].open()},onInput:function(t){switch(this.type){case"berth":var e=this.cursorIndex;if(-1==e||"berth"!=this.type)return;for(var n=this.berthNum.substring(0,e)+t,r=0;r<4-e;r++)n+=" ";this.cursorIndexChange(e+1),this.berthNumChange(n);break}},onDelete:function(){var t=this.cursorIndex;if(-1!=t){var e=this.berthNum;if(" "==this.berthNum.substring(t,t+1)){e=e.substring(0,t-1);for(var n=0;n<=5-t;n++)e+=" ";this.cursorIndexChange(t-1)}else{e=e.substring(0,t);for(var r=0;r<5-t;r++)e+=" "}this.berthNumChange(e)}},onConfirm:function(){t.showToast({title:"完成输入！",duration:2e3,icon:"none"})},close:function(){this.$refs[this.type].close()},berthNumChange:function(t){this.$emit("berthNumChange",t)},cursorIndexChange:function(t){t<0&&(t=0),t>4&&(t=-1,this.close()),this.cursorIndex=t}}};e.default=s}).call(this,n("6e42")["default"])},e8dd:function(t,e,n){"use strict";var r=n("fc5d"),u=n.n(r);u.a},eb5f:function(t,e,n){"use strict";n.r(e);var r=n("3407"),u=n("1949");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("e8dd");var s,o=n("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);e["default"]=c.exports},fc5d:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/berth-number/berth-number-create-component',
    {
        'components/berth-number/berth-number-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("eb5f"))
        })
    },
    [['components/berth-number/berth-number-create-component']]
]);
