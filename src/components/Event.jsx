import React, { Component } from 'react';

import styles from './Event.less';

export default class Event extends Component {
  render() {
    return (<div className="event" style={this.props.style} ></div>);
  }
}
