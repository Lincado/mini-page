import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login/Login";
import { About } from "../pages/About/About";
import { Register } from "../pages/Register/Register";
import { MyRoute } from "./MyRoute";
import { Feed } from "../pages/Feed/Feed";
export const RoutePages = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/feed"
          element={
            <MyRoute>
              <Feed />
            </MyRoute>
          }
        />
      </Routes>
    </>
  );
};
