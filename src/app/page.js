
import About from "@/components/layouts/About";
import Banner from "@/components/layouts/Banner";
import Goals from "@/components/layouts/Goals";
import Greetings from "@/components/layouts/Greetings";
import Service from "@/components/layouts/Service";


export default function Home({ children }) {
  return (
    <>
      <div className="h-full relative">
       <Banner/>
       <About/>
       <Greetings/>
       <Service/>
       <Goals/>
      </div>
    </>
  );
}
