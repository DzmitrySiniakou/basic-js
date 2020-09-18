module.exports = function repeater(str, options) {
    // throw 'Not implemented';
    // remove line with error and write your code here
    let repStr = str;
    let outputString = '';

    for (let i = 0; i < options.additionRepeatTimes; i++){
        repStr = repStr + options.addition + ' ';
    }

    repStr = repStr.trim().split(' ').join(options.additionSeparator);

    for (let i = 0; i < options.repeatTimes; i++){
        outputString = outputString + repStr + ' ';
    }

    return outputString.trim().split(' ').join(options.separator);
};
