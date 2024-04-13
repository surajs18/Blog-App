import { FaUserAlt } from "react-icons/fa";
import { RiHeartsLine, RiHeartsFill } from "react-icons/ri";
import { FaHashtag, FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

export default function PostBox({ data }) {
  return (
    <div className="bg-[#1F2023] p-5 cursor-default">
      <div className="flex flex-wrap items-center gap-3 p-2">
        <FaUserAlt fontSize={30} className="text-[#5347B8]" />
        <p className="text-[#62CA9C] font-bold text-lg md:text-2xl cursor-pointer">
          {data.title}
        </p>
        <GoDotFill fontSize={10} className="md:inline hidden" />
        <p className="text-[#5347B8]">{data.status}</p>
        <GoDotFill fontSize={10} />
        <p className="text-[#5347B8]">{data.author}</p>
      </div>

      <p className="text-[#B6ADFF] md:px-[3rem] mb-3 h-[48px] line-clamp-2 md:h-[96px] md:line-clamp-4 cursor-pointer">
        {data.description}
      </p>

      <div className=" text-[#B6ADFF] flex justify-between items-center pb-2">
        <div className="flex items-center gap-5">
          {data.liked ? (
            <RiHeartsFill className="cursor-pointer text-2xl md:text-4xl" />
          ) : (
            <RiHeartsLine fontSize={30} className="cursor-pointer" />
          )}

          <ul>
            <li className="bg-[#5347B8] rounded-full px-[1rem] text-sm">
              {data.category}
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-5">
          <FaHashtag
            fontSize={30}
            className="cursor-pointer text-2xl md:text-4xl"
          />
          {data.liked ? (
            <FaBookmark
              fontSize={30}
              className="cursor-pointer text-2xl md:text-4xl"
            />
          ) : (
            <FaRegBookmark
              fontSize={30}
              className="cursor-pointer text-2xl md:text-4xl"
            />
          )}
        </div>
      </div>
    </div>
  );
}
