import React, { useEffect } from 'react';
import './JobListings.scss';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilters, fetchJobs } from '../../store/ducks/jobs';
import { renderJobs } from './helpers';

const JobListings = () => {
  const dispatch = useDispatch();
  const { filteredJobs, error } = useSelector((store) => store.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(applyFilters());
  }, []);

  if (error) {
    return (
      <h1 style={{ textAlign: 'center', fontSize: 40, margin: 50 }}>
        Error loading database
      </h1>
    );
  }

  return <div className="JobListings">{renderJobs(filteredJobs)}</div>;
};

export default JobListings;
