import React from 'react';

export default class Binar extends React.Component {
  constructor(props) {
  }

  render() {
    return (
      <div>
        <h1>Hello {props.text}</h1>
      </div>
    );
  }
}
