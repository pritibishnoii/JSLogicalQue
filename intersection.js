let arr1=[1,2,3,4,5];
let arr2= [2,4,5,6,7]

let result = arr1.filter((elm)=>arr2.includes(elm))
console.log(result)




let res= arr1.reduce((accum,currElm)=>{
    if (arr2.includes(currElm)) {
        accum.push(currElm);
    }
    return accum
},[])
console.log(res)


let value = 12;





let set = new Set(arr1)
let filterRes= arr2.filter((elm)=>set.has(elm))
console.log(filterRes)





let duplicat= [1,2,2,3,4,6,5,6];
let set1= new Set(duplicat)
console.log([...set1])



let ans = duplicat.reduce((accum,ccurElm)=>{
        
},{})
console.log(ans)