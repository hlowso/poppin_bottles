var empties, caps;

function redeemIteration() {
  if(Math.floor(empties / 2) === 0 && Math.floor(caps / 4) === 0) {
	return 0;
  }

  var new_empties = Math.floor(empties / 2) + Math.floor(caps / 4);     	

  empties = new_empties + empties % 2;
  caps %= 4;
  caps += new_empties;
  return new_empties + redeemIteration();
}

function returnOnInvestment(I) {
  empties = Math.floor(I / 2);
  caps = empties;
  return redeemIteration();
}


module.exports = returnOnInvestment;
