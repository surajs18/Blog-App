import { FaUserAlt } from "react-icons/fa";
import { RiHeartsLine, RiHeartsFill } from "react-icons/ri";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6"; //FaHashtag,
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export default function PostBox({ data }) {
  const navigate = useNavigate();
  function countValue(count) {
    const k = Math.floor(count / 10 ** 3);
    const m = Math.floor(count / 10 ** 6);
    const b = Math.floor(count / 10 ** 9);

    if (b > 0) return `${b}B`;
    if (m > 0) return `${m}M`;
    if (k > 0) return `${k}K`;
    return count;
  }

  function save(id) {
    console.log(id);
  }

  function unsave(id) {
    console.log(id);
  }

  function like(id) {
    console.log(id);
  }

  function unlike(id) {
    console.log(id);
  }

  return (
    <div className="bg-[#1F2023] p-5 cursor-default">
      <div className="flex flex-wrap items-center gap-3 p-2">
        <FaUserAlt fontSize={30} className="text-[#5347B8]" />
        <p
          className="text-[#62CA9C] font-bold text-lg md:text-2xl cursor-pointer line-clamp-1"
          onClick={() =>
            navigate(`/coderoad/article/${data?.id}`, { smooth: true })
          }
        >
          {data.title}
        </p>
        <GoDotFill fontSize={10} className="md:inline hidden" />
        <p className="text-[#5347B8] text-xs md:text-base">{data.status}</p>
        <GoDotFill fontSize={10} />
        <p className="text-[#5347B8] text-xs md:text-base">{data.author}</p>
      </div>

      <p
        className="text-[#B6ADFF] md:px-[3rem] mb-3 h-[48px] line-clamp-2 md:h-[96px] md:line-clamp-4 cursor-pointer"
        onClick={() =>
          navigate(`/coderoad/article/${data?.id}`, { smooth: true })
        }
      >
        {data.description}
      </p>

      <div className=" text-[#B6ADFF] flex justify-between gap-4 items-center pb-2">
        <div className="flex items-center gap-5">
          <span className="flex flex-col justify-center items-center">
            {data.liked ? (
              <RiHeartsFill
                className="cursor-pointer text-2xl md:text-4xl"
                onClick={unlike}
              />
            ) : (
              <RiHeartsLine
                fontSize={30}
                className="cursor-pointer"
                onClick={like}
              />
            )}
            <p className="text-xs">{countValue(data?.likeCount)}</p>
          </span>
          <p className="bg-[#5347B8] text-center rounded-full px-[1rem] text-sm">
            {data.category}
          </p>
        </div>

        <div className="flex items-center gap-5 pr-0 md:pr-8">
          {/* <FaHashtag
            fontSize={30}
            className="cursor-pointer text-2xl md:text-4xl"
          /> */}
          <span className="flex gap-2 justify-center items-center">
            {data.saved ? (
              <FaBookmark
                fontSize={30}
                className="cursor-pointer text-2xl md:text-4xl"
                onClick={unsave}
              />
            ) : (
              <FaRegBookmark
                fontSize={30}
                className="cursor-pointer text-2xl md:text-4xl"
                onClick={save}
              />
            )}
            <p className="text-xl font-thin w-[2rem]">
              {countValue(data?.saveCount)}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
