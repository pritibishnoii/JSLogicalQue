// *
// **
// ***
// ****
// *****      i=0 i<noOFRow.length;i++     j=i  j<=i+1 j++  *     -->>  i++ 1  -->>j<=1 ** --> i++ 2 -->  j<=2 *** 


for(let i=0;i<5;i++){
    let row ="";
  for(let j=0;j<i+1;j++){
    row+="*";
    
  }
//   console.log(row);
}






// *****
// ****
// ***
// **
// *
for(let i=5;i>0;i--){
    let row="";
    for(let j=0;j<i;j++){
        row+="*";
    }
    console.log(row)
}

for(let i=0;i<5;i++){
  let row="";
  for(let j=5;j>i;j--){
      row+="*";
  }
  console.log(row)
}



// 1
// 12
// 123
// 1234
// 12345

for(let i=0;i<=5;i++){
  let row ="";
  for(let j=1;j<=i;j++){
    row+=j;

  }
  console.log(row)
}




// 1
// 22
// 333
// 4444
// 55555

for(let i=1;i<=5;i++){
  let row ="";
  for(let j=1;j<i+1;j++){
   row+=i

  }
  console.log(row)
 
}


// 12345
// 1234
// 123
// 12
// 1
console.log("**************")
for(let i=5;i>0;i--){
  let row="";
  for(let j=1;j<=i;j++){
    row+=j;
  }
  console.log(row)
}




  //      *
  //     ***
  //    *****
  //   *******
  //  **********                        //     N -> 6 i =0 -1 -5    2*0+1    // i=1 6-1-1= 4    2*1+1 3 ***  -> i=2 2*2+1   5* 
  
  
 
  let N = 6 ;                 // 6  -0  6  
  for(let i=0;i<N;i++){
    let row ="";
    for(let j=0;j<N-i-1;j++){
      row+=" ";
    }
    for(let j=0;j<2*i+1;j++){
      row+="*";
    }
    console.log(row)
  }




  
  //  **********    
  //   *******
  //    *****
  //     ***
 //       *    

 console.log("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️")
 for(let i=0;i<N;i++){ //  5
  let row ="";

 for(let j=0;j<i;j++){
  row+=" ";
 } 
 // 11 9 7   2*n   6*2 12- (2*i+1)    11   
 
 for(let k=0;k<2*N -(2*i +1);k++){
  row+="*"
 }
  console.log(row)
 }

 console.log("💟💟💟💟💟💟💟💟")





  //      *
  //     ***
  //    *****
  //   *******
  //  **********    
  //  **********    
  //   *******
  //    *****
  //     ***
 //       *  



 for(let i=0;i<N;i++){
  let row ="";
     // for printing the space 
  for(let j=0;j<N-i-1;j++){
    row+=" ";
  }
  for(let j=0;j<2*i+1;j++){
    row+="*";
  }
     // for printing the space 
  for(let j=0;j<N-i-1;j++){
    row+=" ";
  }
  console.log(row)
} 



  for(i=0;i<N;i++){
    let row="";
       // for printing the space 
    for(j=0;j<i;j++){
      row+=" ";
    }
    for(let k=0;k<N*2-(2*i+1);k++){   
      row+="*"
    }
    // for printing the space 
    for(j=0;j<i;j++){
      row+=" ";
    }
    console.log(row)
  }
 
 






  // *
  // **
  // ***
  // ****
  // *****
  // ****
  // ***
  // **
  // *


  for(let i=0;i<N;i++){
    let row ="";
    for(let j=0;j<i;j++){
      row+="*"
    }
    console.log(row)
  }
  for(let i=N-1;i>0;i--){
    let row="";
    for(let j=0;j<i-1;j++){
      row+="*"
    }
    console.log(row)
  }



// 12-1 n*2-1 12-1 -11 times outer loop will run    
        // Outer loop for number of rows.
        for(let i=1;i<=2*N-1;i++){
          
          // stars would be equal to the row no. uptill first half 
          let stars = i;
          let row=""
          // for the second half of the rotated triangle.
          if(i>N) stars = 2*N-i;
          
          // for printing the stars in each row.
          for(let j=1;j<=stars;j++){
            row+= "*";
          }
          console.log(row)
        }





        // 1
        // 01
        // 101
        // 0101
        // 10101



// i=0    
// Row 1 (i = 0): Adds i+j%2==0?1:0 →  0+0%2==0->true  Prints "1".
// Row 2 (i = 1): Adds i+j%2==0?1:0 ->1+0%2==0-false  → Prints "0".
// Row 2 (i = 1): Adds i+j%2==0?1:0 ->1+1%2==0->true  → Prints "01".
// Row 3 (i = 2): Adds i+j%2==0?1:0 ->2+0%2==0->true  →→ Prints "1".
// Row 3 (i = 2): Adds i+j%2==0?1:0 ->2+1%2==0->false  →→ Prints "10".
// Row 3 (i = 2): Adds i+j%2==0?1:0 ->2+1%==0->false  →→ Prints "10".
// Row 4 (i = 3): Adds 0101 → Prints "0101".
// Row 5 (i = 4): Adds 10101 → Prints "10101".
      
// j=0
for(let i=0;i<N;i++){
  let row="";
  for(let j=0;j<i+1;j++){
    row+=(i+j)%2===0? "1":"0"      
  }
  console.log(row)
}
// console.log(0%2)
console.log(1%2)



// 1          1
// 12        21
// 123      321
// 1234    4321
// 12345  54321
// 123456654321



let spaces = 2 * (N - 1)
for (let i = 1; i <= N; i++) {
  let row = ""; 
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  for (let j = 1; j <= spaces; j++) {
    row += " ";
  }
  for (let j = i; j >= 1; j--) {
    row += j;
  }
  console.log(row); 
  spaces -= 2;
}




// 1
// 23
// 456
// 78910
// 1112131415
let num=1
for(let i=1;i<N;i++){
  let row="";

  for(let j=1;j<=i;j++){
   row+=num;        // 1        2 3     
   num=num+1            //1+1 -2     2+1 -3 
  }
  console.log(row)
}



// A
// AB 
// ABC 
// ABCD

for(let i=1;i<=N;i++){
  let row="";
  for(let j=1;j<=i;j++){
    row+=String.fromCharCode(64+j)
  }
 
  console.log(row)
}


// ABCDEF
// ABCDE
// ABCD
// ABC 
// AB 
// A 


for(let i=N;i>=0;i--){
  let row="";
  for(let j=1;j<=i;j++){
    row+=String.fromCharCode(64+j)
  }
 
  console.log(row)

}

// A 
// BB 
// CCC  
// DDDD 
// EEEEE
 // Number of rows
let charCode = 'A'.charCodeAt(0); // Starting ASCII code for 'A'
console.log(charCode)
for (let i = 1; i <= N; i++) {
  let row = ""; 
  for (let j = 1; j <= i; j++) {
    row += String.fromCharCode(charCode); 
  }
  console.log(row); 

  charCode += 1; 
}
