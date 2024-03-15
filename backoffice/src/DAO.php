<?php
include '/Applications/XAMPP/xamppfiles/htdocs/projet-cartex/backoffice/src/config.php';

// Ce fichier contient les définitions de classes pour la gestion des cartes et des utilisateurs.

// Classe représentant une carte.
class Cards
{
    // Propriétés représentant les caractéristiques d'une carte.
    private $id;
    private $nom;
    private $image;
    private $image_small;
    private $image_cropped;
    private $id_konami;
    private $description;
    private $type;
    private $race;
    private $attack;
    private $defense;
    private $stars;
    private $archetype;
    private $attribute;
    private $cardmarket_price;
    private $tcgplayer_price;
    private $ebay_price;
    private $amazon_price;
    private $set_nom;
    private $set_rarete;

    // Constructor de la carte
    public function __construct($id, $nom, $image, $image_small, $image_cropped, $id_konami, $description, $type, $race, $attack, $defense, $stars, $archetype, $attribute, $cardmarket_price, $tcgplayer_price, $amazon_price, $ebay_price, $set_nom, $set_rarete)
    {
        $this->id = $id;
        $this->nom = $nom;
        $this->image = $image;
        $this->$image_small = $image_small;
        $this->image_cropped = $image_cropped;
        $this->id_konami = $id_konami;
        $this->description = $description;
        $this->type = $type;
        $this->race = $race;
        $this->attack = $attack;
        $this->defense = $defense;
        $this->stars = $stars;
        $this->archetype = $archetype;
        $this->attribute = $attribute;
        $this->cardmarket_price = $cardmarket_price;
        $this->ebay_price = $ebay_price;
        $this->amazon_price = $amazon_price;
        $this->tcgplayer_price = $tcgplayer_price;
        $this->set_nom = $set_nom;
        $this->set_rarete = $set_rarete;
    }

    // Méthodes pour obtenir les différentes propriétés de la carte.
    //GETTERS
    public function getId()
    {
        return $this->id;
    }
    public function getNom()
    {
        return $this->nom;
    }
    public function getImage()
    {
        return $this->image;
    }
    public function getImageSmall()
    {
        return $this->image_small;
    }
    public function getImageCropped()
    {
        return $this->image_cropped;
    }
    public function getIdKonami()
    {
        return $this->id_konami;
    }
    public function getDescription()
    {
        return $this->description;
    }
    public function getType()
    {
        return $this->type;
    }
    public function getRace()
    {
        return $this->race;
    }
    public function getAttack()
    {
        return $this->attack;
    }
    public function getDefense()
    {
        return $this->defense;
    }
    public function getStars()
    {
        return $this->stars;
    }
    public function getArchetype()
    {
        return $this->archetype;
    }
    public function getAttribute()
    {
        return $this->attribute;
    }
    public function getEbayPrice()
    {
        return $this->ebay_price;
    }
    public function getAmazonPrice()
    {
        return $this->amazon_price;
    }
    public function getCardmarketPrice()
    {
        return $this->cardmarket_price;
    }
    public function getTcgPlayerPrice()
    {
        return $this->tcgplayer_price;
    }
    public function getSetNom()
    {
        return $this->set_nom;
    }
    public function getSetRarete()
    {
        return $this->set_rarete;
    }

    //SETTERS
    public function setId($id)
    {
        $this->id = $id;
    }
    public function setNom($nom)
    {
        $this->nom = $nom;
    }
    public function setImage($image)
    {
        $this->image = $image;
    }
    public function setImageSmall($image_small)
    {
        $this->$image_small = $image_small;
    }
    public function setImageCropped($image_cropped)
    {
        $this->image_cropped = $image_cropped;
    }
    public function setIdKonami($id_konami)
    {
        $this->id_konami = $id_konami;
    }
    public function setDescription($description)
    {
        $this->description = $description;
    }
    public function setType($type)
    {
        $this->type = $type;
    }
    public function setRace($race)
    {
        $this->race = $race;
    }
    public function setAttack($attack)
    {
        $this->attack = $attack;
    }
    public function setDefense($defense)
    {
        $this->defense = $defense;
    }
    public function setStars($stars)
    {
        $this->stars = $stars;
    }
    public function setArchetype($archetype)
    {
        $this->archetype = $archetype;
    }
    public function setAttribute($attribute)
    {
        $this->attribute = $attribute;
    }
    public function setCardmarketPrice($cardmarket_price)
    {
        $this->cardmarket_price = $cardmarket_price;
    }
    public function setEbayPrice($ebay_price)
    {
        $this->ebay_price = $ebay_price;
    }
    public function setAmazonPrice($amazon_price)
    {
        $this->amazon_price = $amazon_price;
    }
    public function setTcgplayerPrice($tcgplayer_price)
    {
        $this->tcgplayer_price = $tcgplayer_price;
    }
    public function setSetNom($set_nom)
    {
        $this->set_nom = $set_nom;
    }
    public function setSetRarete($set_rarete)
    {
        $this->set_rarete = $set_rarete;
    }
}

// Classe représentant un utilisateur.
class Utilisateurs
{
    // Propriétés liées à un utilisateur.
    private $id;
    private $pseudo;
    private $password;
    private $role;

    // Le constructeur vérifie les données d'entrée pour créer un utilisateur valide.
    public function __construct($id, $pseudo, $password, $role)
    {
        // Vérification d'entrée d'un pseudo
        if (empty($pseudo)) {
            throw new InvalidArgumentException("Le pseudo de l'utilisateur est requis.");
        }

        // Vérification d'entrée d'un mot de passe
        if (empty($password)) {
            throw new InvalidArgumentException("Le mot de passe de l'utilisateur est requis.");
        }

        // Vérification d'entrée d'un role valide, 0 = utilisateur standard, 1 = administrateur
        if ($role !== '0' && $role !== '1') {
            throw new InvalidArgumentException("Le rôle de l'utilisateur doit être soit 0 soit 1.");
        }
        $this->id = $id;
        $this->pseudo = $pseudo;
        $this->password = $password;
        $this->role = $role;
    }

    //GETTERS
    public function getId()
    {
        return $this->id;
    }
    public function getPseudo()
    {
        return $this->pseudo;
    }
    public function getPassword()
    {
        return $this->password;
    }
    public function getRole()
    {
        return $this->role;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    //SETTERS
    public function setPseudo($pseudo)
    {
        $this->pseudo = $pseudo;
    }
    public function setPassword($password)
    {
        $this->password = $password;
    }
    public function setRole($role)
    {
        $this->role = $role;
    }
}

// Classe DAO pour interagir avec la base de données.
class DAO
{
    private $bdd;

    // Constructeur
    public function __construct($bdd)
    {
        $this->bdd = $bdd;
    }

        // Méthodes pour effectuer des opérations sur les utilisateurs et les cartes.
        public function listAllUsers() {
            try {
                $row = $this->bdd->prepare("SELECT * FROM utilisateur");
                $row->execute();
                return $row->fetchAll(PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                echo "Erreur lors de l'affichage des utilisateurs: " . $e->getMessage();
                return [];
            }
        }

        //fonction pour afficher les utilisateurs par id
        public function listUserById($id_user) {
            try {
                $row = $this->bdd->prepare("SELECT * FROM utilisateur WHERE id_user = :id_user");
                $row->bindParam(":id_user", $id_user);
                $row->execute();
                return $row->fetch(PDO::FETCH_ASSOC) ?: [];
            } catch (PDOException $e) {
                echo "Erreur lors de l'affichage des utilisateurs par id: " . $e->getMessage();
                return [];
            }
        }   
        public function listUserByUsername($username)
        {
            try {
                $row = $this->bdd->prepare("SELECT * FROM utilisateur WHERE pseudo = :username");
                $row->bindParam(":username", $username);
                $row->execute();
                return $row->fetch(PDO::FETCH_ASSOC) ?: [];
            } catch (PDOException $e) {
                echo "Erreur lors de l'affichage de l'utilisateur par pseudo: " . $e->getMessage();
                return [];
            }
        }


    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

    //fonction pour ajouter un utilisateur
    public function addUser($pseudo, $mdp, $role) {
        try {
            $hash = password_hash($mdp, PASSWORD_BCRYPT);
            $row = $this->bdd->prepare("INSERT INTO utilisateur(pseudo, mdp, role) VALUES(:pseudo, :mdp, :role)");
            $row->bindParam(':pseudo', $pseudo);
            $row->bindParam(':mdp', $hash);
            $row->bindParam(':role', $role);
            $row->execute();
            $row2 = $this->bdd->prepare("SELECT id_user FROM utilisateur WHERE pseudo = :pseudo");
            $row2->bindParam(':pseudo', $pseudo);
            $row2->execute();
            $result = $row2->fetch(PDO::FETCH_ASSOC);
            return $result['id_user'];
            echo "Utilisateur ajouté avec succès.";
        } catch (PDOException $e) {
            echo "Erreur lors de l'ajout de l'utilisateur: " . $e->getMessage();
        }
    }
      


        //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        //fonction pour modifier un utilisateur par id
        public function updateUserById($pseudo, $mdp, $role, $id) {
            try {
                $hash = password_hash($mdp, PASSWORD_BCRYPT);
                $row = $this->bdd->prepare("UPDATE utilisateur SET pseudo = :pseudo, mdp = :mdp, role = :role WHERE id_user = :id_user");
                $row->bindParam(':pseudo', $pseudo);
                $row->bindParam(':mdp', $hash); 
                $row->bindParam(':role', $role);
                $row->bindParam(':id_user', $id);
                $row->execute();
                return true;
            } catch (PDOException $e) {
                echo "Erreur lors de la mise à jour de l'utilisateur: " . $e->getMessage();
                return false;
            }
        }
         


    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

    //fonction pour supprimer un utilisateur par id
    public function removeUserById($id_user)
    {
        try {
            $row = $this->bdd->prepare("DELETE FROM utilisateur WHERE id_user = :id_user");
            $row->bindParam(':id_user', $id_user);
            $row->execute();
            return true;
        } catch (PDOException $e) {
            echo "Erreur lors de la suppression de l'utilisateur: " . $e->getMessage();
            return false;
        }
    }


    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

    //fonction pour ajouter une carte
        public function addCard($nom,$image,$image_small,$image_cropped,$id_konami,$description,$type,$race,$attack,$defense,$stars,$archetype,$attribute,$cardmarket_price,$ebay_price,$amazon_price,$tcgplayer_price,$collection,$rarete) {
            if ($type === 'monstre') {
                $requiredMonsterType = [
                    'race' => $race,
                    'attack' => $attack,
                    'defense' => $defense,
                    'stars' => $stars,
                    'attribute' => $attribute
                ];
    
                foreach ($requiredMonsterType as $field => $value) {
                    if (empty($value)) {
                        throw new InvalidArgumentException("Le champ '$field' est obligatoire pour une carte de type 'monstre'.");
                    }
                }
            }
            $required = [
                'nom' => $nom,
                'image' => $image,
                'image_small' => $image_small,
                'image_cropped' => $image_cropped,
                'id_konami' => $id_konami,
                'description' => $description,
                'type' => $type,
                'cardmarket_price' => $cardmarket_price,
                'tcgplayer_price' => $tcgplayer_price,
                'ebay_price' => $ebay_price,
                'amazon_price' => $amazon_price,
                'collection' => $collection,
                'rarete' => $rarete
            ];
    
            foreach ($required as $field => $value) {
                if (empty($value)) {
                    throw new InvalidArgumentException("Le champ '$field' de la carte est requis.");
                }
            }
            try {
                $row = $this->bdd->prepare("INSERT INTO carte(nom, image, image_petite, image_cropped, id_carte_konami, description, type, race, attaque, defense, etoiles, archetype,
                attribut, cardmarket_price, ebay_price, amazon_price, tcgplayer_price, set_nom, set_rarete) VALUES (:nom, :image, :image_small, :image_cropped, :id_konami, :description, :type, 
                :race, :attack, :defense, :stars, :archetype, :attribute, :cardmarket_price, :ebay_price, :amazon_price, :tcgplayer_price, :set_nom, :set_rarete)");
                $row->bindParam(":nom", $nom);
                $row->bindParam(":image", $image);
                $row->bindParam(":image_small", $image_small);
                $row->bindParam(":image_cropped", $image_cropped);
                $row->bindParam(":id_konami", $id_konami);
                $row->bindParam(":description", $description);
                $row->bindParam(":type", $type);
                $row->bindParam(":race", $race);
                $row->bindParam(":attack", $attack);
                $row->bindParam(":defense", $defense);
                $row->bindParam(":stars", $stars);
                $row->bindParam(":archetype", $archetype);
                $row->bindParam(":attribute", $attribute);
                $row->bindParam(":cardmarket_price", $cardmarket_price);
                $row->bindParam(":ebay_price", $ebay_price);
                $row->bindParam(":amazon_price", $amazon_price);
                $row->bindParam(":tcgplayer_price", $tcgplayer_price);
                $row->bindParam(":set_nom", $collection);
                $row->bindParam(":set_rarete", $rarete);
                $row->execute();
                $row2 = $this->bdd->prepare("SELECT id_carte FROM carte WHERE nom = :nom");
                $row2->bindParam(':nom', $nom);
                $row2->execute();
                $result = $row2->fetch(PDO::FETCH_ASSOC);
                return $result['id_carte'];
                return true;
            } catch (PDOException $e) {
                echo "Erreur lors de la création de la carte par son id :" . $e->getMessage();
                return false;
            }
        }

        //fonction pour lister toutes les cartes
    public function listAllCards()
    {
        try {
            $row = $this->bdd->prepare("SELECT * FROM carte");
            $row->execute();
            return $row->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo "Erreur lors de la récupération des cartes :" . $e->getMessage();
            return [];
        }
    }

    //fonction pour lister les cartes par id
        public function listCardById($idCarte) {
            try {
                $row = $this->bdd->prepare("SELECT * FROM carte WHERE id_carte = :id_carte");
                $row->bindParam(":id_carte", $idCarte);
                $row->execute();
                return $row->fetch(PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                echo "Erreur lors de la récupération des cartes :" . $e->getMessage();
                return [];
            }
        }

        //fonction pour modifier une carte par id
        public function updateCardById($nom,$image,$image_small,$image_cropped,$id_konami,$description,$type,$race,$attack,$defense,$stars,$archetype,$attribute,$cardmarket_price,$ebay_price,$amazon_price,$tcgplayer_price,$cNom,$rare,$idCarte) {
            try {
                $row = $this->bdd->prepare("UPDATE carte SET nom = :nom, image = :image, image_petite = :image_small, image_cropped = :image_cropped, id_carte_konami = :id_konami,
                description = :description, type = :type, race = :race, attaque = :attack, defense = :defense, etoiles = :stars, archetype = :archetype, attribut = :attribute,
                cardmarket_price = :cardmarket_price, ebay_price = :ebay_price, amazon_price = :amazon_price, tcgplayer_price = :tcgplayer_price, set_nom = :setnom, set_rarete = :set_rare WHERE id_carte = :id_carte");
                $row->bindParam(":nom", $nom);
                $row->bindParam(":image", $image);
                $row->bindParam(":image_small", $image_small);
                $row->bindParam(":image_cropped", $image_cropped);
                $row->bindParam(":id_konami", $id_konami);
                $row->bindParam(":description", $description);
                $row->bindParam(":type", $type);
                $row->bindParam(":race", $race);
                $row->bindParam(":attack", $attack);
                $row->bindParam(":defense", $defense);
                $row->bindParam(":stars", $stars);
                $row->bindParam(":archetype", $archetype);
                $row->bindParam(":attribute", $attribute);
                $row->bindParam(":cardmarket_price", $cardmarket_price);
                $row->bindParam(":ebay_price", $ebay_price);
                $row->bindParam(":amazon_price", $amazon_price);
                $row->bindParam(":tcgplayer_price", $tcgplayer_price);
                $row->bindParam(":setnom", $cNom);
                $row->bindParam(":set_rare", $rare);
                $row->bindParam(":id_carte", $idCarte);
                $row->execute();
                return true;
            } catch (PDOException $e) {
                echo "Erreur lors de la modification de la carte par son id :" . $e->getMessage();
                return false;
            }
        }
    
        //fonction pour supprimer une carte par id

        public function removeCardById($idCarte) {
            try {
                $row = $this->bdd->prepare("DELETE FROM carte WHERE id_carte = :id_carte");
                $row->bindParam(":id_carte", $idCarte);
                $row->execute();
                return true;
            } catch (PDOException $e) {
                echo "Erreur lors de la suppression de la carte par son id :" . $e->getMessage();
                return false;
            }
        }
        // Cqrtes
        // private $id;
        // private $nom;
        // private $image;
        // private $image_small;
        // private $image_cropped;
        // private $id_konami;
        // private $description;
        // private $type;
        // private $race;
        // private $attack;
        // private $defense;
        // private $stars;
        // private $archetype;
        // private $attribute;
        // private $cardmarket_price;
        // private $tcgplayer_price;
        // private $ebay_price;
        // private $amazon_price;
        // private $set_nom;
        // private $set_rarete;
    }
?>