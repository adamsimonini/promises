// https://docs.spacexdata.com/
// https://www.w3schools.com/xml/xml_http.asp
// https://www.w3schools.com/js/js_promise.asp

console.log("04");

let getShips = new Promise((resolve, reject) => {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://api.spacexdata.com/v3/ships"); // make get request to SpaceX APIs ships endpoint
  xmlHttp.onload = () => {
    if (xmlHttp.status == 200) {
      resolve(JSON.parse(xmlHttp.responseText))
    } else {
      reject(`GET request failed. Reason: ${xmlHttp.responseText}`);
    }
  };
  xmlHttp.send();
});

const renderShipList = list => {
  let displayList = "<div id='ship-list'>";
  list.forEach(ship => {
    displayList += `<div class="ship"><p data-id=${ship.ship_id}>${ship.ship_name}</p></div>`;
  });
  displayList += "</div>"
  document.getElementById("app").innerHTML += displayList;
}

// First API call gets all the ships for us on the screen
getShips
  .then(response => { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
    renderShipList(response); // if the promis succeeded, this functional shall be invoked (as defined on line 19)
  })
  // Promise.prototype.then() can take in two callback functions: the first for a successful promise, and a second for a failed promise
  .catch(err => { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
    // err is definied above on line 23, as the reject argument
    console.error(err); // upon the promise fails, this functional shall be invoked (as defined on line 22)
  })
  .finally(()=> {
    console.log('Request ended.');
  });
