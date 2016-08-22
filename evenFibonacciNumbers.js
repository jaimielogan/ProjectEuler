var evenFibonacciNumbers = function(limit){

  var FibonacciSequence = [1,2];
  var summation = 0;

  for (var i = 0; i < FibonacciSequence.length; i++) {
    if(FibonacciSequence[i+1] >= limit){
      break;
    }
    FibonacciSequence.push(FibonacciSequence[i]+FibonacciSequence[i+1]);
  }
  for (var j = 0; j < FibonacciSequence.length; j++) {
    if(FibonacciSequence[j] % 2 === 0){
      summation += FibonacciSequence[j];
    }
  }
  return summation;
};

console.log(evenFibonacciNumbers(4000000));
