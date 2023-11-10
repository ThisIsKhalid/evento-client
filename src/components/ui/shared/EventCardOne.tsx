'use client'

import Image from "next/image";
import event1 from "../../../../public/images/event/event1.jpg";

const EventCardOne = () => {
  return (
    <div className="rounded-lg shadow-lg border border-solid border-cWhite relative h-60">
      <Image
        src={event1}
        alt="event1"
        width={300}
        className="w-full rounded-t-lg"
      />
      <div className="absolute bg-white rounded flex flex-col items-center justify-center top-2 right-2 px-1 py-2 text-xs font-semibold">
        <span>16</span>
        <span>Jan</span>
      </div>
      <div className="absolute bg-white rounded flex flex-col items-center justify-center top-[132px] left-2 px-2 py-1 text-xs font-semibold">
        <span>Sports</span>
      </div>
      <div className="p-2 text-cBlack">
        <h3 className="font-semibold">
          Vikkals Vikram - Crowd work show - LIVE
        </h3>
      </div>
    </div>
  );
};

export default EventCardOne;
