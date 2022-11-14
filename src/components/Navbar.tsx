import { IconType } from "react-icons";
import { Data } from "../mocks/NavbarButtonsData";

export default function Navbar() {
  return (
    <>
      <div className="flex-1 bg-gray-700 mr-8 mobile:pl-4 md:pl-11 lg:pl-56 xl:pl-96 ">
        {Data.map((Button, i) => (
          <button className=" text-white flex gap-3 text-2xl   hover:border-solid hover:bg-gray-600 	 hover:bg-opacity-5 hover:bg-gray-400 mb-8">
            <Button.Icon size={35} /> <div className="mobile:hidden">   {Button.Title}   </div>
          </button>
        ))}
      </div>
    </>
  );
}
//pl-2 sm:pl-8 md:pl-11 lg:pl-56 xl:pl-96