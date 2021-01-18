//create a request variable
var request = new XMLHttpRequest();
//open connection 
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var countrydata = JSON.parse(this.response);
    var mycurrencies=[];
    //var res;

   

    for(var i =0;i<countrydata.length;i++)
    {
        //console.log(countrydata[i].currencies);
        mycurrencies.push(countrydata[i].currencies);
    }
    for(var j = 0 ;j<mycurrencies.length;j++)
    {
        for(var k = 0;k<mycurrencies[j].length;k++)
        {
            if(mycurrencies[j][k].code==='USD')
            {
            console.log(countrydata[j].name);
            }
        }
    }
}

    
    
