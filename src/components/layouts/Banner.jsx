import Image from "next/image";
import bannerCard from "../../assets/bannerCard.png";
import union from "../../assets/Union.png";
import unionR from "../../assets/unionR.png";
import { montserrat } from "../../../fonts/Font";


const Banner = () => {
  return (
    <>
      <section className="pb-16 relative before:absolute before:h-px before:w-full before:content-'' before:bg-linear-to-r before:from-[#e03609] before:to-[#f0b71f] before:bottom-0 before:left-0">
        <div className={`max-w-[1320px] m-auto ${montserrat.className}`}>
          <div
            className="pt-[680px] pb-[30px] bg-size-[95%_95%] bg-center bg-no-repeat relative"
            style={{ backgroundImage: "url('/images/banner.png')" }}
          >
            <Image
              src={union}
              alt="icon"
              className="absolute bottom-[-94px] left-[-31px]"
            />

            <Image
              src={unionR}
              alt="icon"
              className="absolute bottom-[-94px] right-[-31px]"
            />
            <div className="flex">
              <div className="pl-12 w-[46%]">
                <div className="mb-[300px]">
                  <li className={`text-white text-2xl font-semibold`}>
                    Stories & Lore
                  </li>
                  <p className="font-medium text-base text-white max-w-[260px] pt-4">
                    Dive into compelling narratives set in a dystopian future.
                  </p>
                </div>
                <div className="p-6 bg-black/15 backdrop-blur-md border border-amber-600 rounded-xl flex">
                  <div className="">
                    <Image src={bannerCard} alt="card" className="w-[230px]" />
                  </div>
                  <div className="pl-10">
                    <h3 className="text-[55px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]">
                      76,285K+
                    </h3>
                    <h4 className="font-medium text-[28px] text-white">
                      Experience the Future
                    </h4>
                    <p className="font-medium text-lg text-[#dddddd]">
                      Explore the high-tech, low-life world where the lines
                      between
                    </p>
                  </div>
                </div>
              </div>
              {/* ======================== */}
              <div className="pr-12 w-[54%] mr-auto ">
                <div className="flex flex-col items-end">
                  <h3 className="max-w-[220px] text-[36px] text-right text-white ">
                    Events and{" "}
                    <span className="font-semibold text-[36px] text-white">
                      Updates
                    </span>
                  </h3>
                  <p className="max-w-[340px] py-7 font-medium text-lg text-[#dddddd] text-right italic">
                    Explore the high-tech, low-life world where the lines
                    between humanity and machinery blur.
                  </p>
                  <button className="bg-linear-to-r from-[#f0b71f] to-[#e03609] px-5 py-3 text-[17px] font-semibold text-white rounded-lg hover:bg-linear-to-r hover:from-[#e03609] hover:to-[#f0b71f] transition-colors duration-700 cursor-pointer">
                    Read More
                  </button>
                </div>

                <div className="pl-28 mt-29 py-5 bg-black flex gap-x-6">
                  <div className="">
                    <h3 className="text-[32px] text-white">Art and</h3>
                    <p className="text-[32px] text-white font-semibold">
                      Design
                    </p>
                    <p className="font-medium text-md text-[#DDDDDD] max-w-[260px] pt-2">
                      Feast your eyes on stunning visuals and concept art that
                      bring the cyberpunk
                    </p>
                  </div>
                  <div className="py-3 px-8 ml-auto bg-black/15 backdrop-blur-md border border-amber-600 rounded-xl">
                    <h3 className="text-[55px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]">
                      17+{" "}
                    </h3>
                    <p className=" font-medium text-2xl text-white">Years of</p>
                    <p className=" font-medium text-2xl text-white">
                      Experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
