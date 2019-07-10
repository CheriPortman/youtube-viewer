import React, { Component } from 'react';

class SearchBar extends Component {
  state = { searchParam: '' };

  onChange = (event) => {
    this.setState({ searchParam: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchParam);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Search Parameter</label>
        <input 
          type="text"
          value={this.state.searchParam}
          onChange={this.onChange}
        />
      </form>
    );
  }
}

export default SearchBar;
