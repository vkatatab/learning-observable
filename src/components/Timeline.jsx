import React, { Component } from 'react';

import Datastream from 'components/Datastream';
import Event from 'components/Event';

const colours = [
  'blue',
  'red',
  'yellow',
  'green',
];

export default class Timeline extends Component {

  renderEvents() {
      return this.props.events.map((event) =>
      (<Event style={{
        backgroundColor: colours[event.color],
        zIndex: event.color,
        marginLeft: `${10*event.time}px`,

      }} />));
  }

  render() {
    return (<div>
      <Datastream />
      {this.renderEvents()}
    </div>);
  }
}
