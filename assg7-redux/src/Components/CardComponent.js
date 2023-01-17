import { Link } from "react-router-dom";

export default CardComponent = (props) => {
  const { avatar_url, name, location, company, public_repos, login } =
    props.data;
  return (
    <Link to={`/users/${login}`}>
      <div className="card">
        <div className="card-image">
          <img src={avatar_url} alt="image" />
        </div>
        <div className="card-about">
          <h1 className="name">{name ? name : "No data"}</h1>
          <h3 className="location">
            {location ? location : "location not available"}
          </h3>
          <p className="company">{company ? company : "no details"}</p>
          <p>
            <span className="repos">Public_repos :</span> {public_repos}
          </p>
        </div>
      </div>
    </Link>
  );
};
