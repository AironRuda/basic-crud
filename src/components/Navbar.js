import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://www.shutterstock.com/image-photo/laughing-caucasian-female-student-group-260nw-1870386598.jpg"
          alt=""
        />
        <span>Airon</span>
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
