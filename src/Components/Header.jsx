import HeaderSymbol from "./HeaderSymbol";
import { FaUserAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const loc = useLocation();
  const [ham, setHam] = useState(false);

  document.addEventListener("mouseup", () => {
    if (ham) {
      setHam(false);
    }
  });
  const list = [
    <li
      key={1}
      className={` hover:text-[#62CA9C] cursor-pointer font-semibold ${
        loc?.pathname === "/coderoad/posts"
          ? "text-[#62CA9C]"
          : "text-[#5347B8]"
      }`}
    >
      Posts
    </li>,
    <li
      key={2}
      className={` hover:text-[#62CA9C] cursor-pointer font-semibold ${
        loc?.pathname === "/coderoad/notifications"
          ? "text-[#62CA9C]"
          : "text-[#5347B8]"
      }`}
    >
      Notifications
    </li>,
    <li
      key={3}
      className={` hover:text-[#62CA9C] cursor-pointer mx-auto font-semibold ${
        loc?.pathname === "/coderoad/profile"
          ? "text-[#62CA9C]"
          : "text-[#5347B8]"
      }`}
    >
      <FaUserAlt fontSize={30} />
    </li>,
  ];

  return (
    <nav className="md:px-5 flex justify-between items-center">
      <HeaderSymbol />
      <ul className="md:flex gap-8 items-center hidden">{list}</ul>
      <FaHamburger
        onClick={() => setHam((prev) => !prev)}
        fontSize={30}
        className="md:hidden inline mr-2 text-[#B6ADFF]"
      />
      {ham && (
        <div className="absolute top-[4rem] right-3 bg-[#26252f] border-2 border-[#56555d] rounded-lg p-2 ">
          <ul className="flex flex-col gap-5">{list}</ul>
        </div>
      )}
    </nav>
  );
}
