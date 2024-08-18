import React from "react";

export const Img = ({ img }) => {
  return (
    <>
      <img
        style={{ width: "70px", border: "1px dashed #ccc" }}
        src={img}
        alt="noo"
      />
    </>
  );
};
