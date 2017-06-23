// Remember what goes here?
const store4 = require('./store4-data.js')
// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^
// Return the cost of 'Dark Chocolate Crunchies' from store4
function accessesingData1() {
  return store4['Dark Chocolate Crunchies'].cost
}

// Return the total number of 'Berry Bites' sold by store4
function accessesingData2() {
  let total = 0
  return store4['Berry Bites']['sold on'].length
}

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candy names that cost more than $2.00
function loopingData1() {
  let candiesOver2 = [];
  let candyArr = Object.entries(store4)
  candyArr.forEach((candy) => {
    if (candy[1].cost > 2.00) {
      candiesOver2.push(candy[0])
    }
  })

  return candiesOver2
}

// Create a loop to return an object that has the candy name as the key and the cost as the value
function loopingData2() {
  let newObj = {}
  let candyArr = Object.entries(store4)
  candyArr.forEach((candy) => {
    newObj[candy[0]] = candy[1].cost
  })

  return newObj
}


// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? Each date represents 1 item sold. Round revenue to two decimal points.
// Return your answer as an array: `[total1, total2]`
function challenge1() {
  let totalArray = []
  for (var candy in store4) {
    if (candy === 'Peppermint Poppers' || candy === 'Caramel Twists') {
      let candyObj = store4[`${candy}`]
      totalArray.push((candyObj['sold on'].length * candyObj.cost).toFixed(2))
    }
  }
  return totalArray
}

// Calculate and return how much money store4 made on January 9th. Round to two decimal points.
function challenge2() {
  var num = 0;
  var count = 0;

  for (var candy in store4) {
    dateArr = store4[candy]['sold on']
    dateArr.forEach((date) => {
      if (dateArr[date] === '2015-01-09') {
        count++;
      }
    })
  }
  num += (store4[candy].cost * count);
  count = 0;
  return num.toFixed(2)
}

// Calculate and return how much store4 made from selling Dark Chocolate Crunchies across all the days. Round to two decimal points.
function challenge3() {
  let yes1 = (store4['Dark Chocolate Crunchies']['sold on'].length * store4['Dark Chocolate Crunchies'].cost).toFixed(2);
  return yes1
}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  challenge1,
  challenge2,
  challenge3,
}
