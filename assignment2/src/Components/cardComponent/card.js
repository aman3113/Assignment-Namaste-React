import "./card.css";

export default CardComponent = (props) => {
  const {
    developerName,
    developerImage,
    location,
    portfolio,
    currentCompany,
    Experience,
    linkedinProfile,
    discordUserId,
  } = props.data;
  return (
    <div className="card">
      <div className="card-image">
        <img src={developerImage} alt="image" />
      </div>
      <div className="card-about">
        <h1 className="name">{developerName}</h1>
        <h3 className="nickName">{location}</h3>
        <p className="currentAim">{currentCompany}</p>
        <p className="experience">Experience : {Experience} yrs</p>
        <br />
        <p className="portfolio">{portfolio}</p>
      </div>
      <div className="card-explanation">
        <p className="description">
          Heyy, i am {developerName}. <br /> I am a React Developer. <br /> Lets
          connect!
        </p>
        <div className="social-handles">
          <a href={linkedinProfile} target="_blank" className="linkedin-handle">
            LINKEDIN
          </a>
          <a href={discordUserId} className="discord-handle">
            Discord
          </a>
        </div>
      </div>
    </div>
  );
};
