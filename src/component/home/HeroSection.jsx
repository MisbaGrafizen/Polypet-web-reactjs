import React, { useEffect, useRef, useState } from 'react'

import first1Desktop from "../../../public/imges/Herosection/first1Desktop.jpg";
import first2Desktop from "../../../public/imges/Herosection/first2Desktop.jpeg";

import first3Desktop from "../../../public/imges/Herosection/first3Desktop.jpeg";


const baseSlides = [

  {
    mobile: first1Desktop,
    tablet: first1Desktop,
    desktop: first1Desktop,
  },
  {
    mobile: first2Desktop,
    tablet: first2Desktop,
    desktop: first2Desktop,
  },

  {
    mobile: first3Desktop,
    tablet: first3Desktop,
    desktop: first3Desktop,
  },


//   {
//     mobile: MemoriesMobile,
//     tablet: MemoriesTab,
//     desktop: MemoriesDesktop,
//   },
//   {
//     mobile: FamilyMobile,
//     tablet: FamilyTab,
//     desktop: FamilyDesktop,
//   },
];

export default function HeroSection() {

     const [slidesData, setSlidesData] = useState([]);
  const [idx, setIdx] = useState(1);
  const [anim, setAnim] = useState(true);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const loopable = [
      baseSlides[baseSlides.length - 1],
      ...baseSlides,
      baseSlides[0],
    ];
    setSlidesData(loopable);
    setIdx(1);
    start();
    return stop;
  }, []);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => setIdx((i) => i + 1), 2500);
  };

  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (!anim || slidesData.length < 3) return;

    const lastIndex = slidesData.length - 1;
    const lastRealIndex = slidesData.length - 2;

    if (idx === lastIndex) {
      const t = setTimeout(() => {
        setAnim(false);
        setIdx(1);
      }, 900);
      return () => clearTimeout(t);
    }

    if (idx === 0) {
      const t = setTimeout(() => {
        setAnim(false);
        setIdx(lastRealIndex);
      }, 820);
      return () => clearTimeout(t);
    }
  }, [idx, anim, slidesData]);

  useEffect(() => {
    if (!anim) {
      const t = setTimeout(() => setAnim(true), 20);
      return () => clearTimeout(t);
    }
  }, [anim]);

  const next = () => setIdx((i) => i + 1);
  const prev = () => setIdx((i) => i - 1);

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const onTouchEnd = () => {
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev();
      start();
    }
  };

  const baseLen = baseSlides.length;

  const goToDot = (realIndex) => {
    setAnim(true);
    setIdx(realIndex + 1);
    start();
  };
  return (
<>


          <section
            className="relative md11:w-[80%] 2xl:w-[1330px] mx-auto rounded-[20px]  overflow-hidden"
            onMouseEnter={stop}
            onMouseLeave={start}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            aria-roledescription="carousel"
          >
            <div
              className={`flex w-full  ${anim
                  ? "transition-transform duration-[800ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                  : "transition-none"
                }`}
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {slidesData.map((slide, i) => (
                <div
                  key={i}
                  className="w-full shrink-0  overflow-hidden h-[320px] md11:h-[400px] "
                >
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet={slide.desktop || slide.image}
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet={slide.tablet || slide.image}
                    />
                    <img
                      src={slide.mobile || slide.image}
                      alt={`Slide ${i}`}
                      className="w-full h-full  object-cover  md11:object-cover  2xl:object-cover"
                      draggable={false}
                      loading={i === 1 ? "eager" : "lazy"}
                    />
                  </picture>
                </div>
              ))}
            </div>

            {baseLen > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {Array.from({ length: baseLen }).map((_, real) => {
                  const active = (idx - 1 + baseLen) % baseLen === real;
                  return (
                    <button
                      key={real}
                      onClick={() => goToDot(real)}
                      aria-label={`Go to slide ${real + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-red-600 w-6" : "bg-red-200 hover:bg-white/80"
                        }`}
                    />
                  );
                })}
              </div>
            )}
          </section>




</>
  )
}
