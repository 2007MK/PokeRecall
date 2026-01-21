function Card({ id, name, img, onClick }) {
  return (
    <div className="card" onClick={onClick} id={id}>
      <img className="card-img" src={img}></img>
      <h2>{name}</h2>
    </div>
  );
}

export default Card;
