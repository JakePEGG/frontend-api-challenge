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


// describe("Peep", function() {
//   var peep1;
//
//   beforeEach(function() {
//     peep1 = new Peep(id = 911,
//     body = "test peep",
//     created_at = "2019-02-24T20:20:20.757Z",
//     updated_at = "2019-02-24T21:21:21.757Z",
//     user_id = 1,
//     user_handle = "JakePEG",
//     likes = 10 );
//   });
//
//   it("should be able to create a peep instance", function() {
//     expect(peep1 instanceof Peep).toBe(true);
//   });
//
//   it("should be able to create a peep with correct parameters", function() {
//     expect(peep1.id).toEqual(911);
//     expect(peep1.body).toEqual("test peep");
//     expect(peep1.created_at).toContain("2019-02-24" && "20:20:20");
//     expect(peep1.updated_at).toContain("2019-02-24" && "21:21:21");
//     expect(peep1.user_id).toEqual(1);
//     expect(peep1.user_handle).toEqual("JakePEG");
//     expect(peep1.likes).toEqual(10);
//   });
//
//   it("should be able to view peep id", function() {
//     expect(peep1.getPeepId()).toEqual(peep1.id);
//   });
//
//   it("should be able to view peep body", function() {
//     expect(peep1.getPeepBody()).toEqual(peep1.body);
//   });
//
//   it("should be able to view peep creation date", function() {
//     expect(peep1.getPeepCreatedAt()).toEqual(peep1.created_at);
//   });
//
//   it("should be able to view peep updated date", function() {
//     expect(peep1.getPeepUpdatedAt()).toEqual(peep1.updated_at);
//   });
//
//   it("should be able to view peep user id", function() {
//     expect(peep1.getPeepUserId()).toEqual(peep1.user_id);
//   });
//
//   it("should be able to view peep user handle", function() {
//     expect(peep1.getPeepUserHandle()).toEqual(peep1.user_handle);
//   });
//
//   it("should be able to view peep likes", function() {
//     expect(peep1.getPeepLikes()).toEqual(peep1.likes);
//   });
//
// });
