import React from 'react';

interface ServiceCardProps {
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
      className={`w-full h-auto md:h-[552px] text-[#e5eddf] rounded-[15px] p-6 md:p-[49px] flex flex-col md:flex-row justify-between font-sans`} 
      style={{ backgroundColor: bgColor }}
    >
      {/* "Left" Column Content (Top on mobile) */}
      <div className="w-full md:w-[338px] flex flex-col justify-between mb-8 md:mb-0">
        <div>
          <div className="font-mono text-base tracking-[-0.8px] mb-8 md:mb-12">{serviceNumber}</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-2.5px] leading-[45px]" dangerouslySetInnerHTML={{ __html: title }}></h2>
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-[-1px] mb-2.5">Ideal for:</h3>
          <p className="font-mono text-base tracking-[-0.8px]">{idealFor.join(', ')}</p>
        </div>
      </div>

      {/* "Right" Column Content (Bottom on mobile) */}
      <div className="w-full md:w-[432px]">
        <div className="mb-[15px]">
          <h3 className="font-bold text-lg tracking-[-0.9px] leading-[22px]">{description.heading}</h3>
          <p className="text-base tracking-[-0.9px] leading-[22px] mb-4">{description.body}</p>
          <h3 className="font-bold text-lg tracking-[-0.9px] leading-[22px]">{description.subheading}</h3>
          <p className="text-base tracking-[-0.9px] leading-[22px]">{description.subbody}</p>
        </div>
        {/* This part should stay as a row on all screens */}
        <div className="flex flex-row justify-between gap-4">
          <div className="w-1/2">
            <h4 className="text-xl font-bold tracking-[-1px] mb-2.5">Questions we explore</h4>
            <ul className="list-disc pl-5 text-sm tracking-[-0.7px] leading-[18px] space-y-1">
              {questions.map((q, i) => <li key={i}>{q}</li>)}
            </ul>
          </div>
          <div className="w-1/2">
            <h4 className="text-xl font-bold tracking-[-1px] mb-2.5">Things we might do</h4>
            <ul className="list-disc pl-5 text-sm tracking-[-0.7px] leading-[18px] space-y-1">
              {activities.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;