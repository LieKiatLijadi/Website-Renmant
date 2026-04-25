import { LucideIcon } from 'lucide-react';

interface EnvironmentalIssueProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export function EnvironmentalIssue({ title, description, image, icon: Icon }: EnvironmentalIssueProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-full">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-emerald-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
