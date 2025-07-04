'use client';

import Image from 'next/image';
import { useRef } from 'react';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard/ProjectCard';
import Header from '@/components/Header/Header';
import { Tilt } from '@/components/ui/tilt';
import { AnimatedHomeLink } from '@/components/ui/animated-home-link';

const project1Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '01 | CLIENT: NATIONAL CONGLOMERATE, PHILIPPINES',
    title: 'Household OS:<br/><span style="font-weight: 300;">Reimagining Family Coordination in the Philippines</span>',
    image: '/images/Projects/Research/Household OS_Cover.png',
    swipeToRead: true,
  },
  {
    variant: '3:5ContentCol',
    overline: '01 | CLIENT: NATIONAL CONGLOMERATE, PHILIPPINES',
    leftContent: {
      body: "In many Southeast Asian households, especially in the Philippines, the home is not just a space, but a system: a network of care, financial interdependence, and decision-making spread across parents, siblings, overseas workers, and elders.<br><br>Amid this complexity, families already manage using mental checklists, handwritten logs, Viber threads, and spreadsheets.<br><br>So when a major conglomerate approached us to explore a \"super app,\" we asked a different question: What if we didn't just digitize transactions but supported the actual work of running a household?"
    },
    rightContent: {
      title: "From Fragmented Tools to Relational Infrastructure",
      body: "Through interviews, co-creation sessions, and ethnographic research, we surfaced the quiet complexity of everyday life: multiple household members taking on roles like contributor, payer, planner, or reminder, often across generations and time zones.<br><br>We reframed the challenge:"
    }
  },
  {
    variant: 'HMW',
    overline: '01 | CLIENT: NATIONAL CONGLOMERATE, PHILIPPINES',
    hmw: 'How might we design for family coordination, not just individual utility?',
    image: '/images/Projects/Research/Household OS_HMW.png',
  },
  {
    variant: '3:5ImageContent',
    overline: '01 | CLIENT: NATIONAL CONGLOMERATE, PHILIPPINES',
    image: '/images/Projects/Research/Household OS_Column.png',
    rightContent: {
      title: 'Core Concepts and Feature Experiments',
      body: "The result was the early blueprint of a <strong>Household OS</strong>, not a dashboard of bills, but a support layer that acknowledged the labour, trust, and emotion embedded in shared living.\n\nWe co-developed a suite of prototypes aimed at making invisible work visible and shared:",
      list: ['<strong>Household Wallet:</strong> Shared visibility into bills, contributions, and timelines', '<strong>Savings Goals & Upgrade Bundles:</strong> Turning aspirations into concrete plans', '<strong>Spending Guard:</strong> Nudges and alternatives to stay within budget', '<strong>Smart Automation & API integrations:</strong> Reducing manual routines', '<strong>Microloans:</strong> Offering relief when the unexpected strikes', '<strong>Loyalty Points:</strong> Pooled and purposeful, not just individual rewards', '<strong>Household Insights:</strong> Dashboards surfacing friction points and rhythm patterns']
    }
  },
  {
    variant: '3:5ContentCol',
    overline: '01 | CLIENT: NATIONAL CONGLOMERATE, PHILIPPINES',
    leftContent: {
      title: "Designing for Diverse Household Realities",
      body: "We uncovered a range of <strong>household archetypes</strong>, from centralized matriarch-led systems to distributed networks coordinated by siblings or intermediaries. We designed logic for real-life dynamics: overseas earners sending money home, elders passing on responsibilities, or blended families navigating new norms.<br><br>The design had to do more than work; it had to respect power dynamics, invite participation, and leave room for dignity."
    },
    rightContent: {
      title: "From Points to Purpose: Rethinking Loyalty",
      body: "A parallel study revealed that traditional rewards programs often missed the mark because they assumed individual benefit, not <strong>shared meaning</strong>.<br><br>We proposed a loyalty strategy rooted in <strong>household psychology</strong>:<br>• Prioritizing essential offsets over luxury perks<br>• Enabling shared redemption across online and offline contexts<br>• Building in moments of gratitude, recognition, and emotional salience<br>• Anchoring value in family, not just frequency<br><br>Behavioral principles like <strong>loss aversion</strong>, <strong>social proof</strong>, and <strong>effort justification</strong> shaped how we designed for motivation and care, not just engagement."
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '01 | CLIENT: NATIONAL CONGLOMERATE, PHILIPPINES',
    leftContent: {
      title: 'My Role',
      body: 'I shaped narrative development and strategic positioning, surfacing the underlying tensions that connected disparate customer touchpoints across the conglomerate\'s ecosystem.<br><br>Through design research and rapid prototyping, I employed ethnographic methods to uncover the informal systems families had already developed, translating fieldwork insights into strategic frameworks that reframed the business opportunity from brand aggregation to infrastructure provision.',
    },
    rightContent: {
      title: 'Why It Matters',
      body: "In a region where the family is the first safety net, most apps treat people as individuals. We helped our client imagine something deeper: a system that supports the way families actually live, care, and coordinate, not just how they transact.<br><br>This project reframed \"digital transformation\" from convenience to <strong>care infrastructure</strong>, a quiet revolution in how platforms can show up for real lives."
    }
  }
];

// Placeholder data for Project 2
const project2Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '02 | CLIENT: LEADING INSURER, APAC',
    title: 'Insurance Mindsets Playbook:<br/><span style="font-weight: 300;">A Toolkit for Cross-Functional Empathy</span>',
    image: '/images/Projects/Research/InsuranceMindset_Cover.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '02 | CLIENT: LEADING INSURER, APAC',
    hmw: '<span style="font-weight: 300;">How might we unify a fragmented organisation through</span> <strong>shared understanding of customer needs?</strong>',
    image: '/images/Projects/Research/InsuranceMindset_HMW.png',
  },
  {
    variant: '3:5ContentCol',
    overline: '02 | CLIENT: LEADING INSURER, APAC',
    leftContent: {
      body: "As policy lapses surged, the question wasn't just \"why are people walking away?\" It was, <strong>why didn't we see it coming?</strong><br><br>This insurer had data, but little visibility into the shifting emotional and practical realities behind those numbers. What they lacked was a shared lens across departments: a way to notice, interpret, and respond to early signals of disengagement before it was too late."
    },
    rightContent: {
      title: "From Personas to Fluid Mindsets",
      body: "We interviewed customers and frontline staff across APAC, surfacing 12 distinct Insurance Mindsets, from skeptical first-timers to overwhelmed caregivers managing multiple policies.<br><br>But these weren't personas. They were behavioral states: dynamic, overlapping, and context-driven.<br><br>They helped teams ask better questions like: What happens when someone is 'Envisioning' their future, while also 'Sheltering' loved ones through crisis?<br><br>Each mindset acted as a strategic signal, helping teams anticipate when, how, and why a customer's needs might shift, and what that could mean for service, messaging, or support."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '02 | CLIENT: LEADING INSURER, APAC',
    image: '/images/Projects/Research/InsuranceMindset_Column.png',
    rightContent: {
      title: 'A Tool Teams Could Think With',
      body: "We transformed these insights into tactile mindset cards, not just to summarize research, but to trigger alignment and action.\n\nI led the design and development of these cards, not just visually, but functionally:",
      list: ['Could a marketer hold one and reframe their brief?', 'Could a product owner spot a blind spot they hadn\'t seen before?', 'Could an operations lead see where empathy could be built into the backend?', 'These cards became a shared language across marketing, product, and operations, bridging silos, surfacing tensions, and opening new entry points for collaboration.']
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '02 | CLIENT: LEADING INSURER, APAC',
    leftContent: {
      title: 'From Insight to Org-Wide Activation',
      body: 'In a co-creation workshop, I facilitated teams across the org to use the mindsets hands-on, not as reference material, but as thinking tools.<br><br>• Marketing saw how to better communicate trust during moments of instability.<br>• Product identified where complexity bred drop-off.<br>• Ops rethought service flows around moments of vulnerability.<br><br>The shift wasn\'t just in how customers were seen, but how the organization saw itself responding.',
    },
    rightContent: {
      title: 'Why It Matters',
      body: "Most insurers track customers as data points. We helped this one see them as living systems of changing needs and gave teams the tools to work with those shifts in real time.<br><br>This project wasn't just about decoding behavior. It was about embedding a new way of noticing, thinking, and designing across the business."
    }
  }
];

// Placeholder data for Project 3
const project3Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '03 | CLIENT: NATIONAL MINISTRY, SINGAPORE',
    title: 'Yearbook of the Future:<br/><span style="font-weight: 300;">Documenting a Living System in Transition</span>',
    image: '/images/Projects/Research/YearbookoftheFuture_Cover.png',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '03 | CLIENT: NATIONAL MINISTRY, SINGAPORE',
    hmw: '<span style="font-weight: 300;">How might we honour complexity, surface forgotten stories, and</span> <strong>give systems a memory?</strong>',
    image: '/images/Projects/Research/YearbookoftheFuture_HMW.png',
  },
  {
    variant: '3:5ContentCol',
    overline: '03 | CLIENT: NATIONAL MINISTRY, SINGAPORE',
    leftContent: {
      body: "In public sector transformation, progress rarely travels in a straight line. It weaves between pilots and policies, tensions and trade-offs, often too fast for reflection, too complex for any one team to hold.<br><br>The <strong>Yearbook of the Future</strong> was our attempt to make sense of it while it was still unfolding.<br><br>Spanning two years and multiple government teams, this wasn't a retrospective. It was a <strong>narrative scaffold</strong> for a system in motion, documenting how new practices in education policy, design, and collaboration were being tested, challenged, and shaped by the people doing the work."
    },
    rightContent: {
      title: "A Living Archive of Change",
      body: "As embedded designers across schools and ministries, we witnessed bold experiments in digital learning, work redesign, and organisational culture. But just as crucial as what was changing, was how people were experiencing it.<br><br>We structured the Yearbook around four lenses:<br>• <strong>People Stories</strong> – Candid portraits of educators, civil servants, and team leads navigating uncertainty and invention<br>• <strong>Process Stories</strong> – Timeline-rich accounts of pilots, frictions, pivots, and how learning travelled across silos<br>• <strong>Insights</strong> – Patterns distilled from repeated in-field observations<br>• <strong>Ideas</strong> – Concepts and provocations worth carrying forward, even after the pilot ends<br><br>This wasn't about drawing conclusions. It was about making the <strong>threads of transformation legible</strong> to those within it, and those who would carry it forward."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '03 | CLIENT: NATIONAL MINISTRY, SINGAPORE',
    image: '/images/Projects/Research/YearbookoftheFuture_Column.png',
    rightContent: {
      title: 'Designing for Recognition and Reflection',
      body: "As both lead researcher and communications designer, I shaped the Yearbook's editorial architecture and visual tone. It had to feel credible in a policymaker's hands, but alive in a teacher's.<br><br>Every spread was crafted to bring coherence to complexity: a shared object teams could gather around to make sense of their own journey, see one another's efforts, and reconnect to purpose beyond KPIs.<br><br><strong>Why It Matters</strong><br>In systems change, so much is lost in the noise: half-built ideas, informal alliances, frontline wisdom. The Yearbook offered a way to hold that, not as archive, but as active memory. A bridge between what was tried, what was learned, and what's still possible.<br><br>It's easy to overlook the cultural infrastructure that helps institutions evolve. This was one small act to reinforce it.",
      list: []
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
        
        <Header textColor="text-[#e5eddf]" />

        {/* Hero Section */}
        <section className="w-full mb-20 flex flex-col md:flex-row items-stretch md:h-[436px] gap-[38px]">
          {/* Left Box - Text and Mobile Image */}
          <div className="w-full md:w-1/2 bg-white rounded-[15px] p-[49px] flex flex-col justify-between text-[#404b51]">
            <AnimatedHomeLink />
            
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
              <span className="font-normal">SERVICE DESIGNER</span>
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
                alt="Research Projects"
                fill
                className="object-cover"
              />
            </div>
          </Tilt>
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
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 2: Decoding Insurance Drop-offs</h3>
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
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 3: Unifying Subsidiary Teams</h3>
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