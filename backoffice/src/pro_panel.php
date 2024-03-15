<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        try {
            // Config DB
            $bdd = new PDO('mysql:host=127.0.0.1;port=3307;dbname=ProjetCarteX', 'ProjetCarteX', 'ProjetCarteX');
            $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Formatage DB si eraseTables appuyé
            if (isset($_POST['eraseTables'])) {
                // Execution SQL sur DB
                $bdd->exec("DROP TABLE IF EXISTS `deck`;");
                $bdd->exec("DROP TABLE IF EXISTS `carte`;");
                $bdd->exec("DROP TABLE IF EXISTS `utilisateur`;");
                echo "Tables effacées avec succès.";
            // Si fichier choisi et bouton importé pressé, import SQL
            } elseif (isset($_FILES['fichierSQL']) && $_FILES['fichierSQL']['error'] === UPLOAD_ERR_OK) {
                // importation du fichier
                $cheminTemporaire = $_FILES['fichierSQL']['tmp_name'];
                $scriptSQL = file_get_contents($cheminTemporaire);
                // Execution du script
                $bdd->exec($scriptSQL);
                echo "Script SQL importé avec succès.";
            } else {
                echo "Erreur lors du téléchargement du fichier SQL.";
            }
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    }

include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/config.php";
include "/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/DAO.php";
$DAO = new DAO($connexion);
if($_COOKIE['role']==1) {
?>

<!-- Panel de gestion de la BDD formatage et importation SQL -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pro - AdminPanel</title>
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
                        <a href="card_panel.php" id="a3l">
                            <img src="assets/l_chevron.svg" alt="left button" id="l_chev3">
                        </a>
                    </div>
                    <div class="content-sct">
                        <div class="user-sct">
                            <div class="title-sct">
                                <h2 id="Usr">
                                    Attention DANGER !  
                                </h2>
                            </div>
                            <div class="gest-sct">
                                <div class="sqlSct">
                                    <h1>Importation de script SQL</h1>
                                    <!-- Form vers lui meme avec empechement attaque XSS avec encodage type fichier -->
                                    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" enctype="multipart/form-data">
                                        <label for="fichierSQL">Sélectionnez le fichier SQL à importer :</label>
                                        <input type="file" name="fichierSQL" accept=".sql" required>
                                        <br>
                                        <input type="submit" value="Importer">
                                    </form>
                                </div>
                                <div class="eraseScr">
                                    <h1>Formatage de la DB</h1>
                                    <!-- Form vers lui meme avec empechement attaque XSS -->
                                    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                                        <input type="hidden" name="eraseTables" value="1">
                                        <input type="submit" value="Supprimer les tables">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-btn">
                        <img src="assets/r_chevron.svg" alt="right button" id="r_chev4">
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