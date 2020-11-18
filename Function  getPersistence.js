let out = document.querySelector(".out");
let head = document.querySelector(".head");


head.innerHTML =
"функція getPersistence, котра приймає не від'ємне число number, та повертає його мультиплікативну стійкість. Щоб визначити мультиплікативну стійкість,потрібно перемножати цифри даного числа між собою, доки результат не міститиме тільки одну цифру."

let iterations = 0;
function getPersistence(number) {
    
    let num = number.toString().split("").reduce((a, b) => { return +a * +b });
  
    if(num > 10){
        iterations++; 
        getPersistence(num);
    }else if(num < 10){
        iterations++;
        return iterations;
    }else{
        return 0;
    }
  
  }
  
  out.innerHTML = getPersistence(1000);
