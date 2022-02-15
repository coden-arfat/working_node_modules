// // Importing the func.js module
// // The ./ says that the func module
// // is in the same directory as
// // the main.js file
// const f = require('./func.js');
// const result = f.add(10, 5);
// const result2 =f.subtract(374,37)
// console.log('The result is:', result,result2);


const {add,sub}=require('./module') ;

add(12,33)
sub(28,234)