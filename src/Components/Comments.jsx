import { useState } from "react";
import { FaHashtag } from "react-icons/fa";
import CommentBox from "./CommentBox";

export default function Comments({ comments }) {
  const [hideReply, setHideReply] = useState(false);

  return (
    <div className="bg-[#232427] p-5 cursor-default rounded-lg">
      <p className="text-[#B6ADFF] text-2xl md:text-4xl flex items-center gap-3">
        <FaHashtag className="text-1xl md:text-3xl" /> Comments
      </p>

      <CommentBox id={null} />

      <ul className="mt-3">
        {comments.map((comment) => (
          <li className="ml-[2rem]" key={comment.id}>
            <p className="text-[#62CA9C] text-lg md:text-2xl flex items-center gap-3">
              <FaHashtag className="text-lg md:text-2xl" />{" "}
              {comment?.user?.userName}
            </p>
            <p>{comment?.message}</p>

            <p
              className="text-[#B6ADFF] flex w-fit items-center gap-1 pt-4 cursor-pointer"
              onClick={() => setHideReply((prev) => !prev)}
            >
              <FaHashtag className="" /> Reply
            </p>

            {hideReply && <CommentBox id={comment.id} />}

            <ul className="pt-5">
              {comment?.replies?.map((reply) => (
                <li className="ml-[2rem]" key={reply.id}>
                  <p className="text-[#B6ADFF] text-lg md:text-2xl flex items-center gap-3">
                    <FaHashtag className="text-lg md:text-2xl" />{" "}
                    {reply?.user?.userName}
                  </p>
                  <p>{reply?.message}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
