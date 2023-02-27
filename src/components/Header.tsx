import { FiDownload } from "react-icons/fi";
import Avatar from "./Avatar";
import Social from "./Social";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center space-x-2">
      <div className="flex space-x-2 text-center">
        <div className="flex flex-col">
          <p className="flex justify-center items-center mt-48 bg-[#7B4AE2]/30 rounded-lg w-32 h-10 text-center text-white">
            👋 Hello there!
          </p>
          <h1 className="font-extrabold mr-12 mt-5 text-3xl text-white">
            Sahil Jadhav
          </h1>
          <p className="text-base mt-1 font-medium">
            Fullstack Developer • UI Designer
          </p>
          <div className="mt-2">
            <Social />
          </div>
        </div>
        <div className="flex text-center">
          <Avatar />
        </div>
        <div className="flex text-center mt-56 ml-20">
          <p>Download CV</p>
          <FiDownload className="h-5 w-5"/>
        </div>
      </div>
    </div>
  );
}
