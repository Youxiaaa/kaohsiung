(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-462a0a86"],{"159b":function(t,e,a){var i=a("da84"),s=a("fdbc"),n=a("17c2"),r=a("9112");for(var c in s){var o=i[c],l=o&&o.prototype;if(l&&l.forEach!==n)try{r(l,"forEach",n)}catch(u){l.forEach=n}}},"17c2":function(t,e,a){"use strict";var i=a("b727").forEach,s=a("a640"),n=a("ae40"),r=s("forEach"),c=n("forEach");t.exports=r&&c?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,a){var i=a("d039"),s=a("b622"),n=a("2d00"),r=s("species");t.exports=function(t){return n>=51||!i((function(){var e=[],a=e.constructor={};return a[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,a){"use strict";var i=a("23e7"),s=a("17c2");i({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"4de4":function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").filter,n=a("1dde"),r=a("ae40"),c=n("filter"),o=r("filter");i({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,a){var i=a("861d"),s=a("e8b5"),n=a("b622"),r=n("species");t.exports=function(t,e){var a;return s(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?i(a)&&(a=a[r],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},a640:function(t,e,a){"use strict";var i=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&i((function(){a.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,a){var i=a("83ab"),s=a("d039"),n=a("5135"),r=Object.defineProperty,c={},o=function(t){throw t};t.exports=function(t,e){if(n(c,t))return c[t];e||(e={});var a=[][t],l=!!n(e,"ACCESSORS")&&e.ACCESSORS,u=n(e,0)?e[0]:o,f=n(e,1)?e[1]:void 0;return c[t]=!!a&&!s((function(){if(l&&!i)return!0;var t={length:-1};l?r(t,1,{enumerable:!0,get:o}):t[1]=1,a.call(t,u,f)}))}},b727:function(t,e,a){var i=a("0366"),s=a("44ad"),n=a("7b0b"),r=a("50c4"),c=a("65f0"),o=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,u=4==t,f=6==t,d=7==t,v=5==t||f;return function(h,p,g,m){for(var C,x,b=n(h),y=s(b),_=i(p,g,3),w=r(y.length),S=0,k=m||c,L=e?k(h,w):a||d?k(h,0):void 0;w>S;S++)if((v||S in y)&&(C=y[S],x=_(C,S,b),t))if(e)L[S]=x;else if(x)switch(t){case 3:return!0;case 5:return C;case 6:return S;case 2:o.call(L,C)}else switch(t){case 4:return!1;case 7:o.call(L,C)}return f?-1:l||u?u:L}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},bb51:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoading?a("div",{staticClass:"loadingAnimation"},[t._m(0)]):t._e(),a("section",[a("div",{staticClass:"content preFade",class:{fadeIn:!t.isFade}},[a("div",{staticClass:"computerleftSide d-flex align-items-center justify-content-center flex-column px-4"},[a("div",{staticClass:"mt-auto"},[a("h1",{staticClass:"h3 text-white"},[t._v("高雄旅遊資訊網")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentZone,expression:"currentZone"}],staticClass:"form-control mt-2",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentZone=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("請選擇行政區...")]),a("option",{attrs:{value:""}},[t._v("全部區域")]),t._l(t.locations,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)]),t._m(1)]),a("div",{staticClass:"leftSide d-flex align-items-center justify-content-center flex-column px-4",class:{leftSideMove:t.sideMove}},[a("div",{staticClass:"leftSideBtn"},[a("div",{staticClass:"d-flex justify-content-center mt-2"},[t.sideMove?a("h2",{staticClass:"text-white",on:{click:function(e){t.sideMove=!t.sideMove}}},[t._v("«")]):a("h2",{staticClass:"text-white",on:{click:function(e){t.sideMove=!t.sideMove}}},[t._v("»")])])]),a("div",{staticClass:"mt-auto"},[a("h1",{staticClass:"h3 text-white"},[t._v("高雄旅遊資訊網")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentZone,expression:"currentZone"}],staticClass:"form-control mt-2",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentZone=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("請選擇行政區...")]),a("option",{attrs:{value:""}},[t._v("全部區域")]),t._l(t.locations,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)]),t._m(2)]),a("div",{staticClass:"computerrightSide"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.filterData[t.currentPage],(function(e){return a("div",{key:e.id,staticClass:"col-md-3 my-3"},[a("div",{staticClass:"card h-100",on:{click:function(a){return t.checkDetail(e)}}},[a("div",{staticClass:"card-header p-0"},[a("img",{attrs:{src:e.Picture1,alt:e.Picdescribe1,height:"150px",width:"100%"}})]),a("div",{staticClass:"card-body p-0 pl-3 py-3 bg-white"},[a("h2",{staticClass:"h6 text-secondary font-fix"},[t._v(" "+t._s(e.Name)+" ")])])])])})),0)]),t.filterData.length>2?a("nav",{staticClass:"d-flex justify-content-center my-5",attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{pageDisabled:0===t.currentPage}},[a("a",{staticClass:"page-link text-success",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){e.preventDefault(),t.currentPage-=1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.filterData.length,(function(e){return a("li",{key:e.id,staticClass:"page-item",class:{active:t.currentPage===e-1}},[a("a",{staticClass:"page-link text-success",class:{pageActive:t.currentPage===e-1},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.currentPage=e-1}}},[t._v(" "+t._s(e)+" ")])])})),a("li",{staticClass:"page-item",class:{pageDisabled:t.currentPage===t.filterData.length-1}},[a("a",{staticClass:"page-link text-success",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){e.preventDefault(),t.currentPage+=1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)]):t._e()]),a("div",{staticClass:"rightSide px-4",class:{rightSideMove:t.sideMove}},[a("div",{staticClass:"curtain",class:{curtainShow:t.sideMove}}),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.filterData[t.currentPage],(function(e){return a("div",{key:e.id,staticClass:"col-md-3 my-3"},[a("div",{staticClass:"card h-100",on:{click:function(a){return t.checkDetail(e)}}},[a("div",{staticClass:"card-header p-0"},[a("img",{attrs:{src:e.Picture1,alt:e.Picdescribe1,height:"200px",width:"100%"}})]),a("div",{staticClass:"card-body p-0 pl-3 py-3 bg-white"},[a("h2",{staticClass:"h6 text-secondary"},[t._v(" "+t._s(e.Name)+" ")])])])])})),0)]),t.filterData.length>1?a("div",{staticClass:"d-flex justify-content-center my-5"},[a("span",{staticClass:"h5 text-secondary d-flex align-self-center"},[t._v("第")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentPage,expression:"currentPage"}],staticClass:"mx-3 p-2",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentPage=e.target.multiple?a:a[0]}}},t._l(t.filterData.length,(function(e){return a("option",{key:e.id,domProps:{value:e-1}},[t._v(" "+t._s(e)+" ")])})),0),a("span",{staticClass:"h5 text-secondary d-flex align-self-center"},[t._v("頁")])]):t._e()])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("h3",{staticClass:"text-success h4"},[t._v("載入中 請稍候...")]),a("i",{staticClass:"fas fa-spinner fa-spin fa-3x text-danger"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-auto"},[a("ul",{staticClass:"d-flex justify-content-center text-center p-0"},[a("li",{staticClass:"list-unstyled mx-2 h4"},[a("a",{attrs:{href:"https://www.facebook.com/YuTsungChih",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook text-white"})])]),a("li",{staticClass:"list-unstyled mx-2 h4"},[a("a",{attrs:{href:"https://www.instagram.com/youxiaaaaaa/",target:"_blank"}},[a("i",{staticClass:"fab fa-instagram text-white"})])]),a("li",{staticClass:"list-unstyled mx-2 h4"},[a("a",{attrs:{href:"https://github.com/Youxiaaa",target:"_blank"}},[a("i",{staticClass:"fab fa-github-alt text-white"})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-auto"},[a("ul",{staticClass:"d-flex justify-content-center text-center p-0"},[a("li",{staticClass:"list-unstyled mx-2 h4"},[a("a",{attrs:{href:"https://www.facebook.com/YuTsungChih",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook text-white"})])]),a("li",{staticClass:"list-unstyled mx-2 h4"},[a("a",{attrs:{href:"https://www.instagram.com/youxiaaaaaa/",target:"_blank"}},[a("i",{staticClass:"fab fa-instagram text-white"})])]),a("li",{staticClass:"list-unstyled mx-2 h4"},[a("a",{attrs:{href:"https://github.com/Youxiaaa",target:"_blank"}},[a("i",{staticClass:"fab fa-github-alt text-white"})])])])])}],n=(a("4de4"),a("4160"),a("c975"),a("159b"),{data:function(){return{isLoading:!1,data:[],currentPage:0,locations:["鹽埕區","鼓山區","左營區","楠梓區","三民區","新興區","前金區","苓雅區","前鎮區","旗津區","小港區","鳳山區","林園區","大寮區","大樹區","大社區","仁武區","鳥松區","岡山區","橋頭區","燕巢區","田寮區","阿蓮區","路竹區","湖內區","茄萣區","永安區","彌陀區","梓官區","旗山區","美濃區","六龜區","甲仙區","杉林區","內門區","茂林區","桃源區","那瑪夏區"],currentZone:"",isFade:!1,sideMove:!1}},computed:{filterData:function(){var t=this,e=[],a=[];return""!==t.currentZone?(a=t.data.filter((function(e){return-1!==e.Add.indexOf(t.currentZone)})),t.currentPage=0,t.sideMove=!1):(a=t.data,t.sideMove=!1),a.forEach((function(t,a){a%32===0&&e.push([]);var i=parseInt(a/32);e[i].push(t)})),e}},methods:{checkDetail:function(t){var e=this;""===e.currentZone&&(e.currentZone="全部區域"),e.isFade=!e.isFade,setTimeout((function(){e.$router.push("detail/".concat(t.Id))}),500),setTimeout((function(){e.$bus.$emit("getDetail",t,e.currentZone,e.currentPage)}),600)}},created:function(){var t=this,e="https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c";t.isLoading=!0,t.isFade=!0,t.$http.get(e).then((function(e){t.isLoading=!1,t.isFade=!1,t.data=e.data.data.XML_Head.Infos.Info})),t.$bus.$on("getZone",(function(e,a){t.currentZone=e,t.currentPage=a}))}}),r=n,c=a("2877"),o=Object(c["a"])(r,i,s,!1,null,null,null);e["default"]=o.exports},c975:function(t,e,a){"use strict";var i=a("23e7"),s=a("4d64").indexOf,n=a("a640"),r=a("ae40"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,l=n("indexOf"),u=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:o||!l||!u},{indexOf:function(t){return o?c.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,a){var i=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-462a0a86.0b5f62d1.js.map