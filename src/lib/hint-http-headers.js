import { getHints } from './HintHttpHeaders.js';
/* global CodeMirror */
if (window.CodeMirror) {
  CodeMirror.registerHelper('hint', 'http-headers', getHints);
}
