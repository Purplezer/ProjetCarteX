import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/personnalisation.scss"


const Personnalisation = () => {
  const [userCards, setUserCards] = useState([]);  // Fonction qui permet d'afficher la page de personnalisation
  const [selectedCardId, setSelectedCardId] = useState(null);  // Déclaration de la constante userCards et de la fonction setUserCards


  // Récupérer les cartes de l'utilisateur a partir de son id
  useEffect(() => {
    const fetchUserCards = async () => {
      try {
        const storedUserId = localStorage.getItem("id_user");

        if (storedUserId) {
          const response = await axios.get(`http://localhost:3001/cartes/utilisateurs/${storedUserId}`);
          setUserCards(response.data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des cartes utilisateur", error);
      }
    };

    fetchUserCards();
  }, []);

  // Fonction qui permet de modifier une carte
  const handleEdit = async (cardId) => {
    try {
      // Récupérer les détails de la carte à éditer
      const response = await axios.get(`http://localhost:3001/cartes/${cardId}`);
      const cardDetails = response.data;

      console.log("Édition de la carte", cardDetails);

      window.location.href = `/edit/${cardId}`;
    } catch (error) {
      console.error("Erreur lors de l'édition de la carte", error);
    }
  };

  // Fonction qui permet de supprimer une carte
  const handleDelete = async (cardId) => {
    try {
      // Demander confirmation à l'utilisateur
      if (window.confirm("Êtes-vous sûr de vouloir supprimer cette carte ?")) {
        await axios.delete(`http://localhost:3001/cartes/${cardId}`);
        console.log("Carte supprimée avec succès");

        // Metttre à jour l'état pour refléter la suppression
        setUserCards((prevCards) => prevCards.filter((card) => card.id_carte !== cardId));
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de la carte", error);
    }
  };

  // Fonction qui permet de créer une carte
  const handleCreate = () => {
    window.location.href = '/Create-card';
  };

  const handleCardClick = (cardId) => {
    console.log(cardId)
    setSelectedCardId(cardId);
    window.location.href = `/details/${cardId}`;
  };

    return (
        <div className="personnalisation-page">
            <div className="container">
                <h1>Création</h1>
                <div className="container-cards">
                    {userCards.map((card) => (
                      <div key={card.id_carte} className="card-item">
                          <div className="name" onClick={() => handleCardClick(card.id_carte)}>
                                <p>{card.nom}</p>
                          </div>
                          <div className="img" onClick={() => handleCardClick(card.id_carte)}>
                            <img src={card.image} alt={card.nom} />
                          </div>
                          <div className="describe" onClick={() => handleCardClick(card.id_carte)}>
                              <p>{card.description}</p>
                          </div>
                          <div className="btn">
                              <span className="btn-cards" onClick={() => handleEdit(card.id_carte)}>Modifier</span >
                              <span className="btn-cards" onClick={() => handleDelete(card.id_carte)}>Supprimer</span >
                          </div>
                      </div>
                  ))}
                    <div className="card-item-more">
                          <span className="more" onClick={handleCreate}>+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personnalisation;
