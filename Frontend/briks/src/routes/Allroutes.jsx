import { Routes, Route } from "react-router-dom";
import {Housepage} from "../pages/housepage";
import {SingleHousePage} from "../pages/singlehousepage";

export const AllRoutes = () => {
    return (
      <div>
        <Routes>
          <Route path="/posts/" element={<Housepage/>}></Route>
          <Route path="/posts/:id" element={<SingleHousePage />}></Route>
        </Routes>
      </div>
    );
  };
  
  