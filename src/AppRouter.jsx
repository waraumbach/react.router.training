import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Users from "./Components/Users";
import NavBar from "./Components/NavBar";
import Weather from "./Components/Weather";

function AppRouter() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </>
  );
}
export default AppRouter;
