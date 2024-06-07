import Link from "next/link";

import { Button } from "./ui/button";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Sahil <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* DESKTOP NAV & HIRE ME BUTTON */}
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <Link href="/contact">
            <Button className="">Hire Me</Button>
          </Link>
        </div>

        {/* MOBILE NAV */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
}
