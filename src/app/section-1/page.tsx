import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BarChart3, ArrowDown, Zap, Users, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Section1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-100 rounded-xl p-3">
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section I - Le Découpage du Projet</h1>
              <p className="text-gray-600">Méthodes classiques et approches agiles</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">A) Découpage Classique</h2>
            
            <p className="text-gray-700 mb-6">
              Les découpages possibles sont très nombreux. Ils reposent toutefois sur une similitude fondamentale : 
              <strong>décomposer une tâche complexe en étapes intermédiaires</strong>.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="font-semibold text-blue-900 mb-3">Les 5 grandes étapes d&apos;un projet</h3>
              <div className="grid gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-blue-800">Le cadrage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-blue-800">La conception</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-blue-800">La conduite</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-blue-800">La clôture</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-blue-800">La maintenance</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Modèle de la Cascade</h3>
            
            <p className="text-gray-700 mb-6">
              Durant des décennies, les projets ont été gérés avec une approche dite « classique », 
              le plus souvent « en cascade », basée sur des <strong>activités séquentielles</strong> : 
              on recueille les besoins, le produit est défini, puis développé et enfin testé avant de le livrer au client.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <ArrowDown className="h-5 w-5" />
                Étapes du modèle en cascade
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 bg-white rounded border-l-4 border-blue-500">
                  <div className="bg-blue-100 rounded p-2">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <span>Recueil des besoins</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded border-l-4 border-green-500">
                  <div className="bg-green-100 rounded p-2">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <span>Définition du produit</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded border-l-4 border-purple-500">
                  <div className="bg-purple-100 rounded p-2">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <span>Développement</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded border-l-4 border-orange-500">
                  <div className="bg-orange-100 rounded p-2">
                    <span className="text-orange-600 font-bold">4</span>
                  </div>
                  <span>Tests</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded border-l-4 border-red-500">
                  <div className="bg-red-100 rounded p-2">
                    <span className="text-red-600 font-bold">5</span>
                  </div>
                  <span>Livraison au client</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Modèle en V</h3>
            
            <p className="text-gray-700 mb-6">
              Le modèle en V vise à réduire ce que l&apos;on a appelé l&apos;<strong>« effet tunnel »</strong> : 
              à partir d&apos;un moment donné, les clients perdent la visibilité sur le projet.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h4 className="font-semibold text-yellow-900 mb-3">Principe du modèle en V</h4>
              <p className="text-yellow-800 mb-3">
                Dans chacune des phases de la première branche du V, on explicite les 
                <strong>critères d&apos;appréciation et d&apos;acceptation</strong> du système aux étapes 
                correspondantes de la deuxième branche du V.
              </p>
              <div className="text-yellow-800">
                <strong>Exemple :</strong> L&apos;étude détaillée produira un jeu d&apos;essai qui sera utilisé 
                pour effectuer la recette fonctionnelle.
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">B) Les Méthodes Agiles</h2>
            
            <p className="text-gray-700 mb-6">
              Au début des années 1990, d&apos;autres façons d&apos;opérer ont progressivement vu le jour. 
              Beaucoup moins prédictives, beaucoup plus souples face aux besoins d&apos;adaptation, 
              ces nouvelles méthodes se sont rapidement et massivement imposées.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Définition des méthodes agiles
              </h3>
              <p className="text-green-800 text-lg font-medium">
                Une méthode agile se caractérise par une <strong>approche itérative et incrémentale</strong>, 
                qui est menée dans un <strong>esprit collaboratif</strong> et avec juste ce qu&apos;il faut de 
                <strong>formalisme</strong>. Le résultat est un produit de haute qualité tout en intégrant 
                les évolutions des besoins du client.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Approche itérative et incrémentale</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">Développement itératif</h4>
                <ul className="text-blue-800 space-y-2">
                  <li>• Découpage en étapes courtes (quelques semaines)</li>
                  <li>• Chaque itération = mini-projet complet</li>
                  <li>• Version minimale développée puis validée</li>
                  <li>• Itérations nommées « sashimi »</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3">Mode incrémental</h4>
                <ul className="text-purple-800 space-y-2">
                  <li>• Fonctionnalités intégrées progressivement</li>
                  <li>• Système s&apos;enrichit à chaque itération</li>
                  <li>• Niveau de satisfaction croissant</li>
                  <li>• Version finale atteinte graduellement</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Esprit collaboratif</h3>
            
            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Communication privilégiée
              </h4>
              <p className="text-orange-800 mb-4">
                L&apos;approche agile privilégie la communication entre les différents acteurs d&apos;un projet 
                au sein d&apos;une équipe, mais également entre l&apos;équipe et ses divers interlocuteurs.
              </p>
              <div className="bg-orange-100 p-4 rounded">
                <strong className="text-orange-900">Évolution du rôle du chef de projet :</strong>
                <p className="text-orange-800 mt-2">
                  Au lieu de « commander » et contrôler son équipe, il devient le manager qui sait créer 
                  les conditions optimales pour permettre à chacun de contribuer efficacement.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Formalisme léger</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Méthodes « légères »
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Caractéristiques :</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Quelques livrables essentiels</li>
                    <li>• Quelques rôles définis</li>
                    <li>• Quelques étapes</li>
                    <li>• Quelques réunions</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Outils :</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Efficaces et réduits au nécessaire</li>
                    <li>• Automatisation des tâches récurrentes</li>
                    <li>• Tests et intégration en continu</li>
                    <li>• Adaptation à l&apos;équipe</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="font-semibold text-yellow-900 mb-3">💡 Moyen mnémotechnique</h3>
              <p className="text-yellow-800">
                <strong>&quot;ICI&quot;</strong> pour les méthodes agiles :
                <br />
                <span className="text-sm">
                  <strong>I</strong>térative → <strong>C</strong>ollaborative → <strong>I</strong>ncrémentale
                </span>
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-red-900 mb-3">⚠️ Points clés à retenir</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Les méthodes classiques sont prédictives et séquentielles</li>
                <li>• Les méthodes agiles sont adaptatives et itératives</li>
                <li>• L&apos;effet tunnel est un risque majeur des approches classiques</li>
                <li>• La collaboration est au cœur des méthodes agiles</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/introduction" 
              className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2"
            >
              <span>←</span>
              Introduction
            </Link>
            <Link 
              href="/section-2" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Section II - Les Délais
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}