/ todoList function used on button click to get user input and
function todoList() {
	// store user value
	let item    = document.getElementById(‘todoInput’).value
	// create a text node from the user input
	let text    = document.createTextNode(item)
	// create a li tag
	let newItem = document.createElement(‘p’)
	// add the user input to the li tag
	newItem.appendChild(text)
	// append the li to the html todoList id tag
	document.getElementById(‘todoList’).appendChild(newItem)
}
// Create a “close” button and append it to each list item
var myTasklist = document.getElementsByTagName(“Para”);
var i;
for (i = 0; i < mytaskList.length; i++) {
  var span = document.createElement(“SPAN”);
  var txt = document.createTextNode(“\u00D7");
  span.className = “close”;
  span.appendChild(txt);
  mytaskList[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName(“close”);
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = “none”;
  }
}
// Add a “checked” symbol when clicking on a list item
var list = document.querySelector(‘p’);
list.addEventListener(‘click’, function(ev) {
  if (ev.target.tagName === ‘P’) {
    ev.target.classList.toggle(‘checked’);
  }
}, false);
// Create a new list item when clicking on the “Enter” button
function newElement() {
  var p = document.createElement(“p”);
  var inputValue = document.getElementById(“todoInput”).value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === ‘’) {
    alert(“You must write something!“);
  } else {
    document.getElementById(“myPara”).appendChild(p);
  }
  document.getElementById(“taskName”).value = “”;
  var span = document.createElement(“SPAN”);
  var txt = document.createTextNode(“\u00D7”);
  span.className = “close”;
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = “none”;
    }
  }
}
