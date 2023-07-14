import React,{useEffect,useRef} from "react";

const Image = () => {
    const divRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const div = divRef.current;
        const { top, bottom } = div.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        if (top < windowHeight && bottom > 0) {
          div.classList.add('animate-move-down');
        } else {
          div.classList.remove('animate-move-down');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
         <style>
        {`
          .animate-move-down {
            animation: moveDown 0.5s ease-in-out;
          }
          
          @keyframes moveDown {
            0% {
              transform: translateY(-100px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    <div
        className="flex md:justify-center py-12"
        ref={divRef}
        style={{ opacity: 1 }}
      >
        <div
          style={{
            background:
              "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)"
          }}
          className="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center"
        >
          <img
            alt="down_arrow"
            src="https://www.uni.cards/images/down_arrow.svg"
            loading="lazy"
            className="w-9 md:w-14 "
          />
        </div>
      </div>
        </>
    )
}

export default Image