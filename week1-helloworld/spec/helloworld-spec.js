var request = require("request");
var helloWorld = require("../helloworld.js");

describe("Hello World server testing", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get("http://localhost:8000/", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Hello World");
        done();
      });
    });
  });
});
