import React from 'react';
import landingPic1 from '../images/30.jpg';
// import { Link } from 'react-router-dom';
import landingPic2 from '../images/29.jpg';

export default function Landing({currentPage, handlePageChange}) {
    return (
      <div
      style={{width:"100%", margin: "auto", padding: "20px"}}>
            <div
             style={{height: "245px", width: "340px", }}>
            <img src={landingPic1} alt="creative black and white head shot" style={{height: "100%", width: "100%", objectFit: "contain"}}/> 
            </div>
            <div
            style={{width: "100%", margin: "auto", display: "flex", justifyContent: "center"}}>
            <h1>HANNAH WILSON.</h1>
            </div>
            <div
             style={{height: "245px", width: "340px", }}>
            <img src={landingPic2} alt="creative black and white head shot" style={{height: "100%", width: "100%", objectFit: "contain"}}/> 
            </div>
      </div>
  )
}