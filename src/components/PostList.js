import React, { Component } from 'react';

export default class PostList extends Component {
  constructor() {
    super();
  };

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then((result) => {
      result.json().then((response) => {
        console.log(response);
      });
    });
  };

  render() {
    return(
      <div>
        <h1>Show all posts</h1>
      </div>
    );
  };
}
