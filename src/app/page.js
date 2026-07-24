"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Reveal from "@/components/Reveal";
import Confetti from "@/components/Confetti";
import CountUp from "@/components/CountUp";

import img2 from '../../public/assets/home/img1.png';
import img1 from '../../public/assets/home/img2.png';

import weddingImg from '../../public/assets/home/weddings.png';
import anniversaryImg from '../../public/assets/home/anniversary.png';
import corporateImg from '../../public/assets/home/corporate.png';
import engagementImg from '../../public/assets/home/engagement.png';
import familyReunionImg from '../../public/assets/home/familyReUnion.png';
import achievementsImg from '../../public/assets/home/achievements.png';
import babyImg from '../../public/assets/home/baby.png';
import graduationImg from '../../public/assets/home/graduation.png';
import cakeCuttingImg from '../../public/assets/home/cakeCutting.png';
import everydayImg from '../../public/assets/home/everydayMoments.png';
import festivalImg from '../../public/assets/home/festivals.png';

import ivaanBdayGlimpseImg from '../../public/assets/home/ivaanBdayGlimpse.png';

import childLaughingImg from '../../public/assets/home/childLaughing.png';

// const ivaanBdayVideo = "/assets/home/firstbdayIvan.mp4";

export default function Home() {
  const [videoModal, setVideoModal] = useState({ isOpen: false, title: "", videoUrl: "" });

  const occasions = [
    { id: 'oc-wedding', src: weddingImg, t: 'Wedding', d: 'The day two families became one — every glance, every vow, remembered forever.', ar: 'aspect-[4/5]', p: 'luxury wedding · golden hour' },
    { id: 'oc-engagement', src: engagementImg, t: 'Engagement', d: 'The quiet, trembling "yes" that started an entire lifetime together.', ar: 'aspect-[1/1]', p: 'engagement · ring · joy' },
    { id: 'oc-baby', src: babyImg, t: 'Baby', d: 'First breaths, first cries, first everything — held forever in light.', ar: 'aspect-[4/5]', p: 'newborn baby · parents' },
    { id: 'oc-birthday', src: cakeCuttingImg, t: 'Birthday', d: 'Another candle, another year of being loved out loud.', ar: 'aspect-[3/4]', p: 'birthday celebration' },
    { id: 'oc-anniversary', src: anniversaryImg, t: 'Anniversary', d: 'A love story that is still, beautifully, being written.', ar: 'aspect-[4/5]', p: 'anniversary couple' },
    { id: 'oc-reunion', src: familyReunionImg, t: 'Family Reunion', d: 'Everyone, together, under one roof again — laughter in every corner.', ar: 'aspect-[1/1]', p: 'family reunion gathering' },
    { id: 'oc-graduation', src: graduationImg, t: 'Graduation', d: 'Years of quiet effort, finally worn with pride.', ar: 'aspect-[3/4]', p: 'graduation · cap & gown' },
    // { id: 'oc-retirement', t: 'Retirement', d: 'A lifetime of work, honoured the way it always deserved.', ar: 'aspect-[4/5]', p: 'retirement celebration' },
    { id: 'oc-festivals', src: festivalImg, t: 'Festivals', d: 'Traditions passed gently from one generation to the next.', ar: 'aspect-[1/1]', p: 'festival · lights · family' },
    { id: 'oc-corporate', src: corporateImg, t: 'Corporate', d: 'Milestones worth far more than a memo.', ar: 'aspect-[3/4]', p: 'corporate milestone event' },
    { id: 'oc-achievements', src: achievementsImg, t: 'Achievements', d: 'The rare, hard-won moments that deserve applause.', ar: 'aspect-[4/5]', p: 'achievement · award' },
    // { id: 'oc-memorial', t: 'Memorial', d: 'A tender tribute that keeps a loved one close.', ar: 'aspect-[1/1]', p: 'memorial · legacy portrait' },
    { id: 'oc-everyday', src: everydayImg, t: 'Everyday Moments', d: 'The small, ordinary magic of simply being a family.', ar: 'aspect-[3/4]', p: 'candid family at home' }
  ];

  const videos = [
    { id: 'vs-wedding', t: 'Wedding Film', dur: '04:32', p: 'wedding film still', url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 'vs-birthday', t: 'Birthday Film', dur: '02:14', p: 'birthday film still', url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 'vs-doc', t: 'Family Documentary', dur: '11:08', p: 'family documentary still', url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 'vs-anniv', t: 'Anniversary', dur: '03:47', p: 'anniversary film still', url: "https://www.w3schools.com/html/mov_bbb.mp4" }
  ];

  const compares = [
    { id: 'cmp-1', label: 'Wedding · 1971', before: 'faded old wedding photo', after: 'restored cinematic scene' },
    { id: 'cmp-2', label: 'Grandparents · 1958', before: 'damaged black & white photo', after: 'colour-graded film frame' },
    { id: 'cmp-3', label: 'Childhood · 1989', before: 'creased childhood snapshot', after: 'restored & animated scene' },
    { id: 'cmp-4', label: 'Family · 1965', before: 'yellowed family portrait', after: 'cinematic restored portrait' }
  ];

  const openVideo = (title, videoUrl) => {
    const url = typeof videoUrl === "object" && videoUrl !== null ? videoUrl.src || videoUrl.default || videoUrl : videoUrl;
    setVideoModal({ isOpen: true, title, videoUrl: url });
  };

  return (
    <>
      <Navbar />

      <main className="relative flex-1">

        {/* ============ HERO ============ */}
        <header className="relative min-h-screen flex items-stretch bg-gradient-to-r from-bg-cream via-bg-cream to-bg-tan overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(214,179,106,0.1),transparent_45%)] pointer-events-none"></div>

          <div className="max-w-[1320px] mx-auto px-6 md:px-10 pt-[140px] pb-[80px] grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full relative z-10">
            {/* LEFT */}
            <div className="max-w-[560px]">
              <Reveal>
                <div className="flex items-center gap-3.5 mb-6.5">
                  <span className="w-11 h-[1px] bg-primary"></span>
                  <span className="text-[11px] tracking-[0.34em] uppercase text-primary font-semibold">Cinematic Family Films</span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="font-cormorant font-medium text-[44px] md:text-[68px] lg:text-[76px] leading-[1.03] tracking-tight mb-[18px] text-text-dark">
                  A photograph remembers<br />a moment.
                  <span className="block italic font-medium text-primary mt-1.5">
                    A film remembers<br />how it <span className="text-primary-dark">felt.</span>
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex items-center gap-4 my-6">
                  <span className="w-13 h-[1px] bg-primary-dark/30"></span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B38A42" strokeWidth="1.4">
                    <path d="M12 21s-7-4.5-9.5-9C.8 8.5 2.5 4.5 6.5 4.5c2 0 3.2 1.2 3.5 2 .3-.8 1.5-2 3.5-2 4 0 5.7 4 4 7.5C19 16.5 12 21 12 21z" />
                  </svg>
                  <span className="w-13 h-[1px] bg-primary-dark/30"></span>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="text-[16.5px] leading-relaxed text-text-gray max-w-[440px] mb-9">
                  Upload your memories. Share your story. We'll weave your photographs, voices and moments into a cinematic film your family will treasure for generations.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-wrap items-center gap-[18px] mb-11">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3.5 bg-[#1E1B18] text-[#F8F5EF] px-7.5 py-4.5 rounded-full text-[12.5px] tracking-[0.16em] uppercase font-semibold transition-all duration-400 hover:bg-primary hover:text-bg-dark hover:-translate-y-1"
                  >
                    Begin the Journey
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>

                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="flex flex-wrap gap-[26px]">
                  <div className="flex items-center gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B38A42" strokeWidth="1.4">
                      <path d="M12 2l7 3v6c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V5l7-3z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-[11.5px] tracking-[0.06em] text-primary-dark font-semibold uppercase">Private &amp; Secure</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B38A42" strokeWidth="1.4">
                      <path d="M12 3a4 4 0 100 8 4 4 0 000-8z" />
                      <path d="M12 11v4M8 21l4-6 4 6" />
                    </svg>
                    <span className="text-[11.5px] tracking-[0.06em] text-primary-dark font-semibold uppercase">Human Storytelling</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B38A42" strokeWidth="1.4">
                      <path d="M12 3l2.4 5 5.6.6-4.2 3.8 1.2 5.6L12 20l-5 3 1.2-5.6L4 13.6l5.6-.6L12 3z" />
                    </svg>
                    <span className="text-[11.5px] tracking-[0.06em] text-primary-dark font-semibold uppercase">Premium Quality</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT (Hero Images) */}
            <div className="relative h-[76vh] min-h-[520px] w-full">
              <div className="absolute top-[-4%] right-[8%] w-[120px] h-[64%] bg-[repeating-linear-gradient(#1E1B18_0_8px,transparent_8px_16px)] opacity-5 rounded-lg rotate-6 pointer-events-none"></div>
              <div className="absolute bottom-[-2%] left-[-4%] w-[96px] h-[52%] bg-[repeating-linear-gradient(#6E5644_0_7px,transparent_7px_14px)] opacity-6 rounded-lg -rotate-8 pointer-events-none"></div>

              <div className="absolute inset-0 rounded-[200px_200px_24px_24px] overflow-hidden shadow-[0_40px_90px_-30px_rgba(30,27,24,0.5)]">
                <ImageSlot src={img1} id="hero-main" shape="rect" placeholder="Hands holding an old family photograph · golden hour" />
                <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark/30 via-transparent to-primary-light/20 pointer-events-none"></div>
              </div>

              <div className="absolute bottom-[8%] left-[-6%] w-[180px] bg-bg-cream p-3 rounded-2xl shadow-[0_24px_50px_-20px_rgba(30,27,24,0.4)] -rotate-5 animate-float-y">
                <div className="relative w-full h-[120px] rounded-lg overflow-hidden">
                  <ImageSlot src={img2} id="hero-polaroid" shape="rect" placeholder="vintage family snapshot" />
                </div>
                <p className="font-caveat text-[18px] text-primary-dark text-center mt-2 mb-0.5">summer, 1974</p>
              </div>

              <div className="absolute top-[5%] right-[-3%] max-w-[210px] text-right animate-float-y2 pointer-events-none">
                <p className="font-caveat text-[26px] leading-[1.25] text-primary-dark m-0">Some stories deserve more than a photo album.</p>
                <div className="h-[2px] w-20 mt-2 ml-auto bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[26px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-gray">
            <span className="text-[9.5px] tracking-[0.34em] uppercase font-semibold">Scroll</span>
            <svg width="14" height="26" viewBox="0 0 14 26" fill="none" stroke="#B38A42" strokeWidth="1.2">
              <rect x="1" y="1" width="12" height="24" rx="6" />
              <circle cx="7" cy="7" r="1.6" fill="#B38A42" stroke="none">
                <animate attributeName="cy" values="7;16;7" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </header>

        {/* ============ LEGACIES (dark) ============ */}
        <section className="relative bg-bg-dark text-bg-cream py-[110px] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(179,138,66,0.14),transparent_55%)] pointer-events-none"></div>
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:6px_6px] pointer-events-none"></div>

          <div className="max-w-[1320px] mx-auto px-6 md:px-10 relative z-10">
            <Reveal className="text-center mb-3.5 flex items-center justify-center gap-3.5">
              <span className="w-9 h-[1px] bg-primary"></span>
              <span className="text-[11px] tracking-[0.36em] uppercase text-primary-light font-semibold">We Turn Memories Into Legacies</span>
              <span className="w-9 h-[1px] bg-primary"></span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-center font-cormorant font-normal text-[34px] md:text-[56px] leading-[1.1] mb-[70px] mx-auto max-w-[820px]">
                A film your family will <span className="italic text-primary-light">treasure forever.</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0">
              <Reveal delay={0} className="text-center px-5 border-b sm:border-b-0 sm:pb-0 pb-6 border-primary-light/10 sm:border-r border-primary-light/18">
                <div className="flex justify-center items-center h-14 mb-5">
                  <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="#D6B36A" strokeWidth="1.1">
                    <rect x="10" y="14" width="26" height="20" rx="2" />
                    <rect x="14" y="10" width="26" height="20" rx="2" opacity=".5" />
                    <circle cx="18" cy="21" r="2.4" />
                    <path d="M12 30l6-6 5 5 4-4 5 5" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-[22px] font-medium mb-2.5">Upload Memories</h3>
                <p className="text-[13px] leading-relaxed text-bg-cream/60">Photos, videos, voice notes &amp; the stories only you can tell.</p>
              </Reveal>

              <Reveal delay={0.08} className="text-center px-5 border-b sm:border-b-0 sm:pb-0 pb-6 border-primary-light/10 lg:border-r border-primary-light/18">
                <div className="flex justify-center items-center h-14 mb-5">
                  <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="#D6B36A" strokeWidth="1.1">
                    <path d="M12 34l2-8 18-18 6 6-18 18-8 2z" />
                    <path d="M28 12l6 6" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-[22px] font-medium mb-2.5">Craft the Story</h3>
                <p className="text-[13px] leading-relaxed text-bg-cream/60">Our storytellers shape your moments into a moving narrative.</p>
              </Reveal>

              <Reveal delay={0.16} className="text-center px-5 border-b sm:border-b-0 sm:pb-0 pb-6 border-primary-light/10 sm:border-r border-primary-light/18">
                <div className="flex justify-center items-center h-14 mb-5">
                  <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="#D6B36A" strokeWidth="1.1">
                    <rect x="9" y="16" width="30" height="22" rx="2" />
                    <path d="M9 22l30 0M13 16l4-6M21 16l4-6M29 16l4-6" />
                    <path d="M21 26v8l7-4-7-4z" fill="#D6B36A" stroke="none" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-[22px] font-medium mb-2.5">Cinematic Production</h3>
                <p className="text-[13px] leading-relaxed text-bg-cream/60">Professional editing, music, colour &amp; emotion in every frame.</p>
              </Reveal>

              <Reveal delay={0.24} className="text-center px-5 border-b sm:border-b-0 sm:pb-0 pb-6 border-primary-light/10 lg:border-r border-primary-light/18">
                <div className="flex justify-center items-center h-14 mb-5">
                  <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="#D6B36A" strokeWidth="1.1">
                    <circle cx="24" cy="24" r="15" />
                    <path d="M20 17l12 7-12 7V17z" fill="#D6B36A" stroke="none" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-[22px] font-medium mb-2.5">Relive Forever</h3>
                <p className="text-[13px] leading-relaxed text-bg-cream/60">Watch, share and return to the feeling any time you wish.</p>
              </Reveal>

              <Reveal delay={0.32} className="text-center px-5">
                <div className="flex justify-center items-center h-14 mb-5">
                  <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="#D6B36A" strokeWidth="1.1">
                    <path d="M17 22c-3 0-5-2-5-5s2-5 5-5c2 0 3.4 1.2 4 2.4C21.6 13.2 23 12 25 12c3 0 5 2 5 5s-2 5-5 5" />
                    <path d="M24 20l-9 9 9 9 9-9-9-9z" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-[22px] font-medium mb-2.5">Legacy for Generations</h3>
                <p className="text-[13px] leading-relaxed text-bg-cream/60">A timeless heirloom your grandchildren will one day cherish.</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ OCCASIONS ============ */}
        <section className="relative py-[120px] bg-gradient-to-b from-bg-cream to-bg-tan">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">

            <div className="text-center max-w-[760px] mx-auto mb-[66px]">
              <Reveal className="flex items-center justify-center gap-3.5 mb-4">
                <span className="w-9 h-[1px] bg-primary"></span>
                <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">Every Memory Deserves to Be Told</span>
                <span className="w-9 h-[1px] bg-primary"></span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-cormorant font-normal text-[34px] md:text-[58px] leading-[1.08] mb-5">
                  Films for every story <span className="italic text-primary">&amp; occasion.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[16px] leading-relaxed text-text-gray">
                  From the vows that begin a family to the milestones that define it — every chapter deserves to be remembered beautifully.
                </p>
              </Reveal>
            </div>

            {/* Occasions masonry grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-[26px]">
              {occasions.map((o, i) => (
                <Reveal key={o.id} delay={0.05 * (i % 3)} className="break-inside-avoid mb-[26px] bg-white rounded-2xl overflow-hidden shadow-[0_18px_40px_-26px_rgba(110,86,68,0.5)] cursor-pointer group hover:translate-y-[-6px] hover:shadow-[0_30px_60px_-28px_rgba(110,86,68,0.55)] transition-all duration-500">
                  <div className={`relative ${o.ar} overflow-hidden`}>
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-106">
                      <ImageSlot src={o.src} id={o.id} shape="rect" placeholder={o.p} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent pointer-events-none"></div>
                    <span className="absolute top-[14px] left-[14px] font-caveat text-[20px] text-bg-cream drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="p-6 md:p-[22px_24px_26px]">
                    <h3 className="font-cormorant font-medium text-[26px] mb-2 text-text-dark">{o.t}</h3>
                    <p className="text-[14px] leading-relaxed text-text-gray">{o.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ============ FIRST BIRTHDAY ============ */}
        <section className="relative py-[110px] md:py-[110px_40px_120px] bg-bg-tan overflow-hidden">
          <Confetti />

          <div className="max-w-[1320px] mx-auto px-6 md:px-10 relative z-20">
            <div className="text-center max-w-[760px] mx-auto mb-15">
              <Reveal className="inline-flex items-center gap-2.5 bg-white border border-primary/30 px-5 py-2.5 rounded-full mb-[22px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B38A42" strokeWidth="1.4">
                  <path d="M12 3c1 2-1 3 0 5M8 3c1 2-1 3 0 5M16 3c1 2-1 3 0 5" />
                  <path d="M5 12h14v3a2 2 0 01-2 2H7a2 2 0 01-2-2v-3z" />
                  <path d="M5 12c0-2 2-3 3.5-3S12 12 12 12s1-3 3.5-3S19 10 19 12" />
                  <path d="M6 19v2h12v-2" />
                </svg>
                <span className="text-[11px] tracking-[0.3em] uppercase text-primary font-semibold">Special Feature</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-cormorant font-normal text-[36px] md:text-[64px] leading-[1.05] mb-[18px]">
                  The first birthday <span className="italic text-primary">they'll never forget.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[16px] leading-relaxed text-text-gray">
                  One tiny candle. A room full of love. We capture the giggles, the cake-covered smiles and the grandparents' happy tears — and turn them into a film that grows more precious with every passing year.
                </p>
              </Reveal>
            </div>

            {/* Play Showcase */}
            <Reveal className="relative rounded-3xl overflow-hidden shadow-[0_40px_90px_-34px_rgba(110,86,68,0.55)] mb-11">
              <div className="relative aspect-[16/8]">
                <ImageSlot id="fb-hero" src={ivaanBdayGlimpseImg} shape="rect" placeholder="First birthday · cake cutting · confetti · golden hour" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/50 to-transparent pointer-events-none"></div>
              </div>
              <button
                onClick={() => openVideo("Ivaan Turns One — Preview")}
                className="absolute inset-0 m-auto w-[88px] h-[88px] border-none bg-[#F8F5EF]/92 rounded-full grid place-items-center cursor-pointer shadow-[0_20px_50px_-12px_rgba(30,27,24,0.6)] hover:scale-108 hover:bg-[#D6B36A] transition-all duration-300"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#1E1B18" className="ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="absolute left-[26px] bottom-[24px] text-bg-cream">
                <p className="font-cormorant italic text-[22px]">Ivaan turns one — a cinematic preview</p>
                <span className="text-[11px] tracking-[0.2em] uppercase opacity-75">02:14 · Birthday Film</span>
              </div>
            </Reveal>

            {/* Grid list of small photos */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              <Reveal className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"><ImageSlot id="fb-1" shape="rect" placeholder="cake cutting" /></Reveal>
              <Reveal delay={0.08} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-6"><ImageSlot id="fb-2" shape="rect" placeholder="child laughing" /></Reveal>
              <Reveal delay={0.16} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"><ImageSlot id="fb-3" shape="rect" placeholder="grandparents &amp; baby" /></Reveal>
              <Reveal delay={0.24} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-6"><ImageSlot id="fb-4" shape="rect" placeholder="balloons &amp; decorations" /></Reveal>
            </div> */}

            {/* Testimonials snippet */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[960px] mx-auto">
              <Reveal className="bg-white rounded-2xl p-8 shadow-[0_20px_44px_-26px_rgba(110,86,68,0.4)]">
                <div className="text-primary text-[15px] tracking-widest mb-3.5">★★★★★</div>
                <p className="font-cormorant italic text-[21px] leading-relaxed mb-4 text-text-dark">"Watching our daughter's birthday film brought tears to our eyes."</p>
                <span className="text-[11.5px] tracking-[0.14em] uppercase text-text-gray font-semibold">Priya &amp; Rohan · Mumbai</span>
              </Reveal>
              <Reveal delay={0.1} className="bg-white rounded-2xl p-8 shadow-[0_20px_44px_-26px_rgba(110,86,68,0.4)]">
                <div className="text-primary text-[15px] tracking-widest mb-3.5">★★★★★</div>
                <p className="font-cormorant italic text-[21px] leading-relaxed mb-4 text-text-dark">"The greatest keepsake we could have asked for."</p>
                <span className="text-[11.5px] tracking-[0.14em] uppercase text-text-gray font-semibold">The Nair Family · Kochi</span>
              </Reveal>
            </div> */}

          </div>
        </section>

        {/* ============ VIDEO SHOWCASE ============ */}
        {/* <section id="showcase" className="relative py-[120px] bg-bg-dark text-bg-cream overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(179,138,66,0.12),transparent_50%)] pointer-events-none"></div>

          <div className="max-w-[1320px] mx-auto px-6 md:px-10 relative z-10">
            <div className="flex items-end justify-between gap-[30px] mb-15 flex-wrap">
              <div>
                <Reveal className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-[1px] bg-primary"></span>
                  <span className="text-[11px] tracking-[0.36em] uppercase text-primary-light font-semibold">Sample Films</span>
                </Reveal>
                <h2 className="font-cormorant font-normal text-[34px] md:text-[58px] leading-[1.06] max-w-[560px]">
                  See how a memory <span className="italic text-primary-light">becomes a film.</span>
                </h2>
              </div>
              <Reveal>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-3 text-primary-light text-[12px] tracking-[0.16em] uppercase border-b border-[#D6B36A]/40 pb-2 hover:text-[#F8F5EF] transition-colors"
                >
                  View full gallery
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
              {videos.map((v, i) => (
                <Reveal key={v.id} delay={i * 0.08} className="group cursor-pointer">
                  <div
                    onClick={() => openVideo(v.t, v.url)}
                    className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_24px_50px_-28px_rgba(0,0,0,0.7)] hover:translate-y-[-8px] transition-transform duration-500"
                  >
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-106">
                      <ImageSlot id={v.id} shape="rect" placeholder={v.p} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/72 to-transparent pointer-events-none"></div>

                    <div className="absolute inset-0 margin-auto w-[62px] h-[62px] border border-bg-cream/70 bg-bg-dark/35 backdrop-blur-[4px] rounded-full grid place-items-center z-10 m-auto group-hover:bg-primary group-hover:scale-112 transition-all duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#F8F5EF" className="ml-1 group-hover:fill-bg-dark transition-colors">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>

                    <span className="absolute top-[14px] right-[14px] bg-bg-dark/60 text-bg-cream text-[11px] tracking-[0.08em] px-2.5 py-1.2 rounded-full">
                      {v.dur}
                    </span>
                    <div className="absolute left-4 bottom-4 text-bg-cream z-10">
                      <h3 className="font-cormorant font-medium text-[22px]">{v.t}</h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section> */}

        {/* ============ BEFORE / AFTER ============ */}
        {/* <section className="relative py-[120px] bg-gradient-to-b from-bg-tan to-bg-cream">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="text-center max-w-[720px] mx-auto mb-[62px]">
              <Reveal className="flex items-center justify-center gap-3.5 mb-4">
                <span className="w-9 h-[1px] bg-primary"></span>
                <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">Before &amp; After</span>
                <span className="w-9 h-[1px] bg-primary"></span>
              </Reveal>
              <h2 className="font-cormorant font-normal text-[34px] md:text-[58px] leading-[1.08] mb-4.5">
                From a faded photo to a <span className="italic text-primary">cinematic scene.</span>
              </h2>
              <p className="text-[16px] leading-relaxed text-text-gray">
                Drag to reveal how our artists restore, colour and bring old photographs back to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
              {compares.map((c, i) => (
                <Reveal key={c.id} delay={i * 0.08}>
                  <BeforeAfterSlider
                    id={c.id}
                    label={c.label}
                    beforePlaceholder={c.before}
                    afterPlaceholder={c.after}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section> */}

        {/* ============ TRUST STATS ============ */}
        {/* <section className="bg-bg-cream py-[100px]">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <Reveal>
              <div className="font-cormorant text-[56px] text-primary leading-none font-medium">
                <CountUp end={500} />+
              </div>
              <div className="text-[11.5px] tracking-[0.2em] uppercase text-text-gray font-semibold mt-2">Stories Told</div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="font-cormorant text-[56px] text-primary leading-none font-medium">
                <CountUp end={98} />%
              </div>
              <div className="text-[11.5px] tracking-[0.2em] uppercase text-text-gray font-semibold mt-2">Happy Families</div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="font-cormorant text-[56px] text-primary leading-none font-medium">
                <CountUp end={4.9} decimals={1} />
              </div>
              <div className="text-[11.5px] tracking-[0.2em] uppercase text-text-gray font-semibold mt-2">Average Rating</div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="font-cormorant text-[56px] text-primary leading-none font-medium">
                ∞
              </div>
              <div className="text-[11.5px] tracking-[0.2em] uppercase text-text-gray font-semibold mt-2">Memories Made Timeless</div>
            </Reveal>
          </div>
        </section> */}

        {/* ============ FINAL CTA ============ */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden py-20">
          <div className="absolute inset-0">
            <ImageSlot id="cta-bg" src={childLaughingImg} shape="rect" placeholder="Sunset · family laughing · children running · cinematic" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/85 via-bg-dark/50 to-bg-dark/70 pointer-events-none"></div>

          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 w-full z-10">
            <div className="max-w-[640px]">
              <Reveal>
                <p className="font-caveat text-[30px] text-primary-light mb-3.5">Your story is waiting.</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-cormorant font-normal text-[38px] md:text-[70px] leading-[1.05] text-[#F8F5EF] mb-6.5">
                  Your story deserves more than a folder full of photos.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[17px] leading-relaxed text-[#F8F5EF]/80 mb-9.5 max-w-[500px]">
                  Let us turn the moments you love into a film that will move your family for generations to come.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
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
                onClick={() => setVideoModal({ isOpen: false, title: "", videoUrl: "https://duixj37yn5405.cloudfront.net/videos/First+Birthday+of+IVAAN+.mp4" })}
                className="text-zinc-400 hover:text-white p-1"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-black">
              <video
                src="https://duixj37yn5405.cloudfront.net/videos/First+Birthday+of+IVAAN+.mp4"
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
