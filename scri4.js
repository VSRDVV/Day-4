//create a request variable
var request = new XMLHttpRequest();
//opne 
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var countrydata = JSON.parse(this.response);
   // console.log(countrydata[0]);
   var filtereddata = countrydata.filter((x) =>
   {
       return x.region ==='Asia';
   });

  // console.log(filtereddata);if you want all details of those regions

  //if we want to print only the names of countires of region which belong to Asia
   for(i=0;i<filtereddata.length;i++)
   {
       console.log(filtereddata[i].name);
   }
    
    
}



    
