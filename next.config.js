const fs = require('fs');
const db = fs.readFileSync('./songs.sqlite');

module.exports = {
  serverRuntimeConfig: {
    db
  },
  images: {
    domains: ['i.scdn.co', 'd36ai2hkxl16us.cloudfront.net']
  }
};
