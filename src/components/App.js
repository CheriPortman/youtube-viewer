import React, { Component } from 'react';
import { GlobalStyle, Wrapper } from './styledComponents';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = { 
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
      this.onSearchSubmit('flower')
  }

  onSearchSubmit = async searchParam => {
    const response = await youtube.get('/search', {
      params: {
        q: searchParam
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    }) 
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <VideoDetail video={this.state.selectedVideo} />
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </Wrapper>
    )
  }
}

export default App;
