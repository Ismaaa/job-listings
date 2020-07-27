import './Tag.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ name, handleClick }) => (
  <button className="Tag" onClick={handleClick} type="button">
    {name}
  </button>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Tag;
