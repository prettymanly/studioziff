import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import projectsData from '@/data/projects.json';
import Link from 'next/link';

export default function ServiceDesignPage() {
  // Filter projects for service-design
  const serviceDesignProjects = projectsData.filter(
    project => project.service_type === 'service-design'
  );

  // Group projects by project_number
  const groupedProjects = serviceDesignProjects.reduce((acc, project) => {
    const key = project.project_number;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(project);
    return acc;
  }, {} as Record<number, typeof serviceDesignProjects>);

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#E5EDDF]">
      {/* Main Container - 902px width as per Figma */}
      <div className="w-[902px] mx-auto">
        
        {/* Header - 129px height */}
        <header className="h-[129px] flex items-center justify-between px-8">
          <Link href="/" className="text-2xl font-bold hover:opacity-80">
            Ziff
          </Link>
          <nav className="space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/futures" className="hover:underline">Futures</Link>
            <Link href="/creative-tech" className="hover:underline">Creative Tech</Link>
            <Link href="/facilitation" className="hover:underline">Facilitation</Link>
          </nav>
        </header>

        {/* Page Content */}
        <main className="pb-20">
          
          {/* Service Header Section */}
          <section className="py-12 mb-8">
            <div className="mb-6">
              <span className="text-sm font-mono text-slate-400">_01</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Service Design + Research</h1>
            <p className="text-xl text-slate-300 italic mb-8 max-w-3xl">
              &ldquo;Most people skip straight to ideas. I help you slow down and see where the story really begins.&rdquo;
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="border-slate-600 text-[#E5EDDF] hover:bg-slate-800">
                Download Portfolio
              </Button>
              <Button variant="ghost" className="text-[#E5EDDF] hover:bg-slate-800">
                Get in Touch →
              </Button>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Recent Work</h2>
            
            {/* Render each project as a swipeable row */}
            {Object.entries(groupedProjects).map(([projectNumber, cards]) => {
              // Sort cards by variant_index to ensure proper order
              const sortedCards = cards.sort((a, b) => a.variant_index - b.variant_index);
              
              return (
                <div key={projectNumber} className="mb-16">
                  <h3 className="text-xl font-semibold mb-6 text-slate-300">
                    Project {projectNumber}: {sortedCards[0]?.client}
                  </h3>
                  
                  {/* Horizontal scrollable row */}
                  <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
                    {sortedCards.map((project) => (
                      <div key={project.id} className="flex-shrink-0">
                        <ProjectCard
                          project_number={project.project_number}
                          client={project.client}
                          variant={project.variant as 'ProjectCover' | '1-1ContentCol' | '3-5ContentCol' | '3-5ImageContent' | 'DesignQuestion'}
                          content={project.content}
                          cover_image_url={project.cover_image_url}
                          project_image_url={project.project_image_url}
                          hmw_line={project.hmw_line}
                          title={project.title}
                          description={project.description}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>

          {/* Call to Action Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to understand what matters most to your users and translate that into actionable insights.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-[#E5EDDF] text-[#0f172a] hover:bg-[#E5EDDF]/90">
                Start a Project
              </Button>
              <Button variant="outline" className="border-slate-600 text-[#E5EDDF] hover:bg-slate-800">
                Schedule a Call
              </Button>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Service Design + Research | Ziff Portfolio",
  description: "Strategic research and service design projects helping teams understand what matters most to their users.",
};