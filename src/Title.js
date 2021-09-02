import React from 'react';
import PropTypes from 'prop-types';

function Title({ link, children }) {
  return (
    <h5 className="Card__title">
      <a className="Card-title__link" href={link}>{children}</a>
    </h5>
  );
}

Title.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Title;
