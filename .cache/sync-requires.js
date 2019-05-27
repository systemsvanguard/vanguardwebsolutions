const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-tag-template-js": hot(preferDefault(require("C:\\worx\\vanguardwebsolutions\\src\\templates\\tag-template.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("C:\\worx\\vanguardwebsolutions\\src\\templates\\blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\worx\\vanguardwebsolutions\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\worx\\vanguardwebsolutions\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\worx\\vanguardwebsolutions\\src\\pages\\about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\worx\\vanguardwebsolutions\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\worx\\vanguardwebsolutions\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\worx\\vanguardwebsolutions\\src\\pages\\page-2.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("C:\\worx\\vanguardwebsolutions\\src\\pages\\portfolio.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("C:\\worx\\vanguardwebsolutions\\src\\pages\\services.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("C:\\worx\\vanguardwebsolutions\\src\\pages\\tags.js")))
}

