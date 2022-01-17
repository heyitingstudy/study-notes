// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程(第一公民:对象)/函数式编程(第一公民：函数)
// filter/map/reduce 
// filter中的回调函数有一个要求：必须返回一个boolean值
// true:当返回true时，函数内部会自动将这次回调的n加入到新的数组中
// false：当返回false时，函数内部会过滤掉这次的n
const nums=[10,20,111,222,444,40,50]

let total=nums.filter(function(n){
    return n<100
}).map(function(n){
    return n*2
}).reduce(function(preValue,n){
    return preValue + n
},0)
console.log(total)

