(function(exports) {
  function PeepListView(peeplist){
    this.peeplist = peeplist;
  };



PeepListView.prototype.getHTML = function(peeplist){
  var peeparray = this.peeplist.showPeeps();
  var newpeeparray = [];
  for(var i = 0; i < peeparray.length; i++) {
    newpeeparray.push(`<li><div>${peeparray[i].text}</div></li>`);
  }
  newpeeparray.unshift("<ul>");
  newpeeparray.push("</ul>");
  console.log(newpeeparray)
  return newpeeparray.join("");

};

exports.PeepListView = PeepListView;
})(this);
