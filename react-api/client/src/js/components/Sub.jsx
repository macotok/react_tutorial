import React from 'react';
import PropTypes from 'prop-types';

export class Sub extends React.Component {
  render() {
    const { apiData } = this.props;
    return (
      <ul>
        {apiData.map((item) => {
          return (
            <li key={item.id}>{item.name}</li>
          );
        })}
      </ul>
    );
  }
}

Sub.propTypes = {
  apiData: PropTypes.arrayOf(PropTypes.object),
};

Sub.defaultProps = {
  apiData: [],
};
