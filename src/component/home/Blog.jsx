import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, Tag, TrendingUp, Eye } from "lucide-react"

// Replace with real image imports or public paths
import blog1 from "../../../public/imges/blogsimages/blog1.jpg"
import blog2 from "../../../public/imges/blogsimages/blog2.jpeg"
import blog3 from "../../../public/imges/blogsimages/blog3.jpg"
import blog4 from "../../../public/imges/blogsimages/blog44.webp"
import blog5 from "../../../public/imges/blogsimages/blog5.webp"
import blog6 from "../../../public/imges/blogsimages/blog6.jpeg"





import { BookOpen, Feather } from "lucide-react"

export default function Blog() {
  const [hoveredCard, setHoveredCard] = useState(null)

const blogPosts = [
  {
    id: 1,
    title: "How PET Recycling Works: Step by Step Process",
    excerpt:
      "Discover the complete journey of PET bottles — from collection and sorting to washing, extrusion, and producing high-quality rPET for packaging and textiles.",
    author: "Dynamic Polypet Team",
    date: "Oct 28, 2025",
    readTime: "6 min read",
    category: "Recycling Process",
    image: blog1,
    featured: true,
    trending: true,
    views: "3.8k",
  },
  {
    id: 2,
    title: "Top PET Recycling Machinery to Watch in 2025",
    excerpt:
      "Looking to upgrade your recycling plant? Here are the must-have machines in 2025 that maximize efficiency, reduce waste, and improve ROI.",
    author: "Dynamic Polypet Experts",
    date: "Oct 21, 2025",
    readTime: "5 min read",
    category: "Machinery",
    image: blog2,
    featured: false,
    trending: true,
    views: "2.5k",
  },
  {
    id: 3,
    title: "Sustainability in Plastics: The Future of rPET",
    excerpt:
      "rPET is transforming packaging worldwide. Learn how recycled PET is reducing carbon footprints and becoming the go-to sustainable material.",
    author: "Dynamic Polypet Sustainability Desk",
    date: "Oct 14, 2025",
    readTime: "5 min read",
    category: "Sustainability",
    image: blog3,
    featured: false,
    trending: false,
    views: "2.9k",
  },
  {
    id: 4,
    title: "Cost and ROI of Setting Up a PET Recycling Plant",
    excerpt:
      "Curious about investment in PET recycling? We break down plant costs, operational expenses, and the average return on investment in India.",
    author: "Dynamic Polypet Analysts",
    date: "Oct 7, 2025",
    readTime: "7 min read",
    category: "Finance & Investment",
    image: blog4,
    featured: false,
    trending: true,
    views: "4.1k",
  },
  {
    id: 5,
    title: "Government Rules for Plastic Waste Management 2025",
    excerpt:
      "Stay compliant with India’s latest Plastic Waste Management (PWM) regulations. Here’s what businesses need to know about EPR obligations.",
    author: "Dynamic Polypet Compliance Team",
    date: "Sep 30, 2025",
    readTime: "6 min read",
    category: "Compliance",
    image: blog5,
    featured: false,
    trending: false,
    views: "3.4k",
  },
  {
    id: 6,
    title: "Global Trends in PET Recycling: AI, Chemical Recycling & More",
    excerpt:
      "The PET recycling industry is evolving fast — from AI-powered sorting to chemical recycling technologies. Here’s what the future holds.",
    author: "Dynamic Polypet Research",
    date: "Sep 23, 2025",
    readTime: "8 min read",
    category: "Industry Trends",
    image: blog6,
    featured: false,
    trending: false,
    views: "3.0k",
  },
];



  const getColorClasses = (color) => {
    const colors = {
      amber: {
        bg: "bg-amber-50",
        border: "border-amber-200",
        accent: "bg-amber-500",
        text: "text-amber-700",
        button: "bg-blue-900 hover:bg-amber-700",
        ribbon: "bg-gradient-to-r from-amber-400 to-orange-500",
      },
      rose: {
        bg: "bg-rose-50",
        border: "border-rose-200",
        accent: "bg-rose-500",
        text: "text-rose-700",
        button: "bg-rose-600 hover:bg-rose-700",
        ribbon: "bg-gradient-to-r from-rose-400 to-pink-500",
      },
      emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        accent: "bg-emerald-500",
        text: "text-emerald-700",
        button: "bg-emerald-600 hover:bg-emerald-700",
        ribbon: "bg-gradient-to-r from-emerald-400 to-green-500",
      },
      indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        accent: "bg-indigo-500",
        text: "text-indigo-700",
        button: "bg-indigo-600 hover:bg-indigo-700",
        ribbon: "bg-gradient-to-r from-indigo-400 to-blue-500",
      },
    }
    return colors[color] || colors.amber
  }



  return (
    // <div className="md:w-[100%]  md:px-[20px] font-Poppins relative  w-[90%] flex-col gap-[30px] mx-auto flex 2xl:w-[1370px]">



    //   <div>
    //     {/* <h3 className="text-[#083d5c]  border font-[600] px-[10px] rounded-full  py-[2px] border-[#f00] w-fit uppercase tracking-widest text-[14px]">Blogs</h3> */}
    //     <h1 className=' flex font-[600] text-[#0f0f0f] w-fit mx-auto  text-[30px] md:text-[37px]'>
    //       Latest Insights from City Smile
    //     </h1>
    //   </div>
    //   <div className="w-full flex flex-col md:gap-[20px]">
    //     <div className="flex w-full gap-[30px] flex-col justify-between">
    //       <div className="flex w-full gap-[19px] 2xl:gap-[29px] pl-[5px] overflow-x-auto flex-shrink-0 py-2">
    //         {blogPosts.map((post) => (
    //           <div
    //             key={post.id}
    //             className="md:w-[320px]  border shadow-icon  mb-[20px] 2xl:h-[440px] h-[440px] w-[260px] mx-auto md:mx-0 relative gap-[px] shadow-lg overflow-hidden rounded-[14px]  flex flex-col cursor-pointer flex-shrink-0"
    //             onClick={() => navigate(post.link)}
    //           >
    //             <img
    //               className="md:h-[220px] object-cover 2xl:h-[240px] h-[210px]"
    //               src={post.image}
    //               alt={post.title}
    //             />

    //             <div className="flex w-full pt-[px] px-[10px] flex-col mt-[10px] gap-[8px]">
    //               <div className="font-[600] text-[16px]">
    //                 <p className="flex font-Poppins font-[600] text-[#434343] leading-[22px]">
    //                   {post.title}
    //                 </p>
    //               </div>
    //               <div className="text-[14px] font-[400] text-[#646464]">
    //                 <p className="font-Poppins ">
    //                   {post.description}
    //                 </p>
    //               </div>
    //               <div className="text-[14px] w-full flex-col  cursor-pointer absolute bottom-3  text-[#083d5c] flex justify-start font-[600]">
    //                 <p className="font-Poppins">Read More</p>

    //                 <div className=" flex font-[400] text-[13px] text-[#848484]">
    //                   {post.date} | 02:34 AM
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       {/* Optional View More Button */}
    //       {/* <div className="w-[120px] mt-[15px] text-[#fff] py-[8px] cursor-pointer font-[600] anime-green-btn1 font-Redhat rounded-[10px] text-center mx-auto">
    //         <p>View More</p>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>

    <>
      <section className="pt-10  font-Poppins bg-gradient-to-b from-blue-50 to-orange-10">
        <div className=" mx-auto px-4">
          {/* Decorative Header */}
          <div className="text-center mb-10 relative">

<h2 className="md:text-[45px] text-[30px] font-[600] text-gray-800 mb-3">
  Industry Stories Behind <b className="font-[600] text-[#062f95]">Sustainable PET</b>
</h2>



          </div>



          {/* Regular Articles - Masonry Layout */}
          <div className=" flex overflow-x-auto pb-[19px]  px-[20px]  w-[100%] gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className={`group flex   relative flex-shrink-0 flex-col w-[290px] bg-white h-[370px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300  `}
              >
                {/* Image */}
                <div className="relative h-[190px] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className={`w-full object-cover h-[100%] group-hover:scale-105 transition-transform duration-500 
                   
               `}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>

                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-[18px] leading-[23px] font-[600] text-gray-900 mb-2 group-hover:text-[#062f95] transition-colors duration-300 ">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-2 text-[13px] line-clamp-4">{post.excerpt}</p>
                  <div className=" flex flex-col gap-[px] absolute bottom-5">


                    {/* <div className="flex items-center justify-between  text-sm text-gray-500 mb-">
                      <div className="flex items-center gap-3">
                        {/* <span className=" text-[10px]">{post.author}</span> 
                        <span>•</span>
                        <span className=" text-[10px]">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className=" text-[10px]">{post.readTime}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span className=" text-[10px]">{post.views}</span>
                        </div>
                      </div>
                    </div> */}

                 
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>




      </section>



    </>
  );
}
