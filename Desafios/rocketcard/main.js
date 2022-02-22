const user = 'birobirobiro';
function getGithubProfileInfos() {
  const profile = `https://api.github.com/users/${user}`;

  fetch(profile)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      userLogin.innerHTML = data.login
      userRepositories.innerHTML = data.public_repos
      userFollowers.innerHTML = data.followers
      userFollowing.innerHTML = data.following
      userCompany.innerHTML = data.company
      userLocation.innerHTML = data.location
    })
}

const color = document.getElementById('color')

function randomColor() {
  return "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
}

document.getElementById("color").onclick = function () {
  document.querySelector(".background-card")
    .style.backgroundColor = randomColor();
};

getGithubProfileInfos()