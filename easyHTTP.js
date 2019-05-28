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
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type','application/json');

  let self = this;
  self.http.onload = function() {
    callback(null, self.http.responseText);
  }

  self.http.send(JSON.stringify(data));
}

// HTTP - PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;

  self.http.onload = function() {
    callback(null, self.http.responseText);
  }

  self.http.send(JSON.stringify(data));
}

// HTTP - DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  
  self.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'This post has been DELETED');
    } else {
      callback('Error: ' +self.http.status);
    }
  }

  self.http.send();
}
