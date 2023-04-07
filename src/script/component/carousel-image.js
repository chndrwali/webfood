import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Ciken from '../../assets/images/chiken.jpg';
import Rito from '../../assets/images/roti.jpg';
import Beef from '../../assets/images/beef-sunday.jpg';

class CarouselImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = ` 
        <style>
        .carousel-item.active {
            height: 50vh;
          }
          
          .carousel-caption.d-none.d-md-block {
            color: mintcream;
          }
          
          img.d-block.w-100 {
            height: 60vh;
          }
          </style>
        <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${Ciken}" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Chicken Handi</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="${Rito}" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Roti</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="${Beef}" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Beef Sunday</h5>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`;
  }
}

customElements.define('carousel-image', CarouselImage);
