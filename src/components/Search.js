import React from "react";

const search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input placeholder="Find an user" type="text" />

        <div className="userChat">
          <img
            src="https://www.shutterstock.com/image-photo/laughing-caucasian-female-student-group-260nw-1870386598.jpg"
            alt=""
          />
          <div className="userChatInfo">
            <span>Airon Ruda</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default search;
