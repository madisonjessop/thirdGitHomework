export const weightedLottery = weights => {
    let gamblingArray = [];
  
    Object.keys(weights).forEach(key  => {
        for (let i = 0; i < weights[key]; i++) {
            gamblingArray.push(key);
        }
    })
  
    return gamblingArray[Math.floor((Math.random() * gamblingArray.length))];
}
  
const weights = {
    diamonds: 6,
    spades:20,
    hearts: 4,
    clubs: 70
}

weightedLottery(weights);