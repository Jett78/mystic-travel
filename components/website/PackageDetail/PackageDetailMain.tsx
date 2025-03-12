"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "@/components/shared/primary-button";
import { Link as ScrollLink, Element } from "react-scroll";
import RelatedPackages from "./related-packages";
import PackageBanner from "./package-banner";
import MajorTopInfo from "./major-top-info";
import Title from "./title";
import Itenary from "./itenary";
import PackageInclusion from "./package-inclusion";
import PackageExclusion from "./package-exclusion";
import PackageOverview from "./package-overview";
import PackageGallery from "./package-gallery";

type Props = {};

function PackageDetailMain({}: Props) {
  const [offset, setOffset] = useState(-300);

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth < 768) {
        setOffset(-150); // Offset for mobile screens
      } else {
        setOffset(-250); // Offset for larger screens
      }
    };
    updateOffset();
  }, []);

  return (
    <main>
      {/* hero banner */}
      <PackageBanner />

      <div className="py-[5rem] w-11/12 md:w-10/12 flex flex-col md:flex-row justify-center relative items-start gap-3 mx-auto">
        {/* tab  link  */}
        <div className="mx-auto  w-full md:w-[15%] flex-col gap-2 backdrop-blur-sm sticky top-[4rem] overflow-x-scroll md:overflow-x-visible md:top-[7rem] left-0  flex  font-medium items-center">
          <div className="w-full py-1 overflow-x-scroll md:overflow-x-visible flex md:flex-col gap-2 font-medium items-center">
            {buttonLabels.map((item, index) => (
              <ScrollLink
                key={index}
                activeClass="active"
                to={item.label.replace(/\s+/g, "-").toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                offset={offset}
                className={`cursor-pointer w-full flex items-center gap-2 text-nowrap  text-secondary-500 hover:scale-105 duration-300  md:px-4 py-3 text-sm ]`}
              >
                <Image
                  src={item.img}
                  alt="icons"
                  width={1000}
                  height={1000}
                  className="md:w-6 md:h-6 w-5 h-5 object-cover object-center"
                />
                <h2 className="lg:block hidden xl:text-sm lg:text-[10px] font-semibold">
                  {" "}
                  {item.label}
                </h2>{" "}
              </ScrollLink>
            ))}
          </div>

          <Link href="/booking" className="w-full">
            <PrimaryButton title="Book Now" className="py-3 w-full" />
          </Link>
        </div>

        {/* sticky top detail  */}
        <div className="w-full md:w-[85%] flex flex-col gap-2">
          <MajorTopInfo
            title="Everest Base Camp Trekking"
            item={importantdata}
          />

          {/* overview */}
          <div
            id="overview"
            className="w-full mx-auto p-3 md:p-10 border rounded-md   bg-primary-50/20  "
          >
            <Title title="Overview" />
            <PackageOverview />
          </div>

          {/* iternary  */}
          <div className="space-y-12">
            <div
              id="itinerary"
              className="w-full mt-8 mx-auto p-3 md:p-10   bg-primary-50/20 border rounded-md  "
            >
              <Title title="Itenary" />
              <div className="w-full h-full flex flex-col gap-2">
                {ItineraryData.map((item, index) => (
                  <Itenary key={index} index={index} item={item} />
                ))}
              </div>
            </div>

            {/* route map */}
            <div
              id="route-map"
              className="w-full  mx-auto p-3 md:p-10   bg-primary-50/20 border rounded-md  "
            >
              <Title title="Route Map" />
              <Image
                width={1000}
                height={1000}
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="overflow-hidded w-full object-cover object-center h-[70vh] rounded-md my-4"
                alt=""
              />
            </div>

            {/* Inclusion */}
            <div
              id="inclusions"
              className="w-full mx-auto p-3 md:p-10   bg-primary-50/20 border rounded-md  "
            >
              <Title title="Inclusions" />
              <div className="w-full h-full flex flex-col gap-2">
                {Inclusion.map((item, index) => (
                  <PackageInclusion key={index} index={index} item={item} />
                ))}
              </div>
            </div>

            {/* exclusion */}
            <div
              id="exclusions"
              className="w-full mx-auto p-3 md:p-10   bg-primary-50/20 border rounded-md  "
            >
              <Title title="Exclusions" />
              <div className="w-full h-full flex flex-col gap-2">
                {Exclusion.map((item, index) => (
                  <PackageExclusion key={index} index={index} item={item} />
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div
              id="gallery"
              className="w-full  mx-auto p-3 md:p-10   bg-primary-50/20 border rounded-md  "
            >
              <Title title="Gallery" />
              <PackageGallery />
            </div>

            {/* fixed dates */}
            <div
              id="fixed-dates"
              className="w-full mx-auto p-3 md:p-10   bg-primary-50/20 border rounded-md  "
            >
              <Title title="Fixed Date" />
              <div className="w-full h-full flex flex-col gap-2">
                <div className="w-full  py-5  overflow-hidden   items-center flex flex-col justify-between px-3 md:px-10">
                  {/* table  */}
                  <table className="w-full">
                    <tr className="border-b border-primary-400 h-[3rem] text-sm whitespace-nowrap md:text-base text-left">
                      <th>Date</th>
                      <th>Days</th>
                      <th>Status</th>
                      <th>Group Size</th>
                    </tr>
                    <tr className="border-b h-[10rem] md:h-20 border-primary-400 text-secondary-400 text-sm">
                      <td>
                        <div>
                          <span className="font-semibold text-secondary-500">
                            Start:{" "}
                          </span>
                          2024-09-01
                        </div>
                        <div>
                          <span className="font-semibold text-secondary-500">
                            End:{" "}
                          </span>
                          2024-09-07
                        </div>
                      </td>
                      <td>45 days</td>
                      <td>Booking Open</td>
                      <td>2 - 16 PAX</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedPackages />
    </main>
  );
}

export default PackageDetailMain;

const importantdata = [
  {
    title: "Group Size",
    info: "10 people",
    img: "/infoicon/group (2).png",
  },
  {
    title: "Trip Duration",
    info: "14 Days",
    img: "/infoicon/timer.png",
  },
  {
    title: "Mountain Ranges",
    info: "Everest range",
    img: "/infoicon/mountain.png",
  },
  {
    title: "Max Altitude",
    info: "8848m",
    img: "/infoicon/mountains.png",
  },
  {
    title: "Best Seasons",
    info: "Spring,Autumn,Spring",
    img: "/infoicon/seasonal.png",
  },
  {
    title: "Activities",
    info: "Alpine Trekking",
    img: "/infoicon/accomodations.png",
  },
  {
    title: "Difficulties",
    info: "Moderate",
    img: "/infoicon/difficulty.png",
  },
  {
    title: "Accomodations",
    info: "Hotel/Lodge/",
    img: "/infoicon/accomodations.png",
  },
];

const buttonLabels = [
  { id: 1, label: "Overview", img: "/infoicon/eye.png" },
  { id: 2, label: "Itinerary", img: "/infoicon/route.png" },
  { id: 3, label: "Route map", img: "/infoicon/chart.png" },
  { id: 4, label: "Inclusions", img: "/infoicon/greentick.png" },
  { id: 5, label: "Exclusions", img: "/infoicon/close.png" },
  { id: 6, label: "Gallery", img: "/infoicon/gallery.png" },
  { id: 7, label: "Fixed Dates", img: "/infoicon/calendar.png" },
];

const ItineraryData = [
  {
    day: "01",
    title: "Travel To Pokhara From Kathmandu Valley In The West.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "02",
    title: "Explore the lakes and caves in Pokhara.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "03",
    title: "Visit the Peace Pagoda and enjoy the mountain views.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "04",
    title: "Hike to Sarangkot for sunrise.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "05",
    title: "Return to Kathmandu.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
];

const Inclusion = [
  {
    id: 1,
    title: "Arrival and Departure",
    description:
      "Private vehicle transportation from the airport to the hotel and back.",
  },
  {
    id: 2,
    title: "Kathmandu Hotel Accommodation",
    description:
      "Four nights in a 4-star hotel in Kathmandu, with a single room and a bed and breakfast package.",
  },
  {
    id: 3,
    title: "Greetings for Dinner",
    description:
      "A welcome dinner at a typical tourist restaurant in Kathmandu with the office staff.",
  },
  {
    id: 4,
    title: "Customs Clearance",
    description:
      "Support for cargo clearance at Nepalese Customs, with charges applicable for the clearance service.",
  },
  {
    id: 5,
    title: "Permits",
    description:
      "Royalty for mountaineering expeditions and a permit fee imposed by the Nepalese government for climbing Mount Manaslu, and accessing conservation area.",
  },
  {
    id: 6,
    title: "Representative Officer",
    description:
      "One government liaison officer provided with complete equipment, salary, and accommodation.",
  },
  {
    id: 7,
    title: "Waste Management",
    description:
      "Fees for the transfer of human waste shipments and depositing garbage.",
  },
  {
    id: 8,
    title: "Insurance",
    description:
      "Insurance coverage for medical expenses and emergency rescue services for all Nepalese staff involved in the trek and expedition.",
  },
  {
    id: 9,
    title: "Map",
    description: "Map for Trekking and Climbing",
  },
  {
    id: 10,
    title: "Large Travel Bag",
    description: "A large bag provided by Epeak Expedition",
  },
  {
    id: 11,
    title: "Member Transportation Services",
    description:
      "Travel by road from Kathmandu to Dharapani via Besishashar, and on the return journey, go from Machha Khola back to Kathmandu, following the outlined itinerary.",
  },
  {
    id: 12,
    title: "Transportation of Expedition Equipment",
    description:
      "Transportation of essential equipment for all members and staff will be provided from Kathmandu to Arukhet via jeep, from Arukhet to Sama Gaun via helicopter, and then to the base camp by porters. On the return journey, transportation will be arranged from the base camp to Sama Gaun by porters, from Sama Gaun to Arukhet by helicopter, and from Arughat back to Kathmandu via jeep.",
  },
  {
    id: 13,
    title: "Personal Belongings Allowance",
    description:
      "Each member is allowed up to 70 kg of personal baggage during the trek, which will be carried by porters or yaks.",
  },
  {
    id: 14,
    title: "Meal and Accommodation Provision",
    description:
      "Three meals a day (breakfast, lunch, and dinner) along with tea, coffee, and accessible accommodation at hotels/lodges during the trek and at the Base Camp. Hygienic and fresh food items such as vegetables, meat, fruits, soft drinks, and juice will be regularly served throughout the expedition, with the help of helicopter flights. Well-managed base camp setup for members and staff.",
  },
  {
    id: 15,
    title: "Baggage Carrier Service",
    description:
      "Porters will be provided per member for transportation to and from the base camp.",
  },
  {
    id: 16,
    title: "Camp Support Team",
    description:
      "Experienced and well-trained base camp cook and kitchen helpers as required.",
  },
  {
    id: 17,
    title: "Employee Compensation Package",
    description:
      "Daily wages, salary, equipment, food, and clothing for all Nepalese staff and porters.",
  },
  {
    id: 18,
    title: "Base Camp Tent",
    description:
      "Each member will have an individual box tent at the Base Camp.",
  },
  {
    id: 19,
    title: "Base Camp Infrastructure Supplies",
    description:
      "Necessary tents, mattresses, pillows, dining tent, kitchen tent, communication tent, toilet and shower tent, staff tents, cooking gear, tables, and chairs.",
  },
  {
    id: 20,
    title: "Heater",
    description:
      "Heaters will be provided at the base camp in dining and other necessary camps.",
  },
  {
    id: 21,
    title: "Light/Solar/Generator",
    description:
      "Solar panel and generator for lighting, battery charging, and electronic devices at the base camp.",
  },
  {
    id: 22,
    title: "Health Assessment Services",
    description:
      "Twice medical checkups for each climber at the base camp before the summit attempt.",
  },
  {
    id: 23,
    title: "Training",
    description:
      "Training sessions on oxygen use, mask regulator, ice wall, and ladder at the base camp by UIAGM Guides.",
  },
  {
    id: 24,
    title: "Expert Climbing Guide Assistance: Supportive Aid",
    description:
      "One veteran and government-licensed climbing Sherpa per member throughout the climb, including rotations and summit attempts.",
  },
  {
    id: 25,
    title: "Guide Compensation Package",
    description:
      "Salary, equipment, food, and clothing for climbing Sherpas. Bonus: Carry bonus for Sherpas and route fixing charges.",
  },
  {
    id: 26,
    title: "Oxygen Supply",
    description:
      "Epeak oxygen cylinders provided (5 bottles for each member, 3 bottles for each high-altitude Sherpa).",
  },
  {
    id: 27,
    title: "Breathing Equipment",
    description:
      "Epeak oxygen masks and regulators for each member and high-altitude Sherpa.",
  },
  {
    id: 28,
    title: "Emergency Oxygen Reserves",
    description:
      "Reserve oxygen cylinder, mask, and regulator with appropriate charge.",
  },
  {
    id: 29,
    title: "Advanced Camp Facilities",
    description:
      "Tents, cooking equipment, food, and climbing gear at high camps.",
  },
  {
    id: 30,
    title: "High Camp Dining Services",
    description: "Kitchen and dining tents at Camp I and Camp II.",
  },
  {
    id: 31,
    title: "High Altitude Tent",
    description: "Members will share tents in high camps.",
  },
  {
    id: 32,
    title: "Route Setting Crew",
    description: "Experienced Sherpas will fix the route to the summit.",
  },
  {
    id: 33,
    title: "Satellite Phone",
    description:
      "Emergency satellite phone carried by Sherpas, available for members with charge.",
  },
  {
    id: 34,
    title: "Walkie-Talkie",
    description:
      "Communication devices from Base Camp to Mountain and vice versa.",
  },
  {
    id: 35,
    title: "Authorization Documents",
    description:
      "Satellite phone and walkie-talkie permits for all members and staff.",
  },
  {
    id: 36,
    title: "Internet Facility",
    description: "Internet facility available at Base Camp with charge.",
  },
  {
    id: 37,
    title: "Weather Forecast",
    description:
      "Regular weather forecast reports from Meteotest, Bern (Switzerland).",
  },
  {
    id: 38,
    title: "Health Supplies",
    description: "Comprehensive medical kit for members and staff.",
  },
  {
    id: 39,
    title: "Certificate",
    description:
      "Mount Manaslu climbing certificate issued by MoCTCA after a successful climb.",
  },
];

const Exclusion = [
  {
    id: 1,
    title: "International Flight Airfare",
    description: "Air Travel Expenses to and from Kathmandu",
  },
  {
    id: 2,
    title: "Nepal Entry Visa Fee",
    description:
      "Charge for Nepalese Visa, priced at $125 USD for a duration of 90 days.",
  },
  {
    id: 3,
    title: "Meal Provision",
    description:
      "Lunch and Dinner arrangements while in Kathmandu, including instances of early return from Trekking or Expedition as per the scheduled itinerary.",
  },
  {
    id: 4,
    title: "Extended Stay in Kathmandu",
    description:
      "Additional accommodation nights in Kathmandu. Applicable in instances of early arrival, late departure, early return from Trekking or Expedition, or domestic flight cancellation beyond the scheduled itinerary.",
  },
  {
    id: 5,
    title: "Insurance Coverage",
    description:
      "Policy encompassing medical expenses and high-altitude evacuation costs, including trip cancellation, interruption, high-altitude rescue, air evacuation, medical treatment, repatriation, etc. *Compulsory",
  },
  {
    id: 6,
    title: "Individual Expenditures",
    description:
      "Costs for telephone calls, internet usage, toiletries, battery recharge, hot showers, laundry services, soft drinks, beers, and any alcoholic beverages. (*Note: Soft drinks will be available for members at the base camp).",
  },
  {
    id: 7,
    title: "Personal Climbing Gear",
    description:
      "Includes clothing, packing items, bags, personal medical kit, and all types of personal trekking and climbing equipment.",
  },
  {
    id: 8,
    title: "Toiletries",
    description:
      "Essential items such as soaps, shampoos, toilet paper, tissue paper, toothpaste, and other products used for personal hygiene and cleanliness.",
  },
  {
    id: 9,
    title: "Filming Permit",
    description: "Fee for special filming, camera, and drone usage permit.",
  },
  {
    id: 10,
    title: "Internet Service",
    description: "Excluded during the trek.",
  },
];
