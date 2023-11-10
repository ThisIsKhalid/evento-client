"use client"
import { Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

const Banner = () => {
  return (
    <div className="mainContainer flex items-center justify-center py-0 md:min-h-[80vh] min-h-[50vh]">
      <div className="text-center text-cBlack">
        <h1 className="font-bold">Spotlight Your Creativity </h1>
        <h1 className="font-bold">
          Create <span className="text-cOrange">Unforgettable</span> Events
        </h1>
        <div className="mt-10 flex md:flex-row flex-col items-center gap-5 justify-center">
          <button className="bg-cOrange text-cWhite font-bold uppercase px-10 py-4 rounded-full border-none transform transition-transform duration-500 hover:scale-110">
            Get Started
          </button>

          <button className="bg-cWhite text-cBlack font-bold uppercase px-10 py-4 rounded-full border-none transform transition-transform duration-500 hover:scale-110">
            Explore Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
