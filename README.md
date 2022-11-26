# projet-passerelle-1

Believemy Projet 1 : Le pendu

# Brief : Le jeu du pendu

Le principe du jeu est de trouver le mot caché.

## Le fonctionnement du programme

- Un mot en français de notre liste de mot est choisi au hasard, puis affiché sous forme d'underscore (tiret du 8).
- Sur deux parties qui se suivent un mot ne peux pas être le même que le précédent.
- Pour jouer l'utilisateur se sert du champs texte, il tape une lettre ou un mot et appuie sur le bouton, pour valider son choix. Il peut utiliser les majuscules et les minuscules.

### Le joueur donne une bonne réponse:

- Si la lettre proposé est correcte, l'image de pendu est inchangé, les lettres proposés sont revélés. un son de machine a écrire est joué.
- Si le mot proposé est le bon, ou si le mot finit par etre révélé entierement grâce aux bonnes propositions. L'utilisateur gagne la partie. un son d'applaudissement est joué.

### Le joueur donne une mauvaise réponse:

- Si la lettre proposé est incorrecte, l'image du pendu change, le mot caché reste inchangé et un "poisson" contenant les erreurs apparaît à l'écran. Un son de crayon à papier, dessinant sur du papier est joué.
- lorsqu'il ne reste plus que 2 coups au joueurs, un son de battement de coeur, ainsi qu'une animation sont joué.
- Si le joueurs atteint 6 erreurs, la partie est terminé, le mot est révélé et un son de cri est joué.

### Une fois la partie terminé

- Le mot caché est révélé, un bouton pour rejouer apparaît à l'écran.

### autres

Le programme est jouable sur tous les supports disposant d'un navigateur.
Il est facile d'utilisation, le design est en rapport avec celui-ci et il est générateur de sourires.

--------------------------------------------------------------------------

quelques idées de maj a venir après correction :

## css

- un peu de style, plus tard

## programme principal

- bibliothèque de mots plus conséquente
- ajout de la difficulté "facile" (vous jouez actuellement sur la version "difficile")
- nouvelles règles, avec affichage du score, pour montrer au monde entier que VOUS êtes le meilleur !

### creation de 2 boutons:
- un mode "zen" pour désactiver certains bruits et animations
- un mode "silencieux" pour desactiver tous les bruits/animations
