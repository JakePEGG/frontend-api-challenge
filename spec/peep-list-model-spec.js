describe('PeepList', function() {
  var peeplist;
  var peep1;
  var peep2;

  beforeEach(function() {
  peeplist = new PeepList();
  peep1 = new Peep("Bangalore");
  peep2 = new Peep("Pathfinder");
  peeplist.addPeep(peep1);
  peeplist.addPeep(peep2);
  });

  it('displays a list of peeps', function() {
    expect(peeplist.showPeeps()).toContain(peep1);
    expect(peeplist.showPeeps()).toContain(peep2);
  });
});
