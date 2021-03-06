import React from 'react';

const styles = {
  nav: {
    color: "#404040",
    padding: "10px"
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
 className="list-inline"
 style={styles.navUl}>
  <li
  className="list-inline-item nav-li" 
  style={styles.navLi}>
  <a
  href='#Gallery'
  style={styles.a}
  onClick={() => handlePageChange('Gallery')}>Gallery.</a>
  </li>
  <li 
  className="list-inline-item nav-li"
  style={styles.navLi}>
  <a
  href='#Measurements'
  style={styles.a}
  onClick={() => handlePageChange('Measurements')}>Measurements.</a>
  </li>
  <li 
  className="list-inline-item nav-li"
  style={styles.navLi}>  
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
