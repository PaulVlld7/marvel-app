### GIT

# Quel est l'intérêt de commiter régulièrement et de manière atomique ?

L'intérêt de commiter régulièrement est d'avoir une sauvegarde à chaque modification du projet. Si une erreur est commise, cela permet de retourner au précédemment commit et de recommencer sans avoir à repartir d'une version antérieure. Commiter de manière atomique permet d'affecter à chaque commit une modification particuliere et ne pas avoir plusieurs sujets différents traités 

# A quoi sert une branche de type feature dans un développement logiciel de type git flow ?

Une branche de type feature sert à y "ranger" toutes les modifications du projet concernant des fonctionnalités nouvelles

# Quelle est la différence entre une branche main et une branche develop ?

La main est la branche principale du projet, celle sur laquelle le projet repose. Elle ne doit surtout pas être modifiée. La branche develop est, comme son nom l'indique, une branche pour développer et que l'on fusionne avec d'autres branches parallèles sur lesquels sont développées des fonctionnalités. A chaque nouvelle version, on fusionne la branche develop à la main.

# Quelle est la différence entre git add, git commit et git push ?

Le git add permet d'ajouter des fichiers à la modification en cours (le commit). Le git commit permet de commiter localement l'ensemble des modifications ajoutées grâce au git add. Enfin, le git push permet de pousser les modifications locales vers GitHub.


### GITHUB

# Quel est l'intérêt d'une protection de branche ?

Protéger une branche permet d'empêcher de modifier la branche principale ou autre par inadvertence

# Quel est l'intérêt d'une pull request ?

Demander la validation de d'autres collaborateurs lors d'une release 


### versionning

# Dans quel cas passer d'une version 1.0.0 à 1.0.1 ?

Dans le cadre d'une modification mineure d'un projet (correction de bugs)

# Dans quel cas passer d'une version 1.0.0 à 1.1.0 ?

Dans le cadre d'une modification plus importante (ajout de fonctionnalités...)

# A quoi sert une version release candidate ?

La release candidate sert à faire candidate différentes versions avant la release finale et définitive


### test

# Quel est l'intérêt des tests unitaires ?

Les tests unitaires servent à tester le code avant de lancer réellement l'application