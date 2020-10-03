
exports.min = function min (array) {
  
  if (Array.isArray(array) && array.length){
    let minN = array[0];
    for (var i=0; i < array.length; i++ ){
      if(minN > array[i]){
        minN = array[i];
      }
    }
    return minN;
  }
  return 0;
  
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length){
    let minN = array[0];
    for (var i=0; i < array.length; i++ ){
      if(minN < array[i]){
        minN = array[i];
      }
    }
    return minN;
  }
  return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length){
    let minN = array[0];
    let avg = 0;
    let sum = 0;
    for (var i=0; i < array.length; i++ ){
      sum += array[i];
    }
    avg = sum/array.length;
    return avg;
  }
  return 0;
}
