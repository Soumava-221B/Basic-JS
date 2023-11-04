const months = ['January', 'Febuary', 'March', 'April'];

months.forEach(function(month) {           // callback function
    console.log(month);
})

// Equivalent for loop 
// const months = ['January', 'Febuary', 'March', 'April'];
// for(let i = 0; i < months.length; i++) {
//     console.log(months[i]);
// }

const months2 = ['January', 'February', 'March', 'April'];
months2.forEach(function (month, index, array) {
    console.log(month, index, array);
}); 