let out = document.querySelector(".out");
let head = document.querySelector(".head");


head.innerHTML =
  "функція getUniqNames, котра повертає масив унікальних імен з масиву people";

  function getUniqNames(people){
      let Name = [];
      
      people.forEach(function(val){
        if(Name.includes(val.firstName) == false){
            Name.push(val.firstName);
        }
      });
      return Name;
  }
out.innerHTML = getUniqNames(people);
