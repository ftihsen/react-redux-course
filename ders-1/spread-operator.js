// spread-operator
const arr = [1, 2, 3, 4, 5];

const spread = [0, ...arr];

// console.log("spread => ", spread);

// Object
const obj = {
  name: "Hilmi",
  surname: "Yüksel"
};

const obj2 = { obj };
obj2.name = "Şahin";

console.log("Obj2 name =>    ", obj2.name);
console.log("Obj name =>    ", obj.name);
