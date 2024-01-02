"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Input from "../Shared/Input";
import { MdOutlineMan, MdFamilyRestroom } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";

const HomePage = () => {
  const [inputs, setInputs] = useState<{
    currentAddress: string;
    income: null | number | any;
    planAddress: string;
    status: string;
  }>({
    currentAddress: "",
    income: null,
    planAddress: "",
    status: "family",
  });
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const handleStatusChange: (status: string) => any = (status: string) =>
    setInputs({ ...inputs, status });
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
              <div className="w-full flex flex-col items-start justify-start gap-4">
                <p className="text-white-main text-base sm:text-lg font-semibold">
                  Your annual income?
                </p>
                <div className="w-full h-[45px] flex items-center justify-between rounded-[50px] bg-black-off">
                  <input
                    type="number"
                    autoComplete="off"
                    name="income"
                    required
                    value={inputs.income}
                    onChange={handleInputs}
                    className="w-full h-full border-none focus:outline-none bg-transparent px-4 text-white-main text-base sm:text-lg font-medium"
                  />
                  <span className="h-full flex items-center justify-center rounded-r-[30px] bg-black-main/20 px-6 text-white-main text-base sm:text-lg font-medium">
                    INR
                  </span>
                </div>
              </div>
              <Input
                name="planAddress"
                value={inputs.planAddress}
                setState={handleInputs}
                label="Where do you plan to move or considering moving to?"
              />

              <div className="w-full flex flex-col items-start justify-start gap-4">
                <p className="text-white-main text-base sm:text-lg font-semibold">
                  Who will be accompanying you on this move?
                </p>
                <div className=" w-full flex items-center justify-start">
                  <div
                    onClick={() => handleStatusChange("single")}
                    className="flex flex-col items-center justify-start gap-1 group cursor-pointer"
                  >
                    <MdOutlineMan
                      className={`${
                        inputs.status == "single"
                          ? "text-white-main"
                          : "text-black-faded"
                      } text-3xl group-hover:text-white-main group-hover:duration-200`}
                    />
                    <FaCircle
                      className={`${
                        inputs.status == "single"
                          ? "text-brand-main"
                          : "text-black-faded"
                      } text-xs group-hover:text-brand-main group-hover:duration-200`}
                    />
                    <span
                      className={`text-sm ${
                        inputs.status == "single"
                          ? "bg-brand-secondary text-black-main"
                          : "text-white-main bg-transparent"
                      } py-1 px-2 rounded-lg group-hover:text-black-main group-hover:bg-brand-secondary group-hover:duration-200`}
                    >
                      Single
                    </span>
                  </div>
                  <span className="w-full h-[1px] bg-white-main/40 -mx-5"></span>
                  <div
                    onClick={() => handleStatusChange("family")}
                    className="flex flex-col items-center justify-start gap-1 group cursor-pointer"
                  >
                    <ImManWoman
                      className={`${
                        inputs.status == "family"
                          ? "text-white-main"
                          : "text-black-faded"
                      } text-2xl group-hover:text-white-main group-hover:duration-200`}
                    />
                    <FaCircle
                      className={`${
                        inputs.status == "family"
                          ? "text-brand-main"
                          : "text-black-faded"
                      } text-xs group-hover:text-brand-main group-hover:duration-200`}
                    />
                    <span
                      className={`text-sm ${
                        inputs.status == "family"
                          ? "bg-brand-secondary text-black-main"
                          : "text-white-main bg-transparent"
                      } py-1 px-2 rounded-lg group-hover:text-black-main group-hover:bg-brand-secondary group-hover:duration-200`}
                    >
                      Family
                    </span>
                  </div>
                  <span className="w-full h-[1px] bg-white-main/40 -ml-5 -mr-16"></span>
                  <div
                    onClick={() => handleStatusChange("family&kids")}
                    className="flex flex-col items-center justify-start gap-1 group cursor-pointer"
                  >
                    <MdFamilyRestroom
                      className={`${
                        inputs.status == "family&kids"
                          ? "text-white-main"
                          : "text-black-faded"
                      } text-3xl group-hover:text-white-main group-hover:duration-200`}
                    />
                    <FaCircle
                      className={`${
                        inputs.status == "family&kids"
                          ? "text-brand-main"
                          : "text-black-faded"
                      } text-xs group-hover:text-brand-main group-hover:duration-200`}
                    />
                    <span
                      className={`text-sm whitespace-nowrap ${
                        inputs.status == "family&kids"
                          ? "bg-brand-secondary text-black-main"
                          : "text-white-main bg-transparent"
                      } py-1 px-2 rounded-lg group-hover:text-black-main group-hover:bg-brand-secondary group-hover:duration-200`}
                    >
                      Family with kids
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-4">
                <p className="text-white-main text-base sm:text-lg font-semibold">
                  Job Seniority?
                </p>
                <div className="w-full grid grid-cols-2 gap-5">
                  <div className="h-[40px] sm:w-[212px] w-full flex items-center justify-start gap-3 group px-3 rounded-[10px] border border-gray bg-transparent hover:bg-brand-secondary cursor-pointer hover:duration-200">
                    <span className="h-[15px] w-[15px] border rounded-full bg-transparent border-black-off group-hover:bg-brand-main group-hover:duration-200"></span>
                    <p className="text-[15px] text-white-main font-normal group-hover:text-black-main group-hover:duration-200">
                      🍀 Senior
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
