import { Target } from 'lucide-react';
import SectionBlock from './SectionBlock';

export default function CoursePlan() {
  const sections = [
    {
      title: 'Introduction',
      description: 'Concepts de base et définitions du découpage de projets',
      href: '/introduction',
      icon: 'Rocket',
      color: 'blue'
    },
    {
      title: 'Section I - Le Découpage du Projet',
      description: 'Découpage classique, méthodes en cascade et en V, approches agiles',
      href: '/section-1',
      icon: 'BarChart3',
      color: 'green'
    },
    {
      title: 'Section II - Les Délais',
      description: 'Contenu du projet, PBS, WBS, OBS et ordonnancement',
      href: '/section-2',
      icon: 'Cog',
      color: 'purple'
    },
    {
      title: 'Section III - Planification',
      description: 'Diagrammes de Gantt, méthode des potentiels et exercices pratiques',
      href: '/section-3',
      icon: 'Users',
      color: 'indigo'
    },
    {
      title: 'Quiz',
      description: 'Évaluation interactive de vos connaissances',
      href: '/quiz',
      icon: 'HelpCircle',
      color: 'orange'
    },
    {
      title: 'Cas pratique',
      description: 'Exercices pratiques et cas concrets d&apos;examen',
      href: '/questions-dscg',
      icon: 'Award',
      color: 'red'
    },
    {
      title: 'cas ia',
      description: 'Documents détaillés du cas GED - Sujet complet avec méthodologie et organisation',
      href: '/annexes',
      icon: 'FileText',
      color: 'blue'
    },
    {
      title: 'Questions DSCG Exhaustives',
      description: 'Collection complète des questions et corrections du DSCG UE5 (2016-2023) liées au découpage et à la conduite de projet.',
      href: '/questions-dscg-exhaustives',
      icon: 'BookOpen',
      color: 'red'
    }
  ];

  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Target className="h-8 w-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Plan du cours</h2>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Suivez ce parcours structuré pour maîtriser les techniques de découpage et de planification de projets
        </p>
      </div>

      {/* Sections Grid */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={index}
            title={section.title}
            description={section.description}
            href={section.href}
            icon={section.icon}
            color={section.color}
          />
        ))}
      </div>
    </div>
  );
}