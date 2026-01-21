import Card from "./Card";

function CardGrid({ cards, onClick, status }) {
  if (status === "playing") {
    const cardsList = cards.map((pokemon) => {
      return (
        <Card
          id={pokemon.id}
          name={pokemon.name}
          img={pokemon.img}
          onClick={() => onClick(pokemon.id)}
          key={pokemon.id}
        ></Card>
      );
    });
    return <div className="card-grid">{cardsList}</div>;
  }
  return null;
}

export default CardGrid;
