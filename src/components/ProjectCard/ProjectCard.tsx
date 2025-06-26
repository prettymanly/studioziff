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
  className?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  variant,
  overline,
  title,
  image,
  hmw,
  swipeToRead,
  leftContent,
  rightContent,
  className,
}) => {
  const containerClasses = `w-full md:w-[902px] h-full bg-white rounded-[15px] p-8 md:p-[50px] flex ${className || ''}`;

  switch (variant) {
    case 'ProjectCover':
      return (
        <div className={`${containerClasses} flex-col md:flex-row md:items-center md:justify-between`}>
          <div className="flex flex-col justify-between h-full md:w-[392px] mb-10 md:mb-0">
            <div>
              <p className="font-mono text-sm md:text-base text-[#404b51] tracking-[-0.8px] mb-6 md:mb-0">{overline}</p>
              <h2 
                className="font-sans text-[40px] md:text-5xl font-bold text-[#404b51] tracking-[-2px] md:tracking-[-2.5px] leading-[1.1] md:leading-[45px] mt-0 md:mt-10"
                dangerouslySetInnerHTML={{ __html: title || '' }}
              />
            </div>
            {swipeToRead && (
              <p className="font-sans text-lg md:text-2xl font-bold text-[#404b51] tracking-[-0.8px] md:tracking-[-1.15px] mt-6 md:mt-0">
                Swipe <span className="font-normal">to</span> read the case →
              </p>
            )}
          </div>
          {image && (
            <div className="w-full md:w-[410px] h-[300px] md:h-[580px] bg-[#d9d9d9] rounded-[15px] relative shrink-0">
              <Image src={image} alt={title || 'Project Image'} fill className="rounded-[15px] object-cover" />
            </div>
          )}
        </div>
      );

    case '1:1ContentCol':
      return (
        <div className={`${containerClasses} flex-col`}>
          <p className="font-mono text-sm md:text-base text-[#404b51] tracking-[-0.8px] mb-6 md:mb-5">{overline}</p>
          <div className="flex flex-col md:flex-row flex-1 gap-8 md:gap-5">
            <div className="w-full md:w-1/2">
              <h3 className="font-sans text-lg md:text-lg font-bold text-[#404b51] mb-3 md:mb-2">{leftContent?.title}</h3>
              <div className="font-sans text-base md:text-lg text-[#404b51] leading-[1.5] md:leading-[22px] space-y-3 md:space-y-4">
                <p dangerouslySetInnerHTML={{ __html: leftContent?.body || '' }} />
                {leftContent?.list && (
                  <ul className="list-disc pl-5 space-y-2 md:space-y-2">
                    {leftContent.list.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }} />)}
                  </ul>
                )}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-sans text-lg md:text-lg font-bold text-[#404b51] mb-3 md:mb-2">{rightContent?.title}</h3>
              <p className="font-sans text-base md:text-lg text-[#404b51] leading-[1.5] md:leading-[22px]" dangerouslySetInnerHTML={{ __html: rightContent?.body || '' }}/>
            </div>
          </div>
        </div>
      );

    case '3:5ContentCol':
        return (
            <div className={`${containerClasses} flex-col`}>
                <p className="font-mono text-sm md:text-base text-[#404b51] tracking-[-0.8px] mb-6 md:mb-5">{overline}</p>
                <div className="flex flex-col md:flex-row flex-1 gap-8 md:gap-5">
                    <div className="w-full md:w-[287px] md:flex-shrink-0 mb-6 md:mb-0">
                        <p className="font-sans text-base md:text-lg text-[#404b51] leading-[1.5] md:leading-[22px]" dangerouslySetInnerHTML={{ __html: leftContent?.body || '' }} />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-sans text-lg md:text-lg font-bold text-[#404b51] mb-3 md:mb-2">{rightContent?.title}</h3>
                        <div className="font-sans text-base md:text-lg text-[#404b51] leading-[1.5] md:leading-[22px] space-y-3 md:space-y-4">
                           <p dangerouslySetInnerHTML={{ __html: rightContent?.body || '' }} />
                        </div>
                    </div>
                </div>
            </div>
        );

    case '3:5ImageContent':
        return (
            <div className={`${containerClasses} flex-col`}>
                <p className="font-mono text-sm md:text-base text-[#404b51] tracking-[-0.8px] mb-6 md:mb-5">{overline}</p>
                <div className="flex flex-col md:flex-row flex-1 gap-8 md:gap-5">
                    {image && (
                        <div className="w-full md:w-72 h-[150px] md:h-[226px] bg-[#d9d9d9] rounded-[15px] relative md:flex-shrink-0 order-1 md:order-1 mb-6 md:mb-5">
                          <Image src={image} alt={title || 'Project Image'} fill className="rounded-[15px] object-cover" />
                        </div>
                    )}
                    <div className="flex-1 order-2 md:order-2">
                        <h3 className="font-sans text-lg md:text-lg font-bold text-[#404b51] mb-3 md:mb-2">{rightContent?.title}</h3>
                         <div className="font-sans text-base md:text-lg text-[#404b51] leading-[1.5] md:leading-[22px] space-y-3 md:space-y-4">
                           <p dangerouslySetInnerHTML={{ __html: rightContent?.body || '' }} />
                            {rightContent?.list && (
                                <ul className="list-disc pl-5 space-y-2 md:space-y-2">
                                    {rightContent.list.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }} />)}
                                </ul>
                            )}
                            {rightContent?.additionalBody && (
                                <p dangerouslySetInnerHTML={{ __html: rightContent.additionalBody }} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );


    case 'HMW':
      return (
        <div className={containerClasses}>
          {/* Inner Container with Image Background and Black Overlay */}
          <div className="w-full h-full rounded-[15px] overflow-hidden relative flex items-center justify-center">
            {/* Background Image */}
            <Image 
              src={image || '/images/intro-image.png'} 
              alt="HMW Background" 
              fill 
              className="object-cover" 
            />
            
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>
            
            {/* Text Content */}
            <h2 className="relative z-10 font-sans text-3xl md:text-6xl text-white text-center leading-[1.1] md:leading-[1.1] tracking-[-1.5px] md:tracking-[-2.5px] px-4 md:px-8 max-w-[90%]">
              {hmw}
            </h2>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default ProjectCard;