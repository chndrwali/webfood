import 'bootstrap/dist/css/bootstrap.min.css';

class FoodMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style> 
    .food-card {
        margin-bottom: 20px;
      }
      
      .food-card img {
        max-width: 100%;
        height: auto;
      }
      
      .food-card h3 {
        margin-top: 10px;
      }
      </style>
        <div id="foodList"></div>
        <div class="container mt-5">
          <h1 class="text-center">Menu Makanan</h1>
          <div class="row" id="foodContainer"></div>
        </div>
        `;

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then((data) => {
        const foods = data.meals;
        const foodContainer = this.querySelector('#foodContainer');

        foods.forEach((food) => {
          const foodCard = document.createElement('div');
          foodCard.className = 'col-sm-6 col-md-4 col-lg-3 food-card';

          const foodImage = document.createElement('img');
          foodImage.src = food.strMealThumb;
          foodCard.appendChild(foodImage);

          const foodName = document.createElement('h3');
          foodName.textContent = food.strMeal;
          foodCard.appendChild(foodName);

          foodCard.addEventListener('click', () => {
            window.location.href = `https://www.themealdb.com/meal/${food.idMeal}`;
          });

          foodContainer.appendChild(foodCard);
        });
      })
      .catch((error) => {
        console.error('Terjadi Kesalahan:', error);
      });
  }
}

customElements.define('food-menu', FoodMenu);
