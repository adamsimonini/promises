// https://docs.spacexdata.com/
// https://www.w3schools.com/xml/xml_http.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

console.log("06");

// fetch() returns a promise, as does .then()
const getShips = fetch("https://api.spacexdata.com/v3/ships").then(response => response.json());
const getDragons = fetch("https://api.spacexdata.com/v3/dragons").then(response => response.json());


const renderShipList = (list) => {
  let displayList = "<div id='ship-list'>";
  list.forEach((ship) => {
    displayList += `<div class="ship"><p data-id=${ship.ship_id}>${ship.ship_name}</p></div>`;
  });
  displayList += "</div>";
  document.getElementById("app").innerHTML += displayList;
};

const initialize = async () => {
  let shipList = await getShips; // await can be used on a promise to stop the async function from continuing until the promise has fully executed
  let shipNames = shipList.map(ship => ship.ship_name);
  console.log(shipNames);
  let dragonList = await getDragons;
  let dragonNames = dragonList.map(dragon => dragon.name);
  console.log(dragonNames)
  renderShipList(shipList);
};

initialize();
