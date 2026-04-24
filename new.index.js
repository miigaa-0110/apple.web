const personas = [
  {
    age: 32,
    name: "Miigaa",
    phoneNumber: "88939221",
    gender: "female",
  },
  {
    age: 12,
    name: "naraa",
    phoneNumber: "80020902",
    gender: "female",
  },
  {
    age: 45,
    name: "dondog",
    phoneNumber: "88938799",
    gender: "male",
  },
  {
    age: 15,
    name: "delger",
    phoneNumber: "99939221",
    gender: "male",
  },
  {
    age: 19,
    name: "sewjee",
    phoneNumber: "80989221",
    gender: "female",
  },
];
console.log(personas);

let users = [];

function getAllPersonas() {
  for (let i = 0; i < personas.length; i++) {
    if (personas[i].gender === "female") {
      users.push(personas[i]);
    }
  }
}
getAllPersonas();

console.log(users);
