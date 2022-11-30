import friendsData from "../friendsData.json";
import "./card.css";

export default CardComponent = (props) => {
  const { name, image, nickName, memberNumber, currentAim } = props.data;
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="image" />
      </div>
      <div className="card-about">
        <h1 className="name">{name}</h1>
        <h3 className="nickName">{nickName}</h3>
        <p className="currentAim">Current Aim : {currentAim}</p>
      </div>
      <div className="card-explanation"></div>
    </div>
  );
};
