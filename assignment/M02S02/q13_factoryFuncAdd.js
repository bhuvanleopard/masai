
function createInventoryItem(name, category, price) {
    return {
      
      Item: name, Category: category, Price: price,
      
      describeItem(){
        console.log(`Item: ${this.Item}, Category: ${this.Category}, Price:${this.Price}`)
      },
      
      addItemDiscount(discountPercent){
        let res =  (this.Price/100 * (100-discountPercent))
        return function applyDiscount(){
          console.log(res)
        }
      },
      
      
    }
}


let res = createInventoryItem("laptop", "electronic", 1500)
let res2 = res.addItemDiscount(20)
res2()
