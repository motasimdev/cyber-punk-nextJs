
import About from "@/components/layouts/About";
import Banner from "@/components/layouts/Banner";


export default function Home({ children }) {
  return (
    <>
      <div>
       <Banner/>
       <About/>
        {children}
      </div>
    </>
  );
}
