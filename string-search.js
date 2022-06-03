const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    '1X59 Lenovo commercial yoga laptop',
    'Dell LG supernova laptop',
    'HTC lowv price Phone',
    'Dell Purple color phone with Laptop'
];
const searching = 'Dell';
// indexof 

const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);
for(const product of products){
    if(product.toLowerCase(). includes(searching.toLowerCase())){
        // output.push(product);
    }
}
console.log(output);
// starts with
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);