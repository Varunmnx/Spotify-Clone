import React from "react";
import  "./styles.scss";

const PlayIcon = ({id}) => {

  return (
    <div id="playwrapper" className="h-full w-full absolute cursor-pointer">
      <div
        id={id}
        className=" playIcon h-[60px] w-[60px] bg-green-600 rounded-full absolute hover:bg-green-300 bottom-[150px] right-8 "
      ></div>
    </div>
  );
};

export const CategoriesItem = ({ category,id }) => {
  return (
    <div className=" w-56 h-80 rounded-xl m-3 flex flex-col snap-center relative ">
      <div className="h-2/3 w-full bg-[#181818] flex items-center justify-center  rounded-tl-xl rounded-tr-xl cursor-pointer">
        <img
          alt="Music_cover_Icon"
          src="https://i.scdn.co/image/ab67706f0000000255d4466ee6bb4a1e484f4588"
          className="w-[80%] h-[80%] object-contain rounded-xl"
        />
      </div>
      <div className="h-1/3 w-full bg-[#181818] flex items-center justify-center rounded-br-xl rounded-bl-xl cursor-pointer">
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
