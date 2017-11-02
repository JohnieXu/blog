webpackJsonp([8],{DSSN:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",[r("p",[e._v('{\n"title": "Sphinx",\n"tags": ["javascript"],\n"date": "2016-07-15",\n"desc": "A very light JS library which could encode a string to an image, or decode an image to a string",\n"cover": "sphinx.png"\n}')]),e._v(" "),r("h1",[e._v("SphinxJS")]),e._v(" "),r("p",[e._v("A very light JS library which could encode a string to an image, or decode an image to a string.")]),e._v(" "),r("h2",[e._v("Usage")]),e._v(" "),r("p",[e._v("Install SphinxJS from npm")]),e._v(" "),r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}},[e._v("npm install sphinx.js\n")])]),e._v(" "),r("p",[e._v("Use "),r("code",{pre:!0},[e._v("<script><\/script>")]),e._v(" tags")]),e._v(" "),r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}},[e._v('<script src="sphinx.js"><\/script>\n')])]),e._v(" "),r("blockquote",[r("p",[e._v("Mind that "),r("code",{pre:!0},[e._v("SphinxJS")]),e._v(" uses ES2015 "),r("code",{pre:!0},[e._v("Promise")]),e._v(" and other amazing features, which means that it requires your browser's support.\nIf not, you might use 'Babel' or something else to build your code.")])]),e._v(" "),r("blockquote",[r("p",[r("code",{pre:!0},[e._v("SphinxJS")]),e._v(" also supports "),r("code",{pre:!0},[e._v("AMD")]),e._v(", "),r("code",{pre:!0},[e._v("CommonJS")]),e._v(" and "),r("code",{pre:!0},[e._v("ES6 Modules")])])]),e._v(" "),r("h2",[e._v("Encode")]),e._v(" "),r("p",[e._v("Defined a string as "),r("code",{pre:!0},[e._v("Hello Sphinx!")]),e._v(", and we're going to encode it.")]),e._v(" "),r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}},[e._v("let base64URL = new Sphinx().encode('Hello Sphinx!')\n")])]),e._v(" "),r("p",[e._v("Then the "),r("code",{pre:!0},[e._v("base64URL")]),e._v(" is equal to")]),e._v(" "),r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}},[e._v("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAJklEQVQYV2P0SM35r8K1heE5owcDY2Zexf8dezYxcDIwMDAyIAEA7EYIq6UNAkYAAAAASUVORK5CYII=\n")])]),e._v(" "),r("p",[e._v(", the string information has encoded to an image successfully.")]),e._v(" "),r("p",[e._v("As you see, the "),r("code",{pre:!0},[e._v("encode()")]),e._v(" function returns a base64 url of an image.")]),e._v(" "),r("h2",[e._v("Decode")]),e._v(" "),r("p",[e._v("Defined an image url")]),e._v(" "),r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}},[e._v("let url = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAJklEQVQYV2P0SM35r8K1heE5owcDY2Zexf8dezYxcDIwMDAyIAEA7EYIq6UNAkYAAAAASUVORK5CYII=`\n")])]),e._v(" "),r("p",[e._v("Now decode it!")]),e._v(" "),r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}},[e._v("new Sphinx().decode(url)\n\t.then((info) => {\n\t\tconsole.log(info) // Hello Sphinx!\n\t})\n")])]),e._v(" "),r("p",[e._v("The "),r("code",{pre:!0},[e._v("decode()")]),e._v(" function returns a "),r("code",{pre:!0},[e._v("Promise")]),e._v(", which includes the string information decoded from the image.")]),e._v(" "),r("h2",[e._v("Config")]),e._v(" "),r("p",[e._v("The "),r("code",{pre:!0},[e._v("new Sphinx()")]),e._v(" could recieve a config object to select the type of the image it created.")]),e._v(" "),r("ul",[r("li",[e._v("config {Object} "),r("code",{pre:!0},[e._v("optional")]),e._v(" "),r("code",{pre:!0},[e._v("default: {img: 'png'}")])])]),e._v(" "),r("pre",{pre:!0,attrs:{class:"hljs"}},[r("code",{attrs:{"v-pre":""}},[e._v("new Sphinx({img: 'bmp'})\n")])]),e._v(" "),r("h2",[e._v("License")]),e._v(" "),r("p",[e._v("MIT")])])}],s={render:n,staticRenderFns:o};t.a=s},PTVp:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("DSSN"),o=r("VU/8"),s=o(null,n.a,!1,null,null,null);t.default=s.exports},ablj:function(e,t,r){e.exports=r("PTVp")}});
//# sourceMappingURL=8.028c9f2f3818e2db878c.js.map