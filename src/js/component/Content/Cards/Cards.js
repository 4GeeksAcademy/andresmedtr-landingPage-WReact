import React from "react";
import Hero from "../Hero/Hero";

const CardExample = () => {
  const cardsSource = [
    {
      cardImg: "https://semantic-ui.com/images/wireframe/image.png",
      cardTitle: "Card Title",
      cardText: "Laboris pariatur reprehenderit excepteur magna.",
      cardButton: "Go somewhere",
    },
    {
      cardImg: "https://semantic-ui.com/images/wireframe/image.png",
      cardTitle: "Andres Medina",
      cardText:
        "Sunt ipsum sit adipisicing minim mollit irure aliqua ad cupidatat cupidatat reprehenderit.",
      cardButton: "Go somewhere",
    },
  ];
  return (
    <div className="d-flex flex-wrap">
      {cardsSource.map((card) => {
        let newCard =
        <div className="card ms-3 me-5" style={{ width: "18rem" }}>
          <img src={card.cardImg} className="card-img-top" alt="Photo shown" />
          <div className="card-body">
            <h5 className="card-title">{card.cardTitle}</h5>
            <p className="card-text">{card.cardText}</p>
        </div>
            <div className="buttonDiv p-3">
                <a href="#" className="btn btn-primary position-relative top-50 start-50 translate-middle">
                {card.cardButton}
                </a>
            </div>
          
        </div>
        return newCard
      })}
    </div>
  );
};

const Cards = () => {
  return (
    <div className="container-fluid">
      <Hero />
      <div className="m-4 d-flex flex-wrap justify-content-center">
        <CardExample />
        <CardExample />
      </div>
    </div>
  );
};

export default Cards;
