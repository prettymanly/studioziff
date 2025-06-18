import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export interface ProjectCardProps {
  project_number: number;
  client: string;
  variant: 'ProjectCover' | '1-1ContentCol' | '3-5ContentCol' | '3-5ImageContent' | 'DesignQuestion';
  content?: string | null;
  cover_image_url?: string | null;
  project_image_url?: string | null;
  hmw_line?: string | null;
  title?: string | null;
  description?: string | null;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project_number,
  client,
  variant,
  content,
  cover_image_url,
  project_image_url,
  hmw_line,
  title,
  description,
}) => {
  // Base card styling - 902×552px as per Figma specs
  const baseCardClass = "w-[902px] h-[552px] bg-[#0f172a] border-slate-700 relative overflow-hidden";

  // Render ProjectCover variant
  if (variant === 'ProjectCover') {
    return (
      <Card className={baseCardClass}>
        <CardContent className="p-0 h-full">
          <div className="h-full flex">
            {/* Left Container - Content */}
            <div className="flex-1 p-12 flex flex-col justify-between">
              {/* Overline */}
              <div className="mb-8">
                <p className="text-[#E5EDDF] text-sm font-mono opacity-70 mb-6">
                  {String(project_number).padStart(2, '0')} | CLIENT: {client.toUpperCase()}
                </p>
                {title && (
                  <h3 className="text-[#E5EDDF] text-2xl font-bold leading-tight">
                    {title}
                  </h3>
                )}
              </div>

              {/* Description */}
              {description && (
                <div className="flex-1 mb-8">
                  <p className="text-[#E5EDDF] text-base leading-relaxed opacity-85">
                    {description}
                  </p>
                </div>
              )}

              {/* CTA */}
              <div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-[#E5EDDF] hover:text-[#E5EDDF] hover:bg-slate-800/50 p-0 h-auto font-normal"
                >
                  Swipe to read the case →
                </Button>
              </div>
            </div>

            {/* Right Container - Image */}
            <div className="w-1/2 relative">
              {cover_image_url ? (
                <Image 
                  src={cover_image_url} 
                  alt={`${client} project cover`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-slate-800/30 flex items-center justify-center">
                  <span className="text-slate-500 text-sm">Project Image</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Render 1-1ContentCol variant (Text-heavy content)
  if (variant === '1-1ContentCol') {
    return (
      <Card className={baseCardClass}>
        <CardContent className="p-12 h-full">
          <div className="h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              {content && (
                <p className="text-[#E5EDDF] text-lg leading-relaxed opacity-90">
                  {content}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Render 3-5ContentCol variant (Multi-column content)
  if (variant === '3-5ContentCol') {
    return (
      <Card className={baseCardClass}>
        <CardContent className="p-12 h-full">
          <div className="h-full flex items-center">
            <div className="grid grid-cols-2 gap-12 w-full">
              <div>
                <h4 className="text-[#E5EDDF] text-lg font-semibold mb-4 opacity-90">
                  Challenge
                </h4>
                <p className="text-[#E5EDDF] text-base leading-relaxed opacity-75">
                  {content || "Project challenge description goes here..."}
                </p>
              </div>
              <div>
                <h4 className="text-[#E5EDDF] text-lg font-semibold mb-4 opacity-90">
                  Outcome
                </h4>
                <p className="text-[#E5EDDF] text-base leading-relaxed opacity-75">
                  {description || "Project outcome and results go here..."}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Render 3-5ImageContent variant (Image + content combination)
  if (variant === '3-5ImageContent') {
    return (
      <Card className={baseCardClass}>
        <CardContent className="p-0 h-full">
          <div className="h-full flex">
            {/* Content Section */}
            <div className="w-2/5 p-12 flex flex-col justify-center">
              {title && (
                <h4 className="text-[#E5EDDF] text-xl font-bold mb-6">
                  {title}
                </h4>
              )}
              {content && (
                <p className="text-[#E5EDDF] text-base leading-relaxed opacity-85">
                  {content}
                </p>
              )}
            </div>

            {/* Image Section */}
            <div className="w-3/5 relative">
              {project_image_url ? (
                <Image 
                  src={project_image_url} 
                  alt={`${client} project detail`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-slate-800/30 flex items-center justify-center">
                  <span className="text-slate-500 text-sm">Project Detail Image</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Render DesignQuestion variant ("How might we..." sections)
  if (variant === 'DesignQuestion') {
    return (
      <Card className={baseCardClass}>
        <CardContent className="p-12 h-full">
          <div className="h-full flex flex-col justify-center">
            <div className="text-center max-w-3xl mx-auto">
              <div className="mb-8">
                <span className="text-[#E5EDDF] text-sm font-mono opacity-50 tracking-wider">
                  DESIGN QUESTION
                </span>
              </div>
              <h3 className="text-[#E5EDDF] text-3xl font-bold leading-tight mb-6">
                {hmw_line || "How might we..."}
              </h3>
              {content && (
                <p className="text-[#E5EDDF] text-lg leading-relaxed opacity-75">
                  {content}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Fallback - should not reach here
  return (
    <Card className={baseCardClass}>
      <CardContent className="p-12 h-full flex items-center justify-center">
        <div className="text-center text-slate-400">
          <p>Unknown variant: {variant}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;