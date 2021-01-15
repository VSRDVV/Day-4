//create a request variable
var request = new XMLHttpRequest();
//opne 
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var countrydata = JSON.parse(this.response);
   // console.log(countrydata[0]);
   var filteredpopulation = countrydata.filter((x)=>x.population<200000);
   console.log(filteredpopulation);
   for(var i =0;i<filteredpopulation.length;i++)
   {
       console.log(filteredpopulation[i].name);
   }

}
    
    