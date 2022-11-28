import React from "react";
import { Icon } from "../../Icons/Icons";
import { useRef,useEffect } from "react";

const WhiteAndPointedOnHover = ({ children }) => (
  <span className="ml-3  text-side-bar  hover:text-white cursor-pointer pr-3">
    {children}
  </span>
);

const ArrowButtons = () =>{ 
  let tobeinView = useRef()
  useEffect(()=>tobeinView.current.scrollIntoView({ behavior: "smooth" }),[])

  return(
  <div>
    <div ref={tobeinView} className="absolute left-1/3 text-white flex flex-row cursor-pointer justify-center items-center h-full">
      <div>
        <Icon name="prev" />
      </div>
      <div>
        <Icon name="next" />
      </div>
    </div>
  </div>
);}

const OnCenterAndLeftSided = ({ children }) => (
  <section className="w-100 bg-spotify-top h-24  flex flex-row">
    <div
      alt="Arrow button part"
      className="w-2/3 h-full bg-spotify-top relative"
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
      <WhiteAndPointedOnHover>Premium</WhiteAndPointedOnHover>
      <WhiteAndPointedOnHover>Support</WhiteAndPointedOnHover>
      <WhiteAndPointedOnHover>Download</WhiteAndPointedOnHover>
      <span className="ml-3  text-white font-bold pr-2">|</span>
      <WhiteAndPointedOnHover>Signup</WhiteAndPointedOnHover>
      <LoginButton />
    </OnCenterAndLeftSided>
  );
};
