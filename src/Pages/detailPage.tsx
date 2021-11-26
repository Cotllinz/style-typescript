import React from "react";
import { useLocation } from "react-router";
import { RGPBar } from "../Component";
import "./main.css";
interface Props {}

export const DetailPage = (props: Props) => {
  let location = useLocation();

  console.log(location);
  return (
    <div>
      <RGPBar
        fullWidth={false}
        logo={
          <img
            src="https://thumbs.dreamstime.com/b/angry-lion-head-logo-vector-icon-design-mascot-cartoon-illustration-155193509.jpg"
            alt="images"
          ></img>
        }
        logoName="Kukuntul"
      >
        <RGPBar.RGPItem classActived="actived"></RGPBar.RGPItem>
      </RGPBar>
    </div>
  );
};
