import React from "react";
import image from "../assets/bmw-offer.png";

export const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <img src={image} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <h1>Welcome to car rent service</h1>
      </div>
    </>
  );
};
