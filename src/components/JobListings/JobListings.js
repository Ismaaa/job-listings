import React, { useEffect } from 'react';
import './JobListings.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../store/ducks/jobs';
import { renderJobs } from './helpers';

const JobListings = () => {
  const dispatch = useDispatch();
  const { jobs, error } = useSelector((store) => store.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  if (error) {
    return (
      <h1 style={{ textAlign: 'center', fontSize: 40, margin: 50 }}>
        Error loading database
      </h1>
    );
  }

  return <div className="JobListings">{renderJobs(jobs)}</div>;
};

export default JobListings;
