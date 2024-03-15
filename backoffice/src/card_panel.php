<?php
// Inclusion des fichiers de configuration et d'accès aux données
    include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/config.php";
    include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/DAO.php";

    // Création d'une instance de DAO avec la connexion existante
    $DAO = new DAO($connexion);
    // Récupération de la liste de toutes les cartes depuis la base de données
    $card = $DAO->listAllCards();
    // Vérifie le rôle de l'utilisateur à l'aide des cookies
    if($_COOKIE['role']==1) {
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card - AdminPanel</title>
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
                        <a href="user_panel.php" id="a3l">
                            <img src="assets/l_chevron.svg" alt="left button" id="l_chev3">
                        </a>
                    </div>
                    <div class="content-sct">
                        <div class="user-sct">
                            <div class="title-sct">
                                <h2 id="Usr">
                                    Gestion cartes Yu-Gi-Oh !  
                                </h2>
                            </div>
                            <div class="gest-sct">
                                <!-- Affichage d'une table contenant les informations des cartes -->
                                <div class="cardUpdateSct">
                                    <?php
                                        echo "<table>";
                                        echo "<td><a href='card_add.php'>Ajouter carte</a></td>";
                                        echo "<tr><th>ID</th><th>Nom</th><th>Image</th><th>Img Petite</th><th>Img Cropped</th>
                                        <th>Id Konami</th><th>Description</th><th>Type</th><th>Race</th><th>Attaque</th><th>Défense</th>
                                        <th>Étoile</th><th>Archetype</th><th>Attribut</th><th>Prix Cardmarket</th><th>Prix Tcgplayer</th>
                                        <th>Prix Ebay</th><th>Prix Amazon</th><th>Catégorie Collection</th><th>Rareté</th><th>Actions</th></tr>";
                                        // Affichage des informations de chaque carte dans une ligne
                                        // ... (Chaque cellule contient les détails d'une carte) ...
                                        foreach ($card as $cd) {
                                            echo "<tr>";
                                            echo "<td>" . $cd['id_carte'] . "</td>";
                                            echo "<td>" . $cd['nom'] . "</td>";
                                            echo "<td><img class='carteImg' src='" . $cd['image'] . "'></td>";
                                            echo "<td><img class='carteImg' src='" . $cd['image_petite'] . "'></td>";
                                            echo "<td><img class='carteImg' src='" . $cd['image_cropped'] . "'></td>";
                                            echo "<td>" . $cd['id_carte_konami'] . "</td>";
                                            echo "<td>" . $cd['description'] . "</td>";
                                            echo "<td>" . $cd['type'] . "</td>";
                                            echo "<td>" . $cd['race'] . "</td>";
                                            echo "<td>" . $cd['attaque'] . "</td>";
                                            echo "<td>" . $cd['defense'] . "</td>";
                                            echo "<td>" . $cd['etoiles'] . "</td>";
                                            echo "<td>" . $cd['archetype'] . "</td>";
                                            echo "<td>" . $cd['attribut'] . "</td>";
                                            echo "<td>" . $cd['cardmarket_price'] . "</td>";
                                            echo "<td>" . $cd['tcgplayer_price'] . "</td>";
                                            echo "<td>" . $cd['ebay_price'] . "</td>";
                                            echo "<td>" . $cd['amazon_price'] . "</td>";
                                            echo "<td>" . $cd['set_nom'] . "</td>";
                                            echo "<td>" . $cd['set_rarete'] . "</td>";
                                            echo "<td><a href='card_update.php?card=" . $cd['id_carte'] . "'>Modifier carte</a></td>";
                                            echo "<td><a href='card_del.php?cardId=" . $cd['id_carte'] .  "'>Supprimer carte</a></td>";
                                            echo "</tr>";
                                        }
                                        echo "</table>";
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-btn">
                        <a href="pro_panel.php">
                            <img src="assets/r_chevron.svg" alt="right button" id="r_chev3">
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
        // Si l'utilisateur n'a pas le rôle nécessaire (rôle différent de 1), afficher un message d'erreur
        echo "vous n'avez pas les droits";
    }
?>