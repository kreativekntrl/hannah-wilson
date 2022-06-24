import React from 'react';

const styles = {
  nav: {
    backGroundColor: "#ffffff",
    color: "#4b4c4d"
  },
  navUl: {
    padding: "0",
    listStyle: "none",
    textAlign: "center",
    fontSize: "24px",
    lineHeigt: "1.6",
    marginBottom: "0",
  },
  navLi: {
    padding: "0 10px",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
    opacity: "0.8",
  },
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
<nav 
style={styles.nav}>
 <ul
 style={styles.navUl}>
  <li style={styles.navLi}>
  <a
  href='#Gallery'
  style={styles.a}
  onClick={() => handlePageChange('Gallery')}>Gallery.</a>
  </li>
  <li style={styles.navLi}>
  <a
  href='#Measurements'
  style={styles.a}
  onClick={() => handlePageChange('Measurements')}>Measurements.</a>
  </li>
  <li style={styles.navLi}>  
  <a
  href='#Landing'
  style={styles.a}
  onClick={() => handlePageChange('Landing')}>Exit.</a>
  </li>
 </ul>
</nav>
  );
}

export default NavTabs;
