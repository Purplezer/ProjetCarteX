import React from "react";
import { useEffect, useState } from "react";
import "../style/register.scss";

export default function Register() {
    // VARIABLES POUR INSCRIPTION UTILISATEUR
    const [pseudo, set_pseudo] = useState("");
    const [mdp, set_mdp] = useState("");
    const [user_connected, set_user_connected] = useState(false);

    // INSCRIPTION UTILISATEUR
    const register = async (event) => {
        event.preventDefault();

        // DATA UTILISATEUR
        const new_user = {
            pseudo: pseudo,
            mdp: mdp,
            role: 0,
        };

        // VERIFICATION, PAS DE CREATION D'UTILISATEUR "VIDE" ET EVITE PROBLEME SI DEJA CONNECTE
        if (!pseudo || !mdp) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        try {
          // UTILISATION API AVEC FETCH
            const response = await fetch("http://localhost:3001/utilisateurs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(new_user),
            });

            if (response.ok) {
                // INSCRIPTION REUSSIE
                console.log("Utilisateur ajouté avec succès");
                set_pseudo("");
                set_mdp("");
                window.location.href = "/";
            } else {
                // INSCRIPTION NON REUSSIE
                console.log("Erreur lors de l'ajout de l'utilisateur");
            }
        } catch (err) {
            console.log(err);
        }
    };

    // VERIFICATION
    useEffect(() => {
        const user_connected = localStorage.getItem("pseudo");
        if (user_connected) {
            set_user_connected(true);
            alert("Un utilisateur est déjà connecté.");
            document.getElementById("pseudo").disabled = true;
            document.getElementById("mdp").disabled = true;
        }
    }, []);


    //Affichage de la page
    return (
        <div className="register-page">
            <div className="container">
                <div className="title">
                    <h1>Inscription</h1>
                </div>
                <div className="form">
                    <form onSubmit={register}>
                      <div className="pseudo">
                        <input
                          type="text"
                          id="pseudo"
                          placeholder="Pseudo..."
                          value={pseudo}
                          onChange={(e) => set_pseudo(e.target.value)}
                          disabled={user_connected}
                        />
                      </div>
                      <div className="pwd">
                        <input
                          type="password"
                          id="mdp"
                          placeholder="Password..."
                          value={mdp}
                          onChange={(e) => set_mdp(e.target.value)}
                          disabled={user_connected}
                        />
                      </div>
                      
                      <button type="submit">S'inscrire</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
