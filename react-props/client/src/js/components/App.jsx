import React from 'react';
import { Sub } from './Sub';

class App extends React.Component {
  render() {
    return (
      <div>
        <Sub text="child-1" />
        <Sub text="child-2" />
      </div>
    );
  }
}
export default App;
