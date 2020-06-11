import React from "react";

class Search extends React.Component {
  state = {
    searchField: "",
  };

  updateSearchField = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render = () => {
    return (
      <form id="search" className="search">
        <input
          onChange={this.updateSearchField}
          type="search"
          placeholder="Search for a title..."
          value={this.state.searchField}
        />
        <div className="searchResults"></div>
      </form>
    );
  };
}

export default Search;
