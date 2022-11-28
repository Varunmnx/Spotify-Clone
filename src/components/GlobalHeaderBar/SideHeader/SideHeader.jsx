import React from "react";
import spotifyLogo from "../../Icons/spotifylogo.svg";
import { Library, Home, Liked, Playlist, Search,CookiesAndIcons } from "./SideIcons/SideIcons";

const SideBarOuterWrapper = ({ children }) => {
  return (
      <header className="w-1/5 bg-black h-screen">
        {children}
      </header>
  );
};

const SpotifyLogoIcon = () => (
  <img alt="temp assets" src={spotifyLogo} className="w-32 pt-5 pl-2 mb-5" />
);

const LikedandPlayListWrapper = ({children}) => (
  <div className="h-2/4 w-auto list-none text-white  text-2xl ml-8 mt-7">
    <div className="flex justify-center flex-col w-auto ml-2  ">{children}</div>
  </div>
);



export const SideHeader = () => {
  return (
        <SideBarOuterWrapper>
          <div className="h-1/4 w-auto ml-8 list-none text-white text-2xl">
            <SpotifyLogoIcon />
              <div className="flex justify-center flex-col w-auto ml-2 ">
                <Home />
                <Search />
                <Library />
              </div>
          </div>
          <LikedandPlayListWrapper>
              <Playlist />
              <Liked />
            </LikedandPlayListWrapper>
          <CookiesAndIcons />
        </SideBarOuterWrapper>
  );
};
