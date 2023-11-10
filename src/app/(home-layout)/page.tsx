import Banner from "@/components/ui/home/Banner";
import EventCategories from "@/components/ui/home/EventCategories";
import EventPlanners from "@/components/ui/home/EventPlanners";
import FeaturedEvents from "@/components/ui/home/FeaturedEvents";
import HowItWorks from "@/components/ui/home/HIW";
import Newsletter from "@/components/ui/home/Newsletter";
import OfficeLocation from "@/components/ui/home/OfficeLocation";
import TrendingEvents from "@/components/ui/home/TrendingEvents";
import UpcomingEvents from "@/components/ui/home/UpcomingEvents";
import UserTestimonials from "@/components/ui/home/UserTestimonials";

export default function Home() {
  return (
    <main>
        <Banner />
        <TrendingEvents />
        <EventCategories />
        <FeaturedEvents />
        <UpcomingEvents />
        <EventPlanners />
        <UserTestimonials />
        <HowItWorks />
        <Newsletter />
        <OfficeLocation />
    </main>
  );
}
