import { Component } from "react";
import { Link } from "react-router-dom";
import { getDevelopers } from "../../Data/SharedFunctions";

export class Member extends Component {
  constructor() {
    super();
    this.state = {
      developers: [],
    };
    console.log("Member-constructor");
  }

  componentDidMount() {
    getDevelopers();
    this.setState({
      developers: JSON.parse(sessionStorage.getItem("developerArray")),
    });
    console.log("Member-componentDidMount");
  }

  render() {
    console.log("Member-render");

    return (
      <div className="member-component">
        {this.state.developers.map((member) => (
          <Link to={`/users/${member.login}`}>
            <div key={member.id} className="member-card">
              <img src={member.avatar_url} alt="" />
              <h3>{member.name || "Mr.Unknown"}</h3>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
