import React, { Component } from 'react';
import { GlobalStyle, Wrapper } from './styledComponents';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = { 
    videos: [],
    selectedVideo: null,
    searchParam: 'rain'
  };


  componentDidMount() {
      this.onSearchSubmit('rain')
  }

  onSearchSubmit = async searchParam => {
    const response = await youtube.get('/search', {
      params: {
        q: searchParam
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
      searchParam: response.config.params.q
    }) 
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoList searchParam={this.state.searchParam} videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
        <VideoDetail video={this.state.selectedVideo} />
      </Wrapper>
    )
  }
}

export default App;
