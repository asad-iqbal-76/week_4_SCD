import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Section1 from "./Section1";

function Section2() {
  return (
    <div className="bg-blue-950 h-[500px] text-white border-b border-white">
      <Section1 />

      <div className="w-[30%] m-auto text-center space-y-[15px]">
        <h1 className="font-bold text-blue-300 text-[24px]">JOHN WICK</h1>
        <h2 className="font-bold">Actor and Artist</h2>

        <p className="text-sm">
          John Wick is a fictional character and the titular protagonist of
          the John Wick film series.
        </p>

        <div className="flex justify-between w-[150px] m-auto text-xl">
          <FaFacebookSquare />
          <FaYoutube />
          <FaLinkedin />
        </div>

        <img
          src="/images.webp"
          alt="Profile"
          className="h-[150px] w-[150px] rounded-full m-auto mt-6"
        />
      </div>
    </div>
  );
}

export default Section2;
