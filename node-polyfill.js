// Polyfill missing Node 20+ features for Node 18 environments (undici v7 / mcp-remote compatibility)
if (typeof globalThis.File === 'undefined') {
  try {
    globalThis.File = require('node:buffer').File;
  } catch (_) {}
}

if (typeof String.prototype.toWellFormed === 'undefined') {
  String.prototype.toWellFormed = function() {
    return this.toString();
  };
}

if (typeof String.prototype.isWellFormed === 'undefined') {
  String.prototype.isWellFormed = function() {
    return true;
  };
}
