//1.导入的{}中定义的变量
import { flag,sum } from "./aaa";

if(flag){
    console.log('小明是天才',哈哈哈)
    console.log(sum(20,30))
}

//2.直接导入export定义的变量
import {num1,height} from "./aaa"

console.log(num1)
console.log(height)

//3.导入export的function/class
import { mul,Person} from "./aaa";

console.log(mul(30,50))

const p = new Person()
p.run()

//4.导入export default中的内容
import addr from "./aaa"
addr('你好啊')

//5.统一全部导入
import * as aaa from './aaa'

console.log(aaa.flag)
console.log(aaa.height)