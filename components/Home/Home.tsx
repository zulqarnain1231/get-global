"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Input from "../Shared/Input";

const HomePage = () => {
  const [inputs, setInputs] = useState({
    currentAddress: "",
    income: null,
    planAddress: "",
  });
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  return (
    <section className="w-full h-full py-6">
      <div className="w-full h-full max-w-[1450px] mx-auto md:px-10 px-5">
        <div className="w-full grid grid-cols-[1.5fr,1fr] gap-10">
          <aside className="w-full flex flex-col items-start justify-start gap-10">
            <Link href={"/"} className="relative h-[40px] w-[150px] mb-8">
              <Image
                className="object-contain"
                alt="Get Global"
                src={"/Assets/Logo.png"}
                fill
              />
            </Link>
            <h1 className=" text-black-main text-left text-5xl leading-[55px] font-Just font-extrabold">
              Considering a Tech Career Abroad? Discover{" "}
              <span className="bg-gradient-to-r from-[#144DB1] to-[#BE6AE3] bg-clip-text text-transparent">
                Your Ideal Salary
              </span>{" "}
              with our calculator
            </h1>
            <p className="text-lg sm:text-xl text-black-off font-normal">
              Stop wondering what the right salary for your next international
              job is. We calculate an{" "}
              <span className="text-black-main font-semibold">
                accurate and realistic salary range
              </span>{" "}
              based on the same indicators and benchmarks used by companies to
              set salaries.
            </p>
          </aside>
          <aside className="w-full h-full row-span-2 bg-black-main rounded-[30px]">
            <form className="w-full h-full flex flex-col items-start justify-start gap-8 px-10 py-[70px]">
              <h2 className="text-2xl sm:tex-3xl text-white-main font-normal font-Just">
                Salary Insights
              </h2>
              <Input
                name="currentAddress"
                value={inputs.currentAddress}
                setState={handleInputs}
                label="Where do you live?"
              />
              <Input
                name="planAddress"
                value={inputs.planAddress}
                setState={handleInputs}
                label="Where do you plan to move or considering moving to?"
              />
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
