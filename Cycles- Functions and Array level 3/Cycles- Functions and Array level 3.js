let out = document.querySelector(".out");
let head = document.querySelector(".head");

// head.innerHTML =
//   "Функция вичисляет, сколько четних и нечетних цифир в числе 'n'";

// function num(n) {
//   let chet = 0;
//   let nechet = 0;
//   for (let i = 0; i <= n.length; i++) {
//     if (n[i] % 2 == 0) chet++;
//     else nechet++;
//   }
//   return [chet, nechet];
// }

// out.innerHTML = num("6564562154");
// //
//
//
//
//
head.innerHTML =
  "Функция вичисляет число Фибоначи. В аргументе 'count', ми указиваем, сколько последовательних чисел нужно вивести на екран";

function Fibonachi(count) {
  let F = [];
  for (let i = 0; i < count; i++) {
    if (i == 0) F[i] = 1;
    else if (i == 1) F[i] = 2;
    else F[i] = F[i - 2] + F[i - 1];
  }
  return F;
}

out.innerHTML = Fibonachi(13);
