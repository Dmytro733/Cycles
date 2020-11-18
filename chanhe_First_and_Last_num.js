let out = document.querySelector(".out");
let head = document.querySelector(".head");

head.innerHTML = "Замена в масиве первое и последние число на 'n'";

//Ето масив-пример
let arr = [1, 7, 5, 9, 8, 7, 4, 6, 8, 4, 2];

function cycle(n) {
  for (let i = 0; i <= arr.length; i++) {
    if (i === 0 || i === arr.length - 1) {
      arr[i] = n;
    };
  }
}
console.log(cycle(3));
console.log(arr);

out.innerHTML = arr;