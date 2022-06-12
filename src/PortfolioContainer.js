import React, { useState } from 'react';
import Landing from './pages/Landing';
import Gallery from './pages/Gallery';
import Measurements from './pages/Measurements';
// import NavTabs from './NavTabs';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Landing');

  // This function is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    switch (currentPage) {
      case 'Landing':
        return <Landing />;
      case 'Gallery':
        return <Gallery />;
      case 'Measurements':
        return <Measurements />;
      default:
        return <Landing />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Landing currentPage={currentPage} handlePageChange={handlePageChange} />  
      {renderPage()}
   
    </div>
  );
}
