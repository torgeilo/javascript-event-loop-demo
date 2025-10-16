// Make JavaScript highlighting available for use on the page.

import core from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

core.registerLanguage("javascript", javascript);

window.highlight = (code) => core.highlight(code, { language: "javascript" }).value;
