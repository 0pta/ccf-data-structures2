// Hint: Don't forget to require in your data! Refer to store1 or store2 exercise.js files on how to do this.
const store3 = require('./store3-data.js')
//()()()()() ACCESSING DATA ()()()()()\\

// Return Berry Bites data for store3 on January 7.
function accessesingData1() {
  store3.forEach((obj) => {
    if (obj.date === '2015-01-07') {
      return obj['inventory sold']['Berry Bites']
    }
  })
}

// Return how many Mint Wafers were sold on January 9th
function accessesingData2() {
  store3.forEach((obj) => {
    if (obj.date === '2015-01-09') {
      return obj['inventory sold']['Mint Wafers']
    }
  })
}

// Return total number of dates included in the dataset.
function accessesingData3() {
  let dateCount = 0;
  store3.forEach((obj) => {
    if (obj.date) {
      dateCount++
    }
  })
  return dateCount
}

//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3. Use this loop to return an array of dates contained in the sale data.
function loopingData1() {
  let dateArr = [];
  store3.forEach((obj) => { dateArr.push(obj.date) })
  return dateArr
}
// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price. Return the result.
// Example:
// {
//   'Dark Chocolate Crunchies': 1.30,
//   'Mint Wafers': 1.40,
//   ...
// }
function loopingData2() {
  let newObj = {};

  store3.forEach((obj) => {
    if (obj.date === '2015-01-10') {
      let inventory = obj['inventory sold']
      let candyNames = Object.keys(inventory)
      candyNames.forEach((candy) => {
        let candySalesData = inventory[candy]
        let price = candySalesData.cost
        newObj[candy] = price;
      })
    }
  })

  return newObj
}

// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold over all dates. Return the result.
function loopingData3() {
  let pbCount = 0
  store3.forEach((obj) => {
    pbCount += obj['inventory sold']['Peanut Butter Buttered Peanuts'].quantity
  })
  return pbCount
}

//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th and return the result fixed to two decimal points
function challenge1() {
  let money = 0
  store3.forEach((obj) => {
    if (obj.date === '2015-01-09') {
      let inventory = Object.keys(obj['inventory sold'])
      inventory.forEach((candy) => {
        let totalCost = obj['inventory sold'][`${candy}`].cost
        let totalQuantity = obj['inventory sold'][`${candy}`].quantity
        money += (totalCost * totalQuantity)
      })

    }
  })
  return money.toFixed(2)
}


module.exports = {
  accessesingData1,
  accessesingData2,
  accessesingData3,
  loopingData1,
  loopingData2,
  loopingData3,
  challenge1
}
