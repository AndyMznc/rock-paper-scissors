# Pierre-Feuille-Ciseaux

## Démarrage du projet

- Clonez ce dépôt avec la commande : `git clone git@github.com:AndyMznc/rock-paper-scissors.git`
- Installez les dépendances avec : `pnpm install`
- Lancez le projet avec : `pnpm run dev`

## Identifier le projet

Pierre-Feuille-Ciseaux est un jeu de mains amusant et simple, généralement utilisé pour prendre des décisions mineures lorsque vous et un ami êtes en désaccord.

### Comprendre le problème

Le but est de créer un programme permettant à l'utilisateur d'entrer un mot parmi "pierre", "feuille" ou "ciseaux" dans un champ. En cas d'entrée invalide, un message d'erreur s'affichera. L'adversaire (la machine) choisira aléatoirement l'une des trois options.

Le gagnant de chaque manche sera déterminé selon la hiérarchie suivante : <br>
Pierre < Feuille < Ciseaux < Pierre < Feuille < ...
<br>
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

  - Ce programme s'exécutera uniquement dans la console du navigateur pour le moment, aucune interface utilisateur n'est donc nécessaire. La seule interaction avec l'utilisateur sera un champ de saisie pour entrer son choix.

- L'utilisateur entrera son choix via une boîte de dialogue (prompt). Quelle est la sortie attendue ?

  - L'action réaliser par l'ordinateur, ainsi que la détermination du gagnant de chaque manche, puis du match.

### Pseudocode

```
TANT QUE aucun des joueurs n'a gagné le duel :
  QUAND l'utilisateur choisit une action :
    l'adversaire choisit une action aléatoire.

    SI les actions des joueurs sont identiques,
      personne ne gagne de point.
    SINON SI l'action du joueur bat celle de l'adversaire,
      le joueur gagne un point.
    SINON,
      l'adversaire gagne un point.
```

## Projet

Code source : [TODO : ajouter l'URL lorsque le projet est terminé] <br>
Aperçu : [TODO : ajouter l'URL lorsque le projet est terminé]
