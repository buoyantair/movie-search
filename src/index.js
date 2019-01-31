import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Search from "./search";
import MoviesList from "./MoviesList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  searchMovies(term) {
    return new Promise((resolve, reject) => {
      fetch(`https://www.omdbapi.com/?s=${term}&apikey=f470bab7`)
        .then(data => data.json())
        .then(({ Search }) => {
          this.setState(
            {
              results: Search
            },
            resolve
          );
        })
        .catch(reject);
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Search Movies</h1>
          <p>
            Search movies from <i>The Open Movie Database</i>
          </p>
        </header>
        <Search searchMovies={this.searchMovies.bind(this)} />
        <MoviesList moviesList={this.state.results} />
        <footer>
          made by <a href="https://github.com/buoyantair">@buoyantair</a>
          <br />
          data from <a href="https://www.omdbapi.com/">OMDb API</a>
        </footer>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
