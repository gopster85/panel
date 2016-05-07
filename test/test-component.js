describe('Component', function() {
  var el;

  before(function() {
    el = document.getElementById('test-app-fixture');
  });

  it('renders to the DOM when attached', function() {
    expect(el.children).to.have.lengthOf(1);
    expect(el.children[0].className).to.equal('foo');
  });

  it('injects default state into templates', function() {
    expect(el.textContent.trim()).to.equal('Value of foo: bar');
  });
});
