
// =================================================
//   কোন Object থেকে False মান গুলো মুচে পেলার পদ্ধতি।।
// =================================================

let obj = {
    a: "Pranta",
    b: "",
    c: "suborna",
    d: 9,
    e: 0,
    f: undefined,
    g: true,
    h: false,
    i: NaN,
    j:null,
}


let trueObj = function(obj){
    for(let i in obj){
        if(!obj[i]){
            delete obj[i];
        }
    }
    return obj;
};
console.log(trueObj(obj));