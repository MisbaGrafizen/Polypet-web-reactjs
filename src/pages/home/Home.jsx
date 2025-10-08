
import { useState, React } from "react";
import { ChevronLeft, ChevronRight, Globe, X, Calendar, Clock, CheckCircle } from "lucide-react";

import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import Header from "../../component/Header";
import AboutCom from "../../component/home/AboutCom";
import ModernSkillsSection from "../../component/home/ModernSkillsSection";
import PETBottleWashingSection from "../../component/home/PETBottleWashingSection";
import GlobalPresenceSection from "../../component/home/GlobalPresenceSection";
import HeroSection from "../../component/home/HeroSection";
import ProductDisplay from "../../component/home/ProductDisplay";
import Faq from "../../component/home/Faqs";
import Testimonials from "../../component/home/Testimonials";
import Blog from "../../component/home/Blog";
import Footer from "../../component/Footer";


export default function Home() {


    return (
        <>
            <Header />
            <div className="flex pt-[120px] gap-[80px] flex-col bg-[#ffffff57] w-full h-full">
<HeroSection />
                <AboutCom />
                <ModernSkillsSection />

<PETBottleWashingSection />
<GlobalPresenceSection />
<ProductDisplay />
{/* <Faq /> */}
<Testimonials />
<Blog />
<Footer />

            </div>
        </>
    );
}
