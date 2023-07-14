import React from 'react';
import Intro from './body/Intro';
import Form from './body/Form';
import Image from './body/Image';
import BackgroundVideo from './BackgroundVideo';
import Header from './Header';

const VideoLayout=()=>{
return(
    <>
    <Header/>
    <div className="relative h-[100vh] w-full flex  items-center justify-center">
    
    <div className="flex flex-col md:flex-row-reverse mx-auto max-w-[1280px] w-full justify-center z-1 bg-transparent">
    <Image/>
    <div className="z-10 w-full mt-7 md:mt-0 md:my-auto flex flex-col self-end md:self-center px-6">
          
         <Intro/>
         <Form/>
         
           
    </div>
    </div>
    <BackgroundVideo/>
    </div>
    </>

)
}

export default VideoLayout