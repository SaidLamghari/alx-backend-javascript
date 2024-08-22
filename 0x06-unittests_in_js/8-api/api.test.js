// 8-api/api.test.js


const request = require('request');
const { expect } = require('chai');
const { exec } = require('child_process');

describe('Index page', function() {
  let server;

  before((done) => {
    server = exec('node api.js', (error) => {
      if (error) {
        console.error(`exec error: ${error}`);
        done(error);
      }
    });
    setTimeout(done, 1000); // wait for server to start
  });

  after((done) => {
    server.kill('SIGINT');
    done();
  });

  it('Correct status code?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // adddd
});

