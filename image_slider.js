var timeToChangeSlide = 10000;

var slideIndex = 1;
showDivs(slideIndex);

var myIndex = 0;
carousel();

function plusDivs(n) {
  showDivs(slideIndex += n);
    timeToChangeSlide = 0;
}

function showDivs(n) {//manual image slider using buttons on left and right
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
    }
    
    
    x[slideIndex-1].style.display = "block";
   
}

function carousel() {//image slider automatic every 9 seconds
    var i;
    var xd = document.getElementsByClassName("mySlides");
    for (i = 0; i < xd.length; i++) {
       xd[i].style.display = "none";  
    
    }
    myIndex++;
    if (myIndex > xd.length) {myIndex = 1}    
    xd[myIndex-1].style.display = "block";  
    
    timeToChangeSlide = 10000;
    setTimeout(carousel, timeToChangeSlide); // Change image every 2 seconds   
    
}

function myFunction() {
    var x = document.getElementById("form_title").value;
    document.getElementById("title").innerHTML = x;
}