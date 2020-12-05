/*============================================================
PSUEDO CODE
==============================================================
Access Data from API name, brewery_type, street, city, state, postal_code, phone?, website

May need different buttons depending on how the user wants to search ex. state, city, zip

get city button and box working and then go from there

make a for loop that cycles through the length of the array and displays results with matching city

trying to make a variable that is equal to a string of the input box value and put it into my url using string interpolation


variable worked once I put the AJAX inside of a on click function. without doing that the AJAX would load as soon as the page was refreshed

could possibly make 5 buttons, state,city,zip,ect. with 5 hidden input boxes stacked on top of eachother and make on click event to display input box to corrisponding button

layout HTML (form w/ buttons and optional search radius)

log specific data in console

display data on webpage(use click event functions)

basic CSS styling to make data legible

MAKE A BEER CAROUSEL

need to make it so you can only click submit once?

advanced search can i string on all this info into my url? or do I need to make a function that can tell what value the user typed in

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

//trying to write a code block that allows you to toggle back and fourth from basic to advanced search without refreshing

  $(`.adv`).on(`click`, (event) => {

    $(`.adv-cont`).toggle(`css`).css(`display`, `flex`)
    $(`.basic-search`).toggle(`css`).css(`display`, `none`)
    $(`.adv`).text(`Basic Search`)
    //$(`.finder`).hide()


  })//end .adv onclick

==============================================================
MEAT N' POTATOES
============================================================*/
// console.log(`hello world`);
// console.log($);


$(() => {
  //jQuery code goes here

  //=========================================================
  //Quiz

    let points = 0

  const start = (event) => {



    let choice = prompt(`Welcome to the Beer Quiz! Type start to begin or click any button to exit`, `start / quit`)
      if(choice === `start`) {
        alert(`Good Choice, let's get started!`)
        quiz()
      }else if (choice === `quit`){
        null
      }
    }

  const quiz = () => {
    let choice = prompt(`Do you normally enjoy drinking beer?`, `yes/no`)
      if(choice === `yes`){
        points++
      }else if(choice === `no`){
        points--
      }else{
        points--
      }
      //alert(`${points}`)
    let choice2 =  prompt(`Do you normally prefer light or dark beer?`, `light/dark`)
      if(choice2 === `dark`) {
        points+=2
      }else if(choice2 === `light`) {
        points++
      }else {
        points--
      }
      //alert(`${points}`)
    let choice3 = prompt(`Are you more about quality or quanity?`, `quality/quantity`)
      if(choice3 === `quality`) {
          points++
      }else if(choice3 === `quantity`) {
         points+=2
      }else {
         points--
      }
       //alert(`${points}`)
    let choice4 = prompt(`Are you going to be driving tonight?`, `yes/no`)
      if(choice4 === `yes`) {
         points++
      }else if(choice4 === `no`) {
         points+=3
      }else{
         points--
      }
      //alert(`${points}`)
    let choice5 = prompt(`Is your ideal night a couple drinks and then in bed by 10 or blacking out and possibly waking up in a gutter?`, `bed/gutter`)
      if(choice5 === `gutter`) {
          points+=3
      }else if(choice5 === `bed`){
          points++
      }else{
          points--
      }
      //alert(`${points}`)
      if(points > 10){
          alert(`You might want to stop at the liquor store on your way to the brewery bud`)
        }else if(points === 10){
          alert(`You might want to stop at the liquor store on your way to the brewery bud`)
        }else if(points === 9){
          alert(`Double IPA`)
        }else if(points === 8){
          alert(`Double IPA`)
        }else if(points === 7){
         alert(`IPA`)
        }else if(points === 6){
         alert(`IPA`)
        }else if(points === 5){
          alert(`Try a blonde ale`)
        }else if(points === 4){
          alert(`Try a blonde ale`)
        }else if(points === 3){
          alert(`Ask if they have cider?`)
        }else if(points === 2){
          alert(`Maybe have a glass of wine instead`)
        }else if(points === 1){
          alert(`Whiteclaw?`)
        }else if(points === 0){
          alert(`You might like natty light`)
        }else if(points < 0){
          alert(`Maybe get a glass of water you might be drunk`)
        //   event.preventDefault()
        //   event.stopPropagation()
        //   return false
         }



  }//end of quiz function

  $(`.quiz`).on(`click`, start)



  //=========================================================
  //CAROUSEL

  let currentImgIndex = 0;
  let numofImages = $(`.carousel-images`).children().length-1

  $(`.next`).on(`click`, () => {
    $(`.carousel-images`).children().eq(currentImgIndex).css("display", "none")
    if(currentImgIndex < numofImages) {
      currentImgIndex++
    }else{
      currentImgIndex = 0
    }

    $(`.carousel-images`).children().eq(currentImgIndex).css("display", "block")
  })//end of next onclick


  $(`.previous`).on(`click`, () => {
    $(`.carousel-images`).children().eq(currentImgIndex).css("display", "none")
    if(currentImgIndex > 0) {
      currentImgIndex--
    }else{
      currentImgIndex = numofImages
    }

    $(`.carousel-images`).children().eq(currentImgIndex).css("display", "block")


  })//end of previous onclick




//===================================================================
//Advanced button toggle

//trying to write a code block that allows you to toggle back and fourth from basic to advanced search without refreshing

  $(`.adv`).on(`click`, (event) => {

    $(`.adv-cont`).toggle(`css`).css(`display`, `flex`)
    //$(`.adv`).text(`Basic Search`)
    $(`#basic`).toggle(`css`)
    $(`.button`).toggle(`css`)



  })//end .adv onclick

//=================================================================
//advanced API
  $(`.adv-btn`).on(`click`, (event) => {
    event.preventDefault()



        let $stateInput = $('#state').text('input[type="text"]').val()
        let $cityInput = $('#city').text('input[type="text"]').val()
        let $postalInput = $('#postal').text('input[type="text"]').val()
        let $nameInput = $('#name').text('input[type="text"]').val()

        console.log($cityInput);

        let link = `https://api.openbrewerydb.org/breweries?per_page=50&by_state=${$stateInput}&by_city=${$cityInput}&by_postal=${$postalInput}&by_name=${$nameInput}`

        console.log(link);

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
                //let $postal = $(`<li>`).text(`${data[i].postal_code}`).appendTo(`.postal`)

              }//end for loop

            }//end getName

            getInfo()


            },//end of success function(data)
            (error) => {
              console.log(`error`);
            }//end of error function(error)

          )//end of .then()

})//end .adv-btn onclick




//============================================================
//regular API

  $(`.button`).on(`click`,(event) => {

    event.preventDefault()//stops page from refreshing after enter is clicked

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
            //let $postal = $(`<li>`).text(`${data[i].postal_code}`).appendTo(`.postal`)

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
