var user = null;
user = {name:'John'};
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;

//calculate how many pieces of fruit there are in the fruit object and the output should be 50.
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
    };
var sum=0;
for (var val in fruit){
    sum += fruit[val];
}
console.log(sum);