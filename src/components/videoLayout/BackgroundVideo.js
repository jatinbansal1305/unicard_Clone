import React from 'react';
import video from '../../Videos/nxt_wave_bg.mp4'
const BackgroundVideo=()=>{
    const css7k8a4gStyles = {
        width: "100vw",
        height: "100vh",
       objectFit: "cover",
       position: "absolute",
       left: 0,
       right: 0,
       top: 0,
       bottom: 0,
       zIndex: 0,
     };
    
return(
    <video autoPlay muted loop playsInline style={css7k8a4gStyles}>
    <source src={video} type="video/mp4" />
  </video>
)
}

export default BackgroundVideo