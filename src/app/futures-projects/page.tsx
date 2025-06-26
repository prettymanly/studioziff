'use client';

import Image from 'next/image';
import { useRef } from 'react';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard/ProjectCard';
import Header from '@/components/Header/Header';
import Link from 'next/link';
import { Tilt } from '@/components/ui/tilt';
import DecryptedText from '@/components/ui/decrypted-text';

const project1Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '01 | CLIENT: MINISTRY OF EDUCATION, SINGAPORE',
    title: 'Imagining<br/>Education<br/>Beyond Certainty',
    image: '/images/intro-image.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '01 | CLIENT: MINISTRY OF EDUCATION, SINGAPORE',
    hmw: 'How might futures thinking help reframe what students truly need to thrive in 2030 and beyond?',
  },
  {
    variant: '3:5ContentCol',
    overline: '01 | CLIENT: MINISTRY OF EDUCATION, SINGAPORE',
    leftContent: {
      body: "The future doesn't arrive all at once. It trickles in through classroom routines, curriculum tweaks, cultural shifts. This project asked: <em>What if we interrupted that drift?</em><br/><br/>Commissioned by the Ministry of Education, this wasn't a visioning exercise. It was a strategic provocation designed to help policy teams grapple with what's changing, what's uncertain, and what roles they might play in shaping what comes next."
    },
    rightContent: {
      title: "",
      body: "Together, we mapped signals, surfaced tensions, and crafted dilemma-driven futures that challenged business-as-usual not just in systems thinking, but in systems <em>feeling</em>.<br/><br/><strong>From Trends to Tensions</strong><br/>We began with a STEEP trend scan, filtering only those that impacted teaching and learning. Through facilitated clustering and uncertainty mapping, we distilled key drivers: from the rise of AI tutors, to the loneliness epidemic, to shifts in learner autonomy and state control.<br/><br/>Rather than force alignment, we leaned into discomfort. The most resonant futures were built around <strong>dilemmas</strong> like wellbeing vs performance, autonomy vs centralisation, resilience vs compliance, giving stakeholders emotional and strategic footholds to reflect."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '01 | CLIENT: MINISTRY OF EDUCATION, SINGAPORE',
    image: '/images/intro-image.png',
    rightContent: {
      title: 'Futures as Mirrors, Not Answers',
      body: "Each scenario was designed to provoke, not prescribe. Through narrative storytelling and thematic arcs, we anchored the futures in human terms, asking:",
      list: [
        'What might learning feel like in this world?',
        'Who thrives, who\'s left behind?',
        'What will we wish we\'d built sooner?',
      ],
      additionalBody: "In our participatory workshops, ministry teams didn't just evaluate scenarios. They used them as mirrors for surfacing instincts, naming trade-offs, and identifying signals already emerging in their own schools."
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '01 | CLIENT: MINISTRY OF EDUCATION, SINGAPORE',
    leftContent: {
      title: 'My Role',
      body: '',
      list: [
        '<strong>Researcher</strong>: Led trend and uncertainty mapping, developed core drivers and clusters',
        '<strong>Facilitator</strong>: Co-designed and ran strategic foresight workshops with ministry teams',
        '<strong>Writer</strong>: Authored scenario narratives to bridge the analytical with the emotional',
      ]
    },
    rightContent: {
      title: 'Why It Mattered',
      body: "Education systems are often structured to avoid uncertainty. But here, uncertainty became the teacher.<br/><br/>By creating space for <em>non-consensus futures</em> that tugged at competing values, we helped shift the conversation. Not just from \"what's the plan?\" to \"what's the possibility?\" but from <em>control</em> to <em>agency</em>.<br/><br/>What emerged wasn't a roadmap, but a reframing: of preparedness, resilience, and the kind of learners (and educators) we need for what's next."
    }
  }
];

// Placeholder data for Project 2
const project2Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '02 | CLIENT: GLOBAL CONSUMER TECH BRAND',
    title: 'Signals into Strategy:<br/>Reimagining How a Global Brand Designs for What\'s Next',
    image: '/images/intro-image.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '02 | CLIENT: GLOBAL CONSUMER TECH BRAND',
    hmw: 'How might a company move from future curiosity to present-day momentum?',
  },
  {
    variant: '3:5ContentCol',
    overline: '02 | CLIENT: GLOBAL CONSUMER TECH BRAND',
    leftContent: {
      body: "The world doesn't wait for five-year plans. Emerging behaviors, cultural shifts, and fringe innovations are already reshaping how we live, connect, and consume, often faster than traditional strategy can keep up.<br/><br/>This project began as a signal scan. But it quickly evolved into something more: a shared foundation for future strategy, one that gave product, brand, and innovation teams a clearer sense of what mattered, what's coming, and what they could do about it."
    },
    rightContent: {
      title: "From Signal Overload to Strategic Clarity",
      body: "We started by scanning hundreds of cultural and behavioral signals from across the globe. From youth identity in Southeast Asia to shifts in loyalty and intimacy post-pandemic, the goal wasn't to catalogue everything. It was to <strong>surface the patterns with momentum</strong>.<br/><br/>Each signal was translated into a <em>future narrative</em>: short, provocative stories that made trends tangible. These weren't just trends to track, but prompts to rethink assumptions:<br/><br/><em>What happens when personal space becomes portable? What does comfort mean in a world of digital overstimulation?</em>"
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '02 | CLIENT: GLOBAL CONSUMER TECH BRAND',
    image: '/images/intro-image.png',
    rightContent: {
      title: 'Designing with the Future, Not Just for It',
      body: "We turned those narratives into <strong>opportunity platforms</strong>: thematic areas where the brand could lead with meaning, not just market share. Each one came with early-stage \"starter ideas\" designed to spark imagination across teams.<br/><br/>Think:",
      list: ['New rituals for unwinding in overstimulated homes', 'Tech products that respond to ambient moods, not just commands', 'Tools that help young users feel \"seen\" without needing to perform'],
      additionalBody: "These weren't briefs. They were <strong>catalysts</strong>."
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '02 | CLIENT: GLOBAL CONSUMER TECH BRAND',
    leftContent: {
      title: 'My Role',
      body: 'I led the design of narrative and visual artifacts that helped teams cut through noise and align on what mattered. From turning complex signals into visceral provocations to shaping tools that brought strategy into motion, my job was to <strong>make the future feel real enough to act on</strong>, not just speculate about.',
    },
    rightContent: {
      title: 'Why It Mattered',
      body: "Every company tracks trends. Few turn them into momentum.<br/><br/>This project helped a global brand move beyond horizon-scanning and begin designing with sharper intention. It showed that future-sensing isn't just about imagination. It's about giving strategy a pulse."
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

export default function FuturesProjectsPage() {
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
    <main className="flex flex-col items-center py-10 px-2.5" style={{ backgroundColor: '#547068' }}>
      <div className="w-full max-w-[902px]">
        
        <Header textColor="text-[#e5eddf]" />

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
                alt="Ziff Lau"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <p className="text-[20px] leading-[22px] tracking-[-1px]">
              <span className="font-bold">ZIFF LAU</span>
              <br />
              <span className="font-normal">DESIGN FUTURIST</span>
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
                alt="Futures Projects"
                fill
                className="object-cover"
              />
            </div>
          </Tilt>
        </section>

        {/* Description Section */}
        <section className="w-full mb-20 text-[#e5eddf] text-[25px] leading-[30px] font-sans">
          <p className="mb-6">
            Foresight isn&apos;t about prediction. It&apos;s about helping teams ask sharper questions, not just about what might shift, but what role they want to play if it does.
          </p>
          <p className="mb-6">
            Every strategy today is built on an implicit story about who we are, what matters, and how the world works. I help teams surface these assumptions, challenge them, and explore alternative narratives that might better serve emerging realities.
          </p>
          <p className="mb-6">
            We begin by looking inward, clarifying the identity, values, and tensions already in play. Whether you&apos;re exploring what&apos;s next for your industry, your brand, or your culture, this is where we start.
          </p>
          <p className="mb-6">
            Then, through scenario planning, speculative storytelling, and participatory workshops, we stretch perspective from &ldquo;what is&rdquo; to &ldquo;what if.&rdquo; To make this actionable, I often prototype &ldquo;today versions&rdquo; of future concepts, scrappy experiments that test new directions, right now.
          </p>
          <p className="mb-6">
            This work is as much about mindset as it is method, expanding what feels possible, so you can act with more clarity, conviction, and creativity.
          </p>
          <p className="mb-6">
            Below are examples of how I&apos;ve helped clients envision the future of education, provoke conversations about meat culture in Southeast Asia, and explore identity in a post-loyalty economy.
          </p>
        </section>

        {/* Projects Section */}
        <section className="flex flex-col space-y-16">
          
          {/* Project 1 - Horizontal Carousel */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 1: Imagining Education Beyond Certainty</h3>
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
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 2: Meat Culture in Southeast Asia</h3>
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
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 3: Identity in a Post-Loyalty Economy</h3>
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