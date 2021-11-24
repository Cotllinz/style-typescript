import React from "react";
interface MetroCardProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  cardFlush?: boolean;
  shadow?: boolean;
}
interface MetroCardHeaderProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}
interface MetroCardHeaderTitleProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}
interface MetroCardHeaderToolbarProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  title?: any;
}
interface MetroCardBodyProps {
  scroll?: { height: number };
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}
interface MetroCardFooterProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}
const Header = (props: MetroCardHeaderProps) => {
  const { children, className = "" } = props;
  return <div className={`card-header ${className}`}>{children}</div>;
};
const Title = (props: MetroCardHeaderToolbarProps) => {
  const { children, className = "" } = props;
  return <h3 className={`card-title ${className}`}>{children}</h3>;
};
const Toolbar = (props: MetroCardHeaderTitleProps) => {
  const { children, className = "" } = props;
  return (
    <div className={`card-toolbar ${className}`}>
      {/*<button type="button" className="btn btn-sm btn-light">*/}
      {/*  Action*/}
      {/*</button>*/}
      {children}
    </div>
  );
};
const Body = (props: MetroCardBodyProps) => {
  const { children, className = "", scroll } = props;
  const style = scroll ? { height: scroll.height } : {};
  return (
    <div
      className={`card-body ${scroll ? "card-scroll" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
const Footer = (props: MetroCardFooterProps) => {
  const { children, className = "" } = props;
  return <div className={`card-footer ${className}`}>{children}</div>;
};
const Layer = (props: MetroCardFooterProps) => {
  const { children, className = "" } = props;
  return (
    <div className={`overlay-layer bg-dark bg-opacity-25 ${className}`}>
      {children}
    </div>
  );
};
const MetroCard = (props: MetroCardProps) => {
  const { children, className = "", cardFlush, shadow = true } = props;
  const isLayerAvailable = (
    Array.isArray(children) ? children : [children]
  ).find(
    // @ts-ignore
    (el) => el?.type?.name === "Layer"
  );
  return (
    <div
      className={`card card-custom ${cardFlush ? "card-flush" : ""} ${
        shadow ? "shadow" : ""
      } ${isLayerAvailable ? "overlay overflow-hidden" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

Header.Title = Title;
Header.Toolbar = Toolbar;
MetroCard.Header = Header;
MetroCard.Body = Body;
MetroCard.Layer = Layer;
MetroCard.Footer = Footer;

export { MetroCard };
