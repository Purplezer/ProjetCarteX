import { Link, Route, Routes } from "react-router-dom";       // Importation de Link, Route et Routes depuis la bibliothèque react-router-dom
import { useState, useEffect } from "react";             // Importation de useState et useEffect depuis la bibliothèque React
import "../style/mainpage.scss";             // Importation du fichier mainpage.scss

import Homepage from "../components/Homepage";      
import Marketplace from "./marketplace";
import Infos from "./infos";
import Register from "./register";
import Connect from "./connect";
import Details from "../components/details";
import Personnalisation from "./personnalisation";
import Edit from "../components/edit";
import Booster from "./booster";
import ListeCarte from "./listecarte";
import Create from "../components/create";

export default function Mainpage() {      // Fonction qui permet d'afficher la page principale
  const [user_connected, set_user_connected] = useState(false);   // Déclaration de la constante user_connected et de la fonction set_user_connected
  const storedPseudo = localStorage.getItem("pseudo");    // Déclaration de la constante storedPseudo

  const capitalizeFirstLetter = (str) => {    // Fonction qui permet de mettre la première lettre en majuscule
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // DECONNEXION UTILISATEUR ET CLEAR DU LOCALSTORAGE
  const disconnect = () => {
    if (user_connected) {
      if (window.confirm("Vous allez être déconnecté...")) {
        localStorage.removeItem("pseudo");
        localStorage.removeItem("user_id");
        localStorage.removeItem("role");
        set_user_connected(false);
        window.location.href = "/";
      }
    } else {
      alert("Aucun utilisateur n'est connecté.");
    }
  };

  // VERIFICATION
  useEffect(() => {
    const userConnected = localStorage.getItem("pseudo");
    if (userConnected) {
      set_user_connected(true);
      // alert("L'utilisateur est déjà connecté. Veuillez-vous déconnecter pour vous connecter avec un autre compte.");
    }
  }, []);

  // Affichage de la page
  return (
    <div className="content">
      <div className="navbar">
        <Link to="/" className="logo">Carte<span className="primary">X</span></Link>
        <div className="link">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/Marketplace">Marketplace</Link></li>
            <li><Link to="/Infos">Infos</Link></li>
            <li><Link to="/Personnalisation">Création</Link></li>
            <li><Link to="/Booster">Booster</Link></li>
            <li><Link to="/ListeCarte">Collection</Link></li>
          </ul>
        </div>
        <div className="acc-btn">
          {storedPseudo ? (
            <>
              <div className="user-info">
                Hi, {capitalizeFirstLetter(storedPseudo)}
              </div>
              <div className="connect" onClick={disconnect}>
                Deconnecter
              </div>
            </>
          ) : (
            <>
              <Link to="/Register" className="Link">
                <div className="register">
                  Inscription
                </div>
              </Link>
              <Link to="/Connect" className="Link">
                <div className="connect">
                  Connexion
                </div>
            </Link>
            </>
          )}
            
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Marketplace" element={<Marketplace />}></Route>
          <Route path="/Infos" element={<Infos />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Connect" element={<Connect />}></Route>
          <Route path="/Personnalisation" element={<Personnalisation/>}></Route>
          <Route path="/Booster" element={<Booster/>}></Route>
          <Route path="/ListeCarte" element={<ListeCarte/>}></Route>
          <Route path="/details/:cardId" element={<Details />} />
          <Route path="/edit/:cardId" element={<Edit />} />
          <Route path="/create-card" element={<Create />}></Route>
        </Routes>
      </div>
    </div>
  );
}
