import { async } from 'regenerator-runtime';
import { API_URL } from './config.JS';
import { getJSON } from './helper';

export const states = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    //eeeeeeeeeeeeeee//
    const { recipe } = data.data;
    states.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    // console.error(err);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    states.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    states.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
    // console.log(states.search.results);
  } catch (err) {
    // console.error(err);
    throw err;
  }
};
loadSearchResults('pizza');
