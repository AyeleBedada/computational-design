const draggableElements = document.querySelectorAll(".drag");
const droppableElements = document.querySelectorAll(".drop");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart",dragStart);
   // elem.addEventListener("drag",drag);
   // elem.addEventListener("drag",dragEnd);

});

//control + forward slash 

droppableElements.forEach(elem => {
   elem.addEventListener("dragenter", dragEnter);
   elem.addEventListener("dragover", dragOver);
elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
 });
 
//drag and drop functions 
 function dragStart(event){
    //console.log("dragging...");
    event.dataTransfer.setData("text", event.target.style.color);
 }

 function dragEnter(event){
    event.target.classList.add("drop-hover");
 }

 function dragOver(event){
    event.preventDefault();
     
 }

 function dragLeave(event){
    event.target.classList.remove("drop-hover");
 }

 function drop(event){
    event.preventDefault();
    const draggableElementData = event.dataTransfer.getData("text");
    event.target.style.backgroundColor = draggableElementData;
 }
 