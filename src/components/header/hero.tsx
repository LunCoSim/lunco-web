import { Icons } from "../icons";
import Link from "next/link";
import { HeaderVideo } from "./video";

export default function Hero() {
  return (
    <section id="hero" className="max-x-7xl my-5 mx-2 lg:mx-0">
      <Link
        href="https://juicebox.money/@lunco"
        className="flex flex-col items-center justify-center"
      >
        <div className="px-3 py-2 border rounded-full hover:scale-105 transition-transform duration-75 shine shine-hover backdrop-blur-sm">
          <div className="flex justify-center gap-3 items-center">
            <Icons.logo width={25} height={25} />
            <p className="primary-gradient">Support us ☰Crowdfunding</p>
          </div>
        </div>
      </Link>
      <h1 className="text-lg lg:text-lg max-w-7xl text-center my-5">
        We create an open source software for{" "}
        <span className="primary-gradient">Space Missions Engineering</span>
      </h1>
      <div className="flex justify-center items-center">
        <h1 className="hidden lg:block font-heading tracking-wider leading-relaxed text-7xl lg:text-8xl text-justify">
          Simulate with&nbsp;
        </h1>
        <BigLogo />
      </div>
      {/* <p className="text-md text-center">
        Full-cycle space operations simulation tool for industrial applications
        and enthusaists alike
      </p> */}
      <div className="relative">
        <div className="absolute top-0 left-0 container mx-auto -translate-y-[50%]"></div>
        <HeaderVideo />
      </div>
    </section>
  );
}

const BigLogo = () => {
  return (
    <section id="big-logo" className="flex justify-center items-center">
      <h1 className="font-heading tracking-wider leading-relaxed text-8xl lg:text-8xl text-justify primary-gradient">
        LunC
      </h1>
      <div className="flex -translate-y-2">
        <Icons.logo width={75} height={75} />
      </div>
    </section>
  );
};
