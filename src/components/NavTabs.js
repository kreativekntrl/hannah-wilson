import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
<>
<nav>
 <div>
  <a
  href='#Gallery'
  onClick={() => handlePageChange('Gallery')}>Gallery.</a>
  <a
  href='#Measurements'
  onClick={() => handlePageChange('Measurements')}>Measurements.</a>
  <a
  href='#Landing'
  onClick={() => handlePageChange('Landing')}>Exit.</a>
</div>
</nav>
</>
  );
}

export default NavTabs;
