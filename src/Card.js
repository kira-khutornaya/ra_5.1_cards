import React from 'react';
import PropTypes from 'prop-types';

function Card({ image, children }) {
  return (
    <div className="Card">
      {image && (<img src={image} className="Card__img_top" alt="" />)}
      <div className="Card__body">
        {children}
      </div>
    </div>
  );
}

Card.defaultProps = {
  image: '',
};

Card.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
