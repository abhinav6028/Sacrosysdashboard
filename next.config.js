/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        const fs = require('fs');
        const path = require('path');
  
        const modules = ['echarts'];
  
        modules.forEach((module) => {
          config.resolve.alias[module] = path.resolve(__dirname, `node_modules/${module}`);
        });
      }
  
      return config;
    },
  };
  