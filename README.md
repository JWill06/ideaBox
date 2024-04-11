# IdeaBox

### Abstract:
We used HTML and CSS to build an application that matches a provided comp. When a user enters text into the Title and Body inputs and clicks "Save", a card appears on the screen with the title and body the user entered into the form. When a user tries to click "Save" with an empty Title or Body input field, the "Save" button is disabled and unable to be clicked. A delete icon (x) and favorite icon (star) are visible on all card ideas. When the user clicks the delete icon, the selected card is deleted. When a user clicks on the favorite icon, the star turns from white to orange to indicate the card has been favorited. When the user clicks the "Show Starred Ideas" button, only the favorited cards are visible. Additionally, the text on the button changes to "Show All Ideas". When the "Show All Ideas" button is clicked, all created cards are visbile. 

### Installation Instructions:
1. Fork repository to your GitHub account https://github.com/JWill06/ideaBox 
2. Use terminal to clone the repository to your local machine
3. Use terminal to cd into the project
4. Open the project in your text editor by running code . 
5. Run open index.html in your terminal to open the application

### Preview of App:

### Context:
We are in Module 1 and completed this project in 10 hours.

### Contributors
* Marshall Hotaling https://github.com/marshallhotaling
* Kim Ewing: https://github.com/kiewi16 
* Peter Kim: https://github.com/peterkimpk1
* Jordan Williamson: https://github.com/JWill06

### Learning Goals:
* Write clean HTML and CSS to match a provided comp
* Seperate the data model from the DOM model
* Use functions that are DRY, pure, and use SRP
* Iterate over arrays in order to filter what is being displayed 

### Wins + Challenges:
*Wins*
  1. Changes to the DOM generally occur after our Data Model has been updated. Our Data Model is used to update the DOM.
  2. All team members understand the code that has been written.
  3. Created an efficient collaborative environment that allowed each team member to provide input and contribute code. 
*Challenges*
  1. We experienced an issue in deleting the entire card. At first, only the card header was being deleted. We resolved this issue by targeting the grandparent element of the card. 
  2. When a card was favorited, our Data Model did not update. We resolved this issue by creating default key value pairs for our card object. We created a function with conditional statements to change the necessary key value pairs.
  3. When the "Show Starred Ideas" button was clicked, the starred cards were not displayed. We resolved this issue by updating the eventListener to include a conditional statement. 
     
