import 'bootstrap/dist/css/bootstrap.min.css';

class FooterGoks extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style> 
    .footer {
        background-color: #000;
        padding: 20px;
        text-align: center;
        color: #fff;
    </style>
    <footer class="footer mt-auto py-3">
    <div class="container">
     <span>Submission Fundamental Front End &#169; 2023, Candra Wali Sanjaya</span> 
     </div>
     </footer>`;
  }
}

customElements.define('footer-goks', FooterGoks);
