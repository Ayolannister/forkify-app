class SearchView {
  _parentElement = document.querySelector('.search');

  _clearcont() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearcont();
    return query;
  }
  addhandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault(), handler();
    });
  }
}
export default new SearchView();
