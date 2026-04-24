let todos = [
  {
    title: "hello world",
    isDone: false,
  },
  {
    title: "Hicheel hiih",
    isDone: false,
  },
  {
    title: "deel hiiih",
    isDone: false,
  },
  {
    title: "hool hiiih",
    isDone: false,
  },
  {
    title: "duu hiiih",
    isDone: false,
  },
  {
    title: "nom bichix",
    isDone: false,
  },
];

todos[1].isDone = true;
console.log(todos);
let index = 5;

function changeIsDone(index) {
  let newArray = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].isDone === true) {
      newArray.push(todos[i]);
    }
  }
}

changeIsDone(2);
console.log(todos);
