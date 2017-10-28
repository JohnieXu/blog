webpackJsonp([13],{DSSN:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("p",[e._v('{\n"title": "Sphinx",\n"tags": ["javascript"],\n"date": "2016-07-15",\n"desc": "A very light JS library which could encode a string to an image, or decode an image to a string",\n"cover": "sphinx.png"\n}')]),e._v(" "),t("h1",[e._v("SphinxJS")]),e._v(" "),t("p",[e._v("A very light JS library which could encode a string to an image, or decode an image to a string.")]),e._v(" "),t("h2",[e._v("Usage")]),e._v(" "),t("p",[e._v("Install SphinxJS from npm")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("npm install sphinx.js\n")])]),e._v(" "),t("p",[e._v("Use "),t("code",{pre:!0},[e._v("<script><\/script>")]),e._v(" tags")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v('<script src="sphinx.js"><\/script>\n')])]),e._v(" "),t("blockquote",[t("p",[e._v("Mind that "),t("code",{pre:!0},[e._v("SphinxJS")]),e._v(" uses ES2015 "),t("code",{pre:!0},[e._v("Promise")]),e._v(" and other amazing features, which means that it requires your browser's support.\nIf not, you might use 'Babel' or something else to build your code.")])]),e._v(" "),t("blockquote",[t("p",[t("code",{pre:!0},[e._v("SphinxJS")]),e._v(" also supports "),t("code",{pre:!0},[e._v("AMD")]),e._v(", "),t("code",{pre:!0},[e._v("CommonJS")]),e._v(" and "),t("code",{pre:!0},[e._v("ES6 Modules")])])]),e._v(" "),t("h2",[e._v("Encode")]),e._v(" "),t("p",[e._v("Defined a string as "),t("code",{pre:!0},[e._v("Hello Sphinx!")]),e._v(", and we're going to encode it.")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("let base64URL = new Sphinx().encode('Hello Sphinx!')\n")])]),e._v(" "),t("p",[e._v("Then the "),t("code",{pre:!0},[e._v("base64URL")]),e._v(" is equal to")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAJklEQVQYV2P0SM35r8K1heE5owcDY2Zexf8dezYxcDIwMDAyIAEA7EYIq6UNAkYAAAAASUVORK5CYII=\n")])]),e._v(" "),t("p",[e._v(", the string information has encoded to an image successfully.")]),e._v(" "),t("p",[e._v("As you see, the "),t("code",{pre:!0},[e._v("encode()")]),e._v(" function returns a base64 url of an image.")]),e._v(" "),t("h2",[e._v("Decode")]),e._v(" "),t("p",[e._v("Defined an image url")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("let url = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAJklEQVQYV2P0SM35r8K1heE5owcDY2Zexf8dezYxcDIwMDAyIAEA7EYIq6UNAkYAAAAASUVORK5CYII=`\n")])]),e._v(" "),t("p",[e._v("Now decode it!")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("new Sphinx().decode(url)\n\t.then((info) => {\n\t\tconsole.log(info) // Hello Sphinx!\n\t})\n")])]),e._v(" "),t("p",[e._v("The "),t("code",{pre:!0},[e._v("decode()")]),e._v(" function returns a "),t("code",{pre:!0},[e._v("Promise")]),e._v(", which includes the string information decoded from the image.")]),e._v(" "),t("h2",[e._v("Config")]),e._v(" "),t("p",[e._v("The "),t("code",{pre:!0},[e._v("new Sphinx()")]),e._v(" could recieve a config object to select the type of the image it created.")]),e._v(" "),t("ul",[t("li",[e._v("config {Object} "),t("code",{pre:!0},[e._v("optional")]),e._v(" "),t("code",{pre:!0},[e._v("default: {img: 'png'}")])])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("new Sphinx({img: 'bmp'})\n")])]),e._v(" "),t("h2",[e._v("License")]),e._v(" "),t("p",[e._v("MIT")])])}],v={render:o,staticRenderFns:r};n.a=v},PTVp:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("DSSN"),r=t("VU/8"),v=r(null,o.a,!1,null,null,null);n.default=v.exports},ablj:function(e,n,t){e.exports=t("PTVp")}});
//# sourceMappingURL=13.249ea5cee437c8f2ad91.js.map