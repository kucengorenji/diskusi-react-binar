import React from 'react';

export default class ClassComponent extends React.Component {
  constructor(props) {
    super();
    this.state = { text: "ini dibuat dengan state"}
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.text}</h1>
      </div>
    );
  }
}
