function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// HTTP - GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  let self = this;

  self.http.onload = function() {
    if (self.http.status === 200) {
        // console.log(self.http.responseText);
        callback(null, self.http.responseText);
    } else {
        callback("Error: "+self.http.status);
    }
  }

  self.http.send();
};
// HTTP - POST Request

// HTTP - PUT Request

// HTTP - DELETE Request
