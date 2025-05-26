import React from "react";
import type { HeroProps } from "@interfaces";
import VersionTag from "./VersionTag";
import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import HeroSubtext from "./HeroSubtext";
import HeroBottomText from "./HeroBottomText";

const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <div className="min-h-[100svh] flex justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-4 text-center md:w-1/2">
          <VersionTag version="0.2.0" title="Just released" />
          <HeroText />
          <HeroButtons className="mt-6" />
          <HeroSubtext />
        </div>
      </div>
      <HeroBottomText className="-mt-[12svh]" />
    </>
  );
};

export default Hero;
