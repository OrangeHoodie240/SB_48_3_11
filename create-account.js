

function createAccount(pin, amount=0) {
    return {
        checkBalance(givenPin) {
            if (givenPin === pin) {
                return '$' + amount;
            }
            else {
                return 'Invalid PIN.';
            }
        },
        deposit(givenPin, depositAmount) {
            if (givenPin === pin) {
                amount += depositAmount;
                return 'Succesfully deposited $' + depositAmount + '. Current balance: $' + amount + '.';
            }
            else {
                return 'Invalid PIN.';
            }
        },
        withdraw(givenPin, withdrawAmount) {
            if (givenPin === pin) {
                if (withdrawAmount <= amount) {
                    amount -= withdrawAmount;
                    return 'Succesfully withdrew $' + withdrawAmount + '. Current balance: $' + amount + '.';
                }
                else {
                    return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
                }
            }
            else {
                return 'Invalid PIN.';
            }
        },
        changePin(givenPin, newPin) {
            if (givenPin === pin) {
                pin = newPin;
                return 'PIN successfully changed!'
            }
            else {
                return 'Invalid PIN.';
            }
        }

    }
}

module.exports = { createAccount };


