//calculator

//events for each button
document.getElementById('pi').addEventListener('click', insertPi);
document.getElementById('par1').addEventListener('click', par1);
document.getElementById('par2').addEventListener('click', par2);
document.getElementById('sqrt').addEventListener('click', squareRoot);
document.getElementById('one').addEventListener('click', one);
document.getElementById('two').addEventListener('click', two);
document.getElementById('three').addEventListener('click', three);
document.getElementById('four').addEventListener('click', four);
document.getElementById('five').addEventListener('click', five);
document.getElementById('six').addEventListener('click', six);
document.getElementById('seven').addEventListener('click', seven);
document.getElementById('eight').addEventListener('click', eight);
document.getElementById('nine').addEventListener('click', nine);
document.getElementById('zero').addEventListener('click', zero);
document.getElementById('add').addEventListener('click', add);
document.getElementById('sub').addEventListener('click', sub);
document.getElementById('mul').addEventListener('click', mul);
document.getElementById('div').addEventListener('click', div);
document.getElementById('decimal').addEventListener('click', decimal);
document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('equal').addEventListener('click', equal);
document.getElementById('back').addEventListener('click', backSpace);


//functions
function insertPi() {
  document.getElementById('calculator-display').value += Math.PI;
}

function par1() {
  document.getElementById('calculator-display').value += '(';
}

function par2() {
  document.getElementById('calculator-display').value += ')';
}

function squareRoot() {
  document.getElementById('calculator-display').value = Math.sqrt(document.getElementById('calculator-display').value);
}


function one() {
  document.getElementById('calculator-display').value += '1';
}

function two() {
  document.getElementById('calculator-display').value += '2';
}

function three() {
  document.getElementById('calculator-display').value += '3';
}

function four() {
  document.getElementById('calculator-display').value += '4';
}

function five() {
  document.getElementById('calculator-display').value += '5';
}

function six() {
  document.getElementById('calculator-display').value += '6';
}

function seven() {
  document.getElementById('calculator-display').value += '7';
}

function eight() {
  document.getElementById('calculator-display').value += '8';
}

function nine() {
  document.getElementById('calculator-display').value += '9';
}

function zero() {
  document.getElementById('calculator-display').value += '0';
}

function add() {
  document.getElementById('calculator-display').value += '+';
}

function sub() {
  document.getElementById('calculator-display').value += '-';
}

function mul() {
  document.getElementById('calculator-display').value += '*';
}

function div() {
  document.getElementById('calculator-display').value += '/';
}

function clearDisplay() {
  document.getElementById('calculator-display').value = '';
}

function decimal() {
  document.getElementById('calculator-display').value += '.';
}

function backSpace() {
  var value = document.getElementById("calculator-display").value;
    document.getElementById("calculator-display").value = value.substr(0, value.length - 1);
}

function equal() {

  //error message
  try {
    document.getElementById('calculator-display').value = eval(document.getElementById('calculator-display').value);
  } catch (e) {
    if (e instanceof SyntaxError) {
      alert(e.message);
    } else {
      throw (e);
    }
  }
}


function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();