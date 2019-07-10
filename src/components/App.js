import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';


class App extends Component {
  state = { videos: [] };


  onSearchSubmit = async searchParam => {
    const response = await youtube.get('/search', {
      params: {
        q: searchParam
      }
    });
    this.setState({ videos: response.data.items }) 
  };




  render() {
    return (
      <>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </>
    )
  }
}

export default App;
