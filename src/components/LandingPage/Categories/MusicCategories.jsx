import React from "react";
import { CategoriesItem } from "./CategoriesItems/CategoriesItem";
import { motion, useSpring, useTransform } from "framer-motion";


const Categorieswrapper=({children})=>(
  <div className="w-[95%] h-96 overflow-hidden">
      {children}
  </div>
)


const PlayList = () => {
  const x = useSpring(0,{ stiffness:300,damping:200 })
  const width = useTransform(x,[-1080,0],[500,0])

  return (
    <div className="w-full h-auto flex flex-col items-center content-center">
      <div className="w-[95%] h-24">
        <span className="text-white text-3xl underline font-bold hover:cursor-pointer">
          Spotify Playlists
        </span>
      </div>
      <Categorieswrapper>
          <motion.div className="w-[95%] h-96 flex flex-row"
          style= {{x}}
          drag={"x"}
          dragConstraints={{left:-1080,right:0}}
          dragElastic={0.05}
          transition={{ease:[0.6,0.05,-0.01,0.99]}}
         
          >
            <CategoriesItem category="Lofi" id="one"/>
            <CategoriesItem category="Lofi" id="two"/>
            <CategoriesItem category="Lofi" id="three"/>
            <CategoriesItem category="Lofi" id="four"/>
            <CategoriesItem category="Lofi" id="five"/>
            <CategoriesItem category="Lofi"  id="six"/>
          </motion.div>
      </Categorieswrapper>
      <motion.div className="w-[500px] h-1 bg-gray-800">
         <motion.div 
              className="w-[500px] h-1 bg-gray-500"
              style={{width}}>
                
          </motion.div>
       </motion.div>
    </div>
  );
};

export const MusicCategories = () => {
  return (
    <div className="h-full w-full bg-page1-content overflow-hidden ">
      <div className=" h-full w-full overflow-scroll flex flex-col snap-x items-center justify-center">
        <PlayList />
        <div className="bg-none h-1/3 w-full"></div>
      </div>
    </div>
  );
};
