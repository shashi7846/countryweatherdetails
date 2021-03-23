
var container = document.createElement("div");
container.setAttribute("class", "container");


var row = document.createElement("div");

//Added these two lines which is required
row.setAttribute("class", "row");
row.setAttribute("id", "rowId");

var col = document.createElement("div");
col.setAttribute("class", "col-3 offset-4");

container.append(row, col);
document.body.append(container);

var countriesData = fetch("https://restcountries.eu/rest/v2/all");
countriesData
    .then(function (response) {
        return response.json();
    })
    .then((data) => {
        constructData(data);
    })
    .catch((err) => {
        console.log(err);
    });



function constructData(data) {
    for (var i in data) {
        displayData(i, data);
    }
}
function displayData(i, data) {


    var rowId = document.getElementById("rowId");

    var col = document.createElement("div");
    col.setAttribute("class", "col-3");

    var card = document.createElement("div")
    card.setAttribute("class", "card");

    var img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.src = data[i].flag;

    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    var countryDetails = document.createElement("h5");
    countryDetails.setAttribute("class", "card-text");
    countryDetails.innerText = "countryDetails";

    var countryName = document.createElement("p");
    countryName.setAttribute("class", "card-text");
    countryName.innerHTML = data[i].name;

    var countryRegion = document.createElement("div");
    countryRegion.setAttribute("class", "card-text");
    countryRegion.innerHTML = data[i].region;

    var countryPopulation = document.createElement("div");
    countryPopulation.setAttribute("class", "card-text");
    countryPopulation.innerHTML = data[i].population;



    var cardButton = document.createElement("button");
    cardButton.setAttribute("class", "btn btn-primary text-center");
    cardButton.innerText = "Get Weather";
    cardButton.addEventListener("click", function () {
        getWeatherData(data[i].name);
    })

    document.body.append(container);
    row.append(col);
    container.append(row);

    col.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.append(countryDetails, countryRegion, countryPopulation, countryName, cardButton);
    rowId.append(col);

}

function getWeatherData(countryName) {
    //no need these three lines
    // var lat = document.getElementById("lat");
    // var lan = document.getElementById("lan");
    //var temp = document.getElementById("temp");

    var weatherAPI = fetch("https://api.openweathermap.org/data/2.5/weather?q=" + countryName + "&appid=69d68ddd449171f3d736694bf600e14a");
    weatherAPI.then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        //no need these three lines
        // lat.innerText = "Latitude is: " + data.coord.lat;
        // lan.innerText = "Longitude is: " + data.coord.lon;
        // temp.innerText = "Temperature is: " + data.main.temp;
        alert("Latitude is: " + data.coord.lat + " \n" + "Longitude is: " + data.coord.lon + "\n " + "Temperature is: " + data.main.temp);
        // alert(data[i].lan);
        // alert(data[i].temp); 


    }).catch((err) => {
        console.log(err);
    })
}