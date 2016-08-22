var multiplesOf3and5 = function(limit){
  var summation = 0;
  for (var i=0; i<limit; i++){
    if (i % 3 === 0 || i % 5 === 0){
      summation += i;
    }
  }
  return summation;
};

console.log(multiplesOf3and5(1000));
