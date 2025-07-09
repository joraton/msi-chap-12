import { Clock, Users, BookOpen } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="mb-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <span>Accueil</span>
        <span className="mx-2">{'>'}</span>
        <span>Cours</span>
        <span className="mx-2">{'>'}</span>
        <span className="text-blue-600">Découpage des Projets</span>
      </nav>

      {/* Course Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-start gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 rounded-xl p-4 flex-shrink-0">
            <BookOpen className="h-12 w-12" />
          </div>

          {/* Course Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-3">
              CHAPITRE 12 : LE DÉCOUPAGE DES PROJETS
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Maîtrisez les méthodes de découpage de projets, de la planification classique aux approches agiles, 
              avec les outils d&apos;ordonnancement et de gestion des délais.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 rounded-full px-4 py-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">Expert</span>
              </div>
              <div className="bg-white/20 rounded-full px-4 py-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">4h 15min</span>
              </div>
              <div className="bg-white/20 rounded-full px-4 py-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">3 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}