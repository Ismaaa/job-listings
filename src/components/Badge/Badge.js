import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';

const Badge = ({ dark, children }) => (
  <span className={`Badge Badge${dark ? '--dark' : ''}`}>{children}</span>
);

Badge.propTypes = {
  dark: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Badge;
