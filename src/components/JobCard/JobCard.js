/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './JobCard.scss';

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
  <div className="JobCard">
    <img src={logo} alt={company} className="JobCard__logo" />
    <div className="JobCard__heading">
      <span className="JobCard__company">{company}</span>
      {isNew && 'Is new !'}
      {isFeatured && 'Is featured !'}
    </div>
    <h3 className="JobCard__position">{position}</h3>
    <div className="JobCard__info">
      <span className="JobCard__info-item">{postedAt}</span>
      <span className="JobCard__info-item">{contract}</span>
      <span className="JobCard__info-item">{location}</span>
    </div>
    <hr className="JobCard__separator" />
    <div className="JobCard__tags">
      {languages.map((language) => (
        <button type="button" className="JobCard__tag">
          {language}
        </button>
      ))}
      {tools.map((tool) => (
        <button type="button" className="JobCard__tag">
          {tool}
        </button>
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
