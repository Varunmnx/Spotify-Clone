
import { Icon } from "../../../Icons/Icons";

export const Liked = () => {
  return (
    <span className="flex flex-row mt-5  items-center  text-side-bar hover:text-white cursor-pointer">
      <Icon name="heartFilled" />
      <span className="flex flex-row ml-3 justify-center items-center  font-bold text-base">
        Liked songs
      </span>{" "}
    </span>
  );
};


export const Home = () => {
  return (
    <span className="flex flex-row mt-5 items-center  text-side-bar hover:text-white cursor-pointer">
    <Icon name="home"/>
    <span className="flex flex-row ml-3 justify-center items-center  font-bold text-base">
      Home
    </span>{" "}
  </span>  )
}


export const Library = () => {
    return (
      <span className="flex flex-row mt-5  items-center  text-side-bar hover:text-white cursor-pointer">
      <Icon name="collection"/>
    <span className="flex flex-row ml-3 justify-center items-center  cursor-pointer font-bold text-base">
      Your Library
    </span>{" "}
  </span>
    )
  }

  export const Playlist = () => {
    return (
      <span className="flex flex-row mt-5  items-center  text-side-bar hover:text-white cursor-pointer">
      <Icon name="plus"/>
    <span className="flex flex-row ml-3 justify-center items-center  font-bold text-base">
    Create Playlist
    </span>{" "}
  </span> 
    )
  }
  
  
export const Search = () => {
    return (
      <span className="flex flex-row mt-5  items-center  text-side-bar hover:text-white cursor-pointer">
      <Icon name="search"/>
      <span className="flex flex-row ml-3 justify-center items-center font-bold text-base">
        Search
      </span>
    </span>
    )
  }


export const CookiesAndIcons =()=>(
<div className="text-side-bar list-none ml-10 text-sm">
  <li className=" hover:text-white cursor-pointer mt-2">Cookies</li>
  <li className=" hover:text-white cursor-pointer mt-2">Privacy</li>
</div>
)
  