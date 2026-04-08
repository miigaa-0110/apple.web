let n = 3;
for (let i = 1; i <= n; i++) {
  let spaces = " ".repeat(n - 1);
}
let number = 99;
if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number === 7) {
  console.log("ankhnii too");
} else if (
  number % 2 === 0 ||
  number % 3 === 0 ||
  number % 5 === 0 ||
  number % 7 === 0
) {
  console.log("ankhnii too bish");
} else {
  console.log("ankhnii too");
}
for (let i = 1; i <= 100; i++) {
  if (i % 4 === 0 && i % 16 !== 0) {
    console.log(i);
  }
}

for (let i = 476; i <= 2980; i++) {
  if (i % 4 === 0 && i % 16 !== 0) {
    console.log(i);
  }
}
let string = "hello world";
console.log(string.toUpperCase());
console.log(string.replace("h", "n"));

let input = 1234;
let reverse = 0;
for (let i = input; i >= 1; i = i / 10) {
  reverse = (reverse + (i % 10)) * 10;
  i = Math.floor(i);
  console.log(reverse);
}
