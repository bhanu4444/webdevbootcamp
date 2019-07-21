function average(scores){
    var sum=0;
    
    for(i=0; i<scores.length; i++){
        sum = sum + scores[i];
    }
    var avg = sum / scores.length;
    return Math.round(avg);
}

var scores = [90, 98, 89,100, 100, 86, 94];
console.log(average(scores));