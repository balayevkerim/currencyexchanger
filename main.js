
function convertCurrency (){

    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;

    var apiKey = 'cb4533f2f4be420d115280296b31a536';
    var url ='http://data.fixer.io/api/latest?access_key=' + apiKey + '&symbols=' + from + ',' + to;

    var xhttp = new XMLHttpRequest();
    xhttp.open('GET',url, true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState ==4 && xhttp.status == 200){
            var result = JSON.parse(xhttp.responseText);
             var singleUnit = result.rates[to]/ result.rates[from];
             var amount = document.getElementById('frAmount').value;
             document.getElementById('toAmount').value  = (singleUnit * amount).toFixed(2)
        }
    }
} 