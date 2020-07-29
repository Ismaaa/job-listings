import './Tag.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ name, handleClick, active }) => (
  <button
    className={`Tag ${active && 'Tag--active'}`}
    onClick={handleClick}
    type="button"
  >
    {name}
  </button>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Tag;
