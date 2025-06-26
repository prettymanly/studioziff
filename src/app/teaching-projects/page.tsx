'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard/ProjectCard';
import { Tilt } from '@/components/ui/tilt';
import DecryptedText from '@/components/ui/decrypted-text';

// Placeholder data for Project 1
const project1Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '01 | SELF-INITIATED PROJECT',
    title: 'Inner Playground:<br/>Prototyping Life Through Play',
    image: '/images/intro-image.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '01 | SELF-INITIATED PROJECT',
    hmw: 'What if exploring who you could be didn\'t require a crisis?',
  },
  {
    variant: '3:5ContentCol',
    overline: '01 | SELF-INITIATED PROJECT',
    leftContent: {
      body: "Inner Playground is a workshop series I run for grown-ups stuck in the filler episodes of their lives, quietly craving a storyline with more aliveness. It's a playground for your inner world where story, play, and improv help people reconnect with their authentic script, not the one they were handed.\n\nRooted in improvisation, storytelling, and emotional design, each session helps participants tune into their patterns under pressure and explore new ways of showing up with more clarity, presence, and relational courage. We don't just talk about self-discovery; we play it out in our bodies, imagination, and laughter."
    },
    rightContent: {
      title: "Why This Exists",
      body: "We grow up playing out roles assigned by school, society, and culture. By the time we're adults, many of us are living someone else's idea of a \"good life\" and wondering: Whose script am I following? Some call it a mid-life crisis. I call it a crisis of the soul when your inner script goes unheard for too long.\n\nAs a facilitator and storyteller, I've seen how often we trade dreams for safety, performance, or someone else's version of success. Inner Playground was born from that gap. It's a space where:\n• You don't have to perform, just be real\n• Clarity comes through play, not overthinking\n• You can rehearse the life you actually want to live"
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '01 | SELF-INITIATED PROJECT',
    image: '/images/intro-image.png',
    rightContent: {
      title: 'Who This Is For & What We Explore',
      body: "Who This Is For:",
      list: ['Curious souls at life or career crossroads', 'Creatives and professionals feeling stuck or scripted', 'People wanting to reconnect with their spark', 'Anyone craving meaning, clarity, or just a good laugh', 'Teams looking for deeper connection beyond trust exercises'],
      additionalBody: "What We Explore\nThe core workshop, Prototype Your Dream Life, is an intimate 3-hour experience that helps participants:\n• Find their inner script (the one that feels real, not just reasonable)\n• Step into imagined versions of their life and feel what awakens\n• Access surprising truths through stories and collaborative play\n• Return to themselves with more clarity, lightness, or surprise"
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '01 | SELF-INITIATED PROJECT',
    leftContent: {
      title: 'What I Bring',
      body: 'This isn\'t corporate improv or therapy. It\'s emotional play, carefully held and always a little absurd. Drawing from my background in storytelling, improv performance, and strategic design, I create experiences that feel safe but not sanitized.\n\nI weave together:\n• Structured improvisation that builds courage, not performance anxiety\n• Somatic awareness and emotional intelligence tools\n• Collaborative story-building that reveals inner patterns\n• Reflective spaces that connect insight to real-world action',
    },
    rightContent: {
      title: 'The Experience',
      body: "The vibe is more \"courage gym\" than comedy class. You'll be gently guided, not put on the spot.\n\nI run public sessions and offer custom formats for teams and organizations. Whether you're looking to prototype your dream life or help your team show up with more authenticity, Inner Playground creates space for people who want to laugh hard, live honestly, and choose their own script.\n\nYou can find out more at innerplayground.fun."
    }
  }
];

// Placeholder data for Project 2
const project2Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '02 | CLIENT: SINGAPORE INSTITUTE OF TECHNOLOGY (SIT), SINGAPORE',
    title: 'Teaching<br/>Innovation at SIT',
    image: '/images/intro-image.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '02 | CLIENT: SINGAPORE INSTITUTE OF TECHNOLOGY (SIT), SINGAPORE',
    hmw: 'How might we equip every student, not just designers, with tools to navigate complexity and design with intent?',
  },
  {
    variant: '3:5ContentCol',
    overline: '02 | CLIENT: SINGAPORE INSTITUTE OF TECHNOLOGY (SIT), SINGAPORE',
    leftContent: {
      body: "Institution: Singapore Institute of Technology (SIT)\nRole: Adjunct Faculty, Innovation & Design Thinking\n\nAt SIT, innovation isn't reserved for design students. I teach a university-wide module that introduces design as a mindset, empowering students from diverse disciplines to think critically, act empathetically, and experiment with confidence."
    },
    rightContent: {
      title: "Course Approach",
      body: "Grounded in Design Thinking, the course helps students tackle real-world problems by understanding human needs, reframing challenges, and iterating solutions.\n\nBut beyond just teaching the steps, we help students internalise the principles by running Design Your Life exercises adapted from Stanford's d.school, using playful tools like LEGO for stimulus, and introducing future-oriented thinking to expand their horizons."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '02 | CLIENT: SINGAPORE INSTITUTE OF TECHNOLOGY (SIT), SINGAPORE',
    image: '/images/intro-image.png',
    rightContent: {
      title: 'My Teaching Philosophy',
      body: "While I didn't design the curriculum, it aligns closely with my own approach to design practice:",
      list: ['Start from people and context', 'Make ambiguity workable', 'Use tools to provoke clarity, not conformity'],
      additionalBody: "As an adjunct faculty, I bring field experience into the classroom, from service design and research to storytelling and strategic foresight, to show students how design lives in the real world, not just the studio.\n\nWhy It Matters\nMost students won't become designers. But all of them will face complexity, ambiguity, and change. This course gives them a vocabulary and a practice to meet that with creativity, care, and courage."
    }
  }
];

// Placeholder data for Project 3
const project3Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '03 | CLIENT: BLANGAH RISE PRIMARY SCHOOL, SINGAPORE',
    title: 'Teaching Design Thinking<br/>to Primary Students',
    image: '/images/intro-image.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '03 | CLIENT: BLANGAH RISE PRIMARY SCHOOL, SINGAPORE',
    hmw: 'How might we make design thinking accessible and engaging for young learners while building teacher capacity?',
  },
  {
    variant: '3:5ContentCol',
    overline: '03 | CLIENT: BLANGAH RISE PRIMARY SCHOOL, SINGAPORE',
    leftContent: {
      body: "Institution: Telok Blangah Rise Primary School\nRole: External Facilitator & Teacher Trainer\nContext: Gifted Education Programme\n\nWhen Telok Blangah Rise Primary wanted to introduce Design Thinking to their select students in the gifted programme, they needed someone who could both engage young minds and build internal capacity. While I don't normally teach children, I saw this as an opportunity to create something sustainable: a programme that teachers could own, iterate, and continue long after I left."
    },
    rightContent: {
      title: "The Challenge",
      body: "Primary school students needed Design Thinking concepts translated into their world. Traditional DT workshops designed for adults wouldn't work. The school also wanted their teachers to become confident facilitators themselves, not dependent on external trainers."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '03 | CLIENT: BLANGAH RISE PRIMARY SCHOOL, SINGAPORE',
    image: '/images/intro-image.png',
    rightContent: {
      title: 'My Approach',
      body: "I reframed the entire experience as a mission-based adventure, breaking down the design process into digestible \"mini-missions\" that felt like a game rather than a lesson. Each session built toward a larger challenge, keeping students engaged while systematically teaching them to observe, empathize, ideate, and prototype.\n\nThe genius was in the co-design process. Teachers learned Design Thinking by preparing each session with me, experiencing the methodology firsthand as we planned activities, anticipated student responses, and designed materials together. They weren't just observing; they were co-creating the curriculum.",
      list: []
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '03 | CLIENT: BLANGAH RISE PRIMARY SCHOOL, SINGAPORE',
    leftContent: {
      title: 'What Made It Work',
      body: '• Gamification that mattered: Mini-missions weren\'t just fun activities but genuine design challenges scaled for young minds\n• Teacher-as-learner: Educators experienced DT principles while designing the programme, creating deeper understanding than any training manual\n• COVID-friendly innovation: Happening during the pandemic, we found fresh ways to facilitate design thinking that worked within health restrictions\n• Sustainable handoff: By the end, teachers owned the process and could iterate independently',
    },
    rightContent: {
      title: 'Why It Matters',
      body: "This wasn't just about teaching kids to think like designers. It was about building a school's capacity to nurture creative problem-solving in their students. The teachers didn't just learn to run sessions; they learned to adapt and evolve the approach for future cohorts.\n\nThe timing during COVID also pushed us to innovate beyond traditional DT facilitation, creating methods that were both pandemic-safe and genuinely more engaging than what came before."
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
                alt="Teaching Projects"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-[20px] leading-[22px] tracking-[-1px]">
              <span className="font-bold">TEACHING, FACILITATION</span>
              <br />
              <span className="font-normal">+ CAPABILITY BUILDING</span>
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
                alt="Teaching Projects"
                fill
                className="object-cover"
              />
            </div>
          </Tilt>
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
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 2: Primary School Design Thinking</h3>
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
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 3: Placeholder</h3>
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