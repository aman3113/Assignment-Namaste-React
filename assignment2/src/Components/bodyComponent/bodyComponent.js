import CardComponent from "../cardComponent/card.js";
import userData from "../../Data/userData.js";
import "./body.css";

export default Body = () => {
  const card = userData.map((friend) => (
    <CardComponent data={friend} key={friend.id} />
  ));

  return <div className="body-container">{card}</div>;
};
