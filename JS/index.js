

//This is the array that was received in the data.json file. I placed it in this index.js file.
//This array is called "answersArray"
// Info on arrays are below.
// To learn more about the array and objects and properties check out the site below.
//To learn about arrays here = https://www.w3schools.com/js/js_arrays.asp
// To read on Objects here = https://www.w3schools.com/js/js_objects.asp
// To read about the JS Array forEach() here = https://www.w3schools.com/js/js_array_iteration.asp

// An example site that I looked at here = https://codesandbox.io/s/dynamic-javascript-cards-forked-uddcrr?file=/src/index.js


const answersArray = [
  //The goal is to get the items in this list to display their values in my HTML files
  //so that they can display on the screen.
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


let htmlArrayCode = ``;

answersArray.forEach(function(theArrayDisplay){

  htmlArrayCode =
    htmlArrayCode +
        //Creating the html and css designs of the inner part of the divs inside these two = ``,
      `
      <div class="${theArrayDisplay.className} col-s-12">
          <div class = "textlayoutPart col-s-12">
              <span class = "iconAndTitle" style = "color:${theArrayDisplay.textColor};"><img src="${theArrayDisplay.icon}" style = "width: 17.67px; height: 17px;" alt=""> ${theArrayDisplay.category}</span>
              <span class="resultNumbersData">${theArrayDisplay.score}<span style="color:rgba(148, 157, 161, 1)"> / 100</span></span>
          </div>
      </div>
        
      `;

});

//This attaches it to the div "allResultsHereDiv" in the HTML file index.html
const answerBoxes = document.querySelector(".allResultsHereDiv");
answerBoxes.innerHTML = htmlArrayCode;