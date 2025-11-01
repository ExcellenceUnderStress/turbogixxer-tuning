interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div>
      <div className="text-4xl font-bold text-blue-500 mb-2">{value}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
}
