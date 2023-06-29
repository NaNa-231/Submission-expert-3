import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const FavoritePage = {
  async render() {
    return `
    <section>
      <h1 class="resto-title" id="maincontent" tabindex="0">Find Best Restaurant</h1>
      <div class="list-resto"></div>
    </section>
      `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const cardsContainer = document.querySelector('.list-resto');
    restaurants.forEach((restaurant) => {
      cardsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};
export default FavoritePage;
