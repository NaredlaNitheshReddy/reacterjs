import "./card.css";

const Card = (prop) => {
  return <div className={"card " + prop.cardClassName}>{prop.children}</div>;
};

export default Card;
