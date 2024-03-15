<?php
// Inclusion des fichiers de configuration et d'accès aux données
    include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/config.php";
    include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/DAO.php";

    // Vérification du rôle de l'utilisateur à l'aide d'un cookie
    if($_COOKIE['role']==1) {
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - AdminPanel</title>
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
                <!-- Menu de navigation -->
                <div class="left-btn">
                    <img src="assets/l_chevron.svg" alt="left button" id="l_chev1">
                </div>
                <div class="content-sct">
                    <div class="message-sct">
                        <div class="title-sct">
                            <h2 id="Wlc">
                                Bienvenue Administrateur !
                            </h2>
                        </div>
                        <div class="text-sct">
                            <p id="Txt">
                                Appuyer sur les flèches sur les côtés de l'écran pour parcourir les différentes sections.
                                </br>
                                Vous pourrez effectuer la gestion de la base de données comprenant les utilisateurs ainsi que les différentes cartes.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Menu de navigation -->
                <div class="right-btn">
                    <a href="user_panel.php" id="a1r">
                        <img src="assets/r_chevron.svg" alt="right button" id="r_chev1">
                    </a>
                </div>
            </div>
        </div>
    </div>
</body>

</html>

<?php
    } else {
        echo "vous n'avez pas les droits"; // Message affiché si l'utilisateur n'a pas les droits
    }
?>