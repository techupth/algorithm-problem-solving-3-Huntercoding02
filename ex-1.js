function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for(let i=0;i<customers.length-1;i++){
    for(let j=0;j<customers.length-1-i;j++){
      if(customers[j]>customers[j+1]){
        let temp = customers[j]
        customers[j]=customers[j+1]
        customers[j+1] = temp
      }
    }
  }
  return customers
}

console.log(sortCustomerName(["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"]))
// ตอบคำถามตรงนี้จ้า
//O(n^2) จะทำงานเพิ่มขึ้นตามจำนวนรอบของ input ที่ใส่เข้ามา