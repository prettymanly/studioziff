'use client';

import Image from 'next/image';

export type ProjectCardProps = {
  variant: 'ProjectCover' | '3:5ContentCol' | '1:1ContentCol' | '3:5ImageContent' | 'HMW';
  overline: string;
  title?: string;
  description?: string;
  image?: string;
  hmw?: string;
  swipeToRead?: boolean;
  leftContent?: {
    title?: string;
    body: string;
    list?: string[];
  };
  rightContent?: {
    title?: string;
    body: string;
    list?: string[];
    additionalBody?: string;
  };
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  variant,
  overline,
  title,
  description,
  image,
  hmw,
  swipeToRead,
  leftContent,
  rightContent,
}) => {
  switch (variant) {
    case 'ProjectCover':
      return (
        <div className="w-[902px] h-[552px] bg-white rounded-[15px] p-[50px] flex items-center justify-between">
          <div className="flex flex-col justify-between h-full w-[392px]">
            <div>
              <p className="font-mono text-base text-[#404b51] tracking-[-0.8px]">{overline}</p>
              <h2 
                className="font-sans text-5xl font-bold text-[#404b51] tracking-[-2.5px] leading-[45px] mt-10"
                dangerouslySetInnerHTML={{ __html: title || '' }}
              />
            </div>
            {swipeToRead && (
              <p className="font-sans text-2xl font-bold text-[#404b51] tracking-[-1.15px]">
                Swipe <span className="font-normal">to</span> read the case →
              </p>
            )}
          </div>
          {image && (
            <div className="w-[410px] h-full bg-[#d9d9d9] rounded-[15px] relative">
              <Image src={image} alt={title || 'Project Image'} fill className="rounded-[15px] object-cover" />
            </div>
          )}
        </div>
      );

    case '1:1ContentCol':
      return (
        <div className="w-[902px] h-[552px] bg-white rounded-[15px] p-[50px] flex flex-col">
          <p className="font-mono text-base text-[#404b51] tracking-[-0.8px] mb-5">{overline}</p>
          <div className="flex flex-1 gap-5">
            <div className="w-1/2">
              <h3 className="font-sans text-lg font-bold text-[#404b51] mb-2">{leftContent?.title}</h3>
              <div className="font-sans text-lg text-[#404b51] leading-[22px] space-y-4">
                <p dangerouslySetInnerHTML={{ __html: leftContent?.body || '' }} />
                {leftContent?.list && (
                  <ul className="list-disc pl-5 space-y-2">
                    {leftContent.list.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }} />)}
                  </ul>
                )}
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="font-sans text-lg font-bold text-[#404b51] mb-2">{rightContent?.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: rightContent?.body || '' }}/>
            </div>
          </div>
        </div>
      );

    case '3:5ContentCol':
        return (
            <div className="w-[902px] h-[552px] bg-white rounded-[15px] p-[50px] flex flex-col">
                <p className="font-mono text-base text-[#404b51] tracking-[-0.8px] mb-5">{overline}</p>
                <div className="flex flex-1 gap-5">
                    <div className="w-[287px] flex-shrink-0">
                        <p className="font-sans text-lg text-[#404b51] leading-[22px]">
                            {leftContent?.body}
                        </p>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-sans text-lg font-bold text-[#404b51] mb-2">{rightContent?.title}</h3>
                        <div className="font-sans text-lg text-[#404b51] leading-[22px] space-y-4">
                           <p dangerouslySetInnerHTML={{ __html: rightContent?.body || '' }} />
                        </div>
                    </div>
                </div>
            </div>
        );

    case '3:5ImageContent':
        return (
            <div className="w-[902px] h-[552px] bg-white rounded-[15px] p-[50px] flex flex-col">
                <p className="font-mono text-base text-[#404b51] tracking-[-0.8px] mb-5">{overline}</p>
                <div className="flex flex-1 gap-5">
                    {image && (
                        <div className="w-72 h-full bg-[#d9d9d9] rounded-[15px] relative flex-shrink-0">
                          <Image src={image} alt={title || 'Project Image'} fill className="rounded-[15px] object-cover" />
                        </div>
                    )}
                    <div className="flex-1">
                        <h3 className="font-sans text-lg font-bold text-[#404b51] mb-2">{rightContent?.title}</h3>
                         <div className="font-sans text-lg text-[#404b51] leading-[22px] space-y-4">
                           <p>{rightContent?.body}</p>
                            {rightContent?.list && (
                                <ul className="list-disc pl-5 space-y-2">
                                    {rightContent.list.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }} />)}
                                </ul>
                            )}
                            {rightContent?.additionalBody && (
                                <p>{rightContent.additionalBody}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );


    case 'HMW':
      return (
        <div className="w-[902px] h-[552px] bg-[#6a8f7b] rounded-[15px] p-[50px] flex items-center justify-center">
          <h2 className="font-sans text-5xl text-white text-center leading-[50px] tracking-[-2.5px] max-w-[676px]">
            {hmw}
          </h2>
        </div>
      );

    default:
      return null;
  }
};

export default ProjectCard;