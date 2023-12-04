const value_of_cart = document.getElementById("cart-value")
const cart_x = document.getElementById("cart")
const cart_items = []
let total_quantity = 0
let button = document.getElementsByClassName("button")
const items = [{
    name:"This was our pact",
    quantity:0,
    prize:7.49
},{
    name:"The famous five",
    quantity:0,
    prize:4.59
},{
    name:"Matlida",
    quantity:0,
    prize:6.80
},{
    name:"Harry Potter",
    quantity:0,
    prize:10
},
{
    name:"For Young Readers",
    quantity:0,
    prize:7.29
},{
    name:"Wimpy Kid - DIY",
    quantity:0,
    prize:4.99
},{
    name:"dart board",
    quantity:0,
    prize:17.49
},{
    name:"connect 4",
    quantity:0,
    prize:19.99
},{
    name:"Jenga",
    quantity:0,
    prize:20.99
},{
    name:"Monopoly",
    quantity:0,
    prize:19.49
},{
    name:"bookmarks",
    quantity:0,
    prize:12.49
},{
    name:"Birthday card",
    quantity:0,
    prize:19.99
},{
    name:"Stuffed toys",
    quantity:0,
    prize:15.99
},{
    name:"Dream catcher drawing",
    quantity:0,
    prize:18.49
}]
for(let i = 0;i <button.length;i++) {
   button[i].onclick= () => {
    total_quantity++
    value_of_cart.innerHTML = total_quantity
    if (items[i].quantity==0){
        cart_items.push(items[i])
    }
    items[i].quantity++
   } 
}
var t = 0
cart_x.onclick=()=>{
    cart_items.map((v,i)=>{
        console.log(i+1+".","Name: "+v.name,"quantity: "+v.quantity)
        t+=v.quantity*v.prize
    })
    console.log("total bill: $"+Math.floor(t)+ " after offer applied" )
}