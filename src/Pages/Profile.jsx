import Header from "../Components/Header";
import ProfileForm from "../Components/ProfileForm";

export default function Profile() {
  return (
    <div className="md:mx-5 mt-5">
      <Header />
      <div className="mt-5 ">
        <ProfileForm />
      </div>
    </div>
  );
}
