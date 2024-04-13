import Logo from "../assets/Logo.svg";

export default function HeaderSymbol() {
  return (
    <img
      src={Logo}
      alt="CodeRoad"
      className="w-[16rem] ml-5 md:ml-0 md:w-[32rem] "
    />
  );
}
