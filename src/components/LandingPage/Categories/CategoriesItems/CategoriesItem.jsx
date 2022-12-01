import React from "react";
import  "./styles.scss";
import { motion,} from "framer-motion";


const PlayIcon = ({id}) => {
  const customanime ={
    hover:{
      opacity:1,
    },
    initial:{
      opacity:1
    },
    final:{
      opacity:1
    }
  }

const inner ={
  hover:{
    opacity:1,
    y:0,
    transition:{
      duration:0.1,
      delay:0,      
    }
  },
  initial:{
    y:"30px",
    opacity:0,
    transition:{
      duration:0.1,
      delay:0
    },
  },
}


  return (
    <motion.div 
    id="playwrapper"
    // hover will fireup the children using customanime
    variants={customanime}
    whileHover="hover"
    initial = "initial"
    className="h-full w-full absolute cursor-pointer"
    onClick={()=>console.log("clicked")}
    >
      <motion.div
        id={id}
        variants={inner}
        transition={{
          duration:0.05,
          delay:0,
        }}
        className="playIcon h-[56px] w-[56px] bg-green-600 rounded-full absolute bottom-[150px] right-8 flex items-center justify-center hover:cursor-default hover:scale-150"
      >

     <svg xmlns="http://www.w3.org/2000/svg"
         className="h-1/3 w-1/2 text-black ml-[6px]"
        viewBox="0 0 28 28">
        <path d = "M3 3 L3 25 L23 14 z" stroke = "black" strokeWidth = "3" fill = "black"/> 
     </svg>
      </motion.div>
    </motion.div >
  );
};


export const CategoriesItem = ({ category,id }) => {
  return (
  
      <div className="cardp w-56 h-80 rounded-xl m-3 flex flex-col snap-center relative flex-shrink-0 bg-[#242424] hover:bg-[#2a2a2a] hover:shadow-xl">
        <div  className="h-2/3 w-full flex items-center justify-center  rounded-tl-xl rounded-tr-xl cursor-pointer">
          <img
            alt="Music_cover_Icon"
            src="https://i.scdn.co/image/ab67706f0000000255d4466ee6bb4a1e484f4588"
            className="w-[80%] h-[80%] object-contain rounded-xl"
          />
        </div>
        <div className="h-1/3 w-full flex items-center justify-center rounded-br-xl rounded-bl-xl cursor-pointer">
          <div className="w-[90%] h-[90%] object-contain">
            <h3 className="font-bold text-[16px] text-white">LOREM</h3>
            <p className="font-bold text-[0.875rem] text-[#a7a7a7]">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>

        <PlayIcon id={id}/>
      </div>
    
    
  );
};
