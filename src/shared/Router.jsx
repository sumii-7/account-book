import React, { createContext, useState } from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import fakeData from "../fakeData.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const listcontext = createContext(fakeData);

const Router = () => {
  const [accountlist, setAccountlist] = useState(fakeData);

  return (
    <listcontext.Provider value={accountlist}>
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
