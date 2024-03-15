import React, { useState, useEffect } from "react";     // Importation de useState et useEffect depuis la bibliothèque React
import axios from "axios";                         // Importation de axios depuis la bibliothèque axios
import '../style/listecards.scss';        // Importation du fichier listecards.scss

const ListeCarte = () => {      // Fonction qui permet d'afficher la liste des cartes de l'utilisateur
  const [userId, setUserId] = useState("");   // Déclaration de la constante userId et de la fonction setUserId
  const [userCards, setUserCards] = useState([]);   // Déclaration de la constante userCards et de la fonction setUserCards

  useEffect(() => {     // Fonction qui permet de récupérer l'id de l'utilisateur
    const fetchUserId = () => {     // Fonction qui permet de récupérer l'id de l'utilisateur
      const idUserFromLocalStorage = localStorage.getItem("id_user");   // Récupère l'id de l'utilisateur dans le local storage
      setUserId(idUserFromLocalStorage);
    };

    fetchUserId();
  }, []); 

  useEffect(() => {       // Fonction qui permet de récupérer les cartes de l'utilisateur
    const fetchUserCards = async () => {      // Fonction qui permet de récupérer les cartes de l'utilisateur
      try {
        console.log(userId);
        const response = await axios.get(`http://localhost:3001/cartes/details/${userId}`);     // Récupère les cartes de l'utilisateur
        
        if (response.data && response.data.listeCard && response.data.carteDetails) {   // Si la réponse est ok, on récupère les cartes de l'utilisateur

          setUserCards(response.data.carteDetails);
          console.log(response.data);
        } else {
          console.error("La structure de la réponse du serveur est incorrecte.");
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des cartes', error);
      }
    };
  
    fetchUserCards();
  }, [userId]);

  const handleDelete = async (cardId) => {      // Fonction qui permet de supprimer une carte de l'utilisateur
    try {
      if (window.confirm("Êtes-vous sûr de vouloir supprimer cette carte ?")) {   // Demande de confirmation pour supprimer la carte
        // Utilisez await ici pour attendre la fin de la suppression
        const reponse = await axios.delete(`http://localhost:3001/listeCarte/delete/${cardId}`);    // Supprime la carte de l'utilisateur
        console.log(reponse.data);
        console.log("Carte supprimée avec succès");

        // Mettez à jour l'état après la suppression
        setUserCards((prevCards) => prevCards.filter((card) => card.id_carte !== cardId));
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de la carte", error);
    }
};

// Affichage de la page
  return (
    <div className="usercards-page">
      <div className="header">
        <h1>Collection</h1>
      </div>
      <div className="cards">
        {userCards.map((userCard, index) => (
          <div className="card" key={index}>
            <div className="img">
              <img src={userCard.image} alt={userCard.nom} />
            </div>
            <div className="title">
              <h3>{userCard.nom}</h3>
            </div>
            <div className="btn">
              <span onClick={() => handleDelete(userCard.id_carte)}>SUPPRIMER</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListeCarte;
