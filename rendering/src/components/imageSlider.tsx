"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useTheme } from "@/components/theme-provider";

// import "./ImageSlider.css";

export const ImageSlider = () => {
    const settings = {
        dots: true,
    };
//   const theme = useTheme();
  return (
    <>
      {/* <h1
        style={{
          color: theme.colors.secondary,
        }}
      >
        Server Route
      </h1> */}
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <img src="https://picsum.photos/400/350" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/350" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/350" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/350" alt="placeholder" />
          </div>
        </Slider>
      </div>
    </>
  );
}