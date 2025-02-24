
function fetchData(){
  
  return new Promise((resolve)=>setTimeout(()=>resolve(Math.random()),1000))
}

async function fetchDataHandler(){
  try{
  let res = await fetchData(); //console.log(res)
  let res1 = await new Promise((resolve, reject)=> res>0.5 ?resolve("sucessfully"): reject("failed"))
  console.log(res1)
    
  }catch(error){
    console.log(error)
  }
}

fetchDataHandler()
