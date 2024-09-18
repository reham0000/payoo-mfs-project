document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber, phoneNumber);
});

