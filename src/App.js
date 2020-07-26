import React from 'react';
import JobListings from './components/JobListings';
import Hero from './components/Hero';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Hero />
      <JobListings />
    </div>
  );
}

export default App;
