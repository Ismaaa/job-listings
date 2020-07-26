/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const JobCard = ({
  logo,
  company,
  isNew,
  isFeatured,
  position,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => (
  <div className="Card">
    <img src={logo} alt={company} className="Card__logo" />
    <div className="Card__heading">
      <span className="Card__company">{company}</span>
      {isNew && 'Is new !'}
      {isFeatured && 'Is featured !'}
    </div>
    <h3 className="Card__position">{position}</h3>
    <div className="Card__info">
      <span className="Card__info-item">{postedAt}</span>
      <span className="Card__info-item">{contract}</span>
      <span className="Card__info-item">{location}</span>
    </div>
    <hr className="Card__separator" />
    <div className="Card__tags">
      {languages.map((language) => (
        <button className="Card__tag">{language}</button>
      ))}
      {tools.map((tool) => (
        <button className="Card__tag">{tool}</button>
      ))}
    </div>
  </div>
);

JobCard.propTypes = {
  logo: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  isNew: PropTypes.bool.isRequired,
  isFeatured: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
};

export default JobCard;
