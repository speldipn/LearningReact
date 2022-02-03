import React from 'react';
import View from './View.js';

class Container extends React.Component {
  render() {
    console.log('Container loaded.');
    return <View />;
  }
}

export default Container;
