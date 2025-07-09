import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Users, Calendar, Calculator, BookOpen, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function Section3() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-indigo-100 rounded-xl p-3">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section III - Planification Avancée</h1>
              <p className="text-gray-600">Exercices pratiques et cas d&apos;application</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Calendar className="h-7 w-7 text-indigo-600" />
              Exemple Pratique : Planning de Formation
            </h2>
            
            <p className="text-gray-700 mb-6">
              Étudions un cas concret de <strong>planning de mise en place d&apos;une nouvelle formation</strong> 
              pour comprendre l&apos;application des méthodes d&apos;ordonnancement.
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-indigo-900 mb-4">Tableau des tâches du projet</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-indigo-100">
                      <th className="border border-indigo-300 p-3 text-left font-semibold">Tâche</th>
                      <th className="border border-indigo-300 p-3 text-left font-semibold">Descriptif</th>
                      <th className="border border-indigo-300 p-3 text-left font-semibold">Durée</th>
                      <th className="border border-indigo-300 p-3 text-left font-semibold">Prérequises</th>
                    </tr>
                  </thead>
                  <tbody className="text-indigo-800">
                    <tr>
                      <td className="border border-indigo-300 p-3 font-bold">A</td>
                      <td className="border border-indigo-300 p-3">Analyse des besoins par étude de marché et sondage</td>
                      <td className="border border-indigo-300 p-3">4 semaines</td>
                      <td className="border border-indigo-300 p-3">Aucune</td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-300 p-3 font-bold">B</td>
                      <td className="border border-indigo-300 p-3">Définition du contenu de la formation</td>
                      <td className="border border-indigo-300 p-3">3 semaines</td>
                      <td className="border border-indigo-300 p-3">A</td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-300 p-3 font-bold">C</td>
                      <td className="border border-indigo-300 p-3">Réalisation plaquettes, mise à jour site Web</td>
                      <td className="border border-indigo-300 p-3">3 semaines</td>
                      <td className="border border-indigo-300 p-3">B</td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-300 p-3 font-bold">D</td>
                      <td className="border border-indigo-300 p-3">Communication : mailing, salons</td>
                      <td className="border border-indigo-300 p-3">10 semaines</td>
                      <td className="border border-indigo-300 p-3">C</td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-300 p-3 font-bold">E</td>
                      <td className="border border-indigo-300 p-3">Recherche de financement</td>
                      <td className="border border-indigo-300 p-3">5 semaines</td>
                      <td className="border border-indigo-300 p-3">D</td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-300 p-3 font-bold">F</td>
                      <td className="border border-indigo-300 p-3">Relance des prospects</td>
                      <td className="border border-indigo-300 p-3">3 semaines</td>
                      <td className="border border-indigo-300 p-3">D</td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-300 p-3 font-bold">G</td>
                      <td className="border border-indigo-300 p-3">Recherche de salles</td>
                      <td className="border border-indigo-300 p-3">2 semaines</td>
                      <td className="border border-indigo-300 p-3">E</td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-300 p-3 font-bold">H</td>
                      <td className="border border-indigo-300 p-3">Recherche de formateurs</td>
                      <td className="border border-indigo-300 p-3">8 semaines</td>
                      <td className="border border-indigo-300 p-3">B</td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-300 p-3 font-bold">I</td>
                      <td className="border border-indigo-300 p-3">Mise en place supports pédagogiques</td>
                      <td className="border border-indigo-300 p-3">6 semaines</td>
                      <td className="border border-indigo-300 p-3">H</td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-300 p-3 font-bold">J</td>
                      <td className="border border-indigo-300 p-3">Inscription des candidats</td>
                      <td className="border border-indigo-300 p-3">5 semaines</td>
                      <td className="border border-indigo-300 p-3">F</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Calculator className="h-7 w-7 text-green-600" />
              Exercices d&apos;Application
            </h2>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Exercice 1 : Logiciel GRC
              </h3>
              <p className="text-green-800 mb-4">
                Un projet d&apos;installation d&apos;un nouveau logiciel de gestion de la relation client (GRC).
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium text-green-900 mb-2">Question 1 :</h4>
                  <p className="text-green-800">
                    Présentez le graphe d&apos;ordonnancement de ce projet, la durée du projet et le chemin critique.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium text-green-900 mb-2">Situation modifiée :</h4>
                  <p className="text-green-800 mb-2">
                    Deux tâches sont affectées par des difficultés :
                  </p>
                  <ul className="text-green-800 space-y-1">
                    <li>• Phase d&apos;audit du matériel : passe à <strong>20 jours</strong> (au lieu de ?)</li>
                    <li>• Tests : nécessitent <strong>10 jours</strong> au lieu de 6 jours</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium text-green-900 mb-2">Question 2 :</h4>
                  <p className="text-green-800">
                    Commenter les conséquences de ces retards sur le graphe d&apos;ordonnancement.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium text-green-900 mb-2">Question 3 :</h4>
                  <p className="text-green-800">
                    Proposer une solution permettant de conserver la date de livraison initiale 
                    malgré le retard de la phase d&apos;audit.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Extraits de Sujets DSCG</h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-blue-900 mb-4">📋 Extrait Sujet 2018</h3>
              <p className="text-blue-800 mb-4">
                À l&apos;aide de l&apos;annexe 4 et en vous appuyant sur vos connaissances, 
                vous répondrez aux questions suivantes :
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium text-blue-900 mb-2">Question 1 :</h4>
                  <p className="text-blue-800">
                    En fonction des tâches et contraintes d&apos;antériorité, proposer un graphe d&apos;ordonnancement. 
                    Indiquer quel est le chemin critique et préciser la durée du projet 
                    (ne pas tenir compte des jours fériés).
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium text-blue-900 mb-2">Question 2 :</h4>
                  <p className="text-blue-800">
                    Les développements complémentaires liés aux spécificités de l&apos;activité s&apos;avèrent 
                    plus complexes que prévu et vont finalement durer <strong>40 jours</strong>. 
                    Quelles sont les conséquences de ce changement sur le graphe ? Justifier votre réponse.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium text-blue-900 mb-2">Question 3 :</h4>
                  <p className="text-blue-800">
                    Proposer une solution pour compenser cet allongement et maintenir la durée initiale du projet. 
                    Justifier votre proposition.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-purple-900 mb-4">📋 Extrait Sujet 2023 - Plan de Bascule GED</h3>
              <p className="text-purple-800 mb-4">
                <em>Le cas, l&apos;énoncé et les données sont inspirés d&apos;une situation réelle.</em>
              </p>
              
              <div className="bg-white p-4 rounded border mb-4">
                <h4 className="font-medium text-purple-900 mb-2">Contexte :</h4>
                <p className="text-purple-800">
                  Vous êtes directeur de projet dans une ESN. Votre mission : organiser la bascule 
                  de 100 clients vers une nouvelle version de GED (Gestion Électronique Documentaire) 
                  dans un délai de 36 mois.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium text-purple-900 mb-2">Question 1 :</h4>
                  <p className="text-purple-800">
                    Pour piloter l&apos;ensemble de vos projets au sein du programme de bascule, 
                    vous décidez d&apos;organiser un Comité de pilotage mensuel. 
                    Quels sont les participants à convier à ce comité ?
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium text-purple-900 mb-2">Question 2 :</h4>
                  <p className="text-purple-800">
                    Décrire la méthodologie de projet employée pour basculer un client de GED. 
                    Justifier ce choix de méthodologie en décrivant les avantages ET les inconvénients.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium text-purple-900 mb-2">Question 3 :</h4>
                  <p className="text-purple-800">
                    Donner deux critères d&apos;organisation du programme de projet pour réaliser 
                    les 100 bascules clients en un minimum de temps. 
                    Présenter ensuite un Gantt du programme pour les 5 premières bascules.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium text-purple-900 mb-2">Question 4 :</h4>
                  <p className="text-purple-800">
                    Après avoir défini la notion d&apos;urbanisation du Système d&apos;information, 
                    présenter un minimum de trois éléments de révision des documents d&apos;urbanisation 
                    dans le cadre des bascules de GED.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">💡 Focus : Urbanisation du SI</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-indigo-900 mb-4">Définition de l&apos;urbanisation</h3>
                  <p className="text-indigo-800 mb-4">
                    L&apos;urbanisation du système d&apos;information est une <strong>démarche d&apos;architecture d&apos;entreprise</strong> 
                    qui vise à faire évoluer le SI de manière cohérente et maîtrisée, en s&apos;inspirant des principes 
                    de l&apos;urbanisme des villes.
                  </p>
                  
                  <div className="bg-indigo-50 p-4 rounded">
                    <h4 className="font-medium text-indigo-900 mb-2">Objectifs principaux :</h4>
                    <ul className="text-indigo-800 space-y-1">
                      <li>• <strong>Cohérence</strong> : éviter la redondance et les incohérences</li>
                      <li>• <strong>Flexibilité</strong> : faciliter les évolutions et adaptations</li>
                      <li>• <strong>Réutilisabilité</strong> : optimiser les investissements</li>
                      <li>• <strong>Interopérabilité</strong> : assurer la communication entre systèmes</li>
                      <li>• <strong>Gouvernance</strong> : maîtriser la complexité du SI</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-indigo-900 mb-4">Documents d&apos;urbanisation à réviser pour les bascules GED</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h4 className="font-medium text-indigo-800 mb-2">1. Cartographie applicative</h4>
                      <p className="text-indigo-700 text-sm mb-2">
                        <strong>Révisions nécessaires :</strong>
                      </p>
                      <ul className="text-indigo-700 text-sm space-y-1">
                        <li>• Mise à jour des versions d&apos;applications (ancienne → nouvelle GED)</li>
                        <li>• Modification des flux de données entre applications</li>
                        <li>• Révision des interfaces et connecteurs</li>
                        <li>• Documentation des nouvelles API REST</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h4 className="font-medium text-indigo-800 mb-2">2. Architecture technique</h4>
                      <p className="text-indigo-700 text-sm mb-2">
                        <strong>Révisions nécessaires :</strong>
                      </p>
                      <ul className="text-indigo-700 text-sm space-y-1">
                        <li>• Migration vers architecture cloud-native</li>
                        <li>• Mise à jour des schémas de déploiement</li>
                        <li>• Révision des politiques de sécurité et chiffrement</li>
                        <li>• Documentation des nouveaux protocoles de communication</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h4 className="font-medium text-indigo-800 mb-2">3. Modèle de données</h4>
                      <p className="text-indigo-700 text-sm mb-2">
                        <strong>Révisions nécessaires :</strong>
                      </p>
                      <ul className="text-indigo-700 text-sm space-y-1">
                        <li>• Évolution du schéma de métadonnées documentaires</li>
                        <li>• Mise à jour des règles de classification et indexation</li>
                        <li>• Révision des politiques de rétention et archivage</li>
                        <li>• Documentation des nouveaux formats supportés</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h4 className="font-medium text-indigo-800 mb-2">4. Matrice des flux</h4>
                      <p className="text-indigo-700 text-sm mb-2">
                        <strong>Révisions nécessaires :</strong>
                      </p>
                      <ul className="text-indigo-700 text-sm space-y-1">
                        <li>• Cartographie des nouveaux échanges de données</li>
                        <li>• Mise à jour des protocoles de communication</li>
                        <li>• Documentation des nouvelles API et web services</li>
                        <li>• Révision des mécanismes de synchronisation</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h4 className="font-medium text-indigo-800 mb-2">5. Référentiel de sécurité</h4>
                      <p className="text-indigo-700 text-sm mb-2">
                        <strong>Révisions nécessaires :</strong>
                      </p>
                      <ul className="text-indigo-700 text-sm space-y-1">
                        <li>• Mise à jour des politiques d&apos;authentification et autorisation</li>
                        <li>• Révision des règles de chiffrement et signature électronique</li>
                        <li>• Documentation des nouveaux mécanismes d&apos;audit</li>
                        <li>• Mise à jour des procédures de sauvegarde et restauration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-indigo-900 mb-4">Processus de révision</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-indigo-800 mb-2">Étapes clés :</h4>
                      <ol className="text-indigo-700 space-y-1 text-sm">
                        <li>1. Audit de l&apos;existant</li>
                        <li>2. Analyse d&apos;impact</li>
                        <li>3. Conception de la cible</li>
                        <li>4. Plan de transition</li>
                        <li>5. Validation et mise à jour</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-medium text-indigo-800 mb-2">Acteurs impliqués :</h4>
                      <ul className="text-indigo-700 space-y-1 text-sm">
                        <li>• Architecte d&apos;entreprise</li>
                        <li>• Architecte technique</li>
                        <li>• Responsable sécurité</li>
                        <li>• Chef de projet</li>
                        <li>• Experts métier</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="font-semibold text-yellow-900 mb-3">💡 Conseils méthodologiques</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• <strong>Identifier le chemin critique</strong> : séquence de tâches déterminant la durée minimale</li>
                <li>• <strong>Calculer les marges</strong> : temps disponible sans retarder le projet</li>
                <li>• <strong>Optimiser les ressources</strong> : paralléliser les tâches indépendantes</li>
                <li>• <strong>Prévoir les aléas</strong> : intégrer des marges de sécurité</li>
                <li>• <strong>Communiquer régulièrement</strong> : tenir informées toutes les parties prenantes</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Points clés pour l&apos;examen
              </h3>
              <ul className="text-red-800 space-y-2">
                <li>• <strong>Maîtriser la construction</strong> des graphes d&apos;ordonnancement</li>
                <li>• <strong>Savoir identifier</strong> le chemin critique et calculer la durée du projet</li>
                <li>• <strong>Analyser l&apos;impact</strong> des retards sur la planification globale</li>
                <li>• <strong>Proposer des solutions</strong> de rattrapage (parallélisation, ressources supplémentaires)</li>
                <li>• <strong>Justifier les choix</strong> méthodologiques (agile vs classique)</li>
                <li>• <strong>Comprendre les enjeux</strong> organisationnels et humains</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">🎯 Synthèse du chapitre</h3>
              <p className="text-gray-700 mb-4">
                Le découpage de projets est une compétence fondamentale du management des SI. 
                Il nécessite de maîtriser :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Aspects techniques :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• PBS, WBS, OBS</li>
                    <li>• Diagrammes de Gantt</li>
                    <li>• Méthodes d&apos;ordonnancement</li>
                    <li>• Calcul des chemins critiques</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Aspects managériaux :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Choix méthodologique (agile/classique)</li>
                    <li>• Gestion des ressources humaines</li>
                    <li>• Communication et collaboration</li>
                    <li>• Adaptation aux changements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/section-2" 
              className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2"
            >
              <span>←</span>
              Section II - Les Délais
            </Link>
            <Link 
              href="/quiz" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Quiz d&apos;évaluation
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}