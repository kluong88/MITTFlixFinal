import React from "react";
import Movie from "./Movie";
import MyList from "./MyList";
import * as MovieAPI from "./MovieAPI";
import { Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],
    myList: [],
    genres: [],
  };

  componentDidMount = () => {
    MovieAPI.getAll().then((movies) => {
      this.setState({ movies });
    });
  };

  toggleMyList = (props) => {
    console.log(props.movie.my_list);
    if (props.movie.my_list) {
      MovieAPI.removeFromList(props.movie);
    } else {
      MovieAPI.addToList(props.movie);
    }
    MovieAPI.getAll().then((movies) => {
      this.setState({ movies });
    });
  };

  render = () => {
    return (
      <>
        {/* <Switch>
          <Route exact path="/"> */}
        <header className="header">
          <a href="/">
            <img
              src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
              alt="netflix-font"
              border="0"
            />
          </a>
          <div id="navigation" className="navigation">
            <nav>
              <ul>
                <li>
                  <Link to="/mylist">My List</Link>
                </li>
              </ul>
            </nav>
          </div>
          <form id="search" className="search">
            <input type="search" placeholder="Search for a title..." value="" />
            <div className="searchResults"></div>
          </form>
        </header>
        {/* </Route>
        </Switch> */}

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
      </>
    );
  };
}

export default App;
