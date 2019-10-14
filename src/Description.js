import React, { Component } from 'react';

export default class Description extends Component {
  state = {
    desc: this.props.desc,
    display: false
  };

  toggleDisplay() {
    this.setState({ display: !this.state.display });
  }

  render() {
    return (
      <div>
        <button onClick={e => this.toggleDisplay()}>Expand</button>
        <p>{this.state.display ? this.state.desc : ''}</p>
      </div>
    );
  }
}
