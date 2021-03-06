var app  = require(__dirname + '/../app.js'),
config = require(__dirname + '/../config.js');
var http = require('http');
var assert = require("assert");
var request = require('supertest');
var require = require('really-need');

var port = config.server_port;
console.log(port);


describe('app', function () {
  it('server port should be listen on 80', function(){
     assert.equal(port, 80);
   })
});

describe('GET /', function(){
  it('respond with html', function(done){
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /html/)
      .expect(200, done);
  })
});
/*
describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require(__dirname + '/../app.js', { bustCache: true });
  });
  afterEach(function (done) {
    server.close(done);
    setTimeout(done, 1000);
  });
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });

  it('404 everything else', function testPath(done) {
    request(server)
      .get('/index2')
      .expect(404, done);
  });
});*/
