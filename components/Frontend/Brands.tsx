import React from "react";

export type SingleImageProps = {
    href : string, 
    imageSrc : string, 
    Alt : string
}

export default function Brand() {
  return (
    <section className="bg-slate-100 py-10 lg:py-[60px] dark:bg-dark">
        <h2 className="text-center pb-6">Trusted By</h2>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <SingleImage
                href="#"
                Alt="Brand Image"
                imageSrc="https://cdn.tailgrids.com/assets/images/marketing/brands/graygrids.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imageSrc="https://cdn.tailgrids.com/assets/images/marketing/brands/lineicons.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imageSrc="https://cdn.tailgrids.com/assets/images/marketing/brands/uideck.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SingleImage = ({ href, imageSrc, Alt } : SingleImageProps) => {
  
  return (
    <>
      <a
        href="#"
        className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
      >
        <img src={imageSrc} alt={Alt} className="h-10 w-full dark:hidden" />
        <img
          className="hidden h-10 w-full dark:block"
        />
      </a>
    </>
  );
};
