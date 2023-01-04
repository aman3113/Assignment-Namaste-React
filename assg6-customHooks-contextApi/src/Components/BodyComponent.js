import CardComponent from "./CardComponent.js";
import ThemeContext from "./ThemeContext.js";
import { useContext } from "react";

export default Body = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  const { filteredData } = props;
  const card = filteredData.map((friend) => (
    <CardComponent data={friend} key={friend.id} />
  ));

  return <div className="body-container">{card}</div>;
};
