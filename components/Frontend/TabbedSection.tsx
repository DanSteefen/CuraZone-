import React from "react";
import TabbedItems from "./TabbedItems";

const TabbedSection = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[60px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
              {/* <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span> */}
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Browse your doctors by..
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Choose from thousands of providers at every day affrodable prices. Book online today..
              </p>
            </div>
          </div>
        </div>

            <div className="mx-auto max-w-6xl">
                <TabbedItems/>
            </div>
        </div>
    </section>
  );
};

export default TabbedSection;


