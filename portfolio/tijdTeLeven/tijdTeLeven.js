function lifeInWeeks(age){
    // Life days left untill 90 years
        
    var daysLeft = (90-age) * 365;
    var weeksLeft = (90-age) * 52
    var monthsLeft = (90-age) * 12;
    var yearsLeft = 90-age;  
        
    console.log (daysLeft);
    console.log (weeksLeft);
    console.log (monthsLeft);
    console.log (yearsLeft);
    console.log ("You have " + daysLeft + " days " + weeksLeft + " weeks, and " + monthsLeft + " months left to live :(");
    }
    