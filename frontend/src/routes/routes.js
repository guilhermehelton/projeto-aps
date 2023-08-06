import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login/index";
import { Home } from "../pages/Home/index";
import { PrivateRoutes } from ".";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
