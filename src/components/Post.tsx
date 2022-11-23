import userIcon from "../assets/userIcon.jpg";
import Image from "next/image";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FiShare } from "react-icons/fi";

export default function Post() {
  return (
    <>
      <div className="flex gap-2 border-b   border-gray-600 pt-4">
        <Image
          src={userIcon}
          alt="etzinho"
          className=" w-12 h-12 rounded-full ml-6	"
        />
        <div className="flex-col">
          <div className="flex gap-1">
            <div className="text-white">Leonardo Gomes</div>
            <div className="text-[#6C7985]">@Rugpull123</div>
            <div className="text-[#6C7985]"> · </div>
            <div className="text-[#6C7985]"> 10 min </div>
          </div>
          <div className="flex text-white break-all mr-3 mb-3">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <div className="flex gap-24 mb-3">
            {" "}
            <FaRegComment color="gray" size={22} />
            <AiOutlineRetweet color="gray" size={22} />
            <AiOutlineHeart color="gray" size={22} /> 
            <FiShare color="gray" size={22} />
          </div>
        </div>
      </div>
    </>
  );
}
