let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

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

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'first-site/images/jennyycreates-logo.png') {
        myImage.setAttribute('src', 'first-site/images/chipmunk.png')
    } else {
        myImage.setAttribute('src', 'first-site/images/jennyycreates-logo.png')
    }
}