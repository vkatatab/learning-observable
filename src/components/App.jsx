import React from 'react';
import style from './App.less';

import Timer from 'components/Timer';

export default class App extends React.Component {
  render() {
    return <div>
      <Timer />
    </div>;
  }
}
