import React from "react";
import Container from "../Container";
import { montserrat, orbitron } from "../../../fonts/Font";

const Faq = () => {
  return (
    <>
      <section className="py-20">
        <Container>
          <div className="">
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
        </Container>
      </section>
    </>
  );
};

export default Faq;
