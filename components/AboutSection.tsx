import React from 'react';

export interface AboutSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  showDivider?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  children,
  className = '',
  showDivider = true
}) => {
  return (
    <>
      <div className={`mb-8 ${className}`}>
        {title && (
          <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
        )}
        <div className="text-lg text-gray-300 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
      {showDivider && <div className="border-t border-gray-700 my-8"></div>}
    </>
  );
};

export default AboutSection;
