import React from 'react';
import PropTypes from 'prop-types';

function Q(props) {
  return (
    <h2 className="question">{props.content}</h2>
  );
}

Q.propTypes = {
  content: PropTypes.string.isRequired
};

export default Q;
