import React, { useState } from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import fakeData from "../fakeData.json";
import { ListContext } from "../context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  const [accountList, setAccountList] = useState(fakeData);

  return (
    <ListContext.Provider value={{ accountList }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setAccountList={setAccountList} />} />
          <Route
            path="/Detail/:id"
            element={
              <Detail
                accountList={accountList}
                setAccountList={setAccountList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ListContext.Provider>
  );
};

export default Router;
