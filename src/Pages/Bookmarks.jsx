import { useState } from "react";
import Header from "../Components/Header";
import PostBox from "../Components/PostBox";
// import { useNavigate } from "react-router-dom";

export default function Bookmarks() {
  //   const navigate = useNavigate();
  const [posts] = useState([
    {
      id: 1,
      title: "MEARN for beginners",
      status: "Posted on 9 April",
      author: "Nithin Sivakumar",
      description:
        "MEARN (Mongoose Express Axios React in Node) it a common basic dev term among the web developers which is the basic requirement or pre-requisite for a web development role in the development sector of the coding industry also cabcdefghijk",
      liked: true,
      saved: true,
      saveCount: 1590,
      likeCount: 298,
      category: "Web development",
    },
    {
      id: 2,
      title: "MEARN for beginners",
      status: "Posted on 9 April",
      author: "Nithin Sivakumar",
      description:
        "MEARN (Mongoose Express Axios React in Node) it a common basic dev term among the web developers which is the basic requirement or pre-requisite for a web development role in the development sector of the coding industry also cabcdefghijk",
      liked: true,
      saved: false,
      saveCount: 159000,
      likeCount: 2980,
      category: "Web development",
    },
    {
      id: 3,
      title: "MEARN for beginners",
      status: "Posted on 9 April",
      author: "Nithin Sivakumar",
      description:
        "MEARN (Mongoose Express Axios React in Node) it a common basic dev term among the web developers which is the basic requirement or pre-requisite for a web development role in the development sector of the coding industry also cabcdefghijk",
      liked: false,
      saved: true,
      category: "Web development",
    },
    {
      id: 4,
      title: "MEARN for beginners",
      status: "Posted on 9 April",
      author: "Nithin Sivakumar",
      description:
        "MEARN (Mongoose Express Axios React in Node) it a common basic dev term among the web developers which is the basic requirement or pre-requisite for a web development role in the development sector of the coding industry also cabcdefghijk",
      liked: false,
      saved: false,
      saveCount: 1590,
      likeCount: 2980,
      category: "Web development",
    },
  ]);

  //   const [ads] = useState({ title: "THE BACKEND Course", img: "", url: "/" });
  return (
    <div className="md:mx-5 mt-5">
      <Header />
      <div className="mt-5 flex flex-col-reverse md:flex-row px-5 gap-5">
        <div className="flex flex-wrap gap-3 md:gap-8 mt-5 justify-center md:justify-start">
          {posts?.map((i) => (
            <PostBox data={i} key={i.id} />
          ))}
        </div>
        {/* <div className="bg-[#B6ADFF] flex md:flex-col flex-grow-0 md:w-2/6 items-center gap-5 font-semibold rounded-xl px-5 py-2">
          <div className="h-[5rem] md:h-[30rem] flex ">
            <img
              src={ads?.img}
              alt="db"
              loading="lazy"
              className=" my-auto mx-auto"
            />
          </div>
          <p className="cursor-default text-[#5347B8] w-[8rem] text-center md:text-lg line-clamp-3">
            {ads?.title}
          </p>
          <button
            onClick={() => navigate(ads?.url)}
            className="bg-[#62CA9C] text-[#5347B8] py-2 px-4 rounded-full md:text-lg"
          >
            Join Now!
          </button>
        </div> */}
      </div>
    </div>
  );
}
