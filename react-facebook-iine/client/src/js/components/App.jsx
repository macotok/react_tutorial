import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
      count: 1000,
    };
  }
  handleClick() {
    this.setState({
      count: this.state.count + (this.state.like ? -1 : 1),
      like: !this.state.like,
    });
  }
  render() {
    const { like, count } = this.state;
    const text = like ? '-' : '+';
    return (
      <div>
        <span>{count}</span>
        <button onClick={this.handleClick.bind(this)}>{text}</button>
      </div>
    );
  }
}
export default App;
