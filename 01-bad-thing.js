// https://docs.spacexdata.com/
// https://www.w3schools.com/xml/xml_http.asp
console.log("01");

let shipIDs = [];

const getShipIDs = () => {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://api.spacexdata.com/v3/ships"); // make get request to SpaceX APIs ships endpoint
  xmlHttp.onload = () => {
    let response = JSON.parse(xmlHttp.responseText); // convert response from JSON to array
    return shipIDs = response; // create new array with only the IDs
  };
  xmlHttp.send();
};

console.log(getShipIDs()); // My code is hitting this line before htting line 4; I hit it before results gets reassigned the response from the API
