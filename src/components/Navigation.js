import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  constructor() {
    super();
  };

  render() {
    return(
      <div>
        <div className="App one">
          <h1>PollyBlog</h1>
          <div><button className="btn"><NavLink activeClassName="selected" to="/CreatePost">Create a Post</NavLink></button></div>
          <div><button className="btn"><NavLink activeClassName="selected" to="/PostList">Show all Posts</NavLink></button></div>
          <div><button className="btn"><NavLink activeClassName="selected" to="/ShowPost">Show one Post</NavLink></button></div>
        </div>
      </div>
    );
  }
}
