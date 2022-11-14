// import Head from "next/head";
// import Image from "next/image";
import Navbar from "../components/Navbar";
import userIcon from "../assets/userIcon.jpg";
import Image from "next/image";
import Leftbar from "../components/Leftbar";

export default function Home() {
  return (
    <div className="flex">
      <div className="border-r-2 border-gray-500 pt-36	 ">
        <Navbar />
      </div>
      <main className="w-[40%] mobile:w-[80%]  md:w-[60%] lg:w-[50%] xl:w-[35%]  h-screen border-r-2 border-gray-500">
        <div className="border-t-2 border-b-2 border-gray-500 ">
          <div className="text-white text-2xl ml-6 mt-3"> Página Inicial </div>
          <div className=" flex justify-center gap-12 mt-8 mb-2">
            <Image
              src={userIcon}
              alt="etzinho"
              className=" w-12 h-12 rounded-full ml-6"
            />
            <textarea
              className="resize-none bg-gray-700 text-white w-[80%] h-16  outline-none focus:border-b-[1px] border-gray-800"
              placeholder="O que está acontecendo?"
            ></textarea>
          </div>
          <div className="flex justify-end ml-6 mb-2">
            <button className="bg-white p-2 rounded-full text-white bg-orange-300 w-[90px] mb-2 mr-4">
              Tweetar
            </button>
          </div>
        </div>

      </main>
      <div>
          <Leftbar />
        </div>

    </div>
  );
}
