import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import projectsData from '@/data/projects.json';
import Link from 'next/link';

export default function FacilitationPage() {
  // Filter projects for facilitation
  const facilitationProjects = projectsData.filter(
    project => project.service_type === 'facilitation'
  );

  // Group projects by project_number
  const groupedProjects = facilitationProjects.reduce((acc, project) => {
    const key = project.project_number;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(project);
    return acc;
  }, {} as Record<number, typeof facilitationProjects>);

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
            <Link href="/futures" className="hover:underline">Futures</Link>
            <Link href="/creative-tech" className="hover:underline">Creative Tech</Link>
          </nav>
        </header>

        {/* Page Content */}
        <main className="pb-20">
          
          {/* Service Header Section */}
          <section className="py-12 mb-8">
            <div className="mb-6">
              <span className="text-sm font-mono text-slate-400">_04</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Facilitation</h1>
            <p className="text-xl text-slate-300 italic mb-8 max-w-3xl">
              &ldquo;Great ideas need great conversations. I help teams think together more effectively.&rdquo;
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="border-slate-600 text-[#E5EDDF] hover:bg-slate-800">
                Workshop Formats
              </Button>
              <Button variant="ghost" className="text-[#E5EDDF] hover:bg-slate-800">
                Let&apos;s Collaborate →
              </Button>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Workshop & Strategy Sessions</h2>
            
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
                <p className="text-slate-400 text-lg mb-6">Recent facilitation engagements...</p>
                <p className="text-slate-500">Currently facilitating strategic alignment and innovation workshops.</p>
              </div>
            )}
          </section>

          {/* Methods Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">Facilitation Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#E5EDDF]">Strategic Workshops</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Structured sessions that help leadership teams align on vision, strategy, and priorities across multiple time horizons.
                </p>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Vision alignment</li>
                  <li>• Strategy development</li>
                  <li>• Roadmap planning</li>
                  <li>• Decision frameworks</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#E5EDDF]">Innovation Sessions</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Creative problem-solving workshops that generate breakthrough ideas and build momentum for implementation.
                </p>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Ideation workshops</li>
                  <li>• Problem framing</li>
                  <li>• Concept development</li>
                  <li>• Rapid prototyping</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#E5EDDF]">Team Alignment</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Collaborative sessions that bridge different perspectives and create shared understanding across teams.
                </p>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Stakeholder mapping</li>
                  <li>• Conflict resolution</li>
                  <li>• Goal setting</li>
                  <li>• Communication frameworks</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#E5EDDF]">Change Management</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Structured processes that help organizations navigate transitions and build buy-in for new directions.
                </p>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Change planning</li>
                  <li>• Resistance mapping</li>
                  <li>• Communication strategy</li>
                  <li>• Implementation support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">My Process</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-8 h-8 bg-[#E5EDDF] text-[#0f172a] rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Pre-Workshop Design</h3>
                  <p className="text-slate-300">
                    Understanding context, stakeholders, and desired outcomes to design the most effective session format.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-8 h-8 bg-[#E5EDDF] text-[#0f172a] rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Facilitated Sessions</h3>
                  <p className="text-slate-300">
                    Guiding productive conversations using proven frameworks and techniques that unlock collective intelligence.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-8 h-8 bg-[#E5EDDF] text-[#0f172a] rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Follow-up & Implementation</h3>
                  <p className="text-slate-300">
                    Synthesizing insights, creating action plans, and supporting teams through implementation challenges.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to unlock your team&apos;s potential?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s design a collaborative process that helps your team think together more effectively and drive meaningful outcomes.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-[#E5EDDF] text-[#0f172a] hover:bg-[#E5EDDF]/90">
                Plan a Workshop
              </Button>
              <Button variant="outline" className="border-slate-600 text-[#E5EDDF] hover:bg-slate-800">
                Discuss Your Needs
              </Button>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Facilitation | Ziff Portfolio",
  description: "Workshop facilitation and collaborative processes that help teams think together more effectively and drive meaningful outcomes.",
};