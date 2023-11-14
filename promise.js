// promise is a special js object, which denotes eventual completion or failure of a async operation
function doLogin() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            return resolve({});
        }, 10000); 
    });
}

let user = doLogin() // promise object you will receive
console.log(user);