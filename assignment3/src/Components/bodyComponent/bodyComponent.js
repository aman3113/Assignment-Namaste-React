import CardComponent from "../cardComponent/card.js";

import "./body.css";

export default Body = (props) => {
  const { filteredData } = props;
  const card = filteredData.map((friend) => (
    <CardComponent data={friend} key={friend.id} />
  ));

  return <div className="body-container">{card}</div>;
};
