(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zhanneilianxi/add-or-update"],{"01a7":function(e,n,a){"use strict";a.r(n);var r=a("c875"),i=a.n(r);for(var t in r)"default"!==t&&function(e){a.d(n,e,(function(){return r[e]}))}(t);n["default"]=i.a},"302e":function(e,n,a){},"4e83":function(e,n,a){"use strict";(function(e){a("1078");r(a("66fd"));var n=r(a("e382"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},"6c52":function(e,n,a){"use strict";var r=a("302e"),i=a.n(r);i.a},c875:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(a("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function t(e,n,a,r,i,t,o){try{var u=e[t](o),s=u.value}catch(c){return void a(c)}u.done?n(s):Promise.resolve(s).then(r,i)}function o(e){return function(){var n=this,a=arguments;return new Promise((function(r,i){var o=e.apply(n,a);function u(e){t(o,r,i,u,s,"next",e)}function s(e){t(o,r,i,u,s,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("138c"))}.bind(null,a)).catch(a.oe)},s={data:function(){return{cross:"",ruleForm:{maijiazhanghao:"",maijiaxingming:"",biaoti:"",neirong:"",lianxishijian:"",zhanghao:"",xingming:"",sfsh:"",shhf:"",userid:""},maijiazhanghaoOptions:[],maijiazhanghaoIndex:0,user:{},ro:{maijiazhanghao:!1,maijiaxingming:!1,biaoti:!1,neirong:!1,lianxishijian:!1,zhanghao:!1,xingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return o(r.default.mark((function i(){var t,o,u,s;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a.ruleForm.lianxishijian=a.$utils.getCurDateTime(),t=e.getStorageSync("nowTable"),i.next=4,a.$api.session(t);case 4:return o=i.sent,a.user=o.data,a.ruleForm.zhanghao=a.user.zhanghao,a.ro.zhanghao=!0,a.ruleForm.xingming=a.user.xingming,a.ro.xingming=!0,i.next=12,a.$api.option("maijia","maijiazhanghao",{});case 12:if(o=i.sent,a.maijiazhanghaoOptions=o.data,a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=22;break}return a.ruleForm.id=n.id,i.next=20,a.$api.info("zhanneilianxi",a.ruleForm.id);case 20:o=i.sent,a.ruleForm=o.data;case 22:if(a.cross=n.cross,!n.cross){i.next=62;break}u=e.getStorageSync("crossObj"),i.t0=r.default.keys(u);case 26:if((i.t1=i.t0()).done){i.next=62;break}if(s=i.t1.value,"maijiazhanghao"!=s){i.next=32;break}return a.ruleForm.maijiazhanghao=u[s],a.ro.maijiazhanghao=!0,i.abrupt("continue",26);case 32:if("maijiaxingming"!=s){i.next=36;break}return a.ruleForm.maijiaxingming=u[s],a.ro.maijiaxingming=!0,i.abrupt("continue",26);case 36:if("biaoti"!=s){i.next=40;break}return a.ruleForm.biaoti=u[s],a.ro.biaoti=!0,i.abrupt("continue",26);case 40:if("neirong"!=s){i.next=44;break}return a.ruleForm.neirong=u[s],a.ro.neirong=!0,i.abrupt("continue",26);case 44:if("lianxishijian"!=s){i.next=48;break}return a.ruleForm.lianxishijian=u[s],a.ro.lianxishijian=!0,i.abrupt("continue",26);case 48:if("zhanghao"!=s){i.next=52;break}return a.ruleForm.zhanghao=u[s],a.ro.zhanghao=!0,i.abrupt("continue",26);case 52:if("xingming"!=s){i.next=56;break}return a.ruleForm.xingming=u[s],a.ro.xingming=!0,i.abrupt("continue",26);case 56:if("userid"!=s){i.next=60;break}return a.ruleForm.userid=u[s],a.ro.userid=!0,i.abrupt("continue",26);case 60:i.next=26;break;case 62:a.styleChange();case 63:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},maijiazhanghaoChange:function(e){var n=this;return o(r.default.mark((function a(){var i;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.maijiazhanghaoIndex=e.target.value,n.ruleForm.maijiazhanghao=n.maijiazhanghaoOptions[n.maijiazhanghaoIndex],a.next=4,n.$api.follow("maijia","maijiazhanghao",{columnValue:n.ruleForm.maijiazhanghao});case 4:i=a.sent,i.data.maijiaxingming&&(n.ruleForm.maijiaxingming=i.data.maijiaxingming);case 6:case"end":return a.stop()}}),a)})))()},lianxishijianConfirm:function(e){console.log(e),this.ruleForm.lianxishijian=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(r.default.mark((function a(){var i,t,o,u,s,c,l,m,g,f;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.ruleForm.biaoti){a.next=3;break}return n.$utils.msg("标题不能为空"),a.abrupt("return");case 3:if(n.ruleForm.neirong){a.next=6;break}return n.$utils.msg("内容不能为空"),a.abrupt("return");case 6:if(!n.cross){a.next=22;break}if(u=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==u){a.next=22;break}if(c=e.getStorageSync("crossObj"),u.startsWith("[")){a.next=18;break}for(l in c)l==u&&(c[l]=s);return m=e.getStorageSync("crossTable"),a.next=16,n.$api.update("".concat(m),c);case 16:a.next=22;break;case 18:i=Number(e.getStorageSync("userid")),t=c["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 22:if(!t||!i){a.next=44;break}return n.ruleForm.crossuserid=i,n.ruleForm.crossrefid=t,g={page:1,limit:10,crossuserid:i,crossrefid:t},a.next=28,n.$api.list("zhanneilianxi",g);case 28:if(f=a.sent,!(f.data.total>=o)){a.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 34:if(!n.ruleForm.id){a.next=39;break}return a.next=37,n.$api.update("zhanneilianxi",n.ruleForm);case 37:a.next=41;break;case 39:return a.next=41,n.$api.add("zhanneilianxi",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:a.next=52;break;case 44:if(!n.ruleForm.id){a.next=49;break}return a.next=47,n.$api.update("zhanneilianxi",n.ruleForm);case 47:a.next=51;break;case 49:return a.next=51,n.$api.add("zhanneilianxi",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(a,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,a("543d")["default"])},db1e:function(e,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return t})),a.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"138c"))}},i=function(){var e=this,n=e.$createElement;e._self._c},t=[]},e382:function(e,n,a){"use strict";a.r(n);var r=a("db1e"),i=a("01a7");for(var t in i)"default"!==t&&function(e){a.d(n,e,(function(){return i[e]}))}(t);a("6c52");var o,u=a("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"1026ec8a",null,!1,r["a"],o);n["default"]=s.exports}},[["4e83","common/runtime","common/vendor"]]]);