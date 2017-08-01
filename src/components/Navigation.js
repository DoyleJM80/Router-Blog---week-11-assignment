import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  constructor() {
    super();
  };

  render() {
    return(
      <div className="banner">
        <div className="App one flex">
          <h1>PollyBlog</h1>
          <div><button className="button-style"><NavLink activeClassName="selected" className="button" to="/CreatePost">Create a Post</NavLink></button></div>
          <div><button className="button-style"><NavLink activeClassName="selected" className="button" to="/PostList">Show all Posts</NavLink></button></div>
        </div>
      </div>
    );
  }
}
