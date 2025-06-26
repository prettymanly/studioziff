'use client';

import Image from 'next/image';
import { useRef } from 'react';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard/ProjectCard';
import Link from 'next/link';
import { Tilt } from '@/components/ui/tilt';
import DecryptedText from '@/components/ui/decrypted-text';

// Placeholder data for Project 1
const project1Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '01 | CLIENT: SELF-INITIATED PROJECT',
    title: 'Tumbo: Finding Classes<br/>Your Kid Won\'t Hate',
    image: '/images/intro-image.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '01 | CLIENT: SELF-INITIATED PROJECT',
    hmw: 'How might we design enrichment discovery around children\'s personalities, not just parental anxieties?',
  },
  {
    variant: '3:5ContentCol',
    overline: '01 | CLIENT: SELF-INITIATED PROJECT',
    leftContent: {
      body: "Tumbo is a self-initiated project, born not from a client brief, but from lived tension. As a parent and a designer who's worked on the future of education, I kept noticing the same pattern: we keep redesigning schools, but rarely stop to examine the mindsets of the people choosing what happens after school: parents.\n\nPolicy might remove exams, but enrichment centres rush in to fill the gap with more tests. There's a movement toward child-centred education, but it often stops at the brochure.\n\nTumbo is my attempt to shift that."
    },
    rightContent: {
      title: "From Transaction to Trust",
      body: "Most class platforms treat parents as buyers. Tumbo treats them as meaning-makers, navigating messy hopes, constraints, and shifting intuitions about what's right for their kids.\n\nWe built a recommendation system around four deep lenses:\n• Content: What's being taught\n• Child: Learning styles, sensory preferences, social needs\n• Experience: Class vibe, pacing, group dynamics\n• Philosophy: Pedagogies, language, worldviews\n\nTogether, these tags fuel a discovery experience that starts with context, not category.\n\nIt's a platform that helps parents find classes their children will actually thrive in, based not just on schedule or subject, but on who they are and how they learn."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '01 | CLIENT: SELF-INITIATED PROJECT',
    image: '/images/intro-image.png',
    rightContent: {
      title: 'Prototype to Platform',
      body: "Tumbo is built using lean, AI-augmented tools:",
      list: ['GPT for enrichment parsing, class summaries, and parent reflection', 'Airtable for structured content', 'Make.com for backend automation', 'Bubble for rapid UI', 'Future plans include syncing qualitative reviews and growth stories'],
      additionalBody: "This project also lets me apply my own recommendations as a consultant, putting empathy, insight, and clarity to the test in real-world conditions."
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '01 | CLIENT: SELF-INITIATED PROJECT',
    leftContent: {
      title: 'A Trust Layer Disguised as a Directory',
      body: 'What looks like a class listing is really a mirror, one that helps parents reflect on what they value, what their child needs, and what "growth" actually means.\n\n• Scout Reports surface vibe-rich insights on classes\n• Skill Trees track progress across emotional, creative, and social domains\n• Parenting Mindsets adapt the experience based on how each family approaches learning\n\nIt\'s not about finding "the best" class. It\'s about finding what fits now.',
    },
    rightContent: {
      title: 'Why It Matters',
      body: "Tumbo is part tech product, part cultural nudge. It honors a quiet but growing shift among parents: a move toward care, toward presence, toward raising children with less fear and more fit.\n\nAnd as a founder, it's also an experiment in walking the talk, applying futures thinking, behavioral design, and system-building not just for clients, but for myself."
    }
  }
];

// Placeholder data for Project 2
const project2Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    title: 'AI Project 2<br/>Title Here',
    image: '/images/intro-image.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    hmw: 'How might we solve this AI challenge for project 2?',
  },
  {
    variant: '3:5ContentCol',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    leftContent: {
      body: "AI Project 2 content will go here..."
    },
    rightContent: {
      title: "AI Project 2 Details",
      body: "More details about AI project 2..."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    image: '/images/intro-image.png',
    rightContent: {
      title: 'AI Project 2 Section',
      body: "AI project 2 specific content here.",
      list: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '02 | PROJECT 2 PLACEHOLDER',
    leftContent: {
      title: 'Left Column',
      body: 'AI project 2 left content...',
    },
    rightContent: {
      title: 'Right Column',
      body: "AI project 2 right content..."
    }
  }
];

// Placeholder data for Project 3
const project3Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    title: 'AI Project 3<br/>Title Here',
    image: '/images/intro-image.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    hmw: 'How might we solve this AI challenge for project 3?',
  },
  {
    variant: '3:5ContentCol',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    leftContent: {
      body: "AI Project 3 content will go here..."
    },
    rightContent: {
      title: "AI Project 3 Details",
      body: "More details about AI project 3..."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    image: '/images/intro-image.png',
    rightContent: {
      title: 'AI Project 3 Section',
      body: "AI project 3 specific content here.",
      list: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '03 | PROJECT 3 PLACEHOLDER',
    leftContent: {
      title: 'Left Column',
      body: 'AI project 3 left content...',
    },
    rightContent: {
      title: 'Right Column',
      body: "AI project 3 right content..."
    }
  }
];

export default function AIProjectsPage() {
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
    <main className="flex flex-col items-center py-10 px-2.5" style={{ backgroundColor: '#37494c' }}>
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
            <Link href="/" className="font-mono text-base tracking-[-0.8px] hover:opacity-80 transition-opacity">
              <DecryptedText 
                text="← HOME" 
                animateOn="view"
                speed={80}
                maxIterations={15}
              />
            </Link>
            
            <div className="relative w-full h-[300px] my-6 rounded-[15px] overflow-hidden md:hidden">
              <Image
                src="/images/intro-image.png"
                alt="AI Projects"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-[20px] leading-[22px] tracking-[-1px]">
              <span className="font-bold">GENERATIVE AI</span>
              <br />
              <span className="font-normal">+ AUTOMATION</span>
            </p>
          </div>

          {/* Right Box - Image for Desktop */}
          <Tilt 
            rotationFactor={8} 
            isRevese 
            className="relative hidden md:block w-full md:w-1/2 h-[436px]"
            springOptions={{
              stiffness: 26.7,
              damping: 4.1,
              mass: 0.2,
            }}
          >
            <div className="rounded-[15px] overflow-hidden h-full">
              <Image
                src="/images/intro-image.png"
                alt="AI Projects"
                fill
                className="object-cover"
              />
            </div>
          </Tilt>
        </section>

        {/* Description Section */}
        <section className="w-full mb-20 text-[#e5eddf] text-[25px] leading-[30px] font-sans">
          <p className="mb-6">
            Something needs to run smoother, scale better, or delight more, and you think AI might help. I help teams cut through the AI hype to identify where automation and generative tools can create real value. This isn&apos;t about chasing trends or pretending to be an expert in tools that barely existed two years ago.
          </p>
          <p className="mb-6">
            I&apos;ve been experimenting with AI workflows, building prototypes, and figuring out what actually works versus what just sounds impressive. The approach is always experimental, but the planning is deliberate. I help you design practical tests, build scrappy prototypes, and learn fast without burning resources on AI solutions that don&apos;t solve real problems.
          </p>
          <p className="mb-6">
            Below are examples of what I&apos;ve built and learned: from creating an AI-powered chatbot to support adult learners, to using automation for insight tagging, to crafting MVPs with tools like ChatGPT, Make, Airtable, and Bubble.
          </p>
          <p className="mb-6">
            Want to explore what&apos;s possible for your situation? Let&apos;s experiment together.
          </p>
        </section>

        {/* Projects Section */}
        <section className="flex flex-col space-y-16">
          
          {/* Project 1 - Horizontal Carousel */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 1: AI-Powered Chatbot for Adult Learners</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => scrollLeft(scrollRef1)}
                  className="text-[#e5eddf] hover:opacity-100 hover:scale-125 transition text-2xl"
                >
                  ←
                </button>
                <button 
                  onClick={() => scrollRight(scrollRef1)}
                  className="text-[#e5eddf] hover:opacity-100 hover:scale-125 transition text-2xl"
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
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 2: Automation for Insight Tagging</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => scrollLeft(scrollRef2)}
                  className="text-[#e5eddf] hover:opacity-100 hover:scale-125 transition text-2xl"
                >
                  ←
                </button>
                <button 
                  onClick={() => scrollRight(scrollRef2)}
                  className="text-[#e5eddf] hover:opacity-100 hover:scale-125 transition text-2xl"
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
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 3: MVP with ChatGPT, Make, Airtable & Bubble</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => scrollLeft(scrollRef3)}
                  className="text-[#e5eddf] hover:opacity-100 hover:scale-125 transition text-2xl"
                >
                  ←
                </button>
                <button 
                  onClick={() => scrollRight(scrollRef3)}
                  className="text-[#e5eddf] hover:opacity-100 hover:scale-125 transition text-2xl"
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