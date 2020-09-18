module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    // throw 'Not implemented';
    // remove line with error and write your code here
    const TURNS = 2**disksNumber - 1;
    const SECONDS = Math.floor(TURNS / turnsSpeed * 3600);
    return {turns: TURNS, seconds: SECONDS}
}