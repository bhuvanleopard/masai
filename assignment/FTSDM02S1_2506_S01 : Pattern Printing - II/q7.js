
function brickWall(h,w){
  
  let ele="[]  ";
  
  for(let i=0; i<h; i++){
    
    if(h<1 || h>20 || w<1 || w>20){
      return "invalid input, [1,20] input accepted"  
      break;
    }
    
    
    let output="";
    
    if(ele=="[]  "){
      
      for(let i=0; i<w; i++){
        output+=ele;
      }
      ele="  []"
    }else {
      for(let i=0; i<w; i++){
        output+=ele;
      }
      ele="[]  "
    }
    console.log(output)
  }
  
}

brickWall(20,20)
