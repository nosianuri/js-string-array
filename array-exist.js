function megaFriend(friends) {
    if(Array.isArray(friends) == false){
        return 'please provide an array'
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['Sathi', 'Afrin', 'Mantasha', 'Anika'];
const myBigBuddy = megaFriend(54345);
// console.log(myBigBuddy);
if (friends.indexOf('Afzal') != -1) {
    console.log('Afzal exist');
}
else {
    console.log("Afzal doesn't exist");
}
// includes
if (friends.includes('Afrin')) {
    console.log('Afrin exists using includes');
}

// concat
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);