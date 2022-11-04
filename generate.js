const generate = (Category,session_id) => {

    txntype = ["upi", "food", "water", "phonepe", "travel", "shopping"]
  
    index = Math.floor(Math.random() * 100000)
  
    let token = {
  
      Amount: index,
  
      TxnType: txntype[index % txntype.length],
  
      Category: Category,
      session_id:session_id
  
    }
  
  
  
    return token
  
  }
  console.log(generate("Income"));
module.exports={generate};