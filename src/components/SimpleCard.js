import React from "react";
import CustomImage from "./CustomImage";
import CustomTypo from "./CustomTypo";

export default function SimpleCard({ image = null, title = "" }) {
  return (
    <div className="relative">
      <CustomImage
        src={image}
        alt={title}
        className="w-full h-136 md-down:h-80 sm-down:h-56 object-cover"
      />
      <div className="absolute bottom-0 w-full h-28 md-down:h-20 sm-down:h-14 bg-primary text-white flex justify-center items-center">
        <CustomTypo variant="h2">{title}</CustomTypo>
      </div>
    </div>
  );
}
