const allSports = () => {
  fetch(`https://www.thesportsdb.com/api/v1/json/2/all_sports.php`)
    .then((res) => res.json())
    .then((sports) => displayAllSports(sports.sports));
};

const displayAllSports = (sports) => {
  const sportListContainer = document.getElementById("sports-container");
  sports.forEach((sport) => {
    const button = document.createElement("button");
    // button.setAttribute("onclick", "allSportsDetals(this)");
    button.classList.add("mb-2");
    if (sport.idSport % 2 === 0) {
      button.classList.add(
        "btn",
        "btn-success",
        "list-group-item",
        "list-group-action",
        "fw-bold"
      );
    } else if (sport.idSport % 3 === 0) {
      button.classList.add(
        "btn",
        "btn-warning",
        "list-group-item",
        "list-group-action",
        "fw-bold"
      );
    } else if (sport.idSport % 5 === 0) {
      button.classList.add(
        "btn",
        "btn-secondary",
        "list-group-item",
        "list-group-action",
        "fw-bold"
      );
    } else {
      button.classList.add(
        "btn",
        "btn-primary",
        "list-group-item",
        "list-group-action",
        "fw-bold"
      );
    }
    button.innerHTML = `${sport.strSport}`;
    sportListContainer.appendChild(button);
  });
};
const allSportsDetails = () => {
  fetch(`https://www.thesportsdb.com/api/v1/json/2/all_sports.php`)
    .then((res) => res.json())
    .then((sports) => displayAllSportsDetails(sports.sports));
};

const displayAllSportsDetails = (sportsDetails) => {
  const sportDetailsContainer = document.getElementById(
    "sport-details-container"
  );
  sportsDetails.forEach((sport) => {
    const sportDiv = document.createElement("div");
    const defaultImg = "https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg";
    sportDiv.classList.add("col");
    sportDiv.innerHTML = `
    <div class="card h-100">
        <img src="${sport.strSportThumb ? sport.strSportThumb : defaultImg}" class="card-img-top" alt="..." />
        <img src="${
          sport.strSportIconGreen
        }" class="card-img-top icon-img" alt="..." />
        <div class="card-body">
            <h5 class="card-title">${sport.strSport}</h5>
            <p class="card-text text-justify">
                ${sport.strSportDescription.slice(0, 250)}
            </p>
        </div>
    </div>
    `;
    sportDetailsContainer.appendChild(sportDiv);
  });
};

allSportsDetails();

/*
 */

allSports();
