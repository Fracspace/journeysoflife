"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";

import heroImg from '../../../public/assets/stories/everydayMoments.png';

export default function StoriesPage() {
  const [videoModal, setVideoModal] = useState({ isOpen: false, title: "", videoUrl: "" });

  const stories = [
    {
      id: "st-1",
      category: "Wedding",
      title: "Two families, one film",
      desc: "Forty years of letters, a courtyard wedding and a granddaughter who finally understood.",
      placeholder: "wedding story still"
    },
    {
      id: "st-2",
      category: "Memorial",
      title: "For Appa, with love",
      desc: "A tribute film that let a family grieve, remember and smile all at once.",
      placeholder: "memorial story still"
    },
    {
      id: "st-3",
      category: "First Birthday",
      title: "Aarav turns one",
      desc: "Balloons, cake-covered cheeks and grandparents in happy tears.",
      placeholder: "first birthday story still"
    },
    {
      id: "st-4",
      category: "Anniversary",
      title: "Fifty golden years",
      desc: "A love story retold in their own voices, for the children who came after.",
      placeholder: "anniversary story still"
    },
    {
      id: "st-5",
      category: "Family",
      title: "The house on the hill",
      desc: "Three generations, one summer, and the home that held them all.",
      placeholder: "family story still"
    },
    {
      id: "st-6",
      category: "Graduation",
      title: "The first to finish",
      desc: "Years of quiet effort, finally worn with pride.",
      placeholder: "graduation story still"
    }
  ];

  const openVideo = (title, videoUrl) => {
    setVideoModal({ isOpen: true, title, videoUrl });
  };

  return (
    <>
      <Navbar />

      <main className="relative flex-1">
        
        {/* ============ HERO ============ */}
        <section className="relative bg-gradient-to-r from-bg-cream to-bg-tan pt-[158px] pb-[90px] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(214,179,106,0.1),transparent_45%)] pointer-events-none"></div>
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center relative z-10">
            <div className="max-w-[560px]">
              <Reveal className="flex items-center gap-3.5 mb-4">
                <span className="w-9 h-[1px] bg-primary"></span>
                <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">Stories</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-cormorant font-normal text-[40px] md:text-[70px] leading-[1.04] mb-5 text-text-dark">
                  Every family is a film<br />
                  <span className="italic text-primary">worth watching.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[16.5px] leading-relaxed text-text-gray max-w-[460px]">
                  Behind every photograph is a feeling. These are a few of the families who let us turn theirs into something that will outlive us all.
                </p>
              </Reveal>
            </div>

            <Reveal className="relative aspect-[5/4] rounded-[200px_24px_200px_24px] overflow-hidden shadow-[0_40px_90px_-34px_rgba(110,86,68,0.55)]">
              <ImageSlot src={heroImg} id="st-hero" shape="rect" placeholder="Family looking through old albums · warm light" />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark/20 via-transparent to-primary-light/20 pointer-events-none"></div>
            </Reveal>
          </div>
        </section>

        {/* ============ FEATURED STORY ============ */}
        {/* <section className="py-[110px] bg-bg-cream">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              
              <Reveal className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_34px_74px_-32px_rgba(110,86,68,0.55)]">
                <ImageSlot id="st-featured" shape="rect" placeholder="Featured story · cinematic wedding still" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/50 to-transparent pointer-events-none"></div>
                <button 
                  onClick={() => openVideo("Meera & Vikram's Anniversary Film", "https://www.w3schools.com/html/mov_bbb.mp4")}
                  className="absolute inset-0 m-auto w-[82px] h-[82px] border-none bg-[#F8F5EF]/92 rounded-full grid place-items-center cursor-pointer shadow-[0_20px_50px_-12px_rgba(30,27,24,0.6)] hover:scale-108 transition-transform"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1E1B18" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </Reveal>

              <div>
                <Reveal className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-[1px] bg-primary"></span>
                  <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">Featured Story</span>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="font-cormorant font-normal text-[30px] md:text-[46px] leading-[1.1] mb-5 text-text-dark">
                    "It felt like reliving our wedding, thirty years on."
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-[16px] leading-relaxed text-text-gray mb-[22px]">
                    Meera and Vikram handed us a shoebox of faded prints and a cassette of their vows. We gave them back a film their children now watch every anniversary — and their grandchildren will one day too.
                  </p>
                </Reveal>
                <Reveal delay={0.3} className="flex items-center gap-3.5">
                  <div className="w-[52px] h-[52px] rounded-full overflow-hidden flex-none">
                    <ImageSlot id="st-avatar" shape="circle" placeholder="couple" />
                  </div>
                  <div>
                    <div className="font-cormorant text-[19px] text-text-dark font-medium">Meera &amp; Vikram</div>
                    <div className="text-[11.5px] tracking-[0.14em] uppercase text-text-gray font-semibold">Anniversary Film · Pune</div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section> */}

        {/* ============ MORE STORIES ============ */}
        <section className="py-20 bg-gradient-to-b from-bg-cream to-bg-tan">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal className="flex items-center justify-center gap-3.5 mb-4">
              <span className="w-9 h-[1px] bg-primary"></span>
              <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">More Stories</span>
              <span className="w-9 h-[1px] bg-primary"></span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-center font-cormorant font-normal text-[30px] md:text-[52px] mb-14 text-text-dark">
                Moments we were trusted with.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {stories.map((story, i) => (
                <Reveal key={story.id} delay={0.08 * (i % 3)} className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-[0_18px_40px_-26px_rgba(110,86,68,0.5)] hover:translate-y-[-6px] hover:shadow-[0_30px_60px_-28px_rgba(110,86,68,0.55)] transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-106">
                      <ImageSlot id={story.id} shape="rect" placeholder={story.placeholder} />
                    </div>
                    <span className="absolute top-[14px] left-[14px] bg-bg-dark/60 text-bg-cream text-[10px] tracking-[0.16em] uppercase px-3 py-1.5 rounded-full font-semibold">
                      {story.category}
                    </span>
                  </div>
                  <div className="p-6 md:p-[24px_26px_28px]">
                    <h3 className="font-cormorant font-medium text-[25px] mb-2 text-text-dark">{story.title}</h3>
                    <p className="text-[14px] leading-relaxed text-text-gray">{story.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="relative min-h-[64vh] flex items-center overflow-hidden py-[100px]">
          <div className="absolute inset-0">
            <ImageSlot id="cta-band-bg" shape="rect" placeholder="Sunset · family together · cinematic" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/85 via-bg-dark/45 to-bg-dark/60 pointer-events-none"></div>
          
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 w-full z-10">
            <div className="max-w-[600px]">
              <Reveal>
                <p className="font-caveat text-[28px] text-primary-light mb-3">Your story is waiting.</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-cormorant font-normal text-[34px] md:text-[58px] leading-[1.06] text-[#F8F5EF] mb-7">
                  Let's turn your memories into a film you'll treasure forever.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3.5 bg-[#D6B36A] text-[#1E1B18] px-8.5 py-5 rounded-full text-[12.5px] tracking-[0.16em] uppercase font-semibold transition-all duration-400 hover:bg-[#F8F5EF] hover:-translate-y-1"
                >
                  Begin Your Journey 
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* VIDEO PLAYER MODAL */}
      {videoModal.isOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col justify-center items-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-zinc-950 text-white">
              <h3 className="font-cormorant text-2xl font-semibold">{videoModal.title}</h3>
              <button 
                onClick={() => setVideoModal({ isOpen: false, title: "", videoUrl: "" })}
                className="text-zinc-400 hover:text-white p-1"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-black">
              <video 
                src={videoModal.videoUrl} 
                controls 
                autoPlay 
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
