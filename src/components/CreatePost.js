import React, { Component } from 'react';

export default class CreatePost extends Component {
  constructor() {
    super();
  };

  render() {
    return(
      <div>
        <form>
          <input type="text"></input>
          <input type="text"></input>
          <textarea></textarea>
          <input type="submit"></input>
        </form>
      </div>
    );
  };
}
