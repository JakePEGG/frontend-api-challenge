function isaPeepView() {
  let constructor_name = "PeepListView"
  let peeplistview = new PeepListView();
  assert.isTrue(peeplistview.__proto__.constructor.name === constructor_name)
};
  isaPeepView();
