"use strict";

/* eslint-disable import/no-extraneous-dependencies */
var withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  redirects: function redirects() {
    return regeneratorRuntime.async(function redirects$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", [{
              source: '/',
              destination: '/home',
              permanent: false // Set to true if you want this redirect to be permanent

            }]);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  eslint: {
    dirs: ['.']
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true
});