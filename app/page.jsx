import Photo from "@/components/photo";
import Social from "@/components/social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full" >
        Home Page
        <div
          className="flex flex-col xl:dlex-row items-center justify-between
    xl:pt-8 xl:pb-24"
        >
          <div className="text-center xl:text-left">
            <span className="text-xl">Sofware Enginner</span>
            <h1 className="h1">
              Hello I m <br /> <span className="text-accent">Ange Gardien</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experience and I am Proficient
              in various programming languages and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>DownLoad Cv</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                   items-center text-accent text-base 
                  hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            <Photo/>
          </div>

        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;