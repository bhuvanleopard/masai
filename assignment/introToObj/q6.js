let obj={
  user0: {name: "Billie", role: "user", active: true, nest:{one: "one"} },
    user1: {name: "Liala", role: "user", active: false },  
      user2: {name: "Logan", role: "user", active: false },
        user3: {name: "LeBron", role: "user", active: false },
          spectate: {name: "Timothee", role: "spectator", active: true },
        user4: {name: "Justin", role: "admin", active: false },
      user5: {name: "Wills", role: "admin", active: false },
    user6: {name: "Jake", role: "admin", active: false },
  user7: {name: "Lana", role: "admin", active: true },
  
  message:function(){
    
    for( key in obj){
      if(key=="message"){
        continue;
      }
      
      let res = obj[key].active==true ? `${obj[key].role} Access Granted!`: 
      `${obj[key].role} Access Revoked.`;
      
      obj[key].role != 'user' ? obj[key].role !='admin' ? res = "Access Denied"
                                                                                :null
                                                        :null;
      console.log(res)
      
    }
  }
};

obj.message()
