import React, { Component } from 'react';

export default class Shabad extends Component {
  constructor(p) {
    super(p);
    this.state = { shabad: null };
    fetch('docs/keertan.json').then(r => r.json()).then(database => {
      let shabad = database.find(e => e.title === this.props.params.shabad);
      this.setState({ shabad });
    });
  }
  render() {
    return (
      <div style = {{height: '100%'}}>
        <h3> This feature requires internet connection </h3>
        { this.state.shabad && <iframe src = {this.state.shabad.url + '/print_view'} style = {{width: '100vw', height: '85vh', border: 'none' }} />}
      </div>
      );
    }
}
