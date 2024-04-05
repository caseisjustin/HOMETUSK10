/*__--==``1chi misol``==--__*/

// function Quick(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let piv = arr[0]
//     let l = []
//     let m = []
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i].price <= piv.price){
//             l.push(arr[i])
//         }
//         else{
//             m.push(arr[i])
//         }
//     }
//     return [...Quick(l), piv, ...Quick(m)]
// }
// drinks = [
//     {name: "lemonade", price: 50},
//     {name: "Juice", price: 110},
//     {name: "coffee", price: 20},
//     {name: "pineapplejuice", price: 35},
//     {name: "applejuice", price: 70},
//     {name: "tea", price: 60},
//     {name: "milk", price: 95},
// ]
// console.log(Quick(drinks))







/*__--==``2chi misol``==--__*/

// function objectToArray(obj){
//     let res = []
//     for (const key in obj) {
//         res.push([key, obj[key]])
//     }
//     return res
// }

// let ob = {
//     likes: 2,
//     dislikes: 3,
//     followers: 10
// }
// console.log(objectToArray(ob))









/*__--==``3chi misol``==--__*/

// function retNames(arrOfobj){
//     let names = []
//     for(const i in arrOfobj) {
//         names.push(arrOfobj[i].name)
//     }
//     return names
// }
// let users = [
//     { name: "John", email: "john@example.com" },
//     { name: "Jason", email: "jason@example.com" },
//     { name: "Jeremy", email: "jeremy@example.com" },
//     { name: "Jacob", email: "jacob@example.com" }
// ]
// console.log(retNames(users))








/*__--==``4chi misol``==--__*/

// function afterNYears(obj, n){
//     for (const key in obj) {
//         obj[key] += n
//     }
//     return obj
// }

// let ob = {
//     "Joel" : 32,
//     "Fred" : 44,
//     "Reginald" : 65,
//     "Susan" : 33,
//     "Julian" : 13
// }
// console.log(afterNYears(ob, 5))


