import React from "react";
import "./ImageCard.css"

const ImageCard = ({ name, title, bio,img }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        color: "#a80af6",
        margin: "2rem",
    
        border: "1px solid red",
        padding: "0.25rem",
        width: "480px",
        borderRadius: "16px",
      }}
    >
      <img className="imgCard"
        style={{ width: "450px", borderRadius: "8px",cursor:'pointer',    marginTop: "1rem", }}
        src={img}
        alt="image"
      />
      <h2>
        <b style={{ fontSize: "30px" }}>{name}</b>
      </h2>
      <h3>{title}</h3>
      <p style={{ width: 300 }}>{bio}</p>
    </div>
  );
};

export default ImageCard;
