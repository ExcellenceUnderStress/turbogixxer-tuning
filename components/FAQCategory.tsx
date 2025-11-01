'use client';

import { useState } from 'react';
import { FAQItem } from './FAQItem';

export interface FAQ {
  q: string;
  a: string;
}

interface FAQCategoryProps {
  category: string;
  icon: string;
  questions: FAQ[];
  categoryIndex: number;
}

export function FAQCategory({ category, icon, questions, categoryIndex }: FAQCategoryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h2 className="text-2xl font-bold text-white">{category}</h2>
      </div>
      <div className="space-y-3">
        {questions.map((faq, faqIndex) => (
          <FAQItem
            key={faqIndex}
            question={faq.q}
            answer={faq.a}
            isOpen={openIndex === faqIndex}
            onToggle={() => setOpenIndex(openIndex === faqIndex ? null : faqIndex)}
          />
        ))}
      </div>
    </div>
  );
}
