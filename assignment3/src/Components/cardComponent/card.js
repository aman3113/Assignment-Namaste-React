import "./card.css";

export default CardComponent = (props) => {
  const {
    avatar_url,
    name,
    location,
    bio,
    company,
    public_repos,
    email,
    twitter_username,
  } = props.data;
  return (
    <div className="card">
      <div className="card-image">
        <img src={avatar_url} alt="image" />
      </div>
      <div className="card-about">
        <h1 className="name">{name ? name : "No data"}</h1>
        <h3 className="nickName">
          {location ? location : "location not available"}
        </h3>
        <p className="currentAim">{company ? company : "no details"}</p>
        <p className="experience">Public_repos : {public_repos}</p>
      </div>
      <div className="card-explanation">
        <p className="description">{bio}</p>
        <div className="social-handles">
          <a href={email} target="_blank" className="linkedin-handle">
            EMAIL
          </a>
          <a
            href={`https://twitter.com/${twitter_username}`}
            target="_blank"
            className="discord-handle"
          >
            TWITTER
          </a>
        </div>
      </div>
    </div>
  );
};
