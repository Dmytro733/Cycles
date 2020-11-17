let out = document.querySelector(".out");
let head = document.querySelector(".head");


head.innerHTML =
  "Функція приймає об'єкт object та видаляє з нього усі ключі, котрі починаються з голосної літери. Регістр не має значення.";


function del(obj){
  const reg = /a|e|i|o|u|y/i;
  for (let key in obj){

      if(reg.test(key[0])){
          delete obj[key];
      }

  }
  
}

out.innerHTML = del(vowelsObj);
