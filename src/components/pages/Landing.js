import React from 'react';
import landingPic1 from '../images/30.jpg';
import landingPic2 from '../images/29.jpg';
import Footer from '../components/Footer';

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
          <Footer />
    </div>
  )
}