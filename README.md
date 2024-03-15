Bonjour,

Ceci est notre rendu de projet CarteX.

Objectif : Créer un gestionnaire de cartes Yu-Gi-Oh! et intégrer l’API externe https://db.ygoprodeck.com/api/v7/cardinfo.php.

Outils et langages :
    React JS et HTML/CSS pour le frontend
    MySQL/MariaDB pour la base de données
    Git/GitHub pour le versionning
    PHP POO pour la page d’administration
    PHPUnit pour les tests unitaires

Durée : Du 18/12/2023 à 10:00 au 21/12/2023 à 16:45

Groupe : Théo MENANT–FERRY + Alexandre DO + Raphaël ROMERO + Rémi KORZENIOWSKI

Classe : BTC2 25.1 Ipssi Paris

Soutenance dans la journée du 22/12/2023.

CONSIGNES DÉTAILLÉES :

Développer une application web de gestionnaire de cartes Yu-Gi-Oh! et intégrer l’API externe https://db.ygoprodeck.com/api/v7/cardinfo.php.

Le gestionnaire de cartes :
    Les utilisateurs ont la capacité de lire, créer, mettre à jour, supprimer des cartes
    Les données des cartes sont stockées dans une base de donnée MySQL
    Les données des cartes sont exploitées via Node.js pour les utilisateurs
    Les données des cartes sont exploitées via PHP avec PDO pour les administrateurs

Intégration de l’API externe :
    Les données de l’API https://db.ygoprodeck.com/api/v7/cardinfo.php sont stockées localement dans une base de donnée

Interface utilisateur :
    Doit respecter l’univers de Yu-Gi-Oh!
    Doit permettre la visualisation de toutes les cartes stockées dans la base de données
    Doit permettre l’ajout, la modification et la suppression de cartes personnalisées (via Node.js et PHP)
    Doit permettre d’afficher les informations détaillées des cartes
    Doit permettre une recherche parmis toutes les cartes importées via système de filtres et de recherche (filtre par nom, par prix et par rareté)

Tests unitaires :
    Tests unitaires adéquats pour la page administrateur en PHP

RÉCUPÉRATION ET INSTALLATION DU PROJET :

Prérequis :
    WAMP/LAMP/XAMP ou autre plateforme de développement web utilisant MariaDB
    Node.js

Si besoin, télécharger à partir des sites officiels :
    https://www.wampserver.com/
    https://nodejs.org/en/download/

Récupérer le projet à l’aide de la commande “git clone https://github.com/ttnmeoeayhrnefr/projet-cartex“

Utiliser le script “ProjetCarteX.sql” pour mettre en place la base de données.

Dans le répertoire “front”, saisir les commandes :
    “npm install”
    “npm start”

Dans le répertoire “back”, saisir les commandes:
    “npm install”
    “node server.js”

Dans le répertoire “backoffice”, saisir les commandes:
    “composer require –dev phpunit/phpunit”
    “npm install”
    “npm start’

Vous êtes prêt à visiter notre site.

/!\ Logins utiles pour le test du site :
- purple / purple pour un utilisateur standard
- admin / admin pour un utilisateur administrateur
- vous pouvez également crée un compte si vous voulez, par contre il n'y a pas la possibilité d'être admin

REMERCIEMENTS :

Nous tenons à exprimer notre gratitude à l'égard de l'IPSSI Paris, institution qui a été le cadre propice à l'épanouissement de notre projet de gestionnaire de cartes Yu-Gi-Oh!. Ce projet, essentiel à notre formation, nous a permis d'explorer et d'appliquer des connaissances pratiques cruciales dans le domaine du développement web.

Nous tenons à remercier chaleureusement Monsieur Maxime OUDOT et Madame Laetitia PINTO, nos professeurs, pour leur précieux soutien, leur expertise et leurs conseils avisés tout au long de la préparation à ce projet. Leur dévouement et leur disponibilité ont été des atouts majeurs dans l'aboutissement de ce travail.

La conception de ce gestionnaire de cartes Yu-Gi-Oh! nous a offert une opportunité exceptionnelle d'approfondir nos compétences en développement web, en intégration d'API et en gestion de bases de données, tout en nous permettant de répondre aux exigences spécifiques du projet.

Ce projet a été une expérience formatrice et enrichissante, nous permettant d'acquérir des compétences précieuses et de consolider nos connaissances dans un environnement stimulant.

Nous sommes reconnaissants envers l'IPSSI Paris, nos professeurs et tous ceux qui ont contribué de près ou de loin à la réalisation de ce projet. Cette expérience restera un pilier important dans notre parcours académique et professionnel.