import React from "react";
import { Icon } from "../../Icons/Icons";
import { useRef,useEffect } from "react";



const ArrowButtons = () =>{ 
  let tobeinView = useRef()
  useEffect(()=>tobeinView.current.scrollIntoView({ behavior: "smooth" }),[])

  return(
  
    <div ref={tobeinView} className="  text-white flex flex-row cursor-pointer justify-center items-center h-full">
        <div className="ml-5 h-full flex flex-row items-center sm:opacity-100 opacity-0">
          <div className="bg-black rounded-full h-[32px] w-[32px] flex items-center justify-center ml-1 ">
          <Icon name="prev" />
          </div>
          <div className="bg-black rounded-full h-[32px] w-[32px] flex items-center justify-center ml-1">
          <Icon name="next" />
          </div>
        </div>    
    </div>
);}

const OnCenterAndLeftSided = ({ children }) => (
  <section className="w-100 bg-spotify-top h-24  flex flex-row">
    <div
      alt="Arrow button part"
      className="w-2/3 h-full bg-spotify-top flex items-start"
    >
      <ArrowButtons />
    </div>
    <div className="w-1/3 h-full flex flex-row items-center">
      <div className="w-auto flex flex-row items-center absolute right-5 text-lg font-bold">
        {children}
      </div>
    </div>
  </section>
);

const LoginButton = () => (
  <button className="ml-3 hover:scale-105  text-black  rounded-full h-16 w-32 bg-white font-bold">
    Login
  </button>
);

export const TopHeader = () => {
  return (
    <OnCenterAndLeftSided>
      <span className="ml-3  text-side-bar  hover:text-white cursor-pointer pr-3 md:hidden hidden lg:block">Premium</span>
      <span className="ml-3  text-side-bar  hover:text-white cursor-pointer pr-3 md:hidden hidden lg:block" >Support</span>
      <span className="ml-3  text-side-bar  hover:text-white cursor-pointer pr-3">Download</span>
      <span className="ml-3  text-white font-bold pr-2">|</span>

      <span className="ml-3  text-side-bar  hover:text-white cursor-pointer pr-3">Signup</span>
      <LoginButton />
    </OnCenterAndLeftSided>
  );
};
