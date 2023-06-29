/* eslint-disable no-undef */
const Assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('Showing empty favorite restaurant', async ({ I }) => {
  I.seeElement('.favoriteNull');
  I.see('You don\'t have any favorite restaurant yet');
});

Scenario('Do favorite to one of the restaurants', async ({ I }) => {
  I.see('You don\'t have any favorite restaurant yet');

  I.amOnPage('');

  I.seeElement('.card h3 a.name');
  const FirstRestaurant = locate('.card h3 a.name').first();
  const FirstRestaurantTitle = await I.grabTextFrom(FirstRestaurant);
  I.click(FirstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('.card');
  const LikedRestaurantTitle = await I.grabTextFrom('.name');

  Assert.strictEqual(FirstRestaurantTitle, LikedRestaurantTitle);
});

Scenario('Do unfavorite to one of the restaurants', async ({ I }) => {
  I.see('You don\'t have any favorite restaurant yet');

  I.amOnPage('');

  I.seeElement('.card h3 a.name');
  const FirstRestaurant = locate('.card h3 a.name').first();
  const FirstRestaurantTitle = await I.grabTextFrom(FirstRestaurant);
  I.click(FirstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('.card');
  const LikedRestaurantTitle = await I.grabTextFrom('.name');

  Assert.strictEqual(FirstRestaurantTitle, LikedRestaurantTitle);

  // unfavorit
  I.amOnPage('#/favorite');

  I.seeElement('.card h3 a.name');
  const FavoriteRestaurant = locate('.card h3 a.name').first();
  I.click(FavoriteRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('.favoriteNull');
});
