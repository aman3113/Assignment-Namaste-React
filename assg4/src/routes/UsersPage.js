import { GrTwitter } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./UserPage.css";

export default function UsersPage() {
  const [userData, setUserData] = useState({});
  const { userId } = useParams();
  console.log(userData);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const resp = await fetch(`https://api.github.com/users/${userId}`);
    const Json = await resp.json();
    setUserData(Json);
  }

  return (
    <div className="wrapper display">
      <div className="user-card display">
        <div className="image-div">
          <img
            className="user-img"
            src={
              userData.avatar_url
                ? userData.avatar_url
                : "https:upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
            }
            alt=""
          />
        </div>

        <h2 className="user-name">{userData.name}</h2>
        <p className="user-developer">Front-end Developer from</p>
        <p className="user-location display">
          <GoLocation />
          {userData.location ? userData.location : `mention your location`}
        </p>
        <div className="user-details display">
          <div className="followers display">
            {userData.followers} <span>Followers</span>{" "}
          </div>
          <div className="following display">
            {userData.following} <span>Following</span>{" "}
          </div>
          <div className="repositories display">
            {userData.public_repos} <span>Repositories</span>{" "}
          </div>
        </div>
        <p className="bio">
          {userData.bio
            ? userData.bio
            : `Please write something about yourself.`}
        </p>
        <div className="social-handles display">
          <a
            href={`https://twitter.com/${userData.twitter_username}`}
            target="_blank"
          >
            <GrTwitter className="react-icon" />
          </a>
          <a href={userData.html_url} target="_blank" className="github-icon">
            <GrGithub className="react-icon" />
          </a>
          <a href={userData.blog} target="_blank">
            <FaUser className="react-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
