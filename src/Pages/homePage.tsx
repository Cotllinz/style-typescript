import React, { ReactNode } from "react";

interface Props {
  name: string;
  age?: number;
  children?: React.ReactNode | React.ReactNode[];
}

export const homePage = (props: Props) => {
  const { age, name, children } = props;
  return (
    <div>
      <h1>Nama Saya {name}</h1>
      <br />
      {children}
      <h2>Umur Saya {age}</h2>
    </div>
  );
};
