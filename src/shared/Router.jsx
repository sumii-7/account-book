import React, { useState } from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import fakeData from "../fakeData.json";
import { listcontext } from "../context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  const [accountlist, setAccountlist] = useState(fakeData);

  return (
    <listcontext.Provider value={{ accountlist }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setAccountlist={setAccountlist} />} />
          <Route
            path="/Detail/:id"
            element={
              <Detail
                accountlist={accountlist}
                setAccountlist={setAccountlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </listcontext.Provider>
  );
};

export default Router;
