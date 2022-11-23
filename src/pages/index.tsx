// import Head from "next/head";
// import Image from "next/image";
import Navbar from "../components/Navbar";
import userIcon from "../assets/userIcon.jpg";
import Image from "next/image";
import Leftbar from "../components/Leftbar";
import Post from "../components/Post";

export default function Home() {
  return (
    <div className="flex">
      <div className="border-r border-gray-600  pt-4">
        <Navbar />
      </div>
      <main className=" w-[40%] mobile:w-[80%] h-[100%]  md:w-[65%] lg:w-[50%] xl:w-[40%]  2xl:w-[30%]   h-screen border-r border-gray-600">
        <div className="border-t border-b border-gray-600 ">
          <div className="text-white text-2xl ml-6 mt-3"> Página Inicial </div>
          <div className=" flex  gap-6 mt-8 mb-2">
            <Image
              src={userIcon}
              alt="etzinho"
              className=" w-12 h-12 rounded-full ml-6"
            />
            <textarea
              className="resize-none bg-[#15202B] text-white w-[80%] h-16  outline-none focus:border-b border-gray-600 text-2xl text"
              placeholder="O que está acontecendo?"
            ></textarea>
          </div>
          <div className="flex justify-end ml-6 mb-2">
            <button className="p-2 rounded-full text-white bg-orange-300 w-[90px] mb-2 mr-4">
              Tweetar
            </button>
          </div>
        </div>
        <div>
          <Post />
          <Post />

          <Post />
          <Post />
          <Post />

          <Post />


        </div>
      </main>
      <div>
        <Leftbar />
      </div>
    </div>
  );
}
