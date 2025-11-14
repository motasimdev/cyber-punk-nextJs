import Container from "../Container";

const About = () => {
  return (
    <>
      <section
        className={
          "pt-8 pb-16 relative before:absolute before:h-px before:w-full before:content-'' before:bg-linear-to-r before:from-[#e03609] before:to-[#f0b71f] before:bottom-0 before:left-0"
        }
      >
        <Container>
          <div className="relative before:absolute before:h-[1420px] before:w-px before:content-'' before:bg-linear-to-r before:from-[#e03609] before:to-[#f0b71f] before:top-0 before:left-0 after:absolute after:h-[1420px] after:w-px after:content-'' after:bg-linear-to-r after:from-[#e03609] after:to-[#f0b71f] after:top-0 after:right-0">
            <div className="flex items-center">
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
