document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount').value;
    const inputPin = document.getElementById('input-pin').value;
    if (inputPin === '1234') {
        let balance = Number(document.getElementById('account-balance').innerText);
        const addMoneyNubber = Number(inputAmount);
        const newBalance = addMoneyNubber + balance;
        document.getElementById('account-balance').innerText = newBalance;

    }
    else {
        alert('Failed to add money! Please try again')
    }

})
