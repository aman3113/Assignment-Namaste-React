import { Component } from "react";
import { Member } from "./Member";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("About-constructor");
  }
  componentDidMount() {
    console.log("About-componentDidMount");
  }

  render() {
    console.log("About-render");
    return (
      <div className="about-us">
        <p>
          Team Storm Troopers is a dedicated and hardworking team prospering in
          the guidance of Akshay Saini and growing by helping each other.
        </p>
        <h2>Team Members</h2>
        <Member />
      </div>
    );
  }
}
