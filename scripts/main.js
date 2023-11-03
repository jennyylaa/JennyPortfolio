let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

/* function setUserName() {
    let myName = prompt('please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'yessir, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'yuh, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
} */

document.addEventListener("click", function (e)) {
    if(e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");
        console.log(src);
    }
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'first-site/images/jennyycreates-logo.png') {
        myImage.setAttribute('src', 'first-site/images/chipmunk.png')
    } else {
        myImage.setAttribute('src', 'first-site/images/jennyycreates-logo.png')
    }
}