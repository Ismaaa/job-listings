import React from 'react';
import useFetchJobs from '../../features/FetchJobs';

const JobListings = () => {
  const { jobs, loading } = useFetchJobs();

  if (loading) return <h1>Loading...</h1>;

  return (
    <ul>
      {jobs.map((job) => (
        <ul key={job.id}>
          <li>{job.id}</li>
          <li>{job.company}</li>
          <li>{job.logo}</li>
          <li>
            <img src={job.logo} alt={job.company} />
          </li>
          <li>{job.new}</li>
          <li>{job.featured}</li>
          <li>{job.contract}</li>
        </ul>
      ))}
    </ul>
  );
};

export default JobListings;
