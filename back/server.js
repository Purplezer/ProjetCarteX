const express = require("express");   // Importation du module express
const mariadb = require("mariadb");   // Importation du module mariadb
const bcrypt = require("bcryptjs");   // Importation du module bcryptjs
const cors = require("cors");         // Importation du module cors
const { reset } = require("nodemon"); // Importation du module nodemon
require("dotenv").config();           // Importation du module dotenv
const app = express();                // Création de l'application express
const port = 3001;                    // Définition du port d'écoute du serveur

const pool = mariadb.createPool({     // Création de la connexion à la base de données
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  connectionLimit: 20,
});



app.use(express.json());        // Utilisation du middleware express.json()
app.use(cors());          // Utilisation du middleware cors()

app.get("/", (req, res) => {        // Route de test
  res.json("Hello la Team!");
});


//GET ALL CARDS
app.get('/cartes', async (req, res) => {     
    let conn;
    try {
        console.log('Lancement de la connexion');
        conn = await pool.getConnection();
        console.log('Lancement de la requête');
        const rows = await conn.query('SELECT * FROM carte');
        console.log(rows);
        res.status(200).json(rows);
    }
    catch (err) {
        console.log(err);
    }
})


//GET ONE CARD BY ID
app.get('/cartes/:id', async (req, res) => {
    let conn;
    try {
        console.log('Lancement de la connexion');
        conn = await pool.getConnection();
        console.log('Lancement de la requête');
        const rows = await conn.query('SELECT * FROM carte WHERE id_carte = ?', [req.params.id]);
        console.log(rows);
        res.status(200).json(rows);
    }
    catch (err) {
        console.log(err);
    }
})


//GET ONE CARD BY NAME
app.get('/cartes/nom/:nom', async (req, res) => {
    let conn;
    try {
        console.log('Lancement de la connexion');
        conn = await pool.getConnection();
        console.log('Lancement de la requête');
        const rows = await conn.query('SELECT * FROM carte WHERE nom = ?', [req.params.nom]);
        console.log(rows);
        res.status(200).json(rows);
    }
    catch (err) {
        console.log(err);
    }
})

// GET 10 RANDOM CARDS
app.get('/cartes/random/random', async (req, res) => {
    let conn;
    try {
        console.log('Lancement de la connexion');
        conn = await pool.getConnection();
        console.log('Lancement de la requête');
        const rows = await conn.query('SELECT * FROM carte ORDER BY RAND() LIMIT 300');
        console.log(rows);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur lors de la récupération des cartes aléatoires.' });
    } finally {
        if (conn) conn.release();
    }
});

//GET 5 RANDOM CARDS FOR BOOSTER
app.get('/cartes/random/booster', async (req, res) => {
  let conn;
  try {
      console.log('Lancement de la connexion');
      conn = await pool.getConnection();
      console.log('Lancement de la requête');
      const rows = await conn.query('SELECT * FROM carte ORDER BY RAND() LIMIT 5');
      console.log(rows);
      res.status(200).json(rows);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erreur lors de la récupération des cartes aléatoires.' });
  } finally {
      if (conn) conn.release();
  }
});

//GET CARDS BY ID USER 
app.get('/cartes/utilisateurs/:id', async (req, res) => {
  let conn;
  try {
    console.log('Lancement de la connexion');
    conn = await pool.getConnection();
    console.log('Lancement de la requête');
    const rows = await conn.query('SELECT * FROM carte WHERE id_user = ?', [req.params.id]);
    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la récupération des cartes de l\'utilisateur.' });
  } finally {
    if (conn) conn.release();
  }
});

// POST NEW CARD
app.post("/cartes", async (req, res) => {
    let conn;
    try {
        console.log("lancement de la console");
        conn = await pool.getConnection();
        console.log("lancement de la requête");

        const {
          nom,
          type,
          description,
          image,
          image_cropped,
          image_petite,
          id_carte_konami,
          attaque,
          defense,
          etoiles,
          attribut,
          cardmarket_price,
          tcgplayer_price,
          ebay_price,
          amazon_price,
          set_nom,
          set_rarete,
          id_user
        } = req.body;

    
      const rows = await conn.query(`
      INSERT INTO carte (
        nom,
        type,
        description,
        image,
        image_cropped,
        image_petite,
        id_carte_konami,
        attaque,
        defense,
        etoiles,
        cardmarket_price,
        tcgplayer_price,
        ebay_price,
        amazon_price,
        set_nom,
        id_user
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [req.body.nom, req.body.type, req.body.description, req.body.image, req.body.image_cropped, req.body.image_petite, req.body.id_carte_konami, req.body.attaque, req.body.defense, req.body.etoiles, req.body.cardmarket_price, req.body.tcgplayer_price, req.body.ebay_price, req.body.amazon_price, req.body.set_nom, req.body.id_user]);
  
    
    console.log(rows)
  

        console.log(rows);
        res.status(200).json("L'ajout a bien été effectué");
    } catch (err) {
        console.log(err);
    } finally {
        if (conn) conn.release();
    }
});

// PUT CARD BY ID
app.put("/cartes/:id", async (req, res) => {
    let conn;
    try {
        console.log("Lancement de la connexion");
        conn = await pool.getConnection();
        console.log("Lancement de la requête");

        const {
            nom,
            type,
            description,
            image,
            image_cropped,
            image_petite,
            race,
            archetype,
            id_carte_konami,
            attaque,
            defense,
            etoiles,
            attribut,
            cardmarket_price,
            tcgplayer_price,
            ebay_price,
            amazon_price,
            set_nom,
            set_rarete,
            id_user,
        } = req.body;

        const rows = await conn.query(
            "UPDATE carte SET nom = ?, type = ?, description = ?, image = ?, image_cropped = ?, image_petite = ?, race = ?, archetype = ?, id_carte_konami = ?, attaque = ?, defense = ?, etoiles = ?, attribut = ?, cardmarket_price = ?, tcgplayer_price = ?, ebay_price = ?, amazon_price = ?, set_nom = ?, set_rarete = ?, id_user = ? WHERE id_carte = ?",
            [
                nom,
                type,
                description,
                image,
                image_cropped,
                image_petite,
                race,
                archetype,
                id_carte_konami,
                attaque,
                defense,
                etoiles,
                attribut,
                cardmarket_price,
                tcgplayer_price,
                ebay_price,
                amazon_price,
                set_nom,
                set_rarete,
                id_user,
                req.params.id
            ]
        );

        console.log(rows);
        res.status(200).json("La modification a bien été effectuée");

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Erreur lors de la modification de la carte dans la base de données." });
    } finally {
        if (conn) conn.release();
    }
});




// PUT CARD BY NAME
app.put("/cartes/nom/:nom", async (req, res) => {
    let conn;
    try {
        console.log("Lancement de la connexion");
        conn = await pool.getConnection();
        console.log("Lancement de la requête");

        const {
            nom,
            type,
            image,
            image_cropped,
            image_petite,
            race,
            archetype,
            id_carte_konami,
            attaque,
            defense,
            etoiles,
            attribut,
            cardmarket_price,
            tcgplayer_price,
            ebay_price,
            amazon_price,
            set_nom,
            set_rarete,
            id_user,
        } = req.body;

        const rows = await conn.query(
            "UPDATE carte SET nom = ?, type = ?, image = ?, image_cropped = ?, image_petite = ?, race = ?, archetype = ?, id_carte_konami = ?, attaque = ?, defense = ?, etoiles = ?, attribut = ?, cardmarket_price = ?, tcgplayer_price = ?, ebay_price = ?, amazon_price = ?, set_nom = ?, set_rarete = ?, id_user = ? WHERE nom = ?",
            [
                nom,
                type,
                image,
                image_cropped,
                image_petite,
                race,
                archetype,
                id_carte_konami,
                attaque,
                defense,
                etoiles,
                attribut,
                cardmarket_price,
                tcgplayer_price,
                ebay_price,
                amazon_price,
                set_nom,
                set_rarete,
                id_user,
                req.params.nom
            ]
        );

        console.log(rows);
        res.status(200).json("La modification a bien été effectuée");
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Erreur lors de la modification de la carte dans la base de données." });
    } finally {
        if (conn) conn.release();
    }
});
   

// DELETE CARD BY ID
app.delete("/cartes/:id", async (req, res) => {
    let conn;
    try {
      console.log("lancement de la console");
      conn = await pool.getConnection();
      console.log("lancement de la requête");
      const rows = await conn.query("delete from carte where id_carte = ?", [
        req.params.id,
      ]);
      console.log(rows);
      res.status(200).json("La suppression a bien été effectuée");
    } catch (err) {
      console.log(err);
    }
});


// DELETE CARD BY NAME
app.delete("/cartes/nom/:nom", async (req, res) => {
    let conn;
    try {
      console.log("lancement de la console");
      conn = await pool.getConnection();
      console.log("lancement de la requête");
      const rows = await conn.query("delete from carte where nom = ?", [
        req.params.nom,
      ]);
      console.log(rows);
      res.status(200).json("La suppression a bien été effectuée");
    } catch (err) {
      console.log(err);
    }
});



//CRUD UTILISATEUR
// POST UTILISATEUR
app.post("/utilisateurs", async (req, res) => {
  let conn;
  try {
    bcrypt
      .hash(req.body.mdp, 10)
      .then(async (hash) => {
        console.log("lancement de la requete POST");
        conn = await pool.getConnection();
        console.log("lancement de la POST");
        console.log(req.body);
        let requete = "INSERT INTO utilisateur (pseudo, mdp, role) VALUES (?, ?, ?)";
        let rows = await conn.query(requete, [req.body.pseudo, hash, req.body.role]);
        console.log(rows);
        res.status(200).json("L'ajout d'utilisateur a bien été effectué");
      })
      .catch((err) => res.status(500).json(err));
  } catch (err) {
    console.log(err);
  }
});


// GET ALL UTILISATEURS
app.get("/utilisateurs", async (req, res) => {
  let conn;
  try {
    console.log("lancement de la console");
    conn = await pool.getConnection();
    console.log("lancement de la requête");
    const rows = await conn.query("select * from utilisateur");
    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
});


// GET ONE UTILISATEUR BY ID
app.get("/utilisateurs/:id", async (req, res) => {
  let conn;
  try {
    console.log("lancement de la console");
    conn = await pool.getConnection();
    console.log("lancement de la requête");
    const rows = await conn.query(
      "select * from utilisateur where id_user = ?",
      [req.params.id]
    );
    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
});


// GET ONE UTILISATEUR BY NAME
app.get("/utilisateurs/nom/:pseudo", async (req, res) => {
  let conn;
  try {
    console.log("Lancement de la connexion");
    conn = await pool.getConnection();
    console.log("Lancement de la requête");
    const rows = await conn.query(
      "select * from utilisateur where pseudo = ?",
      [req.params.pseudo]
    );
    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
});


//PUT UTILISATEUR BY ID
app.put("/utilisateurs/:nom", async (req, res) => {
  let conn;
  try {
    bcrypt
      .hash(req.body.mot_de_passe, 10)
      .then(async (hash) => {
        console.log("lancement de la console");
        conn = await pool.getConnection();
        console.log("lancement de la requête");
        const rows = await conn.query(
          "update utilisateur set pseudo = ?, mot_de_passe = ? where pseudo = ?",
          [req.body.pseudo, hash, req.params.pseudo]
        );
        console.log(rows);
        res.status(200).json("La modification a bien été effectuée");
      })
      .catch((err) => res.status(500).json(err));
  } catch (err) {
    console.log(err);
  }
});


//DELETE UTILISATEUR BY ID
app.delete("/utilisateurs/:id", async (req, res) => {
  let conn;
  try {
    console.log("Lancement de la connexion");
    conn = await pool.getConnection();
    console.log("Lancement de la requête");
    const rows = await conn.query(
      "delete from utilisateur where id_user = ?",
      [req.params.id]
    );
    console.log(rows);
    res.status(200).json("La suppression a bien été effectuée");
  } catch (err) {
    console.log(err);
  }
});


//DELETE UTILISATEUR BY NAME
app.delete("/utilisateurs/nom/:pseudo", async (req, res) => {
  let conn;
  try {
    console.log("Lancement de la connexion");
    conn = await pool.getConnection();
    console.log("Lancement de la requête");
    const rows = await conn.query(
      "delete from utilisateur where pseudo = ?",
      [req.params.pseudo]
    );
    console.log(rows);
    res.status(200).json("La suppression a bien été effectuée");
  } catch (err) {
    console.log(err);
    res.status(500).json("Erreur lors de la suppression");
  }
});

// POST CONNEXION
app.post("/connexion", async (req, res) => {
  let conn;
  try {
    const { pseudo, mdp } = req.body;
    conn = await pool.getConnection();
    const rows = await conn.query(
      "SELECT * FROM utilisateur WHERE pseudo = ?",
      [pseudo]
    );

    if (rows.length > 0) {
      const user = rows[0];
      const match = await bcrypt.compare(mdp, user.mdp);

      if (match) {
        // Les mots de passe correspondent, authentification réussie
        res.status(200).json({ message: "Authentification réussie" });
      } else {
        // Les mots de passe ne correspondent pas
        res.status(401).json({ message: "Mot de passe incorrect" });
      }
    } else {
      // L'utilisateur n'existe pas
      res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erreur lors de l'authentification" });
  }
});



//CRUD LISTE CARTE
app.get("/listeCarte/:id", async (req, res) => {
  let conn;
  try {
    console.log("lancement de la console");
    conn = await pool.getConnection();
    console.log("lancement de la requête");
    const rows = await conn.query("select * from listeCard where id_user = ?", [req.params.id]);
    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
});

// app.get("/cartes/details/:id", async (req, res) => {
//   let conn;
//   try {
//     console.log("lancement de la console");
//     conn = await pool.getConnection();
//     console.log("lancement de la requête");
//     const rows = await conn.query(
//     `
//       SELECT carte.*
//       FROM carte
//       JOIN listecard ON carte.id_carte = listeCard.id_carte
//       WHERE listecard.id_user = ?
//     `,
//       [req.params.id]
//     );
//     console.log(rows);
//     res.status(200).json(rows);
//   } catch (err) {
//     console.log(err);
//   }
// });


//POST LISTE CARTE
app.post("/listeCarte", async (req, res) => {
  let conn;
  try {
    console.log("lancement de la console");
    conn = await pool.getConnection();
    console.log("lancement de la requête");
    const rows = await conn.query(
      "INSERT INTO listeCard (id_user, id_carte) VALUES (?, ?)",
      [req.body.id_user, req.body.id_carte]
    );
    console.log(rows);
    res.status(200).json("L'ajout a bien été effectué");
  } catch (err) {
    console.log(err);
  }
});


//DELETE LISTE CARTE
app.delete("/listeCarte/delete/:id", async (req, res) => {
  let conn;
  try {
    console.log("Lancement de la connexion");
    conn = await pool.getConnection();
    console.log("Lancement de la requête");
    const rows = await conn.query(
      "delete from listecard where id_liste = ?",
      [req.params.id]
    );
    console.log(rows);
    res.status(200).json("La suppression a bien été effectuée");
  } catch (err) {
    console.log(err);
  }
});


//GET CARDS DETAILS
app.get("/cartes/details/:id", async (req, res) => {
  let conn;
  try {
    console.log("lancement de la console");
    conn = await pool.getConnection();
    
    // Récupération de la liste des cartes de l'utilisateur
    const listeCardRows = await conn.query("SELECT * FROM listeCard WHERE id_user = ?", [req.params.id]);
    console.log("Liste des cartes de l'utilisateur:", listeCardRows);

    // Récupération des détails des cartes en utilisant une jointure
    const carteRows = await conn.query(
      `
        SELECT carte.*
        FROM carte
        JOIN listeCard ON carte.id_carte = listeCard.id_carte
        WHERE listeCard.id_user = ?
      `,
      [req.params.id]
    );
    console.log("Détails des cartes de l'utilisateur:", carteRows);

    // Envoi des données au client
    res.status(200).json({
      listeCard: listeCardRows,
      carteDetails: carteRows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  } finally {
    // Assurez-vous de libérer la connexion après utilisation
    if (conn) conn.release();
  }
});


//CRUD DECK
app.get("/deck/:id", async (req, res) => {
  let conn;
  try {
    console.log("lancement de la console");
    conn = await pool.getConnection();
    console.log("lancement de la requête");
    const rows = await conn.query("select * from deck where id_user = ?", [req.params.id]);
    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () =>
  console.log(`Le serveur écoute sur : http://localhost:${port}`)
);
