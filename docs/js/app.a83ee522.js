(function(t){function e(e){for(var r,u,i=e[0],s=e[1],c=e[2],p=0,f=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/5yau_ranking/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h2",[t._v("5x5 Yau Ranking")]),n("br"),n("v-simple-table",[[n("thead",[n("tr",[n("th"),n("th"),n("th",[n("v-btn",{attrs:{elevation:"2"},on:{click:function(e){return t.doSort("single")}}},[t._v("sort")])],1),n("th",[n("v-btn",{attrs:{elevation:"2"},on:{click:function(e){return t.doSort("average")}}},[t._v("sort")])],1)]),n("tr",[n("th",[t._v("Rank")]),n("th",[t._v("Name")]),n("th",[t._v("Single")]),n("th",[t._v("Average")])])]),n("tbody",t._l(t.result,(function(e,r){return n("tr",{key:e},[n("td",[t._v(t._s(r+1))]),n("td",[t._v(t._s(e[0]))]),n("td",[t._v(t._s(e[1]))]),n("td",[t._v(t._s(e[2]))])])})),0)]],2)],1)},a=[],u=(n("b0c0"),{name:"App",data:function(){return{result:[],persons:["2008UENO01","2009OLSO01","2011HOFF02","2011RHEI01","2012ITOR01","2013FERT01","2013GALA04","2013KOBA01","2015FIRM01","2015GOWT01","2015KUCA01","2015MATT05","2015MOHA10","2015ROBI04","2015TAKA05","2016MORA24","2016YENC01","2017HONG17","2017PALI04","2017SZYS01","2018PIKE01","2018VASY01","2009LIUE01","2009YAUR01","2007VALK01","2010HULL01","2010UTOM01","2010WUIF01","2012BEAH01","2012GONZ10","2012MCNE01","2013WANG67","2014CZAP01","2014LEES01","2014RAJE03","2014VORL01","2014WENW01","2014YELI01","2014ZAKR01","2015CHNG01","2015GROH02","2015KOVA07","2015OAKK01","2015RAOJ01","2015SING22","2015STAU01","2015WANG09","2016KOLA02","2016MART29","2016MELN01","2016NUNE11","2017HUAN77","2017KIRB01","2015LEEJ12","2015LEON02","2018BERE01"]}},mounted:function(){this.getData()},methods:{getData:function(){for(var t=this,e="https://www.worldcubeassociation.org/api/v0/persons?per_page=100&wca_ids="+this.persons[0],n=1;n<this.persons.length;n++)e+=","+this.persons[n];this.axios.get(e).then((function(e){for(var n=[],r=0;r<e.data.length;r++)n.push([e.data[r].person.name,t.timeToFloat(e.data[r].personal_records["555"].single.best),t.timeToFloat(e.data[r].personal_records["555"].average.best)]);t.result=n,t.doSort("average")})).catch((function(t){console.log(t)}))},doSort:function(t){"single"==t?this.result.sort((function(t,e){return t[1]-e[1]})):"average"==t&&this.result.sort((function(t,e){return t[2]-e[2]}))},timeToFloat:function(t){var e=parseInt(t)/100;return parseInt(t)%10==0&&(e+="0"),e}}}),i=u,s=(n("034f"),n("2877")),c=n("6544"),l=n.n(c),p=n("8336"),f=n("1f4f"),d=Object(s["a"])(i,o,a,!1,null,null,null),v=d.exports;l()(d,{VBtn:p["a"],VSimpleTable:f["a"]});var h=n("bc3a"),O=n.n(h),b=n("2106"),g=n.n(b),_=n("f309");r["a"].use(_["a"]);var A=new _["a"]({});r["a"].config.productionTip=!1,r["a"].use(g.a,O.a),new r["a"]({vuetify:A,render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.a83ee522.js.map