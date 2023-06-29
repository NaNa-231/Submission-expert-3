import RestaurantDbSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
    
    
      
        <section class="restaurant">
          <h1 class="resto-title" id="maincontent" tabindex="0">Find Restaurant</h1>
          <div class="list-resto"></div>
        </section>
      `;
  },
  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurants();
    const itemsContainer = document.querySelector('.list-resto');
    restaurants.forEach((restaurant) => {
      itemsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};
export default HomePage;
