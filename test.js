const Queue = require('./index')

var queue = new Queue([9,8,7,6,1,4,3,10]);

var L = 10;

while(L--){
	queue.push(Math.floor(Math.random() * 100));
}

console.log(queue.getMax())
console.log(queue)