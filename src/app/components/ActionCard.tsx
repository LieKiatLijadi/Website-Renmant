import { LucideIcon } from 'lucide-react';

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ActionCard({ icon: Icon, title, description }: ActionCardProps) {
  return (
    <div className="bg-emerald-800 hover:bg-emerald-700 p-6 rounded-xl transition-all duration-300 transform hover:scale-105 border border-emerald-700">
      <div className="mb-4">
        <Icon className="w-10 h-10 text-emerald-400" />
      </div>
      <h4 className="mb-3 text-white">{title}</h4>
      <p className="text-emerald-200 leading-relaxed">{description}</p>
    </div>
  );
}
