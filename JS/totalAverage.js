
// There are 4 items inside the array, each item is an object with 3 properties. A category, score, icon.

const answersArray = [
    {
      id: 0,
      
      scoreOne: 80,
      
    },
    {
      id: 1,
      
      scoreTwo: 92,
      
    },
    {
      id: 2,
    
      scoreThree: 61,
      
    },
    {
      id: 3,
      
      scoreFour: 72,
      
    }
];



let htmlCode = ``;

answersArray.forEach(function(answerTotalScore){

  

htmlCode =
  htmlCode +
      //Creating the html and css designs of the inner part of the divs inside these two = ``,
    `

    <!--I need to display the inner parts of this sections, but I need the data info to be displayed here as well.-->
    <!--I need to display in a row inside this colorful div "the icon, the title, the score(from the data.json)/100"-->
    <!--I want to do the HTML and the CSS in the index.js file and attach it to the div(blueInnerCircle) to display the info along with its data-->
        <p class="circleTextOne col-12"></p>
        <p class="circleTextTwo col-12">of 100</p>


    
      
    
    `;

});

const totalAnswerBoxes = document.querySelector(".blueInnerCircle");
totalAnswerBoxes.innerHTML = htmlCode;