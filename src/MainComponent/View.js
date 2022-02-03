import React from 'react';

const View = props => {
  const {name} = props;
  return (
    <div>
      <h1>MainComponent</h1>
      <h2>name: {name}</h2>
    </div>
  );
};

export default View;
