import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Cog, Clock, Users, BarChart, Target } from 'lucide-react';
import Link from 'next/link';

export default function Section2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 rounded-xl p-3">
              <Cog className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section II - Les Délais</h1>
              <p className="text-gray-600">Contenu du projet, PBS, WBS, OBS et ordonnancement</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="h-7 w-7 text-purple-600" />
              A) Le Contenu du Projet
            </h2>
            
            <p className="text-gray-700 mb-6">
              La détermination d&apos;un délai est toujours une tâche complexe pour un projet car quel que soit le projet, 
              il existe un <strong>aspect unique</strong> qui nécessite une étude au cas par cas.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <h3 className="font-semibold text-purple-900 mb-3">Principe fondamental</h3>
              <p className="text-purple-800">
                Le délai total envisageable découle directement de la <strong>taille du projet</strong>, 
                c&apos;est-à-dire de l&apos;ampleur des tâches à réaliser. La délimitation du contenu du projet 
                repose sur <strong>3 documents de travail complémentaires</strong>.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Document 1 : Le PBS (Product Breakdown Structure)</h3>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Organigramme Technique du Produit
              </h4>
              <p className="text-blue-800 mb-4">
                Le PBS détaille de façon <strong>hiérarchisée les livrables du projet</strong> 
                selon le principe d&apos;une arborescence.
              </p>
              
              <div className="bg-blue-100 p-4 rounded">
                <h5 className="font-medium text-blue-900 mb-2">Exemple : Logiciel de gestion des titres</h5>
                <div className="space-y-2 text-blue-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Base des valeurs mobilières</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Module gestion des ordres (carnet, historique, achat/vente)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Module comptabilisation (acquisition, cession, plus-value)</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Document 2 : Le WBS (Work Breakdown Structure)</h3>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                Structure de Décomposition du Travail
              </h4>
              <p className="text-green-800 mb-4">
                Un WBS présente les grandes composantes d&apos;un projet en terme de <strong>tâches à réaliser</strong>, 
                présenté sous forme d&apos;arborescence hiérarchisée. Il permet de décomposer toujours plus finement 
                la nature des tâches nécessaires à la réalisation d&apos;un projet.
              </p>
              
              <div className="bg-green-100 p-4 rounded">
                <h5 className="font-medium text-green-900 mb-3">Caractéristiques du WBS :</h5>
                <ul className="text-green-800 space-y-1">
                  <li>• Se focalise sur les <strong>tâches</strong> correspondant à un projet</li>
                  <li>• Met en avant les tâches nécessaires pour obtenir les éléments d&apos;un PBS</li>
                  <li>• Décomposition hiérarchique des activités</li>
                  <li>• Base pour l&apos;estimation des délais et ressources</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Document 3 : L&apos;OBS (Organisation Breakdown Structure)</h3>
            
            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Structure de Décomposition de l&apos;Organisation
              </h4>
              <p className="text-orange-800 mb-4">
                L&apos;OBS reprend le WBS et fait apparaître les <strong>noms des personnes responsables</strong> 
                de la production des différents éléments.
              </p>
              
              <div className="bg-orange-100 p-4 rounded">
                <h5 className="font-medium text-orange-900 mb-3">Matrice RACI :</h5>
                <p className="text-orange-800 mb-3">
                  Pour chaque tâche, une matrice RACI sera élaborée, permettant d&apos;identifier 
                  les différentes ressources humaines concernées :
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-red-500 text-white rounded px-2 py-1 text-sm font-bold">R</div>
                      <span className="text-orange-800"><strong>Réaliser</strong> - Qui fait le travail</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-500 text-white rounded px-2 py-1 text-sm font-bold">A</div>
                      <span className="text-orange-800"><strong>Autoriser</strong> - Qui approuve</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-500 text-white rounded px-2 py-1 text-sm font-bold">C</div>
                      <span className="text-orange-800"><strong>Contrôler</strong> - Qui vérifie</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-purple-500 text-white rounded px-2 py-1 text-sm font-bold">I</div>
                      <span className="text-orange-800"><strong>Informer</strong> - Qui est tenu au courant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="font-semibold text-yellow-900 mb-3">💡 Moyen mnémotechnique</h3>
              <p className="text-yellow-800">
                <strong>&quot;PWO&quot;</strong> pour les 3 documents :
                <br />
                <span className="text-sm">
                  <strong>P</strong>BS (Produit) → <strong>W</strong>BS (Work/Travail) → <strong>O</strong>BS (Organisation)
                </span>
                <br />
                <em>&quot;Produit, Work, Organisation&quot;</em> - du quoi vers le qui !
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">B) Ordonnancement et Planification</h2>
            
            <p className="text-gray-700 mb-6">
              Pour atteindre l&apos;objectif fixé, la planification est une phase indispensable. 
              Sans cela, rien n&apos;est maîtrisé, le chef de projet et son équipe navigueraient à vue.
            </p>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-indigo-900 mb-4">Objectif de la planification</h3>
              <p className="text-indigo-800 mb-4">
                La planification a pour objectif d&apos;<strong>organiser le déroulement des étapes du projet dans le temps</strong>.
              </p>
              
              <h4 className="font-medium text-indigo-900 mb-3">Étapes de la planification :</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                  <span className="text-indigo-800">Découper le projet en plusieurs étapes (WBS)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                  <span className="text-indigo-800">Estimer la durée de chaque étape</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                  <span className="text-indigo-800">Identifier les enchaînements et dépendances</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                  <span className="text-indigo-800">Déterminer la chronologie et les parallélismes</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">5</div>
                  <span className="text-indigo-800">Affecter les ressources financières et humaines</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">6</div>
                  <span className="text-indigo-800">Modéliser sur un document opérationnel partagé</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Diagramme de Gantt</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                Outil de coordination et planification
              </h4>
              <p className="text-gray-700 mb-4">
                Il s&apos;agit d&apos;un outil pour aider à organiser un projet en <strong>coordonnant et planifiant dans le temps</strong> 
                les tâches à mener. Cette étape est indispensable pour garder la maîtrise du projet et gérer les ressources mobilisées.
              </p>
              
              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-900 mb-3">Fonctions du diagramme de Gantt :</h5>
                <ul className="text-gray-700 space-y-2">
                  <li>• Projeter l&apos;enchaînement des tâches les unes par rapport aux autres</li>
                  <li>• Faire apparaître la durée de chaque tâche</li>
                  <li>• Mentionner les ressources utilisées</li>
                  <li>• Comparer prévisions et réalisations</li>
                  <li>• Percevoir et corriger les écarts</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Méthode des Potentiels Métra</h3>
            
            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-red-900 mb-3">Rappel de la méthode (vue en DGC)</h4>
              <p className="text-red-800 mb-4">
                Cette méthode est abordée dans le cadre du DGC, dans l&apos;UE de contrôle de gestion.
              </p>
              
              <div className="bg-red-100 p-4 rounded">
                <h5 className="font-medium text-red-900 mb-3">Étapes de la méthode :</h5>
                <ol className="text-red-800 space-y-1">
                  <li>1. Repérage des niveaux</li>
                  <li>2. Tracé du graphe</li>
                  <li>3. Calcul des dates au plus tôt</li>
                  <li>4. Calcul des dates au plus tard</li>
                  <li>5. Utilisation du graphe</li>
                </ol>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-green-900 mb-3">📊 Exemple pratique</h3>
              <p className="text-green-800 mb-4">
                <strong>Projet :</strong> Installation d&apos;un nouveau logiciel de gestion de la relation client (GRC)
              </p>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-medium text-gray-900 mb-3">Tâches du projet :</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Tâche</th>
                        <th className="text-left p-2">Durée</th>
                        <th className="text-left p-2">Antériorité</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b">
                        <td className="p-2 font-medium">A</td>
                        <td className="p-2">3 jours</td>
                        <td className="p-2">/</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">B</td>
                        <td className="p-2">12 jours</td>
                        <td className="p-2">/</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">C</td>
                        <td className="p-2">1 jour</td>
                        <td className="p-2">B</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">D</td>
                        <td className="p-2">6 jours</td>
                        <td className="p-2">B</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">E</td>
                        <td className="p-2">4 jours</td>
                        <td className="p-2">C</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">F</td>
                        <td className="p-2">3 jours</td>
                        <td className="p-2">D</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">🚀 Méthodes Agiles vs Classiques</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-orange-900 mb-4">Approche Classique (Waterfall)</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-orange-800 mb-2">Caractéristiques :</h4>
                      <ul className="text-orange-700 space-y-1 text-sm">
                        <li>• Phases séquentielles et linéaires</li>
                        <li>• Documentation exhaustive</li>
                        <li>• Planification détaillée en amont</li>
                        <li>• Validation en fin de projet</li>
                        <li>• Changements difficiles à intégrer</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-orange-800 mb-2">Outils de découpage :</h4>
                      <ul className="text-orange-700 space-y-1 text-sm">
                        <li>• PBS complet dès le début</li>
                        <li>• WBS détaillé sur toute la durée</li>
                        <li>• Diagramme de Gantt rigide</li>
                        <li>• Méthode Métra Potentiel</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-3 rounded">
                      <p className="text-orange-800 text-sm">
                        <strong>Adapté pour :</strong> Projets avec exigences stables, 
                        environnement réglementé, équipes distribuées
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-orange-900 mb-4">Approche Agile (Scrum, Kanban)</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-orange-800 mb-2">Caractéristiques :</h4>
                      <ul className="text-orange-700 space-y-1 text-sm">
                        <li>• Itérations courtes (sprints)</li>
                        <li>• Documentation allégée</li>
                        <li>• Planification adaptative</li>
                        <li>• Validation continue</li>
                        <li>• Changements encouragés</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-orange-800 mb-2">Outils de découpage :</h4>
                      <ul className="text-orange-700 space-y-1 text-sm">
                        <li>• Epic → User Stories → Tâches</li>
                        <li>• Product Backlog évolutif</li>
                        <li>• Sprint Backlog par itération</li>
                        <li>• Burndown Charts</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-3 rounded">
                      <p className="text-orange-800 text-sm">
                        <strong>Adapté pour :</strong> Projets innovants, 
                        exigences évolutives, équipes co-localisées
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-orange-900 mb-4">Comparaison des approches de découpage</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-orange-100">
                        <th className="text-left p-3 text-orange-900">Critère</th>
                        <th className="text-left p-3 text-orange-900">Classique</th>
                        <th className="text-left p-3 text-orange-900">Agile</th>
                      </tr>
                    </thead>
                    <tbody className="text-orange-800">
                      <tr className="border-b">
                        <td className="p-3 font-medium">Granularité</td>
                        <td className="p-3">Fine dès le début</td>
                        <td className="p-3">Progressive par sprint</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Flexibilité</td>
                        <td className="p-3">Faible</td>
                        <td className="p-3">Élevée</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Visibilité</td>
                        <td className="p-3">Long terme</td>
                        <td className="p-3">Court terme</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Risques</td>
                        <td className="p-3">Détectés tardivement</td>
                        <td className="p-3">Détectés rapidement</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Livraisons</td>
                        <td className="p-3">Une seule en fin</td>
                        <td className="p-3">Multiples et fréquentes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mt-6 bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-orange-900 mb-4">Approche Hybride</h3>
                <p className="text-orange-800 mb-4">
                  Dans la pratique, de nombreux projets adoptent une <strong>approche hybride</strong> 
                  combinant les avantages des deux méthodes :
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-orange-800 mb-2">Phase d&apos;initialisation :</h4>
                    <ul className="text-orange-700 space-y-1 text-sm">
                      <li>• PBS global du projet</li>
                      <li>• Architecture générale</li>
                      <li>• Jalons majeurs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-800 mb-2">Phases de réalisation :</h4>
                    <ul className="text-orange-700 space-y-1 text-sm">
                      <li>• Sprints agiles</li>
                      <li>• WBS détaillé par itération</li>
                      <li>• Ajustements continus</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-red-900 mb-3">⚠️ Points clés à retenir</h3>
              <ul className="text-red-800 space-y-2">
                <li>• PBS → WBS → OBS : progression logique du produit vers l&apos;organisation</li>
                <li>• La matrice RACI clarifie les responsabilités (Réaliser, Autoriser, Contrôler, Informer)</li>
                <li>• Le diagramme de Gantt visualise l&apos;enchaînement temporel des tâches</li>
                <li>• La planification est essentielle pour maîtriser délais et ressources</li>
                <li>• Le choix entre approche classique et agile dépend du contexte projet</li>
                <li>• Les approches hybrides combinent les avantages des deux méthodes</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/section-1" 
              className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2"
            >
              <span>←</span>
              Section I - Le Découpage du Projet
            </Link>
            <Link 
              href="/section-3" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Section III - Planification
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}