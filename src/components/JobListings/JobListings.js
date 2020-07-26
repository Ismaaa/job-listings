import React from 'react';
import useFetchJobs from '../../features/FetchJobs';

const JobListings = () => {
  const { jobs, loading } = useFetchJobs();
  console.log(jobs, loading);

  return <div>valeweeeee</div>;
};

export default JobListings;
