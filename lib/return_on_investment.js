var empties, caps, bottle_earnings, cap_earnings;

function redeemIteration() {
  if(Math.floor(empties / 2) === 0 && Math.floor(caps / 4) === 0) {
	return 0;
  }

  bottle_earnings += Math.floor(empties / 2);
  cap_earnings += Math.floor(caps / 4);
  var new_empties = Math.floor(empties / 2) + Math.floor(caps / 4);     	

  empties = new_empties + empties % 2;
  caps %= 4;
  caps += new_empties;
  return new_empties + redeemIteration();
}

function returnOnInvestment(I) {
  empties = Math.floor(I / 2);
  caps = empties;
  bottle_earnings = 0;
  cap_earnings = 0;
  var total = empties + redeemIteration();

  console.log("TOTAL BOTTLES: " + total);
  console.log("REMAINING BOTTLES: " + empties);
  console.log("REMAINING CAPS: " + caps);
  console.log("TOTAL EARNED:");
  console.log("\tBOTTLES: " + bottle_earnings);
  console.log("\tCAPS: " + cap_earnings);  

  return total;
}


module.exports = returnOnInvestment;
