import CardComponent from "../cardComponent/card.js";
import friendsData from "../friendsData.json";
import "./body.css";

export default Body = () => {
  return (
    <div className="body-container">
      {friendsData.map((friend) => (
        <CardComponent data={friend} />
      ))}
    </div>
  );
};
