var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// Return the value '4.63' from store1
function accessesingData1() {
  return store1['2015-01-08'][0][1]
}


// Return how many 'Mint Wafers' were sold on January 6th
function accessesingData2() {
  return store1['2015-01-06'][1][2]
}

// *********** LOOPING OVER DATA *********** \\


// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
function loopingData1() {
  let candyNames = []
  let sales = store1['2015-01-08']
  sales.forEach((arr) => {
    candyNames.push(arr[0])
  })
  return candyNames
}
// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
// I'm initializing outside the loop because the loop is a seperate function being used to do the math THEN adding to the count. So it is not a part of the looper itself, but it IS a part of the function loopingData2()
function loopingData2() {
  let count = 0
  let array = store1['2015-01-10']
  array.forEach((candy) => {
    count += candy[2]
  })
  return count
}

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
function loopingData3() {
  let array = Object.keys(store1)
  return array
}

// Use a loop to calculate the total number of candies sold at store1.
function loopingData4() {
  let count = 0
  let newStore1 = Object.values(store1)
  for (var i = 0; i < newStore1.length; i++) {
    newStore1[i].forEach((obj) => {
      count += obj[2]
    })
  }
  return count
}

// In the previous exercise, where did you have to initialize the counter variable? Why?
function loopingData5() {
  return 'Initializing "count" outside of the loops keeps it from resetting for each iteration'
}

// *********** CHALLENGE *********** \\

// Calculate the total revenue of the candies sold by store1 on January 10th.
// Be sure to return a number! Example `14.55`
function challenge1() {
  let count = 0
  let array = store1['2015-01-10']
  array.forEach((candy) => {
    count += Number(candy[1]) * candy[2]
  })
  return Math.round(count * 10)/10
}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  loopingData3,
  loopingData4,
  loopingData5,
  challenge1
}
