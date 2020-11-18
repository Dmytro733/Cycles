let out = document.querySelector(".out");
let head = document.querySelector(".head");


head.innerHTML =
"функція getDifference, котра приймає масив чисел numbers та повертає різницю між найбільшим та найменшим числом у масиві.";

function getDifference(numbers) {
    const sortArr = numbers.sort((a, b) => a - b);

    if(sortArr.length <= 1){
      return 0;
    }
  
    return sortArr.pop() - sortArr[0];
}

out.innerHTML = getDifference([-2, 10, 86, -43, 0, 23])
  
