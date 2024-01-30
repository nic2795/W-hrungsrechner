function calc(){
   let CHF = frankenField.value;
   let result = CHF * 1.146981;
   usd.value = result.toFixed(2).replace('.', ',');

}