const axios = require('axios');         // Importer le module axios
const mariadb = require('mariadb');     // Importer le module mariadb
require('dotenv').config();             // Importer le module dotenv

const pool = mariadb.createPool({       // Créer une connexion à la base de données
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
});

const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';        // Déclarer l'URL de l'API

async function main() {         // Déclarer la fonction main
    let conn;            // Déclarer la variable conn
    try {       
        const response = await axios.get(url);      // Récupérer les données de l'API
        const cards = response.data.data.slice(0, 500);     // Récupérer les 500 premières cartes

        conn = await pool.getConnection();      // Créer une connexion à la base de données
        for (const card of cards) {         // Parcourir les cartes
            let cardDescription = card.desc; // Récupérer la description de la carte

            // Verifie si la carte existe déjà dans la base de données
            const queryCheck = `SELECT * FROM Carte WHERE nom = ?`;
            const queryParamsCheck = [card.name];
            const resultCheck = await conn.query(queryCheck, queryParamsCheck);

            if (resultCheck.length > 0) {
                // Si la carte existe, mettre à jour la description
                const updateQuery = `UPDATE Carte SET description = ? WHERE nom = ?`;
                const updateParams = [cardDescription, card.name];
                await conn.query(updateQuery, updateParams);
                console.log(`La description de la carte ${card.name} a été mise à jour.`);
            } else {    // Si la carte n'existe pas, l'ajouter à la base de données
                console.log(`La carte ${card.name} n'existe pas dans la base de données.`);
            }
        }
    } catch (error) {       // Gérer les erreurs
        console.error("Erreur lors de la récupération des données de l'API ou de l'interaction avec la base de données:", error);
    } finally {     // Fermer la connexion à la base de données
        if (conn) conn.release();
    }
}

main();
