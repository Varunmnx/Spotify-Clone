import React from "react";
import { TopHeader } from "../GlobalHeaderBar/TopHeader/TopHeader";
import { SideHeader } from "../GlobalHeaderBar/SideHeader/SideHeader";
import { MusicCategories } from "./Categories/MusicCategories";
const LandingPageAligner = ({ children }) => (
  <div className="w-screen h-screen flex flex-row">{children}</div>
);

const TopHeaderAndSpotifyContentWrapper = ({ children }) => (
  <>
    <div className="w-full h-screen overflow-hidden">{children}</div>
  </>
);

export const LandingPage = () => {
  return (
    <LandingPageAligner>
      <SideHeader />
      <TopHeaderAndSpotifyContentWrapper>
              <TopHeader />
              <MusicCategories />
      </TopHeaderAndSpotifyContentWrapper>
    </LandingPageAligner>
  );
};
