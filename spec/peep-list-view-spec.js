function isaPeepView() {
  let constructor_name = "PeepListView"
  let peeplistview = new PeepListView();
  assert.isTrue(peeplistview.__proto__.constructor.name === constructor_name)
};
  isaPeepView();

  function displayPeepList() {
    let peeplist = new PeepList();
    let peeplistview = new PeepListView(peeplist)
    let peep = new Peep("Deadlift")
    peeplist.addPeep(peep)
    assert.isTrue(peeplistview.getHTML() === ("<ul>", "<li><div>Deadlift</div></li>", "</ul>"))
  };
  displayPeepList();
