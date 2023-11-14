function doLogin() {
    let userProfile = {name: 'soumava'};
    console.log('matching the credentials....');
    return userProfile;
}

function showUserName(user) {
    console.log('user profile: ', user.name);
}
// async operation
// let user = doLogin(); // js might skip(running it in the bg and continue with remaining) it and move to the next line....

// console.log('username', user.name);

doLogin(showUserName) // once this function is complete, then only execute the other function...


doLogin(showUserName(initiatePayment(paymentOTP()))) // once this function is complete, thne only 
// 1. login
// 2. show profile
// 3. initiate a payment
// 4. payment otp