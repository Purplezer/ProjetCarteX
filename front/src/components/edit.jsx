import React, { useState, useEffect } from "react";  // import de useState et useEffect
import axios from "axios";                    // import de axios
import { useParams } from 'react-router-dom';   // import de useParams
import '../style/edit.scss';              // import du fichier edit.scss

const EditionCarte = () => {              // création de la fonction EditionCarte
  const { cardId } = useParams();     // création de la constante cardId qui récupère l'id de la carte
  const [cardDetails, setCardDetails] = useState(null);   // création de la constante cardDetails qui récupère les données de la carte
  const [editedName, setEditedName] = useState("");    // création de la constante editedName qui récupère le nom de la carte
  const [editedDescription, setEditedDescription] = useState(""); // création de la constante editedDescription qui récupère la description de la carte
    const [editedImg, setEditedImg] = useState(""); // création de la constante editedImg qui récupère l'image de la carte
    const [editedImgPetite, setEditedImgPetite] = useState(""); // création de la constante editedImgPetite qui récupère l'image petite de la carte
    const [editedImgCropped, setEditedImgCropped] = useState(""); // création de la constante editedImgCropped qui récupère l'image cropped de la carte
    const [editedIdKonami, setEditedIdKonami] = useState(""); // création de la constante editedIdKonami qui récupère l'id Konami de la carte
    const [editedType, setEditedType] = useState(""); // création de la constante editedType qui récupère le type de la carte
    const [editedRace, setEditedRace] = useState(""); // création de la const editedRace qui recupère la race de la carte
    const [editedAttaque, setEditedAttaque] = useState(""); // création de la const editedAttaque qui récupère l'attaque de la carte
    const [editedDefense, setEditedDefense] = useState(""); // création de la const editedDefense qui récupère la défense de la carte
    const [editedEtoiles, setEditedEtoiles] = useState(""); // création de la const editedEtoiles qui récupère les étoiles de la carte
    const [editedArchetype, setEditedArchetype] = useState("");   // création de la const editedArchetype qui récupère l'archetype de la carte
    const [editedAttribut, setEditedAttribut] = useState("");     // création de la const editedAttribut qui récupère l'attribut de la carte
    const [editedCardMarketPrice, setEditedCardMarketPrice] = useState(""); // création de la const editedCardMarketPrice qui récupère le prix de la carte sur Card Market
    const [editedTgcPlayerPrice, setEditedTgcPlayerPrice] = useState("");   // création de la const editedTgcPlayerPrice qui récupère le prix de la carte sur TGC Player
    const [editedEbayPrice, setEditedEbayPrice] = useState("");          // création de la const editedEbayPrice qui récupère le prix de la carte sur Ebay
    const [editedAmazonPrice, setEditedAmazonPrice] = useState("");     // création de la const editedAmazonPrice qui récupère le prix de la carte sur Amazon
    const [editedSetNom, setEditedSetNom] = useState("");     // création de la const editedSetNom qui récupère le nom du set de la carte
    const [editedSetRarete, setEditedSetRarete] = useState("");     // création de la const editedSetRarete qui récupère la rareté du set de la carte
    const [editedIdUtilisateur, setEditedIdUtilisateur] = useState("");     // création de la const editedIdUtilisateur qui récupère l'id de l'utilisateur

    useEffect(() => {
      const fetchCardDetails = async () => {    // création de la fonction fetchCardDetails
        try {
          const response = await axios.get(`http://localhost:3001/cartes/${cardId}`);   // création de la constante response qui récupère les données de la carte
                    
          setCardDetails(response.data[0]);
          console.log("Voici vos données :", response.data[0]);   // affichage des données de la carte dans la console
        } catch (error) {
          console.error("Erreur lors de la récupération des détails de la carte", error);
        }
      };
    
      fetchCardDetails();
    }, [cardId]);
  
  // Mettre à jour les valeurs des champs avec les valeurs de la carte
  useEffect(() => {
    if (cardDetails) {
      setEditedName(cardDetails.nom);
      setEditedDescription(cardDetails.description);
        setEditedImg(cardDetails.image);
        setEditedImgPetite(cardDetails.image_petite);
        setEditedImgCropped(cardDetails.image_cropped);
        setEditedIdKonami(cardDetails.id_carte_konami);
        setEditedType(cardDetails.type);
        setEditedRace(cardDetails.race);
        setEditedAttaque(cardDetails.attaque);
        setEditedDefense(cardDetails.defense);
        setEditedEtoiles(cardDetails.etoiles);
        setEditedArchetype(cardDetails.archetype);
        setEditedAttribut(cardDetails.attribut);
        setEditedCardMarketPrice(cardDetails.cardmarket_price);
        setEditedTgcPlayerPrice(cardDetails.tcgplayer_price);
        setEditedEbayPrice(cardDetails.ebay_price);
        setEditedAmazonPrice(cardDetails.amazon_price);
        setEditedSetNom(cardDetails.set_nom);
        setEditedSetRarete(cardDetails.set_rarete);
        setEditedIdUtilisateur(cardDetails.id_user);
    }
  }, [cardDetails]);


  // Mettre à jour les détails de la carte
  const handleSaveChanges = async () => {
    const cardId = cardDetails.id_carte;
    // Mettre a jour les détails de la carte avec les nouvelles valeurs
    try {
      await axios.put(`http://localhost:3001/cartes/${cardId}`, {   
        nom: editedName,
        description: editedDescription,
        image: editedImg,
        image_petite: editedImgPetite,
        image_cropped: editedImgCropped,
        id_carte_konami: editedIdKonami,
        type: editedType,
        race: editedRace,
        attaque: editedAttaque,
        defense: editedDefense,
        etoiles: editedEtoiles,
        archetype: editedArchetype,
        attribut: editedAttribut,
        cardmarket_price: editedCardMarketPrice,
        tcgplayer_price: editedTgcPlayerPrice,
        ebay_price: editedEbayPrice,
        amazon_price: editedAmazonPrice,
        set_nom: editedSetNom,
        set_rarete: editedSetRarete,
        id_user: editedIdUtilisateur,
      });
      console.log("Carte mise à jour avec succès");
      window.location.href = "/personnalisation";
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la carte", error);
    }
  };


  // Affichage du formulaire d'édition de la carte
  return (
    <div className="edit-page">
      {cardId > 500 ? (
        <div>
          <div className="header">
            <h1>Modification</h1>
          </div>
          <div className="container">
            <div className="name">
              <div className="text">
                <label>Nom</label>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              </div>
            <div className="text">
            <label>Race</label>
            <input
              type="text"
              value={editedRace}
              onChange={(e) => setEditedRace(e.target.value)}
              />
            </div>
          </div>
          <div className="img">
            <div className="text">
            <label>Image</label>
            <input
              type="text"
              value={editedImg}
              onChange={(e) => setEditedImg(e.target.value)}
              />
            </div>
            <div className="text">
            <label>Image Petite</label>
            <input
              type="text"
              value={editedImgPetite}
              onChange={(e) => setEditedImgPetite(e.target.value)}
              />
            </div>
            <div className="text">
            <label>Image Cropped</label>
            <input
              type="text"
              value={editedImgCropped}
              onChange={(e) => setEditedImgCropped(e.target.value)}
              />
            </div>
          </div>
          <div className="describe">
            <div className="text">
            <label>Description</label>
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              />
          </div>
            </div>
          <div className="spaces">
            <div className="text">
            <label>Type</label>
            <input
              type="text"
              value={editedType}
              onChange={(e) => setEditedType(e.target.value)}
              />
            </div>
            <div className="text">
            <label>Archetype</label>
            <input
              type="text"
              value={editedArchetype}
              onChange={(e) => setEditedArchetype(e.target.value)}
              />
            </div>
            <div className="text">
            <label>Attribut</label>
            <input
              type="text"
              value={editedAttribut}
              onChange={(e) => setEditedAttribut(e.target.value)}
              />
            </div>
          </div>
          <div className="stats">
            <div className="text">
            <label>Attaque</label>
            <input
              type="text"
              value={editedAttaque}
              onChange={(e) => setEditedAttaque(e.target.value)}
              />
            </div>
            <div className="text">
            <label>Défense</label>
            <input
              type="text"
              value={editedDefense}
              onChange={(e) => setEditedDefense(e.target.value)}
              />
            </div>
            <div className="text">
            <label>Etoiles</label>
            <input
              type="text"
              value={editedEtoiles}
              onChange={(e) => setEditedEtoiles(e.target.value)}
              />
            </div>
          </div>
          <div className="price">
            <div className="text">
            <label>Prix Card Market</label>
            <input
              type="text"
              value={editedCardMarketPrice}
              onChange={(e) => setEditedCardMarketPrice(e.target.value)}
              />
            </div>
            <div className="text">
            <label>Prix TGC Player</label>
            <input
              type="text"
              value={editedTgcPlayerPrice}
              onChange={(e) => setEditedTgcPlayerPrice(e.target.value)}
              />
            </div>
            <div className="text">
            <label>Prix Ebay</label>
            <input
              type="text"
              value={editedEbayPrice}
              onChange={(e) => setEditedEbayPrice(e.target.value)}
              />
            </div>
            <div className="text">
            <label>Prix Amazon</label>
            <input
              type="text"
              value={editedAmazonPrice}
              onChange={(e) => setEditedAmazonPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="details">
            <div className="text">
            <label>Nom collection</label>
            <input
              type="text"
              value={editedSetNom}
              onChange={(e) => setEditedSetNom(e.target.value)}
              />
            </div>
            <div className="text">
            <label>Rareté</label>
            <input
              type="text"
              value={editedSetRarete}
              onChange={(e) => setEditedSetRarete(e.target.value)}
              />  
            </div>
          </div>
          <div className="btn">
            <button onClick={handleSaveChanges}>Enregistrer</button>
          </div>
        </div>
      </div>
    ) : (
      <div className="header">
        <h1>Tu ne peux pas modifier cette carte</h1>
      </div>
    )}
  </div>
);
};

export default EditionCarte;
