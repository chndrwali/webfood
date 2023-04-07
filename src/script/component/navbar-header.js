import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/logo.jpg';

class NavbarHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .brand-icon {
        width: 50px;
        border-radius: 15px;
      }
      .navbar .navbar-brand {
        font-size: 2rem;
        margin-right: 8rem;
      }
      
      .navbar .nav-item {
        margin-left: 2rem;
      }
      
      .navbar-nav .nav-sidebar-item {
        font-size: 0.8rem;
        margin-top: 0.5rem;
      }
       </style>
        <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand brand-icon" href="#"> <img src="${logo}" alt="LazFood" width="30" height="24" /> LazFood </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Menu</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Resep </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Nasi Goreng</a></li>
                    <li><a class="dropdown-item" href="#">Ayam Bakar</a></li>
                    <li><a class="dropdown-item" href="#">Pecel Lele</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Tips & Trick</a>
                </li>
              </ul>
              <button type="button" class="btn btn-light rounded-pill">Login</button>
              <button type="button" class="btn btn-dark rounded-pill">Sign Up</button>
            </div>
          </div>
        </nav>
      </header>`;
  }
}

customElements.define('navbar-header', NavbarHeader);
