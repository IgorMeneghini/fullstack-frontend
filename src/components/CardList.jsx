import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CardList.css";
import "../styles/CardAccepted.css";
import mapsPng from "../utils/maps.png";
import workItem from "../utils/workItem.png";
import phone from "../utils/Phone.png";
import email from "../utils/Email.png";

const CardList = ({ selectedButton }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/Cards?status=${selectedButton}`
        );
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, [selectedButton]);

  const updateCardStatus = async (id, newStatus, price) => {
    try {
      let updatedPrice = price;
      if (newStatus === "Accepted" && Number(price) >= 500) {
        updatedPrice = Number(price) * 0.9;
      }

      const response = await axios.put(`http://localhost:8080/Cards/${id}`, {
        status: newStatus,
        price: updatedPrice,
      });

      const updatedCard = response.data;

      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id
            ? { ...card, status: updatedCard.status, price: updatedCard.price }
            : card
        )
      );
      window.location.reload();
    } catch (error) {
      console.error("Error updating card status:", error);
    }
  };

  const renderCardHeader = (firstName, dateCreated, accepted = false) => (
    <div className={accepted ? "card-header-accepted" : "card-header"}>
      <div className={accepted ? "profile-image-accepted" : "profile-image"}>
        {firstName.charAt(0)}
      </div>
      <div className={accepted ? "card-info-accepted" : "card-info"}>
        <h3>{firstName}</h3>
        <p className={accepted ? "timestamp-accepted" : "timestamp"}>
          {new Date(dateCreated).toLocaleDateString()} @{" "}
          {new Date(dateCreated).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );

  const renderAcceptedCardDetails = (
    suburb,
    category,
    id,
    imageUrl,
    leadInvitation,
    price
  ) => (
    <div className="card-details-accepted">
      <img
        src={imageUrl || mapsPng}
        alt="Map"
        style={{ width: "20px", height: "20px" }}
      />
      <p>
        <i className="fas fa-map-marker-alt"></i> {suburb}
      </p>
      <img
        src={imageUrl || workItem}
        alt="Work Item"
        style={{ width: "20px", height: "20px" }}
      />
      <p>
        <i className="fas fa-briefcase"></i> {category}
      </p>
      <p>Job ID: {id}</p>
      <span className="price-accepted">${price.toFixed(2)}</span>
      <span className="lead-invitation">{leadInvitation}</span>
    </div>
  );

  const renderCardDetails = (suburb, category, id, imageUrl) => (
    <div className="card-details">
      <img
        src={imageUrl || mapsPng}
        alt="Map"
        style={{ width: "20px", height: "20px" }}
      />
      <p>
        <i className="fas fa-map-marker-alt"></i> {suburb}
      </p>
      <img
        src={imageUrl || workItem}
        alt="Work Item"
        style={{ width: "20px", height: "20px" }}
      />
      <p>
        <i className="fas fa-briefcase"></i> {category}
      </p>
      <p>Job ID: {id}</p>
    </div>
  );

  const renderAcceptedCard = (card) => (
    <div className="card-accepted" key={card.id}>
      {renderCardHeader(card.contactFirstName, card.dateCreated, true)}
      {renderAcceptedCardDetails(
        card.suburb,
        card.category,
        card.id,
        card.imageUrl,
        card.newField,
        card.price
      )}
      <div className="card-description-accepted">
        <img
          src={card.imageUrl || phone}
          alt="Phone"
          style={{ width: "20px", height: "15px" }}
        />
        <p>{card.phoneNumber}</p>
        <img
          src={card.imageUrl || email}
          alt="Email"
          style={{ width: "20px", height: "20px" }}
        />
        <p>{card.email}</p>
      </div>
      <div className="description-accepted">
        <p>{card.description}</p>
      </div>
    </div>
  );

  const renderInvitedCard = (card) => (
    <div className="card-invited" key={card.id}>
      {renderCardHeader(card.contactFirstName.split(" ")[0], card.dateCreated)}
      {renderCardDetails(card.suburb, card.category, card.id, card.imageUrl)}
      <div className="card-description">
        <p>{card.description}</p>
      </div>
      <div className="card-actions">
        <button
          className="accept-btn"
          onClick={() => updateCardStatus(card.id, "Accepted", card.price)}
        >
          Accept
        </button>
        <button
          className="decline-btn"
          onClick={() => updateCardStatus(card.id, "Declined", card.price)}
        >
          Decline
        </button>
        <span className="price">${card.price.toFixed(2)}</span>
        <span className="lead-invitation">{card.newField}</span>
      </div>
    </div>
  );

  return (
    <div>
      <div className="card-container">
        {cards.length > 0 ? (
          cards.map((card) => (
            <div className="card" key={card.id}>
              {card.status === "Accepted"
                ? renderAcceptedCard(card)
                : renderInvitedCard(card)}
            </div>
          ))
        ) : (
          <div className="no-cards-message">
            <p>No cards found for the selected status.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;
