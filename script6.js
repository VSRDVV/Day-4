//create a request variable
var request = new XMLHttpRequest();
//opne 
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var countrydata = JSON.parse(this.response);
   // console.log(countrydata[0]);
   var totalpopulation = countrydata.reduce((sum,x)=>
   {
        return sum+x.population;

   },0);
   console.log(totalpopulation);
   

}
    
    