// src/components/CartoonAnimation.jsx
import React from "react";
import Lottie from "lottie-react";
import typing from "../animation/Animation.json"; // path to your downloaded file
import discuss from "../animation/Animation2.json";
import academic from "../animation/Animation3.json";
import preference from "../animation/Animation4.json";
const CartoonAnimation = () => {
  return (
    <div className="w-full max-w-sm">
      <Lottie animationData={typing} loop={false} />
    </div>
  );
};

export default CartoonAnimation;

export const Animation2 = ()=>{
    return (
        <div classname="w-full max-w-sm">
            <Lottie animationData={discuss} loop={true}/>
        </div>
    )
}

export const Animation3=()=>{
    return (
        <div className="w-full max-w-sm">
            <Lottie animationData={academic} loop={true}/>
        </div>
    )
}

export const Animation4=()=>{
    return (
        <div className="w-full max-w-sm">
        <Lottie animationData={preference} loop={true}/>
        </div>
    )
}
