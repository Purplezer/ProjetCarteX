<?php
    include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/config.php";
    include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/DAO.php";

    // Affichage de la page si admin
    $id = $_GET['user'];
    if($_COOKIE['role']==1) {
?>

<!-- Suppresion  utilisateur -->
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>UserRemove - AdminPanel</title>
        <link rel="stylesheet" href="style.scss">
    </head>
    <body>
        <div class="page-sct">
            <div class="navbar-sct">
                <div class="logo-sct">
                    <h1>Panneau d'administration</h1>
                </div>
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
                                    Suppression utilisateur  
                                </h2>
                            </div>
                            <div class="gest-sct">
                                <div class="userSupSct">
                                    <div class="msg">
                                        <h2>Voulez-vous vraiment supprimer cet utilisateur ?</h2>
                                        <a href="request.php?id=<?php echo $id ?>&req=3">Oui j'en suis sûr !</a>
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
        echo "vous n'avez pas les droits";
    }
?>