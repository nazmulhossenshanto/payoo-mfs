document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber === '0130' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = '/home.html'
    }
    else{
        console.log('wrong phone number or pin');
    }
})