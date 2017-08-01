import React, { Component } from 'react';

export default class CreatePost extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  handleSubmit(event) {
    event.preventDefault();
    let object = {
      name: event.target.name.value,
      title: event.target.title.value,
      blog: event.target.blog.value
    };

    fetch('https://tiny-lasagna-server.herokuapp.com/collections/bloggerDoyle', {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      }).then((result) => {
        result.json();
      });
      event.target.reset();
  };

  render() {
    return(
      <div>
        <form className="flex column container" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name"></input>
          <label>Title</label>
          <input type="text" name="title"></input>
          <label>Blog Post</label>
          <textarea className="blog-area" name="blog"></textarea>
          <input className="button submit" type="submit"></input>
        </form>
      </div>
    );
  };
}
