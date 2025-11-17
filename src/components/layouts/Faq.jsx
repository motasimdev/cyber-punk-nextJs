import React from "react";
import Container from "../Container";
import { montserrat, orbitron } from "../../../fonts/Font";
import union from "../../assets/Union.png";
import unionR from "../../assets/unionR.png";
import Image from "next/image";

const Faq = () => {
  return (
    <>
      <section className="pt-20 pb-32 relative before:absolute before:h-px before:w-full before:content-'' before:bg-linear-to-r before:from-[#e03609] before:to-[#f0b71f] before:-bottom-0.5 before:left-0">
        <Container>
          <div className="px-16 relative">
            <Image
              src={union}
              alt="icon"
              className="absolute rotate-90 -bottom-40 left-[-31px] z-10"
            />

            <Image
              src={unionR}
              alt="icon"
              className="absolute rotate-90 -bottom-40 right-[-31px] z-10"
            />
            <div className="mb-18">
              <h3
                className={`${orbitron.className} text-white text-[53px] font-bold px-60 text-center`}
              >
                Frequently Asked{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]">
                  Questions
                </span>
              </h3>
              <p
                className={`${montserrat.className} text-[#dddddd] text-[17px] font-medium px-52 text-center pt-10`}
              >
                A realm where advanced technology meets dystopian reality. Our
                website is your gateway to a universe of neon lights, gritty
                streets, and cybernetic enhancements.{" "}
              </p>
            </div>
            {/* ======================================= */}
            <div className="flex items-center justify-between pb-24">
              <div className="w-[45%] flex gap-x-5">
                <h3
                  className={`${orbitron.className} text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f] text-[44px] font-medium`}
                >
                  01.
                </h3>
                <div className="relative before:absolute before:h-px before:w-full before:content-'' before:bg-linear-to-r before:from-[#e03609] before:to-[#f0b71f] before:-bottom-8 before:left-0">
                  <h5
                    className={`${orbitron.className} text-justify text-white text-[20px] font-semibold`}
                  >
                    How do I stay updated on new content and events?
                  </h5>
                  <p
                    className={`${montserrat.className} pt-6 text-justify text-[#dddddd] text-[16px] font-medium`}
                  >
                    A realm where advanced technology meets dystopian reality.
                    Our website is your gateway....
                  </p>
                </div>
              </div>
              <div className="w-[45%] flex gap-x-5">
                <h3
                  className={`${orbitron.className} text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f] text-[44px] font-medium`}
                >
                  02.
                </h3>
                <div className="relative before:absolute before:h-px before:w-full before:content-'' before:bg-linear-to-r before:from-[#e03609] before:to-[#f0b71f] before:-bottom-8 before:left-0">
                  <h5
                    className={`${orbitron.className} text-justify text-white text-[20px] font-semibold`}
                  >
                    How can I contact customer cyber punk support?
                  </h5>
                  <p
                    className={`${montserrat.className} pt-6 text-justify text-[#dddddd] text-[16px] font-medium`}
                  >
                    A realm where advanced technology meets dystopian reality.
                    Our website is your gateway....
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-[45%] flex gap-x-5">
                <h3
                  className={`${orbitron.className} text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f] text-[44px] font-medium`}
                >
                  03.
                </h3>
                <div className="relative before:absolute before:h-px before:w-full before:content-'' before:bg-linear-to-r before:from-[#e03609] before:to-[#f0b71f] before:-bottom-8 before:left-0">
                  <h5
                    className={`${orbitron.className} text-justify text-white text-[20px] font-semibold`}
                  >
                    Can I purchase cyberpunk-themed merchandise?
                  </h5>
                  <p
                    className={`${montserrat.className} pt-6 text-justify text-[#dddddd] text-[16px] font-medium`}
                  >
                    A realm where advanced technology meets dystopian reality.
                    Our website is your gateway....
                  </p>
                </div>
              </div>
              <div className="w-[45%] flex gap-x-5">
                <h3
                  className={`${orbitron.className} text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f] text-[44px] font-medium`}
                >
                  04.
                </h3>
                <div className="relative before:absolute before:h-px before:w-full before:content-'' before:bg-linear-to-r before:from-[#e03609] before:to-[#f0b71f] before:-bottom-8 before:left-0">
                  <h5
                    className={`${orbitron.className} text-justify text-white text-[20px] font-semibold`}
                  >
                    Are there any rules or guidelines for participating in the
                    community?
                  </h5>
                  <p
                    className={`${montserrat.className} pt-6 text-justify text-[#dddddd] text-[16px] font-medium`}
                  >
                    A realm where advanced technology meets dystopian reality.
                    Our website is your gateway....
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

export default Faq;
