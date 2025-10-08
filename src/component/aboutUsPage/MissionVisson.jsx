import React from "react";

import first from "../../../public/imges/missonVisson/firstjpg.jpg"
import second from "../../../public/imges/missonVisson/secondjpg.jpg"
import ceo from "../../../public/imges/missonVisson/ceo.jpg"



export default function MissionVisson() {
  return (
    <>
      <section className="flex flex-col gap-[20px] w-[100%] h-[100%] mx-auto">
        <section className="pt-[50px] pb-[50px] bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 w-[90%] md:w-[79%] 2xl:w-[1200px] sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-[600] text-gray-900 mb-4">
                The history of{" "}
                <b className="text-[#00c3ff] font-[600]">
                  dynamic and progressive thinking
                </b>
              </h2>

              <p className="text-[15px] text-gray-600 max-w-3xl mx-auto">
                Dynamic Polypet has built its legacy on continuous innovation,
                responsible growth, and an unwavering commitment to excellence.
              </p>
            </div>

            {/* 1️⃣ Our Mission */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#00c3ff37] flex items-center justify-center mr-4">
                    <span className="text-[#00c3ff] font-[600]">1</span>
                  </div>
                  <h3 className="text-2xl font-[600] text-gray-900">
                    Our Mission
                  </h3>
                </div>

                <p className="text-[15px] text-gray-600 mb-6">
                  Diversification, Sustainable Growth, Eco-friendly
                  Technological Innovation, and Value Creation for all
                  stakeholders form the backbone of our mission. We continuously
                  strive to offer products that meet the highest quality
                  standards while protecting the environment and contributing to
                  community development.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#00c3ff] mr-3 mt-1">✔</span>
                    <span className="text-gray-600">
                      Focus on sustainability and innovation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00c3ff] mr-3 mt-1">✔</span>
                    <span className="text-gray-600">
                      Delivering global-quality products with eco-friendly
                      processes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00c3ff] mr-3 mt-1">✔</span>
                    <span className="text-gray-600">
                      Creating long-term value for clients and partners
                    </span>
                  </li>
                </ul>
              </div>

              <div className="order-1 md:order-2 relative rounded-xl overflow-hidden shadow-lg h-[350px] bg-white flex items-center justify-center">
                <img
                  src={first}
                  alt="Our Mission"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* 2️⃣ Our Philosophy */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative rounded-xl overflow-hidden shadow-lg h-[350px] bg-white flex items-center justify-center">
                <img
                  src={second}
                  alt="Our Philosophy"
                  className="object-cover w-full h-full"
                />
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#00c3ff37] flex items-center justify-center mr-4">
                    <span className="text-[#00c3ff] font-[600]">2</span>
                  </div>
                  <h3 className="text-2xl font-[600] text-gray-900">
                    Our Philosophy
                  </h3>
                </div>

                <p className="text-[15px] text-gray-600 mb-6">
                  Our dedicated and motivated team continuously works toward
                  achieving operational excellence. We believe in maintaining
                  transparency, integrity, and commitment in all our business
                  dealings, ensuring that every product leaving our facility is
                  a reflection of our core values.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#00c3ff] mr-3 mt-1">✔</span>
                    <span className="text-gray-600">
                      Customer-centric and quality-driven approach
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00c3ff] mr-3 mt-1">✔</span>
                    <span className="text-gray-600">
                      Ethical operations with strong professional values
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00c3ff] mr-3 mt-1">✔</span>
                    <span className="text-gray-600">
                      Continuous improvement in every process
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3️⃣ Updated Person */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#00c3ff37] flex items-center justify-center mr-4">
                    <span className="text-[#00c3ff] font-[600]">3</span>
                  </div>
                  <h3 className="text-2xl font-[600] text-gray-900">
                    Updated Person
                  </h3>
                </div>

                <p className="text-[15px] text-gray-600 mb-6">
                  Under the leadership of <strong>Mr. Dipak Patel</strong> and
                  his skilled team, Dynamic Polypet regularly participates in
                  international exhibitions and global forums. This ensures we
                  stay updated with the latest technologies and maintain our
                  competitive edge across global markets.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#00c3ff] mr-3 mt-1">✔</span>
                    <span className="text-gray-600">
                      Continuous global exposure and learning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00c3ff] mr-3 mt-1">✔</span>
                    <span className="text-gray-600">
                      Adapting to new trends and technologies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00c3ff] mr-3 mt-1">✔</span>
                    <span className="text-gray-600">
                      Upgrading quality standards to match global parameters
                    </span>
                  </li>
                </ul>
              </div>

              <div className="order-1 md:order-2 relative rounded-xl overflow-hidden shadow-lg h-[350px] bg-white flex items-center justify-center">
                <img
                  src={ceo}
                  alt="Updated Person"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
