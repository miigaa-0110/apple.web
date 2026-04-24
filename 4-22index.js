let person = {
  firstname: "Davaadagva",
  lastname: "Myagmarsuren",
  age: 32,
  city: "erdenet",
};

console.log(person);
console.log(person.firstname, person.city);

person.city = "Ulaanbaatar";

console.log(person.city);
person.email = "miigaa@";
console.log(person.email);

let student = {
  name: "miigaa",
  age: 32,
  grades: {
    math: 95,
    science: 90,
    history: 100,
  },
  address: {
    street: "3 gol office",
    city: "ulaanbaatar",
    zip: 13342,
  },
};
console.log(student);

console.log(Object.keys(student));
console.log(Object.values(student));
delete student.address.zip;
console.log(student);
