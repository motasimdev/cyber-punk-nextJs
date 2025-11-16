import React from "react";
import Container from "../Container";
import { montserrat, orbitron } from "../../../fonts/Font";
import Image from "next/image";
import union from "../../assets/Union.png";
import unionR from "../../assets/unionR.png";

const Service = () => {
  return (
    <>
      <section className="pt-[130px] pb-[105px] relative before:absolute before:h-px before:w-full before:content-'' before:bg-linear-to-r before:from-[#e03609] before:to-[#f0b71f] before:-bottom-0.5 before:left-0">
        <Container>
          <div className="relative">
            <Image
              src={union}
              alt="icon"
              className="absolute rotate-90 -bottom-[137px] left-[-31px] z-10"
            />

            <Image
              src={unionR}
              alt="icon"
              className="absolute rotate-90 -bottom-[137px] right-[-31px] z-10"
            />
            <h3
              className={`${orbitron.className} text-white text-[52px] font-bold px-50 text-center`}
            >
              Dive into the Cybernetic{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]">
                Universe
              </span>
            </h3>
            <p
              className={`${montserrat.className} text-[#dddddd] text-[17px] font-medium px-52 text-center pt-10`}
            >
              A realm where advanced technology meets dystopian reality. Our
              website is your gateway to a universe of neon lights, gritty
              streets, and cybernetic enhancements.{" "}
            </p>
            <div className="grid grid-cols-3 mt-16 pl-12">
              <div className="flex gap-x-4 max-w-[380px]">
                <div className="mt-2">
                  <svg
                    width={81}
                    height={81}
                    viewBox="0 0 81 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={1}
                      y={1}
                      width={79}
                      height={79}
                      rx={10}
                      stroke="url(#paint0_linear_6048_19)"
                      strokeWidth={2}
                    />
                    <mask
                      id="mask0_6048_19"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={18}
                      y={18}
                      width={46}
                      height={46}
                    >
                      <rect
                        x={18}
                        y={18}
                        width={46}
                        height={46}
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_6048_19)">
                      <path
                        d="M42.9167 46.7503V35.2503H47.7083V31.417H42.9167V19.917H56.3333V31.417H51.5417V35.2503H56.3333V46.7503H42.9167ZM25.6667 62.0837V50.5837H30.4583V46.7503H25.6667V35.2503H30.4583V31.417H25.6667V19.917H39.0833V31.417H34.2917V35.2503H39.0833V46.7503H34.2917V50.5837H39.0833V62.0837H25.6667Z"
                        fill="url(#paint1_linear_6048_19)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_6048_19"
                        x1={81}
                        y1="71.205"
                        x2="-3.24214e-09"
                        y2="71.205"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F0B71F" />
                        <stop offset={1} stopColor="#E03609" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_6048_19"
                        x1="56.3333"
                        y1="56.9846"
                        x2="25.6667"
                        y2="56.9846"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F0B71F" />
                        <stop offset={1} stopColor="#E03609" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="">
                  <h4
                    className={`${montserrat.className} font-medium text-[26px] text-white pb-4`}
                  >
                    Discover the Future
                  </h4>
                  <p
                    className={`${montserrat.className} font-medium text-base text-[#dddddd] leading-7`}
                  >
                    Explore the high-tech, low-life world where the lines
                    between humanity{" "}
                  </p>
                </div>
              </div>

              <div className="flex gap-x-4 max-w-[380px]">
                <div className="mt-2">
                  <svg
                    width={81}
                    height={81}
                    viewBox="0 0 81 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={1}
                      y={1}
                      width={79}
                      height={79}
                      rx={10}
                      stroke="url(#paint0_linear_6048_20)"
                      strokeWidth={2}
                    />
                    <mask
                      id="mask0_6048_20"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={18}
                      y={18}
                      width={46}
                      height={46}
                    >
                      <rect
                        x={18}
                        y={18}
                        width={46}
                        height={46}
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_6048_20)">
                      <path
                        d="M54.9917 35.0585L61.125 41.1918L58.4417 43.8752L52.3083 37.7418C51.6375 38.1252 50.9188 38.4446 50.1521 38.7002C49.3854 38.9557 48.5708 39.0835 47.7083 39.0835C45.3125 39.0835 43.2761 38.245 41.599 36.5679C39.9219 34.8908 39.0833 32.8543 39.0833 30.4585C39.0833 28.0627 39.9219 26.0262 41.599 24.3491C43.2761 22.672 45.3125 21.8335 47.7083 21.8335C50.1042 21.8335 52.1406 22.672 53.8177 24.3491C55.4948 26.0262 56.3333 28.0627 56.3333 30.4585C56.3333 31.321 56.2056 32.1356 55.95 32.9022C55.6945 33.6689 55.375 34.3877 54.9917 35.0585ZM47.7083 35.2502C49.05 35.2502 50.184 34.787 51.1104 33.8606C52.0368 32.9342 52.5 31.8002 52.5 30.4585C52.5 29.1168 52.0368 27.9828 51.1104 27.0564C50.184 26.13 49.05 25.6668 47.7083 25.6668C46.3667 25.6668 45.2327 26.13 44.3063 27.0564C43.3799 27.9828 42.9167 29.1168 42.9167 30.4585C42.9167 31.8002 43.3799 32.9342 44.3063 33.8606C45.2327 34.787 46.3667 35.2502 47.7083 35.2502ZM25.6667 60.1668C24.6125 60.1668 23.7101 59.7915 22.9594 59.0408C22.2087 58.2901 21.8333 57.3877 21.8333 56.3335V29.5002C21.8333 28.446 22.2087 27.5436 22.9594 26.7929C23.7101 26.0422 24.6125 25.6668 25.6667 25.6668H36.2083C35.857 26.4654 35.6174 27.288 35.4896 28.1345C35.3618 28.9811 35.2979 29.8196 35.2979 30.6502C35.2979 34.1321 36.5278 37.0391 38.9875 39.371C41.4472 41.7029 44.3702 42.8689 47.7563 42.8689C48.3632 42.8689 48.9701 42.829 49.5771 42.7491C50.184 42.6693 50.807 42.5335 51.4458 42.3418L56.3333 47.2293V56.3335C56.3333 57.3877 55.958 58.2901 55.2073 59.0408C54.4566 59.7915 53.5542 60.1668 52.5 60.1668H25.6667Z"
                        fill="url(#paint1_linear_6048_20)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_6048_20"
                        x1={81}
                        y1="71.205"
                        x2="-3.24214e-09"
                        y2="71.205"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F0B71F" />
                        <stop offset={1} stopColor="#E03609" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_6048_20"
                        x1="61.125"
                        y1="55.5313"
                        x2="21.8333"
                        y2="55.5313"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F0B71F" />
                        <stop offset={1} stopColor="#E03609" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="">
                  <h4
                    className={`${montserrat.className} font-medium text-[26px] text-white pb-4`}
                  >
                    Explore Features{" "}
                  </h4>
                  <p
                    className={`${montserrat.className} font-medium text-base text-[#dddddd] leading-7`}
                  >
                    Explore the high-tech, low-life world where the lines
                    between humanity{" "}
                  </p>
                </div>
              </div>

              <div className="flex gap-x-4 max-w-[380px]">
                <div className="mt-2">
                  <svg
                    width={81}
                    height={81}
                    viewBox="0 0 81 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={1}
                      y={1}
                      width={79}
                      height={79}
                      rx={10}
                      stroke="url(#paint0_linear_6048_21)"
                      strokeWidth={2}
                    />
                    <mask
                      id="mask0_6048_21"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={18}
                      y={18}
                      width={46}
                      height={46}
                    >
                      <rect
                        x={18}
                        y={18}
                        width={46}
                        height={46}
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_6048_21)">
                      <path
                        d="M27.5833 58.25C27.0403 58.25 26.5851 58.0663 26.2177 57.699C25.8503 57.3316 25.6667 56.8764 25.6667 56.3333V54.4167H23.75V46.75C23.75 46.2069 23.9337 45.7517 24.301 45.3844C24.6684 45.017 25.1236 44.8333 25.6667 44.8333H27.5833V31.4167C27.5833 29.3083 28.334 27.5035 29.8354 26.0021C31.3368 24.5007 33.1417 23.75 35.25 23.75C37.3583 23.75 39.1632 24.5007 40.6646 26.0021C42.166 27.5035 42.9167 29.3083 42.9167 31.4167V50.5833C42.9167 51.6375 43.292 52.5399 44.0427 53.2906C44.7934 54.0413 45.6958 54.4167 46.75 54.4167C47.8042 54.4167 48.7066 54.0413 49.4573 53.2906C50.208 52.5399 50.5833 51.6375 50.5833 50.5833V37.1667H48.6667C48.1236 37.1667 47.6684 36.983 47.301 36.6156C46.9337 36.2483 46.75 35.7931 46.75 35.25V27.5833H48.6667V25.6667C48.6667 25.1236 48.8503 24.6684 49.2177 24.301C49.5851 23.9337 50.0403 23.75 50.5833 23.75H54.4167C54.9597 23.75 55.4149 23.9337 55.7823 24.301C56.1497 24.6684 56.3333 25.1236 56.3333 25.6667V27.5833H58.25V35.25C58.25 35.7931 58.0663 36.2483 57.699 36.6156C57.3316 36.983 56.8764 37.1667 56.3333 37.1667H54.4167V50.5833C54.4167 52.6917 53.666 54.4965 52.1646 55.9979C50.6632 57.4993 48.8583 58.25 46.75 58.25C44.6417 58.25 42.8368 57.4993 41.3354 55.9979C39.834 54.4965 39.0833 52.6917 39.0833 50.5833V31.4167C39.0833 30.3625 38.708 29.4601 37.9573 28.7094C37.2066 27.9587 36.3042 27.5833 35.25 27.5833C34.1958 27.5833 33.2934 27.9587 32.5427 28.7094C31.792 29.4601 31.4167 30.3625 31.4167 31.4167V44.8333H33.3333C33.8764 44.8333 34.3316 45.017 34.699 45.3844C35.0663 45.7517 35.25 46.2069 35.25 46.75V54.4167H33.3333V56.3333C33.3333 56.8764 33.1497 57.3316 32.7823 57.699C32.4149 58.0663 31.9597 58.25 31.4167 58.25H27.5833Z"
                        fill="url(#paint1_linear_6048_21)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_6048_21"
                        x1={81}
                        y1="71.205"
                        x2="-3.24214e-09"
                        y2="71.205"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F0B71F" />
                        <stop offset={1} stopColor="#E03609" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_6048_21"
                        x1="58.25"
                        y1="54.0781"
                        x2="23.75"
                        y2="54.0781"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F0B71F" />
                        <stop offset={1} stopColor="#E03609" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="">
                  <h4
                    className={`${montserrat.className} font-medium text-[26px] text-white pb-4`}
                  >
                    Stay Connected
                  </h4>
                  <p
                    className={`${montserrat.className} font-medium text-base text-[#dddddd] leading-7`}
                  >
                    Explore the high-tech, low-life world where the lines
                    between humanity{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Service;
