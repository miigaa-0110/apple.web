let hobbys = [
  "read books",
  "hiking",
  "listen to music",
  "creating new things",
  "travelling",
];
console.log(hobbys[1]);
console.log(hobbys[2]);
console.log(hobbys[4]);
console.log(hobbys.length);
for (let i = 0; i < hobbys.length; i++) {
  console.log(hobbys[i]);
}

let ages = [
  28, 36, 30, 32, 23, 41, 38, 21, 36, 22, 23, 23, 22, 22, 21, 44, 25, 24,
];
console.log(ages.length);

let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
  i >= 25;
}
console.log("buh nasnii niilber", sum);
console.log("dundaj nas", sum / ages.length);

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 25) {
    console.log(ages[i]);
  }
}

let count = 0;
for (let i = 0; i < ages.length; i++) {
  if (ages >= 20 && ages <= 29) {
    count++;
  }
}
