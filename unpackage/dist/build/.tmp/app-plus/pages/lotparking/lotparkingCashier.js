(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/lotparking/lotparkingCashier"],{1755:function(e,a,t){"use strict";(function(e){t("949b"),t("921b");n(t("66fd"));var a=n(t("be4e"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("6e42")["createPage"])},"4dc4":function(e,a,t){"use strict";var n=t("b98f"),i=t.n(n);i.a},"4f14":function(e,a,t){"use strict";var n,i=function(){var e=this,a=e.$createElement;e._self._c},r=[];t.d(a,"b",function(){return i}),t.d(a,"c",function(){return r}),t.d(a,"a",function(){return n})},"9b4a":function(e,a,t){"use strict";(function(e,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=function(){return t.e("components/cashier/cashier").then(t.bind(null,"2ddd"))},r={components:{cashier:i},onShow:function(){this.$checkLogin()},data:function(){return{wxData:{},providerList:[]}},onLoad:function(a){var t=this;this.wxData={reqStr:JSON.parse(a.reqStr),data:JSON.parse(a.data),origin:a.origin};var i=this.wxData.data.counters;for(var r in i)null!=i[r]&&void 0!=i[r]&&(i[r].bank_codeWeixin?e.getProvider({service:"payment",success:function(e){e.provider.map(function(e){switch(e){case"wxpay":t.providerList.push({name:"微信",id:e,img:"../../static/cashier/wxpay.png"});break;default:break}})},fail:function(e){console.log(n("获取支付通道失败：",e," at pages\\lotparking\\lotparkingCashier.vue:74"))}}):i[r].bank_codeZhifubao?e.getProvider({service:"payment",success:function(e){e.provider.map(function(e){switch(e){case"alipay":t.providerList.push({name:"支付宝",id:e,img:"../../static/cashier/alipay.png"});break;default:break}})},fail:function(e){console.log(n("获取支付通道失败：",e," at pages\\lotparking\\lotparkingCashier.vue:99"))}}):i[r].bank_codeJhjh?this.providerList.push({name:"建行聚合",id:"ccb",img:"../../static/cashier/ccbpay.png"}):i[r].bank_codeShywt&&this.providerList.push({name:"一网通",id:"netcom",img:"../../static/cashier/netcompay.png"}))},methods:{requestPayment:function(a){var t=this;if(0!=this.providerList.length){var i=this.wxData.data,r={counter_ids:null,amountMoneyFloat:i.result.total/100,origin:this.wxData.origin,reqStr:this.wxData.reqStr};if(delete r.reqStr.busicomid,"wxpay"==a.id){for(var o in i.counters)if(i.counters[o].bank_codeWeixin){r.counter_ids=i.counters[o].counter_id;break}}else if("alipay"==a.id){for(var s in i.counters)if(i.counters[s].bank_codeZhifubao){r.counter_ids=i.counters[s].counter_id;break}}else if("ccb"==a.id){for(var c in i.counters)if(i.counters[c].bank_codeJhjh){r.counter_ids=i.counters[c].counter_id;break}}else if("netcom"==a.id)for(var u in i.counters)if(i.counters[u].bank_codeShywt){r.counter_ids=i.counters[u].counter_id;break}this.$http.request({url:"/wx/jsonPreparePayInCounter",data:r,success:function(a){var n=a.data;if(n.success){n.sReqNo;n.counter_bank_codeIsWeixin?e.requestPayment({provider:"wxpay",orderInfo:{appid:n.prepayInfo.appid,noncestr:n.prepayInfo.noncestr,package:n.prepayInfo["package"],partnerid:n.prepayInfo.partnerid,prepayid:n.prepayInfo.prepayid,timestamp:Number(n.prepayInfo.timestamp),sign:n.prepayInfo.sign},success:function(a){t.$api.msg("支付成功"),e.navigateBack({delta:1})},fail:function(e){t.$api.msg("支付失败")}}):n.counter_bank_codeIsZhifubao?e.requestPayment({provider:"alipay",orderInfo:n.alipayReturnStr,success:function(a){t.$api.msg("支付成功"),e.navigateBack({delta:1})},fail:function(e){t.$api.msg("支付失败")}}):n.counter_bank_codeIsShywt?n.message?e.navigateTo({url:"../netcomCashier/netcomCashier?message="+n.message}):t.$api.msg(n.errorText):n.counter_bank_codeIsJhjh?t.$api.msg("建行聚合支付失败"):t.$api.msg("暂无该支付方式")}else t.$api.msg(n.errorText)},fail:function(e){console.log(n(e," at pages\\lotparking\\lotparkingCashier.vue:230"))}})}else this.$api.msg("暂无支付方式")}}};a.default=r}).call(this,t("6e42")["default"],t("0de9")["default"])},a27f:function(e,a,t){"use strict";t.r(a);var n=t("9b4a"),i=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(a,e,function(){return n[e]})}(r);a["default"]=i.a},b98f:function(e,a,t){},be4e:function(e,a,t){"use strict";t.r(a);var n=t("4f14"),i=t("a27f");for(var r in i)"default"!==r&&function(e){t.d(a,e,function(){return i[e]})}(r);t("4dc4");var o,s=t("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);a["default"]=c.exports}},[["1755","common/runtime","common/vendor"]]]);