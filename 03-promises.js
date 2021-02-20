// https://docs.spacexdata.com/
// https://www.w3schools.com/xml/xml_http.asp
// https://www.w3schools.com/js/js_promise.asp

console.log("03");

let getShips = new Promise((resolve, reject) => {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://api.spacexdata.com/v3/ships"); // make get request to SpaceX APIs ships endpoint
  xmlHttp.onload = () => {
    if (xmlHttp.status == 200) {
      resolve(JSON.parse(xmlHttp.responseText))
    } else {
      reject(`Error. Data not found`);
    }
  };
  xmlHttp.send();
});

// First API call gets all the ships for us on the screen
getShips
  .then(response => {
    console.log(response); // if the promis succeeded, this functional shall be invoked (as defined on line 19)
  })
  .catch(err => {
    console.log(err); // upon the promise fails, this functional shall be invoked (as defined on line 22)
  })
  .finally(()=> {
    console.log('Request ended.');
  });

// TODO: Second API call gives us the data on a given selected ship