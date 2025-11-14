import React from 'react'
import Header from '../../component/Header'
import CardSwap, { Card } from '../../component/reactBits/CardSwap'
import AboutUsPageCom from '../../component/aboutUsPage/AboutUsPageCom'
import MissionVisson from '../../component/aboutUsPage/MissionVisson'
import Faq from '../../component/home/Faqs'
import Testimonials from '../../component/home/Testimonials'
import Blog from '../../component/home/Blog'
import Footer from '../../component/Footer'
import Journey from '../../component/aboutUsPage/Journey'
import FounderCom from '../../component/aboutUsPage/FounderCom'

export default function AboutMainPage() {
    return (
        <>
            <Header />
            <section className="flex pt-[120px] gap-[80px] flex-col bg-[#ffffff57] w-full h-full">
<AboutUsPageCom />




<Journey />
<FounderCom />
{/* <MissionVisson /> */}



<Testimonials/>
{/* <Faq /> */}
<Blog />
<Footer />

            </section>
        </>
    )
}
