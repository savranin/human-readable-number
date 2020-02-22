function to20(number) {
    let res = '';
    switch (number) {
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
    }
    return res;
}

function to10(char) {
    let res = 'zero';
    switch (char) {
        case "1": return 'one';
        case "2": return 'two';
        case "3": return 'three';
        case "4": return 'four';
        case "5": return 'five';
        case "6": return 'six';
        case "7": return 'seven';
        case "8": return 'eight';
        case "9": return 'nine';
    }
    return res;
}

function to100(char) {
    let res = '';
    switch (char) {
        case '2': return 'twenty';
        case '3': return 'thirty';
        case '4': return 'forty';
        case '5': return 'fifty';
        case '6': return 'sixty';
        case '7': return 'seventy';
        case '8': return 'eighty';
        case '9': return 'ninety';
    }
    return res;
}

function from20to100(number) {
    let res = '';
    let str = number.toString();
    if (number % 10 == 0) {
        res = to100(str[0]);
    }
    else {
        res = to100(str[0]) + ' ' + to10(str[1]);
    }
    return res;
}

module.exports = function toReadable(number) {
    let str  = number.toString();
    let res  = '';
    
    if (number < 10) {
        res = to10(str);
    }
    else if (number > 9 && number < 20) {
        res = to20(number);
    }
    else if (number >= 20 && number < 100) {
        res = from20to100(number);
    }
    else if (number >= 100 && number < 1000) {
        if (str[1] == "0" && str[2] == "0") {
            res = to10(str[0]) + ' hundred';
        }	
        else if (str[1] == "0") {
            res = to10(str[0]) + ' hundred ' + to10(str[2]);
        }	
        else if (str[1] == "1") {
            res = to10(str[0]) + ' hundred ' + to20(Number((str[1]+str[2])));
        }
        else {
            res = to10(str[0]) + ' hundred ' + from20to100(Number((str[1]+str[2])));
        }
    }    
    
    return res.trim();
}
