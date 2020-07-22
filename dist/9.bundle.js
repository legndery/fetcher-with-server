(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{162:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fetch-tab"},[n("div",{staticClass:"md-title"},[t._v("JavaScript - fetch")]),t._v(" "),n("md-checkbox",{model:{value:t.processJSON,callback:function(e){t.processJSON=e},expression:"processJSON"}},[t._v("process JSON")]),t._v(" "),n("md-checkbox",{model:{value:t.useAsyncAwait,callback:function(e){t.useAsyncAwait=e},expression:"useAsyncAwait"}},[t._v("use async-await")]),t._v(" "),n("span",[n("md-checkbox",{model:{value:t.enableMode,callback:function(e){t.enableMode=e},expression:"enableMode"}},[t._v("add mode")]),t._v(" "),n("md-field",[n("label",[t._v("mode")]),t._v(" "),n("md-select",{attrs:{name:"method"},model:{value:t.selectedMode,callback:function(e){t.selectedMode=e},expression:"selectedMode"}},t._l(t.modeOptions,(function(e,o){return n("md-option",{key:o,attrs:{value:e}},[t._v(t._s(e))])})),1)],1)],1),t._v(" "),n("md-content",{staticClass:"md-elevation-1"},[n("codemirror",{attrs:{value:t.fetchCodeStr,options:t.editorOptions}}),t._v(" "),n("md-button",{staticClass:"md-primary",on:{click:function(e){return t.$emit("copy-output-code",t.fetchCodeStr)}}},[t._v("copy")])],1)],1)},s=[];o._withStripped=!0},67:function(t,e,n){"use strict";n.r(e);var o=n(162),s=n(77);for(var i in s)"default"!==i&&function(t){n.d(e,t,(function(){return s[t]}))}(i);var r=n(0),a=Object(r.a)(s.default,o.a,o.b,!1,null,null,null);a.options.__file="src/components/FetchCodeTab.vue",e.default=a.exports},77:function(t,e,n){"use strict";n.r(e);var o=n(78),s=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e.default=s.a},78:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},s=n(4);n(32),e.default={name:"FetchCodeTab",data:function(){return{processJSON:!1,useAsyncAwait:!1,enableMode:!1,modeOptions:["same-origin","no-cors","cors","navigate"],selectedMode:"cors",editorOptions:{mode:"text/javascript",viewportMargin:1/0,tabSize:2,lineWrapping:!0,lineNumbers:!0,autoRefresh:!0}}},computed:o({},(0,s.mapGetters)(["inputData"]),{processJSONStr:function(){return this.processJSON?".then(function(resp){\n\treturn resp.json();\n})":""},optionsJSONStr:function(){var t={method:this.inputData.method,headers:this.inputData.requestHeaders};return"GET"!==t.method&&(t.body=this.inputData.requestBody),this.enableMode&&(t.mode=this.selectedMode),JSON.stringify(t,null,2)},fetchCodeStr:function(){return this.useAsyncAwait?this.fetchCodeWithAsyncAwaitStr:"fetch('"+this.inputData.fetchUrl+"', "+this.optionsJSONStr+")"+this.processJSONStr+".then(function(resp){\n\tconsole.log(resp);\n});"},fetchCodeWithAsyncAwaitStr:function(){return this.processJSON?"const resp = await (await fetch('"+this.inputData.fetchUrl+"', "+this.optionsJSONStr+")).json();":"const resp = await fetch('"+this.inputData.fetchUrl+"', "+this.optionsJSONStr+");"}})}}}]);