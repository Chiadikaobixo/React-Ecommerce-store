import React from "react";
import { useState } from "react";
import background2 from "../../assets/store-01.JPG";
import store1 from "../../assets/store-02.JPG";
import store2 from "../../assets/store-03.JPG";
import store3 from "../../assets/store-04.JPG";
import { useEffect } from "react";

const ShowCaseImage = () => {
  const [image, setImage] = useState(background2);
  const backgroundImages = [store1, store2, store3];

  const randomImages = () => {
    let rand = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    setImage(backgroundImages[rand]);
  };

  useEffect(() => {
    setTimeout(randomImages, 3000);
  });

  return (
    <div className="showCaseImage d-flex justify-content-center ">
      <img
        className="image-responsive image-fluid spotImage"
        src={image}
        alt="show case"
      />
    </div>
  );
};

export default ShowCaseImage;