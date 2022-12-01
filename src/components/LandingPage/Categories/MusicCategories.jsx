import React from "react";
import { CategoriesItem } from "./CategoriesItems/CategoriesItem";

const Categorieswrapper=({children})=>(
  <div className="w-[95%] h-96 overflow-hidden">
      {children}
  </div>
)


const PlayList = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center content-center">
      <div className="w-[95%] h-24">
        <span className="text-white text-3xl underline font-bold hover:cursor-pointer">
          Spotify Playlists
        </span>
      </div>
      <Categorieswrapper>
          <div className="w-[95%] h-96 flex flex-row overflow-x-scroll">
            <CategoriesItem category="Lofi" id="one"/>
            <CategoriesItem category="Lofi" id="two"/>
            <CategoriesItem category="Lofi" id="three"/>
            <CategoriesItem category="Lofi" id="four"/>
            <CategoriesItem category="Lofi" id="five"/>
            <CategoriesItem category="Lofi"  id="six"/>
          </div>
      </Categorieswrapper>

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
