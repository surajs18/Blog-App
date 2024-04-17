import { FaUserAlt } from "react-icons/fa";
import InputBox from "./UI/InputBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileForm() {
  const navigate = useNavigate();
  const [userName] = useState("RajM56");
  const [profilePic] = useState("");
  const [firstName, setFirstName] = useState("Raj");
  const [firstNameColor, setFirstNameColor] = useState("");

  const [lastName, setLastName] = useState("M");
  const [lastNameColor, setLastNameColor] = useState("");

  const [email, setEmail] = useState("rajm@gmail.com");
  const [emailColor, setEmailColor] = useState("");

  const [hiddenPassword, setHiddenPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (hiddenPassword) {
      if (password !== confirmPassword) {
        setPasswordColor("Red");
        setConfirmPasswordColor("Red");
        return;
      } else if (password === confirmPassword) {
        setPasswordColor("Green");
        setFirstNameColor("Green");
        setLastNameColor("Green");
        setEmailColor("Green");
        console.log({ email, password, firstName, lastName });
      }
    } else {
      setFirstNameColor("Green");
      setLastNameColor("Green");
      setEmailColor("Green");
      console.log({ email, firstName, lastName });
    }
  }

  return (
    <div className="bg-[#1F2023] rounded-xl p-10 w-fit mx-auto">
      <div className="flex flex-col justify-center items-center gap-5 ">
        {profilePic ? (
          <img src={profilePic} alt="Profile Image" loading="lazy" />
        ) : (
          <FaUserAlt className=" text-[10rem] text-[#62CA9C]" />
        )}
        <p className="cursor-default text-[#B6ADFF] font-semibold">
          User Name: {userName}
        </p>
      </div>

      <form
        className="my-10 flex flex-col gap-10 items-center justify-center"
        onSubmit={submitHandler}
      >
        <div className="flex flex-wrap items-center justify-around gap-5">
          <InputBox
            inputValue={firstName}
            setInputValue={setFirstName}
            type="name"
            required={true}
            boxColor={firstNameColor}
            size={"larger"}
            placeholder="Eg. Ramesh"
            clearable={true}
            autoFocus={true}
            header="First Name"
          />

          <InputBox
            inputValue={lastName}
            setInputValue={setLastName}
            type="name"
            required={true}
            boxColor={lastNameColor}
            size={"larger"}
            placeholder="Eg. Kovil"
            clearable={true}
            autoFocus={false}
            header="Last Name"
          />
        </div>

        {hiddenPassword && (
          <div className="flex flex-wrap items-center justify-around gap-5">
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
          </div>
        )}

        <div className="flex flex-wrap items-center justify-around gap-5">
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

          <button
            type="submit"
            className="bg-[#62CA9C] hover:bg-[#5dd9a1] text-[#000] py-3 rounded-xl w-[18rem] mt-6"
          >
            Update Account
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-5 items-start ml-8 md:ml-5">
        <div className="flex flex-wrap gap-10">
          <button
            className="text-[#B6ADFF] w-[18rem] py-2 text-center hover:bg-[#B6ADFF] hover:text-black rounded-lg duration-150"
            onClick={() => setHiddenPassword((prev) => !prev)}
          >
            Change Password
          </button>

          <button
            className="text-[#B6ADFF] w-[18rem] py-2 text-center hover:bg-[#B6ADFF] hover:text-black rounded-lg duration-150"
            onClick={() => navigate("/coderoad/profile/bookmarks")}
          >
            View bookmarks
          </button>
        </div>

        <div className="flex flex-wrap gap-10">
          <button
            className="text-[#B6ADFF] w-[18rem] py-2 text-center hover:bg-[#B6ADFF] hover:text-black rounded-lg duration-150"
            onClick={() => navigate("/coderoad/profile/new-post")}
          >
            Add a new post
          </button>

          <button
            className="text-[#B6ADFF] w-[18rem] py-2 text-center hover:bg-[#B6ADFF] hover:text-black rounded-lg duration-150"
            onClick={() => navigate("/coderoad/profile/posts")}
          >
            View or update posts
          </button>
        </div>
      </div>
    </div>
  );
}
