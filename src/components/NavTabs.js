import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
<nav>
  <a
  href='#Gallery'
  onClick={() => handlePageChange('Gallery')}>ENTER.</a>
</nav>
  );
}

export default NavTabs;
