import CardComponent from "../cardComponent/card.js";

import "./body.css";

export default Body = (props) => {
  const { teamData } = props;
  console.log(teamData);
  const card = teamData.map((friend) => (
    <CardComponent data={friend} key={friend.id} />
  ));

  return <div className="body-container">{card}</div>;
};
