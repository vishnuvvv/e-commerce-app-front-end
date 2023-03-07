
import React, { useState } from "react";
import "./Slider.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItems } from "../../data";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (direction) => {};


  return (
    <div className="slider-container">
      <div className="slider-arrow" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </div>
      <div className="slider-wrapper">
        {sliderItems.map((item) => (
          <div className="slide-box" bg={item.bg}>
            <div className="image-box">
              <img className="image" src={item.img} alt="can not display" />
            </div>
            <div className="info-box">
              <h1 className="title">{item.title}</h1>
              <p className="description">{item.description}</p>
              <button className="button">SHOW NOW</button>
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

//https://img.freepik.com/free-photo/blonde-woman-with-perfect-wavy-hairstyle-pink-party-dress-posing-hight-heels_273443-1636.jpg?w=1380&t=st=1678209852~exp=1678210452~hmac=33b1d5ac196084b5c1376d0f7a2284e2932fce8ae00d4a804b2c6a7966d59cf3
//https://img.freepik.com/free-photo/pretty-shopping-woman-smiling-wearing-hat-isolated-green-background_231208-4932.jpg?w=1380&t=st=1678203920~exp=1678204520~hmac=a20d6be322e85eaa839ec0f7a7b808271d0865585cd3cfd7e62810b967e458c6
//https://img.freepik.com/free-photo/full-length-portrait-happy-excited-girl-bright-colorful-clothes-holding-shopping-bags-while-standing-showing-peace-gesture-isolated_231208-5946.jpg?w=1380&t=st=1678204130~exp=1678204730~hmac=ddde804c753da35de0c07f5799c733cbd66732ffb50e91a1aecc4805a025bdce
/*const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
*/