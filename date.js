// can either define the fnction that you want to run
// function myDateTime() {
//     return Date();
// }

// then export it to  be gobal by the function name
// module.exports.date = myDateTime;

// or
// write and refactor the whole code above above like so 
exports.myDateTime = function () {
  return Date();
};
