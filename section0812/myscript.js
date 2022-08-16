/* myscript.js */

// function hap(a, b) {    // 두 수 사이의 합을 반환하시오
//     let result=0;
//     for(a=1; a<=b; a=a+1) {
//         result=result+a;
//     } // for end
//     return result;
// } // hap() end

function hap(a, b) {
    if(a>b) {
        let tmp=a; a=b; b=tmp;
    } // if end

    let sum=0;
    for(let n=a; n<=b; n++) {
        sum += n;
    } // for end

    return sum;
} // hap() end


// function diff(a, b) {   // 두 수 사이의 차이를 반환하시오 (절대값)
//     if(a<b) {
//         let tmp=a;
//         a=b;
//         b=tmp;
//     } // if end
//     return a-b;
// } // diff() end

function diff(a, b) {
    return Math.abs(a-b);
} // diff end


function leap(year) {   // 윤년 평년을 반환하시오
    if(year %4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true;
    } else {
        return false;
    } // if end
} // leap() end
