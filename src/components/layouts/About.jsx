import { montserrat, orbitron } from "../../../fonts/Font";
import Container from "../Container";
import aboutimg from "../../assets/aboutimg.png";
import aboutimg2 from "../../assets/about2.png";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section
        className={
          "pt-14 pb-16 relative before:absolute before:h-px before:w-full before:content-'' before:bg-linear-to-r before:from-[#e03609] before:to-[#f0b71f] before:bottom-0 before:left-0"
        }
      >
        <Container>
          <div className="relative before:absolute before:h-full before:w-px before:content-'' before:bg-linear-to-r before:from-[#e03609] before:to-[#f0b71f] before:-top-10 before:left-0 after:absolute after:h-full after:w-px after:content-'' after:bg-linear-to-r after:from-[#e03609] after:to-[#f0b71f] after:-top-10 after:right-0">
            <div className="flex items-center justify-between px-7 ">
              <div className="w-[50%] py-10">
                <h3
                  className={`font-bold text-[52px] text-white ${orbitron.className}`}
                >
                  Where{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]">
                    Neon Dreams
                  </span>{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]">
                    {" "}
                    & Digital{" "}
                  </span>{" "}
                  Nightmares Converge.
                </h3>
                <p
                  className={`${montserrat.className} font-medium text-[17px] text-[#dddddd] py-14 pr-5`}
                >
                  A realm where advanced technology meets dystopian reality. Our
                  website is your gateway to a universe of neon lights, gritty
                  streets, and cybernetic enhancements. Explore the high-tech,
                  low-life world where the lines between humanity and machinery
                  blur.
                </p>
                {/* ====== */}
                <div className="flex items-center justify-between pr-3">
                  <div className="">
                    <h4
                      className={`${montserrat} text-[44px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]`}
                    >
                      89,2K+
                    </h4>
                    <p className={`${montserrat} font-medium text-white`}>
                      Discover the Future
                    </p>
                  </div>
                  <div className="">
                    <h4
                      className={`${montserrat} text-[44px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]`}
                    >
                      7001+
                    </h4>
                    <p className={`${montserrat} font-medium text-white`}>
                      Stories and Lore
                    </p>
                  </div>
                  <div className="">
                    <h4
                      className={`${montserrat} text-[44px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]`}
                    >
                      3,124+
                    </h4>
                    <p className={`${montserrat} font-medium text-white`}>
                      Art and Design
                    </p>
                  </div>
                </div>
              </div>
              {/* ========================== */}
              <div className="w-[46%]">
                <Image src={aboutimg} alt="image" className="w-full" />
              </div>
            </div>

            {/* ================================================================= */}

            <div className="flex items-center justify-between px-7 mt-14">
              <div className="w-[46%]">
                <Image src={aboutimg} alt="image" className="w-full" />
              </div>
              {/* ========================== */}
              <div className="w-[50%] py-10">
                <h3
                  className={`font-bold text-[53px] text-white ${orbitron.className}`}
                >
                  Unveil{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]">
                    the Secrets
                  </span>{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]">
                    {" "}
                    of the{" "}
                  </span>{" "}
                  Cybernetic Underworld
                </h3>
                <p
                  className={`${montserrat.className} font-medium text-[17px] text-[#dddddd] py-14 pr-5`}
                >
                  A realm where advanced technology meets dystopian reality. Our
                  website is your gateway to a universe of neon lights, gritty
                  streets, and cybernetic enhancements. Explore the high-tech,
                  low-life world where the lines between humanity and machinery
                  blur.
                </p>
                {/* ====== */}
                <div className="border border-[#F0B71F] rounded-[20px] p-5 flex items-center">
                  <div className="">
                    <Image src={aboutimg2} alt="image" />
                  </div>
                  <div className="text-center w-[40%] m-auto">
                    <h4 className={`${montserrat} text-white text-2xl pb-4`}>Join the Revolution</h4>
                    <p className={`${montserrat} text-[#dddddd]`}>Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
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

export default About;
