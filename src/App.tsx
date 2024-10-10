import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import MainPage from "./pages/MainPage.tsx";
import Login from "./pages/Login.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
