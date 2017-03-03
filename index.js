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

  let nav = document.querySelector('nav');
  nav.className = 'nav';

<<<<<<< HEAD
  let ulCreate = document.createElement('ul');
  nav.appendChild(ulCreate);

  let ul = document.querySelector('ul');
=======
  let ulInsert = document.createElement('ul');
  document.body.appendChild(ulInsert);
  
  let ulSel = document.querySelector('ul');
>>>>>>> non-js

  function createListItems(items) {
    for (let i = 0; i <= items; i++ ) {
      let li = document.createElement('li'),
          liContent = document.createTextNode(i.toString());
      ulSel.li.appendChild(liContent);

      ul.appendChild(li);
    }
  }

  createListItems(4);

  // add some spice to the page.

  let heading = document.createElement('h1'),
      headingText = document.createTextNode('DOM manipulation via JavaScript is cool.');

  heading.appendChild(headingText);
  document.body.appendChild(heading);
