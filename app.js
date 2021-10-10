var arr =[1,2,3,4,5,6,7]
var newa=arr.filter((ele, index)=>{
    if(ele%2==0) return true
})
// var newa =[]
// for(var i=0;i<arr.length;i++){
//     if(arr[i]%2==0) newa.push(arr[i])
// }
console.log(newa)

