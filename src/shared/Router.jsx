import React, { useState } from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import fakeData from "../fakeData.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  const [accountlist, setAccountlist] = useState(fakeData);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home accountlist={accountlist} setAccountlist={setAccountlist} />
          }
        />
        <Route
          path="/Detail/:id"
          element={
            <Detail accountlist={accountlist} setAccountlist={setAccountlist} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
