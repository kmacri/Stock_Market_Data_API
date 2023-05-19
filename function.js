function tickerPrice() {
    //need to figure out how to get the json, then use the var ticker to return the price of that ticker

    var ticker = document.getElementById("ticker").value;
    getTicker(ticker);
    
}


function getTicker(ticker) {
    const api_Key = "YOUR_API_KEY_HERE"

    const symbol = ticker; 

    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${api_Key}`;

    fetch(url)

        .then(function(response) {
            
            return response.json();
        })
        .then(function(data) {
            const price = data['Global Quote']['05. price'];
            displayPrice(ticker, price);
            console.log(price);
        })
        .catch(error => console.error(error));
 
    }

//need a function that changes the html, then add it to the second .then

function displayPrice(tick, num){
    document.getElementById("outputNumber").innerHTML = "The price of " + tick+" is: "+ num;

}
