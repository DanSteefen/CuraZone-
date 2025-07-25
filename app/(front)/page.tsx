import DoctorsList from "@/components/DoctorsList";
import Brand from "@/components/Frontend/Brands";
import Hero from "@/components/Frontend/Hero";
import { MegaMenu } from "@/components/Frontend/MegaMenu";
import TabbedSection from "@/components/Frontend/TabbedSection";
import React from "react";

export default function Home(){

  return(
    <section className="">
        <Hero/>
        <Brand/>
        <TabbedSection/>
        <DoctorsList/>
        <DoctorsList className="bg-white py-8 lg:py24" title="In-person doctor visit" isInPerson = {true}/>
    </section>
  );
}