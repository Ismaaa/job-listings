import React from 'react';
import useFetchJobs from '../../features/FetchJobs';
import JobCard from '../JobCard';
import './JobListings.scss';

const JobListings = () => {
  const { jobs, loading } = useFetchJobs();

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="JobListings">
      {jobs.map(
        ({
          id,
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
        }) => (
          <JobCard
            key={id}
            logo={logo}
            company={company}
            isNew={isNew}
            isFeatured={isFeatured}
            position={position}
            role={role}
            level={level}
            postedAt={postedAt}
            contract={contract}
            location={location}
            languages={languages}
            tools={tools}
          />
        )
      )}
    </div>
  );
};

export default JobListings;
