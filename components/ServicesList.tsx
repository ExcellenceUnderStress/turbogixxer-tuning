import React from 'react';

export interface Service {
  title: string;
  description: string;
}

export interface ServicesListProps {
  services: Service[];
  bulletColor?: string;
}

const ServicesList: React.FC<ServicesListProps> = ({
  services,
  bulletColor = 'text-blue-500'
}) => {
  return (
    <ul className="space-y-3 text-gray-300">
      {services.map((service, index) => (
        <li key={index} className="flex items-start">
          <span className={`${bulletColor} font-semibold mr-2`}>•</span>
          <div>
            <strong className="text-white">{service.title}</strong>
            {service.description && ` – ${service.description}`}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
