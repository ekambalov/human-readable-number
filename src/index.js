module.exports = function toReadable(number) {
    if (number == 0) return 'zero';
    number = '' + number;
    n = number.length;
    let number1 = '';
    let number2 = '';
    let number3 = '';
    let readableNum = '';

    switch (+number[n - 1]) {
        case 0:
            number1 = '';
            break;
        case 1:
            number1 = ' one';
            break;
        case 2:
            number1 = ' two';
            break;
        case 3:
            number1 = ' three';
            break;
        case 4:
            number1 = ' four';
            break;
        case 5:
            number1 = ' five';
            break;
        case 6:
            number1 = ' six';
            break;
        case 7:
            number1 = ' seven';
            break;
        case 8:
            number1 = ' eight';
            break;
        case 9:
            number1 = ' nine';
            break;
    }
    if (n > 1) {
        if (number[n - 2] == '1') {
            number1 = '';
            switch (+number.slice(n - 2)) {

                case 10:
                    number2 = ' ten';
                    break;
                case 11:
                    number2 = ' eleven';
                    break;
                case 12:
                    number2 = ' twelve';
                    break;
                case 13:
                    number2 = ' thirteen';
                    break;
                case 14:
                    number2 = ' fourteen';
                    break;
                case 15:
                    number2 = ' fifteen';
                    break;
                case 16:
                    number2 = ' sixteen';
                    break;
                case 17:
                    number2 = ' seventeen';
                    break;
                case 18:
                    number2 = ' eighteen';
                    break;
                case 19:
                    number2 = ' nineteen';
                    break;
            }

        }
        switch (+number[n - 2]) {
            case 0:
                number2 = '';
                break;
            case 2:
                number2 = ' twenty';
                break;
            case 3:
                number2 = ' thirty';
                break;
            case 4:
                number2 = ' forty';
                break;
            case 5:
                number2 = ' fifty';
                break;
            case 6:
                number2 = ' sixty';
                break;
            case 7:
                number2 = ' seventy';
                break;
            case 8:
                number2 = ' eighty';
                break;
            case 9:
                number2 = ' ninety';
                break;

        }

    }
    if (n > 2) {
        switch (+number[0]) {
            case 1:
                number3 = 'one hundred';
                break;
            case 2:
                number3 = 'two hundred';
                break;
            case 3:
                number3 = 'three hundred';
                break;
            case 4:
                number3 = 'four hundred';
                break;
            case 5:
                number3 = 'five hundred';
                break;
            case 6:
                number3 = 'six hundred';
                break;
            case 7:
                number3 = 'seven hundred';
                break;
            case 8:
                number3 = 'eight hundred';
                break;

            case 9:
                number3 = 'nine hundred';
                break;
        }
    }
    readableNum = number3 + number2 + number1;
    if (readableNum[0] == ' ') readableNum = readableNum.slice(1);
    return readableNum;

}