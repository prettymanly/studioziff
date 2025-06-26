'use client';

import Image from 'next/image';
import { useRef } from 'react';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard/ProjectCard';
import { Tilt } from '@/components/ui/tilt';
import { AnimatedHomeLink } from '@/components/ui/animated-home-link';

// Placeholder data for Project 1
const project1Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '01 | CLIENT: SELF-INITIATED PROJECT',
    title: 'Tumbo: <span style="font-weight: 300;">Finding Classes<br/>Your Kid Won\'t Hate</span>',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '01 | CLIENT: SELF-INITIATED PROJECT',
    hmw: 'How might we design enrichment discovery around children\'s personalities, not just parental anxieties?',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    variant: '3:5ContentCol',
    overline: '01 | CLIENT: SELF-INITIATED PROJECT',
    leftContent: {
      body: "Tumbo is a self-initiated project, born not from a client brief, but from lived tension. As a parent and a designer who's worked on the future of education, I kept noticing the same pattern: we keep redesigning schools, but rarely stop to examine the <strong>mindsets of the people choosing what happens after school:</strong> parents.<br><br>Policy might remove exams, but enrichment centres rush in to fill the gap with more tests. There's a movement toward child-centred education, but it often stops at the brochure.<br><br><strong>Tumbo is my attempt to shift that.</strong>"
    },
    rightContent: {
      title: "From Transaction to Trust",
      body: "Most class platforms treat parents as buyers. Tumbo treats them as meaning-makers, navigating messy hopes, constraints, and shifting intuitions about what's right for their kids.<br><br>We built a recommendation system around four deep lenses:<br>• <strong>Content:</strong> What's being taught<br>• <strong>Child:</strong> Learning styles, sensory preferences, social needs<br>• <strong>Experience:</strong> Class vibe, pacing, group dynamics<br>• <strong>Philosophy:</strong> Pedagogies, language, worldviews<br><br>Together, these tags fuel a discovery experience that <strong>starts with context, not category.</strong><br><br>It's a platform that helps parents find classes their children will actually thrive in, based not just on schedule or subject, but on who they are and how they learn."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '01 | CLIENT: SELF-INITIATED PROJECT',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    rightContent: {
      title: 'Prototype to Platform',
      body: "Tumbo is hand-built from scratch using a lean, developer-first stack, all powered through Cursor.",
      list: ['Next.js 15 (App Router) + TailwindCSS + shadcn/ui for a fast, modern UI', 'Supabase as the backend for structured data, tags, user intake, and class content', 'Cursor (with Claude Code) for coding'],
      additionalBody: "Tumbo is also a testbed. A live project where I <strong>apply my own</strong> consulting playbook around service design, UX strategy, and product clarity in a real-world context with real families."
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '01 | CLIENT: SELF-INITIATED PROJECT',
    leftContent: {
      title: 'A Trust Layer Disguised as a Directory',
      body: 'What looks like a class listing is really a mirror, one that helps parents reflect on what they value, what their child needs, and what "growth" actually means.<br><br>• <strong>Scout Reports</strong> surface vibe-rich insights on classes<br>• <strong>Skill Trees</strong> track progress across emotional, creative, and social domains<br>• <strong>Parenting Mindsets</strong> adapt the experience based on how each family approaches learning<br><br>It\'s not about finding "the best" class. It\'s about finding what fits now.',
    },
    rightContent: {
      title: 'Why It Matters',
      body: "Tumbo is part tech product, part cultural nudge. It honors a quiet but growing shift among parents: a move toward care, toward presence, toward raising children with <strong>less fear and more fit.</strong><br><br>And as a founder, it's also an experiment in walking the talk, applying futures thinking, behavioral design, and system-building not just for clients, but for myself."
    }
  }
];

// Data for Project 2 - Recovering Autodidacts
const project2Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '02 | CLIENT: SELF-INITIATED PROJECT',
    title: 'Recovering Autodidacts:<br/><span style="font-weight: 300;">A Chatbot for the Curious-but-Tired</span>',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '02 | CLIENT: SELF-INITIATED PROJECT',
    hmw: 'How might an AI chatbot help time-starved adults rediscover their appetite for self-learning?',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    variant: '3:5ContentCol',
    overline: '02 | CLIENT: SELF-INITIATED PROJECT',
    leftContent: {
      body: "In a region where work culture often trumps curiosity, the Recovering Autodidacts project reimagined what learning could look like for the time-starved adult — not through structured curricula or rigid outcomes, but through conversational nudges, habit loops, and warm provocation."
    },
    rightContent: {
      title: "The Origin",
      body: "This was a personal design fiction prototype. I imagined a future where AI plays the role of a learning mentor — not an all-knowing oracle, but a kind companion who knows how to ask the right questions. Drawing from foresight work on AI as a Self-Learning Assistant, this bot was inspired by heutagogy: the theory of self-determined learning. I built it in Chatfuel in under 3 weeks."
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '02 | CLIENT: SELF-INITIATED PROJECT',
    leftContent: {
      title: "What It Was",
      body: "The prototype was simple: a Facebook Messenger bot that guided users through a 14-day self-learning challenge. Participants picked their own learning goal — like writing daily, learning Japanese, or understanding machine learning — and the bot would check in each day with a short reflection prompt, a motivational learning tip, and occasional feedback."
    },
    rightContent: {
      title: "What It Was",
      body: "The prototype was simple: a Facebook Messenger bot that guided users through a 14-day self-learning challenge. Participants picked their own learning goal — like writing daily, learning Japanese, or understanding machine learning — and the bot would check in each day with a short reflection prompt, a motivational learning tip, and occasional feedback."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '02 | CLIENT: SELF-INITIATED PROJECT',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    rightContent: {
      title: 'Features Designed to Shape Behavior',
      body: "Learners were asked to define their goals (a conversational version of a learning contract), reflect daily (reinforcing awareness), and eventually demonstrate what they'd learned. The experience was designed around agency, accountability, and curiosity — all scaffolded lightly by the bot.",
      list: [
        '<strong>Learning Contracts:</strong> Established conversationally, forcing early clarity.',
        '<strong>Daily Reflections:</strong> Encouraged habit-building and pattern recognition.',
        '<strong>Meta-Learning Tips:</strong> Shared after each completed day as small rewards — sourced from Barbara Oakley, Feynman, and others.',
        '<strong>Accountability Champions:</strong> Learners were invited to nominate someone they\'d report to, adding social stakes.',
        '<strong>Proof of Learning:</strong> Users were prompted to demonstrate their outcome with photos, videos, or short notes.'
      ]
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '02 | CLIENT: SELF-INITIATED PROJECT',
    leftContent: {
      title: 'Constraints',
      body: 'Because of platform limitations, the chatbot wasn\'t truly conversational. It couldn\'t parse user input meaningfully. Yet by thinking the UX, I gave the bot personality: warm, enthusiastic, and playful. It greeted users differently each day, used their names, and made the interaction feel more human.',
    },
    rightContent: {
      title: 'What I Wanted to Learn',
      body: "My hypothesis was simple: if you strip away the complexity of modern edtech and just offer people structure, reflection, and encouragement — would they still learn? Would it feel meaningful? Could a bot rekindle the self-motivated learner within?"
    }
  },
  {
    variant: '1:1ContentCol',
    overline: '02 | CLIENT: SELF-INITIATED PROJECT',
    leftContent: {
      title: 'Outcomes',
      body: 'Over a dozen people tested the bot. Some completed the challenge. Some dropped out. But nearly everyone reported it helped them think differently about learning. One said it felt like "talking to a coach who didn\'t judge." Another said it reminded them of what school never taught: how to learn.',
    },
    rightContent: {
      title: 'Why It Matters',
      body: "This wasn't about replacing teachers with AI. It was about reframing learning itself — less about content delivery, more about mindset scaffolding. The bot didn't teach facts. It helped people care again.<br/><br/>In a time where AI promises speed and automation, Recovering Autodidacts asked a quieter question:<br/><br/><em>What if the future of learning wasn't faster... but more human?</em>"
    }
  }
];

// Data for Project 3 - Conscious Collapse
const project3Data: ProjectCardProps[] = [
  {
    variant: 'ProjectCover',
    overline: '03 | CLIENT: SELF-INITIATED PROJECT',
    title: 'Conscious Collapse:<br/><span style="font-weight: 300;">Meditations for the Mildly Spiraling</span>',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    swipeToRead: true,
  },
  {
    variant: 'HMW',
    overline: '03 | CLIENT: SELF-INITIATED PROJECT',
    hmw: 'What if AI could help overthinkers laugh their way into mindfulness?',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    variant: '1:1ContentCol',
    overline: '03 | CLIENT: SELF-INITIATED PROJECT',
    leftContent: {
      title: "The Challenge",
      body: "Most mindfulness apps speak in soft voices, serene backdrops, and slightly unbearable calm. But what if the people who needed it most — the mildly spiraling, the emotionally constipated, the \"I don't do feelings\" types — couldn't hear themselves in that world?<br/><br/>That's where Conscious Collapse began:<br/>A weird little experiment in designing AI-generated meditations that are deeply human, slightly unhinged, and weirdly healing."
    },
    rightContent: {
      title: "A Different Kind of Stillness",
      body: "Each script started with a prompt:<br/>• What would a meditation for guilt sound like if it was written by someone honest about avoiding accountability?<br/>• How do you reframe perfectionism without pretending it's a dragon you slayed?<br/>• What's the version of \"just breathe\" that actually lands with a burnt-out dad at 11pm?<br/><br/>Using GPT 4 and a homegrown tone library, I generated meditations that sounded like they were written by someone who gets it,then layered them with synthetic voice, sound design, and visual prompts to create shareable experiences across TikTok, YouTube Shorts, and podcast platforms."
    }
  },
  {
    variant: '3:5ImageContent',
    overline: '03 | CLIENT: SELF-INITIATED PROJECT',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    rightContent: {
      title: 'Stacking Humor, Structure, and Self-Insight',
      body: "Each script is built with:",
      list: [
        '<strong>An emotional hook</strong> (e.g. \"You\'ve convinced yourself this isn\'t burnout, just \'under-caffeination.\'\")',
        '<strong>A psychological technique</strong> (e.g. cognitive defusion, visualization, body scan)',
        '<strong>A tonal reversal</strong> (e.g. \"This isn\'t about fixing you. This is about laughing at the part of you that\'s currently making you clench your jaw.\")'
      ],
      additionalBody: "In other words: insight meets improv meets internal monologue — with AI as co-writer and co-performer."
    }
  },
  {
    variant: '3:5ContentCol',
    overline: '03 | CLIENT: SELF-INITIATED PROJECT',
    leftContent: {
      body: "Not a Product. Just a Prototype.<br/>Conscious Collapse wasn't built for scale. It was a sandbox — a chance to play with tone, emotional design, and AI tooling in a low-stakes, slightly chaotic format."
    },
    rightContent: {
      title: 'Want to Experiment?',
      body: "If you're curious about how to use GenAI to create content like this — or want to run a short training for your team — hit me up. I'm always game to help people turn weird ideas into working prototypes."
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
            <AnimatedHomeLink />
            
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
              <h3 className="text-[#e5eddf] text-xl font-bold">Project 3: Meditations for the Mildly Spiraling</h3>
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