import React from "react";

const Title = () => {
  const spanStyle = {
    fontWeight: "400",
    color: "#9ea7ae",
  };
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-4 ">
      <div className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
        <p style={{ opacity: 1 }}>
          Earn 1% assured cashback 
          
          <span style={spanStyle}> on your spends. Get </span>
           5X
        </p>
        <p style={{ opacity: 1 }}>
          more value than cashback
          
          <span style={spanStyle}  > at the Uni Store. Enjoy</span>
        </p>
        <p style={{ opacity: 1 }}>
          
          <span style={spanStyle} className="text-[#9EA7AE]">round the clock </span>
          Whatsapp support.{" "}
         
          <span style={spanStyle} className="text-[#9EA7AE] ">And it 's</span>
        </p>
        <p style={{ opacity: 1 }}>
          lifetime free
          
          <span style={spanStyle} >
            ; no joining fee, no annual charges.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Title;
