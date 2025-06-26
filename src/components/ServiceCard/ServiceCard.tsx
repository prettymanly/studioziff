import React from 'react';

export interface ServiceCardProps {
  serviceNumber: string;
  title: string;
  description: {
    heading: string;
    body: string;
    subheading: string;
    subbody: string;
  };
  questions: string[];
  activities: string[];
  idealFor: string[];
  bgColor: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  serviceNumber,
  title,
  description,
  questions,
  activities,
  idealFor,
  bgColor,
}) => {
  return (
    <div 
      className={`w-full h-auto md:h-[552px] text-[#e5eddf] rounded-[15px] p-8 md:p-[56px] flex flex-col md:flex-row justify-between font-sans`} 
      style={{ backgroundColor: bgColor }}
    >
      {/* "Left" Column Content (Top on mobile) */}
      <div className="w-full md:w-[338px] flex flex-col justify-between mb-12 md:mb-0">
        <div>
          <div className="font-mono text-sm md:text-base tracking-[-0.5px] mb-10 md:mb-16 opacity-90">{serviceNumber}</div>
          <h2 className="text-[40px] md:text-[52px] font-bold tracking-[-2.8px] leading-[1.1] md:leading-[0.9] md:-mt-[46px]" dangerouslySetInnerHTML={{ __html: title }}></h2>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-lg md:text-xl font-bold tracking-[-0.8px] mb-3 leading-tight">Ideal for:</h3>
          <p className="font-mono text-sm md:text-base tracking-[-0.4px] leading-relaxed opacity-95">{idealFor.join(', ')}</p>
        </div>
      </div>

      {/* "Right" Column Content (Bottom on mobile) */}
      <div className="w-full md:w-[432px]">
        <div className="mb-8 md:mb-10">
          <h3 className="font-bold text-xl md:text-[22px] tracking-[-1px] leading-tight mb-4">{description.heading}</h3>
          <p className="text-base md:text-[17px] tracking-[-0.4px] leading-[19px] mb-6 max-w-none md:max-w-[400px]">{description.body}</p>
          {description.subheading && (
            <>
              <h3 className="font-bold text-lg md:text-xl tracking-[-0.8px] leading-tight mb-3">{description.subheading}</h3>
              <p className="text-base md:text-[17px] tracking-[-0.4px] leading-[1.6] max-w-none md:max-w-[400px]">{description.subbody}</p>
            </>
          )}
        </div>
        {/* This part should stay as a row on all screens */}
        <div className="flex flex-row justify-between gap-6 md:gap-8">
          <div className="w-1/2">
            <h4 className="text-lg md:text-xl font-bold tracking-[-0.8px] mb-4 leading-tight">Questions we explore</h4>
            <ul className="list-disc pl-5 text-sm md:text-[15px] tracking-[-0.3px] leading-[1.5] space-y-2">
              {questions.map((q, i) => <li key={i} className="pl-1">{q}</li>)}
            </ul>
          </div>
          <div className="w-1/2">
            <h4 className="text-lg md:text-xl font-bold tracking-[-0.8px] mb-4 leading-tight">Things we might do</h4>
            <ul className="list-disc pl-5 text-sm md:text-[15px] tracking-[-0.3px] leading-[1.5] space-y-2">
              {activities.map((a, i) => <li key={i} className="pl-1">{a}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;