import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement("h1", null, "Hi I Am Aman");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

// Day-3 work

// const element = React.createElement(
//   "div",
//   null,
//   React.createElement("h1", null, "Main heading"),
//   React.createElement("h2", null, "Sub heading"),
//   React.createElement("h3", null, "small heading")
// );

//  JSX BASICS

// const Element = () => <h1>Main Heading</h1>;
// console.log(Element);

// const HeadComponent = () => (
//   <div>
//     <Element />
//     <h2>Sub heading</h2>
//     <h3>small heading</h3>
//   </div>
// );

// Exercise

// const LeftTop = () => <div className="LT">This is left top.</div>;
// const RightTop = () => <div className="RT">This is right top.</div>;
// const LeftBottom = () => <div className="LB">This is left bottom.</div>;
// const RightBottom = () => <div className="RB">This is right bottom.</div>;

// const MainDiv = () => (
//   <div className="main">
//     <LeftTop />
//     <RightTop />
//     <div className="center">
//       <p className="name">I am Aman</p>
//       <p className="age">I am 20 yrs old</p>
//     </div>
//     <LeftBottom />
//     <RightBottom />
//   </div>
// );

// Assignment 3

import logo from "./logo.png";
import icon from "./user.png";

const Header = () => (
  <div className="header">
    <div className="logo">
      <img src={logo} alt="this is logo" />
    </div>
    <div className="search-bar">
      <input type="search" placeholder="enter your search here" />
    </div>
    <div className="icon">
      <img src={icon} alt="this is user icon" />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
