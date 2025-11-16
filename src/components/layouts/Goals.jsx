import React from "react";
import Container from "../Container";
import Image from "next/image";
import imageBg from "../../../public/images/imageBg.png";
import { montserrat, orbitron } from "../../../fonts/Font";
import union from "../../assets/Union.png";
import unionR from "../../assets/unionR.png";

const Goals = () => {
  return (
    <>
      <section
        className={
          "relative before:absolute before:h-px before:w-full before:content-'' before:bg-linear-to-r before:from-[#e03609] before:to-[#f0b71f] before:-bottom-0.5 before:left-0 py-20"
        }
      >
        <Container>
          <div className="relative flex px-16 items-center justify-between">
            <Image
              src={union}
              alt="icon"
              className="absolute rotate-90 -bottom-28 left-[-31px] z-10"
            />

            <Image
              src={unionR}
              alt="icon"
              className="absolute rotate-90 -bottom-28 right-[-31px] z-10"
            />
            <div className="w-[40%]">
              <Image src={imageBg} alt="image" className="w-full" />
            </div>
            <div className="w-[50%]">
              <h4
                className={`${orbitron.className} font-bold text-[50px] text-white`}
              >
                Your{" "}
                <span className=" text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]">
                  Portal to a Gritty,
                </span>{" "}
                Tech-Driven Future.
              </h4>
              <p
                className={`${montserrat.className} py-12 font-medium text-[17px] text-[#dddddd]`}
              >
                A realm where advanced technology meets dystopian reality. Our
                website is your gateway to a universe of neon lights, gritty
                streets, and cybernetic enhancements.{" "}
              </p>
              <div className="flex gap-x-10">
                <button className="bg-linear-to-r from-[#f0b71f] to-[#e03609] px-5 py-3 text-[17px] font-semibold text-white rounded-lg hover:bg-linear-to-r hover:from-[#e03609] hover:to-[#f0b71f] transition-colors duration-700 cursor-pointer">
                  Read More
                </button>
                <div className="group bg-linear-to-r from-[#f0b71f] to-[#e03609] p-px rounded-lg">
                  <button className="bg-black px-5 py-3 text-[17px] font-semibold text-white rounded-lg hover:bg-linear-to-r hover:from-[#e03609] hover:to-[#f0b71f] transition-colors duration-700 cursor-pointer ">
                    <span className=" text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f] group-hover:text-white transition-colors duration-500">
                      Learn More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Goals;
