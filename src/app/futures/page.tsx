import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import projectsData from '@/data/projects.json';
import Link from 'next/link';

export default function FuturesPage() {
  // Filter projects for futures
  const futuresProjects = projectsData.filter(
    project => project.service_type === 'futures'
  );

  // Group projects by project_number
  const groupedProjects = futuresProjects.reduce((acc, project) => {
    const key = project.project_number;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(project);
    return acc;
  }, {} as Record<number, typeof futuresProjects>);

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
            <Link href="/service-design" className="hover:underline">Service Design</Link>
            <Link href="/creative-tech" className="hover:underline">Creative Tech</Link>
            <Link href="/facilitation" className="hover:underline">Facilitation</Link>
          </nav>
        </header>

        {/* Page Content */}
        <main className="pb-20">
          
          {/* Service Header Section */}
          <section className="py-12 mb-8">
            <div className="mb-6">
              <span className="text-sm font-mono text-slate-400">_02</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Futures</h1>
            <p className="text-xl text-slate-300 italic mb-8 max-w-3xl">
              &ldquo;The future isn&apos;t fixed. Let&apos;s explore the possibilities and prepare for what&apos;s coming next.&rdquo;
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="border-slate-600 text-[#E5EDDF] hover:bg-slate-800">
                View Scenarios
              </Button>
              <Button variant="ghost" className="text-[#E5EDDF] hover:bg-slate-800">
                Explore Together →
              </Button>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Strategic Foresight Work</h2>
            
            {/* Render each project as a swipeable row */}
            {Object.entries(groupedProjects).length > 0 ? (
              Object.entries(groupedProjects).map(([projectNumber, cards]) => {
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
              })
            ) : (
              <div className="text-center py-16">
                <p className="text-slate-400 text-lg mb-6">More futures projects coming soon...</p>
                <p className="text-slate-500">Currently working on scenario planning and strategic foresight engagements.</p>
              </div>
            )}
          </section>

          {/* Approach Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#E5EDDF]">Scenario Development</h3>
                <p className="text-slate-300 leading-relaxed">
                  Creating plausible future scenarios that help organizations prepare for multiple possible outcomes and identify emerging opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#E5EDDF]">Trend Analysis</h3>
                <p className="text-slate-300 leading-relaxed">
                  Identifying weak signals and emerging patterns that could reshape industries, technologies, and human behavior.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#E5EDDF]">Strategic Implications</h3>
                <p className="text-slate-300 leading-relaxed">
                  Translating future scenarios into actionable strategies that build organizational resilience and competitive advantage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#E5EDDF]">Systems Thinking</h3>
                <p className="text-slate-300 leading-relaxed">
                  Understanding how complex systems interact and evolve, revealing unexpected connections and leverage points.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to explore the future?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to map out potential futures and build strategies that work across multiple scenarios.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-[#E5EDDF] text-[#0f172a] hover:bg-[#E5EDDF]/90">
                Start Exploring
              </Button>
              <Button variant="outline" className="border-slate-600 text-[#E5EDDF] hover:bg-slate-800">
                Discuss Possibilities
              </Button>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Futures | Ziff Portfolio",
  description: "Strategic foresight and futures research helping organizations navigate uncertainty and prepare for emerging opportunities.",
};