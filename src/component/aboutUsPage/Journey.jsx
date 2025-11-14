import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import  firstImage from "../../../public/imges/aboutus/journeyImages/firstSectionjpg11.jpg"
import  secondImage from "../../../public/imges/aboutus/journeyImages/second.jpg"
import  thirdImage from "../../../public/imges/aboutus/journeyImages/firstSectionjpg.jpg"



export default function Journey() {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      const offsetThreshold = 600;
      const adjustedScroll = Math.max(scrollTop - offsetThreshold, 0);
      const multiplier = 3;
      const progress = Math.min((adjustedScroll / documentHeight) * multiplier, 1);
      setScrollYProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full   relative overflow-hidden px-[10px] font-Poppins flex mx-auto">
        <div className="flex flex-col justify-between py-[20px] gap-[50px] relative w-[95%] md:w-[80%] mx-auto">
          
          {/* ---------- Heading ---------- */}
          <div className="flex flex-col gap-[5px]">
            <h1 className="flex font-[600] text-[25px] md:text-[38px] text-center md:text-left">
              Dynamic <span className="pl-[10px] dynamic-text ">Milestones</span>
            </h1>
            <p className="text-[15px] md:text-[17px] text-justify font-[400] text-gray-700">
              A journey of innovation, growth, and excellence — shaping the future of PET recycling and sustainable manufacturing.
            </p>
          </div>

          {/* ---------- Timeline Container ---------- */}
          <div className="flex w-full flex-col relative gap-[90px]">
            {/* Scroll progress line */}
            <motion.div
              className="absolute hidden md:flex top-[190px] left-[50%] w-[4px] dynamic-bg"
              style={{
                height: `${scrollYProgress * 70}%`,
                transform: "translateX(-50%)",
              }}
            />

            {/* ---------- 2008 ---------- */}
            <div className="flex flex-col md:flex-row w-full relative items-center justify-between">
              <div className="flex md:w-[43%]">
                <img
                  className="rounded-[8px] object-cover"
                 src={firstImage}

                  alt="2008 Apex Polypet Pvt. Ltd."
                />
              </div>
              <div className="md:flex hidden bg-[#fff] absolute left-0 right-0 mx-auto w-[150px] flex-col items-center pb-[10px]">
                <h1 className="text-center text-[40px] dynamic-text font-bold">2008</h1>
                <div className="w-[40px] h-[40px] rounded-full dynamic-bg"></div>
              </div>
              <div className="flex flex-col gap-[20px] md:w-[43%] w-[90%] mt-[20px] md:mt-0">
                <h2 className="font-[700] text-[26px] dynamic-text">APEX Polypet Pvt. Ltd.</h2>
                <p className="text-[15px] md:text-[16px] text-justify text-gray-700">
                  In 2008, Apex Polypet Pvt. Ltd. was founded — marking the first step of our recycling journey.
                  The company began manufacturing and reclaiming polyester bottle flakes, laying the foundation for
                  sustainable PET innovation in India.
                </p>
              </div>
            </div>

            {/* ---------- 2015-2016 ---------- */}
            <div className="flex w-full md:flex-row flex-col items-center justify-between">
              <div className="flex order-2 md:order-1 flex-col gap-[20px] w-[90%] mt-[20px] md:mt-0 md:w-[43%]">
                <h2 className="font-[700] text-[26px] dynamic-text">R&D in Polypet</h2>
                <p className="text-[15px] md:text-[16px] text-justify text-gray-700">
                  Between 2015 and 2016, our dedicated R&D division was established.  
                  The focus was on continuous product innovation, technological refinement, and advanced recycling solutions
                  that revolutionized PET packaging standards across industries.
                </p>
              </div>
              <div className="md:flex hidden bg-[#fff] absolute left-0 right-0 mx-auto w-[150px] flex-col items-center pb-[10px]">
                <h1 className="text-center text-[35px] dynamic-text  font-bold">2015-16</h1>
                <div className="w-[40px] h-[40px] rounded-full dynamic-bg"></div>
              </div>
              <div className="flex order-1 md:order-2 md:w-[43%]">
                <img
                  className="rounded-[8px] object-cover"
                  src={secondImage}
                  alt="2015–2016 R&D"
                />
              </div>
            </div>

            {/* ---------- 2017 ---------- */}
            <div className="flex w-full md:flex-row pb-[20px] flex-col items-center justify-between">
              <div className="flex md:w-[43%]">
                <img
                  className="rounded-[8px] object-cover"
                  src={thirdImage}
                  alt="2017 Dynamic Polypet Pvt. Ltd."
                />
              </div>
              <div className="md:flex hidden bg-[#fff] absolute left-0 right-0 mx-auto w-[150px] flex-col items-center pb-[10px]">
                <h1 className="text-center text-[40px]  dynamic-text font-bold">2017</h1>
                <div className="w-[40px] h-[40px] rounded-full dynamic-bg"></div>
              </div>
              <div className="flex flex-col gap-[20px] w-[90%] md:w-[43%]">
                <h2 className="font-[700] text-[26px] dynamic-text">Dynamic Polypet Pvt. Ltd.</h2>
                <p className="text-[15px] md:text-[16px] text-justify text-gray-700">
                  In 2017, Dynamic Polypet Pvt. Ltd. was established — integrating innovation and engineering excellence.
                  The company expanded into PET recycling and washing systems, developing recycled fiber, granules,
                  and sheets. This milestone positioned Dynamic Polypet as a pioneer in India’s PET sustainability movement.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
