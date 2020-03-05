var log = {
    isEmpty: function (array) {
        if (array.length-1 >= 1) {
            return true;
        } else {
            return false;
        }
    },
    max: function (array) {
        if (array.length-1 >= 1) {
            max = 0;
            for (i = 0; i <= array.length; i++) {
                if (array[i] > max) {
                    max = array[i];
                }
            }
            return "Máximo: " + max;
        } else {
            return "Não existem máximos";
        }
    },
    min: function (array) {
        if (array.length >= 1) {
            min = array[0];
            for (i = 0; i <= array.length; i++) {
                if (array[i] < min) {
                    min = array[i];
                }
            }
            return "Mínimo: " + min;
        } else {
            return "Não existem mínimos";
        }
    },
    average: function (array) {
        if (array.length >= 1) {
            media = 0;
            total = 0;
            for (i = 0; i < array.length; i++) {
                total += array[i];
            }
            media = total / array.length
            return "Média: " + media;
        } else {
            return "O array está vazio";
        }
    },
    indexOf: function (array, value) {
        return "Index " + value + ": " + array[value];
    },
    subArray: function (array, startindex, endindex) {
        newArray=[];
        for(i=startindex;i<=endindex;i++) {
            newArray.push(array[i]);
        }
        return newArray;
    },
    isSameLength: function (a1, a2) {
        if (a1.length == a2.length) {
            return true;
        } else {
            return false;
        }
    },
    reverse: function (array) {
        newArray = [];
        for (i = array.length-1; i >= 0; i--) {
            newArray.push(array[i]);
        }
        return newArray;
    },
    swap: function (array, index1, index2) {
        [array[index1], array[index2]] = [array[index2], array[index1]];
        return array;
    },
    contains: function (array, value) {
        len = array.length;
        count = 0;
        for (i = 0; i <= len; i++) {
            if (array[i] == value) {
                count = count + 1;
            }
        }
        if(count>=1) {
            return true;
        } else {
            return false;
        }
    },
    concatenate: function (a1, a2) {
        newArray=a1;
        for(i=0;i<=a2.length-1;i++) {
            newArray.push(a2[i]);
        }
        return newArray;
    }
}

module.exports = log;