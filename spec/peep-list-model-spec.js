describe('PeepList', function() {

  var peeplist;

  beforeEach(function() {
  peeplist = new PeepList();
  peep1 = new Peep("Bangalore");
  peep2 = new Peep("Pathfinder")
  });

  it('displays a list of peeps', function() {
    expect(peeplist.showPeeps()).toContain(peep1)
    expect(peeplist.showPeeps()).toContain(peep2)
  })
})
