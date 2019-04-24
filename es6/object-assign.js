// Object assign
const obj = {
  name: "Burak",
  surname: "Şahin"
};

const obj2 = {
  name1: "Fatih",
  surname2: "Şen"
};

const obj3 = Object.assign({}, obj2);
obj3.name1 = "Onur";

console.log("obj3 =>    ", obj3);
console.log("obj2 =>    ", obj2);
