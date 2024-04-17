import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { GoDotFill } from "react-icons/go";

export default function NotificationBox({ data }) {
  const navigate = useNavigate();
  const notifications = {
    like: "liked",
    comment: "commented on",
    edit: "updated",
    post: "shared",
  };
  return (
    <div
      onClick={() => navigate(`/coderoad/article/${data?.id}`)}
      className="bg-[#1F2023] px-5 py-1 cursor-default w-[19rem] md:w-[25rem] h-fit mx-auto"
    >
      <div className="flex flex-wrap justify-between items-center gap-3 p-2">
        <FaUserAlt fontSize={30} className="text-[#5347B8]" />
        <p className="text-[#5347B8] text-xs md:text-base">{data.status}</p>
      </div>

      <p className=" text-[#B6ADFF] md:px-[3rem] line-clamp-2 h-[48px] text-center md:h-[96px] md:line-clamp-4 cursor-pointer text-sm md:text-base">
        <span className="font-bold">{data.author}</span> just{" "}
        {notifications[data.type]} a post -{" "}
        <span className="text-[#62CA9C] font-bold text-lg md:text-xl cursor-pointer">
          {data.title}
        </span>
      </p>
    </div>
  );
}
