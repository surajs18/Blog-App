import { useState } from "react";
import InputBox from "./UI/InputBox";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [emailColor, setEmailColor] = useState("");

  const [password, setPassword] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    setEmailColor("Green");
    setPasswordColor("Green");
    console.log(email);
  }
  return (
    <div className="bg-[#1F2123] mx-auto my-auto ">
      <form
        className="flex flex-col gap-5 p-5 rounded-xl"
        onSubmit={submitHandler}
      >
        <InputBox
          inputValue={email}
          setInputValue={setEmail}
          type="email"
          required={true}
          boxColor={emailColor}
          size={"larger"}
          placeholder="Example@gmail.com"
          clearable={true}
          autoFocus={true}
          header="Email"
        />

        <InputBox
          inputValue={password}
          setInputValue={setPassword}
          type="password"
          required={true}
          boxColor={passwordColor}
          size={"larger"}
          placeholder="********"
          autoFocus={false}
          header="Password"
        />

        <button
          type="submit"
          className="bg-[#62CA9C] hover:bg-[#5dd9a1] text-[#000] py-3 rounded-xl"
        >
          Login
        </button>
      </form>
      <p className="text-center pb-5 cursor-default">OR</p>
      <div className="pb-5 flex flex-col gap-5">
        <button className="bg-[#f1f1f6] hover:bg-[#eaebed] text-[#000] py-3 rounded-xl w-[90%] mx-auto flex items-center justify-center gap-5">
          <FcGoogle fontSize={30} /> Sign up with Google
        </button>
        <button className="bg-[#f1f1f6] hover:bg-[#eaebed] text-[#000] py-3 rounded-xl w-[90%] mx-auto flex items-center justify-center gap-5">
          <FaGithub fontSize={30} /> Sign up with GitHub
        </button>
      </div>
    </div>
  );
}
