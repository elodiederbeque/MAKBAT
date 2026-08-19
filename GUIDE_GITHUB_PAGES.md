# Mettre le site Makbat en ligne avec GitHub Pages

Ce dossier contient un site statique complet en HTML, CSS et JavaScript. Il peut etre publie gratuitement avec GitHub Pages.

## 1. Personnaliser les informations

Avant la mise en ligne, ouvrez les fichiers et remplacez les elements suivants si necessaire :

- `index.html` : numero de telephone, adresse e-mail, nom du contact, textes de presentation.
- `js/script.js` : adresse e-mail utilisee par le formulaire.
- `assets/img/cuisine-makbat-hero.png` : image principale du site, si vous voulez utiliser une vraie photo de chantier Makbat.

## 2. Creer le depot GitHub

1. Connectez-vous a GitHub.
2. Cliquez sur `New repository`.
3. Choisissez un nom, par exemple `makbat`.
4. Laissez le depot en `Public`.
5. Cliquez sur `Create repository`.

## 3. Envoyer les fichiers

1. Dans le depot GitHub, cliquez sur `Add file`, puis `Upload files`.
2. Glissez tout le contenu du dossier `makbat-site` dans la page.
3. Verifiez que `index.html`, `css/style.css`, `js/script.js` et `assets/img/cuisine-makbat-hero.png` sont bien presents.
4. Cliquez sur `Commit changes`.

## 4. Activer GitHub Pages

1. Ouvrez l'onglet `Settings` du depot.
2. Dans le menu de gauche, cliquez sur `Pages`.
3. Dans `Build and deployment`, choisissez `Deploy from a branch`.
4. Selectionnez la branche `main`.
5. Selectionnez le dossier `/root`.
6. Cliquez sur `Save`.

## 5. Recuperer le lien du site

Apres quelques minutes, GitHub affichera l'adresse du site. Elle ressemblera a :

```text
https://votre-nom-utilisateur.github.io/makbat/
```

Si le depot s'appelle `votre-nom-utilisateur.github.io`, l'adresse sera plus courte :

```text
https://votre-nom-utilisateur.github.io/
```

## 6. Ajouter un nom de domaine

Si vous possedez un domaine comme `makbat.be`, retournez dans `Settings`, puis `Pages`, et ajoutez le domaine dans `Custom domain`. GitHub donnera ensuite les reglages DNS a configurer chez le fournisseur du domaine.

## 7. Mettre le site a jour plus tard

Pour modifier le site :

1. Ouvrez le fichier concerne dans GitHub.
2. Cliquez sur l'icone crayon.
3. Faites la modification.
4. Cliquez sur `Commit changes`.

GitHub Pages republiera automatiquement le site.
