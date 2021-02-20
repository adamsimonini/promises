// https://docs.spacexdata.com/
// https://www.w3schools.com/xml/xml_http.asp
console.log("02");

let shipIDs = [];

const getShipIDs = () => {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://api.spacexdata.com/v3/ships"); // make get request to SpaceX APIs ships endpoint
  xmlHttp.onload = () => {
    let response = JSON.parse(xmlHttp.responseText); // convert response from JSON to array
    shipIDs = response.map(ship => ship.ship_id); // create new array with only the IDs
    console.log(shipIDs); // Here is a fix: ensure I call for the data after it hs been returned by placing it within the onload callback
  };
  xmlHttp.send();
};

getShipIDs();

// I was forced to nest my logging within the .onload() method