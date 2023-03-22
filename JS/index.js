
// There are 4 items inside the array, each item is an object with 3 properties. A category, score, icon.

const answersArray = [
      {
        id: 0,
        category: "Reaction",
        score: 80,
        icon: "/assets/images/icon-reaction.svg",
        className: "reactionResults",
        textColor:"rgba(255, 85, 85, 1)"
      },
      {
        id: 1,
        category: "Memory",
        score: 92,
        icon: "/assets/images/icon-memory.svg",
        className:"memoryResults",
        textColor:"rgba(248, 208, 131, 1)"
      },
      {
        id: 2,
        category: "Verbal",
        score: 61,
        icon: "/assets/images/icon-verbal.svg",
        className: "verbalResults",
        textColor:"rgba(99, 193, 171, 1)"
      },
      {
        id: 3,
        category: "Visual",
        score: 72,
        icon: "/assets/images/icon-visual.svg",
        className:"visualResults",
        textColor:"rgba(60, 65, 144, 1)"
      }
];

let htmlCode = ``;

answersArray.forEach(function(singleAnswerObjects){

  htmlCode =
    htmlCode +
        //Creating the html and css designs of the inner part of the divs inside these two = ``,
      `
      <div class="${singleAnswerObjects.className} col-s-12 mb-2" style = "height: 47px;">
      <!--I need to display the inner parts of this sections, but I need the data info to be displayed here as well.-->
      <!--I need to display in a row inside this colorful div "the icon, the title, the score(from the data.json)/100"-->
      <!--I want to do the HTML and the CSS in the index.js file and attach it to the div(allResultsHereDiv) to display the info along with its data-->
          <div class = "textlayoutPart">
              <span class = "iconAndTitle" style = "color:${singleAnswerObjects.textColor};"><img src="${singleAnswerObjects.icon}" style = "width: 17.67px; height: 17px;" alt=""> ${singleAnswerObjects.category}</span>
              <span class="resultNumbersData">${singleAnswerObjects.score}<span style="color:rgba(148, 157, 161, 1)"> / 100</span></span>
          </div>
  

      </div>
        
      
      `;

});

const answerBoxes = document.querySelector(".allResultsHereDiv");
answerBoxes.innerHTML = htmlCode;