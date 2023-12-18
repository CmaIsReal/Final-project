/* //*function sayLol(timestamp) {
    document.write("<input type='button' value='lol'>");
    requestAnimationFrame(sayLol);
    
 function addButton() {
   Here is where we make a new button
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type","button");
    inputElement.setAttribute("value", "New Button");
     making text and attching it to the button
    var buttonText = document.createTextNode("New Button");
    inputElement.appendChild(buttonText);

    var parent = document.getElementById("memeforme");
    parent.appendChild(inputElement);

    var newParagraph = document.createElement("p");

    var paragraphText = document.createTextNode("New Paragraph");
    newParagraph.appendChild(paragraphText);
*/

function addButton() {
    console.log("Add Start and Stop Buttons");

    let inputElementStart = document.createElement("input");
    inputElementStart.setAttribute("type", "button");
    inputElementStart.setAttribute("value", "Start");
    inputElementStart.setAttribute("id","startButton");
    inputElementStart.setAttribute("onclick","startButton();")
    

    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type", "button");
    inputElementStop.setAttribute("value", "Stop");
    inputElementStop.setAttribute("id","stopButton");
    inputElementStop.setAttribute("onclick","stopButton()");
    inputElementStop.setAttribute("disabled","true");

    let parent = document.getElementById("memeforme");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop);
}

function startButton() {
    console.log("Pressed Start!");

    let inputElementStart = document.getElementById("startButton");
    inputElementStart.setAttribuite("disabled", "true");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.removeAttribute("disabled");

    let meme = document.getElementById("meme");
    meme.style.animationDuration = "3s"; 
}

function stopButton() {
    console.log("Pressed Stop!");

    let inputElementStart = document.getElementById("startButton");
    inputElementStart.removeAttribute("disabled");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.setAttribuite("disabled", "true");
}