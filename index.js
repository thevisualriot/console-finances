// DATA

var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];


/*  PSEUDO CODE
1. Variable totalMonths to store number of months
    - array.length -1
2. Variable totalNet to store total amount of profit/losses over the entire period
    - access index 1 of each sub-array
    - sum all 
3. Variable averageChange to store average change over the entire period
    - totalNet / totalMonths
4. var greatestIncrease
    - scan all values from the latest
    - for each array item subtract item [i - 1]
    - store the values in the array increases
    - find the biggest value
5. var greatestDecrease
    - scan all values from the latest
    - for each array item subtract item [i - 1]
    - store the values in the array increases
    - find the smallest value

*/

console.log("Financial Analysis");
console.log("----------------");

/* TOTAL AMOUNT OF MONTHS */
var totalMonths = finances.length;      // store total months

console.log("Total Months: " + totalMonths);               // print total month


/* TOTAL PROFIT / LOSSES */
var totalNet = 0;                       // store total amount of profit/losses

for (i=0; i<totalMonths; i++) {   
    totalNet += finances[i][1];         // sum values from the array
}

console.log("Total: $" + totalNet);                  // print total amount of profit/losses


/* STORE INFO ABOUT CHANGES FROM MONTH TO MONTH */
var currentChange;                      // variable for temporary storing difference of single months
var changes = [];                       // empty array to store changes of all months

for (i=totalMonths-1; i>=1; i--) {      // scan array from the last index to the first
    currentChange = finances[i][1] - finances[i-1][1];  // difference between every two months
    changes.push(currentChange);       // add monthly change to array 'changes'
    finances[i].push(currentChange);
    // console.log("CHECK: "+ finances[i]);
}

/* console.log(changes);              --- VERIFICATION ONLY */


/* AVERAGE */
var averageChange;                  // var to store average change
var sumChanges = 0;                 // initial value of sum of changes

for(i=changes.length-1; i >= 0; i--) {      // scan from the end of the array
    sumChanges += changes[i];               // sum all changes
}

/* console.log ("Sum change: " + sumChanges);   --- VERIFICATION ONLY */

averageChange = sumChanges / (totalMonths - 1);     // count average of changes

console.log("Average Change: " + averageChange);


/* MERGE CHANGES WITH FINANCES */


// Greatest Increase

var greatestIncrease = Math.max(...changes);
var greatestIncreaseMonth;

for(var i = 0; i < finances.length; i++){
    if (finances[i][2] === greatestIncrease){
        greatestIncreaseMonth = finances[i][0];
    }
}

console.log("Greatest Increase in Profits/Losses: " + greatestIncreaseMonth + " | " + greatestIncrease);


// Greatest Decrease

var greatestDecrease = Math.min(...changes);
var greatestDecreaseMonth;

for(var i = 0; i < finances.length; i++){
    if (finances[i][2] === greatestDecrease){
        greatestDecreaseMonth = finances[i][0];
    }
}

console.log("Greatest Decrease in Profits/Losses: " + greatestDecreaseMonth + " | " + greatestDecrease);
