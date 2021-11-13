var elem = document.getElementById("code");

for (var i = 1; i < 101; i++) {
  var temp = document.createElement("p");
  temp.id = i;
  elem.appendChild(temp);
}

for (var i = 1; i < 101; i++) {
  var test = document.getElementById(i);
  if (i % 3 == 0 && i % 5 == 0) {
    test.innerHTML = "FizzBuzz";
  } else if (i % 3 == 0) {
    test.innerHTML = "Fizz";
  } else if (i % 5 == 0) {
    test.innerHTML = "Buzz";
  } else {
    test.innerHTML = i;
  }
}
