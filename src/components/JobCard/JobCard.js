/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './JobCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '../Badge';
import Tag from '../Tag';
import { toggleFilter } from '../../store/ducks/jobs';

const JobCard = (props) => {
  const {
    logo,
    company,
    isNew,
    isFeatured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props;

  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.jobs);

  const renderTags = () => {
    const tags = [role, level, ...languages, ...tools];

    return tags.map((tag) => {
      const isActive = filters.includes(tag);

      return (
        <Tag
          key={tag}
          name={tag}
          handleClick={() => dispatch(toggleFilter(tag))}
          active={isActive}
        />
      );
    });
  };

  return (
    <div className={`JobCard ${isFeatured && 'JobCard--featured'}`}>
      <img src={logo} alt={company} className="JobCard__logo" />
      <div className="JobCard__heading">
        <span className="JobCard__company">{company}</span>
        {isNew && <Badge>New!</Badge>}
        {isFeatured && <Badge dark>Featured!</Badge>}
      </div>
      <h1 className="JobCard__position">{position}</h1>
      <div className="JobCard__info">
        <span className="JobCard__info-item">{postedAt}</span>
        <span className="JobCard__info-item">{contract}</span>
        <span className="JobCard__info-item">{location}</span>
      </div>
      <hr className="JobCard__separator" />
      <div className="JobCard__tags">{renderTags()}</div>
    </div>
  );
};

JobCard.propTypes = {
  logo: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  isNew: PropTypes.bool.isRequired,
  isFeatured: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
};

export default JobCard;
