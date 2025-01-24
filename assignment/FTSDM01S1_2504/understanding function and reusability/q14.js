
function calculatePrice(){

  let b=true;
  while(b){
  	var price= prompt("please enter appropriate price")
  	b=isNaN(price) || price==null || price<=0;
  		
  }

 
  
  let a=true;
  while(a){
  	var discount= prompt("please enter appropriate discount in percentage")
  	a=isNaN(discount) || discount<0 || discount>100;
  		
  }
  
  if (discount==null){discount=10};
  let final= (price/100) * (100-discount);
  return `Your final price is ${final}`
  
  
}
//console.log(calculatePrice(30))
