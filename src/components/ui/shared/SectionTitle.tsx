import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 items-center">
      <div className="bg-cBlack h-[2px] w-full" />
      <h2 className="text-center font-semibold">{title}</h2>
      <div className="bg-cBlack h-[2px]" />
    </div>
  );
};

export default SectionTitle;
