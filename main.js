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
var favoriteButton = document.querySelectorAll('.notFavorited')





// event listeners here
saveButton.addEventListener('click', function() {
    savedCardSection.innerHTML = "";
    saveCards();
    clearForm();
    toggleButton();
})

favoriteButton.forEach(function(notFavorited){
    notFavorited.addEventListener('click', function (event){
    event.preventDefault()
    favoriteIcon(notFavorited);
    });
});




savedCardSection.addEventListener('click', deleteCards);
// savedCardSection.addEventListener('click', favoriteCards)

userInputs[0].addEventListener('change', toggleButton)
userInputs[1].addEventListener('change', toggleButton)

// functions here
// We need a function that can implement the user inputs into the html section and save them to the data model

function displayUserCards() {
    savedCardSection.innerHTML = ''; // Clear the section before adding new cards
    savedCards.forEach(function(card, index) {
        // Determine the favorite icon based on the isFavorite property
        var favoriteIconSrc = card.isFavorite ? 'assets/star-active.svg' : 'assets/star.svg';

        // Create the card HTML
        var cardHTML = `
        <div class="saved-card" data-index="${index}">
            <div class="rectangle">
                <img class="notFavorited" src="${favoriteIconSrc}" alt="star symbol">
                <img class="delete" src="assets/delete.svg" alt="delete symbol">
            </div>
          <h4 class="saved-card-title">${card.title}</h4>
          <p class="saved-card-info">${card.body}</p>         
        </div>`;

        // Add the card HTML to the savedCardSection
        savedCardSection.innerHTML += cardHTML;
    });

    // Attach the event listeners to the favorite buttons of the newly added cards
    attachFavoriteButtonListeners();
}

function attachFavoriteButtonListeners() {
    var favoriteButtons = document.querySelectorAll('.notFavorited');
    favoriteButtons.forEach(function(button, index) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            favoriteIcon(button);
            // Update the card's favorite status in the savedCards array
            var cardIndex = button.closest('.saved-card').dataset.index;
            savedCards[cardIndex].isFavorite = !savedCards[cardIndex].isFavorite; // Toggle the favorite status
        });
    });
}




function saveCards(){
    if (userTitle.value.length < 15) {
        var cards = {
            id: Date.now(),
            title: userTitle.value,
            body: userBody.value,
            isFavorite: false,
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

function displayFavoritedCards() {
    var favoritedCards = savedCards.filter(function(card) {
        return card.isFavorite;
    });
    savedCards = favoritedCards; 
    displayUserCards(); 
}


function deleteCards(event){
    event.preventDefault();
    var index = event.target.parentElement.parentElement.id;
    console.log('line76:',index)
    if (event.target.className === 'delete') {
        event.target.parentElement.parentElement.remove();
        savedCards.splice(index, 1);
    }
}


function favoriteIcon(notFavorited) {
    var currentIcon = notFavorited.getAttribute('src');
    var newIcon;

    if(currentIcon === 'assets/star.svg'){
        newIcon = 'assets/star-active.svg';
        savedCards.isFavorite = true;
    } else {
        newIcon = 'assets/star.svg'
        savedCards.isFavorite = false;
    }

    notFavorited.setAttribute('src', newIcon)
}