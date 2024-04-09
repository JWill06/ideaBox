// variables 
var savedCards = []

// query selectors here 
var saveButton = document.querySelector('.save-button');
var userTitle = document.querySelector('.user-title');
var userBody = document.querySelector('.user-body');
var savedCardSection = document.querySelector('.saved-cards');
var form = document.querySelector('.idea-box-form');
var userInputs = document.querySelectorAll('input')
var rectangle = document.querySelector('.rectangle');
var savedCard = document.querySelector('.saved-card');
var deleteButton = document.querySelector('.delete');





// event listeners here
saveButton.addEventListener('click', function() {
    savedCardSection.innerHTML = "";
    saveCards();
    clearForm();
    toggleButton();
})


// saveButton.setAttribute('disabled', 'disabled');

savedCardSection.addEventListener('click', deleteCards);


userInputs[0].addEventListener('change', toggleButton)
userInputs[1].addEventListener('change', toggleButton)

// functions here
// We need a function that can implement the user inputs into the html section and save them to the data model

function displayUserCards(){
    for (var i = 0; i < savedCards.length; i++) {
        savedCardSection.innerHTML += `
        <div class="saved-card">
            <div class="rectangle">
                <img class="favorite" src="assets/star.svg" alt="star symbol">
                <img class="delete" src="assets/delete.svg" alt="delete symbol">
            </div>
          <h4 class="saved-card-title">${savedCards[i].title}</h4>
          <p class="saved-card-info">${savedCards[i].body}</p>         
        </div>`
    }
}

function saveCards(){
    if (userTitle.value.length < 15) {
        var cards = {
            id: Date.now(),
            title: userTitle.value,
            body: userBody.value,
        }
        savedCards.push(cards);
        displayUserCards();
    }
    else {
        alert('Your title is too long.')
    }
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

function deleteCards(event){
    event.preventDefault();
    var index = event.target.parentElement.parentElement.id
    console.log('line76:',index)
    if (event.target.className === 'delete') {
        event.target.parentElement.parentElement.remove();
        savedCards.splice(index, 1);
    }
}

