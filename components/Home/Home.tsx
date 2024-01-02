"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import SalaryCalculator from "./SalaryCalculator";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <section className="w-full h-full py-6">
      <div className="w-full h-full max-w-[1450px] mx-auto md:px-10 px-5">
        <div className="w-full grid lg:grid-cols-[1.5fr,1fr] gap-10">
          <Hero />
          <SalaryCalculator />
          <aside className="w-full flex flex-col items-start justify-start gap-8">
            <span className="h-[35px] w-[145px] flex items-center justify-center text-black-main text-[15px] font-bold rounded-[50px] bg-[#FBD96AA6]/60">
              Coming soon
            </span>
            <h2 className="text-black-main text-2xl sm:text-3xl font-Just font-normal lg:w-[80%] xl:w-[60%]">
              Get Global Job Platform: Where Careers Know No Borders
            </h2>
            <span className="w-full h-[1px] bg-black-main"></span>
            <div className="w-full flex items-center justify-start flex-wrap gap-4">
              <div className="h-[45px] flex items-center justify-center gap-3 border-2 border-black-main rounded-[40px] px-5 py-3">
                <FaCheck className="text-black-main text-xl" />
                <p className="text-base sm:text-lg text-black-main font-medium">
                  Curated Job Listings
                </p>
              </div>
              <div className="h-[45px] flex items-center justify-center gap-3 border-2 border-black-main rounded-[40px] px-5 py-3">
                <FaCheck className="text-black-main text-xl" />
                <p className="text-base sm:text-lg text-black-main font-medium">
                  Insights on Global Relocation
                </p>
              </div>
              <div className="h-[45px] flex items-center justify-center gap-3 border-2 border-black-main rounded-[40px] px-5 py-3">
                <FaCheck className="text-black-main text-xl" />
                <p className="text-base sm:text-lg text-black-main font-medium">
                  Learnings from Community Wisdom
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
