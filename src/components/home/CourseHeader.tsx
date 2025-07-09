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
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 rounded-xl p-3 sm:p-4 flex-shrink-0 mx-auto sm:mx-0">
            <BookOpen className="h-8 w-8 sm:h-12 sm:w-12" />
          </div>

          {/* Course Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
              CHAPITRE 12 : LE DÉCOUPAGE DES PROJETS
            </h1>
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
              Maîtrisez les méthodes de découpage de projets, de la planification classique aux approches agiles, 
              avec les outils d&apos;ordonnancement et de gestion des délais.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
              <div className="bg-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">Expert</span>
              </div>
              <div className="bg-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">4h 15min</span>
              </div>
              <div className="bg-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">3 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}