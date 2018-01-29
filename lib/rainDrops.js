const rainDrops = (num) => {
  let i;
  let factors = [];
  let result = []
  
  for(i = 2; i <= num; i++){
    if(num % i === 0){
      
      factors.push(i)
    }
  }
  if(num === undefined || !num || Array.isArray(num) || num instanceof Object) {
    return 'Invalid! pls pass a valid Number'
  }
  factors.filter((elem) => {
    if(elem === 3 && elem === 5){
      result.push("PlingPlang");
    } 
    else if(elem === 5){
      result.push("Plang");
    }
    else if(elem === 7){
      result.push("Plong");
    }
    else if(elem === 3){
      result.push("Pling");
    }
  })
  if(result.length === 0){
    return num.toString();
  }
  return result.join('').toLowerCase();
  
}

export default rainDrops;