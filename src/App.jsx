import { BrowserRouter, Route, Routes } from "react-router-dom";
import CodeRoad from "./Routes/CodeRoad";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/coderoad/*" element={<CodeRoad />} />
        {/* <Route path="/on-bording" element={<OnBording />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
