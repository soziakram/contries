import "./Card.css";

function Card({ name, flags, continents }) {
  return (
    <div className="card">
      <img src={flags.png} alt="" />
      <div className="card-info">
        <h2>{name.common}</h2>
        <p>{continents}</p>
      </div>
    </div>
  );
}

export default Card;
