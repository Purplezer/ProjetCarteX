<?php
// Inclusion des fichiers de configuration et d'accès aux données
    include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/config.php";
    include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/DAO.php";

    // Création d'une instance de DAO avec la connexion existante
    $DAO = new DAO($connexion);
    // Récupération des détails d'une carte spécifique par son ID depuis la base de données
    $card = $DAO->listCardById($_GET['card']);
    // Vérifie le rôle de l'utilisateur à l'aide des cookies
    if($_COOKIE['role']==1) {
?>

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>UserUpdate - AdminPanel</title>
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
                        <a href="card_panel.php" id="a2l">
                            <img src="assets/l_chevron.svg" alt="left button" id="l_chev2">
                        </a>
                    </div>
                    <div class="content-sct">
                        <div class="user-sct">
                            <div class="title-sct">
                                <h2 id="Usr">
                                    Modification carte  
                                </h2>
                            </div>
                            <div class="gest-sct">
                                <div class="template">
                                    <form action="request.php?id=<?php echo $card['id_carte']; ?>&req=5" method="post">
                                    <!-- Formulaire prérempli avec les détails de la carte -->
                                    <!-- ... (Champs de formulaire pour chaque détail de la carte) ... -->
                                        <div class="cardUpdateSct">
                                            <div class="cardNomSct">
                                                <label for="cardNom">Nom</label>
                                                <input type="text" name="cardNom" id="cardNom" value="<?php echo $card['nom'] ?>" required>
                                            </div>
                                            <div class="cardImgSct">
                                                <label for="cardImg">Image (URL)</label>
                                                <input type="text" name="cardImg" id="cardImg" value="<?php echo $card['image'] ?>" required>
                                            </div>
                                            <div class="cardImgPetiteSct">
                                                <label for="cardImgPetite">Image petite (URL)</label>
                                                <input type="text" name="cardImgPetite" id="cardImgPetite" value="<?php echo $card['image_petite'] ?>" required>
                                            </div>
                                            <div class="cardImgCroppedSct">
                                                <label for="cardImgCropped">Image rognée (URL)</label>
                                                <input type="text" name="cardImgCropped" id="cardImgCropped" value="<?php echo $card['image_cropped'] ?>" required>
                                            </div>
                                            <div class="cardIdKonamiSct">
                                                <label for="cardIdKonami">Id Konami</label>
                                                <input type="text" name="cardIdKonami" id="cardIdKonami" value="<?php echo $card['id_carte_konami'] ?>">
                                            </div>
                                            <div class="cardDescrSct">
                                                <label for="cardDescr">Description</label>
                                                <input type="text" name="cardDescr" id="cardDescr" value="<?php echo $card['description'] ?>">
                                            </div>
                                            <div class="cardTypeSct">
                                                <label for="cardType">Type</label>
                                                <input type="text" name="cardType" id="cardType" value="<?php echo $card['type'] ?>">
                                            </div>
                                            <div class="cardRaceSct">
                                                <label for="cardRace">Race</label>
                                                <input type="text" name="cardRace" id="cardRace" value="<?php echo $card['race'] ?>">
                                            </div>
                                            <div class="cardAttackSct">
                                                <label for="cardAttack">Attack</label>
                                                <input type="text" name="cardAttack" id="cardAttack" value="<?php echo $card['attaque'] ?>">
                                            </div>
                                            <div class="cardDefenseSct">
                                                <label for="cardDefense">Defense</label>
                                                <input type="text" name="cardDefense" id="cardDefense" value="<?php echo $card['defense'] ?>">
                                            </div>
                                            <div class="cardStarsSct">
                                                <label for="cardStars">Étoile</label>
                                                <input type="text" name="cardStars" id="cardStars" value="<?php echo $card['etoiles'] ?>">
                                            </div>
                                            <div class="cardArchetypeSct">
                                                <label for="cardArchetype">Archetype</label>
                                                <input type="text" name="cardArchetype" id="cardArchetype" value="<?php echo $card['archetype'] ?>">
                                            </div>
                                            <div class="cardAttributSct">
                                                <label for="cardAttribut">Attribut</label>
                                                <input type="text" name="cardAttribut" id="cardAttribut" value="<?php echo $card['attribut'] ?>">
                                            </div>
                                            <div class="cardPriceCardmarketSct">
                                                <label for="cardPriceCardmarket">Prix Cardmarket</label>
                                                <input type="text" name="cardPriceCardmarket" id="cardPriceCardmarket" value="<?php echo $card['cardmarket_price'] ?>">
                                            </div>
                                            <div class="cardPriceTcgPlayerSct">
                                                <label for="cardPriceTcgPlayer">Prix TcgPlayer</label>
                                                <input type="text" name="cardPriceTcgPlayer" id="cardPriceTcgPlayer" value="<?php echo $card['tcgplayer_price'] ?>">
                                            </div>
                                            <div class="cardPriceEbaySct">
                                                <label for="cardPriceEbay">Prix Ebay</label>
                                                <input type="text" name="cardPriceEbay" id="cardPriceEbay" value="<?php echo $card['ebay_price'] ?>">
                                            </div>
                                            <div class="cardPriceAmazonSct">
                                                <label for="cardPriceAmazon">Prix Amazon</label>
                                                <input type="text" name="cardPriceAmazon" id="cardPriceAmazon" value="<?php echo $card['amazon_price'] ?>">
                                            </div>
                                            <div class="cardCollectionSct">
                                                <label for="cardCollection">Collection</label>
                                                <input type="text" name="cardCollection" id="cardCollection" value="<?php echo $card['set_nom'] ?>">
                                            </div>
                                            <div class="cardRareteSct">
                                                <label for="cardRarete">Rareté</label>
                                                <input type="text" name="cardRarete" id="cardRarete" value="<?php echo $card['set_rarete'] ?>">
                                            </div>
                                            <div class="submitSct">
                                                <input type="submit" value="Modifier carte">
                                            </div>
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
    </body>
</html>
<?php
    } else {
        // Si l'utilisateur n'a pas le rôle nécessaire (rôle différent de 1), afficher un message d'erreur
        echo "vous n'avez pas les droits";
    }
?>