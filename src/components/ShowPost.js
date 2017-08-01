import React, { Component } from 'react';

export default class ShowPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  };

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/bloggerDoyle').then((result) => {
      result.json().then((response) => {
        let object = response.find((item) => {
          return item._id === this.props.match.params.id;
        });
        this.setState({
          post: object
        });
      });
    });
  }

  render() {
    return(
      <div>
        <h1>{this.state.post.blog}</h1>
      </div>
    );
  };
}
