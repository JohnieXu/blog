webpackJsonp([8,18],{"1R4t":function(e,t,n){e.exports=n("pkrU")},HdpJ:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("undefined",[a("p",[e._v('{\n"title": "Scion",\n"tags": ["javascript", "nodejs"],\n"date": "2016-07-01",\n"desc": "A light tool to generate projects in an easy way",\n"cover": "scion.png"\n}')]),e._v(" "),a("p",[a("img",{attrs:{src:n("zNBv"),alt:"img"}})]),e._v(" "),a("h1",[e._v("SCION")]),e._v(" "),a("p",[e._v("A light tool to generate projects in an easy way.")]),e._v(" "),a("h1",[e._v("Installation")]),e._v(" "),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[e._v("npm install scion-cli -g\n")])]),e._v(" "),a("p",[e._v("or")]),e._v(" "),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[e._v("git clone https://github.com/jrainlau/scion.git\n\ncd scion && npm install\n\nnpm link\n")])]),e._v(" "),a("h1",[e._v("Usage")]),e._v(" "),a("p",[e._v("Open your terminal and type "),a("code",{pre:!0},[e._v("scion")]),e._v(" or "),a("code",{pre:!0},[e._v("scion -h")]),e._v(" , you'll see the help infomation below:")]),e._v(" "),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[e._v("  Usage: scion <command>\n\n\n  Commands:\n\n    add|a      Add a new template\n    list|l     List all the templates\n    init|i     Generate a new project\n    delete|d   Delete a template\n\n  Options:\n\n    -h, --help     output usage information\n    -V, --version  output the version number\n")])]),e._v(" "),a("blockquote",[a("p",[e._v("Note that if you are using "),a("code",{pre:!0},[e._v("MacOS")]),e._v(", "),a("code",{pre:!0},[e._v("sudo")]),e._v(" was required while using commands "),a("code",{pre:!0},[e._v("add")]),e._v(" and "),a("code",{pre:!0},[e._v("delete")]),e._v(".")])]),e._v(" "),a("h1",[e._v("Commands")]),e._v(" "),a("h3",[e._v("add | a")]),e._v(" "),a("p",[e._v("This command would help you to add a new template to the "),a("code",{pre:!0},[e._v("templates.json")]),e._v(", which will be used by "),a("code",{pre:!0},[e._v("Scion")]),e._v(" to generate projects.")]),e._v(" "),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[e._v("$ scion add\n\n? Set the custom name of the template: my-first-template\n? Owner/name of the template: jrainlau/scion\n? Branch of the template: new\n┌───────────────────┬────────────────┬────────┐\n│ Template Name     │ Owner/Name     │ Branch │\n├───────────────────┼────────────────┼────────┤\n│ my-first-template │ jrainlau/scion │ new    │\n└───────────────────┴────────────────┴────────┘\n✔ New template has been added successfully!\n")])]),e._v(" "),a("p",[a("code",{pre:!0},[e._v("Scion")]),e._v(" use "),a("a",{attrs:{href:"https://github.com/flipxfx/download-git-repo"}},[e._v("download-git-repo")]),e._v(" to down load git repos. After answering 3 questions, you'll add a new template to "),a("code",{pre:!0},[e._v("Scion")]),e._v(".")]),e._v(" "),a("h3",[e._v("list | l")]),e._v(" "),a("p",[e._v("It shows you the templates list.")]),e._v(" "),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[e._v("$ scion list\n\n┌────────────────────┬────────────────┬────────┐\n│ Template Name      │ Owner/Name     │ Branch │\n├────────────────────┼────────────────┼────────┤\n│ my-first-template  │ jrainlau/scion │ new    │\n├────────────────────┼────────────────┼────────┤\n│ my-second-template │ jrainlau/motto │ master │\n└────────────────────┴────────────────┴────────┘\n")])]),e._v(" "),a("h3",[e._v("init | i")]),e._v(" "),a("p",[e._v("After adding new templates, you could use this command to generate your own project by choosing template.")]),e._v(" "),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[e._v("$ scion init\n\n? Template name: my-first-template\n? Project name: my-project\n? Where to init the project? ../\n⠹ Downloading template...\n\nNew project has been initialized successfully!\n")])]),e._v(" "),a("p",[e._v("It's easy, right?")]),e._v(" "),a("h3",[e._v("delete | d")]),e._v(" "),a("p",[e._v("To delete a template, you could use this command:")]),e._v(" "),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[e._v("$ scion delete\n\n? Which template you want to delete? my-second-template\n┌───────────────────┬────────────────┬────────┐\n│ Template Name     │ Owner/Name     │ Branch │\n├───────────────────┼────────────────┼────────┤\n│ my-first-template │ jrainlau/scion │ new    │\n└───────────────────┴────────────────┴────────┘\n✔ Template has been deleted successfully\n")])]),e._v(" "),a("h1",[e._v("Template")]),e._v(" "),a("p",[e._v("The most important part of Scion is "),a("code",{pre:!0},[e._v("template")]),e._v(". All templates' infomation were list in the "),a("code",{pre:!0},[e._v("templates.json")]),e._v(".\nA template means a project sample, which has a simple or complex file structure.")]),e._v(" "),a("p",[e._v("You can create your own templates repository, and push your templates in different branches. All you need to do then is to add the templates into Scion's "),a("code",{pre:!0},[e._v("templates.json")]),e._v(".")]),e._v(" "),a("h1",[e._v("License")]),e._v(" "),a("p",[e._v("MIT.")])])},o=[],s={render:a,staticRenderFns:o};t.a=s},pkrU:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("HdpJ"),o=n("VU/8"),s=o(null,a.a,!1,null,null,null);t.default=s.exports},zNBv:function(e,t,n){e.exports=n.p+"static/img/scion.39da94f.png"}});
//# sourceMappingURL=8.35187562c2614ba523f3.js.map