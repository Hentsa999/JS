//Upddate the DOM
const Hello = document.getElementbyId('Hello');
const header = document.createElement('h1');
const headerContent = document.createTextNode('JavaScript DOM Update');
header.appendChild(headerContent);
Hello.appendChild(header);



