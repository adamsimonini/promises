// https://docs.spacexdata.com/
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

console.log("05");

fetch("https://api.spacexdata.com/v3/ships")
  .then(response => response.json())
  .then(data => renderShipList(data))
  .catch(err => console.log(err));

const renderShipList = (list) => {
  let displayList = "<div id='ship-list'>";
  list.forEach((ship) => {
    displayList += `<div class="ship"><p data-id=${ship.ship_id}>${ship.ship_name}</p></div>`;
  });
  displayList += "</div>";
  document.getElementById("app").innerHTML += displayList;
};

