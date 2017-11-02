webpackJsonp([1,6,7,8,9,10,11,12,13],{"/g0O":function(e,t,n){e.exports=n.p+"static/img/markcook.e1e7906.png"},"3X1G":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("article",[o("p",[e._v('{\n"title": "Scion",\n"tags": ["javascript", "nodejs"],\n"date": "2016-07-01",\n"desc": "A light tool to generate projects in an easy way",\n"cover": "scion.png"\n}')]),e._v(" "),o("p",[o("img",{attrs:{src:n("zNBv"),alt:"img"}})]),e._v(" "),o("h1",[e._v("SCION")]),e._v(" "),o("p",[e._v("A light tool to generate projects in an easy way.")]),e._v(" "),o("h2",[e._v("Installation")]),e._v(" "),o("pre",{pre:!0,attrs:{class:"hljs"}},[o("code",{attrs:{"v-pre":""}},[e._v("npm install scion-cli -g\n")])]),e._v(" "),o("p",[e._v("or")]),e._v(" "),o("pre",{pre:!0,attrs:{class:"hljs"}},[o("code",{attrs:{"v-pre":""}},[e._v("git "),o("span",{attrs:{class:"hljs-built_in"}},[e._v("clone")]),e._v(" https://github.com/jrainlau/scion.git\n\n"),o("span",{attrs:{class:"hljs-built_in"}},[e._v("cd")]),e._v(" scion && npm install\n\nnpm link\n")])]),e._v(" "),o("h2",[e._v("Usage")]),e._v(" "),o("p",[e._v("Open your terminal and type "),o("code",{pre:!0},[e._v("scion")]),e._v(" or "),o("code",{pre:!0},[e._v("scion -h")]),e._v(" , you'll see the help infomation below:")]),e._v(" "),o("pre",{pre:!0,attrs:{class:"hljs"}},[o("code",{attrs:{"v-pre":""}},[e._v("  Usage: scion <"),o("span",{attrs:{class:"hljs-built_in"}},[e._v("command")]),e._v(">\n\n\n  Commands:\n\n    add|a      Add a new template\n    list|l     List all the templates\n    init|i     Generate a new project\n    delete|d   Delete a template\n\n  Options:\n\n    -h, --"),o("span",{attrs:{class:"hljs-built_in"}},[e._v("help")]),e._v("     output usage information\n    -V, --version  output the version number\n")])]),e._v(" "),o("blockquote",[o("p",[e._v("Note that if you are using "),o("code",{pre:!0},[e._v("MacOS")]),e._v(", "),o("code",{pre:!0},[e._v("sudo")]),e._v(" was required while using commands "),o("code",{pre:!0},[e._v("add")]),e._v(" and "),o("code",{pre:!0},[e._v("delete")]),e._v(".")])]),e._v(" "),o("h2",[e._v("Commands")]),e._v(" "),o("h3",[e._v("add | a")]),e._v(" "),o("p",[e._v("This command would help you to add a new template to the "),o("code",{pre:!0},[e._v("templates.json")]),e._v(", which will be used by "),o("code",{pre:!0},[e._v("Scion")]),e._v(" to generate projects.")]),e._v(" "),o("pre",{pre:!0,attrs:{class:"hljs"}},[o("code",{attrs:{"v-pre":""}},[e._v("$ scion add\n\n? Set the custom name of the template: my-first-template\n? Owner/name of the template: jrainlau/scion\n? Branch of the template: new\n┌───────────────────┬────────────────┬────────┐\n│ Template Name     │ Owner/Name     │ Branch │\n├───────────────────┼────────────────┼────────┤\n│ my-first-template │ jrainlau/scion │ new    │\n└───────────────────┴────────────────┴────────┘\n✔ New template has been added successfully!\n")])]),e._v(" "),o("p",[o("code",{pre:!0},[e._v("Scion")]),e._v(" use "),o("a",{attrs:{href:"https://github.com/flipxfx/download-git-repo"}},[e._v("download-git-repo")]),e._v(" to down load git repos. After answering 3 questions, you'll add a new template to "),o("code",{pre:!0},[e._v("Scion")]),e._v(".")]),e._v(" "),o("h3",[e._v("list | l")]),e._v(" "),o("p",[e._v("It shows you the templates list.")]),e._v(" "),o("pre",{pre:!0,attrs:{class:"hljs"}},[o("code",{attrs:{"v-pre":""}},[e._v("$ scion list\n\n┌────────────────────┬────────────────┬────────┐\n│ Template Name      │ Owner/Name     │ Branch │\n├────────────────────┼────────────────┼────────┤\n│ my-first-template  │ jrainlau/scion │ new    │\n├────────────────────┼────────────────┼────────┤\n│ my-second-template │ jrainlau/motto │ master │\n└────────────────────┴────────────────┴────────┘\n")])]),e._v(" "),o("h3",[e._v("init | i")]),e._v(" "),o("p",[e._v("After adding new templates, you could use this command to generate your own project by choosing template.")]),e._v(" "),o("pre",{pre:!0,attrs:{class:"hljs"}},[o("code",{attrs:{"v-pre":""}},[e._v("$ scion init\n\n? Template name: my-first-template\n? Project name: my-project\n? Where to init the project? ../\n⠹ Downloading template...\n\nNew project has been initialized successfully!\n")])]),e._v(" "),o("p",[e._v("It's easy, right?")]),e._v(" "),o("h3",[e._v("delete | d")]),e._v(" "),o("p",[e._v("To delete a template, you could use this command:")]),e._v(" "),o("pre",{pre:!0,attrs:{class:"hljs"}},[o("code",{attrs:{"v-pre":""}},[e._v("$ scion delete\n\n? Which template you want to delete? my-second-template\n┌───────────────────┬────────────────┬────────┐\n│ Template Name     │ Owner/Name     │ Branch │\n├───────────────────┼────────────────┼────────┤\n│ my-first-template │ jrainlau/scion │ new    │\n└───────────────────┴────────────────┴────────┘\n✔ Template has been deleted successfully\n")])]),e._v(" "),o("h2",[e._v("Template")]),e._v(" "),o("p",[e._v("The most important part of Scion is "),o("code",{pre:!0},[e._v("template")]),e._v(". All templates' infomation were list in the "),o("code",{pre:!0},[e._v("templates.json")]),e._v(".\nA template means a project sample, which has a simple or complex file structure.")]),e._v(" "),o("p",[e._v("You can create your own templates repository, and push your templates in different branches. All you need to do then is to add the templates into Scion's "),o("code",{pre:!0},[e._v("templates.json")]),e._v(".")]),e._v(" "),o("h2",[e._v("License")]),e._v(" "),o("p",[e._v("MIT.")])])}],a={render:o,staticRenderFns:r};t.a=a},"7EMz":function(e,t,n){e.exports=n.p+"static/img/vue-occupy.2d035f5.png"},D4aY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("RUDb"),r=n("VU/8"),a=r(null,o.a,!1,null,null,null);t.default=a.exports},DSSN:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("p",[e._v('{\n"title": "Sphinx",\n"tags": ["javascript"],\n"date": "2016-07-15",\n"desc": "A very light JS library which could encode a string to an image, or decode an image to a string",\n"cover": "sphinx.png"\n}')]),e._v(" "),n("h1",[e._v("SphinxJS")]),e._v(" "),n("p",[e._v("A very light JS library which could encode a string to an image, or decode an image to a string.")]),e._v(" "),n("h2",[e._v("Usage")]),e._v(" "),n("p",[e._v("Install SphinxJS from npm")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("npm install sphinx.js\n")])]),e._v(" "),n("p",[e._v("Use "),n("code",{pre:!0},[e._v("<script><\/script>")]),e._v(" tags")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v('<script src="sphinx.js"><\/script>\n')])]),e._v(" "),n("blockquote",[n("p",[e._v("Mind that "),n("code",{pre:!0},[e._v("SphinxJS")]),e._v(" uses ES2015 "),n("code",{pre:!0},[e._v("Promise")]),e._v(" and other amazing features, which means that it requires your browser's support.\nIf not, you might use 'Babel' or something else to build your code.")])]),e._v(" "),n("blockquote",[n("p",[n("code",{pre:!0},[e._v("SphinxJS")]),e._v(" also supports "),n("code",{pre:!0},[e._v("AMD")]),e._v(", "),n("code",{pre:!0},[e._v("CommonJS")]),e._v(" and "),n("code",{pre:!0},[e._v("ES6 Modules")])])]),e._v(" "),n("h2",[e._v("Encode")]),e._v(" "),n("p",[e._v("Defined a string as "),n("code",{pre:!0},[e._v("Hello Sphinx!")]),e._v(", and we're going to encode it.")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("let base64URL = new Sphinx().encode('Hello Sphinx!')\n")])]),e._v(" "),n("p",[e._v("Then the "),n("code",{pre:!0},[e._v("base64URL")]),e._v(" is equal to")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAJklEQVQYV2P0SM35r8K1heE5owcDY2Zexf8dezYxcDIwMDAyIAEA7EYIq6UNAkYAAAAASUVORK5CYII=\n")])]),e._v(" "),n("p",[e._v(", the string information has encoded to an image successfully.")]),e._v(" "),n("p",[e._v("As you see, the "),n("code",{pre:!0},[e._v("encode()")]),e._v(" function returns a base64 url of an image.")]),e._v(" "),n("h2",[e._v("Decode")]),e._v(" "),n("p",[e._v("Defined an image url")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("let url = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAJklEQVQYV2P0SM35r8K1heE5owcDY2Zexf8dezYxcDIwMDAyIAEA7EYIq6UNAkYAAAAASUVORK5CYII=`\n")])]),e._v(" "),n("p",[e._v("Now decode it!")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("new Sphinx().decode(url)\n\t.then((info) => {\n\t\tconsole.log(info) // Hello Sphinx!\n\t})\n")])]),e._v(" "),n("p",[e._v("The "),n("code",{pre:!0},[e._v("decode()")]),e._v(" function returns a "),n("code",{pre:!0},[e._v("Promise")]),e._v(", which includes the string information decoded from the image.")]),e._v(" "),n("h2",[e._v("Config")]),e._v(" "),n("p",[e._v("The "),n("code",{pre:!0},[e._v("new Sphinx()")]),e._v(" could recieve a config object to select the type of the image it created.")]),e._v(" "),n("ul",[n("li",[e._v("config {Object} "),n("code",{pre:!0},[e._v("optional")]),e._v(" "),n("code",{pre:!0},[e._v("default: {img: 'png'}")])])]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("new Sphinx({img: 'bmp'})\n")])]),e._v(" "),n("h2",[e._v("License")]),e._v(" "),n("p",[e._v("MIT")])])}],a={render:o,staticRenderFns:r};t.a=a},Hmfk:function(e,t,n){"use strict";function o(e){n("OqAp")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("ZKa4"),a=n("c/6Q"),s=n("VU/8"),i=o,c=s(r.a,a.a,!1,i,null,null);t.default=c.exports},OqAp:function(e,t,n){var o=n("ophT");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("f3307972",o,!0)},PTVp:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("DSSN"),r=n("VU/8"),a=r(null,o.a,!1,null,null,null);t.default=a.exports},RQH1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("3X1G"),r=n("VU/8"),a=r(null,o.a,!1,null,null,null);t.default=a.exports},RUDb:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("p",[e._v('{\n"title": "Vue-Occupy",\n"tags": ["javascript", "vue", "tool"],\n"date": "2016-08-01",\n"desc": "A Vue directive for occupying content places before the data has been loaded",\n"cover": "vue-occupy.png"\n}')]),e._v(" "),n("h1",[e._v("Vue-Occupy")]),e._v(" "),n("p",[e._v("A Vue directive for occupying content places before the data has been loaded.")]),e._v(" "),n("p",[e._v("It's good for user experiment improving.")]),e._v(" "),n("h1",[e._v("Install")]),e._v(" "),n("p",[e._v("Using "),n("code",{pre:!0},[e._v("yarn")]),e._v(" or "),n("code",{pre:!0},[e._v("npm")]),e._v(" to install "),n("code",{pre:!0},[e._v("vue-occupy")]),e._v(":")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("# yarn\nyarn add vue-occupy\n\n# npm\nnpm install vue-occupy\n")])]),e._v(" "),n("h1",[e._v("Usage")]),e._v(" "),n("p",[e._v("In your "),n("code",{pre:!0},[e._v("main.js")]),e._v(" file:")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("import VueOccupy from 'vue-occupy'\n\nVue.use(VueOccupy)\n")])]),e._v(" "),n("p",[e._v("Now "),n("code",{pre:!0},[e._v("vue-occupy")]),e._v(" is a global Vue directive, you can use "),n("code",{pre:!0},[e._v("v-occupy")]),e._v(" in every "),n("code",{pre:!0},[e._v(".vue")]),e._v(" file.")]),e._v(" "),n("h1",[e._v("Params")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("param")]),e._v(" "),n("th",[e._v("type")]),e._v(" "),n("th",[e._v("description")]),e._v(" "),n("th",[e._v("necessary")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("data")]),e._v(" "),n("td",[e._v("{Object}")]),e._v(" "),n("td",[e._v("the data you bind to the node")]),e._v(" "),n("td",[e._v("Yes")])]),e._v(" "),n("tr",[n("td",[e._v("config")]),e._v(" "),n("td",[e._v("{Object}")]),e._v(" "),n("td",[e._v("the color lump's css config")]),e._v(" "),n("td",[e._v("No")])])])]),e._v(" "),n("p",[e._v("For example:")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("<template>\n  <div id=\"app\" style=\"width:200px;height:50px;\">\n    <div v-occupy=\"{ data: content, config }\"></div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      content: '',\n      config: {\n        width: '200px',\n        height: '18px',\n        background: '#ddd'\n      }\n    }\n  },\n  mounted () {\n    fetch(url).then((result) => {\n      this.content = result\n    })\n  }\n}\n<\/script>\n")])]),e._v(" "),n("p",[e._v("Before the "),n("code",{pre:!0},[e._v("fetch")]),e._v(" method has requested the result data, the "),n("code",{pre:!0},[e._v("div")]),e._v(" with "),n("code",{pre:!0},[e._v('v-occupy="{ data: content, config }"')]),e._v(" would be occupying by a rectangle color lump. Once the data was loaded, the attribute "),n("code",{pre:!0},[e._v("content")]),e._v(" would be updated and be rendered into the html.")]),e._v(" "),n("p",[n("strong",[e._v("Note")]),e._v(": the default configuration of "),n("code",{pre:!0},[e._v("vue-occupy")]),e._v(" looks like below:")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v("{\n  width: 100%; \n  height: 100%; \n  background: #eee\n}\n")])]),e._v(" "),n("p",[e._v("And the note with "),n("code",{pre:!0},[e._v("v-occupy")]),e._v(" will be like this:")]),e._v(" "),n("pre",{pre:!0,attrs:{class:"hljs"}},[n("code",{attrs:{"v-pre":""}},[e._v('<div v-occupy="{ data: content, config }">\n  <div style="width: 100%; height: 100%; background: #eee;></div>\n</div>\n')])]),e._v(" "),n("p",[e._v("Which means your "),n("strong",[e._v("must")]),e._v(" set the exactly "),n("code",{pre:!0},[e._v("width")]),e._v(" and "),n("code",{pre:!0},[e._v("height")]),e._v(" attribute in the note with "),n("code",{pre:!0},[e._v("v-occupy")]),e._v(", or overwrite the default configuration by binding "),n("code",{pre:!0},[e._v("config")]),e._v(" attribute. What's more, attributes like "),n("code",{pre:!0},[e._v("marginTop")]),e._v(" or "),n("code",{pre:!0},[e._v("paddingRight")]),e._v(" are illegal, you should write in "),n("code",{pre:!0},[e._v("'margin-top': '10px'")]),e._v(" or "),n("code",{pre:!0},[e._v("'padding-right': '10px'")]),e._v(" instead.")]),e._v(" "),n("h1",[e._v("Lisence")]),e._v(" "),n("p",[e._v("MIT")])])}],a={render:o,staticRenderFns:r};t.a=a},SnJr:function(e,t,n){e.exports=n.p+"static/img/motto.8ba9b74.png"},ZKa4:function(e,t,n){"use strict";var o=n("Dd8w"),r=n.n(o),a=n("NYxO"),s=n("7+uW");t.a={computed:r()({},Object(a.c)(["allArticles","recArticles"]),{curArticle:function(){return{index:1,all:this.recArticles.length,name:this.recArticles[0].name}}}),components:{"v-article":function(){return new Promise(function(e){e()}).then(n.bind(null,"ablj"))}},methods:{},created:function(){0==this.allArticles.length&&this.$store.dispatch("getArticles")},mounted:function(){var e=n("ggjK")("./"+this.recArticles[0].name);console.log(e);var t=s.default.extend(e);console.log(t),new t({el:"#home-article"})}}},ablj:function(e,t,n){e.exports=n("PTVp")},buyA:function(e,t,n){e.exports=n("RQH1")},"c/6Q":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"homelist",attrs:{id:"homelist"}},[n("v-article"),e._v(" "),n("div",{attrs:{id:"home-article"}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.recArticles.length>1,expression:"recArticles.length > 1"}],staticClass:"homelist__nextarticle"},[n("el-button",{attrs:{type:"primary",round:""}},[n("router-link",{attrs:{to:"/articles"}},[e._v("查看更多")])],1)],1)],1)},r=[],a={render:o,staticRenderFns:r};t.a=a},gMxc:function(e,t,n){e.exports=n("D4aY")},ggjK:function(e,t,n){function o(e){return n(r(e))}function r(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./articles":"sQeB","./articles.json":"sQeB","./imgs/markcook.png":"/g0O","./imgs/motto.png":"SnJr","./imgs/scion.png":"zNBv","./imgs/sphinx.png":"nWWG","./imgs/vue-occupy.png":"7EMz","./scion.md":"buyA","./sphinx.md":"ablj","./vue-occupy.md":"gMxc"};o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="ggjK"},nWWG:function(e,t,n){e.exports=n.p+"static/img/sphinx.0ea2e39.png"},ophT:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,".homelist{padding-bottom:20px}.homelist__pagination{margin:0 auto;text-align:center}.homelist__pagination .el-pager .active{background-color:#00adb5;border-color:#00adb5}.homelist__nextarticle{margin:0 auto;text-align:center}.homelist__nextarticle .el-button{padding:15px;background-color:#00adb5;border-color:#00adb5;font-size:1em}","",{version:3,sources:["C:/Users/admin/Desktop/blog/src/views/Homelist.vue"],names:[],mappings:"AAEA,UACE,mBAAqB,CACtB,AACD,sBACE,cAAe,AACf,iBAAmB,CACpB,AACD,wCACI,yBAA0B,AAC1B,oBAAsB,CACzB,AACD,uBACE,cAAe,AACf,iBAAmB,CACpB,AACD,kCACI,aAAc,AACd,yBAA0B,AAC1B,qBAAsB,AACtB,aAAe,CAClB",file:"Homelist.vue",sourcesContent:["/* mixins */\n/* variables */\n.homelist {\n  padding-bottom: 20px;\n}\n.homelist__pagination {\n  margin: 0 auto;\n  text-align: center;\n}\n.homelist__pagination .el-pager .active {\n    background-color: #00ADB5;\n    border-color: #00ADB5;\n}\n.homelist__nextarticle {\n  margin: 0 auto;\n  text-align: center;\n}\n.homelist__nextarticle .el-button {\n    padding: 15px;\n    background-color: #00ADB5;\n    border-color: #00ADB5;\n    font-size: 1em;\n}\n"],sourceRoot:""}])},zNBv:function(e,t,n){e.exports=n.p+"static/img/scion.39da94f.png"}});
//# sourceMappingURL=1.d8cab43ff3c8b5b4a0f7.js.map