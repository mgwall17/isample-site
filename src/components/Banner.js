import React from "react"
import samplePatternSvg from "../images/samplepattern.svg"



  function Banner() {

    const bannerStyle = {
        width:"100%",
        position: "relative",
        display:"inline-block",
    
    }

    return (
        <div style={bannerStyle}>
        <img src={samplePatternSvg} />
        </div>
    )
  }

  export default Banner