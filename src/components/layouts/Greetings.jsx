import React from "react";
import Container from "../Container";
import { montserrat, orbitron } from "../../../fonts/Font";
import union from "../../assets/Union.png";
import unionR from "../../assets/unionR.png";
import Image from "next/image";

const Greetings = () => {
  return (
    <>
      <section
        className={
          "relative before:absolute before:h-px before:w-full before:content-'' before:bg-linear-to-r before:from-[#e03609] before:to-[#f0b71f] before:-bottom-0.5 before:left-0"
        }
      >
        <Container className={"relative"}>
            <Image
              src={union}
              alt="icon"
              className="absolute rotate-90 -bottom-8 left-[-31px] z-10"
            />

            <Image
              src={unionR}
              alt="icon"
              className="absolute rotate-90 -bottom-8 right-[-31px] z-10"
            />
          <div
            className="pt-[150px] pb-[90px] bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: "url('/images/greetingsBg.png')" }}
          >
            <div className="flex px-[60px]">
              <div className="w-[55%] pr-4">
                <h3 className={`${orbitron.className} text-white text-[62px]`}>
                  Greetings! Dive into the Cybernetic Universe
                </h3>
                <p
                  className={`${montserrat.className} text-[#dddddd] text-base font-medium pt-20`}
                >
                  Our website is your gateway to a universe of neon lights,
                  gritty streets, and cybernetic enhancements. Explore the
                  high-tech, low-life world where the lines between humanity and
                  machinery blur.
                </p>
              </div>
              <div className="">
                <div className="p-10 bg-white/12 backdrop-blur-md border border-amber-600 rounded-3xl ml-16 mt-10">
                  <div className="flex gap-3 mb-6">
                    <div className="mt-2 h-3.5 w-3.5 bg-[#F0B71F]"></div>
                    <h5
                      className={`${montserrat.className} text-2xl text-white font-medium pr-14`}
                    >
                      Join the <br /> Revolution
                    </h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="white"
                      className="size-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex gap-3 mb-6">
                    <div className="mt-2 h-3.5 w-3.5 bg-[#E03609]"></div>
                    <h5
                      className={`${montserrat.className} text-2xl text-white font-medium pr-24`}
                    >
                      Art and <br /> Design
                    </h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="white"
                      className="size-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex gap-3 mb-6">
                    <div className="mt-2 h-3.5 w-3.5 bg-[#F0B71F]"></div>
                    <h5
                      className={`${montserrat.className} text-2xl text-white font-medium pr-19`}
                    >
                      Tech and <br /> Gear
                    </h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="white"
                      className="size-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-2 h-3.5 w-3.5 bg-[#E03609]"></div>
                    <h5
                      className={`${montserrat.className} text-2xl text-white font-medium pr-12`}
                    >
                      Stories and <br /> Lore
                    </h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="white"
                      className="size-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Greetings;
