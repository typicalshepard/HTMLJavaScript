

// Task 1
const h1Element = document.getElementById('main').querySelector('h1');
console.log(h1Element);

const pElement = document.querySelector('.description');
console.log(pElement);

const listItemsByClass = document.getElementsByClassName('tasks');
console.log(listItemsByClass[0].getElementsByTagName('li'));

const ulElement = document.getElementsByTagName('ul')[0];
console.log(ulElement);

const allListItems = document.querySelectorAll('.tasks li');
console.log(allListItems);


const ulParentNode = ulElement.parentNode;
console.log(ulParentNode);

const ulPreviousSibling = ulElement.previousElementSibling;
console.log(ulPreviousSibling);

const h1NextSibling = h1Element.nextElementSibling;
console.log(h1NextSibling);

h1Element.textContent = "Updated DOM Lab";

ulElement.innerHTML += '<li>Task 4</li>';

pElement.textContent = "This is an updated description.";
