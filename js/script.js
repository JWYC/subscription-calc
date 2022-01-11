// Your JS code here

var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = Number("1");

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  //console.log(`first log out ${subType}`);
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  //console.log(`second log out ${subDuration}`);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = monthlyCost * subDuration;
  result.innerText = `you have chosen a ${subType} for ${subDuration} at a cost of $${total}.`;
};
