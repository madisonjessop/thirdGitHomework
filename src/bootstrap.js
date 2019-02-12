import { weightedLottery } from 'weightedLottery'

const weights = {
    diamonds: 6,
    spades:20,
    hearts: 4,
    clubs: 70
}

console.log(weightedLottery(weights));