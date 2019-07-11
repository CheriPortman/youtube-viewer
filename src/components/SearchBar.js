import React, { Component } from 'react';
import { Form, Label } from './styledComponents';

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
      <Form onSubmit={this.onFormSubmit}>
        <Label>Enter your search: </Label>
        <input 
          type="text"
          value={this.state.searchParam}
          onChange={this.onChange}
        />
      </Form>
    );
  }
}

export default SearchBar;
