import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";

export default function Page() {
  return (
    <>
      <Section2 />
      <Section3
        heading="Services I Offer"
        description="Legendary assassin John Wick is known for his unparalleled skills."
      />
      <Section4 />
    </>
  );
}