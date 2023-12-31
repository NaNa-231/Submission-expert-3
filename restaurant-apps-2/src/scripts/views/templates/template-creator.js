import CONFIG from '../../globals/config';

const createRestoItemTemplate = (restaurant) => `
<div class="card">
<h2 class="city" tabindex="0">${restaurant.city}</h2>
<div class="card-detail">
document.body.innerHTML += <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="Restaurant in ${restaurant.city}" tabindex="0"><br>
    <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" class="card-img" alt='Restaurant in ${restaurant.city}' tabindex="0">
    <p class="rating" tabindex="0">Rating : ${restaurant.rating}</p>
    <h3 tabindex="0"><a  class="resto-name" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <p class="description-resto" tabindex="0">${restaurant.description}</p>
</div>
</div>
`;

const createRestoDetailTemplate = (restaurant) => `
      <div class="restaurants">
      <div class="restaurant-images">
        <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="photo of restaurant" class="restaurant-img"> 
      </div>
      <div class="detail-resto">
        <h2 class="restaurant-name">${restaurant.name}</h2>
          <p class="city">${restaurant.city}</p>
          <p class="address">${restaurant.address}</p>
          <br>
          <div class="detail-description-resto">
          <h3 class="description">${restaurant.description}</h3>
          </div>
      </div>
          <h3 class="title-menu">Menu</h3>
          <div class="menu">
            <div class="foods">
              <h4 class="foods-list">Foods</h4>
            </div>
            <div class="drinks">
              <h4 class="drinks-list">Drinks</h4>
            </div>
          </div>
          <h3 class="title-review">Customer Reviews</h3>
          <div class="customer-reviews"></div>
      </div>
    `;

const createFoodsTemplate = (foodsData) => {
  const foodsContainer = document.querySelector('.foods');

  foodsData.forEach((food) => {
    const createFood = document.createElement('p');
    createFood.innerHTML = food.name;
    foodsContainer.appendChild(createFood);
  });
};

const createDrinksTemplate = (drinksData) => {
  const drinksContainer = document.querySelector('.drinks');

  drinksData.forEach((drink) => {
    const createDrink = document.createElement('p');
    createDrink.innerHTML = drink.name;
    drinksContainer.appendChild(createDrink);
  });
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;



const createReviewsTemplate = (reviewsData) => {
  const reviewsContainer = document.querySelector('.customer-reviews');
  reviewsData.forEach((review) => {
    const createDiv = document.createElement('div');
    createDiv.classList.add('card-review');
    const createReviewer = document.createElement('h4');
    createReviewer.classList.add('reviewer');
    const createDate = document.createElement('p');
    createDate.classList.add('review-date');
    const createText = document.createElement('p');
    createText.classList.add('review-text');
    createReviewer.innerHTML = review.name;
    createDate.innerHTML = review.date;
    createText.innerHTML = `"${review.review}"`;
    createDiv.appendChild(createReviewer);
    createDiv.appendChild(createDate);
    createDiv.appendChild(createText);
    reviewsContainer.appendChild(createDiv);
  });
};

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createFoodsTemplate,
  createDrinksTemplate,
  createReviewsTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
