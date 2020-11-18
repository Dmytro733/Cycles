let out = document.querySelector(".out");
let head = document.querySelector(".head");


head.innerHTML =
"Перевірка, що масив складається виключно з додатних чисел, повертається true або false";

 function hasOnlyPositiveNumbers(numbers) {

  function isPositiv(num) {
    return num > 0;
  }

  if(numbers.every(isPositiv)) {
    return true;
  }else{
    return false;
  }
}

out.innerHTML = hasOnlyPositiveNumbers([12, -5, 6, 1, -7, -0.5, 15]);
