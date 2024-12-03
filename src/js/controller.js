import * as model from './model.js';
import recipeview from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

const recipeReq = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    if (!id) return;

    recipeview.renderspinner();

    await model.loadRecipe(id);

    recipeview.render(model.states.recipe);

    console.log(id);
  } catch (err) {
    // alert(err);
    recipeview.renderError();
  }
};

const ControlsearchResults = async function () {
  try {
    // resultsView.renderspinner();
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    resultsView.render(model.states.search.results);
  } catch (err) {
    console.error(err);
  }
};
ControlsearchResults();

// recipeReq();
const init = function () {
  recipeview.addEventHandler(recipeReq);
  searchView.addhandlerSearch(ControlsearchResults);
};
init();
