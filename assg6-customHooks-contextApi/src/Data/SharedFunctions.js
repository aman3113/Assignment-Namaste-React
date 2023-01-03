import searchData from "./userData.js";

export async function getDevelopers() {
  const developerArray = [];

  for (let data of searchData) {
    const resp = await fetch(
      `https://api.github.com/users/${data.github_login}`
    );
    const Json = await resp.json();
    Json["state"] = data.state;
    Json["city"] = data.city;
    developerArray.push(Json);
  }
  sessionStorage.setItem("developerArray", JSON.stringify(developerArray));
}
