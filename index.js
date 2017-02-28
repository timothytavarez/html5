'use strict';

// head

let titleText = 'Best Page on WWW'

function updateDocumentTitle(text) {
  let title = document.createElement('title'),
      titleNodeText = document.createTextNode(text);
      title.appendChild(titleNodeText);

  return document.head.appendChild(title)
}

updateDocumentTitle(titleText);

// body

  // navigation section

  let navInsert = document.createElement('nav');
  document.body.appendChild(navInsert);

  let nav = document.querySelector('nav').className = "nav";

  let ulInsert = document.createElement('ul');
  document.body.appendChild(ulInsert);

  function createListItems(items) {
    for (let i = 0; i <= items; i++ ) {
      let li = document.createElement('li'),
          liContent = document.createTextNode(i.toString());
      li.appendChild(liContent);

      document.body.appendChild(li);
    }
  }

  createListItems(4);

  // add some spice to the page.

  let heading = document.createElement('h1'),
      headingText = document.createTextNode('DOM manipulation via JavaScript is cool.');

  heading.appendChild(headingText);
  document.body.appendChild(heading);
