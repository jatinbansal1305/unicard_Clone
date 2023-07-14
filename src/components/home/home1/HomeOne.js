import React from "react";
import Title from "./Title";
import Image from "./Image";
import Body from "./Body";

const HomeOne = () => {
  return (
    <div className="py-12 md:py-[150px]">
      <section>
        <Title />
        <Image />
      </section>
      <Body />
    </div>
  );
};

export default HomeOne;
