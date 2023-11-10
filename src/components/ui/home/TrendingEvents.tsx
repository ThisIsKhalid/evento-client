'use client'
 
import EventCardOne from "../shared/EventCardOne";
import SectionTitle from "../shared/SectionTitle";

import { Button } from "antd";

const TrendingEvents = () => {
  return (
    <div className="mainContainer text-cBlack">
      <SectionTitle title="Trending Events" />

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 lg:mx-20 md:mx-10 mx-5 mt-10">
        <EventCardOne />
        <EventCardOne />
        <EventCardOne />
        <EventCardOne />
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button
          type="primary"
          className="hover:bg-white hover:text-cBlack border-cBlack bg-cBlack text-white hover:font-semibold"
        >
          View All
        </Button>
      </div>
    </div>
  );
};

export default TrendingEvents;
