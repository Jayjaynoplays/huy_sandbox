 
// function kb(x){
//     var kbform = (280-(79*x))/405;
//     console.log("kb", kbform)
//     return Math.pow(kbform,2);
// }
var x =12.16;
function formA (x){
    var forma = (0.06/0.04251)+(1.086/(x*Math.pow(10,-3)));
    console.log("form A: ",forma);
    return forma;
}

function formB(x){
    var formb = Math.sqrt((0.25* Math.pow(formA(x),2))-(0.29516/(0.04251 * 12.16 * Math.pow(10,-3))));
    console.log("form B: ",formb);
    return formb;
}

// function main(){
//     var x = 1.8;
//     var res;
//     for(var i=0;i<=20;i++){
//         res= (-0.5*formA(x)) + formB(x);
//         console.log("VOI x =", x," THI t1 LA ",-1/res);
//         x += 0.01; 
//     }
// }
// main();
function main2(){
    var  res= (-0.5*formA(x)) - formB(x);
    console.log(-1/res);
}
main2();