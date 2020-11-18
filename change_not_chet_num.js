let out = document.querySelector(".out");
let head = document.querySelector(".head");


head.innerHTML = "Заполнение масива нечетними числами от 'n' до 'N'";
//Ето масив-пример
let arr = [];

function cycle(n, N) {
  for (let i = n; i <= N; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
}
cycle(0, 20);
console.log(arr);

out.innerHTML = arr;