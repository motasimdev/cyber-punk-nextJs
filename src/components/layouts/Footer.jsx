import React from "react";
import Container from "../Container";
import { montserrat } from "../../../fonts/Font";

const Footer = () => {
  return (
    <>
      <section className="pt-[70px] pb-[50px]">
        <Container>
          <div className="px-16">
            <div className="flex justify-between ">
              <div className="max-w-[40%]">
                <h3
                  className={`${montserrat.className} text-[22px] text-white font-semibold`}
                >
                  Cyber.AI - Cyber Punk Website
                </h3>
                <p
                  className={`${montserrat.className} text-[18px] text-[#dddddd] font-medium pt-6`}
                >
                  Explore the high-tech, low-life world where the lines between
                  humanity{" "}
                </p>
              </div>
              <div className="">
                <ul>
                  <li
                    className={`${montserrat.className} text-[18px] text-white font-medium pb-3`}
                  >
                    Information
                  </li>
                  <li
                    className={`${montserrat.className} text-[15px] text-[#CBCBCB]`}
                  >
                    Press Centre
                  </li>
                  <li
                    className={`${montserrat.className} text-[15px] text-[#CBCBCB]`}
                  >
                    Our Blog
                  </li>
                  <li
                    className={`${montserrat.className} text-[15px] text-[#CBCBCB]`}
                  >
                    Term and Condition
                  </li>
                </ul>
              </div>
              <div className="">
                <ul>
                  <li
                    className={`${montserrat.className} text-[18px] text-white font-medium pb-3`}
                  >
                    Menu
                  </li>
                  <li
                    className={`${montserrat.className} text-[15px] text-[#CBCBCB]`}
                  >
                    About
                  </li>
                  <li
                    className={`${montserrat.className} text-[15px] text-[#CBCBCB]`}
                  >
                    Services
                  </li>
                  <li
                    className={`${montserrat.className} text-[15px] text-[#CBCBCB]`}
                  >
                    Blog
                  </li>
                </ul>
              </div>
              <div className="">
                <ul>
                  <li
                    className={`${montserrat.className} text-[18px] text-white font-medium pb-3`}
                  >
                    Contact
                  </li>
                  <li
                    className={`${montserrat.className} text-[15px] text-[#CBCBCB]`}
                  >
                    Phone : +123 456 789
                  </li>
                  <li
                    className={`${montserrat.className} text-[15px] text-[#CBCBCB]`}
                  >
                    Email : @example.com
                  </li>
                  <li
                    className={`${montserrat.className} text-[15px] text-[#CBCBCB]`}
                  >
                    Address Line 01
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between mt-20">
              <h3
                className={`${montserrat.className} text-[18px] text-white font-medium`}
              >
                © Cyber.AI - Cyber Punk 2024. All rights reserved.
              </h3>
              <div
                className={`${montserrat.className} text-[18px] text-[#dddddd] font-medium pt-6`}
              >
                Terms <span className="px-7">Privacy</span> Cookies
              </div>
              <div className="flex items-center gap-x-6">
                <svg
                  width={52}
                  height={52}
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.8117 50.5624C39.4813 50.5624 50.5627 39.481 50.5627 25.8115C50.5627 12.1419 39.4813 1.06055 25.8117 1.06055C12.1422 1.06055 1.06079 12.1419 1.06079 25.8115C1.06079 39.481 12.1422 50.5624 25.8117 50.5624Z"
                    stroke="white"
                    strokeWidth="2.12151"
                  />
                  <path
                    d="M20.1312 20.8146C21.29 20.8146 22.2294 19.8752 22.2294 18.7164C22.2294 17.5576 21.29 16.6182 20.1312 16.6182C18.9724 16.6182 18.033 17.5576 18.033 18.7164C18.033 19.8752 18.9724 20.8146 20.1312 20.8146Z"
                    fill="white"
                  />
                  <path
                    d="M21.8796 22.2163H18.3825C18.1895 22.2163 18.0328 22.373 18.0328 22.566V33.0572C18.0328 33.2503 18.1895 33.4069 18.3825 33.4069H21.8796C22.0727 33.4069 22.2293 33.2503 22.2293 33.0572V22.566C22.2293 22.373 22.0727 22.2163 21.8796 22.2163Z"
                    fill="white"
                  />
                  <path
                    d="M32.3008 21.6341C30.8061 21.1221 28.9366 21.5718 27.8154 22.3782C27.777 22.2279 27.6399 22.116 27.4769 22.116H23.9798C23.7868 22.116 23.6301 22.2726 23.6301 22.4657V32.9569C23.6301 33.1499 23.7868 33.3066 23.9798 33.3066H27.4769C27.6699 33.3066 27.8266 33.1499 27.8266 32.9569V25.4172C28.3917 24.9304 29.1198 24.7751 29.7157 25.0283C30.2934 25.2724 30.6243 25.8683 30.6243 26.6621V32.9569C30.6243 33.1499 30.7809 33.3066 30.974 33.3066H34.471C34.6641 33.3066 34.8208 33.1499 34.8208 32.9569V25.9578C34.7809 23.0839 33.4289 22.0201 32.3008 21.6341Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width={52}
                  height={52}
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.8117 50.5624C39.4813 50.5624 50.5627 39.481 50.5627 25.8115C50.5627 12.1419 39.4813 1.06055 25.8117 1.06055C12.1422 1.06055 1.06079 12.1419 1.06079 25.8115C1.06079 39.481 12.1422 50.5624 25.8117 50.5624Z"
                    stroke="white"
                    strokeWidth="2.12151"
                  />
                  <path
                    d="M28.0651 19.4762H30.3399C30.5492 19.4762 30.719 19.3162 30.719 19.119V16.9754C30.719 16.7782 30.5492 16.6182 30.3399 16.6182H28.0651C25.766 16.6182 23.8946 18.3809 23.8946 20.548V23.0488H21.2407C21.0314 23.0488 20.8616 23.2089 20.8616 23.4061V25.5496C20.8616 25.7468 21.0314 25.9069 21.2407 25.9069H23.8946V33.4093C23.8946 33.6065 24.0645 33.7666 24.2738 33.7666H26.5486C26.7578 33.7666 26.9277 33.6065 26.9277 33.4093V25.9069H29.5816C29.7446 25.9069 29.8895 25.8083 29.9418 25.6625L30.7 23.519C30.7387 23.4104 30.719 23.2903 30.6477 23.1967C30.5757 23.1038 30.462 23.0488 30.3399 23.0488H26.9277V20.548C26.9277 19.9571 27.438 19.4762 28.0651 19.4762Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width={52}
                  height={52}
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.8117 50.5624C39.4813 50.5624 50.5627 39.481 50.5627 25.8115C50.5627 12.1419 39.4813 1.06055 25.8117 1.06055C12.1422 1.06055 1.06079 12.1419 1.06079 25.8115C1.06079 39.481 12.1422 50.5624 25.8117 50.5624Z"
                    stroke="white"
                    strokeWidth="2.12151"
                  />
                  <path
                    d="M33.902 21.2355C33.7872 21.1056 33.602 21.073 33.4501 21.1531C33.3556 21.2028 33.178 21.2681 32.9672 21.3326C33.2332 20.9688 33.4471 20.5615 33.5416 20.1954C33.5824 20.0376 33.5227 19.8712 33.3927 19.7772C33.2627 19.6839 33.0896 19.6839 32.9596 19.7772C32.7548 19.9241 31.7663 20.3656 31.1413 20.5087C29.7288 19.2362 28.0851 19.104 26.3764 20.1301C24.9873 20.9642 24.685 22.6603 24.744 23.6942C21.5646 23.3793 19.5883 21.6521 18.4759 20.2226C18.3981 20.1223 18.2726 20.0695 18.1547 20.0772C18.0308 20.0866 17.9189 20.1573 17.8554 20.2669C17.3294 21.1803 17.1836 22.19 17.4352 23.1873C17.5728 23.7315 17.8131 24.2111 18.092 24.5998C17.9582 24.5321 17.829 24.4474 17.7073 24.3463C17.5955 24.2515 17.439 24.2336 17.3068 24.2966C17.1753 24.3611 17.0914 24.4979 17.0914 24.648C17.0914 26.3604 18.1328 27.5031 19.1054 28.1001C18.9482 28.0806 18.7842 28.0449 18.6187 27.9928C18.4766 27.9485 18.3225 27.9928 18.2242 28.1079C18.126 28.2221 18.1026 28.3854 18.1638 28.5245C18.7102 29.7675 19.7455 30.6225 21.0265 30.9327C19.908 31.6082 18.4109 31.9393 17.04 31.7769C16.8624 31.7512 16.6931 31.867 16.6372 32.0427C16.5813 32.2184 16.6546 32.4112 16.811 32.5013C18.8908 33.7023 20.7711 34.1314 22.3959 34.1314C24.7606 34.1314 26.5857 33.2235 27.6967 32.464C30.6917 30.4196 32.5583 26.7491 32.2984 23.4649C32.7783 23.1003 33.4962 22.4271 33.9413 21.7034C34.0335 21.5573 34.0169 21.3645 33.902 21.2355Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
