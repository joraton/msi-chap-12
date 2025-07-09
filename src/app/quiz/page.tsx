'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Brain, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Que signifie l'acronyme PBS dans le contexte du découpage de projet ?",
    options: [
      "Project Breakdown Structure",
      "Product Breakdown Structure",
      "Process Breakdown Structure",
      "Planning Breakdown Structure"
    ],
    correctAnswer: 1,
    explanation: "PBS signifie Product Breakdown Structure. Il s'agit de la décomposition du produit en sous-ensembles fonctionnels."
  },
  {
    id: 2,
    question: "Quel est le moyen mnémotechnique pour retenir les 5 étapes principales d'un projet ?",
    options: [
      "CADRE",
      "CADER",
      "CARPE",
      "CARTE"
    ],
    correctAnswer: 1,
    explanation: "CADER : Cadrage, Analyse, Développement, Exploitation, Retour d'expérience."
  },
  {
    id: 3,
    question: "Quelles sont les 4 caractéristiques principales des méthodes agiles (IICL) ?",
    options: [
      "Itératif, Incrémental, Collaboratif, Léger",
      "Innovant, Intégré, Créatif, Logique",
      "Intelligent, Interactif, Cohérent, Linéaire",
      "Immédiat, Intuitif, Complet, Libre"
    ],
    correctAnswer: 0,
    explanation: "IICL : Itératif (cycles courts), Incrémental (ajouts progressifs), Collaboratif (équipe impliquée), Léger (formalisme réduit)."
  },
  {
    id: 4,
    question: "Dans la méthode METRA, que représente le chemin critique ?",
    options: [
      "Le chemin le plus court du projet",
      "Le chemin le plus coûteux du projet",
      "Le chemin le plus long déterminant la durée minimale du projet",
      "Le chemin avec le plus de ressources"
    ],
    correctAnswer: 2,
    explanation: "Le chemin critique est la séquence de tâches la plus longue qui détermine la durée minimale du projet. Tout retard sur ce chemin retarde l'ensemble du projet."
  },
  {
    id: 5,
    question: "Que signifie l'acronyme WBS ?",
    options: [
      "Work Breakdown Structure",
      "Web Breakdown System",
      "Workflow Business Structure",
      "Work Business System"
    ],
    correctAnswer: 0,
    explanation: "WBS signifie Work Breakdown Structure. Il s'agit de la décomposition du travail en tâches et sous-tâches."
  },
  {
    id: 6,
    question: "Dans le modèle en V, à quelle phase correspond la validation ?",
    options: [
      "Au début du projet",
      "En parallèle du développement",
      "À la fin du projet, en remontant la branche droite du V",
      "Uniquement pendant les tests"
    ],
    correctAnswer: 2,
    explanation: "Dans le modèle en V, la validation se fait en remontant la branche droite du V, en testant chaque niveau de spécification défini dans la branche descendante."
  },
  {
    id: 7,
    question: "Quel est le moyen mnémotechnique pour retenir PBS, WBS, OBS ?",
    options: [
      "Produit, Travail, Organisation",
      "Planning, Work, Objectifs",
      "Process, Web, Operations",
      "Project, Workflow, Outcomes"
    ],
    correctAnswer: 0,
    explanation: "PBS (Produit), WBS (Travail/Work), OBS (Organisation) - les trois documents essentiels du découpage de projet."
  },
  {
    id: 8,
    question: "Quelle est la principale différence entre les méthodes classiques et agiles ?",
    options: [
      "Les méthodes agiles sont plus rapides",
      "Les méthodes classiques sont séquentielles, les agiles sont itératives",
      "Les méthodes agiles coûtent moins cher",
      "Les méthodes classiques sont plus modernes"
    ],
    correctAnswer: 1,
    explanation: "Les méthodes classiques (Waterfall, V) sont séquentielles avec des phases distinctes, tandis que les méthodes agiles privilégient les cycles courts et itératifs."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setShowResults(false);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const getScoreColor = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent ! Vous maîtrisez parfaitement le découpage de projets.';
    if (percentage >= 60) return 'Bien ! Quelques révisions vous permettront de parfaire vos connaissances.';
    return 'Il est recommandé de revoir le cours avant de passer à la suite.';
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <BackToPlanButton />
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 rounded-full p-4">
                <Trophy className="h-12 w-12 text-yellow-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Quiz terminé !</h1>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className={`text-4xl font-bold mb-2 ${getScoreColor(score)}`}>
                {score}/{questions.length}
              </div>
              <div className={`text-xl font-semibold mb-4 ${getScoreColor(score)}`}>
                {Math.round((score / questions.length) * 100)}%
              </div>
              <p className="text-gray-700">{getScoreMessage(score)}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <button
                onClick={resetQuiz}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <RotateCcw className="h-5 w-5" />
                Recommencer le quiz
              </button>
              
              <Link
                href="/questions-dscg"
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Questions DSCG
                <span>→</span>
              </Link>
            </div>

            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Récapitulatif des réponses</h3>
              <div className="space-y-4">
                {questions.map((question, index) => {
                  const isCorrect = selectedAnswers[index] === question.correctAnswer;
                  return (
                    <div key={question.id} className="border rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 mb-2">
                            {index + 1}. {question.question}
                          </p>
                          <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                            Votre réponse : {question.options[selectedAnswers[index]]}
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-green-700">
                              Bonne réponse : {question.options[question.correctAnswer]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== -1;
  const isCorrect = selectedAnswers[currentQuestion] === question.correctAnswer;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-orange-100 rounded-xl p-3">
              <Brain className="h-8 w-8 text-orange-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">Quiz d&apos;évaluation</h1>
              <p className="text-gray-600">Testez vos connaissances sur le découpage de projets</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Question</div>
              <div className="text-2xl font-bold text-orange-600">
                {currentQuestion + 1}/{questions.length}
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ";
                
                if (!isAnswered) {
                  buttonClass += "border-gray-200 hover:border-orange-300 hover:bg-orange-50";
                } else {
                  if (index === question.correctAnswer) {
                    buttonClass += "border-green-500 bg-green-50 text-green-800";
                  } else if (index === selectedAnswers[currentQuestion]) {
                    buttonClass += "border-red-500 bg-red-50 text-red-800";
                  } else {
                    buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => !isAnswered && handleAnswerSelect(index)}
                    disabled={isAnswered}
                    className={buttonClass}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                      {isAnswered && index === question.correctAnswer && (
                        <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                      )}
                      {isAnswered && index === selectedAnswers[currentQuestion] && index !== question.correctAnswer && (
                        <XCircle className="h-5 w-5 text-red-600 ml-auto" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {showExplanation && (
            <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                )}
                <div>
                  <h3 className={`font-semibold mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {isCorrect ? 'Correct !' : 'Incorrect'}
                  </h3>
                  <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                    {question.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              {currentQuestion > 0 && (
                <span>Question précédente : {currentQuestion}/{questions.length}</span>
              )}
            </div>
            
            {isAnswered && (
              <button
                onClick={nextQuestion}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
                <span>→</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}