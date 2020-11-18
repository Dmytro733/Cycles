let out = document.querySelector(".out");
let head = document.querySelector(".head");

head.innerHTML =
  "Функция вичисляет, сколько четних и нечетних цифир в числе 'n'";

function num(n) {
  let chet = 0;
  let nechet = 0;
  for (let i = 0; i <= n.length; i++) {
    if (n[i] % 2 == 0) chet++;
    else nechet++;
  }
  return [chet, nechet];
}

out.innerHTML = num("6564562154");

