import { Routes, Route } from "react-router-dom";
import {Housepage} from "../Pages/housepage";
import {SingleHousePage} from "../Pages/singlehousepage";
import { Home } from "../Pages/Home";
import Login  from "../Pages/Login";
import Signup from "../Pages/Signup";

export const AllRoutes = () => {
    return (
      <div>
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/posts/" element={<Housepage/>}></Route>
          <Route path="/posts/:id" element={<SingleHousePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </div>
    );
  };
  
  