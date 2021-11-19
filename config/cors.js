// whitelist of urls that allow to make api calls to your api 
var whitelist = ['http://example1.com', 'http://example2.com']
// checks that the url coming in is one of those urls 
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

module.exports = corsOptions