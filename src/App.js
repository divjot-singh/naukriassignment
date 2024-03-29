import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetails from './components/Userdetails';
import JobListing from './components/Joblisting';
import Jobcategories from './components/Jobcategories';
import Whatsappalert from './components/Whatsappalert';
import JobCityListing from './components/JobCityListing';
import Footer from './components/Footer';
function App() {
  return (
    <React.Fragment>
      <UserDetails />
      <JobListing jobtype="location" />
      <Jobcategories showcount={true}  />
      <JobListing jobtype="preference" />
      <Whatsappalert />
      <JobCityListing />
      <Footer />
    </React.Fragment>
  );
}

export default App;
