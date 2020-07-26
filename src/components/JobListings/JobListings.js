import React from 'react';
import useFetchJobs from '../../features/FetchJobs';
import JobCard from '../JobCard';

const JobListings = () => {
  const { jobs, loading } = useFetchJobs();

  if (loading) return <h1>Loading...</h1>;

  return (
    <ul>
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
    </ul>
  );
};

export default JobListings;
