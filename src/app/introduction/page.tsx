import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BookOpen, Target } from 'lucide-react';
import Link from 'next/link';

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 rounded-xl p-3">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Introduction</h1>
              <p className="text-gray-600">Concepts de base du découpage de projets</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Objectifs d&apos;apprentissage
              </h2>
              <ul className="text-blue-800 space-y-2">
                <li>• Comprendre les enjeux du découpage de projets</li>
                <li>• Distinguer les approches classiques et agiles</li>
                <li>• Maîtriser les outils de planification</li>
                <li>• Appliquer les méthodes d&apos;ordonnancement</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu&apos;est-ce que le découpage de projets ?</h2>
            
            <p className="text-gray-700 mb-6">
              Le découpage de projets est une méthode fondamentale de gestion qui consiste à <strong>décomposer une tâche complexe en étapes intermédiaires</strong> plus facilement gérables. Cette approche permet de :
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">Avantages du découpage</h3>
                <ul className="text-green-800 space-y-2">
                  <li>• Meilleure visibilité sur l&apos;avancement</li>
                  <li>• Réduction des risques</li>
                  <li>• Facilitation de la planification</li>
                  <li>• Amélioration de la communication</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-3">Défis à relever</h3>
                <ul className="text-orange-800 space-y-2">
                  <li>• Éviter l&apos;effet tunnel</li>
                  <li>• Gérer les interdépendances</li>
                  <li>• Adapter aux changements</li>
                  <li>• Maintenir la cohérence globale</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les 5 grandes étapes d&apos;un projet</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold">Le Cadrage</h3>
                  <p className="text-gray-600">Définition des objectifs, périmètre et contraintes</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold">La Conception</h3>
                  <p className="text-gray-600">Élaboration des spécifications et de l&apos;architecture</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold">La Conduite</h3>
                  <p className="text-gray-600">Réalisation et développement du projet</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold">La Clôture</h3>
                  <p className="text-gray-600">Livraison, tests et validation finale</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-semibold">La Maintenance</h3>
                  <p className="text-gray-600">Support, évolutions et corrections</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="font-semibold text-yellow-900 mb-3">💡 Moyen mnémotechnique</h3>
              <p className="text-yellow-800">
                <strong>&quot;Ca-Co-Co-Cl-Ma&quot;</strong> : <em>&quot;Ça commence comme ça, ça clôture ma&quot;</em>
                <br />
                <span className="text-sm">Cadrage → Conception → Conduite → Clôture → Maintenance</span>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Évolution des méthodes</h2>
            
            <p className="text-gray-700 mb-6">
              Les méthodes de gestion de projet ont considérablement évolué. Des approches <strong>classiques séquentielles</strong> 
              (cascade, V) vers les méthodes <strong>agiles itératives</strong>, chaque approche répond à des contextes spécifiques.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Dans ce cours, vous découvrirez :</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-blue-600 mb-2">Méthodes Classiques</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Modèle en cascade</li>
                    <li>• Modèle en V</li>
                    <li>• Planification prédictive</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-600 mb-2">Méthodes Agiles</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Approche itérative</li>
                    <li>• Développement incrémental</li>
                    <li>• Collaboration renforcée</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4">⚠️ Gestion des Risques dans le Découpage</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-red-900 mb-4">Risques liés au découpage</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-800 mb-3">Risques de sur-découpage :</h4>
                      <ul className="text-red-700 space-y-2 text-sm">
                        <li>• <strong>Complexité administrative</strong> : trop de tâches à suivre</li>
                        <li>• <strong>Coût de coordination</strong> : temps excessif en réunions</li>
                        <li>• <strong>Perte de vue d&apos;ensemble</strong> : focus sur les détails</li>
                        <li>• <strong>Démotivation des équipes</strong> : micro-management</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-red-800 mb-3">Risques de sous-découpage :</h4>
                      <ul className="text-red-700 space-y-2 text-sm">
                        <li>• <strong>Manque de visibilité</strong> : difficultés de suivi</li>
                        <li>• <strong>Estimation imprécise</strong> : dérapages budgétaires</li>
                        <li>• <strong>Identification tardive des problèmes</strong></li>
                        <li>• <strong>Difficultés d&apos;affectation des ressources</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-red-900 mb-4">Stratégies de mitigation</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-red-800 mb-2">1. Découpage adaptatif</h4>
                      <p className="text-red-700 text-sm mb-2">
                        Commencer par un découpage de haut niveau et affiner progressivement :
                      </p>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Phases principales → Lots de travaux → Tâches détaillées</li>
                        <li>• Révision régulière de la granularité</li>
                        <li>• Ajustement selon les retours d&apos;expérience</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-red-800 mb-2">2. Règles de découpage</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• <strong>Règle des 8/80 heures</strong> : tâche entre 8h et 80h</li>
                        <li>• <strong>Règle des 2 semaines</strong> : durée max d&apos;une tâche</li>
                        <li>• <strong>Responsabilité unique</strong> : un responsable par tâche</li>
                        <li>• <strong>Livrables identifiables</strong> : résultat mesurable</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-red-800 mb-2">3. Points de contrôle</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Jalons de validation à chaque niveau</li>
                        <li>• Revues de découpage avec les parties prenantes</li>
                        <li>• Métriques de suivi (nombre de tâches, charge, etc.)</li>
                        <li>• Feedback des équipes opérationnelles</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-red-900 mb-4">Indicateurs d&apos;alerte</h3>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-red-50 p-4 rounded">
                      <h4 className="font-medium text-red-800 mb-2">Complexité</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• &gt; 500 tâches</li>
                        <li>• &gt; 5 niveaux WBS</li>
                        <li>• &gt; 50% temps en coordination</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded">
                      <h4 className="font-medium text-red-800 mb-2">Granularité</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Tâches &lt; 4h ou &gt; 160h</li>
                        <li>• Durée &gt; 1 mois</li>
                        <li>• Estimation ± 50%</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded">
                      <h4 className="font-medium text-red-800 mb-2">Pilotage</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Retards non détectés</li>
                        <li>• Ressources non affectées</li>
                        <li>• Livrables flous</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="font-semibold text-green-900 mb-3">🎯 Points clés à retenir</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Le découpage est la base de tout projet réussi</li>
                <li>• Il permet une meilleure maîtrise des délais, coûts et qualité</li>
                <li>• L&apos;approche doit être adaptée au contexte (classique vs agile)</li>
                <li>• La granularité du découpage influence directement le pilotage</li>
                <li>• Un bon découpage équilibre visibilité et simplicité de gestion</li>
                <li>• Les risques de sur/sous-découpage doivent être anticipés</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <div></div>
            <Link 
              href="/section-1" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Section I - Le Découpage du Projet
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}