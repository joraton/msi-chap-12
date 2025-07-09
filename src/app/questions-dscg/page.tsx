'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { GraduationCap, FileText, Clock, Users, CheckCircle, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Exercise {
  id: number;
  title: string;
  year: string;
  duration: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  context: string;
  questions: {
    id: string;
    question: string;
    points: number;
    correction: string;
    methodology: string[];
  }[];
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Projet d'installation GRC",
    year: "2023",
    duration: "45 min",
    difficulty: "Moyen",
    context: "Une entreprise souhaite installer un nouveau logiciel de gestion de la relation client (GRC). Le projet comprend plusieurs phases : audit du matériel existant, installation du logiciel, formation des utilisateurs, tests et mise en production.",
    questions: [
      {
        id: "1a",
        question: "Présentez le graphe d'ordonnancement de ce projet, la durée du projet et le chemin critique.",
        points: 8,
        correction: "Le graphe d'ordonnancement doit représenter les tâches et leurs dépendances. Le chemin critique est la séquence de tâches la plus longue qui détermine la durée minimale du projet. Il faut identifier les tâches critiques (marge nulle) et calculer la durée totale.",
        methodology: [
          "Identifier toutes les tâches du projet",
          "Déterminer les contraintes d'antériorité",
          "Construire le graphe avec les nœuds et arcs",
          "Calculer les dates au plus tôt et au plus tard",
          "Identifier le chemin critique (marge = 0)"
        ]
      },
      {
        id: "1b",
        question: "La phase d'audit du matériel passe à 20 jours et les tests nécessitent 10 jours au lieu de 6. Commenter les conséquences sur le graphe d'ordonnancement.",
        points: 6,
        correction: "Il faut recalculer les dates et vérifier si le chemin critique change. Si les tâches modifiées sont sur le chemin critique, la durée du projet augmente. Sinon, il faut vérifier si de nouveaux chemins critiques apparaissent.",
        methodology: [
          "Recalculer les dates avec les nouvelles durées",
          "Identifier les nouveaux chemins critiques",
          "Évaluer l'impact sur la durée totale",
          "Proposer des actions correctives"
        ]
      },
      {
        id: "1c",
        question: "Proposer une solution permettant de conserver la date de livraison initiale malgré le retard de la phase d'audit.",
        points: 6,
        correction: "Plusieurs solutions : paralléliser certaines tâches, ajouter des ressources, réduire le périmètre de certaines phases, ou négocier des délais avec les parties prenantes. Justifier le choix en fonction des contraintes.",
        methodology: [
          "Analyser les possibilités de parallélisation",
          "Évaluer l'ajout de ressources supplémentaires",
          "Considérer la réduction du périmètre",
          "Chiffrer les coûts des solutions",
          "Recommander la solution optimale"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Programme de bascule GED",
    year: "2023",
    duration: "60 min",
    difficulty: "Difficile",
    context: "Vous êtes directeur de projet dans une ESN. Votre mission : organiser la bascule de 100 clients vers une nouvelle version de GED (Gestion Électronique Documentaire) dans un délai de 36 mois. Chaque bascule client suit un processus standardisé mais doit être adaptée aux spécificités de chaque client.",
    questions: [
      {
        id: "2a",
        question: "Pour piloter l'ensemble de vos projets au sein du programme de bascule, vous décidez d'organiser un Comité de pilotage mensuel. Quels sont les participants à convier à ce comité ?",
        points: 4,
        correction: "Le comité doit inclure : le sponsor du programme, les chefs de projet, les représentants métier, les responsables techniques, les représentants clients (échantillon), le responsable qualité, et éventuellement des experts externes.",
        methodology: [
          "Identifier les parties prenantes clés",
          "Définir les rôles et responsabilités",
          "Établir la fréquence et l'agenda type",
          "Prévoir les indicateurs de suivi"
        ]
      },
      {
        id: "2b",
        question: "Décrire la méthodologie de projet employée pour basculer un client de GED. Justifier ce choix de méthodologie en décrivant les avantages ET les inconvénients.",
        points: 8,
        correction: "Recommandation d'une approche hybride : cadre agile pour l'adaptabilité avec des jalons fixes pour le contrôle. Avantages : flexibilité, feedback client, livraisons fréquentes. Inconvénients : complexité de coordination, risque de dérive, besoin de formation des équipes.",
        methodology: [
          "Analyser les contraintes du projet",
          "Comparer les méthodologies (agile vs classique)",
          "Justifier le choix par rapport au contexte",
          "Lister avantages et inconvénients",
          "Proposer des mesures d'atténuation des risques"
        ]
      },
      {
        id: "2c",
        question: "Donner deux critères d'organisation du programme de projet pour réaliser les 100 bascules clients en un minimum de temps. Présenter ensuite un Gantt du programme pour les 5 premières bascules.",
        points: 8,
        correction: "Critères : 1) Parallélisation maximale des bascules selon les ressources disponibles, 2) Priorisation par complexité/risque (clients simples d'abord pour rodage). Le Gantt doit montrer le chevauchement des phases et l'optimisation des ressources.",
        methodology: [
          "Analyser les contraintes de ressources",
          "Définir les critères de priorisation",
          "Calculer le degré de parallélisation optimal",
          "Construire le planning avec les dépendances",
          "Valider la faisabilité avec les équipes"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Mise en place d'une formation",
    year: "2022",
    duration: "40 min",
    difficulty: "Facile",
    context: "Un organisme de formation souhaite mettre en place une nouvelle formation. Le projet comprend l'analyse des besoins, la définition du contenu, la création des supports, la communication, la recherche de financement et l'organisation logistique. Voici le détail des tâches : A) Analyse des besoins (4 sem), B) Définition du contenu (3 sem, après A), C) Réalisation plaquettes (3 sem, après B), D) Communication (10 sem, après C), E) Recherche financement (5 sem, après D), F) Relance prospects (3 sem, après D), G) Recherche salles (2 sem, après E), H) Recherche formateurs (8 sem, après B), I) Supports pédagogiques (6 sem, après H), J) Inscription candidats (5 sem, après F).",
    questions: [
      {
        id: "3a",
        question: "Construire le graphe d'ordonnancement du projet de formation en utilisant les données du tableau des tâches. Identifier le chemin critique et calculer la durée du projet.",
        points: 10,
        correction: "Le graphe doit respecter les contraintes d'antériorité. Le chemin critique passe par A→B→C→D→E→G (ou A→B→H→I selon les durées). La durée totale est la somme des durées du chemin critique.",
        methodology: [
          "Lister toutes les tâches avec leurs durées",
          "Identifier les contraintes d'antériorité",
          "Dessiner le graphe avec les nœuds et arcs",
          "Calculer les dates au plus tôt et au plus tard",
          "Déterminer les marges et le chemin critique"
        ]
      },
      {
        id: "3b",
        question: "La tâche 'Recherche de formateurs' prend finalement 12 semaines au lieu de 8. Analyser l'impact sur le planning et proposer des solutions.",
        points: 6,
        correction: "Si cette tâche est sur le chemin critique, le projet est retardé de 4 semaines. Solutions : paralléliser avec d'autres tâches, augmenter les ressources de recrutement, ou accepter le retard en négociant avec les parties prenantes.",
        methodology: [
          "Vérifier si la tâche est critique",
          "Calculer l'impact sur la durée totale",
          "Identifier les solutions de rattrapage",
          "Évaluer les coûts et bénéfices",
          "Recommander la meilleure option"
        ]
      },
      {
        id: "3c",
        question: "Expliquer comment optimiser l'utilisation des ressources humaines sur ce projet.",
        points: 4,
        correction: "Optimisation par : lissage des charges (éviter les pics), polyvalence des équipes, parallélisation des tâches indépendantes, et planification des congés en dehors des périodes critiques.",
        methodology: [
          "Analyser la charge de travail par période",
          "Identifier les possibilités de lissage",
          "Planifier la montée en compétences",
          "Optimiser l'affectation des ressources"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Développement logiciel spécialisé",
    year: "2018",
    duration: "50 min",
    difficulty: "Difficile",
    context: "Une entreprise doit développer un logiciel spécialisé pour son activité. Le projet comprend plusieurs phases avec des contraintes d'antériorité spécifiques. Les tâches incluent l'analyse des besoins, la conception, le développement de base, les développements spécifiques à l'activité, les tests d'intégration, la formation des utilisateurs et la mise en production.",
    questions: [
      {
        id: "4a",
        question: "En fonction des tâches et contraintes d'antériorité données en annexe, proposer un graphe d'ordonnancement. Indiquer quel est le chemin critique et préciser la durée du projet (ne pas tenir compte des jours fériés).",
        points: 10,
        correction: "Le graphe doit représenter toutes les tâches avec leurs dépendances. Le chemin critique est la séquence la plus longue qui détermine la durée minimale. Il faut calculer les dates au plus tôt et au plus tard pour identifier les tâches critiques (marge nulle).",
        methodology: [
          "Lister toutes les tâches avec leurs durées et antériorités",
          "Construire le graphe en respectant les contraintes",
          "Calculer les dates au plus tôt (début → fin)",
          "Calculer les dates au plus tard (fin → début)",
          "Identifier le chemin critique (marge = 0)",
          "Calculer la durée totale du projet"
        ]
      },
      {
        id: "4b",
        question: "Les développements complémentaires liés aux spécificités de l'activité s'avèrent plus complexes que prévu et vont finalement durer 40 jours au lieu des 25 jours initialement prévus. Quelles sont les conséquences de ce changement sur le graphe ? Justifier votre réponse.",
        points: 8,
        correction: "Il faut analyser si cette tâche est sur le chemin critique. Si oui, le retard de 15 jours impacte directement la durée du projet. Si non, vérifier si le retard crée un nouveau chemin critique. Recalculer toutes les dates et marges.",
        methodology: [
          "Vérifier si la tâche modifiée est critique",
          "Recalculer les dates avec la nouvelle durée",
          "Identifier les nouveaux chemins critiques potentiels",
          "Évaluer l'impact sur la durée totale",
          "Analyser les conséquences sur les autres tâches"
        ]
      },
      {
        id: "4c",
        question: "Proposer une solution pour compenser cet allongement et maintenir la durée initiale du projet. Justifier votre proposition.",
        points: 7,
        correction: "Solutions possibles : paralléliser certaines tâches non critiques, ajouter des ressources sur les tâches critiques, réduire le périmètre de certaines fonctionnalités, ou négocier des délais avec les parties prenantes. Choisir la solution la plus économique et réalisable.",
        methodology: [
          "Analyser les possibilités de parallélisation",
          "Évaluer l'ajout de ressources (coût/bénéfice)",
          "Considérer la réduction du périmètre fonctionnel",
          "Estimer les coûts de chaque solution",
          "Recommander la solution optimale avec justification"
        ]
      }
    ]
  }
];

export default function CasPratique() {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (questionId: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  };

  const markAsCompleted = (questionId: string) => {
    const newCompleted = new Set(completedQuestions);
    if (newCompleted.has(questionId)) {
      newCompleted.delete(questionId);
    } else {
      newCompleted.add(questionId);
    }
    setCompletedQuestions(newCompleted);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-100 text-green-800';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800';
      case 'Difficile': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 rounded-xl p-3">
              <GraduationCap className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cas pratique</h1>
              <p className="text-gray-600">Exercices pratiques et cas d&apos;application</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-purple-900 mb-4">📚 Conseils pour réussir</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-purple-800 mb-2">Méthodologie :</h3>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• Lire attentivement l&apos;énoncé</li>
                  <li>• Identifier les mots-clés</li>
                  <li>• Structurer votre réponse</li>
                  <li>• Justifier vos choix</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-purple-800 mb-2">Gestion du temps :</h3>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• Répartir le temps selon les points</li>
                  <li>• Commencer par les questions faciles</li>
                  <li>• Garder du temps pour la relecture</li>
                  <li>• Ne pas rester bloqué sur une question</li>
                </ul>
              </div>
            </div>
          </div>

          {selectedExercise === null ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choisissez un exercice</h2>
              
              {exercises.map((exercise) => (
                <div key={exercise.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{exercise.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                          {exercise.difficulty}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          Sujet {exercise.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {exercise.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {exercise.questions.length} questions
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{exercise.context}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedExercise(exercise.id)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Commencer l&apos;exercice
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {(() => {
                const exercise = exercises.find(ex => ex.id === selectedExercise)!;
                return (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{exercise.title}</h2>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                          <span className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            Sujet {exercise.year}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {exercise.duration}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                            {exercise.difficulty}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedExercise(null)}
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        ← Retour aux exercices
                      </button>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                      <h3 className="font-semibold text-blue-900 mb-2">Contexte</h3>
                      <p className="text-blue-800">{exercise.context}</p>
                    </div>

                    <div className="space-y-6">
                      {exercise.questions.map((question) => {
                        const isExpanded = expandedQuestions.has(question.id);
                        const isCompleted = completedQuestions.has(question.id);
                        
                        return (
                          <div key={question.id} className="border border-gray-200 rounded-lg">
                            <div className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <h4 className="text-lg font-semibold text-gray-900">
                                      Question {question.id}
                                    </h4>
                                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium">
                                      {question.points} points
                                    </span>
                                    {isCompleted && (
                                      <CheckCircle className="h-5 w-5 text-green-600" />
                                    )}
                                  </div>
                                  <p className="text-gray-700">{question.question}</p>
                                </div>
                                <div className="flex items-center gap-2 ml-4">
                                  <button
                                    onClick={() => markAsCompleted(question.id)}
                                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                                      isCompleted 
                                        ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                  >
                                    {isCompleted ? 'Terminé' : 'Marquer comme terminé'}
                                  </button>
                                  <button
                                    onClick={() => toggleQuestion(question.id)}
                                    className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                                  >
                                    {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                                  </button>
                                </div>
                              </div>
                            </div>

                            {isExpanded && (
                              <div className="border-t border-gray-200 p-6 bg-gray-50">
                                <div className="grid md:grid-cols-2 gap-6">
                                  <div>
                                    <h5 className="font-semibold text-gray-900 mb-3">💡 Éléments de correction</h5>
                                    <p className="text-gray-700 mb-4">{question.correction}</p>
                                  </div>
                                  
                                  <div>
                                    <h5 className="font-semibold text-gray-900 mb-3">📋 Méthodologie</h5>
                                    <ul className="space-y-2">
                                      {question.methodology.map((step, index) => (
                                        <li key={index} className="flex items-start gap-2 text-gray-700">
                                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                                            {index + 1}
                                          </span>
                                          <span className="text-sm">{step}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h3 className="font-semibold text-yellow-900 mb-3">🎯 Points clés à retenir</h3>
                      <ul className="text-yellow-800 space-y-2">
                        <li>• Toujours justifier vos choix méthodologiques</li>
                        <li>• Présenter des solutions concrètes et réalisables</li>
                        <li>• Tenir compte des contraintes organisationnelles</li>
                        <li>• Évaluer les impacts sur les coûts et délais</li>
                        <li>• Proposer des mesures de suivi et de contrôle</li>
                      </ul>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-8">
            <Link 
              href="/quiz" 
              className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2"
            >
              <span>←</span>
              Quiz d&apos;évaluation
            </Link>
            <Link 
              href="/" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Retour au plan du cours
              <span>🏠</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}