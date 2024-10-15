// todo 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno


const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
for (p in student) {
    console.log(p)

}



// todo  3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
console.log(student.rollno)
delete student.rollno
console.log(student.rollno)





//todo   3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
var students = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};






function getLenght(obj) {


    console.log(Object.keys(obj))
    return Object.keys(obj).length


    // count = 0;
    // for (s in obj) {
    //     if (obj.hasOwnProperty(s)) {
    //         count++
    //     }

    // }
    // return count
}
console.log(getLenght(students))








// todo  4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];



for(let i=0;i<library.length;i++){
    let book= "'"+ library[i].title + "'" +"by" +" " + library[i].author +"."
    if(library[i].readingStatus){
      console.log(`Already read ${book} `)
    }
    else{
        console.log(`not read ${book}`)
    }
    
}



//todo  5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.



// 6. Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]


function bubble_sort(arr){
for(let i=0;i<arr.length;i++){
    for(let k=0;k<arr.length;k++){
        if(arr[k]>arr[k+1]){
            let temp= arr[k];
            arr[k]=arr[k+1];
            arr[k+1]=temp
        }
    }
}
return arr
}
console.log(bubble_sort( [6,4,0, 3,-2,1]))




//todo  7. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

//   for i =0  first time ->0->     d  
            // for j = i+1 -1 -> o
            //subset.push(str.slice(i,j)) --->  subset.push("dog".slice(0,1)) -> [d]
            // j++
            // j= 2 --> 
            //subset.push((str.slice))-->  subset.push("dog".slice(i,j)) --> subset.push("dog".slice(1,2)) -> ["d","do"]
            // j++  j=3;
            //subset.push(str.slice(i,j))-->subset.push("dog".slice(i,j))-->subset.push("dog".slice(1,3))--> ["d","do","dog"];
 //for  i++   i=1 
            // for j =i+1 1+1     j-2
            //subset.push(str.slice(i,j))--> subset.push("dog".slice(1,2))-->["d","do","dog","o"];
            // j++ j=3
            //subset.push(str.slice(i,j))--> subset.push("dog".slice(1,3))--> ["d","do","dog","o","og"];
//for i++ i =2
            //for j=i+1- -> j=3;
            // subset.push(str.slice(i,j))--> subset.push("dog".slice(2,3))--->["d","do","dog","o","og"];


 
 
const str= "dog"
// console.log(str.length)

let subset=[]             
for(let i=0;i<str.length;i++){
    for(let j=i+1;j<=str.length;j++){
        subset.push(str.slice(i,j))
    }
}
console.log(subset)




//todo  8. Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"