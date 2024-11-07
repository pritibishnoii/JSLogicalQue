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
