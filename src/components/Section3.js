import { FaTools, FaBriefcaseMedical, FaCogs } from "react-icons/fa";
import MyCard from "./MyCard";

function Section3({ heading, description }) {
  return (
    <div className="bg-blue-950 text-white px-[80px] py-[40px]">
      <h1 className="font-bold text-[30px] mb-2">{heading}</h1>

      <p className="mb-8 max-w-[800px]">{description}</p>

      <div className="flex justify-center gap-3 flex-wrap">
        <MyCard
          icon={FaTools}
          heading="Weapon Handling"
          content="Expert in various weapons."
          subheading="Always prepared for any situation."
        />

        <MyCard
          icon={FaBriefcaseMedical}
          heading="Medical Assistance"
          content="Trained in emergency medical procedures."
          subheading="Can stabilize injuries in the field."
        />

        <MyCard
          icon={FaCogs}
          heading="Tactical Planning"
          content="Skilled in strategic planning and execution."
          subheading="Always one step ahead."
        />
      </div>
    </div>
  );
}

export default Section3;
