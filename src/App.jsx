import { BrowserRouter, Route, Routes } from "react-router-dom";
import CodeRoad from "./Routes/CodeRoad";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/coderoad/*" element={<CodeRoad />} />
        {/* <Route path="/on-bording" element={<OnBording />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
