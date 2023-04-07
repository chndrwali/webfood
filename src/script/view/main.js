import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('#searchElement');
  const buttonSearchElement = document.querySelector('#searchButtonElement');
  const foodListElement = document.querySelector('#foodList');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.getFoodByKeyword(searchElement.value);
      renderResult(result);
    } catch (error) {
      fallbackResult(error.message);
    }
  };

  const renderResult = (results) => {
    foodListElement.innerHTML = '';
    results.forEach((food) => {
      const foodElement = document.createElement('div');
      foodElement.setAttribute('class', 'food');

      foodElement.innerHTML = `
        <img class="food-image" src="${food.strMealThumb}" alt="Food Image"> 
        <div class="food-info">
          <h2>${food.strMeal}</h2>
          <p>${food.strInstructions}</p>
        </div>`;
      foodListElement.appendChild(foodElement);
    });
  };

  const fallbackResult = (message) => {
    foodListElement.innerHTML = '';
    foodListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};

export default main;
