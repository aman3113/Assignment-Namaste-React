import searchData from "../Data/userData.js";

export async function getDevelopers() {
  const developerArray = [];

  for (let data of searchData) {
    const resp = await fetch(
      `https://api.github.com/users/${data.github_login}`
    );
    const Json = await resp.json();
    developerArray.push(Json);
  }
  sessionStorage.setItem("developerArray", JSON.stringify(developerArray));
}
