import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import projectsData from '@/data/projects.json';
import Link from 'next/link';

export default function CreativeTechPage() {
  // Filter projects for creative-tech
  const creativeTechProjects = projectsData.filter(
    project => project.service_type === 'creative-tech'
  );

  // Group projects by project_number
  const groupedProjects = creativeTechProjects.reduce((acc, project) => {
    const key = project.project_number;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(project);
    return acc;
  }, {} as Record<number, typeof creativeTechProjects>);

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
            <Link href="/facilitation" className="hover:underline">Facilitation</Link>
          </nav>
        </header>

        {/* Page Content */}
        <main className="pb-20">
          
          {/* Service Header Section */}
          <section className="py-12 mb-8">
            <div className="mb-6">
              <span className="text-sm font-mono text-slate-400">_03</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Creative Tech</h1>
            <p className="text-xl text-slate-300 italic mb-8 max-w-3xl">
              &ldquo;Where technology meets human experience. Building digital solutions that actually work for people.&rdquo;
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="border-slate-600 text-[#E5EDDF] hover:bg-slate-800">
                View Prototypes
              </Button>
              <Button variant="ghost" className="text-[#E5EDDF] hover:bg-slate-800">
                Build Together →
              </Button>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Interactive Experiences</h2>
            
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
                <p className="text-slate-400 text-lg mb-6">Creative tech projects in development...</p>
                <p className="text-slate-500">Currently prototyping interactive installations and digital experiences.</p>
              </div>
            )}
          </section>

          {/* Capabilities Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">Technical Capabilities</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#E5EDDF]">Prototyping</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Interactive web experiences</li>
                  <li>• Mobile app prototypes</li>
                  <li>• Hardware integrations</li>
                  <li>• AR/VR concepts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#E5EDDF]">Technologies</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• React, Next.js, TypeScript</li>
                  <li>• Three.js, WebGL</li>
                  <li>• Arduino, Raspberry Pi</li>
                  <li>• Unity, Unreal Engine</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#E5EDDF]">Design Process</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Concept development</li>
                  <li>• Technical feasibility</li>
                  <li>• Rapid prototyping</li>
                  <li>• User testing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#E5EDDF]">Collaboration</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Cross-disciplinary teams</li>
                  <li>• Agile development</li>
                  <li>• Open source mindset</li>
                  <li>• Knowledge sharing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to build something amazing?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s prototype your ideas and create technology experiences that truly serve human needs.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-[#E5EDDF] text-[#0f172a] hover:bg-[#E5EDDF]/90">
                Start Prototyping
              </Button>
              <Button variant="outline" className="border-slate-600 text-[#E5EDDF] hover:bg-slate-800">
                Explore Ideas
              </Button>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Creative Tech | Ziff Portfolio",
  description: "Creative technology projects bridging human experience and digital innovation through thoughtful prototyping.",
};