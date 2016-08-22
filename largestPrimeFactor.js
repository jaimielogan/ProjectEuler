var largestPrimeFactor = function(input){

  var factors = [];

  for (var i = 2; i < input; i++) {
    if(input % i === 0 && ){
      factors.push(i);
    }
  }
  return factors;
};

console.log(largestPrimeFactor(13195));
