import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';

const Badge = ({ dark, children }) => (
  <span className={`Badge Badge${dark ? '--dark' : ''}`}>{children}</span>
);

Badge.defaultProps = {
  dark: false,
};

Badge.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Badge;
