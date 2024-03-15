<?php
include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/config.php";
include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/DAO.php";

// Affichage de la page si admin
$DAO = new DAO($connexion);
$user = $DAO->listAllUsers();
if($_COOKIE['role']==1) {
?>

<!DOCTYPE html>
<html lang="en">

<!-- Panneau utilisateur -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User - AdminPanel</title>
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
                        <a href="home_panel.php" id="a2l">
                            <img src="assets/l_chevron.svg" alt="left button" id="l_chev2">
                        </a>
                    </div>
                    <div class="content-sct">
                        <div class="user-sct">
                            <div class="title-sct">
                                <h2 id="Usr">
                                    Gestion utilisateurs  
                                </h2>
                            </div>
                            <div class="gest-sct">
                                <div class="userUpdateSct">
                                    <!-- Affichage des utilisateur -->
                                    <?php
                                        echo "<table>";
                                        echo "<td><a href='user_add.php'>Ajouter utilisateur</a></td>";
                                        echo "<tr><th>ID</th><th>Pseudo</th><th>Mot de passe</th><th>Role</th><th>Actions</th></tr>";
                                        foreach ($user as $us) {
                                            echo "<tr>";
                                            echo "<td>" . $us['id_user'] . "</td>";
                                            echo "<td>" . $us['pseudo'] . "</td>";
                                            echo "<td>" . $us['mdp'] . "</td>";
                                            echo "<td>" . $us['role'] . "</td>";
                                            echo "<td><a href='user_update.php?user=" . $us['id_user'] . "'>Modifier utilisateur</a></td>";
                                            echo "<td><a href='user_del.php?user=" . $us['id_user'] . "'>Supprimer utilisateur</a></td>";
                                            echo "</tr>";
                                        }
                                        echo "</table>";
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-btn">
                        <a href="card_panel.php" id="a2r">
                            <img src="assets/r_chevron.svg" alt="right button" id="r_chev2">
                        </a>
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