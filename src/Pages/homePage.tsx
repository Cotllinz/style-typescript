import React from "react";
import { useNavigate } from "react-router";
import "./main.css";
import { RGPBar } from "../Component";
interface Props {
  name: string;
  age?: number;
  children?: React.ReactNode | React.ReactNode[];
}

export const HomePage = (props: Props) => {
  const { age, name, children } = props;
  const Navigate = useNavigate();
  /* Use Ref */
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
        <RGPBar.RGPItem
          classActived="actived"
          routerItems={[
            {
              to: "/",
              namePath: "Home",
            },
            {
              to: "/detail",
              namePath: "Detail Page",
            },
            {
              to: "/about",
              namePath: "About Me",
            },
          ]}
        ></RGPBar.RGPItem>
      </RGPBar>
      <h1 onClick={() => Navigate("/detail")}>Nama Saya {name}</h1>
      <br />
      {children}
      <h2>Umur Saya {age}</h2>
    </div>
  );
};
