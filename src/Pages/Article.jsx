import { useState } from "react";
import ArticleCard from "../Components/ArticleCard";
import Header from "../Components/Header";

export default function Article() {
  const [post] = useState({
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
    comments: [
      {
        id: 1,
        user: { userName: "RajMH69", firstName: "Raj", lastName: "MH" },
        message:
          "It is seems to be the most practically explained article that I have found till date thanks  @Nithinsivakumar for sharing such deep knowledge and insider insights on this post",
        replies: [
          {
            id: 1,
            user: {
              userName: "Poornachandra M",
              firstName: "Poorna",
              lastName: "Chandra",
            },
            message: "Thank you for the appreciation ",
          },
        ],
      },
    ],
  });
  return (
    <div className="md:mx-5 mt-5">
      <Header />
      <ArticleCard data={post} />
    </div>
  );
}
