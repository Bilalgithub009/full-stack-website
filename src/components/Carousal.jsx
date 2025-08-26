import { Carousel } from "antd";
import React from "react";
import images from "../assets/image1.jpg"; // Assuming you have an image file in your assets
import images2 from "../assets/image2.jpg"; // Assuming you have an image file in your assets
import { div } from "framer-motion/client";

const carouselItems = [
  {
    image: images,
    title: "Premium Men's Boxers",
    description: "Experience unmatched comfort and style with our latest collection."
  },
  {
    image: images2,
    title: "Under Jeans Essentials",
    description: "Seamless fit and breathable fabric for everyday wear."
  },
  {
    image: "https://link-to-your-image3.jpg", // lingerie still life
    title: "Ladies' Underwear",
    description: "Elegance and comfort combined in our new women's line."
  }
];

function Carousalha() {
  return (
    
      <div className="relative max-w-[1200px] mx-auto rounded-2xl overflow-hidden shadow-xl ">
      <Carousel autoplay dotPosition="bottom">
        {carouselItems.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.image}
              alt={`slide-${index}`}
              className="w-full h-[380px] md:h-[500px] object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-white px-6">
              <h2 className="text-2xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
                {item.title}
              </h2>
              <p className="text-sm md:text-lg max-w-[700px] mb-5 opacity-90">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  
  );
}

export default Carousalha;
