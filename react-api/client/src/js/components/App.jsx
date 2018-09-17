import React from 'react';
import { Sub } from './Sub';

const REQUEST_URL = 'https://api.github.com/users/macotok/repos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          data: responseData,
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Sub apiData={data} />
      </div>
    );
  }
}

export default App;
