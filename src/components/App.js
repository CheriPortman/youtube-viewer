import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';


class App extends Component {
  onSearchSubmit = searchParam => {
  console.log(searchParam)
    youtube.get('/search', {
      params: {
        q: searchParam
      }
    });
  };


  render() {
    return (
      <SearchBar onFormSubmit={this.onSearchSubmit}/>
    )
  }
}

export default App;
