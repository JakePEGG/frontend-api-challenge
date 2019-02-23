(function(exports) {
  function Peep(text){
    this.text = text;
  };

  Peep.prototype.getPeeps = function() {
    return this.text
  };

  exports.Peep = Peep;
})(this);
