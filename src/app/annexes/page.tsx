import BackToPlanButton from '@/components/content/BackToPlanButton';
import { FileText, Building, Users, Workflow, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function Annexes() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 rounded-xl p-3">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">cas ia</h1>
              <p className="text-gray-600">Documents détaillés du cas GED</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                <Building className="h-7 w-7" />
                Annexe 1 : Présentation de la solution GED
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-blue-900 mb-4">Contexte général</h3>
                  <p className="text-blue-800 mb-4">
                    La solution GED (Gestion Électronique Documentaire) actuelle est utilisée par 100 clients 
                    répartis sur différents secteurs d'activité. Cette solution permet :
                  </p>
                  <ul className="text-blue-800 space-y-2">
                    <li>• La numérisation et l'indexation des documents</li>
                    <li>• La recherche multicritères dans les archives</li>
                    <li>• La gestion des workflows de validation</li>
                    <li>• L'archivage légal avec horodatage</li>
                    <li>• L'intégration avec les ERP clients</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-blue-900 mb-4">Problématique de migration</h3>
                  <p className="text-blue-800 mb-4">
                    La version actuelle de la GED présente des limitations techniques :
                  </p>
                  <ul className="text-blue-800 space-y-2">
                    <li>• Architecture obsolète (technologies legacy)</li>
                    <li>• Performances dégradées avec l'augmentation des volumes</li>
                    <li>• Coûts de maintenance élevés</li>
                    <li>• Difficultés d'évolution fonctionnelle</li>
                    <li>• Non-conformité aux nouvelles réglementations (RGPD)</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-blue-900 mb-4">Objectifs de la nouvelle version</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>• Architecture cloud-native pour la scalabilité</li>
                    <li>• Interface utilisateur modernisée (responsive design)</li>
                    <li>• API REST pour faciliter les intégrations</li>
                    <li>• Conformité RGPD native</li>
                    <li>• Fonctionnalités d'IA pour l'indexation automatique</li>
                    <li>• Réduction des coûts d'exploitation de 30%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-3">
                <Workflow className="h-7 w-7" />
                Annexe 2 : Méthodologie de bascule
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-green-900 mb-4">Phase 1 : Analyse et préparation (4 semaines)</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-green-800">Semaine 1-2 : Audit technique</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Analyse de l'architecture existante</li>
                        <li>• Inventaire des documents et volumes</li>
                        <li>• Cartographie des intégrations</li>
                        <li>• Évaluation des performances actuelles</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-green-800">Semaine 3-4 : Conception de la migration</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Définition de l'architecture cible</li>
                        <li>• Plan de migration des données</li>
                        <li>• Stratégie de tests</li>
                        <li>• Planning détaillé de bascule</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-green-900 mb-4">Phase 2 : Développement et tests (8 semaines)</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-green-800">Semaine 1-4 : Développements spécifiques</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Adaptation des connecteurs métier</li>
                        <li>• Personnalisation de l'interface</li>
                        <li>• Configuration des workflows</li>
                        <li>• Développement des scripts de migration</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-green-800">Semaine 5-8 : Tests et validation</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Tests unitaires et d'intégration</li>
                        <li>• Tests de performance et de charge</li>
                        <li>• Tests de migration sur échantillon</li>
                        <li>• Validation utilisateur (UAT)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-green-900 mb-4">Phase 3 : Migration et mise en production (2 semaines)</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-green-800">Semaine 1 : Migration des données</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Extraction des données source</li>
                        <li>• Transformation et nettoyage</li>
                        <li>• Chargement dans la nouvelle GED</li>
                        <li>• Contrôles d'intégrité</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-green-800">Semaine 2 : Mise en production</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Bascule des utilisateurs</li>
                        <li>• Formation des équipes</li>
                        <li>• Support de démarrage</li>
                        <li>• Monitoring et ajustements</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-green-900 mb-4">Phase 4 : Stabilisation (2 semaines)</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Support utilisateur renforcé</li>
                    <li>• Optimisations de performance</li>
                    <li>• Correction des anomalies mineures</li>
                    <li>• Bilan de migration et retour d'expérience</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-3">
                <Users className="h-7 w-7" />
                Annexe 3 : Organisation des équipes
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-purple-900 mb-4">Équipe Programme (transverse)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-purple-800 mb-2">Direction Programme</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• 1 Directeur de Programme</li>
                        <li>• 1 PMO (Project Management Office)</li>
                        <li>• 1 Responsable Qualité</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-2">Support transverse</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• 2 Architectes techniques</li>
                        <li>• 1 Responsable Sécurité</li>
                        <li>• 1 Expert métier GED</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-purple-900 mb-4">Équipes Projet (par client)</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-purple-800 mb-2">Management</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• 1 Chef de Projet</li>
                        <li>• 1 Responsable Client</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-2">Technique</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• 2 Développeurs</li>
                        <li>• 1 Administrateur Système</li>
                        <li>• 1 Testeur</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-2">Fonctionnel</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• 1 Analyste Métier</li>
                        <li>• 1 Formateur</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-purple-900 mb-4">Matrice RACI - Bascule Client</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="border border-purple-300 p-3 text-left">Activité</th>
                          <th className="border border-purple-300 p-3 text-center">Dir. Programme</th>
                          <th className="border border-purple-300 p-3 text-center">Chef Projet</th>
                          <th className="border border-purple-300 p-3 text-center">Architecte</th>
                          <th className="border border-purple-300 p-3 text-center">Développeur</th>
                          <th className="border border-purple-300 p-3 text-center">Client</th>
                        </tr>
                      </thead>
                      <tbody className="text-purple-800">
                        <tr>
                          <td className="border border-purple-300 p-3">Audit technique</td>
                          <td className="border border-purple-300 p-3 text-center">A</td>
                          <td className="border border-purple-300 p-3 text-center">R</td>
                          <td className="border border-purple-300 p-3 text-center">R</td>
                          <td className="border border-purple-300 p-3 text-center">C</td>
                          <td className="border border-purple-300 p-3 text-center">I</td>
                        </tr>
                        <tr>
                          <td className="border border-purple-300 p-3">Conception solution</td>
                          <td className="border border-purple-300 p-3 text-center">A</td>
                          <td className="border border-purple-300 p-3 text-center">C</td>
                          <td className="border border-purple-300 p-3 text-center">R</td>
                          <td className="border border-purple-300 p-3 text-center">C</td>
                          <td className="border border-purple-300 p-3 text-center">C</td>
                        </tr>
                        <tr>
                          <td className="border border-purple-300 p-3">Développements</td>
                          <td className="border border-purple-300 p-3 text-center">I</td>
                          <td className="border border-purple-300 p-3 text-center">A</td>
                          <td className="border border-purple-300 p-3 text-center">C</td>
                          <td className="border border-purple-300 p-3 text-center">R</td>
                          <td className="border border-purple-300 p-3 text-center">I</td>
                        </tr>
                        <tr>
                          <td className="border border-purple-300 p-3">Tests utilisateur</td>
                          <td className="border border-purple-300 p-3 text-center">I</td>
                          <td className="border border-purple-300 p-3 text-center">A</td>
                          <td className="border border-purple-300 p-3 text-center">C</td>
                          <td className="border border-purple-300 p-3 text-center">C</td>
                          <td className="border border-purple-300 p-3 text-center">R</td>
                        </tr>
                        <tr>
                          <td className="border border-purple-300 p-3">Migration données</td>
                          <td className="border border-purple-300 p-3 text-center">A</td>
                          <td className="border border-purple-300 p-3 text-center">R</td>
                          <td className="border border-purple-300 p-3 text-center">C</td>
                          <td className="border border-purple-300 p-3 text-center">R</td>
                          <td className="border border-purple-300 p-3 text-center">C</td>
                        </tr>
                        <tr>
                          <td className="border border-purple-300 p-3">Formation utilisateurs</td>
                          <td className="border border-purple-300 p-3 text-center">I</td>
                          <td className="border border-purple-300 p-3 text-center">A</td>
                          <td className="border border-purple-300 p-3 text-center">I</td>
                          <td className="border border-purple-300 p-3 text-center">C</td>
                          <td className="border border-purple-300 p-3 text-center">R</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-xs text-purple-700">
                    <strong>Légende :</strong> R = Réalise, A = Autorise, C = Contrôle, I = Informé
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-3">
                <AlertTriangle className="h-7 w-7" />
                Annexe 4 : Risques et contraintes
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-red-900 mb-4">Risques techniques</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-red-800">Complexité de migration des données</h4>
                      <p className="text-red-700 text-sm">Impact : Fort | Probabilité : Moyenne</p>
                      <p className="text-red-700 text-sm">Mitigation : Tests approfondis, migration par lots, plan de rollback</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-red-800">Incompatibilité des intégrations existantes</h4>
                      <p className="text-red-700 text-sm">Impact : Moyen | Probabilité : Forte</p>
                      <p className="text-red-700 text-sm">Mitigation : Audit préalable, développement d'adaptateurs, tests d'intégration</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-red-800">Performances dégradées</h4>
                      <p className="text-red-700 text-sm">Impact : Fort | Probabilité : Faible</p>
                      <p className="text-red-700 text-sm">Mitigation : Tests de charge, optimisation architecture, monitoring continu</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-red-900 mb-4">Risques organisationnels</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-red-800">Résistance au changement des utilisateurs</h4>
                      <p className="text-red-700 text-sm">Impact : Moyen | Probabilité : Forte</p>
                      <p className="text-red-700 text-sm">Mitigation : Communication, formation, accompagnement personnalisé</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-red-800">Indisponibilité des ressources clés</h4>
                      <p className="text-red-700 text-sm">Impact : Fort | Probabilité : Moyenne</p>
                      <p className="text-red-700 text-sm">Mitigation : Plan de succession, documentation, formation croisée</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-red-900 mb-4">Contraintes réglementaires</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• Conformité RGPD : traçabilité des données personnelles</li>
                    <li>• Archivage légal : conservation des documents selon réglementation sectorielle</li>
                    <li>• Sécurité : chiffrement, contrôle d'accès, audit trail</li>
                    <li>• Continuité de service : RTO &lt; 4h, RPO &lt; 1h</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">📋 Documents de référence</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Cahier des charges technique de la nouvelle GED</li>
                <li>• Matrice de traçabilité des exigences</li>
                <li>• Plan de tests détaillé</li>
                <li>• Procédures de migration et de rollback</li>
                <li>• Guide utilisateur et supports de formation</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/section-3" 
              className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2"
            >
              <span>←</span>
              Section III - Planification
            </Link>
            <Link 
              href="/questions-dscg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Cas pratique
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}