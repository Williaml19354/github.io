// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'https://mdn.github.io/beginner-html-site-scripted/images/firefox-icon.png') {
    myImage.setAttribute ('src','https://w7.pngwing.com/pngs/498/483/png-transparent-yin-and-yang-balance-harmony-tao-taoism-yin-yang-ying-yang-black-white.png');
  } else {
    myImage.setAttribute ('src','https://mdn.github.io/beginner-html-site-scripted/images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
