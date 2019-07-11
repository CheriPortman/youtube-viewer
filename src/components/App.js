import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends Component {
  state = { 
    videos: [],
    selectedVideo: null
  };


  onSearchSubmit = async searchParam => {
    const response = await youtube.get('/search', {
      params: {
        q: searchParam
      }
    });
    this.setState({ videos: response.data.items }) 
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video});
  }



  render() {
    return (
      <>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoDetail />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </>
    )
  }
}

export default App;
