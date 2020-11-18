let out = document.querySelector(".out");
let head = document.querySelector(".head");


head.innerHTML = 'функція getLongestString, котра повертає найдовший рядок з масиву strings.'


function getLongestString(strings) {

    let word = '';

    strings.map(function(i){
        if(i.length > word.length){
            word = i;
        }else{
            return word;
        }
    });

    return word;
}
out.innerHTML = getLongestString(['One', 'two', 'three', 'four']);