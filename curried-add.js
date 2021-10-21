function curriedAdd(num) {
    total = 0;
    if (num === undefined) {
        return total;
    }
    total += num;
    
    function _curriedAdd(num2) {
        if (num2 === undefined) {
            return total;
        }
        total += num2;
        return _curriedAdd;
    }
    return _curriedAdd; 
}

module.exports = { curriedAdd };


