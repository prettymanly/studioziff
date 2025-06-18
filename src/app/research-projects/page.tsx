'use client';

import Image from 'next/image';
import { useRef } from 'react';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard/ProjectCard';

const project1Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '01 | CLIENT: LEADING INSURER, APAC',
    title: 'Household OS: Reimagining Family Coordination in the Philippines',
    image: '/images/intro-image.png', // Using existing image as placeholder
    swipeToRead: true,
  },
  {
    variant: '1:1ContentCol',
    overline: '01 | CLIENT: LEADING INSURER, APAC',
    leftContent: {
      title: 'From Insight to Org-Wide Activation',
      body: "In a co-creation workshop, I facilitated teams across the org to use the mindsets hands-on, not as reference material, but as thinking tools.",
      list: [
        "Marketing saw how to better communicate trust during moments of instability.",
        "Product identified where complexity bred drop-off.",
        "Ops rethought service flows around moments of vulnerability."
      ]
    },
    rightContent: {
      title: 'Why It Matters',
      body: "Most insurers track customers as data points. We helped this one see them as living systems of changing needs and gave teams the tools to work with those shifts in real time. This project wasn't just about decoding behavior. It was about embedding a new way of noticing, thinking, and designing across the business."
    }
  },
  {
    variant: '3:5ContentCol',
    overline: '01 | CLIENT: LEADING INSURER, APAC',
    leftContent: {
      body: 'As policy lapses surged, the question wasn\'t just "why are people walking away?" It was, <strong><em>why weren\'t we seeing it coming?</em></strong><br/><br/>This insurer had data, but little visibility into the shifting emotional and practical realities behind those numbers. What they lacked was a shared lens across departments: a way to notice, interpret, and respond to early signals of disengagement before it was too late.'
    },
    rightContent: {
        title: 'From Personas to Fluid Mindsets',
        body: `We interviewed customers and frontline staff across APAC, surfacing 12 distinct Insurance Mindsets, from skeptical first-timers to overwhelmed caregivers managing multiple policies.<br/><br/>But these weren't personas. They were behavioral states: dynamic, overlapping, and context-driven. <br/><br/>They helped teams ask better questions like: <br/><em>What happens when someone is 'Envisioning' their future, while also 'Sheltering' loved ones through crisis?</em><br/><br/>Each mindset acted as a strategic signal, helping teams anticipate when, how, and why a customer's needs might shift, and what that could mean for service, messaging, or support.`
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '01 | CLIENT: LEADING INSURER, APAC',
    image: '/images/intro-image.png', // Using existing image as placeholder
    rightContent: {
      title: 'A Tool Teams Could Think With',
      body: "We transformed these insights into tactile mindset cards, not just to summarize research, but to trigger alignment and action. I led the design and development of these cards, not just visually, but functionally:",
      list: [
        "Could a marketer hold one and reframe their brief?",
        "Could a product owner spot a blind spot they hadn't seen before?",
        "Could an operations lead see where empathy could be built into the backend?"
      ]
    }
  },
  {
    variant: 'HMW',
    overline: '01 | CLIENT: LEADING INSURER, APAC',
    hmw: 'How might an everyday utility app redistribute invisible labour across the household?',
  }
];


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
              className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ display: 'flex', gap: '2rem', padding: '1rem 0' }}
            >
              {project1Data.map((card, index) => (
                <div key={index} className="flex-shrink-0 snap-center">
                  <ProjectCard {...card} />
                </div>
              ))}
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
              className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ display: 'flex', gap: '2rem', padding: '1rem 0' }}
            >
              {project1Data.map((card, index) => (
                <div key={index} className="flex-shrink-0 snap-center">
                  <ProjectCard {...card} />
                </div>
              ))}
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
              className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ display: 'flex', gap: '2rem', padding: '1rem 0' }}
            >
              {project1Data.map((card, index) => (
                <div key={index} className="flex-shrink-0 snap-center">
                  <ProjectCard {...card} />
                </div>
              ))}
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}