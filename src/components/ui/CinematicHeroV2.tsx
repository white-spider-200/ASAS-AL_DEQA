import React, { useEffect, useRef } from "react";
import { motion } from 'motion/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../lib/utils";
import { useTranslation } from 'react-i18next';
import { 
  ArrowLeft, 
  ArrowRight,
  ChevronRight, 
  Quote, 
  Landmark, 
  Shield, 
  ShieldCheck, 
  BarChart3, 
  Briefcase, 
  Building2, 
  TrendingUp 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  /* Environment Overlays */
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image: 
          linear-gradient(to right, color-mix(in srgb, var(--color-on-surface) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--color-on-surface) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  /* -------------------------------------------------------------------
     PHYSICAL SKEUOMORPHIC MATERIALS
  ---------------------------------------------------------------------- */
  
  .text-3d-matte {
      color: var(--color-on-surface);
      text-shadow: 
          0 10px 30px color-mix(in srgb, var(--color-on-surface) 20%, transparent), 
          0 2px 4px color-mix(in srgb, var(--color-on-surface) 10%, transparent);
  }

  .text-gold-matte {
      background: linear-gradient(180deg, var(--color-primary) 0%, color-mix(in srgb, var(--color-primary-container) 60%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 10px 20px color-mix(in srgb, var(--color-primary) 15%, transparent)) 
          drop-shadow(0px 2px 4px color-mix(in srgb, var(--color-primary) 10%, transparent));
  }

  .text-card-gold-matte {
      background: linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary-container) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8)) 
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  /* Deep Physical Card with Dynamic Mouse Lighting */
  .premium-depth-card {
      background: linear-gradient(145deg, #1b1b1b 0%, #0a0a0a 100%);
      box-shadow: 
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.1),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.04);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(242, 202, 80, 0.06) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%);
      backdrop-filter: blur(24px); 
      -webkit-backdrop-filter: blur(24px);
      box-shadow: 
          0 0 0 1px rgba(255, 255, 255, 0.1),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  .btn-modern-gold {
      background: var(--color-primary);
      color: #000;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -3px 6px rgba(0,0,0,0.1);
  }
  .btn-modern-gold:hover {
      transform: translateY(-3px);
      background: var(--color-primary);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -3px 6px rgba(0,0,0,0.1);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function CinematicHeroV2({ 
  className, 
  ...props 
}: CinematicHeroProps) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;

      cancelAnimationFrame(requestRef.current);
      
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          
          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(mockupRef.current, {
            rotationY: xVal * 8,
            rotationX: -yVal * 8,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  },[]);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;

    const ctx = gsap.context(() => {
      gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".text-days", { autoAlpha: 1, y: 150, clipPath: "inset(0 0 100% 0)" });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".card-left-content", ".card-right-mockup"], { autoAlpha: 0 });
      gsap.set(".cta-wrapper", { autoAlpha: 0, scale: 0.8, filter: "blur(30px)" });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
        .to(".text-days", { duration: 1.6, y: 0, clipPath: "inset(0 0 0% 0)", ease: "power4.inOut" }, "-=1.2");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2400",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to([".hero-text-wrapper", ".bg-grid-theme"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(".card-left-content", { x: isRtl ? 100 : -100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.0")
        .fromTo(".card-right-mockup", 
          { x: isRtl ? -100 : 100, autoAlpha: 0, scale: 0.8, rotationY: isRtl ? -20 : 20 }, 
          { x: 0, autoAlpha: 1, scale: 1, rotationY: 0, ease: "expo.out", duration: 2 }, "-=1.2"
        )
        .to({}, { duration: 0.5 })
        .set(".hero-text-wrapper", { autoAlpha: 0 })
        .set(".cta-wrapper", { autoAlpha: 1 }) 
        .to({}, { duration: 0.3 })
        .to([".card-left-content", ".card-right-mockup"], {
          scale: 0.9, y: -40, autoAlpha: 0, ease: "power3.in", duration: 0.6,
        })
        .to(".main-card", { 
          width: isMobile ? "92vw" : "90vw", 
          height: isMobile ? "92vh" : "90vh", 
          borderRadius: isMobile ? "32px" : "40px", 
          ease: "expo.inOut", 
          duration: 1 
        }, "pullback") 
        .to(".cta-wrapper", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1 }, "pullback")
        .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 0.8 });

    }, containerRef);

    return () => ctx.revert();
  }, [isRtl]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-screen h-screen overflow-hidden flex items-center justify-center bg-[#0d0d0d] text-foreground font-sans antialiased", className)}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-20" aria-hidden="true" />

      {/* BACKGROUND LAYER: Hero Texts */}
      <div className="hero-text-wrapper absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/80" />
      </div>

      <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform transform-style-3d mt-20 lg:mt-0">
        <h1 className="text-track gsap-reveal text-3d-matte text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-2 uppercase py-4 leading-[1.1] font-serif">
          {t('hero.title.main')}
        </h1>
        <h1 className="text-days gsap-reveal text-gold-matte text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter uppercase py-4 leading-[1.1] font-serif italic">
          {t('hero.title.accent')}
        </h1>
      </div>

      {/* BACKGROUND LAYER 2: CTA Buttons */}
      <div className="cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 gsap-reveal pointer-events-auto will-change-transform">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-gold-matte uppercase font-serif"
        >
          {isRtl ? 'أساس الدقة' : 'Asas Al-Deqa'}
        </motion.h2>
        <p className="text-white/40 text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-xl mx-auto font-light leading-relaxed">
          {t('about.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link to="/contact" className="btn-modern-gold flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-sm group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 uppercase text-[10px] sm:text-xs tracking-widest font-bold">
            {t('services.cta_button')}
            {isRtl ? (
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            )}
          </Link>
          <Link to="/services" className="px-8 sm:px-12 py-4 sm:py-5 border border-white/20 text-white font-bold hover:bg-white/5 transition-all rounded-sm uppercase text-[10px] sm:text-xs tracking-widest text-center">
            {t('hero.cta_services')}
          </Link>
        </div>
      </div>

      {/* FOREGROUND LAYER: The Physical Deep Card */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[94vw] lg:w-[90vw] h-[94vh] lg:h-[80vh] rounded-[24px] lg:rounded-[12px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          {/* Corrected Grid Layout to match image */}
          <div className="relative w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 z-10 py-10 lg:py-0">
            
            {/* LEFT CONTENT: Text Content */}
            <div className="card-left-content gsap-reveal flex-1 flex flex-col items-center lg:items-start text-center lg:text-start z-20 w-full">
              <div className="mb-6 lg:mb-10 flex items-center gap-6">
                <Logo showText={false} className="lg:scale-100 scale-90" />
                <div className="h-12 w-px bg-primary/20 hidden sm:block" />
                <div className="px-4 py-2 border border-primary/30 rounded-sm bg-primary/5 inline-flex items-center gap-2">
                  <Landmark size={14} className="text-primary" />
                  <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                    {t('home.stats.experience')}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                 <span className="text-primary text-[10px] lg:text-xs font-bold tracking-[0.5em] uppercase">ASAS AL-DEQA</span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 text-white leading-[1.1] tracking-tight uppercase font-serif">
                {t('hero.title.main')} <br />
                <span className="text-white/60 font-medium italic">{t('hero.title.accent')}</span>
              </h2>

              <h3 className="text-primary/90 text-lg md:text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 tracking-tight uppercase">
                {t('hero.subtitle')}
              </h3>

              <p className="text-white/40 text-xs md:text-base lg:text-lg font-normal leading-relaxed max-w-xl mb-8 lg:mb-12">
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0">
                <Link to="/contact" className="bg-primary text-black px-8 lg:px-10 py-3 lg:py-4 font-bold flex items-center justify-center gap-4 group hover:bg-primary transition-colors text-[10px] tracking-[0.2em] uppercase rounded-sm">
                  {t('services.cta_button')}
                  <ChevronRight size={16} className={cn(isRtl ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1", "transition-transform")} />
                </Link>
                <Link to="/services" className="border border-white/30 text-white px-8 lg:px-10 py-3 lg:py-4 font-bold hover:bg-white/5 transition-colors text-[10px] tracking-[0.2em] uppercase rounded-sm text-center">
                  {t('hero.cta_services')}
                </Link>
              </div>
            </div>

            {/* RIGHT CONTENT: Dashboard Mockup */}
            <div className="card-right-mockup gsap-reveal flex-1 w-full relative hidden sm:block" style={{ perspective: "1000px" }}>
              <div 
                ref={mockupRef}
                className="relative w-full aspect-[4/3] max-w-2xl mx-auto rounded-xl bg-[#141414] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden flex flex-col will-change-transform transform-style-3d"
              >
                {/* Browser Top Bar */}
                <div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-[#1a1a1a]">
                  <div className="flex gap-1.5 ltr:flex-row rtl:flex-row-reverse">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                  </div>
                  <div className="bg-black/40 px-6 py-1 rounded-full border border-white/5 flex items-center gap-2" dir="ltr">
                    <Shield size={10} className="text-white/30" />
                    <span className="text-[10px] text-white/30 font-mono">portal.asas-aldeqa.com</span>
                  </div>
                  <div className="w-10" />
                </div>

                {/* Dashboard Inner Layout */}
                <div className="flex-1 flex overflow-hidden">
                  {/* Sidebar */}
                  <div className="w-48 border-r border-white/5 p-4 flex flex-col gap-6">
                    <div className="space-y-4">
                      <div className="text-[8px] text-white/20 font-bold tracking-widest uppercase">COCKPIT</div>
                      <div className="flex items-center gap-3 p-2 bg-white/5 rounded-md border border-white/5">
                        <BarChart3 size={14} className="text-primary" />
                        <span className="text-[10px] text-white/90">Overview</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 text-white/40">
                        <Briefcase size={14} />
                        <span className="text-[10px]">Accounting</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 text-white/40">
                        <Building2 size={14} />
                        <span className="text-[10px]">Formation</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Panel */}
                  <div className="flex-1 p-6 flex flex-col gap-6 bg-[#0c0c0c]">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <ShieldCheck size={18} className="text-primary" />
                          <span className="text-[8px] text-white/40 tracking-widest uppercase">Status</span>
                        </div>
                        <div className="text-sm font-bold text-white uppercase">PRO COMPLIANCE</div>
                      </div>
                      <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 flex flex-col gap-2 opacity-50">
                        <div className="flex items-center justify-between">
                          <TrendingUp size={18} />
                          <span className="text-[8px] tracking-widest uppercase">Ongoing</span>
                        </div>
                        <div className="text-sm font-bold">Strategic Plan</div>
                      </div>
                    </div>

                    {/* Chart Mockup */}
                    <div className="flex-1 rounded-lg bg-black/40 border border-white/5 p-4 flex flex-col relative overflow-hidden">
                       <div className="flex items-center justify-between mb-8">
                         <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Growth Analysis</span>
                         <div className="px-2 py-1 rounded bg-primary/10 border border-primary/20 flex items-center gap-1.5">
                            <ShieldCheck size={10} className="text-primary" />
                            <span className="text-[8px] text-primary font-bold uppercase">VERIFIED</span>
                         </div>
                       </div>
                       
                       <div className="flex-1 flex items-end justify-between gap-2 px-2">
                          {[30, 65, 45, 90, 70].map((h, i) => (
                            <div 
                              key={i} 
                              className={cn(
                                "flex-1 rounded-t-sm transition-all duration-1000 transform origin-bottom",
                                i === 3 ? "bg-primary" : "bg-primary/20"
                              )} 
                              style={{ height: `${h}%` }} 
                            />
                          ))}
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
