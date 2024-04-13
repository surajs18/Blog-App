import HeaderSymbol from "../Components/HeaderSymbol";
import SignUpForm from "../Components/SignUpForm";

export default function Signup() {
  return (
    <div className="md:mx-5 mt-5">
      <HeaderSymbol />
      <div className="h-[80dvh] flex flex-wrap md:min-gap-5 gap-10 mt-5">
        <SignUpForm />
      </div>
    </div>
  );
}
