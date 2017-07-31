import React, { Component } from 'react';
import Navigation from './Navigation';
import CreatePost from './CreatePost';
import PostList from './PostList';
import ShowPost from './ShowPost';

export default class BaseLayout extends Component {
  constructor() {
    super();
  };

  render() {
    return(
      <div className="base-layout">
        <Navigation/>
        {this.props.children}
      </div>
    );
  };
}
