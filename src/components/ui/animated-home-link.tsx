'use client'

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface AnimatedHomeLinkProps {
  className?: string;
}

export function AnimatedHomeLink({ className = "" }: AnimatedHomeLinkProps) {
  return (
    <Link 
      href="/" 
      className={`group relative overflow-hidden inline-flex items-center font-mono text-base tracking-[-0.8px] hover:opacity-80 transition-opacity ${className}`}
    >
      <div className="mr-2 w-4 h-4 rounded-sm z-10 flex items-center justify-center transition-all duration-500 bg-white group-hover:w-16 group-hover:absolute group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:mr-0 group-active:scale-95">
        <ChevronLeft size={16} strokeWidth={2} className="text-[#404b51]" aria-hidden="true" />
      </div>
      <span className="relative z-20 transition-opacity duration-500 group-hover:opacity-0">
        HOME
      </span>
    </Link>
  );
} 