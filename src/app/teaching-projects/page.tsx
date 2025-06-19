'use client';

import Image from 'next/image';
import { useRef } from 'react';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard/ProjectCard';

// Placeholder data for Project 1
const project1Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '01 | PROJECT 1 PLACEHOLDER',
    title: 'Teaching Project 1<br/>Title Here',
    image: '/images/intro-image.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '01 | PROJECT 1 PLACEHOLDER',
    hmw: 'How might we solve this teaching challenge for project 1?',
  },
  {
    variant: '3:5ContentCol',
    overline: '01 | PROJECT 1 PLACEHOLDER',
    leftContent: {
      body: "Teaching Project 1 content will go here..."
    },
    rightContent: {
      title: "Teaching Project 1 Details",
      body: "More details about teaching project 1..."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '01 | PROJECT 1 PLACEHOLDER',
    image: '/images/intro-image.png',
    rightContent: {
      title: 'Teaching Project 1 Section',
      body: "Teaching project 1 specific content here.",
      list: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '01 | PROJECT 1 PLACEHOLDER',
    leftContent: {
      title: 'Left Column',
      body: 'Teaching project 1 left content...',
    },
    rightContent: {
      title: 'Right Column',
      body: "Teaching project 1 right content..."
    }
  }
];

// Placeholder data for Project 2
const project2Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    title: 'Teaching Project 2<br/>Title Here',
    image: '/images/intro-image.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    hmw: 'How might we solve this teaching challenge for project 2?',
  },
  {
    variant: '3:5ContentCol',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    leftContent: {
      body: "Teaching Project 2 content will go here..."
    },
    rightContent: {
      title: "Teaching Project 2 Details",
      body: "More details about teaching project 2..."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    image: '/images/intro-image.png',
    rightContent: {
      title: 'Teaching Project 2 Section',
      body: "Teaching project 2 specific content here.",
      list: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    leftContent: {
      title: 'Left Column',
      body: 'Teaching project 2 left content...',
    },
    rightContent: {
      title: 'Right Column',
      body: "Teaching project 2 right content..."
    }
  }
];

// Placeholder data for Project 3
const project3Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    title: 'Teaching Project 3<br/>Title Here',
    image: '/images/intro-image.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    hmw: 'How might we solve this teaching challenge for project 3?',
  },
  {
    variant: '3:5ContentCol',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    leftContent: {
      body: "Teaching Project 3 content will go here..."
    },
    rightContent: {
      title: "Teaching Project 3 Details",
      body: "More details about teaching project 3..."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    image: '/images/intro-image.png',
    rightContent: {
      title: 'Teaching Project 3 Section',
      body: "Teaching project 3 specific content here.",
      list: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    leftContent: {
      title: 'Left Column',
      body: 'Teaching project 3 left content...',
    },
    rightContent: {
      title: 'Right Column',
      body: "Teaching project 3 right content..."
    }
  }
];

export default function TeachingProjectsPage() {
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
    <main className="flex flex-col items-center py-10 px-2.5" style={{ backgroundColor: '#2f3a41' }}>
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
            <p className="font-mono text-base tracking-[-0.8px]">_04 | TEACHING PROJECTS</p>
            <p className="text-[20px] leading-[22px] tracking-[-1px]">
              <span className="font-bold">TEACHING, FACILITATION</span>
              <br />
              <span className="font-normal">+ CAPABILITY BUILDING</span>
            </p>
          </div>

          {/* Right Box - Image */}
          <div className="relative w-full md:w-1/2 h-[436px] rounded-[15px] overflow-hidden">
            <Image
              src="/images/intro-image.png"
              alt="Teaching Projects"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* Description Section */}
        <section className="w-full mb-20 text-[#e5eddf] text-[25px] leading-[30px] font-sans">
          <p className="mb-6">
            It&apos;s not about lectures. It&apos;s about unlocking curiosity, courage, and the will to try.
          </p>
          <p className="mb-6">
            I design learning experiences that help individuals and teams build creative muscles, question assumptions, and shift how they think, not just what they know. Whether I&apos;m teaching innovation at a university, helping corporate teams prototype their culture, or running design thinking for kids, I make learning feel human, surprising, and useful.
          </p>
          <p className="mb-6">
            Below, you&apos;ll find examples of programs I&apos;ve run for students, public officers, and intrapreneurs, with a bias toward doing, not just talking.
          </p>
        </section>

        {/* Projects Section */}
        <section className="flex flex-col space-y-16">
          
          {/* Project 1 - Horizontal Carousel */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 1: University Innovation Teaching</h3>
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
              className="overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-8 md:gap-8 px-2.5 md:px-0 py-4"
            >
              {project1Data.map((card, index) => (
                <div key={index} className="flex-shrink-0 snap-center w-[calc(100vw-20px)] md:w-auto">
                  <ProjectCard {...card} />
                </div>
              ))}
            </div>
          </div>

          {/* Project 2 - Horizontal Carousel */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 2: Corporate Culture Prototyping</h3>
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
              className="overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-8 md:gap-8 px-2.5 md:px-0 py-4"
            >
              {project2Data.map((card, index) => (
                <div key={index} className="flex-shrink-0 snap-center w-[calc(100vw-20px)] md:w-auto">
                  <ProjectCard {...card} />
                </div>
              ))}
            </div>
          </div>

          {/* Project 3 - Horizontal Carousel */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 3: Design Thinking for Kids</h3>
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
              className="overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-8 md:gap-8 px-2.5 md:px-0 py-4"
            >
              {project3Data.map((card, index) => (
                <div key={index} className="flex-shrink-0 snap-center w-[calc(100vw-20px)] md:w-auto">
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