document
.getElementById("searchForm")
.addEventListener("submit", function (event) {
    event.preventDefault();
    var locationInput = document.getElementById("locationInput").value;
    var CheckinInput = document.getElementById("CheckinInput").value;
    var CheckoutInput = document.getElementById("CheckoutInput").value;
    var AdultsInput = document.getElementById("AdultsInput").value;
    var ChildrenInput = document.getElementById("ChildrenInput").value;
    var InfantsInput = document.getElementById("InfantsInput").value;
    var PetsInput = document.getElementById("PetsInput").value;
    var PageInput = document.getElementById("PageInput").value;
    var CurrencyInput = document.getElementById("CurrencyInput").value;
    var settings = {
        async: true,
        crossDomain: true,
        url:
            "https://airbnb13.p.rapidapi.com/search-location?location=" +
            locationInput +
            "&checkin=" + CheckinInput
            + "&checkout=" + CheckoutInput
            + "&adults=" + AdultsInput
            + "&children=" + ChildrenInput
            + "&infants=" + InfantsInput
            + "&pets=" + PetsInput
            + "&page=" + PageInput
            + "&currency=" + CurrencyInput ,
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "ed3df20a40mshb949eec62db27c2p17f2bfjsn70861f8980a6",
            "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
        },
    };
    fetch(settings.url, { headers: settings.headers })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var resultsContainer = document.getElementById("results");
            var listings = data.results;
            var resultsHTML = "";
            for (var i = 0; i < listings.length; i++) {
                var listing = listings[i];
                var name = listing.name;
                var price = listing.price;
                var rating = listing.rating;
                var description = listing.description;
                resultsHTML +=
                    "\
      <h3>Name: " +
                    name +
                    "</h3>\
      <p>Price: " +
                    price +
                    "</p>\
      <p>Rating: " +
                    rating +
                    "</p>\
      <p>Description: " +
                    description +
                    "</p>\
      <hr>\
    ";
            }
            resultsContainer.innerHTML = resultsHTML;
        })
        .catch(function (error) {
            console.error(
                "An error occurred during the API request.",
                error
            );
        });
});