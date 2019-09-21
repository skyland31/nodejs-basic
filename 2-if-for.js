// const a = "a";
// if (a === "a") {
//   console.log("It's a");
// } else {
//   console.log("It's not a");
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);
let i = 1;
let sum = 0;
while (i <= 1000) {
  sum = sum + i;
  i++;
}
console.log(sum);

let a = 1; //int a =1;
let b = 1.1; // float b = 1.1;
let C = "Hello"; //string c = "hello"
let d = true; //bool d = true
let e = false; // bool e = false
let f = ["a", "b", "c"]; //string *f = ["a","b","c"]
f[0] = "f";
f.push("h");
console.log(f);
let h = [];
let student = {
  id: "60144730",
  name: "Suttipong",
  faculty: "Science"
};
console.log(student.name);
student.name = "Nuttapon";
console.log(student.name);
console.log(student["name"]);
