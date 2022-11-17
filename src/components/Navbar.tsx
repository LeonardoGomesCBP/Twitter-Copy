import { IconType } from "react-icons";
import { Data } from "../mocks/NavbarButtonsData";

export default function Navbar() {
  return (
    <>
      <div className="flex-1 bg-gray-700 mr-8 mobile:ml-4 md:ml-14 lg:ml-24 lgxl:ml-42 2xl:ml-96 w-85">
        {Data.map((Button, i) => (
          <button className=" text-white flex gap-3 text-2xl   hover:border-solid hover:bg-gray-600 	 hover:bg-opacity-20  mb-8">
            <Button.Icon size={35} /> <div className="navbarBreakpoint:hidden">   {Button.Title}   </div>
          </button>
        ))}
      </div>
    </>
  );
}
//pl-2 sm:pl-8 md:pl-11 lg:pl-56 xl:pl-96