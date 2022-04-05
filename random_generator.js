
var heading;
var executeButton;
var outputParagraph;
var inputElement;

var randChamp=["Sona","Lux","Morganna","Seraphine","Zyra","Soraka","Lulu","Janna","Karma","Leona","Yummi","Nami"];



document.addEventListener("DOMContentLoaded", function(){

  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputParagraph = document.getElementById("outputText");
  inputElement = document.getElementById("myInput");

  executeButton.addEventListener("click", function(){
    generateRandChamp();
  });

  // document.addEventListener("mousemove", function(event) {
  //   mouseMovedFunc(event);
  // })

});


function mouseMovedFunc(eventDetails) {

  var mouseX = eventDetails.screenX;
  var mouseY = eventDetails.screenY;

  console.log("Cursor is at: " + mouseX + "," + mouseY + ".");

  executeButton.style.transform = "translate(" + mouseX + "px," + mouseY + "px)";

}

function generateRandChamp(){
  var currentInputText = inputElement.value;
  var randChampIndex = Math.floor(Math.random()*randChamp.length);
  outputParagraph.innerText = currentInputText + ", your champion is " + randChamp[randChampIndex];


  restyleOutput();

}

function restyleOutput() {

  /// Modifying css directly

  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;

  console.log("R: " + randomRed);
  console.log("G: " + randomGreen);
  console.log("B: " + randomBlue);

  // rgb(100,140,200);

  var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  console.log(outputColorString);

  outputParagraph.style.color = outputColorString;


}
