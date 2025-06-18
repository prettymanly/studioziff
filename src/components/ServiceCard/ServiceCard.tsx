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
    <div className={`w-[902px] h-[552px] text-[#e5eddf] rounded-[15px] p-[49px] flex justify-between font-sans`} style={{ backgroundColor: bgColor }}>
      {/* Left Column */}
      <div className="flex flex-col justify-between w-[338px]">
        <div>
          <div className="font-mono text-base tracking-[-0.8px] mb-20">{serviceNumber}</div>
          <h2 className="text-5xl font-bold tracking-[-2.5px] leading-[45px]" dangerouslySetInnerHTML={{ __html: title }}></h2>
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-[-1px] mb-2.5">Ideal for:</h3>
          <p className="font-mono text-base tracking-[-0.8px]">{idealFor.join(', ')}</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-[432px]">
        <div className="mb-[15px]">
          <h3 className="font-bold text-lg tracking-[-0.9px] leading-[22px]">{description.heading}</h3>
          <p className="text-base tracking-[-0.9px] leading-[22px] mb-4">{description.body}</p>
          <h3 className="font-bold text-lg tracking-[-0.9px] leading-[22px]">{description.subheading}</h3>
          <p className="text-base tracking-[-0.9px] leading-[22px]">{description.subbody}</p>
        </div>
        <div className="flex justify-between">
          <div className="w-[211px]">
            <h4 className="text-xl font-bold tracking-[-1px] mb-2.5">Questions we explore</h4>
            <ul className="list-disc pl-5 text-sm tracking-[-0.7px] leading-[18px] space-y-1">
              {questions.map((q, i) => <li key={i}>{q}</li>)}
            </ul>
          </div>
          <div className="w-[211px]">
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