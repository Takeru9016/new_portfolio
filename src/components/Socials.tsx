import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter  } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Takeru9016" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/sahiljadhav" },
  { icon: <FaTwitter  />, path: "https://x.com/dev_takeru" },
];

type SocialsProps = {
  containerStyles: string;
  iconStyles: string;
};

export default function Socials({ containerStyles, iconStyles }: SocialsProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
