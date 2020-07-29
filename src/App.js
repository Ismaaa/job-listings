import React from 'react';
import { Provider } from 'react-redux';

import JobListings from './components/JobListings';
import Hero from './components/Hero';
import './App.scss';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Hero />
        <JobListings />
      </div>
    </Provider>
  );
}

export default App;
