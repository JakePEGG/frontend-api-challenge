describe ('Peep', function(){
  var testpeep;

  beforeEach(function() {
    testpeep = new Peep("testingpeep")
  });

  it('creates a peep', function() {
    expect(testpeep.getPeeps()).toEqual("testingpeep");
  });
});
