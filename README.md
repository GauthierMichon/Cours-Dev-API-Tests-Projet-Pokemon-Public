# Simulateur de Combat Pokémon - Jeu en CLI

## Description

Ce projet est un simulateur de combat Pokémon en ligne de commande (CLI), développé pour offrir une simulation automatique de combats entre deux Pokémon choisis aléatoirement. Le combat se déroule automatiquement en suivant des règles de base, incluant les effets des types d'attaques et des coups critiques. Le Pokémon le plus rapide commence, choisit une attaque au hasard, et continue jusqu'à ce qu'un des deux Pokémon soit K.O.

## Prérequis

Assurez-vous d'avoir **Node.js** installé sur votre machine.

## Installation

Clonez le dépôt, puis installez les dépendances nécessaires en utilisant :

```bash
npm install
```

## Lancer le projet

### Étape 1 : Compiler le projet

Avant de lancer le jeu, compilez le code TypeScript en JavaScript en exécutant la commande suivante :

```bash
npx tsc
```

Si vous rencontrez une erreur, essayez la commande suivante pour modifier temporairement les permissions d'exécution :

```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Puis, relancez la commande :

```bash
npx tsc
```

### Étape 2 : Lancer le projet

Une fois le projet compilé, vous pouvez lancer le jeu.

```bash
node dist/index.js
```

## Règles du jeu

### Déroulement du Combat

- Deux Pokémon sont choisis aléatoirement en début de partie.
- Le Pokémon le plus rapide commence le combat, prenant l'initiative pour attaquer.
- L'attaque est choisie aléatoirement parmi les attaques disponibles du Pokémon attaquant.
- Si l'attaque est de type soin, le Pokémon soigne ses points de vie. Sinon, il inflige des dégâts à son adversaire.
- Les dégâts sont modifiés en fonction de la table des types (tous les types ne sont pas implémentés).
- Il existe une chance de coup critique, augmentant les dégâts de l'attaque.
- Le combat continue jusqu'à ce qu'un Pokémon soit K.O.

Exemple pour l'As : Si le joueur a un As et un 4, son total est de 15. S'il tire un 8, le total devient 23, et l'As passe à une valeur de 1, ramenant le total à 13.

Lors d'une partie de blackjack, le joueur tire 2 carte et le croupier 1 seule
Le joueur a alors le choix entre 3 options :

- hit : tirer une nouvelle carte qui viendra s'ajouter aux précédentes, il pourra en tirer d'autres s'il le souhaite
- stand : ne rien faire et laisser la main au croupier
- double : doubler sa mise et tirer une seule carte, laissant ensuite la main au croupier

Lorsque c'est le tour du croupier, celui-ci tire des cartes jusqu'à avoir au moins 17, après il s'arrête.

## Tests

Les tests unitaires sont à effectuer dans le fichier `pokemonGame.test.ts`.

### Exécution des tests

- Utilisez la fonction `expect()` pour effectuer les vérifications.
- La méthode `jest.spyOn` peut être utilisée pour surveiller le comportement d'une fonction spécifique.
- Utilisez `.mockImplementation` si vous avez besoin de forcer une fonction à prendre des valeurs spécifiques pour vos tests.
- Utilisez `.mockReturnValue` si vous avez besoin de forcer une fonction à retourner des valeurs spécifiques pour vos tests.

Pour lancer les tests, utilisez la commande suivante :

```bash
npm run test
```

Un simulateur de combat pokémon

Deux pokémons sont choisi aléatoirement
Puis le combat se déroule automatiquement
Le pokémon le plus rapide à l'initiative, il choisi une attaque au hasard parmis celles qu'il possède
Une fois l'attaque choisi, si c'est une attaque de soin, il se soigne lui même, sinon il inflige des dégâts à son adversaire en suivant la table des types (tous les types ne sont pas implémentés)
Il est possible que l'attque fasse un coup critique, augmentant les dégâts
Le combat se termine quand un des deux pokémons est K.O.
