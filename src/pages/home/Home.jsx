
import { useState, React } from "react";
import { ChevronLeft, ChevronRight, Globe, X, Calendar, Clock, CheckCircle } from "lucide-react";

import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import Header from "../../component/Header";
import AboutCom from "../../component/home/AboutCom";


export default function Home() {


    return (
        <>
         <Header />
            <div className="flex pt-[120px] flex-col bg-[#ffffff57] w-full h-full">
     
<AboutCom />




</div>
        </>
    );
}
