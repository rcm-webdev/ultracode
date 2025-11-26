let arr = [1, 2, 3, 4];
let x = 10;
let y = 5;

if (x > y && arr.length > 3) {
  arr.push(x);  
  arr = arr.filter(n => n % 2 === 0);
}

console.log(arr);