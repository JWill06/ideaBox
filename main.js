// variables 
var savedCards = []

// query selectors here 
var saveButton = document.querySelector('.save-button');
var userTitle = document.querySelector('.user-title');
var userBody = document.querySelector('.user-body');
var savedCardSection = document.querySelector('.saved-cards');
var form = document.querySelector('.idea-box-form');
var userInputs = document.querySelectorAll('input')






// event listeners here
saveButton.addEventListener('click', function(event){
    event.preventDefault();
    saveCards(userTitle.value, userBody.value);
    clearForm();
    disabledButton()
}) 

// saveButton.setAttribute('disabled', 'disabled');



userTitle.addEventListener('input', disabledButton);
userBody.addEventListener('input', disabledButton);











// functions here
// We need a function that can implement the user inputs into the html section and save them to the data model

function displayUserCards (){
    savedCards.forEach(function(cards){
    savedCardSection.innerHTML += 
    `<div class="saved-card">
           <h4 class="saved-card-title">${cards.title}</h4>
           <p class="saved-card-info">${cards.body}</p>         
    </div>`
    })
}

function saveCards(userTitle, userBody){
        var cards = {
            id: Date.now(),
            title: userTitle,
            body: userBody,
        }
        savedCards.push(cards);
        displayUserCards()
}

function clearForm () {
    userTitle.value = '';
    userBody.value = '';
}

function disabledButton(){
if (document.querySelector("input").value === "") {
    saveButton.disabled = true; //button remains disabled
} else {
    saveButton.disabled = false; //button is enabled
}
}