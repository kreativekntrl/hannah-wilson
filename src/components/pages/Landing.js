import React from 'react';
import landingPic1 from '../images/30.jpg';
import landingPic2 from '../images/29.jpg';

export default function Landing() {
    return (
<div
  style={{width:"100%", margin: "auto"}}>
  <div
    style={{height: "245px", width: "340px", margin: "auto"}}>
    <img src={landingPic1} alt="creative black and white head shot" style={{height: "100%", width: "100%", objectFit: "contain"}}/> 
  </div>
  <div 
    style={{width: "100%", margin: "auto", display: "flex", justifyContent: "center", paddingTop: "15px"}}
    className="container">
    <div className="row">
    <div className="col-md-12 text-center">
    <h1 className="animate-charcter">HANNAH WILSON.</h1>
  </div>
      </div>
      </div>
  <div
    style={{height: "245px", width: "340px", margin: "auto"}}>
    <img src={landingPic2} alt="creative black and white head shot" style={{height: "100%", width: "100%", objectFit: "contain"}}/> 
  </div>
</div>
  )
}