import React from "react";
import { BsInstagram } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';

const styles = {
    footer: {
      padding: "20px 0",
      backGroundColor: "#ffffff",
      color: "#4b4c4d",
    },
    footerUl: {
      padding: "0",
      listStyle: "none",
      textAlign: "center",
      fontSize: "18px",
      lineHeigt: "1.6",
      marginBottom: "0",
    },
    footerLi: {
      padding: "0 10px",
    },
    a: {
      textDecoration: "none",
      opacity: "0.8",
      color: "#4b4c4d",
      padding: "5px",
      fontSize: "20px",
    },
    icon: {
      color: "#4b4c4d",
      padding: "5px",
      fontSize: "20px",
      borderRadius: "50%",
      border: "1px solid #ccc",
      margin: "0 8px",
      width: "40px",
      height: "40px",
    },
    social: {
      textAlign: "center",
      paddingBottom: "10px",
    }
  }

const Footer = () => {
    return (
        <footer style={styles.footer}>
        <div 
        className="social"
        style={styles.social}>
          <a
          style={styles.a}
          href='https://instagram.com/hannahnwilson_?igshid=YmMyMTA2M2Y='>
            <i 
            style={styles.icon}
            aria-label="Instagram"><BsInstagram /></i>
          </a>
          <a
          style={styles.a}
          href='mailto:hannahwilson2690@gmail.com?'
          subject="portfolio inquiry">
            <i 
            style={styles.icon}
            aria-label="Email"><MdOutlineEmail /></i> 
          </a>
          <a
          style={styles.a}
          href='https://www.tcmmodels.com/women-mainboard/1440349/hannah-w'>
            <i 
            style={styles.icon}
            aria-label="Agency Website"><CgWebsite /></i> 
          </a>
        </div>
        <ul 
        className="list-inline"
        style={styles.footerUl}>
            <li 
            className="list-inline-item"
            style={styles.footerLi}>
              <a 
              href="#Gallery"
              style={styles.a}>Gallery</a></li>
            <li 
            className="list-inline-item"
            style={styles.footerLi}>
              <a 
              href="#Measurements"
              style={styles.a}>Measurements</a></li>
            <li 
            className="list-inline-item"
            style={styles.footerLi}>
              <a 
              href="#Landing"
              style={styles.a}>Exit</a></li>
        </ul>
    </footer>
    )
}

export default Footer;