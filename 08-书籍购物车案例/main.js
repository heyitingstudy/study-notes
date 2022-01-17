const app = new Vue({
    el: '#app',
    data: {
        books:[
            {
                id:1,
                name:'《算法导论》',
                date:'2006-9',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'《UNIX编程艺术》',
                date:'2006-2',
                price:59.00,
                count:1
            },
            {
                id:3,
                name:'《编程珠玑》',
                date:'2008-10',
                price:39.00,
                count:1
            },
            {
                id:4,
                name:'《代码大全》',
                date:'2006-3',
                price:128.00,
                count:1
            }
        ]
    },
    methods: {
        increment(index){
            this.books[index].count++
        },
        decrement(index){
            this.books[index].count--
        },
        removeHander(index){
            this.books.splice(index,1)

        }
    },
    filters:{
        showPrice(price){
            return '￥' + price.toFixed(2)
        }
    },
    computed:{
        //方法1：for...in ：遍历索引值
        // totalPrice(){
        //     let totalPrice = 0
        //     for(let i in this.books){
        //         totalPrice += this.books[i].price*this.books[i].count
        //     }
        //     return totalPrice
        // }

        // 方法2：for...of：直接遍历值
        // totalPrice(){
        //     let totalPrice = 0
        //     for(let item of this.books){
        //         totalPrice += item.price*item.count
        //     }
        //     return totalPrice
        // }

        //方法3：reduce函数
        totalPrice(){ 
            return this.books.reduce(function(preValue,book){
            return preValue+book.price*book.count
        },0)
    }
       

    }
})