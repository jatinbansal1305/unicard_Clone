import React, { useEffect, useRef } from "react";
import "./App.css";
import VideoLayout from "./components/videoLayout/VideoLayout";
import Home from "./components/home/Home";
import DownloadSection from "./components/downloadSection/DownloadSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <VideoLayout />
      <Home/>
      <DownloadSection/>
      <Footer/>
      <>
  <style
    data-emotion="css 1s4jw3r"
    dangerouslySetInnerHTML={{
      __html:
        "\n            .css-1s4jw3r {\n                background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 110%);\n            }\n        "
    }}
  />
  <div className="w-full bottom-0 z-40 fixed md:hidden py-8 css-1s4jw3r">
    <div className="w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium">
      <div className="flex flex-col transition-all ease-in">
        <button className="p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]">
          <span>Apply now</span>
          <img
            src="https://www.uni.cards/images/right_arrow.svg"
            alt="right_arrow"
            width="21px"
            className="inline ml-3 css-0"
          />
        </button>
      </div>
    </div>
  </div>
</>

    </>
  );
}

export default App;
