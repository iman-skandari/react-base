import React from "react";

const ProfileCard = ({ name, title, bio }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#a80af6",
      }}
    >
      <div>
        <h2>
          <b>{name}</b>
        </h2>
        <h3>{title}</h3>
        <p style={{ width: "300px", textAlign: "center" }}>{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
