/*============================================================
PSUEDO CODE
==============================================================
Access Data from API name, brewery_type, street, city, state, postal_code, phone?, website

May need different buttons depending on how the user wants to search ex. state, city, zip

get city button and box working and then go from there

could possibly make 5 buttons, state,city,zip,ect. with 5 hidden input boxes stacked on top of eachother and make on click event to display input box to corrisponding button

layout HTML (form w/ buttons and optional radius)

log specific data in console

display data on webpage(use click event functions)

basic CSS styling to make data legible


==============================================================
GRAVEYARD
==============================================================







==============================================================
MEAT N' POTATOES
============================================================*/
// console.log(`hello world`);
// console.log($);


$(() => {
  //jQuery code goes here

  $.ajax({

    url: `https://api.openbrewerydb.org/breweries?by_city=murrieta`


  })//end of ajax
    .then(
      (data) => {
        console.log(data);

      },//end of success function(data)
      (error) => {
        console.log(`error`);
      }//end of error function(error)
    )//end of .then()



});//end of jQuery
