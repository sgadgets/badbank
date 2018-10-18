// setup server
// YOUR CODE
var express = require('express');
var app     = express();
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

app.use(express.static('public'));
db.defaults({ account: []}).write();

// setup directory used to serve static files
// YOUR CODE

// setup data store
// YOUR CODE

// required data store structure
// YOUR CODE
/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/

app.get('/account/create/:name/:email/:password', function (req, res) {

    // YOUR CODE
    console.log ("request received"+req.params.name)
    var account = {
        "name" : req.params.name,
        "email" : req.params.email,
        "password" : req.params.password,
        "balance":0 
    };
    var check = db.get('account')
  .find({ email: req.params.email })
  .value()
  console.log ("print"+JSON.stringify(check))
    // Create account route
    // return success or failure string
    //if()
    if(!check)
    {
        db.get("account").push(account).write();
    console.log(db.get('account').value());  
    var obj={status :"success"} 
    res.send(obj);
    }
    else{
         var obj={status :"account already exists"} 
            res.send(obj);
    }
   // var obj=(status :"failure"}
   // res.send(obj); 


});

app.get('/account/login/:email/:password', function (req, res) {

    console.log("Request Login");
  var check = db.get('account')
  .find({ email: req.params.email })
  .value()
 if(check)
    { 
    var obj={status :"success"} 
    res.send(obj);
    }
    else{
         var obj={status :"account doesn't exist"} 
            res.send(obj);
    }
    // If success, return account object    
    // If fail, return null


});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
});

app.get('/account/deposit/:email/:amount', function (req, res) {

  console.log("Request Deposit");
  var check = db.get('account')
  .find({ email: req.params.email })
  .value()
 if(check)
    { 
      db.get('account')
  .find({email: req.params.email})
  .assign({ balance: req.params.amount })
  .write()
    var obj={status :"Woot! Success"} 
    res.send(obj);
    }
    else{
         var obj={status :"Cannot deposit with this account"} 
            res.send(obj);
    }
    // Deposit amount for email
    // return success or failure string
});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    console.log("Request Withdraw");
  var check = db.get('account')
  .find({ email: req.params.email })
  .value()
if(check){
  console.log("Request Withdraw" + JSON.stringify(check)); 
    var amount = req.params.amount
    var balance = check.balance
    var newbalance = balance-amount
    console.log("New Balance" + newbalance) 

if(newbalance>=0){
  db.get('account')
  .find({email: req.params.email})
  .assign({ balance: newbalance })
  .write()
    var obj={status :"Woot! Success! Your New Balance is:" + newbalance} 
    res.send(obj);
}
 else{
    var obj={status :"Not Enough Funds. Your Balance is:" + balance} 
    res.send(obj)
  }
}
else{
  var obj={status :"Account Not Found"} 
    res.send(obj)
}
  
    // Withdraw amount for email
    // return success or failure string
});

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account
});

app.get('/account/all', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
});
app.listen(3000, function(){
    console.log('Running on port 3000');
});


