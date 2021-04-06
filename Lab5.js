//LAB 1

var school = "Codenest";
var numbers = [1, 2, 4, 0];

console.log(Array.isArray(school));
console.log(Array.isArray(numbers));

//LAB 2

var state = ["Lagos", "Ibadan", "Imo", "Abuja"];

console.log(state.join());
console.log(state.join("+"));

//LAB 3

function displayLarge(a, b) {
  if (a > b) {
    return a + " " + "is greater than" + " " + b;
  } else {
    return b + " " + "is greater than" + " " + a;
  }
}

console.log(displayLarge(10, 50));
console.log(displayLarge(30, 10));

//LAB 4

function compute_average_mark(scores) {
  var sum = 0;
  for (var i = 0; i < scores.length; i++) {
    sum += scores[i]; //don't forget to add the base
  }
  var average = sum / scores.length;
  if (average < 60) {
    return [average, "F"];
  }

  if (average >= 60 && average < 70) {
    return [average, "D"];
  }

  if (average >= 70 && average < 80) {
    return [average, "C"];
  }

  if (average >= 80 && average < 90) {
    return [average, "B"];
  }

  if (average >= 90) {
    return [average, "A"];
  }
}

mark = [70, 40, 50, 80];

console.log(compute_average_mark(mark));

//LAB 5

var fruits = "banana";

switch (fruits) {
  case "banana":
    alert("Hello");
    break;
  case "apple":
    alert("Welcome");
    break;
  default:
    alert("nothing");
}

var fruits = "apple";

switch (fruits) {
  case "banana":
    alert("Hello");
    break;
  case "apple":
    alert("Welcome");
    break;
  default:
    alert("nothing");
}

//LAB 6

function getDay(x) {
  if (x == "Sunday") {
    return 0;
  }

  if (x == "Monday") {
    return [1, "Today is " + x];
  }

  if (x == "Tuesday") {
    return [2, "Today is " + x];
  }

  if (x == "Wednesday") {
    return [3, "Today is " + x];
  }

  if (x == "Thursday") {
    return [4, "Today is " + x];
  }

  if (x == "Friday") {
    return [5, "Today is " + x];
  }

  if (x == "Saturday") {
    return 6;
  }
}

console.log(getDay("Saturday"));
