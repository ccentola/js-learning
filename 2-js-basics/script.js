/* Coding Challenge 5 */

var bill = {
    bill: [124,48,268,180,42],
    
    calcTip: function() {
        
        this.tip = [];
        this.finalBill = [];

        for (var i = 0; i < this.bill.length; i++) {
            
            // determine tip percentage
            var percentage;
            var bill = this.bill[i];

            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill<= 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }

            // add results to corresponding arrays
            this.tip[i] = bill * percentage;
            this.finalBill[i] = bill + (bill * percentage);
        }
    }
};

bill.calcTip();
console.log(bill);

// calculate the average tip
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

bill.average = calcAverage(bill.tip);
console.log(bill);