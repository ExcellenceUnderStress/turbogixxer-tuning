interface ServicePillarProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServicePillar({ icon, title, description }: ServicePillarProps) {
  return (
    <div className="text-center">
      <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
