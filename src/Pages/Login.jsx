import HeaderSymbol from "../Components/HeaderSymbol";
import LoginForm from "../Components/LoginForm";

export default function Login() {
  return (
    <>
      <div className="md:mx-5 mt-5">
        <HeaderSymbol />
        <div className="h-[80dvh] flex flex-wrap md:min-gap-5 gap-10 mt-5 md:mt-0">
          <p className="font-semibold text-2xl md:text-4xl my-auto mx-auto">
            Find the best ways
            <br />
            and practices for your <br />
            <span className="text-[#5347B8]">&lt;code</span>{" "}
            <span className="text-[#62CA9C]">road&gt;</span>
          </p>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
