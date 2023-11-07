
let order = prompt(
    "Hello! Welcome to Froyo Shop.\nType vanilla,vanilla,vanilla,strawberry,coffee,coffee 😊\nPlease enter your chosen flavors: \n"
  );
  const flavorList = order.split(",");
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee
// same as python, splits the user's order input into an array's string values

// order's split array gets passed into below function
function flavorQuantity(flavorList) {
    // create empty object here
    const flavorNums = {};
    for (let i = 0; i < flavorList.length; i++) {
      const flavor = flavorList[i].trim();
      if (flavorNums[flavor]) {
        flavorNums[flavor]++; // if flavor found in existing user input array
      } else {
        flavorNums[flavor] = 1; // new flavor start new count
      }
    }
    return flavorNums; // return object
  }

// set variable to call function
const flavorCounts = flavorQuantity(flavorList);

// Final output message
// loop through each flavor iteration and output
for (const flavor in flavorCounts) {
    console.log(`You ordered ${flavorCounts[flavor]} ${flavor}`);
}

