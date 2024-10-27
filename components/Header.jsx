import Link from "next/link";
import Navbar from "./Nav";
import { Button } from "./ui/button";
import Mobilenav from "./Mobilenav";

const Header = () => {
  return (
    <>
      <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Ange Gardien <span className="text-accent">.</span>
            </h1>
          </Link>
          <div className="hidden xl:flex items-center gap-8">
            <Navbar />
            <Link href="/contact">
              <Button>Hire Me</Button>
            </Link>
          </div>
          <div className="xl:hidden">
            <Mobilenav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
