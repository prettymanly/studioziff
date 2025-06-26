import { ServiceCard } from '@/components/ServiceCard/ServiceCard';
import Image from 'next/image';

export default function Home() {
  const serviceDesignData = {
    serviceNumber: "_01",
    title: "Service Design<br/>+ Research",
    bgColor: "#6a8f7b",
    links: {
      view: "DESIGN RESEARCH + SERVICE DESIGN PROJECTS",
      enquire: "ENQUIRE ON DESIGN RESEARCH WORK"
    },
    description: {
      heading: "Making Sense, Together.",
      body: "Whether you're launching a new product or trying to fix what's not working, real insight beats guesswork. I help lean teams cut through assumptions and get to what actually matters to their users. We'll dig into what's driving customer decisions, where they're hitting roadblocks, and what they're willing to invest in. This isn't research for research's sake—it's strategic work that gets close to your customers, makes sense of their world, and translates those insights into clear, actionable direction for your product, service, or messaging so you can move forward with confidence.",
      subheading: "",
      subbody: "",
    },
    questions: [
      "What's really driving our customers' decisions?",
      "Why aren't people using what we built?",
      "How do we reduce friction or unlock trust?",
      "Why aren't employees adopting this new way of working?",
    ],
    activities: [
      "Find signals in what users say, do, or avoid",
      "Test ideas fast — with blueprints, provocations, or prototypes",
      "Turn messy feedback into confident next steps",
    ],
    idealFor: ["Startup founders", "SME teams", "product owners", "L&D teams", "innovation leads"],
  };

  const futuresData = {
    serviceNumber: "_02",
    title: "Futures<br/>+ Foresight",
    bgColor: "#547068",
    links: {
      view: "FUTURES + FORESIGHT PROJECTS",
      enquire: "ENQUIRE ON FUTURES + FORESIGHT WORK"
    },
    description: {
      heading: "You can&apos;t predict the future. But you can prepare for the ones that matter.",
      body: "Futures work isn&apos;t about crystal balls, it&apos;s about stretching perspectives. I help teams make sense of change, anticipate risks, and imagine bold alternatives before it&apos;s too late (or too late to do anything meaningful). It&apos;s strategic imagination, grounded in real-world signals.",
      subheading: "Think of it as...",
      subbody: "Foresight you can actually act on. Not just trend decks, but structured provocation, scenario thinking, and facilitated reflection that shifts how people plan and build."
    },
    questions: [
      "What shifts will change how we operate in 5–10 years?",
      "What future are we unconsciously designing for?",
      "How might emerging tech reshape our mission or business?",
    ],
    activities: [
      "Run scenario-planning and trend-mapping workshops",
      "Create design fictions that dramatize implications",
      "Facilitate sensemaking across siloed teams",
    ],
    idealFor: ["Ministries", "educators", "orgs on the edge of disruption", "or anyone dreaming responsibly."]
  };

  const creativeTechData = {
    serviceNumber: "_03",
    title: "Generative AI<br/>+ Automation",
    bgColor: "#37494c",
    links: {
      view: "GENERATIVE AI + AUTOMATION PROJECTS",
      enquire: "ENQUIRE ON GENERATIVE AI WORK"
    },
    description: {
      heading: "Thinking with Machines, Creatively",
      body: "I help teams cut through the AI hype to find practical, creative, or strategic uses of automation. Whether you&apos;re a small business trying to streamline operations or a creative team looking to augment your workflow, we&apos;ll find use cases that actually matter and build smartly around them.",
      subheading: "Think of it as...",
      subbody: "Practical AI strategy and prototyping. From figuring out your first automation loop to designing AI-powered customer experiences, I work with you to make it tangible, without the jargon."
    },
    questions: [
      "Where can AI meaningfully save us time or create new value?",
      "What processes can we automate without losing the human touch?",
      "How might AI enhance (not replace) our creative or service workflows?",
    ],
    activities: [
      "Prototype AI-powered experiences (chat, content, recommendations)",
      "Train your team to use and adapt AI tools responsibly",
      "Create internal workflows that save hours weekly"
    ],
    idealFor: ["SMEs", "creative studios", "educators", "founders", "innovation and operations teams"]
  };

  const facilitationData = {
    serviceNumber: "_04",
    title: "Teaching, Facilitation<br/>+ Capability Building",
    bgColor: "#2f3a41",
    links: {
      view: "TEACHING + FACILITATION PROJECTS",
      enquire: "ENQUIRE ON TEACHING WORK"
    },
    description: {
      heading: "Making Sense, Together.",
      body: "I design learning experiences that unlock clarity, confidence, and curiosity. From corporate innovation sprints to undergraduate classrooms, I bring structure, story, and soul to help teams and individuals build new creative muscles and actually enjoy the process.",
      subheading: "Think of it as...",
      subbody: "Hands-on, brains-on learning. I adapt to your group&apos;s energy and needs, layering just enough structure to stretch minds — whether we&apos;re learning design, building futures literacy, or unlearning tired ways of working."
    },
    questions: [
              "Why aren&apos;t employees thinking like owners, innovators, or collaborators?",
      "What does it take to grow a culture of learning and experimentation?",
    ],
    activities: [
      "Facilitate high-energy, low-jargon design thinking or futures workshops",
      "Teach creativity and critical thinking to students or professionals",
      "Coach individuals in storytelling, career design, or strategic clarity",
    ],
    idealFor: ["SMEs", "creative studios", "educators", "founders", "innovation and operations teams"]
  };

  return (
    <main className="flex flex-col items-center py-10 px-2.5">
      <div className="w-full max-w-[902px]">
        
        {/* Header Placeholder */}
        <header className="w-full mb-10 flex flex-row justify-between items-start font-mono text-base py-4">
          <div>
            <p className="text-[#5e7c72] font-bold">ELSEWHERE</p>
            <p><a href="#" className="hover:opacity-80">BLOG</a></p>
            <p><a href="#" className="hover:opacity-80">LINKEDIN</a></p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[#5e7c72] font-bold">CONTACT</p>
            <p><a href="mailto:ZIFF.LAU@GMAIL.COM" className="hover:opacity-80">ZIFF.LAU@GMAIL.COM</a></p>
            <p>+9322 7317</p>
          </div>
        </header>

        {/* Hero Section */}
        <section className="w-full h-auto md:h-[436px] mb-10 flex flex-col md:flex-row items-center gap-[38px]">
          {/* Left Box - Text */}
          <div className="w-full md:w-1/2 h-[436px] bg-white rounded-[15px] p-[49px] flex flex-col justify-between text-[#404b51]">
            <p className="font-mono text-base tracking-[-0.8px]">_INTRO</p>
            <p className="text-[20px] leading-[22px] tracking-[-1px]">
              <span className="font-bold">ZIFF LAU</span>
              <br />
              <span className="font-normal">LIKES HATS</span>
            </p>
          </div>

          {/* Right Box - Image */}
          <div className="w-full md:w-1/2 h-[436px] rounded-[15px] overflow-hidden">
            <Image
              src="/images/intro-image.png"
              alt="Ziff Lau"
              width={500}
              height={436}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="w-full mb-10 text-[#323e45] text-[30px] leading-normal font-sans">
          <p className="mb-6">
            My salaryman days began in advertising. A discipline that taught me the value of narrative precision, the power of productive tension, and a religious belief that there's always space for tongues in cheeks.
          </p>
          <p className="mb-6">
            This mindset became my OS and has informed every subsequent endeavor: from framing consumer mindsets and articulating the future of industries, to branding personal experiments and performing improv on stage.
          </p>
          <p className="mb-6">
            Currently, I&apos;m developing a platform to <span className="underline">help parents find classes their kids won&apos;t immediately hate</span>. It&apos;s behavioral economics disguised as a class directory.
          </p>
          <p className="mb-6">
            However, I remain available for:
          </p>
          <ul className="list-disc pl-12 mb-6 space-y-2">
            <li>Strategy and research work that needs fresh perspective (design research, service design, futures foresight.)</li>
            <li>Building things that surprisingly work (especially if AI is involved)</li>
            <li>Teaching gigs (I currently teach Innovation Design at SIT, where students pretend to listen)</li>
          </ul>
          <p>
            Yes, I wear many hats, and yes, I has one for each context. Below, you&apos;ll find what those hats look like, and how I think when I&apos;m wearing them.
          </p>
        </section>

        {/* Services Section */}
        <section className="flex flex-col space-y-16">
          
          {/* Service 1 + Links */}
          <div>
            <ServiceCard {...serviceDesignData} />
            <div className="mt-[38px] flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-base text-[#5e7c72] gap-4 md:gap-0">
              <a href="#" className="hover:opacity-80">
                VIEW <span className="font-bold underline">{serviceDesignData.links.view}</span>
              </a>
              <a href="#" className="hover:opacity-80">{serviceDesignData.links.enquire}</a>
            </div>
          </div>

          {/* Service 2 + Links */}
          <div>
            <ServiceCard {...futuresData} />
            <div className="mt-[38px] flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-base text-[#5e7c72] gap-4 md:gap-0">
              <a href="#" className="hover:opacity-80">
                VIEW <span className="font-bold underline">{futuresData.links.view}</span>
              </a>
              <a href="#" className="hover:opacity-80">{futuresData.links.enquire}</a>
            </div>
          </div>

          {/* Service 3 + Links */}
          <div>
            <ServiceCard {...creativeTechData} />
            <div className="mt-[38px] flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-base text-[#5e7c72] gap-4 md:gap-0">
              <a href="#" className="hover:opacity-80">
                VIEW <span className="font-bold underline">{creativeTechData.links.view}</span>
              </a>
              <a href="#" className="hover:opacity-80">{creativeTechData.links.enquire}</a>
            </div>
          </div>

          {/* Service 4 + Links */}
          <div>
            <ServiceCard {...facilitationData} />
            <div className="mt-[38px] flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-base text-[#5e7c72] gap-4 md:gap-0">
              <a href="#" className="hover:opacity-80">
                VIEW <span className="font-bold underline">{facilitationData.links.view}</span>
              </a>
              <a href="#" className="hover:opacity-80">{facilitationData.links.enquire}</a>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
} 