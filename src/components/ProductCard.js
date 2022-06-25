import React from "react";
import CustomImage from "./CustomImage";
import CustomTypo from "./CustomTypo";

export default function ProductCard({
  image = null,
  title = "",
  name = "",
  price = 0,
}) {
  return (
    <div>
      <CustomImage
        src={image}
        alt={title}
        className="w-full h-104 md-down:h-80 sm-down:h-56 object-cover"
      />
      <div className="w-full flex flex-col justify-center items-center">
        <CustomTypo variant="body2">{title}</CustomTypo>
        <CustomTypo variant="subtitle2">{name}</CustomTypo>
        <CustomTypo variant="h3" color="primary">
          ${price}
        </CustomTypo>
      </div>
    </div>
  );
}
