import React, { Component } from 'react';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      blog: '',
      posts: []
    }
  };

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/bloggerDoyle').then((result) => {
      result.json().then((response) => {
        this.setState({posts: response});
      });
    });
  };

  render() {
    let blogs = this.state.posts.map((blog, index) => {
      return (
        <h1 key={index}>{blog.name}</h1>
      )
    });
    return(
      <div>
        {blogs}
      </div>
    );
  };
}
