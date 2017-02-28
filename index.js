'use strict';

// head

let titleText = 'Best Page on WWW'

function updateTitle(text) {
  let title = document.createElement('title'),
      titleNodeText = document.createTextNode(text);
      title.appendChild(titleNodeText);

  return document.head.appendChild(title)
}

updateTitle(titleText);

// header



// body

let heading = document.createElement("h1"),
    headingText = document.createTextNode("DOM manipulation via JavaScript is cool.");

heading.appendChild(headingText);
document.body.appendChild(heading);

let headingEl = getElementsByTagName('h1');
headingEl.style.color = 'red';
