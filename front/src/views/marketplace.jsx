import '../style/marketplace.scss'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";


export default function MarketPlace() {     // Fonction qui permet d'afficher la page marketplace
    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredCards, setFilteredCards] = useState([]);
    const [selectedCardId, setSelectedCardId] = useState(null);
    // const [activeFilter, setActiveFilter] = useState(null);
    const [currentPrice, setCurrentPrice] = useState(0);

    // fonction qui permet de changer le prix de la carte
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentPrice((prevPrice) => (prevPrice + 1) % 4);
      }, 1000);
    
      return () => {
        clearInterval(interval);
      };
    }, []);


    // fonction qui permet de récupérer les cartes
    useEffect(() => {
      const fetchAllCards = async () => {
        try {
          const response = await axios.get('http://localhost:3001/cartes'); 
          setCards(response.data);
          setFilteredCards(response.data); // Initialise également filteredCards avec toutes les cartes
        } catch (error) {
          console.error('Erreur lors de la récupération des cartes', error);
        }
      };

      fetchAllCards();
    }, []);


    // fonction qui permet de rechercher une carte
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 1000);
      
        return () => {
          clearInterval(interval);
        };
      }, []);

      // fonction qui permet de rechercher une carte
    const handleSearch = (e) => {
      let value = e.target.value.toLowerCase();
      setSearch(value);
    
      const filtered = cards.filter((card) => {
        return card.nom.toLowerCase().includes(value);
      });
    
      setFilteredCards(filtered);
    };

    console.log(search);

    // fonction qui permet de filtrer les cartes
    const handleFilter = (filterType) => {
      const sortedCards = [...cards];
  
      switch (filterType) {
        case 'A-Z':   // Si le filtre est A-Z, on trie les cartes par ordre alphabétique
          sortedCards.sort((a, b) => a.nom.localeCompare(b.nom));
          break;
        case 'Prix':    // Si le filtre est Prix, on trie les cartes par prix
          sortedCards.sort((a, b) => a.cardmarket_price - b.cardmarket_price);
          break;
        case 'Rarete':      // Si le filtre est Rarete, on trie les cartes par rareté
          const rarityOrder = {
            '': 6, // Si la rareté est vide, on la met en dernier
            'Common': 5,
            'Rare': 4,
            'Super Rare': 3,
            'Ultra Rare': 2,
            'Secret Rare': 1,
          };
  
          sortedCards.sort((a, b) => {
            return rarityOrder[a.set_rarete] - rarityOrder[b.set_rarete] || a.nom.localeCompare(b.nom);
          });
          break;
        case 'Puissance':   // Si le filtre est Puissance, on trie les cartes par puissance
          sortedCards.sort((a, b) => b.etoiles - a.etoiles);
          break;
        default:
          break;
      }
  
      setFilteredCards(sortedCards);
    };

    // fonction qui permet de cliquer sur une carte
    const handleCardClick = (cardId) => {
      console.log(cardId)
      setSelectedCardId(cardId);
      window.location.href = `/details/${cardId}`;
    };

    // fonction qui permet de générer la liste des cartes
    const generateCardList = () => {
      return filteredCards.map((card) => (
        <Link to={`/details/${card.id_carte}`} key={card.id_carte}>
          <div className="card" key={card.id_carte} onClick={() => handleCardClick(card.id_carte)}>
            <div className="title">
              <span>{card.nom}</span>
              <p>#{card.id_carte_konami}</p>
            </div>
            <div className="img">
              <img src={card.image} alt="" />
            </div>
            <div className="describe">
              <div className="price" style={{ position: 'relative'}}>
                {["cardmarket", "tcgplayer", "ebay", "amazon"].map((source, index) => (
                  <span
                    key={index}
                    className={index === currentIndex ? 'active' : ''}
                    style={{
                      position: 'absolute',
                      top: '-0.1vh',
                      left: '-1.75vw',
                      opacity: index === currentPrice ? '1' : '0',
                      transition: 'opacity 0.5s ease-in-out',
                      zIndex: '999',
                    }}
                  >
                    <img style={{ position: 'absolute', height: '2.4vh', width: '2.4vh', top: '-0.4vh', left: '-1.75vw', borderRadius: '50%', background: 'var(--color-font)' }}
                      src={
                        source === 'cardmarket'
                          ? 'https://static.cardmarket.com/img/5d8d1b8b4cacaf8f53f62ec483d7b124/Downloads/Logos/CardmarketLogoTagline_Blue_Vertical_V23042018.png'
                          : source === 'tcgplayer'
                          ? 'data:image/png;base64,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'
                          : source === 'ebay'
                          ? 'https://media.licdn.com/dms/image/C560BAQFfGj-Xuawo6A/company-logo_200_200/0/1634568184091?e=2147483647&v=beta&t=k3f_Je2T1zlBQxrmvx1j0NqNDy06Zq6hpiE7OEH3csI'
                          : source === 'amazon'
                          ? 'https://cdn.icon-icons.com/icons2/2429/PNG/512/amazon_logo_icon_147320.png'
                          : ''}
                                    alt={`${source} logo`}
                                  />
                    {`${card[`${source}_price`]}$`}
                  </span>
                ))}
              </div>
            </div>
          </div>
      </Link>
      ));
    };

    // Affichage de la page
    return (
        <div className="content-mkp">
            <div className="header">
                <h2>Bienvenue sur Carte<span className='primary'>X</span>,</h2>
                <p>Trouve toutes les cartes que tu désires !</p>
            </div>
            <div className="filterbar">
                <div className="filters">
                    <span onClick={() => handleFilter('A-Z')}>A - Z</span>
                    <span onClick={() => handleFilter('Prix')}>Prix</span>
                    <span onClick={() => handleFilter('Rarete')}>Rareté</span>
                    <span onClick={() => handleFilter('Puissance')}>Puissance</span>
                </div>
                <div className="searchbar">
                    <input type="text" placeholder='Rechercher...' onChange={handleSearch}/>
                </div>
            </div>
            <div className="container-cards-mkt">
                {generateCardList()}
            </div>
        </div>
    )
}