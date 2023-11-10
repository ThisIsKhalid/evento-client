'use client'

import SectionTitle from '../shared/SectionTitle';
import EventCardOne from '../shared/EventCardOne';
import { Button } from 'antd';

const FeaturedEvents = () => {
  return (
    <div className="mainContainer text-cBlack">
      <SectionTitle title="Featured Events" />

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
}

export default FeaturedEvents