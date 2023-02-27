import Image from "next/image";
import Link from "next/link";

import { images } from "@/assets";

export default function Navbar() {
  return (
    <nav className="p-3 border-gray-200 rounded-xl mx-10 mt-5 bg-[#7B4AE2]/10 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src={images.logo}
            className="h-10 w-10 self-center text-xl font-semibold whitespace-nowrap"
            alt="logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#7B4AE2]/10 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
            <li>
              <Link
                href="#home"
                className="block py-2 pl-3 pr-4 nav-links rounded md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-2 pl-3 pr-4 nav-links rounded  md:hover:bg-transparent md:border-0 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-2 pl-3 pr-4 nav-links rounded  md:hover:bg-transparent md:border-0 md:p-0"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="block py-2 pl-3 pr-4 nav-links rounded  md:hover:bg-transparent md:border-0  md:p-0"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#career"
                className="block py-2 pl-3 pr-4 rounded nav-links md:hover:bg-transparent md:border-0 md:p-0"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                href="#recommendation"
                className="block py-2 pl-3 pr-4  rounded nav-links md:hover:bg-transparent md:border-0  md:p-0"
              >
                Recommendation
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 pl-3 pr-4  rounded nav-links md:hover:bg-transparent md:border-0  md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
