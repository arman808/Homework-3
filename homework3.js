/*1. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
starting from a to b spaced by step.*/






//2. Given an array of numbers. Find the maximum element in array.
 function maxElement(array){
    let max = array[0];
    for(let i =0 ; i< array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
       }
         return max 
    }
    maxElement([77,95,-144,98,4,25])


//3. Given an array. Reverse it in place
function arrRevers(array){
    let result = [];
    for(let i = 0;i<array.length;i++){
        result.unshift(array[i]) 
        
    }
        
      return result 
}
arrRevers([1,2,3,4,5,6,7])

//3.1 Daxalutyun
let arr = [1,2,3,4];
 let rev= arr.reverse();
console.log(arr)



//4 Given an array. Create the array which elements are products between two neighbours.

function product(array){
    for(let i =0; i< array.length;i++){
        array[i] = array[i] *array[i + 1]
    }

       return array
} function product(array){
    array=[1,2,3,4,5,6,7]
    for(let i =0; i< array.length;i++){
        array[i] = array[i] *array[i +1]
        
    } 
        array.pop();
       return array
} 
product()

/* 5 Write a function that receives an array and an element as arguments and returns the (in
    place) array without that element if it’s included or vice versa..*/

  //Kisat  (ete arrayum ka n element apa hanum e, avelacnel chkaroxacanq)

    function returnInArray(array,n){
        array=[1,2,3,4,5,6];
         n= 2;
        let res =[];
        for(let i = 0;i < array.length;i++){
            if(array[i] !==n ){
              res.push(array[i] )
                }
        } return res 
            
           
    }
     returnInArray()