import { ServiceCard } from '@/components/ServiceCard/ServiceCard';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import { Tilt } from '@/components/ui/tilt';
import DecryptedText from '@/components/ui/decrypted-text';

export default function Home() {
  const serviceDesignData = {
    serviceNumber: "_01",
    title: "Customer Research<br/><span style='font-weight: 300;'>+</span> Behavioral Insights",
    bgColor: "#6a8f7b",
    links: {
      view: "RESEARCH PROJECTS",
      enquire: "ENQUIRE ON RESEARCH WORK"
    },
    description: {
      heading: "Beyond What They Say They Want",
      body: "Your customers aren't as rational as you think, with contradictory desires and decisions they can't always explain. I help teams decode what actually drives behavior beyond what surveys and assumptions reveal. We turn those insights into sharp direction so you can build and market with human nature, not against it.",
      subheading: "",
      subbody: "",
    },
    questions: [
      "What's really driving our customers' decisions?",
      "Why aren't people using what we built?",
      "How do we reduce friction or unlock trust?",
    ],
    activities: [
      "Find signals in what users say, do, or avoid",
      "Test ideas fast — with blueprints, provocations, or prototypes",
      "Turn messy feedback into confident next steps",
    ],
    idealFor: ["Startup founders", "product owners", "L&D teams", "People & Culture teams"],
  };

  const futuresData = {
    serviceNumber: "_02",
    title: "Strategic<br/>Futures",
    bgColor: "#547068",
    links: {
      view: "FUTURES PROJECTS",
      enquire: "ENQUIRE ON FUTURES WORK"
    },
    description: {
      heading: "Change Comes Fast. Are You Ready?",
      body: "Futures work isn't about crystal balls, it's about stretching perspectives before change blindsides you. I help teams read signals, anticipate risks, and imagine bold alternatives while there's still time to act. We use provocations and scenarios to fundamentally shift how you plan and build for what's coming.",
      subheading: "",
      subbody: ""
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
    idealFor: ["Ministries", "educational leaders", "organizations facing major shifts", "strategy teams"]
  };

  const creativeTechData = {
    serviceNumber: "_03",
    title: "Generative AI<br/><span style='font-weight: 300;'>+</span> Automation",
    bgColor: "#37494c",
    links: {
      view: "AI PROJECTS",
      enquire: "ENQUIRE ON AI WORK"
    },
    description: {
      heading: "Thinking with Machines, Creatively",
      body: "I help teams cut through AI hype to find automation that actually works for their specific needs. Whether you're streamlining operations or augmenting creative workflows, we'll identify practical use cases and build them together through hands-on experimentation. We'll demystify the jargon and roll up sleeves to turn AI possibilities into working solutions.",
      subheading: "",
      subbody: ""
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
    idealFor: ["Small business owners", "creative directors", "sales professionals", "ops teams"]
  };

  const facilitationData = {
    serviceNumber: "_04",
    title: "Teaching, Facilitation<br/><span style='font-weight: 300;'>+</span> Capability Building",
    bgColor: "#2f3a41",
    links: {
      view: "TEACHING EXPERIENCE",
      enquire: "ENQUIRE ON EDUCATION WORK"
    },
    description: {
      heading: "Learning That Sticks",
      body: "I design learning experiences that unlock clarity, confidence, and curiosity across contexts from primary schools to corporate boardrooms. Whether we're learning design thinking, building futures literacy, or helping people unpack their scripts to imagine better alternatives, I adapt to your group's energy and needs. The goal is always transformation that sticks, not just another workshop people forget.",
      subheading: "",
      subbody: ""
    },
    questions: [
      "What if we flipped this challenge completely?",
      "What's one assumption we've never questioned?",
      "What's possible if we let go of how things \"should\" work?",
    ],
    activities: [
      "Facilitate design thinking or futures workshops",
      "Teach creativity and critical thinking",
      "Help people prototype different versions of themselves",
    ],
    idealFor: ["Educators", "L&D teams", "trainers", "facilitators"]
  };

  return (
    <main className="flex flex-col items-center py-10 px-2.5">
      <div className="w-full max-w-[902px]">
        
        <Header />

        {/* Hero Section */}
        <section className="w-full mb-20 flex flex-col md:flex-row items-stretch md:h-[436px] gap-[38px]">
          {/* Left Box - Text and Mobile Image */}
          <div className="w-full md:w-1/2 bg-white rounded-[15px] p-[49px] flex flex-col justify-between text-[#404b51]">
            <DecryptedText 
              text="_INTRO" 
              className="font-mono text-base tracking-[-0.8px]"
              animateOn="view"
              speed={80}
              maxIterations={15}
            />
            {/* Test comment */}
            
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
              <span className="font-normal">LIKES HATS</span>
            </p>
          </div>

          {/* Right Box - Image */}
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
                alt="Ziff Lau"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Tilt>
        </section>

        {/* About Section */}
        <section className="w-full mb-20 text-[#323e45] text-[25px] leading-[30px] font-sans">
          <p className="mb-6">
            My salaryman days began in advertising. A discipline that taught me the value of narrative precision, the power of productive tension, and a religious belief that there&apos;s always space for tongues in cheeks.
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
            Yes, I wear many hats, and yes, I have one for each context. Below, you&apos;ll find what those hats look like, and how I think when I&apos;m wearing them.
          </p>
        </section>

        {/* Services Section */}
        <section className="flex flex-col space-y-16">
          
          {/* Service 1 + Links */}
          <div>
            <ServiceCard {...serviceDesignData} />
            <div className="mt-[38px] flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-base text-[#5e7c72] gap-4 md:gap-0">
              <a href="/research-projects" className="hover:opacity-80">
                VIEW <span className="font-bold underline">{serviceDesignData.links.view}</span>
              </a>
              <a href="#" className="hover:opacity-80">{serviceDesignData.links.enquire}</a>
            </div>
          </div>

          {/* Service 2 + Links */}
          <div>
            <ServiceCard {...futuresData} />
            <div className="mt-[38px] flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-base text-[#5e7c72] gap-4 md:gap-0">
              <a href="/futures-projects" className="hover:opacity-80">
                VIEW <span className="font-bold underline">{futuresData.links.view}</span>
              </a>
              <a href="#" className="hover:opacity-80">{futuresData.links.enquire}</a>
            </div>
          </div>

          {/* Service 3 + Links */}
          <div>
            <ServiceCard {...creativeTechData} />
            <div className="mt-[38px] flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-base text-[#5e7c72] gap-4 md:gap-0">
              <a href="/ai-projects" className="hover:opacity-80">
                VIEW <span className="font-bold underline">{creativeTechData.links.view}</span>
              </a>
              <a href="#" className="hover:opacity-80">{creativeTechData.links.enquire}</a>
            </div>
          </div>

          {/* Service 4 + Links */}
          <div>
            <ServiceCard {...facilitationData} />
            <div className="mt-[38px] flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-base text-[#5e7c72] gap-4 md:gap-0">
              <a href="/teaching-projects" className="hover:opacity-80">
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
