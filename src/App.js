import React from "react";
import Movie from "./Movie";
import Header from "./Header";
import * as MovieAPI from "./MovieAPI";
import { Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],
    genres: [],
    searchField: "",
  };

  componentDidMount = () => {
    MovieAPI.getAll().then((movies) => {
      this.setState({ movies });
    });

    MovieAPI.genres().then((genres) => {
      this.setState({ genres });
    });
  };

  toggleMyList = (props) => {
    if (props.movie.my_list) {
      MovieAPI.removeFromList(props.movie);
    } else {
      MovieAPI.addToList(props.movie);
    }
    MovieAPI.getAll().then((movies) => {
      this.setState({ movies });
    });
  };

  updateSearchField = (e) => {
    this.setState({ searchField: e.target.value });
    this.filterResults(this.state.searchField);
  };

  filterResults = (query) => {
    const filteredList = this.state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredList.length === 0) {
      MovieAPI.getAll().then((movies) => {
        this.setState({ movies });
      });
    } else {
      console.log(filteredList);
      this.setState({ movies: filteredList });
    }
  };

  render = () => {
    const myList = this.state.movies.filter((movie) => movie.my_list === true);

    return (
      <>
        <Route>
          <Header
            value={this.state.searchField}
            updateSearchField={this.updateSearchField}
            results={this.state.searchField}
          />

          <Switch>
            <Route exact path="/">
              <div className="titleList">
                <div className="title">
                  <h1>Action</h1>
                  <div className="titles-wrapper">
                    {this.state.movies.map((movie) => (
                      <Movie
                        movie={movie}
                        key={movie.id}
                        toggled={movie.my_list}
                        toggleMyList={this.toggleMyList}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Route>
            <Route exact path="/mylist">
              <div className="titleList">
                <div className="title">
                  <h1>My List</h1>
                  <div className="titles-wrapper">
                    {myList.map((movie) => (
                      <Movie
                        movie={movie}
                        key={movie.id}
                        toggled={movie.my_list}
                        toggleMyList={this.toggleMyList}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Route>
          </Switch>
        </Route>
      </>
    );
  };
}

export default App;
