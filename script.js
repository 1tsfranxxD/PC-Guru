var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");

btn1.onclick = function() {
  modal1.classList.add('show');
}

btn2.onclick = function() {
  modal2.classList.add('show');
}

btn3.onclick = function() {
  modal3.classList.add('show');
}

btn4.onclick = function() {
  modal4.classList.add('show');
}

btn5.onclick = function() {
  modal5.classList.add('show');
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.classList.remove('show');
  } else if (event.target == modal2) {
    modal2.classList.remove('show');
  } else if (event.target == modal3) {
    modal3.classList.remove('show');
  } else if (event.target == modal4) {
    modal4.classList.remove('show');
  } else if (event.target == modal5) {
    modal5.classList.remove('show');
  }
}