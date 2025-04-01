import PopularExpedition from "./PopularExpedition";
import PopularTrekking from "./PopularTrekking";
import Reviews from "./Reviews";
import Faq from "./Faq";
import NewHero from "./new-hero";
import WhyChoose from "./why-choose";
import InternationalTrips from "./international-trips";
import Cta from "./cta";
function HomeMain() {
  return (
    <>
      <div className=" w-full overflow-hidden">
        <NewHero />
        <div className="w-full relative  content-main  bg-white   mt-[100vh]">
          <div className="md:w-11/12 w-11/12 mx-auto">
            <WhyChoose />
          </div>

          <div className="w-full mx-auto">
            <PopularExpedition />
          </div>
          <InternationalTrips />
          <div className="w-full mx-auto">
            <PopularTrekking />
          </div>
          <div className="md:w-11/12 w-11/12 mx-auto">
            <Faq />
          </div>

          <Cta />
          <div className="md:w-11/12 w-11/12 mx-auto">
            <Reviews />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMain;
