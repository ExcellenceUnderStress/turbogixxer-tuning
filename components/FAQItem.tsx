'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-750 transition bg-gray-800"
      >
        <span className="font-semibold text-base text-white pr-8">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-blue-500 flex-shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-300 leading-relaxed bg-gray-750">
          {answer}
        </div>
      )}
    </div>
  );
}
