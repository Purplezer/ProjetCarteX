import React, { useState, useEffect } from "react";     // Importation de React et de ses hooks useState et useEffect
import { useParams } from "react-router-dom";       // Importation de useParams pour récupérer les paramètres de l'URL
import axios from "axios";                   // Importation d'axios pour les requêtes HTTP
import "../style/details.scss";        // Importation du fichier de style details.scss

export default function Details() {     // Exportation de la fonction Details
  const { cardId } = useParams();    // Récupération du paramètre cardId de l'URL
  const [cardDetails, setCardDetails] = useState(null);   // Déclaration d'un state cardDetails et de sa fonction setCardDetails

  useEffect(() => {   // Utilisation du hook useEffect pour effectuer une requête HTTP au chargement du composant
    const fetchCardDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/cartes/${cardId}`);   // Requête HTTP GET sur l'API pour récupérer les détails de la carte
        setCardDetails(response.data[0]);   // Mise à jour du state cardDetails avec les données de la réponse
      } catch (error) {
        console.error("Erreur lors de la récupération des détails de la carte", error);
      }
    };

    fetchCardDetails();
  }, [cardId]);

  // Affichage d'un message de chargement si les détails de la carte ne sont pas encore disponibles
  if (!cardDetails) {
    return <div className="loading-cards"><p>Chargement en <span className="primary">cours</span>...</p></div>;
  }


  // Fonction pour calculer la largeur des barres d'attaque et de défense
  const getBarWidth = (value) => {
    if (value === null) {
      return "0%";
    } else {
      const maxWidth = 7000;
      const widthPercentage = (value / maxWidth) * 100;
      return `${widthPercentage}%`;
    }
  };

  // Fonction pour récupérer l'image de l'attribut de la carte
  const getAttributeImage = (attribute) => {
    switch (attribute) {
      case "DARK":
        return "https://www.db.yugioh-card.com/yugiohdb/external/image/parts/attribute/attribute_icon_dark.png";
      case "EARTH":
        return "https://www.db.yugioh-card.com/yugiohdb/external/image/parts/attribute/attribute_icon_earth.png";
      case "LIGHT":
        return "https://www.db.yugioh-card.com/yugiohdb/external/image/parts/attribute/attribute_icon_light.png";
      case "WATER":
        return "https://www.db.yugioh-card.com/yugiohdb/external/image/parts/attribute/attribute_icon_water.png";
      case "WIND":
        return "https://www.db.yugioh-card.com/yugiohdb/external/image/parts/attribute/attribute_icon_wind.png";
      case "FIRE":
        return "https://www.db.yugioh-card.com/yugiohdb/external/image/parts/attribute/attribute_icon_fire.png";  
      case "DIVINE":
        return "https://www.db.yugioh-card.com/yugiohdb/external/image/parts/attribute/attribute_icon_divine.png";  
        default:
        return "path/to/default-image.png";
    }
  };


  // Affichage des détails de la carte
  return (
    <div className="content-details">
      <div className="card-img">
        <div className="container">
          <img src={ cardDetails.image } alt="" />
        </div>
      </div>
      <div className="card-description">
        <div className="name">
          <h1>{ cardDetails.nom }</h1>
        </div>
        <div className="stars">
          {Array.from({ length: cardDetails.etoiles }, (_, index) => (
            <img
              key={index}
              src="https://www.db.yugioh-card.com/yugiohdb/external/image/parts/icon_level.png"
              alt={`Star ${index + 1}`}
            />
          ))}
        </div>
        <div className="ids">
          <p>ID: { cardId }</p>
          <p>Card ID: { cardDetails.id_carte_konami }</p>
        </div>
        <div className="elements">
          <p>Race: { cardDetails.race }</p>
          <p>Type: { cardDetails.type === null ? "Aucun" : cardDetails.type }</p>
          <p>Attribut: 
            {cardDetails.type === "Spell Card" &&
              <img src='https://www.db.yugioh-card.com/yugiohdb/external/image/parts/attribute/attribute_icon_spell.png' alt="Spell Card" />
            }
            {cardDetails.type === "Trap Card" &&
              <img src='https://www.db.yugioh-card.com/yugiohdb/external/image/parts/attribute/attribute_icon_trap.png' alt="Trap Card" />
            }
            {cardDetails.type !== "Spell Card" && cardDetails.type !== "Trap Card" &&
              <img src={getAttributeImage(cardDetails.attribut)} alt={`${cardDetails.attribut}`} />
            }
          </p>
        </div>
        <div className="stats">
          <div className="attack">
              <p>Attaque: </p>
            <div className="attack-bar" style={{ width: getBarWidth(cardDetails.attaque) }}>
              <span>{cardDetails.attaque === null ? "/" : cardDetails.attaque}</span>
            </div>
          </div>
          <div className="defense">
              <p>Défense: </p>
            <div className="defense-bar" style={{ width: getBarWidth(cardDetails.defense) }}>
              <span>{cardDetails.defense === null ? "/" : cardDetails.defense}</span>
            </div>
          </div>
      </div>
        <div className="price">
          <div className="cardmarket">
            <div className="img">
              <img src="https://static.cardmarket.com/img/5d8d1b8b4cacaf8f53f62ec483d7b124/Downloads/Logos/CardmarketLogoTagline_Blue_Vertical_V23042018.png" alt="cardmarket" />
            </div>
            <span>{ cardDetails.cardmarket_price }$</span>
          </div>
          <div className="tgcplayer">
            <div className="img">
              <img src="data:image/png;base64,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" alt="tgcplayer" />
            </div>
            <span>{ cardDetails.tcgplayer_price }$</span>
          </div>
          <div className="ebay">
            <div className="img">
              <img src="https://media.licdn.com/dms/image/C560BAQFfGj-Xuawo6A/company-logo_200_200/0/1634568184091?e=2147483647&v=beta&t=k3f_Je2T1zlBQxrmvx1j0NqNDy06Zq6hpiE7OEH3csI" alt="ebay" />
            </div>
            <span>{ cardDetails.ebay_price }$</span>
          </div>
          <div className="amazon">
            <div className="img">
              <img src="https://cdn.icon-icons.com/icons2/2429/PNG/512/amazon_logo_icon_147320.png" alt="amazon" />
            </div>
            <span>{ cardDetails.amazon_price }$</span>
          </div>
        </div>
        <div className="rarity">
          <p>Collection:  { cardDetails.set_nom }</p>
          <p>Rareté: { cardDetails.set_rarete }</p>
        </div>
      </div>
    </div>
  );
}
