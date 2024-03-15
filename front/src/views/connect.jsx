import React from "react";                     // Importation de React depuis la bibliothèque React
import { useEffect, useState } from "react";    // Importation de useEffect et useState depuis la bibliothèque React
import "../style/connexion.scss";         // Importation du fichier connexion.scss
import { Link, Route, Routes } from 'react-router-dom'    // Importation de Link, Route et Routes depuis la bibliothèque react-router-dom
import axios from "axios";             // Importation de axios depuis la bibliothèque axios

export default function Connexion() {
  // VARIABLES POUR CONNEXION DECONNEXION UTILISATEUR
  const [pseudo, set_pseudo] = useState("");
  const [mdp, set_mdp] = useState("");
  // const [user_connected, set_user_connected] = useState(false);

  const handleConnexion = async (event) => {      // Fonction qui permet de se connecter
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/connexion", {   // Envoie les données de connexion à la base de données
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pseudo, mdp }),
      });

      const data = await response.json();

      if (response.ok) {      // Si la réponse est ok, on connecte l'utilisateur
        console.log(data.message);
        localStorage.setItem("pseudo", pseudo);
      
        const recupInfoUser = await axios.get(`http://localhost:3001/utilisateurs/nom/${pseudo}`);      
        const id_user = recupInfoUser.data[0].id_user;
        let role = recupInfoUser.data[0].role;

        console.log(id_user);
        console.log(role);
        

        if (role === "0") {     // Si le role est 0, on le met en utilisateur
          role = "utilisateur";
        } else if (role === "1") {    // Si le role est 1, on le met en admin
          role = "admin";
        }

        console.log(id_user);
        console.log(role);
      
        localStorage.setItem("id_user", id_user);
        localStorage.setItem("role", role);
      
        // set_user_connected(true); // Mettre à jour l'état ici
        window.location.href = '/';
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //Affichage de la page
  return (
    <div className="connexion-page">
      <div className="container">
        <div className="title">
          <h1>Connexion</h1>
        </div>
        <div className="form">
          <form onSubmit={handleConnexion}>
            <div className="pseudo">
              <input
                type="text"
                id="pseudo"
                placeholder="Pseudo..."
                value={pseudo}
                onChange={(e) => set_pseudo(e.target.value)}
                // disabled={user_connected}
              />
            </div>
            <div className="pwd">
              <input
                type="password"
                id="mdp"
                placeholder="Password..."
                value={mdp}
                onChange={(e) => set_mdp(e.target.value)}
                // disabled={user_connected}
              />
            </div>
            <div className="text">
              <Link to="/Connect">Mot de passe oublié ?</Link>
            </div>
            <div className="btn-connect">
              {/* <button onClick={disconnect}>Se déconnecter</button> */}
              <button type="submit">Se connecter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
