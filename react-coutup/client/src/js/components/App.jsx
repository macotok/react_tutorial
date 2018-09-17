import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <span>{count}</span>
        <button onClick={this.handleClick.bind(this)}>+</button>
      </div>
    );
  }
}
export default App;
