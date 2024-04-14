import { FaUserAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Comments from "./Comments";

export default function ArticleCard({ data }) {
  return (
    <div className="bg-[#1F2023] p-5 mt-5 cursor-default">
      <div className="flex flex-wrap items-center gap-3 p-2">
        <FaUserAlt fontSize={30} className="text-[#5347B8]" />
        <p className="text-[#62CA9C] font-bold text-lg md:text-2xl cursor-pointer ">
          {data.title}
        </p>
        <GoDotFill fontSize={10} />
        <p className="text-[#5347B8] text-xs md:text-base">{data.status}</p>
        <GoDotFill fontSize={10} />
        <p className="text-[#5347B8] text-xs md:text-base">{data.author}</p>
      </div>

      <p className="text-[#B6ADFF] md:px-[3rem] mb-3">{data.description}</p>
      <Comments comments={data?.comments} />
    </div>
  );
}
