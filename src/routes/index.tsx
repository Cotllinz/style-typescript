import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { homePage as HomePage } from "../Pages/homePage";
interface Props {}

const index = (props: Props) => {
  return (
    <Switch>
      <Route
        path="/"
        element={<HomePage name={"Rudy Galih"}></HomePage>}
      ></Route>
    </Switch>
  );
};

export default index;
