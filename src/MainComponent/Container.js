import React from 'react';
import View from './View.js';

class Container extends React.Component {
  render() {
    const {name} = this.props;
    return <View name={name} />;
  }
}

export default Container;
