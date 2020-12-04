/*============================================================
PSUEDO CODE
==============================================================
Access Data from API name, brewery_type, street, city, state, postal_code, phone?, website

May need different buttons depending on how the user wants to search ex. state, city, zip

get city button and box working and then go from there

make a for loop that cycles through the length of the array and displays results with matching city

trying to make a variable that is equal to a string of the input box value and put it into my url using string interpolation

try using jQuery to make a div on input click with the text

variable worked once I put the AJAX inside of a on click function. without doing that the AJAX would load as soon as the page was refreshed


could possibly make 5 buttons, state,city,zip,ect. with 5 hidden input boxes stacked on top of eachother and make on click event to display input box to corrisponding button

layout HTML (form w/ buttons and optional radius)

log specific data in console

display data on webpage(use click event functions)

basic CSS styling to make data legible


==============================================================
GRAVEYARD
==============================================================
for(let i = 0; i < data.length; i++) {

}//end for loop

//console.log($userInput);
//console.log(link);

// const city = () => {
//
// //let $userInput = $(`input[type="text"]`).val()
// console.log($userInput);
// return $userInput
// console.log(data);
//
// }//end of city function
  // $(`button`).on(`click`, city)

      //url: `https://api.openbrewerydb.org/breweries?by_city=murrieta`





==============================================================
MEAT N' POTATOES
============================================================*/
// console.log(`hello world`);
// console.log($);





$(() => {
  //jQuery code goes here

  $(`.button`).on(`click`,() => {

    let $userInput = $('input[type="text"]').val()

    let link = `https://api.openbrewerydb.org/breweries?by_city=${$userInput}`

    $.ajax({

      url: link

    })//end of ajax
      .then(
        (data) => {
          console.log(data);


        const getInfo = () => {

          for(let i = 0; i < data.length; i++) {

            let $name = $(`<li>`).text(`${data[i].name}`).appendTo(`.name`)
            let $city = $(`<li>`).text(`${data[i].city}`).appendTo(`.city`)
            let $street = $(`<li>`).text(`${data[i].street}`).appendTo(`.street`)
            let $state = $(`<li>`).text(`${data[i].state}`).appendTo(`.state`)
            let $postal = $(`<li>`).text(`${data[i].postal_code}`).appendTo(`.postal`)



          }//end for loop

        }//end getName

        getInfo()

        },//end of success function(data)
        (error) => {
          console.log(`error`);
        }//end of error function(error)
      )//end of .then()

  })//end of on click event for submit button


});//end of jQuery
