
import { useState, React } from "react";
import { ChevronLeft, ChevronRight, Globe, X, Calendar, Clock, CheckCircle } from "lucide-react";

import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import Header from "../../component/Header";
import AboutCom from "../../component/home/AboutCom";
import ModernSkillsSection from "../../component/home/ModernSkillsSection";
import PETBottleWashingSection from "../../component/home/PETBottleWashingSection";
import GlobalPresenceSection from "../../component/home/GlobalPresenceSection";


export default function Home() {


    return (
        <>
            <Header />
            <div className="flex pb-[140px] pt-[120px] gap-[80px] flex-col bg-[#ffffff57] w-full h-full">

                <AboutCom />
                <ModernSkillsSection />

<PETBottleWashingSection />
<GlobalPresenceSection />

            </div>
        </>
    );
}
