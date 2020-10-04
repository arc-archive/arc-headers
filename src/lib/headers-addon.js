import addon from './HeadersAddon.js';

/* global CodeMirror */
if (window.CodeMirror) {
  CodeMirror.defineMode('http-headers', addon);
  CodeMirror.defineMIME('message/http-headers', 'http-headers');
}
