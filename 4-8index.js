// let n = 1224;
// let b = 0;

// for (let i = n; i >= 1; i = Math.floor(i / 10)) {}

let n = 5;
for (let i = 1; i < 11; i++) {
  console.log(n, "*", i, "=", n * 1);
}
let reverse = "hello";
//let reversed = "";
for (let i = 0; i < reverse.length; i++) {
  console.log(reverse[i]);
}

let star = " ";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === 3) {
      star = star + " - ";
    } else if (j === 2) {
      star = star + " + ";
    } else if (j === 4) {
      star = star + " + ";
    } else {
      star = star + " * ";
    }
  }
  console.log(star);
  star = " ";
}
let string = "hello world";
let result = 0;
for (let i = 0; i < string.length; i++) {
  let count = 1;
  for (let j = i + 1; j < string.length; j++) {
    console.log(string[i], string[j]);
    if (string[i] === string[j]) count++;
  }
}
console.log(count);
if (result < count) result = count;

for (let i = 1; i <= n; i++) {
  let row = " ";
  for (let s = 1; s <= n; s++) {
    row += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += "*";
  }
  console.log(row);
}
