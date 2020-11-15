let out = document.querySelector(".out");
let head = document.querySelector(".head");


head.innerHTML =
  "функцію validate, котра приймає рядок password та перевіряє на: хоча б одна буква в верхньому регістрі; хоча б одна буква в нижньому регістрі;хоча б одна цифра; Довжина паролю не менше 8-ми символів; Пароль використовує тільки латинські літери та цифри.";

  function validatePassword(password) {
    const isOneUppercase = password !== password.toLowerCase();
    const isOneLowercase = password !== password.toUpperCase();
    const isOneNum = /\d/.test(password);
    const L = password.length >= 8;
    const Latin = /^[a-zA-Z1-9]+$/.test(password);

    return isOneLowercase && isOneUppercase && isOneNum && L && Latin;
  }

out.innerHTML = validatePassword();
