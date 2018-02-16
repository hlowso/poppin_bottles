var assert = require("chai").assert;
var returnOnInvestment = require("../lib/return_on_investment.js");

describe("returnOnInvestment", function() {
  it("should return the total number of bottles that can be redeemed with the initial investment", function() {
    var investments = [20, 40];//, 10, 5, 7];
    var answers = [35, 75];
    for(var i = 0; i < investments.length; i++){
      var x = returnOnInvestment(investments[i]);
      assert.isTrue(x === answers[i]);
    }
  });
});

// 10 bottles with $20
//=10 empties, 10 caps
// + 7
// 7 empties, 9 caps
// + 5
// 6 empties, 6 caps
// + 4
// 4 empties, 6 caps
// + 3
// 3 empties, 5 caps
// + 2
// 3 empties, 3 caps
// + 1
// 2 empties, 4 caps
// + 2
// 2 empties, 2 caps
// + 1
// 1 empty, 3 caps

// 2 e, 6 c
// + 2
// 2 e, 4 c
// + 2
// 2 e, 2 c
// + 1
// 1 e, 3 c
