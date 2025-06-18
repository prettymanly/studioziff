'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function ResearchProjectsPage() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRef3 = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -910, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 910, behavior: 'smooth' });
    }
  };

  return (
    <main className="flex flex-col items-center py-10 px-2.5" style={{ backgroundColor: '#5F8470' }}>
      <div className="w-full max-w-[902px]">
        
        {/* Header */}
        <header className="w-full mb-10 flex flex-row justify-between items-start font-mono text-base py-4">
          <div>
            <p className="text-[#e5eddf] font-bold">FIND ME</p>
            <p><a href="#" className="text-[#e5eddf] hover:opacity-80">BLOG</a></p>
            <p><a href="#" className="text-[#e5eddf] hover:opacity-80">LINKEDIN</a></p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[#e5eddf] font-bold">SAY HELLO</p>
            <p><a href="mailto:ZIFF.LAU@GMAIL.COM" className="text-[#e5eddf] hover:opacity-80">ZIFF.LAU@GMAIL.COM</a></p>
            <p className="text-[#e5eddf]">+9322 7317</p>
          </div>
        </header>

        {/* Hero Section */}
        <section className="w-full h-auto md:h-[436px] mb-20 flex flex-col md:flex-row items-center gap-[38px]">
          {/* Left Box - Text */}
          <div className="w-full md:w-1/2 h-[436px] bg-white rounded-[15px] p-[49px] flex flex-col justify-between text-[#404b51]">
            <p className="font-mono text-base tracking-[-0.8px]">_01 | RESEARCH PROJECTS</p>
            <p className="text-[20px] leading-[22px] tracking-[-1px]">
              <span className="font-bold">CUSTOMER RESEARCH</span>
              <br />
              <span className="font-normal">+ BEHAVIORAL INSIGHTS</span>
            </p>
          </div>

          {/* Right Box - Image */}
          <div className="relative w-full md:w-1/2 h-[436px] rounded-[15px] overflow-hidden">
            <Image
              src="/images/intro-image.png"
              alt="Research Projects"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* Description Section */}
        <section className="w-full mb-20 text-[#e5eddf] text-[25px] leading-[30px] font-sans">
          <p className="mb-6">
            You&apos;re here because something needs fixing or figuring out: a product, a service, a process, or maybe just a hunch.
          </p>
          <p className="mb-6">
            This is where I help teams slow down, look deeper, and build solutions that actually work in practice. I work with startups and orgs to uncover how people actually think, decide, and behave and turn that into clear, actionable design direction.
          </p>
          <p className="mb-6">
            Below are examples of past work: from mapping invisible household labor, to decoding why insurance customers drop off, to helping subsidiaries act like one team.
          </p>
        </section>

        {/* Projects Section */}
        <section className="flex flex-col space-y-16">
          
          {/* Project 1 - Horizontal Carousel */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 1: Mapping Invisible Household Labor</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => scrollLeft(scrollRef1)}
                  className="text-[#e5eddf] hover:opacity-80 text-2xl"
                >
                  ←
                </button>
                <button 
                  onClick={() => scrollRight(scrollRef1)}
                  className="text-[#e5eddf] hover:opacity-80 text-2xl"
                >
                  →
                </button>
              </div>
            </div>
            <div 
              ref={scrollRef1}
              className="overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-2.5"
              style={{ width: 'calc(100vw)', marginLeft: 'calc(-50vw + 50%)', paddingLeft: 'calc(50vw - 50%)' }}
            >
              <div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
                {[1, 2, 3, 4, 5].map((cardNum) => (
                  <div key={cardNum} className="w-[902px] h-[552px] bg-white rounded-[15px] p-[56px] flex-shrink-0 snap-start snap-always flex items-center justify-center">
                    <div className="text-center text-[#404b51]">
                      <h4 className="text-2xl font-bold mb-4">Project 1 - Card {cardNum}</h4>
                      <p>Card {cardNum} content will be inserted here</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project 2 - Horizontal Carousel */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 2: Insurance Customer Drop-off Analysis</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => scrollLeft(scrollRef2)}
                  className="text-[#e5eddf] hover:opacity-80 text-2xl"
                >
                  ←
                </button>
                <button 
                  onClick={() => scrollRight(scrollRef2)}
                  className="text-[#e5eddf] hover:opacity-80 text-2xl"
                >
                  →
                </button>
              </div>
            </div>
            <div 
              ref={scrollRef2}
              className="overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-2.5"
              style={{ width: 'calc(100vw)', marginLeft: 'calc(-50vw + 50%)', paddingLeft: 'calc(50vw - 50%)' }}
            >
              <div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
                {[1, 2, 3, 4, 5].map((cardNum) => (
                  <div key={cardNum} className="w-[902px] h-[552px] bg-white rounded-[15px] p-[56px] flex-shrink-0 snap-start snap-always flex items-center justify-center">
                    <div className="text-center text-[#404b51]">
                      <h4 className="text-2xl font-bold mb-4">Project 2 - Card {cardNum}</h4>
                      <p>Card {cardNum} content will be inserted here</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project 3 - Horizontal Carousel */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 3: Helping Subsidiaries Act Like One Team</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => scrollLeft(scrollRef3)}
                  className="text-[#e5eddf] hover:opacity-80 text-2xl"
                >
                  ←
                </button>
                <button 
                  onClick={() => scrollRight(scrollRef3)}
                  className="text-[#e5eddf] hover:opacity-80 text-2xl"
                >
                  →
                </button>
              </div>
            </div>
            <div 
              ref={scrollRef3}
              className="overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-2.5"
              style={{ width: 'calc(100vw)', marginLeft: 'calc(-50vw + 50%)', paddingLeft: 'calc(50vw - 50%)' }}
            >
              <div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
                {[1, 2, 3, 4, 5].map((cardNum) => (
                  <div key={cardNum} className="w-[902px] h-[552px] bg-white rounded-[15px] p-[56px] flex-shrink-0 snap-start snap-always flex items-center justify-center">
                    <div className="text-center text-[#404b51]">
                      <h4 className="text-2xl font-bold mb-4">Project 3 - Card {cardNum}</h4>
                      <p>Card {cardNum} content will be inserted here</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}