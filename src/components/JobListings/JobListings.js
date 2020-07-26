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
          <JobCard
            logo={logo}
            company={company}
            isNew={isNew}
            isFeatured={isFeatured}
            position={position}
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
