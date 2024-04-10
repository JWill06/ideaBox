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
var parentWrapper = document.querySelector('.form-wrapper')




// event listeners here
saveButton.addEventListener('click', function() {
    savedCardSection.innerHTML = "";
    saveCards();
    clearForm();
    toggleButton();
})


savedCardSection.addEventListener('click', deleteCards);
parentWrapper.addEventListener('click', favoriteCards);


userInputs[0].addEventListener('change', toggleButton)
userInputs[1].addEventListener('change', toggleButton)

// functions here
// We need a function that can implement the user inputs into the html section and save them to the data model
function favoriteCards(e) {
    if (e.target.className === 'false') {
    savedCards[e.target.id]['isFavorite'] = true;
    savedCards[e.target.id]['src'] = "assets/star-active.svg"
    e.target.className = 'true'
    e.target.src ="assets/star-active.svg"
    }
    else if (e.target.className === 'true') {
    savedCards[e.target.id]['isFavorite'] = false;
    savedCards[e.target.id]['src'] = "assets/star.svg"
    e.target.className = 'false'
    e.target.src ="assets/star.svg"
    }
}

function displayUserCards(){
    for (var i = 0; i < savedCards.length; i++) {
        savedCardSection.innerHTML += `
        <div class="saved-card">
            <div class="rectangle">
                <img class="${savedCards[i].isFavorite}" src="${savedCards[i].src}" alt="star symbol" id=${i}>
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
            isFavorite: false,
            src: "assets/star.svg"
        }
        savedCards.push(cards);
        displayUserCards();
    }
    else {
        alert('Your title is too long.')
        displayUserCards();
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
    if (event.target.className === 'delete') {
        event.target.parentElement.parentElement.remove();
        savedCards.splice(index, 1);
    }
}

