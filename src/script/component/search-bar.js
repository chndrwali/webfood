import 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>   
      .search-container {
          max-width: 400px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 16px;
          border-radius: 5px;
          display: flex;
          top: 10px;
          background-color: white;
        }
         
        .search-container > input {
          width: 75%;
          padding: 16px;
          border: 0;
          border-bottom: 1px solid black;
          font-weight: bold;
        }
         
        .search-container > input:focus {
          outline: 0;
          border-bottom: 2px solid black;
        }
         
        .search-container > input:focus::placeholder {
          font-weight: bold;
        }
         
        .search-container > input::placeholder {
          color: black;
          font-weight: normal;
        }
         
        .search-container > button {
          width: 23%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          background-color: black;
          color: white;
          border: 0;
          text-transform: uppercase;
        }
         
        @media screen and (max-width: 550px) {
          .search-container {
            flex-direction: column;
            position: static;
          }
         
          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }
         
          .search-container > button {
            width: 100%;
          }
        </style>
        <div id="search-container" class="search-container form-group mt-3 mb-3">
          <span class="fa fa-search placeholder-icon"></span>
          <input placeholder="Search Food" class="form-control-sm mr-2" id="searchElement" type="search" />
          <button class="btn btn-dark" id="searchButtonElement" type="submit">Search</button>
        </div>
        <div id="foodList"></div>`;
  }
}

customElements.define('search-bar', SearchBar);
