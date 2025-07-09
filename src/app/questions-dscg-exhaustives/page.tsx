'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Calendar, Target, CheckCircle, AlertTriangle, Eye, EyeOff } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  correction: string;
  points?: string;
  methodology?: string;
}

interface ExamYear {
  year: string;
  dossiers: {
    title: string;
    questions: Question[];
  }[];
}

const examData: ExamYear[] = [
  {
    year: "2023",
    dossiers: [
      {
        title: "Dossier 2 – Direction de Projet",
        questions: [
          {
            id: "2023-q6",
            text: "Pour piloter l'ensemble de vos projets au sein du programme de bascule des clients de l'ESN, vous décidez d'organiser un Comité de pilotage mensuel. Quels sont les participants à convier à ce comité ?",
            correction: "Un Comité de pilotage convie les acteurs impliqués dans l'ensemble du projet. Dans ce contexte, les membres à convier sont : Le chef ou le directeur de projet (votre rôle, vous animerez ce comité). Le sponsor du projet (celui qui finance le budget du programme au sein de votre direction, généralement un directeur opérationnel au sein d'une ESN). Les membres de l'équipe (en fonction des sujets et de l'ordre du jour, un membre de l'équipe ou le chef de projet peut intervenir). Le donneur d'ordre du programme (le client pour lequel le programme de projet est réalisé, généralement un manager opérationnel délégué par la direction générale). Le corrigé précise que, le Copil étant au niveau 'programme de projet', les clients sur lesquels les bascules sont réalisées ne sont pas invités à ce comité, mais aux différents COPROJ (Comités Projets) les concernant."
          },
          {
            id: "2023-q7",
            text: "Décrire la méthodologie de projet employée pour basculer un client de GED à partir des informations présentées en annexe 2 et 3. Justifier ce choix de méthodologie en décrivant les avantages et les inconvénients.",
            correction: "La méthodologie de projet utilisée est le cycle en V ou en cascade. Les tâches du projet se succèdent sans itération (analyse, installation/paramétrage, recette, formation, mise en production). Une exception est notée pour les runs de transfert de données, qui sont proches du modèle itératif mais ne qualifient pas toute la méthodologie du projet. AVANTAGES : S'adapte à un programme de multi-projet identique, facilitant la spécialisation des ressources et la parallélisation des tâches identiques. Facilite la gestion et le pilotage du projet avec une visibilité claire de la cible dès le départ (limitant l'effet tunnel). Les résultats sont définis en amont dès l'audit. Les projets étant des bascules vers une nouvelle version de GED, cela limite la conduite du changement car l'outil et le projet sont déjà connus du client et des utilisateurs. La courte durée du projet rend le cycle en V plus adaptable et efficace. INCONVÉNIENTS : Risque d'excès de confiance de l'équipe projet sur des projets répétitifs, pouvant omettre des particularités ou négliger certaines tâches. Manque de souplesse pour des cas de projets ou de clients très particuliers ; une méthode itérative serait plus adaptée si le client souhaite un projet d'amélioration continue en parallèle. Manque de communication entre client et fournisseur, donnant beaucoup d'autonomie à la MOE et pouvant allonger la phase de recette. Le cycle en V ou en cascade a généralement une période de garantie plus longue après la mise en production."
          },
          {
            id: "2023-q8",
            text: "Donner deux critères d'organisation du programme de projet à l'aide des éléments présentés au sein des annexes 2 et 3 afin de réaliser les 100 bascules clients en un minimum de temps. Vous présenterez ensuite un Gantt du programme pour les 5 premières bascules.",
            correction: "Les critères d'organisation pour maximiser les bascules en un minimum de temps incluent : Traiter les étapes de plusieurs bascules simultanément sans attendre la fin d'une bascule, ce qui limite les temps d'attente des ressources spécialisées. Prioriser les étapes entre les bascules pour éviter de laisser des ressources inoccupées, d'autant que les étapes 2 et 3 peuvent être réalisées indépendamment et les étapes 7 et 8 simultanément. Répartir les étapes sur le chemin critique des projets pour limiter les risques, permettant d'avancer d'autres projets de bascule par rapport au chemin critique d'un projet donné. La gestion du projet est transverse à tous les projets et est mutualisée. Un exemple de diagramme de Gantt pour 5 bascules est fourni dans le corrigé, montrant la parallélisation des tâches et l'affectation des personnes (Evelyne, Patrice, Jean) sur les différentes étapes (Audit, Correction, Installation, Paramétrage, Run 1, Recette, Formation, Run 2, Reconnexion au SI)."
          },
          {
            id: "2023-q9",
            text: "Après avoir défini la notion d'urbanisation du Système d'information, présenter un minimum de trois éléments de révision des documents d'urbanisation dans le cadre des bascules de GED chez vos clients.",
            correction: "L'urbanisation du système d'information vise à assurer la cohérence des évolutions et transformations du SI avec les objectifs métier et opérationnels de l'entreprise, en alignement avec la stratégie du SI. Les bascules de GED impactent l'urbanisation du SI sur plusieurs éléments nécessitant une révision : Éléments d'infrastructure Technique : La nouvelle application de GED aura son propre Dossier d'Architecture Technique (DAT) qui fait partie de l'urbanisation du SI. Éléments d'interface : Les interfaces ou technologies peuvent évoluer avec la nouvelle GED, il faut donc décrire les flux entre les applications du SI qui seront orientés vers la nouvelle GED dans l'urbanisation. Éléments de sécurité : La GED étant liée aux utilisateurs, l'urbanisation du SI doit garantir le respect des profils et sessions de connexion pour accéder au service. Éléments de processus : La nouvelle GED peut introduire de nouvelles fonctionnalités applicatives à cataloguer dans l'urbanisation du SI sous forme de cartographie des processus. Éléments d'architecture applicative : La nouvelle GED est une application à part entière remplaçant l'ancienne, avec ses propres versions, serveurs applicatifs (base de données, serveurs de stockage, etc.), qu'il faut identifier dans la mise à jour de l'urbanisation."
          }
        ]
      }
    ]
  },
  {
    year: "2022",
    dossiers: [
      {
        title: "Dossier 1 – Construction du Système d'Information",
        questions: [
          {
            id: "2022-q3",
            text: "Définir pour ce projet deux facteurs clés de succès pour réussir cette transformation.",
            correction: "Deux facteurs clés de succès pour réussir cette transformation sont, entre autres : Une gouvernance bien définie et validée par les différentes directions générales, incluant la définition d'un nouveau schéma directeur pour les différentes DSI. Des analyses et audits correctement menés, qui sont la base d'une bonne définition d'un projet de transformation du Système d'Information. La coopération des différentes entités du groupe, indispensable pour réussir les changements sans perte de valeur. La qualité de prestation des intervenants, en choisissant les membres du projet en fonction de leurs expériences et compétences, ainsi que les prestataires et fournisseurs de services. L'adhésion des utilisateurs finaux à la nouvelle organisation du SI et la définition de nouveaux rôles. Le respect du planning fixé par la direction. Le suivi des bonnes pratiques de projets et des référentiels comme ITIL pour assurer les changements et éviter les risques de sécurité ou de perte de données."
          }
        ]
      },
      {
        title: "Dossier 2 – Mise en œuvre d'un Workflow Facture durant l'année de transition en 2022",
        questions: [
          {
            id: "2022-workflow-q3",
            text: "Décrire les étapes de mise en œuvre d'un Workflow Facture en précisant la méthodologie de projet employée.",
            correction: "Les étapes de mise en œuvre d'un Workflow Facture sont celles de tout projet informatique, à savoir au minimum une phase d'analyse, une phase de paramétrage ou de développement, une phase de recette (technique, fonctionnelle, métier), une phase de formation et d'accompagnement à la mise en production. La méthodologie de projet employée est en général la méthode traditionnelle (en cascade) ou le cycle en V. Elle est recommandée car il y a généralement une seule date de mise en production pour toutes les factures, ce qui permet de planifier efficacement le projet sur une date de bascule. La méthodologie Agile peut également être utilisée si une mise en production successive par typologie de facture est envisagée."
          }
        ]
      },
      {
        title: "Dossier 3 – Équipement de nouveaux Systèmes d'Information",
        questions: [
          {
            id: "2022-si-q2",
            text: "Citer un avantage et un inconvénient distinct d'une solution 'tout en un'.",
            correction: "AVANTAGE : Assurer la relation avec un prestataire unique simplifie la gestion client-fournisseur et administrative. L'interopérabilité native des applications permet de disposer de référentiels uniques et communs, ce qui représente un gain de valeur pour l'organisation et évite des interfaces complexes. Cela peut également réduire les coûts d'exploitation et simplifier l'administration en centralisant tout sur une même plateforme. INCONVÉNIENT : La dépendance envers un fournisseur unique augmente le risque en cas de défaillance de ce prestataire. Ne pas pouvoir choisir la 'meilleure' solution pour chaque domaine d'application (CRM, ERP, GED) car une solution 'tout-en-un' n'est probablement pas la meilleure pour l'organisation comparée à des solutions choisies individuellement. Le besoin de choisir un mode de distribution (SaaS ou On Premise) qui pourrait ne pas être adapté à chaque application individuelle."
          },
          {
            id: "2022-rgpd-q3",
            text: "Dans le cadre du RGPD, est-ce que le DPO actuel du groupe SD3i peut devenir le DPO de la société DIGITAL INTEGRATION après le 1er janvier 2022, tout en conservant sa position de DPO pour les 2 autres sociétés ? Expliquer votre réponse.",
            correction: "OUI, car un DPO peut être mutualisé et exercer son rôle pour plusieurs entités. Il peut également être externe à l'organisation et assurer ce rôle pour plusieurs sociétés, y compris celle qui ne fait plus partie du groupe SD3i. L'article 37 du RGPD permet la désignation d'un unique DPO pour les groupes d'entreprises, à condition qu'il soit facilement joignable à partir de chaque lieu d'établissement. Le RGPD permet donc la nomination d'un même DPO pour différentes entités juridiques distinctes."
          }
        ]
      }
    ]
  },
  {
    year: "2021",
    dossiers: [
      {
        title: "Dossier 1 – Schéma Directeur du Système d'Information",
        questions: [
          {
            id: "2021-sdsi-q2",
            text: "Rappeler la définition d'un schéma directeur, puis établir le schéma directeur de cette transformation dans un des cas présentés à la question 1.",
            correction: "Le schéma directeur du Système d'Information (SDSI) est un document de synthèse qui définit le Système d'information actuel, le Système d'information cible, et les transformations à opérer pour répondre aux objectifs fixés. Il est établi par la Direction informatique et validé par la Direction Générale, et doit permettre l'alignement de la stratégie du Système d'Information sur la stratégie de l'organisation. Un Schéma directeur est nécessaire quand la DSI opère une transformation significative de son organisation ou des composants internes de son SI. Un exemple de schéma directeur est fourni, appréhendant les scénarios de transformation de la question 1, avec 4 phases (3 mois, 3 mois, 4 mois, 2 mois) : Phase 1 (3 mois) : Situation SI Actuel indépendant. Objectifs : Cadrage et démarrage du projet, Choix des prestataires et fournisseurs, Validation des budgets. Acteurs : Les 3 DSI. Livrables : PAQ (Plan d'assurance Qualité), Présentation du projet et réunion de lancement, Contractualisation avec les acteurs externes. Phase 2 (3 mois) : Projet de transformation. Objectifs : Audit des SI actuel, Définition des besoins et des fonctionnalités du nouveau SI, Commande des infrastructures ou des services. Acteurs : L'équipe projet. Livrables : Bilan et synthèse des audits, Cahier de spécification fonctionnelle, Contractualisation pour l'acquisition des produits et services. Phase 3 (4 mois) : Modélisation (Design) du nouveau SI. Objectifs : Paramétrage des solutions, Recette technique, Recette fonctionnelle et métier. Acteurs : L'équipe projet et utilisateurs clés. Livrables : Installation des nouvelles infrastructures, Définition de la nouvelle organisation, Paramétrage des solutions du nouveau SI. Phase 4 (2 mois) : Préparation à la bascule vers le nouveau SI. Objectifs : Run à blanc de la bascule, Go/NoGo de la bascule vers le nouveau SI. Acteurs : L'équipe projet et utilisateurs clés. Livrables : PV de recette (Validation d'Aptitude), Synthèse et validation du Storyboard de bascule, Compte-rendu de la bascule."
          }
        ]
      },
      {
        title: "Dossier 2 – Cadrage du Projet",
        questions: [
          {
            id: "2021-cadrage-q4",
            text: "Définir pour le projet de transformation un facteur clé de succès et un risque identifié distinct.",
            correction: "Chaque élément ci-dessous peut être présenté comme un risque ou un facteur clé de succès: Analyse et audit correctement menés : base d'une bonne définition du projet et d'identification des transformations. Coopération des différentes DSI existantes : indispensable pour travailler ensemble dans la nouvelle DSI. Choix de la solution progiciel pour le nouveau SI : doit remporter l'adhésion des utilisateurs et fournir les services requis. Qualité de prestation des intervenants : choix des membres du projet et des prestataires/fournisseurs en fonction de leurs expériences et compétences. Coopération des utilisateurs : adhésion des utilisateurs finaux à la nouvelle organisation et aux choix de la DSI. Définition des nouveaux rôles dans la gouvernance de la nouvelle DSI. Respect du planning : réglementaire (date limite 1er janvier 2021) et pour éviter une coupure de service. Périmètre des tests : tests pertinents sur les fonctionnalités métier et couvrant les grands domaines de la recette (techniques, unitaires, d'intégration, fonctionnels, utilisateurs, métiers)."
          },
          {
            id: "2021-methodes-q5",
            text: "Présenter deux méthodes de conduite de projet de votre choix en expliquant dans quelles mesures elles vous semblent adaptées à cette transformation.",
            correction: "Méthode traditionnelle, cycle en V : enchaîne analyse, paramétrage, recette et mise en production. Elle est recommandée car il y a une date de mise en production et une équipe projet limitée, permettant une planification efficace. Méthode agile : itérative, construit le SI avec plusieurs mises en production successives. Elle n'est pas recommandée car il y a peu de disponibilité des acteurs du projet/utilisateurs finaux, et des mises en production partielles ne sont pas exploitables dans un grand changement organisationnel. Méthode adaptative et agile : à utiliser quand la situation finale et les variables ne sont pas connues. Non adaptée car ce n'est pas le cas ici et elle augmenterait risque et coût. Méthode du chemin critique : se concentre sur les tâches obligatoires et non déplaçables pour mutualiser et paralléliser les tâches. Non recommandée car les ressources sont limitées et les tâches fortement dépendantes. Méthode Prince 2 : met l'accent sur l'organisation et les livrables, adaptée aux très grands projets ou grandes organisations. Non adaptée ici car ne respecterait pas l'organisation et le budget. Méthode Lean management : venue du secteur industriel, met l'accent sur l'élimination des tâches à faible valeur ajoutée et l'amélioration de l'efficience. Non adaptée au secteur d'activité."
          },
          {
            id: "2021-gantt-q6",
            text: "Tracer un diagramme de Gantt visualisant un projet en 5 tâches et 40 semaines.",
            correction: "Un exemple typique de diagramme de Gantt est donné, respectant les 5 tâches usuelles d'un projet de transformation numérique (conception, développement, paramétrage, test, déploiement) sur une graduation en semaines, avec les tâches 4 et 5 débutant simultanément ou successivement."
          }
        ]
      }
    ]
  },
  {
    year: "2020",
    dossiers: [
      {
        title: "Sujet",
        questions: [
          {
            id: "2020-q16",
            text: "Quelles sont les avancées majeures proposées par le nouveau système d'information ?",
            correction: "Les avancées majeures sont orientées sur les bénéfices de l'intégration autour de l'homogénéité et de la standardisation des données et des processus, et autour de l'unicité de la base de données. Il s'agit des gains en termes de rapidité d'accès à une information de gestion homogène et actualisée, entraînant des gains de réactivité et de capacité de réponse aux clients."
          },
          {
            id: "2020-q17",
            text: "Comment structurer votre propos et vos séances pour faire passer vos messages dans chacun des deux séminaires (end-user et key-user) ?",
            correction: "La structure proposée est un tronc commun d'1h sur l'intégration du SI, suivi de deux spécialisations de 2h chacune, et une conclusion d'1h. Tronc commun : Expliquer la logique de la migration d'un système non intégré et obsolète vers un ERP intégré, plus réactif et plus vulnérable grâce à sa base de données unique et son interopérabilité. Séminaire End-User : Centré sur les bonnes pratiques de saisie des données (conformité, standardisation, exactitude, homogénéité, ponctualité) et de sécurité du poste de travail (mot de passe, confidentialité). Insister sur la transversalité du système sans aborder sa complexité technique. Séminaire Key-User : S'adresse à des utilisateurs formés au paramétrage et à la maintenance, ainsi qu'à l'aide aux end-users. Ils doivent prendre conscience de la transversalité du nouveau système et de leur responsabilité sur l'ensemble de leur périmètre fonctionnel, notamment en termes de conformité, sincérité des données et plan de continuité d'activité."
          },
          {
            id: "2020-q18",
            text: "Quelle conclusion pourriez-vous proposer lors de ce double séminaire afin de montrer le bien-fondé de cette migration vers un ERP ?",
            correction: "La conclusion doit convaincre et rassurer les utilisateurs en s'appuyant sur des données factuelles, comme la comparaison des architectures (3 silos non intégrés avant, 1 ERP unique après). Souligner que l'architecture modulaire des ERP offre réactivité et homogénéité, mais aussi une vulnérabilité accrue en cas d'attaque. Insister sur la forte responsabilité des end-users et encore plus des key-users dans l'assurance de la conformité des données et le fonctionnement du système."
          }
        ]
      }
    ]
  },
  {
    year: "2019",
    dossiers: [
      {
        title: "Dossier 3 : Pilotage du Changement",
        questions: [
          {
            id: "2019-gantt-q3",
            text: "Représenter le diagramme de Gantt du projet en 6 phases (PPOC) ébauché par le dirigeant de SOLIDOR et en déduire quelle serait sa durée minimum (en mois) et sa date de fin (au plus tôt).",
            correction: "Tableau des tâches et antériorités : Tâche A : Durée 2 mois, Antérieur Néant (démarrage possible au 01.01.2020). Tâche B : Durée 1 mois, Antérieur A. Tâche C : Durée 2 mois, Antérieur B. Tâche D : Durée 3 mois, Antérieur B. Tâche E : Durée 4 mois, Antérieur D. Tâche F : Durée 1 mois, Antérieur E. Le corrigé indique que la durée minimale du projet est de 12 mois (un an). La date de fin au plus tôt est le 1er janvier 2021, soit un an après son démarrage. Un diagramme de Gantt visuel est normalement fourni dans le corrigé pour illustrer cela."
          }
        ]
      }
    ]
  },
  {
    year: "2018",
    dossiers: [
      {
        title: "Dossier 1 : Remplacement du PGI",
        questions: [
          {
            id: "2018-organes-q1",
            text: "Quels sont les organes à mettre en place pour la gestion de ce projet ? Préciser leur composition et leur rôle respectif.",
            correction: "Le comité de pilotage : organe directeur de la maîtrise d'ouvrage, présidé par un directeur de projet. Composé de représentants opérationnels (responsables métiers, utilisateurs-clés), du responsable informatique, et d'experts internes ou externes (intégrateur). Son rôle inclut le lancement du projet, la définition des choix stratégiques, l'accompagnement de la conduite du changement, et le management du projet (suivi des échéances, risques, contrôle qualité). Le comité des utilisateurs : constitué de tous les utilisateurs représentatifs des domaines d'activité concernés. Ses attributions sont l'expression détaillée des besoins, la validation des solutions, la participation aux tests et formations, la réception du progiciel, et l'accompagnement du déploiement. Le chef de projet : assure le pilotage du projet, coordonne les acteurs, rend compte à la direction, supervise les tests et la recette, et valide les supports. Il doit avoir l'autorité nécessaire, et le choix du DAF comme chef de projet serait logique en raison des implications organisationnelles."
          },
          {
            id: "2018-conditions-q2",
            text: "Quelles sont les principales conditions de réussite du projet ? (Quatre conditions sont attendues.)",
            correction: "Les conditions de réussite incluent : Des objectifs clairement définis. Des équipes projets organisées avec soin et des contrôles appropriés. La prise en compte de la dimension humaine du projet (animation, motivation). La gestion du changement (intégration des acteurs, communication appropriée). La maîtrise des délais et des coûts (analyse des risques)."
          },
          {
            id: "2018-choix-q3",
            text: "Lors du choix d'un PGI, quels sont les points auxquels l'entreprise doit être attentive ? Citer et expliciter quatre points clés.",
            correction: "Points d'attention pour le choix d'un PGI : PGI multilingue, multidevises et multi-référentiel comptable pour s'adapter aux acquisitions internationales. Coût global du PGI (TCO), incluant licences, maintenance, installation, adaptation matérielle, et coûts cachés. Adaptabilité du PGI (paramétrage) et sa souplesse pour ne pas imposer une adaptation trop rigide de l'entreprise. Complexité du PGI car un paramétrage difficile peut augmenter durée et coût du projet. Expérience et pérennité de l'éditeur car la relation est de longue durée et sa défaillance entraînerait un nouveau changement coûteux. Conditions de mise en œuvre (modes d'accès, ressources nécessaires, aspects juridiques)."
          },
          {
            id: "2018-difficultes-q4",
            text: "Quelles sont les principales difficultés rencontrées lors de la mise en place d'un PGI ? (Quatre difficultés sont attendues.)",
            correction: "Principales difficultés lors de la mise en place d'un PGI : Nécessité d'adapter certains processus aux contraintes du progiciel, pouvant impliquer des modifications organisationnelles. Impact sur l'organisation dans son ensemble, entraînant des risques si la gestion du changement est mal appréhendée. Coûts induits très importants et souvent sous-estimés (temps de travail du personnel, baisse d'efficacité). Dépendance vis-à-vis d'un éditeur, rendant difficile un retour en arrière ou un changement ultérieur. Dépendance par rapport aux intégrateurs et consultants, créant des asymétries d'information et des risques. Complexité du paramétrage, pouvant entraîner des dépassements de délais et coûts, ou des difficultés d'utilisation."
          }
        ]
      },
      {
        title: "Dossier 2 : Ordonnancement du projet PGI",
        questions: [
          {
            id: "2018-ordonnancement-q1",
            text: "En fonction des tâches et contraintes d'antériorité, proposer un graphe d'ordonnancement. Indiquer quel est le chemin critique et préciser la durée du projet (ne pas tenir compte des jours fériés).",
            correction: "Le chemin critique est A - D - E - F - G - H - I - J - N - O - Q. La durée du projet est de 181 jours."
          },
          {
            id: "2018-consequences-q2",
            text: "Les développements complémentaires liés aux spécificités de l'activité s'avèrent plus complexes que prévu et vont finalement durer 40 jours. Quelles sont les conséquences de ce changement sur le graphe ? Justifier votre réponse.",
            correction: "L'allongement de la durée des développements complémentaires (tâche K) modifie le chemin critique, qui passe désormais par la tâche K au lieu de J. La durée totale du projet est allongée de 5 jours."
          },
          {
            id: "2018-solution-q3",
            text: "Proposer une solution pour compenser cet allongement et maintenir la durée initiale du projet. Justifier votre proposition.",
            correction: "Réduire la durée de la tâche N (documentation utilisateurs) ou O (formation des utilisateurs). Il est possible de dissocier la documentation technique et la documentation utilisateurs ; la documentation technique pourrait être réalisée en parallèle des paramétrages et développements (tâches J, K, L). Cela permettrait de gagner 5 jours car le chemin critique passerait alors par les tests (15j) au lieu de la documentation (20j). Concernant la formation (tâche O), en augmentant le nombre de formateurs, il serait possible de réduire sa durée à 15 jours en organisant des groupes en parallèle, compensant ainsi les 5 jours de retard."
          }
        ]
      }
    ]
  },
  {
    year: "2017",
    dossiers: [
      {
        title: "Dossier 2. Projet de déploiement de l'application métier",
        questions: [
          {
            id: "2017-sla-q7",
            text: "Préciser ce que recouvre le concept d''Accords de niveaux de service' (SLA) et indiquer les avantages procurés par une gestion de SLA et le référentiel qui le préconise. Deux avantages sont attendus.",
            correction: "Les Accords de Niveaux de Service (SLA - Service Level Agreements) définissent des objectifs spécifiques sur lesquels les performances des services seront jugées. AVANTAGES : Une gestion de SLA transforme l'obligation de moyen du prestataire en une obligation de résultat basée sur des niveaux de service clairement fixés. Elle permet de maintenir et d'améliorer la qualité des services informatiques grâce à des suivis et rapports statistiques sur l'atteinte des objectifs, initiant des actions correctives si les niveaux requis ne sont pas atteints. RÉFÉRENTIEL : La gestion des SLA est préconisée par le référentiel ITIL (Information Technology Infrastructure Library)."
          }
        ]
      }
    ]
  },
  {
    year: "2016",
    dossiers: [
      {
        title: "Dossier 2 – Projet de SI de SOVANI",
        questions: [
          {
            id: "2016-etapes-q2",
            text: "Identifier et apporter des commentaires sur les principales étapes à adopter dans cette perspective de mise en œuvre du projet ERP.",
            correction: "Les principales étapes de mise en œuvre d'un projet ERP sont : Diagnostic d'un projet : Déclenché par la liquidation judiciaire de l'éditeur, validé par un comité de sélection avec description des caractéristiques et coûts. Choix d'un chef de projet : Ressource interne ou maître d'ouvrage externe. Consultation des RH : Présentation des enjeux, communication du déroulement, collaboration constructive pour l'adhésion du personnel. Constitution d'une équipe projet : Pluridisciplinaire, avec spécialistes métiers, embauche ou ESN, et un comité de pilotage. Choix d'une méthode de conduite de projet : Ex: CMMI, CobiT, ITIL. Description détaillée du projet : Contexte, périmètre, délais, budget prévisionnel, avantages, objectifs, risques, appel d'offre, estimation du temps. Étude de faisabilité des solutions : Technique, ordonnancement, adéquation délais/besoins, disponibilité ressources, budget. Sélection de la solution optimale : Par le comité de pilotage, mise en concordance solution/objectifs, tests, choix des partenaires, prise en compte des risques. Finalisation de l'étude technique : Caractéristiques détaillées, étapes, ordonnancement, budget complet. Lancement du projet : Démarrage et communication aux RH. Réalisation du projet : Déploiement et plan de formation. Suivi de l'avancement du projet : Surveillance de l'ordonnancement, tests intermédiaires, détection des écarts (prévu/réalisé, coûts), réajustements. Finalisation du projet : Prise en main et conduite du changement. Suivi post-projet : Vérification des attentes et impacts, modifications éventuelles."
          },
          {
            id: "2016-facteurs-q4",
            text: "Présenter sous forme de tableau, 3 facteurs de réussite d'une telle conduite de projet en intégrant par exemple les référentiels et autres bonnes pratiques.",
            correction: "Trois facteurs de réussite d'une conduite de projet : Participation des RH : Indispensable pour l'adhésion du personnel 'métiers' et SI. Formation des RH : Pour acquérir les compétences nécessaires (ERP, GED, EDI, intégration SI), limiter les résistances au changement et maximiser les retombées du projet. Maîtrise du budget : Pour ne pas impacter d'autres projets ou la performance globale de l'entreprise par des dépassements importants. Prévoir un tableau de bord : Avec des indicateurs clés (temps passé, coûts, heures de formation, gains de temps attendus, qualité post-projet). Implication de la DG : Garantit une réelle imprégnation du projet dans toute la société. Identification des risques projet : Diagnostic des risques inhérents au projet ERP, cloud, etc.. Mesure de la conformité : Appréciation de la correspondance entre le projet défini et la livraison effective. Exploitation d'outils de gestion de projet : Méthodes d'ordonnancement (PERT, GANTT), référentiels (CobiT, ITIL, CMMI). Choix du ou des maîtres d'œuvre / prestataires : Crucial pour la qualité des interventions et la collaboration des ESN."
          }
        ]
      }
    ]
  }
];

export default function QuestionsDSCGExhaustives() {
  const [visibleCorrections, setVisibleCorrections] = useState<Set<string>>(new Set());

  const toggleCorrection = (questionId: string) => {
    const newVisible = new Set(visibleCorrections);
    if (newVisible.has(questionId)) {
      newVisible.delete(questionId);
    } else {
      newVisible.add(questionId);
    }
    setVisibleCorrections(newVisible);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <BackToPlanButton />
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Questions DSCG Exhaustives
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collection complète des questions et corrections du DSCG UE5 liées au découpage et à la conduite de projet, classées par année
          </p>
        </div>

        <div className="grid gap-8">
          {examData.map((yearData) => (
            <div key={yearData.year} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <h2 className="flex items-center gap-3 text-2xl font-bold">
                  <Calendar className="h-6 w-6" />
                  Année {yearData.year}
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {yearData.dossiers.map((dossier, dossierIndex) => (
                    <div key={dossierIndex}>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        {dossier.title}
                      </h3>
                      
                      <div className="space-y-4">
                        {dossier.questions.map((question) => (
                          <div key={question.id} className="bg-white border border-gray-200 rounded-lg border-l-4 border-l-blue-500 shadow-sm">
                            <div className="p-4 pb-3">
                              <div className="flex items-start justify-between">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-2">
                                  {question.id}
                                </span>
                              </div>
                              <h4 className="font-medium text-gray-900 leading-relaxed">
                                {question.text}
                              </h4>
                            </div>
                            <div className="px-4 pb-4">
                              <hr className="mb-4 border-gray-200" />
                              
                              {/* Bouton pour afficher/masquer la correction */}
                              <button
                                onClick={() => toggleCorrection(question.id)}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-4"
                              >
                                {visibleCorrections.has(question.id) ? (
                                  <>
                                    <EyeOff className="h-4 w-4" />
                                    Masquer la correction
                                  </>
                                ) : (
                                  <>
                                    <Eye className="h-4 w-4" />
                                    Afficher la correction
                                  </>
                                )}
                              </button>

                              {/* Correction (affichée conditionnellement) */}
                              {visibleCorrections.has(question.id) && (
                                <div className="bg-green-50 p-4 rounded-lg">
                                  <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4" />
                                    Correction
                                  </h5>
                                  <div className="text-green-700 text-sm leading-relaxed whitespace-pre-line">
                                    {question.correction}
                                  </div>
                                </div>
                              )}
                              
                              {/* Méthodologie (affichée conditionnellement avec la correction) */}
                              {question.methodology && visibleCorrections.has(question.id) && (
                                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                                  <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="h-4 w-4" />
                                    Méthodologie
                                  </h5>
                                  <div className="text-blue-700 text-sm leading-relaxed">
                                    {question.methodology}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Points clés à retenir</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Méthodologies récurrentes</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cycle en V / Méthode en cascade</li>
                <li>• Méthodes Agiles (contexte spécifique)</li>
                <li>• Gestion du chemin critique</li>
                <li>• Référentiels ITIL, CMMI, CobiT</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Thèmes principaux</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gouvernance et comités de pilotage</li>
                <li>• Facteurs clés de succès</li>
                <li>• Gestion des risques projet</li>
                <li>• Urbanisation du SI</li>
                <li>• Conduite du changement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}