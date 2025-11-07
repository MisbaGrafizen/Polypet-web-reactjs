import React from 'react'
import Header from '../../component/Header'
import CardSwap, { Card } from '../../component/reactBits/CardSwap'
import AboutUsPageCom from '../../component/aboutUsPage/AboutUsPageCom'
import MissionVisson from '../../component/aboutUsPage/MissionVisson'
import Faq from '../../component/home/Faqs'
import Testimonials from '../../component/home/Testimonials'
import Blog from '../../component/home/Blog'
import Footer from '../../component/Footer'

export default function AboutMainPage() {
    return (
        <>
            <Header />
            <section className="flex pt-[120px] gap-[80px] flex-col bg-[#ffffff57] w-full h-full">
<AboutUsPageCom />





<div className=' w-[80%] bg-[#02118a] px-[30px] mx-auto' style={{ height: '600px', position: 'relative' , }}>
  <CardSwap
    cardDistance={20}
    verticalDistance={30}
    delay={5000}
    pauseOnHover={false}
  >
    <Card>
      <h3>Card 1</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 2</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 3</h3>
      <p>Your content here</p>
    </Card>
  </CardSwap>
</div>
<MissionVisson />



<Testimonials/>
{/* <Faq /> */}
<Blog />
<Footer />

            </section>
        </>
    )
}
