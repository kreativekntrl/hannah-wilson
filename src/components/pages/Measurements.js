import React from 'react';
import Footer from '../components/Footer';
import measurementImg from '../images/01.jpg'
import measurementImg2 from '../images/02.jpg'

export default function Measurements() {
    return (
      <div>
        <div
          style={{margin: "auto", padding: "0 10px"}}>
          <img src={measurementImg} alt="creative black and white head shot" style={{height: "100%", width: "100%", objectFit: "contain"}}/> 
        </div>
        <div
          style={{margin: "auto", padding: "10px 20px", textAlign: "center"}}>
          <h1>Measurements</h1>
          <p>
            Height: 5'11 Bust: 33"B Waist: 25.5" Hips: 35.5" Dress: 4 US Shoe 9 US Hair: Light Brown Eyes: Blue/Green
          </p>
        </div>
        <div
          style={{margin: "auto", padding: "0 10px"}}>
        <img src={measurementImg2} alt="creative black and white head shot" style={{height: "100%", width: "100%", objectFit: "contain"}}/>
        </div>
          <Footer/>
      </div>
  )
}