let username = "miigaa";

console.log(username.length);
if (username.length < 3) {
  console.log("username too short");
} else {
  console.log("username must be longer");
}
let too = 10;
for (let too = 1; too <= 10; too++) {
  console.log(too);
}
let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
  console.log(sum);
}
for (let i = 1; i <= 5; i++) console.log(i);
for (let i = 0; i < 8; i++) console.log(6);
for (let i = 5; i >= 1; i--) console.log(i);

for (let i = 1; i <= 10; i++) {
  if (i != 5) console.log(i);
}
let a = 10;
for (let i = 0; i < a; i++) {
  console.log(a);
}
let i = 144;
console.log(i % 100);

let input = 1234;
let reverse = 0;
for (let i = input; i >= 1; i = Math.floor(i / 10)) {
  reverse = reverse * 10 + (i % 10);
}
console.log(reverse);

let string = "hello world";
let reversed = "";
for (let i = string.length - 1; i >= 0; i--) {
  console.log(string[i]);
}
for (let i = string.length - 1; i >= 0; i--) {
  reversed = reversed + string[i];
}
console.log(reversed);

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

for (let i = n - 1; i >= 1; i++) {
  let row = " ";
}
