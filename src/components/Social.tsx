import { FaGithub, FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

export default function Social() {
  return (
    <div className="flex flex-cols items-center gap-4">
      <ImLinkedin className="h-7 w-7" />
      <FaGithub className="h-7 w-7" />
      <FaInstagram className="h-7 w-7" />
    </div>
  );
}
