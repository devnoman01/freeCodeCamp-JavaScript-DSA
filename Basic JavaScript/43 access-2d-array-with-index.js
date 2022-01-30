//  access multidimensional array data with indexes

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
  
const data1 = arr[3];           //  data1 = [10, 11, 12], 13, 14
const data2 = arr[3][0];        //  data2 = [10, 11, 12]
const data3 = arr[3][0][1];     //  data3 = 13

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];
  
const myData = myArray[2][1];   //  myData = 8