
function getDogImages(){
    let action_src = $("#number").val();
    let urlLink = "https://dog.ceo/api/breeds/image/random/";
    let fullUrlLink = urlLink + action_src;

    fetch(fullUrlLink)
    .then(response => response.json())
    .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));


  
}

function displayResults(responseJson) {
    console.log(responseJson);
    const el = $('.results');
    el.empty();
    for (let i = 0; i < responseJson.message.length; i++){
        //constructing html with the current image index
        let img = `<img src="${responseJson.message[i]}" class="results-img">`;
        //append the html to the element
        el.append(img);
    }
      //display the results section
      $('.results').removeClass('hidden');

   
}

   

function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        getDogImages();
    });
}


$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });