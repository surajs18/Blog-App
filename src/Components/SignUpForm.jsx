import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import InputBox from "./UI/InputBox";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [firstNameColor, setFirstNameColor] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameColor, setLastNameColor] = useState("");

  const [email, setEmail] = useState("");
  const [emailColor, setEmailColor] = useState("");

  const [password, setPassword] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordColor("Red");
      setConfirmPasswordColor("Red");
      return;
    }
    setFirstNameColor("Green");
    setLastNameColor("Green");
    setEmailColor("Green");
    setPasswordColor("Green");
    console.log(email);
  }
  return (
    <div className=" bg-[#1F2123] md:mx-auto my-auto">
      <form
        className="flex flex-col gap-5 p-5 rounded-xl"
        onSubmit={submitHandler}
      >
        <div className="flex gap-5">
          <InputBox
            inputValue={firstName}
            setInputValue={setFirstName}
            type="name"
            required={true}
            boxColor={firstNameColor}
            size={"larger"}
            placeholder="Eg. Ramesh"
            clearable={false}
            autoFocus={true}
            header="First Name"
            width="8rem"
          />
          <InputBox
            inputValue={lastName}
            setInputValue={setLastName}
            type="email"
            required={true}
            boxColor={lastNameColor}
            size={"larger"}
            placeholder="Eg. Kovil"
            clearable={false}
            autoFocus={false}
            header="Last Name"
            width="8rem"
          />
        </div>
        <InputBox
          inputValue={email}
          setInputValue={setEmail}
          type="email"
          required={true}
          boxColor={emailColor}
          size={"larger"}
          placeholder="Example@gmail.com"
          clearable={true}
          autoFocus={false}
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

        <InputBox
          inputValue={confirmPassword}
          setInputValue={setConfirmPassword}
          type="password"
          required={true}
          boxColor={confirmPasswordColor}
          size={"larger"}
          placeholder="********"
          autoFocus={false}
          header="Confirm Password"
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
      <p className="pb-5 text-center cursor-default">
        Already have an account{" "}
        <Link className="text-[#62CA9C] cursor-pointer" to={"/"}>
          Log in
        </Link>
      </p>
    </div>
  );
}
