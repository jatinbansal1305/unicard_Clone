import React from 'react';
import Svg from './Svg';

const Intro=()=>{
    return (
        <>
        <h1 className="font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6 ">
        <span>
          <strong>NX Wave.</strong>
          The next-gen credit card for those who love rewards.
        </span>
      </h1>
        <div className="mt-4 md:mt-0">
            <p className="font-medium text-sm md:text-base md:mb-9">
              1% Cashback
             <Svg/>
              5x Rewards
             <Svg/>
              Zero Forex Markup
            </p>
          </div>
          </>
    )
}
export default Intro