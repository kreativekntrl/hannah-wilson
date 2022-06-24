import React from 'react';
import landingPic1 from '../images/30.jpg';
import landingPic2 from '../images/29.jpg';
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
  social: {
    textAlign: "center",
    paddingBottom: "10px",
  }
}

export default function Landing({currentPage, handlePageChange}) {
    return (
<div
      style={{width:"100%", margin: "auto"}}>
            <div
             style={{height: "245px", width: "340px", margin: "auto"}}>
            <img src={landingPic1} alt="creative black and white head shot" style={{height: "100%", width: "100%", objectFit: "contain"}}/> 
            </div>
            <div
            style={{width: "100%", margin: "auto", display: "flex", justifyContent: "center", paddingTop: "15px"}}>
            <h1>HANNAH WILSON.</h1>
            </div>
            <div
             style={{height: "245px", width: "340px", margin: "auto"}}>
            <img src={landingPic2} alt="creative black and white head shot" style={{height: "100%", width: "100%", objectFit: "contain"}}/> 
            </div>
        <footer style={styles.footer}>
            <div 
            className="social"
            style={styles.social}>
              <a
              style={styles.a}
              href='https://instagram.com/hannahnwilson_?igshid=YmMyMTA2M2Y='>
                <i aria-label="Instagram"><BsInstagram /></i>
              </a>
              <a
              style={styles.a}
              href='mailto:hannahwilson2690@gmail.com?'
              subject="portfolio inquiry">
                <i aria-label="Email"><MdOutlineEmail /></i> 
              </a>
              <a
              style={styles.a}
              href='https://www.tcmmodels.com/women-mainboard/1440349/hannah-w'>
                <i aria-label="Agency Website"><CgWebsite /></i> 
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
                  onClick={() => handlePageChange('Gallery')}
                  style={styles.a}>Gallery</a></li>
                <li 
                className="list-inline-item"
                style={styles.footerLi}>
                  <a 
                  href="#Measurements"
                  onClick={() => handlePageChange('Measurements')}
                  style={styles.a}>Measurements</a></li>
                <li 
                className="list-inline-item"
                style={styles.footerLi}>
                  <a 
                  href="#Landing"
                  onClick={() => handlePageChange('Landing')}
                  style={styles.a}>Exit</a></li>
            </ul>
        </footer>
    </div>
  )
}