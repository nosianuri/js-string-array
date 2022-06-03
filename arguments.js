function addNumbers(num1, num2) {
    // console.log(arguments[1]);
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
    // arguments.push(45);
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13, 50);
// console.log(sum);
function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('omuk','songket','bin','Hanif', 'Songket', 'bin', 'tomuk', 'songket');
console.log(name);