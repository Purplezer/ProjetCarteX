<?php
    // Inclusion des fichiers de configuration et d'accès aux données
    include '/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/config.php';
    include '/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/DAO.php';

    // Création d'une instance de DAO en utilisant la connexion existante
    $dao = new DAO($connexion);

    // Configuration pour afficher les erreurs et les rapports d'erreurs
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    // Vérification du type de requête (POST)
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Vérification de la présence des champs d'authentification
        if (isset($_POST['logUser']) && isset($_POST['logPwd'])) {
            $username = $_POST['logUser'];
            $password = $_POST['logPwd'];

            // Récupération de l'utilisateur par son nom d'utilisateur depuis la base de données
            $user = $dao->listUserByUsername($username);
            session_destroy();

            // Vérification des informations d'identification
            if ($user && $user['role'] == '1' && password_verify($password, $user['mdp'])) {
                // Démarrage d'une session et attribution du rôle '1' à un cookie en cas de succès
                session_start();
                setcookie('role','1');
                header("Location: home_panel.php"); // Redirection vers la page d'accueil du panneau d'administration
                exit();
            } else {
                // Destruction de la session en cas d'échec d'authentification et affichage d'un message d'erreur
                session_destroy();
                echo "identifiant et/ou mdp incorrect";
                header("Location: panel.php"); // Redirection vers la page de connexion
            }
        }
    }
?>