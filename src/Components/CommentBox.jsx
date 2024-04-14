import { useState } from "react";
import TextBox from "./UI/TextBox";
import { FaPaperPlane } from "react-icons/fa";

export default function CommentBox({ id }) {
  const [reply, setreply] = useState("");
  const [boxColor, setBoxColor] = useState("");

  function submit() {
    if (reply.trim().length === 0) {
      setBoxColor("Red");
      return;
    }
    console.log({ message: reply, id: id });

    setBoxColor("");
    setreply("");
  }
  return (
    <div className="flex flex-wrap w-fit gap-3 md:gap-5 justify-center md:justify-start items-center ">
      <TextBox
        textValue={reply}
        setTextValue={setreply}
        boxColor={boxColor}
        readOnly={false}
        disabled={false}
        placeholder={id === null ? "Add a comment..." : "Type the message!"}
        autoFocus={false}
        width="17rem"
      />
      <FaPaperPlane
        className="text-lg md:text-2xl cursor-pointer"
        onClick={() => submit()}
      />
    </div>
  );
}
