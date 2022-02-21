for(i=1; i<=20; i++){
    if(i % 2 != 0){
    console.log(i);
} else {
    
}
}
for(i=100; i>=0; i--){
  if( i % 3 === 0){
    console.log(i);
} else {}
}

var arreglo = [4, 2.5, 1, -0.5, -2, -3.5];
for (i=0; i<= arreglo.length; i++){
    console.log(arreglo[i]);
}



let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);




const num = [1,2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var product = 1;
  for (var i = 0; i < num.length; i++){
     product = product * num[i];
  }
  console.log(product);
