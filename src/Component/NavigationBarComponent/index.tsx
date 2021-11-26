import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface RGPNavigationBar {
  logo?: ReactNode;
  logoName?: string;
  fullWidth?: boolean;
  fontClass?: string;
  PositionNav?: "fixed" | "sticky" | "absolute" | "relative" | "static";
  children?: ReactNode | ReactNode[];
}
interface RGPNavigationItems {
  routerItems?: any[];
  classActived?: any;
}
const RGPItem = (props: RGPNavigationItems) => {
  const { routerItems, classActived = "" } = props;
  console.log(routerItems);

  const Items = () => {
    return (
      <>
        {routerItems?.map((items: any) => {
          return (
            <>
              <NavLink
                to={items.to}
                className={({ isActive }) =>
                  `block  mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4 ${
                    isActive ? classActived : "text-pink-700"
                  }`
                }
              >
                {items.namePath}
              </NavLink>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <Items />
      </div>
    </div>
  );
};
const RGPBar = (props: RGPNavigationBar) => {
  const {
    logo,
    logoName,
    fullWidth = true,
    fontClass,
    PositionNav,
    children,
  } = props;
  const ifLogoisImages = (Array.isArray(logo) ? logo : [logo]).find(
    (el) => el?.type === "img"
  );

  return (
    <nav
      className={`flex items-center justify-between ${
        PositionNav ? PositionNav : ""
      } ${
        fontClass ? fontClass : "font-fontPoppins"
      } flex-wrap bg-red-400 p-6 container ${
        fullWidth ? "mx-auto" : "min-w-full"
      }`}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {logo ? (
          <div className="flex items-center">
            {ifLogoisImages ? (
              <img
                src={ifLogoisImages.props.src}
                className="fill-current h-8 w-8 mr-2"
                alt={ifLogoisImages.props.alt}
              ></img>
            ) : (
              logo
            )}
            <span>{logoName ? logoName : null}</span>
          </div>
        ) : (
          <>
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              Tailwind CSS
            </span>
          </>
        )}
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {children}
    </nav>
  );
};
RGPBar.RGPItem = RGPItem;
export { RGPBar };
