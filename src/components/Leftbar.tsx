import { AiOutlineSearch } from "react-icons/ai";
import Trending from "./Trending";

export default function Leftbar() {
  return (
    <>
      <div className="flex-col mobileTablet:hidden">
        <label
          htmlFor="buscar"
          className="relative text-gray-400 focus-within:text-gray-600 block ml-8"
        >
          <AiOutlineSearch className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3" />
          <input
            id="buscar"
            type="buscar"
            name="buscar"
            placeholder="Buscar no twitter"
            className="rounded-full w-80 text-center leading-8 text-white	bg-[#273340] p-2 outline-none	"
          />
        </label>

        <div className="bg-[#273340] rounded-2xl ml-7 mt-6 p-5">
          <div className="text-white text-xl font-bold mb-6"> O que está acontecendo </div>
       
       
       <Trending/>
        </div>

      </div>
    </>
  );
}
