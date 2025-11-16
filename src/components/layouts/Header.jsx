import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import union from "../../assets/Union.png";
import unionR from "../../assets/unionR.png";

const Header = () => {
  return (
    <>
      <div className="">
        <nav className="-z-50 py-10 relative bg-[#010101] before:absolute before:h-px before:w-full before:content-'' before:bg-linear-to-r before:from-[#e03609] before:to-[#f0b71f] before:bottom-0 before:left-0">
          <div className="max-w-[1320px] m-auto">
            <div className="flex items-center justify-between bg-[#010101] px-5 relative">
              <Image
                src={union}
                alt="icon"
                className="absolute bottom-[-70px] left-[-30px]"
              />

              <Image
                src={unionR}
                alt="icon"
                className="absolute bottom-[-70px] right-[-30px]"
              />

              <div className="">
                <Image src={logo} alt="logo" />
              </div>
              <div className="">
                <ul className="flex items-center gap-x-7">
                  <Link href={"/"}>
                    <li className="text-white font-medium hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#e03609] hover:to-[#f0b71f] transition-all ease-out duration-300">
                      Home
                    </li>
                  </Link>
                  <Link href={"/"}>
                    <li className="text-white font-medium hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#e03609] hover:to-[#f0b71f] transition-all ease-out duration-300">
                      Pages
                    </li>
                  </Link>
                  <Link href={"/"}>
                    <li className="text-white font-medium hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#e03609] hover:to-[#f0b71f] transition-all ease-out duration-300">
                      Support
                    </li>
                  </Link>
                  <Link href={"/"}>
                    <li className="text-white font-medium hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#e03609] hover:to-[#f0b71f] transition-all ease-out duration-300">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="">
                <button className="bg-linear-to-r from-[#f0b71f] to-[#e03609] px-5 py-3 text-[17px] font-semibold text-white rounded-lg hover:bg-linear-to-r hover:from-[#e03609] hover:to-[#f0b71f] transition-colors duration-700 cursor-pointer">
                  Get started free
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
