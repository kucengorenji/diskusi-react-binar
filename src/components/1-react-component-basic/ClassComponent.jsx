import React from 'react';

export default class ClassComponent extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.text}</h1>
      </div>
    );
  }
}
