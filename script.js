function insertCard() {
    document.getElementById('message').innerText = 'Card Inserted. Please enter your PIN.';
}

function enterPin() {
    let pin = prompt('Please enter your PIN:');
    if (pin === '1234') {
        document.getElementById('message').innerText = 'PIN accepted. Choose an option.';
    } else {
        document.getElementById('message').innerText = 'Incorrect PIN. Try again.';
    }
}

function withdraw() {
    let amount = prompt('Enter amount to withdraw:');
    if (amount > 0) {
        document.getElementById('message').innerText = `Please take your $${amount}.`;
    } else {
        document.getElementById('message').innerText = 'Invalid amount.';
    }
}

function checkBalance() {
    document.getElementById('message').innerText = 'Your balance is $1000.';
}

function exit() {
    document.getElementById('message').innerText = 'Thank you! Please take your card.';
}
