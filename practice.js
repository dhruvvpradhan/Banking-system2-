let accounts = [];
let accountNumber = 200;

function createAccount() {
    let balance = prompt("Enter opening balance (minimum 500):");
    balance = parseInt(balance, 10);
    
    if (isNaN(balance) || balance < 500) {
        alert("Opening balance should be at least 500.");
    } else {
        accountNumber++;
        accounts.push({ accNo: accountNumber, balance: balance });
        alert(`Account created successfully! Account Number: ${accountNumber}`);
    }
}

function displayAccount() {
    let output = document.getElementById('output');
    output.innerHTML = '';
    
    if (accounts.length === 0) {
        output.innerHTML = "No accounts available.";
        return;
    }
    
    accounts.forEach(account => {
        output.innerHTML += `Account Number: ${account.accNo} <br> Balance: ${account.balance} <br><br>`;
    });
}

function deposit() {
    let accNo = prompt("Enter your account number:");
    let account = accounts.find(acc => acc.accNo == accNo);
    
    if (account) {
        let depositAmount = prompt("Enter amount to deposit:");
        depositAmount = parseInt(depositAmount, 10);
        
        if (!isNaN(depositAmount) && depositAmount > 0) {
            account.balance += depositAmount;
            alert("Amount deposited successfully!");
        } else {
            alert("Invalid deposit amount.");
        }
    } else {
        alert("Invalid account number.");
    }
}

function withdraw() {
    let accNo = prompt("Enter your account number:");
    let account = accounts.find(acc => acc.accNo == accNo);
    
    if (account) {
        let withdrawAmount = prompt("Enter amount to withdraw:");
        withdrawAmount = parseInt(withdrawAmount, 10);
        
        if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
            if (account.balance - withdrawAmount >= 500) {
                account.balance -= withdrawAmount;
                alert("Amount withdrawn successfully!");
            } else {
                alert("Minimum balance of 500 required.");
            }
        } else {
            alert("Invalid withdrawal amount.");
        }
    } else {
        alert("Invalid account number.");
    }
}

function checkBalance() {
    let accNo = prompt("Enter your account number:");
    let account = accounts.find(acc => acc.accNo == accNo);
    
    if (account) {
        alert(`Your current balance is: ${account.balance}`);
    } else {
        alert("Invalid account number.");
    }
}

function callUs() {
    // Define what happens when "Call Us" is clicked
    alert("Call us at 123-456-7890.");
}

function aboutUs() {
    // Define what happens when "About Us" is clicked
    alert("We are a fictional bank for demonstration purposes.");
}
