import React, { useRef, useState } from "react";
import "./Slider.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItems } from "../../assets/data";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleClick = (direction) => {
    const sliderWidth = sliderRef.current.clientWidth;
    const sliderWrapper = sliderRef.current;
    let newCurrentSlide;

    if (direction === "left") {
      newCurrentSlide = currentSlide > 0 ? currentSlide - 1 : 2;
    } else {
      newCurrentSlide = currentSlide < 2 ? currentSlide + 1 : 0;
    }
    console.log("direction:", direction);
    console.log("currentSlide:", currentSlide);
    console.log("newCurrentSlide:", newCurrentSlide);
    console.log("sliderWidth:", sliderWidth);

    setCurrentSlide(newCurrentSlide);
    sliderWrapper.style.transform = `translateX(${
      -newCurrentSlide * sliderWidth
    }px)`;
  };

  return (
    <div className="slider-container">
      <div className="slider-arrow" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </div>
      <div className="slider-wrapper" ref={sliderRef}>
        {sliderItems.map((item) => (
          <div
            className="slide-box"
            style={{ backgroundColor: item.bg }}
            key={item.id}
          >
            <div className="image-box">
              <img className="image" src={item.img} alt="can not display" />
            </div>
            <div className="info-box">
              <h1 className="title">{item.title}</h1>
              <p className="description">{item.description}</p>
              <Link to={"/products"}>
                <button className="button">SHOW NOW</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-arrow" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default Slider;
