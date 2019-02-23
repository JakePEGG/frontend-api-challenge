(function(exports) {
  function PeepList(){
    this.PeepList = [];
  };

})(this);



var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://chitter-backend-api.herokuapp.com/peeps");

xhr.send(data);
