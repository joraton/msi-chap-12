'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, BarChart3, Cog, Users, HelpCircle, Award, FileText, BookOpen } from 'lucide-react';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  buttonText?: string;
}

const iconMap = {
  Rocket,
  BarChart3,
  Cog,
  Users,
  HelpCircle,
  Award,
  FileText,
  BookOpen
};

export default function SectionBlock({
  title,
  description,
  href,
  icon,
  color,
  buttonText = 'Commencer'
}: SectionBlockProps) {
  const Icon = iconMap[icon as keyof typeof iconMap];
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    green: 'bg-green-100 text-green-600 border-green-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200',
    red: 'bg-red-100 text-red-600 border-red-200',
    indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200'
  };

  const buttonColorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
    orange: 'bg-orange-600 hover:bg-orange-700',
    red: 'bg-red-600 hover:bg-red-700',
    indigo: 'bg-indigo-600 hover:bg-indigo-700'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 w-full">
          {/* Icon */}
          <div className={`rounded-full p-2.5 sm:p-3 flex-shrink-0 ${colorClasses[color as keyof typeof colorClasses]}`}>
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 leading-tight">{title}</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Button */}
        <Link
          href={href}
          className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-white font-medium rounded-lg transition-colors text-center text-sm sm:text-base ${
            buttonColorClasses[color as keyof typeof buttonColorClasses]
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </motion.div>
  );
}