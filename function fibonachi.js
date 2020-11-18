let out = document.querySelector(".out");
let head = document.querySelector(".head");

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