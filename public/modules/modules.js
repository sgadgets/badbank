var ui = {};

ui.navigation = `
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Welcome!</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick = "loadCreateAccount()">Create Account</a>
      </li>
     <li class="nav-item">
        <a class="nav-link" onclick = "loadLogin()">Login</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" onclick = "loadDeposit()">Deposit</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" onclick = "loadWithdraw()">Withdraw</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Welcome to the BadBank</h5>
    <p class="card-text">Thanks for your Money</p>
  </div>
</div> 
`;

ui.createAccount = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Let's Get Started! Create Account Here</h5>
    <input type="input" id="addname" placeholder="name">
        <input type="input" id="addemail" placeholder="email">
        <input type="input" id="addpassword" placeholder="password">
   <button type="button" class="btn btn-info" onclick="create()">Create</button>
    <div id="status"></div> 
  </div>
</div>
`;

ui.login = `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Welcome Back! Login Here</h5>
        <input type="input" id="email" placeholder="email">
        <input type="input" id="password" placeholder="password">
   <button type="button" class="btn btn-info" onclick="login()">Login</button>
    <div id="status"></div> 
  </div>
</div>
`;

ui.deposit = `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Deposit Here</h5>
        <input type="input" id="email" placeholder="email">
        <input type="input" id="amount" placeholder="amount">
   <button type="button" class="btn btn-info" onclick="deposit()">Deposit</button>
    <div id="status"></div> 
  </div>
</div>
`;

ui.withdraw = `
   <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Withdraw Here</h5>
        <input type="input" id="email" placeholder="email">
        <input type="input" id="amount" placeholder="amount">
   <button type="button" class="btn btn-info" onclick="withdraw()">Deposit</button>
    <div id="status"></div> 
  </div>
</div>
`;


ui.transactions = `
    <!-- ------------- YOUR CODE: Transactions UI ------------- --> 
`;

ui.balance = `
    <!-- ------------- YOUR CODE: Balance UI ------------- --> 
`;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
`;

ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- --> 
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
