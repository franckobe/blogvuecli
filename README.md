# Blog

Blog super intéressant - Vue cli - Franck GARROS

## Paramètres
Le blog est paramétrable à partir du bouton en haut à gauche de l'écran, les options disponibles sont :

- Commentaires autorisés
- Affichage complet des articles 
- Édition des articles (en admin)

## Composant UserLogin
Le composant login permet de se connecter avec un username et un role (lecteur ou admin).

L'administrateur peut modifier, supprimer ou ajouter un article.

## Composant Articles

- La génération des catégories
- Le filtrage des articles par catégorie
- Affichage de la liste des articles
- Le login
- La suppression d'article (évènement reçu par un composant Article)
- L'ajout d'article
- La réception d'évènements des composants Article
- L'émission à l'App principale d'évènements comme l'ajout, la suppression et la modification d'article

## Composant Article

- Modification, suppression d'un article (émission vers Articles)
- Affichage de composants Commentaires quand ils sont activés

## Composant Commentaire

- Affichage des commentaires d'un article

### TODOS

- Gestion ajout de commentaires sur le même principe que les articles
- Implémentation avec un backend  