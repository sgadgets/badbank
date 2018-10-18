
function create() {
 var status  = document.getElementById('status')
    var name = document.getElementById('addname').value;
    var email = document.getElementById('addemail').value;
    var password = document.getElementById('addpassword').value;
    console.log(name);
    console.log(email);
    console.log(password);
    var url = '/account/create/' + name + '/' + email + '/' + password;

    superagent
        .get(url)
        .end(function(err, res){
             if (err){
                console.log(err);
            }
            else{
                console.log(res);
                status.innerHTML = JSON.stringify(res.body.status);
            }

        });
}

function login() {
    var status  = document.getElementById('status')
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log(name);
    console.log(email);
    console.log(password);
    var url = '/account/login/' + email + '/' + password;
console.log("Send Login Request");
    superagent
        .get(url)
        .end(function(err, res){
             if (err){
                console.log(err);
            }
            else{
                console.log(res);
                status.innerHTML = JSON.stringify(res.body.status);
            }

        });
}

function deposit() {
  var status  = document.getElementById('status')
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;
    console.log(email);
    console.log(amount);
    var url = '/account/deposit/' + email + '/' + amount;
console.log("Send Deposit Request");
    superagent
        .get(url)
        .end(function(err, res){
             if (err){
                console.log(err);
            }
            else{
                console.log(res);
                status.innerHTML = JSON.stringify(res.body.status);
            }

        });
}
    //  YOUR CODE
    //  Deposit funds user funds on server
    // -------------------------------------

function withdraw() {
      var status  = document.getElementById('status')
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;
    console.log(email);
    console.log(amount);
    var url = '/account/withdraw/' + email + '/' + amount;
console.log("Send Withdraw Request");
    superagent
        .get(url)
        .end(function(err, res){
             if (err){
                console.log(err);
            }
            else{
                console.log(res);
                status.innerHTML = JSON.stringify(res.body.status);
            }

        });
    //  Withdraw funds user funds on server
    // -------------------------------------
}

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
}

function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
}

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
}

