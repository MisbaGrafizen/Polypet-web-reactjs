import React from 'react'

export default function Visson() {
  return (
<>

     <div className=" px-4 bg-gradient-to-b font-Poppins from-white to-slate-50">
                    <div className="max-w-7xl mx-auto">
                        {/* Vision Header */}
                        <div className="text-center mb-10">
                            <div className="inline-block">
                                <h2 className="text-4xl font-[600]  text-blue-800 mb-4 relative">
                                    Our Noble Vision
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-blue-600"></div>
                                </h2>
                            </div>
                            <p className="text-lg text-gray-700 mt-6 max-w-2xl mx-auto  leading-tight">
                                Our vision is to be the most trusted, innovative, and community-focused Dental care provider in India.
                            </p>
                        </div>

                        {/* Vision Cards */}
                        <div className="grid md:grid-cols-3 gap-8 mb-[30px] max-w-6xl mx-auto">
                            {/* Trust and Preference */}
                            <div className="group">
                          <div className="bg-white h-[240px] rounded-[10px] border-blue-200 border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-5 text-center relative overflow-hidden">
                                    {/* <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-5">
                                        <div className="w-14 h-14 mx-auto bg-gradient-to-tr  from-blue-600 via-blue-900 to-slate-600 rounded-[8px] flex items-center justify-center  border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Eye className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-[18px]  font-bold text-blue-800 mb-4 tracking-wide">Trust and Preference</h3>
                                    {/* <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div> */}
                                    <p className="text-gray-600 leading-relaxed ">
                                        Becoming the most trusted and preferred Dental care provider in India.
                                    </p>
                                </div>
                            </div>

                            {/* Personalized and Expert Care */}
                            <div className="group">
                          <div className="bg-white h-[240px] rounded-[10px] border-blue-200 border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-5 text-center relative overflow-hidden">
                                    {/* <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-5">
                                        <div className="w-14 h-14 mx-auto bg-gradient-to-tr  from-blue-600 via-blue-900 to-slate-600 rounded-[8px] flex items-center justify-center  border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Target className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-[18px]  font-bold text-blue-800 mb-4 tracking-wide">
                                        Personalized and Expert Care
                                    </h3>
                                    {/* <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div> */}
                                    <p className="text-gray-600 leading-relaxed ">
                                        Offering a unique blend of personalized attention and specialist expertise.
                                    </p>
                                </div>
                            </div>

                            {/* Community Empowerment */}
                            <div className="group">
                          <div className="bg-white h-[240px] rounded-[10px] border-blue-200 border-[1.4px] shadow-lg hover:shadow-xl transition-all duration-300 p-5 text-center relative overflow-hidden">
                                    {/* <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400"></div> */}

                                    <div className="mb-5">
                                        <div className="w-14 h-14 mx-auto bg-gradient-to-tr  from-blue-600 via-blue-900 to-slate-600 rounded-[8px] flex items-center justify-center  border-blue-200 group-hover:bg-blue-800 transition-colors duration-300">
                                            <Globe className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-[18px]  font-bold text-blue-800 mb-4 tracking-wide">Community Empowerment</h3>
                                    {/* <div className="w-12 h-px bg-blue-400 mx-auto mb-4"></div> */}
                                    <p className="text-gray-600 leading-relaxed ">
                                        Empowering communities to live healthier, happier lives through cost-effective Dental care solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision Decorative Element */}
                        {/* <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2">
              <div className="w-8 h-px bg-blue-400"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-16 h-px bg-blue-400"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-8 h-px bg-blue-400"></div>
            </div>
          </div> */}
                    </div>
                </div>


</>
  )
}
