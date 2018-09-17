import React from 'react';
import PropTypes from 'prop-types';

export class Sub extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <p>{text}</p>
    );
  }
}

Sub.propTypes = {
  text: PropTypes.string,
};

Sub.defaultProps = {
  text: '',
};
