'use client';

import Image from 'next/image';
import { useRef } from 'react';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard/ProjectCard';

const project1Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '01 | PROJECT 1 PLACEHOLDER',
    title: 'Research Project 1<br/>Title Here',
    image: '/images/intro-image.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '01 | PROJECT 1 PLACEHOLDER',
    hmw: 'How might we solve this research challenge for project 1?',
  },
  {
    variant: '3:5ContentCol',
    overline: '01 | PROJECT 1 PLACEHOLDER',
    leftContent: {
      body: "Research Project 1 content will go here..."
    },
    rightContent: {
      title: "Research Project 1 Details",
      body: "More details about research project 1..."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '01 | PROJECT 1 PLACEHOLDER',
    image: '/images/intro-image.png',
    rightContent: {
      title: 'Research Project 1 Section',
      body: "Research project 1 specific content here.",
      list: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '01 | PROJECT 1 PLACEHOLDER',
    leftContent: {
      title: 'Left Column',
      body: 'Research project 1 left content...',
    },
    rightContent: {
      title: 'Right Column',
      body: "Research project 1 right content..."
    }
  }
];

// Placeholder data for Project 2
const project2Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    title: 'Project 2<br/>Title Here',
    image: '/images/intro-image.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    hmw: 'How might we solve this challenge for project 2?',
  },
  {
    variant: '3:5ContentCol',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    leftContent: {
      body: "Project 2 content will go here..."
    },
    rightContent: {
      title: "Project 2 Details",
      body: "More details about project 2..."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    image: '/images/intro-image.png',
    rightContent: {
      title: 'Project 2 Section',
      body: "Project 2 specific content here.",
      list: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    leftContent: {
      title: 'Left Column',
      body: 'Project 2 left content...',
    },
    rightContent: {
      title: 'Right Column',
      body: "Project 2 right content..."
    }
  }
];

// Placeholder data for Project 3
const project3Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    title: 'Project 3<br/>Title Here',
    image: '/images/intro-image.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    hmw: 'How might we solve this challenge for project 3?',
  },
  {
    variant: '3:5ContentCol',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    leftContent: {
      body: "Project 3 content will go here..."
    },
    rightContent: {
      title: "Project 3 Details",
      body: "More details about project 3..."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    image: '/images/intro-image.png',
    rightContent: {
      title: 'Project 3 Section',
      body: "Project 3 specific content here.",
      list: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    leftContent: {
      title: 'Left Column',
      body: 'Project 3 left content...',
    },
    rightContent: {
      title: 'Right Column',
      body: "Project 3 right content..."
    }
  }
];

export default function ResearchProjectsPage() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRef3 = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile ? window.innerWidth : 910;
      ref.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile ? window.innerWidth : 910;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
        <section className="w-full mb-20 flex flex-col md:flex-row items-stretch md:h-[436px] gap-[38px]">
          {/* Left Box - Text and Mobile Image */}
          <div className="w-full md:w-1/2 bg-white rounded-[15px] p-[49px] flex flex-col justify-between text-[#404b51]">
            <p className="font-mono text-base tracking-[-0.8px]">_01 | RESEARCH PROJECTS</p>
            
            <div className="relative w-full h-[300px] my-6 rounded-[15px] overflow-hidden md:hidden">
              <Image
                src="/images/intro-image.png"
                alt="Research Projects"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-[20px] leading-[22px] tracking-[-1px]">
              <span className="font-bold">CUSTOMER RESEARCH</span>
              <br />
              <span className="font-normal">+ BEHAVIORAL INSIGHTS</span>
            </p>
          </div>

          {/* Right Box - Image for Desktop */}
          <div className="relative w-full md:w-1/2 h-[436px] rounded-[15px] overflow-hidden hidden md:block">
            <Image
              src="/images/intro-image.png"
              alt="Research Projects"
              fill
              className="object-cover"
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
              className="grid grid-flow-col auto-cols-[100%] md:auto-cols-[902px] gap-5 overflow-x-auto snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', 'msOverflowStyle': 'none' } as React.CSSProperties}
            >
              {project1Data.map((project, index) => (
                <ProjectCard key={index} {...project} className="snap-start" />
              ))}
            </div>
          </div>

          {/* Project 2 - Horizontal Carousel */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 2: Decoding Insurance Drop-offs</h3>
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
              className="grid grid-flow-col auto-cols-[100%] md:auto-cols-[902px] gap-5 overflow-x-auto snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', 'msOverflowStyle': 'none' } as React.CSSProperties}
            >
              {project2Data.map((project, index) => (
                <ProjectCard key={index} {...project} className="snap-start" />
              ))}
            </div>
          </div>

          {/* Project 3 - Horizontal Carousel */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 3: Unifying Subsidiary Teams</h3>
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
              className="grid grid-flow-col auto-cols-[100%] md:auto-cols-[902px] gap-5 overflow-x-auto snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', 'msOverflowStyle': 'none' } as React.CSSProperties}
            >
              {project3Data.map((project, index) => (
                <ProjectCard key={index} {...project} className="snap-start" />
              ))}
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}