import About from "@/components/About";
import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function Home({ children }) {
  return (
    <>
      <div>
       <Header/>
       <Banner/>
       <About/>
        {children}
      </div>
    </>
  );
}
