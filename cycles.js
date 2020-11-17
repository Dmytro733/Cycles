let out = document.querySelector(".out");
let head = document.querySelector(".head");

let tmp = " ";

head.innerHTML = "Вивод чисел от n до N";

function cycle(n, N) {
  for (let i = n; i <= N; i++) {
    tmp = tmp + i + " ";
  }
}
cycle(0, 10);

out.innerHTML = tmp;
//
//
//
//
//
// head.innerHTML = "Вивод чисел от n до N, шаг 3";
//
// function cycle(n, N) {
//   for (let i = n; i <= N; i = i + 3) {
//     tmp = tmp + i + " ";
//   }
// }
// cycle(0, 20);
//
// out.innerHTML = tmp;
//
//
//
//
//
// head.innerHTML = 'Вивод чисел от n до N начиная с большого к маленькому';
//
// function cycle(n, N) {
//   for (let i = n; i >= N; i = i - 1) {
//     tmp = tmp + i + " ";
//   }
// }
//
// cycle(10, 0);
//
// out.innerHTML = tmp;
//
//
//
//
//
// head.innerHTML = 'Вивод чисел от -n до N';
//
// function cycle(n, N) {
//   for (let i = n; i <= N; i++) {
//     tmp = tmp + i + " ";
//   }
// }
//
// cycle(-4, 4);
//
// out.innerHTML = tmp;
//
//
//
//
//
// head.innerHTML = 'multiplier = 7, значит, в даном случее делаем таблица умножение на 7';
//
// function cycle(n, N, multiplier) {
//   for (let i = n; i <= N; i++) {
//     tmp = tmp + multiplier + " * " + i + " = " + multiplier * i + " <br> ";
//   }
// }
//
// cycle(1, 9, 7);
//
// out.innerHTML = tmp;
//
//
//
//
// head.innerHTML = "Вивод спецсимволов";
//
// function cycle(n, N) {
//   for (let i = n; i <= N; i++) {
//     tmp = tmp + "&#" + i + " ";
//   }
// }
//
// cycle(1000, 2000);
//
// out.innerHTML = tmp;
