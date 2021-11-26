import React from "react";
import { Routes as Switch, Route } from "react-router-dom";

import { HomePage } from "../Pages/homePage";
import { DetailPage } from "../Pages/detailPage";

interface PropsRouter {}

const index = (props: PropsRouter) => {
  return (
    <Switch>
      <Route
        path="/"
        element={<HomePage name={"Rudy Galih"}></HomePage>}
      ></Route>
      <Route path="/detail" element={<DetailPage />}></Route>
    </Switch>
  );
};

export default index;
