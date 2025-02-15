function setTimeoutGreeting(){
   setTimeout(()=> console.log(`Hello, ${this.name}`), 1000);
}

let obj={ name: "bhuvan"}

let func= setTimeoutGreeting.bind(obj)
func()
