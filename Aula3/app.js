function started(){
    console.log("Started Download");
    
}

function update() {
    for(i=0;i<=100;i++) {
        console.log(i + "% of Download");
    }
}

function completed(){
    console.log("Download Completed");
}

function performDownload(started,update,completed) {
    started();
    update();
    completed();
}

performDownload(started,update,completed);

var myArrayModule = require("./ArrayUtils.js");
console.log(myArrayModule.isEmpty([2,5,8,10,14,12,1,15]));
console.log(myArrayModule.isEmpty([]));

console.log(myArrayModule.max([2,5,8,18,14,12,1,15]));

console.log(myArrayModule.min([2,5,8,18,14,12,1,15]));

console.log(myArrayModule.average([2,5,8,18,14,12,1,15]));

console.log(myArrayModule.indexOf([2,5,8,18,14,12,1,15],2));

console.log(myArrayModule.subArray([2,5,8,18,14,12,1,15],2,7));

console.log(myArrayModule.isSameLength([2,5,8,18,14,12,1,15],[2,5,8,14,12,1,15]));

console.log(myArrayModule.reverse([2,5,8,18,14,12,1,15]));

console.log(myArrayModule.swap([2,5,8,18,14,12,1,15],3,4));

console.log(myArrayModule.contains([2,5,8,18,14,12,1,15],14));

console.log(myArrayModule.concatenate([2,5,8,18,14,12,1,15],[2,6,8,10,20]));