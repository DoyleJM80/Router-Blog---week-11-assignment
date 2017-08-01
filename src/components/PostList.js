import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
    console.log('this props', this.props);
    let blogs = this.state.posts.map((blog, index) => {
      return (
        <div key={index}>
          <Link to={`${this.props.match.url}/${blog._id}`}>{blog.name}</Link>
        </div>
      )
    });
    return(
      <div>
        {blogs}
      </div>
    );
  };
}
