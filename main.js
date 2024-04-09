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
saveButton.addEventListener('click', function() {
    savedCardSection.innerHTML = "";
    saveCards();
    clearForm();
    toggleButton();
})


// saveButton.setAttribute('disabled', 'disabled');


userInputs[0].addEventListener('change', toggleButton)
userInputs[1].addEventListener('change', toggleButton)

// functions here
// We need a function that can implement the user inputs into the html section and save them to the data model

function displayUserCards(){
    for (var i = 0; i < savedCards.length; i++) {
        savedCardSection.innerHTML += `
        <div class="saved-card">
          <h4 class="saved-card-title">${savedCards[i].title}</h4>
          <p class="saved-card-info">${savedCards[i].body}</p>         
        </div>`
    }
}

function saveCards(){
    event.preventDefault();
    var cards = {
        id: Date.now(),
        title: userTitle.value,
        body: userBody.value,
    }
    savedCards.push(cards);
    displayUserCards();
}

function clearForm () {
    userTitle.value = '';
    userBody.value = '';
}

function toggleButton(){
    if (userTitle.value && userBody.value) {
        saveButton.disabled = false;
    }
    else {
        saveButton.disabled = true;
    }
}

