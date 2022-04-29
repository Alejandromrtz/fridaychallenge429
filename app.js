// //1 Convert the following function into an arrow function named "arrowMyFunction".

  const myFunction = function (num1, num2) {
      return num1 + num2;
  };

let arrowMyFunction = (num1, num2) => {
    return (num1 + num2);  
};



// 2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
  const add100 = function (money) {
     return money + 100;
  };

  
 let arrowAdd100 = (money) => {return money + 100};

 


// //3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
// Examples:
// countLetters('Hello my name is John', 'i') returns 1
// countLetters('Hello my name is John', 'h') returns 2
// countLetters('We love this city a lot, sometimes', 'e') returns 4


let x = (first , second) => {
    let count = 0;
    //loops thru array 
    for (let i = 0; i < first.length; i++) {
        //adds 1 to count every loop
        if(first[i].toLowerCase().includes(second)) {
            count += 1;
        }
    }
    console.log(count)
}
x('Lets go get giants near the giant wall', 'g');
x('This is Alejandro Martinez', 'a');
x('We love this city sometimes!', 'e');