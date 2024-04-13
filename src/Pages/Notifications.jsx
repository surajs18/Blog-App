import { useState } from "react";
import Header from "../Components/Header";
import NotificationBox from "../Components/NotificationBox";

export default function Notifications() {
  const [posts] = useState([
    {
      id: 1,
      title: "MEARN for beginners",
      status: "Posted on 9 April",
      author: "Nithin Sivakumar",
      type: "like",
    },
    {
      id: 2,
      title: "MEARN for beginners",
      status: "Posted on 9 April",
      author: "Nithin Sivakumar",
      type: "comment",
    },
    {
      id: 3,
      title: "MEARN for beginners",
      status: "Posted on 9 April",
      author: "Nithin Sivakumar",
      type: "post",
    },
    {
      id: 4,
      title: "MEARN for beginners",
      status: "Posted on 9 April",
      author: "Nithin Sivakumar",
      type: "edit",
    },
  ]);
  return (
    <div className="md:mx-5 mt-5">
      <Header />
      {/* <div className=" flex flex-col-reverse md:flex-row gap-5"> */}
      <div className="flex flex-wrap gap-3 md:gap-8 mt-5 justify-center md:justify-start">
        {posts?.map((i) => (
          <NotificationBox data={i} key={i.id} />
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
      {/* </div> */}
    </div>
  );
}
