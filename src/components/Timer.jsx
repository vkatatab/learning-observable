import React from 'react';
const Rx = require('rxjs/Rx') ;

import Timeline from 'components/Timeline';
import style from './Timeline.less';

export default class Timer extends React.Component {
  componentDidMount() {
    Rx.Observable.fromEvent(document.getElementById('button'), 'click')
      .switchMap(x => Rx.Observable.interval(1000))
      .subscribe(() => this.emitsNewEvent(this.state.color-1));
      setInterval(this.incrementSecond, 100);
  }

  state = {
    timer: 0,
    color: 0,
    events: [],
    emitted: [],
  }

  addNewEvent = () => {
    this.setState({
      events: [...this.state.events, {
        time: this.state.timer,
        color: this.state.color
      }]
    }, this.setState({ color: this.state.color + 1}));
  }

  emitsNewEvent = (color) =>
    this.setState({ emitted: [...this.state.emitted, {
      time: this.state.timer,
      color
    }]
  });

  incrementSecond = () =>
    this.setState({ timer: this.state.timer + 0.1 });

  render() {
    return (<div>
      <Timeline events={this.state.events} />
      <Timeline events={this.state.emitted} />
      <button type="button" id="button" onClick={this.addNewEvent} className="button">Evento</button>
    </div>);
  }
}
