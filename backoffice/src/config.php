<?php
// require './backoffice/vendor/autoload.php';
// Inclusion de la bibliothèque autoloader pour charger les classes nécessaires
require '/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/vendor/autoload.php';

// Utilisation de la bibliothèque Dotenv pour charger les variables d'environnement depuis un fichier .env
use Dotenv\Dotenv;

// Création d'une instance de Dotenv pour charger les variables d'environnement
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

try {
    // Récupération des informations de connexion à la base de données depuis les variables d'environnement
    $hote = $_ENV['DB_HOST'];
    $port = $_ENV['DB_PORT'];
    $utilisateur = $_ENV['DB_USER'];
    $motDePasse = $_ENV['DB_PASS'];
    $nomDeLaBase = $_ENV['DB_NAME'];

    // Création d'une connexion PDO à la base de données
    $connexion = new PDO("mysql:host=$hote;port=$port;dbname=$nomDeLaBase", $utilisateur, $motDePasse);
    // Configuration de PDO pour générer des exceptions en cas d'erreur
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Gestion des erreurs de connexion à la base de données
    echo "Erreur de connexion à la base de données: " . $e->getMessage();
    die(); // Arrêt du script en cas d'échec de connexion
}
