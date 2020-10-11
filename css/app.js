function calculate() {
    // Get the user's input from the form. Assume it is all valid.
    // Convert interest from a percentage to a decimal, and convert from
    // an annual rate to a monthly rate. Convert payment period in years
    // to the number of monthly payments.
    let principal = document.loandata.principal.value;
    let interest = document.loandata.interest.value / 100 / 12;
    let payments = document.loandata.years.value * 12;

    // Now compute the monthly payment figure, using esoteric math.
    let x = Math.pow(1 + interest, payments);
    let monthly = (principal*x*interest)/(x-1);

    // Check that the result is a finite number. If so, display the results.
    if (!isNaN(monthly) && 
        (monthly != Number.POSITIVE_INFINITY) &&
        (monthly != Number.NEGATIVE_INFINITY)) {

        document.loandata.payment.value = round(monthly);
        document.loandata.total.value = round(monthly * payments);
        document.loandata.totalinterest.value = 
            round((monthly * payments) - principal);
    }
    // Otherwise, the user's input was probably invalid, so don't
    // display anything.
    else {
        document.loandata.payment.value = "";
        document.loandata.total.value = "";
        document.loandata.totalinterest.value = "";
    }
}

// This simple method rounds a number to two decimal places.
function round(x) {
  return Math.round(x*100)/100;
}