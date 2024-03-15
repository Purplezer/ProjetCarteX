<?php
include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/config.php";
include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/DAO.php";
// Affichage de la page si admin
if($_COOKIE['role']==1) {
?>

<!DOCTYPE html>
<html lang="en">
<!-- Mise a jour de l utilisateur -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UserUpdate - AdminPanel</title>
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
                                    Nouvel utilisateur  
                                </h2>
                            </div>
                            <div class="gest-sct">
                                <div class="template">
                                    <form action="request.php?req=1" method="post">
                                        <div class="userUpdateSct">
                                            <div class="userPseudoSct">
                                                <label for="userPseudo">Pseudo</label>
                                                <input type="text" name="userPseudo" id="usrPseudo" value="" required>
                                            </div>
                                            <div class="userPwdSct">
                                                <label for="userMdp">Mot de passe</label>
                                                <input type="password" name="userMdp" id="usrMdp" value="" required>
                                            </div>
                                            <div class="userRoleSct">
                                                <label for="userRole">Rôle</label>
                                                <select name="userRole" id="usrRole" required>
                                                    <option value="0">Utilisateur</option>
                                                    <option value="1">Admin</option>
                                                </select>
                                            </div>
                                            <div class="submitSct">
                                                <input type="submit" value="Créer utilisateur">
                                            </div>
                                        </div>
                                    </form>
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