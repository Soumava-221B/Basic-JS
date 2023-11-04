04/11/23
## Array.forEachMethod
- Array.forEachMethod: The forEach() method is an iterative method that calls a provided callback function once for each element in an array in ascending index order.
- forEach() does not return any value

```JavaScript
const months = ['January', 'February', 'March', 'April'];
const returnedValue = months.forEach(function (month) {
  return month;
});

console.log('returnedValue: ', returnedValue); // undefined
```

```JavaScript
Array.forEach(callback(currentValue [, index [, array]])[, thisArg]);
```

### Advantages of using forEach instead of a for loop
- Using a forEach loop makes your code shorter and easier to understand
- When using a forEach loop, we don't need to keep track of how many elements are available in the array. So it avoids the creation of an extra counter variable.
- Using a forEach loop makes code easy to debug because there are no extra variables for looping through the array
- The forEach loop automatically stops when all the elements of the array are finished iterating.