document.getElementById('btn-cash-out')
    .addEventListener('click',function(event){
        event.preventDefault();
        
        
        const cashOutMoney = document.getElementById('cash-out-add-money').value;
        const cashOutPin = document.getElementById('cash-out-pin-number').value;
        

        if(cashOutPin === '1234'){
            console.log('Money reduce');

            const balance = document.getElementById('account-balance').innerText;

            const newCashOut = parseFloat(cashOutMoney);
            const balanceNumber = parseFloat(balance);
            const newBalance = balanceNumber - newCashOut;

            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Incorrect password');
        }

});