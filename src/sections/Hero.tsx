
import Button from "../components/Button";

import { arrowRight } from "../assets/icons";


const Hero = () => {

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-3/4 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="mx-auto text-xl font-montserrat text-red-600">
          Software to serve You!
        </p>
        <h5 className="mx-auto text-4xl">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-2 pt-18">
            You and
          </span>
          <span className="text-red-600 inline-block mt-3">VirtualYou</span>
        </h5>
        <p className="mx-auto font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover and realize the benefits of self-organization.
        </p>
        <Button label="Signup for Free Now" iconUrl={arrowRight} />
      </div>

    </section>
  );
};

export default Hero;
