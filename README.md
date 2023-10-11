# Pierre-Feuille-Ciseaux
## Démarrage du projet
- Clonez ce dépôt avec la commande git clone [URL_DU_PROJET]
- Installez les dépendances avec pnpm install
- Lancez le projet avec pnpm run dev

## Identifier le projet
Pierre-Feuille-Ciseaux est un jeu de mains amusant et simple, généralement utilisé pour prendre des décisions mineures lorsque vous et un ami êtes en désaccord.

### Comprendre le problème
Le but est de créer un programme permettant à l'utilisateur d'entrer un mot parmi "pierre", "feuille" ou "ciseaux" dans un champ. En cas d'entrée invalide, un message d'erreur s'affichera. L'adversaire (la machine) choisira aléatoirement l'une des trois options.

Le gagnant de chaque manche sera déterminé selon la hiérarchie suivante : Pierre < Feuille < Ciseaux < Pierre < Feuille < ...
Si les deux joueurs choisissent la même action, la manche est considérée comme nulle.

Selon le mode de jeu choisi, "BO3" ou "BO5", le premier joueur à accumuler 3 ou 5 points remporte la partie.

#### Fonctionnalités
- Chaque tour, chaque joueur choisit une action parmi "Pierre", "Feuille" et "Ciseaux".
- Hiérarchie des actions : Pierre < Feuille < Ciseaux < Pierre < Feuille < ...
- En cas d'égalité, aucun point n'est attribué.
- Une partie peut être soit en "Best of 3" (BO3) soit en "Best of 5" (BO5).
- Le jeu peut également se jouer à plus de deux joueurs. Dans ce cas, le dernier joueur restant est le gagnant.

### Planification
- Votre programme a-t-il une interface utilisateur ? Si oui, comment sera-t-elle ? Quelles seront ses fonctionnalités ?
  - À définir.
<!-- Notre solution sera un programme s'exécutant dans la console du navigateur, aucune interface utilisateur n'est donc nécessaire. La seule interaction avec l'utilisateur sera un champ de saisie pour entrer son choix.
Quelles seront les entrées de votre programme ? -->

- L'utilisateur entrera son choix via une boîte de dialogue (prompt).
Quelle est la sortie attendue ?
  - À définir.
<!-- La sortie attendue est la détermination du gagnant de chaque manche et, finalement, du match. -->

- Étapes nécessaires pour obtenir la sortie désirée ?
  - À définir.

### Pseudocode
À venir.

## Projet
Code source : [TODO : ajouter l'URL lorsque le projet est terminé] <br>
Aperçu : [TODO : ajouter l'URL lorsque le projet est terminé]
