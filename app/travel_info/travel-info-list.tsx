import React from "react";

const TravelInfoList = () => {
  return (
    <div className="space-y-12 md:w-10/12 w-11/12 mx-auto md:my-16 my-8">
      {travelInfo.map((item, index) => (
        <div key={index}>
          <h1 className="font-bold lg:text-[1.5vw] text-xl mb-2">
            {" "}
            <span>{index + 1} .</span>
            {item.title}
          </h1>
          <p className="font-medium md:text-base text-sm text-zinc-800">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TravelInfoList;

const travelInfo = [
  {
    title: "Travel Insurance",
    description:
      "It is advisable to have a valid travel insurance policy from your host country to cover the costs of emergency medical treatment or evacuation. Travelers should keep their policy number and insurance company contact details with them while trekking. Trekking without insurance is possible, though participants who choose to do so will have to submit a written statement to Outdoor Expedition stating their intention to do so.",
  },
  {
    title: "Climate Conditions",
    description:
      "Seasons in Nepal depend upon the annual monsoons, which typically last between late June and early August. During monsoon season, heavy rainfall happens often, resulting in muddy conditions on trails in lower elevations. Late August through early November is a popular time to visit due to the agreeable temperatures and drier climate. December through late February is cold season in Nepal. The low temperatures can be uncomfortable, but visibility is known to be exceptionally clear in the mountains during the winter months. March through early June is another popular time to visit, with warm temperatures and vegetation in full bloom.",
  },
  {
    title: "Fitness for Trekking",
    description:
      "People of all fitness levels can find a trek that suits their abilities in Nepal. The key is to be prepared for the trail you intend to undertake. Consult with Outdoor Expedition before your departure if you’re concerned about physical preparedness for your intended trek. All of our itineraries are designed to provide maximum enjoyment by allowing proper time to acclimatize at higher elevations and adequate rest. While we recommend preparing for your journey with an appropriate fitness routine, we won’t fail to mention the importance of a positive attitude and willingness to challenge yourself both physically and mentally. It is wise to see your physician for a complete checkup before arriving in Nepal.",
  },
  {
    title: "Equipment and Clothing",
    description:
      "Equipment needed for your trek will vary greatly depending on seasonal factors, trekking route and means of accommodations (tea-house or camping). The most important things to consider are staying warm and dry. We recommend using a layered clothing approach, starting with a moisture-wicking insulating layer, followed by warming layers, and an outer shell to protect from wind, sun and rain. Don’t forget quality trekking boots, socks and adequate head covering, as well as basic essentials like sunblock, sunglasses, torchlight, water bottles and personal care items. Outdoor Expedition can provide you with a detailed equipment list upon booking your trip. All manner of equipment and clothing is available for sale or rent in Thamel, and an equipment brief will be conducted in Kathmandu prior to the start of your trek.",
  },
  {
    title: "Vaccination",
    description:
      "While Nepalese immigrations do not require any vaccinations to enter Nepal, concerned travelers should consider being immunized for Meningitis, Tetanus, Cholera, Diphtheria, Typhoid and Gamma Globulin.",
  },
  {
    title: "Travel Money",
    description:
      "ATM machines are found in Kathmandu and major population centers throughout Nepal. Foreign currency exchanges can be found in Kathmandu and at Tribhuvan airport. Major hotels, shops and restaurants accept credit cards. It is recommended to carry sufficient cash during your trek for personal expenses and costs not included in your travel package.",
  },
  {
    title: "Tourist Security",
    description:
      "Nepal is generally a very safe place to travel, with low levels of crime and a generally non-confrontational population. Though the rate of personal theft is low, it’s advisable to exercise caution with expensive items and to properly secure belongings when left unattended in hotel rooms. Be advised that Nepal is known for frequent political demonstrations, which do occasionally become violent and can result in closed businesses and roads. Utmost consideration is taken towards protecting tourists during these types of demonstrations, and vehicles dedicated to transporting travelers to and from the airport are left unaffected to avoid missed flights.",
  },
];
