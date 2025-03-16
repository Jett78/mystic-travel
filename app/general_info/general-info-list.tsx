import Image from "next/image";
import React from "react";

const GeneralList = () => {
  return (
    <div className="space-y-14 md:my-16 my-8">
      {generallistinfo.map((item, index) => (
        <div
          key={index}
          className={`grid lg:grid-cols-2 grid-cols-1 items-center gap-10 md:w-10/12 w-11/12 mx-auto`}
        >
          <header className={`${index % 2 === 0 ? "order-0" : "order-1"}`}>
            <h2 className="lg:text-[2.5vw] leading-[1.1] text-xl font-bold mb-4">
              {item.title} <hr className="h-[3px] w-40 bg-primary-600" />
            </h2>
            <p className="font-medium md:text-base text-sm text-zinc-700">
              {item.desc}
            </p>
          </header>

          <figure>
            <Image
              src={item.img}
              alt="img"
              width={1000}
              height={1000}
              className="rounded-md max-h-[60vh]  object-cover"
            />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default GeneralList;

const generallistinfo = [
  {
    title: "Geography",
    desc: "Nepal occupies a landlocked strip of land land approximately 800 kilometers long and 200 kilometers wide between the northern border of India and the Tibetan Autonomous Region of China.  The tremendous variation in elevations within Nepal range from less than 100 meters in the southern Terai lowlands to 8,848 meters at the summit of Mt. Everest, the highest point on earth.  Nepal can be divided into three distinct geographic belts, which span the country from north to south: the tropical lowlands to the south known as the Terai, the middle hills region, and the mountainous Himalayan region.  Three major river systems, all tributaries of the Ganges, divide the country from east to west: the Koshi, Gandaki and Karnali.  The wide range of elevations and climatic zones in Nepal result in a spectacular range of diversity.  The southern Terai comprises a vast tropical lowlands home to the Asian elephant, one-horned rhinoceros and the Bengal tiger.  On the country’s northern border lies the vast Himalayan mountain range, where snow perpetually covers more than 90 mountain peaks over 7,000 meters and 8 of the world’s tallest mountains.",
    img: "https://images.unsplash.com/photo-1571911861263-d5dca7dc060e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "People and Culture",
    desc: "The people of Nepal comprise an incredibly rich cultural heritage.  The combination of indigenous ethnic groups with those who migrated from northern and southern regions throughout the country’s history has resulted in a spectacular range of customs and traditions. The wide variety of cultural practices is evident in the multitude of architectural feats and local festivals, which contribute to the country’s vast appeal to visitors.  In addition to the many festivals recognized annually by the majority of those who call themselves Nepali, numerous celebrations and ceremonies are held by various ethnic groups in accordance with their unique traditions. Hinduism is the major religion practiced throughout Nepal, followed by Buddhism, Islam and Christianity. Over 100 languages are spoken throughout Nepal.",
    img: "https://images.unsplash.com/photo-1550642249-6e5605421172?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
