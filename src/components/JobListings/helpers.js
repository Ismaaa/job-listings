import React from 'react';
import JobCard from '../JobCard';

export const renderJobs = (jobs) =>
  jobs.map((job) => (
    <JobCard
      key={job.id}
      logo={job.logo}
      company={job.company}
      isNew={job.isNew}
      isFeatured={job.isFeatured}
      position={job.position}
      role={job.role}
      level={job.level}
      postedAt={job.postedAt}
      contract={job.contract}
      location={job.location}
      languages={job.languages}
      tools={job.tools}
    />
  ));
