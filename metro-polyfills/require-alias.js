// Polyfill to provide 'require' function that works with both module IDs and module paths
// This is needed because some packages (like web-streams-polyfill) use 'require'
// directly with module path strings instead of Metro's transformed require with IDs
(function(global) {
  'use strict';

  // Create a map of common babel runtime helpers that might be needed
  // These are inlined to avoid the circular dependency issue
  var babelHelpers = {
    defineProperty: function(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    },
    classCallCheck: function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    },
    createClass: function(Constructor, protoProps, staticProps) {
      if (protoProps) {
        for (var i = 0; i < protoProps.length; i++) {
          var descriptor = protoProps[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(Constructor.prototype, descriptor.key, descriptor);
        }
      }
      if (staticProps) {
        for (var j = 0; j < staticProps.length; j++) {
          var desc = staticProps[j];
          desc.enumerable = desc.enumerable || false;
          desc.configurable = true;
          if ("value" in desc) desc.writable = true;
          Object.defineProperty(Constructor, desc.key, desc);
        }
      }
      return Constructor;
    },
    interopRequireDefault: function(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  };

  // Module name to helper mapping
  var helperMap = {
    '@babel/runtime/helpers/defineProperty': babelHelpers.defineProperty,
    '@babel/runtime/helpers/classCallCheck': babelHelpers.classCallCheck,
    '@babel/runtime/helpers/createClass': babelHelpers.createClass,
    '@babel/runtime/helpers/interopRequireDefault': babelHelpers.interopRequireDefault
  };

  if (typeof global.require === 'undefined' && typeof global.__r !== 'undefined') {
    global.require = function(moduleId) {
      // If it's a string that looks like a babel helper path, return the inlined helper
      if (typeof moduleId === 'string') {
        if (helperMap[moduleId]) {
          return helperMap[moduleId];
        }
        // For other string paths, this will fail but provide a better error
        console.warn('[require-alias] Attempting to require by path: ' + moduleId);
      }
      // Fall back to Metro's __r for numeric IDs
      return global.__r(moduleId);
    };
  }
})(typeof globalThis !== 'undefined' ? globalThis : typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this);
