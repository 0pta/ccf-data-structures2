var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable, then return that variable
function accessesingData1() {
  let saleDates = store2['sale dates']['Banana Bunches']
  return saleDates
}

// Using a built-in array property return the total sale dates there are for store2's 'Banana Bunches'
function accessesingData2() {
  return store2['sale dates']['Banana Bunches'].length
}

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Return your answer as a boolean and write a comment on why or why not.
function updatingData1() {
  let mintPrice = store2['inventory prices']['Mint Wafers']
  mintPrice = 1.10
  return false
  // this only changes the new variable we created as mintPrice and not the original store2-data
}

// Set a variable equal to the 'Caramel Twists' sale dates in store2. Use pop to remove one of the sale dates for store2's 'Caramel Twists'. Does your variables value match up with what is in store2? Return your answer as a boolean and write a comment on why or why not.
function updatingData2() {
  let saleDates = store2['sale dates']['Caramel Twists']
  saleDates.pop()
  return saleDates === store2['sale dates']['Caramel Twists']
  // .pop() accesses changes the array. It alters the array on which the method was called.
}
/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for 'Caramel Twists'. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
// Example:
// {
//   '2015-01-06': 4,
//   '2015-01-07': 3,
// }
function loopingData1() {
  let candyCount = {}
  let twistSales = store2['sale dates']['Caramel Twists']
  twistSales.forEach((date) => {
    if (candyCount[date] != undefined) {
      candyCount[date]++
    } else {
      candyCount[date] = 1
    }
  })
  return candyCount
}

// Iterate over store2's sale dates data to find which day had the most total number of sales. Return the date with the most sales.
function loopingData2() {

  let allSalesDates = store2['sale dates']
  let invenStore2 = {};
  for (let candySales in allSalesDates) {
    store2['sale dates'][candySales].forEach((saleData) => {
      if (invenStore2[saleData] === undefined) {
        invenStore2[saleData] = 1
      } else {
        invenStore2[saleData] += 1
      }
    })
  }

  var topDate = '';
    var dCount = 0;
    for (var dates in invenStore2){
      if (invenStore2[dates] > dCount){
        topDate = dates;
        dCount = invenStore2[dates];
      }
    }
    return topDate
  }
/////////// CHALLENGE ///////////

// Create and return an object containing the amounts that store2 made by selling each type of candy. Round each number to 2 decimal points.
// Example:
// {
//   'Caramel Twists': 14.15,
//   'Peppermint Poppers': 20.51
// }
function challenge1() {
  let candyTotals = {}
  let saleDates = store2['sale dates']
  let candy = Object.keys(saleDates)
  let prices = store2['inventory prices']
  for (i of candy) {
    candyTotals[i] = (prices[i] * saleDates[i].length) * 100 / 100
  }
  return candyTotals
}



module.exports = {
  accessesingData1,
  accessesingData2,
  updatingData1,
  updatingData2,
  loopingData1,
  loopingData2,
  challenge1
}
