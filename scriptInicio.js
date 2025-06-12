let menu_icon_box = document.querySelector(".menu_icon_box");
let box = document.querySelector(".box");


menu_icon_box.onclick = function(){
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_box");
}
document.onclick = function(e){
    if (!menu_icon_box.contains(e.target) && !box.contains(e.target) ) {
        menu_icon_box.classList.remove("active");
        box.classList.remove("active_box");
    }
}

 // Different colors for balloons.
 let colors = ["red", "yellow", "blue", "green", "violet", "orange", "darkblue", "pink", "brown"];

 // i variable is for getting colors one by one from above colors variable array.
 let i = 0;

 // declaring and running function on click on document.
 document.onclick = function (e) {
     // incrementing i variable value by one. For getting array colors one by one for ballons. 
     i++;

     // For Getting the clicked positions
     let x = e.pageX;
     let y = e.pageY;

     // Creating new element. if you want to add image create img tag here instead.
     let span = document.createElement("span");
     // Adding class to it for styling and animation to increase size. (with css keyframes).
     span.classList.add("balloon");

     // Getting the mouse or cursor clicked positions with above declared x and y variables.
     span.style.top = y + "px";
     span.style.left = x + "px";

     // To fly the balloons from the top position at which it formed to -250px with animation.
     setTimeout(() => {
         span.style.top = y - "250" + "px";
         span.style.transition = "0.8s";
     }, 10);

     // Setting different background color to each balloon with the help of colors variable array and i variable (which is increamenting).
     span.style.backgroundColor = colors[i - 1];

     // Adding this newly created element to web page.
     document.body.appendChild(span);

     // Remove this newly created element from web page.
     setTimeout(() => {
         span.remove();
     }, 1000);

     // Setting i variable value to zero again as initially given, when its equals to colors variable(array) length. So that array colors starts againg from starts.
     if (i == colors.length) {
         i = 0;
     }
 }