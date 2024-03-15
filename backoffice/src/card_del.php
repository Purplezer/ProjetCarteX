<?php
// Inclusion des fichiers de configuration et d'accès aux données
    include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/config.php";
    include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/DAO.php";

    // Récupération de l'identifiant de la carte à supprimer depuis les paramètres GET
    $id = $_GET['cardId'];
    // Vérifie le rôle de l'utilisateur à l'aide des cookies
    if($_COOKIE['role']==1) {
?>

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CardRemove - AdminPanel</title>
        <link rel="stylesheet" href="style.scss">
    </head>
    <body>
        <div class="page-sct">
            <!-- Barre de navigation pour le panneau d'administration -->
            <div class="navbar-sct">
                <div class="logo-sct">
                    <h1>Panneau d'administration</h1>
                </div>
                <!-- Bouton de déconnexion -->
                <div class="disconnect-btn">
                    <a href="disc.php" id="aDisc">
                        <img src="assets/logout.svg" alt="logout" id="disco">
                    </a>
                </div>
            </div>
            <div class="panel-sct">
                <div class="home-sct">
                    <div class="left-btn">
                        <a href="user_panel.php" id="a2l">
                            <img src="assets/l_chevron.svg" alt="left button" id="l_chev2">
                        </a>
                    </div>
                    <div class="content-sct">
                        <div class="user-sct">
                            <div class="title-sct">
                                <h2 id="Usr">
                                    Suppression carte  
                                </h2>
                            </div>
                            <div class="gest-sct">
                                <!-- Confirmation de suppression de la carte -->
                                <div class="userSupSct">
                                    <div class="msg">
                                        <!-- Lien pour confirmer la suppression de la carte en appelant request.php -->
                                        <h2>Voulez-vous vraiment supprimer cette carte ?</h2>
                                        <a href="request.php?id=<?php echo $id ?>&req=6">Oui j'en suis sûr !</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </body>
</html>

<?php
    } else {
        // Si l'utilisateur n'a pas le rôle nécessaire (rôle différent de 1), afficher un message d'erreur
        echo "vous n'avez pas les droits";
    }
?>