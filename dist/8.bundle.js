(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{158:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"csharp-tab"},[n("div",{staticClass:"md-title"},[t._v("C#")]),t._v(" "),n("md-content",{staticClass:"md-elevation-1"},[n("codemirror",{attrs:{value:t.outputCode,options:t.editorOptions}}),t._v(" "),n("md-button",{staticClass:"md-primary",on:{click:function(e){return t.$emit("copy-output-code",t.outputCode)}}},[t._v("copy")])],1)],1)},a=[];r._withStripped=!0},68:function(t,e,n){"use strict";n.r(e);var r=n(158),a=n(85);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var u=n(0),i=Object(u.a)(a.default,r.a,r.b,!1,null,null,null);i.options.__file="src/components/CsharpCodeTab.vue",e.default=i.exports},85:function(t,e,n){"use strict";n.r(e);var r=n(86),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=a.a},86:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n(3);n(103),e.default={name:"CsharpCodeTab",data:function(){return{editorOptions:{mode:"text/x-csharp",tabSize:2,lineWrapping:!0,lineNumbers:!0,autoRefresh:!0}}},computed:r({},(0,a.mapGetters)(["inputData"]),{computedHttpBodyStr:function(){var t=this.inputData,e=t.method,n=t.requestBody;return"GET"===e?"":', new StringContent("'+n+'")'},computedHttpMethodStr:function(){var t=this.inputData.method;return t.substr(0,1)+t.substr(1).toLowerCase()},computedHeaderStr:function(){var t=this;return(Object.keys(this.inputData.requestHeaders).map((function(e){return'httpClient.DefaultRequestHeaders.Add("'+e+'", "'+t.inputData.requestHeaders[e]+'");'}))||[""]).join("\n\t\t\t\t")},outputCode:function(){return"using System;\nusing System.Net.Http;\n\nnamespace Fetcher\n{\n\tclass Program\n\t{\n\t\tstatic void Main(string[] args)\n\t\t{\n\t\t\tusing (var httpClient = new HttpClient())\n\t\t\t{\n\t\t\t\t"+this.computedHeaderStr+"\n\t\t\t\tvar response = httpClient."+this.computedHttpMethodStr+'StringAsync(new Uri("'+this.inputData.fetchUrl+'")'+this.computedHttpBodyStr+").Result;\n\t\t\t\t// your code\n\n\t\t\t}\n\t\t}\n\t}\n}"}})}}}]);