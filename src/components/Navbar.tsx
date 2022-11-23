import { GrTwitter } from "react-icons/gr";
import { Data } from "../mocks/NavbarButtonsData";

export default function Navbar() {
  return (
    <>

      <div className="flex-1 bg-[#15202B] mr-8 mobile:ml-4 md:ml-14 lg:ml-24 lgxl:ml-42 2xl:ml-96 w-85">
      <GrTwitter size={30} color="white" className="ml-3 mb-2"/>

        {Data.map((Button) => (
          <button className="text-white font-medium flex gap-3 text-xl   hover:border-solid hover:bg-green-600 p-3 	 hover:bg-opacity-20 hover:rounded-full mb-2" key={Button.Title}>
            <Button.Icon size={35} /> <div className="navbarBreakpoint:hidden">   {Button.Title}   </div>
          </button>
        ))}
      </div>
    </>
  );
}
//pl-2 sm:pl-8 md:pl-11 lg:pl-56 xl:pl-96